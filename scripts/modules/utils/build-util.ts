import {BANNER, DEFAULT_DEFINITION, GLOBAL_REQUIRES_ES6, HEADER} from '../../constant';
import type {DefaultDefinition, SourceFiles} from '../types';
import babel, {type BabelFileResult, type PluginItem, type TransformOptions} from '@babel/core';
import esbuild, {type OutputFile} from 'esbuild';
import fs, {type PathOrFileDescriptor, type Stats} from 'node:fs';
import PACKAGE from '../../../package.json' assert {type: 'json'};
import chalk from 'chalk';
import {esbuildOptions} from '../build-esbuild_options';
import path from 'node:path';
import process from 'node:process';
const __dirname = path.resolve();

const trim = (string?: string): string => {
	const stringTrim: string = (string ?? '').trim();

	return stringTrim ? `${stringTrim}\n` : '';
};

const writeFile = (
	sourceCode: string,
	outputFilePath: string,
	{
		contentType,
		licenseText,
	}: {
		contentType?: 'application/javascript' | 'text/css';
		licenseText?: string;
	} = {}
): void => {
	let fileContent = '';
	sourceCode = trim(sourceCode);

	switch (contentType) {
		case 'application/javascript':
		case 'text/css':
			fileContent = `${trim(licenseText)}${trim(HEADER)}/* <nowiki> */\n\n${sourceCode}\n/* </nowiki> */\n`;
			break;
		default:
			fileContent = sourceCode;
	}

	const outputDirectoryPath = path.dirname(outputFilePath);
	fs.mkdirSync(outputDirectoryPath, {
		recursive: true,
	});

	const fileDescriptor: PathOrFileDescriptor = fs.openSync(outputFilePath, 'w');
	fs.writeFileSync(fileDescriptor, fileContent);
	fs.fdatasyncSync(fileDescriptor);
	fs.closeSync(fileDescriptor);
};

const build = async (inputFilePath: string, outputFilePath: string): Promise<string> => {
	const buildResult = await esbuild.build({
		...esbuildOptions,
		entryPoints: [inputFilePath],
		outfile: outputFilePath,
	});

	return (buildResult.outputFiles as OutputFile[])[0].text;
};

const bundle = async (inputFilePath: string, code: string): Promise<string> => {
	const buildResult = await esbuild.build({
		...esbuildOptions,
		stdin: {
			contents: code,
			resolveDir: __dirname,
			sourcefile: inputFilePath,
		},
		target: GLOBAL_REQUIRES_ES6 ? undefined : 'es5',
	});

	return (buildResult.outputFiles as OutputFile[])[0].text;
};

const generateTransformOptions = (): TransformOptions => {
	const transformOptions: TransformOptions = {
		presets: [
			[
				'@babel/preset-env',
				{
					bugfixes: true,
					corejs: {
						version: PACKAGE.devDependencies['core-js'].match(/\d+(?:.\d+){0,2}/)?.[0],
					},
					modules: false,
					useBuiltIns: 'usage',
				},
			],
		],
		compact: false,
	};

	if (GLOBAL_REQUIRES_ES6) {
		(transformOptions.presets as PluginItem[])[0][1].exclude = ['es.array.push'];
		// 以下关键字和运算符无法被 MediaWiki（>= 1.39）的 JavaScript 压缩器良好支持，即使设置了 requiresES6 标识
		// The following keywords and operators are not well supported by MediaWiki's (>= 1.40) JavaScript minifier, even if the `requiresES6` flag is true
		transformOptions.plugins = [
			// keywords
			// ES2015
			'@babel/plugin-transform-for-of', // transform for-of loops
			'@babel/plugin-transform-template-literals', // `foo${bar}` -> 'foo'.concat(bar)
			// ES2017
			'@babel/plugin-transform-async-to-generator', // transform async/await to generator
			// ES2018
			'@babel/plugin-transform-async-generator-functions', // transform async generator to normal generator
			// ES2020
			'@babel/plugin-transform-optional-chaining', // foo?.bar
			// operators
			// ES2020
			'@babel/plugin-transform-nullish-coalescing-operator', // foo ?? bar
			// ES2021
			'@babel/plugin-transform-logical-assignment-operators', // foo ??= bar
			'@babel/plugin-transform-numeric-separator', // 1_000 -> 1000
		];
	} else {
		// 以下关键字无法被旧版本的 MediaWiki（< 1.39）的 JavaScript 压缩器良好支持
		// The following keywords are not well supported by the JavaScript minifier in older versions of MediaWiki (< 1.40)
		transformOptions.plugins = [
			...(transformOptions.plugins as string[]),
			// keywords
			// ES3
			'@babel/plugin-transform-member-expression-literals', // obj.const -> obj['const']
			'@babel/plugin-transform-property-literals', // {const: 1} -> {'const': 1}
			'@babel/plugin-transform-reserved-words', // const abstract = 1 -> const _abstract = 1
		];
	}

	return transformOptions;
};

