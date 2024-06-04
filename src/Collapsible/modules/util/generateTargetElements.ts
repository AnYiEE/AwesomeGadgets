const generateTargetElements = ($content: JQuery): JQuery => {
	for (const element of $content.find(
		'.parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next'
	)) {
		const $parent: JQuery = $(element).parent();
		for (const className of element.classList) {
			if (className.slice(0, 18) === 'parent-collapsible') {
				// The following classes are used here:
				// * collapsible
				// * collapsible-using-slide
				// * collapsible-next
				$parent.addClass(className.replace(/^parent-/, ''));
			}
		}
	}

	$content.find('.collapsible-using-slide, .collapsible-next').addClass('collapsible');

	const $collapsibles: JQuery = $content.find('.collapsible');

	return $collapsibles;
};

export {generateTargetElements};
