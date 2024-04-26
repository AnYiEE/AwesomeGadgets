import * as OPTIONS from '../options.json';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';
import {getOptionData} from '../modules/getOptionData';

const LabelElement = () => (
	<label
		className="oo-ui-labelElement-label"
		htmlFor="enhancedSpecialSearch"
		innerText={getMessage('Search engine')}
	/>
);

const SelectElement = () => (
	<select
		className="oo-ui-dropdownWidget-handle"
		id="enhancedSpecialSearch"
		name="enhancedSpecialSearch"
		style={{
			width: 'auto',
		}}
		title={getMessage('Search engine')}
	>
		{getOptionData().map<HTMLOptionElement>(({site, url, origin}) => {
			const optionElement: HTMLOptionElement = new Option(site, url, origin);

			if (origin) {
				optionElement.dataset['origin'] = '1';
			}

			return optionElement;
		})}
	</select>
);

const WrapperElement = () => <div style={OPTIONS.flexStyle} />;

export {LabelElement, SelectElement, WrapperElement};
