const clearUndoSummary = ($body: JQuery<HTMLBodyElement>): void => {
	const $wpAutoSummary: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>('input[name="wpAutoSummary"]');
	if (!$wpAutoSummary.length) {
		return;
	}

	if (mw.util.getParamValue('undo')) {
		$wpAutoSummary.val('');
	}
};

export {clearUndoSummary};
