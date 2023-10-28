import {Mwn} from 'mwn';
import {DEPLOY_USER_AGENT, IS_CONVERT_DESCRIPTION_VARIANT} from './constant.js';
import {
	checkConfig,
	convertVariant,
	loadConfig,
	log,
	makeEditSummary,
	prompt,
	readDefinition,
	readFileText,
	setDefinition,
	saveDefinitionCategory,
} from './deploy-util.js';

/**
 * Deploy definitions, scripts and styles
 *
 * @param {Record<string, {description:string; files:string[]}>} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets) => {
	let config = await loadConfig();
	config = await checkConfig(config, true);
	const api = await Mwn.init({
		...config,
		userAgent: DEPLOY_USER_AGENT,
	});
	let isUseOAuth = false;
	try {
		api.initOAuth();
		isUseOAuth = true;
	} catch {
		config = await checkConfig(config);
		api.setOptions(config);
	}
	log('yellow', '--- Logging in ---');
	if (isUseOAuth) {
		await api.getTokensAndSiteInfo();
	} else {
		await api.login();
	}
	await prompt('> Press [Enter] to start deploying or press [ctrl + C] twice to cancel');
	log('yellow', '--- starting deployment ---');
	const editSummary = await makeEditSummary();
	const definitionText = await readDefinition();
	await setDefinition(definitionText);
	try {
		await api.save('MediaWiki:Gadgets-definition', definitionText, editSummary);
		log('green', '✔ Successfully saved gadget definitions');
		try {
			await saveDefinitionCategory(definitionText, {
				api,
				editSummary,
			});
			log('green', '✔ Successfully saved gadget definition categories');
		} catch (error) {
			log('red', '✘ Failed to save gadget definition categories');
			console.error(error);
		}
	} catch (error) {
		log('red', '✘ Failed to save gadget definitions');
		console.error(error);
	}
	for (const [name, {description, files}] of Object.entries(targets)) {
		try {
			const descriptionPageTitle = `MediaWiki:Gadget-${name}`;
			await api.save(descriptionPageTitle, description, editSummary);
			log('green', `✔ Successfully saved ${name} description`);
			try {
				if (IS_CONVERT_DESCRIPTION_VARIANT) {
					await convertVariant(descriptionPageTitle, {
						text: description,
						api,
						editSummary,
					});
					log('green', `✔ Successfully converted ${name} description`);
				}
			} catch (error) {
				log('red', `✘ Failed to converted ${name} description`);
				console.error(error);
			}
		} catch (error) {
			log('red', `✘ Failed to save ${name} description`);
			console.error(error);
		}
		for (let file of files) {
			if (/^\./.test(file)) {
				file = `${name}${file}`;
			}
			const fileText = await readFileText(name, file);
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
		}
	}
	log('yellow', '--- end of deployment ---');
};

export default deploy;
