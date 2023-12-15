import prompts, {type Answers, type PromptType} from 'prompts';

/**
 * Easy to use CLI prompts to enquire users for information
 *
 * @param {string} message The message to be displayed to the user
 * @param {PromptType} [type='text'] Defines the type of prompt to display
 * @param {string} [initial=''] Optional default prompt value
 * @return {Promise<string>}
 * @see {@link https://www.npmjs.com/package/prompts}
 */
const prompt = async (message: string, type: PromptType = 'text', initial: string = ''): Promise<string> => {
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
 * Trim and generate a string ending with a newline character
 *
 * @param {string|undefined} string
 * @return {string}
 */
const trim = (string: string | undefined): string => {
	const stringTrim: string = (string ?? '').trim();

	return stringTrim ? `${stringTrim}\n` : '';
};

export {prompt, trim};
