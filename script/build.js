import {buildScripts, buildStyles, cleanDefinition, getDefinition, getLicense, setDefinition} from './build-util.js';

/** @type {string[]} */
const definitions = [];

/**
 * Compile scripts and styles and generate corresponding definitions
 *
 * @param {{definition?:string; script?:string; style?:string; license?:string; scripts:string[]; styles:string[]}} sourceFiles return value of `findSourceFile(/path/to/gadget_files)`
 * @return {Promise<string[]>} definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const build = async (sourceFiles) => {
	for (const [name, {definition, license, script, scripts, style, styles}] of Object.entries(sourceFiles)) {
		let definitionItemFiles = '';
		const licenseText = await getLicense(license, {name});
		if (script || scripts) {
			/** @type {string[]} */
			const scriptFileArray = script ? [script] : scripts;
			const scriptFiles = scriptFileArray.map((_script) => `${name}<>${_script}`).join('|');
			definitionItemFiles += scriptFiles ? `${scriptFiles}|` : '';
			await buildScripts(scriptFileArray, {name, licenseText});
		}
		if (style || styles) {
			/** @type {string[]} */
			const styleFileArray = style ? [style] : styles;
			const styleFiles = styleFileArray.map((_style) => `${name}<>${_style}`).join('|');
			definitionItemFiles += styleFiles ? `${styleFiles}|` : '';
			await buildStyles(styleFileArray, {name, licenseText});
		}
		const definitionItem = cleanDefinition({
			definitionItem: await getDefinition(definition, {name}),
			definitionItemFiles,
		});
		definitions.push(definitionItem);
	}
	await setDefinition(definitions);
	return definitions;
};

export default build;
