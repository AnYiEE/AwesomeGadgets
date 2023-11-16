import type {DeploymentTargets, SourceFiles} from './modules/types';
import {build} from './modules/build';
import {deploy} from './modules/deploy';
import {findSourceFile} from './modules/utils/build-util';
import {generateTargets} from './modules/utils/deploy-util';

const sourceFiles: SourceFiles = findSourceFile();

const definitions: string[] = await build(sourceFiles);

const deployTargets: DeploymentTargets = generateTargets(definitions);

await deploy(deployTargets);
