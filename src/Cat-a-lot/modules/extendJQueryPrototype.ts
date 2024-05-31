/* eslint-disable mediawiki/class-doc */
import {CLASS_NAME_LABEL, CLASS_NAME_LABEL_LAST_SELECTED, CLASS_NAME_LABEL_SELECTED} from './constant';

const extendJQueryPrototype = (): void => {
	/*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
	// @ts-expect-error TS2339
	$.fn.onCatALotShiftClick = function (callback: (...args: unknown[]) => unknown): JQuery {
		let prevCheckbox: JQuery | undefined;

		// When our boxes are clicked..
		this.on('click.catALot', (event: JQuery.TriggeredEvent): void => {
			// Prevent following the link and text selection
			if (!event.ctrlKey) {
				event.preventDefault();
			}

			// Highlight last selected
			this.parents('body').find(`.${CLASS_NAME_LABEL_LAST_SELECTED}`).removeClass(CLASS_NAME_LABEL_LAST_SELECTED);

			let $thisControl = $(event.target) as JQuery;
			if (!$thisControl.hasClass(CLASS_NAME_LABEL)) {
				$thisControl = $thisControl.parents(`.${CLASS_NAME_LABEL}`);
			}

			$thisControl.addClass(CLASS_NAME_LABEL_LAST_SELECTED).toggleClass(CLASS_NAME_LABEL_SELECTED);

			// And one has been clicked before...
			if (prevCheckbox && event.shiftKey) {
				const method: 'addClass' | 'removeClass' = $thisControl.hasClass(CLASS_NAME_LABEL_SELECTED)
					? 'addClass'
					: 'removeClass';
				// Check or uncheck this one and all in-between checkboxes
				this.slice(
					Math.min(this.index(prevCheckbox), this.index($thisControl)),
					Math.max(this.index(prevCheckbox), this.index($thisControl)) + 1
				)[method](CLASS_NAME_LABEL_SELECTED);
			}
			// Either way, update the prevCheckbox variable to the one clicked now
			prevCheckbox = $thisControl;

			if (typeof callback === 'function') {
				callback();
			}
		});

		return this;
	};
};

export {extendJQueryPrototype};
