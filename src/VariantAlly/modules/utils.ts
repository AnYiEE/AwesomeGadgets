function isLoggedIn(): boolean {
	return mw.config.exists('wgUserId');
}

/**
 * Check whether referrer originates from the same domain.
 */
function isReferrerSelf(): boolean {
	try {
		return new URL(document.referrer).hostname === location.hostname;
	} catch {
		// Invalid URL
		return false;
	}
}

function isViewingPage(): boolean {
	return mw.config.get('wgAction') === 'view';
}

/**
 * Check whether the current language (set in user preference or by ?uselang=xxx)
 * is Chinese or not.
 */
function isLangChinese(): boolean {
	return mw.config.get('wgUserLanguage').startsWith('zh');
}

function isWikitextPage(): boolean {
	return mw.config.get('wgCanonicalNamespace') !== 'Special' && mw.config.get('wgPageContentModel') === 'wikitext';
}

export {isLoggedIn, isReferrerSelf, isViewingPage, isLangChinese, isWikitextPage};
