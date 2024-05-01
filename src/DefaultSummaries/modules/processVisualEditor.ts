/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import * as OPTIONS from '~/DefaultSummaries/options.json';
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processVisualEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	// Set guard
	mw.config.set(OPTIONS.configKey, true);

	// @ts-expect-error TS2304
	const {target} = ve.init;
	// @ts-expect-error TS2339
	const {$saveOptions} = target.saveDialog as JQuery;
	if (!$saveOptions.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input as JQuery);

	if ($body.find(`#${OPTIONS.dropdownId}`).length) {
		mw.config.set(OPTIONS.configKey, true);
	} else {
		$saveOptions.before($dropdowns);
	}
};

export {processVisualEditor};
