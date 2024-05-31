import * as OPTIONS from './options.json';
import {RootElement} from './components/RootElement';

(function cookieWarning(): void {
	const {wgUserName} = mw.config.get();
	const lastStorageValue: string | null = mw.storage.get(OPTIONS.storageKey) as string | null;
	const urlConsentRead: string | null = mw.util.getParamValue(OPTIONS.readingPIPPKey);

	if (wgUserName || lastStorageValue === '1' || urlConsentRead) {
		return;
	}

	const closeWarning = (): void => {
		broadcastChannel.postMessage('close');
		broadcastChannel.close();
		rootElement.remove();
		mw.storage.set(OPTIONS.storageKey, '1', 60 * 60 * 1000 * 24 * 30);
	};

	const broadcastChannel: BroadcastChannel = new BroadcastChannel(OPTIONS.storageKey);
	broadcastChannel.addEventListener('message', closeWarning);

	const rootElement = RootElement({agreeButtonOnClick: closeWarning});

	document.body.append(rootElement);
})();
