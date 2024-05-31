import * as OPTIONS from '../options.json';
import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(`ShortURL/${OPTIONS.version}`);

export {api};
