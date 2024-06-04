import * as OPTIONS from '../options.json';
import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(`ToolsRedirect-bio-latin-names/${OPTIONS.version}`);

export {api};
