import type {
	Api,
	Credentials,
	CredentialsOnlyPassword,
	DeploymentDirectTargets,
	DeploymentTargets,
	GlobalSourceFiles,
} from '../types';
import {CONVERT_VARIANT, DEFINITION_SECTION_MAP, VARIANTS} from '../../constant';
import {
	__rootDir,
	exec,
	generateBannerAndFooter,
	generateDefinition,
	prompt,
	readFileContent,
	sortObject,
	trim,
	writeFileContent,
} from './general-util';
import {env, exit, stdout} from 'node:process';
import {existsSync, open} from 'node:fs';
import {ESLint} from 'eslint';
import {MwnError} from 'mwn/build/error';
import {Window} from 'happy-dom';
import alphaSort from 'alpha-sort';
import {apiQueue} from '../deploy';
import chalk from 'chalk';
import {globSync} from 'glob';
import path from 'node:path';
import {setTimeout} from 'node:timers/promises';

/**
 * @private
 */
const deployPages: Record<string, string[]> = {};

/**
 * @private
 */
const eslintOnlyAllowES5 = new ESLint({
	overrideConfig: {
		plugins: ['eslint-plugin-es5'],
		extends: ['plugin:es5/no-es2015', 'plugin:es5/no-es2016'],
		env: {
			browser: true,
		},
		parserOptions: {
			ecmaVersion: 5,
		},
	},
	useEslintrc: false,
});

/**
 * Read `dist/definition.txt`
 *
 * @return {string|undefined} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 * @throws If `dist/definition.txt` is not found
 */
const readDefinition = () => {
	const definitionPath = path.join(__rootDir, 'dist/definition.txt');
	if (!existsSync(definitionPath)) {
		console.log(chalk.red(`Failed to read ${chalk.italic('definition.txt')}, please try build again.`));
		exit(1);
	}

	const fileContent = readFileContent(definitionPath);

	return fileContent;
};

/**
 * Generate deployment targets based on the definitions
 *
 * @return {DeploymentTargets} Deployment targets
 */
