import type {Credentials, DeploymentTargets} from './scripts';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from './constant';
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
import {Mwn} from 'mwn';
import PQueue from 'p-queue';

const queue: PQueue = new PQueue({
	concurrency: MAX_CONCURRENCY > 128 ? 128 : MAX_CONCURRENCY,
});

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
	const apiOptions: {
		api: Mwn;
		editSummary: string;
		queue: PQueue;
	} = {
		api,
		editSummary,
		queue,
	};
	const definitionText: string = await readDefinition();
	await setDefinition(definitionText);
	await saveDefinition(definitionText, apiOptions);
	await saveDefinitionSectionPage(definitionText, apiOptions);
	for (const [name, {description, files}] of Object.entries(targets)) {
		await saveDescription(name, {
			...apiOptions,
			description,
		});
		for (let file of files) {
			if (/^\./.test(file)) {
				file = `${name}${file}`;
			}
			const fileText: string = await readFileText(name, file);
			await saveFiles(name, {
				...apiOptions,
				file,
				fileText,
			});
		}
	}
	await queue.onIdle();
	log('yellow', '--- end of deployment ---');
};

export default deploy;
