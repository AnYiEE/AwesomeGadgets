import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {purge} from './modules/purge';

void getBody().then(function purgePageCache($body: JQuery<HTMLBodyElement>): void {
	const {wgAction, wgPageName, wgNamespaceNumber} = mw.config.get();

	if (wgAction !== 'view' || wgNamespaceNumber < 0) {
		return;
	}

	const portletElement: HTMLLIElement | null = mw.util.addPortletLink(
		'#',
		getMessage('Purge'),
		'ca-purge',
		getMessage('PurgeFromServer')
	);
	if (!portletElement) {
		return;
	}

	(portletElement.querySelector('a') as HTMLAnchorElement).addEventListener('click', (event: MouseEvent): void => {
		event.preventDefault();
		void purge(wgPageName);
	});

	for (const element of $body.find<HTMLAnchorElement>('a[href*="action=purge"]')) {
		const title: string = mw.util.getParamValue('title', element.href) || wgPageName;
		element.addEventListener('click', (event: MouseEvent): void => {
			event.preventDefault();
			void purge(title);
		});
	}
});

export {purge} from './modules/purge';
