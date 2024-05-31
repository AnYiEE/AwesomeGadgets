import {ELEMENT_ID, WG_SKIN} from './constant';
import React from 'ext.gadget.React';
import {getMessage} from './i18n';

const elementWrap = () => {
	if (WG_SKIN === 'citizen') {
		return <section className={'page-info__item'} id={ELEMENT_ID} />;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li id={ELEMENT_ID} />;
	}
	return <div id={ELEMENT_ID} />;
};

const notBeenPatrolledYet = () => (
	<span id={'page_patroller__not-patrolled'}>{getMessage('This page has not been patrolled yet')}</span>
);

const loading = () => <span id={'page_patroller__loading'}>{getMessage('Loading...')}</span>;

const patrolled = () => (
	<span id={'page_patroller__patrolled'}>
		{getMessage('This page has been patrolled, or has been marked as auto-patrolled')}
	</span>
);

const patrolledBy = (timestampText: string, user: string) => (
	<span id={'page_patroller__patrolled-by'}>
		{getMessage('This page was patrolled at by').replace('$1', timestampText)}
		<a href={mw.util.getUrl(`User:${user}`)}>{user}</a>
		{getMessage('period')}
	</span>
);

const errorMessage = () => (
	<span id={'page_patroller__error'}>{getMessage('Error occurs when finding patroller')}</span>
);

export {elementWrap, errorMessage, loading, notBeenPatrolledYet, patrolled, patrolledBy};
