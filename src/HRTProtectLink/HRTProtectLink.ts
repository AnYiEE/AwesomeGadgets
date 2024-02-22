import {WG_NAMESPACE_NUMBER, WG_PAGE_NAME} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

void getBody().then(function HRTProtectLink($body: JQuery<HTMLBodyElement>): void {
	if (![10, 828].includes(WG_NAMESPACE_NUMBER)) {
		return;
	}

	const semiProtectURL: string = mw.util.getUrl(WG_PAGE_NAME, {
		action: 'protect',
		'mwProtect-level-edit': 'autoconfirmed',
		'mwProtect-level-move': 'autoconfirmed',
		'mwProtect-reason': getMessage('HRT'),
	});
	const fullProtectURL: string = mw.util.getUrl(WG_PAGE_NAME, {
		action: 'protect',
		'mwProtect-level-edit': 'sysop',
		'mwProtect-level-move': 'sysop',
		'mwProtect-reason': getMessage('HRT'),
	});

	const portletId: 'p-cactions' | 'p-tb' = $body.find('#p-cactions').length ? 'p-cactions' : 'p-tb';
	mw.util.addPortletLink(portletId, semiProtectURL, getMessage('Semi-protect HRT'), 't-hrt-semiprotect');
	mw.util.addPortletLink(portletId, fullProtectURL, getMessage('Full-protect HRT'), 't-hrt-fullprotect');
});
