import {argv} from 'node:process';
import {build} from './modules/build';
import {deploy} from './modules/deploy';
import {formatJSON} from './modules/formatJSON';
import minimist from 'minimist';

const {
	build: isBuild,
	deploy: isDeploy,
	'format-json': isFormatJSON,
	test: isTest,
	...rest
} = minimist<{
	build?: boolean;
	deploy?: boolean;
	'format-json'?: boolean;
	test: boolean;
}>(argv.slice(2));

if (isBuild) {
	await build();
}

if (isDeploy) {
	await deploy(isTest);
}

if (isFormatJSON) {
	await formatJSON(rest._);
}
