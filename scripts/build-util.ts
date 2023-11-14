import {DEFAULT_DEFINITION, FOOTER, HEADER, WARNING} from './constant';
import type {DefaultDefinition, SourceFiles} from './scripts';
import babel, {type BabelFileResult, type TransformOptions} from '@babel/core';
import esbuild, {type OutputFile} from 'esbuild';
import fs, {type PathOrFileDescriptor, type Stats} from 'node:fs';
import chalk from 'chalk';
import {esbuildOptions} from './build-esbuild_options';
import path from 'node:path';
import process from 'node:process';
const __dirname = path.resolve();

const write = ({
	contentType,
	licenseText,
	code: sourceCode,
	path: outputFilePath,
}: {
	contentType: 'application/javascript' | 'text/css';
	licenseText: string;
	code: string;
	path: string;
}): void => {
	let fileContent = '';

	switch (contentType) {
		case 'application/javascript': {
			const licenseTextTrim = licenseText.trim();
			licenseText = licenseTextTrim ? `${licenseTextTrim}\n` : '';
			fileContent = `${licenseText}${WARNING}\n${HEADER}\n(function () {\n\n${sourceCode}\n\n})();\n${FOOTER}\n`;
			break;
		}
		case 'text/css':
			fileContent = `${licenseText}${WARNING}\n\n${HEADER}\n\n${sourceCode}\n${FOOTER}\n`;
			break;
		default:
			fileContent = sourceCode;
	}

	const outputDirectoryPath = path.dirname(outputFilePath);
	fs.mkdirSync(outputDirectoryPath, {recursive: true});

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

/**
 * @param {string} script The script file name of a gadget
 * @param {{name:string; licenseText:string; babelTransformOptions:TransformOptions}} object The name and the license file content of this gadget, the .babelrc file parsed object in the root directory
 */
const buildScript = async (
	script: string,
	{
		name,
		licenseText,
		babelTransformOptions,
	}: {name: string; licenseText: string; babelTransformOptions: TransformOptions}
): Promise<void> => {
	const inputFilePath: string = path.join(__dirname, `src/${name}/${script}`);
	// The TypeScript file is always compiled into a JavaScript file, so replace the extension directly
	const outputFilePath: string = path.join(__dirname, `dist/${name}/${script.replace(/\.ts$/, '.js')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);
	const babelFileResult: BabelFileResult = (await babel.transformAsync(
		buildOutput,
		babelTransformOptions
	)) as BabelFileResult;
	const {code} = babelFileResult;

	write({
		licenseText,
		code: code as string,
		contentType: 'application/javascript',
		path: outputFilePath,
	});
};

/**
 * @param {string[]} scripts Array of script file names for a gadget
 * @param {{name:string; licenseText:string}} object The name and the license file content of this gadget
 */
const buildScripts = async (
	scripts: string[],
	{name, licenseText}: {name: string; licenseText: string}
): Promise<void> => {
	// Load outside the loop for optimizing I/O performance
	const babelTransformOptions: TransformOptions = JSON.parse(
		fs.readFileSync(path.join(__dirname, '.babelrc')).toString()
	);

	const buildPromseArray: Promise<void>[] = [];
	for (const script of scripts) {
		buildPromseArray.push(
			buildScript(script, {
				name,
				licenseText,
				babelTransformOptions,
			})
		);
	}
	await Promise.all(buildPromseArray);
};

/**
 * @param {string} style The style sheet file name of a gadget
 * @param {{name:string; licenseText:string}} object The name and the license file content of this gadget
 */
const buildStyle = async (style: string, {name, licenseText}: {name: string; licenseText: string}): Promise<void> => {
	const inputFilePath: string = path.join(__dirname, `src/${name}/${style}`);
	// The Less file is always compiled into a CSS file, so replace the extension directly
	const outputFilePath: string = path.join(__dirname, `dist/${name}/${style.replace(/\.less$/, '.css')}`);

	const buildOutput: string = await build(inputFilePath, outputFilePath);

	write({
		licenseText,
		code: buildOutput,
		contentType: 'text/css',
		path: outputFilePath,
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
	const buildPromseArray: Promise<void>[] = [];
	for (const style of styles) {
		buildPromseArray.push(
			buildStyle(style, {
				name,
				licenseText,
			})
		);
	}
	await Promise.all(buildPromseArray);
};

const sourceFiles: SourceFiles = {};
/**
 * @param {string} [currentPath=src] The path of the current source file
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
 * @param {string|undefined} [definition] The definition file name of a gadget
 * @param {{name:string}} object The gadget name
 * @return {string} The gadget definition fragment
 */
const getDefinition = (definition: string | undefined, {name}: {name: string}): string => {
	let definitionText = '';

	let definitionJsonText = '{}';
	try {
		const definitionFileWithPath: string = path.join(__dirname, `src/${name}/${definition}`);
		const fileBuffer: Buffer = fs.readFileSync(definitionFileWithPath);
		definitionJsonText = fileBuffer.toString();
	} catch {
		console.warn(
			chalk.yellow(`definition.json for ${chalk.bold(name)} is missing, the default definition will be used.`)
		);
	}
	const definitionObject: DefaultDefinition = {
		...DEFAULT_DEFINITION,
		...JSON.parse(definitionJsonText),
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
		return text.replace(/#|==|<>/g, '').trim();
	};

	let descriptionText: string = cleanInvalidCharacters(definitionObject.description);
	descriptionText = descriptionText ? `#${descriptionText}` : '#';

	let sectionText: string = cleanInvalidCharacters(definitionObject.section);
	sectionText = sectionText ? `#${sectionText}` : '#appear';

	return `* ${name}[ResourceLoader|$1$2]|$3$4$5`
		.replace('$1', definitionText)
		.replace('$4', sectionText)
		.replace('$5', descriptionText);
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
const setDefinition = (definitions: string[]): void => {
	const definitionObject: Record<string, typeof definitions> = {};
	for (const definition of definitions.filter((_definition: string): boolean => {
		return !!_definition; // Filter out empty definitions
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
	const fileDescriptor: PathOrFileDescriptor = fs.openSync(definitionPath, 'w');
	fs.writeFileSync(fileDescriptor, definitionText);
	fs.fdatasyncSync(fileDescriptor);
	fs.closeSync(fileDescriptor);
};

/**
 * @param {string|undefined} license The gadget license file name
 * @param {{name:string}} object The gadget name
 * @return {string} The gadget license file content
 */
const getLicense = (license: string | undefined, {name}: {name: string}): string => {
	if (!license) {
		return '';
	}

	const licenseFileWithPath: string = path.join(__dirname, `src/${name}/${license}`);
	const fileBuffer: Buffer = fs.readFileSync(licenseFileWithPath);
	return fileBuffer.length ? `${fileBuffer}\n` : '';
};

export {buildScripts, buildStyles, findSourceFile, getDefinition, cleanDefinition, setDefinition, getLicense};
