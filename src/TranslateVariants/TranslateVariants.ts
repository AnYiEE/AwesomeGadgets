import {getBody} from 'ext.gadget.Util';
import {translateVariants} from './modules/translateVariants';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgPageName} = mw.config.get();
	if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = $body.find('#p-cactions').length ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', window.wgULS('转换变体', '轉換變體'));

	element?.addEventListener('click', (): void => {
		element.remove();
		translateVariants(wgPageName);
	});
});
