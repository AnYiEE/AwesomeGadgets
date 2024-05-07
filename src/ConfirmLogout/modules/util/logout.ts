import {api} from '../api';
import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const logout = async (toastifyInstance: ToastifyInstance): Promise<void> => {
	await api.postWithEditToken({
		action: 'logout',
	});

	toastifyInstance.hideToast();
	toastify(
		{
			text: getMessage('Succeed'),
		},
		'success'
	);

	location.reload();
};

export {logout};
