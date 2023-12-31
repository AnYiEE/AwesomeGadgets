import type {ApiQueue, Credentials, CredentialsOnlyPassword, DeploymentTargets} from '../types';
import {CONVERT_VARIANT, DEFINITION_SECTION_MAP} from '../../constant';
import {closeSync, existsSync, fdatasyncSync, open, readFileSync, writeFileSync} from 'node:fs';
import {getRootDir, prompt} from './general-util';
import {type ApiEditResponse} from 'mwn';
import {MwnError} from 'mwn/build/error';
import {Window} from 'happy-dom';
import chalk from 'chalk';
import {execSync} from 'node:child_process';
import {join} from 'node:path';
import {setTimeout} from 'node:timers/promises';

/**
 * @private
 */
const rootDir: string = getRootDir();

/**
 * @private
 */
const deployPages: string[] = [];

/**
 * Generate deployment targets based on the definitions
 *
 * @param {string[]} definitions Array of gadget definition (in the format of MediaWiki:Gadgets-definition item)
 * @return {DeploymentTargets} Deployment targets
 */
const generateTargets = (definitions: string[]): DeploymentTargets => {
	const targets: DeploymentTargets = {};

	type Target = DeploymentTargets[keyof DeploymentTargets];

	for (const definition of definitions) {
		const [_, name, files, description] = definition.match(/^\*\s(\S+?)\[\S+?]\|(\S+?)☀\S*?☀(.+?)$/) as [
			string,
			string,
			string,
			string,
		];

		targets[name] = {} as Target;
		(targets[name] as Target).files = files
			.split('|')
			.filter((file: string): boolean => {
				return !!file;
			})
			.map((file: string): string => {
				return file.replace(/\S+?❄/, '');
			});
		(targets[name] as Target).description = description || name;
	}

	return targets;
};

/**
 * Check the integrity of configuration items
 *
 * @param {Record<string, unknown>} config To be completed configuration
 * @param {boolean} [checkApiUrlOnly=false] Only check `config.apiUrl` is empty or not
 * @return {Promise<CredentialsOnlyPassword>} Completed configuration
 */
const checkConfig = async (
	config: Partial<CredentialsOnlyPassword>,
	checkApiUrlOnly: boolean = false
): Promise<CredentialsOnlyPassword> => {
	if (checkApiUrlOnly) {
		if (!config.apiUrl) {
			config.apiUrl = await prompt('> Enter api url (eg. https://your.wiki/api.php)');
		}
	} else {
		if (!config.username) {
			config.username = await prompt('> Enter username');
		}
		if (!config.password) {
			config.password = await prompt('> Enter bot password', 'password');
		}
	}

	return config as CredentialsOnlyPassword;
};

/**
 * Load credentials.json
 *
 * @return {Partial<Credentials>} The result of parsing the credentials.json file
 */
const loadConfig = (): Partial<Credentials> => {
	const logError = (reason: string): void => {
		console.log(
			chalk.yellow(`${chalk.italic('credentials.json')} is ${reason}, credentials must be provided manually.`)
		);
	};

	let credentialsJsonText: string = '{}';
	try {
		const credentialsFilePath: string = join(rootDir, 'scripts/credentials.json');
		const fileBuffer: Buffer = readFileSync(credentialsFilePath);
		credentialsJsonText = fileBuffer.toString();
	} catch {
		logError('missing');
	}

	let credentials: Partial<Credentials> = {};
	try {
		credentials = JSON.parse(credentialsJsonText) as Partial<Credentials>;
	} catch {
		logError('broken');
	}

	return credentials;
};

/**
 * Make editing summary
 *
 * @param {string} [name] The gadget name
 * @param {string} [fallbackEditSummary] The fallback editing summary
 * @param {boolean} [isStyle=false] Whether the file is a style sheet
 * @return {Promise<string>} The editing summary
 */
