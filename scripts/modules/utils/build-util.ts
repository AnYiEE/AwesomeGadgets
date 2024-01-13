import * as PACKAGE from '../../../package.json';
import {BANNER, GLOBAL_REQUIRES_ES6, SOURCE_MAP} from '../../constant';
import {type BabelFileResult, type TransformOptions, transformAsync} from '@babel/core';
import {type BuildResult, type OutputFile, build as esbuild} from 'esbuild';
import type {BuiltFiles, Dependencies, GlobalSourceFiles, SourceFiles} from '../types';
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
import {__rootDir, generateDefinition, processSourceCode, trim} from './general-util';
import {basename, dirname, extname, join} from 'node:path';
import chalk from 'chalk';
import {esbuildOptions} from '../build-esbuild_options';
import {exit} from 'node:process';

/**
 * @private
 * @param {string} sourceCode
 * @param {string} outputFilePath
 * @param {{contentType?:'application/javascript'|'text/css'|undefined; licenseText?:string|undefined}} [object]
 */
const writeFile = (
	sourceCode: string,
	outputFilePath: string,
	{contentType, licenseText}: Omit<GlobalSourceFiles[keyof GlobalSourceFiles], 'enable' | 'sourceCode'> = {}
): void => {
	sourceCode = processSourceCode(sourceCode, {
		contentType,
		licenseText,
	});

	const outputDirectoryPath: string = dirname(outputFilePath);
	mkdirSync(outputDirectoryPath, {
		recursive: true,
	});

	const fileDescriptor: PathOrFileDescriptor = openSync(outputFilePath, 'w');
	writeFileSync(fileDescriptor, sourceCode);
	fdatasyncSync(fileDescriptor);
	closeSync(fileDescriptor);
};

/**
 * @private
 * @param {string} inputFilePath
 * @param {string} outputFilePath
 * @param {Dependencies} [dependencies]
 * @return {Promise<BuiltFiles>}
 */
const build = async (
	inputFilePath: string,
	outputFilePath: string,
	dependencies?: Dependencies
): Promise<BuiltFiles> => {
	const builtFiles: BuiltFiles = [];

	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		external: dependencies ?? [],
		entryPoints: [inputFilePath],
		outfile: outputFilePath,
	});

	const {outputFiles} = buildResult;
	if (!outputFiles) {
		return builtFiles;
	}

	for (const outputFile of outputFiles) {
		const {path, text} = outputFile;
		builtFiles.push({
			path,
			text,
		});
	}

	return builtFiles;
};

/**
 * @private
 * @param {string} outputFilePath
 * @param {string} sourceCode
 * @param {Dependencies} dependencies
 * @return {Promise<string>}
 */
