import prompts, {type Answers, type PromptType} from 'prompts';

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

export {prompt};
