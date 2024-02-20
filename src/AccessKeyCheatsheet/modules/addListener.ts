let messageDialog: OO.ui.MessageDialog;

const addListener = (
	$element: JQuery,
	windowManager: OO.ui.WindowManager,
	messageDialogProperty: OO.ui.WindowManager.WindowOpeningData
): void => {
	$element.on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();

		if (messageDialog) {
			if (messageDialog.isOpened()) {
				messageDialog.close();
			} else {
				messageDialog.open(messageDialogProperty);
			}
			return;
		}

		messageDialog = new OO.ui.MessageDialog();
		windowManager.addWindows([messageDialog]);
		void windowManager.openWindow(messageDialog, messageDialogProperty);
	});
};

export {addListener};
