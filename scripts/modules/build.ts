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
	console.log(chalk.yellow('--- starting build ---'));

	await cleanUpDist();

	const definitions = await Promise.all(
		Object.entries(findSourceFile()).map(
			async ([gadgetName, {definition, license, script, scripts, style, styles}]) => {
				let gadgetFiles = '|';
				const licenseText = getLicense(gadgetName, license);

				if (script || scripts?.length) {
					const hasVue = scripts?.some((fileName) => {
						return fileName.endsWith('.vue');
					});
					if (hasVue && !script) {
						console.log(
							chalk.yellow(
								`The ${chalk.bold(gadgetName)} uses Vue components but missing entry file, skipping it.`
							)
						);
					} else {
						const {dependencies, externalPackages} = definition;
						const builtScriptFileNames = await buildFiles(gadgetName, 'script', {
							dependencies,
							externalPackages,
							licenseText,
							files: generateFileArray(script, scripts),
						});
						const scriptFileNames = generateFileNames(gadgetName, builtScriptFileNames);
						gadgetFiles += scriptFileNames ? `${scriptFileNames}|` : '';
					}
				} else if (style || styles?.length) {
					const builtStyleFileNames = await buildFiles(gadgetName, 'style', {
						licenseText,
						files: generateFileArray(style, styles),
					});
					const styleFileNames = generateFileNames(gadgetName, builtStyleFileNames);
					gadgetFiles += styleFileNames ? `${styleFileNames}|` : '';
				}

				gadgetFiles = gadgetFiles.replace(/\|$/, '');
				if (!gadgetFiles) {
					return null;
				}

				return generateDefinitionItem(gadgetName, definition, gadgetFiles);
			}
		)
	);

	saveDefinition(definitions.filter(Boolean) as string[]);

	console.log(chalk.yellow('--- end of build ---'));
};

export {build};
