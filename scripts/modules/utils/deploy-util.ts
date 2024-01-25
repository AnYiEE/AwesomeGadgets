import type {
	Api,
	Credentials,
	CredentialsOnlyPassword,
	DefaultDefinition,
	DeploymentDirectTargets,
	DeploymentTargets,
	GlobalSourceFiles,
} from '../types';
import {CONVERT_VARIANT, DEFINITION_SECTION_MAP} from '../../constant';
import {type Path, globSync} from 'glob';
import {
	__rootDir,
	exec,
	generateDefinition,
	processSourceCode,
	prompt,
	readFileContent,
	sortObject,
	trim,
	writeFileContent,
} from './general-util';
import {basename, extname, join} from 'node:path';
import {existsSync, open} from 'node:fs';
import {exit, stdout} from 'node:process';
import {MwnError} from 'mwn/build/error';
import {Window} from 'happy-dom';
import alphaSort from 'alpha-sort';
import {apiQueue} from '../deploy';
import chalk from 'chalk';
import {setTimeout} from 'node:timers/promises';

/**
 * @private
 */
const deployPages: Record<string, string[]> = {};

/**
 * Read `dist/definition.txt`
 *
 * @return {string|undefined} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 * @throws If `dist/definition.txt` is not found
 */
const readDefinition = (): string => {
	const definitionPath: string = join(__rootDir, 'dist/definition.txt');
	if (!existsSync(definitionPath)) {
		console.log(chalk.red(`Failed to read ${chalk.italic('definition.txt')}, please try build again.`));
		exit(1);
	}

	const fileContent: string = readFileContent(definitionPath);

	return fileContent;
};

/**
 * Generate deployment targets based on the definitions
 *
 * @return {DeploymentTargets} Deployment targets
 */
