const clearUndoSummary = ($editForm: JQuery<HTMLElement>): void => {
	const $wpAutoSummary: JQuery<HTMLInputElement> = $editForm.find<HTMLInputElement>('input[name="wpAutoSummary"]');
	if (!$wpAutoSummary.length) {
		return;
	}

	if (mw.util.getParamValue('undo')) {
		$wpAutoSummary.val('');
	}
};

export {clearUndoSummary};
