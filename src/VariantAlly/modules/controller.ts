import {Variant, getMediaWikiVariant, isValidVariant, setLocalVariant} from './model';

const REGEX_WIKI_URL = /^\/(?:wiki|zh(?:-\w+)?)\//i;
const REGEX_VARIANT_URL = /^\/zh(?:-\w+)?\//i;
const VARIANT_PARAM = 'va-variant';

function isEligibleForRewriting(link: string): boolean {
	try {
		// No rewriting for empty links
		if (link === '') {
			return false;
		}
		const url = new URL(link, location.origin);
		// No rewriting if link itself has variant info
		if (REGEX_VARIANT_URL.test(url.pathname)) {
			return false;
		}
		if (url.searchParams.has('variant')) {
			return false;
		}
		// No rewriting for foreign origin URLs
		// Note that links like javascript:void(0) are blocked by this
		if (url.host !== location.host) {
			return false;
		}

		return true;
	} catch {
		return false;
	}
}

function rewriteLink(link: string, variant: Variant): string {
	try {
		const normalizationTargetVariant = getMediaWikiVariant();
		const url = new URL(link, location.origin);
		const {pathname, searchParams} = url;

		if (REGEX_WIKI_URL.test(pathname)) {
			url.pathname = `/${variant}/${url.pathname.replace(REGEX_WIKI_URL, '')}`;
			searchParams.delete('variant'); // For things like /zh-cn/A?variant=zh-hk
		} else {
			searchParams.set('variant', variant);
		}

		if (variant === normalizationTargetVariant) {
			// Normalize the link.
			//
			// For example, for link /zh-tw/Title and normalization variant zh-tw, the result is /wiki/Title,
			// while for the same link and normalization variant zh-cn, the result is /zh-tw/Title (unchanged).
			url.pathname = url.pathname.replace(REGEX_WIKI_URL, '/wiki/');
			url.searchParams.delete('variant');
		}

		const result = url.toString();

		return result;
	} catch {
		return link;
	}
}

interface RedirectionOptions {
	link?: string;
	/** Should still redirect even destination link is the same as current page */
	forced?: boolean;
}

type Redirect = typeof redirect;

function redirect(preferredVariant: Variant, options: RedirectionOptions = {}): void {
	const origLink = options.link ?? location.href;
	const newLink = rewriteLink(origLink, preferredVariant);

	// Prevent infinite redirects
	// This could happen occasionally, see getMediaWikiVariant()'s comments
	if (options.forced || newLink !== location.href) {
		// Use replace() to prevent navigating back
		location.replace(newLink);
	}
}

function checkThisPage(preferredVariant: Variant, pageVariant?: Variant): void {
	if (pageVariant === preferredVariant) {
		return;
	}

	const redirectionOrigin: string | null = mw.config.get('wgRedirectedFrom');
	if (redirectionOrigin === null) {
		redirect(preferredVariant);
		return;
	}

	// Use URL to reserve other parts of the link
	const redirectionURL = new URL(location.href);
	redirectionURL.pathname = `/wiki/${redirectionOrigin}`;
	redirect(preferredVariant, {link: redirectionURL.toString()});
}

function rewriteAnchors(variant: Variant): void {
	for (const name of ['click', 'auxclick', 'dragstart']) {
		document.addEventListener(name, (ev) => {
			const {target} = ev;

			if (target instanceof Element) {
				// Do not write <a> with hash only href or no href
				// which is known to cause breakage in e.g. Visual Editor
				const anchor: HTMLAnchorElement | null = target.closest('a[href]:not([href^="#"])');

				if (anchor !== null) {
					const origLink = anchor.href;
					if (!isEligibleForRewriting(origLink)) {
						return;
					}

					const newLink = rewriteLink(origLink, variant);
					if (newLink === origLink) {
						return;
					}

					// Browser support: Safari < 14
					// Fail silently when DragEvent is not present
					if (window.DragEvent && ev instanceof DragEvent && ev.dataTransfer) {
						// Modify drag data directly because setting href has no effect in drag event
						for (const type of ev.dataTransfer.types) {
							ev.dataTransfer.setData(type, newLink);
						}
					} else {
						// Use a mutex to avoid being overwritten by overlapped handler calls
						if (anchor.dataset['vaMutex'] === undefined) {
							anchor.dataset['vaMutex'] = '';
						}

						anchor.href = newLink;

						// HACK: workaround popups not working on modified links
						// Add handler to <a> directly so it was triggered before anything else
						for (const innerName of ['mouseover', 'mouseleave', 'keyup']) {
							anchor.addEventListener(
								innerName,
								() => {
									if (anchor.dataset['vaMutex'] !== undefined) {
										anchor.href = origLink;
										delete anchor.dataset['vaMutex'];
									}
								},
								{once: true}
							);
						}
					}
				}
			}
		});
	}
}

function showVariantPrompt(): void {
	const moduleName = 'ext.gadget.VariantAllyDialog';
	void mw.loader.using(moduleName, (require) => {
		require(moduleName);
	});
}

/**
 * Set local variant according to URL query parameters.
 *
 * e.g. a URL with ?va-variant=zh-cn will set local variant to zh-cn
 */
function applyURLVariant(): void {
	const variant = new URL(location.href).searchParams.get(VARIANT_PARAM);
	if (variant !== null && isValidVariant(variant)) {
		setLocalVariant(variant);
	}
}

export {
	type Redirect,
	isEligibleForRewriting,
	rewriteLink,
	redirect,
	checkThisPage,
	rewriteAnchors,
	showVariantPrompt,
	applyURLVariant,
};
