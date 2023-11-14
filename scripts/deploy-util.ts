import {type ApiEditResponse, Mwn} from 'mwn';
import {BANNER, DEFINITION_SECTION_MAP, IS_CONVERT_VARIANT} from './constant';
import type {Credentials, CredentialsOnlyPassword, DeploymentTargets} from './scripts';
import fs, {type PathOrFileDescriptor} from 'node:fs';
import prompts, {type Answers, type PromptType} from 'prompts';
import PQueue from 'p-queue';
import {Window} from 'happy-dom';
import chalk from 'chalk';
import {execSync} from 'node:child_process';
import path from 'node:path';
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
		if (!definition) {
			continue;
		}

		const [_, name, files, description] = definition.match(
			/^\*\s(\S+?)\[\S+?]\|(\S+?)#\S*?#(.*?)$/
		) as RegExpMatchArray;

		targets[name] = {} as DeploymentTargets[''];
		targets[name].files = files
			.split('|')
			.filter((file: string): boolean => {
				return file !== '';
			})
			.map((file: string): string => {
				return file.replace(/\S+?<>/, '');
			});
		targets[name].description = description || name;
	}

	return targets;
};

/**
 * Log message with chalk
 *
 * @param {string} color message text color
 * @param  {string} message message text
 */
const log = (color: string, message: string): void => {
	console.log(chalk[color](message));
};

/**
 * Easy to use CLI prompts to enquire users for information
 *
 * @param {string} message The message to be displayed to the user
 * @param {PromptType} type Defines the type of prompt to display
 * @param {string} initial Optional default prompt value
 * @returns {Promise<string>}
 * @see https://www.npmjs.com/package/prompts
 */
const prompt = async (message: string, type: PromptType = 'text', initial = ''): Promise<string> => {
	const name: string = Math.random().toString();
	const answers: Answers<string> = await prompts({
		initial,
		message,
		name,
		type,
	});

	return answers[name];
};

/**
 * Pause the script execution and wait for a period of time before continuing
 *
 * @param {number} [ms=1000] Waiting time (milliseconds)
 * @return {Promise<void>}
 */
const delay = (ms = 1000): Promise<void> => {
	return setTimeout(ms);
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
	if (!config.apiUrl) {
		config.apiUrl = await prompt('> Enter api url (eg. https://your.wiki/api.php)');
	}
	if (!checkApiUrlOnly && !config.username) {
		config.username = await prompt('> Enter username');
	}
	if (!checkApiUrlOnly && !config.password) {
		config.password = await prompt('> Enter bot password', 'password');
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
		log('red', 'The credentials.json is missing, a empty object will be used.');
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
	const editSummary = `${sha ? `Git 版本 ${sha}: ` : ''}${customSummary || summary}`;
	log('white', `Editing summary is: "${editSummary}"`);

	await prompt('> Press [Enter] to continue deploying or quickly press [ctrl + C] twice to cancel');
	log('yellow', '--- deployment will continue in three seconds ---');
	await delay(3000);

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
	const definitionText = fileBuffer.toString().replace(/<>/g, '-').replace(/-\./g, '.');

	return `${BANNER.replace(/[=]=/g, '').trim()}\n${definitionText}`;
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
 * Set `dist/definition.txt`
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 */
const setDefinition = (definitionText: string): void => {
	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	const fileDescriptor: PathOrFileDescriptor = fs.openSync(definitionPath, 'w');
	fs.writeFileSync(fileDescriptor, definitionText);
	fs.fdatasyncSync(fileDescriptor);
	fs.closeSync(fileDescriptor);
};

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {{api:Mwn; content:string; editSummary:string; queue:PQueue}} object The api instance, the content of this page, the editing summary used by this api instance and the deployment queue
 */
const convertVariant = async (
	pageTitle: string,
	{api, content, editSummary, queue}: {api: Mwn; content: string; editSummary: string; queue: PQueue}
): Promise<boolean> => {
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

	let isNoChange = false;
	const convert = async (variant: string): Promise<void> => {
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
		if (response.nochange) {
			isNoChange = true;
		}
	};

	const taskQueue: (() => Promise<void>)[] = [];
	for (const variant of ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']) {
		taskQueue.push(async (): Promise<void> => {
			await convert(variant);
		});
	}

	await queue.addAll(taskQueue);

	return isNoChange;
};

/**
 * Save gadget definition section pages
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {{api:Mwn; editSummary:string; queue:PQueue}} object The api instance, the editing summary used by the api instance and the deployment queue
 */
const saveDefinitionSectionPage = async (
	definitionText: string,
	{api, editSummary, queue}: {api: Mwn; editSummary: string; queue: PQueue}
): Promise<void> => {
	const sections: string[] = (definitionText.match(/^==([\S\s]+?)==$/gm) as RegExpMatchArray).map(
		(sectionHeader: string): string => {
			return sectionHeader.replace(/[=]=/g, '').trim();
		}
	);
	const pageTitles: string[] = sections.map((section: string): string => {
		return `MediaWiki:Gadget-section-${section}`;
	});

	const taskQueue: (() => Promise<void>)[] = [];
	for (const [index, section] of sections.entries()) {
		const sectionText: string = DEFINITION_SECTION_MAP[section] || section;
		const pageTitle: string = pageTitles[index];

		taskQueue.push(async (): Promise<void> => {
			try {
				const response: ApiEditResponse = await api.save(pageTitle, sectionText, editSummary);
				if (response.nochange) {
					log('yellow', `━ No change saving ${pageTitle}`);
				} else {
					log('green', `✔ Successfully saved ${pageTitle}`);
				}
			} catch (error) {
				log('red', `✘ Failed to save ${pageTitle}`);
				console.error(error);
			}
		});

		if (!IS_CONVERT_VARIANT) {
			continue;
		}

		taskQueue.push(async (): Promise<void> => {
			try {
				log('white', `━ Converting ${pageTitle}`);
				const isNoChange: boolean = await convertVariant(pageTitle, {
					api,
					editSummary,
					queue,
					content: sectionText,
				});
				if (isNoChange) {
					log('yellow', `━ No change converting ${pageTitle}`);
				} else {
					log('green', `✔ Successfully converted ${pageTitle}`);
				}
			} catch (error) {
				log('red', `✘ Failed to convert ${pageTitle}`);
				console.error(error);
			}
		});
	}

	await queue.addAll(taskQueue);
};

/**
 * Save gadget definition
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {{api:Mwn; editSummary:string; queue:PQueue}} api The api instance, the editing summary used by this api instance and the deployment queue
 */
const saveDefinition = async (
	definitionText: string,
	{api, editSummary, queue}: {api: Mwn; editSummary: string; queue: PQueue}
): Promise<void> => {
	await queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(
				'MediaWiki:Gadgets-definition',
				definitionText,
				editSummary
			);
			if (response.nochange) {
				log('yellow', '━ No change saving gadget definitions');
			} else {
				log('green', '✔ Successfully saved gadget definitions');
			}
		} catch (error) {
			log('red', '✘ Failed to save gadget definitions');
			console.error(error);
		}
	});
};

