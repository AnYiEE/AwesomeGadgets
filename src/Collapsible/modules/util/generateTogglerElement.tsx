import {CLASS_NAME_TOGGLER} from '../constant';
import React from 'ext.gadget.React';

const generateTogglerElement = ($collapsible: JQuery, hideText: string, showText: string): JQuery => {
	const $toggler = $(
		<span className={[CLASS_NAME_TOGGLER, 'noprint']}>
			{'['}
			<a role="button" tabIndex={0}>
				{$collapsible.hasClass('collapsed') ? showText : hideText}
			</a>
			{']'}
		</span>
	) as JQuery;

	return $toggler;
};

export {generateTogglerElement};
