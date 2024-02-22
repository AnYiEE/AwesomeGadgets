import {purgePageCache} from './modules/core';

if (
	mw.config.get('wgAction') === 'view' &&
	mw.config.get('wgIsArticle') &&
	mw.config.get('wgCurRevisionId') !== 0 &&
	mw.config.get('wgRevisionId') !== 0 &&
	mw.config.get('wgCurRevisionId') === mw.config.get('wgRevisionId')
) {
	$(purgePageCache);
}
