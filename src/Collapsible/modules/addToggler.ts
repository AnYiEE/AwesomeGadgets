const addToggler = ($collapsible: JQuery, $toggler: JQuery): void => {
	const $appendHere: JQuery = $collapsible
		.find('.collapsible-toggle-append-here')
		.not('.collapsible-toggle-appended');

	if ($collapsible.hasClass('collapsible-next')) {
		// 若有 collapsible-next 类，那么被折叠的元素不在该元素内，此时直接将折叠按钮添加在末尾。
		$collapsible.append($toggler);
	} else if ($appendHere.length) {
		// 带有 collapsible-toggle-append-here 类的元素，若存在，则无论可折叠元素是什么，则强制将折叠按钮添加至该元素中。
		$appendHere.append($toggler);
		$appendHere.addClass('collapsible-toggle-appended');
		$appendHere.parentsUntil($collapsible).addClass('collapsible-always-show');
	} else if ($collapsible.hasClass('navbox')) {
		// navbox 元素的折叠按钮添加至 navbox-title 中，且该 navbox-title 会避免被折叠影响到。
		$collapsible.children('.navbox-title').first().addClass('collapsible-always-show').append($toggler);
	} else if ($collapsible.is('table')) {
		// 对于 table 对象，尝试添加到 caption 中，若 caption 不存在，则添加到第一行的最后一列，并将第一行设为始终显示。
		const $caption: JQuery = $collapsible.children('caption');
		if ($caption.length) {
			// 有caption的情况
			$caption.first().append($toggler);
		} else {
			const $trows: JQuery<HTMLTableRowElement> = $collapsible.children().children('tr');
			$trows.first().addClass('collapsible-always-show').children().last().append($toggler);
		}
	} else {
		// 尝试查找带有 collapsible-always-show 类的子元素，若存在则将折叠按钮添加至其中。
		// 否则，添加至整个可折叠元素的最前面。
		const $toToggle: JQuery = $collapsible.children('.collapsible-always-show');
		if ($toToggle.length) {
			$toToggle.first().append($toggler);
		} else {
			$collapsible.prepend($toggler);
			$toggler.addClass('collapsible-always-show');
		}
	}
};

export {addToggler};
