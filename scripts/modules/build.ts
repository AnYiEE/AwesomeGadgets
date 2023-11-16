import {
	buildScripts,
	buildStyles,
	generateDefinitionItem,
	generateFileNames,
	getLicense,
	setDefinition,
} from './utils/build-util';
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
		let definitionItemFiles = '';
		const licenseText: string | undefined = getLicense(name, license);

		if (script || scripts) {
			const scriptFileArray: string[] = script ? [script] : scripts;
			const scriptFiles: string = generateFileNames(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			buildPromiseArray.push(
				...buildScripts(name, scriptFileArray, {
					licenseText,
				})
			);
		}

		if (style || styles) {
			const styleFileArray: string[] = style ? [style] : styles;
			const styleFiles: string = generateFileNames(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			buildPromiseArray.push(
				...buildStyles(name, styleFileArray, {
					licenseText,
				})
			);
		}

		const definitionItem: string = generateDefinitionItem(name, definition, definitionItemFiles);
		definitions.push(definitionItem);
	}

	await Promise.all(buildPromiseArray);
	setDefinition(definitions);

	console.log(chalk.yellow('--- end of build ---'));

	return definitions.filter((definition: string): boolean => {
		return !!definition; // Filter out empty definitions
	});
};

export {build};
