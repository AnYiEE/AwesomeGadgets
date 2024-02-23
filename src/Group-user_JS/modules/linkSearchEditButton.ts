import {getMessage} from './i18n';

export const linkSearchEditButton = ($body: JQuery<HTMLBodyElement>): void => {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'LinkSearch') {
		return;
	}

	for (const element of $body.find<HTMLAnchorElement>('.mw-spcontent a[href^="/wiki"]')) {
		$('<span>')
			.append(' （', $('<a>').attr('href', `${element.href}?action=edit`).text(getMessage('Edit')), '）')
			.insertAfter(element);
	}
};
