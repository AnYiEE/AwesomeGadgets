import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_USER_GROUPS} from './constant';

const introAFC = (): void => {
	// Disabled for confirmed users
	if (WG_USER_GROUPS.includes('confirmed') || WG_USER_GROUPS.includes('autoconfirmed')) {
		return;
	}

	/**
	 * Remove "Edit" buttons
	 */
	for (const element of document.querySelectorAll('#ca-ve-edit, #ca-edit')) {
		element.remove();
	}

	/**
	 * If talk page does not exist, remove "Talk page" button
	 */
	if (
		document.querySelector('#ca-talk') &&
		document.querySelectorAll('#ca-talk a')[0] &&
		(document.querySelectorAll('#ca-talk a')[0] as HTMLAnchorElement).href.includes('redlink=1')
	) {
		document.querySelector('#ca-talk')?.remove();
	}

	/**
	 * If permission error `titleblacklist-temporary` exists,
	 * remove unnecessary elements
	 */
	if (document.querySelector('#titleblacklist-temporary')) {
		for (const element of document.querySelectorAll('.permissionserrorstext-withaction, #firstHeading')) {
			element.remove();
		}
	}

	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		if (mw.config.get('wgNamespaceNumber') === 6) {
			/**
			 * If editing pages under `File:` namespace,
			 * redirect to Special:UploadWizard
			 */
			location.href = '/wiki/Special:UploadWizard';
		} else {
			/**
			 * If editing pages under other namespaces,
			 * redirect to [[LIBACH]]
			 */
			location.href = '/wiki/LIBACH';
		}
	}
};

export {introAFC};
