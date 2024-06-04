import * as OPTIONS from '~/AjaxLogin/options.json';
import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_PAGE_NAME, WG_SKIN} from './constant';
import {generateMessageDialogProperty} from './util/generateMessageDialogProperty';
import {getMessage} from './i18n';
import {initWindowManager} from './initWindowManager';

const isCitizen: boolean = WG_SKIN === 'citizen';
const loginURL: string = mw.util.getUrl('Special:UserLogin', {
	returnto: WG_PAGE_NAME,
});
const registerURL: string = mw.util.getUrl('Special:CreateAccount', {
	returnto: WG_PAGE_NAME,
});

let messageDialog: OO.ui.MessageDialog;

const initDialog = ($body: JQuery<HTMLBodyElement>): void => {
	const windowManager: OO.ui.WindowManager = initWindowManager();
	windowManager.$element.appendTo($body);

	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = generateMessageDialogProperty();

	const openDialog = (): void => {
		if (messageDialog) {
			if (messageDialog.isOpened()) {
				messageDialog.close();
			} else {
				messageDialog.open(messageDialogProperty);
			}
			return;
		}

		messageDialog = new OO.ui.MessageDialog();
		messageDialog.getActionProcess = (action: string): OO.ui.Process => {
			if (action === 'login') {
				const $element: JQuery<HTMLAnchorElement> = $(OPTIONS.loginElementSelector);
				if ($element.length) {
					$element.trigger('click');
				} else {
					location.href = loginURL;
				}
			} else if (action === 'register') {
				location.href = registerURL;
			}
			return new OO.ui.Process((): void => {
				void windowManager.closeWindow(messageDialog);
			});
		};

		windowManager.addWindows([messageDialog]);
		void windowManager.openWindow(messageDialog, messageDialogProperty);
	};

	const $caViewsource: JQuery = $body.find('#ca-viewsource');
	if ($caViewsource.length) {
		const editIcon: string = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : '';
		$caViewsource
			.attr('id', 'ca-edit')
			.find('a')
			.attr('aria-label', getMessage('DialogMessage'))
			.html(editIcon + getMessage('Edit'))
			.on('click', (event: JQuery.ClickEvent): void => {
				event.preventDefault();
				openDialog();
			});
	}

	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		openDialog();
	}
};

export {initDialog};
