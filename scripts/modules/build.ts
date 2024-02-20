import {
	buildFiles,
	cleanUpDist,
	findSourceFile,
	generateDefinitionItem,
	generateFileArray,
	generateFileNames,
	getLicense,
	saveDefinition,
} from './utils/build-util';
import type {SourceFiles} from './types';
import chalk from 'chalk';

/**
 * Compile scripts and styles and generate corresponding definitions
 */
const build = async (): Promise<void> => {
	const definitions: string[] = [];

	console.log(chalk.yellow('--- starting build ---'));

	await cleanUpDist();

	const sourceFiles: SourceFiles = findSourceFile();
	for (const [gadgetName, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let gadgetFiles: string = '|';
		const licenseText: string | undefined = getLicense(gadgetName, license);

		if (script || scripts?.length) {
			const hasVue: boolean = !!scripts?.some((fileName: string): boolean => {
				return fileName.endsWith('.vue');
			});
			if (hasVue && !script) {
				console.log(
					chalk.yellow(
						`The ${chalk.bold(gadgetName)} uses Vue single-file components, but the entry file does not exist, skip it.`
					)
				);
				continue;
			}

			const builtScriptFileNames: string[] = await buildFiles(gadgetName, 'script', {
				licenseText,
				dependencies: definition.dependencies,
				files: generateFileArray(script, scripts),
			});
			const scriptFileNames: string = generateFileNames(gadgetName, builtScriptFileNames);
			gadgetFiles += scriptFileNames ? `${scriptFileNames}|` : '';
		} else if (style || styles?.length) {
			const builtStyleFileNames: string[] = await buildFiles(gadgetName, 'style', {
				licenseText,
				files: generateFileArray(style, styles),
			});
			const styleFileNames: string = generateFileNames(gadgetName, builtStyleFileNames);
			gadgetFiles += styleFileNames ? `${styleFileNames}|` : '';
		}

		gadgetFiles = gadgetFiles.replace(/\|$/, '');

		const definitionItem: string = generateDefinitionItem(gadgetName, definition, gadgetFiles);
		definitions.push(definitionItem);
	}

	saveDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));
};

export {build};