const generateTargets = () => {
	const targets: DeploymentTargets = {};

	const definitionText = readDefinition();
	const definitions = definitionText.split('\n').filter((lineContent) => {
		return /^\*\s\S+?\[ResourceLoader[|\]]/.test(lineContent);
	});

	const gadgetNames = definitions.map<string>((definition) => {
		const regExpMatchArray = definition.match(/^\*\s(\S+?)\[/) as [string, string];
		return regExpMatchArray[1];
	});

	for (const gadgetName of gadgetNames.toSorted(
		alphaSort({
			caseInsensitive: true,
			natural: true,
		})
	)) {
		const definition = generateDefinition(gadgetName, false);
		const {description, enable, excludeSites} = definition;

		if (enable === false) {
			continue;
		}

		targets[gadgetName] = {
			excludeSites,
			description:
				trim(description, {
					addNewline: false,
				}) || gadgetName,
			files: [],
		};

		const distFiles = globSync([`${gadgetName}/*.{css,js}`], {
			cwd: path.join(__rootDir, 'dist'),
			withFileTypes: true,
		});
		for (const file of distFiles) {
			const {name: fileName} = file;
			const fileExt: string = path.extname(fileName);
			const fileBaseName: string = path.basename(fileName, fileExt);

			targets[gadgetName].files.push([
				fileName,
				fileBaseName === gadgetName ? fileName : `${gadgetName}-${fileName}`,
			]);
		}
	}

	for (const [gadgetName, {files}] of Object.entries(targets)) {
		if (!files.length) {
			delete targets[gadgetName];
		}
	}

	if (!Object.keys(targets).length) {
		console.log(chalk.yellow('━ No gadget need to deploy'));
		return {};
	}

	return targets;
};

/**
 * Generate direct deployment targets based on the `global.json`
 *
 * @param {Api['site']} site The target site name
 * @return {Promise<DeploymentDirectTargets>} Direct deployment targets
 */
const generateDirectTargets = async (site: Api['site']) => {
	const targets: DeploymentDirectTargets = [];

	interface GlobalJsonObject {
		[key: string]: {
			[K in keyof GlobalSourceFiles]: Omit<GlobalSourceFiles[K], 'contentType'>;
		};
	}

	const globalJsonFilePath = path.join(__rootDir, 'src/global.json');
	if (!existsSync(globalJsonFilePath)) {
		console.log(chalk.white(`━ No ${chalk.bold('global.json')} found`));
		return [];
	}

	const globalJsonText = readFileContent(globalJsonFilePath);

	let globalJsonObject: GlobalJsonObject = {};
	try {
		globalJsonObject = JSON.parse(globalJsonText) as GlobalJsonObject;
	} catch {
		console.log(chalk.red(`✘ Failed to parse ${chalk.bold('global.json')}`));
		return [];
	}

	const currentSiteGlobalTargets = globalJsonObject[site];
	if (!currentSiteGlobalTargets) {
		return [];
	}

	for (const [file, {enable, sourceCode, licenseText}] of Object.entries(currentSiteGlobalTargets)) {
		if (enable === false) {
			continue;
		}

		const contentType = file.endsWith('.css')
			? 'text/css'
			: file.endsWith('.js')
				? 'application/javascript'
				: undefined;

		if (!/^(?!Gadget-).+\.(css|js)$/i.test(file)) {
			if (!contentType) {
				console.log(chalk.yellow(`━ Skip ${chalk.bold(file)}, only allowed to deploy CSS or JavaScript pages`));
				continue;
			}
			console.log(chalk.yellow(`━ Skip invalid target page ${chalk.bold(file)}`));
			continue;
		}

		const {banner, footer} = generateBannerAndFooter({
			licenseText,
			isDirectly: true,
		});
		switch (contentType) {
			case 'application/javascript': {
				const lintResult = await eslintOnlyAllowES5.lintText(sourceCode);
				const formatter = await eslintOnlyAllowES5.loadFormatter('stylish');
				const resultText = await formatter.format(lintResult);
				if (resultText) {
					console.log(resultText);
					console.log(chalk.red(`✘ Failed to lint ${chalk.bold(file)}, skip it`));
					continue;
				}
				targets.push([
					`MediaWiki:${file}`,
					`${banner.js}\n"use strict";\n\n${sourceCode.trim()}\n${footer.js}`,
				]);
				break;
			}
			case 'text/css':
				targets.push([`MediaWiki:${file}`, `${banner.css}\n${sourceCode.trim()}\n${footer.css}`]);
				break;
		}
	}

	if (!targets.length) {
		console.log(chalk.yellow('━ No page need to deploy directly'));
		return [];
	}

	return targets;
};

/**
 * Check the integrity of configuration items
 *
 * @param {Object} config To be completed configuration
 * @param {Object} [object]
 * @param {boolean} [object.isCheckApiUrlOnly] Only check `config[site].apiUrl` is empty or not
 * @param {boolean} [object.isSkipAsk] Run the deploy process directly or not
 * @return {Promise<void>}
 */
async function checkConfig(
	config: {
		[key: string]: Partial<CredentialsOnlyPassword>;
	},
	{
		isCheckApiUrlOnly,
		isSkipAsk,
	}: {
		isCheckApiUrlOnly: true;
		isSkipAsk?: boolean;
	}
): Promise<void>;
async function checkConfig(config: ReturnType<typeof loadConfig>): Promise<void>;
async function checkConfig(
	config: ReturnType<typeof loadConfig>,
	{
		isCheckApiUrlOnly,
		isSkipAsk,
	}: {
		isCheckApiUrlOnly?: boolean;
		isSkipAsk?: boolean;
	}
): Promise<void>;
// eslint-disable-next-line func-style
async function checkConfig(
	config: ReturnType<typeof loadConfig>,
	{
		isCheckApiUrlOnly,
		isSkipAsk,
	}: {
		isCheckApiUrlOnly?: boolean;
		isSkipAsk?: boolean;
	} = {}
): Promise<void> {
	const exitWithError = (reason: string): void => {
		console.log(chalk.red(`✘ ${reason} in ${chalk.italic('credentials.json')}`));
		exit(1);
	};

	if (!Object.keys(config).length) {
		exitWithError('No site found');
	}

	for (const site of Object.keys(config)) {
		if (!site) {
			exitWithError('Site Name should be a non-empty string');
		}
		if (site !== site.trim()) {
			exitWithError('Site name should not start or end with whitespace characters');
		}
	}

	for (const [site, credentials] of Object.entries(config)) {
		if (isCheckApiUrlOnly) {
			if (credentials.apiUrl || isSkipAsk) {
				continue;
			}
			credentials.apiUrl = await prompt(`> [${site}] Enter api url (eg. https://your.wiki/api.php)`);
		} else {
			if (isSkipAsk) {
				continue;
			}
			const _credentials = credentials as Partial<CredentialsOnlyPassword>;
			_credentials.username ||= await prompt(`> [${site}] Enter username}`);
			_credentials.password ||= await prompt(`> [${site}] Enter bot password`, 'password');
		}
	}
}

/**
 * Load credentials.json
 *
 * @return {Object} The result of parsing the credentials.json file
 */
const loadConfig = () => {
	const logError = (reason: string) => {
		console.log(
			chalk.yellow(`${chalk.italic('credentials.json')} is ${reason}, credentials must be provided manually.`)
		);
	};

	let isMissing = false;
	const {CREDENTIALS_JSON} = env;

	const credentialsFilePath = path.join(__rootDir, 'scripts/credentials.json');
	if (!CREDENTIALS_JSON && !existsSync(credentialsFilePath)) {
		isMissing = true;
		logError('missing');
	}

	let credentialsJsonText = CREDENTIALS_JSON || '{}';
	if (!CREDENTIALS_JSON && !isMissing) {
		credentialsJsonText = readFileContent(credentialsFilePath);
	}

	let credentials: {
		[key: string]: Partial<Credentials>;
	} = {};
	try {
		credentials = JSON.parse(credentialsJsonText) as typeof credentials;
	} catch {
		logError('broken');
	}

	const sites = Object.keys(credentials);
	if (!isMissing && (!sites.length || !Object.keys(credentials[sites[0] as string] as Partial<Credentials>).length)) {
		logError('empty');
	}

	return credentials;
};

/**
 * Make editing summary
 *
 * @param {boolean} [isSkipAsk] Run the deploy process directly or not
 * @param {Object} [object] The target file path and the fallback editing summary
 * @return {Promise<string>} The editing summary
 */
async function makeEditSummary(isSkipAsk?: boolean): Promise<string>;
async function makeEditSummary(
	isSkipAsk: boolean,
	{
		filePath,
		fallbackEditSummary,
	}: {
		filePath?: string;
		fallbackEditSummary?: string;
	}
): Promise<string>;
// eslint-disable-next-line func-style
async function makeEditSummary(
	isSkipAsk?: boolean,
	{
		filePath,
		fallbackEditSummary,
	}: {
		filePath?: string;
		fallbackEditSummary?: string;
	} = {}
): Promise<string> {
	const execLog = async (currentPath: string) => {
		try {
			const {stdout: _log} = await exec(`git log --pretty=format:"%H %s" -1 -- ${currentPath}`);
			const log = _log.trim();
			if (!log) {
				return '';
			}
			const logSplit = log.split(' ');
			const {stdout: _sha} = await exec(`git rev-parse --short ${logSplit.shift()}`);
			return `Git commit ${_sha.trim()}: ${logSplit.join(' ')}`;
		} catch {
			return '';
		}
	};
	const getLog = async (currentPath: string) => {
		if (!existsSync(currentPath)) {
			return '';
		}
		const log: string = await execLog(currentPath);
		if (!log) {
			return '';
		}
		return log;
	};

	if (filePath && fallbackEditSummary !== undefined) {
		if (!/^Git\scommit\s\S+?:\s/.test(fallbackEditSummary)) {
			return fallbackEditSummary;
		}

		const log: string = await getLog(filePath);
		if (!log) {
			return fallbackEditSummary;
		}

		return log;
	}

	let sha = '';
	let summary = '';
	try {
		const {stdout: _sha} = await exec('git rev-parse --short HEAD');
		sha = _sha.trim();
		const {stdout: _summary} = await exec('git log --pretty=format:"%s" HEAD -1');
		summary = _summary.trim();
	} catch {}

	const customSummary = isSkipAsk ? '' : await prompt('> Custom editing summary message (optional):');
	const customSummaryTrimmed = trim(customSummary, {
		addNewline: false,
	});
	// If trimmed input is an empty string, use the message from the last git commit
	const editSummary = customSummaryTrimmed || `${sha ? `Git commit ${sha}: ` : ''}${summary}`;
	console.log(
		chalk.white(`${customSummaryTrimmed ? 'Editing' : 'Fallback editing'} summary is: ${chalk.bold(editSummary)}`)
	);

	if (!isSkipAsk) {
		await prompt('> Confirm to continue deployment?', 'confirm', true);
	}

	console.log(chalk.yellow('--- deployment will continue in three seconds ---'));
	await setTimeout(3 * 1000);

	return editSummary;
}

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The title of this page
 * @param {string} content The content of this page
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by the api instance
 */
const convertVariant = (pageTitle: string, content: string, api: Api, editSummary: string) => {
	const {apiInstance, site} = api;

	/**
	 * @see {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
	 * @license CC-BY-SA-4.0
	 */
	content = content
		.replace(/[\s#&*_[\]{}|:'<>]/gim, (substring) => {
			return `&#${substring.codePointAt(0)};`;
		})
		.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, '$1-{$2}-$3')
		.replace(/-&#123;(.+?)&#125;-/g, (substring) => {
			return substring
				.replace('-&#123;', '-{')
				.replace('&#125;-', '}-')
				.replace(/&#124;/g, '|')
				.replace(/&#32;/g, ' ')
				.replace(/&#58;/g, ':')
				.replace(/&#61;/g, '=')
				.replace(/&#62;/g, '>');
		});

	const convert = async (variant: string) => {
		const parsedHtml = await apiInstance.parseWikitext(
			`{{NoteTA|G1=IT|G2=MediaWiki}}<div class="convertVariant">${content}</div>`,
			{
				action: 'parse',
				prop: ['text'],
				uselang: variant,
			}
		);

		const {document} = new Window({
			url: apiInstance.options.apiUrl as string,
		});
		document.body.innerHTML = `<div>${parsedHtml}</div>`;
		const convertedDescription = document.querySelector('.convertVariant')!.textContent.replace(/-{}-/g, '');

		const convertPageTitle = `${pageTitle}/${variant}`;

		deployPages[site] ??= [];
		deployPages[site].push(convertPageTitle);

		const {nochange} = await apiInstance.save(convertPageTitle, convertedDescription, editSummary);

		return Boolean(nochange);
	};

	apiQueue
		.addAll(
			VARIANTS.map((variant) => {
				return async () => {
					return await convert(variant);
				};
			})
		)
		.then((noChanges) => {
			const isNoChange = noChanges.every(Boolean);
			if (isNoChange) {
				console.log(chalk.yellow(`━ No change converting ${chalk.bold(pageTitle)}`));
			} else {
				console.log(chalk.green(`✔ Successfully converted ${chalk.bold(pageTitle)}`));
			}
		})
		.catch((error) => {
			console.log(chalk.red(`✘ Failed to convert ${chalk.bold(pageTitle)}`));
			console.error(error);
		});
};

/**
 * Save gadget definition
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {string[]} enabledGadgets The enabled gadgets
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by this api instance
 * @return {string} The `MediaWiki:Gadgets-definition` content of the current site
 */
const saveDefinition = (definitionText: string, enabledGadgets: string[], api: Api, editSummary: string) => {
	const {apiInstance, site} = api;
	const pageTitle = 'MediaWiki:Gadgets-definition';

	deployPages[site] ??= [];
	deployPages[site].push(pageTitle);

	definitionText = definitionText
		.split('\n')
		.filter((lineContent) => {
			const regex = /^\*\s(\S+?)\[ResourceLoader[|\]]/;
			const regExpMatchArray = lineContent.match(regex);
			if (regExpMatchArray && regExpMatchArray[1]) {
				return enabledGadgets.includes(regExpMatchArray[1]);
			}
			return true;
		})
		.join('\n');

	const removeEmptySection = (string: string) => {
		const firstSectionIndex = string.search(/[=]=[\S\s]+?==/);
		if (firstSectionIndex === -1) {
			return string;
		}

		const keepString = string.slice(0, Math.max(0, firstSectionIndex));

		string = string.slice(Math.max(0, firstSectionIndex));
		string = string.replace(/\n{3,}/g, '\n\n');

		const blocks = string.split(/([=]=[\S\s]+?==\n)/);
		const newBlocks = [];
		for (let i = 0; i < blocks.length; i++) {
			const block = blocks[i] as string;
			if (block.startsWith('==') && blocks[i + 1] && !(blocks[i + 1] as string).startsWith('*')) {
				i++;
				continue;
			}
			newBlocks.push(block);
		}

		return keepString + newBlocks.join('');
	};
	definitionText = removeEmptySection(definitionText);

	definitionText = trim(definitionText);

	void apiQueue.add(async () => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, definitionText, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold('gadget definitions')}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold('gadget definitions')}`));
			}
		} catch (error) {
			console.log(chalk.red(`✘ Failed to save ${chalk.bold('gadget definitions')}`));
			console.error(error);
		}
	});

	return definitionText;
};

/**
 * Save gadget definition section pages
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by this api instance
 */
const saveDefinitionSectionPage = (definitionText: string, api: Api, editSummary: string) => {
	const {apiInstance, site} = api;

	const sections = (definitionText.match(/^==([\S\s]+?)==$/gm) as RegExpMatchArray).map<string>((sectionHeader) => {
		return sectionHeader.replace(/[=]=/g, '').trim();
	});
	const pageTitles = sections.map<string>((section) => {
		return `MediaWiki:Gadget-section-${section}`;
	});

	for (const [index, section] of sections.entries()) {
		const sectionText = DEFINITION_SECTION_MAP[section as keyof typeof DEFINITION_SECTION_MAP] || section;

		const pageTitle = pageTitles[index] as string;

		deployPages[site] ??= [];
		deployPages[site].push(pageTitle);

		void apiQueue.add(async () => {
			try {
				const {nochange} = await apiInstance.save(pageTitle, sectionText, editSummary);
				if (nochange) {
					console.log(chalk.yellow(`━ No change saving ${chalk.bold(pageTitle)}`));
				} else {
					console.log(chalk.green(`✔ Successfully saved ${chalk.bold(pageTitle)}`));
				}
			} catch (error) {
				console.log(chalk.red(`✘ Failed to save ${chalk.bold(pageTitle)}`));
				console.error(error);
			}
		});

		if (CONVERT_VARIANT) {
			convertVariant(pageTitle, sectionText, api, editSummary);
		}
	}
};

/**
 * Save gadget description
 *
 * @param {string} gadgetName The gadget name
 * @param {string} description The definition of this gadget
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by the api instance
 */
const saveDescription = (gadgetName: string, description: string, api: Api, editSummary: string) => {
	const {apiInstance, site} = api;
	const pageTitle = `MediaWiki:Gadget-${gadgetName}`;

	deployPages[site] ??= [];
	deployPages[site].push(pageTitle);

	void apiQueue.add(async () => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, description, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold(`${gadgetName} description`)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold(`${gadgetName} description`)}`));
			}
		} catch (error) {
			console.log(chalk.red(`✘ Failed to save ${chalk.bold(`${gadgetName} description`)}`));
			console.error(error);
		}
	});

	if (CONVERT_VARIANT) {
		convertVariant(pageTitle, description, api, editSummary);
	}
};

