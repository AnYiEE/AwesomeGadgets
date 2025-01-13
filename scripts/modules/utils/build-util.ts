import * as PACKAGE from '../../../package.json';
import {BANNER, GLOBAL_REQUIRES_ES6, SOURCE_MAP} from '../../constant';
import {type BabelFileResult, type TransformOptions, transformAsync} from '@babel/core';
import type {BuiltFile, DefaultDefinition, SourceFiles} from '../types';
import {type OutputFile, build as esbuild} from 'esbuild';
import {
	__rootDir,
	generateArray,
	generateBannerAndFooter,
	generateDefinition,
	readFileContent,
	sortObject,
	trim,
	writeFileContent,
} from './general-util';
import {existsSync, mkdirSync} from 'node:fs';
import chalk from 'chalk';
import {esbuildOptions} from '../build-esbuild_options';
import {exit} from 'node:process';
import {globSync} from 'glob';
import path from 'node:path';
import {rimraf} from 'rimraf';

/**
 * @private
 * @param {string} outputFilePath
 * @param {string} sourceCode
 */
const writeFile = (outputFilePath: string, sourceCode: string) => {
	const outputDirectoryPath: string = path.dirname(outputFilePath);
	mkdirSync(outputDirectoryPath, {
		recursive: true,
	});

	writeFileContent(outputFilePath, sourceCode);
};

/**
 * @private
 * @param {string} inputFilePath
 * @param {string} outputFilePath
 * @param {Object} object
 * @param {DefaultDefinition['dependencies']|undefined} [object.dependencies]
 * @param {DefaultDefinition['externalPackages']|undefined} [object.externalPackages]
 * @param {string} object.licenseText
 * @return {Promise<BuiltFiles>}
 */
const build = async (
	inputFilePath: string,
	outputFilePath: string,
	{
		dependencies,
		externalPackages,
		licenseText,
	}: {
		dependencies?: DefaultDefinition['dependencies'] | undefined;
		externalPackages?: DefaultDefinition['externalPackages'] | undefined;
		licenseText: string | undefined;
	}
) => {
	const buildResult = await esbuild({
		...esbuildOptions,
		...generateBannerAndFooter({
			licenseText,
			isProcessJs: false,
		}),
		external: generateArray(dependencies, externalPackages),
		entryPoints: [inputFilePath],
		outfile: outputFilePath,
	});

	const {outputFiles} = buildResult;
	if (!outputFiles) {
		return [];
	}

	return outputFiles.map<BuiltFile>(({path: outputPath, text}) => {
		return {
			path: outputPath,
			// See `generateBannerAndFooter()` comment for more details
			text: text.replace(/^\/\*\*\n\s\*\n\s\*\/\n/, ''),
		};
	});
};

/**
 * @private
 * @param {string} outputFilePath
 * @param {string} sourceCode
 * @param {Object} object
 * @param {DefaultDefinition['dependencies']|undefined} object.dependencies
 * @param {DefaultDefinition['externalPackages']|undefined} object.externalPackages
 * @param {string} object.licenseText
 * @return {Promise<string>}
 */