const generateTargets = (): DeploymentTargets => {
	const targets: DeploymentTargets = {};

	const definitionText: string = readDefinition();
	const definitions: string[] = definitionText.split('\n').filter((lineContent: string): boolean => {
		return /^\*\s\S+?\[ResourceLoader[|\]]/.test(lineContent);
	});

	const gadgetNames: string[] = definitions.map((definition: string): string => {
		const regExpMatchArray = definition.match(/^\*\s(\S+?)\[/) as [string, string];
		return regExpMatchArray[1];
	});

	type Target = DeploymentTargets[keyof DeploymentTargets];

	for (const gadgetName of gadgetNames.toSorted(
		alphaSort({
			caseInsensitive: true,
			natural: true,
		})
	)) {
		const definition: DefaultDefinition = generateDefinition(gadgetName, false);
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

		const distFiles: Path[] = globSync([`${gadgetName}/*.{css,js}`], {
			cwd: join(__rootDir, 'dist'),
			withFileTypes: true,
		});
		for (const file of distFiles) {
			const {name: fileName} = file;
			const fileExt: string = extname(fileName);
			const fileBaseName: string = basename(fileName, fileExt);

			(targets[gadgetName] as Target).files.push([
				fileName,
				fileBaseName === gadgetName ? fileName : `${gadgetName}-${fileName}`,
			]);
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
 * @return {DeploymentDirectTargets} Direct deployment targets
 */
const generateDirectTargets = (site: Api['site']): DeploymentDirectTargets => {
	const targets: DeploymentDirectTargets = [];

	interface GlobalJsonObject {
		[key: string]: {
			[K in keyof GlobalSourceFiles]: Omit<GlobalSourceFiles[K], 'contentType'>;
		};
	}

	const globalJsonFilePath: string = join(__rootDir, 'src/global.json');
	if (!existsSync(globalJsonFilePath)) {
		console.log(chalk.white(`━ No ${chalk.bold('global.json')} found`));
		return [];
	}

	const globalJsonText: string = readFileContent(globalJsonFilePath);

	let globalJsonObject: GlobalJsonObject = {};
	try {
		globalJsonObject = JSON.parse(globalJsonText) as GlobalJsonObject;
	} catch {
		console.log(chalk.red(`✘ Failed to parse ${chalk.bold('global.json')}`));
		return [];
	}

	const currentSiteGlobalTargets = globalJsonObject[site] as GlobalJsonObject[keyof GlobalJsonObject];
	for (const [file, {enable, sourceCode, licenseText}] of Object.entries(currentSiteGlobalTargets)) {
		if (enable === false) {
			continue;
		}

		const contentType: GlobalSourceFiles[keyof GlobalSourceFiles]['contentType'] = file.endsWith('.css')
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

		targets.push([
			`MediaWiki:${file}`,
			processSourceCode(sourceCode, {
				contentType,
				licenseText,
				isDirectly: true,
			}),
		]);
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
 * @param {boolean} [isCheckApiUrlOnly=false] Only check `config[site].apiUrl` is empty or not
 * @return {Promise<void>}
 */
async function checkConfig(
	config: {
		[key: string]: Partial<CredentialsOnlyPassword>;
	},
	isCheckApiUrlOnly: true
): Promise<void>;
async function checkConfig(config: ReturnType<typeof loadConfig>, isCheckApiUrlOnly?: boolean): Promise<void>;
// eslint-disable-next-line func-style
async function checkConfig(config: ReturnType<typeof loadConfig>, isCheckApiUrlOnly: boolean = false): Promise<void> {
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
		if (/^\s|\s$/.test(site)) {
			exitWithError('Site name should not start or end with whitespace characters');
		}
	}

	for (const [site, credentials] of Object.entries(config)) {
		if (isCheckApiUrlOnly) {
			if (!credentials.apiUrl) {
				credentials.apiUrl = await prompt(`> [${site}] Enter api url (eg. https://your.wiki/api.php)`);
			}
		} else {
			const _credentials = credentials as Partial<CredentialsOnlyPassword>;
			if (!_credentials.username) {
				_credentials.username = await prompt(`> [${site}] Enter username}`);
			}
			if (!_credentials.password) {
				_credentials.password = await prompt(`> [${site}] Enter bot password`, 'password');
			}
		}
	}
}

/**
 * Load credentials.json
 *
 * @return {Object} The result of parsing the credentials.json file
 */
const loadConfig = (): typeof credentials => {
	const logError = (reason: string): void => {
		console.log(
			chalk.yellow(`${chalk.italic('credentials.json')} is ${reason}, credentials must be provided manually.`)
		);
	};

	let isMissing: boolean = false;

	const credentialsFilePath: string = join(__rootDir, 'scripts/credentials.json');
	if (!existsSync(credentialsFilePath)) {
		isMissing = true;
		logError('missing');
	}

	let credentialsJsonText: string = '{}';
	if (!isMissing) {
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

	if (
		!isMissing &&
		(!Object.keys(credentials).length ||
			!Object.keys(credentials[Object.keys(credentials)[0] as string] as Partial<Credentials>).length)
	) {
		logError('empty');
	}

	return credentials;
};

/**
 * Make editing summary
 *
 * @param {string} [filePath] The target file path
 * @param {string} [fallbackEditSummary] The fallback editing summary
 * @return {Promise<string>} The editing summary
 */
async function makeEditSummary(): Promise<string>;
async function makeEditSummary(filePath: string, fallbackEditSummary: string): Promise<string>;
// eslint-disable-next-line func-style
async function makeEditSummary(filePath?: string, fallbackEditSummary?: string): Promise<string> {
	const execLog = async (path: string): Promise<string> => {
		try {
			const {stdout: _log} = await exec(`git log --pretty=format:"%H %s" -1 -- ${path}`);
			const log: string = _log.trim();
			if (!log) {
				return '';
			}
			const logSplit: string[] = log.split(' ');
			const {stdout: _sha} = await exec(`git rev-parse --short ${logSplit.shift()}`);
			return `Git commit ${_sha.trim()}: ${logSplit.join(' ')}`;
		} catch {
			return '';
		}
	};
	const getLog = async (path: string): Promise<string> => {
		if (!existsSync(path)) {
			return '';
		}
		const log: string = await execLog(path);
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

	let sha: string = '';
	let summary: string = '';
	try {
		const {stdout: _sha} = await exec('git rev-parse --short HEAD');
		sha = _sha.trim();
		const {stdout: _summary} = await exec('git log --pretty=format:"%s" HEAD -1');
		summary = _summary.trim();
	} catch {}

	const customSummary: string = await prompt('> Custom editing summary message (optional):');
	const customSummaryTrimmed: string = trim(customSummary, {
		addNewline: false,
	});
	// If trimmed input is an empty string, use the message from the last git commit
	const editSummary: string = customSummaryTrimmed || `${sha ? `Git commit ${sha}: ` : ''}${summary}`;
	console.log(
		chalk.white(`${customSummaryTrimmed ? 'Editing' : 'Fallback editing'} summary is: ${chalk.bold(editSummary)}`)
	);

	await prompt('> Confirm to continue deployment?', 'confirm', true);

	console.log(chalk.yellow('--- deployment will continue in three seconds ---'));
	await setTimeout(3 * 1000);

	return editSummary;
}

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {string} content The content of this page
 * @param {Api} api The api instance and the site name
 * @param {string} editSummary The editing summary used by the api instance
 */
const convertVariant = (pageTitle: string, content: string, api: Api, editSummary: string): void => {
	const {apiInstance, site} = api;

	/**
	 * @see {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
	 * @license CC-BY-SA-4.0
	 */
	content = content
		.replace(/[\s#&*_[\]{}|:'<>]/gim, (substring: string): string => {
			return `&#${substring.codePointAt(0)};`;
		})
		.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, '$1-{$2}-$3')
		.replace(/-&#123;(.+?)&#125;-/g, (substring: string): string => {
			return substring
				.replace('-&#123;', '-{')
				.replace('&#125;-', '}-')
				.replace(/&#124;/g, '|')
				.replace(/&#32;/g, ' ')
				.replace(/&#58;/g, ':')
				.replace(/&#61;/g, '=')
				.replace(/&#62;/g, '>');
		});

	const convert = async (variant: string): Promise<boolean> => {
		const parsedHtml: string = await apiInstance.parseWikitext(
			`{{NoteTA|G1=IT|G2=MediaWiki}}<div class="convertVariant">${content}</div>`,
			{
				prop: ['text'],
				uselang: variant,
			}
		);

		const {document} = new Window({
			url: apiInstance.options.apiUrl as string,
		});
		document.body.innerHTML = `<div>${parsedHtml}</div>`;
		const convertedDescription: string = document.querySelector('.convertVariant').textContent.replace(/-{}-/g, '');

		const convertPageTitle: string = `${pageTitle}/${variant}`;

		deployPages[site] ??= [];
		deployPages[site]!.push(convertPageTitle);

		const {nochange} = await apiInstance.save(convertPageTitle, convertedDescription, editSummary);

		return !!nochange;
	};

	const taskQueue: (() => Promise<boolean>)[] = [];
	for (const variant of ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']) {
		taskQueue.push(async (): Promise<boolean> => {
			return await convert(variant);
		});
	}

	apiQueue
		.addAll(taskQueue)
		.then((nochanges: boolean[]): void => {
			const isNoChange: boolean = nochanges.every(Boolean);
			if (isNoChange) {
				console.log(chalk.yellow(`━ No change converting ${chalk.bold(pageTitle)}`));
			} else {
				console.log(chalk.green(`✔ Successfully converted ${chalk.bold(pageTitle)}`));
			}
		})
		.catch((error: unknown): void => {
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
const saveDefinition = (definitionText: string, enabledGadgets: string[], api: Api, editSummary: string): string => {
	const {apiInstance, site} = api;
	const pageTitle: string = 'MediaWiki:Gadgets-definition';

	deployPages[site] ??= [];
	deployPages[site]!.push(pageTitle);

	definitionText = definitionText
		.split('\n')
		.filter((lineContent: string): boolean => {
			const regex: RegExp = /^\*\s(\S+?)\[ResourceLoader[|\]]/;
			const regExpMatchArray: RegExpMatchArray | null = lineContent.match(regex);
			if (regExpMatchArray && regExpMatchArray[1]) {
				return enabledGadgets.includes(regExpMatchArray[1]);
			}
			return true;
		})
		.join('\n');

	const removeEmptySection = (string: string): string => {
		const firstSectionIndex: number = string.search(/[=]=[\S\s]+?==/);
		if (firstSectionIndex === -1) {
			return string;
		}

		const keepString: string = string.slice(0, Math.max(0, firstSectionIndex));

		string = string.slice(Math.max(0, firstSectionIndex));
		string = string.replace(/\n{3,}/g, '\n\n');

		const blocks: string[] = string.split(/([=]=[\S\s]+?==\n)/);
		const newBlocks: string[] = [];
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

	void apiQueue.add(async (): Promise<void> => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, definitionText, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold('gadget definitions')}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold('gadget definitions')}`));
			}
		} catch (error: unknown) {
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
const saveDefinitionSectionPage = (definitionText: string, api: Api, editSummary: string): void => {
	const {apiInstance, site} = api;

	const sections: string[] = (definitionText.match(/^==([\S\s]+?)==$/gm) as RegExpMatchArray).map(
		(sectionHeader: string): string => {
			return sectionHeader.replace(/[=]=/g, '').trim();
		}
	);
	const pageTitles: string[] = sections.map((section: string): string => {
		return `MediaWiki:Gadget-section-${section}`;
	});

	for (const [index, section] of sections.entries()) {
		const sectionText: string = DEFINITION_SECTION_MAP[section as keyof typeof DEFINITION_SECTION_MAP] || section;

		const pageTitle: string = pageTitles[index] as string;

		deployPages[site] ??= [];
		deployPages[site]!.push(pageTitle);

		void apiQueue.add(async (): Promise<void> => {
			try {
				const {nochange} = await apiInstance.save(pageTitle, sectionText, editSummary);
				if (nochange) {
					console.log(chalk.yellow(`━ No change saving ${chalk.bold(pageTitle)}`));
				} else {
					console.log(chalk.green(`✔ Successfully saved ${chalk.bold(pageTitle)}`));
				}
			} catch (error: unknown) {
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
const saveDescription = (gadgetName: string, description: string, api: Api, editSummary: string): void => {
	const {apiInstance, site} = api;
	const pageTitle: string = `MediaWiki:Gadget-${gadgetName}`;

	deployPages[site] ??= [];
	deployPages[site]!.push(pageTitle);

	void apiQueue.add(async (): Promise<void> => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, description, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold(`${gadgetName} description`)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold(`${gadgetName} description`)}`));
			}
		} catch (error: unknown) {
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
const saveFiles = (gadgetName: string, fileName: string, fileContent: string, api: Api, editSummary: string): void => {
	const {apiInstance, site} = api;
	const pageTitle: string = `MediaWiki:Gadget-${fileName}`;

	deployPages[site] ??= [];
	deployPages[site]!.push(pageTitle);

	void apiQueue.add(async (): Promise<void> => {
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
		} catch (error: unknown) {
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
const savePages = (pageTitle: string, pageContent: string, api: Api, editSummary: string): void => {
	const {apiInstance, site} = api;

	deployPages[site] ??= [];
	deployPages[site]!.push(pageTitle);

	void apiQueue.add(async (): Promise<void> => {
		try {
			const {nochange} = await apiInstance.save(pageTitle, pageContent, editSummary);
			if (nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.underline(pageTitle)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.underline(pageTitle)}`));
			}
		} catch (error: unknown) {
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
 */
const deleteUnusedPages = async (api: Api, editSummary: string): Promise<void> => {
	const {apiInstance, site} = api;
	const storeFilePath: string = join(__rootDir, 'dist/store.txt');

	let lastDeployPages: typeof deployPages = {};
	try {
		const fileContent: string = readFileContent(storeFilePath);
		lastDeployPages = JSON.parse(fileContent) as typeof deployPages;
	} catch {}

	const fullDeployPages: typeof deployPages = sortObject(deployPages, true);
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

	open(storeFilePath, 'w', (err: NodeJS.ErrnoException | null, fd: number): void => {
		if (err) {
			console.error(err);
			return;
		}

		const fullDeployPagesSorted: typeof deployPages = sortObject(fullDeployPages);
		writeFileContent(fd, `${JSON.stringify(fullDeployPagesSorted, null, '\t')}\n`);
	});

	const currentSiteLastDeployPages: string[] = lastDeployPages[site] ?? [];
	if (!currentSiteLastDeployPages.length) {
		console.log(chalk.yellow('━ No deployment log found'));
		return;
	}

	const currentSiteDeloyPages: string[] = fullDeployPages[site] ?? [];
	const needToDeletePages: string[] = currentSiteLastDeployPages
		.toSorted(
			alphaSort({
				caseInsensitive: true,
				natural: true,
			})
		)
		.filter((page: string): boolean => {
			return !currentSiteDeloyPages.includes(page);
		});
	if (!needToDeletePages.length) {
		console.log(chalk.yellow('━ No page need to delete'));
		return;
	}

	stdout.write(`The following pages will be deleted:\n${needToDeletePages.join('\n')}\n`);
	await prompt('> Confirm to continue deleting?', 'confirm', true);

	console.log(chalk.yellow(`--- [${chalk.bold(site)}] deleting will continue in three seconds ---`));
	await setTimeout(3 * 1000);

	const deletePage = async (pageTitle: string): Promise<void> => {
		try {
			await apiInstance.delete(pageTitle, editSummary);
			console.log(chalk.green(`✔ Successfully deleted ${chalk.bold(pageTitle)}`));
		} catch (error: unknown) {
			if (error instanceof MwnError && error.code === 'missingtitle') {
				console.log(chalk.yellow(`━ Page ${chalk.bold(pageTitle)} no need to delete`));
			} else {
				console.log(chalk.red(`✘ Failed to delete ${chalk.bold(pageTitle)}`));
				console.error(error);
			}
		}
	};

	for (const page of needToDeletePages) {
		void apiQueue.add(async (): Promise<void> => {
			await deletePage(page);
		});
	}
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
