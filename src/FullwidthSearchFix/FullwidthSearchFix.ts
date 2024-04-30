import {URL_FULLTEXT, URL_SEARCH, WG_NAMESPACE_IDS} from './modules/constant';
import {redirect} from './modules/redirect';

(function fullwidthSearchFix(): void {
	// don't be too aggresive. just fix some obvious typos
	if (URL_FULLTEXT || !URL_SEARCH) {
		return;
	}

	// namespace names
	const colonIndex: number = URL_SEARCH.indexOf('：');
	if (colonIndex === -1) {
		return;
	}

	// if namespace is valid
	const nameSpace: string = URL_SEARCH.slice(0, Math.max(0, colonIndex));
	const pageName: string = URL_SEARCH.slice(Math.max(0, colonIndex + 1));
	if (!WG_NAMESPACE_IDS[nameSpace.toLowerCase()]) {
		return;
	}

	redirect(nameSpace, pageName);
})();