const bundle = async (
	outputFilePath: string,
	sourceCode: string,
	{
		dependencies,
		externalPackages,
		licenseText,
	}: {
		dependencies: DefaultDefinition['dependencies'] | undefined;
		externalPackages: DefaultDefinition['externalPackages'] | undefined;
		licenseText: string | undefined;
	}
) => {
	const buildResult = await esbuild({
		...esbuildOptions,
		...generateBannerAndFooter({
			licenseText,
		}),
		external: generateArray(dependencies, externalPackages),
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

	// See `generateBannerAndFooter()` comment for more details
	return text.replace(/^\/\*\*\n\s\*\n\s\*\/\n/, '');
};

/**
 * @private
 * @return {TransformOptions}
 */
const generateTransformOptions = () => {
	const options = {
		presets: [
			[
				'@babel/preset-env',
				{
					bugfixes: true, // FIXME: Remove when updating to Babel 8
					corejs: {
						version: PACKAGE.devDependencies['core-js'].match(/\d+(?:.\d+){0,2}/)?.[0] ?? '3.40',
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
			path.join(__rootDir, 'scripts/modules/plugins/babel-plugin-convert-comments.ts'),
			path.join(__rootDir, 'scripts/modules/plugins/babel-plugin-import-polyfills.ts'),
		],
		sourceMaps: SOURCE_MAP ? 'inline' : false,
	} as const satisfies TransformOptions;

	if (GLOBAL_REQUIRES_ES6) {
		// 以下关键字和运算符无法被 MediaWiki（>= 1.39）的 JavaScript 压缩器良好支持，即使设置了 requiresES6 标识
		// The following keywords and operators are not well supported by MediaWiki's (>= 1.39) JavaScript minifier, even if the `requiresES6` flag is true
		options.presets[0][1].include.push(
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
		options.presets[0][1].include.push(
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
const transform = async (inputFilePath: string, sourceCode: string) => {
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
 * @param {Object} object
 * @param {DefaultDefinition['dependencies']|undefined} object.dependencies
 * @param {DefaultDefinition['externalPackages']|undefined} object.externalPackages
 * @param {string} object.licenseText
 * @return {Promise<string[]>}
 */
const buildScript = async (
	gadgetName: string,
	scriptFileName: string,
	{
		dependencies,
		externalPackages,
		licenseText,
	}: {
		dependencies: DefaultDefinition['dependencies'] | undefined;
		externalPackages: DefaultDefinition['externalPackages'] | undefined;
		licenseText: string | undefined;
	}
) => {
	const outputFileNames: string[] = [];

	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFileName = scriptFileName.replace(/\.[jt]sx?$/, '.js');

	const inputFilePath = path.join(__rootDir, `src/${gadgetName}/${scriptFileName}`);
	const outputFilePath = path.join(__rootDir, `dist/${gadgetName}/${outputFileName}`);

	const builtFiles = await build(inputFilePath, outputFilePath, {
		dependencies,
		externalPackages,
		licenseText,
	});
	for (const {path: outputPath, text} of builtFiles) {
		const fileName = path.basename(outputPath);
		outputFileNames.push(fileName);

		const fileExt = path.extname(outputPath);
		switch (fileExt) {
			case '.css':
				writeFile(outputPath, text);
				break;
			case '.js': {
				const transformOutput = await transform(inputFilePath, text);
				const bundleOutput = await bundle(outputFilePath, transformOutput, {
					dependencies,
					externalPackages,
					licenseText,
				});
				if (!bundleOutput) {
					continue;
				}
				writeFile(outputPath, bundleOutput);
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
const buildStyle = async (gadgetName: string, styleFileName: string, licenseText: string | undefined) => {
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFileName = styleFileName.replace(/\.less$/, '.css');

	const inputFilePath = path.join(__rootDir, `src/${gadgetName}/${styleFileName}`);
	const outputFilePath = path.join(__rootDir, `dist/${gadgetName}/${outputFileName}`);

	const builtFiles = await build(inputFilePath, outputFilePath, {
		licenseText,
	});
	const buildOutput = builtFiles[0]!.text;

	writeFile(outputFilePath, buildOutput);

	return outputFileName;
};

/**
 * @param {string} gadgetName The gadget name
 * @param {'script'|'style'} type The type of target files
 * @param {Object} object
 * @param {DefaultDefinition['dependencies']} [object.dependencies]
 * @param {DefaultDefinition['externalPackages']} [object.externalPackages]
 * @param {string[]} object.files
 * @param {string} object.licenseText
 * @return {Promise<string[]>} The array of built file names
 */
async function buildFiles(
	gadgetName: string,
	type: 'script',
	{
		dependencies,
		externalPackages,
		files,
		licenseText,
	}: {
		dependencies: DefaultDefinition['dependencies'];
		externalPackages: DefaultDefinition['externalPackages'];
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
		externalPackages,
		files,
		licenseText,
	}: {
		dependencies?: DefaultDefinition['dependencies'];
		externalPackages?: DefaultDefinition['externalPackages'];
		files: string[];
		licenseText: string | undefined;
	}
): Promise<string[]> {
	const outputFileNames: string[] = [];

	for (const fileName of files) {
		switch (type) {
			case 'script':
				outputFileNames.push(
					...(await buildScript(gadgetName, fileName, {
						dependencies,
						externalPackages,
						licenseText,
					}))
				);
				break;
			case 'style':
				outputFileNames.push(await buildStyle(gadgetName, fileName, licenseText));
		}
	}

	return outputFileNames;
}

/**
 * Clean up the build output directory
 */
const cleanUpDist = async () => {
	const paths = globSync('!(*.txt)', {
		cwd: path.join(__rootDir, 'dist'),
		withFileTypes: true,
	}).map<string>((currentPath) => {
		return currentPath.fullpath();
	});

	await rimraf(paths);
};

/**
 * @private
 * @param {SourceFiles} sourceFiles
 */
const fallbackDefinition = (sourceFiles: SourceFiles) => {
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
const filterOutInvalidDependencies = (sourceFiles: SourceFiles) => {
	const filter = (array: string[]) => {
		return array
			.filter((item) => {
				return typeof item === 'string' && Boolean(item.trim());
			})
			.map<string>((item) => {
				return trim(item, {
					addNewline: false,
				});
			});
	};

	for (const gadgetFiles of Object.values(sourceFiles)) {
		const {
			definition: {dependencies, externalPackages},
		} = gadgetFiles;

		gadgetFiles.definition.dependencies = filter(dependencies);
		gadgetFiles.definition.externalPackages = filter(externalPackages);
	}
};

/**
 * @return {SourceFiles} An object used to describe source files
 */
const findSourceFile = () => {
	const sourceFiles: SourceFiles = {};

	type Gadget = SourceFiles[keyof SourceFiles];

	const files = globSync(['*/*.{js,jsx,ts,tsx,vue,css,less}', '*/definition.json', '*/LICENSE'], {
		cwd: path.join(__rootDir, 'src'),
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
		const targetGadget = sourceFiles[gadgetName];

		const fileExt = path.extname(fileName);
		const isScriptFile = ['.js', '.jsx', '.ts', '.tsx', '.vue'].includes(fileExt);
		const isStyleFile = ['.css', '.less'].includes(fileExt);

		const {script, style} = targetGadget;
		if (isScriptFile && style) {
			delete targetGadget.style;
		}
		if (isStyleFile && script) {
			continue;
		}

		switch (fileName) {
			case 'definition.json':
				targetGadget.definition = generateDefinition(gadgetName);
				continue;
			case 'index.js':
				if (!script || !/^index\.[jt]sx?$/.test(script)) {
					targetGadget.script = fileName;
				}
				continue;
			case 'index.jsx':
				if (!script || !/^index\.tsx?$/.test(script)) {
					targetGadget.script = fileName;
				}
				continue;
			case 'index.ts':
				if (!script || script !== 'index.tsx') {
					targetGadget.script = fileName;
				}
				continue;
			case 'index.tsx':
				targetGadget.script = fileName;
				continue;
			case 'index.vue':
				break;
			case `${gadgetName}.js`:
				if (!script) {
					targetGadget.script = fileName;
				}
				continue;
			case `${gadgetName}.jsx`:
				if (!script || (!/\.tsx?$/.test(script) && script !== 'index.js')) {
					targetGadget.script = fileName;
				}
				continue;
			case `${gadgetName}.ts`:
				if (!script || (!/^index\.[jt]sx?$/.test(script) && script !== `${gadgetName}.tsx`)) {
					targetGadget.script = fileName;
				}
				continue;
			case `${gadgetName}.tsx`:
				if (!script || !/^index\.[jt]sx?$/.test(script)) {
					targetGadget.script = fileName;
				}
				continue;
			case `${gadgetName}.vue`:
				break;
			case 'index.css':
				if (!style || style !== 'index.less') {
					targetGadget.style = fileName;
				}
				continue;
			case 'index.less':
				targetGadget.style = fileName;
				continue;
			case `${gadgetName}.css`:
				if (!style) {
					targetGadget.style = fileName;
				}
				continue;
			case `${gadgetName}.less`:
				if (!style || !/^index\.(?:css|less)/.test(style)) {
					targetGadget.style = fileName;
				}
				continue;
			case 'LICENSE':
				targetGadget.license = fileName;
				continue;
		}

		const removeFiles = (currentFiles: string[], ext: string) => {
			return [
				...new Set(
					currentFiles.filter((currentFile) => {
						return currentFile !== fileName.replace(new RegExp(`\\${fileExt}$`), ext);
					})
				),
			];
		};

		if (isScriptFile) {
			targetGadget.scripts ??= [];
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

		if (isStyleFile) {
			targetGadget.styles ??= [];
			const {styles} = targetGadget;
			styles.push(fileName);
			// If there are files with the same name in both CSS and Less, only retain the Less file
			if (fileExt === '.less') {
				targetGadget.styles = removeFiles(styles, '.css');
			}
		}
	}

	// After completing the loop, if `targetGadget.definition` is undefined, utilize the default definition
	fallbackDefinition(sourceFiles);

	// Filter out invalid dependencies, only allow non-empty string
	filterOutInvalidDependencies(sourceFiles);

	const sourceFilesSorted: SourceFiles = sortObject(sourceFiles);

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
) => {
	let definitionText = '|';

	for (const [key, value] of Object.entries(definition)) {
		const isArray = Array.isArray(value);
		if (
			[
				// Keys for internal use
				'enable',
				'description',
				'section',
				'excludeSites',
				'externalPackages',
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
					const valueFiltered = (value as [])
						.filter((item: keyof []) => {
							return ['number', 'string'].includes(typeof item) && Boolean(item.toString().trim());
						})
						.map<string>((item: number | string) => {
							return trim(item.toString(), {
								addNewline: false,
							});
						})
						.join(',');
					if (valueFiltered) {
						definitionText += `${key}=${valueFiltered}|`;
					}
				}
				break;
			case 'string': {
				const valueTrimmed = trim(value, {
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

	const {section} = definition;
	const sectionText = section
		? `☀${trim(section.replace(/☀/g, ''), {
				addNewline: false,
			})}`
		: '☀appear';

	return `* ${gadgetName}[ResourceLoader${definitionText}]${gadgetFiles}${sectionText}`;
};

/**
 * @param {string|undefined} file The index file name
 * @param {string[]|undefined} files The other file name array
 * @return {string[]} The generated file name array
 */
const generateFileArray = (file: string | undefined, files: string[] | undefined) => {
	return generateArray(file ?? files);
};

/**
 * @private
 * @param {string} gadgetName The gadget name
 * @param {string} fileName The file name
 * @return {string} The processed file name
 */
const removeDuplicateFileName = (gadgetName: string, fileName: string) => {
	const fileNameSplit: string[] = fileName.split('.');

	return `${gadgetName}${fileNameSplit.shift() === gadgetName ? `.${fileNameSplit.join('.')}` : `-${fileName}`}`;
};

/**
 * @param {string} gadgetName The gadget name
 * @param {string[]} fileNames The file name array
 * @return {string} The generated file name string
 */
const generateFileNames = (gadgetName: string, fileNames: string[]) => {
	return fileNames
		.map<string>((fileName) => {
			return removeDuplicateFileName(gadgetName, fileName);
		})
		.join('|');
};

/**
 * @param {string} gadgetName The gadget name
 * @param {string|undefined} licenseFileName The license file name of this gadget
 * @return {string|undefined} The gadget license file content
 */
const getLicense = (gadgetName: string, licenseFileName: string | undefined) => {
	if (!licenseFileName) {
		return;
	}

	const licenseFilePath = path.join(__rootDir, `src/${gadgetName}/${licenseFileName}`);
	const fileContent = readFileContent(licenseFilePath);

	return fileContent.trim() ? fileContent : undefined;
};

/**
 * Save `dist/definition.txt`
 *
 * @param {string[]} definitions The gadget definitions array (in the format of MediaWiki:Gadgets-definition item)
 */
const saveDefinition = (definitions: string[]) => {
	type Gadgets = typeof definitions;

	const definitionObject: Record<string, Gadgets> = {};
	for (const definition of definitions) {
		const [, section] = definition.match(/.*?☀(\S+)$/) as [string, string];
		definitionObject[section] ??= [];
		definitionObject[section].push(definition.replace(/☀.*/, ''));
	}

	const definitionObjectSorted = sortObject(definitionObject);

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
	definitionText = trim(BANNER) + definitionText;

	const definitionPath = path.join(__rootDir, 'dist/definition.txt');
	if (!existsSync(definitionPath)) {
		console.log(
			chalk.red(
				`Failed to save ${chalk.italic(
					'definition.txt'
				)}, please confirm if any files that need to be compiled exist.`
			)
		);
		exit(1);
	}

	writeFileContent(definitionPath, definitionText);
};

export {
	buildFiles,
	cleanUpDist,
	findSourceFile,
	generateDefinitionItem,
	generateFileArray,
	generateFileNames,
	getLicense,
	saveDefinition,
};
