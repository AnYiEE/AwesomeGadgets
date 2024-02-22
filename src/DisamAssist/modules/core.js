// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {WG_ACTION} from './constant';
import {cfg} from './config';
import {initMwApi} from 'ext.gadget.Util';
import {txt} from './messages';

const api = initMwApi('DisamAssist/1.1');

let startLink;
let ui;
let links;
let pageChanges;
let currentPageTitle;
let currentPageParameters;
let currentLink;
let possibleBacklinkDestinations;
let forceSamePage = false;
let running = false;
let choosing = false;
let canMarkIntentionalLinks = false;
let displayedPages = {};
let editCount = 0;
let editLimit;
const pendingSaves = [];
let pendingEditBox;
let pendingEditBoxText;
let lastEditMillis = 0;
let runningSaves = false;

/* Entry point. Check whether we are in a disambiguation page. If so, add a link to start the tool */
export const install = () => {
	if (WG_ACTION !== 'view' || !isDisam()) {
		return;
	}
	$(() => {
		const portletId = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		// This is a " (disambiguation)" page
		if (new RegExp(cfg.disamRegExp).test(getTitle())) {
			const startMainLink = $(mw.util.addPortletLink(portletId, '#', txt.startMain, 'ca-disamassist-main')).on(
				'click',
				startMain
			);
			const startSameLink = $(mw.util.addPortletLink(portletId, '#', txt.startSame, 'ca-disamassist-same')).on(
				'click',
				startSame
			);
			startLink = startMainLink.add(startSameLink);
		} else {
			startLink = $(mw.util.addPortletLink(portletId, '#', txt.start, 'ca-disamassist-page')).on('click', start);
		}
	});
};

/* Start the tool. Display the UI and begin looking for links to fix */
const start = () => {
	if (running) {
		return;
	}

	running = true;
	links = [];
	pageChanges = [];
	displayedPages = {};
	ensureDABExists().then((canMark) => {
		canMarkIntentionalLinks = canMark;
		createUI();
		addUnloadConfirm();
		markDisamOptions();
		checkEditLimit().then(() => {
			togglePendingEditBox(false);
			doPage();
		});
	});
};

/* Start DisamAssist. Disambiguate incoming links to the current page, regardless of the title. */
const startSame = () => {
	forceSamePage = true;
	start();
};

/* Start DisamAssist. If the page title ends with " (disambiguation)", disambiguate links to the primary topic article. Otherwise, disambiguate links to the current page. */
const startMain = () => {
	forceSamePage = false;
	start();
};

/* Create and show the user interface. */
const createUI = () => {
	const $body = $('body');
	ui = {
		display: $('<div>').addClass('disamassist-box disamassist-mainbox'),
		finishedMessage: $('<div>').text(txt.noMoreLinks).hide(),
		pageTitleLine: $('<span>').addClass('disamassist-pagetitleline'),
		pendingEditCounter: $('<div>').addClass('disamassist-editcounter'),
		context: $('<span>').addClass('disamassist-context'),
		undoButton: createButton(txt.undo, undo),
		omitButton: createButton(txt.omit, omit),
		endButton: createButton(txt.close, saveAndEnd),
		refreshButton: createButton(txt.refresh, refresh),
		titleAsTextButton: createButton(txt.titleAsText, chooseTitleFromPrompt),
		intentionalLinkButton: canMarkIntentionalLinks
			? createButton(txt.intentionalLink, chooseIntentionalLink)
			: $('<span>'),
		disamNeededButton: cfg.disamNeededText ? createButton(txt.disamNeeded, chooseDisamNeeded) : $('<span>'),
		removeLinkButton: createButton(txt.removeLink, chooseLinkRemoval),
	};
	const top = $('<div>')
		.addClass('disamassist-top')
		.append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
	const leftButtons = $('<div>')
		.addClass('disamassist-leftbuttons')
		.append([
			ui.titleAsTextButton,
			ui.removeLinkButton,
			ui.intentionalLinkButton,
			ui.disamNeededButton,
			ui.omitButton,
		]);
	const rightButtons = $('<div>')
		.addClass('disamassist-rightbuttons')
		.append([ui.undoButton, ui.refreshButton, ui.endButton]);
	const allButtons = $('<div>').addClass('disamassist-allbuttons').append([leftButtons, rightButtons]);
	ui.display.append([top, ui.context, allButtons]);
	updateEditCounter();
	toggleActionButtons(false);
	// Insert the UI in the page
	$body.find('#mw-content-text').before(ui.display);
	ui.display.hide().fadeIn();
};

