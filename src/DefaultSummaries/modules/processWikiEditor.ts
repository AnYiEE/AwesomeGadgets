import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processWikiEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// Guard against double inclusions
	if (mw.config.get('wgDefaultSummariesInstalled')) {
		return;
	}

	// Set guard
	mw.config.set('wgDefaultSummariesInstalled', true);

	const $editCheckboxes: JQuery = $body.find('.editCheckboxes');
	if (!$editCheckboxes.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown($body.find('input[name=wpSummary]'));

	$dropdowns.css({
		'padding-bottom': '1em',
		width: '48%',
	});
	$editCheckboxes.before($dropdowns);
};

export {processWikiEditor};
