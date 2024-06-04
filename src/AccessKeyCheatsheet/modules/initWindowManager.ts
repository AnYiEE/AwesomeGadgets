const initWindowManager = (): OO.ui.WindowManager => {
	const windowManager: OO.ui.WindowManager = new OO.ui.WindowManager();

	windowManager.$element.css({
		'margin-bottom': '0',
		width: '35em',
	});

	return windowManager;
};

export {initWindowManager};
