import babel from '@babel/core';
import chalk from 'chalk';
import esbuild from 'esbuild';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import esbuildOptions from './build-esbuild_options.js';
import {DEFAULT_DEFINITION, FOOTER, HEADER, WARNING} from './constant.js';
const __dirname = path.resolve();

/**
 * @param {{code:string; path:string, contentType:'text/css'|'text/javascript', licenseText:string}} object
 */
const write = async ({code: sourceCode, path: outputFileWithPath, contentType, licenseText}) => {
	let fullCode = '';
	switch (contentType) {
		case 'text/css':
			fullCode = `${licenseText}${WARNING}\n\n${HEADER}\n\n${sourceCode}\n${FOOTER}\n`;
			break;
		case 'text/javascript': {
			const licenseTextTrim = licenseText.trim();
			const _licenseText = licenseTextTrim ? `${licenseTextTrim}\n` : '';
			fullCode = `${_licenseText}${WARNING}\n${HEADER}\n(function () {\n\n${sourceCode}\n\n})();\n${FOOTER}\n`;
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
		...esbuildOptions,
		entryPoints: [inputFileWithPath],
		outfile: outputFileWithPath,
	});
};

/**
 * @param {string} script
 * @param {{name:string; licenseText:string}} object
 */
const buildScript = async (script, {name, licenseText}) => {
	const inputScriptWithPath = path.join(__dirname, `src/${name}/${script}`);
	const outputScriptWithPath = path.join(__dirname, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);
	await build(inputScriptWithPath, outputScriptWithPath);
	const babelFileResult = await babel.transformFileAsync(outputScriptWithPath);
	const {code} = babelFileResult;
	await write({
		contentType: 'text/javascript',
		path: outputScriptWithPath,
		code,
		licenseText,
	});
};

/**
 * @param {string[]} scripts Array of script file names for a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildScripts = async (scripts, {name, licenseText}) => {
	for (const script of scripts) {
		await buildScript(script, {
			name,
			licenseText,
		});
	}
};

/**
 * @param {string} style
 * @param {{name:string; licenseText:string}} object
 */
const buildStyle = async (style, {name, licenseText}) => {
	const inputStyleWithPath = path.join(__dirname, `src/${name}/${style}`);
	const outputStyleWithPath = path.join(__dirname, `dist/${name}/${style.replace(/\.less$/, '.css')}`);
	await build(inputStyleWithPath, outputStyleWithPath);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const code = await fsPromises.readFile(outputStyleWithPath);
	await write({
		contentType: 'text/css',
		path: outputStyleWithPath,
		code,
		licenseText,
	});
};

/**
 * @param {string[]} styles Array of style sheet file names for a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildStyles = async (styles, {name, licenseText}) => {
	for (const style of styles) {
		await buildStyle(style, {
			name,
			licenseText,
		});
	}
};

const files = {};
/**
 * @param {string} [currentDir=src] The path of the source file
 * @returns {Promise<Record<string, {definition?:string; script?:string; style?:string; license?:string; scripts:string[]; styles:string[]}>>} An object used to describe source files
 */
const findSourceFile = async (currentDir = 'src') => {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const dirArray = await fsPromises.readdir(currentDir);
	for (const dir of dirArray) {
		const fullPath = path.join(currentDir, dir);
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const stats = await fsPromises.stat(fullPath);
		if (stats.isDirectory()) {
			await findSourceFile(fullPath);
		} else if (!/\.d\.ts$/.test(dir)) {
			const fullPathArray = fullPath.split(process.platform === 'win32' ? '\\' : '/');
			// 仅支持形如src/gadget/index.ts的“一层”路径，因为考虑到子文件夹可能被父文件夹的脚本import
			if (fullPathArray.length !== 3) {
				continue;
			}
			const [_sourceDir, fileDir, fileName] = fullPathArray;
			files[fileDir] ??= {};
			switch (fileName) {
				case 'definition.json':
					files[fileDir].definition = fileName;
					break;
				case 'index.js':
				case 'index.ts':
					files[fileDir].script = fileName;
					break;
				case `${fileDir}.js`:
				case `${fileDir}.ts`:
					if (!files[fileDir].script) {
						files[fileDir].script = fileName;
					}
					break;
				case 'index.css':
				case 'index.less':
					files[fileDir].style = fileName;
					break;
				case `${fileDir}.css`:
				case `${fileDir}.less`:
					if (!files[fileDir].style) {
						files[fileDir].style = fileName;
					}
					break;
				case 'LICENSE':
					files[fileDir].license = fileName;
					break;
			}
			files[fileDir].scripts ??= [];
			if (/\.[jt]s$/.test(fileName)) {
				files[fileDir].scripts.push(fileName);
			}
			files[fileDir].styles ??= [];
			if (/\.(?:css|less)$/.test(fileName)) {
				files[fileDir].styles.push(fileName);
			}
		}
	}
	return files;
};

