import {buildFiles, generateDefinitionItem, generateFileNames, getLicense, saveDefinition} from './utils/build-util';
import type {SourceFiles} from './types';
import chalk from 'chalk';

/**
 * Compile scripts and styles and generate corresponding definitions
 *
 * @param {SourceFiles} sourceFiles Return value of `findSourceFile(/path/to/gadget_files)`
 * @return {string[]} Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const build = async (sourceFiles: SourceFiles): Promise<string[]> => {
	const buildPromiseArray: Promise<void>[] = [];
	const definitions: string[] = [];

	console.log(chalk.yellow('--- starting build ---'));

	for (const [name, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let definitionItemFiles: string = '|';
		const licenseText: string | undefined = getLicense(name, license);

		if (script || scripts) {
			const scriptFileArray: string[] = script ? [script] : scripts;
			const scriptFiles: string = generateFileNames(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			buildPromiseArray.push(
				...buildFiles(name, 'script', {
					licenseText,
					files: scriptFileArray,
				})
			);
		}

		if (style || styles) {
			const styleFileArray: string[] = style ? [style] : styles;
			const styleFiles: string = generateFileNames(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			buildPromiseArray.push(
				...buildFiles(name, 'style', {
					licenseText,
					files: styleFileArray,
				})
			);
		}

		definitionItemFiles = definitionItemFiles.replace(/\|$/, '');

		const definitionItem: string = generateDefinitionItem(name, definition, definitionItemFiles);
		// Exclude empty definitions (when the gadget is disabled, it will return an empty string)
		if (definitionItem) {
			definitions.push(definitionItem);
		}
	}

	await Promise.all(buildPromiseArray);
	saveDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));

	return definitions;
};

export {build};
