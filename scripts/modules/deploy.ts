import type {Credentials, DeploymentTargets} from './types';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {
	checkConfig,
	deleteUnusedPages,
	generateDirectTargets,
	loadConfig,
	makeEditSummary,
	readDefinition,
	readFileText,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	savePages,
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

const apiQueue: PQueue = new PQueue({
	concurrency,
});

/**
 * Deploy definitions, scripts and styles
 *
 * @param {DeploymentTargets} targets Return value of `generateTargets(definitions)`
 */
const deploy = async (targets: DeploymentTargets): Promise<void> => {
	const config: Partial<Credentials> = loadConfig();
	await checkConfig(config, true);

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
		await checkConfig(config);
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

	const definitionText: string = readDefinition();
	saveDefinition(definitionText, api, editSummary);
	saveDefinitionSectionPage(definitionText, api, editSummary);

	for (const [name, {description, files}] of Object.entries(targets)) {
		saveDescription(name, description, api, await makeEditSummary(name, editSummary));

		for (let file of files) {
			if (/^\./.test(file)) {
				file = name + file;
			}

			const fileText: string = readFileText(name, file);
			saveFiles(name, file, fileText, api, await makeEditSummary(name, editSummary, file.endsWith('.css')));
		}
	}

	const globalTargets: [string, string][] = generateDirectTargets();
	for (const [pageTitle, pageContent] of globalTargets) {
		savePages(pageTitle, pageContent, api, editSummary);
	}

	await apiQueue.onIdle();

	console.log(chalk.yellow('--- end of deployment ---'));

	console.log(chalk.yellow('--- starting delete unused pages ---'));

	await deleteUnusedPages(api, editSummary);

	await apiQueue.onIdle();

	console.log(chalk.yellow('--- end of delete unused pages ---'));
};

export {apiQueue, deploy};
