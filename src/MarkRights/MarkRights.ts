/**
 * @description 在最近修改、监视列表、条目历史记录等位置以特殊格式显示有特殊权限的用户
 */
import {markUserRights} from './modules/core';

mw.hook('wikipage.content').add(function markRights($content): void {
	if ($content.attr('id') === 'mw-content-text' || $content.hasClass('mw-changeslist')) {
		void markUserRights($content);
	}
});
