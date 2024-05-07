import {api} from '../api';
import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const queryLoginToken = async (
	toastifyInstance: ToastifyInstance
): Promise<{
	loginToken: string;
	toastifyInstance: ToastifyInstance;
}> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify({
		text: getMessage('Getting login token'),
	});

	const loginToken: string = await api.getToken('login');

	toastifyInstance.hideToast();
	toastifyInstance = toastify({
		text: getMessage('Login token getted'),
		duration: -1,
	});

	return {
		loginToken,
		toastifyInstance,
	};
};

export {queryLoginToken};
