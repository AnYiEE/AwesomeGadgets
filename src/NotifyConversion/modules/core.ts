import {GADGET_NAME, SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, wgUserGroups, wgUserName, wgUserVariant} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

const locationHref: string = location.href;
const api: mw.Api = initMwApi('NotifyConversion/2.0');

const isExperiencedUser = (): boolean => {
	if (!wgUserName || !wgUserGroups) {
		return false;
	}
	return (
		['sysop', 'senioreditor', 'steward', 'qiuwen'].some((element: string): boolean => {
			return wgUserGroups.includes(element);
		}) ||
		SYSTEM_SCRIPT_LIST.includes(wgUserName) ||
		WEBMASTER_LIST.includes(wgUserName)
	);
};

const isLanguageSet = (): boolean => {
	if (mw.util.getParamValue('variant') || mw.util.getParamValue('uselang')) {
		return true;
	}
	return false;
};

const isWrongURL = (): boolean => {
	if (locationHref.includes('/zh/') || locationHref.includes('/zh-hans/') || locationHref.includes('/zh-hant/')) {
		return true;
	}
	return false;
};

const showDialog = (): void => {
	const dialogTitleIcon: OO.ui.IconWidget = new OO.ui.IconWidget({
		icon: 'language',
		title: getMessage('dialogTitle'),
	});
	const dialogTitle: OO.ui.LabelWidget = new OO.ui.LabelWidget({
		label: getMessage('dialogTitle'),
	});

	const generateButton = (
		variant: 'zh-cn' | 'zh-hk' | 'zh-tw' | 'zh-sg' | 'zh-my' | 'zh-mo'
	): OO.ui.ButtonOptionWidget => {
		return new OO.ui.ButtonOptionWidget({
			data: variant,
			label: getMessage(`variant-${variant}`),
			title: getMessage(`variant-${variant}`),
		});
	};
	// Create a new ButtonSelectWidget and add the button options to it
	// via the ButtonSelectWidget's 'items' config option.
	const buttonSelect: OO.ui.ButtonSelectWidget = new OO.ui.ButtonSelectWidget({
		items: [
			generateButton('zh-cn'),
			generateButton('zh-hk'),
			generateButton('zh-tw'),
			generateButton('zh-sg'),
			generateButton('zh-my'),
			generateButton('zh-mo'),
		],
	});

	if (preferredVariant === null) {
		buttonSelect.selectItemByData('zh-cn');
	} else {
		buttonSelect.selectItemByData(preferredVariant);
	}

	const $dialogTitle: JQuery = $('<span>')
		.addClass('gadget-notify_conversion__title')
		.append(dialogTitleIcon.$element, dialogTitle.$element);
	const $dialogMessage: JQuery = $('<div>')
		.addClass('gadget-notify_conversion__message')
		.append(
			$('<p>').text(getMessage('dialogDesc')),
			$('<p>').addClass('gadget-notify_conversion__message_extend').text(getMessage('dialogDescExtend1')),
			$('<p>').addClass('gadget-notify_conversion__message_extend').text(getMessage('dialogDescExtend2')),
			buttonSelect.$element.addClass('gadget-notify_conversion__selection'),
			$('<p>').addClass('gadget-notify_conversion__message_privacy-notice').text(getMessage('privacyNotice'))
		);

	const windowManager: OO.ui.WindowManager = new OO.ui.WindowManager();
	windowManager.$element.appendTo($('body'));

	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = {
		title: $dialogTitle,
		message: $dialogMessage,
		actions: [
			{
				action: 'confirm',
				flags: ['primary', 'progressive'],
				label: $('<b>').text(getMessage('confirm')),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $('<b>').text(getMessage('cancel')),
			},
		],
		size: 'medium',
	};

	windowManager.addWindows([messageDialog]);
	void windowManager.openWindow(messageDialog, messageDialogProperty);

	messageDialog.getActionProcess = (action): OO.ui.Process => {
		const clearWindows = (variant?: string) => {
			mw.storage.set(GADGET_NAME, variant || 'hide');
			void windowManager.clearWindows();
		};

		return new OO.ui.Process((): void => {
			if (action === 'confirm') {
				const URL_REGEX: RegExp = /(\/\/[^/]+\/)([^/]+)(\/)/;
				const selectedItem: OO.ui.OptionWidget = buttonSelect.findSelectedItem() as OO.ui.OptionWidget;
				const variant: string = selectedItem.getData() as string;
				clearWindows(variant);
				if (mw.config.get('wgUserName')) {
					void api.saveOption('variant', variant).then((): void => {
						location.href = locationHref.replace(URL_REGEX, '$1wiki$3');
					});
				} else {
					location.href = locationHref.replace(URL_REGEX, `$1${variant}$3`);
				}
			} else {
				void OO.ui.confirm(getMessage('Are you sure?')).then((confirmed: boolean): void => {
					if (confirmed) {
						clearWindows();
					}
				});
			}
		});
	};
};

const preferredVariant: string | null =
	((mw.config.get('wgUserName') ? mw.user.options.get('variant') : mw.config.get('wgUserVariant')) as string) ?? null;

export const notifyConversion = (): void => {
	if (!wgUserVariant) {
		return; // on Special pages
	}
	if (isLanguageSet()) {
		return; // set `uselang` or `variant` get parameters
	}
	if (isExperiencedUser()) {
		return;
	}
	if (preferredVariant === null || ['zh', 'zh-hans', 'zh-hant'].includes(preferredVariant) || isWrongURL()) {
		showDialog();
	}
};
