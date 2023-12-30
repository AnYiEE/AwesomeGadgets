import {
	buildFiles,
	generateDefinitionItem,
	generateFileArray,
	generateFileNames,
	getLicense,
	saveDefinition,
} from './utils/build-util';
import PQueue from 'p-queue';
import type {SourceFiles} from './types';
import chalk from 'chalk';

/**
 * @private
 */
const buildQueue: PQueue = new PQueue();

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
			const scriptFileArray: string[] = generateFileArray(script, scripts);
			const scriptFiles: string = generateFileNames(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			buildFiles(name, 'script', {
				licenseText,
				dependencies: definition.dependencies,
				files: scriptFileArray,
				queue: buildQueue,
			});
		}

		if (style || styles) {
			const styleFileArray: string[] = generateFileArray(style, styles);
			const styleFiles: string = generateFileNames(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			buildFiles(name, 'style', {
				licenseText,
				files: styleFileArray,
				queue: buildQueue,
			});
		}

		definitionItemFiles = definitionItemFiles.replace(/\|$/, '');

		const definitionItem: string = generateDefinitionItem(name, definition, definitionItemFiles);
		// Exclude empty definitions (when the gadget is disabled, it will return an empty string)
		if (definitionItem) {
			definitions.push(definitionItem);
		}
	}

	await buildQueue.onIdle();
	saveDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));

	return definitions;
};

export {build};
