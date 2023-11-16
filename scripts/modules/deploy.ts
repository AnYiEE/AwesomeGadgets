import type {ApiQueue, Credentials, DeploymentTargets} from './types';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {
	checkConfig,
	loadConfig,
	makeEditSummary,
	readDefinition,
	readFileText,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
} from './utils/deploy-util';
import {Mwn} from 'mwn';
import PQueue from 'p-queue';
import chalk from 'chalk';
import {prompt} from './utils/general-util';
import {setTimeout} from 'node:timers/promises';

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

	console.log(chalk.yellow('--- logging in ---'));

	try {
		if (isUseOAuth) {
			await api.getTokensAndSiteInfo();
		} else {
			await api.login();
		}
	} catch (error: unknown) {
		console.log(chalk.red('--- log in failed ---'));
		console.error(error);
		return;
	}

	await prompt('> Press [Enter] to start deploying or quickly press [ctrl + C] twice to cancel');
	await setTimeout(1000);

	console.log(chalk.yellow('--- starting deployment ---'));

	const apiQueue: ApiQueue = {
		api,
		queue,
		editSummary: await makeEditSummary(),
	};

	const definitionText: string = readDefinition();
	saveDefinition(definitionText, apiQueue);
	saveDefinitionSectionPage(definitionText, apiQueue);

	for (const [name, {description, files}] of Object.entries(targets)) {
		saveDescription(name, description, apiQueue);

		for (let file of files) {
			if (/^\./.test(file)) {
				file = `${name}${file}`;
			}

			const fileText: string = readFileText(name, file);
			saveFiles(name, file, fileText, apiQueue);
		}
	}

	await queue.onIdle();

	console.log(chalk.yellow('--- end of deployment ---'));
};

export {deploy};