const makeEditSummary = async (
	name?: string,
	fallbackEditSummary?: string,
	isStyle: boolean = false
): Promise<string> => {
	const execLog = (filePath: string): string => {
		try {
			const log: string = execSync(`git log --pretty=format:"%H %s" -1 -- ${filePath}`).toString('utf8').trim();
			if (!log) {
				return '';
			}
			const logSplit: string[] = log.split(' ');
			return `Git commit ${execSync(`git rev-parse --short ${logSplit.shift()}`)
				.toString('utf8')
				.trim()}: ${logSplit.join(' ')}`;
		} catch {
			return '';
		}
	};
	const getLog = (gadgetName: string, fileName: string): string => {
		const filePath: string = join(rootDir, `src/${gadgetName}/${fileName}`);
		if (!existsSync(filePath)) {
			return '';
		}
		const log: string = execLog(filePath);
		if (!log) {
			return '';
		}
		return log;
	};

	if (name && fallbackEditSummary) {
		if (!/^Git\scommit\S+?:\s/.test(fallbackEditSummary)) {
			return fallbackEditSummary;
		}

		const fileNames: string[] = [name, 'index'];
		const fileExts: string[] = isStyle ? ['.less', '.css'] : ['.ts', '.js'];
		const files: string[] = [];
		for (const fileName of fileNames) {
			for (const fileExt of fileExts) {
				files.push(fileName + fileExt);
			}
		}

		for (const file of files) {
			const log: string = getLog(name, file);
			if (!log) {
				continue;
			}
			return log;
		}
	}

	let sha: string = '';
	let summary: string = '';
	try {
		sha = execSync('git rev-parse --short HEAD').toString('utf8').trim();
		summary = execSync('git log --pretty=format:"%s" HEAD -1').toString('utf8').trim();
	} catch {}

	const customSummary: string = await prompt('> Custom editing summary message (optional):');
	const editSummary: string = customSummary.trim() ? customSummary : `${sha ? `Git commit ${sha}: ` : ''}${summary}`;
	console.log(chalk.white(`Editing summary is: ${chalk.bold(editSummary)}`));

	await prompt('> Confirm to continue deployment?', 'confirm', true);

	console.log(chalk.yellow('--- deployment will continue in three seconds ---'));
	await setTimeout(3 * 1000);

	return editSummary;
};

/**
 * Read `dist/definition.txt`
 *
 * @return {string} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const readDefinition = (): string => {
	const definitionPath: string = join(rootDir, 'dist/definition.txt');
	const fileBuffer: Buffer = readFileSync(definitionPath);

	return fileBuffer.toString();
};

/**
 * Read file text
 *
 * @param {string} name The gadget name
 * @param {string} file The file name used by this gadget
 * @return {string} The file content
 */
const readFileText = (name: string, file: string): string => {
	const filePath: string = join(rootDir, `dist/${name}/${file}`);
	const fileBuffer: Buffer = readFileSync(filePath);

	return fileBuffer.toString();
};

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {string} content The content of this page
 * @param {ApiQueue} object The api instance and the deployment queue
 * @param {string} editSummary The editing summary used by the api instance
 */
const convertVariant = (pageTitle: string, content: string, {api, queue}: ApiQueue, editSummary: string): void => {
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
		const parsedHtml: string = await api.parseWikitext(
			`{{NoteTA|G1=IT|G2=MediaWiki}}<div class="convertVariant">${content}</div>`,
			{
				prop: ['text'],
				uselang: variant,
			}
		);

		const window: Window = new Window({
			url: api.options.apiUrl as string,
		});
		const {document} = window;
		document.body.innerHTML = `<div>${parsedHtml}</div>`;
		const convertedDescription: string = document.querySelector('.convertVariant').textContent.replace(/-{}-/g, '');

		const convertPageTitle: string = `${pageTitle}/${variant}`;
		deployPages.push(convertPageTitle);

		const response: ApiEditResponse = await api.save(convertPageTitle, convertedDescription, editSummary);

		return !!response.nochange;
	};

	const taskQueue: (() => Promise<boolean>)[] = [];
	for (const variant of ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']) {
		taskQueue.push(async (): Promise<boolean> => {
			return await convert(variant);
		});
	}

	queue
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
 * @param {ApiQueue} object The api instance and the deployment queue
 * @param {string} editSummary The editing summary used by this api instance
 */
