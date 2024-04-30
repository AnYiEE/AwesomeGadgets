const introACH = (): void => {
	const {wgAction, wgArticleId, wgWikiID, wgUserGroups, wgNamespaceNumber} = mw.config.get();

	// Disabled for wikis other than wiki-ysy
	if (wgWikiID !== 'wiki-ysy') {
		return;
	}

	// Disabled for existing page(s)
	if (wgArticleId) {
		return;
	}

	// Disabled for non-content namespaces
	if (![0, 6].includes(wgNamespaceNumber)) {
		return;
	}

	// Disabled for confirmed users
	if (!wgUserGroups || wgUserGroups.includes('confirmed') || wgUserGroups.includes('autoconfirmed')) {
		return;
	}

	// Disabled for official users and experienced users
	if (
		wgUserGroups.includes('steward') ||
		wgUserGroups.includes('senioreditor') ||
		wgUserGroups.includes('bot') ||
		wgUserGroups.includes('confirmed')
	) {
		return;
	}

	/**
	 * Remove "Edit" buttons
	 */
	if ([0, 6].includes(wgNamespaceNumber)) {
		for (const element of document.querySelectorAll('#ca-ve-edit, #ca-edit')) {
			element.remove();
		}
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

	if (['edit', 'submit'].includes(wgAction)) {
		if (wgNamespaceNumber === 6) {
			/**
			 * If editing pages under `File:` namespace,
			 * redirect to [[Special:UploadWizard]]
			 */
			location.href = '/wiki/Special:UploadWizard';
		} else if (wgNamespaceNumber === 0) {
			/**
			 * If editing pages under main namespace,
			 * redirect to [[QW:ACH]]
			 */
			location.href = '/wiki/Help:FAQ';
		}
	}
};

export {introACH};