/* If there are pending changes, show a confirm dialog before closing */
const addUnloadConfirm = () => {
	$(window).on('beforeunload', () => {
		if (running && checkActualChanges()) {
			return txt.pending;
		} else if (editCount !== 0) {
			return txt.editInProgress;
		}
	});
};

/* Mark the disambiguation options as such */
const markDisamOptions = () => {
	const optionPageTitles = [];
	const optionMarkers = [];
	getDisamOptions().each((_index, element) => {
		const link = $(element);
		const title = extractPageName(link);
		const optionMarker = $('<a>')
			.attr('href', '#')
			.addClass('disamassist-optionmarker')
			.text(txt.optionMarker)
			.on('click', (ev) => {
				ev.preventDefault();
				chooseReplacement(title);
			});
		link.after(optionMarker);
		optionMarkers.push(optionMarker);
		optionPageTitles.push(title);
	});
	// Now check the disambiguation options and display a different message for those that are
	// actually the same as the target page where the links go, as choosing those options doesn't really
	// accomplish anything (except bypassing redirects, which might be useful in some cases)
	const targetPage = getTargetPage();
	fetchRedirects([...optionPageTitles, ...targetPage])
		.done((redirects) => {
			const endTargetPage = resolveRedirect(targetPage, redirects);
			for (const [ii, optionPageTitle] of optionPageTitles.entries()) {
				const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
				if (isSamePage(optionPageTitle, targetPage)) {
					optionMarkers[ii].text(txt.targetOptionMarker).addClass('disamassist-curroptionmarker');
				} else if (isSamePage(endOptionTitle, endTargetPage)) {
					optionMarkers[ii].text(txt.redirectOptionMarker).addClass('disamassist-curroptionmarker');
				}
			}
		})
		.fail(error);
};

/* Check whether intentional links to disambiguation pages can be explicitly marked/* * as such in this wiki. If so, ensure that a "Foo (disambiguation)" page exists./* * Returns a jQuery promise */
const ensureDABExists = () => {
	const deferred = new $.Deferred();
	const title = getTitle();
	// That concept doesn't exist in this wiki.
	if (!cfg.intentionalLinkOption) {
		deferred.resolve(false);
		// "Foo (disambiguation)" exists: it's the current page.
	} else if (new RegExp(cfg.disamRegExp).exec(title)) {
		deferred.resolve(true);
	} else {
		const disamTitle = cfg.disamFormat.replace('$1', title);
		loadPage(disamTitle)
			.done((page) => {
				// "Foo (disambiguation)" doesn't exist.
				if (page.missing) {
					// We try to create it
					page.content = cfg.redirectToDisam.replace('$1', title);
					const summary = txt.redirectSummary.replace('$1', title);
					savePage(disamTitle, page, summary, false, true)
						.done(() => {
							deferred.resolve(true);
						})
						.fail((description) => {
							error(description);
							deferred.resolve(false);
						});
					// It does exist
				} else {
					deferred.resolve(true);
				}
			})
			.fail((description) => {
				error(description);
				deferred.resolve(false);
			});
	}
	return deferred.promise();
};

/* Check whether the edit cooldown applies and sets editLimit accordingly./* * Returns a jQuery promise */
const checkEditLimit = () => {
	const deferred = new $.Deferred();
	if (cfg.editCooldown <= 0) {
		editLimit = false;
		deferred.resolve();
	} else {
		fetchRights()
			.done((rights) => {
				editLimit = !rights.includes('bot');
			})
			.fail((description) => {
				error(description);
				editLimit = true;
			})
			.always(() => {
				deferred.resolve();
			});
	}
	return deferred.promise();
};

