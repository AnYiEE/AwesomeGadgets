import {doClick} from './modules/doClick';
import {getMessage} from './modules/i18n';

const addPortletLink = (): void => {
	// Create portlet link
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', getMessage('Online'), 't-onlineadmin');
	if (!element) {
		return;
	}

	// Bind click listener
	$(element)
		.find('a')
		.on('click', (event) => {
			void doClick(event);
		});
};

$(addPortletLink);
