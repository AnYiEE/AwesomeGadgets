import * as OPTIONS from '../options.json';
import {WG_SKIN} from './constant';
import {getMessage} from './i18n';
import {oouiConfirmWithStyle} from 'ext.gadget.Util';
import {refreshEventListener} from './util/refreshEventListener';
import {toastify} from 'ext.gadget.Toastify';
import {tryLogout} from './tryLogout';

const clickListener = async (event: JQuery.ClickEvent): Promise<void> => {
	event.preventDefault();

	const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
	if (!isConfirm) {
		return;
	}

	const toastifyInstance: ToastifyInstance = toastify(
		{
			text: mw.msg('logging-out-notify'),
			duration: -1,
		},
		'info'
	);
	void tryLogout(toastifyInstance);
};

const addListener = ($element: JQuery): void => {
	refreshEventListener($element, (event: JQuery.ClickEvent): void => {
		void clickListener(event);
	});

	if (WG_SKIN !== 'vector-2022') {
		return;
	}

	const $body: JQuery<HTMLBodyElement> = $element.parents('body');

	const observerCallback = (_mutations: MutationRecord[], observer: MutationObserver): void => {
		if (!$body.hasClass('vector-sticky-header-visible')) {
			return;
		}

		const SELECTOR: string = OPTIONS.logoutElementSelectorOfVector2022StickyHeader;
		const element: HTMLAnchorElement | null = document.querySelector(SELECTOR);
		if (!element) {
			return;
		}

		const elementClone: Node = element.cloneNode(true);
		element.replaceWith(elementClone);

		refreshEventListener($body.find(SELECTOR), (event: JQuery.ClickEvent): void => {
			void clickListener(event);
		});
		observer.disconnect();
	};
	const mutationObserver: MutationObserver = new MutationObserver(observerCallback);
	mutationObserver.observe($body.get(0) ?? document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
	});
};

export {addListener};
