// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './modules/check';
import {generateArray} from 'ext.gadget.Util';
import {getMessage} from './modules/getMessage';
import {hotCatMessages} from './modules/messages';
import {mwApi} from './modules/api';

/**
 * @description Ajax-based simple Category manager. Allows adding/removing/changing categories on a page view.
 * Supports multiple category changes, as well as redirect and disambiguation resolution. Also
 * plugs into the upload form. Search engines to use for the suggestion list are configurable, and
 * can be selected interactively.
 *
 * @see {@link https://commons.wikimedia.org/wiki/Help:Gadget-HotCat}
 * @author authors <https://commons.wikimedia.org/wiki/Help:Gadget-HotCat/Version_history>
 */
// Load translations locally
hotCatMessages();

// Main body
(function hotCat() {
	// Don't use mw.config.get() as that takes a copy of the config, and so doesn't
	// account for values changing, e.g. wgCurRevisionId after a VE edit
	const conf = mw.config.values;
	// Guard against double inclusions (in old IE/Opera element ids become window properties)
	if ((window.HotCat && !window.HotCat.nodeName) || conf.wgAction === 'edit') {
		return; // Not on edit mode
	}
	// Initialize MediaWiki API
	const api = mwApi('HotCat/3.0');
	// Configuration stuff.
	window.HotCat = {
		// The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
		// downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
		links: {
			change: '(±)',
			remove: '(\u2212)',
			add: '(+)',
			restore: '(×)',
			undo: '(×)',
			down: '(\u2193)',
			up: '(\u2191)',
		},
		changeTag: 'HotCat',
		// The HTML content of the "enter multi-mode" link at the front.
		addmulti: '<span>+<sup>+</sup></span>',
		// Return true to disable HotCat.
		disable: () => {
			const ns = conf.wgNamespaceNumber;
			const nsIds = conf.wgNamespaceIds;
			return (
				ns < 0 ||
				// Special pages; Special:Upload is handled differently
				ns === 10 ||
				// Templates
				ns === 828 ||
				// Module (Lua)
				ns === 8 ||
				// MediaWiki
				(ns === 6 && !conf.wgArticleId) ||
				// Non-existing file pages
				(ns === 2 && /\.(js|css)$/.test(conf.wgTitle)) ||
				// User scripts
				(nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution))
			);
		},
		// A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
		// If not, set it to null.
		uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
		// The images used for the little indication icon. Should not need changing.
		existsYes: 'https://youshou.wiki/images/b/be/P_yes.svg/24px-P_yes.svg.png',
		existsNo: 'https://youshou.wiki/images/4/42/P_no.svg/24px-P_no.svg.png',
		// a list of categories which can be removed by removing a template
		// key: the category without namespace
		// value: A regexp matching the template name, again without namespace
		// If you don't have this at your wiki, or don't want this, set it to an empty object {}.
		template_categories: {},
		// Override the decision of whether HotCat should help users by automatically
		// capitalising the title in the user input text if the wiki has case-sensitive page names.
		// Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
		// this to true for most wikis, and to false on Wiktionary.
		//
		// You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
		// is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
		// case changes in JavaScript by HotCat would be wrong.
		capitalizePageNames: null,
		// If upload_disabled is true, HotCat will not be used on the Upload form.
		upload_disabled: false,
		// Single regular expression matching blacklisted categories that cannot be changed or
		// added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
		// or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
		// word "maintenance" in its title.
		blacklist: null,
		// Stuff changeable by users:
		// Background for changed categories in multi-edit mode. Default is a very light salmon pink.
		bg_changed: '#FCA',
		// If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
		// the changes; users must always save explicitly.
		no_autocommit: false,
		// If true, the "category deletion" link "(-)" will never save automatically but always show an
		// edit page where the user has to save the edit manually. Is false by default because that's the
		// traditional behavior. This setting overrides no_autocommit for "(-)" links.
		del_needs_diff: false,
		// Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
		// server to get suggestions.
		suggest_delay: 1000,
		// Default width, in characters, of the text input field.
		editbox_width: 40,
		// One of the engine_names above, to be used as the default suggestion engine.
		suggestions: 'combined',
		// If true, always use the default engine, and never display a selector.
		fixed_search: false,
		// If false, do not display the "up" and "down" links
		use_up_down: true,
		// Default list size
		listSize: 10,
		// If true, single category changes are marked as minor edits. If false, they're not.
		single_minor: true,
		// If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
		// the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
		// options in his or her preferences set.
		dont_add_to_watchlist: false,
		shortcuts: null,
		addShortcuts: (map) => {
			let _a;
			if (!map) {
				return;
			}
			(_a = window.HotCat).shortcuts || (_a.shortcuts = {});
			for (let k in map) {
				if (!Object.hasOwn(map, k) || typeof k !== 'string') {
					continue;
				}
				let v = map[k];
				if (typeof v !== 'string') {
					continue;
				}
				k = k.trim();
				v = v.trim();
				if (k.length === 0 || v.length === 0) {
					continue;
				}
				window.HotCat.shortcuts[k] = v;
			}
		},
	};
	const HC = window.HotCat;
	// More backwards compatibility. We have a few places where we test for the browser: once for
	// Safari < 3.0, and twice for WebKit (Chrome or Safari, any versions)
	const ua = navigator.userAgent.toLowerCase();
	const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes('spoofer');
	let cat_prefix = null;
	let noSuggestions = false;
	// No further changes should be necessary here.
	// The following regular expression strings are used when searching for categories in wikitext.
	const wikiTextBlank = '[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+';
	const wikiTextBlankRE = new RegExp(wikiTextBlank, 'g');
	// Regexp for handling blanks inside a category title or namespace name.
	// See {@link http://svn.wikimedia.org/viewvc/mediawiki/trunk/phase3/includes/Title.php?revision=104051&view=markup#l2722}
	// See also {@link http://www.fileformat.info/info/unicode/category/Zs/list.htm}
	//   MediaWiki collapses several contiguous blanks inside a page title to one single blank. It also replace a
	// number of special whitespace characters by simple blanks. And finally, blanks are treated as underscores.
	// Therefore, when looking for page titles in wikitext, we must handle all these cases.
	//   Note: we _do_ include the horizontal tab in the above list, even though the MediaWiki software for some reason
	// appears to not handle it. The zero-width space \u200B is _not_ handled as a space inside titles by MW.
	const wikiTextBlankOrBidi = '[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*';
	// Whitespace regexp for handling whitespace between link components. Including the horizontal tab, but not \n\r\f\v:
	// a link must be on one single line.
	//   MediaWiki also removes Unicode bidi override characters in page titles (and namespace names) completely.
	// This is *not* handled, as it would require us to allow any of [\u200E\u200F\u202A-\u202E] between any two
	// characters inside a category link. It _could_ be done though... We _do_ handle strange spaces, including the
	// zero-width space \u200B, and bidi overrides between the components of a category link (adjacent to the colon,
	// or adjacent to and inside of "[[" and "]]").
	// First auto-localize the regexps for the category and the template namespaces.
	const formattedNamespaces = conf.wgFormattedNamespaces;
	const namespaceIds = conf.wgNamespaceIds;
	const autoLocalize = (namespaceNumber, fallback) => {
		const createRegexpStr = (name) => {
			if (!name || name.length === 0) {
				return;
			}
			let regex_name = '';
			for (let i = 0; i < name.length; i++) {
				const initial = name.charAt(i);
				const ll = initial.toLowerCase();
				const ul = initial.toUpperCase();
				regex_name += ll === ul ? initial : `[${ll}${ul}]`;
			}
			return regex_name.replace(/([$()*+.?\\^])/g, '\\$1').replace(wikiTextBlankRE, wikiTextBlank);
		};
		fallback = fallback.toLowerCase();
		const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
		let regexp = createRegexpStr(canonical);
		if (fallback && canonical !== fallback) {
			regexp += `|${createRegexpStr(fallback)}`;
		}
		if (namespaceIds) {
			for (const cat_name in namespaceIds) {
				if (
					typeof cat_name === 'string' &&
					cat_name.toLowerCase() !== canonical &&
					cat_name.toLowerCase() !== fallback &&
					namespaceIds[cat_name] === namespaceNumber
				) {
					regexp += `|${createRegexpStr(cat_name)}`;
				}
			}
		}
		return regexp;
	};
	HC.category_canonical = formattedNamespaces['14'];
	HC.category_regexp = autoLocalize(14, 'category');
	if (formattedNamespaces['10']) {
		HC.template_regexp = autoLocalize(10, 'template');
	}
	// Utility functions. Yes, this duplicates some functionality that also exists in other places, but
	// to keep this whole stuff in a single file not depending on any other on-wiki JavaScripts, we re-do
	// these few operations here.
	const make = (arg, literal) => {
		if (!arg) {
			return null;
		}
		return literal ? document.createTextNode(arg) : document.createElement(arg);
	};
	const param = (name, uri) => {
		uri ||= document.location.href;
		const re = new RegExp(`[&?]${name}=([^&#]*)`);
		const m = re.exec(uri);
		if (m && m.length > 1) {
			return decodeURIComponent(m[1]);
		}
		return null;
	};
	const title = (href) => {
		if (!href) {
			return null;
		}
		const script = `${conf.wgScript}?`;
		if (
			href.indexOf(script) === 0 ||
			href.indexOf(conf.wgServer + script) === 0 ||
			(conf.wgServer.slice(0, 2) === '//' &&
				href.indexOf(document.location.protocol + conf.wgServer + script) === 0)
		) {
			// href="/index.php?title=..."
			return param('title', href);
		}
		// href="/wiki/..."
		let prefix = conf.wgArticlePath.replace('$1', '');
		if (href.indexOf(prefix)) {
			prefix = conf.wgServer + prefix;
		} // Fully expanded URL?
		if (href.indexOf(prefix) && prefix.slice(0, 2) === '//') {
			prefix = document.location.protocol + prefix;
		} // Protocol-relative wgServer?
		if (href.indexOf(prefix) === 0) {
			return decodeURIComponent(href.slice(prefix.length));
		}
		return null;
	};
	const hasClass = ({className}, name) => {
		return ` ${className} `.includes(` ${name} `);
	};
	const capitalize = (str) => {
		if (!str || str.length === 0) {
			return str;
		}
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};
	const wikiPagePath = (pageName) => {
		return conf.wgArticlePath.replace('$1', encodeURIComponent(pageName).replace(/%3A/g, ':').replace(/%2F/g, '/'));
	};
	const escapeRE = (str) => {
		return str.replace(/([$()*+.?[\\\]^])/g, '\\$1');
	};
	const substituteFactory = (options) => {
		options ||= {};
		const lead = options.indicator || '$';
		const indicator = escapeRE(lead);
		const lbrace = escapeRE(options.lbrace || '{');
		const rbrace = escapeRE(options.rbrace || '}');
		const re = new RegExp(
			// $$
			`(?:${indicator}(${indicator}))|` +
				// $0, $1
				`(?:${indicator}(\\d+))|` +
				// ${key}
				`(?:${indicator}(?:${lbrace}([^${lbrace}${rbrace}]+)${rbrace}))|` +
				// $key (only if first char after $ is not $, digit, or { )
				`(?:${indicator}(?!(?:[${indicator}${lbrace}]|\\d))(\\S+?)\\b)`,
			'g'
		);
		// Replace $1, $2, or ${key1}, ${key2}, or $key1, $key2 by values from map. $$ is replaced by a single $.
		return (str, map) => {
			if (!map) {
				return str;
			}
			return str.replace(re, (match, prefix, idx, key, alpha) => {
				if (prefix === lead) {
					return lead;
				}
				const k = alpha || key || idx;
				const replacement = typeof map[k] === 'function' ? map[k](match, k) : map[k];
				return typeof replacement === 'string' ? replacement : replacement || match;
			});
		};
	};
	const replaceShortcuts = (() => {
		const replaceHash = substituteFactory({
			indicator: '#',
			lbrace: '[',
			rbrace: ']',
		});
		return (str, map) => {
			const s = replaceHash(str, map);
			return HC.capitalizePageNames ? capitalize(s) : s;
		};
	})();
	// Text modification
	const findCatsRE = new RegExp(
		`\\[\\[${wikiTextBlankOrBidi}(?:${HC.category_regexp})${wikiTextBlankOrBidi}:[^\\]]+\\]\\]`,
		'g'
	);
	const replaceByBlanks = (match) => {
		return match.replace(/(\s|\S)/g, ' ');
	}; // /./ doesn't match linebreaks. /(\s|\S)/ does.
	const find_category = (wikitext, category, once) => {
		let cat_regex = null;
		if (HC.template_categories[category]) {
			cat_regex = new RegExp(
				`\\{\\{${wikiTextBlankOrBidi}(${HC.template_regexp}(?=${wikiTextBlankOrBidi}:))?${wikiTextBlankOrBidi}(?:${HC.template_categories[category]})${wikiTextBlankOrBidi}(\\|.*?)?\\}\\}`,
				'g'
			);
		} else {
			const cat_name = escapeRE(category);
			const initial = cat_name.slice(0, 1);
			cat_regex = new RegExp(
				`\\[\\[${wikiTextBlankOrBidi}(${HC.category_regexp})${wikiTextBlankOrBidi}:${wikiTextBlankOrBidi}${
					initial === '\\' || !HC.capitalizePageNames
						? initial
						: `[${initial.toUpperCase()}${initial.toLowerCase()}]`
				}${cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)}${wikiTextBlankOrBidi}(\\|.*?)?\\]\\]`,
				'g'
			);
		}
		if (once) {
			return cat_regex.exec(wikitext);
		}
		const nowikiRegex = new RegExp('<no'.concat('wiki>', '(\\s|\\S)*?</no', 'wiki', '>'), 'g');
		const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
		const result = [];
		let curr_match = null;
		while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
			result[result.length] = {
				match: curr_match,
			};
		}
		result.re = cat_regex;
		return result; // An array containing all matches, with positions, in result[ i ].match
	};
	let interlanguageRE = null;
	const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
		const find_insertionpoint = (_wikitext) => {
			const nowikiRegex = new RegExp('<no'.concat('wiki>', '(\\s|\\S)*?</no', 'wiki', '>'), 'g');
			const copiedtext = _wikitext
				.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks)
				.replace(nowikiRegex, replaceByBlanks);
			// Search in copiedtext to avoid that we insert inside an HTML comment or a nowiki "element".
			let index = -1;
			findCatsRE.lastIndex = 0;
			while (findCatsRE.exec(copiedtext) !== null) {
				index = findCatsRE.lastIndex;
			}
			if (index < 0) {
				// Find the index of the first interlanguage link...
				let match = null;
				interlanguageRE
					? (match = interlanguageRE.exec(copiedtext))
					: // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
						// a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
						// and "tokipona".
						(match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(
							copiedtext
						));
				if (match) {
					({index} = match);
				}
				return {
					idx: index,
					onCat: false,
				};
			}
			return {
				idx: index,
				onCat: index >= 0,
			};
		};
		const summary = [];
		const nameSpace = HC.category_canonical;
		const // Position of removed category;
			keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
		let matches;
		let cat_point = -1;
		if (key) {
			key = `|${key}`;
		}
		// Remove
		if (toRemove && toRemove.length > 0) {
			matches = find_category(wikitext, toRemove);
			if (!matches || matches.length === 0) {
				return {
					text: wikitext,
					summary,
					error: getMessage('messages-cat_notFound', toRemove),
				};
			}
			let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
			let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
			if (matches.length > 1) {
				// Remove all occurrences in after
				matches.re.lastIndex = 0;
				after = after.replace(matches.re, '');
			}
			if (
				toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
				key === null
			) {
				[, , key] = matches[0].match;
			}
			// Remember the category key, if any.
			// Remove whitespace (properly): strip whitespace, but only up to the next line feed.
			// If we then have two linefeeds in a row, remove one. Otherwise, if we have two non-
			// whitespace characters, insert a blank.
			let i = before.length - 1;
			while (i >= 0 && before.charAt(i) !== '\n' && before.slice(i, i + 1).search(/\s/) >= 0) {
				i--;
			}
			let j = 0;
			while (j < after.length && after.charAt(j) !== '\n' && after.slice(j, j + 1).search(/\s/) >= 0) {
				j++;
			}
			if (
				i >= 0 &&
				before.charAt(i) === '\n' &&
				(after.length === 0 || (j < after.length && after.charAt(j) === '\n'))
			) {
				i--;
			}
			before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : '';
			after = j < after.length ? after.slice(Math.max(0, j)) : '';
			if (
				before.length > 0 &&
				before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 &&
				after.length > 0 &&
				after.slice(0, 1).search(/\S/) >= 0
			) {
				before += ' ';
			}
			cat_point = before.length;
			if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === '\n') {
				after = after.slice(1);
			}
			wikitext = before + after;
			if (!keyChange) {
				if (HC.template_categories[toRemove]) {
					summary[summary.length] = getMessage('messages-template_removed', toRemove);
				} else {
					summary[summary.length] = getMessage('messages-cat_removed', toRemove);
				}
			}
		}
		// Add
		if (toAdd && toAdd.length > 0) {
			matches = find_category(wikitext, toAdd);
			if (matches && matches.length > 0) {
				// Already exists
				return {
					text: wikitext,
					summary,
					error: getMessage('messages-cat_exists', toAdd),
				};
			}
			let onCat = false;
			if (cat_point < 0) {
				const point = find_insertionpoint(wikitext);
				cat_point = point.idx;
				({onCat} = point);
			} else {
				onCat = true;
			}
			const newcatstring = `[[${nameSpace}:${toAdd}${key || ''}]]`;
			if (cat_point >= 0) {
				const suffix = wikitext.slice(Math.max(0, cat_point));
				wikitext =
					wikitext.slice(0, Math.max(0, cat_point)) +
					(cat_point > 0 ? '\n' : '') +
					newcatstring +
					(onCat ? '' : '\n');
				wikitext += suffix.length > 0 && suffix.slice(0, 1) !== '\n' ? `\n${suffix}` : suffix;
			} else {
				if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== '\n') {
					wikitext += '\n';
				}
				wikitext += (wikitext.length > 0 ? '\n' : '') + newcatstring;
			}
			if (keyChange) {
				let k = key || '';
				if (k.length > 0) {
					k = k.slice(1);
				}
				summary[summary.length] = getMessage('messages-cat_keychange', toAdd, k);
			} else {
				summary[summary.length] = getMessage('messages-cat_added', toAdd);
			}
			if (HC.uncat_regexp && !is_hidden) {
				const txt = wikitext.replace(HC.uncat_regexp, ''); // Remove "uncat" templates
				if (txt.length !== wikitext.length) {
					wikitext = txt;
					summary[summary.length] = getMessage('messages-uncat_removed');
				}
			}
		}
		return {
			text: wikitext,
			summary,
			error: null,
		};
	};
	// The real HotCat UI
	const evtKeys = ({ctrlKey, metaKey, shiftKey}) => {
		let code = 0;
		if (ctrlKey) {
			// All modern browsers
			// Ctrl-click seems to be overloaded in FF/Mac (it opens a pop-up menu), so treat cmd-click
			// as a ctrl-click, too.
			if (ctrlKey || metaKey) {
				code ||= 1;
			}
			if (shiftKey) {
				code ||= 2;
			}
		}
		return code;
	};
	const evtKill = (e) => {
		if (e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		return false;
	};
	let catLine = null; // true if MediaWiki serves the new UL-LI DOM for categories
	let onUpload = false;
	let editors = [];
	let commitButton = null;
	let commitForm = null;
	let multiSpan = null;
	let pageText = null;
	let pageTime = null;
	let pageWatched = false;
	let watchCreate = false;
	let watchEdit = false;
	let minorEdits = false;
	let editToken = null;
	let is_rtl = false;
	let serverTime = null;
	let lastRevId = null;
	let pageTextRevId = null;
	let conflictingUser = null;
	let newDOM = false;
	const UNCHANGED = 0;
	const OPEN = 1; // Open, but no input yet
	const CHANGE_PENDING = 2; // Open, some input made
	const CHANGED = 3;
	const DELETED = 4;
	const setPage = (data) => {
		let startTime = null;
		if (data && data.query) {
			if (data.query.pages) {
				const [page] = data.query.pages;
				if (page) {
					if (page.revisions && page.revisions.length > 0) {
						// Revisions are sorted by revision ID, hence [0] is the one we asked for, and possibly there's a [1] if we're
						// not on the latest revision (edit conflicts and such).
						pageText = page.revisions[0].slots['main'].content;
						if (page.revisions[0].timestamp) {
							pageTime = page.revisions[0].timestamp.replace(/\D/g, '');
						}
						if (page.revisions[0].revid) {
							pageTextRevId = page.revisions[0].revid;
						}
						if (page.revisions.length > 1) {
							conflictingUser = page.revisions[1].user;
						}
					}
					if (page.lastrevid) {
						lastRevId = page.lastrevid;
					}
					if (page.starttimestamp) {
						startTime = page.starttimestamp.replace(/\D/g, '');
					}
					pageWatched = typeof page.watched === 'string';
					if (data.query.tokens) {
						editToken = data.query.tokens.csrftoken;
					}
					if (page.langlinks && (!data['query-continue'] || !data['query-continue'].langlinks)) {
						// We have interlanguage links, and we got them all.
						let re = '';
						for (let i = 0; i < page.langlinks.length; i++) {
							re += (i > 0 ? '|' : '') + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, '\\$1');
						}
						if (re.length > 0) {
							interlanguageRE = new RegExp(`((^|\\n\\r?)(\\[\\[\\s*(${re})\\s*:[^\\]]+\\]\\]\\s*))+$`);
						}
					}
				}
			}
			// Siteinfo
			if (data.query.general) {
				if (data.query.general.time && !startTime) {
					startTime = data.query.general.time.replace(/\D/g, '');
				}
				if (HC.capitalizePageNames === null) {
					// ResourceLoader's JSParser doesn't like .case, so override eslint.
					HC.capitalizePageNames = data.query.general.case === 'first-letter';
				}
			}
			serverTime = startTime;
			// Userinfo
			if (data.query.userinfo && data.query.userinfo.options) {
				watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === '1';
				watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === '1';
				minorEdits = data.query.userinfo.options.minordefault === 1;
				// If the user has the "All edits are minor" preference enabled, we should honor that
				// for single category changes, no matter what the site configuration is.
				if (minorEdits) {
					HC.single_minor = true;
				}
			}
		}
	};
	let saveInProgress = false;
	const initiateEdit = (doEdit, failure) => {
		if (saveInProgress) {
			return;
		}
		saveInProgress = true;
		let oldButtonState;
		if (commitButton) {
			oldButtonState = commitButton.disabled;
			commitButton.disabled = true;
		}
		const fail = function (...args) {
			saveInProgress = false;
			if (commitButton) {
				commitButton.disabled = oldButtonState;
			}
			failure.apply(this, args);
		};
		// Must use Ajax here to get the user options and the edit token.
		const params = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			rawcontinue: '',
			titles: conf.wgPageName,
			prop: ['info', 'revisions', 'langlinks'],
			inprop: 'watched',
			rvprop: ['content', 'timestamp', 'ids', 'user'],
			rvslots: 'main',
			rvlimit: '2',
			rvdir: 'newer',
			rvstartid: conf.wgCurRevisionId,
			lllimit: '500',
			meta: ['siteinfo', 'userinfo', 'tokens'],
			type: 'csrf',
			uiprop: ['options'],
		};
		api.get(params)
			.done((data) => {
				setPage(data);
				doEdit(fail);
			})
			.fail(({status, statusText}) => {
				fail(`${status} ${statusText}`);
			});
	};
	const multiChangeMsg = (count) => {
		return getMessage('messages-multi_change', String(count));
	};
	const currentTimestamp = () => {
		const now = new Date();
		let ts = String(now.getUTCFullYear());
		const two = (s) => {
			return s.slice(-2);
		};
		ts +=
			two(`0${now.getUTCMonth() + 1}`) +
			two(`0${now.getUTCDate()}`) +
			two(`00${now.getUTCHours()}`) +
			two(`00${now.getUTCMinutes()}`) +
			two(`00${now.getUTCSeconds()}`);
		return ts;
	};
	const performChanges = (failure, singleEditor) => {
		if (pageText === null) {
			failure(getMessage('messages-multi_error'));
			return;
		}
		// Create a form and submit it. We don't use the edit API (api.php?action=edit) because
		// (a) sensibly reporting back errors like edit conflicts is always a hassle, and
		// (b) we want to show a diff for multi-edits anyway, and
		// (c) we want to trigger onsubmit events, allowing user code to intercept the edit.
		// Using the form, we can do (b) and (c), and we get (a) for free. And, of course, using the form
		// automatically reloads the page with the updated categories on a successful submit, which
		// we would have to do explicitly if we used the edit API.
		let action;
		// Normally, we don't have to care about edit conflicts. If some other user edited the page in the meantime, the
		// server will take care of it and merge the edit automatically or present an edit conflict screen. However, the
		// server suppresses edit conflicts with oneself. Hence, if we have a conflict, and the conflicting user is the
		// current user, then we set the "oldid" value and switch to diff, which gives the "you are editing an old version;
		// if you save, any more recent changes will be lost" screen.
		const selfEditConflict =
			((lastRevId !== null && lastRevId !== conf.wgCurRevisionId) ||
				(pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId)) &&
			conflictingUser &&
			conflictingUser === conf.wgUserName;
		if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
			// If we do have an edit conflict, but not with ourself, that's no reason not to attempt to save: the server side may actually be able to
			// merge the changes. We just need to make sure that we do present a diff view if it's a self edit conflict.
			commitForm.wpEditToken.value = editToken;
			action = commitForm.wpDiff;
			if (action) {
				action.value = 'wpSave';
				action.name = action.value;
			}
		} else {
			action = commitForm.wpSave;
			if (action) {
				action.value = 'wpDiff';
				action.name = action.value;
			}
		}
		let result = {
			text: pageText,
		};
		const changed = [];
		const added = [];
		const deleted = [];
		const toEdit = singleEditor ? [singleEditor] : editors;
		let edit;
		let i;
		let error = null;
		let changes = 0;
		for (i = 0; i < toEdit.length; i++) {
			edit = toEdit[i];
			if (edit.state === CHANGED) {
				result = change_category(
					result.text,
					edit.originalCategory,
					edit.currentCategory,
					edit.currentKey,
					edit.currentHidden
				);
				if (!result.error) {
					changes++;
					if (!edit.originalCategory || edit.originalCategory.length === 0) {
						added[added.length] = edit.currentCategory;
					} else {
						changed[changed.length] = {
							from: edit.originalCategory,
							to: edit.currentCategory,
						};
					}
				} else if (error === null) {
					({error} = result);
				}
			} else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
				result = change_category(result.text, edit.originalCategory, null, null, false);
				if (!result.error) {
					changes++;
					deleted[deleted.length] = edit.originalCategory;
				} else if (error === null) {
					({error} = result);
				}
			}
		}
		if (error !== null) {
			// Do not commit if there were errors
			action = commitForm.wpSave;
			if (action) {
				action.value = 'wpDiff';
				action.name = action.value;
			}
		}
		// Fill in the form and submit it
		commitForm.wpMinoredit.checked = minorEdits;
		commitForm.wpWatchthis.checked = (!conf.wgArticleId && watchCreate) || watchEdit || pageWatched;
		if (conf.wgArticleId || !!singleEditor) {
			// Prepare change-tag save
			if (action && action.value === 'wpSave') {
				if (HC.changeTag) {
					commitForm.wpChangeTags.value = HC.changeTag;
				}
			} else {
				commitForm.wpAutoSummary.value = HC.changeTag;
			}
			if (changes === 1) {
				if (result.summary && result.summary.length > 0) {
					commitForm.wpSummary.value =
						(HC.changeTag ? '' : getMessage('messages-prefix')) +
						result.summary.join(getMessage('messages-separator')) +
						(HC.changeTag ? '' : getMessage('messages-using'));
				}
				commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
			} else if (changes) {
				let summary = [];
				const shortSummary = [];
				// Deleted
				for (i = 0; i < deleted.length; i++) {
					summary[summary.length] = `−${getMessage('messages-short_catchange', deleted[i])}`;
				}
				if (deleted.length === 1) {
					shortSummary[shortSummary.length] = `−${getMessage('messages-short_catchange', deleted[0])}`;
				} else if (deleted.length > 0) {
					shortSummary[shortSummary.length] = `− ${multiChangeMsg(deleted.length)}`;
				}
				// Added
				for (i = 0; i < added.length; i++) {
					summary[summary.length] = `+${getMessage('messages-short_catchange', added[i])}`;
				}
				if (added.length === 1) {
					shortSummary[shortSummary.length] = `+${getMessage('messages-short_catchange', added[0])}`;
				} else if (added.length > 0) {
					shortSummary[shortSummary.length] = `+ ${multiChangeMsg(added.length)}`;
				}
				// Changed
				const arrow = is_rtl ? '\u2190' : '\u2192'; // left and right arrows. Don't use ← and → in the code.
				for (i = 0; i < changed.length; i++) {
					if (changed[i].from === changed[i].to) {
						summary[summary.length] = `±${getMessage('messages-short_catchange', changed[i].from)}`;
					} else {
						summary[summary.length] =
							`±${getMessage('messages-short_catchange', changed[i].from)}${arrow}${getMessage(
								'messages-short_catchange',
								changed[i].to
							)}`;
					}
				}
				if (changed.length === 1) {
					if (changed[0].from === changed[0].to) {
						shortSummary[shortSummary.length] =
							`±${getMessage('messages-short_catchange', changed[0].from)}`;
					} else {
						shortSummary[shortSummary.length] =
							`±${getMessage('messages-short_catchange', changed[0].from)}${arrow}${getMessage(
								'messages-short_catchange',
								changed[0].to
							)}`;
					}
				} else if (changed.length > 0) {
					shortSummary[shortSummary.length] = `± ${multiChangeMsg(changed.length)}`;
				}
				if (summary.length > 0) {
					summary = summary.join(getMessage('messages-separator'));
					if (
						summary.length >
						200 -
							(HC.changeTag ? '' : getMessage('messages-prefix')).length -
							(HC.changeTag ? '' : getMessage('messages-using')).length
					) {
						summary = shortSummary.join(getMessage('messages-separator'));
					}
					commitForm.wpSummary.value =
						(HC.changeTag ? '' : getMessage('messages-prefix')) +
						summary +
						(HC.changeTag ? '' : getMessage('messages-using'));
				}
			}
		}
		commitForm.wpTextbox1.value = result.text;
		commitForm.wpStarttime.value = serverTime || currentTimestamp();
		commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
		if (selfEditConflict) {
			commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
		}
		// Submit the form in a way that triggers onsubmit events: commitForm.submit() doesn't.
		commitForm.hcCommit.click();
	};
	const resolveOne = (page, toResolve) => {
		const cats = page.categories;
		const {links} = page;
		let is_dab = false; // Hard redirect?
		let is_redir = typeof page.redirect === 'string';
		let i;
		const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === 'string';
		const is_missing = typeof page.missing === 'string';
		for (i = 0; i < toResolve.length; i++) {
			if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(':') + 1))) {
				continue;
			}
			// Note: the server returns in page an NFC normalized Unicode title. If our input was not NFC normalized, we may not find
			// any entry here. If we have only one editor to resolve (the most common case, I presume), we may simply skip the check.
			toResolve[i].currentHidden = is_hidden;
			toResolve[i].inputExists = !is_missing;
			toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
		}
		if (is_missing) {
			return;
		}
		if (!is_redir && cats && (getMessage('disambig_category') || getMessage('redir_category'))) {
			for (const cat_ of cats) {
				let cat = cat_.title;
				// Strip namespace prefix
				if (cat) {
					cat = cat.slice(Math.max(0, cat.indexOf(':') + 1)).replace(/_/g, ' ');
					if (cat === getMessage('disambig_category')) {
						is_dab = true;
						break;
					} else if (cat === getMessage('redir_category')) {
						is_redir = true;
						break;
					}
				}
			}
		}
		if (!is_redir && !is_dab) {
			return;
		}
		if (!links || links.length === 0) {
			return;
		}
		const titles = [];
		for (i = 0; i < links.length; i++) {
			if (
				// Category namespace -- always true since we ask only for the category links
				links[i].ns === 14 &&
				// Name not empty
				links[i].title &&
				links[i].title.length > 0
			) {
				// Internal link to existing thingy. Extract the page name and remove the namespace.
				let match = links[i].title;
				match = match.slice(Math.max(0, match.indexOf(':') + 1));
				// Exclude blacklisted categories.
				if (!HC.blacklist || !HC.blacklist.test(match)) {
					titles[titles.length] = match;
				}
			}
		}
		if (titles.length === 0) {
			return;
		}
		for (i = 0; i < toResolve.length; i++) {
			if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(':') + 1))) {
				continue;
			}
			toResolve[i].inputExists = true; // Might actually be wrong if it's a redirect pointing to a non-existing category
			toResolve[i].icon.src = HC.existsYes;
			if (titles.length > 1) {
				toResolve[i].dab = titles;
			} else {
				toResolve[i].text.value =
					titles[0] + (toResolve[i].currentKey === null ? '' : `|${toResolve[i].currentKey}`);
			}
		}
	};
	const resolveRedirects = (toResolve, params) => {
		if (!params || !params.query || !params.query.pages) {
			return;
		}
		for (const p in params.query.pages) {
			if (!Object.hasOwn(params.query.pages, p)) {
				continue;
			}
			resolveOne(params.query.pages[p], toResolve);
		}
	};
	const resolveMulti = (toResolve, callback) => {
		let i;
		for (i = 0; i < toResolve.length; i++) {
			toResolve[i].dab = null;
			toResolve[i].dabInput = toResolve[i].lastInput;
		}
		if (noSuggestions) {
			callback(toResolve);
			return;
		}
		const params = {
			action: 'query',
			format: 'json',
			prop: 'info|links|categories|categoryinfo',
			plnamespace: '14',
			pllimit: toResolve.length * 10,
			cllimit: toResolve.length * 10,
		};
		const titles = [];
		for (i = 0; i < toResolve.length; i++) {
			let v = toResolve[i].dabInput;
			v = replaceShortcuts(v, HC.shortcuts);
			toResolve[i].dabInputCleaned = v;
			titles[titles.length] = `Category:${v}`;
		}
		params.titles = titles.join('|');
		api.get(params)
			.done((json) => {
				resolveRedirects(toResolve, json);
				callback(toResolve);
			})
			.fail((req) => {
				if (!req) {
					noSuggestions = true;
				}
				callback(toResolve);
			});
	};
	const makeActive = (which) => {
		if (which.is_active) {
			return;
		}
		for (const editor of editors) {
			if (editor !== which) {
				editor.inactivate();
			}
		}
		which.is_active = true;
		if (which.dab) {
			showDab(which);
		} else {
			// Check for programmatic value changes.
			const expectedInput = which.lastRealInput || which.lastInput || '';
			const actualValue = which.text.value || '';
			if (
				(expectedInput.length === 0 && actualValue.length > 0) ||
				(expectedInput.length > 0 && actualValue.indexOf(expectedInput))
			) {
				// Somehow the field's value appears to have changed, and which.lastSelection therefore is no longer valid. Try to set the
				// cursor at the end of the category, and do not display the old suggestion list.
				which.showsList = false;
				const v = actualValue.split('|');
				[which.lastInput] = v;
				which.lastRealInput = which.lastInput;
				if (v.length > 1) {
					[, which.currentKey] = v;
				}
				if (which.lastSelection) {
					which.lastSelection = {
						start: v[0].length,
						end: v[0].length,
					};
				}
			}
			if (which.showsList) {
				which.displayList();
			}
			if (which.lastSelection) {
				setTimeout(() => {
					which.setSelection(which.lastSelection.start, which.lastSelection.end);
				}, 0);
			}
		}
	};
	const showDab = (which) => {
		if (which.is_active) {
			which.showSuggestions(which.dab, false, null, null); // do autocompletion, no key, no engine selector
			which.dab = null;
		} else {
			makeActive(which);
		}
	};
	const multiSubmit = () => {
		const toResolve = [];
		for (const editor of editors) {
			if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
				toResolve[toResolve.length] = editor;
			}
		}
		if (toResolve.length === 0) {
			initiateEdit(
				(failure) => {
					performChanges(failure);
				},
				(msg) => {
					mw.notify(msg, {tag: 'hotCat'});
				}
			);
			return;
		}
		resolveMulti(toResolve, (resolved) => {
			let firstDab = null;
			let dontChange = false;
			for (const element of resolved) {
				if (element.lastInput === element.dabInput) {
					if (element.dab) {
						if (!firstDab) {
							firstDab = element;
						}
					} else if (element.acceptCheck(true)) {
						element.commit();
					}
				} else {
					// We didn't disable all the open editors, but we did asynchronous calls. It is
					// theoretically possible that the user changed something...
					dontChange = true;
				}
			}
			if (firstDab) {
				showDab(firstDab);
			} else if (!dontChange) {
				initiateEdit(
					(failure) => {
						performChanges(failure);
					},
					(msg) => {
						mw.notify(msg, {tag: 'hotCat'});
					}
				);
			}
		});
	};
	const setMultiInput = () => {
		if (commitButton || onUpload) {
			return;
		}
		commitButton = make('input');
		commitButton.type = 'button';
		commitButton.value = getMessage('messages-commit');
		commitButton.addEventListener('click', multiSubmit);
		if (multiSpan) {
			multiSpan.parentNode.replaceChild(commitButton, multiSpan);
		} else {
			catLine.append(commitButton);
		}
	};
	const checkMultiInput = () => {
		if (!commitButton) {
			return;
		}
		let hasChanges = false;
		for (const editor of editors) {
			if (editor.state !== UNCHANGED) {
				hasChanges = true;
				break;
			}
		}
		commitButton.disabled = !hasChanges;
	};
	const suggestionEngines = {
		opensearch: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1`,
			// $1 = search term
			// Function to convert result of uri into an array of category names
			handler: (queryResult, queryKey) => {
				if (queryResult && queryResult.length >= 2) {
					const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(':') + 1));
					const [, titles] = queryResult;
					let exists = false;
					if (!cat_prefix) {
						cat_prefix = new RegExp(`^(${HC.category_regexp}):`);
					}
					for (let i = 0; i < titles.length; i++) {
						cat_prefix.lastIndex = 0;
						const m = cat_prefix.exec(titles[i]);
						if (m && m.length > 1) {
							titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(':') + 1)); // rm namespace
							if (key === titles[i]) {
								exists = true;
							}
						} else {
							titles.splice(i, 1); // Nope, it's not a category after all.
							i--;
						}
					}
					titles.exists = exists;
					if (queryKey !== key) {
						titles.normalized = key;
					}
					// Remember the NFC normalized key we got back from the server
					return titles;
				}
				return null;
			},
		},
		internalsearch: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1`,
			handler: (queryResult) => {
				if (queryResult && queryResult.query && queryResult.query.allpages) {
					const titles = queryResult.query.allpages;
					for (let i = 0; i < titles.length; i++) {
						titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(':') + 1));
					} // rm namespace
					return titles;
				}
				return null;
			},
		},
		exists: {
			uri: `${mw.config.get('wgScriptPath')}/api.php?format=json&action=query&prop=info&titles=Category:$1`,
			handler: (queryResult, queryKey) => {
				if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
					// Should have exactly 1
					for (const p in queryResult.query.pages) {
						if (!Object.hasOwn(queryResult.query.pages, p)) {
							continue;
						}
						let _title = queryResult.query.pages[p].title;
						_title = _title.slice(Math.max(0, _title.indexOf(':') + 1));
						const titles = [_title];
						titles.exists = true;
						if (queryKey !== _title) {
							titles.normalized = _title;
						}
						// NFC
						return titles;
					}
				}
				return null;
			},
		},
		subcategories: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1`,
			handler: (queryResult) => {
				if (queryResult && queryResult.query && queryResult.query.categorymembers) {
					const titles = queryResult.query.categorymembers;
					for (let i = 0; i < titles.length; i++) {
						titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(':') + 1));
					} // rm namespace
					return titles;
				}
				return null;
			},
		},
		parentcategories: {
			uri: `${mw.config.get(
				'wgScriptPath'
			)}/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max`,
			handler: (queryResult) => {
				if (queryResult && queryResult.query && queryResult.query.pages) {
					for (const p in queryResult.query.pages) {
						if (queryResult.query.pages[p].categories) {
							const titles = queryResult.query.pages[p].categories;
							for (let i = 0; i < titles.length; i++) {
								titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(':') + 1));
							} // rm namespace
							return titles;
						}
					}
				}
				return null;
			},
		},
	};
	const suggestionConfigs = {
		searchindex: {
			name: 'Search index',
			engines: ['opensearch'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		pagelist: {
			name: 'Page list',
			engines: ['internalsearch', 'exists'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		combined: {
			name: 'Combined search',
			engines: ['opensearch', 'internalsearch'],
			cache: {},
			show: true,
			temp: false,
			noCompletion: false,
		},
		subcat: {
			name: 'Subcategories',
			engines: ['subcategories'],
			cache: {},
			show: true,
			temp: true,
			noCompletion: true,
		},
		parentcat: {
			name: 'Parent categories',
			engines: ['parentcategories'],
			cache: {},
			show: true,
			temp: true,
			noCompletion: true,
		},
	};
	// Event keyCodes that we handle in the text input field/suggestion list.
	const BS = 8;
	const TAB = 9;
	const RET = 13;
	const ESC = 27;
	const SPACE = 32;
	const PGUP = 33;
	const PGDOWN = 34;
	const UP = 38;
	const DOWN = 40;
	const DEL = 46;
	const IME = 229;
	class CategoryEditor {
		constructor(...args) {
			this.initialize(...args);
		}
		initialize(line, span, after, key, is_hidden) {
			// If a span is given, 'after' is the category title, otherwise it may be an element after which to
			// insert the new span. 'key' is likewise overloaded; if a span is given, it is the category key (if
			// known), otherwise it is a boolean indicating whether a bar shall be prepended.
			if (span) {
				if (is_rtl) {
					span.dir = 'rtl';
				}
				this.isAddCategory = false;
				this.catLink = span.firstChild;
				this.originalCategory = after;
				this.originalKey = key && key.length > 1 ? key.slice(1) : null; // > 1 because it includes the leading bar
				this.originalExists = !hasClass(this.catLink, 'new');
				// Create change and del links
				this.makeLinkSpan();
				if (!this.originalExists && this.upDownLinks) {
					this.upDownLinks.style.display = 'none';
				}
				span.append(this.linkSpan);
			} else {
				this.isAddCategory = true;
				// Create add span and append to catLinks
				this.originalCategory = '';
				this.originalKey = null;
				this.originalExists = false;
				if (!newDOM) {
					span = make('span');
					span.className = 'noprint';
					if (key) {
						span.append(make(' | ', true));
						if (after) {
							after.parentNode.insertBefore(span, after.nextSibling);
							after = after.nextSibling;
						} else if (line) {
							line.append(span);
						}
					} else if (line && line.firstChild) {
						span.append(make(' ', true));
						line.append(span);
					}
				}
				this.linkSpan = make('span');
				this.linkSpan.className = 'noprint nopopups hotcatlink';
				const link = make('a');
				link.href = '#catlinks';
				link.addEventListener('click', this.open.bind(this));
				link.append(make(HC.links.add, true));
				link.title = getMessage('tooltips-add');
				this.linkSpan.append(link);
				span = make(newDOM ? 'li' : 'span');
				span.className = 'noprint';
				if (is_rtl) {
					span.dir = 'rtl';
				}
				span.append(this.linkSpan);
				if (after) {
					after.parentNode.insertBefore(span, after.nextSibling);
				} else if (line) {
					line.append(span);
				}
				this.normalLinks = null;
				this.undelLink = null;
				this.catLink = null;
			}
			this.originalHidden = is_hidden;
			this.line = line;
			this.engine = HC.suggestions;
			this.span = span;
			this.currentCategory = this.originalCategory;
			this.currentExists = this.originalExists;
			this.currentHidden = this.originalHidden;
			this.currentKey = this.originalKey;
			this.state = UNCHANGED;
			this.lastSavedState = UNCHANGED;
			this.lastSavedCategory = this.originalCategory;
			this.lastSavedKey = this.originalKey;
			this.lastSavedExists = this.originalExists;
			this.lastSavedHidden = this.originalHidden;
			if (this.catLink && this.currentKey) {
				this.catLink.title = this.currentKey;
			}
			editors[editors.length] = this;
		}
		makeLinkSpan() {
			this.normalLinks = make('span');
			let link = null;
			if (this.originalCategory && this.originalCategory.length > 0) {
				link = make('a');
				link.href = '#catlinks';
				link.addEventListener('click', this.remove.bind(this));
				link.append(make(HC.links.remove, true));
				link.title = getMessage('tooltips-remove');
				this.normalLinks.append(make(' ', true));
				this.normalLinks.append(link);
			}
			if (!HC.template_categories[this.originalCategory]) {
				link = make('a');
				link.href = '#catlinks';
				link.addEventListener('click', this.open.bind(this));
				link.append(make(HC.links.change, true));
				link.title = getMessage('tooltips-change');
				this.normalLinks.append(make(' ', true));
				this.normalLinks.append(link);
				if (!noSuggestions && HC.use_up_down) {
					this.upDownLinks = make('span');
					link = make('a');
					link.href = '#catlinks';
					link.addEventListener('click', this.down.bind(this));
					link.append(make(HC.links.down, true));
					link.title = getMessage('tooltips-down');
					this.upDownLinks.append(make(' ', true));
					this.upDownLinks.append(link);
					link = make('a');
					link.href = '#catlinks';
					link.addEventListener('click', this.up.bind(this));
					link.append(make(HC.links.up, true));
					link.title = getMessage('tooltips-up');
					this.upDownLinks.append(make(' ', true));
					this.upDownLinks.append(link);
					this.normalLinks.append(this.upDownLinks);
				}
			}
			this.linkSpan = make('span');
			this.linkSpan.className = 'noprint nopopups hotcatlink';
			this.linkSpan.append(this.normalLinks);
			this.undelLink = make('span');
			this.undelLink.className = 'nopopups hotcatlink';
			this.undelLink.style.display = 'none';
			link = make('a');
			link.href = '#catlinks';
			link.addEventListener('click', this.restore.bind(this));
			link.append(make(HC.links.restore, true));
			link.title = getMessage('tooltips-restore');
			this.undelLink.append(make(' ', true));
			this.undelLink.append(link);
			this.linkSpan.append(this.undelLink);
		}
		invokeSuggestions(dont_autocomplete) {
			if (
				this.engine &&
				suggestionConfigs[this.engine] &&
				suggestionConfigs[this.engine].temp &&
				!dont_autocomplete
			) {
				this.engine = HC.suggestions;
			} // Reset to a search upon input
			this.state = CHANGE_PENDING;
			const self = this;
			setTimeout(() => {
				self.textchange(dont_autocomplete);
			}, HC.suggest_delay);
		}
		makeForm() {
			const form = make('form');
			form.method = 'POST';
			form.addEventListener('submit', this.accept.bind(this));
			this.form = form;
			const self = this;
			const text = make('input');
			text.type = 'text';
			text.size = HC.editbox_width;
			if (!noSuggestions) {
				// Be careful here to handle IME input. This is browser/OS/IME dependent, but basically there are two mechanisms:
				// - Modern (DOM Level 3) browsers use compositionstart/compositionend events to signal composition; if the
				//   composition is not canceled, there'll be a textInput event following. During a composition key events are
				//   either all suppressed (FF/Gecko), or otherwise have keyDown === IME for all keys (Webkit).
				//   - Webkit sends a textInput followed by keyDown === IME and a keyUp with the key that ended composition.
				//   - Gecko doesn't send textInput but just a keyUp with the key that ended composition, without sending keyDown
				//	 first. Gecko doesn't send any keydown while IME is active.
				// - Older browsers signal composition by keyDown === IME for the first and subsequent keys for a composition. The
				//   first keyDown !== IME is certainly after the end of the composition. Typically, composition end can also be
				//   detected by a keyDown IME with a keyUp of space, tab, escape, or return.
				text.addEventListener('keyup', (event) => {
					const key = event.key || 0;
					if (
						self.ime &&
						self.lastKey === IME &&
						!self.usesComposition &&
						(key === TAB || key === RET || key === ESC || key === SPACE)
					) {
						self.ime = false;
					}
					if (self.ime) {
						return true;
					}
					if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
						// In case a browser doesn't generate keypress events for arrow keys...
						if (self.keyCount === 0) {
							return self.processKey(event);
						}
					} else {
						if (key === ESC && self.lastKey !== IME && !self.resetKeySelection()) {
							// No undo of key selection: treat ESC as "cancel".
							self.cancel();
							return;
						}
						// Also do this for ESC as a workaround for Firefox bug 524360
						// {@link https://bugzilla.mozilla.org/show_bug.cgi?id=524360}
						self.invokeSuggestions(key === BS || key === DEL || key === ESC);
					}
					return true;
				});
				text.addEventListener('keydown', (event) => {
					const key = event.key || 0;
					self.lastKey = key;
					self.keyCount = 0;
					// DOM Level < 3 IME input
					if (!self.ime && key === IME && !self.usesComposition) {
						// self.usesComposition catches browsers that may emit spurious keydown IME after a composition has ended
						self.ime = true;
					} else if (
						self.ime &&
						key !== IME &&
						!((key >= 16 && key <= 20) || (key >= 91 && key <= 93) || key === 144)
					) {
						// Ignore control keys: ctrl, shift, alt, alt gr, caps lock, windows/apple cmd keys, num lock. Only the windows keys
						// terminate IME (apple cmd doesn't), but they also cause a blur, so it's OK to ignore them here.
						// Note: Safari 4 (530.17) propagates ESC out of an IME composition (observed at least on Win XP).
						self.ime = false;
					}
					if (self.ime) {
						return true;
					}
					// Handle return explicitly, to override the default form submission to be able to check for ctrl
					if (key === RET) {
						return self.accept(event);
					}
					// Inhibit default behavior of ESC (revert to last real input in FF: we do that ourselves)
					return key === ESC ? evtKill(event) : true;
				});
				// And handle continued pressing of arrow keys
				text.addEventListener('keypress', (event) => {
					self.keyCount++;
					return self.processKey(event);
				});
				$(text).on('focus', () => {
					makeActive(self);
				});
				// On IE, blur events are asynchronous, and may thus arrive after the element has lost the focus. Since IE
				// can get the selection only while the element is active (has the focus), we may not always get the selection.
				// Therefore, use an IE-specific synchronous event on IE...
				// Don't test for text.selectionStart being defined;
				$(text).on(
					text.onbeforedeactivate !== undefined && text.createTextRange ? 'beforedeactivate' : 'blur',
					this.saveView.bind(this)
				);
				// DOM Level 3 IME handling
				try {
					// Setting lastKey = IME provides a fake keyDown for Gecko's single keyUp after a cmposition. If we didn't do this,
					// cancelling a composition via ESC would also cancel and close the whole category input editor.
					$(text).on('compositionstart', () => {
						self.lastKey = IME;
						self.usesComposition = true;
						self.ime = true;
					});
					$(text).on('compositionend', () => {
						self.lastKey = IME;
						self.usesComposition = true;
						self.ime = false;
					});
					$(text).on('textInput', () => {
						self.ime = false;
						self.invokeSuggestions(false);
					});
				} catch {
					// Just in case some browsers might produce exceptions with these DOM Level 3 events
				}
				$(text).on('blur', () => {
					self.usesComposition = false;
					self.ime = false;
				});
			}
			this.text = text;
			this.icon = make('img');
			let list = null;
			if (!noSuggestions) {
				list = make('select');
				list.addEventListener('click', () => {
					if (self.highlightSuggestion(0)) {
						self.textchange(false, true);
					}
				});
				list.addEventListener('dblclick', (e) => {
					if (self.highlightSuggestion(0)) {
						self.accept(e);
					}
				});
				list.addEventListener('change', () => {
					self.highlightSuggestion(0);
					self.text.focus();
				});
				list.addEventListener('keyup', (event) => {
					if (event.key === ESC) {
						self.resetKeySelection();
						self.text.focus();
						setTimeout(() => {
							self.textchange(true);
						}, HC.suggest_delay);
					} else if (event.key === RET) {
						self.accept(event);
					}
				});
				if (!HC.fixed_search) {
					const engineSelector = make('select');
					for (const key in suggestionConfigs) {
						if (suggestionConfigs[key].show) {
							const opt = make('option');
							opt.value = key;
							if (key === this.engine) {
								opt.selected = true;
							}
							opt.append(make(suggestionConfigs[key].name, true));
							engineSelector.append(opt);
						}
					}
					engineSelector.addEventListener('change', () => {
						self.engine = self.engineSelector.options[self.engineSelector.selectedIndex].value;
						self.text.focus();
						self.textchange(true, true); // Don't autocomplete, force re-display of list
					});
					this.engineSelector = engineSelector;
				}
			}
			this.list = list;
			const button_label = (_id, defaultText) => {
				const label = null;
				if (!label || !label.data) {
					return defaultText;
				}
				return label.data;
			};
			// Do not use type 'submit'; we cannot detect modifier keys if we do
			const OK = make('input');
			OK.type = 'button';
			OK.value = button_label('wpOkUploadLbl', getMessage('messages-ok'));
			OK.addEventListener('click', this.accept.bind(this));
			this.ok = OK;
			const cancel = make('input');
			cancel.type = 'button';
			cancel.value = button_label('wpCancelUploadLbl', getMessage('messages-cancel'));
			cancel.addEventListener('click', this.cancel.bind(this));
			this.cancelButton = cancel;
			const span = make('span');
			span.className = 'hotcatinput';
			span.style.position = 'relative';
			span.append(text);
			// Put some text into this span (a0 is nbsp) and make sure it always stays on the same
			// line as the input field, otherwise, IE8/9 miscalculates the height of the span and
			// then the engine selector may overlap the input field.
			span.append(make('\u00A0', true));
			span.style.whiteSpace = 'nowrap';
			if (list) {
				span.append(list);
			}
			if (this.engineSelector) {
				span.append(this.engineSelector);
			}
			if (!noSuggestions) {
				span.append(this.icon);
			}
			span.append(OK);
			span.append(cancel);
			form.append(span);
			form.style.display = 'none';
			this.span.append(form);
		}
		display(event) {
			if (this.isAddCategory && !onUpload && this.line) {
				new CategoryEditor(this.line, null, this.span, true); // Create a new one
			}
			if (!commitButton && !onUpload) {
				for (const editor of editors) {
					if (editor.state !== UNCHANGED) {
						setMultiInput();
						break;
					}
				}
			}
			if (!this.form) {
				this.makeForm();
			}
			if (this.list) {
				this.list.style.display = 'none';
			}
			if (this.engineSelector) {
				this.engineSelector.style.display = 'none';
			}
			this.currentCategory = this.lastSavedCategory;
			this.currentExists = this.lastSavedExists;
			this.currentHidden = this.lastSavedHidden;
			this.currentKey = this.lastSavedKey;
			this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
			this.text.value = this.currentCategory + (this.currentKey === null ? '' : `|${this.currentKey}`);
			this.originalState = this.state;
			this.lastInput = this.currentCategory;
			this.inputExists = this.currentExists;
			this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
			this.lastSelection = {
				start: this.currentCategory.length,
				end: this.currentCategory.length,
			};
			this.showsList = false;
			// Display the form
			if (this.catLink) {
				this.catLink.style.display = 'none';
			}
			this.linkSpan.style.display = 'none';
			this.form.style.display = 'inline';
			this.ok.disabled = false;
			// Kill the event before focussing, otherwise IE will kill the onfocus event!
			const result = evtKill(event);
			this.text.focus();
			this.text.readOnly = false;
			checkMultiInput();
			return result;
		}
		show(event, engine, readOnly) {
			const result = this.display(event);
			const v = this.lastSavedCategory;
			if (v.length === 0) {
				return result;
			}
			this.text.readOnly = !!readOnly;
			this.engine = engine;
			this.textchange(false, true); // do autocompletion, force display of suggestions
			return result;
		}
		open(event) {
			return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
		}
		down(event) {
			return this.show(event, 'subcat', true);
		}
		up(event) {
			return this.show(event, 'parentcat');
		}
		cancel() {
			if (this.isAddCategory && !onUpload) {
				this.removeEditor(); // We added a new adder when opening
				return;
			}
			// Close, re-display link
			this.inactivate();
			this.form.style.display = 'none';
			if (this.catLink) {
				this.catLink.style.display = '';
			}
			this.linkSpan.style.display = '';
			this.state = this.originalState;
			this.currentCategory = this.lastSavedCategory;
			this.currentKey = this.lastSavedKey;
			this.currentExists = this.lastSavedExists;
			this.currentHidden = this.lastSavedHidden;
			if (this.catLink) {
				this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : '';
			}
			if (this.state === UNCHANGED) {
				if (this.catLink) {
					this.catLink.style.backgroundColor = 'transparent';
				}
			} else if (!onUpload) {
				try {
					this.catLink.style.backgroundColor = HC.bg_changed;
				} catch {
					/* empty */
				}
			}
			checkMultiInput();
		}
		removeEditor() {
			if (!newDOM) {
				const next = this.span.nextSibling;
				if (next) {
					next.remove();
				}
			}
			if (this.span && this.span.parentNode) {
				this.span.remove();
			}
			for (let i = 0; i < editors.length; i++) {
				if (editors[i] === this) {
					editors.splice(i, 1);
					break;
				}
			}
			checkMultiInput();
		}
		rollback(event) {
			this.undoLink.remove();
			this.undoLink = null;
			this.currentCategory = this.originalCategory;
			this.currentKey = this.originalKey;
			this.currentExists = this.originalExists;
			this.currentHidden = this.originalHidden;
			this.lastSavedCategory = this.originalCategory;
			this.lastSavedKey = this.originalKey;
			this.lastSavedExists = this.originalExists;
			this.lastSavedHidden = this.originalHidden;
			this.state = UNCHANGED;
			if (!this.currentCategory || this.currentCategory.length === 0) {
				// It was a newly added category. Remove the whole editor.
				this.removeEditor();
			} else {
				// Redisplay the link...
				this.catLink.firstChild.remove();
				this.catLink.append(make(this.currentCategory, true));
				this.catLink.href = wikiPagePath(`${HC.category_canonical}:${this.currentCategory}`);
				this.catLink.title = this.currentKey || '';
				this.catLink.className = this.currentExists ? '' : 'new';
				this.catLink.style.backgroundColor = 'transparent';
				if (this.upDownLinks) {
					this.upDownLinks.style.display = this.currentExists ? '' : 'none';
				}
				checkMultiInput();
			}
			return evtKill(event);
		}
		inactivate() {
			if (this.list) {
				this.list.style.display = 'none';
			}
			if (this.engineSelector) {
				this.engineSelector.style.display = 'none';
			}
			this.is_active = false;
		}
		acceptCheck(dontCheck) {
			this.sanitizeInput();
			const value = this.text.value.split('|');
			let key = null;
			if (value.length > 1) {
				[, key] = value;
			}
			let v = value[0].replace(/_/g, ' ').trim();
			if (HC.capitalizePageNames) {
				v = capitalize(v);
			}
			this.lastInput = v;
			v = replaceShortcuts(v, HC.shortcuts);
			if (v.length === 0) {
				this.cancel();
				return false;
			}
			if (
				!dontCheck &&
				((conf.wgNamespaceNumber === 14 && v === conf.wgTitle) || (HC.blacklist && HC.blacklist.test(v)))
			) {
				this.cancel();
				return false;
			}
			this.currentCategory = v;
			this.currentKey = key;
			this.currentExists = this.inputExists;
			return true;
		}
		accept(event) {
			// (evtKeys(event) & 1) !== 0
			// 当且仅当evtKeys(event)为1时，整个判别式才为true
			this.noCommit = evtKeys(event) === 1;
			const result = evtKill(event);
			if (this.acceptCheck()) {
				const toResolve = [this];
				const original = this.currentCategory;
				resolveMulti(toResolve, (resolved) => {
					if (resolved[0].dab) {
						showDab(resolved[0]);
					} else if (resolved[0].acceptCheck(true)) {
						resolved[0].commit(
							resolved[0].currentCategory === original
								? null
								: getMessage('messages-cat_resolved', original)
						);
					}
				});
			}
			return result;
		}
		close() {
			if (!this.catLink) {
				// Create a catLink
				this.catLink = make('a');
				this.catLink.append(make('foo', true));
				this.catLink.style.display = 'none';
				this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
			}
			this.catLink.firstChild.remove();
			this.catLink.append(make(this.currentCategory, true));
			this.catLink.href = wikiPagePath(`${HC.category_canonical}:${this.currentCategory}`);
			this.catLink.className = this.currentExists ? '' : 'new';
			this.lastSavedCategory = this.currentCategory;
			this.lastSavedKey = this.currentKey;
			this.lastSavedExists = this.currentExists;
			this.lastSavedHidden = this.currentHidden;
			// Close form and redisplay category
			this.inactivate();
			this.form.style.display = 'none';
			this.catLink.title = this.currentKey || '';
			this.catLink.style.display = '';
			if (this.isAddCategory) {
				if (onUpload && this.line) {
					new CategoryEditor(this.line, null, this.span, true); // Create a new one
				}
				this.isAddCategory = false;
				this.linkSpan.remove();
				this.makeLinkSpan();
				this.span.append(this.linkSpan);
			}
			if (!this.undoLink) {
				// Append an undo link.
				const span = make('span');
				const link = make('a');
				link.href = '#catlinks';
				link.addEventListener('click', this.rollback.bind(this));
				link.append(make(HC.links.undo, true));
				link.title = getMessage('tooltips-undo');
				span.append(make(' ', true));
				span.append(link);
				this.normalLinks.append(span);
				this.undoLink = span;
				if (!onUpload) {
					try {
						this.catLink.style.backgroundColor = HC.bg_changed;
					} catch {
						/* empty */
					}
				}
			}
			if (this.upDownLinks) {
				this.upDownLinks.style.display = this.lastSavedExists ? '' : 'none';
			}
			this.linkSpan.style.display = '';
			this.state = CHANGED;
			checkMultiInput();
		}
		commit() {
			// Check again to catch problem cases after redirect resolution
			if (
				(this.currentCategory === this.originalCategory &&
					(this.currentKey === this.originalKey ||
						(this.currentKey === null && this.originalKey.length === 0))) ||
				(conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle) ||
				(HC.blacklist && HC.blacklist.test(this.currentCategory))
			) {
				this.cancel();
				return;
			}
			this.close();
			if (!commitButton && !onUpload) {
				const self = this;
				initiateEdit(
					(failure) => {
						performChanges(failure, self);
					},
					(msg) => {
						mw.notify(msg, {tag: 'hotCat'});
					}
				);
			}
		}
		remove(event) {
			// (evtKeys(event) & 1)
			// 当且仅当evtKeys(event)为1时，整个判别式才为1，否则都是0
			this.doRemove(evtKeys(event) === 1);
			return evtKill(event);
		}
		doRemove(noCommit) {
			if (this.isAddCategory) {
				// Empty input on adding a new category
				this.cancel();
				return;
			}
			if (!commitButton && !onUpload) {
				for (const editor of editors) {
					if (editor.state !== UNCHANGED) {
						setMultiInput();
						break;
					}
				}
			}
			if (commitButton) {
				this.catLink.title = '';
				this.catLink.style.cssText += '; text-decoration : line-through !important;';
				try {
					this.catLink.style.backgroundColor = HC.bg_changed;
				} catch {
					/* empty */
				}
				this.originalState = this.state;
				this.state = DELETED;
				this.normalLinks.style.display = 'none';
				this.undelLink.style.display = '';
				checkMultiInput();
			} else if (onUpload) {
				// Remove this editor completely
				this.removeEditor();
			} else {
				this.originalState = this.state;
				this.state = DELETED;
				this.noCommit = noCommit || HC.del_needs_diff;
				const self = this;
				initiateEdit(
					(failure) => {
						performChanges(failure, self);
					},
					(msg) => {
						self.state = self.originalState;
						mw.notify(msg, {tag: 'hotCat'});
					}
				);
			}
		}
		restore(event) {
			// Can occur only if we do have a commit button and are not on the upload form
			this.catLink.title = this.currentKey || '';
			this.catLink.style.textDecoration = '';
			this.state = this.originalState;
			if (this.state === UNCHANGED) {
				this.catLink.style.backgroundColor = 'transparent';
			} else {
				try {
					this.catLink.style.backgroundColor = HC.bg_changed;
				} catch {
					/* empty */
				}
			}
			this.normalLinks.style.display = '';
			this.undelLink.style.display = 'none';
			checkMultiInput();
			return evtKill(event);
		}
		// Internal operations
		selectEngine(engineName) {
			if (!this.engineSelector) {
				return;
			}
			for (let i = 0; i < this.engineSelector.options.length; i++) {
				this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
			}
		}
		sanitizeInput() {
			let v = this.text.value || '';
			v = v.replace(/^(\s|_)+/, ''); // Trim leading blanks and underscores
			const re = new RegExp(`^(${HC.category_regexp}):`);
			if (re.test(v)) {
				v = v.slice(Math.max(0, v.indexOf(':') + 1)).replace(/^(\s|_)+/, '');
			}
			v = v.replace(/\u200E$/, ''); // Trim ending left-to-right mark
			if (HC.capitalizePageNames) {
				v = capitalize(v);
			}
			// Only update the input field if there is a difference. Various browsers otherwise
			// reset the selection and cursor position after each value re-assignment.
			if (this.text.value !== null && this.text.value !== v) {
				this.text.value = v;
			}
		}
		makeCall(url, callbackObj, engine, queryKey, cleanKey) {
			let cb = callbackObj;
			const e = engine;
			const v = queryKey;
			const z = cleanKey;
			const self = this;
			const done = () => {
				cb.callsMade++;
				if (cb.callsMade === cb.nofCalls) {
					if (cb.exists) {
						cb.allTitles.exists = true;
					}
					if (cb.normalized) {
						cb.allTitles.normalized = cb.normalized;
					}
					if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
						suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
					}
					self.text.readOnly = false;
					if (!cb.cancelled) {
						self.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
					}
					if (cb === self.callbackObj) {
						self.callbackObj = null;
					}
					cb = undefined;
				}
			};
			$.getJSON(url, (json) => {
				const titles = e.handler(json, z);
				if (titles && titles.length > 0) {
					cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...generateArray(titles)];
					if (titles.exists) {
						cb.exists = true;
					}
					if (titles.normalized) {
						cb.normalized = titles.normalized;
					}
				}
				done();
			}).fail((req) => {
				if (!req) {
					noSuggestions = true;
				}
				cb.dontCache = true;
				done();
			});
		}
		callbackObj = null;
		textchange(dont_autocomplete, force) {
			// Hide all other lists
			makeActive(this);
			// Get input value, omit sort key, if any
			this.sanitizeInput();
			let v = this.text.value;
			// Disregard anything after a pipe.
			const pipe = v.indexOf('|');
			if (pipe >= 0) {
				this.currentKey = v.slice(Math.max(0, pipe + 1));
				v = v.slice(0, Math.max(0, pipe));
			} else {
				this.currentKey = null;
			}
			if (this.lastInput === v && !force) {
				return;
			} // No change
			if (this.lastInput !== v) {
				checkMultiInput();
			}
			this.lastInput = v;
			this.lastRealInput = v;
			// Mark blacklisted inputs.
			this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
			if (noSuggestions) {
				// No Ajax: just make sure the list is hidden
				if (this.list) {
					this.list.style.display = 'none';
				}
				if (this.engineSelector) {
					this.engineSelector.style.display = 'none';
				}
				if (this.icon) {
					this.icon.style.display = 'none';
				}
				return;
			}
			if (v.length === 0) {
				this.showSuggestions([]);
				return;
			}
			let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, '').replace(wikiTextBlankRE, ' ');
			cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
			cleanKey = cleanKey.trim();
			if (cleanKey.length === 0) {
				this.showSuggestions([]);
				return;
			}
			if (this.callbackObj) {
				this.callbackObj.cancelled = true;
			}
			const engineName = suggestionConfigs[this.engine] ? this.engine : 'combined';
			dont_autocomplete ||= suggestionConfigs[engineName].noCompletion;
			if (suggestionConfigs[engineName].cache[cleanKey]) {
				this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
				return;
			}
			const {engines} = suggestionConfigs[engineName];
			this.callbackObj = {
				allTitles: null,
				callsMade: 0,
				nofCalls: engines.length,
				noCompletion: dont_autocomplete,
				engineName,
			};
			this.makeCalls(engines, this.callbackObj, v, cleanKey);
		}
		makeCalls(engines, cb, v, cleanKey) {
			for (const engine_ of engines) {
				const engine = suggestionEngines[engine_];
				const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
				this.makeCall(url, cb, engine, v, cleanKey);
			}
		}
		showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
			this.text.readOnly = false;
			this.dab = null;
			this.showsList = false;
			if (!this.list) {
				return;
			}
			if (noSuggestions) {
				if (this.list) {
					this.list.style.display = 'none';
				}
				if (this.engineSelector) {
					this.engineSelector.style.display = 'none';
				}
				if (this.icon) {
					this.icon.style.display = 'none';
				}
				this.inputExists = true; // Default...
				return;
			}
			this.engineName = engineName;
			if (engineName) {
				if (!this.engineSelector) {
					this.engineName = null;
				}
			} else if (this.engineSelector) {
				this.engineSelector.style.display = 'none';
			}
			if (queryKey) {
				if (this.lastInput.indexOf(queryKey)) {
					return;
				}
				if (
					this.lastQuery &&
					this.lastInput.indexOf(this.lastQuery) === 0 &&
					this.lastQuery.length > queryKey.length
				) {
					return;
				}
			}
			this.lastQuery = queryKey;
			// Get current input text
			let v = this.text.value.split('|');
			const key = v.length > 1 ? `|${v[1]}` : '';
			v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
			let vNormalized = v;
			const knownToExist = titles && titles.exists;
			let i;
			if (titles) {
				if (titles.normalized && v.indexOf(queryKey) === 0) {
					// We got back a different normalization than what is in the input field
					vNormalized = titles.normalized + v.slice(queryKey.length);
				}
				const vLow = vNormalized.toLowerCase();
				// Strip blacklisted categories
				if (HC.blacklist) {
					for (i = 0; i < titles.length; i++) {
						if (HC.blacklist.test(titles[i])) {
							titles.splice(i, 1);
							i--;
						}
					}
				}
				titles.sort((a, b) => {
					if (a === b) {
						return 0;
					}
					if (a.indexOf(b) === 0) {
						return 1;
					}
					// a begins with b: a > b
					if (b.indexOf(a) === 0) {
						return -1;
					}
					// b begins with a: a < b
					// Opensearch may return stuff not beginning with the search prefix!
					let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
					let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
					if (prefixMatchA !== prefixMatchB) {
						return prefixMatchB - prefixMatchA;
					}
					// Case-insensitive prefix match!
					const aLow = a.toLowerCase();
					const bLow = b.toLowerCase();
					prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
					prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
					if (prefixMatchA !== prefixMatchB) {
						return prefixMatchB - prefixMatchA;
					}
					if (a < b) {
						return -1;
					}
					if (b < a) {
						return 1;
					}
					return 0;
				});
				// Remove duplicates and self-references
				for (i = 0; i < titles.length; i++) {
					if (
						(i + 1 < titles.length && titles[i] === titles[i + 1]) ||
						(conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle)
					) {
						titles.splice(i, 1);
						i--;
					}
				}
			}
			if (!titles || titles.length === 0) {
				if (this.list) {
					this.list.style.display = 'none';
				}
				if (this.engineSelector) {
					this.engineSelector.style.display = 'none';
				}
				if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
					if (this.icon) {
						this.icon.src = HC.existsNo;
					}
					this.inputExists = false;
				}
				return;
			}
			const [firstTitle] = titles;
			const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
			const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
			if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
				this.icon.src = existing ? HC.existsYes : HC.existsNo;
				this.inputExists = existing;
			}
			if (completed) {
				this.lastInput = firstTitle;
				if (titles.length === 1) {
					this.list.style.display = 'none';
					if (this.engineSelector) {
						this.engineSelector.style.display = 'none';
					}
					return;
				}
			}
			// (Re-)fill the list
			while (this.list.firstChild) {
				this.list.firstChild.remove();
			}
			for (i = 0; i < titles.length; i++) {
				const opt = make('option');
				opt.append(make(titles[i], true));
				opt.selected = completed && i === 0;
				this.list.append(opt);
			}
			this.displayList();
		}
		displayList() {
			this.showsList = true;
			if (!this.is_active) {
				this.list.style.display = 'none';
				if (this.engineSelector) {
					this.engineSelector.style.display = 'none';
				}
				return;
			}
			let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
			if (nofItems <= 1) {
				nofItems = 2;
			}
			this.list.size = nofItems;
			this.list.style.align = is_rtl ? 'right' : 'left';
			this.list.style.zIndex = 5;
			this.list.style.position = 'absolute';
			// Compute initial list position. First the height.
			const anchor = is_rtl ? 'right' : 'left';
			let listh = 0;
			if (this.list.style.display === 'none') {
				// Off-screen display to get the height
				this.list.style.top = `${this.text.offsetTop}px`;
				this.list.style[anchor] = '-10000px';
				this.list.style.display = '';
				listh = this.list.offsetHeight;
				this.list.style.display = 'none';
			} else {
				listh = this.list.offsetHeight;
			}
			// Approximate calculation of maximum list size
			let maxListHeight = listh;
			if (nofItems < HC.listSize) {
				maxListHeight = (listh / nofItems) * HC.listSize;
			}
			const viewport = (what) => {
				if (is_webkit && !document.evaluate) {
					// Safari < 3.0
					return window[`inner${what}`];
				}
				const s = `client${what}`;
				if (window.opera) {
					return $('body')[0][s];
				}
				return (document.documentElement ? document.documentElement[s] : 0) || $('body')[0][s] || 0;
			};
			const scroll_offset = (what) => {
				const s = `scroll${what}`;
				let result = (document.documentElement ? document.documentElement[s] : 0) || $('body')[0][s] || 0;
				if (is_rtl && what === 'Left') {
					// RTL inconsistencies.
					// FF: 0 at the far right, then increasingly negative values.
					// IE >= 8: 0 at the far right, then increasingly positive values.
					// Webkit: scrollWidth - clientWidth at the far right, then down to zero.
					// Opera: don't know...
					if (result < 0) {
						result = -result;
					}
					if (!is_webkit) {
						result = scroll_offset('Width') - viewport('Width') - result;
					}
					// Now all have webkit behavior, i.e. zero if at the leftmost edge.
				}
				return result;
			};
			const position = (node) => {
				// Stripped-down simplified position function. It's good enough for our purposes.
				if (node.getBoundingClientRect) {
					const box = node.getBoundingClientRect();
					return {
						x: Math.round(box.left + scroll_offset('Left')),
						y: Math.round(box.top + scroll_offset('Top')),
					};
				}
				let t = 0;
				let l = 0;
				do {
					t += node.offsetTop || 0;
					l += node.offsetLeft || 0;
					node = node.offsetParent;
				} while (node);
				return {
					x: l,
					y: t,
				};
			};
			const textPos = position(this.text);
			const nl = 0;
			let nt = 0;
			// Opera 9.5 somehow has offsetWidth = 0 here?? Use the next best value...
			let offset = 0;
			const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
			if (this.engineName) {
				this.engineSelector.style.zIndex = 5;
				this.engineSelector.style.position = 'absolute';
				this.engineSelector.style.width = `${textBoxWidth}px`;
				// Figure out the height of this selector: display it off-screen, then hide it again.
				if (this.engineSelector.style.display === 'none') {
					this.engineSelector.style[anchor] = '-10000px';
					this.engineSelector.style.top = '0';
					this.engineSelector.style.display = '';
					offset = this.engineSelector.offsetHeight;
					this.engineSelector.style.display = 'none';
				} else {
					offset = this.engineSelector.offsetHeight;
				}
				this.engineSelector.style[anchor] = `${nl}px`;
			}
			if (textPos.y < maxListHeight + offset + 1) {
				// The list might extend beyond the upper border of the page. Let's avoid that by placing it
				// below the input text field.
				nt = this.text.offsetHeight + offset + 1;
				if (this.engineName) {
					this.engineSelector.style.top = `${this.text.offsetHeight}px`;
				}
			} else {
				nt = -listh - offset - 1;
				if (this.engineName) {
					this.engineSelector.style.top = `${-(offset + 1)}px`;
				}
			}
			this.list.style.top = `${nt}px`;
			this.list.style.width = ''; // No fixed width (yet)
			this.list.style[anchor] = `${nl}px`;
			if (this.engineName) {
				this.selectEngine(this.engineName);
				this.engineSelector.style.display = '';
			}
			this.list.style.display = 'block';
			// Set the width of the list
			if (this.list.offsetWidth < textBoxWidth) {
				this.list.style.width = `${textBoxWidth}px`;
				return;
			}
			// If the list is wider than the textbox: make sure it fits horizontally into the browser window
			const scroll = scroll_offset('Left');
			const view_w = viewport('Width');
			let w = this.list.offsetWidth;
			const l_pos = position(this.list);
			let left = l_pos.x;
			let right = left + w;
			if (left < scroll || right > scroll + view_w) {
				if (w > view_w) {
					w = view_w;
					this.list.style.width = `${w}px`;
					if (is_rtl) {
						left = right - w;
					} else {
						right = left + w;
					}
				}
				let relative_offset = 0;
				if (left < scroll) {
					relative_offset = scroll - left;
				} else if (right > scroll + view_w) {
					relative_offset = -(right - scroll - view_w);
				}
				if (is_rtl) {
					relative_offset = -relative_offset;
				}
				if (relative_offset) {
					this.list.style[anchor] = `${nl + relative_offset}px`;
				}
			}
		}
		autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
			if (newVal === actVal) {
				return true;
			}
			if (dontModify || this.ime || !this.canSelect()) {
				return false;
			}
			// If we can't select properly or an IME composition is ongoing, autocompletion would be a major annoyance to the user.
			if (newVal.indexOf(actVal)) {
				// Maybe it'll work with the normalized value (NFC)?
				if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
					if (this.lastRealInput === actVal) {
						this.lastRealInput = normalizedActVal;
					}
					actVal = normalizedActVal;
				} else {
					return false;
				}
			}
			// Actual input is a prefix of the new text. Fill in new text, selecting the newly added suffix
			// such that it can be easily removed by typing backspace if the suggestion is unwanted.
			this.text.focus();
			this.text.value = newVal + key;
			this.setSelection(actVal.length, newVal.length);
			return true;
		}
		canSelect() {
			return (
				this.text.setSelectionRange ||
				this.text.createTextRange ||
				(this.text.selectionStart !== undefined && this.text.selectionEnd !== undefined)
			);
		}
		setSelection(from, to) {
			// this.text must be focused (at least on IE)
			if (!this.text.value) {
				return;
			}
			if (this.text.setSelectionRange) {
				// e.g. khtml
				this.text.setSelectionRange(from, to);
			} else if (this.text.selectionStart !== undefined) {
				if (from > this.text.selectionStart) {
					this.text.selectionEnd = to;
					this.text.selectionStart = from;
				} else {
					this.text.selectionStart = from;
					this.text.selectionEnd = to;
				}
			} else if (this.text.createTextRange) {
				// IE
				const new_selection = this.text.createTextRange();
				new_selection.move('character', from);
				new_selection.moveEnd('character', to - from);
				new_selection.select();
			}
		}
		getSelection() {
			let from = 0;
			// this.text must be focused (at least on IE)
			let to = 0;
			if (!this.text.value) {
				// No text.
			} else if (this.text.selectionStart !== undefined) {
				from = this.text.selectionStart;
				to = this.text.selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				// IE
				const rng = document.selection.createRange().duplicate();
				if (rng.parentNode() === this.text) {
					try {
						const textRng = this.text.createTextRange();
						textRng.move('character', 0);
						textRng.setEndPoint('EndToEnd', rng);
						// We're in a single-line input box: no need to care about IE's strange
						// handling of line ends
						to = textRng.text.length;
						textRng.setEndPoint('EndToStart', rng);
						from = textRng.text.length;
					} catch {
						from = this.text.value.length;
						to = from; // At end of text
					}
				}
			}
			return {
				start: from,
				end: to,
			};
		}
		saveView() {
			this.lastSelection = this.getSelection();
		}
		processKey(event) {
			let dir = 0;
			switch (this.lastKey) {
				case UP:
					dir = -1;
					break;
				case DOWN:
					dir = 1;
					break;
				case PGUP:
					dir = -HC.listSize;
					break;
				case PGDOWN:
					dir = HC.listSize;
					break;
				case ESC:
					// Inhibit default behavior (revert to last real input in FF: we do that ourselves)
					return evtKill(event);
			}
			if (dir) {
				if (this.list.style.display !== 'none') {
					// List is visible, so there are suggestions
					this.highlightSuggestion(dir);
					// Kill the event, otherwise some browsers (e.g., Firefox) may additionally treat an up-arrow
					// as "place the text cursor at the front", which we don't want here.
					return evtKill(event);
				} else if (
					this.keyCount <= 1 &&
					(!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)
				) {
					// If no suggestions displayed, get them, unless we're already getting them.
					this.textchange();
				}
			}
			return true;
		}
		highlightSuggestion(dir) {
			if (noSuggestions || !this.list || this.list.style.display === 'none') {
				return false;
			}
			const curr = this.list.selectedIndex;
			let tgt = -1;
			if (dir === 0) {
				if (curr < 0 || curr >= this.list.options.length) {
					return false;
				}
				tgt = curr;
			} else {
				tgt = curr < 0 ? 0 : curr + dir;
				tgt = tgt < 0 ? 0 : tgt;
				if (tgt >= this.list.options.length) {
					tgt = this.list.options.length - 1;
				}
			}
			if (tgt !== curr || dir === 0) {
				if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
					this.list.options[curr].selected = false;
				}
				this.list.options[tgt].selected = true;
				// Get current input text
				const v = this.text.value.split('|');
				const key = v.length > 1 ? `|${v[1]}` : '';
				const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
				if (!completed || this.list.options[tgt].text === this.lastRealInput) {
					this.text.value = this.list.options[tgt].text + key;
					if (this.canSelect()) {
						this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
					}
				}
				this.lastInput = this.list.options[tgt].text;
				this.inputExists = true; // Might be wrong if from a dab list...
				if (this.icon) {
					this.icon.src = HC.existsYes;
				}
				this.state = CHANGE_PENDING;
			}
			return true;
		}
		resetKeySelection() {
			if (noSuggestions || !this.list || this.list.style.display === 'none') {
				return false;
			}
			const curr = this.list.selectedIndex;
			if (curr >= 0 && curr < this.list.options.length) {
				this.list.options[curr].selected = false;
				// Get current input text
				const v = this.text.value.split('|');
				const key = v.length > 1 ? `|${v[1]}` : '';
				// ESC is handled strangely by some browsers (e.g., FF); somehow it resets the input value before
				// our event handlers ever get a chance to run.
				let result = v[0] !== this.lastInput;
				if (v[0] !== this.lastRealInput) {
					this.text.value = this.lastRealInput + key;
					result = true;
				}
				this.lastInput = this.lastRealInput;
				return result;
			}
			return false;
		}
	}
	const initialize = () => {
		// User configurations: Do this here, called from the onload handler, so that users can
		// override it easily in their own user script files by just declaring variables.
		const config = {};
		HC.dont_add_to_watchlist =
			window.hotcat_dont_add_to_watchlist === undefined
				? config.HotCatDontAddToWatchlist === undefined
					? HC.dont_add_to_watchlist
					: config.HotCatDontAddToWatchlist
				: !!window.hotcat_dont_add_to_watchlist;
		HC.no_autocommit =
			window.hotcat_no_autocommit === undefined
				? config.HotCatNoAutoCommit === undefined
					? conf.wgNamespaceNumber % 2
						? true
						: HC.no_autocommit // On talk namespace default autocommit off
					: config.HotCatNoAutoCommit
				: !!window.hotcat_no_autocommit;
		HC.del_needs_diff =
			window.hotcat_del_needs_diff === undefined
				? config.HotCatDelNeedsDiff === undefined
					? HC.del_needs_diff
					: config.HotCatDelNeedsDiff
				: !!window.hotcat_del_needs_diff;
		HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
		HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
		HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
		if (typeof HC.suggestions !== 'string' || !suggestionConfigs[HC.suggestions]) {
			HC.suggestions = 'combined';
		}
		HC.fixed_search =
			window.hotcat_suggestions_fixed === undefined
				? config.HotCatFixedSuggestions === undefined
					? HC.fixed_search
					: config.HotCatFixedSuggestions
				: !!window.hotcat_suggestions_fixed;
		HC.single_minor =
			window.hotcat_single_changes_are_minor === undefined
				? config.HotCatMinorSingleChanges === undefined
					? HC.single_minor
					: config.HotCatMinorSingleChanges
				: !!window.hotcat_single_changes_are_minor;
		HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
		HC.use_up_down =
			window.hotcat_use_category_links === undefined
				? config.HotCatUseCategoryLinks === undefined
					? HC.use_up_down
					: config.HotCatUseCategoryLinks
				: !!window.hotcat_use_category_links;
		HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
		HC.changeTag = config.HotCatChangeTag || '';
		// The next whole shebang is needed, because manual tags get not submitted except of save
		if (HC.changeTag) {
			const eForm = document.editform;
			const catRegExp = new RegExp(`^\\[\\[(${HC.category_regexp}):`);
			let oldTxt;
			// Returns true if minor change
			const isMinorChange = () => {
				let newTxt = eForm.wpTextbox1;
				if (!newTxt) {
					return;
				}
				newTxt = newTxt.value;
				const oldLines = oldTxt.match(/^.*$/gm);
				const newLines = newTxt.match(/^.*$/gm);
				let cArr; // changes
				const except = (aArr, bArr) => {
					const result = [];
					let lArr; // smaller
					let // larger
						sArr;
					if (aArr.length < bArr.length) {
						lArr = bArr;
						sArr = aArr;
					} else {
						lArr = aArr;
						sArr = bArr;
					}
					for (const item of lArr) {
						const ind = sArr.indexOf(item);
						if (ind === -1) {
							result[result.length] = item;
						} else {
							sArr.splice(ind, 1); // don't check this item again
						}
					}
					return [...result, ...sArr];
				};
				cArr = except(oldLines, newLines);
				if (cArr.length > 0) {
					cArr = cArr.filter((c) => {
						c = c.trim();
						return c && !catRegExp.test(c);
					});
				}
				if (cArr.length === 0) {
					oldTxt = newTxt;
					return true;
				}
			};
			if (
				conf.wgAction === 'submit' &&
				conf.wgArticleId &&
				eForm &&
				eForm.wpSummary &&
				document.querySelector('#wikiDiff')
			) {
				const sum = eForm.wpSummary;
				const sumA = eForm.wpAutoSummary;
				if (sum.value && sumA.value === HC.changeTag) {
					// HotCat diff
					// MD5 hash of the empty string, as HotCat edit is based on empty sum
					sumA.value = sumA.value.replace(HC.changeTag, 'd41d8cd98f00b204e9800998ecf8427e');
					// Attr creation and event handling is not same in all (old) browsers so use $
					const $ct = $('<input>')
						.attr({
							type: 'hidden',
							name: 'wpChangeTags',
						})
						.val(HC.changeTag);
					$(eForm).append($ct);
					oldTxt = eForm.wpTextbox1.value;
					const $body = $('body');
					$body.find('input[name=wpSave]').one('click', () => {
						if ($ct.val()) {
							sum.value = sum.value.replace(
								getMessage('messages-using') || getMessage('messages-prefix'),
								''
							);
						}
					});
					const removeChangeTag = () => {
						$(eForm.wpTextbox1)
							.add(sum)
							.one('input', () => {
								setTimeout(() => {
									if (isMinorChange()) {
										removeChangeTag();
									} else {
										$ct.val('');
									}
								}, 500);
							});
					};
					removeChangeTag();
				}
			}
		}
		// Numeric input, make sure we have a numeric value
		HC.listSize = Number.parseInt(HC.listSize, 10);
		if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
			HC.listSize = 5;
		}
		HC.listSize = Math.min(HC.listSize, 30); // Max size
		// Localize search engine names
		for (const [key, suggestionConfig] of Object.entries(suggestionConfigs)) {
			try {
				if (key && getMessage(`engine_names-${key}`)) {
					suggestionConfig.name = getMessage(`engine_names-${key}`);
				}
			} catch {
				continue;
			}
		}
		// Catch both native RTL and "faked" RTL through [[MediaWiki:Rtl.js]]
		is_rtl = hasClass(document.querySelector('body'), 'rtl');
		if (!is_rtl) {
			if (document.defaultView && document.defaultView.getComputedStyle) {
				// Gecko etc.
				is_rtl = document.defaultView
					.getComputedStyle(document.querySelector('body'), null)
					.getPropertyValue('direction');
			} else if ($('body')[0].currentStyle) {
				// IE, has subtle differences to getComputedStyle
				is_rtl = $('body')[0].currentStyle.direction;
			} else {
				// Not exactly right, but best effort
				is_rtl = $('body')[0].style.direction;
			}
			is_rtl = is_rtl === 'rtl';
		}
	};
	const can_edit = () => {
		return document.querySelector('#ca-edit') !== null;
	};
	// Legacy stuff
	const closeForm = function () {
		// Close all open editors without redirect resolution and other asynchronous stuff.
		for (const edit of editors) {
			if (edit.state === OPEN) {
				edit.cancel();
			} else if (edit.state === CHANGE_PENDING) {
				edit.sanitizeInput();
				const value = edit.text.value.split('|');
				let key = null;
				if (value.length > 1) {
					[, key] = value;
				}
				const v = value[0].replace(/_/g, ' ').trim();
				if (v.length === 0) {
					edit.cancel();
				} else {
					edit.currentCategory = v;
					edit.currentKey = key;
					edit.currentExists = this.inputExists;
					edit.close();
				}
			}
		}
	};
	const setup_upload = () => {
		onUpload = true;
		// Add an empty category bar at the end of the table containing the description, and change the onsubmit handler.
		let ip = document.querySelector('#mw-htmlform-description') || document.querySelector('input[name=wpDestFile]');
		if (!ip) {
			ip = document.querySelector('input[name=wpDestFile]');
			while (ip && ip.nodeName.toLowerCase() !== 'table') {
				ip = ip.parentNode;
			}
		}
		if (!ip) {
			return;
		}
		const reupload = document.querySelector('input[name=wpForReUpload]');
		const destFile = document.querySelector('input[name=wpDestFile]');
		if ((reupload && !!reupload.value) || (destFile && (destFile.disabled || destFile.readOnly))) {
			return; // re-upload form...
		}
		// Insert a table row with two fields (label and empty category bar)
		const labelCell = make('td');
		const lineCell = make('td');
		// Create the category line
		catLine = make('div');
		catLine.className = 'catlinks';
		catLine.id = 'catlinks';
		catLine.style.textAlign = is_rtl ? 'right' : 'left';
		// We'll be inside a table row. Make sure that we don't have margins or strange borders.
		catLine.style.margin = '0';
		catLine.style.border = 'none';
		lineCell.append(catLine);
		// Create the label
		const label = null;
		if (label) {
			labelCell.id = 'hotcatLabelTranslated';
			labelCell.append(label);
		} else {
			labelCell.id = 'hotcatLabel';
			labelCell.append(make(getMessage('categories'), true));
		}
		labelCell.className = 'mw-label';
		labelCell.style.textAlign = 'right';
		labelCell.style.verticalAlign = 'middle';
		// Change the onsubmit handler
		const form = document.querySelector('#upload') || document.querySelector('#mw-upload-form');
		if (form) {
			const newRow = ip.insertRow(-1);
			newRow.append(labelCell);
			newRow.append(lineCell);
			form.addEventListener('submit', (oldSubmit, ...args) => {
				return (() => {
					let do_submit = true;
					if (oldSubmit) {
						if (typeof oldSubmit === 'string') {
							// eslint-disable-next-line no-eval
							do_submit = window.eval(oldSubmit);
						} else if (oldSubmit instanceof Function) {
							do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
						}
					}
					if (!do_submit) {
						return false;
					}
					closeForm();
					// Copy the categories
					const eb =
						document.querySelector('textarea[name=wpUploadDescription]') ||
						document.querySelector('#wpDesc');
					let addedOne = false;
					for (const editor of editors) {
						const t = editor.currentCategory;
						if (!t) {
							continue;
						}
						const key = editor.currentKey;
						const new_cat = `[[${HC.category_canonical}:${t}${key ? `|${key}` : ''}]]`;
						// Only add if not already present
						const nowikiRegex = new RegExp('<no'.concat('wiki>', '(\\s|\\S)*?</no', 'wiki', '>'), 'g');
						const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, '').replace(nowikiRegex);
						if (!find_category(_cleanedText, t, true)) {
							eb.value += `\n${new_cat}`;
							addedOne = true;
						}
					}
					if (addedOne) {
						// Remove "subst:unc" added by Flinfo if it didn't find categories
						const regex = new RegExp('{{$'.concat('subst:').concat('unc}}'), 'g');
						eb.value = eb.value.replace(regex, '');
					}
					return true;
				})(form.onsubmit);
			});
		}
	};
	let cleanedText = null;
	const isOnPage = ({firstChild}) => {
		if (firstChild.nodeType !== Node.ELEMENT_NODE) {
			return null;
		}
		let catTitle = title(firstChild.getAttribute('href'));
		if (!catTitle) {
			return null;
		}
		catTitle = catTitle.slice(catTitle.indexOf(':') + 1).replace(/_/g, ' ');
		if (HC.blacklist && HC.blacklist.test(catTitle)) {
			return null;
		}
		const result = {
			title: catTitle,
			match: ['', '', ''],
		};
		if (pageText === null) {
			return result;
		}
		if (cleanedText === null) {
			const nowikiRegex = new RegExp('<no'.concat('wiki>', '(\\s|\\S)*?</no', 'wiki', '>'), 'g');
			cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, '').replace(nowikiRegex, '');
		}
		result.match = find_category(cleanedText, catTitle, true);
		return result;
	};
	let initialized = false;
	let setupTimeout = null;
	const findByClass = (scope, tag, className) => {
		const result = $(scope).find(`${tag}.${className}`);
		return result && result.length > 0 ? result[0] : null;
	};
	const setup = (additionalWork) => {
		if (initialized) {
			return;
		}
		initialized = true;
		if (setupTimeout) {
			window.clearTimeout(setupTimeout);
			setupTimeout = null;
		}
		// Find the category bar, or create an empty one if there isn't one. Then add -/+- links after
		// each category, and add the + link.
		catLine ||= document.querySelector('#mw-normal-catlinks'); // Special:Upload
		const hiddenCats = document.querySelector('#mw-hidden-catlinks');
		if (!catLine) {
			let footer = null;
			if (!hiddenCats) {
				footer = findByClass(document, 'div', 'printfooter');
				if (!footer) {
					return;
				} // Don't know where to insert the category line
			}
			catLine = make('div');
			catLine.id = 'mw-normal-catlinks';
			catLine.style.textAlign = is_rtl ? 'right' : 'left';
			// Add a label
			const label = make('a');
			label.href = conf.wgArticlePath.replace('$1', 'Special:Categories');
			label.title = getMessage('categories');
			label.append(make(getMessage('categories'), true));
			catLine.append(label);
			catLine.append(make(':', true));
			// Insert the new category line
			let container = hiddenCats ? hiddenCats.parentNode : document.querySelector('#catlinks');
			if (!container) {
				container = make('div');
				container.id = 'catlinks';
				footer.parentNode.insertBefore(container, footer.nextSibling);
			}
			container.className = 'catlinks noprint';
			container.style.display = '';
			if (hiddenCats) {
				hiddenCats.before(catLine);
			} else {
				container.append(catLine);
			}
		} // end if catLine exists
		if (is_rtl) {
			catLine.dir = 'rtl';
		}
		// Create editors for all existing categories
		const createEditors = (line, is_hidden) => {
			let i;
			let cats = line.querySelectorAll('li');
			if (cats.length > 0) {
				newDOM = true;
				line = cats[0].parentNode;
			} else {
				cats = line.querySelectorAll('span');
			}
			// Copy cats, otherwise it'll also magically contain our added spans as it is a live collection!
			const copyCats = Array.from({
				length: cats.length,
			});
			for (i = 0; i < cats.length; i++) {
				copyCats[i] = cats[i];
			}
			for (i = 0; i < copyCats.length; i++) {
				const test = isOnPage(copyCats[i]);
				if (test !== null && test.match !== null && line) {
					new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
				}
			}
			return copyCats.length > 0 ? copyCats.at(-1) : null;
		};
		const lastSpan = createEditors(catLine, false);
		// Create one to add a new category
		new CategoryEditor(newDOM ? catLine.querySelectorAll('ul')[0] : catLine, null, null, lastSpan !== null, false);
		if (!onUpload) {
			if (pageText !== null && hiddenCats) {
				if (is_rtl) {
					hiddenCats.dir = 'rtl';
				}
				createEditors(hiddenCats, true);
			}
			// And finally add the "multi-mode" span. (Do this at the end, otherwise it ends up in the list above.)
			const enableMulti = make('span');
			enableMulti.className = 'noprint';
			if (is_rtl) {
				enableMulti.dir = 'rtl';
			}
			catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
			enableMulti.append(make('\u00A0', true)); // nbsp
			multiSpan = make('span');
			enableMulti.append(multiSpan);
			multiSpan.innerHTML = `(<a>${HC.addmulti}</a>)`;
			const [link] = multiSpan.querySelectorAll('a');
			link.addEventListener('click', (event) => {
				setMultiInput();
				checkMultiInput();
				return evtKill(event);
			});
			link.title = getMessage('multi_tooltip');
			link.style.cursor = 'pointer';
		}
		cleanedText = null;
		if (additionalWork instanceof Function) {
			additionalWork();
		}
		mw.hook('hotcat.ready').fire(); // Execute registered callback functions
		$('body').trigger('hotcatSetupCompleted');
	};
	const createCommitForm = () => {
		if (commitForm) {
			return;
		}
		const formContainer = make('div');
		formContainer.style.display = 'none';
		document.querySelector('body').append(formContainer);
		formContainer.innerHTML = `<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="${
			conf.wgScript
		}?title=${encodeURIComponent(
			conf.wgPageName
		)}&action=submit"><input type="hidden" name="wpTextbox1">${`<input type="hidden" name="model" value="${conf.wgPageContentModel}">`}<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>`;
		commitForm = document.querySelector('#hotcatCommitForm');
	};
	const getPage = () => {
		// We know we have an article here.
		if (conf.wgArticleId) {
			const params = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				rawcontinue: '',
				titles: conf.wgPageName,
				prop: ['info', 'revisions'],
				rvprop: ['content', 'timestamp', 'ids'],
				rvlimit: '1',
				rvstartid: conf.wgCurRevisionId,
				rvslots: 'main',
				meta: ['siteinfo'],
			};
			HC.start = (data) => {
				setPage(data);
				setup(createCommitForm);
			};
			api.get(params).then((data) => {
				HC.start(data);
			});
			setupTimeout = setTimeout(() => {
				setup(createCommitForm);
			}, 4000); // 4 sec, just in case getting the wikitext takes longer.
		} else {
			// Doesn't exist yet. Disable on non-existing User pages.
			if (conf.wgNamespaceNumber === 2) {
				return;
			}
			pageText = '';
			pageTime = null;
			setup(createCommitForm);
		}
	};
	const setState = (state) => {
		const cats = state.split('\n');
		if (cats.length === 0) {
			return null;
		}
		if (initialized && editors.length === 1 && editors[0].isAddCategory) {
			// Insert new spans and create new editors for them.
			const newSpans = [];
			const before = editors.length === 1 ? editors[0].span : null;
			let i;
			for (i = 0; i < cats.length; i++) {
				if (cats[i].length === 0) {
					continue;
				}
				let cat = cats[i].split('|');
				const key = cat.length > 1 ? cat[1] : null;
				[cat] = cat;
				const link = make('a');
				link.href = wikiPagePath(`${HC.category_canonical}:${cat}`);
				link.append(make(cat, true));
				link.title = cat;
				const span = make('span');
				span.append(link);
				if (!i) {
					catLine.insertBefore(make(' ', true), before);
				}
				before.before(span);
				if (before && i + 1 < cats.length) {
					parent.insertBefore(make(' | ', true), before);
				}
				newSpans[newSpans.length] = {
					element: span,
					title: cat,
					key,
				};
			}
			// And change the last one...
			if (before) {
				before.parentNode.insertBefore(make(' | ', true), before);
			}
			for (i = 0; i < newSpans.length; i++) {
				new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
			}
		}
		return null;
	};
	const getState = () => {
		let result = null;
		for (const editor of editors) {
			let text = editor.currentCategory;
			const key = editor.currentKey;
			if (text && text.length > 0) {
				if (key !== null) {
					text += `|${key}`;
				}
				if (result === null) {
					result = text;
				} else {
					result += `\n${text}`;
				}
			}
		}
		return result;
	};
	const really_run = () => {
		initialize();
		if (
			!HC.upload_disabled &&
			conf.wgNamespaceNumber === -1 &&
			conf.wgCanonicalSpecialPageName === 'Upload' &&
			conf.wgUserName
		) {
			setup_upload();
			setup(() => {
				// Check for state restoration once the setup is done otherwise, but before signalling setup completion
				if (window.UploadForm && UploadForm.previous_hotcat_state) {
					UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
				}
			});
		} else {
			if (
				!conf.wgIsArticle ||
				conf.wgAction !== 'view' ||
				param('diff') !== null ||
				param('oldid') !== null ||
				!can_edit() ||
				HC.disable()
			) {
				return;
			}
			getPage();
		}
	};
	const run = () => {
		if (HC.started) {
			return;
		}
		HC.started = true;
		really_run();
	};
	// Export legacy functions
	window.hotcat_get_state = () => {
		return getState();
	};
	window.hotcat_set_state = (state) => {
		return setState(state);
	};
	window.hotcat_close_form = () => {
		closeForm();
	};
	HC.runWhenReady = (callback) => {
		// run user-registered code once HotCat is fully set up and ready.
		mw.hook('hotcat.ready').add(callback);
	};
	// Run as soon as possible. This varies depending on MediaWiki version;
	// window's 'load' event is always safe, but usually we can do better than that.
	if (conf.wgCanonicalSpecialPageName !== 'Upload') {
		// Reload HotCat after (VE) edits (bug T103285)
		mw.hook('postEdit').add(() => {
			// Reset HotCat in case this is a soft reload (e.g. VisualEditor edit), unless the categories
			// were not re-rendered and our interface is still there (e.g. DiscussionTools edit)
			if (document.querySelector('#catlinks .hotcatlink')) {
				return;
			}
			catLine = null;
			editors = [];
			initialized = false;
			HC.started = false;
			run();
		});
	}
	// We can safely trigger just after user configuration is loaded.
	// Use always() instead of then() to also start HotCat if the user module has problems.
	$(run);
})();
