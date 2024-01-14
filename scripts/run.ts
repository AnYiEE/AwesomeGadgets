import {argv} from 'node:process';
import {build} from './modules/build';
import {deploy} from './modules/deploy';
import minimist from 'minimist';

const {build: isBuild, deploy: isDeploy} = minimist<{
	build?: boolean;
	deploy?: boolean;
}>(argv.slice(2));

if (isBuild) {
	await build();
}

if (isDeploy) {
	await deploy();
}
