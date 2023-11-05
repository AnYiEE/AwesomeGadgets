import type {SourceFiles} from './scripts';
import build from './build';
import {findSourceFile} from './build-util';

const sourceFiles: SourceFiles = await findSourceFile();

await build(sourceFiles);
