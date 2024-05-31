const setMwNotifyStyle = (): HTMLStyleElement => {
	const style: HTMLStyleElement = mw.loader.addStyleTag(
		'.mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{-webkit-transform:translateX(-999px);-moz-transform:translateX(-999px);transform:translateX(-999px)}.mw-notification-visible{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}'
	);

	style.disabled = true;

	return style;
};

export {setMwNotifyStyle};
