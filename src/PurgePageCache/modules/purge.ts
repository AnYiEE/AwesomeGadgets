import {api} from './api';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

type Purge = (title: string) => Promise<void>;

const purge: Purge = async (title) => {
	const toastifyInstance: ToastifyInstance = toastify(
		{
			text: getMessage('Purging'),
			duration: -1,
		},
		'info'
	);
	const {wgWikiID} = mw.config.get();

	try {
		const params: ApiPurgeParams = {
			action: 'purge',
			format: 'json',
			formatversion: '2',
			titles: title,
			forcelinkupdate: true,
		};

		await api.post(params);
		localStorage.removeItem(`MediaWikiModuleStore:${wgWikiID}`);

		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Success'),
				close: true,
				duration: -1,
			},
			'success'
		);

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

export {type Purge, purge};
