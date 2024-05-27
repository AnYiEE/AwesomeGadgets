import {getMessage} from '../i18n';

const generateMessageDialogProperty = (): OO.ui.WindowManager.WindowOpeningData => {
	const $title: JQuery = $('<b>').addClass('oo-ui-window-head').text(getMessage('DialogTitle'));
	const $message: JQuery = $('<span>').addClass('oo-ui-window-foot').text(getMessage('DialogMessage'));

	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = {
		title: $title,
		message: $message,
		actions: [
			{
				action: 'login',
				flags: ['primary', 'progressive'],
				label: $('<b>').text(getMessage('Login')),
			},
			{
				action: 'register',
				flags: 'progressive',
				label: $('<b>').text(getMessage('Register')),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $('<b>').text(getMessage('Cancel')),
			},
		],
	};

	return messageDialogProperty;
};

export {generateMessageDialogProperty};
