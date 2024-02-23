import React from 'ext.gadget.React';
import {getMessage} from './i18n';

type TimeSpan = 'ThisWeek' | 'ThisMonth' | 'ThisYear' | 'OverAYear';

function Wrapper(props: {timeSpan: TimeSpan; innerElement: React.ReactElement}) {
	const {timeSpan, innerElement} = props;

	const className: string[] = ['gadget-whoisactive__span', `gadget-whoisactive__${timeSpan}`];
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return <section className={className}>{innerElement}</section>;
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return <li className={className}>{innerElement}</li>;
	}

	return <div className={className}>{innerElement}</div>;
}

function Tag(props: {timeSpan: TimeSpan; indicator: boolean}) {
	const {timeSpan, indicator} = props;

	const iconClassName: string[] = ['gadget-whoisactive__icon', `gadget-whoisactive__icon__${timeSpan}`];
	const textClassName: string[] = [
		'gadget-whoisactive__text',
		indicator === true ? ', gadget-whoisactive__notext' : '',
	];

	return (
		<>
			<span className={iconClassName} title={getMessage(timeSpan)} />
			<span className={textClassName}>{getMessage(timeSpan) ?? ''}</span>
		</>
	);
}

const getLastActiveMarker = (timestamp: string, indicator: boolean): React.ReactElement => {
	const date: number = Date.parse(timestamp);
	const now: number = Date.now();
	const diff: number = Math.floor((now - date) / (1000 * 60 * 60 * 24));

	let timeSpan: TimeSpan = 'ThisWeek';
	if (diff > 365) {
		timeSpan = 'OverAYear';
	} else if (diff > 30) {
		timeSpan = 'ThisYear';
	} else if (diff > 7) {
		timeSpan = 'ThisMonth';
	}

	return <Wrapper timeSpan={timeSpan} innerElement={<Tag timeSpan={timeSpan} indicator={indicator} />} />;
};

export type {TimeSpan};
export {getLastActiveMarker};
