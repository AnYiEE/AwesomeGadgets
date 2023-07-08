import babel from '@babel/core';
import chalk from 'chalk';
import esbuild from 'esbuild';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import esbuildOptions from './build-esbuild_options.js';
import {BANNER, FOOTER, WARNING, DEFAULT_DEFINITION} from './constant.js';
const __dirname = path.resolve();

/**
 * @param {Object} object
 * @param {string} object.code
 * @param {string} object.path
 * @param {'text/css'|'text/javascript'} object.contentType
 * @param {string} object.licenseText
 */
const write = async ({code: sourceCode, path: outputFileWithPath, contentType, licenseText}) => {
	let fullCode = '';
	switch (contentType) {
		case 'text/css':
			fullCode = licenseText + WARNING + '\n\n' + BANNER + '\n\n' + sourceCode + '\n' + FOOTER + '\n';
			break;
		case 'text/javascript': {
			const licenseTextTrim = licenseText.trim();
			const _licenseText = licenseTextTrim ? licenseTextTrim + '\n' : '';
			fullCode =
				_licenseText +
				WARNING +
				'\n' +
				BANNER +
				'\n(function () {\n\n' +
				sourceCode +
				'\n\n})();\n' +
				FOOTER +
				'\n';
			break;
		}
		default:
			fullCode = sourceCode;
	}
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(outputFileWithPath, 'r+');
	await fileHandle.writeFile(fullCode);
	await fileHandle.close();
};

/**
 * @param {string} inputFileWithPath
 * @param {string} outputFileWithPath
 */
const build = async (inputFileWithPath, outputFileWithPath) => {
	await esbuild.build({
		entryPoints: [inputFileWithPath],
		outfile: outputFileWithPath,
		...esbuildOptions,
	});
};

/**
 * @param {string} script
 * @param {Object} object
 * @param {string} object.name
 * @param {string} object.licenseText
 */
const buildScript = async (script, {name, licenseText}) => {
	const inputScriptWithPath = path.join(__dirname, `src/${name}/${script}`);
	const outputScriptWithPath = path.join(__dirname, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);
	await build(inputScriptWithPath, outputScriptWithPath);
	const babelFileResult = await babel.transformFileAsync(outputScriptWithPath);
	const code = babelFileResult.code;
	await write({contentType: 'text/javascript', path: outputScriptWithPath, code, licenseText});
};

/**
 * @param {string[]} scripts Array of file names for the entry files of a gadget
 * @param {Object} object The name and license text of this gadget
 * @param {string} object.name
 * @param {string} object.licenseText
 */
const buildScripts = async (scripts, {name, licenseText}) => {
	for (const script of scripts) {
		await buildScript(script, {name, licenseText});
	}
};

/**
 * @param {string} style
 * @param {Object} object
 * @param {string} object.name
 * @param {string} object.licenseText
 */
const buildStyle = async (style, {name, licenseText}) => {
	const inputStyleWithPath = path.join(__dirname, `src/${name}/${style}`);
	const outputStyleWithPath = path.join(__dirname, `dist/${name}/${style.replace(/\.less$/, '.css')}`);
	await build(inputStyleWithPath, outputStyleWithPath);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const code = await fsPromises.readFile(outputStyleWithPath);
	await write({contentType: 'text/css', path: outputStyleWithPath, code, licenseText});
};

/**
 * @param {string[]} styles Array of style sheet file names for a gadget
 * @param {Object} object The name and license text of this gadget
 * @param {string} object.name
 * @param {string} object.licenseText
 */
const buildStyles = async (styles, {name, licenseText}) => {
	for (const style of styles) {
		await buildStyle(style, {name, licenseText});
	}
};

const files = {};
/**
 * @param {string} currentDir The path of the source file
 * @return {Promise<{definition?:string; script?:string; style?:string; license?:string; scripts:string[]; styles:string[]}>}
 */
