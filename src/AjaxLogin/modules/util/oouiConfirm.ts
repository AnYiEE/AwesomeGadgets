import {windowManager} from '../initWindowManager';

const oouiConfirm = async (options: OO.ui.MessageDialog.SetupDataMap) => {
	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
	windowManager.addWindows([messageDialog]);

	const instance: OO.ui.WindowInstance = windowManager.openWindow(messageDialog, options);

	const data: void = await instance.closed;
	const _data = data as {action: string} | void;

	return !!(_data?.action === 'accept');
};

export {oouiConfirm};