const saveDefinition = (definitionText: string, {api, queue}: ApiQueue, editSummary: string): void => {
	const pageTitle: string = 'MediaWiki:Gadgets-definition';
	deployPages.push(pageTitle);

	void queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(pageTitle, definitionText, editSummary);
			if (response.nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold('gadget definitions')}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold('gadget definitions')}`));
			}
		} catch (error: unknown) {
			console.log(chalk.red(`✘ Failed to save ${chalk.bold('gadget definitions')}`));
			console.error(error);
		}
	});
};

/**
 * Save gadget definition section pages
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {ApiQueue} apiQueue The api instance and the deployment queue
 * @param {string} editSummary The editing summary used by this api instance
 */
const saveDefinitionSectionPage = (definitionText: string, apiQueue: ApiQueue, editSummary: string): void => {
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
		deployPages.push(pageTitle);

		void apiQueue.queue.add(async (): Promise<void> => {
			try {
				const response: ApiEditResponse = await apiQueue.api.save(pageTitle, sectionText, editSummary);
				if (response.nochange) {
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
			convertVariant(pageTitle, sectionText, apiQueue, editSummary);
		}
	}
};

/**
 * Save gadget description
 *
 * @param {string} name The gadget name
 * @param {string} description The definition of this gadget
 * @param {ApiQueue} apiQueue The api instance and the deployment queue
 * @param {string} editSummary The editing summary used by the api instance
 */
const saveDescription = (name: string, description: string, apiQueue: ApiQueue, editSummary: string): void => {
	const pageTitle: string = `MediaWiki:Gadget-${name}`;
	deployPages.push(pageTitle);

	void apiQueue.queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await apiQueue.api.save(pageTitle, description, editSummary);
			if (response.nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.bold(`${name} description`)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.bold(`${name} description`)}`));
			}
		} catch (error: unknown) {
			console.log(chalk.red(`✘ Failed to save ${chalk.bold(`${name} description`)}`));
			console.error(error);
		}
	});

	if (CONVERT_VARIANT) {
		convertVariant(pageTitle, description, apiQueue, editSummary);
	}
};

/**
 * Save gadget file
 *
 * @param {string} name The gadget name
 * @param {string} file The target file name
 * @param {string} fileContent The target file content
 * @param {ApiQueue} object The api instance and the deployment queue
 * @param {string} editSummary The editing summary used by the api instance
 */
const saveFiles = (
	name: string,
	file: string,
	fileContent: string,
	{api, queue}: ApiQueue,
	editSummary: string
): void => {
	let fileName: string = `${name}-${file}`;
	if (file.split('.')[0] === name) {
		fileName = file;
	}

	const pageTitle: string = `MediaWiki:Gadget-${fileName}`;
	deployPages.push(pageTitle);

	void queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(pageTitle, fileContent, editSummary);
			if (response.nochange) {
				console.log(chalk.yellow(`━ No change saving ${chalk.underline(fileName)} to ${chalk.bold(name)}`));
			} else {
				console.log(chalk.green(`✔ Successfully saved ${chalk.underline(fileName)} to ${chalk.bold(name)}`));
			}
		} catch (error: unknown) {
			console.log(chalk.red(`✘ Failed to save ${chalk.underline(fileName)} to ${chalk.bold(name)}`));
			console.error(error);
		}
	});
};

/**
 * Delete unused pages from the target MediaWiki site
 *
 * @param {ApiQueue} object The api instance and the delete page queue
 * @param {string} editSummary The editing summary used by this api instance
 */
const deleteUnusedPages = async ({api, queue}: ApiQueue, editSummary: string): Promise<void> => {
	const storeFilePath: string = join(rootDir, 'dist/store.txt');

	let lastDeployPages: string[] = [];
	try {
		const fileBuffer: Buffer = readFileSync(storeFilePath);
		const fileContent: string = fileBuffer.toString();
		lastDeployPages = fileContent.split('\n').filter((lineConent: string): boolean => {
			return !!lineConent;
		});
	} catch {}

	open(storeFilePath, 'w', (err: NodeJS.ErrnoException | null, fd: number): void => {
		if (err) {
			console.error(err);
			return;
		}
		writeFileSync(fd, deployPages.sort().join('\n'));
		fdatasyncSync(fd);
		closeSync(fd);
	});

	if (!lastDeployPages.length) {
		console.log(chalk.yellow('━ No deployment log found'));
		return;
	}

	const needToDeletePages: string[] = lastDeployPages.filter((page: string): boolean => {
		return !deployPages.includes(page);
	});

	if (!needToDeletePages.length) {
		console.log(chalk.yellow('━ No page need to delete'));
		return;
	}

	process.stdout.write(`The following pages will be deleted:\n${needToDeletePages.join('\n')}\n`);
	await prompt('> Confirm to continue deleting?', 'confirm', true);

	console.log(chalk.yellow('--- deleting will continue in three seconds ---'));
	await setTimeout(3 * 1000);

	const deletePage = async (pageTitle: string): Promise<void> => {
		try {
			await api.delete(pageTitle, editSummary);
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
		void queue.add(async (): Promise<void> => {
			await deletePage(page);
		});
	}
};

export {
	generateTargets,
	checkConfig,
	loadConfig,
	makeEditSummary,
	readDefinition,
	readFileText,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	deleteUnusedPages,
};