const findSourceFile = async (currentDir) => {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const dirList = await fsPromises.readdir(currentDir);
	for (const dir of dirList) {
		const fullPath = path.join(currentDir, dir);
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const stats = await fsPromises.stat(fullPath);
		if (stats.isDirectory()) {
			await findSourceFile(fullPath);
		} else if (
			!/\.d\.ts$/ // !/(?<!\.d)\.ts$/
				.test(dir)
		) {
			const fullPathArray = fullPath.split(process.platform === 'win32' ? '\\' : '/');
			// 仅支持形如src/gadget/index.ts的“一层”路径，因为考虑到子文件夹可能被父文件夹的脚本import
			if (fullPathArray.length !== 3) {
				return;
			}
			const [_sourceDir, fileDir, fileName] = fullPathArray;
			files[fileDir] = files[fileDir] ?? {};
			switch (fileName) {
				case 'definition.json':
					files[fileDir].definition = fileName;
					break;
				case 'index.ts':
				case `${fileDir}.js`:
				case `${fileDir}.ts`:
					files[fileDir].script = fileName;
					break;
				case 'index.css':
				case `${fileDir}.css`:
				case 'index.less':
				case `${fileDir}.less`:
					files[fileDir].style = fileName;
					break;
				case 'LICENSE':
					files[fileDir].license = fileName;
					break;
			}
			files[fileDir].scripts = files[fileDir].scripts ?? [];
			if (/\.[jt]s$/.test(fileName)) {
				files[fileDir].scripts.push(fileName);
			}
			files[fileDir].styles = files[fileDir].styles ?? [];
			if (/\.(?:css|less)$/.test(fileName)) {
				files[fileDir].styles.push(fileName);
			}
		}
	}
	return files;
};

/**
 * @param {string} definition definition file name of a gadget
 * @param {Object} object The name of this gadget
 * @param {string} object.name
 * @return {Promise<string>} gadget definition fragment
 */
const getDefinition = async (definition, {name}) => {
	const definitionFileWithPath = path.join(__dirname, `src/${name}/${definition}`);
	let definitionJsonText = '{}';
	try {
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		definitionJsonText = await fsPromises.readFile(definitionFileWithPath);
	} catch {
		console.warn(
			chalk.yellow(`definition.json for ${chalk.bold(name)} is missing, default definition will be used.`)
		);
	}
	const definitionObject = Object.assign({}, DEFAULT_DEFINITION, JSON.parse(definitionJsonText));
	const definitionItem = `* ${name}[ResourceLoader|$1$2]|$3$4`;
	let definitionText = '';
	for (const [key, value] of Object.entries(definitionObject)) {
		if (key === 'enable' && value === false) {
			return '';
		}
		const typeOfValue = typeof value;
		if (['description', 'type'].includes(key) || !value || (typeOfValue === 'object' && !value.length)) {
			continue;
		}
		switch (typeOfValue) {
			case 'boolean':
				if (key !== 'enable') {
					definitionText += `${key}|`;
				}
				break;
			case 'object':
				definitionText += `${key}=${value.join(',')}|`;
				break;
			case 'string':
				definitionText += `${key}=${value}|`;
				break;
		}
	}
	definitionText = definitionText.replace(/\|$/, '');
	let descriptionText = definitionObject.description;
	descriptionText = descriptionText ? `#${descriptionText}` : '#';
	return definitionItem.replace('$1', definitionText).replace('$4', descriptionText);
};

/**
 * @param {Object} object gadget definition fragment
 * @param {string} object.definitionItem
 * @param {string} object.definitionItemFiles
 * @return {string} gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const cleanDefinition = ({definitionItem, definitionItemFiles}) => {
	const isStyleOnly = !/\.[jt]s\|/.test(definitionItemFiles);
	let definitionItemFull = definitionItem
		.replace('$2', isStyleOnly ? '|type=styles' : '')
		.replace('$3', definitionItemFiles);
	if (isStyleOnly) {
		definitionItemFull = definitionItemFull.replace(/[|\]]dependencies=\S+?([|\]])/, '$1');
	}
	return definitionItemFull
		.replace(/\|]/, ']')
		.replace(/\|#/, '#')
		.replace(/\.ts([|#])/g, '.js$1')
		.replace(/\.less([|#])/g, '.css$1')
		.trim();
};

/**
 * @param {string[]} definitions definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 */
const setDefinition = async (definitions) => {
	const definitionArray = definitions
		.filter((definition) => definition !== '')
		.map((definition) => definition.replace(/#.*/, ''));
	const definitionText = definitionArray.join('\n').replace(/(\S+?$)/, '$1\n');
	const definitionPath = path.join(__dirname, `dist/definition.txt`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
};

/**
 * @param {string} license The license file name of a gadget
 * @param {Object} object The name of this gadget
 * @param {string} object.name
 * @return {Promise<string>} The license text of this gadget
 */
const getLicense = async (license, {name}) => {
	if (!license) {
		return '';
	}
	const licenseFileWithPath = path.join(__dirname, `src/${name}/${license}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const licenseText = await fsPromises.readFile(licenseFileWithPath);
	return licenseText ? licenseText + '\n' : '';
};

export {buildScripts, buildStyles, findSourceFile, cleanDefinition, getDefinition, getLicense, setDefinition};
