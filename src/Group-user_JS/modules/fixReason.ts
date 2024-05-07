const fixReason = ($body: JQuery<HTMLBodyElement>): void => {
	const {wgAction} = mw.config.get();

	if (wgAction === 'delete') {
		const $wpReason: JQuery = $body.find('input[name=wpReason]');
		if (!$wpReason.length) {
			return;
		}

		const autoReasonRegExp: RegExp = /(内容|page was empty|content before blanking was)/i;
		if (autoReasonRegExp.test(String($wpReason.val()))) {
			$wpReason.val('');
		}
	}
};

export {fixReason};