const bundle = async (outputFilePath: string, sourceCode: string, dependencies: Dependencies): Promise<string> => {
	const buildResult: BuildResult = await esbuild({
		...esbuildOptions,
		external: dependencies,
		stdin: {
			contents: sourceCode,
			resolveDir: __rootDir,
			sourcefile: outputFilePath,
		},
		target: GLOBAL_REQUIRES_ES6 ? 'esnext' : 'es5',
	});

	const {outputFiles} = buildResult;
	if (!outputFiles) {
		return '';
	}

	const {text} = outputFiles[0] as OutputFile;

	return text;
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
			join(__rootDir, 'scripts/modules/plugins/babel-plugin-convert-comments.ts'),
			join(__rootDir, 'scripts/modules/plugins/babel-plugin-import-polyfills.ts'),
		],
		sourceMaps: SOURCE_MAP ? 'inline' : false,
	} as const satisfies TransformOptions;

	type Parset = (typeof options.presets)[0];

	if (GLOBAL_REQUIRES_ES6) {
		// 以下关键字和运算符无法被 MediaWiki（>= 1.39）的 JavaScript 压缩器良好支持，即使设置了 requiresES6 标识
		// The following keywords and operators are not well supported by MediaWiki's (>= 1.39) JavaScript minifier, even if the `requiresES6` flag is true
		(options.presets[0] as Parset)[1].include.push(
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
		(options.presets[0] as Parset)[1].include.push(
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
 * @param {string} sourceCode
 * @return {Promise<string>}
 */
const transform = async (inputFilePath: string, sourceCode: string): Promise<string> => {
	const babelFileResult = (await transformAsync(sourceCode, {
		...transformOptions,
		cwd: __rootDir,
		filename: inputFilePath,
	})) as BabelFileResult;
	const {code: transformOutput} = babelFileResult;

	return transformOutput as string;
};

/**
 * @private
 * @param {string} gadgetName
 * @param {string} scriptFileName
 * @param {{dependencies:Dependencies; licenseText:string|undefined}} object
 * @return {Promise<string[]>}
 */
const buildScript = async (
	gadgetName: string,
	scriptFileName: string,
	{
		dependencies,
		licenseText,
	}: {
		dependencies: Dependencies;
		licenseText: string | undefined;
	}
): Promise<string[]> => {
	const outputFileNames: string[] = [];

	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFileName: string = scriptFileName.replace(/\.tsx?$/, '.js');

	const inputFilePath: string = join(__rootDir, `src/${gadgetName}/${scriptFileName}`);
	const outputFilePath: string = join(__rootDir, `dist/${gadgetName}/${outputFileName}`);

	const builtFiles: BuiltFiles = await build(inputFilePath, outputFilePath, dependencies);
	for (const builtFile of builtFiles) {
		const {path, text} = builtFile;

		const fileName: string = basename(path);
		outputFileNames.push(fileName);

		const fileExt: string = extname(path);
		switch (fileExt) {
			case '.css':
				writeFile(text, path, {
					licenseText,
					contentType: 'text/css',
				});
				break;
			case '.js': {
				const transformOutput: string = await transform(inputFilePath, text);
				const bundleOutput: string = await bundle(outputFilePath, transformOutput, dependencies);
				if (!bundleOutput) {
					continue;
				}
				writeFile(bundleOutput, path, {
					licenseText,
					contentType: 'application/javascript',
				});
				break;
			}
		}
	}

	return outputFileNames;
};

/**
 * @private
 * @param {string} gadgetName
 * @param {string} styleFileName
 * @param {string|undefined} licenseText
 * @return {Promise<string>}
 */
const buildStyle = async (
	gadgetName: string,
	styleFileName: string,
	licenseText: string | undefined
): Promise<string> => {
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFileName: string = styleFileName.replace(/\.less$/, '.css');

	const inputFilePath: string = join(__rootDir, `src/${gadgetName}/${styleFileName}`);
	const outputFilePath: string = join(__rootDir, `dist/${gadgetName}/${outputFileName}`);

	const builtFiles: BuiltFiles = await build(inputFilePath, outputFilePath);
	const buildOutput: string = builtFiles[0]!.text;

	writeFile(buildOutput, outputFilePath, {
		licenseText,
		contentType: 'text/css',
	});

	return outputFileName;
};

/**
 * @param {string} gadgetName The gadget name
 * @param {'script'|'style'} type The type of target files
 * @param {{dependencies?:Dependencies; files:string[]; licenseText:string|undefined}} object The dependencies of this gadget, the array of file name for this gadget and the license file content of this gadget
 * @return {Promise<string[]>} The array of built file names
 */
async function buildFiles(
	gadgetName: string,
	type: 'script',
	{
		dependencies,
		files,
		licenseText,
	}: {
		dependencies: Dependencies;
		files: string[];
		licenseText: string | undefined;
	}
): Promise<string[]>;
async function buildFiles(
	gadgetName: string,
	type: 'style',
	{
		files,
		licenseText,
	}: {
		files: string[];
		licenseText: string | undefined;
	}
): Promise<string[]>;
// eslint-disable-next-line func-style
async function buildFiles(
	gadgetName: string,
	type: 'script' | 'style',
	{
		dependencies,
		files,
		licenseText,
	}: {
		dependencies?: Dependencies;
		files: string[];
		licenseText: string | undefined;
	}
): Promise<string[]> {
	const outputFileNames: string[] = [];

	for (const fileName of files) {
		switch (type) {
			case 'script':
				if (dependencies) {
					outputFileNames.push(
						...(await buildScript(gadgetName, fileName, {
							dependencies,
							licenseText,
						}))
					);
				}
				break;
			case 'style':
				outputFileNames.push(await buildStyle(gadgetName, fileName, licenseText));
		}
	}

	return outputFileNames;
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

		gadgetFiles.definition = generateDefinition(gadgetName);
	}
};

/**
 * @private
 * @param {SourceFiles} sourceFiles
 */
const filterOutInvalidDependencies = (sourceFiles: SourceFiles): void => {
	for (const [_gadgetName, gadgetFiles] of Object.entries(sourceFiles)) {
		const {
			definition: {dependencies},
		} = gadgetFiles;

		gadgetFiles.definition.dependencies = dependencies
			.filter((dependency: string): boolean => {
				return typeof dependency === 'string' && !!dependency.trim();
			})
			.map((dependency: string): string => {
				return trim(dependency, {
					addNewline: false,
				});
			});
	}
};

/**
 * @return {SourceFiles} An object used to describe source files
 */
const findSourceFile = (): SourceFiles => {
	const sourceFiles: SourceFiles = {};

	type Gadget = SourceFiles[keyof SourceFiles];

	const files: Path[] = globSync(['*/*.{js,jsx,ts,tsx,css,less}', '*/definition.json', '*/LICENSE'], {
		cwd: join(__rootDir, 'src'),
		withFileTypes: true,
	});

	for (const file of files) {
		const {name: fileName} = file;
		if (fileName.endsWith('.d.ts')) {
			// Skip typescript declaration files, no need when compiling
			continue;
		}

		const {name: gadgetName} = file.parent as NonNullable<typeof file.parent>; // The parent folder name of the file
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
			case 'definition.json':
				targetGadget.definition = generateDefinition(gadgetName);
				break;
			case 'index.js': {
				const {script} = targetGadget;
				if (!script || !/^index\.[jt]sx?$/.test(script)) {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.jsx': {
				const {script} = targetGadget;
				if (!script || !/^index\.tsx?$/.test(script)) {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.ts': {
				const {script} = targetGadget;
				if (!script || script !== 'index.tsx') {
					targetGadget.script = fileName;
				}
				break;
			}
			case 'index.tsx':
				targetGadget.script = fileName;
				break;
			case `${gadgetName}.js`: {
				const {script} = targetGadget;
				if (!script) {
					targetGadget.script = fileName;
				}
				break;
			}
			case `${gadgetName}.jsx`: {
				const {script} = targetGadget;
				if (!script || (!/\.tsx?$/.test(script) && script !== 'index.js')) {
					targetGadget.script = fileName;
				}
				break;
			}
			case `${gadgetName}.ts`: {
				const {script} = targetGadget;
				if (!script || (!/^index\.[jt]sx?$/.test(script) && script !== `${gadgetName}.tsx`)) {
					targetGadget.script = fileName;
				}
				break;
			}
			case `${gadgetName}.tsx`: {
				const {script} = targetGadget;
				if (!script || !/^index\.[jt]sx?$/.test(script)) {
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

		const fileExt: string = extname(fileName);
		const removeFiles = (currentFiles: string[], ext: string): string[] => {
			return [
				...new Set(
					currentFiles.filter((currentFile: string): boolean => {
						return currentFile !== fileName.replace(new RegExp(`\\${fileExt}$`), ext);
					})
				),
			];
		};

		targetGadget.scripts ??= [];
		if (/^\.[jt]sx?$/.test(fileExt)) {
			const {scripts} = targetGadget;
			scripts.push(fileName);
			// If there are files with the same name in both JavaScript and TypeScript, only retain the TypeScript file
			switch (fileExt) {
				case '.ts':
					targetGadget.scripts = removeFiles(scripts, '.js');
					break;
				case '.tsx':
					targetGadget.scripts = removeFiles(scripts, '.jsx');
					break;
			}
		}

		targetGadget.styles ??= [];
		if (['.css', '.less'].includes(fileExt)) {
			const {styles} = targetGadget;
			styles.push(fileName);
			// If there are files with the same name in both CSS and Less, only retain the Less file
			if (fileExt === '.less') {
				targetGadget.styles = removeFiles(styles, '.css');
			}
		}
	}

	// After completing the loop, if `targetGadget.definition` is undefined, utilize the default definition
	// NOTE: No need for assignment, this is object reference
	fallbackDefinition(sourceFiles);

	// Filter out invalid dependencies, only allow non-empty string
	// NOTE: No need for assignment, this is object reference
	filterOutInvalidDependencies(sourceFiles);

	const sourceFilesSorted: SourceFiles = {};
	for (const gadgetName of Object.keys(sourceFiles).sort()) {
		sourceFilesSorted[gadgetName] = sourceFiles[gadgetName] as Gadget;
	}

	return sourceFilesSorted;
};

/**
 * @param {string} gadgetName The gadget name
 * @param {Object} definition The parsed `definition.json`
 * @param {string} gadgetFiles All files used by this gadget
 * @return {string} The Gadget definition (in the format of MediaWiki:Gadgets-definition item)
 */
const generateDefinitionItem = (
	gadgetName: string,
	definition: SourceFiles[keyof SourceFiles]['definition'],
	gadgetFiles: string
): string => {
	let definitionText: string = '|';

	for (const [key, value] of Object.entries(definition)) {
		const isArray: boolean = Array.isArray(value);
		if (
			[
				// Keys for internal use
				'enable',
				'excludeSites',
				'description',
				'section',
				// Keys that no need to be specified
				'package',
				'targets',
				'top',
				'type',
			].includes(key) ||
			[false, undefined].includes(value as boolean | undefined) ||
			(isArray && !(value as []).length)
		) {
			continue;
		}

		switch (typeof value) {
			case 'boolean':
				definitionText += `${key}|`;
				break;
			case 'object':
				if (isArray) {
					const valueFiltered: string = (value as [])
						.filter((item: keyof []): boolean => {
							return ['boolean', 'number', 'string'].includes(typeof item) && !!item.toString().trim();
						})
						.map(<T extends 'boolean' | 'number' | 'string'>(item: T): T => {
							if (typeof item === 'string') {
								return trim(item, {
									addNewline: false,
								}) as T;
							}
							return item;
						})
						.join(',');
					if (valueFiltered) {
						definitionText += `${key}=${valueFiltered}|`;
					}
				}
				break;
			case 'string': {
				const valueTrimmed: string = trim(value, {
					addNewline: false,
				});
				if (valueTrimmed) {
					definitionText += `${key}=${valueTrimmed}|`;
				}
				break;
			}
		}
	}

	definitionText = definitionText.replace(/\|$/, '');

	const sectionText: string = definition.section
		? `☀${trim(definition.section.replace(/☀/g, ''), {
				addNewline: false,
			})}`
		: '☀appear';

	return `* ${gadgetName}[ResourceLoader${definitionText}]${gadgetFiles}${sectionText}`;
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
 * @param {string} gadgetName The gadget name
 * @param {string} fileName The file name
 * @return {string} The processed file name
 */
const removeDuplicateFileName = (gadgetName: string, fileName: string): string => {
	const fileNameSplit: string[] = fileName.split('.');

	return `${gadgetName}${fileNameSplit.shift() === gadgetName ? `.${fileNameSplit.join('.')}` : `-${fileName}`}`;
};

/**
 * @param {string} gadgetName The gadget name
 * @param {string[]} fileNames The file name array
 * @return {string} The generated file name string
 */
const generateFileNames = (gadgetName: string, fileNames: string[]): string => {
	return fileNames
		.map((fileName: string): string => {
			return removeDuplicateFileName(gadgetName, fileName);
		})
		.join('|');
};

/**
 * @param {string} gadgetName The gadget name
 * @param {string|undefined} licenseFileName The license file name of this gadget
 * @return {string|undefined} The gadget license file content
 */
const getLicense = (gadgetName: string, licenseFileName: string | undefined): string | undefined => {
	if (!licenseFileName) {
		return;
	}

	const licenseFilePath: string = join(__rootDir, `src/${gadgetName}/${licenseFileName}`);
	const fileBuffer: Buffer = readFileSync(licenseFilePath);
	const fileContent: string = fileBuffer.toString();

	return fileContent.trim() ? fileContent : undefined;
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
		const [, section] = definition.match(/.*?☀(\S+)$/) as [string, string];
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
	definitionText = trim(BANNER) + definitionText;

	const definitionPath: string = join(__rootDir, 'dist/definition.txt');
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