/**
 * @param {string} [definition] The definition file name of a gadget
 * @param {{name:string}} object The gadget name
 * @returns {Promise<string>} The gadget definition fragment
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
	/** @type {typeof DEFAULT_DEFINITION} */
	const definitionObject = {...DEFAULT_DEFINITION, ...JSON.parse(definitionJsonText)};
	const definitionItem = `* ${name}[ResourceLoader|$1$2]|$3$4$5`;
	let definitionText = '';
	for (const [key, value] of Object.entries(definitionObject)) {
		if (key === 'enable' && value === false) {
			return '';
		}
		const typeOfValue = typeof value;
		const isArray = Array.isArray(value);
		if (
			['category', 'description', 'type'].includes(key) ||
			[false, undefined].includes(value) ||
			(isArray && !value.length)
		) {
			continue;
		}
		switch (typeOfValue) {
			case 'boolean':
				if (key !== 'enable') {
					definitionText += `${key}|`;
				}
				break;
			case 'object':
				if (isArray) {
					definitionText += `${key}=${value.join(',')}|`;
				}
				break;
			case 'string':
				definitionText += `${key}=${value}|`;
				break;
		}
	}
	definitionText = definitionText.replace(/\|$/, '');
	const cleanInvalidCharacters = (text) => {
		return text.replace(/#|==|<>/g, '').trim();
	};
	let categoryText = cleanInvalidCharacters(definitionObject.category);
	categoryText = categoryText ? `#${categoryText}` : '#appear';
	let descriptionText = cleanInvalidCharacters(definitionObject.description);
	descriptionText = descriptionText ? `#${descriptionText}` : '#';
	return definitionItem.replace('$1', definitionText).replace('$4', categoryText).replace('$5', descriptionText);
};

/**
 * @param {{definitionItem:string; definitionItemFiles:string}} object Gadget definition fragment
 * @return {string} The Gadget definition (in the format of MediaWiki:Gadgets-definition item)
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
		.replace(/\|\|/, '|')
		.replace(/\|]/, ']')
		.replace(/\|#/, '#')
		.replace(/\.ts([|#])/g, '.js$1')
		.replace(/\.less([|#])/g, '.css$1')
		.trim();
};

/**
 * Set `dist/definition.txt`
 *
 * @param {string[]} definitions The gadget definitions array (in the format of MediaWiki:Gadgets-definition item)
 */
const setDefinition = async (definitions) => {
	/** @type {Record<string, typeof definitions | undefined>} */
	const definitionObject = {};
	definitions
		.filter((definition) => {
			return definition !== '';
		})
		.forEach((definition) => {
			const [, category] = definition.match(/.*?#(\S+?)#/);
			definitionObject[category] ??= [];
			definitionObject[category].push(definition.replace(/#.*/, ''));
		});
	let definitionText = '';
	for (const [category, definitionItems] of Object.entries(definitionObject)) {
		const categoryHeader = `== ${category} ==`;
		for (const definition of definitionItems) {
			if (definitionText.includes(categoryHeader)) {
				definitionText += `${definition}\n`;
			} else {
				definitionText += `${categoryHeader}\n${definition}\n`;
			}
		}
	}
	const definitionPath = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.close();
};

/**
 * @param {string} license The gadget license file name
 * @param {{name:string}} object The gadget name
 * @returns {Promise<string>} The gadget license file content
 */
const getLicense = async (license, {name}) => {
	if (!license) {
		return '';
	}
	const licenseFileWithPath = path.join(__dirname, `src/${name}/${license}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const licenseText = await fsPromises.readFile(licenseFileWithPath);
	return licenseText ? `${licenseText}\n` : '';
};

export {buildScripts, buildStyles, findSourceFile, cleanDefinition, getDefinition, getLicense, setDefinition};
