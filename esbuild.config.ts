import type {DeploymentTargets, SourceFiles} from './scripts/scripts';
import {build} from './scripts/build';
import {deploy} from './scripts/deploy';
import {findSourceFile} from './scripts/build-util';
import {generateTargets} from './scripts/deploy-util';

const sourceFiles: SourceFiles = findSourceFile();

const definitions: string[] = await build(sourceFiles);

const deployTargets: DeploymentTargets = generateTargets(definitions);

await deploy(deployTargets);
