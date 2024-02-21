/**
 * Autolink [[wikilinks]], [external links] and {{templates}}
 */
import {
	IS_DIFF_ACTION,
	IS_TARGET_SPECIAL_PAGE,
	IS_WG_EDIT_OR_SUBMIT_ACTION,
	IS_WG_HISTORY_ACTION,
	REGEX_IMPORT_SCRIPT,
	REGEX_INTERNAL_URL,
	REGEX_TL,
	REGEX_URL,
} from './constant';
import type {TargetElements} from './util/getTargetElements';

const processElement = ({color, targetElements}: TargetElements): void => {
	let isActivateHTML: boolean = false;
	/* Regex (default for diffs) */
	// Regex for diffs
	let regexURLinWikicodeWithoutLabel: RegExp =
		/((?:[^[]|^)\[\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)([^\n\]]*])/gm;
	// External links (no wikicode)
	let regexSubstinWikicodeWithoutLabel: string = `$1<a class="external autolink" style="color:${color}" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:${color}" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:${color}" href="$2$4$6">$6</a>$7`;
	// External links in diff pages, wikicode without label
	let regexURLinWikicodeWithLabel: RegExp = regexURLinWikicodeWithoutLabel;
	// External links in diff pages, wikicode with label
	let regexSubstinWikicodeWithLabel: string = regexSubstinWikicodeWithoutLabel;
	// Other pages included in diff pages
	let regexOtherPages: RegExp =
		/((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
	let regexSubstinOtherPages: string = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
	// Templates in diff pages
	let regexTemplate: RegExp =
		/((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
	let regexSubstinTemplate: string = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$6</a>$7`;
	// Wikilinks in diff pages
	let regexWikilink1: RegExp =
		/(\[{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)([^\n<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:[^\n\]]|][^\]])*]{2})/g;
	let regexSubstinWikilink1: string = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
	let regexWikilink2: RegExp = regexWikilink1;
	let regexSubstinWikilink2: string = regexSubstinWikilink1;
	// Regex for comments or code sections
	if (!IS_DIFF_ACTION) {
		// Activate some HTML (inline) and wikicode for bold and italic
		isActivateHTML = true;
		// External links in comments or code sections, wikicode without label
		regexURLinWikicodeWithoutLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s*]/gm;
		regexSubstinWikicodeWithoutLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`;
		// External links in comments or code sections, wikicode with label (the URL will not be visible)
		regexURLinWikicodeWithLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s+([^\n]+?)\s*]/gm;
		regexSubstinWikicodeWithLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$3</a>`;
		// Other pages included in comments or code sections
		regexOtherPages =
			/((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)((?:[Ss]pecial|[Qq](?:iuwen|Q)|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)(\||}{2})/gm;
		regexSubstinOtherPages = `$1<a class="autolink" style="color:${color}" href="/wiki/$2">$2</a>$3`;
		// Templates in comments or code sections
		regexTemplate =
			/((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
		regexSubstinTemplate = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>$3`;
		// Wikilinks in code sections, with label
		regexWikilink1 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|\s*(.+?)\s*]{2}/g;
		regexSubstinWikilink1 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$2</a>`;
		// Wikilinks in code sections, without label
		regexWikilink2 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|?\s*]{2}/g;
		regexSubstinWikilink2 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$1</a>`;
	}

	for (const element of targetElements) {
		const {innerHTML: originHtml} = element;
		let html: string = originHtml;

		html = html.replace(/&lt;/g, '&shy;<&shy;');
		html = html.replace(/&gt;/g, '&shy;>&shy;');
		// &amp;lt; to &amp;shy;<&amp;shy; and &amp;gt; to &amp;shy;>&amp;shy; (&amp;shy; is a marker)
		html = html.replace(/&amp;/g, '&');
		// &amp;amp; to &
		/* --- */
		html = html.replace(REGEX_TL, `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>`);
		// For {{tl}}: make his argument into link
		html = html.replace(REGEX_URL, `$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`);
		// Parse inactive external links (no wikicode)
		html = html.replace(regexURLinWikicodeWithoutLabel, regexSubstinWikicodeWithoutLabel);
		// Make external links in wikicode without label into links
		html = html.replace(regexURLinWikicodeWithLabel, regexSubstinWikicodeWithLabel);
		// Make external links in wikicode with label into links
		html = html.replace(regexOtherPages, regexSubstinOtherPages);
		// Make other pages included code into links
		html = html.replace(regexTemplate, regexSubstinTemplate);
		html = html.replace(/href="\/wiki\/Template:#/g, 'href="/wiki/Help:');
		// Make template code into links
		html = html.replace(regexWikilink1, regexSubstinWikilink1);
		html = html.replace(regexWikilink2, regexSubstinWikilink2);
		// Make wikilink code into links
		html = html.replace(
			REGEX_INTERNAL_URL,
			`$1$2<a class="external autolink" style="color:${color}" href="$3">$3</a>$2`
		);
		// Parse inactive external links (no wikicode)
		html = html.replace(
			REGEX_IMPORT_SCRIPT,
			`$1$2<a class="autolink" style="color:${color}" href="/wiki/$3">$3</a>$4`
		);
		// Parse ImportScript
		html = html.replace(/&shy;<&shy;/g, '&lt;');
		html = html.replace(/&shy;>&shy;/g, '&gt;');
		// &amp;shy;<&amp;shy; to &amp;lt; and &amp;shy;>&amp;shy; to &amp;gt; (revert)
		if (isActivateHTML) {
			html = html.replace(
				/&lt;(span|b|i|strong|small|tt|del|s|u|sub|sup)&gt;(.*?)&lt;\/(\1)&gt;/g,
				'<$1>$2</$3>'
			);
			html = html.replace(/([^']|^)'{3}(.+?)'{3}([^']|$)/gm, '$1<b>$2</b>$3');
			html = html.replace(/([^']|^)'{2}(.+?)'{2}([^']|$)/gm, '$1<i>$2</i>$3');
			if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
				html = html.replace(
					/<i>(.*?)<\/i>/g,
					'<span title="italic" style="border:1px solid #c0c0c0;padding:2px">$1</span>'
				);
			}
			// I'm in a comment field (italic)
		}
		if (IS_DIFF_ACTION) {
			html = html.replace(/<a [^>]+><\/a>/g, ''); // Clean
			html = html.replace(
				/([^[]|^)\[\s*(<a [^>]+>)(?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+(<\/a>)\s+([^\n\]]+)]/gm,
				'$1$2$4$3'
			);
			html = html.replace(
				/([^[]|^)\[\s*(<a [^>]+>)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)(<\/a>)\s*]/gm,
				'$1$2$3$4'
			);
		}

		if (html !== originHtml) {
			requestAnimationFrame((): void => {
				element.innerHTML = html; // Write it back
			});
		}
	}
};

export {processElement};
