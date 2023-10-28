import {buildScripts, buildStyles, cleanDefinition, getDefinition, getLicense, setDefinition} from './build-util.js';

/**
 * @param {string} name
 * @param {string} file
 * @return {string}
 */
const removeDuplicateFileName = (name, file) => {
	const fileNameSplit = file.split('.');
	return `${name}<>${fileNameSplit.shift() === name ? `.${fileNameSplit.join('.')}` : file}`;
};

/**
 * @param {string} name Gadget name
 * @param {string[]} files Array of file names
 * @return {string} Generated file names string
 */
const getFiles = (name, files) => {
	return files
		.map((file) => {
			return removeDuplicateFileName(name, file);
		})
		.join('|');
};

/** @type {string[]} */
const definitions = [];
/**
 * Compile scripts and styles and generate corresponding definitions
 *
 * @param {Record<string, {definition?:string; script?:string; style?:string; license?:string; scripts:string[]; styles:string[]}>} sourceFiles Return value of `findSourceFile(/path/to/gadget_files)`
 * @returns {Promise<string[]>} Definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const build = async (sourceFiles) => {
	for (const [name, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let definitionItemFiles = '';
		const licenseText = await getLicense(license, {
			name,
		});
		if (script || scripts) {
			const scriptFileArray = script ? [script] : scripts;
			const scriptFiles = getFiles(name, scriptFileArray);
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			await buildScripts(scriptFileArray, {
				name,
				licenseText,
			});
		}
		if (style || styles) {
			const styleFileArray = style ? [style] : styles;
			const styleFiles = getFiles(name, styleFileArray);
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			await buildStyles(styleFileArray, {
				name,
				licenseText,
			});
		}
		const definitionItem = cleanDefinition({
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
