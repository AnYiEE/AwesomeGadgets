import AgreeButton from './AgreeButton';
import ConsentNotice from './ConsentNotice';
import React from 'ext.gadget.React';
import {warning} from './CookieWarning.module.less';

const RootElement = (agreeButtonOnClick: () => void) => (
	<div className={[warning, 'noprint']}>
		<ConsentNotice />
		<AgreeButton onClick={agreeButtonOnClick} />
	</div>
);

export {RootElement};
