import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const AgreeButton = ({onClick}: Props) => (
	<button
		className={['cdx-button', 'cdx-button--action-progressive', 'cdx-button--weight-primary']}
		onClick={onClick}
	>
		{getMessage('Agree')}
	</button>
);

export default AgreeButton;
