import chalk from 'chalk';
import prompts from 'prompts';
import {execSync} from 'node:child_process';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import {BANNER, DEFINITION_SECTION_MAP, IS_CONVERT_VARIANT} from './constant.js';
import {Mwn as _Mwn} from 'mwn';
import {Window} from 'happy-dom';
const __dirname = path.resolve();

/**
 * Generate deployment targets based on the definitions
 *
 * @param {string[]} definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 * @return {Record<string, {description:string; files:string[]}>} Deployment targets
 */
const generateTargets = (definitions) => {
	const targets = {};
	for (const definition of definitions) {
		if (!definition) {
			continue;
		}
		const [_, name, files, description] = definition.match(/^\*\s(\S+?)\[\S+?]\|(\S+?)#\S*?#(.*?)$/);
		targets[name] = {};
		targets[name].files = files
			.split('|')
			.filter((file) => {
				return file !== '';
			})
			.map((file) => {
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
const log = (color, message) => {
	console.log(chalk[color](message));
};

/**
 * Easy to use CLI prompts to enquire users for information
 *
 * @param {string} message The message to be displayed to the user
 * @param {string} type Defines the type of prompt to display
 * @param {string} initial Optional default prompt value
 * @returns {Promise<prompts.Answers<string>>}
 * @see https://www.npmjs.com/package/prompts
 */
const prompt = async (message, type = 'text', initial = '') => {
	const name = String(Math.random());
	return (
		await prompts({
			message,
			type,
			initial,
			name,
		})
	)[name];
};

/**
 * Check the integrity of configuration items
 *
 * @param {Record<string, unknown>} config To be completed configuration
 * @param {boolean} checkApiUrlOnly Only check `config.apiUrl` is empty or not
 * @returns {Promise<{apiUrl:string; username:string; password:string}>} Completed configuration
 */
const checkConfig = async (config, checkApiUrlOnly = false) => {
	if (!config.apiUrl) {
		const apiUrl = await prompt('> Enter api url (eg. https://your.wiki/api.php)');
		config.apiUrl = apiUrl;
	}
	if (!checkApiUrlOnly && !config.username) {
		config.username = await prompt('> Enter username');
	}
	if (!checkApiUrlOnly && !config.password) {
		config.password = await prompt('> Enter bot password', 'password');
	}
	return config;
};

/**
 * Load credentials.json
 *
 * @returns {Promise<{apiUrl?:string; username?:string; password?:string} | {apiUrl?:string; OAuth2AccessToken?:string} | {apiUrl?:string; OAuthCredentials?:{accessToken?:string; accessSecret?:string; consumerToken?:string; consumerSecret?:string}}>} The result of parsing the credentials.json file
 */
const loadConfig = async () => {
	const credentialsFileWithPath = path.join(__dirname, 'script/credentials.json');
	let credentialsJsonText = '{}';
	try {
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		credentialsJsonText = await fsPromises.readFile(credentialsFileWithPath);
	} catch {
		log('red', 'credentials.json is missing, a empty object will be used.');
	}
	return JSON.parse(credentialsJsonText);
};

/**
 * Make edit summary
 *
 * @returns {Promise<string>} The edit summary
 */
const makeEditSummary = async () => {
	let sha = '';
	let summary = '';
	try {
		sha = execSync('git rev-parse --short HEAD').toString('utf8').trim();
		summary = execSync('git log --pretty=format:"%s" HEAD -1').toString('utf8').trim();
	} catch {}
	const customSummary = await prompt('> Custom edit summary message (optional):');
	const editSummary = `${sha ? `Git 版本 ${sha}: ` : ''}${customSummary || summary}`;
	log('white', `Edit summary is: "${editSummary}"`);
	return editSummary;
};

/**
 * Read `dist/definition.txt`
 *
 * @returns {Promise<string>} Gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const readDefinition = async () => {
	const definitionPath = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	let definitionText = await fsPromises.readFile(definitionPath);
	definitionText = definitionText.toString().replace(/<>/g, '-').replace(/-\./g, '.');
	definitionText = `${BANNER.replace(/[=]=/g, '').trim()}\n${definitionText}`;
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
	return definitionText.toString();
};

/**
 * Read file text
 *
 * @param {string} name The gadget name
 * @param {string} file The file name used by this gadget
 * @returns {Promise<string>} The file content
 */
const readFileText = async (name, file) => {
	const filePath = path.join(__dirname, `dist/${name}/${file}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileContent = await fsPromises.readFile(filePath);
	return fileContent.toString();
};

/**
 * Set `dist/definition.txt`
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 */
const setDefinition = async (definitionText) => {
	const definitionPath = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
};

/**
 * Convert language variants of a page
 *
 * @param {string} pageTitle The titie of this page
 * @param {{api:_Mwn; content:string; editSummary:string}} object The api instance, the content of this page and the edit summary used by the api instance
 */
const convertVariant = async (pageTitle, {api, content, editSummary}) => {
	const variants = ['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'];
	/**
	 * @param {keyof typeof variants} variant
	 * @returns {Promise<void>}
	 */
	const convert = async (variant) => {
		const parsedHtml = await api.parseWikitext(
			`{{NoteTA|G1=IT|G2=MediaWiki}}<div class="convertVariant">${content}</div>`,
			{
				prop: 'text',
				uselang: variant,
			}
		);
		const window = new Window({
			url: api.options.apiUrl,
		});
		const {document} = window;
		document.body.innerHTML = `<div>${parsedHtml}</div>`;
		const convertedDescription = document.querySelector('.convertVariant').innerHTML;
		await api.save(`${pageTitle}/${variant}`, convertedDescription, editSummary);
	};
	for (const variant of variants) {
		await convert(variant);
	}
};

/**
 * Save gadget definition section pages
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 * @param {{api:_Mwn; editSummary:string}} api The api instance and the edit summary used by the api instance
 */
const saveDefinitionSectionPage = async (definitionText, {api, editSummary}) => {
	const sections = definitionText.match(/^==([\S\s]+?)==$/gm).map((sectionHeader) => {
		return sectionHeader.replace(/[=]=/g, '').trim();
	});
	const pageTitles = sections.map((section) => {
		return `MediaWiki:Gadget-section-${section}`;
	});
	for (const [index, section] of sections.entries()) {
		const sectionText = DEFINITION_SECTION_MAP[section] || section;
		const pageTitle = pageTitles[index];
		try {
			await api.save(pageTitle, sectionText, editSummary);
			log('green', `✔ Successfully saved ${pageTitle}`);
			if (!IS_CONVERT_VARIANT) {
				continue;
			}
			try {
				await convertVariant(pageTitle, {
					content: sectionText,
					api,
					editSummary,
				});
				log('green', `✔ Successfully converted ${pageTitle}`);
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
 * @param {{api:_Mwn; editSummary:string}} api The api instance and the edit summary used by the api instance
 */
const saveDefinition = async (definitionText, {api, editSummary}) => {
	try {
		await api.save('MediaWiki:Gadgets-definition', definitionText, editSummary);
		log('green', '✔ Successfully saved gadget definitions');
	} catch (error) {
		log('red', '✘ Failed to save gadget definitions');
		console.error(error);
	}
};

/**
 * Save gadget description
 *
 * @param {string} name The gadget name
 * @param {{api:_Mwn; description:string; editSummary:string}} api The api instance, the definition of this gadget and the edit summary used by the api instance
 */
const saveDescription = async (name, {api, description, editSummary}) => {
	const descriptionPageTitle = `MediaWiki:Gadget-${name}`;
	try {
		await api.save(descriptionPageTitle, description, editSummary);
		log('green', `✔ Successfully saved ${name} description`);
		if (!IS_CONVERT_VARIANT) {
			return;
		}
		try {
			await convertVariant(descriptionPageTitle, {
				content: description,
				api,
				editSummary,
			});
			log('green', `✔ Successfully converted ${name} description`);
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
 * @param {{api:_Mwn; editSummary:string; file:string; fileText:string}} api The api instance, the edit summary used by the api instance, the target file name and the file content
 */
const saveFiles = async (name, {api, editSummary, file, fileText}) => {
	try {
		let fileName = `${name}-${file}`;
		if (file.split('.')[0] === name) {
			fileName = file;
		}
		await api.save(`MediaWiki:Gadget-${fileName}`, fileText, editSummary);
		log('green', `✔ Successfully saved ${fileName} to ${name}`);
	} catch (error) {
		log('red', `✘ Failed to save ${file} to ${name}`);
		console.error(error);
	}
};

export {
	generateTargets,
	log,
	prompt,
	checkConfig,
	loadConfig,
	makeEditSummary,
	readDefinition,
	readFileText,
	setDefinition,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
};
