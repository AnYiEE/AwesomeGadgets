import {DEFAULT_DEFINITION, FOOTER, HEADER, WARNING} from './constant';
import type {DefaultDefinition, SourceFiles} from './scripts';
import babel, {type BabelFileResult} from '@babel/core';
import fsPromises, {type FileHandle} from 'node:fs/promises';
import type {Stats} from 'node:fs';
import chalk from 'chalk';
import esbuild from 'esbuild';
import esbuildOptions from './build-esbuild_options';
import path from 'node:path';
import process from 'node:process';
const __dirname = path.resolve();

const write = async ({
	contentType,
	licenseText,
	code: sourceCode,
	path: outputFileWithPath,
}: {
	contentType: 'text/css' | 'text/javascript';
	licenseText: string;
	code: string;
	path: string;
}): Promise<void> => {
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
	const fileHandle: FileHandle = await fsPromises.open(outputFileWithPath, 'w');
	await fileHandle.writeFile(fullCode);
	await fileHandle.datasync();
	await fileHandle.close();
};

const build = async (inputFileWithPath: string, outputFileWithPath: string): Promise<void> => {
	await esbuild.build({
		...esbuildOptions,
		entryPoints: [inputFileWithPath],
		outfile: outputFileWithPath,
	});
};

/**
 * @param {string} script The script file name of a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildScript = async (script: string, {name, licenseText}: {name: string; licenseText: string}): Promise<void> => {
	const inputScriptWithPath: string = path.join(__dirname, `src/${name}/${script}`);
	const outputScriptWithPath: string = path.join(__dirname, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);
	await build(inputScriptWithPath, outputScriptWithPath);
	const babelFileResult: BabelFileResult = (await babel.transformFileAsync(outputScriptWithPath)) as BabelFileResult;
	const {code} = babelFileResult;
	await write({
		licenseText,
		code: code as string,
		contentType: 'text/javascript',
		path: outputScriptWithPath,
	});
};

/**
 * @param {string[]} scripts Array of script file names for a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildScripts = async (
	scripts: string[],
	{name, licenseText}: {name: string; licenseText: string}
): Promise<void> => {
	for (const script of scripts) {
		await buildScript(script, {
			name,
			licenseText,
		});
	}
};

/**
 * @param {string} style The style sheet file name of a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildStyle = async (style: string, {name, licenseText}: {name: string; licenseText: string}): Promise<void> => {
	const inputStyleWithPath: string = path.join(__dirname, `src/${name}/${style}`);
	const outputStyleWithPath: string = path.join(__dirname, `dist/${name}/${style.replace(/\.less$/, '.css')}`);
	await build(inputStyleWithPath, outputStyleWithPath);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileBuffer: Buffer = await fsPromises.readFile(outputStyleWithPath);
	const code: string = fileBuffer.toString();
	await write({
		code,
		licenseText,
		contentType: 'text/css',
		path: outputStyleWithPath,
	});
};

/**
 * @param {string[]} styles Array of style sheet file names for a gadget
 * @param {{name:string; licenseText:string}} object The name and license file content of this gadget
 */
const buildStyles = async (
	styles: string[],
	{name, licenseText}: {name: string; licenseText: string}
): Promise<void> => {
	for (const style of styles) {
		await buildStyle(style, {
			name,
			licenseText,
		});
	}
};

const files: SourceFiles = {};
/**
 * @param {string} [currentDir=src] The path of the source file
 * @returns {Promise<SourceFiles>} An object used to describe source files
 */
const findSourceFile = async (currentDir = 'src'): Promise<SourceFiles> => {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const dirArray: string[] = await fsPromises.readdir(currentDir);
	for (const dir of dirArray) {
		const fullPath: string = path.join(currentDir, dir);
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const stats: Stats = await fsPromises.stat(fullPath);
		if (stats.isDirectory()) {
			await findSourceFile(fullPath);
		} else if (!/\.d\.ts$/.test(dir)) {
			const fullPathArray: string[] = fullPath.split(process.platform === 'win32' ? '\\' : '/');
			// 仅支持形如`src/gadget/index.ts`的“一层”路径，因为考虑到子文件夹可能被父文件夹的脚本导入
			// Only supports "one-layer" paths like `src/gadget/index.ts`, because it considers that subfolders may be imported by scripts in parent folders
			if (fullPathArray.length !== 3) {
				continue;
			}
			const [_sourceDir, fileDir, fileName] = fullPathArray;
			files[fileDir] ??= {} as SourceFiles[''];
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
				if (/\.ts$/.test(fileName)) {
					files[fileDir].scripts = [
						...new Set(
							files[fileDir].scripts.filter((script: string): boolean => {
								return script !== fileName.replace(/\.ts$/, '.js');
							})
						),
					];
				}
			}
			files[fileDir].styles ??= [];
			if (/\.(?:css|less)$/.test(fileName)) {
				files[fileDir].styles.push(fileName);
				if (/\.less$/.test(fileName)) {
					files[fileDir].styles = [
						...new Set(
							files[fileDir].styles.filter((style: string): boolean => {
								return style !== fileName.replace(/\.less$/, '.css');
							})
						),
					];
				}
			}
		}
	}
	return files;
};

