import {
	checkThisPage,
	rewriteAnchors,
	applyURLVariant,
	showVariantPrompt,
	isEligibleForRewriting,
} from './modules/controller';
import {calculatePreferredVariant, getPageVariant, isOptOuted, setLocalVariant} from './modules/model';
import {isLoggedIn, isLangChinese, isWikitextPage, isViewingPage, isReferrerSelf} from './modules/utils';

function main() {
	// Manually opt outed users
	if (isOptOuted()) {
		return;
	}

	if (isLoggedIn()) {
		return;
	}

	// Non-Chinese pages/users
	if (!isLangChinese()) {
		return;
	}

	applyURLVariant();

	const preferredVariant = calculatePreferredVariant();
	if (preferredVariant !== null) {
		// Optimistically set local variant to be equal to browser variant
		// In case the user's browser language becomes invalid in the future,
		// this reduces the possibility to show prompt to disrupt users.
		setLocalVariant(preferredVariant);
	}

	const pageVariant = getPageVariant();

	// Non-article page (JS/CSS pages, Special pages etc.)
	if (pageVariant === null || !isWikitextPage()) {
		// Such page can't have variant, but preferred variant may be available
		// So still rewrite links
		if (preferredVariant !== null) {
			rewriteAnchors(preferredVariant);
		}
		return;
	}

	// Preferred variant unavailable
	if (preferredVariant === null) {
		if (isViewingPage()) {
			showVariantPrompt();
			return;
		}

		return;
	}

	// On-site navigation to links ineligible for writing
	// The eligibility check is require because user may click on a link with variant intentionally
	// e.g. variant dropdown and {{Variant-cnhktwsg}}
	if (isReferrerSelf() && !isEligibleForRewriting(location.href)) {
		rewriteAnchors(preferredVariant);
		return;
	}

	checkThisPage(preferredVariant, pageVariant);
	rewriteAnchors(preferredVariant);
}

main();

// Expose for VariantAllyDialog's use
export {setLocalVariant, setOptOut} from './modules/model';
export {redirect} from './modules/controller';