/* Find and ask the user to fix all the incoming links to the disambiguation ("target")/* * page from a single "origin" page */
const doPage = () => {
	if (pageChanges.length > cfg.historySize) {
		applyChange(pageChanges.shift());
	}
	if (links.length) {
		currentPageTitle = links.shift();
		displayedPages[currentPageTitle] = true;
		toggleActionButtons(false);
		loadPage(currentPageTitle)
			.done((data) => {
				currentPageParameters = data;
				currentLink = undefined;
				doLink();
			})
			.fail(error);
	} else {
		const targetPage = getTargetPage();
		getBacklinks(targetPage)
			.done((backlinks, pageTitles) => {
				const pending = {};
				for (const el of pendingSaves) {
					pending[el[0]] = true;
				}
				possibleBacklinkDestinations = pageTitles.filter((t) => {
					if (t === targetPage) {
						return true;
					}
					return removeDisam(t) !== targetPage;
				});
				// Only incoming links from pages we haven't seen yet and we aren't currently
				// saving (displayedPages is reset when the tool is closed and opened again,
				// while the list of pending changes isn't; if the edit cooldown is disabled,
				// it will be empty)
				links = backlinks.filter((el) => {
					return !displayedPages[el] && !pending[el];
				});
				if (links.length) {
					doPage();
				} else {
					updateContext();
				}
			})
			.fail(error);
	}
};

/* Find and ask the user to fix a single incoming link to the disambiguation ("target")/* * page */
const doLink = () => {
	currentLink = extractLinkToPage(
		currentPageParameters.content,
		possibleBacklinkDestinations,
		currentLink ? currentLink.end : 0
	);
	if (currentLink) {
		updateContext();
	} else {
		doPage();
	}
};

/* Replace the target of a link with a different one/* * pageTitle: New link target/* * extra: Additional text after the link (optional)/* * summary: Change summary (optional) */
const chooseReplacement = (pageTitle, extra, summary) => {
	if (choosing) {
		choosing = false;
		if (!summary) {
			summary = pageTitle ? txt.summaryChanged.replace('$1', pageTitle) : txt.summaryOmitted;
		}
		addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
		if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
			currentPageParameters.content = replaceLink(
				currentPageParameters.content,
				pageTitle,
				currentLink,
				extra || ''
			);
		}
		doLink();
	}
};

/* Replace the link with an explicit link to the disambiguation page */
const chooseIntentionalLink = () => {
	const disamTitle = cfg.disamFormat.replace('$1', getTargetPage());
	chooseReplacement(disamTitle, '', txt.summaryIntentional);
};

/* Prompt for an alternative link target and use it as a replacement */
const chooseTitleFromPrompt = () => {
	const title = prompt(txt.titleAsTextPrompt);
	if (title !== null) {
		chooseReplacement(title);
	}
};

/* Remove the current link, leaving the text unchanged */
const chooseLinkRemoval = () => {
	if (choosing) {
		const summary = txt.summaryRemoved;
		addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
		currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
		doLink();
	}
};

/* Add a "disambiguation needed" template after the link */
const chooseDisamNeeded = () => {
	chooseReplacement(currentLink.title, cfg.disamNeededText, txt.summaryHelpNeeded);
};

/* Undo the last change */
const undo = () => {
	if (pageChanges.length) {
		const lastPage = pageChanges.at(-1);
		if (currentPageTitle !== lastPage.title) {
			links.unshift(currentPageTitle);
			currentPageTitle = lastPage.title;
		}
		currentPageParameters = lastPage.page;
		currentPageParameters.content = lastPage.contentBefore.pop();
		currentLink = lastPage.links.pop();
		lastPage.summary.pop();
		if (!lastPage.contentBefore.length) {
			pageChanges.pop();
		}
		updateContext();
	}
};

/* Omit the current link without making a change */
const omit = () => {
	chooseReplacement();
};

/* Save all the pending changes and restart the tool. */
const refresh = () => {
	saveAndEnd();
	start();
};

/* Enable or disable the buttons that can perform actions on a page or change the current link./* * enabled: Whether to enable or disable the buttons */
const toggleActionButtons = (enabled) => {
	const affectedButtons = [
		ui.omitButton,
		ui.titleAsTextButton,
		ui.removeLinkButton,
		ui.intentionalLinkButton,
		ui.disamNeededButton,
		ui.undoButton,
	];
	for (const button of affectedButtons) {
		button.prop('disabled', !enabled);
	}
};

