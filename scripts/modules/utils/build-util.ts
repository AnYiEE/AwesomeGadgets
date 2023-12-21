import * as PACKAGE from '../../../package.json';
import {BANNER, DEFAULT_DEFINITION, GLOBAL_REQUIRES_ES6, HEADER} from '../../constant';
import {type BabelFileResult, type TransformOptions, transformAsync} from '@babel/core';
import {type BuildResult, type OutputFile, build as esbuild} from 'esbuild';
import type {DefaultDefinition, ExcludeItem, SourceFiles} from '../types';
import {
	type PathOrFileDescriptor,
	type Stats,
	closeSync,
	fdatasyncSync,
	mkdirSync,
	openSync,
	readFileSync,
	readdirSync,
	statSync,
	writeFileSync,
} from 'node:fs';
import {dirname, join} from 'node:path';
import {exit, platform} from 'node:process';
import {getRootDir, trim} from './general-util';
import type PQueue from 'p-queue';
import chalk from 'chalk';
import {esbuildOptions} from '../build-esbuild_options';

/**
 * @private
 */
const rootDir: string = getRootDir();

/**
 * @private
 * @param {string} sourceCode
 * @param {string} outputFilePath
 * @param {string|undefined} licenseText
 */
const writeFile = (sourceCode: string, outputFilePath: string, licenseText: string | undefined): void => {
	const fileContent: string = `${trim(licenseText)}${trim(HEADER)}/* <nowiki> */\n\n${trim(
		sourceCode
	)}\n/* </nowiki> */\n`;

	const outputDirectoryPath: string = dirname(outputFilePath);
	mkdirSync(outputDirectoryPath, {
		recursive: true,
	});

	const fileDescriptor: PathOrFileDescriptor = openSync(outputFilePath, 'w');
	writeFileSync(fileDescriptor, fileContent);
	fdatasyncSync(fileDescriptor);
	closeSync(fileDescriptor);
};

/**
 * @private
 * @param {BuildResult} buildResult
 * @return {string}
 */
const getBuildResult = (buildResult: BuildResult): string => {
	const outputFiles: OutputFile[] = buildResult.outputFiles as OutputFile[];
	const {text} = outputFiles[0] as OutputFile;

	return text;
};

/**
 * @private
 * @param {string} inputFilePath
 * @param {string} outputFilePath
 * @return {Promise<string>}
 */
const build = async (inputFilePath: string, outputFilePath: string): Promise<string> => {
	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		entryPoints: [inputFilePath],
		outfile: outputFilePath,
	});

	return getBuildResult(buildResult);
};

/**
 * @private
 * @param {string} inputFilePath
 * @param {string} code
 * @return {Promise<string>}
 */
const bundle = async (inputFilePath: string, code: string): Promise<string> => {
	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		stdin: {
			contents: code,
			resolveDir: rootDir,
			sourcefile: inputFilePath,
		},
		target: GLOBAL_REQUIRES_ES6 ? 'exnext' : 'es5',
	});

	return getBuildResult(buildResult);
};

/**
 * @private
 * @return {TransformOptions}
 */
