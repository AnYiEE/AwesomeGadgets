import {mwn} from 'mwn';
import {DEPLOY_USER_AGENT} from './constant.js';
import {log, prompt, checkConfig, loadConfig, makeEditSummary, readDefinition, readFileText} from './deploy-util.js';

/**
 * Deploy definitions, scripts and styles
 *
 * @param {Record<string, {description:string; files:string[]}>} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets) => {
	let config = await loadConfig();
	config = await checkConfig(config);
	const api = new mwn({
		userAgent: DEPLOY_USER_AGENT,
		...config,
	});
	log('yellow', '--- Logging in ---');
	await api.login();
	await prompt(`> Press [Enter] to start deploying or press [ctrl + C] twice to cancel`);
	log('yellow', '--- starting deployment ---');
	const editSummary = await makeEditSummary();
	try {
		const definitionText = await readDefinition();
		await api.save('MediaWiki:Gadgets-definition', definitionText, editSummary);
		log('green', `✔ Successfully saved gadget definitions`);
	} catch (error) {
		log('red', `✘ Failed to save gadget definitions`);
		console.error(error);
	}
	for (const [name, {description, files}] of Object.entries(targets)) {
		try {
			/** @todo Automatic conversion of language variants for description */
			await api.save(`MediaWiki:Gadget-${name}`, description, editSummary);
			log('green', `✔ Successfully saved ${name} description`);
		} catch (error) {
			log('red', `✘ Failed to save ${name} description`);
			console.error(error);
		}
		for (const file of files) {
			const fileText = await readFileText(name, file);
			try {
				await api.save(`MediaWiki:Gadget-${name}-${file}`, fileText, editSummary);
				log('green', `✔ Successfully saved ${file} to ${name}`);
			} catch (error) {
				log('red', `✘ Failed to save ${file} to ${name}`);
				console.error(error);
			}
		}
	}
	log('yellow', '--- end of deployment ---');
};

export default deploy;
