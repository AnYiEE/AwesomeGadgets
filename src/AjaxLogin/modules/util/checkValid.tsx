import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {oouiConfirm} from './oouiConfirm';
import {toastify} from 'ext.gadget.Toastify';
import {windowManager} from '../initWindowManager';

const checkValid = async (
	[agreeTosCheckbox, nameInput, pwdInput]: [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget],
	toastifyInstance: ToastifyInstance
): Promise<{
	isAgreeTos: boolean;
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
}> => {
	let isAgreeTos: boolean = agreeTosCheckbox.isSelected();
	const isFill: boolean = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes('');

	toastifyInstance.hideToast();
	await windowManager.clearWindows();

	if (!isAgreeTos) {
		isAgreeTos = await oouiConfirm({
			message: $(<span innerHTML={getMessage('DoubleCheckAgreedOrNot')} />) as JQuery,
			actions: [
				{
					label: $(<b>{getMessage('Cancel')}</b>),
					action: 'cancel',
					flags: ['safe', 'close'],
				},
				{
					label: $(<b>{getMessage('I agree')}</b>),
					action: 'accept',
					flags: ['primary', 'progressive'],
				},
			],
		});

		if (!isAgreeTos) {
			toastifyInstance = toastify(
				{
					text: getMessage('AgreedOrNot'),
					duration: -1,
				},
				'info'
			);
		}
	} else if (!isFill) {
		toastifyInstance = toastify(
			{
				text: getMessage('EmptyUsernameOrPassword'),
				duration: -1,
			},
			'info'
		);
	}

	const isValid: boolean = isAgreeTos && isFill;

	return {
		isAgreeTos,
		isValid,
		toastifyInstance,
	};
};

export {checkValid};
