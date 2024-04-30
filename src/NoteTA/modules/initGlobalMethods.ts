import {PORTLET_CLASS, WG_SKIN} from './constant';

let portletId: string | undefined;

const initGlobalMethods = ($body: JQuery<HTMLBodyElement>): typeof globalMethods => {
	const globalMethods: {
		init(): void;
		deInit(): void;
	} = {
		init() {
			/* fake */
		},
		deInit() {
			/* fake */
		},
	};

	if (WG_SKIN === 'vector') {
		portletId = 'p-noteTA';

		let $noteTATab: JQuery | undefined;
		globalMethods.init = (): void => {
			if ($noteTATab || !portletId) {
				return;
			}
			const noteTATab: HTMLElement | null = mw.util.addPortlet(portletId);
			if (!noteTATab) {
				return;
			}
			$noteTATab = $(noteTATab);
			// eslint-disable-next-line mediawiki/class-doc
			$noteTATab
				.removeClass(`mw-portlet-${portletId}`)
				.addClass([`mw-portlet-${portletId.replace('p-', '')}`, 'vector-menu-tabs', 'vector-menu-tabs-legacy']);
			$body.find('#p-variants').after($noteTATab);
		};
		globalMethods.deInit = (): void => {
			if (!$noteTATab) {
				return;
			}
			$noteTATab.find('ul').empty();
			if (portletId) {
				mw.util.hidePortlet(portletId);
			}
		};
	} else if (WG_SKIN === 'vector-2022') {
		portletId = 'p-associated-pages';

		globalMethods.deInit = (): void => {
			$body.find(PORTLET_CLASS).remove();
		};
	}

	return globalMethods;
};

export {portletId, initGlobalMethods};
