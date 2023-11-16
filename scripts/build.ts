import type {SourceFiles} from './modules/types';
import {build} from './modules/build';
import {findSourceFile} from './modules/utils/build-util';

const sourceFiles: SourceFiles = findSourceFile();

await build(sourceFiles);
