import {translateVariants} from './modules/core';

if (/^MediaWiki:[^/]+(\/zh)?$/.test(mw.config.get('wgPageName'))) {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const link: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', window.wgULS('转换变体', '轉換變體'));
	if (link) {
		$(link).on('click', function () {
			this.remove();
			translateVariants();
		});
	}
}
