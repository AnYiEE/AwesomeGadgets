import {WG_ACTION, WG_NAMESPACE_NUMBER} from './constant';
import {markBlockedUser} from './markBlockedUser';

const addHook = (): void => {
	let isInit: boolean = false;

	mw.hook('wikipage.content').add(function markBlocked($content): void {
		if (isInit) {
			return;
		}
		isInit = true;

		// On the first call after initial page load, container is mw.util.$content
		// Used to limit mainspace activity to just the diff definitions
		if (WG_ACTION === 'view' && WG_NAMESPACE_NUMBER === 0) {
			$content = $content.find('.diff-title');
		}
		// On page load, also update the namespace tab
		$content = $content.add('#ca-nstab-user');

		markBlockedUser($content);
	});
};

export {addHook};
