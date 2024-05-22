import {getMessage} from '../i18n';

const generateElements = (originToc: HTMLElement) => {
	const toc: HTMLElement = originToc.cloneNode(true) as HTMLElement;
	toc.querySelector('input')?.remove();
	toc.querySelector('.toctogglespan')?.remove();
	const $toc: JQuery = $(toc);

	const $floatToc: JQuery = $toc
		.clone()
		.removeAttr('id')
		.prepend(
			$('<span>')
				.addClass('oo-ui-indicatorElement-indicator oo-ui-icon-close')
				.attr({
					id: 'close',
					title: getMessage('Close'),
					role: 'button',
					tabindex: '0',
				})
		);

	const $floatTocOpener: JQuery = $('<div>')
		.addClass('noprint')
		.attr({
			id: 'floatToc-opener',
			title: getMessage('Contents'),
			role: 'button',
			tabindex: '0',
		})
		.append(
			$('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-reference'),
			$('<span>').text(getMessage('Contents'))
		);

	return {
		$floatToc,
		$floatTocOpener,
	};
};

export {generateElements};
