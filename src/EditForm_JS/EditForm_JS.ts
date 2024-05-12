import {clearUndoSummary} from './modules/clearUndoSummary';
import {disableTitle} from './modules/disableTitle';
import {getBody} from 'ext.gadget.Util';
// import {introACH} from './modules/introACH';
import {preloadRevid} from './modules/preloadRevid';

void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	mw.hook('wikipage.editform').add(($editForm): void => {
		// 删除回退时自动生成的编辑摘要
		clearUndoSummary($editForm);

		// 在提交新段落时，让主题栏在特定情况下失效
		disableTitle({$body, $editForm});

		// 源代码编辑器加载“编辑请求”补丁
		preloadRevid($editForm);
	});

	// 新用户引导至条目创建向导（[[QW:AFC]]）
	// introACH();
});
