import * as OPTIONS from '../../options.json';
import {ARTICLE_SUMMARIES, COMMON_SUMMARIES, COMMON_SUMMARIES_LABEL, TALKPAGE_SUMMARIES} from '../messages';

const generateMenuOptionWidget = (label: string): OO.ui.MenuOptionWidget => {
	return new OO.ui.MenuOptionWidget({
		label,
	});
};

const addOptionsToDropdown = (dropdownWidget: OO.ui.DropdownWidget, summaries: string[]): void => {
	const menuOptionWidgets: OO.ui.MenuOptionWidget[] = [];

	for (const summary of summaries) {
		menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary); // Replace `menuOptionWidgets.push()` to avoid polyfilling core-js
	}

	dropdownWidget.getMenu().addItems(menuOptionWidgets);
};

const onSelectCallback = (optionWidget: OO.ui.OptionWidget, $wpSummary: JQuery): void => {
	const originSummary: string = ($wpSummary.val() as string | undefined) ?? '';
	const customSummary: string = optionWidget.getLabel() as string;

	$wpSummary.val(originSummary.trim() ? `${originSummary} ${customSummary}` : customSummary).trigger('change');
};

const generateSummaryDropdown = ($wpSummary: JQuery): JQuery => {
	const {wgNamespaceNumber} = mw.config.get();

	const dropdownWidget: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		label: COMMON_SUMMARIES_LABEL,
	});

	dropdownWidget.setElementId(`${OPTIONS.dropdownId}`);

	dropdownWidget.getMenu().on('select', (optionWidget: OO.ui.OptionWidget | OO.ui.OptionWidget[] | null): void => {
		onSelectCallback(optionWidget as OO.ui.OptionWidget, $wpSummary);
	});

	addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
	if (wgNamespaceNumber === 0) {
		addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
	} else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
		addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
	} else if (wgNamespaceNumber === 118) {
		addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
	}

	return dropdownWidget.$element;
};

export {generateSummaryDropdown};