/**
 * Save gadget file
 *
 * @param {string} gadgetName The gadget name
 * @param {string} fileName The target file name
 * @param {string} fileContent The target file content
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by the api instance
 */
const saveFiles = (gadgetName: string, fileName: string, fileContent: string, api: Api, editSummary: string) => {
	const {apiInstance, site} = api;
	const pageTitle = `MediaWiki:Gadget-${fileName}`;

	deployPages[site] ??= [];
	deployPages[site].push(pageTitle);

	void apiQueue.add(async () => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, fileContent, editSummary);
			if (nochange) {
				console.log(
					chalk.yellow(`━ No change saving ${chalk.underline(fileName)} to ${chalk.bold(gadgetName)}`)
				);
			} else {
				console.log(
					chalk.green(`✔ Successfully saved ${chalk.underline(fileName)} to ${chalk.bold(gadgetName)}`)
				);
			}
		} catch (error) {
			console.log(chalk.red(`✘ Failed to save ${chalk.underline(fileName)} to ${chalk.bold(gadgetName)}`));
			console.error(error);
		}
	});
};

/**
 * Save page directly
 *
 * @param {string} pageTitle The target page title
 * @param {string} pageContent The target page content
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by the api instance
 */
const savePages = (pageTitle: string, pageContent: string, api: Api, editSummary: string) => {
	const {apiInstance, site} = api;

	deployPages[site] ??= [];
	deployPages[site].push(pageTitle);

	void apiQueue.add(async () => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, pageContent, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.underline(pageTitle)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.underline(pageTitle)}`));
			}
		} catch (error) {
			console.log(chalk.red(`✘ Failed to save ${chalk.underline(pageTitle)}`));
			console.error(error);
		}
	});
};

/**
 * Delete unused pages from the target MediaWiki site
 *
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by this api instance
 * @param {boolean} [isSkipAsk] Run the deploy process directly or not
 */
const deleteUnusedPages = async (api: Api, editSummary: string, isSkipAsk?: boolean) => {
	const {apiInstance, site} = api;
	const storeFilePath = path.join(__rootDir, 'dist/store.txt');

	let lastDeployPages: typeof deployPages = {};
	try {
		const fileContent = readFileContent(storeFilePath);
		lastDeployPages = JSON.parse(fileContent) as typeof deployPages;
	} catch {}

	const fullDeployPages = sortObject(deployPages, true);
	for (const [siteName, pages] of Object.entries(lastDeployPages)) {
		if (fullDeployPages[siteName]) {
			continue;
		}
		fullDeployPages[siteName] = pages.toSorted(
			alphaSort({
				caseInsensitive: true,
				natural: true,
			})
		);
	}

	open(storeFilePath, 'w', (err, fd) => {
		if (err) {
			console.error(err);
			return;
		}

		const fullDeployPagesSorted = sortObject(fullDeployPages);
		writeFileContent(fd, `${JSON.stringify(fullDeployPagesSorted, null, '\t')}\n`);
	});

	const currentSiteLastDeployPages = lastDeployPages[site] ?? [];
	if (!currentSiteLastDeployPages.length) {
		console.log(chalk.yellow('━ No deployment log found'));
		return;
	}

	const currentSiteDeployPages = fullDeployPages[site] ?? [];
	const needToDeletePages = currentSiteLastDeployPages
		.toSorted(
			alphaSort({
				caseInsensitive: true,
				natural: true,
			})
		)
		.filter((page) => {
			return !currentSiteDeployPages.includes(page);
		});
	if (!needToDeletePages.length) {
		console.log(chalk.yellow('━ No page need to delete'));
		return;
	}

	stdout.write(`The following pages will be deleted:\n${needToDeletePages.join('\n')}\n`);

	if (!isSkipAsk) {
		await prompt('> Confirm to continue deleting?', 'confirm', true);
	}

	console.log(chalk.yellow(`--- [${chalk.bold(site)}] deleting will continue in three seconds ---`));
	await setTimeout(3 * 1000);

	const deletePage = async (pageTitle: string) => {
		try {
			await apiInstance.delete(pageTitle, editSummary);
			console.log(chalk.green(`✔ Successfully deleted ${chalk.bold(pageTitle)}`));
		} catch (error) {
			if (error instanceof MwnError && error.code === 'missingtitle') {
				console.log(chalk.yellow(`━ Page ${chalk.bold(pageTitle)} no need to delete`));
			} else {
				console.log(chalk.red(`✘ Failed to delete ${chalk.bold(pageTitle)}`));
				console.error(error);
			}
		}
	};

	void apiQueue.addAll(
		needToDeletePages.map((page) => {
			return async (): Promise<void> => {
				await deletePage(page);
			};
		})
	);
};

export {
	readDefinition,
	generateTargets,
	generateDirectTargets,
	checkConfig,
	loadConfig,
	makeEditSummary,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	savePages,
	deleteUnusedPages,
};
