import {buildScripts, buildStyles, cleanDefinition, getDefinition, getLicense, setDefinition} from './build-util';
import type {SourceFiles} from './scripts';

/**
 * @param {string} name The gadget name
 * @param {string} file The file name
 * @return {string} The generated file name
 */
const removeDuplicateFileName = (name: string, file: string): string => {
	const fileNameSplit: string[] = file.split('.');
	return `${name}<>${fileNameSplit.shift() === name ? `.${fileNameSplit.join('.')}` : file}`;
};

/**
 * @param {string} name The gadget name
 * @param {string[]} files The file names array
 * @return {string} The generated file names string
 */
const getFiles = (name: string, files: string[]): string => {
	return files
		.map((file: string): string => {
			return removeDuplicateFileName(name, file);
		})
		.join('|');
};

const definitions: string[] = [];
/**
 * Compile scripts and styles and generate corresponding definitions
 *
 * @param {SourceFiles} sourceFiles Return value of `findSourceFile(/path/to/gadget_files)`
 * @returns {Promise<typeof definitions>} Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const build = async (sourceFiles: SourceFiles): Promise<typeof definitions> => {
	for (const [name, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let definitionItemFiles = '';
		const licenseText: string = await getLicense(license, {
			name,
		});
		if (script || scripts) {
			const scriptFileArray: string[] = script ? [script] : scripts;
			const scriptFiles: string = getFiles(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			await buildScripts(scriptFileArray, {
				name,
				licenseText,
			});
		}
		if (style || styles) {
			const styleFileArray: string[] = style ? [style] : styles;
			const styleFiles: string = getFiles(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			await buildStyles(styleFileArray, {
				name,
				licenseText,
			});
		}
		const definitionItem: string = cleanDefinition({
			definitionItem: await getDefinition(definition, {
				name,
			}),
			definitionItemFiles,
		});
		definitions.push(definitionItem);
	}
	await setDefinition(definitions);
	return definitions;
};

export default build;
