import {getBody} from 'ext.gadget.Util';
import {mwAddPreview} from './modules/mw/mwAddPreview';
import {wikitextPreviewTestcase} from './modules/wikitextPreviewTestcase';

void getBody().then(function specialWikitext($body: JQuery<HTMLBodyElement>): void {
	// 执行预览
	mwAddPreview($body);
	// 检查测试样例
	void wikitextPreviewTestcase(true);
});
