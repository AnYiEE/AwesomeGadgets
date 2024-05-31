import {Clipboard} from 'ext.gadget.Clipboard';
import React from 'ext.gadget.React';
import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {getDomains} from './util/getDomains';
import {getMessage} from './i18n';
import {tippy} from 'ext.gadget.Tippy';

const {skin} = mw.config.get();
const domains = getDomains();

let clipboardInstance: ClipboardJS | undefined;
let headerLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};
let portletLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const addLink = (link: string): void => {
	let portletLink: HTMLLIElement | null = document.querySelector('#t-shortlink');
	if (!portletLink) {
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		portletLink = mw.util.addPortletLink(
			portletId,
			'#',
			getMessage('Short URL'),
			't-shortlink',
			getMessage('Show short URL')
		);
	}

	if (portletLink) {
		const portletLinkClickListener = (event: MouseEvent): void => {
			event.preventDefault();

			const $element: JQuery = $('<div>');

			for (const domain of domains) {
				$element.append(
					// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
					new (mw as any).widgets.CopyTextLayout({
						align: 'top',
						copyText: `https://${domain}${link}`,
					}).$element as JQuery
				);
			}

			void OO.ui.alert($element, {
				size: 'medium',
				title: getMessage('Short URL copied to clipboard'),
			});
		};

		portletLinkEventListener.remove();
		portletLinkEventListener = addEventListenerWithRemover({
			target: (portletLink.firstElementChild ?? portletLink) as HTMLElement,
			type: 'click',
			listener: portletLinkClickListener,
		});

		const isCitizen: boolean = skin === 'citizen';
		if (isCitizen && !$(portletLink).find('.mw-ui-icon-wikimedia-shortlink').length) {
			$(portletLink)
				.find('a')
				.prepend(<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink" />);
		}
	}

	let headerLink: HTMLAnchorElement | null = document.querySelector('#mw-indicator-shortURL a');
	if (!headerLink) {
		headerLink = (
			<a aria-label={getMessage('Short URL')} href="#">
				<span className="gadget-short-link__icon">{getMessage('Short URL')}</span>
			</a>
		) as HTMLAnchorElement;

		tippy(headerLink, {
			arrow: true,
			content: getMessage('Short URL'),
			placement: 'bottom',
		});

		const $headerElement = $(
			<div className="mw-indicator" id="mw-indicator-shortURL">
				{headerLink}
			</div>
		) as JQuery;

		$headerElement.prependTo('.mw-indicators');
	}

	const fullLink: string = `https://${domains[0]}${link}`;

	const $notifyElement = $(
		<span>
			{getMessage('Short URL copied to clipboard')}
			<br />
			<a
				href="#"
				onClick={(event): void => {
					event.preventDefault();
					event.stopPropagation();
				}}
			>
				{fullLink}
			</a>
		</span>
	) as JQuery;

	const headerLinkClickListener = (event: MouseEvent): void => {
		event.preventDefault();

		void mw.notify($notifyElement, {
			tag: 'shortURL',
			type: 'info',
		});
	};

	headerLinkEventListener.remove();
	headerLinkEventListener = addEventListenerWithRemover({
		target: headerLink,
		type: 'click',
		listener: headerLinkClickListener,
	});

	clipboardInstance?.destroy();
	clipboardInstance = new Clipboard(headerLink, {
		text: (): string => fullLink,
	});
};

export {addLink};
