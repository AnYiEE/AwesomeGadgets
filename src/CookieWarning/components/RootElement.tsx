import AgreeButton from './AgreeButton';
import ConsentNotice from './ConsentNotice';
import React from 'ext.gadget.React';
import {warning} from './CookieWarning.module.less';

interface Props {
	agreeButtonOnClick: () => void;
}

const RootElement = ({agreeButtonOnClick}: Props) => (
	<div className={[warning, 'noprint']}>
		<ConsentNotice />
		<AgreeButton onClick={agreeButtonOnClick} />
	</div>
);

export {RootElement};
