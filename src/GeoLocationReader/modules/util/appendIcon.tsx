import * as OPTIONS from '../../options.json';
import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT, WG_SKIN} from '../constant';
import React, {ReactElement} from 'ext.gadget.React';
import {getMessage} from '../i18n';

const elementWrap = (spanClass: 'green' | 'orange', innerElement: ReactElement) => {
	const className = [CLASS_NAME, `${CLASS_NAME}-${spanClass}`];

	if (WG_SKIN === 'citizen') {
		return <section className={className}>{innerElement}</section>;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li className={className}>{innerElement}</li>;
	}
	return <div className={className}>{innerElement}</div>;
};

const indicator = (icon: 'globe' | 'helpNotice', indicatorText: string) => {
	const ipLocationDesc: string = getMessage('Location') + getMessage(':');
	const text: string = icon === 'globe' ? ipLocationDesc + indicatorText : indicatorText ?? '';

	return (
		<>
			<span className={[CLASS_NAME_ICON, `${CLASS_NAME_ICON}-${icon}`]} aria-label={text}></span>
			<span className={CLASS_NAME_TEXT}>{text}</span>
		</>
	);
};

const appendIcon = ({
	icon,
	indicatorText,
	spanClass,
}: {
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
	spanClass: 'green' | 'orange';
}): void => {
	if (!spanClass || !icon) {
		return;
	}
	const tag = elementWrap(spanClass, indicator(icon, indicatorText));
	(document.querySelectorAll(OPTIONS.mountPointSelector)[0] as HTMLElement)?.prepend(tag);
};

export {appendIcon};
