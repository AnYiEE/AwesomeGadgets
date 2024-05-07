import {getCJKCountByTextLength, getCountByTextLength, getUTF8CountByTextLength} from '../modules/getCount';
import React from 'ext.gadget.React';
import {tip} from './WordCount.module.less';

interface Props {
	text: string;
}

const WordCount = ({text}: Props) => (
	<div className={[tip, 'noprint', 'ui-state-highlight', 'ui-corner-all']}>
		{getCountByTextLength(text)}
		{getCJKCountByTextLength(text)}
		<br />
		{getUTF8CountByTextLength(text)}
	</div>
);

export default WordCount;
