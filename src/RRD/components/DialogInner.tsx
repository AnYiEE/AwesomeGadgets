import {IS_LOG} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const DialogInner = () => (
	<div id="rrd__config">
		<>{getMessage('hideItems')}</>
		<br />
		<div className={'rrd__content-wrapper'}>
			<input name="content" id="rrd__hide-content" type="checkbox" value="content" checked />
			<label htmlFor="rrd__hide-content" id="rrd-content">
				{IS_LOG ? getMessage('hideLog') : getMessage('hideContent')}
			</label>
		</div>
		<div className={'rrd__content-wrapper'}>
			<input name="username" id="rrd__hide-username" type="checkbox" value="username" />
			<label htmlFor="rrd__hide-username" id="rrd-username">
				{getMessage('hideUsername')}
			</label>
		</div>
		<div className={'rrd__content-wrapper'}>
			<input name="summary" id="rrd__hide-summary" type="checkbox" value="summary" />
			<label htmlFor="rrd__hide-summary" id="rrd-summary">
				{getMessage('hideSummary')}
			</label>
		</div>
		<br />
		<br />
		<>{getMessage('hideReason')}</>
		<br />
		<select name="rrd__reason" id="rrd__reason">
			<option value={getMessage('hideReasonRD1')}>{getMessage('hideReasonRD1')}</option>
			<option value={getMessage('hideReasonRD2')}>{getMessage('hideReasonRD2')}</option>
			<option value={getMessage('hideReasonRD3')}>{getMessage('hideReasonRD3')}</option>
			<option value={getMessage('hideReasonRD4')}>{getMessage('hideReasonRD4')}</option>
			<option value={getMessage('hideReasonRD5')}>{getMessage('hideReasonRD5')}</option>
			<option value="">{getMessage('hideReasonOther')}</option>
		</select>
		<br />
		<br />
		<>{getMessage('otherReasons')}</>
		<br />
		<textarea name="otherReasons" id="rrd__other-reasons" rows={4}></textarea>
	</div>
);

export default DialogInner;
