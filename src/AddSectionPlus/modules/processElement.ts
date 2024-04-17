const processElement = ($element: JQuery, skin: string): void => {
	const title: string = ($element.attr('aria-label') || $element.attr('title') || $element.text()).trim();
	if (!title) {
		return;
	}

	switch (skin) {
		case 'gongbi':
			$element
				.attr({
					title,
				})
				.html('&#8203');
			break;
		default:
			$element
				.attr({
					title,
				})
				.text('[+]');
	}
};

export {processElement};
