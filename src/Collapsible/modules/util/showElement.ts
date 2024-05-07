// 显示某个可折叠的元素。
const showElement = ($collapsible: JQuery, time: number): void => {
	const useSlide: boolean = $collapsible.hasClass('collapsible-using-slide');
	if ($collapsible.hasClass('collapsible-next')) {
		const $element: JQuery = $collapsible.next();

		if (useSlide) {
			$element.slideDown(time);
		} else {
			$element.fadeIn(time);
		}
	} else {
		const $elements: JQuery = $collapsible.is('table')
			? $collapsible.children().children('tr')
			: ($collapsible.contents() as JQuery);

		for (const element of $elements) {
			const $element: JQuery = $(element);
			if ($element.hasClass('collapsible-cascade')) {
				showElement($element, time);
			} else if (!$element.hasClass('collapsible-always-show')) {
				if (useSlide) {
					$element.slideDown(time);
				} else {
					$element.fadeIn(time);
				}
			}
		}
	}
};

export {showElement};
