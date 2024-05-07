import './RRD.less';
import {IS_LOG, IS_WG_HISTORY_ACTION} from './modules/constant';
import {main} from './modules/core';

if (IS_WG_HISTORY_ACTION || IS_LOG) {
	$(main);
}
