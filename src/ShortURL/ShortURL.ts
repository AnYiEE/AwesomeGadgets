import {init} from './modules/core';

if (
	mw.config.get('wgNamespaceNumber') >= 0 ||
	!document.querySelectorAll('.noarticletext').length ||
	mw.config.get('wgAction') === 'view'
) {
	// Load main function
	mw.hook('wikipage.content').add(($content): void => {
		// Guard against double inclusions
		if (mw.config.get('wgShortURLInstalled')) {
			return;
		}

		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		void init({
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			articleId: mw.config.get('wgArticleId'),
			revisionId: mw.config.get('wgRevisionId'),
		});

		// Set guard
		mw.config.set('wgShortURLInstalled', true);
	});
}
