import {GADGET_NAME, GOOD_VARIANTS, wgUserName} from './modules/constant';
import {notifyConversion} from './modules/core';
import {preserveVariant} from './modules/preserveVariant';

((): void => {
	if (mw.config.get('wgAction') !== 'view') {
		return; // 只在浏览页面时显示
	}
	const preferredVariant = (mw.storage.get(GADGET_NAME) || '').toString();
	if (!['hide', ...GOOD_VARIANTS].includes(preferredVariant)) {
		// 是否点过“不再提示”或完成过设置
		$(notifyConversion);
	} else if (!wgUserName) {
		$(preserveVariant);
	}
})();
