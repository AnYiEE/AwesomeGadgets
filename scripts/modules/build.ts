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
import chalk from 'chalk';

/**
 * Compile scripts and styles and generate corresponding definitions
 */
const build = async () => {
	const definitions: string[] = [];

	console.log(chalk.yellow('--- starting build ---'));

	await cleanUpDist();

	const sourceFiles = findSourceFile();
	for (const [gadgetName, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let gadgetFiles = '|';
		const licenseText = getLicense(gadgetName, license);

		if (script || (scripts && scripts.length)) {
			const hasVue = Boolean(
				scripts?.some((fileName) => {
					return fileName.endsWith('.vue');
				})
			);
			if (hasVue && !script) {
				console.log(
					chalk.yellow(
						`The ${chalk.bold(gadgetName)} uses Vue single-file components, but the entry file does not exist, skip it.`
					)
				);
				continue;
			}

			const {dependencies, externalPackages} = definition;
			const builtScriptFileNames = await buildFiles(gadgetName, 'script', {
				dependencies,
				externalPackages,
				licenseText,
				files: generateFileArray(script, scripts),
			});
			const scriptFileNames = generateFileNames(gadgetName, builtScriptFileNames);
			gadgetFiles += scriptFileNames ? `${scriptFileNames}|` : '';
		} else if (style || styles?.length) {
			const builtStyleFileNames = await buildFiles(gadgetName, 'style', {
				licenseText,
				files: generateFileArray(style, styles),
			});
			const styleFileNames = generateFileNames(gadgetName, builtStyleFileNames);
			gadgetFiles += styleFileNames ? `${styleFileNames}|` : '';
		}

		gadgetFiles = gadgetFiles.replace(/\|$/, '');

		const definitionItem = generateDefinitionItem(gadgetName, definition, gadgetFiles);
		definitions.push(definitionItem);
	}

	saveDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));
};

export {build};
