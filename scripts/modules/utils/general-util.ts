import prompts, {type Answers, type PromptType} from 'prompts';
import chalk from 'chalk';
import {exit} from 'node:process';
import {resolve} from 'node:path';

/**
 * Get the root directory of the project
 *
 * @return {string} The root directory of the project
 */
const getRootDir = (): string => {
	const rootDir: string = resolve();

	return rootDir;
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
	if (answer === undefined || (type === 'confirm' && (!answer as boolean))) {
		// User pressed [ctrl + C] or not confirmed
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
		stringTrimmed = stringTrimmed.replace(/\u001Bc*\[*[0-9]*[ABCDEFGHJKSU];*[0-9]*/gi, '');
	}
	if (!stringTrimmed) {
		return addNewline ? '\n' : '';
	}

	if (addNewline) {
		stringTrimmed += '\n';
	}

	return stringTrimmed;
};

export {getRootDir, prompt, trim};
