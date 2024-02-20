import * as OPTIONS from './options.json';
import {type RemoteNotices} from './modules/util/queryApi';
import {getBody} from 'ext.gadget.Util';
import {loadRemoteNotices} from './modules/loadRemoteNotices';
import {showNotices} from './modules/showNotice';

(async function advancedSiteNotices(): Promise<void> {
	const $body: JQuery<HTMLBodyElement> = await getBody();

	const $mountPoint: JQuery = $body.find(OPTIONS.mountPointSelector);
	if (!$mountPoint.length) {
		return;
	}

	const remoteNotices: RemoteNotices = await loadRemoteNotices();
	if (!remoteNotices.$notices?.length) {
		return;
	}

	const randomIndex: number = Math.floor(Math.random() * remoteNotices.$notices.length);
	showNotices($mountPoint, randomIndex, remoteNotices);
})();
