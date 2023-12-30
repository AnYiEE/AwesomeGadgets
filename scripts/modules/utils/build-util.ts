import * as PACKAGE from '../../../package.json';
import {BANNER, DEFAULT_DEFINITION, GLOBAL_REQUIRES_ES6, HEADER} from '../../constant';
import {type BabelFileResult, type TransformOptions, transformAsync} from '@babel/core';
import {type BuildResult, type OutputFile, build as esbuild} from 'esbuild';
import type {DefaultDefinition, Dependencies, SourceFiles} from '../types';
import {type Path, globSync} from 'glob';
import {
	type PathOrFileDescriptor,
	closeSync,
	fdatasyncSync,
	mkdirSync,
	openSync,
	readFileSync,
	writeFileSync,
} from 'node:fs';
import {dirname, join} from 'node:path';
import {getRootDir, trim} from './general-util';
import type PQueue from 'p-queue';
import chalk from 'chalk';
import {esbuildOptions} from '../build-esbuild_options';
import {exit} from 'node:process';

/**
 * @private
 */
const rootDir: string = getRootDir();

/**
 * @private
 * @param {string} sourceCode
 * @param {string} outputFilePath
 * @param {{contentType?:'application/javascript'|'text/css'; licenseText?:string|undefined}} [object]
 */
const writeFile = (
	sourceCode: string,
	outputFilePath: string,
	{
		contentType,
		licenseText,
	}: {
		contentType?: 'application/javascript' | 'text/css';
		licenseText?: string | undefined;
	} = {}
): void => {
	let fileContent: string = '';
	switch (contentType) {
		case 'application/javascript': {
			const strictMode = '"use strict";' satisfies string;
			fileContent = `${trim(licenseText)}${trim(HEADER)}/* <nowiki> */\n\n${
				// Always invoke strict mode after esbuild bundling
				sourceCode.trim().startsWith(strictMode) ?? sourceCode.includes(strictMode) ? '' : `${strictMode}\n\n`
			}${trim(sourceCode)}\n/* </nowiki> */\n`;
			break;
		}
		case 'text/css':
			fileContent = `${trim(licenseText)}${trim(HEADER)}/* <nowiki> */\n\n${trim(sourceCode)}\n/* </nowiki> */\n`;
			break;
		default:
			fileContent = sourceCode;
	}

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
 * @param {Dependencies} [dependencies]
 * @return {Promise<string>}
 */
const build = async (inputFilePath: string, outputFilePath: string, dependencies?: Dependencies): Promise<string> => {
	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		external: dependencies ?? [],
		entryPoints: [inputFilePath],
		outfile: outputFilePath,
	});

	return getBuildResult(buildResult);
};

/**
 * @private
 * @param {string} outputFilePath
 * @param {string} code
 * @param {Dependencies} dependencies
 * @return {Promise<string>}
 */
const bundle = async (outputFilePath: string, code: string, dependencies: Dependencies): Promise<string> => {
	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		external: dependencies,
		stdin: {
			contents: code,
			resolveDir: rootDir,
			sourcefile: outputFilePath,
		},
		target: GLOBAL_REQUIRES_ES6 ? 'esnext' : 'es5',
	});

	return getBuildResult(buildResult);
};

/**
 * @private
 * @return {TransformOptions}
 */
