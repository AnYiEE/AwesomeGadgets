import {clearUndoSummary} from './modules/clearUndoSummary';
import {disableTitle} from './modules/disableTitle';
import {getBody} from 'ext.gadget.Util';
// import {introACH} from './modules/introACH';
import {preloadRevid} from './modules/preloadRevid';

void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	// 删除回退时自动生成的编辑摘要
	clearUndoSummary($body);

	// 在提交新段落时，让主题栏在特定情况下失效
	disableTitle($body);

	// 源代码编辑器加载“编辑请求”补丁
	preloadRevid($body);

	// 新用户引导至条目创建向导（[[Help:快速上手]]）
	// introACH();
});
