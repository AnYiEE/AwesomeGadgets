import * as OPTIONS from '../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import type {UserRights} from '~/MarkRights/modules/types';
import {WG_SKIN} from './constant';

const elementWrap = (spanClass: UserRights, innerElement: ReactElement) => {
	const className = ['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`];

	if (WG_SKIN === 'citizen') {
		return <section className={className}>{innerElement}</section>;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li className={className}>{innerElement}</li>;
	}
	return <div className={className}>{innerElement}</div>;
};

const appendIcon = (indicatorText: string | undefined, spanClass: UserRights | 'unknown'): void => {
	if (spanClass === 'unknown' || !indicatorText) {
		return;
	}
	const indicator = (
		<>
			<span
				className={['gadget-markrights_userpage__icon', `gadget-markrights_userpage__icon__${spanClass}`]}
				title={indicatorText}
			/>
			<span className="gadget-markrights_userpage__text">{indicatorText}</span>
		</>
	);
	const tag = elementWrap(spanClass, indicator);
	(document.querySelectorAll(OPTIONS.mountPointSelector)[0] as HTMLElement)?.prepend(tag);
};

export {appendIcon};