const transform = async (inputFilePath: string, code: string): Promise<string> => {
	const babelFileResult: BabelFileResult = (await babel.transformAsync(code, {
		...generateTransformOptions(),
		cwd: __dirname,
		filename: inputFilePath,
	})) as BabelFileResult;
	const {code: transformOutput} = babelFileResult;

	return transformOutput as string;
};

/**
 * @param {string} name The gadget name
 * @param {string} script The script file name of this gadget
 * @param {{licenseText?:string; babelTransformOptions:TransformOptions}} object The license file content of this gadget and the `.babelrc` file parsed object
 */
const buildScript = async (name: string, script: string, {licenseText}: {licenseText?: string}): Promise<void> => {
	const inputFilePath: string = path.join(__dirname, `src/${name}/${script}`);
	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFilePath: string = path.join(__dirname, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);
	const transformOutput: string = await transform(inputFilePath, buildOutput);
	const bundleOutput: string = await bundle(inputFilePath, transformOutput);

	writeFile(bundleOutput as string, outputFilePath, {
		licenseText,
		contentType: 'application/javascript',
	});
};

/**
 * @param {string} name The gadget name
 * @param {string} style The style sheet file name of this gadget
 * @param {{licenseText?:string}?} object The license file content of this gadget
 */
const buildStyle = async (name: string, style: string, {licenseText}: {licenseText?: string} = {}): Promise<void> => {
	const inputFilePath: string = path.join(__dirname, `src/${name}/${style}`);
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFilePath: string = path.join(__dirname, `dist/${name}/${style.replace(/\.less$/, '.css')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);

	writeFile(buildOutput, outputFilePath, {
		licenseText,
		contentType: 'text/css',
	});
};

/**
 * @param {string} name The gadget name
 * @param {'script'|'style'} type The type of target files
 * @param {{files:string[]; licenseText?:string}} object The license file content of this gadget and the array of file names for this gadget
 * @return {Promise<void>[]} The build tasks
 */
const buildFiles = (
	name: string,
	type: 'script' | 'style',
	{files, licenseText}: {files: string[]; licenseText?: string}
): Promise<void>[] => {
	const buildFile: typeof buildScript | typeof buildStyle = type === 'script' ? buildScript : buildStyle;

	const buildQueue: Promise<void>[] = [];
	for (const file of files) {
		buildQueue.push(
			buildFile(name, file, {
				licenseText,
			})
		);
	}

	return buildQueue;
};

const sourceFiles: SourceFiles = {};
/**
 * @param {string?} [currentPath=src] The path of the current source file
 *
 * @summary DO NOT set this parameter when calling the function directly, it is only used for recursion
 *
 * @return {SourceFiles} An object used to describe source files
 */
const findSourceFile = (currentPath = 'src'): SourceFiles => {
	const subDirAndFileNameArray: string[] = fs.readdirSync(currentPath);
	for (const subDirOrFileName of subDirAndFileNameArray) {
		const fullPath: string = path.join(currentPath, subDirOrFileName);

		const stats: Stats = fs.statSync(fullPath);
		if (stats.isDirectory()) {
			findSourceFile(fullPath);
		} else if (!/\.d\.ts$/.test(subDirOrFileName)) {
			const pathSplitArray: string[] = fullPath.split(process.platform === 'win32' ? '\\' : '/');

			// 仅支持形如`src/gadget/index.ts`的“一层”路径，因为考虑到子文件夹可能被父文件夹的脚本导入
			// Only supports "one-layer" paths like `src/gadget/index.ts`, because it considers that subfolders may be imported by scripts in parent folders
			if (pathSplitArray.length !== 3) {
				continue;
			}

			const [_rootDir, gadgetName, fileName] = pathSplitArray;
			sourceFiles[gadgetName] ??= {} as SourceFiles[''];

			switch (fileName) {
				case 'definition.json':
					sourceFiles[gadgetName].definition = fileName;
					break;
				case 'index.js':
				case 'index.ts':
					sourceFiles[gadgetName].script = fileName;
					break;
				case `${gadgetName}.js`:
				case `${gadgetName}.ts`:
					if (!sourceFiles[gadgetName].script) {
						sourceFiles[gadgetName].script = fileName;
					}
					break;
				case 'index.css':
				case 'index.less':
					sourceFiles[gadgetName].style = fileName;
					break;
				case `${gadgetName}.css`:
				case `${gadgetName}.less`:
					if (!sourceFiles[gadgetName].style) {
						sourceFiles[gadgetName].style = fileName;
					}
					break;
				case 'LICENSE':
					sourceFiles[gadgetName].license = fileName;
					break;
			}

			sourceFiles[gadgetName].scripts ??= [];
			if (/\.[jt]s$/.test(fileName)) {
				sourceFiles[gadgetName].scripts.push(fileName);
				if (/\.ts$/.test(fileName)) {
					sourceFiles[gadgetName].scripts = [
						...new Set(
							sourceFiles[gadgetName].scripts.filter((script: string): boolean => {
								return script !== fileName.replace(/\.ts$/, '.js');
							})
						),
					];
				}
			}

			sourceFiles[gadgetName].styles ??= [];
			if (/\.(?:css|less)$/.test(fileName)) {
				sourceFiles[gadgetName].styles.push(fileName);
				if (/\.less$/.test(fileName)) {
					sourceFiles[gadgetName].styles = [
						...new Set(
							sourceFiles[gadgetName].styles.filter((style: string): boolean => {
								return style !== fileName.replace(/\.less$/, '.css');
							})
						),
					];
				}
			}
		}
	}

	return sourceFiles;
};

/**
 * @param {string} name The gadget name
 * @param {string|undefined} definition The definition file name of this gadget
 * @param {string} files All files used by this gadget
 * @return {string} The Gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const generateDefinitionItem = (name: string, definition: string | undefined, files: string): string => {
	let definitionText = '|';

	let definitionJsonText = '{}';
	try {
		if (!definition) {
			throw new ReferenceError('definition.json is missing.');
		}
		const definitionFilePath: string = path.join(__dirname, `src/${name}/${definition}`);
		const fileBuffer: Buffer = fs.readFileSync(definitionFilePath);
		definitionJsonText = fileBuffer.toString();
	} catch {
		console.log(
			chalk.yellow(
				`${chalk.italic('definition.json')} for ${chalk.bold(
					name
				)} is missing, the default definition will be used.`
			)
		);
	}
	const definitionObject: DefaultDefinition = {
		...DEFAULT_DEFINITION,
		...JSON.parse(definitionJsonText),
		requiresES6: GLOBAL_REQUIRES_ES6,
	};

	for (const [key, value] of Object.entries(definitionObject)) {
		if (key === 'enable' && value === false) {
			return '';
		}

		const isArray: boolean = Array.isArray(value);
		if (
			['description', 'section', 'type'].includes(key) ||
			[false, undefined].includes(value) ||
			(isArray && !value.length)
		) {
			continue;
		}

		switch (typeof value) {
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
		return text.replace(/☀|❀/g, '').trim();
	};

	let descriptionText: string = cleanInvalidCharacters(definitionObject.description);
	descriptionText = descriptionText ? `☀${descriptionText}` : `☀${name}`;

	let sectionText: string = cleanInvalidCharacters(definitionObject.section);
	sectionText = sectionText ? `☀${sectionText}` : '☀appear';

	return `* ${name}[ResourceLoader${definitionText}]${files}${sectionText}${descriptionText}`
		.replace(/\.ts([|☀])/g, '.js$1')
		.replace(/\.less([|☀])/g, '.css$1');
};

/**
 * @param {string} name The gadget name
 * @param {string} file The file name
 * @return {string} The processed file name
 */
const removeDuplicateFileName = (name: string, file: string): string => {
	const fileNameSplit: string[] = file.split('.');
	return `${name}❄${fileNameSplit.shift() === name ? `.${fileNameSplit.join('.')}` : file}`;
};

/**
 * @param {string} name The gadget name
 * @param {string[]} files The file names array
 * @return {string} The generated file names string
 */
const generateFileNames = (name: string, files: string[]): string => {
	return files
		.map((file: string): string => {
			return removeDuplicateFileName(name, file);
		})
		.join('|');
};

/**
 * @param {string} name The gadget name
 * @param {string?} license The license file name of this gadget
 * @return {string|undefined} The gadget license file content
 */
const getLicense = (name: string, license?: string): string | undefined => {
	if (!license) {
		return;
	}

	const licenseFilePath: string = path.join(__dirname, `src/${name}/${license}`);
	const fileBuffer: Buffer = fs.readFileSync(licenseFilePath);
	return fileBuffer.toString().trim() ? `${fileBuffer}\n` : undefined;
};

/**
 * Temporarily set `dist/definition.txt` and wait for it to be deployed for use
 *
 * @param {string[]} definitions The gadget definitions array (in the format of MediaWiki:Gadgets-definition item)
 */
const setDefinition = (definitions: string[]): void => {
	const definitionObject: Record<string, typeof definitions> = {};
	for (const definition of definitions) {
		const [, section] = definition.match(/.*?☀(\S+?)☀/) as RegExpExecArray;
		definitionObject[section] ??= [];
		definitionObject[section].push(definition.replace(/☀.*/, ''));
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
				definitionText += `\n${sectionHeader}\n${definition}\n`;
			}
		}
	}
	definitionText = definitionText.replace(/❄/g, '-').replace(/-\./g, '.');
	definitionText = `${trim(BANNER)}${definitionText}`;

	const definitionPath: string = path.join(__dirname, 'dist/definition.txt');
	const fileDescriptor: PathOrFileDescriptor = fs.openSync(definitionPath, 'w');
	fs.writeFileSync(fileDescriptor, definitionText);
	fs.fdatasyncSync(fileDescriptor);
	fs.closeSync(fileDescriptor);
};

export {buildFiles, findSourceFile, generateDefinitionItem, generateFileNames, getLicense, setDefinition};
