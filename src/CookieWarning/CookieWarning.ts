import {LAST_STORAGE_VALUE, STORAGE_KEY, URL_CONSENT_READ, WG_USER_NAME} from './modules/constant';
import {RootElement} from './components/RootElement';

(function cookieWarning(): void {
	if (WG_USER_NAME || LAST_STORAGE_VALUE === '1' || URL_CONSENT_READ) {
		return;
	}

	const closeWarning = (): void => {
		broadcastChannel.postMessage('close');
		broadcastChannel.close();
		rootElement.remove();
		mw.storage.set(STORAGE_KEY, '1', 60 * 60 * 1000 * 24 * 30);
	};

	const broadcastChannel: BroadcastChannel = new BroadcastChannel(STORAGE_KEY);
	broadcastChannel.addEventListener('message', closeWarning);

	const rootElement = RootElement(closeWarning);

	document.body.append(rootElement);
})();
