import {type ApiEditResponse, Mwn} from 'mwn';
import {BANNER, DEFINITION_SECTION_MAP, IS_CONVERT_VARIANT} from './constant';
import type {Credentials, CredentialsOnlyPassword, DeploymentTargets} from './scripts';
import fsPromises, {type FileHandle} from 'node:fs/promises';
import prompts, {type Answers, type PromptType} from 'prompts';
import {Window} from 'happy-dom';
import chalk from 'chalk';
import {execSync} from 'node:child_process';
import path from 'node:path';
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
const wait = (ms = 1000): Promise<void> => {
	// eslint-disable-next-line compat/compat
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
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
 * @returns {Promise<Partial<Credentials>>} The result of parsing the credentials.json file
 */
const loadConfig = async (): Promise<Partial<Credentials>> => {
	const credentialsFileWithPath: string = path.join(__dirname, 'scripts/credentials.json');
	let credentialsJsonText = '{}';
	try {
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const fileBuffer: Buffer = await fsPromises.readFile(credentialsFileWithPath);
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
	await wait(3000);
	return editSummary;
};

/**
 * Read `dist/definition.txt`
 *
 * @returns {Promise<string>} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const readDefinition = async (): Promise<string> => {
	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileBuffer: Buffer = await fsPromises.readFile(definitionPath);
	let definitionText = fileBuffer.toString().replace(/<>/g, '-').replace(/-\./g, '.');
	definitionText = `${BANNER.replace(/[=]=/g, '').trim()}\n${definitionText}`;
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle: FileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.datasync();
	await fileHandle.close();
	return definitionText;
};

/**
 * Read file text
 *
 * @param {string} name The gadget name
 * @param {string} file The file name used by this gadget
 * @returns {Promise<string>} The file content
 */
const readFileText = async (name: string, file: string): Promise<string> => {
	const filePath: string = path.join(__dirname, `dist/${name}/${file}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileBuffer: Buffer = await fsPromises.readFile(filePath);
	return fileBuffer.toString();
};

/**
 * Set `dist/definition.txt`
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 */
const setDefinition = async (definitionText: string): Promise<void> => {
	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle: FileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.datasync();
	await fileHandle.close();
};

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {{api:Mwn; content:string; editSummary:string}} object The api instance, the content of this page and the editing summary used by the api instance
 */
const convertVariant = async (
	pageTitle: string,
	{api, content, editSummary}: {api: Mwn; content: string; editSummary: string}
): Promise<boolean> => {
	const variants: string[] = ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'];
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
	const convert = async (variant: (typeof variants)[0]): Promise<void> => {
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
		const convertedDescription: string = document.querySelector('.convertVariant').textContent;
		const response: ApiEditResponse = await api.save(
			`${pageTitle}/${variant}`,
			convertedDescription.replace(/-{}-/g, ''),
			editSummary
		);
		if (response.nochange) {
			isNoChange = true;
		}
	};
	for (const variant of variants) {
		await convert(variant);
	}
	return isNoChange;
};

/**
 * Save gadget definition section pages
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {{api:Mwn; editSummary:string}} api The api instance and the editing summary used by the api instance
 */
const saveDefinitionSectionPage = async (
	definitionText: string,
	{api, editSummary}: {api: Mwn; editSummary: string}
): Promise<void> => {
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
		try {
			const response: ApiEditResponse = await api.save(pageTitle, sectionText, editSummary);
			if (response.nochange) {
				log('yellow', `━ No change saving ${pageTitle}`);
			} else {
				log('green', `✔ Successfully saved ${pageTitle}`);
			}
			if (!IS_CONVERT_VARIANT) {
				continue;
			}
			try {
				log('white', `━ Converting ${pageTitle}`);
				const isNoChange: boolean = await convertVariant(pageTitle, {
					content: sectionText,
					api,
					editSummary,
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
		} catch (error) {
			log('red', `✘ Failed to save ${pageTitle}`);
			console.error(error);
		}
	}
};

/**
 * Save gadget definition
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {{api:Mwn; editSummary:string}} api The api instance and the editing summary used by the api instance
 */
const saveDefinition = async (
	definitionText: string,
	{api, editSummary}: {api: Mwn; editSummary: string}
): Promise<void> => {
	try {
		const response: ApiEditResponse = await api.save('MediaWiki:Gadgets-definition', definitionText, editSummary);
		if (response.nochange) {
			log('yellow', '━ No change saving gadget definitions');
		} else {
			log('green', '✔ Successfully saved gadget definitions');
		}
	} catch (error) {
		log('red', '✘ Failed to save gadget definitions');
		console.error(error);
	}
};

/**
 * Save gadget description
 *
 * @param {string} name The gadget name
 * @param {{api:Mwn; description:string; editSummary:string}} api The api instance, the definition of this gadget and the editing summary used by the api instance
 */
const saveDescription = async (
	name: string,
	{api, description, editSummary}: {api: Mwn; description: string; editSummary: string}
): Promise<void> => {
	const descriptionPageTitle = `MediaWiki:Gadget-${name}`;
	try {
		const response: ApiEditResponse = await api.save(descriptionPageTitle, description, editSummary);
		if (response.nochange) {
			log('yellow', `━ No change saving ${name} description`);
		} else {
			log('green', `✔ Successfully saved ${name} description`);
		}
		if (!IS_CONVERT_VARIANT) {
			return;
		}
		try {
			log('white', `━ Converting ${name} description`);
			const isNoChange: boolean = await convertVariant(descriptionPageTitle, {
				content: description,
				api,
				editSummary,
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
	} catch (error) {
		log('red', `✘ Failed to save ${name} description`);
		console.error(error);
	}
};

/**
 * Save gadget file
 *
 * @param {string} name The gadget name
 * @param {{api:Mwn; editSummary:string; file:string; fileText:string}} api The api instance, the editing summary used by the api instance, the target file name and the file content
 */
const saveFiles = async (
	name: string,
	{api, editSummary, file, fileText}: {api: Mwn; editSummary: string; file: string; fileText: string}
): Promise<void> => {
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
};

export {
	checkConfig,
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
	wait,
};
