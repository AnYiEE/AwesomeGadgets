import {
	buildFiles,
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
 *
 * @param {SourceFiles} sourceFiles Return value of `findSourceFile(/path/to/gadget_files)`
 * @return {string[]} Array of gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const build = async (sourceFiles: SourceFiles): Promise<string[]> => {
	const definitions: string[] = [];

	console.log(chalk.yellow('--- starting build ---'));

	for (const [name, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let definitionItemFiles: string = '|';
		const licenseText: string | undefined = getLicense(name, license);

		if (script || scripts) {
			const scriptFileArray: string[] = await buildFiles(name, 'script', {
				licenseText,
				dependencies: definition.dependencies,
				files: generateFileArray(script, scripts),
			});
			const scriptFiles: string = generateFileNames(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
		}

		if (style || styles) {
			const styleFileArray: string[] = await buildFiles(name, 'style', {
				licenseText,
				files: generateFileArray(style, styles),
			});
			const styleFiles: string = generateFileNames(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
		}

		definitionItemFiles = definitionItemFiles.replace(/\|$/, '');

		const definitionItem: string = generateDefinitionItem(name, definition, definitionItemFiles);
		// Exclude empty definitions (when the gadget is disabled, it will return an empty string)
		if (definitionItem) {
			definitions.push(definitionItem);
		}
	}

	saveDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));

	return definitions;
};

export {build};
