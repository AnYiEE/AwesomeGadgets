/* eslint-disable mediawiki/class-doc */
import * as OPTIONS from './options.json';
import {CLASS_NAME_LONG, CLASS_NAME_SHORT, CLASS_NAME_SWITCH} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

void getBody().then(function hideLongSummaries($body: JQuery<HTMLBodyElement>): void {
	const $switches: JQuery[] = [];

	for (const element of $body.find('.comment')) {
		if (!element.textContent || element.textContent.length <= OPTIONS.maxLength || !element.parentElement) {
			continue;
		}

		$(element).addClass(CLASS_NAME_LONG).hide();

		$switches.push(
			$('<a>')
				.addClass(CLASS_NAME_SWITCH)
				.text(`[${getMessage('Expand')}]`)
				.insertAfter(element)
		);

		$('<span>')
			.addClass(`comment comment--without-parentheses ${CLASS_NAME_SHORT}`)
			.text(
				`${element.textContent.slice(0, Math.max(0, OPTIONS.maxLength + 1))}...${element.textContent.slice(-1)}`
			)
			.insertAfter(element);
	}

	for (const $switch of $switches) {
		$switch.on('click', (event: JQuery.ClickEvent): void => {
			const parentElement = (event.currentTarget as HTMLElement).parentElement as HTMLElement;

			const $parentElement: JQuery = $(parentElement);
			const $long: JQuery = $parentElement.find(`.${CLASS_NAME_LONG}`);
			const $short: JQuery = $parentElement.find(`.${CLASS_NAME_SHORT}`);

			$switch.text($long.is(':visible') ? `[${getMessage('Expand')}]` : `[${getMessage('Collapse')}]`);
			$long.toggle();
			$short.toggle();
		});
	}
});