/* Show or hide the 'no more links' message/* * show: Whether to show or hide the message */
const toggleFinishedMessage = (show) => {
	toggleActionButtons(!show);
	ui.undoButton.prop('disabled', !pageChanges.length);
	ui.finishedMessage.toggle(show);
	ui.pageTitleLine.toggle(!show);
	ui.context.toggle(!show);
};

const togglePendingEditBox = (show) => {
	const $body = $('body');
	if (!pendingEditBox) {
		pendingEditBox = $('<div>').addClass('disamassist-box disamassist-pendingeditbox');
		pendingEditBoxText = $('<div>');
		pendingEditBox.append(pendingEditBoxText).hide();
		if (editLimit) {
			pendingEditBox.append($('<div>').text(txt.pendingEditBoxLimited).addClass('disamassist-subtitle'));
		}
		$body.find('#mw-content-text').before(pendingEditBox);
		updateEditCounter();
	}
	if (show) {
		pendingEditBox.fadeIn();
	} else {
		pendingEditBox.fadeOut();
	}
};

const notifyCompletion = () => {
	const $body = $('body');
	const oldTitle = document.title;
	document.title = txt.notifyCharacter + document.title;
	$body.one('mousemove', () => {
		document.title = oldTitle;
	});
};

/* Update the displayed information to match the current link/* * or lack thereof */
const updateContext = () => {
	updateEditCounter();
	if (currentLink) {
		ui.pageTitleLine.html(
			txt.pageTitleLine
				.replace(
					'$1',
					mw.util.getUrl(currentPageTitle, {
						redirect: 'no',
					})
				)
				.replace('$2', mw.html.escape(currentPageTitle))
		);
		const context = extractContext(currentPageParameters.content, currentLink);
		ui.context
			.empty()
			.append($('<span>').text(context[0]))
			.append($('<span>').text(context[1]).addClass('disamassist-inclink'))
			.append($('<span>').text(context[2]));
		const numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css('line-height')));
		if (numLines < cfg.numContextLines) {
			// Add cfg.numContextLines - numLines + 1 line breaks, so that the total number
			// of lines is cfg.numContextLines
			ui.context.append(
				Array.from({
					length: cfg.numContextLines - numLines + 2,
				}).join('<br>')
			);
		}
		toggleFinishedMessage(false);
		ui.undoButton.prop('disabled', !pageChanges.length);
		ui.removeLinkButton.prop('disabled', currentPageParameters.redirect);
		ui.intentionalLinkButton.prop('disabled', currentPageParameters.redirect);
		ui.disamNeededButton.prop('disabled', currentPageParameters.redirect || currentLink.hasDisamTemplate);
		choosing = true;
	} else {
		toggleFinishedMessage(true);
	}
};

/* Update the count of pending changes */
const updateEditCounter = () => {
	if (ui.pendingEditCounter) {
		ui.pendingEditCounter.text(
			txt.pendingEditCounter.replace('$1', editCount).replace('$2', countActuallyChangedFullyCheckedPages())
		);
	}
	if (pendingEditBox) {
		if (editCount === 0 && !running) {
			togglePendingEditBox(false);
			notifyCompletion();
		}
		let textContent = editCount;
		if (editLimit) {
			textContent = txt.pendingEditBoxTimeEstimation
				.replace('$1', editCount)
				.replace('$2', secondsToHHMMSS(cfg.editCooldown * editCount));
		}
		pendingEditBoxText.text(txt.pendingEditBox.replace('$1', textContent));
	}
};

/* Apply the changes made to an "origin" page/* * pageChange: Change that will be saved */
const applyChange = (pageChange) => {
	if (pageChange.page.content !== pageChange.contentBefore[0]) {
		editCount++;
		const changeSummaries = pageChange.summary.join(txt.summarySeparator);
		const summary = txt.summary.replace('$1', getTargetPage()).replace('$2', changeSummaries);
		const save = editLimit ? saveWithCooldown : savePage;
		save(pageChange.title, pageChange.page, summary, true, true)
			.always(() => {
				if (editCount > 0) {
					editCount--;
				}
				updateEditCounter();
			})
			.fail(error);
		updateEditCounter();
	}
};

/* Save all the pending changes */
const applyAllChanges = () => {
	for (const pageChange of pageChanges) {
		applyChange(pageChange);
	}
	pageChanges = [];
};

