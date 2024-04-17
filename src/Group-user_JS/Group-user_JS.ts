import * as OPTIONS from './options.json';
import {addLog} from './modules/addLog';
import {addSubpage} from './modules/addSubpage';
import {fixReason} from './modules/fixReason';
import {fixSummary} from './modules/fixSummary';
import {getBody} from 'ext.gadget.Util';
import {linkSearchEditButton} from './modules/linkSearchEditButton';
import {loadGadgetEditForm} from './modules/loadGadgetEditForm';
import {smartEditIntro} from './modules/smartEditIntro';
import {smartNewSection} from './modules/smartNewSection';

(function userJS(): void {
	const {configKey} = OPTIONS;

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	/* 加载编辑界面脚本 */
	void loadGadgetEditForm();

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		/* 向侧边栏添加“日志”菜单 */
		addLog();
		/* 向侧边栏添加“子页面”菜单 */
		addSubpage();
		/* 修改删除摘要 */
		fixReason($body);
		/* 修改编辑摘要 */
		fixSummary($body);
		/* 在[[Special:LinkSearch]]显示“编辑”按钮 */
		linkSearchEditButton($body);
		/* 编辑提示（EditIntro） */
		smartEditIntro($body);
		/* 智能讨论页编辑（新建） */
		smartNewSection($body);
	});
})();