const generateTransformOptions = (): typeof options => {
	const options = {
		presets: [
			[
				'@babel/preset-env',
				{
					bugfixes: true, // FIXME: Remove when updating to Babel 8
					corejs: {
						version: PACKAGE.devDependencies['core-js'].match(/\d+(?:.\d+){0,2}/)?.[0] ?? '3.35',
					},
					exclude: ['web.dom-collections.for-each', 'web.dom-collections.iterator'],
					include: [] as string[],
					modules: 'commonjs',
					useBuiltIns: 'usage',
				},
			],
		],
		compact: false,
		plugins: [
			'@mrhenry/core-web',
			join(rootDir, 'scripts/modules/plugins/babel-plugin-convert-comments.ts'),
			join(rootDir, 'scripts/modules/plugins/babel-plugin-import-polyfills.ts'),
		],
	} as const satisfies TransformOptions;

	if (GLOBAL_REQUIRES_ES6) {
		// 以下关键字和运算符无法被 MediaWiki（>= 1.39）的 JavaScript 压缩器良好支持，即使设置了 requiresES6 标识
		// The following keywords and operators are not well supported by MediaWiki's (>= 1.39) JavaScript minifier, even if the `requiresES6` flag is true
		options.presets[0]![1].include.push(
			// keywords
			// ES2015
			'transform-for-of', // transform for-of loops
			'transform-template-literals', // `foo${bar}` -> 'foo'.concat(bar)
			// ES2017
			'transform-async-to-generator', // transform async/await to generator
			// ES2018
			'transform-async-generator-functions', // transform async generator to normal generator
			// ES2020
			'transform-optional-chaining', // foo?.bar
			// operators
			// ES2020
			'transform-nullish-coalescing-operator', // foo ?? bar
			// ES2021
			'transform-logical-assignment-operators', // foo ??= bar
			'transform-numeric-separator' // 1_000 -> 1000
		);
	} else {
		// 以下关键字无法被旧版本的 MediaWiki（< 1.39）的 JavaScript 压缩器良好支持
		// The following keywords are not well supported by the JavaScript minifier in older versions of MediaWiki (< 1.39)
		options.presets[0]![1].include.push(
			// keywords
			// ES3
			'transform-member-expression-literals', // obj.const -> obj['const']
			'transform-property-literals', // {const: 1} -> {'const': 1}
			'transform-reserved-words' // const abstract = 1 -> const _abstract = 1
		);
	}

	return options;
};

/**
 * @private
 */
const transformOptions = generateTransformOptions();

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
 * @param {{dependencies:Dependencies; licenseText:string|undefined}} object
 */
const buildScript = async (
	name: string,
	script: string,
	{
		dependencies,
		licenseText,
	}: {
		dependencies: Dependencies;
		licenseText: string | undefined;
	}
): Promise<void> => {
	const inputFilePath: string = join(rootDir, `src/${name}/${script}`);
	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFilePath: string = join(rootDir, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath, dependencies);
	const transformOutput: string = await transform(inputFilePath, buildOutput);
	const bundleOutput: string = await bundle(outputFilePath, transformOutput, dependencies);

	writeFile(bundleOutput, outputFilePath, {
		licenseText,
		contentType: 'application/javascript',
	});
};

/**
 * @private
 * @param {string} name
 * @param {string} style
 * @param {string|undefined} licenseText
 */
