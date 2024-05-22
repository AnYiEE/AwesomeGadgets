import * as OPTIONS from '../options.json';
import {CLASS_NAME_DISMISS, CLASS_NAME_NOTICE_CONTENT} from './constant';
import React from 'ext.gadget.React';
import {type RemoteNotices} from './util/queryApi';
import {generateArea} from './util/generateArea';
import {getMessage} from './i18n';
import {matchCriteria} from './util/matchCriteria';
import {tippy} from 'ext.gadget.Tippy';

const broadcastChannel: BroadcastChannel = new BroadcastChannel(OPTIONS.storageKey);

let currentVersion: string = '0';
const localVersion = mw.storage.get(OPTIONS.storageKey) as string | null;

let timer: ReturnType<typeof setTimeout>;

const $area: JQuery = generateArea();
const $currentNotice: JQuery = $area.find(`.${CLASS_NAME_NOTICE_CONTENT}`);
const $dismiss: JQuery<HTMLAnchorElement> = $area.find(`.${CLASS_NAME_DISMISS}`).find('a');

const closeNotices = (): void => {
	broadcastChannel.postMessage('close');
	broadcastChannel.close();
	clearTimeout(timer);
	$area.remove();
	mw.storage.set(OPTIONS.storageKey, currentVersion, 60 * 60 * 24 * 30 * 1000);
};

broadcastChannel.addEventListener('message', closeNotices);

$dismiss.on('click', (): void => {
	closeNotices();
	void mw.notify($((<span innerHTML={getMessage('DismissNotice')} />) as HTMLElement), {
		tag: 'AdvancedSiteNotices',
	});
});
tippy($dismiss.get(0) as HTMLAnchorElement, {
	arrow: true,
	content: $dismiss.attr('aria-label') as string,
	placement: 'bottom',
});

let $notices: JQuery;
const noticeStyles: HTMLStyleElement[] = [];
const showNotices = ($mountPoint: JQuery, index: number, remoteNotices?: RemoteNotices): void => {
	currentVersion = remoteNotices?.version ?? currentVersion;
	if (currentVersion === localVersion) {
		return;
	}

	if (remoteNotices?.$notices) {
		({$notices} = remoteNotices);
	}

	const noticesLength: number = $notices.length;
	const nextNoticeIndex: number = (index + 1) % noticesLength;
	let $notice: JQuery = $();

	let i: number = 0;
	while (i++ < noticesLength) {
		$notice = $notices.eq(index);
		if (!matchCriteria($notice)) {
			showNotices($mountPoint, nextNoticeIndex);
			return;
		}
		index = index++ % noticesLength;
	}

	if (typeof $notice.data('asn-html') === 'string') {
		$notice.data('asn-html-raw', mw.Uri.decode($notice.data('asn-html') as string));
		$notice.data('asn-html', null);
	}
	if (typeof $notice.data('asn-style') === 'string') {
		$notice.data('asn-style-id', noticeStyles.length);
		const style: HTMLStyleElement = mw.loader.addStyleTag(mw.Uri.decode($notice.data('asn-style') as string));
		style.disabled = true;
		noticeStyles[noticeStyles.length] = style; // Replace `[].push()` to avoid polyfilling core-js
		$notice.data('asn-style', null);
	}

	const noticeHtml: string = ($notice.data('asn-html-raw') as string) || $notice.html();
	const noticeStyleId: number = $notice.data('asn-style-id') as number;
	const currentNoticeHtml: string = $currentNotice.html();
	if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
		$currentNotice.stop().fadeOut((): void => {
			for (const style of noticeStyles) {
				style.disabled = true;
			}
			const noticeStyle: HTMLStyleElement | undefined = noticeStyles[noticeStyleId];
			if (noticeStyle) {
				noticeStyle.disabled = false;
			}
			$currentNotice.html(noticeHtml);
			// animation try /catched to avoid TypeError: (Animation.tweeners[prop]||[]).concat is not a function error being seen in production
			try {
				$currentNotice.fadeIn();
			} catch {}
		});
	} else if (!currentNoticeHtml) {
		$mountPoint.append($area);
		const noticeStyle: HTMLStyleElement | undefined = noticeStyles[noticeStyleId];
		if (noticeStyle) {
			noticeStyle.disabled = false;
		}
		$currentNotice.html(noticeHtml).fadeIn();
	}

	timer = setTimeout((): void => {
		showNotices($mountPoint, nextNoticeIndex);
	}, 7 * 1000);
};

export {showNotices};