const generateTransformOptions = (): TransformOptions => {
	const options: TransformOptions = {
		presets: [
			[
				'@babel/preset-env',
				{
					bugfixes: true, // FIXME: Remove when updating to Babel 8
					corejs: {
						version: PACKAGE.devDependencies['core-js'].match(/\d+(?:.\d+){0,2}/)?.[0] ?? '3.34',
					},
					exclude: ['web.dom-collections.for-each', 'web.dom-collections.iterator'],
					modules: false,
					useBuiltIns: 'usage',
				},
			],
		],
		compact: false,
		plugins: ['@mrhenry/core-web', join(rootDir, 'scripts/modules/babel-plugin-import-polyfills.ts')],
	};

	if (GLOBAL_REQUIRES_ES6) {
		const [, {exclude}] = options.presets as ExcludeItem[0];
		(options.presets as ExcludeItem[0])[1].exclude = [...exclude, 'es.array.push'];
		// 以下关键字和运算符无法被 MediaWiki（>= 1.39）的 JavaScript 压缩器良好支持，即使设置了 requiresES6 标识
		// The following keywords and operators are not well supported by MediaWiki's (>= 1.39) JavaScript minifier, even if the `requiresES6` flag is true
		options.plugins = [
			...(options.plugins as string[]),
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
		// The following keywords are not well supported by the JavaScript minifier in older versions of MediaWiki (< 1.39)
		options.plugins = [
			...(options.plugins as string[]),
			// keywords
			// ES3
			'@babel/plugin-transform-member-expression-literals', // obj.const -> obj['const']
			'@babel/plugin-transform-property-literals', // {const: 1} -> {'const': 1}
			'@babel/plugin-transform-reserved-words', // const abstract = 1 -> const _abstract = 1
		];
	}

	return options;
};

/**
 * @private
 */
const transformOptions: TransformOptions = generateTransformOptions();

/**
 * @private
 * @param {string} inputFilePath
 * @param {string} code
 * @return {Promise<string>}
 */
const transform = async (inputFilePath: string, code: string): Promise<string> => {
	const babelFileResult: BabelFileResult = (await transformAsync(code, {
		...transformOptions,
		cwd: rootDir,
		filename: inputFilePath,
	})) as BabelFileResult;
	const {code: transformOutput} = babelFileResult;

	return transformOutput as string;
};

/**
 * @private
 * @param {string} name The gadget name
 * @param {string} script The script file name of this gadget
 * @param {string|undefined} licenseText The license file content of this gadget
 */
const buildScript = async (name: string, script: string, licenseText: string | undefined): Promise<void> => {
	const inputFilePath: string = join(rootDir, `src/${name}/${script}`);
	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFilePath: string = join(rootDir, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);
	const transformOutput: string = await transform(inputFilePath, buildOutput);
	const bundleOutput: string = await bundle(inputFilePath, transformOutput);

	writeFile(bundleOutput, outputFilePath, licenseText);
};

/**
 * @private
 * @param {string} name The gadget name
 * @param {string} style The style sheet file name of this gadget
 * @param {string|undefined} licenseText The license file content of this gadget
 */
const buildStyle = async (name: string, style: string, licenseText: string | undefined): Promise<void> => {
	const inputFilePath: string = join(rootDir, `src/${name}/${style}`);
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFilePath: string = join(rootDir, `dist/${name}/${style.replace(/\.less$/, '.css')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);

	writeFile(buildOutput, outputFilePath, licenseText);
};

/**
 * @param {string} name The gadget name
 * @param {'script'|'style'} type The type of target files
 * @param {{files:string[]; licenseText:string|undefined; queue:PQueue}} object The license file content of this gadget, the array of file name for this gadget and the build queue
 */
const buildFiles = (
	name: string,
	type: 'script' | 'style',
	{
		files,
		licenseText,
		queue,
	}: {
		files: string[];
		licenseText: string | undefined;
		queue: PQueue;
	}
): void => {
	const buildFile: typeof buildScript | typeof buildStyle = type === 'script' ? buildScript : buildStyle;

	for (const file of files) {
		void queue.add(async (): Promise<void> => {
			await buildFile(name, file, licenseText);
		});
	}
};

/**
 * @private
 */
const sourceFiles: SourceFiles = {};

/**
 * @param {string} [currentPath=src] The path of the current source file
 *
 * @summary **DO NOT** set this parameter when calling the function directly, it is only used for recursion
 *
 * @return {SourceFiles} An object used to describe source files
 */
const findSourceFile = (currentPath: string = 'src'): SourceFiles => {
	const subDirAndFileNameArray: string[] = readdirSync(currentPath);
	for (const subDirOrFileName of subDirAndFileNameArray) {
		const fullPath: string = join(currentPath, subDirOrFileName);

		const stats: Stats = statSync(fullPath);
		if (stats.isDirectory()) {
			findSourceFile(fullPath);
		} else if (!/\.d\.ts$/.test(subDirOrFileName)) {
			const pathSplitArray: string[] = fullPath.split(platform === 'win32' ? '\\' : '/');

			// 仅支持形如`src/gadget/index.ts`的“一层”路径，因为考虑到子文件夹可能被父文件夹的脚本导入
			// Only supports "one-layer" paths like `src/gadget/index.ts`, because it considers that subfolders may be imported by scripts in parent folders
			if (pathSplitArray.length !== 3) {
				continue;
			}

			const [_rootDir, gadgetName, fileName] = pathSplitArray as [string, string, string];
			sourceFiles[gadgetName] ??= {} as SourceFiles[keyof SourceFiles];

			switch (fileName) {
				case 'definition.json':
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).definition = fileName;
					break;
				case 'index.js':
				case 'index.ts':
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).script = fileName;
					break;
				case `${gadgetName}.js`:
				case `${gadgetName}.ts`:
					if (!(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).script) {
						(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).script = fileName;
					}
					break;
				case 'index.css':
				case 'index.less':
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).style = fileName;
					break;
				case `${gadgetName}.css`:
				case `${gadgetName}.less`:
					if (!(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).style) {
						(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).style = fileName;
					}
					break;
				case 'LICENSE':
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).license = fileName;
					break;
			}

			(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).scripts ??= [];
			if (/\.[jt]s$/.test(fileName)) {
				(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).scripts.push(fileName);
				if (/\.ts$/.test(fileName)) {
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).scripts = [
						...new Set(
							(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).scripts.filter(
								(script: string): boolean => {
									return script !== fileName.replace(/\.ts$/, '.js');
								}
							)
						),
					];
				}
			}

			(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).styles ??= [];
			if (/\.(?:css|less)$/.test(fileName)) {
				(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).styles.push(fileName);
				if (/\.less$/.test(fileName)) {
					(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).styles = [
						...new Set(
							(sourceFiles[gadgetName] as SourceFiles[keyof SourceFiles]).styles.filter(
								(style: string): boolean => {
									return style !== fileName.replace(/\.less$/, '.css');
								}
							)
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
	let definitionText: string = '|';

	let definitionJsonText: string = '{}';
	try {
		if (!definition) {
			throw new ReferenceError('definition.json is missing.');
		}
		const definitionFilePath: string = join(rootDir, `src/${name}/${definition}`);
		const fileBuffer: Buffer = readFileSync(definitionFilePath);
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
	const definitionObject: DefaultDefinition & {requiresES6: boolean} = {
		...DEFAULT_DEFINITION,
		...(JSON.parse(definitionJsonText) as DefaultDefinition),
		requiresES6: GLOBAL_REQUIRES_ES6,
	};

	for (const [key, value] of Object.entries(definitionObject)) {
		if (key === 'enable' && value === false) {
			return '';
		}

		const isArray: boolean = Array.isArray(value);
		if (
			['description', 'section', 'type'].includes(key) ||
			[false, undefined].includes(value as boolean | undefined) ||
			(isArray && !(value as []).length)
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
					definitionText += `${key}=${(value as []).join(',')}|`;
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
 * @param {string|undefined} file The index file name
 * @param {string[]} files The other file name array
 * @return {string[]} The generated file name array
 */
const generateFileArray = (file: string | undefined, files: string[]): string[] => {
	return file ? [file] : files;
};

/**
 * @private
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
 * @param {string[]} files The file name array
 * @return {string} The generated file name string
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
 * @param {string|undefined} license The license file name of this gadget
 * @return {string|undefined} The gadget license file content
 */
const getLicense = (name: string, license: string | undefined): string | undefined => {
	if (!license) {
		return;
	}

	const licenseFilePath: string = join(rootDir, `src/${name}/${license}`);
	const fileBuffer: Buffer = readFileSync(licenseFilePath);

	return fileBuffer.toString().trim() ? `${fileBuffer.toString()}\n` : undefined;
};

/**
 * Save `dist/definition.txt`
 *
 * @param {string[]} definitions The gadget definitions array (in the format of MediaWiki:Gadgets-definition item)
 */
const saveDefinition = (definitions: string[]): void => {
	const definitionObject: Record<string, typeof definitions> = {};
	for (const definition of definitions) {
		const [, section] = definition.match(/.*?☀(\S+?)☀/) as [string, string];
		definitionObject[section] ??= [];
		(definitionObject[section] as string[]).push(definition.replace(/☀.*/, ''));
	}

	const definitionObjectSorted: typeof definitionObject = {};
	for (const key of Object.keys(definitionObject).sort()) {
		definitionObjectSorted[key] = definitionObject[key] as string[];
	}

	let definitionText: string = '';
	for (const [section, definitionItems] of Object.entries(definitionObjectSorted)) {
		const sectionHeader: string = `== ${section} ==`;
		for (const definition of definitionItems) {
			if (definitionText.includes(sectionHeader)) {
				definitionText += `${definition}\n`;
			} else {
				definitionText += `\n${sectionHeader}\n${definition}\n`;
			}
		}
	}
	definitionText = definitionText.replace(/❄/g, '-').replace(/-\./g, '.');
	definitionText = trim(BANNER) + definitionText;

	const definitionPath: string = join(rootDir, 'dist/definition.txt');
	try {
		const fileDescriptor: PathOrFileDescriptor = openSync(definitionPath, 'w');
		writeFileSync(fileDescriptor, definitionText);
		fdatasyncSync(fileDescriptor);
		closeSync(fileDescriptor);
	} catch {
		console.log(
			chalk.red(
				`Failed to save ${chalk.italic(
					'definition.txt'
				)}, please confirm if any files that need to be compiled exist.`
			)
		);
		exit(1);
	}
};

export {
	buildFiles,
	findSourceFile,
	generateDefinitionItem,
	generateFileArray,
	generateFileNames,
	getLicense,
	saveDefinition,
};
