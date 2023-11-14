import type {Credentials, DeploymentTargets} from './scripts';
import {
	checkConfig,
	delay,
	loadConfig,
	log,
	makeEditSummary,
	prompt,
	readDefinition,
	readFileText,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	setDefinition,
} from './deploy-util';
import {DEPLOY_USER_AGENT} from './constant';
import {Mwn} from 'mwn';

/**
 * Deploy definitions, scripts and styles
 *
 * @param {DeploymentTargets} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets: DeploymentTargets): Promise<void> => {
	let config: Partial<Credentials> = await loadConfig();
	config = await checkConfig(config, true);
	const api: Mwn = new Mwn({
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
	log('yellow', '--- logging in ---');
	if (isUseOAuth) {
		await api.getTokensAndSiteInfo();
	} else {
		await api.login();
	}
	await prompt('> Press [Enter] to start deploying or quickly press [ctrl + C] twice to cancel');
	await delay();
	log('yellow', '--- starting deployment ---');
	const editSummary: string = await makeEditSummary();
	const definitionText: string = await readDefinition();
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
			const fileText: string = await readFileText(name, file);
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