/* Record a new pending change/* * pageTitle: Title of the page/* * page: Content of the page/* * oldContent: Content of the page before the change/* * link: Link that has been changed/* * summary: Change summary */
const addChange = (pageTitle, page, oldContent, link, summary) => {
	if (!pageChanges.length || pageChanges.at(-1).title !== pageTitle) {
		pageChanges.push({
			title: pageTitle,
			page,
			contentBefore: [],
			links: [],
			summary: [],
		});
	}
	const lastPageChange = pageChanges.at(-1);
	lastPageChange.contentBefore.push(oldContent);
	lastPageChange.links.push(link);
	lastPageChange.summary.push(summary);
};

/* Check whether actual changes are stored in the history array */
const checkActualChanges = () => {
	return countActualChanges() !== 0;
};

/* Return the number of entries in the history array that represent actual changes */
const countActualChanges = () => {
	let changeCount = 0;
	for (const pageChange of pageChanges) {
		if (pageChange.page.content !== pageChange.contentBefore[0]) {
			changeCount++;
		}
	}
	return changeCount;
};

/* Return the number of changed pages in the history array, ignoring the last entry/* * if we aren't done with that page yet */
const countActuallyChangedFullyCheckedPages = () => {
	let changeCount = countActualChanges();
	if (pageChanges.length) {
		const lastChange = pageChanges.at(-1);
		if (
			lastChange.title === currentPageTitle &&
			currentLink &&
			lastChange.page.content !== lastChange.contentBefore[0]
		) {
			changeCount--;
		}
	}
	return changeCount;
};

/* Find the links to disambiguation options in a disambiguation page */
const getDisamOptions = () => {
	const $body = $('body');
	return $body.find('#mw-content-text a').filter((_index, element) => {
		return !!extractPageName($(element));
	});
};

/* Save all the pending changes and close the tool */
const saveAndEnd = () => {
	applyAllChanges();
	end();
};

/* Close the tool */
const end = () => {
	const $body = $('body');
	const currentToolUI = ui.display;
	choosing = false;
	running = false;
	startLink.removeClass('selected');
	$body.find('.disamassist-optionmarker').remove();
	currentToolUI.fadeOut({
		complete() {
			currentToolUI.remove();
			if (editCount) {
				togglePendingEditBox(true);
			}
		},
	});
};

/* Display an error message */
const error = (errorDescription) => {
	const $body = $('body');
	const errorBox = $('<div>').addClass('disamassist-box disamassist-errorbox');
	errorBox.text(txt.error.replace('$1', errorDescription));
	errorBox.append(
		createButton(txt.dismissError, () => {
			errorBox.fadeOut();
		}).addClass('disamassist-errorbutton')
	);
	const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
	const nextElement = uiIsInPlace ? ui.display : $body.find('#mw-content-text');
	nextElement.before(errorBox);
	errorBox.hide().fadeIn();
};

/* Change a link so that it points to the title/* * text: The wikitext of the whole page/* * title: The new destination of the link/* * link: The link that will be modified/* * extra: Text that will be added after the link (optional) */
const replaceLink = (text, title, link, extra) => {
	let newContent;
	isSamePage(title, link.description)
		? // [[B|A]] should be replaced with [[A]] rather than [[A|A]]
			(newContent = link.description)
		: (newContent = `${title}|${link.description}`);
	const linkStart = text.slice(0, Math.max(0, link.start));
	const linkEnd = text.slice(Math.max(0, link.end));
	return `${linkStart}[[${newContent}]]${link.afterDescription}${extra || ''}${linkEnd}`;
};

/* Remove a link from the text/* * text: The wikitext of the whole page/* * link: The link that will be removed */
const removeLink = (text, link) => {
	const linkStart = text.slice(0, Math.max(0, link.start));
	const linkEnd = text.slice(Math.max(0, link.end));
	return linkStart + link.description + link.afterDescription + linkEnd;
};

