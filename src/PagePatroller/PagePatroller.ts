import {pagePatroller} from './modules/core';

if (
	mw.config.get('wgNamespaceNumber') >= 0 &&
	mw.config.get('wgPageName') !== 'LIB:首页' &&
	mw.config.get('wgArticleId') > 0
) {
	void pagePatroller();
}
