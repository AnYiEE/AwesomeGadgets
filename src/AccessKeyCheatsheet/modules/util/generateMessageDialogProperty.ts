import {getMessage} from '../i18n';

const generateMessageDialogProperty = ($element: JQuery): OO.ui.WindowManager.WindowOpeningData => {
	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = {
		title: getMessage('Title'),
		message: $element,
		actions: [
			{
				action: 'close',
				flags: ['safe', 'close'],
				label: getMessage('Close'),
			},
		],
		size: 'medium',
	};

	return messageDialogProperty;
};

export {generateMessageDialogProperty};