/* Extract a link from a string in wiki format,/* * starting from a given index. Return a link if one can be found,/* * otherwise return null. The "link" includes "disambiguation needed"/* * templates inmediately following the link proper/* * text: Text from which the link will be extracted/* * lastIndex: Index from which the search will start */
const extractLink = (text, lastIndex) => {
	// FIXME: Not an actual title regex (lots of false positives
	// and some false negatives), but hopefully good enough.
	const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
	// Ditto for the template regex. Disambiguation link templates
	// should be simple enough for this not to matter, though.
	const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
	titleRegex.lastIndex = lastIndex;
	const match = titleRegex.exec(text);
	if (match && match.index !== -1) {
		let possiblyAmbiguous = true;
		let hasDisamTemplate = false;
		let _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
		let afterDescription = '';
		const rest = text.slice(Math.max(0, _end));
		const templateMatch = templateRegex.exec(rest);
		if (templateMatch) {
			const templateTitle = getCanonicalTitle(templateMatch[2]);
			const {disamLinkTemplates} = cfg;
			const {disamLinkIgnoreTemplates} = cfg;
			if (disamLinkTemplates.includes(templateTitle)) {
				_end += templateMatch[0].length;
				afterDescription = templateMatch[1].replace(/\s$/, '');
				hasDisamTemplate = true;
			} else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
				possiblyAmbiguous = false;
			}
		}
		return {
			start: match.index,
			end: _end,
			possiblyAmbiguous,
			hasDisamTemplate,
			title: match[1],
			description: match[2] ?? match[1],
			afterDescription,
		};
	}
};

/* Extract a link to one of a number of destination pages from a string/* * ("text") in wiki format, starting from a given index ("lastIndex")./* * "Disambiguation needed" templates are included as part of the links./* * text: Page in wiki format/* * destinations: Array of page titles to look for/* * lastIndex: Index from which the search will start */
const extractLinkToPage = (text, destinations, lastIndex) => {
	let link;
	let title;
	do {
		link = extractLink(text, lastIndex);
		if (link) {
			lastIndex = link.end;
			title = getCanonicalTitle(link.title);
		}
	} while (link && (!link.possiblyAmbiguous || !destinations?.includes(title)));
	return link;
};

/* Find the "target" page: either the one we are in or the "main" one found by extracting/* * the title from ".* (disambiguation)" or whatever the appropiate local format is */
const getTargetPage = () => {
	const title = getTitle();
	return forceSamePage ? title : removeDisam(title);
};

/* Get the page title, with the namespace prefix if any. */
const getTitle = () => {
	return mw.config.get('wgPageName').replace(/_/g, ' ');
};

/* Extract a "main" title from ".* (disambiguation)" or whatever the appropiate local format is */
const removeDisam = (title) => {
	const match = new RegExp(cfg.disamRegExp).exec(title);
	return match?.[1] ?? title;
};

/* Check whether two page titles are the same */
const isSamePage = (title1, title2) => {
	return getCanonicalTitle(title1) === getCanonicalTitle(title2);
};

/* Return the 'canonical title' of a page */
const getCanonicalTitle = (title) => {
	try {
		// mw.Title seems to be buggy, and some valid titles are rejected
		// FIXME: This may cause false negatives
		title = new mw.Title(title).getPrefixedText();
	} catch {
		/* empty */
	}
	return title;
};

/* Extract the context around a given link in a text string */
const extractContext = (text, link) => {
	const contextStart = link.start - cfg.radius;
	const contextEnd = link.end + cfg.radius;
	let contextPrev = text.slice(contextStart, link.start);
	if (contextStart > 0) {
		contextPrev = txt.ellipsis + contextPrev;
	}
	let contextNext = text.slice(link.end, contextEnd);
	if (contextEnd < text.length) {
		contextNext += txt.ellipsis;
	}
	return [contextPrev, text.slice(link.start, link.end), contextNext];
};

/* Extract the prefixed page name from a link */
const extractPageName = (link) => {
	let pageName = extractPageNameRaw(link);
	if (pageName) {
		const sectionPos = pageName.indexOf('#');
		let section = '';
		if (sectionPos !== -1) {
			section = pageName.slice(Math.max(0, sectionPos));
			pageName = pageName.slice(0, Math.max(0, sectionPos));
		}
		return getCanonicalTitle(pageName) + section;
	}
};

/* Extract the page name from a link, as is */
const extractPageNameRaw = (link) => {
	if (!link.hasClass('image')) {
		const href = link.attr('href');
		if (link.hasClass('new')) {
			// "Red" link
			if (href.includes(mw.config.get('wgScript'))) {
				return mw.util.getParamValue('title', href);
			}
		} else {
			const regex = mw.config.get('wgArticlePath').replace('$1', '(.*)');
			const regexResult = new RegExp(`^${regex}$`).exec(href);
			if (Array.isArray(regexResult) && regexResult.length) {
				return decodeURIComponent(regexResult[1]);
			}
		}
	}
};

