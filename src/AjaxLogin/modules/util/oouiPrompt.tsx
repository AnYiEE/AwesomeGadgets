import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {removeWindowResizeHandler} from './removeWindowResizeHandler';
import {windowManager} from '../initWindowManager';

const oouiPrompt = async (retypePassword: boolean): Promise<string | null> => {
	const codeDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
	const codeInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'key',
		placeholder: retypePassword ? getMessage('New password') : getMessage('6-digit number'),
		validate: 'integer',
	});

	const codeLayout: OO.ui.FieldLayout<OO.ui.TextInputWidget> = new OO.ui.FieldLayout(codeInput, {
		align: 'top',
		label: $(
			<b className={['oo-ui-messageDialog-title', 'oo-ui-window-head']}>
				{retypePassword ? getMessage('Enter password') : getMessage('Enter 2FA verification code')}
			</b>
		),
	});

	windowManager.addWindows([codeDialog]);

	const instance: OO.ui.WindowInstance = windowManager.openWindow(codeDialog, {
		message: codeLayout.$element,
	});

	removeWindowResizeHandler();

	void instance.opened.then((): void => {
		codeInput.on('enter', (): void => {
			(windowManager.getCurrentWindow() as OO.ui.Window).close({
				action: 'accept',
			});
		});
		codeInput.focus();
	});

	const data: void = await instance.closed;
	const _data = data as {action: string} | void;

	return _data?.action === 'accept' ? codeInput.getValue() : null;
};

export {oouiPrompt};
