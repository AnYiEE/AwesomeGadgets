import {api} from '../api';
import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

type CompareResponse = {
	compare?: {
		fromrevid: number;
	};
};

const parameters: ApiComparePagesParams = {
	action: 'compare',
	format: 'json',
	formatversion: '2',
	prop: 'ids',
	torelative: 'prev',
};

const queryApi = async (diffId: number): Promise<CompareResponse> => {
	try {
		return await api.get({
			...parameters,
			fromrev: diffId,
		} as typeof parameters);
	} catch (error: unknown) {
		console.error('[DiffLink] Ajax error:', error);
		toastify(
			{
				text: getMessage('Network error'),
				close: true,
				duration: -1,
			},
			'error'
		);

		return {};
	}
};

export {queryApi};
