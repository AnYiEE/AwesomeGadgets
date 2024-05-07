import {edittoolsDelh} from './modules/core';

const {wgPageName} = mw.config.get();

if (/^有兽档案馆(?:[_ ]talk)?:存废讨论\//i.test(wgPageName)) {
	edittoolsDelh();
}
