import {getViewer, resetAllViewer} from './modules/viewer';
import {initGlobalMethods, portletId} from './modules/initGlobalMethods';
import {checkA11yConfirmKey} from 'ext.gadget.Util';
import {generatePortletLink} from './modules/util/generatePortletLink';
import {windowManager} from './modules/initWindowManager';

let isInit: boolean = false;

mw.hook('wikipage.content').add(($content): void => {
	const $body: JQuery<HTMLBodyElement> = $content.parents('body');

	if (!isInit) {
		isInit = true;
		windowManager.$element.appendTo($body);
	}

	resetAllViewer();

	const globalMethods = initGlobalMethods($body);
	globalMethods.deInit();
	globalMethods.init();

	for (const element of $body.find('.mw-indicator[id^=mw-indicator-noteTA-]')) {
		const hash: string = element.id.replace(/^mw-indicator-noteTA-/, '');

		let $element: JQuery = $(element);
		if (portletId) {
			$element.hide();

			const $portletLink: JQuery | undefined = generatePortletLink(hash);
			if (!$portletLink) {
				continue;
			}

			$element = $portletLink;
		}

		const openerListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
			if (!checkA11yConfirmKey(event)) {
				return;
			}

			event.preventDefault();
			getViewer($body, hash).open();
		};
		$element.on('click', openerListener);
		$element.on('keydown', openerListener);
	}
});
