import {argv} from 'node:process';
import {build} from './modules/build';
import {deploy} from './modules/deploy';
import minimist from 'minimist';
import {sortConfig} from './modules/sortConfig';

const {
	build: isBuild,
	deploy: isDeploy,
	sort: isSort,
	...rest
} = minimist<{
	build?: boolean;
	deploy?: boolean;
	sort?: boolean;
}>(argv.slice(2));

if (isBuild) {
	await build();
}

if (isDeploy) {
	await deploy();
}

if (isSort) {
	await sortConfig(rest._);
}
