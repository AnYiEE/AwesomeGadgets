import './Edit0.less';
import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {edit0} from './modules/core';
import {getBody} from 'ext.gadget.Util';

if (WG_NAMESPACE_NUMBER >= 0) {
	void getBody().then(edit0);
}
