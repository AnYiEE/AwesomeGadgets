import * as OPTIONS from './options.json';
import {fixCheckbox} from './modules/fixCheckbox';
import {fixSummary} from './modules/fixSummary';

(function userJS(): void {
	const {configKey} = OPTIONS;

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	/* 取消复选框 */
	fixCheckbox();
	/* 修改编辑摘要 */
	fixSummary();
})();
