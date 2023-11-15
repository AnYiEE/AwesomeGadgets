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
	concurrency: MAX_CONCURRENCY > 256 ? 256 : MAX_CONCURRENCY,
});

/**
 * Deploy definitions, scripts and styles
 *
 * @param {DeploymentTargets} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets: DeploymentTargets): Promise<void> => {
	let config: Partial<Credentials> = loadConfig();
	config = await checkConfig(config, true);

	const api: Mwn = new Mwn({
		...config,
		maxRetries: 10,
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

	const definitionText: string = readDefinition();
	setDefinition(definitionText);

	const apiOptions: {
		api: Mwn;
		editSummary: string;
		queue: PQueue;
	} = {
		api,
		queue,
		editSummary: await makeEditSummary(),
	};

	saveDefinition(definitionText, apiOptions);
	saveDefinitionSectionPage(definitionText, apiOptions);

	for (const [name, {description, files}] of Object.entries(targets)) {
		saveDescription(name, {
			...apiOptions,
			description,
		});
		for (let file of files) {
			if (/^\./.test(file)) {
				file = `${name}${file}`;
			}
			const fileText: string = readFileText(name, file);
			saveFiles(name, {
				...apiOptions,
				file,
				fileText,
			});
		}
	}

	await queue.onIdle();
	log('yellow', '--- end of deployment ---');
};

export {deploy};
