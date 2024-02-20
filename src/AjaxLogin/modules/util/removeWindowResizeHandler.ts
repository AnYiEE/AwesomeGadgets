import {windowManager} from '../initWindowManager';

const removeWindowResizeHandler = (): void => {
	$(window).off({
		'orientationchange resize': (windowManager as unknown as {onWindowResizeHandler: () => void})
			.onWindowResizeHandler,
	});
};

export {removeWindowResizeHandler};
