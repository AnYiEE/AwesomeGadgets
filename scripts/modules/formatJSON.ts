import type {DefaultDefinition, GlobalSourceFiles} from './types';
import {type Options, format, resolveConfig, resolveConfigFile} from 'prettier';
import {__rootDir, exec, readFileContent, sortObject, writeFileContent} from './utils/general-util';
import {basename, join, relative, sep} from 'node:path';
import {globSync} from 'glob';

type Files = {
	isGlob?: boolean;
	name: string;
	fullpath(): string;
}[];

const checkTargetDir = (fileName: string, filePath: string): boolean => {
	const relativePath: string = relative(__rootDir, filePath);
	const parts: string[] = relativePath.split(sep);

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

const formatJSON = async (paths: string[]): Promise<void> => {
	let files: Files = [];

	if (paths.length) {
		for (const path of paths) {
			files.push({
				isGlob: false,
				name: basename(path),
				fullpath(): string {
					return path;
				},
			});
		}
	} else {
		files = [
			...globSync('credentials.json', {
				cwd: join(__rootDir, 'scripts'),
				withFileTypes: true,
			}),
			...globSync(['*/definition.json', 'global.json'], {
				cwd: join(__rootDir, 'src'),
				withFileTypes: true,
			}),
		];
	}

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

				const {enable, excludeSites, description, section} = object as unknown as DefaultDefinition;

				let definitionSorted: Partial<DefaultDefinition> = {
					enable,
					excludeSites,
					description,
					section,
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
							valueSorted[innerKey]!.licenseText = licenseText;
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
