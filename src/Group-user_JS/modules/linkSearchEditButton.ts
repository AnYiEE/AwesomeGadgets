import {getMessage} from './i18n';

const linkSearchEditButton = ($body: JQuery<HTMLBodyElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	if (wgCanonicalSpecialPageName !== 'LinkSearch') {
		return;
	}

	for (const element of $body.find<HTMLAnchorElement>('.mw-spcontent a[href^="/wiki"]')) {
		$('<span>')
			.append(' （', $('<a>').attr('href', `${element.href}?action=edit`).text(getMessage('Edit')), '）')
			.insertAfter(element);
	}
};

export {linkSearchEditButton};