const buildStyle = async (name: string, style: string, licenseText: string | undefined): Promise<void> => {
	const inputFilePath: string = join(rootDir, `src/${name}/${style}`);
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFilePath: string = join(rootDir, `dist/${name}/${style.replace(/\.less$/, '.css')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);

	writeFile(buildOutput, outputFilePath, {
		licenseText,
		contentType: 'text/css',
	});
};

/**
 * @param {string} name The gadget name
 * @param {'script'|'style'} type The type of target files
 * @param {{dependencies?:Dependencies; files:string[]; licenseText:string|undefined; queue:PQueue}} object The dependencies of this gadget, the array of file name for this gadget, the flag of packaged gadget, the license file content of this gadget and the build queue
 */
function buildFiles(
	name: string,
	type: 'script',
	{
		dependencies,
		files,
		licenseText,
		queue,
	}: {
		dependencies: Dependencies;
		files: string[];
		licenseText: string | undefined;
		queue: PQueue;
	}
): void;
function buildFiles(
	name: string,
	type: 'style',
	{
		files,
		licenseText,
		queue,
	}: {
		files: string[];
		licenseText: string | undefined;
		queue: PQueue;
	}
): void;
// eslint-disable-next-line func-style
function buildFiles(
	name: string,
	type: 'script' | 'style',
	{
		dependencies,
		files,
		licenseText,
		queue,
	}: {
		dependencies?: Dependencies;
		files: string[];
		licenseText: string | undefined;
		queue: PQueue;
	}
): void {
	for (const file of files) {
		void queue.add(async (): Promise<void> => {
			if (type === 'script' && dependencies) {
				await buildScript(name, file, {
					dependencies,
					licenseText,
				});
			} else {
				await buildStyle(name, file, licenseText);
			}
		});
	}
}

/**
 * @private
 * @param {SourceFiles} sourceFiles
 */
const fallbackDefinition = (sourceFiles: SourceFiles): void => {
	for (const [gadgetName, gadgetFiles] of Object.entries(sourceFiles)) {
		if (gadgetFiles.definition) {
			continue;
		}

		gadgetFiles.definition = {
			...DEFAULT_DEFINITION,
			requiresES6: GLOBAL_REQUIRES_ES6,
		};

		console.log(
			chalk.yellow(
				`${chalk.italic('definition.json')} of ${chalk.bold(
					gadgetName
				)} is missing, the default definition will be used.`
			)
		);
	}
};

/**
 * @return {SourceFiles} An object used to describe source files
 */
const findSourceFile = (): SourceFiles => {
	const sourceFiles: SourceFiles = {};

	type Gadget = SourceFiles[keyof SourceFiles];

	const files: Path[] = globSync(['*/*.{js,ts,css,less}', '*/definition.json', '*/LICENSE'], {
		cwd: join(rootDir, 'src'),
		withFileTypes: true,
	});

	for (const file of files) {
		const fileName: string = file.name;
		if (fileName.endsWith('.d.ts')) {
			// Skip typescript declaration files, no need when compiling
			continue;
		}

		const gadgetName: string = file.parent!.name; // The parent folder name of the file
		if (!/^[A-Za-z][A-Za-z0-9\-_.]*$/.test(gadgetName)) {
			/**
			 * @summary Skip folder names that contain illegal characters not supported by the Gadget extension
			 * @see {@link https://www.mediawiki.org/wiki/Extension:Gadgets#Definition_format}
			 * @see {@link https://www.w3.org/TR/html4/types.html#type-id}
			 */
			console.log(
				chalk.yellow(`The folder name ${chalk.bold(gadgetName)} contains illegal characters, skip it.`)
			);
			continue;
		}

		sourceFiles[gadgetName] ??= {} as Gadget;
		const targetGadget = sourceFiles[gadgetName] as Gadget;

		switch (fileName) {
			case 'definition.json': {
				const definitionFilePath: string = join(rootDir, `src/${gadgetName}/definition.json`);
				const definitionJsonText: string = readFileSync(definitionFilePath).toString();
				let definition: DefaultDefinition;
				try {
					definition = JSON.parse(definitionJsonText) as DefaultDefinition;
				} catch {
					definition = DEFAULT_DEFINITION;
					console.log(
						chalk.yellow(
							`${chalk.italic('definition.json')} of ${chalk.bold(
								gadgetName
							)} is broken, the default definition will be used.`
						)
					);
				}
				targetGadget.definition = {
					...DEFAULT_DEFINITION,
					...definition,
					requiresES6: GLOBAL_REQUIRES_ES6,
				};
				break;
			}
			case 'index.js': {
				const {script} = targetGadget;
				if (!script || script !== 'index.ts') {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.ts':
				targetGadget.script = fileName;
				break;
			case `${gadgetName}.js`: {
				const {script} = targetGadget;
				if (!script) {
					targetGadget.script = fileName;
				}
				break;
			}
			case `${gadgetName}.ts`: {
				const {script} = targetGadget;
				if (!script || !/^index\.[jt]s$/.test(script)) {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.css': {
				const {style} = targetGadget;
				if (!style || style !== 'index.less') {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.less':
				targetGadget.style = fileName;
				break;
			case `${gadgetName}.css`: {
				const {style} = targetGadget;
				if (!style) {
					targetGadget.style = fileName;
				}
				break;
			}
			case `${gadgetName}.less`: {
				const {style} = targetGadget;
				if (!style || !/^index\.(?:css|less)/.test(style)) {
					targetGadget.style = fileName;
				}
				break;
			}
			case 'LICENSE':
				targetGadget.license = fileName;
				break;
		}

		targetGadget.scripts ??= [];
		if (fileName.endsWith('.js') || fileName.endsWith('.ts')) {
			const {scripts} = targetGadget;
			scripts.push(fileName);
			// If there are files with the same name in both JavaScript and TypeScript, only retain the TypeScript file
			if (fileName.endsWith('.ts')) {
				targetGadget.scripts = [
					...new Set(
						scripts.filter((scriptFileName: string): boolean => {
							return scriptFileName !== fileName.replace(/\.ts$/, '.js');
						})
					),
				];
			}
		}

		targetGadget.styles ??= [];
		if (fileName.endsWith('.css') || fileName.endsWith('.less')) {
			const {styles} = targetGadget;
			styles.push(fileName);
			// If there are files with the same name in both CSS and Less, only retain the Less file
			if (fileName.endsWith('.less')) {
				targetGadget.styles = [
					...new Set(
						styles.filter((style: string): boolean => {
							return style !== fileName.replace(/\.less$/, '.css');
						})
					),
				];
			}
		}
	}

	// After completing the loop, if `targetGadget.definition` is undefined, utilize the default definition
	// NOTE: No need for assignment, this is object reference
	fallbackDefinition(sourceFiles);

	const sourceFilesSorted: SourceFiles = {};
	for (const gadgetName of Object.keys(sourceFiles).sort()) {
		sourceFilesSorted[gadgetName] = sourceFiles[gadgetName] as Gadget;
	}

	return sourceFilesSorted;
};

/**
 * @param {string} name The gadget name
 * @param {Object} definition The parsed `definition.json`
 * @param {string} files All files used by this gadget
 * @return {string} The Gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const generateDefinitionItem = (
	name: string,
	definition: SourceFiles[keyof SourceFiles]['definition'],
	files: string
): string => {
	let definitionText: string = '|';

	for (const [key, value] of Object.entries(definition)) {
		if (key === 'enable' && value === false) {
			return '';
		}

		const isArray: boolean = Array.isArray(value);
		if (
			['description', 'section'].includes(key) ||
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
					const valueFiltered: string = (value as [])
						.filter((item: string): boolean => {
							return ['boolean', 'number', 'string'].includes(typeof item) && !!item.toString();
						})
						.join(',');
					if (valueFiltered) {
						definitionText += `${key}=${valueFiltered}|`;
					}
				}
				break;
			case 'string':
				if (value) {
					definitionText += `${key}=${value}|`;
				}
				break;
		}
	}

	definitionText = definitionText.replace(/\|$/, '');

	const cleanInvalidCharacters = (text: string): string => {
		return text.replace(/☀|❀/g, '').trim();
	};

	let descriptionText: string = cleanInvalidCharacters(definition.description);
	descriptionText = descriptionText ? `☀${descriptionText}` : `☀${name}`;

	let sectionText: string = cleanInvalidCharacters(definition.section);
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
	const fileContent: string = fileBuffer.toString();

	return fileContent.trim() ? `${fileContent}\n` : undefined;
};

/**
 * Save `dist/definition.txt`
 *
 * @param {string[]} definitions The gadget definitions array (in the format of MediaWiki:Gadgets-definition item)
 */
const saveDefinition = (definitions: string[]): void => {
	type Gadgets = typeof definitions;

	const definitionObject: Record<string, Gadgets> = {};
	for (const definition of definitions) {
		const [, section] = definition.match(/.*?☀(\S+?)☀/) as [string, string];
		definitionObject[section] ??= [];
		(definitionObject[section] as Gadgets).push(definition.replace(/☀.*/, ''));
	}

	const definitionObjectSorted: typeof definitionObject = {};
	for (const section of Object.keys(definitionObject).sort()) {
		definitionObjectSorted[section] = definitionObject[section] as Gadgets;
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
