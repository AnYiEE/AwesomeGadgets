import chalk from 'chalk';
import prompts from 'prompts';
import {execSync} from 'node:child_process';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import {BANNER} from './constant.js';
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
		if (definition === '') {
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
 * @param  {string} msg message text
 */
const log = (color, msg) => {
	console.log(chalk[color](msg));
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
 * @param {{apiUrl?:string; username?:string; password?:string}} config To be completed configuration
 * @returns {Promise<{apiUrl:string; username:string; password:string}>} Completed configuration
 */
const checkConfig = async (config) => {
	if (!config.apiUrl) {
		const apiUrl = await prompt('> Enter api url (eg. https://your.wiki/api.php)');
		config.apiUrl = apiUrl;
	}
	if (!config.username) {
		config.username = await prompt('> Enter username');
	}
	if (!config.password) {
		config.password = await prompt('> Enter bot password', 'password');
	}
	return config;
};

/**
 * Load credentials.json
 *
 * @returns {Promise<{apiUrl?:string; username?:string; password?:string}>} The result of parsing the credentials.json file
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
	const sha = execSync('git rev-parse --short HEAD').toString('utf8').trim();
	const summary = execSync('git log --pretty=format:"%s" HEAD -1').toString('utf8').trim();
	const message = await prompt('> Edit summary message (optional):');
	const editSummary = `Git 版本 ${sha}: ${message || summary}`;
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
	definitionText = `${BANNER}\n${definitionText}`;
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
	return definitionText.toString();
};

/**
 * Read file text
 *
 * @param {string} name Gadget name
 * @param {string} file The file name used by this gadget
 * @returns {Promise<string>} The file text
 */
const readFileText = async (name, file) => {
	const filePath = path.join(__dirname, `dist/${name}/${file}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileText = await fsPromises.readFile(filePath);
	return fileText.toString();
};

/**
 * Set `dist/definition.txt`
 *
 * @param {string} definitionText The MediaWiki:Gadgets-definition content
 */
const setDefinition = async (definitionText) => {
	const definitionPath = path.join(__dirname, `dist/definition.txt`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
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
};
