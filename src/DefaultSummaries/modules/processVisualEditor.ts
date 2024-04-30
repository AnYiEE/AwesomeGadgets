/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processVisualEditor = (): void => {
	// Guard against double inclusions
	if (mw.config.get('wgDefaultSummariesInstalled')) {
		return;
	}

	// Set guard
	mw.config.set('wgDefaultSummariesInstalled', true);

	// @ts-expect-error TS2304
	const {target} = ve.init;
	// @ts-expect-error TS2339
	const {$saveOptions} = target.saveDialog as JQuery;
	if (!$saveOptions.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input as JQuery);

	$saveOptions.before($dropdowns);
};

export {processVisualEditor};
