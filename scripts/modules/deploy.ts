import type {Api, DeploymentDirectTargets, DeploymentTargets} from './types';
import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {FakeApi, fakeConfig} from './utils/deploy-test';
import {__rootDir, prompt, readFileContent} from './utils/general-util';
import {
	checkConfig,
	deleteUnusedPages,
	generateDirectTargets,
	generateTargets,
	loadConfig,
	makeEditSummary,
	readDefinition,
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
import path from 'node:path';

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
 * @param {boolean} [isSkipAsk=false] Run the deploy process directly or not
 * @param {boolean} [isTest=false] Run the deploy process in test mode or not
 */
const deploy = async (isSkipAsk: boolean = false, isTest: boolean = false): Promise<void> => {
	// Note: The program may terminate due to an expected exception
	const definitionText: string = readDefinition();

	const config: ReturnType<typeof loadConfig> = isTest ? fakeConfig : loadConfig();
	await checkConfig(config, {
		isSkipAsk,
		isCheckApiUrlOnly: true,
	});

	const uncheckedApis = Object.entries(config).map<Api>(([site, credentials]) => {
		return {
			site,
			apiInstance: isTest
				? (new FakeApi(credentials) as Mwn)
				: new Mwn({
						...credentials,
						maxRetries: 10,
						userAgent: DEPLOY_USER_AGENT,
					}),
		};
	});

	const sites: Api['site'][] =
		uncheckedApis.length > 1
			? isSkipAsk
				? uncheckedApis.map<Api['site']>(({site}) => {
						return site;
					})
				: await prompt({
						type: 'multiselect',
						message: 'Select sites to deploy',
						choices: uncheckedApis.map<{
							title: string;
							value: string;
							selected: boolean;
						}>(({site}) => {
							return {
								title: site,
								value: site,
								selected: true,
							};
						}),
						max: Number.POSITIVE_INFINITY,
						min: 0,
					})
			: [uncheckedApis[0]!.site];

	const apis: Api[] = [];
	for (const {apiInstance, site} of uncheckedApis) {
		if (!sites.includes(site)) {
			continue;
		}

		let isUseOAuth: boolean = false;
		try {
			apiInstance.initOAuth();
			isUseOAuth = true;
		} catch {
			await checkConfig(config, {
				isSkipAsk,
			});
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
		} catch (error) {
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

	if (!isSkipAsk) {
		await prompt('> Confirm start deployment?', 'confirm', true);
	}

	const targets: DeploymentTargets = generateTargets();
	const fallbackEditSummary: string = await makeEditSummary(isSkipAsk);

	for (const api of apis) {
		const {site} = api;
		const enabledGadgets: string[] = [];
		const startTime = Date.now(); // 记录开始时间

		const startTimeFormatted = new Date(startTime).toLocaleString();// 获取并格式化当前时间

		console.log(chalk.blue(`--- [${chalk.bold(site)}] starting deployment at ${startTimeFormatted} ---`));

		for (const [gadgetName, {description, excludeSites, files}] of Object.entries(targets)) {
			if (excludeSites.includes(site)) {
				continue;
			}

			enabledGadgets.push(gadgetName);

			const originDefinitionFilePath: string = path.join(__rootDir, `src/${gadgetName}/definition.json`);
			const originDefinitionEditSummary: string = await makeEditSummary(isSkipAsk, {
				fallbackEditSummary,
				filePath: originDefinitionFilePath,
			});
			saveDescription(gadgetName, description, api, originDefinitionEditSummary);

			for (const [originFileName, fileName] of files) {
				const filePath: string = path.join(__rootDir, `dist/${gadgetName}/${originFileName}`);
				const fileContent: string = readFileContent(filePath);
				const fileEditSummary: string = await makeEditSummary(isSkipAsk, {
					fallbackEditSummary,
					filePath,
				});
				saveFiles(gadgetName, fileName, fileContent, api, fileEditSummary);
			}
		}

		const definitionFilePath: string = path.join(__rootDir, 'dist/definition.txt');
		const definitionEditSummary: string = await makeEditSummary(isSkipAsk, {
			fallbackEditSummary,
			filePath: definitionFilePath,
		});
		const currentSiteDefinitionText: string = saveDefinition(
			definitionText,
			enabledGadgets,
			api,
			definitionEditSummary
		);
		saveDefinitionSectionPage(currentSiteDefinitionText, api, definitionEditSummary);

		const globalTargets: DeploymentDirectTargets = await generateDirectTargets(site);
		const globalTargetsFilePath: string = path.join(__rootDir, 'src/global.json');
		const globalTargetsEditSummary: string = await makeEditSummary(isSkipAsk, {
			fallbackEditSummary,
			filePath: globalTargetsFilePath,
		});
		for (const [pageTitle, pageContent] of globalTargets) {
			savePages(pageTitle, pageContent, api, globalTargetsEditSummary);
		}

		await apiQueue.onIdle();

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] end of deployment ---`));

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] starting delete unused pages ---`));

		await deleteUnusedPages(api, fallbackEditSummary, isSkipAsk);

		await apiQueue.onIdle();

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] end of delete unused pages ---`));

		const endTime = Date.now(); // 记录结束时间
		const totalSeconds = (endTime - startTime) / 1000; // 计算耗费时间，转换为秒

		// 计算分钟和秒
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		// 获取并格式化结束时间
		const endTimeFormatted = new Date(endTime).toLocaleString();

		console.log(chalk.blue(`Deployment succeeded at ${endTimeFormatted}`)); // 输出结束时间

		// 如果分钟数大于 0，显示 "x 分 x 秒"，否则只显示 "x 秒"
		if (minutes > 0) {
		    console.log(chalk.blue(`Deployment took ${minutes} minutes and ${Math.floor(seconds)} seconds.`)); // 输出耗费时间
		} else {
		    console.log(chalk.blue(`Deployment took ${Math.floor(seconds)} seconds.`)); // 输出耗费时间
		}
	}
};

export {apiQueue, deploy};
