/* eslint-disable unicorn/prefer-add-event-listener */
import {Clipboard} from 'ext.gadget.Clipboard';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

let clipboardInstance: ClipboardJS | undefined;

const doIns = (link: string): void => {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';

	let element: HTMLLIElement | null = document.querySelector('#t-shortlink');

	if (!element) {
		element = mw.util.addPortletLink(
			portletId,
			'#',
			getMessage('Short URL'),
			't-shortlink',
			getMessage('Show short URL')
		);
	}

	if (element) {
		((element.firstElementChild ?? element) as HTMLElement).onclick = (event: MouseEvent): void => {
			event.preventDefault();
			const $element: JQuery = $('<div>');
			for (const domain of ['youshou.wiki', 'ysymh.cc']) {
				$element.append(
					// eslint-disable-next-line @typescript-eslint/no-unsafe-call
					new mw.widgets.CopyTextLayout({
						align: 'top',
						copyText: `https://${domain}${link}`,
					}).$element as JQuery
				);
			}
			void OO.ui.alert($element, {title: getMessage('Short URL copied to clipboard'), size: 'medium'});
		};

		const isCitizen: boolean = mw.config.get('skin') === 'citizen';
		if (isCitizen) {
			$(element).find('a').prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
		}
	}

	let headerElement: HTMLAnchorElement | null = document.querySelector('#mw-indicator-shortURL a');

	if (!headerElement) {
		const $headerElement: JQuery = $('<div>')
			.addClass('mw-indicator')
			.attr('id', 'mw-indicator-shortURL')
			.append(
				$('<a>')
					.attr({
						href: '#',
						'aria-label': getMessage('Short URL'),
					})
					.append($('<span>').addClass('gadget-short-link__icon').text(getMessage('Short URL')))
			);
		$headerElement.prependTo('.mw-indicators');
		headerElement = $headerElement.find('a').get(0) as HTMLAnchorElement;
		tippy(headerElement, {
			arrow: true,
			content: getMessage('Short URL'),
			placement: 'bottom',
		});
	}

	const shorturl: string = `https://qwbk.cc${link}`;
	const $notifyElement = $('<span>')
		.text(getMessage('Short URL copied to clipboard'))
		.append(
			$('<br>'),
			$('<a>')
				.attr('href', '#')
				.text(shorturl)
				.on('click', (event: JQuery.ClickEvent): void => {
					event.preventDefault();
					event.stopPropagation();
				})
		);
	headerElement.onclick = (event: MouseEvent): void => {
		event.preventDefault();
		void mw.notify($notifyElement, {tag: 'shortURL', type: 'info'});
	};
	clipboardInstance?.destroy();
	clipboardInstance = new Clipboard(headerElement, {
		text: (): string => {
			return shorturl;
		},
	});
};

export const init = async ({
	diffId,
	oldId,
	articleId,
	revisionId,
}: {
	diffId: number | null;
	oldId: number | null;
	articleId: number;
	revisionId: number;
}): Promise<void> => {
	const $body: JQuery<HTMLBodyElement> = $('body');
	if (diffId) {
		const buildLink = (_oldId?: number | null, link = '/d'): void => {
			if (_oldId) {
				link += `/${_oldId}`;
			}
			link += `/${diffId}`;
			doIns(link);
		};

		buildLink(oldId);

		if (oldId) {
			const api: mw.Api = initMwApi('ShortURL/1.1');
			try {
				const params: ApiComparePagesParams = {
					action: 'compare',
					format: 'json',
					formatversion: '2',
					prop: 'ids',
					fromrev: diffId,
					torelative: 'prev',
				};
				const {compare} = await api.get(params);
				if (diffId === mw.config.get('wgDiffNewId') && compare?.fromrevid === mw.config.get('wgDiffOldId')) {
					buildLink();
				}
			} catch {}
		}
	} else if (
		revisionId &&
		($body.find('#contentSub').find('#mw-revision-nav').length ||
			$body.find('main#content>.pre-content #mw-revision-nav').length) > 0
	) {
		doIns(`/p/${revisionId}`);
	} else if (articleId) {
		doIns(`/c/${articleId}`);
	}
};
