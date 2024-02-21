import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const AgreeButton = ({onClick}: Props) => (
	<span
		className={['mw-ui-button', 'mw-ui-progressive', 'cdx-button', 'cdx-button--action-progressive']}
		role="button"
		onClick={onClick}
	>
		{getMessage('Agree')}
	</span>
);

export default AgreeButton;
