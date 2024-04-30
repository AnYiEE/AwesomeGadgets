import {logout} from './util/logout';
import {showError} from './util/showError';

const tryLogout = async (toastifyInstance: ToastifyInstance): Promise<void> => {
	try {
		await logout(toastifyInstance);
	} catch (error: unknown) {
		showError(error, toastifyInstance);
	}
};

export {tryLogout};
