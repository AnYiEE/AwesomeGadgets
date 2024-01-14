import type {Api, DeploymentDirectTargets, DeploymentTargets} from './types';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {__rootDir, prompt} from './utils/general-util';
import {
	checkConfig,
	deleteUnusedPages,
	generateDirectTargets,
	generateTargets,
	loadConfig,
	makeEditSummary,
	readDefinition,
	readFileContent,
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
import {join} from 'node:path';

/**
 * @private
 */
const concurrency: number = MAX_CONCURRENCY > 256 ? 256 : MAX_CONCURRENCY;

const apiQueue: PQueue = new PQueue({
	concurrency,
});

/**
 * Deploy definitions, scripts and styles
 */
const deploy = async (): Promise<void> => {
	// Note: The program may terminate due to an expected exception
	const definitionText: string = readDefinition();

	const config = loadConfig();
	await checkConfig(config, true);

	const uncheckedApis: Api[] = [];
	for (const [site, credentials] of Object.entries(config)) {
		uncheckedApis.push({
			site,
			apiInstance: new Mwn({
				...credentials,
				maxRetries: 10,
				userAgent: DEPLOY_USER_AGENT,
			}),
		});
	}

	const apis: Api[] = [];
	for (const {apiInstance, site} of uncheckedApis) {
		let isUseOAuth: boolean = false;
		try {
			apiInstance.initOAuth();
			isUseOAuth = true;
		} catch {
			await checkConfig(config);
			apiInstance.setOptions(config);
		}

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] logging in ---`));

		try {
			if (isUseOAuth) {
				await apiInstance.getTokensAndSiteInfo();
			} else {
				await apiInstance.login();
			}
			apis.push({
				apiInstance,
				site,
			});
		} catch (error: unknown) {
			console.log(chalk.red(`--- [${chalk.bold(site)}] log in failed ---`));
			console.log(chalk.red(`--- Skip deployment at ${chalk.bold(site)} ---`));
			console.error(error);
			continue;
		}
	}

	if (!apis.length) {
		console.log(chalk.red('No site configured, program terminated.'));
		exit(1);
	}

	await prompt('> Confirm start deployment?', 'confirm', true);

	const targets: DeploymentTargets = generateTargets();
	const fallbackEditSummary: string = await makeEditSummary();

	for (const api of apis) {
		const {site} = api;
		const enabledGadgets: string[] = [];

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] starting deployment ---`));

		for (const [gadgetName, {description, excludeSites, files}] of Object.entries(targets)) {
			if (excludeSites.includes(site)) {
				continue;
			}

			enabledGadgets.push(gadgetName);

			const originDefinitionFilePath: string = join(__rootDir, `src/${gadgetName}/definition.json`);
			const originDefinitionEditSummary: string = await makeEditSummary(
				originDefinitionFilePath,
				fallbackEditSummary
			);
			saveDescription(gadgetName, description, api, originDefinitionEditSummary);

			for (const [originFileName, fileName] of files) {
				const filePath: string = join(__rootDir, `dist/${gadgetName}/${originFileName}`);
				const fileContent: string = readFileContent(filePath);
				const fileEditSummary: string = await makeEditSummary(filePath, fallbackEditSummary);
				saveFiles(gadgetName, fileName, fileContent, api, fileEditSummary);
			}
		}

		const definitionFilePath: string = join(__rootDir, 'dist/definition.txt');
		const definitionEditSummary: string = await makeEditSummary(definitionFilePath, fallbackEditSummary);

		const currentSiteDefinitionText: string = saveDefinition(
			definitionText,
			enabledGadgets,
			api,
			definitionEditSummary
		);
		saveDefinitionSectionPage(currentSiteDefinitionText, api, definitionEditSummary);

		const globalTargets: DeploymentDirectTargets = generateDirectTargets(site);
		const globalTargetsFilePath: string = join(__rootDir, 'src/global.json');
		const globalTargetsEditSummary: string = await makeEditSummary(globalTargetsFilePath, fallbackEditSummary);
		for (const [pageTitle, pageContent] of globalTargets) {
			savePages(pageTitle, pageContent, api, globalTargetsEditSummary);
		}

		await apiQueue.onIdle();

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] end of deployment ---`));

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] starting delete unused pages ---`));

		await deleteUnusedPages(api, fallbackEditSummary);

		await apiQueue.onIdle();

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] end of delete unused pages ---`));
	}
};

export {apiQueue, deploy};
