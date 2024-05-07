import type {Config, State} from './types';
import {ID, WG_SKIN} from './constant';
import {checkA11yConfirmKey, scrollTop} from 'ext.gadget.Util';
import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {generateElements} from './util/generateElements';
import {generateTogglerElement} from './util/generateTogglerElement';
import {getConfig} from './getConfig';
import {getMessage} from './i18n';
import {setMwNotifyStyle} from './setMwNotifyStyle';

const floatTOC = ($originToc: JQuery): void => {
	const originToc: HTMLElement = $originToc.get(0) as HTMLElement;
	const $body: JQuery<HTMLBodyElement> = $originToc.parents('body');

	const {$floatToc, $floatTocOpener} = generateElements(originToc);
	$floatTocOpener.hide().appendTo($body);

	const config: Config = getConfig(ID);
	const mwNotifyStyle: HTMLStyleElement = setMwNotifyStyle();

	let isShow: boolean = false;
	const storeState = (target: keyof Config, state: State): void => {
		config[target] = state;
		mw.storage.setObject(ID, config);
	};

	let disableMwNotifyStyleTimer: ReturnType<typeof setTimeout>;
	const disableMwNotifyStyle = (): void => {
		if (disableMwNotifyStyleTimer) {
			clearTimeout(disableMwNotifyStyleTimer);
		}
		disableMwNotifyStyleTimer = setTimeout((): void => {
			if (!isShow) {
				mwNotifyStyle.disabled = true;
			}
		}, 5 * 1000);
	};

	let notification: ReturnType<typeof mw.notification.notify> | undefined;
	const closeNotification = (currentNotification: NonNullable<typeof notification>): void => {
		currentNotification.close();
		$floatTocOpener.fadeIn();
		storeState('floatTOC', 'close');
		disableMwNotifyStyle();
	};

	const smoothScroll = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (WG_SKIN === 'citizen') {
			return;
		}

		const target = event.target as HTMLElement;
		const $target: JQuery = $(target).parent();
		const href: string | undefined = $target.attr('href');
		if (!href) {
			return;
		}

		const anchorOffset: JQuery.Coordinates | undefined = $(href).offset();
		if (!anchorOffset) {
			return;
		}

		event.preventDefault();
		scrollTop(`${anchorOffset.top}px`);
	};

	const toggleToc = (
		currentIsShow: boolean | 'open' = true,
		preNotification: typeof notification = undefined
	): typeof notification => {
		preNotification?.close();
		isShow = !!currentIsShow;

		switch (currentIsShow) {
			case true:
				if (config.floatTOC === 'close') {
					$floatTocOpener.fadeIn();
					return;
				}
				break;
			case 'open':
				$floatTocOpener.fadeOut();
				storeState('floatTOC', 'open');
				break;
			default:
				$floatTocOpener.fadeOut();
				disableMwNotifyStyle();
				return;
		}

		mwNotifyStyle.disabled = false;

		if (preNotification) {
			preNotification.start();
		} else {
			preNotification = mw.notification.notify($floatToc, {
				classes: 'noprint',
				id: ID,
				autoHide: false,
			});
			const notificationListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
				event.stopPropagation();
				if (!checkA11yConfirmKey(event)) {
					return;
				}
				const target = event.target as HTMLElement;
				if (target.id === 'close') {
					closeNotification(preNotification as NonNullable<typeof preNotification>);
				} else {
					smoothScroll(event);
				}
			};
			preNotification.$notification.on(
				'click',
				filterAlteredClicks((event: JQuery.ClickEvent): void => {
					void notificationListener(event);
				})
			);
			preNotification.$notification.on('keydown', notificationListener);
		}

		return preNotification;
	};

	const observerCallback = (entries: IntersectionObserverEntry[]): void => {
		const [entry] = entries;
		if (!entry) {
			return;
		}
		const {intersectionRatio} = entry;
		notification = toggleToc(intersectionRatio === 0, notification);
	};
	const intersectionObserver: IntersectionObserver = new IntersectionObserver(observerCallback);
	intersectionObserver.observe(originToc);

	const openerListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		event.preventDefault();
		if (!checkA11yConfirmKey(event)) {
			return;
		}
		notification = toggleToc('open');
	};
	$floatTocOpener.on('click', openerListener);
	$floatTocOpener.on('keydown', openerListener);

	const collapseOriginToc = (): void => {
		if (WG_SKIN !== 'citizen') {
			return;
		}

		const isCollapse: boolean = config.originTOC === 'close';

		const $originTocTitle: JQuery = $body.find('#toc .toctitle');
		const $originTocItem: JQuery = $body.find('#toc ul');

		const $toggler: JQuery = generateTogglerElement(isCollapse);
		$originTocTitle.append($toggler);

		const collapseToggle = (): void => {
			const $element: JQuery = $originTocTitle.find('.oo-ui-indicatorElement-indicator');
			$element.toggleClass('collapse');
			if (isCollapse) {
				$element.attr('title', getMessage('Expand'));
			} else {
				$element.attr('title', getMessage('Collapse'));
			}
		};
		$originTocTitle.on('click', (): void => {
			isCollapse ? storeState('originTOC', 'open') : storeState('originTOC', 'close');
			collapseToggle();
			$originTocItem.fadeToggle();
		});

		if (isCollapse) {
			$originTocItem.fadeOut();
		}
	};
	collapseOriginToc();
};

export {floatTOC};
