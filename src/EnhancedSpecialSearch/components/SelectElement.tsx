import React from 'ext.gadget.React';
import {getOptionData} from '../modules/getOptionData';

const SelectElement = () => (
	<select
		title="Enhanced Special Search"
		className="oo-ui-dropdownWidget-handle"
		id="enhancedSpecialSearch"
		style={{
			width: 'auto',
		}}
	>
		{getOptionData().reduce((accumulator, {site, url, origin}) => {
			const optionElement: HTMLOptionElement = new Option(site, url, origin);

			if (origin) {
				optionElement.dataset['origin'] = '1';
			}

			accumulator[accumulator.length] = optionElement;

			return accumulator;
		}, [] as HTMLOptionElement[])}
	</select>
);

export {SelectElement};
