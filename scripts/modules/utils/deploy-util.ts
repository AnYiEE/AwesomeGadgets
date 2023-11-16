import type {ApiQueue, Credentials, CredentialsOnlyPassword, DeploymentTargets} from '../types';
import {DEFINITION_SECTION_MAP, IS_CONVERT_VARIANT} from '../../constant';
import {type ApiEditResponse} from 'mwn';
import {Window} from 'happy-dom';
import chalk from 'chalk';
import {execSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {prompt} from './general-util';
import {setTimeout} from 'node:timers/promises';
const __dirname = path.resolve();

/**
 * Generate deployment targets based on the definitions
 *
 * @param {string[]} definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 * @return {DeploymentTargets} Deployment targets
 */
const generateTargets = (definitions: string[]): DeploymentTargets => {
	const targets: DeploymentTargets = {};

	for (const definition of definitions) {
		const [_, name, files, description] = definition.match(
			/^\*\s(\S+?)\[\S+?]\|(\S+?)#\S*?#(.*?)$/
		) as RegExpMatchArray;

		targets[name] = {} as DeploymentTargets[''];
		targets[name].files = files
			.split('|')
			.filter((file: string): boolean => {
				return !!file;
			})
			.map((file: string): string => {
				return file.replace(/\S+?<>/, '');
			});
		targets[name].description = description || name;
	}

	return targets;
};

/**
 * Check the integrity of configuration items
 *
 * @param {Record<string, unknown>} config To be completed configuration
 * @param {boolean} checkApiUrlOnly Only check `config.apiUrl` is empty or not
 * @returns {Promise<{apiUrl:string; username:string; password:string}>} Completed configuration
 */
const checkConfig = async (
	config: Partial<CredentialsOnlyPassword>,
	checkApiUrlOnly = false
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
	let credentialsJsonText = '{}';
	try {
		const credentialsFileWithPath: string = path.join(__dirname, 'scripts/credentials.json');
		const fileBuffer: Buffer = fs.readFileSync(credentialsFileWithPath);
		credentialsJsonText = fileBuffer.toString();
	} catch {
		console.log(chalk.red(`${chalk.italic('credentials.json')} is missing, a empty object will be used.`));
	}

	return JSON.parse(credentialsJsonText);
};

/**
 * Make editing summary
 *
 * @returns {Promise<string>} The editing summary
 */
const makeEditSummary = async (): Promise<string> => {
	let sha = '';
	let summary = '';
	try {
		sha = execSync('git rev-parse --short HEAD').toString('utf8').trim();
		summary = execSync('git log --pretty=format:"%s" HEAD -1').toString('utf8').trim();
	} catch {}

	const customSummary: string = await prompt('> Custom editing summary message (optional):');
	const editSummary = customSummary.trim() ? customSummary : `${sha ? `Git commit ${sha}: ` : ''}${summary}`;
	console.log(chalk.white(`Editing summary is: ${chalk.bold(editSummary)}`));

	await prompt('> Press [Enter] to continue deploying or quickly press [ctrl + C] twice to cancel');

	console.log(chalk.yellow('--- deployment will continue in three seconds ---'));
	await setTimeout(3000);

	return editSummary;
};

/**
 * Read `dist/definition.txt`
 *
 * @return {string} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const readDefinition = (): string => {
	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	const fileBuffer: Buffer = fs.readFileSync(definitionPath);

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
	const filePath: string = path.join(__dirname, `dist/${name}/${file}`);
	const fileBuffer: Buffer = fs.readFileSync(filePath);

	return fileBuffer.toString();
};

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {string} content The content of this page
 * @param {ApiQueue} object The api instance, the editing summary used by this api instance and the deployment queue
 */
const convertVariant = (pageTitle: string, content: string, {api, editSummary, queue}: ApiQueue): void => {
	/**
	 * @base <https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants>
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
				prop: 'text',
				uselang: variant,
			}
		);

		const window: Window = new Window({
			url: api.options.apiUrl,
		});
		const {document} = window;
		document.body.innerHTML = `<div>${parsedHtml}</div>`;

		const convertedDescription: string = document.querySelector('.convertVariant').textContent.replace(/-{}-/g, '');
		const response: ApiEditResponse = await api.save(`${pageTitle}/${variant}`, convertedDescription, editSummary);

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
		.then((nochanges): void => {
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
 * @param {ApiQueue} api The api instance, the editing summary used by this api instance and the deployment queue
 */
const saveDefinition = (definitionText: string, {api, editSummary, queue}: ApiQueue): void => {
	queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(
				'MediaWiki:Gadgets-definition',
				definitionText,
				editSummary
			);
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
 * @param {ApiQueue} object The api instance, the editing summary used by the api instance and the deployment queue
 */
const saveDefinitionSectionPage = (definitionText: string, {api, editSummary, queue}: ApiQueue): void => {
	const sections: string[] = (definitionText.match(/^==([\S\s]+?)==$/gm) as RegExpMatchArray).map(
		(sectionHeader: string): string => {
			return sectionHeader.replace(/[=]=/g, '').trim();
		}
	);
	const pageTitles: string[] = sections.map((section: string): string => {
		return `MediaWiki:Gadget-section-${section}`;
	});

	for (const [index, section] of sections.entries()) {
		const sectionText: string = DEFINITION_SECTION_MAP[section] || section;
		const pageTitle: string = pageTitles[index];

		queue.add(async (): Promise<void> => {
			try {
				const response: ApiEditResponse = await api.save(pageTitle, sectionText, editSummary);
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

		if (IS_CONVERT_VARIANT) {
			convertVariant(pageTitle, sectionText, {
				api,
				editSummary,
				queue,
			});
		}
	}
};

/**
 * Save gadget description
 *
 * @param {string} name The gadget name
 * @param {string} description The definition of this gadget
 * @param {ApiQueue} object The api instance, the editing summary used by the api instance and the deployment queue
 */
const saveDescription = (name: string, description: string, {api, editSummary, queue}: ApiQueue): void => {
	const descriptionPageTitle = `MediaWiki:Gadget-${name}`;

	queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(descriptionPageTitle, description, editSummary);
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

	if (IS_CONVERT_VARIANT) {
		convertVariant(descriptionPageTitle, description, {
			api,
			editSummary,
			queue,
		});
	}
};

/**
 * Save gadget file
 *
 * @param {string} name The gadget name
 * @param {string} file The target file name
 * @param {string} fileContent The target file content
 * @param {ApiQueue} api The api instance, the editing summary used by this api instance and the deployment queue
 */
const saveFiles = (name: string, file: string, fileContent: string, {api, editSummary, queue}: ApiQueue): void => {
	let fileName = `${name}-${file}`;
	if (file.split('.')[0] === name) {
		fileName = file;
	}

	queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(`MediaWiki:Gadget-${fileName}`, fileContent, editSummary);
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
};
