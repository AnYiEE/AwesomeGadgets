import type {DefaultDefinition, GlobalSourceFiles} from './types';
import {type Options, format, resolveConfig, resolveConfigFile} from 'prettier';
import {type Path, globSync} from 'glob';
import {__rootDir, readFileContent, sortObject, writeFileContent} from './utils/general-util';
import {join} from 'node:path';

const sortConfig = async (): Promise<void> => {
	const files: Path[] = globSync(['*/definition.json', 'global.json'], {
		cwd: join(__rootDir, 'src'),
		withFileTypes: true,
	});
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

		switch (file.name) {
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
		}

		writeFileContent(
			filePath,
			await format(JSON.stringify(object, null, '\t'), {
				...prettierConfig,
				parser: 'json',
			})
		);
	}
};

export {sortConfig};
