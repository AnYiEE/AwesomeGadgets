const keydownListener = ($searchInput: JQuery<HTMLInputElement>): void => {
	const inputValue: string | undefined = $searchInput.val()?.trim();
	if (!inputValue || !/^\{\{[^{}]+}}$/.test(inputValue)) {
		return;
	}

	if (inputValue.startsWith('{{#')) {
		if (inputValue.startsWith('{{#invoke:')) {
			$searchInput.val(
				inputValue
					.replace('{{#invoke:', 'Module:')
					.replace(/\s*\|.*/, '')
					.replace('}}', '')
			);
		} else {
			$searchInput.val(
				inputValue
					.replace('{{#', 'H:MW#')
					.replace(/\s*\|.*/, '')
					.replace('}}', '')
			);
		}
	} else {
		$searchInput.val(
			inputValue
				.replace('{{', 'Template:')
				.replace(/\s*\|.*/, '')
				.replace('}}', '')
		);
	}
};

export {keydownListener};
