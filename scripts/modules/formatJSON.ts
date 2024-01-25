import type {DefaultDefinition, GlobalSourceFiles} from './types';
import {type Options, format, resolveConfig, resolveConfigFile} from 'prettier';
import {__rootDir, exec, readFileContent, sortObject, writeFileContent} from './utils/general-util';
import {basename, join} from 'node:path';
import {globSync} from 'glob';

type Files = {
	name: string;
	fullpath(): string;
}[];

const formatJSON = async (paths: string[]): Promise<void> => {
	let files: Files = [];

	if (paths.length) {
		for (const path of paths) {
			files.push({
				name: basename(path),
				fullpath(): string {
					return path;
				},
			});
		}
	} else {
		files = globSync(['*/definition.json', 'global.json'], {
			cwd: join(__rootDir, 'src'),
			withFileTypes: true,
		});
	}

	if (!files.length) {
		return;
	}

	const prettierConfigPath = (await resolveConfigFile()) as string;
	const prettierConfig = (await resolveConfig(prettierConfigPath)) as Options;

	for (const file of files) {
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
			case 'definition.json': {
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
