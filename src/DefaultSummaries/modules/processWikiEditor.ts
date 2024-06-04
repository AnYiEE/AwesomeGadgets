import * as OPTIONS from '~/DefaultSummaries/options.json';
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processWikiEditor = ($editForm: JQuery<HTMLElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKey, true);

	const $editCheckboxes: JQuery = $editForm.find('.editCheckboxes');
	if (!$editCheckboxes.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown($editForm.find('input[name=wpSummary]'));

	$dropdowns.css({
		'padding-bottom': '1em',
		width: '48%',
	});

	if (!$editForm.find(`#${OPTIONS.dropdownId}`).length) {
		$editCheckboxes.before($dropdowns);
	}
};

export {processWikiEditor};
