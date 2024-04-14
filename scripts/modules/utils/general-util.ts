import {DEFAULT_DEFINITION, GLOBAL_REQUIRES_ES6, HEADER} from 'scripts/constant';
import type {DefaultDefinition, GlobalSourceFiles, SourceFiles} from '../types';
import {
	type PathOrFileDescriptor,
	closeSync,
	existsSync,
	fdatasyncSync,
	openSync,
	readFileSync,
	writeFileSync,
} from 'node:fs';
import prompts, {type Answers, type PromptObject, type PromptType} from 'prompts';
import {exec as _exec} from 'node:child_process';
import alphaSort from 'alpha-sort';
import chalk from 'chalk';
import {exit} from 'node:process';
import path from 'node:path';
import {promisify} from 'node:util';

/**
 * @private
 * @return {string}
 */
const getRootDir = (): string => {
	const rootDir: string = path.resolve();

	return rootDir;
};

/**
 * The root directory of the project
 */
const __rootDir: string = getRootDir();

/**
 * Execute a command
 *
 * @see {@link node:child_process.exec}
 */
const exec = promisify(_exec);

/**
 * Read file content
 *
 * @param {string} filePath The target file path
 * @return {string} The file content
 * @throws If the file is not found
 */
const readFileContent = (filePath: string): string => {
	const fileBuffer: Buffer = readFileSync(filePath);

	return fileBuffer.toString();
};

/**
 * Write file content
 *
 * @param {number|string} filePath The file descriptor or target file path
 * @param {string} fileContent The file content
 * @throws If the file is not found
 */
const writeFileContent = (filePath: number | string, fileContent: string): void => {
	const fileDescriptor: PathOrFileDescriptor = typeof filePath === 'number' ? filePath : openSync(filePath, 'w');
	writeFileSync(fileDescriptor, fileContent);
	fdatasyncSync(fileDescriptor);
	closeSync(fileDescriptor);
};

/**
 * Generate an array and filter out null and undefined values
 *
 * @param {T} args The given arguments
 * @return {NonNullable<T>[]} The generated array
 */
function generateArray<T extends []>(...args: (T | T[])[]): NonNullable<T>[];
function generateArray<T = unknown>(...args: (T | T[])[]): NonNullable<T>[];
// eslint-disable-next-line func-style
function generateArray<T>(...args: (T | T[])[]): T[] {
	return args.flatMap((arg) => {
		if (arg === null || arg === undefined) {
			return [];
		}

		if (Array.isArray(arg)) {
			return arg.filter((item) => {
				return item !== null && item !== undefined;
			});
		}

		return [arg];
	});
}

/**
 * Sort an object
 *
 * @param {Object} object The object to sort
 * @param {boolean} isSortArray Sort the array values of this object or not
 * @return {Object} The sorted object
 */
const sortObject = <T extends object>(object: T, isSortArray?: boolean): T => {
	const objectSorted: T = {} as T;

	for (const _key of Object.keys(object).sort(
		alphaSort({
			caseInsensitive: true,
			natural: true,
		})
	)) {
		type Key = keyof T;
		type Value = T[Key];

		const key = _key as Key;
		const value: Value = object[key];

		objectSorted[key] =
			isSortArray && Array.isArray(value)
				? (value.toSorted(
						alphaSort({
							caseInsensitive: true,
							natural: true,
						})
					) as Value)
				: value;
	}

	return objectSorted;
};

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

/**
 * Easy to use CLI prompts to enquire users for information
 *
 * @param {string|Omit<PromptObject,'name'>} message The message to be displayed to the user
 * @param {PromptType} [type='text'] Defines the type of prompt to display
 * @param {boolean|string} [initial=''] Optional default prompt value
 * @return {Promise<boolean|string>}
 * @see {@link https://www.npmjs.com/package/prompts}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function prompt<T = any>(message: Omit<PromptObject, 'name'>): Promise<T>;
async function prompt(message: string, type?: Exclude<PromptType, 'confirm'>, initial?: string): Promise<string>;
async function prompt(message: string, type: 'confirm', initial?: boolean): Promise<boolean>;
// eslint-disable-next-line func-style
async function prompt(
	message: string | Omit<PromptObject, 'name'>,
	type: PromptType = 'text',
	initial: boolean | string = ''
): Promise<boolean | string> {
	const name: string = Math.random().toString();
	const answers: Answers<string> =
		typeof message === 'string'
			? await prompts({
					initial,
					message,
					name,
					type,
				})
			: await prompts({
					...message,
					name,
				});

	const answer = answers[name] as boolean | string | undefined;
	if (type === 'confirm' && !answer) {
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
 * Generate banner and footer
 *
 * @param {Object} [object]
 * @param {string} object.licenseText The license text
 * @param {boolean} object.isDirectly The source code is from `global.json` or not
 * @param {boolean} object.isProcessJs Add banner and footer for JavaScript code or not
 * @return {Object} The banner and footer
 */
const generateBannerAndFooter = ({
	licenseText,
	isDirectly = false,
	isProcessJs = true,
}: Omit<GlobalSourceFiles[keyof GlobalSourceFiles], 'enable' | 'sourceCode'> & {
	isDirectly?: boolean;
	isProcessJs?: boolean;
}): typeof code => {
	licenseText = licenseText ? trim(licenseText) : '';

	const prefix = (isDirectly ? '' : '/**\n *\n */\n') satisfies string;
	const code: {
		banner: {
			css: string;
			js: string;
		};
		footer: {
			css: string;
			js: string;
		};
	} = {
		banner: {
			css: `${prefix}${licenseText}${trim(HEADER)}/* <nowiki> */\n`,
			js: '',
		},
		footer: {
			css: '\n/* </nowiki> */\n',
			js: '',
		},
	};

	if (isProcessJs) {
		// MediaWiki ResourceLoader will add a comment block before the uncompressed source code, consisting of three lines
		// Therefore, here add three empty lines to ensure that the source map can correctly map to the corresponding lines
		code.banner.js = `${prefix}${licenseText}${trim(HEADER)}/* <nowiki> */\n\n${
			// Always wrap the code in an IIFE to avoid variable and method leakage into the global scope
			GLOBAL_REQUIRES_ES6 && !isDirectly ? '(() => {' : '(function() {'
		}\n`;
		code.footer.js = '\n})();\n\n/* </nowiki> */\n';
	}

	return code;
};

/**
 * Parse `definition.json` of a gadget
 *
 * @param {string} gadgetName The gadget name
 * @param {boolean} [isShowLog=true] Show log or not
 * @return {Object} The definition object
 */
const generateDefinition = (gadgetName: string, isShowLog: boolean = true): typeof definition => {
	const logError = (reason: string): void => {
		if (isShowLog) {
			console.log(
				chalk.yellow(
					`${chalk.italic('definition.json')} of ${chalk.bold(
						gadgetName
					)} is ${reason}, the default definition will be used.`
				)
			);
		}
	};

	let isMissing: boolean = false;

	const definitionFilePath: string = path.join(__rootDir, `src/${gadgetName}/definition.json`);
	if (!existsSync(definitionFilePath)) {
		isMissing = true;
		logError('missing');
	}

	let definitionJsonText: string = '{}';
	if (!isMissing) {
		definitionJsonText = readFileContent(definitionFilePath);
	}

	let definition: SourceFiles[keyof SourceFiles]['definition'] = {
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

export {
	__rootDir,
	exec,
	readFileContent,
	writeFileContent,
	generateArray,
	sortObject,
	trim,
	prompt,
	generateBannerAndFooter,
	generateDefinition,
};
