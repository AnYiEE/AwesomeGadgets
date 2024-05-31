export const stickyTableHeaders = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');
	$body.find('.wikitable:not(.sortable)').each((_index: number, table: HTMLElement): void => {
		const $table: JQuery<HTMLTableElement> = $(table) as JQuery<HTMLTableElement>;
		const $thead: JQuery<HTMLTableSectionElement> = $table.find('thead');
		const $trTh: JQuery<HTMLTableRowElement> = $table
			.find('tbody>tr>th')
			.parent()
			.eq(0) as JQuery<HTMLTableRowElement>;
		const $trTd: JQuery<HTMLTableRowElement> = $table.find('tbody>tr>td').parent() as JQuery<HTMLTableRowElement>;
		const $target: JQuery<HTMLTableSectionElement> | JQuery<HTMLTableRowElement> | null = $thead.length
			? $thead
			: $trTh.length
				? $trTh
				: null;
		if ($target && $trTd.length >= 5) {
			$table.addClass('mw-sticky-header');
			$target.addClass('thead');
		}
	});
};