/**
 * @param {string|undefined} [definition] The definition file name of a gadget
 * @param {{name:string}} object The gadget name
 * @returns {Promise<string>} The gadget definition fragment
 */
const getDefinition = async (definition: string | undefined, {name}: {name: string}): Promise<string> => {
	const definitionFileWithPath: string = path.join(__dirname, `src/${name}/${definition}`);
	let definitionJsonText = '{}';
	try {
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const fileBuffer: Buffer = await fsPromises.readFile(definitionFileWithPath);
		definitionJsonText = fileBuffer.toString();
	} catch {
		console.warn(
			chalk.yellow(`definition.json for ${chalk.bold(name)} is missing, the default definition will be used.`)
		);
	}
	const definitionObject: DefaultDefinition = {...DEFAULT_DEFINITION, ...JSON.parse(definitionJsonText)};
	const definitionItem = `* ${name}[ResourceLoader|$1$2]|$3$4$5`;
	let definitionText = '';
	for (const [key, value] of Object.entries(definitionObject)) {
		if (key === 'enable' && value === false) {
			return '';
		}
		const typeOfValue: typeof value = typeof value;
		const isArray: boolean = Array.isArray(value);
		if (
			['description', 'section', 'type'].includes(key) ||
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
	const cleanInvalidCharacters = (text: string): string => {
		return text.replace(/#|==|<>/g, '').trim();
	};
	let sectionText: string = cleanInvalidCharacters(definitionObject.section);
	sectionText = sectionText ? `#${sectionText}` : '#appear';
	let descriptionText: string = cleanInvalidCharacters(definitionObject.description);
	descriptionText = descriptionText ? `#${descriptionText}` : '#';
	return definitionItem.replace('$1', definitionText).replace('$4', sectionText).replace('$5', descriptionText);
};

/**
 * @param {{definitionItem:string; definitionItemFiles:string}} object Gadget definition fragment
 * @return {string} The Gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const cleanDefinition = ({
	definitionItem,
	definitionItemFiles,
}: {
	definitionItem: string;
	definitionItemFiles: string;
}): string => {
	const isStyleOnly = !/\.[jt]s\|/.test(definitionItemFiles);
	let definitionItemFull: string = definitionItem
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
const setDefinition = async (definitions: string[]): Promise<void> => {
	const definitionObject: Record<string, typeof definitions> = {};
	for (const definition of definitions.filter((_definition: string): boolean => {
		return _definition !== '';
	})) {
		const [, section] = definition.match(/.*?#(\S+?)#/) as RegExpExecArray;
		definitionObject[section] ??= [];
		definitionObject[section].push(definition.replace(/#.*/, ''));
	}
	const definitionObjectSorted: typeof definitionObject = {};
	for (const key of Object.keys(definitionObject).sort()) {
		definitionObjectSorted[key] = definitionObject[key];
	}
	let definitionText = '';
	for (const [section, definitionItems] of Object.entries(definitionObjectSorted)) {
		const sectionHeader = `== ${section} ==`;
		for (const definition of definitionItems) {
			if (definitionText.includes(sectionHeader)) {
				definitionText += `${definition}\n`;
			} else {
				definitionText += `${sectionHeader}\n${definition}\n`;
			}
		}
	}
	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileHandle: FileHandle = await fsPromises.open(definitionPath, 'w');
	await fileHandle.writeFile(definitionText);
	await fileHandle.datasync();
	await fileHandle.close();
};

/**
 * @param {string|undefined} license The gadget license file name
 * @param {{name:string}} object The gadget name
 * @returns {Promise<string>} The gadget license file content
 */
const getLicense = async (license: string | undefined, {name}: {name: string}): Promise<string> => {
	if (!license) {
		return '';
	}
	const licenseFileWithPath: string = path.join(__dirname, `src/${name}/${license}`);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const fileBuffer: Buffer = await fsPromises.readFile(licenseFileWithPath);
	return fileBuffer.length ? `${fileBuffer}\n` : '';
};

export {buildScripts, buildStyles, cleanDefinition, findSourceFile, getDefinition, getLicense, setDefinition};
