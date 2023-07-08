import build from './build.js';
import {findSourceFile} from './build-util.js';

const sourceFiles = await findSourceFile('src');

await build(sourceFiles);
