import {getBody} from 'ext.gadget.Util';
import {purge} from './modules/purge';

void getBody().then(function purgePageCache($body: JQuery<HTMLBodyElement>): void {
	const {wgAction, wgPageName, wgNamespaceNumber} = mw.config.get();

	if (wgAction !== 'view' || wgNamespaceNumber < 0) {
		return;
	}

	for (const element of $body.find<HTMLAnchorElement>('a[href*="action=purge"]')) {
		const title: string = mw.util.getParamValue('title', element.href) || wgPageName;
		element.addEventListener('click', (event: MouseEvent): void => {
			event.preventDefault();
			void purge(title);
		});
	}
});

export {purge} from './modules/purge';
