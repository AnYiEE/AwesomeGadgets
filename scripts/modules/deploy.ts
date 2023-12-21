import type {ApiQueue, Credentials, DeploymentTargets} from './types';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {
	checkConfig,
	deleteUnusedPages,
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
import {exit} from 'node:process';
import {prompt} from './utils/general-util';

/**
 * @private
 */
const concurrency: number = MAX_CONCURRENCY > 256 ? 256 : MAX_CONCURRENCY;

/**
 * @private
 */
const deletePageQueue: PQueue = new PQueue({
	concurrency,
});

/**
 * @private
 */
const deploymentQueue: PQueue = new PQueue({
	concurrency,
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

	let isUseOAuth: boolean = false;
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
		exit(1);
	}

	await prompt('> Confirm start deployment?', 'confirm', true);

	console.log(chalk.yellow('--- starting deployment ---'));

	const editSummary: string = await makeEditSummary();

	const apiDeploymentQueue: ApiQueue = {
		api,
		queue: deploymentQueue,
	};

	const definitionText: string = readDefinition();
	saveDefinition(definitionText, apiDeploymentQueue, editSummary);
	saveDefinitionSectionPage(definitionText, apiDeploymentQueue, editSummary);

	for (const [name, {description, files}] of Object.entries(targets)) {
		saveDescription(name, description, apiDeploymentQueue, await makeEditSummary(name, editSummary));

		for (let file of files) {
			if (/^\./.test(file)) {
				file = name + file;
			}

			const fileText: string = readFileText(name, file);
			saveFiles(
				name,
				file,
				fileText,
				apiDeploymentQueue,
				await makeEditSummary(name, editSummary, file.endsWith('.css'))
			);
		}
	}

	await deploymentQueue.onIdle();

	console.log(chalk.yellow('--- end of deployment ---'));

	console.log(chalk.yellow('--- starting delete unused pages ---'));

	const apiDeletePageQueue: ApiQueue = {
		api,
		queue: deletePageQueue,
	};
	await deleteUnusedPages(apiDeletePageQueue, editSummary);

	await deletePageQueue.onIdle();

	console.log(chalk.yellow('--- end of delete unused pages ---'));
};

export {deploy};