/* Check whether this is a disambiguation page */
const isDisam = () => {
	const categories = mw.config.get('wgCategories', []);
	for (const category of categories) {
		const {disamCategories} = cfg;
		if (disamCategories.includes(category)) {
			return true;
		}
	}
	return false;
};

const secondsToHHMMSS = (totalSeconds) => {
	let hhmmss = '';
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = Math.floor((totalSeconds % 3600) % 60);
	if (hours >= 1) {
		hhmmss = `${pad(hours, '0', 2)}:`;
	}
	hhmmss += `${pad(minutes, '0', 2)}:${pad(seconds, '0', 2)}`;
	return hhmmss;
};

const pad = (str, z, width) => {
	str = str.toString();
	if (str.length >= width) {
		return str;
	}
	return (
		Array.from({
			length: width - str.length + 1,
		}).join(z) + str
	);
};

/* Create a new button
 * text: Text that will be displayed on the button
 * onClick: Function that will be called when the
 * button is clicked
 */
const createButton = (text, onClick) => {
	const button = $('<input>').attr({
		type: 'button',
		value: text,
	});
	button.addClass('disamassist-button').on('click', onClick);
	return button;
};

/* Given a page title and an array of possible redirects {from, to} ("canonical titles"), find the page/* * at the end of the redirect chain, if there is one. Otherwise, return the page title that was passed */
const resolveRedirect = (pageTitle, possibleRedirects) => {
	let appliedRedirect = true;
	const visitedPages = {};
	let currentPage = getCanonicalTitle(pageTitle);
	while (appliedRedirect) {
		appliedRedirect = false;
		for (const possibleRedirect of possibleRedirects) {
			if (possibleRedirect.from === currentPage) {
				if (visitedPages[possibleRedirect.to]) {
					// Redirect chain detected
					return pageTitle;
				}
				visitedPages[currentPage] = true;
				appliedRedirect = true;
				currentPage = possibleRedirect.to;
			}
		}
	}
	// No redirect rules applied for an iteration of the outer loop:
	// no more redirects. We are done
	return currentPage;
};

/* Fetch the incoming links to a page. Returns a jQuery promise/* * (success - array of titles of pages that contain links to the target page and/* * array of "canonical titles" of possible destinations of the backlinks (either/* * the target page or redirects to the target page), failure - error description)/* * page: Target page */
const getBacklinks = (page) => {
	const deferred = new $.Deferred();
	const params = {
		action: 'query',
		list: 'backlinks',
		bltitle: page,
		blredirect: true,
		bllimit: cfg.backlinkLimit,
		blnamespace: cfg.targetNamespaces.join('|'),
	};
	api.get(params)
		.done(({query}) => {
			// There might be duplicate entries in some corner cases. We don't care,
			// since we are going to check later, anyway
			const backlinks = [];
			const linkTitles = [getCanonicalTitle(page)];
			const backlinksQuery = query.backlinks;
			for (const element of backlinksQuery) {
				backlinks.push(element.title);
				if (!element.redirlinks) {
					continue;
				}
				linkTitles.push(element.title);
				const {redirlinks} = element;
				for (const {title} of redirlinks) {
					backlinks.push(title);
				}
			}
			deferred.resolve(backlinks, linkTitles);
		})
		.fail((code) => {
			deferred.reject(txt.getBacklinksError.replace('$1', code));
		});
	return deferred.promise();
};

/* Download a list of redirects for some pages. Returns a jQuery callback (success -/* * array of redirects ({from, to}), failure - error description )/* * pageTitles: Array of page titles */
const fetchRedirects = (pageTitles) => {
	const deferred = new $.Deferred();
	const currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
	const restTitles = pageTitles.slice(cfg.queryTitleLimit);
	const params = {
		action: 'query',
		titles: currentTitles.join('|'),
		redirects: true,
	};
	api.get(params)
		.done(({query}) => {
			const theseRedirects = query.redirects ?? [];
			if (restTitles.length) {
				fetchRedirects(restTitles)
					.done((redirects) => {
						deferred.resolve([...theseRedirects, ...redirects]);
					})
					.fail((description) => {
						deferred.reject(description);
					});
			} else {
				deferred.resolve(theseRedirects);
			}
		})
		.fail((code) => {
			deferred.reject(txt.fetchRedirectsError.replace('$1', code));
		});
	return deferred.promise();
};

