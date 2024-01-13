import {DEFAULT_DEFINITION, GLOBAL_REQUIRES_ES6, HEADER} from 'scripts/constant';
import type {DefaultDefinition, GlobalSourceFiles} from '../types';
import {join, resolve} from 'node:path';
import prompts, {type Answers, type PromptType} from 'prompts';
import chalk from 'chalk';
import {exit} from 'node:process';
import {readFileSync} from 'node:fs';

/**
 * @private
 * @return {string}
 */
const getRootDir = (): string => {
	const rootDir: string = resolve();

	return rootDir;
};

/**
 * The root directory of the project
 */
const __rootDir: string = getRootDir();

/**
 * Parse `definition.json` of a gadget
 * @param {string} gadgetName The gadget name
 * @param {boolean} [showLog=true] Show log or not
 * @return {Object} The definition object
 */
const generateDefinition = (gadgetName: string, showLog: boolean = true): typeof definition => {
	const logError = (reason: string): void => {
		if (showLog) {
			console.log(
				chalk.yellow(
					`${chalk.italic('definition.json')} of ${chalk.bold(
						gadgetName
					)} is ${reason}, the default definition will be used.`
				)
			);
		}
	};

	let definitionJsonText: string = '{}';
	const definitionFilePath: string = join(__rootDir, `src/${gadgetName}/definition.json`);
	try {
		const fileBuffer: Buffer = readFileSync(definitionFilePath);
		definitionJsonText = fileBuffer.toString();
	} catch {
		logError('missing');
	}

	let definition: DefaultDefinition & {
		requiresES6: boolean;
	} = {
		...DEFAULT_DEFINITION,
		requiresES6: GLOBAL_REQUIRES_ES6,
	};
	try {
		definition = {
			...definition,
			...(JSON.parse(definitionJsonText) as Partial<DefaultDefinition>),
			requiresES6: GLOBAL_REQUIRES_ES6,
		};
	} catch {
		logError('broken');
	}

	return definition;
};

/**
 * Easy to use CLI prompts to enquire users for information
 *
 * @param {string} message The message to be displayed to the user
 * @param {PromptType} [type='text'] Defines the type of prompt to display
 * @param {boolean|string} [initial=''] Optional default prompt value
 * @return {Promise<boolean|string>}
 * @see {@link https://www.npmjs.com/package/prompts}
 */
async function prompt(message: string, type?: Exclude<PromptType, 'confirm'>, initial?: string): Promise<string>;
async function prompt(message: string, type: 'confirm', initial?: boolean): Promise<boolean>;
// eslint-disable-next-line func-style
async function prompt(
	message: string,
	type: PromptType = 'text',
	initial: boolean | string = ''
): Promise<boolean | string> {
	const name: string = Math.random().toString();
	const answers: Answers<string> = await prompts({
		initial,
		message,
		name,
		type,
	});

	const answer = answers[name] as boolean | string | undefined;
	if (type === 'confirm' && (!answer as boolean)) {
		// Not confirmed
		console.log(chalk.red('User cancelled process, program terminated.'));
		exit(0);
	}
	if (answer === undefined) {
		// User pressed [ctrl + C]
		console.log(chalk.red('Input cancelled, program terminated.'));
		exit(1);
	}

	return answer;
}

/**
 * Trim and generate a string, with the option to keep a line break and keep/strip control characters
 *
 * @param {string|undefined} string
 * @param {{addNewline?:boolean; stripControlCharacters?:boolean}} [object]
 * @return {string}
 */
const trim = (
	string: string | undefined,
	{
		addNewline = true,
		stripControlCharacters = true,
	}: {
		addNewline?: boolean;
		stripControlCharacters?: boolean;
	} = {}
): string => {
	if (string === undefined) {
		return '';
	}

	let stringTrimmed: string = string.trim();
	if (!stringTrimmed) {
		return addNewline ? '\n' : '';
	}

	if (stripControlCharacters) {
		// Strip control characters other than HT (\t) and LF (\n)
		stringTrimmed = stringTrimmed.replace(/[\x00-\x08\x0B-\x1F\x7F-\x9F]/g, '');
	}
	if (!stringTrimmed) {
		return addNewline ? '\n' : '';
	}

	if (addNewline) {
		stringTrimmed += '\n';
	}

	return stringTrimmed;
};

const processSourceCode = (
	sourceCode: string,
	{
		contentType,
		licenseText,
		isDirectly = false,
	}: Omit<GlobalSourceFiles[keyof GlobalSourceFiles], 'enable' | 'sourceCode'> & {
		isDirectly?: boolean;
	} = {}
): string => {
	licenseText = licenseText ? trim(licenseText) : '';
	sourceCode = trim(sourceCode, {
		stripControlCharacters: false,
	});

	switch (contentType) {
		case 'application/javascript': {
			const strictMode = '"use strict";' satisfies string;
			sourceCode = `${licenseText}${trim(HEADER)}/* <nowiki> */\n\n${
				// Always invoke strict mode after esbuild bundling
				sourceCode.startsWith(strictMode) ?? sourceCode.includes(strictMode) ? '' : `${strictMode}\n\n`
			}${
				// Always wrap the code in an IIFE to avoid variable and method leakage into the global scope
				GLOBAL_REQUIRES_ES6 && !isDirectly ? '(() => {' : '(function () {'
			}\n\n${sourceCode}\n})();\n\n/* </nowiki> */\n`;
			break;
		}
		case 'text/css':
			sourceCode = `${licenseText}${trim(HEADER)}/* <nowiki> */\n\n${sourceCode}\n/* </nowiki> */\n`;
	}

	return sourceCode;
};

export {__rootDir, generateDefinition, prompt, trim, processSourceCode};
