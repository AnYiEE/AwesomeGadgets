import {IS_LOG, RRD_PAGE} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const ReportButton = ({onClick}: Props) => (
	<button
		className={['historysubmit', `mw-${IS_LOG ? 'log' : 'history'}-rrd`, 'mw-ui-button', 'cdx-button']}
		name={'reportRRD'}
		type={'button'}
		title={getMessage('reportButtonTitle') + RRD_PAGE}
		onClick={onClick}
	>
		{IS_LOG ? getMessage('reportButtonLogText') : getMessage('reportButtonText')}
	</button>
);

export default ReportButton;