/* Download the list of user rights for the current user. Returns a/* * jQuery promise (success - array of right names, error - error description) */
const fetchRights = () => {
	const deferred = $.Deferred();
	const params = {
		action: 'query',
		meta: 'userinfo',
		uiprop: 'rights',
	};
	api.get(params)
		.done(({query}) => {
			deferred.resolve(query.userinfo.rights);
		})
		.fail((code) => {
			deferred.reject(txt.fetchRightsError.replace('$1', code));
		});
	return deferred.promise();
};

/* Load the raw page text for a given title. Returns a jQuery promise (success - page/* * content, failure - error description)/* * pageTitle: Title of the page */
const loadPage = (pageTitle) => {
	const deferred = new $.Deferred();
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		titles: pageTitle,
		prop: 'revisions',
		rvprop: 'timestamp|content',
		meta: 'tokens',
		type: 'csrf',
	};
	api.get(params)
		.done(({query}) => {
			const [rawPage] = query.pages;
			const page = {};
			page.redirect = rawPage.redirect !== undefined;
			page.missing = rawPage.missing !== undefined;
			if (rawPage.revisions) {
				page.content = rawPage.revisions[0].content;
				page.baseTimeStamp = rawPage.revisions[0].timestamp;
			} else {
				page.content = '';
				page.baseTimeStamp = undefined;
			}
			page.startTimeStamp = rawPage.starttimestamp;
			page.editToken = query.tokens.csrftoken;
			deferred.resolve(page);
		})
		.fail((code) => {
			deferred.reject(txt.loadPageError.replace('$1', pageTitle).replace('$2', code));
		});
	return deferred.promise();
};

/* Register changes to a page, to be saved later. Returns a jQuery promise/* * (success - no params, failure - error description). Takes the same parameters/* * as savePage */
const saveWithCooldown = (...args) => {
	const deferred = new $.Deferred();
	pendingSaves.push({
		args,
		dfd: deferred,
	});
	if (!runningSaves) {
		checkAndSave();
	}
	return deferred.promise();
};

/* Save the first set of changes in the list of pending changes, providing that/* * enough time has passed since the last edit */
const checkAndSave = function () {
	if (!pendingSaves.length) {
		runningSaves = false;
		return;
	}
	runningSaves = true;
	const millisSinceLast = Date.now() - lastEditMillis;
	if (millisSinceLast < cfg.editCooldown * 1000) {
		setTimeout(checkAndSave, cfg.editCooldown * 1000 - millisSinceLast);
	} else {
		// The last edit started at least cfg.editCooldown seconds ago
		const save = pendingSaves.shift();
		savePage
			.apply(this, save.args)
			.done(() => {
				checkAndSave();
				save.dfd.resolve();
			})
			.fail((description) => {
				checkAndSave();
				save.dfd.reject(description);
			});
		// We'll use the time since the last edit started
		lastEditMillis = Date.now();
	}
};

/* Save the changes made to a page. Returns a jQuery promise (success - no params,/* * failure - error description)/* * pageTitle: Title of the page/* * page: Page data/* * summary: Summary of the changes made to the page/* * minorEdit: Whether to mark the edit as 'minor'/* * botEdit: Whether to mark the edit as 'bot' */
const savePage = (pageTitle, {editToken, content, baseTimeStamp, startTimeStamp}, summary, minorEdit, botEdit) => {
	const deferred = new $.Deferred();
	const params = {
		action: 'edit',
		title: pageTitle,
		token: editToken,
		text: content,
		basetimestamp: baseTimeStamp,
		starttimestamp: startTimeStamp,
		summary,
		watchlist: cfg.watch,
		minor: minorEdit,
		bot: botEdit,
	};
	api.post(params)
		.done(() => {
			deferred.resolve();
		})
		.fail((code) => {
			deferred.reject(txt.savePageError.replace('$1', pageTitle).replace('$2', code));
		});
	return deferred.promise();
};
