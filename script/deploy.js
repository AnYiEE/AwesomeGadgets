import {Mwn} from 'mwn';
import {DEPLOY_USER_AGENT} from './constant.js';
import {
	checkConfig,
	loadConfig,
	log,
	makeEditSummary,
	prompt,
	readDefinition,
	readFileText,
	setDefinition,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
} from './deploy-util.js';

/**
 * Deploy definitions, scripts and styles
 *
 * @param {Record<string, {description:string; files:string[]}>} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets) => {
	let config = await loadConfig();
	config = await checkConfig(config, true);
	const api = new Mwn({
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
	await saveDefinition(definitionText, {
		api,
		editSummary,
	});
	await saveDefinitionSectionPage(definitionText, {
		api,
		editSummary,
	});
	for (const [name, {description, files}] of Object.entries(targets)) {
		await saveDescription(name, {
			api,
			description,
			editSummary,
		});
		for (let file of files) {
			if (/^\./.test(file)) {
				file = `${name}${file}`;
			}
			const fileText = await readFileText(name, file);
			await saveFiles(name, {
				api,
				editSummary,
				file,
				fileText,
			});
		}
	}
	log('yellow', '--- end of deployment ---');
};

export default deploy;