/**
 * Save gadget description
 *
 * @param {string} name The gadget name
 * @param {{api:Mwn; description:string; editSummary:string; queue:PQueue}} object The api instance, the definition of this gadget, the editing summary used by the api instance and the deployment queue
 */
const saveDescription = async (
	name: string,
	{api, description, editSummary, queue}: {api: Mwn; description: string; editSummary: string; queue: PQueue}
): Promise<void> => {
	const descriptionPageTitle = `MediaWiki:Gadget-${name}`;

	await queue.add(async (): Promise<void> => {
		try {
			const response: ApiEditResponse = await api.save(descriptionPageTitle, description, editSummary);
			if (response.nochange) {
				log('yellow', `━ No change saving ${name} description`);
			} else {
				log('green', `✔ Successfully saved ${name} description`);
			}
		} catch (error) {
			log('red', `✘ Failed to save ${name} description`);
			console.error(error);
		}
	});

	if (!IS_CONVERT_VARIANT) {
		return;
	}

	await queue.add(async (): Promise<void> => {
		try {
			log('white', `━ Converting ${name} description`);
			const isNoChange: boolean = await convertVariant(descriptionPageTitle, {
				api,
				editSummary,
				queue,
				content: description,
			});
			if (isNoChange) {
				log('yellow', `━ No change converting ${name} description`);
			} else {
				log('green', `✔ Successfully converted ${name} description`);
			}
		} catch (error) {
			log('red', `✘ Failed to convert ${name} description`);
			console.error(error);
		}
	});
};

/**
 * Save gadget file
 *
 * @param {string} name The gadget name
 * @param {{api:Mwn; editSummary:string; file:string; fileText:string; queue:PQueue}} api The api instance, the editing summary used by this api instance, the target file name, the file content and the deployment queue
 */
const saveFiles = async (
	name: string,
	{
		api,
		editSummary,
		file,
		fileText,
		queue,
	}: {api: Mwn; editSummary: string; file: string; fileText: string; queue: PQueue}
): Promise<void> => {
	await queue.add(async (): Promise<void> => {
		try {
			let fileName = `${name}-${file}`;
			if (file.split('.')[0] === name) {
				fileName = file;
			}
			const response: ApiEditResponse = await api.save(`MediaWiki:Gadget-${fileName}`, fileText, editSummary);
			if (response.nochange) {
				log('yellow', `━ No change saving ${fileName} to ${name}`);
			} else {
				log('green', `✔ Successfully saved ${fileName} to ${name}`);
			}
		} catch (error) {
			log('red', `✘ Failed to save ${file} to ${name}`);
			console.error(error);
		}
	});
};

export {
	checkConfig,
	delay,
	generateTargets,
	loadConfig,
	log,
	makeEditSummary,
	prompt,
	readDefinition,
	readFileText,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	setDefinition,
};
