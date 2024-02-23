import {getBody} from 'ext.gadget.Util';
import {whoIsActive} from './modules/core';

if (mw.config.get('wgNamespaceNumber') >= 0) {
	void getBody().then(whoIsActive);
}
