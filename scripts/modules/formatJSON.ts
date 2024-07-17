import type {DefaultDefinition, GlobalSourceFiles} from './types';
import {type Options, format, resolveConfig, resolveConfigFile} from 'prettier';
import {__rootDir, exec, readFileContent, sortObject, writeFileContent} from './utils/general-util';
import {globSync} from 'glob';
import path from 'node:path';

interface File {
	isGlob?: boolean;
	name: string;
	fullpath(): string;
}
type Files = File[];

const checkTargetDir = (fileName: string, filePath: string): boolean => {
	const relativePath: string = path.relative(__rootDir, filePath);
	const parts: string[] = relativePath.split(path.sep);

	switch (fileName) {
		case 'credentials.json':
			if (parts.length === 2 && parts[0] === 'scripts' && parts[1] === fileName) {
				return true;
			}
			break;
		case 'definition.json':
		case 'global.json':
			if (parts.length === 3 && parts[0] === 'src' && parts[2] === fileName) {
				return true;
			}
			break;
	}

	return false;
};

const generateTargetFiles = (paths: string[]): Files => {
	if (paths.length) {
		return paths.map<File>((currentPath) => {
			return {
				isGlob: false,
				name: path.basename(currentPath),
				fullpath() {
					return currentPath;
				},
			};
		});
	}

	return [
		...globSync('credentials.json', {
			cwd: path.join(__rootDir, 'scripts'),
			withFileTypes: true,
		}),
		...globSync(['*/definition.json', 'global.json'], {
			cwd: path.join(__rootDir, 'src'),
			withFileTypes: true,
		}),
	];
};

const formatJSON = async (paths: string[] = []): Promise<void> => {
	const files: Files = generateTargetFiles(paths);
	if (!files.length) {
		return;
	}

	const prettierConfigPath = (await resolveConfigFile()) as string;
	const prettierConfig = (await resolveConfig(prettierConfigPath)) as Options;

	for (const file of files) {
		const {isGlob, name: fileName} = file;
		const filePath: string = file.fullpath();

		const fileContent: string = readFileContent(filePath);
		if (!fileContent) {
			continue;
		}

		let object: Record<string, unknown> = {};
		try {
			object = JSON.parse(fileContent) as typeof object;
		} catch {
			continue;
		}

		let isExceptFile: boolean = true;
		switch (file.name) {
			case 'credentials.json':
				if (!isGlob && !checkTargetDir(fileName, filePath)) {
					isExceptFile = false;
					break;
				}
				// Sort only the first-level keys
				object = sortObject(object);
				break;
			case 'definition.json': {
				if (!isGlob && !checkTargetDir(fileName, filePath)) {
					isExceptFile = false;
					break;
				}

				const {enable, description, section, excludeSites, externalPackages} =
					object as unknown as DefaultDefinition;

				let definitionSorted: Partial<DefaultDefinition> = {
					enable,
					description,
					section,
					excludeSites,
					externalPackages,
				};
				definitionSorted = {
					...definitionSorted,
					...sortObject(object, true),
				};

				for (const [key, value] of Object.entries(definitionSorted)) {
					if (value !== undefined) {
						continue;
					}

					delete definitionSorted[key as keyof typeof definitionSorted];
				}

				object = definitionSorted;
				break;
			}
			case 'global.json':
				if (!isGlob && !checkTargetDir(fileName, filePath)) {
					isExceptFile = false;
					break;
				}

				object = sortObject(object);

				for (const [key, value] of Object.entries(object)) {
					const valueSorted = sortObject(value as GlobalSourceFiles);

					for (const [innerKey, innerValue] of Object.entries(valueSorted)) {
						const {enable, sourceCode, licenseText} = innerValue;

						valueSorted[innerKey] = {
							enable,
							sourceCode,
						};

						if (licenseText !== undefined) {
							valueSorted[innerKey].licenseText = licenseText;
						}
					}

					object[key] = valueSorted;
				}
				break;
			default:
				isExceptFile = false;
		}

		if (isExceptFile) {
			writeFileContent(
				filePath,
				await format(JSON.stringify(object, null, '\t'), {
					...prettierConfig,
					parser: 'json',
				})
			);
		} else {
			await exec(`prettier --write ${filePath}`);
		}
	}
};

export {formatJSON};
