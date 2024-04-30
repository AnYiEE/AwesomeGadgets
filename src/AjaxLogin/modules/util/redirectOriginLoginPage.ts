import {delay} from 'ext.gadget.Util';
import {windowManager} from '../initWindowManager';

const redirectOriginLoginPage = async (): Promise<void> => {
	await windowManager.clearWindows();
	await delay(3 * 1000);
	location.href = mw.util.getUrl('Special:Userlogin');
};

export {redirectOriginLoginPage};
