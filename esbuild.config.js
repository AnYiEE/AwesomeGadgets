import build from './script/build.js';
import {findSourceFile} from './script/build-util.js';
import deploy from './script/deploy.js';
import {generateTargets} from './script/deploy-util.js';

const sourceFiles = await findSourceFile('src');

const definitions = await build(sourceFiles);

const deployTargets = await generateTargets(definitions);

await deploy(deployTargets);
