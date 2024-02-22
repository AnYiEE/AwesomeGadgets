import {WG_WIKI_ID} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';
import {toastify} from 'ext.gadget.Toastify';

export const purgePageCache = (): void => {
	const purgePageCacheMain = async (event: Event, title: string): Promise<void> => {
		event.preventDefault();
		const toastifyInstance: ToastifyInstance = toastify(
			{
				text: getMessage('Purging'),
				duration: -1,
			},
			'info'
		);
		const api: mw.Api = initMwApi('PurgePageCache/1.1');
		try {
			const params: ApiPurgeParams = {
				action: 'purge',
				format: 'json',
				formatversion: '2',
				titles: title,
				forcelinkupdate: true,
			};
			await api.post(params);
			localStorage.removeItem(`MediaWikiModuleStore:${WG_WIKI_ID}`);
			location.reload();
		} catch (error: unknown) {
			console.error('[PurgePageCache] Ajax error:', error);
			toastifyInstance.hideToast();
			toastify(
				{
					text: getMessage('Failed'),
					close: true,
					duration: -1,
				},
				'error'
			);
		}
	};
	/*
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const portletElement: HTMLLIElement | null = mw.util.addPortletLink(
		portletId,
		'#',
		getMessage('Purge'),
		'ca-purge',
		getMessage('PurgeFromServer')
	);
	portletElement?.querySelector('a')?.addEventListener('click', (event: MouseEvent): void => {
		void purgePageCacheMain(event, mw.config.get('wgPageName'));
	});
**/
	Array.prototype.forEach.call(
		document.querySelectorAll('a[href*="action=purge"]'),
		(element: HTMLAnchorElement): void => {
			const title: string = mw.util.getParamValue('title', element.href) ?? mw.config.get('wgPageName');
			element.addEventListener('click', (event: MouseEvent): void => {
				void purgePageCacheMain(event, title);
			});
		}
	);
};
