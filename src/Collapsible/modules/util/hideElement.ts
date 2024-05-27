// 隐藏某个可折叠的元素。
const hideElement = ($collapsible: JQuery, time: number): void => {
	const useSlide: boolean = $collapsible.hasClass('collapsible-using-slide');
	if ($collapsible.hasClass('collapsible-next')) {
		const $element: JQuery = $collapsible.next();

		if (useSlide) {
			$element.slideUp(time);
		} else {
			$element.fadeOut(time);
		}
	} else {
		const $elements: JQuery = $collapsible.is('table')
			? $collapsible.children().children('tr')
			: ($collapsible.contents() as JQuery);

		for (const element of $elements) {
			const $element: JQuery = $(element);
			if ($element.hasClass('collapsible-cascade')) {
				hideElement($element, time);
			} else if (!$element.hasClass('collapsible-always-show')) {
				if (useSlide) {
					$element.slideUp(time);
				} else {
					$element.fadeOut(time);
				}
			}
		}
	}
};

export {hideElement};
