// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {initMwApi} from 'ext.gadget.Util';
import {popupStrings} from './string';

export const popups = () => {
	// STARTFILE: main.js
	// Fix later
	// Globals
	//
	// Trying to shove as many of these as possible into the pg (popup globals) object
	const pg = {
		api: {},
		re: {},
		ns: {},
		string: {},
		wiki: {},
		user: {},
		misc: {},
		option: {},
		optionDefault: {},
		flag: {},
		cache: {},
		structures: {},
		timer: {},
		counter: {},
		current: {},
		fn: {},
		endoflist: null,
	};
	/* Bail if the gadget/script is being loaded twice */
	/* An element with id "pg" would add a window.pg property, ignore such property */
	if (window.pg && !(window.pg instanceof HTMLElement)) {
		return;
	}
	/* Export to global context */
	window.pg = pg;
	// ENDFILE: main.js
	// STARTFILE: actions.js
	const setupTooltips = (container, remove, force, popData) => {
		log(`setupTooltips, container=${container}, remove=${remove}`);
		if (!container) {
			// the main initial call
			if (getValueOf('popupOnEditSelection') && document && document.editform && document.editform.wpTextbox1) {
				document.editform.wpTextbox1.onmouseup = doSelectionPopup;
			}
			// article/content is a structure-dependent thing
			container = defaultPopupsContainer();
		}
		if (!remove && !force && container.ranSetupTooltipsAlready) {
			return;
		}
		container.ranSetupTooltipsAlready = !remove;
		const anchors = container.querySelectorAll('a');
		setupTooltipsLoop(anchors, 0, 250, 100, remove, popData);
	};
	const defaultPopupsContainer = () => {
		if (getValueOf('popupOnlyArticleLinks')) {
			return (
				document.querySelector('.skin-vector-2022 .vector-body') ||
				document.querySelector('#mw_content') ||
				document.querySelector('#content') ||
				document.querySelector('#article') ||
				document
			);
		}
		return document;
	};
	const setupTooltipsLoop = function setupTooltipsLoop(anchors, begin, howmany, sleep, remove, popData, ...args) {
		log(
			simplePrintf('setupTooltipsLoop(%s,%s,%s,%s,%s)', [
				anchors,
				begin,
				howmany,
				sleep,
				remove,
				popData,
				...args,
			])
		);
		const finish = begin + howmany;
		const loopend = Math.min(finish, anchors.length);
		let j = loopend - begin;
		log(
			`setupTooltips: anchors.length=${anchors.length}, begin=${begin}, howmany=${howmany}, loopend=${loopend}, remove=${remove}`
		);
		const doTooltip = remove ? removeTooltip : addTooltip;
		// try a faster (?) loop construct
		if (j > 0) {
			do {
				const a = anchors[loopend - j];
				if (a === undefined || !a || !a.href) {
					log(`got null anchor at index ${loopend}` - j);
					continue;
				}
				doTooltip(a, popData);
			} while (--j);
		}
		if (finish < anchors.length) {
			setTimeout(() => {
				setupTooltipsLoop(anchors, finish, howmany, sleep, remove, popData);
			}, sleep);
		} else {
			if (!remove && !getValueOf('popupTocLinks')) {
				rmTocTooltips();
			}
			pg.flag.finishedLoading = true;
		}
	};
	// eliminate popups from the TOC
	// This also kills any onclick stuff that used to be going on in the toc
	const rmTocTooltips = () => {
		const toc = document.querySelector('#toc');
		if (toc) {
			const tocLinks = toc.querySelectorAll('a');
			const tocLen = tocLinks.length;
			for (let j = 0; j < tocLen; ++j) {
				removeTooltip(tocLinks[j], true);
			}
		}
	};
	const addTooltip = (a, popData) => {
		if (!isPopupLink(a)) {
			return;
		}
		a.onmouseover = mouseOverWikiLink;
		a.onmouseout = mouseOutWikiLink;
		a.onmousedown = killPopup;
		a.hasPopup = true;
		a.popData = popData;
	};
	const removeTooltip = (a) => {
		if (!a.hasPopup) {
			return;
		}
		a.onmouseover = null;
		a.onmouseout = null;
		if (a.originalTitle) {
			a.title = a.originalTitle;
		}
		a.hasPopup = false;
	};
	const removeTitle = (a) => {
		if (!a.originalTitle) {
			a.originalTitle = a.title;
		}
		a.title = '';
	};
	const restoreTitle = (a) => {
		if (a.title || !a.originalTitle) {
			return;
		}
		a.title = a.originalTitle;
	};
	const registerHooks = (np) => {
		const popupMaxWidth = getValueOf('popupMaxWidth');
		if (typeof popupMaxWidth === 'number') {
			const setMaxWidth = () => {
				np.mainDiv.style.maxWidth = `${popupMaxWidth}px`;
				np.maxWidth = popupMaxWidth;
			};
			np.addHook(setMaxWidth, 'unhide', 'before');
		}
		np.addHook(addPopupShortcuts, 'unhide', 'after');
		np.addHook(rmPopupShortcuts, 'hide', 'before');
	};
	const removeModifierKeyListener = (a) => {
		// remove listeners for modifier key if any that were added in mouseOverWikiLink
		document.removeEventListener('keydown', a.modifierKeyListener, false);
		document.removeEventListener('keyup', a.modifierKeyListener, false);
	};
	const mouseOverWikiLink = function mouseOverWikiLink(evt) {
		if (!evt && window.event) {
			evt = window.event;
		}
		// if the modifier is needed, listen for it,
		// we will remove the listener when we mouseout of this link or kill popup.
		if (getValueOf('popupModifier')) {
			// if popupModifierAction = enable, we should popup when the modifier is pressed
			// if popupModifierAction = disable, we should popup unless the modifier is pressed
			const action = getValueOf('popupModifierAction');
			const key = action === 'disable' ? 'keyup' : 'keydown';
			const self = this;
			self.modifierKeyListener = (evt) => {
				mouseOverWikiLink2(self, evt);
			};
			document.addEventListener(key, self.modifierKeyListener, false);
		}
		return mouseOverWikiLink2(this, evt);
	};
	/**
	 * Gets the references list item that the provided footnote link targets. This
	 * is typically a li element within the ol.references element inside the reflist.
	 *
	 * @param {Element} a - A footnote link.
	 * @return {Element|boolean} The targeted element, or false if one can't be found.
	 */
	const footnoteTarget = (a) => {
		const aTitle = Title.fromAnchor(a);
		// We want ".3A" rather than "%3A" or "?" here, so use the anchor property directly
		const anch = aTitle.anchor;
		if (!/^(cite_note-|_note-|endnote)/.test(anch)) {
			return false;
		}
		const lTitle = Title.fromURL(location.href);
		if (lTitle.toString(true) !== aTitle.toString(true)) {
			return false;
		}
		let el = document.querySelector(`#${anch}`);
		while (el && typeof el.nodeName === 'string') {
			const nt = el.nodeName.toLowerCase();
			if (nt === 'li') {
				return el;
			} else if (nt === 'body') {
				return false;
			} else if (el.parentNode) {
				el = el.parentNode;
			} else {
				return false;
			}
		}
		return false;
	};
	const footnotePreview = (x, navpop) => {
		setPopupHTML(`<hr>${x.innerHTML}`, 'popupPreview', navpop.idNumber);
	};
	const modifierPressed = (evt) => {
		const mod = getValueOf('popupModifier');
		if (!mod) {
			return false;
		}
		if (!evt && window.event) {
			evt = window.event;
		}
		return evt && mod && evt[`${mod.toLowerCase()}Key`];
	};
	// Checks if the correct modifier pressed/unpressed if needed
	const isCorrectModifier = (_a, evt) => {
		if (!getValueOf('popupModifier')) {
			return true;
		}
		// if popupModifierAction = enable, we should popup when the modifier is pressed
		// if popupModifierAction = disable, we should popup unless the modifier is pressed
		const action = getValueOf('popupModifierAction');
		return (action === 'enable' && modifierPressed(evt)) || (action === 'disable' && !modifierPressed(evt));
	};
	const mouseOverWikiLink2 = (a, evt) => {
		if (!isCorrectModifier(a, evt)) {
			return;
		}
		if (getValueOf('removeTitles')) {
			removeTitle(a);
		}
		if (a === pg.current.link && a.navpopup && a.navpopup.isVisible()) {
			return;
		}
		pg.current.link = a;
		if (getValueOf('simplePopups') && !pg.option.popupStructure) {
			// reset *default value* of popupStructure
			setDefault('popupStructure', 'original');
		}
		const article = new Title().fromAnchor(a);
		// set global variable (ugh) to hold article (wikipage)
		pg.current.article = article;
		if (!a.navpopup) {
			a.navpopup = newNavpopup(a, article);
			pg.current.linksHash[a.href] = a.navpopup;
			pg.current.links.push(a);
		}
		if (a.navpopup.pending === null || a.navpopup.pending !== 0) {
			// either fresh popups or those with unfinshed business are redone from scratch
			simplePopupContent(a, article);
		}
		a.navpopup.showSoonIfStable(a.navpopup.delay);
		clearInterval(pg.timer.checkPopupPosition);
		pg.timer.checkPopupPosition = setInterval(checkPopupPosition, 600);
		if (getValueOf('simplePopups') && getValueOf('popupPreviewButton') && !a.simpleNoMore) {
			const d = document.createElement('div');
			d.className = 'popupPreviewButtonDiv';
			const s = document.createElement('span');
			d.append(s);
			s.className = 'popupPreviewButton';
			s[`on${getValueOf('popupPreviewButtonEvent')}`] = () => {
				a.simpleNoMore = true;
				d.style.display = 'none';
				nonsimplePopupContent(a, article);
			};
			s.innerHTML = popupString('show preview');
			setPopupHTML(d, 'popupPreview', a.navpopup.idNumber);
		}
		if (a.navpopup.pending !== 0) {
			nonsimplePopupContent(a, article);
		}
	};
	// simplePopupContent: the content that do not require additional download
	// (it is shown even when simplePopups is true)
	const simplePopupContent = (a, article) => {
		/* FIXME hack */
		a.navpopup.hasPopupMenu = false;
		a.navpopup.setInnerHTML(popupHTML(a));
		fillEmptySpans({
			navpopup: a.navpopup,
		});
		if (getValueOf('popupDraggable')) {
			let dragHandle = getValueOf('popupDragHandle') || null;
			if (dragHandle && dragHandle !== 'all') {
				dragHandle += a.navpopup.idNumber;
			}
			setTimeout(() => {
				a.navpopup.makeDraggable(dragHandle);
			}, 150);
		}
		if (getValueOf('popupRedlinkRemoval') && a.className === 'new') {
			setPopupHTML(`<br>${popupRedlinkHTML(article)}`, 'popupRedlink', a.navpopup.idNumber);
		}
	};
	const debugData = (navpopup) => {
		if (getValueOf('popupDebugging') && navpopup.idNumber) {
			setPopupHTML(`idNumber=${navpopup.idNumber}, pending=${navpopup.pending}`, 'popupError', navpopup.idNumber);
		}
	};
	const newNavpopup = (a, article) => {
		const navpopup = new Navpopup();
		navpopup.fuzz = 5;
		navpopup.delay = getValueOf('popupDelay') * 1000;
		// increment global counter now
		navpopup.idNumber = ++pg.idNumber;
		navpopup.parentAnchor = a;
		navpopup.parentPopup = a.popData && a.popData.owner;
		navpopup.article = article;
		registerHooks(navpopup);
		return navpopup;
	};
	// Should we show nonsimple context?
	// If simplePopups is set to true, then we do not show nonsimple context,
	// but if a bottom "show preview" was clicked we do show nonsimple context
	const shouldShowNonSimple = (a) => {
		return !getValueOf('simplePopups') || a.simpleNoMore;
	};
	// Should we show nonsimple context govern by the option (e.g. popupUserInfo)?
	// If the user explicitly asked for nonsimple context by setting the option to true,
	// then we show it even in nonsimple mode.
	const shouldShow = (a, option) => {
		if (shouldShowNonSimple(a)) {
			return getValueOf(option);
		}
		return window[option] !== undefined && window[option];
	};
	const nonsimplePopupContent = (a, article) => {
		let diff;
		let history;
		const params = parseParams(a.href);
		const oldid = params.oldid === undefined ? null : params.oldid;
		if (shouldShow(a, 'popupPreviewDiffs')) {
			({diff} = params);
		}
		if (shouldShow(a, 'popupPreviewHistory')) {
			history = params.action === 'history';
		}
		a.navpopup.pending = 0;
		const referenceElement = footnoteTarget(a);
		if (referenceElement) {
			footnotePreview(referenceElement, a.navpopup);
		} else if (diff || diff === 0) {
			loadDiff(article, oldid, diff, a.navpopup);
		} else if (history) {
			loadAPIPreview('history', article, a.navpopup);
		} else if (shouldShowNonSimple(a) && pg.re.contribs.test(a.href)) {
			loadAPIPreview('contribs', article, a.navpopup);
		} else if (shouldShowNonSimple(a) && pg.re.backlinks.test(a.href)) {
			loadAPIPreview('backlinks', article, a.navpopup);
		} else if (
			// FIXME should be able to get all preview combinations with options
			article.namespaceId() === pg.nsImageId &&
			(shouldShow(a, 'imagePopupsForImages') || !anchorContainsImage(a))
		) {
			loadAPIPreview('imagepagepreview', article, a.navpopup);
			loadImage(article, a.navpopup);
		} else {
			if (article.namespaceId() === pg.nsCategoryId && shouldShow(a, 'popupCategoryMembers')) {
				loadAPIPreview('category', article, a.navpopup);
			} else if (
				(article.namespaceId() === pg.nsUserId || article.namespaceId() === pg.nsUsertalkId) &&
				shouldShow(a, 'popupUserInfo')
			) {
				loadAPIPreview('userinfo', article, a.navpopup);
			}
			if (shouldShowNonSimple(a)) {
				startArticlePreview(article, oldid, a.navpopup);
			}
		}
	};
	const pendingNavpopTask = (navpop) => {
		if (navpop && navpop.pending === null) {
			navpop.pending = 0;
		}
		++navpop.pending;
		debugData(navpop);
	};
	const completedNavpopTask = (navpop) => {
		if (navpop && navpop.pending) {
			--navpop.pending;
		}
		debugData(navpop);
	};
	const startArticlePreview = (article, oldid, navpop) => {
		navpop.redir = 0;
		loadPreview(article, oldid, navpop);
	};
	const loadPreview = (article, oldid, navpop) => {
		if (!navpop.redir) {
			navpop.originalArticle = article;
		}
		article.oldid = oldid;
		loadAPIPreview('revision', article, navpop);
	};
	const loadPreviewFromRedir = (redirMatch, navpop) => {
		// redirMatch is a regex match
		const target = new Title().fromWikiText(redirMatch[2]);
		// overwrite (or add) anchor from original target
		// mediawiki does overwrite
		if (navpop.article.anchor) {
			target.anchor = navpop.article.anchor;
		}
		navpop.redir++;
		navpop.redirTarget = target;
		const warnRedir = redirLink(target, navpop.article);
		setPopupHTML(warnRedir, 'popupWarnRedir', navpop.idNumber);
		navpop.article = target;
		fillEmptySpans({
			redir: true,
			redirTarget: target,
			navpopup: navpop,
		});
		return loadPreview(target, null, navpop);
	};
	const insertPreview = (download) => {
		if (!download.owner) {
			return;
		}
		const redirMatch = pg.re.redirect.exec(download.data);
		if (download.owner.redir === 0 && redirMatch) {
			loadPreviewFromRedir(redirMatch, download.owner);
			return;
		}
		if (download.owner.visible || !getValueOf('popupLazyPreviews')) {
			insertPreviewNow(download);
		} else {
			const id = download.owner.redir ? 'PREVIEW_REDIR_HOOK' : 'PREVIEW_HOOK';
			download.owner.addHook(
				() => {
					insertPreviewNow(download);
					return true;
				},
				'unhide',
				'after',
				id
			);
		}
	};
	const insertPreviewNow = (download) => {
		if (!download.owner) {
			return;
		}
		const wikiText = download.data;
		const navpop = download.owner;
		const art = navpop.redirTarget || navpop.originalArticle;
		makeFixDabs(wikiText, navpop);
		if (getValueOf('popupSummaryData')) {
			getPageInfo(wikiText, download);
			setPopupTrailer(getPageInfo(wikiText, download), navpop.idNumber);
		}
		let imagePage = '';
		imagePage = art.namespaceId() === pg.nsImageId ? art.toString() : getValidImageFromWikiText(wikiText);
		if (imagePage) {
			loadImage(Title.fromWikiText(imagePage), navpop);
		}
		if (getValueOf('popupPreviews')) {
			insertArticlePreview(download, art, navpop);
		}
	};
	const insertArticlePreview = (download, art, navpop) => {
		if (download && typeof download.data === typeof '') {
			if (art.namespaceId() === pg.nsTemplateId && getValueOf('popupPreviewRawTemplates')) {
				// FIXME compare/consolidate with diff escaping code for wikitext
				const h = `<hr><span style="font-family: monospace;">${download.data
					.entify()
					.split(String.raw`\n`)
					.join(String.raw`<br>\n`)}</span>`;
				setPopupHTML(h, 'popupPreview', navpop.idNumber);
			} else {
				const p = prepPreviewmaker(download.data, art, navpop);
				p.showPreview();
			}
		}
	};
	const prepPreviewmaker = (data, article, navpop) => {
		// deal with tricksy anchors
		const d = anchorize(data, article.anchorString());
		const urlBase = joinPath([pg.wiki.articlebase, article.urlString()]);
		const p = new Previewmaker(d, urlBase, navpop);
		return p;
	};
	// Try to imitate the way mediawiki generates HTML anchors from section titles
	const anchorize = (d, anch) => {
		if (!anch) {
			return d;
		}
		const anchRe = new RegExp(
			`(?:=+\\s*${literalizeRegex(anch).replace(/[ _]/g, '[_ ]')}\\s*=+|\\{\\{\\s*${getValueOf(
				'popupAnchorRegexp'
			)}\\s*(?:\\|[^|}]*)*?\\s*${literalizeRegex(anch)}\\s*(?:\\|[^}]*)?}})`
		);
		const match = d.match(anchRe);
		if (match && match.length > 0 && match[0]) {
			return d.slice(Math.max(0, d.indexOf(match[0])));
		}
		// now try to deal with === foo [[bar|baz]] boom === -> #foo_baz_boom
		const lines = d.split('\n');
		for (let i = 0; i < lines.length; ++i) {
			lines[i] = lines[i]
				.replace(/\[{2}([^\]|]*?\|)?(.*?)]{2}/g, '$2')
				.replace(/'''([^'])/g, '$1')
				.replace(/''([^'])/g, '$1');
			if (anchRe.test(lines[i])) {
				return d
					.split('\n')
					.slice(i)
					.join('\n')
					.replace(/^[^=]*/, '');
			}
		}
		return d;
	};
	const killPopup = function killPopup() {
		removeModifierKeyListener(this);
		if (getValueOf('popupShortcutKeys')) {
			rmPopupShortcuts();
		}
		if (!pg) {
			return;
		}
		if (pg.current.link && pg.current.link.navpopup) {
			pg.current.link.navpopup.banish();
		}
		pg.current.link = null;
		abortAllDownloads();
		if (pg.timer.checkPopupPosition) {
			clearInterval(pg.timer.checkPopupPosition);
			pg.timer.checkPopupPosition = null;
		}
		return true; // preserve default action
	};
	// ENDFILE: actions.js
	// STARTFILE: domdrag.js
	/**
	 * @fileoverview
	 * The {@source Drag} object, which enables objects to be dragged around.
	 * <pre>
	 *
	 * dom-drag.js
	 * 09.25.2001
	 * www.youngpup.net
	 *
	 * 10.28.2001 - fixed minor bug where events
	 *
	 * sometimes fired off the handle, not the root.
	 * Pared down, some hooks added by Lupin
	 * Copyright Aaron Boodman.
	 * Saying stupid things daily since March 2001.
	 * </pre>
	 */
	/**
	 * Creates a new Drag object. This is used to make various DOM elements draggable.
	 *
	 * @constructor
	 */
	class Drag {
		constructor() {
			/**
			 * Condition to determine whether or not to drag. This function should take one parameter,
			 * an Event.  To disable this, set it to <code>null</code>.
			 *
			 * @type Function
			 */
			this.startCondition = null;
			/**
			 * Hook to be run when the drag finishes. This is passed the final coordinates of the
			 * dragged object (two integers, x and y). To disables this, set it to <code>null</code>.
			 *
			 * @type Function
			 */
			this.endHook = null;
		}
		/**
		 * Gets an event in a cross-browser manner.
		 *
		 * @param {Event} e
		 * @private
		 */
		static fixE(e) {
			if (e === undefined) {
				e = window.event;
			}
			if (e.layerX === undefined) {
				e.layerX = e.offsetX;
			}
			if (e.layerY === undefined) {
				e.layerY = e.offsetY;
			}
			return e;
		}
		/**
		 * Initialises the Drag instance by telling it which object you want to be draggable, and what
		 * you want to drag it by.
		 *
		 * @param {DOMElement} o The "handle" by which <code>oRoot</code> is dragged.
		 * @param {DOMElement} oRoot The object which moves when <code>o</code> is dragged, or <code>o</code> if omitted.
		 */
		init(o, oRoot) {
			const self = this;
			this.obj = o;
			o.onmousedown = (e) => {
				self.start(e);
			};
			o.dragging = false;
			o.popups_draggable = true;
			o.hmode = true;
			o.vmode = true;
			o.root = oRoot || o;
			if (Number.isNaN(Number.parseInt(o.root.style.left, 10))) {
				o.root.style.left = '0px';
			}
			if (Number.isNaN(Number.parseInt(o.root.style.top, 10))) {
				o.root.style.top = '0px';
			}
			o.root.onthisStart = () => {};
			o.root.onthisEnd = () => {};
			o.root.onthis = () => {};
		}
		/**
		 * Starts the drag.
		 *
		 * @private
		 * @param {Event} e
		 */
		start(e) {
			const o = this.obj; // = this;
			e = Drag.fixE(e);
			if (this.startCondition && !this.startCondition(e)) {
				return;
			}
			const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
			const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
			o.root.onthisStart(x, y);
			o.lastMouseX = e.clientX;
			o.lastMouseY = e.clientY;
			const self = this;
			o.onmousemoveDefault = document.onmousemove;
			o.dragging = true;
			document.onmousemove = (e) => {
				self.drag(e);
			};
			document.onmouseup = (e) => {
				self.end(e);
			};
			return false;
		}
		/**
		 * Does the drag.
		 *
		 * @param {Event} e
		 * @private
		 */
		drag(e) {
			e = Drag.fixE(e);
			const o = this.obj;
			const ey = e.clientY;
			const ex = e.clientX;
			const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
			const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
			const nx = x + (ex - o.lastMouseX) * (o.hmode ? 1 : -1);
			const ny = y + (ey - o.lastMouseY) * (o.vmode ? 1 : -1);
			this.obj.root.style[o.hmode ? 'left' : 'right'] = `${nx}px`;
			this.obj.root.style[o.vmode ? 'top' : 'bottom'] = `${ny}px`;
			this.obj.lastMouseX = ex;
			this.obj.lastMouseY = ey;
			this.obj.root.onthis(nx, ny);
			return false;
		}
		/**
		 * Ends the drag.
		 *
		 * @private
		 */
		end() {
			document.onmousemove = this.obj.onmousemoveDefault;
			document.onmouseup = null;
			this.obj.dragging = false;
			if (this.endHook) {
				this.endHook(
					Number.parseInt(this.obj.root.style[this.obj.hmode ? 'left' : 'right'], 10),
					Number.parseInt(this.obj.root.style[this.obj.vmode ? 'top' : 'bottom'], 10)
				);
			}
		}
	}
	// ENDFILE: domdrag.js
	// STARTFILE: structures.js
	pg.structures.original = {};
	pg.structures.original.popupLayout = () => {
		return [
			'popupError',
			'popupImage',
			'popupTopLinks',
			'popupTitle',
			'popupUserData',
			'popupData',
			'popupOtherLinks',
			'popupRedir',
			['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
			'popupMiscTools',
			['popupRedlink'],
			'popupPrePreviewSep',
			'popupPreview',
			'popupSecondPreview',
			'popupPreviewMore',
			'popupPostPreview',
			'popupFixDab',
		];
	};
	pg.structures.original.popupRedirSpans = () => {
		return [
			'popupRedir',
			'popupWarnRedir',
			'popupRedirTopLinks',
			'popupRedirTitle',
			'popupRedirData',
			'popupRedirOtherLinks',
		];
	};
	pg.structures.original.popupTitle = (x) => {
		log('defaultstructure.popupTitle');
		if (!getValueOf('popupNavLinks')) {
			return navlinkStringToHTML('<b><<mainlink>></b>', x.article, x.params);
		}
		return '';
	};
	pg.structures.original.popupTopLinks = (x) => {
		log('defaultstructure.popupTopLinks');
		if (getValueOf('popupNavLinks')) {
			return navLinksHTML(x.article, x.hint, x.params);
		}
		return '';
	};
	pg.structures.original.popupImage = (x) => {
		log(`original.popupImage, x.article=${x.article}, x.navpop.idNumber=${x.navpop.idNumber}`);
		return imageHTML(x.article, x.navpop.idNumber);
	};
	pg.structures.original.popupRedirTitle = pg.structures.original.popupTitle;
	pg.structures.original.popupRedirTopLinks = pg.structures.original.popupTopLinks;
	const copyStructure = (oldStructure, newStructure) => {
		pg.structures[newStructure] = {};
		for (const prop in pg.structures[oldStructure]) {
			if (!Object.hasOwn(pg.structures[oldStructure], prop)) {
				continue;
			}
			pg.structures[newStructure][prop] = pg.structures[oldStructure][prop];
		}
	};
	copyStructure('original', 'nostalgia');
	pg.structures.nostalgia.popupTopLinks = (x) => {
		let str = '';
		str += '<b><<mainlink|shortcut= >></b>';
		// user links
		// contribs - log - count - email - block
		// count only if applicable; block only if popupAdminLinks
		str += 'if(user){<br><<contribs|shortcut=c>>';
		str += 'if(wikimedia){*<<count|shortcut=#>>}';
		str += 'if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>}}';
		// editing links
		// talkpage   -> edit|new - history - un|watch - article|edit
		// other page -> edit - history - un|watch - talk|edit|new
		const editstr = '<<edit|shortcut=e>>';
		const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
		const historystr = '<<history|shortcut=h>>';
		const watchstr = '<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>';
		str +=
			`<br>if(talk){${editOldidStr}|<<new|shortcut=+>>` +
			`*${historystr}*${watchstr}*` +
			'<b><<article|shortcut=a>></b>|<<editArticle|edit>>' +
			`}else{${
				// not a talk page
				editOldidStr
			}*${historystr}*${watchstr}*` +
			'<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}';
		// misc links
		str += '<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>';
		str += 'if(admin){<br>}else{*}<<move|shortcut=m>>';
		// admin links
		str +=
			'if(admin){*<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*' +
			'<<undelete|undeleteShort>>|<<delete|shortcut=d>>}';
		return navlinkStringToHTML(str, x.article, x.params);
	};
	pg.structures.nostalgia.popupRedirTopLinks = pg.structures.nostalgia.popupTopLinks;
	/** -- fancy -- */
	copyStructure('original', 'fancy');
	pg.structures.fancy.popupTitle = (x) => {
		return navlinkStringToHTML('<font size=+0><<mainlink>></font>', x.article, x.params);
	};
	pg.structures.fancy.popupTopLinks = (x) => {
		const hist = '<<history|shortcut=h|hist>>|<<lastEdit|shortcut=/|last>>|<<editors|shortcut=E|eds>>';
		const watch = '<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>';
		const move = '<<move|shortcut=m|move>>';
		return navlinkStringToHTML(
			'if(talk){' +
				`<<edit|shortcut=e>>|<<new|shortcut=+|+>>*${hist}*` +
				'<<article|shortcut=a>>|<<editArticle|edit>>' +
				`*${watch}*${move}}else{<<edit|shortcut=e>>*${hist}*<<talk|shortcut=t|>>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>` +
				`*${watch}*${move}}<br>`,
			x.article,
			x.params
		);
	};
	pg.structures.fancy.popupOtherLinks = (x) => {
		const admin =
			'<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d|del>>';
		let user = '<<contribs|shortcut=c>>if(wikimedia){|<<count|shortcut=#|#>>}';
		user += `if(ipuser){|<<arin>>}else{*<<email|shortcut=E|${popupString(
			'email'
		)}>>}if(admin){*<<block|shortcut=b>>}`;
		const normal = '<<whatLinksHere|shortcut=l|links here>>*<<relatedChanges|shortcut=r|related>>';
		return navlinkStringToHTML(
			`<br>if(user){${user}*}if(admin){${admin}if(user){<br>}else{*}}${normal}`,
			x.article,
			x.params
		);
	};
	pg.structures.fancy.popupRedirTitle = pg.structures.fancy.popupTitle;
	pg.structures.fancy.popupRedirTopLinks = pg.structures.fancy.popupTopLinks;
	pg.structures.fancy.popupRedirOtherLinks = pg.structures.fancy.popupOtherLinks;
	/** -- fancy2 -- */
	// hack for MacGyverMagic
	copyStructure('fancy', 'fancy2');
	pg.structures.fancy2.popupTopLinks = // hack out the <br> at the end and put one at the beginning
		(x) => {
			return `<br>${pg.structures.fancy.popupTopLinks(x).replace(/<br>$/i, '')}`;
		};
	pg.structures.fancy2.popupLayout = () => {
		return [
			'popupError',
			'popupImage',
			'popupTitle',
			'popupUserData',
			'popupData',
			'popupTopLinks',
			'popupOtherLinks',
			'popupRedir',
			['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
			'popupMiscTools',
			['popupRedlink'],
			'popupPrePreviewSep',
			'popupPreview',
			'popupSecondPreview',
			'popupPreviewMore',
			'popupPostPreview',
			'popupFixDab',
		];
	};
	/** -- menus -- */
	copyStructure('original', 'menus');
	pg.structures.menus.popupLayout = () => {
		return [
			'popupError',
			'popupImage',
			'popupTopLinks',
			'popupTitle',
			'popupOtherLinks',
			'popupRedir',
			['popupWarnRedir', 'popupRedirTopLinks', 'popupRedirTitle', 'popupRedirData', 'popupRedirOtherLinks'],
			'popupUserData',
			'popupData',
			'popupMiscTools',
			['popupRedlink'],
			'popupPrePreviewSep',
			'popupPreview',
			'popupSecondPreview',
			'popupPreviewMore',
			'popupPostPreview',
			'popupFixDab',
		];
	};
	pg.structures.menus.popupTopLinks = (x, shorter) => {
		// FIXME maybe this stuff should be cached
		const s = [];
		const dropdiv = '<div class="popup_drop">';
		const enddiv = '</div>';
		let hist = '<<history|shortcut=h>>';
		if (!shorter) {
			hist = `<menurow>${hist}|<<historyfeed|rss>>|<<editors|shortcut=E>></menurow>`;
		}
		const lastedit = '<<lastEdit|shortcut=/|show last edit>>';
		const thank = 'if(diff){<<thank|send thanks>>}';
		const jsHistory = '<<lastContrib|last set of edits>><<sinceMe|changes since mine>>';
		const linkshere = '<<whatLinksHere|shortcut=l|what links here>>';
		const related = '<<relatedChanges|shortcut=r|related changes>>';
		const search = '<menurow><<search|shortcut=s>></menurow>';
		const watch = '<menurow><<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>></menurow>';
		const protect = '<menurow><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>></menurow>';
		const del = '<menurow><<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>></menurow>';
		const move = '<<move|shortcut=m|move page>>';
		const nullPurge = '<menurow><<nullEdit|shortcut=n|null edit>>|<<purge|shortcut=P>></menurow>';
		const viewOptions = '<menurow><<view|shortcut=v>>|<<render|shortcut=S>>|<<raw>></menurow>';
		const editRow =
			'if(oldid){' +
			'<menurow><<edit|shortcut=e>>|<<editOld|shortcut=e|this&nbsp;revision>></menurow>' +
			'<menurow><<revert|shortcut=v>>|<<undo>></menurow>' +
			'}else{<<edit|shortcut=e>>}';
		const markPatrolled = 'if(rcid){<<markpatrolled|mark patrolled>>}';
		const newTopic = 'if(talk){<<new|shortcut=+|new topic>>}';
		const protectDelete = `if(admin){${protect}${del}}`;
		if (getValueOf('popupActionsMenu')) {
			s.push(`<<mainlink>>*${dropdiv}${menuTitle('actions')}`);
		} else {
			s.push(`${dropdiv}<<mainlink>>`);
		}
		s.push('<menu>', editRow + markPatrolled + newTopic + hist + lastedit + thank);
		if (!shorter) {
			s.push(jsHistory);
		}
		s.push(move + linkshere + related);
		if (!shorter) {
			s.push(nullPurge + search);
		}
		if (!shorter) {
			s.push(viewOptions);
		}
		s.push(
			`<hr>${watch}${protectDelete}`,
			'<hr>' +
				'if(talk){<<article|shortcut=a|view article>><<editArticle|edit article>>}' +
				'else{<<talk|shortcut=t|talk page>><<editTalk|edit talk>>' +
				`<<newTalk|shortcut=+|new topic>>}</menu>${enddiv}`
		);
		// user menu starts here
		const email = '<<email|shortcut=E|email user>>';
		const contribs =
			'if(wikimedia){<menurow>}<<contribs|shortcut=c|contributions>>if(wikimedia){</menurow>}' +
			'if(admin){<menurow><<deletedContribs>></menurow>}';
		s.push(
			`if(user){*${dropdiv}${menuTitle('user')}`,
			'<menu>',
			'<menurow><<userPage|shortcut=u|user&nbsp;page>>|<<userSpace|space>></menurow>',
			'<<userTalk|shortcut=t|user talk>><<editUserTalk|edit user talk>>' +
				'<<newUserTalk|shortcut=+|leave comment>>'
		);
		if (shorter) {
			s.push(`if(ipuser){}else{${email}}`);
		} else {
			s.push(`if(ipuser){<<arin>>}else{${email}}`);
		}
		s.push(
			`<hr>${contribs}<<userlog|shortcut=L|user log>>`,
			'if(wikimedia){<<count|shortcut=#|edit counter>>}',
			'if(admin){<menurow><<unblock|unblockShort>>|<<block|shortcut=b|block user>></menurow>}',
			'<<blocklog|shortcut=B|block log>>',
			`</menu>${enddiv}}`
		);
		// popups menu starts here
		if (getValueOf('popupSetupMenu') && !x.navpop.hasPopupMenu /* FIXME: hack */) {
			x.navpop.hasPopupMenu = true;
			s.push(
				`*${dropdiv}${menuTitle('popupsMenu')}<menu>`,
				'<<togglePreviews|toggle previews>>',
				'<<purgePopups|reset>>',
				'<<disablePopups|disable>>',
				`</menu>${enddiv}`
			);
		}
		return navlinkStringToHTML(s.join(''), x.article, x.params);
	};
	const menuTitle = (s) => {
		return `<a href="#" noPopup=1>${popupString(s)}</a>`;
	};
	pg.structures.menus.popupRedirTitle = pg.structures.menus.popupTitle;
	pg.structures.menus.popupRedirTopLinks = pg.structures.menus.popupTopLinks;
	copyStructure('menus', 'shortmenus');
	pg.structures.shortmenus.popupTopLinks = (x) => {
		return pg.structures.menus.popupTopLinks(x, true);
	};
	pg.structures.shortmenus.popupRedirTopLinks = pg.structures.shortmenus.popupTopLinks;
	pg.structures.lite = {};
	pg.structures.lite.popupLayout = () => {
		return ['popupTitle', 'popupPreview'];
	};
	pg.structures.lite.popupTitle = (x) => {
		log(`${x.article}: structures.lite.popupTitle`);
		// return navlinkStringToHTML('<b><<mainlink>></b>',x.article,x.params);
		return `<div><span class="popup_mainlink"><b>${x.article.toString()}</b></span></div>`;
	};
	// ENDFILE: structures.js
	// STARTFILE: autoedit.js
	const substitute = (data, cmdBody) => {
		// mw.notify(`sub\nfrom: ${cmdBody.from}\nto: ${cmdBody.to}\nflags: ${cmdBody.flags}`, {tag: 'popups', type: 'warn'});
		const fromRe = new RegExp(cmdBody.from, cmdBody.flags);
		return data.replace(fromRe, cmdBody.to);
	};
	const execCmds = (data, cmdList) => {
		for (const element of cmdList) {
			data = element.action(data, element);
		}
		return data;
	};
	const parseCmd = function parseCmd(str) {
		// returns a list of commands
		if (str.length === 0) {
			return [];
		}
		let p = false;
		switch (str.charAt(0)) {
			case 's':
				p = parseSubstitute(str);
				break;
			default:
				return false;
		}
		if (p) {
			return [p, parseCmd(p.remainder)];
		}
		return false;
	};
	// FIXME: Only used once here, confusing with native (and more widely-used) unescape, should probably be replaced
	// Then again, unescape is semi-soft-deprecated, so we should look into replacing that too
	const unEscape = (str, sep) => {
		return str
			.split('\\\\')
			.join('\\')
			.split(`\\${sep}`)
			.join(sep)
			.split(String.raw`\n`)
			.join('\n');
	};
	const parseSubstitute = (str) => {
		// takes a string like s/a/b/flags;othercmds and parses it
		let from;
		let to;
		let flags;
		let tmp;
		if (str.length < 4) {
			return false;
		}
		const sep = str.charAt(1);
		str = str.slice(2);
		tmp = skipOver(str, sep);
		if (tmp) {
			from = tmp.segment;
			str = tmp.remainder;
		} else {
			return false;
		}
		tmp = skipOver(str, sep);
		if (tmp) {
			to = tmp.segment;
			str = tmp.remainder;
		} else {
			return false;
		}
		flags = '';
		if (str.length > 0) {
			tmp = skipOver(str, ';') || skipToEnd(str, ';');
			if (tmp) {
				flags = tmp.segment;
				str = tmp.remainder;
			}
		}
		return {
			action: substitute,
			from,
			to,
			flags,
			remainder: str,
		};
	};
	const skipOver = (str, sep) => {
		const endSegment = findNext(str, sep);
		if (endSegment < 0) {
			return false;
		}
		const segment = unEscape(str.slice(0, Math.max(0, endSegment)), sep);
		return {
			segment,
			remainder: str.slice(Math.max(0, endSegment + 1)),
		};
	};
	const skipToEnd = (str, _sep) => {
		return {
			segment: str,
			remainder: '',
		};
	};
	const findNext = (str, ch) => {
		for (let i = 0; i < str.length; ++i) {
			if (str.charAt(i) === '\\') {
				i += 2;
			}
			if (str.charAt(i) === ch) {
				return i;
			}
		}
		return -1;
	};
	const setCheckbox = (param, box) => {
		const val = mw.util.getParamValue(param);
		if (val) {
			switch (val) {
				case '1':
				case 'yes':
				case 'true':
					box.checked = true;
					break;
				case '0':
				case 'no':
				case 'false':
					box.checked = false;
			}
		}
	};
	const autoEdit = function autoEdit() {
		setupPopups(() => {
			if (mw.util.getParamValue('autoimpl') !== popupString('autoedit_version')) {
				return false;
			}
			if (mw.util.getParamValue('autowatchlist') && mw.util.getParamValue('actoken') === autoClickToken()) {
				pg.fn.modifyWatchlist(mw.util.getParamValue('title'), mw.util.getParamValue('action'));
			}
			if (!document.editform) {
				return false;
			}
			if (autoEdit.alreadyRan) {
				return false;
			}
			autoEdit.alreadyRan = true;
			const cmdString = mw.util.getParamValue('autoedit');
			if (cmdString) {
				try {
					const editbox = document.editform.wpTextbox1;
					const cmdList = parseCmd(cmdString);
					const input = editbox.value;
					const output = execCmds(input, cmdList);
					editbox.value = output;
				} catch {
					return;
				}
			}
			setCheckbox('autominor', document.editform.wpMinoredit);
			setCheckbox('autowatch', document.editform.wpWatchthis);
			const rvid = mw.util.getParamValue('autorv');
			if (rvid) {
				const url = `${pg.wiki.apiwikibase}?action=query&format=json&formatversion=2&prop=revisions&revids=${rvid}`;
				startDownload(url, null, autoEdit2);
			} else {
				autoEdit2();
			}
		});
	};
	const autoEdit2 = (d) => {
		let summary = mw.util.getParamValue('autosummary');
		let summaryprompt = mw.util.getParamValue('autosummaryprompt');
		let summarynotice = '';
		if (d && d.data && mw.util.getParamValue('autorv')) {
			const s = getRvSummary(summary, d.data);
			if (s === false) {
				summaryprompt = true;
				summarynotice = popupString('Failed to get revision information, please edit manually.\n\n');
				summary = simplePrintf(summary, [mw.util.getParamValue('autorv'), '(unknown)', '(unknown)']);
			} else {
				summary = s;
			}
		}
		if (summaryprompt) {
			const txt = summarynotice + popupString('Enter a non-empty edit summary or press cancel to abort');
			const response = prompt(txt, summary);
			if (response) {
				summary = response;
			} else {
				return;
			}
		}
		if (summary) {
			document.editform.wpSummary.value = summary;
		}
		// Attempt to avoid possible premature clicking of the save button
		// (maybe delays in updates to the DOM are to blame?? or a red herring)
		setTimeout(autoEdit3, 100);
	};
	const autoClickToken = () => {
		return mw.user.sessionId();
	};
	const autoEdit3 = () => {
		if (mw.util.getParamValue('actoken') !== autoClickToken()) {
			return;
		}
		const btn = mw.util.getParamValue('autoclick');
		if (btn) {
			if (document.editform && document.editform[btn]) {
				const button = document.editform[btn];
				const msg = tprintf(
					'The %s button has been automatically clicked. Please wait for the next page to load.',
					[button.value]
				);
				bannerMessage(msg);
				document.title = `(${document.title})`;
				button.click();
			} else {
				mw.notify(
					tprintf('Could not find button %s. Please check the settings in your javascript file.', [btn]),
					{tag: 'popups', type: 'error'}
				);
			}
		}
	};
	const bannerMessage = (s) => {
		const headings = document.querySelectorAll('h1');
		if (headings) {
			const div = document.createElement('div');
			div.innerHTML = `<font size=+1><b>${pg.escapeQuotesHTML(s)}</b></font>`;
			headings[0].parentNode.insertBefore(div, headings[0]);
		}
	};
	const getRvSummary = (template, json) => {
		try {
			const o = getJsObj(json);
			const [edit] = anyChild(o.query.pages).revisions;
			const timestamp = edit.timestamp
				.split(/[A-Z]/g)
				.join(' ')
				.replace(/^ *| *$/g, '');
			return simplePrintf(template, [edit.revid, timestamp, edit.userhidden ? '(hidden)' : edit.user]);
		} catch {
			return false;
		}
	};
	// ENDFILE: autoedit.js
	// STARTFILE: downloader.js
	/**
	 * @fileoverview
	 * {@source Downloader}, a xmlhttprequest wrapper, and helper functions.
	 */
	/**
	 * Creates a new Downloader
	 *
	 * @constructor
	 * @class The Downloader class. Create a new instance of this class to download stuff.
	 * @param {string} url The url to download. This can be omitted and supplied later.
	 */
	class Downloader {
		constructor(url) {
			if (typeof XMLHttpRequest !== 'undefined') {
				this.http = new XMLHttpRequest();
			}
			/**
			 * The url to download
			 *
			 * @type String
			 */
			this.url = url;
			/**
			 * A universally unique ID number
			 *
			 * @type integer
			 */
			this.id = null;
			/**
			 * Modification date, to be culled from the incoming headers
			 *
			 * @type Date
			 * @private
			 */
			this.lastModified = null;
			/**
			 * What to do when the download completes successfully
			 *
			 * @type Function
			 * @private
			 */
			this.callbackFunction = null;
			/**
			 * What to do on failure
			 *
			 * @type Function
			 * @private
			 */
			this.onFailure = null;
			/**
			 * Flag set on <code>abort</code>
			 *
			 * @type boolean
			 */
			this.aborted = false;
			/**
			 * HTTP method. See https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html for
			 * possibilities.
			 *
			 * @type String
			 */
			this.method = 'GET';
			/**
			 * Async flag.
			 *
			 * @type boolean
			 */
			this.async = true;
		}
		/**
		 * Submits the http request.
		 *
		 * @param {*} x
		 */
		send(x) {
			if (!this.http) {
				return null;
			}
			return this.http.send(x);
		}
		/* Aborts the download, setting the <code>aborted</code> field to true. */
		abort() {
			if (!this.http) {
				return null;
			}
			this.aborted = true;
			return this.http.abort();
		}
		/** Returns the downloaded data. */
		getData() {
			if (!this.http) {
				return null;
			}
			return this.http.responseText;
		}
		/** Prepares the download. */
		setTarget() {
			if (!this.http) {
				return null;
			}
			this.http.open(this.method, this.url, this.async);
			this.http.setRequestHeader('Api-User-Agent', pg.api.userAgent);
		}
		/** Gets the state of the download. */
		getReadyState() {
			if (!this.http) {
				return null;
			}
			return this.http.readyState;
		}
		/**
		 * Starts the download.
		 * Note that setTarget {@source Downloader#setTarget} must be run first
		 */
		start() {
			if (!this.http) {
				return;
			}
			const self = this;
			pg.misc.downloadsInProgress[this.id] = self;
			this.http.send(null);
		}
		/**
		 * Gets the 'Last-Modified' date from the download headers.
		 * Should be run after the download completes.
		 * Returns <code>null</code> on failure.
		 *
		 * @return {Date}
		 */
		getLastModifiedDate() {
			if (!this.http) {
				return null;
			}
			let lastmod;
			try {
				lastmod = this.http.getResponseHeader('Last-Modified');
			} catch {
				/* empty */
			}
			if (lastmod) {
				return new Date(lastmod);
			}
			return null;
		}
		/**
		 * Sets the callback function.
		 *
		 * @param {Function} f callback function, called as <code>f(this)</code> on success
		 */
		setCallback(f) {
			if (!this.http) {
				return;
			}
			this.http.onreadystatechange = f;
		}
		getStatus() {
			if (!this.http) {
				return null;
			}
			return this.http.status;
		}
	}
	new Downloader();
	pg.misc.downloadsInProgress = {};
	// helper functions
	/**
	 * Creates a new {@source Downloader} and prepares it for action.
	 *
	 * @param {string} url The url to download
	 * @param {integer} id The ID of the {@source Downloader} object
	 * @param {Function} callback The callback function invoked on success
	 * @param {number} onfailure
	 * @return {String/Downloader} the {@source Downloader} object created, or 'ohdear' if an unsupported browser
	 */
	const newDownload = function newDownload(url, id, callback, onfailure) {
		const d = new Downloader(url);
		if (!d.http) {
			return 'ohdear';
		}
		d.id = id;
		d.setTarget();
		if (!onfailure) {
			onfailure = 2;
		}
		const f = function () {
			if (d.getReadyState() === 4) {
				delete pg.misc.downloadsInProgress[this.id];
				try {
					if (d.getStatus() === 200) {
						d.data = d.getData();
						d.lastModified = d.getLastModifiedDate();
						callback(d);
					} else if (typeof onfailure === typeof 1) {
						if (onfailure > 0) {
							// retry
							newDownload(url, id, callback, onfailure - 1);
						}
					} else if (typeof onfailure === 'function') {
						onfailure(d, url, id, callback);
					}
				} catch {
					/* ignore it */
				}
			}
		};
		d.setCallback(f);
		return d;
	};
	/**
	 * Simulates a download from cached data.
	 * The supplied data is put into a {@source Downloader} as if it had downloaded it.
	 *
	 * @param {string} url The url.
	 * @param {integer} id The ID.
	 * @param {Function} callback The callback, which is invoked immediately as <code>callback(d)</code>,
	 * where <code>d</code> is the new {@source Downloader}.
	 * @param {string} data The (cached) data.
	 * @param {Date} lastModified The (cached) last modified date.
	 * @param {string} owner
	 */
	const fakeDownload = (url, id, callback, data, lastModified, owner) => {
		const d = newDownload(url, callback);
		d.owner = owner;
		d.id = id;
		d.data = data;
		d.lastModified = lastModified;
		return callback(d);
	};
	/**
	 * Starts a download.
	 *
	 * @param {string} url The url to download
	 * @param {integer} id The ID of the {@source Downloader} object
	 * @param {Function} callback The callback function invoked on success
	 * @return {String/Downloader} the {@source Downloader} object created, or 'ohdear' if an unsupported browser
	 */
	const startDownload = (url, id, callback) => {
		const d = newDownload(url, id, callback);
		if (typeof d === typeof '') {
			return d;
		}
		d.start();
		return d;
	};
	/**
	 * Aborts all downloads which have been started.
	 */
	const abortAllDownloads = () => {
		for (const x in pg.misc.downloadsInProgress) {
			if (!Object.hasOwn(pg.misc.downloadsInProgress, x)) {
				continue;
			}
			try {
				pg.misc.downloadsInProgress[x].aborted = true;
				pg.misc.downloadsInProgress[x].abort();
				delete pg.misc.downloadsInProgress[x];
			} catch {
				/* empty */
			}
		}
	};
	// ENDFILE: downloader.js
	// STARTFILE: livepreview.js
	// TODO: location is often not correct (eg relative links in previews)
	// NOTE: removed md5 and image and math parsing. was broken, lots of bytes.
	/**
	 * InstaView - a Mediawiki to HTML converter in JavaScript
	 * Version 0.6.1
	 * Copyright (C) Pedro Fayolle 2005-2006
	 * {@link https://en.wikipedia.org/wiki/User:Pilaf}
	 * Distributed under the BSD license
	 *
	 * Changelog:
	 *
	 * 0.6.1
	 * - Fixed problem caused by \r characters
	 * - Improved inline formatting parser
	 *
	 * 0.6
	 * - Changed name to InstaView
	 * - Some major code reorganizations and factored out some common functions
	 * - Handled conversion of relative links (i.e. [[/foo]])
	 * - Fixed misrendering of adjacent definition list items
	 * - Fixed bug in table headings handling
	 * - Changed date format in signatures to reflect Mediawiki's
	 * - Fixed handling of [[:Image:...]]
	 * - Updated MD5 function (hopefully it will work with UTF-8)
	 * - Fixed bug in handling of links inside images
	 *
	 * To do:
	 * - Better support for math tags
	 * - Full support for nowiki tag
	 * - Parser-based (as opposed to RegExp-based) inline wikicode handling (make it one-pass and
	 *   bullet-proof)
	 * - Support for templates (through AJAX)
	 * - Support for coloured links (AJAX)
	 */
	const Insta = {};
	const setupLivePreview = () => {
		let _b;
		// options
		Insta.conf = {
			baseUrl: '',
			user: {},
			wiki: {
				lang: pg.wiki.lang,
				interwiki: pg.wiki.interwiki,
				default_thumb_width: 180,
			},
			paths: {
				articles: `${pg.wiki.articlePath}/`,
				// Only used for Insta previews with images. (not in popups)
				math: '/math/',
				images: 'https://youshou.wiki/images/',
				images_fallback: '//wm.zhongwen.wiki/commons/',
			},
			locale: {
				user: mw.config.get('wgFormattedNamespaces')[pg.nsUserId],
				image: mw.config.get('wgFormattedNamespaces')[pg.nsImageId],
				category: mw.config.get('wgFormattedNamespaces')[pg.nsCategoryId],
				// shouldn't be used in popup previews, i think
				months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
		};
		// options with default values or backreferences
		(_b = Insta.conf.user).name || (_b.name = 'Youshou Archives contributors');
		Insta.conf.user.signature = `[[${Insta.conf.locale.user}:${Insta.conf.user.name}|${Insta.conf.user.name}]]`;
		// define constants
		Insta.BLOCK_IMAGE = new RegExp(
			`^\\[\\[(?:File|Image|${Insta.conf.locale.image}):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)`,
			'i'
		);
	};
	Insta.dump = function (from, to) {
		if (typeof from === 'string') {
			from = document.querySelector(`#${from}`);
		}
		if (typeof to === 'string') {
			to = document.querySelector(`#${to}`);
		}
		to.innerHTML = this.convert(from.value);
	};
	Insta.convert = (wiki) => {
		const ll = typeof wiki === 'string' ? wiki.replace(/\r/g, '').split(/\n/) : wiki; // lines of wikicode
		let o = ''; // result of passing a regexp to compareLineStringOrReg()
		let p = 0;
		let r;
		// some shorthands
		const remain = () => {
			return ll.length;
		};
		const sh = () => {
			return ll.shift();
		}; // shift
		const ps = (s) => {
			o += s;
		}; // push

		// similar to C's printf, uses ? as placeholders, ?? to escape question marks
		const f = function f(...args) {
			let i = 1;
			const a = args;
			let [f] = a;
			let o = '';
			let c;
			let p;
			for (; i < a.length; i++) {
				if ((p = f.indexOf('?')) + 1) {
					// allow character escaping
					c = f.charAt(p + 1) === '?' ? 1 : 0;
					i -= c;
					o += f.slice(0, Math.max(0, p)) + (c ? '?' : a[i]);
					f = f.slice(p + 1 + c);
				} else {
					break;
				}
			}
			return o + f;
		};
		const html_entities = (s) => {
			return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		};
		// Wiki text parsing to html is a nightmare.
		// The below functions deliberately don't escape the ampersand since this would make it more
		// difficult, and we don't absolutely need to for how we need it. This means that any
		// unescaped ampersands in wikitext will remain unescaped and can cause invalid HTML.
		// Browsers should all be able to handle it though. We also escape significant wikimarkup
		// characters to prevent further matching on the processed text.
		const htmlescape_text = (s) => {
			return s
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/:/g, '&#58;')
				.replace(/\[/g, '&#91;')
				.replace(/]/g, '&#93;');
		};
		const htmlescape_attr = (s) => {
			return htmlescape_text(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
		};
		// return the first non matching character position between two strings
		const str_imatch = (a, b) => {
			let i;
			let l;
			for (i = 0, l = Math.min(a.length, b.length); i < l; i++) {
				if (a.charAt(i) !== b.charAt(i)) {
					break;
				}
			}
			return i;
		};
		// compare current line against a string or regexp
		// if passed a string it will compare only the first string.length characters
		// if passed a regexp the result is stored in r
		const compareLineStringOrReg = (c) => {
			return typeof c === 'string' ? ll[0] && ll[0].slice(0, c.length) === c : (r = ll[0] && ll[0].match(c));
		};
		const compareLineString = (c) => {
			return ll[0] === c;
		}; // compare current line against a string
		const charAtPoint = (p) => {
			return ll[0].charAt(p);
		}; // return char at pos p
		const endl = (s) => {
			ps(s);
			sh();
		};
		const parse_list = () => {
			let prev = '';
			while (remain() && compareLineStringOrReg(/^([#*:;]+)(.*)$/)) {
				const l_match = r;
				sh();
				const ipos = str_imatch(prev, l_match[1]);
				// close uncontinued lists
				for (let prevPos = prev.length - 1; prevPos >= ipos; prevPos--) {
					const pi = prev.charAt(prevPos);
					if (pi === '*') {
						ps('</ul>');
					} else if (pi === '#') {
						ps('</ol>');
					} else if (['', '*', '#'].indexOf(l_match[1].charAt(prevPos))) {
						// close a dl only if the new item is not a dl item (:, ; or empty)
						ps('</dl>');
					}
				}
				// open new lists
				for (let matchPos = ipos; matchPos < l_match[1].length; matchPos++) {
					const li = l_match[1].charAt(matchPos);
					if (li === '*') {
						ps('<ul>');
					} else if (li === '#') {
						ps('<ol>');
					} else if (['', '*', '#'].indexOf(prev.charAt(matchPos))) {
						// open a new dl only if the prev item is not a dl item (:, ; or empty)
						ps('<dl>');
					}
				}
				switch (l_match[1].at(-1)) {
					case '*':
					case '#':
						ps(`<li>${parse_inline_nowiki(l_match[2])}`);
						break;
					case ';': {
						ps('<dt>');
						const dt_match = l_match[2].match(/(.*?)(:.*?)$/);
						// handle ;dt :dd format
						if (dt_match) {
							ps(parse_inline_nowiki(dt_match[1]));
							ll.unshift(dt_match[2]);
						} else {
							ps(parse_inline_nowiki(l_match[2]));
						}
						break;
					}
					case ':':
						ps(`<dd>${parse_inline_nowiki(l_match[2])}`);
				}
				[, prev] = l_match;
			}
			// close remaining lists
			for (let i = prev.length - 1; i >= 0; i--) {
				ps(f('</?>', prev.charAt(i) === '*' ? 'ul' : prev.charAt(i) === '#' ? 'ol' : 'dl'));
			}
		};
		const parse_table = () => {
			endl(f('<table>', compareLineStringOrReg(/^{\|( .*)$/) ? r[1] : ''));
			for (; remain(); ) {
				if (compareLineStringOrReg('|')) {
					switch (charAtPoint(1)) {
						case '}':
							endl('</table>');
							return;
						case '-':
							endl(f('<tr>', compareLineStringOrReg(/\|-*(.*)/)[1]));
							break;
						default:
							parse_table_data();
					}
				} else if (compareLineStringOrReg('!')) {
					parse_table_data();
				} else {
					sh();
				}
			}
		};
		const parse_table_data = () => {
			let td_line;
			let match_i;
			// 1: "|+", '|' or '+'
			// 2: ??
			// 3: attributes ??
			// TODO: finish commenting this regexp
			const td_match = sh().match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/);
			if (td_match[1] === '|+') {
				ps('<caption');
			} else {
				ps(`<t${td_match[1] === '|' ? 'd' : 'h'}`);
			}
			if (td_match[3]) {
				// ps(' ' + td_match[3])
				match_i = 4;
			} else {
				match_i = 2;
			}
			ps('>');
			if (td_match[1] === '|+') {
				ps(parse_inline_nowiki(td_match[match_i]));
			} else {
				// use || or !! as a cell separator depending on context
				// NOTE: when split() is passed a regexp make sure to use non-capturing brackets
				td_line = td_match[match_i].split(td_match[1] === '|' ? '||' : /\|\||!!/);
				ps(parse_inline_nowiki(td_line.shift()));
				while (td_line.length > 0) {
					ll.unshift(td_match[1] + td_line.pop());
				}
			}
			let tc = 0;
			const td = [];
			while (remain()) {
				td.push(sh());
				if (compareLineStringOrReg('|')) {
					if (!tc) {
						break;
					} else if (charAtPoint(1) === '}') {
						// we're at the outer-most level (no nested tables), skip to td parse
						tc--;
					}
				} else if (!tc && compareLineStringOrReg('!')) {
					break;
				} else if (compareLineStringOrReg('{|')) {
					tc++;
				}
			}
			if (td.length > 0) {
				ps(Insta.convert(td));
			}
		};
		const parse_pre = () => {
			ps('<pre>');
			do {
				endl(`${parse_inline_nowiki(ll[0].slice(1))}\n`);
			} while (remain() && compareLineStringOrReg(' '));
			ps('</pre>');
		};
		const parse_block_image = () => {
			ps(parse_image(sh()));
		};
		const parse_image = (str) => {
			// get what's in between "[[Image:" and "]]"
			let tag = str.substring(str.indexOf(':') + 1, str.length - 2);
			let width;
			let attr = [];
			let filename;
			let caption = '';
			let thumb = 0;
			let frame = 0;
			let center = 0;
			let align = '';
			if (/\|/.test(tag)) {
				// manage nested links
				let nesting = 0;
				let last_attr;
				for (let i = tag.length - 1; i > 0; i--) {
					if (tag.charAt(i) === '|' && !nesting) {
						last_attr = tag.slice(i + 1);
						tag = tag.slice(0, Math.max(0, i));
						break;
					} else {
						switch (tag.slice(i - 1, i - 1 + 2)) {
							case ']]':
								nesting++;
								i--;
								break;
							case '[[':
								nesting--;
								i--;
						}
					}
				}
				attr = tag.split(/\s*\|\s*/);
				attr.push(last_attr);
				filename = attr.shift();
				let w_match;
				for (; attr.length > 0; attr.shift()) {
					w_match = attr[0].match(/^(\d*)(?:[px]*\d*)?px$/);
					if (w_match) {
						[, width] = w_match;
					} else {
						switch (attr[0]) {
							case 'thumb':
							case 'thumbnail':
								thumb = true;
								frame = true;
								break;
							case 'frame':
								frame = true;
								break;
							case 'none':
							case 'right':
							case 'left':
								center = false;
								[align] = attr;
								break;
							case 'center':
								center = true;
								align = 'none';
								break;
							default:
								if (attr.length === 1) {
									[caption] = attr;
								}
						}
					}
				}
			} else {
				filename = tag;
			}
			return '';
		};
		const parse_inline_nowiki = (str) => {
			let start;
			let lastend = 0;
			let substart = 0;
			let nestlev = 0;
			let open;
			let close;
			let subloop;
			let html = '';
			while ((start = str.indexOf('<no'.concat('wiki', '>'), substart)) !== -1) {
				html += parse_inline_wiki(str.substring(lastend, start));
				start += 8;
				substart = start;
				subloop = true;
				do {
					open = str.indexOf('<no'.concat('wiki', '>'), substart);
					close = str.indexOf('</no'.concat('wiki', '>'), substart);
					if (close <= open || open === -1) {
						if (close === -1) {
							return html + html_entities(str.slice(start));
						}
						substart = close + 9;
						if (nestlev) {
							nestlev--;
						} else {
							lastend = substart;
							html += html_entities(str.substring(start, lastend - 9));
							subloop = false;
						}
					} else {
						substart = open + 8;
						nestlev++;
					}
				} while (subloop);
			}
			return html + parse_inline_wiki(str.slice(lastend));
		};
		const parse_inline_images = (str) => {
			let start;
			let substart = 0;
			let nestlev = 0;
			let loop;
			let close;
			let open;
			let wiki;
			let html;
			while ((start = str.indexOf('[[', substart)) !== -1) {
				if (new RegExp(`^(Image|File|${Insta.conf.locale.image}):`, 'i').test(str.slice(start + 2))) {
					loop = true;
					substart = start;
					do {
						substart += 2;
						close = str.indexOf(']]', substart);
						open = str.indexOf('[[', substart);
						if (close <= open || open === -1) {
							if (close === -1) {
								return str;
							}
							substart = close;
							if (nestlev) {
								nestlev--;
							} else {
								wiki = str.substring(start, close + 2);
								html = parse_image(wiki);
								str = str.replace(wiki, html);
								substart = start + html.length;
								loop = false;
							}
						} else {
							substart = open;
							nestlev++;
						}
					} while (loop);
				} else {
					break;
				}
			}
			return str;
		};
		// the output of this function doesn't respect the FILO structure of HTML
		// but since most browsers can handle it I'll save myself the hassle
		const parse_inline_formatting = (str) => {
			let em;
			let st;
			let i;
			let li;
			let o = '';
			while ((i = str.indexOf("''", li)) + 1) {
				o += str.substring(li, i);
				li = i + 2;
				if (str.charAt(i + 2) === "'") {
					li++;
					st = !st;
					o += st ? '<strong>' : '</strong>';
				} else {
					em = !em;
					o += em ? '<em>' : '</em>';
				}
			}
			return o + str.slice(li);
		};
		const parse_inline_wiki = (str) => {
			str = parse_inline_images(str);
			str = parse_inline_formatting(str);
			// math
			str = str.replace(/<math>(.*?)<\/math>/gi, '');
			// Build a Mediawiki-formatted date string
			let date = new Date();
			let minutes = date.getUTCMinutes();
			if (minutes < 10) {
				minutes = `0${minutes}`;
			}
			date = f(
				'?:?, ? ? ? (UTC)',
				date.getUTCHours(),
				minutes,
				date.getUTCDate(),
				Insta.conf.locale.months[date.getUTCMonth()],
				date.getUTCFullYear()
			);
			// text formatting
			return (
				str
					// signatures
					.replace(/~{5}(?!~)/g, date)
					.replace(/~{4}(?!~)/g, `${Insta.conf.user.name} ${date}`)
					.replace(/~{3}(?!~)/g, Insta.conf.user.name)
					// [[:Category:...]], [[:Image:...]], etc...
					.replace(
						new RegExp(
							`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):[^|]*?)\\]\\](\\w*)`,
							'gi'
						),
						(_$0, $1, $2) => {
							return f(
								"<a href='?'>?</a>",
								Insta.conf.paths.articles + htmlescape_attr($1),
								htmlescape_text($1) + htmlescape_text($2)
							);
						}
					)
					// remove straight category and interwiki tags
					.replace(
						new RegExp(
							`\\[\\[(?:${Insta.conf.locale.category}|${Insta.conf.wiki.interwiki}):.*?\\]\\]`,
							'gi'
						),
						''
					)
					// [[:Category:...|Links]], [[:Image:...|Links]], etc...
					.replace(
						new RegExp(
							`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):.*?)\\|([^\\]]+?)\\]\\](\\w*)`,
							'gi'
						),
						(_$0, $1, $2, $3) => {
							return f(
								"<a href='?'>?</a>",
								Insta.conf.paths.articles + htmlescape_attr($1),
								htmlescape_text($2) + htmlescape_text($3)
							);
						}
					)
					// [[/Relative links]]
					.replace(/\[\[(\/[^|]*?)]]/g, (_$0, $1) => {
						return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($1));
					})
					// [[/Replaced|Relative links]]
					.replace(/\[\[(\/.*?)\|(.+?)]]/g, (_$0, $1, $2) => {
						return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($2));
					})
					// [[Common links]]
					.replace(/\[\[([^[|]*?)]](\w*)/g, (_$0, $1, $2) => {
						return f(
							"<a href='?'>?</a>",
							Insta.conf.paths.articles + htmlescape_attr($1),
							htmlescape_text($1) + htmlescape_text($2)
						);
					})
					// [[Replaced|Links]]
					.replace(/\[\[([^[]*?)\|([^\]]+?)]](\w*)/g, (_$0, $1, $2, $3) => {
						return f(
							"<a href='?'>?</a>",
							Insta.conf.paths.articles + htmlescape_attr($1),
							htmlescape_text($2) + htmlescape_text($3)
						);
					})
					// [[Stripped:Namespace|Namespace]]
					.replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|]]/g, (_$0, $1, $2, $3) => {
						return f(
							"<a href='?'>?</a>",
							Insta.conf.paths.articles + htmlescape_attr($1) + htmlescape_attr($2) + htmlescape_attr($3),
							htmlescape_text($2)
						);
					})
					// External links
					.replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)]/g, (_$0, $1, $2, $3, $4) => {
						return f(
							"<a class='external' href='?:?'>?</a>",
							htmlescape_attr($1),
							htmlescape_attr($2) + htmlescape_attr($3),
							htmlescape_text($4)
						);
					})
					.replace(/\[http:\/\/(.*?)]/g, (_$0, $1) => {
						return f("<a class='external' href='http://?'>[#]</a>", htmlescape_attr($1));
					})
					.replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)]/g, (_$0, $1, $2, $3) => {
						return f(
							"<a class='external' href='?:?'>?:?</a>",
							htmlescape_attr($1),
							htmlescape_attr($2) + htmlescape_attr($3),
							htmlescape_text($1),
							htmlescape_text($2) + htmlescape_text($3)
						);
					})
					.replace(
						/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*[^ !$,.:;?])/g,
						(_$0, $1, $2, $3, $4) => {
							return f(
								"?<a class='external' href='?:?'>?:?</a>",
								htmlescape_text($1),
								htmlescape_attr($2),
								htmlescape_attr($3) + htmlescape_attr($4),
								htmlescape_text($2),
								htmlescape_text($3) + htmlescape_text($4)
							);
						}
					)
					.replace('__NOTOC__', '')
					.replace('__NOINDEX__', '')
					.replace('__INDEX__', '')
					.replace('__NOEDITSECTION__', '')
			);
		};
		// begin parsing
		for (; remain(); ) {
			if (compareLineStringOrReg(/^(={1,6})(.*)\1(.*)$/)) {
				p = 0;
				endl(f('<h?>?</h?>?', r[1].length, parse_inline_nowiki(r[2]), r[1].length, r[3]));
			} else if (compareLineStringOrReg(/^[#*:;]/)) {
				p = 0;
				parse_list();
			} else if (compareLineStringOrReg(' ')) {
				p = 0;
				parse_pre();
			} else if (compareLineStringOrReg('{|')) {
				p = 0;
				parse_table();
			} else if (compareLineStringOrReg(/^----+$/)) {
				p = 0;
				endl('<hr>');
			} else if (compareLineStringOrReg(Insta.BLOCK_IMAGE)) {
				p = 0;
				parse_block_image();
			} else {
				// handle paragraphs
				if (compareLineString('')) {
					p = remain() > 1 && ll[1] === '';
					if (p) {
						endl('<p><br>');
					}
				} else {
					if (!p) {
						ps('<p>');
						p = 1;
					}
					ps(`${parse_inline_nowiki(ll[0])} `);
				}
				sh();
			}
		}
		return o;
	};
	const wiki2html = (txt, baseurl) => {
		Insta.conf.baseUrl = baseurl;
		return Insta.convert(txt);
	};
	// ENDFILE: livepreview.js
	// STARTFILE: pageinfo.js
	const popupFilterPageSize = (data) => {
		return formatBytes(data.length);
	};
	const popupFilterCountLinks = (data) => {
		const num = countLinks(data);
		return `${String(num)}&nbsp;${num === 1 ? popupString('wikiLink') : popupString('wikiLinks')}`;
	};
	const popupFilterCountImages = (data) => {
		const num = countImages(data);
		return `${String(num)}&nbsp;${num === 1 ? popupString('image') : popupString('images')}`;
	};
	const popupFilterCountCategories = (data) => {
		const num = countCategories(data);
		return `${String(num)}&nbsp;${num === 1 ? popupString('category') : popupString('categories')}`;
	};
	const popupFilterLastModified = (_data, download) => {
		const lastmod = download.lastModified;
		const now = new Date();
		const age = now - lastmod;
		if (lastmod && getValueOf('popupLastModified')) {
			return tprintf('%s old', [formatAge(age)]).replace(/ /g, '&nbsp;');
		}
		return '';
	};
	const formatAge = (age) => {
		// coerce into a number
		let a = 0 + age;
		const aa = a;
		const seclen = 1000;
		const minlen = 60 * seclen;
		const hourlen = 60 * minlen;
		const daylen = 24 * hourlen;
		const weeklen = 7 * daylen;
		const numweeks = (a - (a % weeklen)) / weeklen;
		a -= numweeks * weeklen;
		const sweeks = addunit(numweeks, 'week');
		const numdays = (a - (a % daylen)) / daylen;
		a -= numdays * daylen;
		const sdays = addunit(numdays, 'day');
		const numhours = (a - (a % hourlen)) / hourlen;
		a -= numhours * hourlen;
		const shours = addunit(numhours, 'hour');
		const nummins = (a - (a % minlen)) / minlen;
		a -= nummins * minlen;
		const smins = addunit(nummins, 'minute');
		const numsecs = (a - (a % seclen)) / seclen;
		a -= numsecs * seclen;
		const ssecs = addunit(numsecs, 'second');
		if (aa > 4 * weeklen) {
			return sweeks;
		}
		if (aa > weeklen) {
			return `${sweeks} ${sdays}`;
		}
		if (aa > daylen) {
			return `${sdays} ${shours}`;
		}
		if (aa > 6 * hourlen) {
			return shours;
		}
		if (aa > hourlen) {
			return `${shours} ${smins}`;
		}
		if (aa > 10 * minlen) {
			return smins;
		}
		if (aa > minlen) {
			return `${smins} ${ssecs}`;
		}
		return ssecs;
	};
	const addunit = (num, str) => {
		return `${num} ${num === 1 ? popupString(str) : popupString(`${str}s`)}`;
	};
	const runPopupFilters = (list, data, download) => {
		const ret = [];
		for (const element of list) {
			if (element && typeof element === 'function') {
				const s = element(data, download, download.owner.article);
				if (s) {
					ret.push(s);
				}
			}
		}
		return ret;
	};
	const getPageInfo = (data, download) => {
		if (!data || data.length === 0) {
			return popupString('Empty page');
		}
		const popupFilters = getValueOf('popupFilters') || [];
		const extraPopupFilters = getValueOf('extraPopupFilters') || [];
		const pageInfoArray = runPopupFilters([...popupFilters, ...extraPopupFilters], data, download);
		let pageInfo = pageInfoArray.join(', ');
		if (pageInfo !== '') {
			pageInfo = upcaseFirst(pageInfo);
		}
		return pageInfo;
	};
	// this could be improved!
	const countLinks = (wikiText) => {
		return wikiText.split('[[').length - 1;
	};
	// if N = # matches, n = # brackets, then
	// String.split(regex) intersperses the N+1 split elements
	// with Nn other elements. So total length is
	// L= N+1 + Nn = N(n+1)+1. So N=(L-1)/(n+1).
	const countImages = (wikiText) => {
		return (wikiText.split(pg.re.image).length - 1) / (pg.re.imageBracketCount + 1);
	};
	const countCategories = (wikiText) => {
		return (wikiText.split(pg.re.category).length - 1) / (pg.re.categoryBracketCount + 1);
	};
	const popupFilterStubDetect = (data, _download, article) => {
		const counts = stubCount(data, article);
		if (counts.real) {
			return popupString('stub');
		}
		if (counts.sect) {
			return popupString('section stub');
		}
		return '';
	};
	const popupFilterDisambigDetect = (data, _download, article) => {
		if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
			return '';
		}
		return isDisambig(data, article) ? popupString('disambig') : '';
	};
	const formatBytes = (num) => {
		return num > 949 ? Math.round(num / 100) / 10 + popupString('kB') : `${num}&nbsp;${popupString('bytes')}`;
	};
	// ENDFILE: pageinfo.js
	// STARTFILE: titles.js
	/**
	 * @fileoverview Defines the {@source Title} class, and associated crufty functions.
	 *
	 * <code>Title</code> deals with article titles and their various
	 * forms.  {@source Stringwrapper} is the parent class of
	 * <code>Title</code>, which exists simply to make things a little
	 * neater.
	 */
	/**
	 * Creates a new Stringwrapper.
	 *
	 * @constructor
	 *
	 * @class the Stringwrapper class. This base class is not really
	 * useful on its own; it just wraps various common string operations.
	 */
	const Stringwrapper = function Stringwrapper() {
		/**
		 * Wrapper for this.toString().indexOf()
		 *
		 * @param {string} x
		 * @type integer
		 */
		this.indexOf = function (x) {
			return this.toString().indexOf(x);
		};
		/**
		 * Returns this.value.
		 *
		 * @type String
		 */
		this.toString = function () {
			return this.value;
		};
		/**
		 * Wrapper for {@source String#parenSplit} applied to this.toString()
		 *
		 * @param {RegExp} x
		 * @type Array
		 */
		this.split = function (x) {
			return this.toString().split(x);
		};
		/**
		 * Wrapper for this.toString().substring()
		 *
		 * @param {string} x
		 * @param {string} y (optional)
		 * @type String
		 */
		this.substring = function (x, y) {
			if (y === undefined) {
				return this.toString().slice(Math.max(0, x));
			}
			return this.toString().substring(x, y);
		};
		/**
		 * Wrapper for this.toString().split()
		 *
		 * @param {string} x
		 * @type Array
		 */
		this.split = function (x) {
			return this.toString().split(x);
		};
		/**
		 * Wrapper for this.toString().replace()
		 *
		 * @param {string} x
		 * @param {string} y
		 * @type String
		 */
		this.replace = function (x, y) {
			return this.toString().replace(x, y);
		};
	};
	/**
	 * Creates a new <code>Title</code>.
	 *
	 * @constructor
	 *
	 * @class The Title class. Holds article titles and converts them into
	 * various forms. Also deals with anchors, by which we mean the bits
	 * of the article URL after a # character, representing locations
	 * within an article.
	 *
	 * @param {string} value The initial value to assign to the
	 * article. This must be the canonical title (see {@link
	 * Title#value}. Omit this in the constructor and use another function
	 * to set the title if this is unavailable.
	 */
	class Title extends Stringwrapper {
		constructor(val) {
			super();
			/**
			 * The canonical article title. This must be in UTF-8 with no
			 * entities, escaping or nasties. Also, underscores should be
			 * replaced with spaces.
			 *
			 * @type String
			 * @private
			 */
			this.value = null;
			/**
			 * The canonical form of the anchor. This should be exactly as
			 * it appears in the URL, i.e. with the .C3.0A bits in.
			 *
			 * @type String
			 */
			this.anchor = '';
			this.setUtf(val);
		}
		/**
		 * Returns the canonical representation of the article title, optionally without anchor.
		 *
		 * @param {boolean} omitAnchor
		 * @fixme Decide specs for anchor
		 * @return String The article title and the anchor.
		 */
		toString(omitAnchor) {
			return this.value + (!omitAnchor && this.anchor ? `#${this.anchorString()}` : '');
		}
		anchorString() {
			if (!this.anchor) {
				return '';
			}
			const split = this.anchor.split(/((?:\.[\dA-F]{2})+)/);
			const len = split.length;
			let value;
			for (let j = 1; j < len; j += 2) {
				// FIXME s/decodeURI/decodeURIComponent/g ?
				value = split[j].split('.').join('%');
				try {
					value = decodeURIComponent(value);
				} catch {
					// cannot decode
				}
				split[j] = value.split('_').join(' ');
			}
			return split.join('');
		}
		urlAnchor() {
			const split = this.anchor.split('/((?:[%][0-9A-F]{2})+)/');
			const len = split.length;
			for (let j = 1; j < len; j += 2) {
				split[j] = split[j].split('%').join('.');
			}
			return split.join('');
		}
		anchorFromUtf(str) {
			this.anchor = encodeURIComponent(str.split(' ').join('_'))
				.split('%3A')
				.join(':')
				.split("'")
				.join('%27')
				.split('%')
				.join('.');
		}
		fromURL(h) {
			if (typeof h !== 'string') {
				this.value = null;
				return this;
			}
			// NOTE : playing with decodeURI, encodeURI, escape, unescape,
			// we seem to be able to replicate the IE borked encoding
			// IE doesn't do this new-fangled utf-8 thing.
			// and it's worse than that.
			// IE seems to treat the query string differently to the rest of the url
			// the query is treated as bona-fide utf8, but the first bit of the url is pissed around with
			// we fix up & for all browsers, just in case.
			const splitted = h.split('?');
			splitted[0] = splitted[0].split('&').join('%26');
			h = splitted.join('?');
			const contribs = pg.re.contribs.exec(h);
			if (contribs) {
				if (contribs[1] === 'title=') {
					contribs[3] = contribs[3].split('+').join(' ');
				}
				const u = new Title(contribs[3]);
				this.setUtf(
					Title.decodeNasties(`${mw.config.get('wgFormattedNamespaces')[pg.nsUserId]}:${u.stripNamespace()}`)
				);
				return this;
			}
			const email = pg.re.email.exec(h);
			if (email) {
				this.setUtf(
					Title.decodeNasties(
						`${mw.config.get('wgFormattedNamespaces')[pg.nsUserId]}:${new Title(email[3]).stripNamespace()}`
					)
				);
				return this;
			}
			const backlinks = pg.re.backlinks.exec(h);
			if (backlinks) {
				this.setUtf(Title.decodeNasties(new Title(backlinks[3])));
				return this;
			}
			// A dummy title object for a Special:Diff link.
			const specialdiff = pg.re.specialdiff.exec(h);
			if (specialdiff) {
				this.setUtf(
					Title.decodeNasties(new Title(`${mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId]}:Diff`))
				);
				return this;
			}
			// no more special cases to check --
			// hopefully it's not a disguised user-related or specially treated special page
			// Includes references
			const m = pg.re.main.exec(h);
			if (m === null) {
				this.value = null;
			} else {
				const fromBotInterface = /\?(.+&)?title=/.test(h);
				if (fromBotInterface) {
					m[2] = m[2].split('+').join('_');
				}
				const extracted = m[2] + (m[3] ? `#${m[3]}` : '');
				if (pg.flag.isSafari && /%25[\dA-Fa-f]{2}/.test(extracted)) {
					// Fix Safari issue
					// Safari sometimes encodes % as %25 in UTF-8 encoded strings like %E5%A3 -> %25E5%25A3.
					this.setUtf(decodeURIComponent(unescape(extracted)));
				} else {
					this.setUtf(Title.decodeNasties(extracted));
				}
			}
			return this;
		}
		static decodeNasties(txt) {
			// myDecodeURI uses decodeExtras, which removes _,
			// thus ruining citations previews, which are formated as "cite_note-1"
			try {
				let ret = decodeURI(Title.decodeEscapes(txt));
				ret = ret.replace(/[ _]*$/, '');
				return ret;
			} catch {
				return txt; // cannot decode
			}
		}
		// Decode valid %-encodings, otherwise escape them
		static decodeEscapes(txt) {
			const split = txt.split(/((?:%[\dA-Fa-f]{2})+)/);
			const len = split.length;
			// No %-encoded items found, so replace the literal %
			if (len === 1) {
				return split[0].replace(/%(?![\dA-Fa-f]{2})/g, '%25');
			}
			for (let i = 1; i < len; i += 2) {
				split[i] = decodeURIComponent(split[i]);
			}
			return split.join('');
		}
		fromAnchor(a) {
			if (!a) {
				this.value = null;
				return this;
			}
			return this.fromURL(a.href);
		}
		fromWikiText(txt) {
			// FIXME - testing needed
			txt = myDecodeURI(txt);
			this.setUtf(txt);
			return this;
		}
		hintValue() {
			if (!this.value) {
				return '';
			}
			return safeDecodeURI(this.value);
		}
		toUserName(withNs) {
			if (this.namespaceId() !== pg.nsUserId && this.namespaceId() !== pg.nsUsertalkId) {
				this.value = null;
				return;
			}
			this.value =
				(withNs ? `${mw.config.get('wgFormattedNamespaces')[pg.nsUserId]}:` : '') +
				this.stripNamespace().split('/')[0];
		}
		userName(withNs) {
			const t = new Title(this.value);
			t.toUserName(withNs);
			if (t.value) {
				return t;
			}
			return null;
		}
		toTalkPage() {
			// convert article to a talk page, or if we can't, return null
			// In other words: return null if this ALREADY IS a talk page
			// and return the corresponding talk page otherwise
			//
			// Per {@link https://www.mediawiki.org/wiki/Manual:Namespace#Subject_and_talk_namespaces}
			// * All discussion namespaces have odd-integer indices
			// * The discussion namespace index for a specific namespace with index n is n + 1
			if (this.value === null) {
				return null;
			}
			const namespaceId = this.namespaceId();
			if (namespaceId >= 0 && namespaceId % 2 === 0) {
				// non-special and subject namespace
				const localizedNamespace = mw.config.get('wgFormattedNamespaces')[namespaceId + 1];
				if (localizedNamespace !== undefined) {
					this.value =
						localizedNamespace === ''
							? this.stripNamespace()
							: `${localizedNamespace.split(' ').join('_')}:${this.stripNamespace()}`;
					return this.value;
				}
			}
			this.value = null;
			return null;
		}
		// Return canonical, localized namespace
		namespace() {
			return mw.config.get('wgFormattedNamespaces')[this.namespaceId()];
		}
		namespaceId() {
			const n = this.value.indexOf(':');
			if (n < 0) {
				return 0; // mainspace
			}
			const namespaceId =
				mw.config.get('wgNamespaceIds')[this.value.slice(0, Math.max(0, n)).split(' ').join('_').toLowerCase()];
			if (namespaceId === undefined) {
				return 0; // mainspace
			}
			return namespaceId;
		}
		talkPage() {
			const t = new Title(this.value);
			t.toTalkPage();
			if (t.value) {
				return t;
			}
			return null;
		}
		isTalkPage() {
			if (this.talkPage() === null) {
				return true;
			}
			return false;
		}
		toArticleFromTalkPage() {
			// largely copy/paste from toTalkPage above.
			if (this.value === null) {
				return null;
			}
			const namespaceId = this.namespaceId();
			if (namespaceId >= 0 && namespaceId % 2 === 1) {
				// non-special and talk namespace
				const localizedNamespace = mw.config.get('wgFormattedNamespaces')[namespaceId - 1];
				if (localizedNamespace !== undefined) {
					this.value =
						localizedNamespace === ''
							? this.stripNamespace()
							: `${localizedNamespace.split(' ').join('_')}:${this.stripNamespace()}`;
					return this.value;
				}
			}
			this.value = null;
			return null;
		}
		articleFromTalkPage() {
			const t = new Title(this.value);
			t.toArticleFromTalkPage();
			if (t.value) {
				return t;
			}
			return null;
		}
		articleFromTalkOrArticle() {
			const t = new Title(this.value);
			if (t.toArticleFromTalkPage()) {
				return t;
			}
			return this;
		}
		isIpUser() {
			return pg.re.ipUser.test(this.userName());
		}
		stripNamespace() {
			// returns a string, not a Title
			const n = this.value.indexOf(':');
			if (n < 0) {
				return this.value;
			}
			const namespaceId = this.namespaceId();
			if (namespaceId === pg.nsMainspaceId) {
				return this.value;
			}
			return this.value.slice(Math.max(0, n + 1));
		}
		setUtf(value) {
			if (!value) {
				this.value = '';
				return;
			}
			const anch = value.indexOf('#');
			if (anch < 0) {
				this.value = value.split('_').join(' ');
				this.anchor = '';
				return;
			}
			this.value = value.slice(0, Math.max(0, anch)).split('_').join(' ');
			this.anchor = value.slice(Math.max(0, anch + 1));
			this.ns = null; // wait until namespace() is called
		}
		setUrl(urlfrag) {
			const anch = urlfrag.indexOf('#');
			this.value = safeDecodeURI(urlfrag.slice(0, Math.max(0, anch)));
			this.anchor = this.value.slice(Math.max(0, anch + 1));
		}
		append(x) {
			this.setUtf(this.value + x);
		}
		urlString(x) {
			if (!x) {
				x = {};
			}
			let v = this.toString(true);
			if (!x.omitAnchor && this.anchor) {
				v += `#${this.urlAnchor()}`;
			}
			if (!x.keepSpaces) {
				v = v.split(' ').join('_');
			}
			return encodeURI(v).split('&').join('%26').split('?').join('%3F').split('+').join('%2B');
		}
		removeAnchor() {
			return new Title(this.toString(true));
		}
		toUrl() {
			return pg.wiki.titlebase + this.urlString();
		}
	}
	Title.fromURL = (h) => {
		return new Title().fromURL(h);
	};
	Title.fromAnchor = (a) => {
		return new Title().fromAnchor(a);
	};
	Title.fromWikiText = (txt) => {
		return new Title().fromWikiText(txt);
	};
	const parseParams = (url) => {
		const specialDiff = pg.re.specialdiff.exec(url);
		if (specialDiff) {
			const split = specialDiff[1].split('/');
			if (split.length === 1) {
				return {
					oldid: split[0],
					diff: 'prev',
				};
			} else if (split.length === 2) {
				return {
					oldid: split[0],
					diff: split[1],
				};
			}
		}
		const ret = {};
		if (!url.includes('?')) {
			return ret;
		}
		[url] = url.split('#');
		const s = url.split('?').slice(1).join(',');
		const t = s.split('&');
		for (const element of t) {
			const z = element.split('=');
			z.push(null);
			[, ret[z[0]]] = z;
		}
		// Diff revision with no oldid is interpreted as a diff to the previous revision by MediaWiki
		if (ret.diff && ret.oldid === undefined) {
			ret.oldid = 'prev';
		}
		// Documentation seems to say something different, but oldid can also accept prev/next, and
		// Echo is emitting such URLs. Simple fixup during parameter decoding:
		if (ret.oldid && (ret.oldid === 'prev' || ret.oldid === 'next' || ret.oldid === 'cur')) {
			const helper = ret.diff;
			ret.diff = ret.oldid;
			ret.oldid = helper;
		}
		return ret;
	};
	// (a) myDecodeURI (first standard decodeURI, then pg.re.urlNoPopup)
	// (b) change spaces to underscores
	// (c) encodeURI (just the straight one, no pg.re.urlNoPopup)
	const myDecodeURI = (str) => {
		let ret;
		// FIXME decodeURIComponent??
		try {
			ret = decodeURI(str.toString());
		} catch {
			return str;
		}
		for (let i = 0; i < pg.misc.decodeExtras.length; ++i) {
			const {from} = pg.misc.decodeExtras[i];
			const {to} = pg.misc.decodeExtras[i];
			ret = ret.split(from).join(to);
		}
		return ret;
	};
	const safeDecodeURI = (str) => {
		const ret = myDecodeURI(str);
		return ret || str;
	};
	// TESTS //
	const isDisambig = (data, article) => {
		if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
			return false;
		}
		return !article.isTalkPage() && pg.re.disambig.test(data);
	};
	const stubCount = (data, article) => {
		if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
			return false;
		}
		let sectStub = 0;
		let realStub = 0;
		if (pg.re.stub.test(data)) {
			const s = data.split(pg.re.stub);
			for (let i = 1; i < s.length; i += 2) {
				if (s[i]) {
					++sectStub;
				} else {
					++realStub;
				}
			}
		}
		return {
			real: realStub,
			sect: sectStub,
		};
	};
	const isValidImageName = (str) => {
		return !str.includes('{');
	};
	const isInStrippableNamespace = (article) => {
		return article.namespaceId() !== 0;
	};
	const isInMainNamespace = (article) => {
		return article.namespaceId() === 0;
	};
	const anchorContainsImage = (a) => {
		// iterate over children of anchor a
		// see if any are images
		if (a === null) {
			return false;
		}
		const kids = a.childNodes;
		for (const kid of kids) {
			if (kid.nodeName === 'IMG') {
				return true;
			}
		}
		return false;
	};
	const isPopupLink = (a) => {
		// NB for performance reasons, TOC links generally return true
		// they should be stripped out later
		if (!markNopopupSpanLinks.done) {
			markNopopupSpanLinks();
		}
		if (a.inNopopupSpan) {
			return false;
		}
		// FIXME is this faster inline?
		if (a.onmousedown || a.getAttribute('nopopup')) {
			return false;
		}
		const h = a.href;
		if (h === `${document.location.href}#`) {
			return false;
		}
		if (!pg.re.basenames.test(h)) {
			return false;
		}
		if (!pg.re.urlNoPopup.test(h)) {
			return true;
		}
		return (
			(pg.re.email.test(h) || pg.re.contribs.test(h) || pg.re.backlinks.test(h) || pg.re.specialdiff.test(h)) &&
			!h.includes('&limit=')
		);
	};
	const markNopopupSpanLinks = function markNopopupSpanLinks() {
		if (!getValueOf('popupOnlyArticleLinks')) {
			fixVectorMenuPopups();
		}
		const $body = $('body');
		const s = $body.find('.nopopups').toArray();
		for (const element of s) {
			const as = element.querySelectorAll('a');
			for (const a of as) {
				a.inNopopupSpan = true;
			}
		}
		markNopopupSpanLinks.done = true;
	};
	const fixVectorMenuPopups = () => {
		const $body = $('body');
		$body.find('nav.vector-menu h3:first a:first').prop('inNopopupSpan', true);
	};
	// ENDFILE: titles.js
	// STARTFILE: getpage.js
	// Wiki-specific downloading
	//
	// Schematic for a getWiki call
	//
	//             getPageWithCaching
	//					|
	//	   false		|		  true
	// getPage<-[findPictureInCache]->-onComplete(a fake download)
	//   \.
	//	 (async)->addPageToCache(download)->-onComplete(download)
	// check cache to see if page exists
	const getPageWithCaching = (url, onComplete, owner) => {
		log(`getPageWithCaching, url=${url}`);
		const i = findInPageCache(url);
		let d;
		if (i > -1) {
			d = fakeDownload(
				url,
				owner.idNumber,
				onComplete,
				pg.cache.pages[i].data,
				pg.cache.pages[i].lastModified,
				owner
			);
		} else {
			d = getPage(url, onComplete, owner);
			if (d && owner && owner.addDownload) {
				owner.addDownload(d);
				d.owner = owner;
			}
		}
	};
	const getPage = (url, onComplete, owner) => {
		log('getPage');
		const callback = (d) => {
			if (!d.aborted) {
				addPageToCache(d);
				onComplete(d);
			}
		};
		return startDownload(url, owner.idNumber, callback);
	};
	const findInPageCache = (url) => {
		for (let i = 0; i < pg.cache.pages.length; ++i) {
			if (url === pg.cache.pages[i].url) {
				return i;
			}
		}
		return -1;
	};
	const addPageToCache = (download) => {
		log(`addPageToCache ${download.url}`);
		const page = {
			url: download.url,
			data: download.data,
			lastModified: download.lastModified,
		};
		return pg.cache.pages.push(page);
	};
	// ENDFILE: getpage.js
	// STARTFILE: tools.js
	// IE madness with encoding
	// ========================
	//
	// suppose throughout that the page is in utf8, like wikipedia
	//
	// if a is an anchor DOM element and a.href should consist of
	//
	// http://host.name.here/wiki/foo?bar=baz
	//
	// then IE gives foo as "latin1-encoded" utf8; we have foo = decode_utf8(decodeURI(foo_ie))
	// but IE gives bar=baz correctly as plain utf8
	//
	// ---------------------------------
	//
	// IE's xmlhttp doesn't understand utf8 urls. Have to use encodeURI here.
	//
	// ---------------------------------
	//
	// summat else
	// Source: http://aktuell.de.selfhtml.org/artikel/javascript/utf8b64/utf8.htm
	const getJsObj = (json) => {
		try {
			const json_ret = JSON.parse(json);
			if (json_ret.warnings) {
				for (let w = 0; w < json_ret.warnings.length; w++) {
					if (json_ret.warnings[w]['*']) {
						log(json_ret.warnings[w]['*']);
					} else {
						log(json_ret.warnings[w].warnings);
					}
				}
			} else if (json_ret.error) {
				errlog(`${json_ret.error.code}: ${json_ret.error.info}`);
			}
			return json_ret;
		} catch {
			errlog(`Something went wrong with getJsObj, json=${json}`);
			return 1;
		}
	};
	const anyChild = (obj) => {
		for (const p in obj) {
			if (!Object.hasOwn(obj, p)) {
				continue;
			}
			return obj[p];
		}
		return null;
	};
	const upcaseFirst = (str) => {
		if (typeof str !== typeof '' || str === '') {
			return;
		}
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	const findInArray = (arr, foo) => {
		if (!arr || arr.length === 0) {
			return -1;
		}
		const len = arr.length;
		for (let i = 0; i < len; ++i) {
			if (arr[i] === foo) {
				return i;
			}
		}
		return -1;
	};
	const nextOne = (array, value) => {
		// NB if the array has two consecutive entries equal
		//	then this will loop on successive calls
		const i = findInArray(array, value);
		if (i < 0) {
			return null;
		}
		return array[i + 1];
	};
	const literalizeRegex = (str) => {
		return mw.util.escapeRegExp(str);
	};
	String.prototype.entify = function () {
		// let shy = '&shy;';
		return this.split('&')
			.join('&amp;')
			.split('<')
			.join('&lt;')
			.split('>')
			.join('&gt;' /* +shy */)
			.split('"')
			.join('&quot;');
	};
	// Array filter function
	const removeNulls = (val) => {
		return val !== null;
	};
	const joinPath = (list) => {
		return list.filter(removeNulls).join('/');
	};
	const simplePrintf = (str, subs) => {
		if (!str || !subs) {
			return str;
		}
		const ret = [];
		const s = str.split(/(%s|\$\d+)/);
		let i = 0;
		do {
			ret.push(s.shift());
			if (s.length === 0) {
				break;
			}
			const cmd = s.shift();
			if (cmd === '%s') {
				if (i < subs.length) {
					ret.push(subs[i]);
				} else {
					ret.push(cmd);
				}
				++i;
			} else {
				const j = Number.parseInt(cmd.replace('$', ''), 10) - 1;
				if (j > -1 && j < subs.length) {
					ret.push(subs[j]);
				} else {
					ret.push(cmd);
				}
			}
		} while (s.length > 0);
		return ret.join('');
	};
	const isString = (x) => {
		return typeof x === 'string' || x instanceof String;
	};
	const isNumber = (x) => {
		return typeof x === 'number' || x instanceof Number;
	};
	const isRegExp = (x) => {
		return x instanceof RegExp;
	};
	const isArray = (x) => {
		return Array.isArray(x);
	};
	const isObject = (x) => {
		return x instanceof Object;
	};
	const isFunction = (x) => {
		return !isRegExp(x) && (typeof x === 'function' || x instanceof Function);
	};
	const repeatString = (s, mult) => {
		let ret = '';
		for (let i = 0; i < mult; ++i) {
			ret += s;
		}
		return ret;
	};
	const zeroFill = (s, min) => {
		min ||= 2;
		const t = s.toString();
		return repeatString('0', min - t.length) + t;
	};
	const map = (f, o) => {
		if (isArray(o)) {
			return map_array(f, o);
		}
		return map_object(f, o);
	};
	const map_array = (f, o) => {
		const ret = [];
		for (const element of o) {
			ret.push(f(element));
		}
		return ret;
	};
	const map_object = (f, o) => {
		const ret = {};
		for (const i in o) {
			if (!Object.hasOwn(o, i)) {
				continue;
			}
			ret[o] = f(o[i]);
		}
		return ret;
	};
	pg.escapeQuotesHTML = (text) => {
		return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	pg.unescapeQuotesHTML = (html) => {
		// From {@link https://stackoverflow.com/a/7394787}
		// This seems to be implemented correctly on all major browsers now, so we
		// don't have to make our own function.
		const txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	};
	// ENDFILE: tools.js
	// STARTFILE: dab.js
	// Dab-fixing code
	//
	const retargetDab = (newTarget, oldTarget, friendlyCurrentArticleName, titleToEdit) => {
		log(`retargetDab: newTarget=${newTarget} oldTarget=${oldTarget}`);
		return changeLinkTargetLink({
			newTarget,
			text: newTarget.split(' ').join('&nbsp;'),
			hint: tprintf('disambigHint', [newTarget]),
			summary: simplePrintf(getValueOf('popupFixDabsSummary'), [friendlyCurrentArticleName, newTarget]),
			clickButton: getValueOf('popupDabsAutoClick'),
			minor: true,
			oldTarget,
			watch: getValueOf('popupWatchDisambiggedPages'),
			title: titleToEdit,
		});
	};
	const listLinks = (wikitext, oldTarget, titleToEdit) => {
		// mediawiki strips trailing spaces, so we do the same
		// testcase: {@link https://en.wikipedia.org/w/index.php?title=Radial&oldid=97365633}
		const reg = /\[\[([^|]*?) *(\||]])/gi;
		let ret = [];
		const splitted = wikitext.split(reg);
		// ^[a-z]+ should match interwiki links, hopefully (case-insensitive)
		// and ^[a-z]* should match those and [[:Category...]] style links too
		const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
		const friendlyCurrentArticleName = oldTarget.toString();
		const wikPos = getValueOf('popupDabWiktionary');
		for (let i = 1; i < splitted.length; i += 3) {
			if (typeof splitted[i] === typeof 'string' && splitted[i].length > 0 && !omitRegex.test(splitted[i])) {
				ret.push(retargetDab(splitted[i], oldTarget, friendlyCurrentArticleName, titleToEdit));
			} /* if */
		} /* for loop */
		ret = rmDupesFromSortedList(ret.sort());
		if (wikPos) {
			const wikTarget = `wiktionary:${friendlyCurrentArticleName.replace(/^(.+)\s+\([^)]+\)\s*$/, '$1')}`;
			const meth = wikPos.toLowerCase() === 'first' ? 'unshift' : 'push';
			ret[meth](retargetDab(wikTarget, oldTarget, friendlyCurrentArticleName, titleToEdit));
		}
		ret.push(
			changeLinkTargetLink({
				newTarget: null,
				text: popupString('remove this link').split(' ').join('&nbsp;'),
				hint: popupString('remove all links to this disambig page from this article'),
				clickButton: getValueOf('popupDabsAutoClick'),
				oldTarget,
				summary: simplePrintf(getValueOf('popupRmDabLinkSummary'), [friendlyCurrentArticleName]),
				watch: getValueOf('popupWatchDisambiggedPages'),
				title: titleToEdit,
			})
		);
		return ret;
	};
	const rmDupesFromSortedList = (list) => {
		const ret = [];
		for (const element of list) {
			if (ret.length === 0 || element !== ret.at(-1)) {
				ret.push(element);
			}
		}
		return ret;
	};
	const makeFixDab = (data, navpop) => {
		// grab title from parent popup if there is one; default exists in changeLinkTargetLink
		const titleToEdit = navpop.parentPopup && navpop.parentPopup.article.toString();
		const list = listLinks(data, navpop.originalArticle, titleToEdit);
		if (list.length === 0) {
			log('listLinks returned empty list');
			return null;
		}
		let html = `<hr>${popupString('Click to disambiguate this link to:')}<br>`;
		html += list.join(', ');
		return html;
	};
	const makeFixDabs = (wikiText, navpop) => {
		if (
			getValueOf('popupFixDabs') &&
			isDisambig(wikiText, navpop.article) &&
			Title.fromURL(location.href).namespaceId() !== pg.nsSpecialId &&
			navpop.article.talkPage()
		) {
			setPopupHTML(makeFixDab(wikiText, navpop), 'popupFixDab', navpop.idNumber);
		}
	};
	const popupRedlinkHTML = (article) => {
		return changeLinkTargetLink({
			newTarget: null,
			text: popupString('remove this link').split(' ').join('&nbsp;'),
			hint: popupString('remove all links to this page from this article'),
			clickButton: getValueOf('popupRedlinkAutoClick'),
			oldTarget: article.toString(),
			summary: simplePrintf(getValueOf('popupRedlinkSummary'), [article.toString()]),
		});
	};
	// ENDFILE: dab.js
	// STARTFILE: htmloutput.js
	// this has to use a timer loop as we don't know if the DOM element exists when we want to set the text
	const setPopupHTML = function setPopupHTML(str, elementId, popupId, onSuccess, append) {
		if (popupId === undefined) {
			// console.error('[Popups] popupId is not defined in setPopupHTML, html='+str.substring(0,100));
			popupId = pg.idNumber;
		}
		const popupElement = document.querySelector(`#${elementId}${popupId}`);
		if (popupElement) {
			if (!append) {
				popupElement.innerHTML = '';
			}
			if (isString(str)) {
				popupElement.innerHTML += str;
			} else {
				popupElement.append(str);
			}
			if (onSuccess) {
				onSuccess();
			}
			setTimeout(checkPopupPosition, 100);
			return true;
		}
		// call this function again in a little while...
		setTimeout(() => {
			setPopupHTML(str, elementId, popupId, onSuccess);
		}, 600);
		return null;
	};
	const setPopupTrailer = (str, id) => {
		return setPopupHTML(str, 'popupData', id);
	};
	// args.navpopup is mandatory
	// optional: args.redir, args.redirTarget
	// FIXME: ye gods, this is ugly stuff
	const fillEmptySpans = (args) => {
		// if redir is present and true then redirTarget is mandatory
		let redir = true;
		let rcid;
		if (typeof args !== 'object' || args.redir === undefined || !args.redir) {
			redir = false;
		}
		const a = args.navpopup.parentAnchor;
		let article;
		let hint;
		let oldid;
		let params = {};
		if (redir && typeof args.redirTarget === typeof {}) {
			article = args.redirTarget;
			// hint=article.hintValue();
		} else {
			article = new Title().fromAnchor(a);
			hint = a.originalTitle || article.hintValue();
			params = parseParams(a.href);
			oldid = getValueOf('popupHistoricalLinks') ? params.oldid : null;
			({rcid} = params);
		}
		const x = {
			article,
			hint,
			oldid,
			rcid,
			navpop: args.navpopup,
			params,
		};
		const structure = pg.structures[getValueOf('popupStructure')];
		if (typeof structure !== 'object') {
			setPopupHTML(
				'popupError',
				`Unknown structure (this should never happen): ${pg.option.popupStructure}`,
				args.navpopup.idNumber
			);
			return;
		}
		const spans = flatten(pg.misc.layout);
		const numspans = spans.length;
		const redirs = pg.misc.redirSpans;
		for (let i = 0; i < numspans; ++i) {
			const found = redirs && redirs.includes(spans[i]);
			// log('redir=' + redir + ', found=' + found + ', spans[i]=' + spans[i]);
			if ((found && !redir) || (!found && redir)) {
				// log('skipping this set of the loop');
				continue;
			}
			const structurefn = structure[spans[i]];
			if (structurefn === undefined) {
				// nothing to do for this structure part
				continue;
			}
			let setfn = setPopupHTML;
			if (
				getValueOf('popupActiveNavlinks') &&
				(spans[i].indexOf('popupTopLinks') === 0 || spans[i].indexOf('popupRedirTopLinks') === 0)
			) {
				setfn = setPopupTipsAndHTML;
			}
			switch (typeof structurefn) {
				case 'function':
					log(`running ${spans[i]}({
						article:${x.article}, hint:${x.hint}, oldid: ${x.oldid}})`);
					setfn(structurefn(x), spans[i], args.navpopup.idNumber);
					break;
				case 'string':
					setfn(structurefn, spans[i], args.navpopup.idNumber);
					break;
				default:
					errlog(`unknown thing with label ${spans[i]} (span index was ${i})`);
					break;
			}
		}
	};
	// flatten an array
	const flatten = function flatten(list, start) {
		const ret = [];
		if (start === undefined) {
			start = 0;
		}
		for (let i = start; i < list.length; ++i) {
			if (typeof list[i] === typeof []) {
				return [...ret, ...flatten(list[i]), ...flatten(list, i + 1)];
			}
			ret.push(list[i]);
		}
		return ret;
	};
	// Generate html for whole popup
	const popupHTML = function popupHTML(a) {
		getValueOf('popupStructure');
		const structure = pg.structures[pg.option.popupStructure];
		if (typeof structure !== 'object') {
			// return 'Unknown structure: '+pg.option.popupStructure;
			// override user choice
			pg.option.popupStructure = pg.optionDefault.popupStructure;
			return popupHTML(a);
		}
		if (typeof structure.popupLayout !== 'function') {
			return 'Bad layout';
		}
		pg.misc.layout = structure.popupLayout();
		pg.misc.redirSpans = typeof structure.popupRedirSpans === 'function' ? structure.popupRedirSpans() : [];
		return makeEmptySpans(pg.misc.layout, a.navpopup);
	};
	const makeEmptySpans = function makeEmptySpans(list, navpop) {
		let ret = '';
		for (const element of list) {
			if (typeof element === typeof '') {
				ret += emptySpanHTML(element, navpop.idNumber, 'div');
			} else if (typeof element === typeof [] && element.length > 0) {
				ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans(element, navpop));
			} else if (typeof element === typeof {} && element.nodeType) {
				ret += emptySpanHTML(element.name, navpop.idNumber, element.nodeType);
			}
		}
		return ret;
	};
	const emptySpanHTML = function emptySpanHTML(name, id, tag, classname) {
		tag ||= 'span';
		if (!classname) {
			classname = emptySpanHTML.classAliases[name];
		}
		classname ||= name;
		if (name === getValueOf('popupDragHandle')) {
			classname += ' popupDragHandle';
		}
		return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
	};
	emptySpanHTML.classAliases = {
		popupSecondPreview: 'popupPreview',
	};
	// generate html for popup image
	// <a id="popupImageLinkn"><img id="popupImagen">
	// where n=idNumber
	const imageHTML = (_article, idNumber) => {
		return simplePrintf(
			'<a id="popupImageLink$1">' +
				'<img align="right" valign="top" id="popupImg$1" style="display:none"></img>' +
				'</a>',
			[idNumber]
		);
	};
	const popTipsSoonFn = (id, when, popData) => {
		if (!when) {
			when = 250;
		}
		const popTips = () => {
			setupTooltips(document.querySelector(`#${id}`), false, true, popData);
		};
		return () => {
			setTimeout(popTips, when, popData);
		};
	};
	const setPopupTipsAndHTML = (html, divname, idnumber, popData) => {
		setPopupHTML(
			html,
			divname,
			idnumber,
			getValueOf('popupSubpopups') ? popTipsSoonFn(divname + idnumber, null, popData) : null
		);
	};
	// ENDFILE: htmloutput.js
	// STARTFILE: mouseout.js
	// fuzzy checks
	const fuzzyCursorOffMenus = (_x, _y, _fuzz, parent) => {
		if (!parent) {
			return null;
		}
		const uls = parent.querySelectorAll('ul');
		for (const ul of uls) {
			if (ul.className === 'popup_menu' && ul.offsetWidth > 0) {
				return false;
			} // else { document.title+='.'; }
		}
		return true;
	};
	const checkPopupPosition = () => {
		// stop the popup running off the right of the screen
		// FIXME avoid pg.current.link
		if (pg.current.link && pg.current.link.navpopup) {
			pg.current.link.navpopup.limitHorizontalPosition();
		}
	};
	const mouseOutWikiLink = function mouseOutWikiLink() {
		// console ('mouseOutWikiLink');
		const self = this;
		removeModifierKeyListener(self);
		if (self.navpopup === null || self.navpopup === undefined) {
			return;
		}
		if (!self.navpopup.isVisible()) {
			self.navpopup.banish();
			return;
		}
		restoreTitle(self);
		Navpopup.tracker.addHook(posCheckerHook(self.navpopup));
	};
	const posCheckerHook = (navpop) => {
		return () => {
			if (!navpop.isVisible()) {
				return true; /* remove this hook */
			}
			if (Navpopup.tracker.dirty) {
				return false;
			}
			const {x} = Navpopup.tracker;
			const {y} = Navpopup.tracker;
			const mouseOverNavpop =
				navpop.isWithin(x, y, navpop.fuzz, navpop.mainDiv) ||
				!fuzzyCursorOffMenus(x, y, navpop.fuzz, navpop.mainDiv);
			// FIXME it'd be prettier to do this internal to the Navpopup objects
			let t = getValueOf('popupHideDelay');
			if (t) {
				t *= 1000;
			}
			if (!t) {
				if (!mouseOverNavpop) {
					if (navpop.parentAnchor) {
						restoreTitle(navpop.parentAnchor);
					}
					navpop.banish();
					return true; /* remove this hook */
				}
				return false;
			}
			// we have a hide delay set
			const d = Date.now();
			if (!navpop.mouseLeavingTime) {
				navpop.mouseLeavingTime = d;
				return false;
			}
			if (mouseOverNavpop) {
				navpop.mouseLeavingTime = null;
				return false;
			}
			if (d - navpop.mouseLeavingTime > t) {
				navpop.mouseLeavingTime = null;
				navpop.banish();
				return true; /* remove this hook */
			}
			return false;
		};
	};
	const runStopPopupTimer = (navpop) => {
		// at this point, we should have left the link but remain within the popup
		// so we call this function again until we leave the popup.
		if (!navpop.stopPopupTimer) {
			navpop.stopPopupTimer = setInterval(posCheckerHook(navpop), 500);
			navpop.addHook(
				() => {
					clearInterval(navpop.stopPopupTimer);
				},
				'hide',
				'before'
			);
		}
	};
	// ENDFILE: mouseout.js
	// STARTFILE: previewmaker.js
	/**
	 * @fileoverview
	 * Defines the {@source Previewmaker} object, which generates short previews from wiki markup.
	 */
	/**
	 * Creates a new Previewmaker
	 *
	 * @constructor
	 * @class The Previewmaker class. Use an instance of this to generate short previews from Wikitext.
	 * @param {string} wikiText The Wikitext source of the page we wish to preview.
	 * @param {string} baseUrl The url we should prepend when creating relative urls.
	 * @param {Navpopup} owner The navpop associated to this preview generator
	 */
	class Previewmaker {
		constructor(wikiText, baseUrl, owner) {
			/** The wikitext which is manipulated to generate the preview. */
			this.originalData = wikiText;
			this.baseUrl = baseUrl;
			this.owner = owner;
			this.maxCharacters = getValueOf('popupMaxPreviewCharacters');
			this.maxSentences = getValueOf('popupMaxPreviewSentences');
			this.setData();
		}
		setData() {
			const maxSize = Math.max(1e4, 2 * this.maxCharacters);
			this.data = this.originalData.slice(0, Math.max(0, maxSize));
		}
		/**
		 * Remove HTML comments
		 *
		 * @private
		 */
		killComments() {
			// this also kills one trailing newline, eg [[diamyo]]
			this.data = this.data.replace(/^<!--[^$]*?-->\n|\n<!--[^$]*?-->(?=\n)|<!--[^$]*?-->/g, '');
		}
		/**
		 * @private
		 */
		killDivs() {
			// say goodbye, divs (can be nested, so use * not *?)
			this.data = this.data.replace(/< *div[^>]* *>[\S\s]*?< *\/ *div *>/gi, '');
		}
		/**
		 * @private
		 */
		killGalleries() {
			this.data = this.data.replace(/< *gallery[^>]* *>[\S\s]*?< *\/ *gallery *>/gi, '');
		}
		/**
		 * @param {Object} opening
		 * @param {Object} closing
		 * @param {Object} subopening
		 * @param {Object} subclosing
		 * @param {Object} repl
		 * @private
		 */
		kill(opening, closing, subopening, subclosing, repl) {
			let oldk = this.data;
			let k = Previewmaker.killStuff(this.data, opening, closing, subopening, subclosing, repl);
			while (k.length < oldk.length) {
				oldk = k;
				k = Previewmaker.killStuff(k, opening, closing, subopening, subclosing, repl);
			}
			this.data = k;
		}
		/**
		 * @param {Object} txt
		 * @param {Object} opening
		 * @param {Object} closing
		 * @param {Object} subopening
		 * @param {Object} subclosing
		 * @param {Object} repl
		 * @private
		 */
		static killStuff(txt, opening, closing, subopening, subclosing, repl) {
			const op = Previewmaker.makeRegexp(opening);
			const cl = Previewmaker.makeRegexp(closing, '^');
			const sb = subopening ? Previewmaker.makeRegexp(subopening, '^') : null;
			const sc = subclosing ? Previewmaker.makeRegexp(subclosing, '^') : cl;
			if (!op || !cl) {
				mw.notify('Navigation Popups error: op or cl is null! something is wrong.', {
					tag: 'popups',
					type: 'error',
				});
				return;
			}
			if (!op.test(txt)) {
				return txt;
			}
			let ret = '';
			const opResult = op.exec(txt);
			ret = txt.slice(0, Math.max(0, opResult.index));
			txt = txt.slice(Math.max(0, opResult.index + opResult[0].length));
			let depth = 1;
			while (txt.length > 0) {
				let removal = 0;
				if (depth === 1 && cl.test(txt)) {
					depth--;
					removal = cl.exec(txt)[0].length;
				} else if (depth > 1 && sc.test(txt)) {
					depth--;
					removal = sc.exec(txt)[0].length;
				} else if (sb && sb.test(txt)) {
					depth++;
					removal = sb.exec(txt)[0].length;
				}
				if (!removal) {
					removal = 1;
				}
				txt = txt.slice(Math.max(0, removal));
				if (depth === 0) {
					break;
				}
			}
			return ret + (repl || '') + txt;
		}
		/**
		 * @param {string|RegExp} x
		 * @param {string|RegExp} prefix
		 * @param {string|RegExp} suffix
		 * @private
		 */
		static makeRegexp(x, prefix, suffix) {
			prefix ||= '';
			suffix ||= '';
			let reStr = '';
			let flags = '';
			if (isString(x)) {
				reStr = prefix + literalizeRegex(x) + suffix;
			} else if (isRegExp(x)) {
				let s = x.toString().slice(1);
				const sp = s.split('/');
				flags = sp.at(-1);
				sp[sp.length - 1] = '';
				s = sp.join('/');
				s = s.slice(0, Math.max(0, s.length - 1));
				reStr = prefix + s + suffix;
			} else {
				log('makeRegexp failed');
			}
			log(`makeRegexp: got reStr=${reStr}, flags=${flags}`);
			return new RegExp(reStr, flags);
		}
		/**
		 * @private
		 */
		killBoxTemplates() {
			// taxobox removal... in fact, there's a saudiprincebox_begin, so let's be more general
			// also, have float_begin, ... float_end
			this.kill(/{{[^\s{|}]*?(float|box)[ _](begin|start)/i, /}}\s*/, '{{');
			// infoboxes etc
			// from Zyxw: kill frames too
			this.kill(/{{[^\s{|}]*?(infobox|elementbox|frame)[ _]/i, /}}\s*/, '{{');
		}
		/**
		 * @private
		 */
		killTemplates() {
			this.kill('{{', '}}', '{', '}', ' ');
		}
		/**
		 * @private
		 */
		killTables() {
			// tables are bad, too
			// this can be slow, but it's an inprovement over a browser hang
			// torture test: [[Comparison_of_Intel_Central_Processing_Units]]
			this.kill('{|', /\|}\s*/, '{|');
			this.kill(/<table.*?>/i, /<\/table.*?>/i, /<table.*?>/i);
			// remove lines starting with a pipe for the hell of it (?)
			this.data = this.data.replace(/^\|.*$/gm, '');
		}
		/**
		 * @private
		 */
		killImages() {
			const forbiddenNamespaceAliases = [];
			for (const [localizedNamespaceLc, namespaceId] of Object.entries(mw.config.get('wgNamespaceIds'))) {
				if (namespaceId !== pg.nsImageId && namespaceId !== pg.nsCategoryId) {
					return;
				}
				forbiddenNamespaceAliases.push(localizedNamespaceLc.split(' ').join('[ _]')); // todo: escape regexp fragments!
			}
			// images and categories are a nono
			this.kill(new RegExp(`[[][[]\\s*(${forbiddenNamespaceAliases.join('|')})\\s*:`, 'i'), /]]\s*/, '[', ']');
		}
		/**
		 * @private
		 */
		killHTML() {
			// kill <ref ...>...</ref>
			this.kill(/<ref\b[^/>]*?>/i, /<\/ref>/i);
			// let's also delete entire lines starting with <. it's worth a try.
			this.data = this.data.replace(/(^|\n) *<.*/g, '\n');
			// and those pesky html tags, but not nowiki or blockquote tags
			const splitted = this.data.split(/(<[\W\w]*?(?:>|$|(?=<)))/);
			const len = splitted.length;
			for (let i = 1; i < len; i += 2) {
				switch (splitted[i]) {
					case '<no'.concat('wiki', '>'):
					case '</no'.concat('wiki', '>'):
					case '<block'.concat('quote', '>'):
					case '</block'.concat('quote', '>'):
						break;
					default:
						splitted[i] = '';
				}
			}
			this.data = splitted.join('');
		}
		/**
		 * @private
		 */
		killChunks() {
			// heuristics alert
			// chunks of italic text? you crazy, man?
			const italicChunkRegex = /((^|\n)\s*:*\s*''[^']([^']|'''|'[^']){20}(.|\n[^\n])*''[\s!.?]*\n)+/g;
			// keep stuff separated, though, so stick in \n (fixes [[Union Jack]]?
			this.data = this.data.replace(italicChunkRegex, '\n');
		}
		/**
		 * @private
		 */
		mopup() {
			// we simply *can't* be doing with horizontal rules right now
			this.data = this.data.replace(/^-{4,}/gm, '');
			// no indented lines
			this.data = this.data.replace(/(^|\n) *:[^\n]*/g, '');
			// replace __TOC__, __NOTOC__ and whatever else there is
			// this'll probably do
			this.data = this.data.replace(/^__[_a-z]*__ *$/gim, '');
		}
		/**
		 * @private
		 */
		firstBit() {
			// dont't be givin' me no subsequent paragraphs, you hear me?
			// / first we "normalize" section headings, removing whitespace after, adding before
			let d = this.data;
			if (getValueOf('popupPreviewCutHeadings')) {
				this.data = this.data.replace(/\s*(==+[^=]*==+)\s*/g, '\n\n$1 ');
				// / then we want to get rid of paragraph breaks whose text ends badly
				this.data = this.data.replace(/([:;]) *\n{2,}/g, '$1\n');
				this.data = this.data.replace(/^\s*/, '');
				const stuff = /^([^\n]|\n\S)*/.exec(this.data);
				if (stuff) {
					[d] = stuff;
				}
				if (!getValueOf('popupPreviewFirstParOnly')) {
					d = this.data;
				}
				// / now put \n\n after sections so that bullets and numbered lists work
				d = d.replace(/(==+[^=]*==+)\s*/g, '$1\n\n');
			}
			// Split sentences. Superfluous sentences are RIGHT OUT.
			// note: exactly 1 set of parens here needed to make the slice work
			d = d.split(/([!.?]+["']*\s)/g);
			// leading space is bad, mmkay?
			d[0] = d[0].replace(/^\s*/, '');
			const notSentenceEnds = /([^.][a-z]\. *[a-z]|etc|sic|dr|mr|mrs|ms|st|no|op|cit|\[[^\]]*|\s[a-z])$/i;
			d = this.fixSentenceEnds(d, notSentenceEnds);
			this.fullLength = d.join('').length;
			let n = this.maxSentences;
			let dd = Previewmaker.firstSentences(d, n);
			do {
				dd = Previewmaker.firstSentences(d, n);
				--n;
			} while (dd.length > this.maxCharacters && n !== 0);
			this.data = dd;
		}
		/**
		 * @param {string} strs
		 * @param {RegExp} reg
		 * @private
		 */
		fixSentenceEnds(strs, reg) {
			// take an array of strings, strs
			// join strs[i] to strs[i+1] & strs[i+2] if strs[i] matches regex reg
			for (let i = 0; i < strs.length - 2; ++i) {
				if (reg.test(strs[i])) {
					const a = [];
					for (let j = 0; j < strs.length; ++j) {
						if (j < i) {
							a[j] = strs[j];
						}
						if (j === i) {
							a[i] = strs[i] + strs[i + 1] + strs[i + 2];
						}
						if (j > i + 2) {
							a[j - 2] = strs[j];
						}
					}
					return this.fixSentenceEnds(a, reg);
				}
			}
			return strs;
		}
		/**
		 * @param {string[]} strs
		 * @param {number} howmany
		 * @private
		 */
		static firstSentences(strs, howmany) {
			const t = strs.slice(0, 2 * howmany);
			return t.join('');
		}
		/**
		 * @private
		 */
		killBadWhitespace() {
			// also cleans up isolated ''''
			this.data = this.data.replace(/^ *'+ *$/gm, '');
		}
		/**
		 * Runs the various methods to generate the preview.
		 * The preview is stored in the <code>html</html> field.
		 *
		 * @private
		 */
		makePreview() {
			if (
				this.owner.article.namespaceId() !== pg.nsTemplateId &&
				this.owner.article.namespaceId() !== pg.nsImageId
			) {
				this.killComments();
				this.killDivs();
				this.killGalleries();
				this.killBoxTemplates();
				if (getValueOf('popupPreviewKillTemplates')) {
					this.killTemplates();
				} else {
					this.killMultilineTemplates();
				}
				this.killTables();
				this.killImages();
				this.killHTML();
				this.killChunks();
				this.mopup();
				this.firstBit();
				this.killBadWhitespace();
			} else {
				this.killHTML();
			}
			this.html = wiki2html(this.data, this.baseUrl); // needs livepreview
			this.fixHTML();
			this.stripLongTemplates();
		}
		/**
		 * @param {string} data
		 * @private
		 */
		static esWiki2HtmlPart(data) {
			const reLinks = /(?:\[\[([^\]|]*)(?:\|([^\]|]*))*]]([a-z]*))/gi; // match a wikilink
			reLinks.lastIndex = 0; // reset regex
			let match;
			let result = '';
			let postfixIndex = 0;
			while ((match = reLinks.exec(data)) !== null) {
				// match all wikilinks
				// FIXME: the way that link is built here isn't perfect. It is clickable, but popups preview won't recognize it in some cases.
				result += `${pg.escapeQuotesHTML(data.substring(postfixIndex, match.index))}<a href="${
					Insta.conf.paths.articles
				}${pg.escapeQuotesHTML(match[1])}">${pg.escapeQuotesHTML((match[2] ?? match[1]) + match[3])}</a>`;
				postfixIndex = reLinks.lastIndex;
			}
			// append the rest
			result += pg.escapeQuotesHTML(data.slice(Math.max(0, postfixIndex)));
			return result;
		}
		editSummaryPreview() {
			const reAes = /\/\* *(.*?) *\*\//g; // match the first section marker
			reAes.lastIndex = 0; // reset regex
			const match = reAes.exec(this.data);
			if (match) {
				// we have a section link. Split it, process it, combine it.
				const prefix = this.data.slice(0, Math.max(0, match.index - 1));
				const [, section] = match;
				const postfix = this.data.slice(Math.max(0, reAes.lastIndex));
				let start = "<span class='autocomment'>";
				let end = '</span>';
				if (prefix.length > 0) {
					start = `${Previewmaker.esWiki2HtmlPart(prefix)} ${start}- `;
				}
				if (postfix.length > 0) {
					end = `: ${end}${Previewmaker.esWiki2HtmlPart(postfix)}`;
				}
				const t = new Title().fromURL(this.baseUrl);
				t.anchorFromUtf(section);
				const sectionLink = `${
					Insta.conf.paths.articles + pg.escapeQuotesHTML(t.toString(true))
				}#${pg.escapeQuotesHTML(t.anchor)}`;
				return `${start}<a href="${sectionLink}">&rarr;</a> ${pg.escapeQuotesHTML(section)}${end}`;
			}
			// else there's no section link, htmlify the whole thing.
			return Previewmaker.esWiki2HtmlPart(this.data);
		}
		/**
		 * Works around livepreview bugs.
		 *
		 * @private
		 */
		fixHTML() {
			if (!this.html) {
				return;
			}
			let ret = this.html;
			// fix question marks in wiki links
			// maybe this'll break some stuff :-(
			ret = ret.replace(new RegExp(`(<a href="${pg.wiki.articlePath}/[^"]*)[?](.*?")`, 'g'), '$1%3F$2');
			ret = ret.replace(new RegExp(`(<a href='${pg.wiki.articlePath}/[^']*)[?](.*?')`, 'g'), '$1%3F$2');
			// FIXME fix up % too
			this.html = ret;
		}
		/**
		 * Generates the preview and displays it in the current popup.
		 * Does nothing if the generated preview is invalid or consists of whitespace only.
		 * Also activates wikilinks in the preview for subpopups if the popupSubpopups option is true.
		 */
		showPreview() {
			this.makePreview();
			if (typeof this.html !== typeof '') {
				return;
			}
			if (/^\s*$/.test(this.html)) {
				return;
			}
			setPopupHTML('<hr>', 'popupPrePreviewSep', this.owner.idNumber);
			setPopupTipsAndHTML(this.html, 'popupPreview', this.owner.idNumber, {
				owner: this.owner,
			});
			const more = this.fullLength > this.data.length ? this.moreLink() : '';
			setPopupHTML(more, 'popupPreviewMore', this.owner.idNumber);
		}
		/**
		 * @private
		 */
		moreLink() {
			const a = document.createElement('a');
			a.className = 'popupMoreLink';
			a.innerHTML = popupString('more...');
			const self = this;
			a.onclick = () => {
				self.maxCharacters += 2000;
				self.maxSentences += 20;
				self.setData();
				self.showPreview();
			};
			return a;
		}
		/**
		 * @private
		 */
		stripLongTemplates() {
			// operates on the HTML!
			this.html = this.html.replace(/^.{0,1000}{{[^}]*?(<(p|br)( \/)?>\s*){2,}([^{}]*?}})?/gi, '');
			this.html = this.html.split('\n').join(' '); // workaround for <pre> templates
			this.html = this.html.replace(/{{[^}]*<pre>[^}]*}}/gi, '');
		}
		/**
		 * @private
		 */
		killMultilineTemplates() {
			this.kill('{{{', '}}}');
			this.kill(/\s*{{[^{}]*\n/, '}}', '{{');
		}
	}
	// ENDFILE: previewmaker.js
	// STARTFILE: querypreview.js
	const loadAPIPreview = (queryType, article, navpop) => {
		const art = new Title(article).urlString();
		let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
		let htmlGenerator = () => /* a, d */ {
			mw.notify('invalid html generator', {tag: 'popups', type: 'error'});
		};
		let usernameart = '';
		switch (queryType) {
			case 'history':
				url += `titles=${art}&prop=revisions&rvlimit=${getValueOf('popupHistoryPreviewLimit')}`;
				htmlGenerator = APIhistoryPreviewHTML;
				break;
			case 'category':
				url += `list=categorymembers&cmtitle=${art}`;
				htmlGenerator = APIcategoryPreviewHTML;
				break;
			case 'userinfo': {
				const username = new Title(article).userName();
				usernameart = encodeURIComponent(username);
				url += pg.re.ipUser.test(username)
					? `list=blocks&bkprop=range|restrictions&bkip=${usernameart}`
					: `list=users|usercontribs&usprop=blockinfo|groups|editcount|registration|gender&ususers=${usernameart}&meta=globaluserinfo&guiprop=groups|unattached&guiuser=${usernameart}&uclimit=1&ucprop=timestamp&ucuser=${usernameart}`;
				htmlGenerator = APIuserInfoPreviewHTML;
				break;
			}
			case 'contribs':
				usernameart = encodeURIComponent(new Title(article).userName());
				url += `list=usercontribs&ucuser=${usernameart}&uclimit=${getValueOf('popupContribsPreviewLimit')}`;
				htmlGenerator = APIcontribsPreviewHTML;
				break;
			case 'imagepagepreview': {
				let trail = '';
				if (getValueOf('popupImageLinks')) {
					trail = `&list=imageusage&iutitle=${art}`;
				}
				url += `titles=${art}&prop=revisions|imageinfo&rvprop=content${trail}`;
				htmlGenerator = APIimagepagePreviewHTML;
				break;
			}
			case 'backlinks':
				url += `list=backlinks&bltitle=${art}`;
				htmlGenerator = APIbacklinksPreviewHTML;
				break;
			case 'revision':
				url += article.oldid ? `revids=${article.oldid}` : `titles=${article.removeAnchor().urlString()}`;
				url +=
					'&prop=revisions|pageprops|info|images|categories&rvprop=ids|timestamp|flags|comment|user|content&cllimit=max&imlimit=max';
				htmlGenerator = APIrevisionPreviewHTML;
				break;
		}
		pendingNavpopTask(navpop);
		const callback = (d) => {
			log('callback of API functions was hit');
			if (queryType === 'userinfo') {
				// We need to do another API request
				fetchUserGroupNames(d.data).then(() => {
					showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
				});
				return;
			}
			showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
		};
		const go = () => {
			getPageWithCaching(url, callback, navpop);
			return true;
		};
		if (navpop.visible || !getValueOf('popupLazyDownloads')) {
			go();
		} else {
			navpop.addHook(go, 'unhide', 'before', `DOWNLOAD_${queryType}_QUERY_DATA`);
		}
	};
	const linkList = (list) => {
		list.sort((x, y) => {
			return x === y ? 0 : x < y ? -1 : 1;
		});
		const buf = [];
		for (const element of list) {
			buf.push(
				wikiLink({
					article: new Title(element),
					text: element.split(' ').join('&nbsp;'),
					action: 'view',
				})
			);
		}
		return buf.join(', ');
	};
	const getTimeOffset = () => {
		const tz = mw.user.options.get('timecorrection');
		if (tz && tz.includes('|')) {
			// New format
			return Number.parseInt(tz.split('|')[1], 10);
		}
		return 0;
	};
	const getTimeZone = () => {
		if (!pg.user.timeZone) {
			const tz = mw.user.options.get('timecorrection');
			pg.user.timeZone = 'UTC';
			if (tz) {
				const tzComponents = tz.split('|');
				if (tzComponents.length === 3 && tzComponents[0] === 'ZoneInfo') {
					[, , pg.user.timeZone] = tzComponents;
				} else {
					errlog(`Unexpected timezone information: ${tz}`);
				}
			}
		}
		return pg.user.timeZone;
	};
	/**
	 * Should we use an offset or can we use proper timezones
	 */
	const useTimeOffset = () => {
		if (Intl.DateTimeFormat.prototype.formatToParts === undefined) {
			// IE 11
			return true;
		}
		const tz = mw.user.options.get('timecorrection');
		if (tz && !tz.includes('ZoneInfo|')) {
			// System| Default system time, default for users who didn't configure timezone
			// Offset| Manual defined offset by user
			return true;
		}
		return false;
	};
	/**
	 * Array of locales for the purpose of javascript locale based formatting
	 * Filters down to those supported by the browser. Empty [] === System's default locale
	 */
	const getLocales = () => {
		if (!pg.user.locales) {
			let userLanguage = document.querySelector('html').getAttribute('lang'); // make sure we have HTML locale
			if (getValueOf('popupLocale')) {
				userLanguage = getValueOf('popupLocale');
			} else if (userLanguage === 'en') {
				// en.wp tends to treat this as international english / unspecified
				// but we have more specific settings in user options
				userLanguage = getMWDateFormat() === 'mdy' ? 'en-US' : 'en-GB';
			}
			pg.user.locales = Intl.DateTimeFormat.supportedLocalesOf([userLanguage, navigator.language]);
		}
		return pg.user.locales;
	};
	/**
	 * Retrieve configured MW date format for this user
	 * These can be
	 * default
	 * dmy: time, dmy
	 * mdy: time, mdy
	 * ymd: time, ymd
	 * dmyt: dmy, time
	 * dmyts: dmy, time + seconds
	 * ISO 8601: YYYY-MM-DDThh:mm:ss (local time)
	 *
	 * This isn't too useful for us, as JS doesn't have formatters to match these private specifiers
	 */
	const getMWDateFormat = () => {
		return mw.user.options.get('date');
	};
	/**
	 * Creates a HTML table that's shown in the history and user-contribs popups.
	 *
	 * @param {string} article
	 * @param {Object[]} h - a list of revisions, returned from the API
	 * @param {boolean} reallyContribs - true only if we're displaying user contributions
	 */
	const editPreviewTable = (article, h, reallyContribs) => {
		let html = ['<table>'];
		let day;
		let curart = article;
		let page;
		let makeFirstColumnLinks;
		if (reallyContribs) {
			// We're showing user contributions, so make (diff | hist) links
			makeFirstColumnLinks = (currentRevision) => {
				let result = '(';
				result +=
					`<a href="${pg.wiki.titlebase}${new Title(currentRevision.title).urlString()}&diff=prev` +
					`&oldid=${currentRevision.revid}">${popupString('diff')}</a>`;
				result += '&nbsp;|&nbsp;';
				result += `<a href="${pg.wiki.titlebase}${new Title(
					currentRevision.title
				).urlString()}&action=history">${popupString('hist')}</a>`;
				result += ')';
				return result;
			};
		} else {
			// It's a regular history page, so make (cur | last) links
			const firstRevid = h[0].revid;
			makeFirstColumnLinks = (currentRevision) => {
				let result = '(';
				result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=${firstRevid}&oldid=${
					currentRevision.revid
				}">${popupString('cur')}</a>`;
				result += '&nbsp;|&nbsp;';
				result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=prev&oldid=${
					currentRevision.revid
				}">${popupString('last')}</a>`;
				result += ')';
				return result;
			};
		}
		for (const [i, element] of h.entries()) {
			if (reallyContribs) {
				page = element.title;
				curart = new Title(page);
			}
			const minor = element.minor ? '<b>m </b>' : '';
			const editDate = new Date(element.timestamp);
			let thisDay = formattedDate(editDate);
			const thisTime = formattedTime(editDate);
			if (thisDay === day) {
				thisDay = '';
			} else {
				day = thisDay;
			}
			if (thisDay) {
				html.push(`<tr><td colspan=3><span class="popup_history_date">${thisDay}</span></td></tr>`);
			}
			html.push(
				`<tr class="popup_history_row_${i % 2 ? 'odd' : 'even'}">`,
				`<td>${makeFirstColumnLinks(element)}</td>`,
				'<td>' +
					`<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&oldid=${
						element.revid
					}">${thisTime}</a></td>`
			);
			let col3url = '';
			let col3txt = '';
			if (reallyContribs) {
				col3url = pg.wiki.titlebase + curart.urlString();
				col3txt = pg.escapeQuotesHTML(page);
			} else {
				const {user} = element;
				if (element.userhidden) {
					col3url = getValueOf('popupRevDelUrl');
					col3txt = pg.escapeQuotesHTML(popupString('revdel'));
				} else {
					col3url = pg.re.ipUser.test(user)
						? `${
								pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId]
							}:Contributions&target=${new Title(user).urlString()}`
						: `${pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsUserId]}:${new Title(
								user
							).urlString()}`;
					col3txt = pg.escapeQuotesHTML(user);
				}
			}
			html.push(`<td>${reallyContribs ? minor : ''}<a href="${col3url}">${col3txt}</a></td>`);
			let comment = '';
			const c = element.comment || element.content;
			if (c) {
				comment = new Previewmaker(c, new Title(curart).toUrl()).editSummaryPreview();
			} else if (element.commenthidden) {
				comment = popupString('revdel');
			}
			html.push(`<td>${reallyContribs ? '' : minor}${comment}</td>`, '</tr>');
			html = [html.join('')];
		}
		html.push('</table>');
		return html.join('');
	};
	const adjustDate = (d, offset) => {
		// offset is in minutes
		const o = offset * 60 * 1000;
		return new Date(+d + o);
	};
	/**
	 * This relies on the Date parser understanding en-US dates,
	 * which is pretty safe assumption, but not perfect.
	 *
	 * @param {Date} date
	 * @param {string} timeZone
	 */
	const convertTimeZone = (date, timeZone) => {
		return new Date(date.toLocaleString('en-US', {timeZone}));
	};
	const formattedDateTime = (date) => {
		// fallback for IE11 and unknown timezones
		if (useTimeOffset()) {
			return `${formattedDate(date)} ${formattedTime(date)}`;
		}
		if (getMWDateFormat() === 'ISO 8601') {
			const d2 = convertTimeZone(date, getTimeZone());
			return `${map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join('-')}T${map(zeroFill, [
				d2.getHours(),
				d2.getMinutes(),
				d2.getSeconds(),
			]).join(':')}`;
		}
		const options = getValueOf('popupDateTimeFormatterOptions');
		options.timeZone = getTimeZone();
		return date.toLocaleString(getLocales(), options);
	};
	const formattedDate = (date) => {
		let d2;
		// fallback for IE11 and unknown timezones
		if (useTimeOffset()) {
			// we adjust the UTC time, so we print the adjusted UTC, but not really UTC values
			d2 = adjustDate(date, getTimeOffset());
			return map(zeroFill, [d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate()]).join('-');
		}
		if (getMWDateFormat() === 'ISO 8601') {
			d2 = convertTimeZone(date, getTimeZone());
			return map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join('-');
		}
		const options = getValueOf('popupDateFormatterOptions');
		options.timeZone = getTimeZone();
		return date.toLocaleDateString(getLocales(), options);
	};
	const formattedTime = (date) => {
		let d2;
		// fallback for IE11 and unknown timezones
		if (useTimeOffset()) {
			// we adjust the UTC time, so we print the adjusted UTC, but not really UTC values
			d2 = adjustDate(date, getTimeOffset());
			return map(zeroFill, [d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()]).join(':');
		}
		if (getMWDateFormat() === 'ISO 8601') {
			d2 = convertTimeZone(date, getTimeZone());
			return map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(':');
		}
		const options = getValueOf('popupTimeFormatterOptions');
		options.timeZone = getTimeZone();
		return date.toLocaleTimeString(getLocales(), options);
	};
	// Get the proper groupnames for the technicalgroups
	const fetchUserGroupNames = (userinfoResponse) => {
		const queryObj = getJsObj(userinfoResponse).query;
		const user = anyChild(queryObj.users);
		const messages = [];
		if (user.groups) {
			for (const groupName of user.groups) {
				if (!['*', 'user', 'autoconfirmed'].includes(groupName)) {
					messages.push(`group-${groupName}-member`);
				}
			}
		}
		if (queryObj.globaluserinfo && queryObj.globaluserinfo.groups) {
			for (const groupName of queryObj.globaluserinfo.groups) {
				messages.push(`group-${groupName}-member`);
			}
		}
		return getMwApi().loadMessagesIfMissing(messages);
	};
	const showAPIPreview = (queryType, html, id, navpop, download) => {
		// DJ: done
		let target = 'popupPreview';
		completedNavpopTask(navpop);
		switch (queryType) {
			case 'imagelinks':
			case 'category':
				target = 'popupPostPreview';
				break;
			case 'userinfo':
				target = 'popupUserData';
				break;
			case 'revision':
				insertPreview(download);
				return;
		}
		setPopupTipsAndHTML(html, target, id);
	};
	const APIrevisionPreviewHTML = (_article, download) => {
		try {
			const jsObj = getJsObj(download.data);
			const page = anyChild(jsObj.query.pages);
			if (page.missing) {
				// TODO we need to fix this proper later on
				download.owner = null;
				return;
			}
			const content =
				page && page.revisions && page.revisions[0].contentmodel === 'wikitext'
					? page.revisions[0].content
					: null;
			if (typeof content === 'string') {
				download.data = content;
				download.lastModified = new Date(page.revisions[0].timestamp);
			}
		} catch {
			return 'Revision preview failed :(';
		}
	};
	const APIbacklinksPreviewHTML = (_article, download /* , navpop */) => {
		try {
			const jsObj = getJsObj(download.data);
			const list = jsObj.query.backlinks;
			let html = [];
			if (!list) {
				return popupString('No backlinks found');
			}
			for (const element of list) {
				const t = new Title(element.title);
				html.push(`<a href="${pg.wiki.titlebase}${t.urlString()}">${t.toString().entify()}</a>`);
			}
			html = html.join(', ');
			if (jsObj.continue && jsObj.continue.blcontinue) {
				html += popupString(' and more');
			}
			return html;
		} catch {
			return 'backlinksPreviewHTML went wonky';
		}
	};
	pg.fn.APIsharedImagePagePreviewHTML = (obj) => {
		log('APIsharedImagePagePreviewHTML');
		const popupid = obj.requestid;
		if (obj.query && obj.query.pages) {
			const page = anyChild(obj.query.pages);
			const content =
				page && page.revisions && page.revisions[0].contentmodel === 'wikitext'
					? page.revisions[0].content
					: null;
			if (typeof content === 'string' && pg && pg.current && pg.current.link && pg.current.link.navpopup) {
				/* Not entirely safe, but the best we can do */
				const p = new Previewmaker(content, pg.current.link.navpopup.article, pg.current.link.navpopup);
				p.makePreview();
				setPopupHTML(p.html, 'popupSecondPreview', popupid);
			}
		}
	};
	const APIimagepagePreviewHTML = (article, download, navpop) => {
		try {
			const jsObj = getJsObj(download.data);
			const page = anyChild(jsObj.query.pages);
			const content =
				page && page.revisions && page.revisions[0].contentmodel === 'wikitext'
					? page.revisions[0].content
					: null;
			let ret = '';
			let alt = '';
			try {
				[{alt}] = navpop.parentAnchor.childNodes;
			} catch {
				/* empty */
			}
			if (alt) {
				ret = `${ret}<hr><b>${popupString('Alt text:')}</b> ${pg.escapeQuotesHTML(alt)}`;
			}
			if (typeof content === 'string') {
				const p = prepPreviewmaker(content, article, navpop);
				p.makePreview();
				if (p.html) {
					ret += `<hr>${p.html}`;
				}
				if (getValueOf('popupSummaryData')) {
					const info = getPageInfo(content, download);
					log(info);
					setPopupTrailer(info, navpop.idNumber);
				}
			}
			if (page && page.imagerepository === 'shared') {
				const art = new Title(article);
				const encart = encodeURIComponent(`File:${art.stripNamespace()}`);
				const shared_url =
					`${pg.wiki.apicommonsbase}?format=json&formatversion=2` +
					'&callback=pg.fn.APIsharedImagePagePreviewHTML' +
					`&requestid=${navpop.idNumber}&action=query&prop=revisions&rvprop=content&titles=${encart}`;
				ret = `${ret}<hr>${popupString('Image from Commons')}: <a href="${
					pg.wiki.commonsbase
				}?title=${encart}">${popupString('Description page')}</a>`;
				mw.loader.load(shared_url);
			}
			showAPIPreview('imagelinks', APIimagelinksPreviewHTML(article, download), navpop.idNumber, download);
			return ret;
		} catch {
			return 'API imagepage preview failed :(';
		}
	};
	const APIimagelinksPreviewHTML = (_article, download) => {
		try {
			const jsobj = getJsObj(download.data);
			const list = jsobj.query.imageusage;
			if (list) {
				const ret = [];
				for (const element of list) {
					ret.push(element.title);
				}
				if (ret.length === 0) {
					return popupString('No image links found');
				}
				return `<h2>${popupString('File links')}</h2>${linkList(ret)}`;
			}
			return popupString('No image links found');
		} catch {
			return 'Image links preview generation failed :(';
		}
	};
	const APIcategoryPreviewHTML = (_article, download) => {
		try {
			const jsobj = getJsObj(download.data);
			const list = jsobj.query.categorymembers;
			let ret = [];
			for (const element of list) {
				ret.push(element.title);
			}
			if (ret.length === 0) {
				return popupString('Empty category');
			}
			ret = `<h2>${tprintf('Category members (%s shown)', [ret.length])}</h2>${linkList(ret)}`;
			if (jsobj.continue && jsobj.continue.cmcontinue) {
				ret += popupString(' and more');
			}
			return ret;
		} catch {
			return 'Category preview failed :(';
		}
	};
	const APIuserInfoPreviewHTML = (_article, download) => {
		let ret = [];
		let queryobj = {};
		try {
			queryobj = getJsObj(download.data).query;
		} catch {
			return 'Userinfo preview failed :(';
		}
		const user = anyChild(queryobj.users);
		if (user) {
			const {globaluserinfo} = queryobj;
			if (user.invalid === '') {
				ret.push(popupString('Invalid user'));
			} else if (user.missing === '') {
				ret.push(popupString('Not a registered username'));
			}
			if (user.blockedby) {
				if (user.blockpartial) {
					ret.push(`<b>${popupString('Has blocks')}</b>`);
				} else {
					ret.push(`<b>${popupString('BLOCKED')}</b>`);
				}
			}
			if (globaluserinfo && ('locked' in globaluserinfo || 'hidden' in globaluserinfo)) {
				let lockedSulAccountIsAttachedToThis = true;
				for (let i = 0; globaluserinfo.unattached && i < globaluserinfo.unattached.length; i++) {
					if (globaluserinfo.unattached[i].wiki === mw.config.get('wgDBname')) {
						lockedSulAccountIsAttachedToThis = false;
						break;
					}
				}
				if (lockedSulAccountIsAttachedToThis) {
					if ('locked' in globaluserinfo) {
						ret.push(`<b><i>${popupString('LOCKED')}</i></b>`);
					}
					if ('hidden' in globaluserinfo) {
						ret.push(`<b><i>${popupString('HIDDEN')}</i></b>`);
					}
				}
			}
			if (getValueOf('popupShowGender') && user.gender) {
				switch (user.gender) {
					case 'male':
						ret.push(`${popupString('he/him')} · `);
						break;
					case 'female':
						ret.push(`${popupString('she/her')} · `);
						break;
				}
			}
			if (user.groups) {
				for (const groupName of user.groups) {
					if (!['*', 'user', 'autoconfirmed'].includes(groupName)) {
						// Messages that can be used here:
						// * see [[Special:PrefixIndex/MediaWiki:Group-]]
						// * for more information
						ret.push(pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text()));
					}
				}
			}
			if (globaluserinfo && globaluserinfo.groups) {
				for (const groupName of globaluserinfo.groups) {
					ret.push(
						// Messages that can be used here:
						// * see [[Special:PrefixIndex/MediaWiki:Group-]]
						// * for more information
						`<i>${pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text())}</i>`
					);
				}
			}
			if (user.registration) {
				ret.push(
					pg.escapeQuotesHTML(
						(user.editcount ?? '0') +
							popupString(' edits since: ') +
							(user.registration ? formattedDate(new Date(user.registration)) : '')
					)
				);
			}
		}
		if (queryobj.usercontribs && queryobj.usercontribs.length > 0) {
			ret.push(popupString('last edit on ') + formattedDate(new Date(queryobj.usercontribs[0].timestamp)));
		}
		if (queryobj.blocks) {
			ret.push(popupString('IP user')); // we only request list=blocks for IPs
			for (let l = 0; l < queryobj.blocks.length; l++) {
				let rbstr = queryobj.blocks[l].rangestart === queryobj.blocks[l].rangeend ? 'BLOCK' : 'RANGEBLOCK';
				rbstr = Array.isArray(queryobj.blocks[l].restrictions) ? `${rbstr}ED` : `Has ${rbstr.toLowerCase()}s`;
				ret.push(`<b>${popupString(rbstr)}</b>`);
			}
		}
		// if any element of ret ends with ' · ', merge it with the next element to avoid
		// the .join(', ') call inserting a comma after it
		for (let m = 0; m < ret.length - 1; m++) {
			if (ret[m].length > 3 && ret[m].slice(Math.max(0, ret[m].length - 3)) === ' · ') {
				ret[m] += ret[m + 1];
				ret.splice(m + 1, 1); // delete element at index m+1
				m--;
			}
		}
		ret = `<hr>${ret.join(', ')}`;
		return ret;
	};
	const APIcontribsPreviewHTML = (article, download, navpop) => {
		return APIhistoryPreviewHTML(article, download, navpop, true);
	};
	const APIhistoryPreviewHTML = (article, download, _navpop, reallyContribs) => {
		try {
			const jsobj = getJsObj(download.data);
			let edits = [];
			edits = reallyContribs ? jsobj.query.usercontribs : anyChild(jsobj.query.pages).revisions;
			const ret = editPreviewTable(article, edits, reallyContribs);
			return ret;
		} catch {
			return 'History preview failed :-(';
		}
	};
	// ENDFILE: querypreview.js
	// STARTFILE: debug.js
	// Debugging functions
	const setupDebugging = () => {
		if (window.popupDebug) {
			// popupDebug is set from .version
			window.log = (x) => {
				// if (g Msg !== '') { gMsg += '\n'; gMsg+=time() + ' ' + x; }
				console.log(x);
			};
			window.errlog = (x) => {
				console.error(`[Popups] ${x}`);
			};
			log('Initializing logger');
		} else {
			window.log = () => {};
			window.errlog = () => {};
		}
	};
	// ENDFILE: debug.js
	// STARTFILE: images.js
	// load image of type Title.
	const loadImage = (image, navpop) => {
		if (typeof image.stripNamespace !== 'function') {
			mw.notify('loadImages bad', {tag: 'popups', type: 'error'});
		}
		// API call to retrieve image info.
		if (!getValueOf('popupImages')) {
			return;
		}
		if (!isValidImageName(image.toString())) {
			return false;
		}
		const art = image.urlString();
		let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query`;
		url += `&prop=imageinfo&iiprop=url|mime&iiurlwidth=${getValueOf('popupImageSizeLarge')}`;
		url += `&titles=${art}`;
		pendingNavpopTask(navpop);
		const callback = (d) => {
			popupsInsertImage(navpop.idNumber, navpop, d);
		};
		const go = () => {
			getPageWithCaching(url, callback, navpop);
			return true;
		};
		if (navpop.visible || !getValueOf('popupLazyDownloads')) {
			go();
		} else {
			navpop.addHook(go, 'unhide', 'after', 'DOWNLOAD_IMAGE_QUERY_DATA');
		}
	};
	const popupsInsertImage = (id, _navpop, download) => {
		log('popupsInsertImage');
		let imageinfo;
		try {
			const jsObj = getJsObj(download.data);
			const imagepage = anyChild(jsObj.query.pages);
			if (imagepage.imageinfo === undefined) {
				return;
			}
			[imageinfo] = imagepage.imageinfo;
		} catch {
			log('popupsInsertImage failed :(');
			return;
		}
		const popupImage = document.querySelector(`#popupImg${id}`);
		if (!popupImage) {
			log('could not find insertion point for image');
			return;
		}
		popupImage.width = getValueOf('popupImageSize');
		popupImage.style.display = 'inline';
		// Set the source for the image.
		if (imageinfo.thumburl) {
			popupImage.src = imageinfo.thumburl;
		} else if (imageinfo.mime.indexOf('image') === 0) {
			popupImage.src = imageinfo.url;
			log('a thumb could not be found, using original image');
		} else {
			log("fullsize imagethumb, but not sure if it's an image");
		}
		const a = document.querySelector(`#popupImageLink${id}`);
		if (a === null) {
			return null;
		}
		// Determine the action of the surrouding imagelink.
		switch (getValueOf('popupThumbAction')) {
			case 'imagepage':
				if (pg.current.article.namespaceId() !== pg.nsImageId) {
					a.href = imageinfo.descriptionurl;
					// FIXME: unreliable pg.idNumber
					popTipsSoonFn(`popupImage${id}`)();
					break;
				}
			/* falls through */
			case 'sizetoggle':
				a.onclick = toggleSize;
				a.title = popupString('Toggle image size');
				return;
			case 'linkfull':
				a.href = imageinfo.url;
				a.title = popupString('Open full-size image');
		}
	};
	// Toggles the image between inline small and navpop fullwidth.
	// It's the same image, no actual sizechange occurs, only display width.
	const toggleSize = function toggleSize() {
		const self = this;
		if (!self) {
			mw.notify('self is null :/', {tag: 'popups', type: 'error'});
			return;
		}
		const img = self.firstChild;
		if (!img) {
			mw.notify('img is null :/', {tag: 'popups', type: 'error'});
			return;
		}
		img.style.width = !img.style.width || img.style.width === '' ? '100%' : '';
	};
	// Returns one title of an image from wikiText.
	const getValidImageFromWikiText = (wikiText) => {
		// nb in pg.re.image we're interested in the second bracketed expression
		// this may change if the regex changes :-(
		// let match=pg.re.image.exec(wikiText);
		let matched;
		let match;
		// strip html comments, used by evil bots :-(
		const t = removeMatchesUnless(wikiText, /(<!--[\S\s]*?-->)/, 1, /^<!--[^[]*popup/i);
		while ((match = pg.re.image.exec(t)) !== null) {
			// now find a sane image name - exclude templates by seeking {
			const m = match[2] || match[6];
			if (isValidImageName(m)) {
				matched = m;
				break;
			}
		}
		pg.re.image.lastIndex = 0;
		if (!matched) {
			return null;
		}
		return `${mw.config.get('wgFormattedNamespaces')[pg.nsImageId]}:${upcaseFirst(matched)}`;
	};
	const removeMatchesUnless = (str, re1, parencount, re2) => {
		const split = str.split(re1);
		const c = parencount + 1;
		for (let i = 0; i < split.length; ++i) {
			if (i % c === 0 || re2.test(split[i])) {
				continue;
			}
			split[i] = '';
		}
		return split.join('');
	};
	// ENDFILE: images.js
	// STARTFILE: namespaces.js
	// Set up namespaces and other non-strings.js localization
	// (currently that means redirs too)
	const setNamespaces = () => {
		pg.nsSpecialId = -1;
		pg.nsMainspaceId = 0;
		pg.nsImageId = 6;
		pg.nsUserId = 2;
		pg.nsUsertalkId = 3;
		pg.nsCategoryId = 14;
		pg.nsTemplateId = 10;
	};
	const setRedirs = () => {
		const r = 'redirect';
		const R = 'REDIRECT';
		const redirLists = {
			ar: [R, 'تحويل'],
			be: [r, 'перанакіраваньне'],
			bg: [r, 'пренасочване', 'виж'],
			bs: [r, 'Preusmjeri', 'preusmjeri', 'PREUSMJERI'],
			bn: [R, 'পুনর্নির্দেশ'],
			cs: [R, 'PŘESMĚRUJ'],
			cy: [r, 'ail-cyfeirio'],
			de: [R, 'WEITERLEITUNG'],
			el: [R, 'ΑΝΑΚΑΤΕΥΘΥΝΣΗ'],
			eo: [R, 'ALIDIREKTU', 'ALIDIREKTI'],
			es: [R, 'REDIRECCIÓN'],
			et: [r, 'suuna'],
			ga: [r, 'athsheoladh'],
			gl: [r, 'REDIRECCIÓN', 'REDIRECIONAMENTO'],
			he: [R, 'הפניה'],
			hu: [R, 'ÁTIRÁNYÍTÁS'],
			is: [r, 'tilvísun', 'TILVÍSUN'],
			it: [R, 'RINVIA', 'Rinvia'],
			ja: [R, '転送'],
			mk: [r, 'пренасочување', 'види'],
			nds: [r, 'wiederleiden'],
			'nds-nl': [R, 'DEURVERWIEZING', 'DUURVERWIEZING'],
			nl: [R, 'DOORVERWIJZING'],
			nn: [r, 'omdiriger'],
			pl: [R, 'PATRZ', 'PRZEKIERUJ', 'TAM'],
			pt: [R, 'redir'],
			ru: [R, 'ПЕРЕНАПРАВЛЕНИЕ', 'ПЕРЕНАПР'],
			sk: [r, 'presmeruj'],
			sr: [r, 'Преусмери', 'преусмери', 'ПРЕУСМЕРИ', 'Preusmeri', 'preusmeri', 'PREUSMERI'],
			tt: [R, 'yünältü', 'перенаправление', 'перенапр'],
			uk: [R, 'ПЕРЕНАПРАВЛЕННЯ', 'ПЕРЕНАПР'],
			vi: [r, 'đổi'],
			yi: [R, 'ווייטערפירן'],
			zh: [R, '重定向'], // no comma
		};
		const redirList = redirLists[pg.wiki.lang] || [r, R];
		// Mediawiki is very tolerant about what comes after the #redirect at the start
		pg.re.redirect = new RegExp(
			`^\\s*[#](${redirList.join('|')}).*?\\[{2}([^\\|\\]]*)(|[^\\]]*)?\\]{2}\\s*(.*)`,
			'i'
		);
	};
	const setInterwiki = () => {
		if (pg.wiki.wikimedia) {
			// From {@link https://meta.wikimedia.org/wiki/List_of_Wikipedias}
			// {@link https://en.wikipedia.org/w/api.php?action=sitematrix&format=json&smtype=language&smlangprop=code&formatversion=2}
			pg.wiki.interwiki =
				'aa|ab|ace|af|ak|als|am|an|ang|ar|arc|arz|as|ast|av|ay|az|ba|bar|bat-smg|bcl|be|be-x-old|bg|bh|bi|bjn|bm|bn|bo|bpy|br|bs|bug|bxr|ca|cbk-zam|cdo|ce|ceb|ch|cho|chr|chy|ckb|co|cr|crh|cs|csb|cu|cv|cy|da|de|diq|dsb|dv|dz|ee|el|eml|en|eo|es|et|eu|ext|fa|ff|fi|fiu-vro|fj|fo|fr|frp|frr|fur|fy|ga|gag|gan|gd|gl|glk|gn|got|gu|gv|ha|hak|haw|he|hi|hif|ho|hr|hsb|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|ilo|io|is|it|iu|ja|jbo|jv|ka|kaa|kab|kbd|kg|ki|kj|kk|kl|km|kn|ko|koi|kr|krc|ks|ksh|ku|kv|kw|ky|la|lad|lb|lbe|lg|li|lij|lmo|ln|lo|lt|ltg|lv|map-bms|mdf|mg|mh|mhr|mi|mk|ml|mn|mo|mr|mrj|ms|mt|mus|mwl|my|myv|mzn|na|nah|nap|nds|nds-nl|ne|new|ng|nl|nn|no|nov|nrm|nv|ny|oc|om|or|os|pa|pag|pam|pap|pcd|pdc|pfl|pi|pih|pl|pms|pnb|pnt|ps|pt|qu|rm|rmy|rn|ro|roa-rup|roa-tara|ru|rue|rw|sa|sah|sc|scn|sco|sd|se|sg|sh|si|simple|sk|sl|sm|sn|so|sq|sr|srn|ss|st|stq|su|sv|sw|szl|ta|te|tet|tg|th|ti|tk|tl|tn|to|tpi|tr|ts|tt|tum|tw|ty|udm|ug|uk|ur|uz|ve|vec|vi|vls|vo|wa|war|wo|wuu|xal|xh|yi|yo|za|zea|zh|zh-classical|zh-min-nan|zh-yue|zu';
			pg.re.interwiki = new RegExp(`^${pg.wiki.interwiki}:`);
		} else {
			pg.wiki.interwiki = null;
			pg.re.interwiki = /^$/;
		}
	};
	// return a regexp pattern matching all variants to write the given namespace
	const nsRe = (namespaceId) => {
		const imageNamespaceVariants = [];
		for (const [_localizedNamespaceLc, _namespaceId] of Object.entries(mw.config.get('wgNamespaceIds'))) {
			if (_namespaceId !== namespaceId) {
				continue;
			}
			const localizedNamespaceLc = upcaseFirst(_localizedNamespaceLc);
			imageNamespaceVariants.push(
				mw.util.escapeRegExp(localizedNamespaceLc).split(' ').join('[ _]'),
				mw.util.escapeRegExp(encodeURI(localizedNamespaceLc))
			);
		}
		return `(?:${imageNamespaceVariants.join('|')})`;
	};
	const nsReImage = () => {
		return nsRe(pg.nsImageId);
	};
	// ENDFILE: namespaces.js
	// STARTFILE: selpop.js
	const getEditboxSelection = () => {
		// see {@link http://www.webgurusforum.com/8/12/0}
		let editbox;
		try {
			editbox = document.editform.wpTextbox1;
		} catch {
			return;
		}
		// IE, Opera
		if (document.selection) {
			return document.selection.createRange().text;
		}
		// Mozilla
		const selStart = editbox.selectionStart;
		const selEnd = editbox.selectionEnd;
		return editbox.value.substring(selStart, selEnd);
	};
	const doSelectionPopup = () => {
		// popup if the selection looks like [[foo|anything afterwards at all
		// or [[foo|bar]]text without ']]'
		// or [[foo|bar]]
		const sel = getEditboxSelection();
		const open = sel.indexOf('[[');
		const pipe = sel.indexOf('|');
		const close = sel.indexOf(']]');
		if (open === -1 || (pipe === -1 && close === -1)) {
			return;
		}
		if ((pipe !== -1 && open > pipe) || (close !== -1 && open > close)) {
			return;
		}
		const article = new Title(sel.substring(open + 2, pipe < 0 ? close : pipe));
		if (getValueOf('popupOnEditSelection') === 'boxpreview') {
			return doSeparateSelectionPopup(sel, article);
		}
		if (close > 0 && sel.slice(Math.max(0, close + 2)).includes('[[')) {
			return;
		}
		const a = document.createElement('a');
		a.href = pg.wiki.titlebase + article.urlString();
		mouseOverWikiLink2(a);
		if (a.navpopup) {
			a.navpopup.addHook(
				() => {
					runStopPopupTimer(a.navpopup);
				},
				'unhide',
				'after'
			);
		}
	};
	const doSeparateSelectionPopup = (str, article) => {
		let div = document.querySelector('#selectionPreview');
		if (!div) {
			div = document.createElement('div');
			div.id = 'selectionPreview';
			try {
				const box = document.editform.wpTextbox1;
				box.parentNode.insertBefore(div, box);
			} catch {
				return;
			}
		}
		const p = prepPreviewmaker(str, article, newNavpopup(document.createElement('a'), article));
		p.makePreview();
		if (p.html) {
			div.innerHTML = p.html;
		}
		div.ranSetupTooltipsAlready = false;
		popTipsSoonFn('selectionPreview')();
	};
	// ENDFILE: selpop.js
	// STARTFILE: navpopup.js
	/**
	 * @fileoverview  Defines two classes: {@source Navpopup} and {@source Mousetracker}.
	 *
	 * <code>Navpopup</code> describes popups: when they appear, where, what
	 * they look like and so on.
	 *
	 * <code>Mousetracker</code> "captures" the mouse using
	 * <code>document.onmousemove</code>.
	 */
	/**
	 * Creates a new Mousetracker.
	 *
	 * @constructor
	 * @class The Mousetracker class. This monitors mouse movements and manages associated hooks.
	 */
	class Mousetracker {
		constructor() {
			/**
			 * Interval to regularly run the hooks anyway, in milliseconds.
			 *
			 * @type Integer
			 */
			this.loopDelay = 400;
			/**
			 * Timer for the loop.
			 *
			 * @type Timer
			 */
			this.timer = null;
			/**
			 * Flag - are we switched on?
			 *
			 * @type Boolean
			 */
			this.active = false;
			/**
			 * Flag - are we probably inaccurate, i.e. not reflecting the actual mouse position?
			 */
			this.dirty = true;
			/**
			 * Array of hook functions.
			 *
			 * @private
			 * @type Array
			 */
			this.hooks = [];
		}
		/**
		 * Adds a hook, to be called when we get events.
		 *
		 * @param {Function} f A function which is called as
		 * <code>f(x,y)</code>. It should return <code>true</code> when it
		 * wants to be removed, and <code>false</code> otherwise.
		 */
		addHook(f) {
			this.hooks.push(f);
		}
		/**
		 * Runs hooks, passing them the x
		 * and y coords of the mouse.  Hook functions that return true are
		 * passed to {@source Mousetracker#removeHooks} for removal.
		 *
		 * @private
		 */
		runHooks() {
			if (!this.hooks || this.hooks.length === 0) {
				return;
			}
			// log('Mousetracker.runHooks; we got some hooks to run');
			let remove = false;
			const removeObj = {};
			// this method gets called a LOT -
			// pre-cache some variables
			const {x} = this;
			const {y} = this;
			const len = this.hooks.length;
			for (let i = 0; i < len; ++i) {
				// ~ run the hook function, and remove it if it returns true
				if (this.hooks[i](x, y) === true) {
					remove = true;
					removeObj[i] = true;
				}
			}
			if (remove) {
				this.removeHooks(removeObj);
			}
		}
		/**
		 * Removes hooks.
		 *
		 * @private
		 * @param {Object} removeObj An object whose keys are the index
		 * numbers of functions for removal, with values that evaluate to true
		 */
		removeHooks(removeObj) {
			const newHooks = [];
			const len = this.hooks.length;
			for (let i = 0; i < len; ++i) {
				if (!removeObj[i]) {
					newHooks.push(this.hooks[i]);
				}
			}
			this.hooks = newHooks;
		}
		/**
		 * Event listener for mouse wiggles.
		 * We simply grab the event, set x and y and run the hooks.
		 * This makes the cpu all hot and bothered :-(
		 *
		 * @private
		 * @param {Event} e Mousemove event
		 */
		track(e) {
			// ~ Apparently this is needed in IE.
			e ||= window.event;
			let x;
			let y;
			if (e) {
				if (e.pageX) {
					x = e.pageX;
					y = e.pageY;
				} else if (e.clientX === undefined) {
					return;
				} else {
					let left;
					let top;
					const docElt = document.documentElement;
					if (docElt) {
						left = docElt.scrollLeft;
					}
					left ||= document.querySelector('body').scrollLeft || document.scrollLeft || 0;
					if (docElt) {
						top = docElt.scrollTop;
					}
					top ||= document.querySelector('body').scrollTop || document.scrollTop || 0;
					x = e.clientX + left;
					y = e.clientY + top;
				}
				this.setPosition(x, y);
			}
		}
		/**
		 * Sets the x and y coordinates stored and takes appropriate action,
		 * running hooks as appropriate.
		 *
		 * @param {Integer} x, y Screen coordinates to set
		 * @param {number} x
		 * @param {number} y
		 */
		setPosition(x, y) {
			this.x = x;
			this.y = y;
			if (this.dirty || this.hooks.length === 0) {
				this.dirty = false;
				return;
			}
			if (typeof this.lastHook_x !== 'number') {
				this.lastHook_x = -100;
				this.lastHook_y = -100;
			}
			let diff = (this.lastHook_x - x) * (this.lastHook_y - y);
			diff = diff >= 0 ? diff : -diff;
			if (diff > 1) {
				this.lastHook_x = x;
				this.lastHook_y = y;
				if (this.dirty) {
					this.dirty = false;
				} else {
					this.runHooks();
				}
			}
		}
		/**
		 * Sets things in motion, unless they are already that is, registering an event listener on
		 * <code>document.onmousemove</code>. A half-hearted attempt is made to preserve the old event
		 * listener if there is one.
		 */
		enable() {
			if (this.active) {
				return;
			}
			this.active = true;
			// ~ Save the current listener for mousemove events. This isn't too
			// ~ robust, of course.
			this.savedListener = document.onmousemove;
			// ~ Gotta save @tt{this} again for the closure, and use apply for
			// ~ the member function.
			const self = this;
			document.onmousemove = (e) => {
				self.track(e);
			};
			if (this.loopDelay) {
				this.timer = setInterval(() => {
					// log('loop delay in mousetracker is working');
					self.runHooks();
				}, this.loopDelay);
			}
		}
		/**
		 * Disables the tracker, removing the event listener.
		 */
		disable() {
			if (!this.active) {
				return;
			}
			if (typeof this.savedListener === 'function') {
				document.onmousemove = this.savedListener;
			} else {
				delete document.onmousemove;
			}
			if (this.timer) {
				clearInterval(this.timer);
			}
			this.active = false;
		}
	}
	/**
	 * Creates a new Navpopup.
	 * Gets a UID for the popup and
	 *
	 * @param init Contructor object. If <code>init.draggable</code> is true or absent, the popup becomes draggable.
	 * @constructor
	 * @class The Navpopup class. This generates popup hints, and does some management of them.
	 */
	class Navpopup {
		constructor() {
			// mw.notify('new Navpopup(init)', {tag: 'popups', type: 'warn'});
			/**
			 * UID for each Navpopup instance.
			 * Read-only.
			 *
			 * @type integer
			 */
			this.uid = Navpopup.uid++;
			/**
			 * Read-only flag for current visibility of the popup.
			 *
			 * @type boolean
			 * @private
			 */
			this.visible = false;
			/**
			 * Flag to be set when we want to cancel a previous request to
			 * show the popup in a little while.
			 *
			 * @private
			 * @type boolean
			 */
			this.noshow = false;
			/**
			 * Categorised list of hooks.
			 *
			 * @see #runHooks
			 * @see #addHook
			 * @private
			 * @type Object
			 */
			this.hooks = {
				create: [],
				unhide: [],
				hide: [],
			};
			/**
			 * list of unique IDs of hook functions, to avoid duplicates
			 *
			 * @private
			 */
			this.hookIds = {};
			/**
			 * List of downloads associated with the popup.
			 *
			 * @private
			 * @type Array
			 */
			this.downloads = [];
			/**
			 * Number of uncompleted downloads.
			 *
			 * @type integer
			 */
			this.pending = null;
			/**
			 * Tolerance in pixels when detecting whether the mouse has left the popup.
			 *
			 * @type integer
			 */
			this.fuzz = 5;
			/**
			 * Flag to toggle running {@source #limitHorizontalPosition} to regulate the popup's position.
			 *
			 * @type boolean
			 */
			this.constrained = true;
			/**
			 * The popup width in pixels.
			 *
			 * @private
			 * @type integer
			 */
			this.width = 0;
			/**
			 * The popup width in pixels.
			 *
			 * @private
			 * @type integer
			 */
			this.height = 0;
			/**
			 * The main content DIV element.
			 *
			 * @type HTMLDivElement
			 */
			this.mainDiv = null;
			this.createMainDiv();
			//	if (!init || typeof init.popups_draggable=='undefined' || init.popups_draggable) {
			//		this.makeDraggable(true);
			//	}
		}
		/**
		 * Retrieves the {@source #visible} attribute, indicating whether the popup is currently visible.
		 *
		 * @type boolean
		 */
		isVisible() {
			return this.visible;
		}
		/**
		 * Repositions popup using CSS style.
		 *
		 * @private
		 * @param {integer} x x-coordinate (px)
		 * @param {integer} y y-coordinate (px)
		 * @param {boolean} noLimitHor Don't call {@source #limitHorizontalPosition}
		 */
		reposition(x, y, noLimitHor) {
			log(`reposition(${x},${y},${noLimitHor})`);
			if (x !== undefined && x !== null) {
				this.left = x;
			}
			if (y !== undefined && y !== null) {
				this.top = y;
			}
			if (this.left !== undefined && this.top !== undefined) {
				this.mainDiv.style.left = `${this.left}px`;
				this.mainDiv.style.top = `${this.top}px`;
			}
			if (!noLimitHor) {
				this.limitHorizontalPosition();
			}
		}
		/**
		 * Prevents popups from being in silly locations. Hopefully.
		 * Should not be run if {@source #constrained} is true.
		 *
		 * @private
		 */
		limitHorizontalPosition() {
			if (!this.constrained || this.tooWide) {
				return;
			}
			this.updateDimensions();
			const x = this.left;
			const w = this.width;
			const cWidth = document.querySelector('body').clientWidth;
			//	log('limitHorizontalPosition: x='+x+
			//			', this.left=' + this.left +
			//			', this.width=' + this.width +
			//			', cWidth=' + cWidth);
			if (
				x + w >= cWidth ||
				(x > 0 &&
					this.maxWidth &&
					this.width < this.maxWidth &&
					this.height > this.width &&
					x > cWidth - this.maxWidth)
			) {
				// This is a very nasty hack. There has to be a better way!
				// We find the "natural" width of the div by positioning it at the far left
				// then reset it so that it should be flush right (well, nearly)
				this.mainDiv.style.left = '-10000px';
				this.mainDiv.style.width = `${this.maxWidth}px`;
				const naturalWidth = Number.parseInt(this.mainDiv.offsetWidth, 10);
				let newLeft = cWidth - naturalWidth - 1;
				if (newLeft < 0) {
					newLeft = 0;
					this.tooWide = true;
				} // still unstable for really wide popups?
				log(
					`limitHorizontalPosition: moving to (${newLeft},${this.top});` +
						` naturalWidth=${naturalWidth}, clientWidth=${cWidth}`
				);
				this.reposition(newLeft, null, true);
			}
		}
		/**
		 * Brings popup to the top of the z-order.
		 * We increment the {@source #highest} property of the contructor here.
		 *
		 * @private
		 */
		raise() {
			this.mainDiv.style.zIndex = Navpopup.highest + 1;
			++Navpopup.highest;
		}
		/**
		 * Shows the popup provided {@source #noshow} is not true.
		 * Updates the position, brings the popup to the top of the z-order and unhides it.
		 */
		show() {
			// document.title+='s';
			if (this.noshow) {
				return;
			}
			// document.title+='t';
			this.reposition();
			this.raise();
			this.unhide();
		}
		/**
		 * Checks to see if the mouse pointer has
		 * stabilised (checking every <code>time</code>/2 milliseconds) and runs the
		 * {@source #show} method if it has.
		 *
		 * @param {integer} time The minimum time (ms) before the popup may be shown.
		 */
		showSoonIfStable(time) {
			log(`showSoonIfStable, time=${time}`);
			if (this.visible) {
				return;
			}
			this.noshow = false;
			// ~ initialize these variables so that we never run @tt{show} after
			// ~ just half the time
			this.stable_x = -1e4;
			this.stable_y = -1e4;
			const stableShow = () => {
				log('stableShow called');
				const new_x = Navpopup.tracker.x;
				const new_y = Navpopup.tracker.y;
				const dx = self.stable_x - new_x;
				const dy = self.stable_y - new_y;
				const fuzz2 = 0; // savedThis.fuzz * savedThis.fuzz;
				// document.title += '[' + [savedThis.stable_x,new_x, savedThis.stable_y,new_y, dx, dy, fuzz2].join(',') + '] ';
				if (dx * dx <= fuzz2 && dy * dy <= fuzz2) {
					log('mouse is stable');
					clearInterval(self.showSoonStableTimer);
					self.reposition(new_x + 2, new_y + 2);
					self.show();
					self.limitHorizontalPosition();
					return;
				}
				self.stable_x = new_x;
				self.stable_y = new_y;
			};
			const self = this;
			this.showSoonStableTimer = setInterval(stableShow, time / 2);
		}
		/**
		 * Sets the {@source #noshow} flag and hides the popup. This should be called
		 * when the mouse leaves the link before
		 * (or after) it's actually been displayed.
		 */
		banish() {
			log('banish called');
			// hide and prevent showing with showSoon in the future
			this.noshow = true;
			if (this.showSoonStableTimer) {
				log('clearing showSoonStableTimer');
				clearInterval(this.showSoonStableTimer);
			}
			this.hide();
		}
		/**
		 * Runs hooks added with {@source #addHook}.
		 *
		 * @private
		 * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
		 * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
		 */
		runHooks(key, when) {
			if (!this.hooks[key]) {
				return;
			}
			const keyHooks = this.hooks[key];
			const len = keyHooks.length;
			for (let i = 0; i < len; ++i) {
				if (keyHooks[i] && keyHooks[i].when === when && Reflect.apply(keyHooks[i].hook, this, [])) {
					// remove the hook
					if (keyHooks[i].hookId) {
						delete this.hookIds[keyHooks[i].hookId];
					}
					keyHooks[i] = null;
				}
			}
		}
		/**
		 * Adds a hook to the popup. Hook functions are run with <code>this</code> set to refer to the
		 * Navpopup instance, and no arguments.
		 *
		 * @param {Function} hook The hook function. Functions that return true are deleted.
		 * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
		 * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
		 * @param {string} uid A truthy string identifying the hook function; if it matches another hook
		 * in this position, it won't be added again.
		 */
		addHook(hook, key, when, uid) {
			when ||= 'after';
			if (!this.hooks[key]) {
				return;
			}
			// if uid is specified, don't add duplicates
			let hookId;
			if (uid) {
				hookId = [key, when, uid].join('|');
				if (this.hookIds[hookId]) {
					return;
				}
				this.hookIds[hookId] = true;
			}
			this.hooks[key].push({
				hook,
				when,
				hookId,
			});
		}
		/**
		 * Creates the main DIV element, which contains all the actual popup content.
		 * Runs hooks with key 'create'.
		 *
		 * @private
		 */
		createMainDiv() {
			if (this.mainDiv) {
				return;
			}
			this.runHooks('create', 'before');
			const mainDiv = document.createElement('div');
			const self = this;
			mainDiv.onclick = (e) => {
				self.onclickListener(e);
			};
			mainDiv.className = this.className ?? 'navpopup_maindiv';
			mainDiv.id = mainDiv.className + this.uid;
			mainDiv.style.position = 'absolute';
			mainDiv.style.minWidth = '350px';
			mainDiv.style.display = 'none';
			mainDiv.className = 'navpopup';
			// easy access to javascript object through DOM functions
			mainDiv.navpopup = this;
			this.mainDiv = mainDiv;
			document.querySelector('body').append(mainDiv);
			this.runHooks('create', 'after');
		}
		/**
		 * Calls the {@source #raise} method.
		 *
		 * @private
		 */
		onclickListener() {
			this.raise();
		}
		/**
		 * Makes the popup draggable, using a {@source Drag} object.
		 *
		 * @param {string} handleName
		 * @private
		 */
		makeDraggable(handleName) {
			if (!this.mainDiv) {
				this.createMainDiv();
			}
			const drag = new Drag();
			if (!handleName) {
				drag.startCondition = (e) => {
					try {
						if (!e.shiftKey) {
							return false;
						}
					} catch {
						return false;
					}
					return true;
				};
			}
			let dragHandle;
			if (handleName) {
				dragHandle = document.querySelector(`#${handleName}`);
			}
			if (!dragHandle) {
				dragHandle = this.mainDiv;
			}
			const self = this;
			drag.endHook = (x, y) => {
				Navpopup.tracker.dirty = true;
				self.reposition(x, y);
			};
			drag.init(dragHandle, this.mainDiv);
		}
		/**
		 * Hides the popup using CSS. Runs hooks with key 'hide'.
		 * Sets {@source #visible} appropriately.
		 * {@source #banish} should be called externally instead of this method.
		 *
		 * @private
		 */
		hide() {
			this.runHooks('hide', 'before');
			this.abortDownloads();
			if (this.visible !== undefined && this.visible) {
				this.mainDiv.style.display = 'none';
				this.visible = false;
			}
			this.runHooks('hide', 'after');
		}
		/**
		 * Shows the popup using CSS. Runs hooks with key 'unhide'.
		 * Sets {@source #visible} appropriately.   {@source #show} should be called externally instead of this method.
		 *
		 * @private
		 */
		unhide() {
			this.runHooks('unhide', 'before');
			if (this.visible !== undefined && !this.visible) {
				this.mainDiv.style.display = 'inline';
				this.visible = true;
			}
			this.runHooks('unhide', 'after');
		}
		/**
		 * Sets the <code>innerHTML</code> attribute of the main div containing the popup content.
		 *
		 * @param {string} html The HTML to set.
		 */
		setInnerHTML(html) {
			this.mainDiv.innerHTML = html;
		}
		/**
		 * Updates the {@source #width} and {@source #height} attributes with the CSS properties.
		 *
		 * @private
		 */
		updateDimensions() {
			this.width = Number.parseInt(this.mainDiv.offsetWidth, 10);
			this.height = Number.parseInt(this.mainDiv.offsetHeight, 10);
		}
		/**
		 * Checks if the point (x,y) is within {@source #fuzz} of the
		 * {@source #mainDiv}.
		 *
		 * @param {integer} x x-coordinate (px)
		 * @param {integer} y y-coordinate (px)
		 * @type boolean
		 */
		isWithin(x, y) {
			// ~ If we're not even visible, no point should be considered as
			// ~ being within the popup.
			if (!this.visible) {
				return false;
			}
			this.updateDimensions();
			const fuzz = this.fuzz || 0;
			// ~ Use a simple box metric here.
			return (
				x + fuzz >= this.left &&
				x - fuzz <= this.left + this.width &&
				y + fuzz >= this.top &&
				y - fuzz <= this.top + this.height
			);
		}
		/**
		 * Adds a download to {@source #downloads}.
		 *
		 * @param {Downloader} download
		 */
		addDownload(download) {
			if (!download) {
				return;
			}
			this.downloads.push(download);
		}
		/**
		 * Aborts the downloads listed in {@source #downloads}.
		 *
		 * @see Downloader#abort
		 */
		abortDownloads() {
			for (const d of this.downloads) {
				if (d && d.abort) {
					d.abort();
				}
			}
			this.downloads = [];
		}
	}
	/**
	 * A UID for each Navpopup. This constructor property is just a counter.
	 *
	 * @type integer
	 * @private
	 */
	Navpopup.uid = 0;
	/**
	 * Counter indicating the z-order of the "highest" popup.
	 * We start the z-index at 1000 so that popups are above everything
	 * else on the screen.
	 *
	 * @private
	 * @type integer
	 */
	Navpopup.highest = 1000;
	/**
	 * A {@source Mousetracker} instance which is a property of the constructor (pseudo-global).
	 */
	Navpopup.tracker = new Mousetracker();
	// ENDFILE: navpopup.js
	// STARTFILE: diff.js
	/**
	 * Javascript Diff Algorithm By John Resig (http://ejohn.org/) and Lupin
	 *
	 * More Info: http://ejohn.org/projects/javascript-diff-algorithm/
	 *
	 * @param {string[]} x
	 */
	const delFmt = (x) => {
		if (x.length === 0) {
			return '';
		}
		return `<del class='popupDiff'>${x.join('')}</del>`;
	};
	const insFmt = (x) => {
		if (x.length === 0) {
			return '';
		}
		return `<ins class='popupDiff'>${x.join('')}</ins>`;
	};
	const countCrossings = (a, b, i, eject) => {
		// count the crossings on the edge starting at b[i]
		if (!b[i].row && b[i].row !== 0) {
			return -1;
		}
		let count = 0;
		for (const [j, element] of a.entries()) {
			if (!element.row && element.row !== 0) {
				continue;
			}
			if ((j - b[i].row) * (i - element.row) > 0) {
				if (eject) {
					return true;
				}
				count++;
			}
		}
		return count;
	};
	const shortenDiffString = function shortenDiffString(str, context) {
		const re = /(<del[\S\s]*?<\/del>|<ins[\S\s]*?<\/ins>)/;
		const splitted = str.split(re);
		let ret = [''];
		for (let i = 0; i < splitted.length; i += 2) {
			if (splitted[i].length < 2 * context) {
				ret[ret.length - 1] += splitted[i];
				if (i + 1 < splitted.length) {
					ret[ret.length - 1] += splitted[i + 1];
				}
				continue;
			} else {
				if (i > 0) {
					ret[ret.length - 1] += splitted[i].slice(0, Math.max(0, context));
				}
				if (i + 1 < splitted.length) {
					ret.push(splitted[i].slice(Math.max(0, splitted[i].length - context)) + splitted[i + 1]);
				}
			}
		}
		while (ret.length > 0 && !ret[0]) {
			ret = ret.slice(1);
		}
		return ret;
	};
	const diffString = (o, n) => {
		//  We need to split the strings o and n first, and entify() the parts
		//  individually, so that the HTML entities are never cut apart. (AxelBoldt)
		let i;
		const oSplitted = o.split(/\b/);
		const nSplitted = n.split(/\b/);
		for (i = 0; i < oSplitted.length; ++i) {
			oSplitted[i] = oSplitted[i].entify();
		}
		for (i = 0; i < nSplitted.length; ++i) {
			nSplitted[i] = nSplitted[i].entify();
		}
		const out = diff(oSplitted, nSplitted);
		let str = '';
		let acc = []; // accumulator for prettier output

		// crossing pairings -- eg 'A B' vs 'B A' -- cause problems, so let's iron them out
		// this doesn't always do things optimally but it should be fast enough
		let maxOutputPair = 0;
		for (i = 0; i < out.n.length; ++i) {
			if (out.n[i].paired) {
				if (maxOutputPair > out.n[i].row) {
					// tangle - delete pairing
					out.o[out.n[i].row] = out.o[out.n[i].row].text;
					out.n[i] = out.n[i].text;
				}
				if (maxOutputPair < out.n[i].row) {
					maxOutputPair = out.n[i].row;
				}
			}
		}
		// output the stuff preceding the first paired old line
		for (i = 0; i < out.o.length && !out.o[i].paired; ++i) {
			acc.push(out.o[i]);
		}
		str += delFmt(acc);
		acc = [];
		// main loop
		for (i = 0; i < out.n.length; ++i) {
			// output unpaired new "lines"
			while (i < out.n.length && !out.n[i].paired) {
				acc.push(out.n[i++]);
			}
			str += insFmt(acc);
			acc = [];
			if (i < out.n.length) {
				// this new "line" is paired with the (out.n[i].row)th old "line"
				str += out.n[i].text;
				// output unpaired old rows starting after this new line's partner
				let m = out.n[i].row + 1;
				while (m < out.o.length && !out.o[m].paired) {
					acc.push(out.o[m++]);
				}
				str += delFmt(acc);
				acc = [];
			}
		}
		return str;
	};
	// see {@link http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Object}
	// FIXME: use obj.hasOwnProperty instead of this kludge!
	const jsReservedProperties = new RegExp(
		'^(constructor|prototype|__((define|lookup)[GS]etter)__' +
			'|eval|hasOwnProperty|propertyIsEnumerable' +
			'|to(Source|String|LocaleString)|(un)?watch|valueOf)$'
	);
	const diffBugAlert = function diffBugAlert(word) {
		if (!diffBugAlert.list[word]) {
			diffBugAlert.list[word] = 1;
			mw.notify(`Bad word: ${word}\n\nPlease report this bug.`, {tag: 'popups', type: 'error'});
		}
	};
	diffBugAlert.list = {};
	const makeDiffHashtable = (src) => {
		const ret = {};
		for (let i = 0; i < src.length; i++) {
			if (jsReservedProperties.test(src[i])) {
				src[i] += '<!-- -->';
			}
			if (!ret[src[i]]) {
				ret[src[i]] = [];
			}
			try {
				ret[src[i]].push(i);
			} catch {
				diffBugAlert(src[i]);
			}
		}
		return ret;
	};
	const diff = (o, n) => {
		// pass 1: make hashtable ns with new rows as keys
		const ns = makeDiffHashtable(n);
		// pass 2: make hashtable os with old rows as keys
		const os = makeDiffHashtable(o);
		// pass 3: pair unique new rows and matching unique old rows
		let i;
		for (i in ns) {
			if (ns[i].length === 1 && os[i] && os[i].length === 1) {
				n[ns[i][0]] = {
					text: n[ns[i][0]],
					row: os[i][0],
					paired: true,
				};
				o[os[i][0]] = {
					text: o[os[i][0]],
					row: ns[i][0],
					paired: true,
				};
			}
		}
		// pass 4: pair matching rows immediately following paired rows (not necessarily unique)
		for (i = 0; i < n.length - 1; i++) {
			if (
				n[i].paired &&
				!n[i + 1].paired &&
				n[i].row + 1 < o.length &&
				!o[n[i].row + 1].paired &&
				n[i + 1] === o[n[i].row + 1]
			) {
				n[i + 1] = {
					text: n[i + 1],
					row: n[i].row + 1,
					paired: true,
				};
				o[n[i].row + 1] = {
					text: o[n[i].row + 1],
					row: i + 1,
					paired: true,
				};
			}
		}
		// pass 5: pair matching rows immediately preceding paired rows (not necessarily unique)
		for (i = n.length - 1; i > 0; i--) {
			if (
				n[i].paired &&
				!n[i - 1].paired &&
				n[i].row > 0 &&
				!o[n[i].row - 1].paired &&
				n[i - 1] === o[n[i].row - 1]
			) {
				n[i - 1] = {
					text: n[i - 1],
					row: n[i].row - 1,
					paired: true,
				};
				o[n[i].row - 1] = {
					text: o[n[i].row - 1],
					row: i - 1,
					paired: true,
				};
			}
		}
		return {
			o,
			n,
		};
	};
	// ENDFILE: diff.js
	// STARTFILE: init.js
	const setSiteInfo = () => {
		if (window.popupLocalDebug) {
			pg.wiki.hostname = 'en.wikipedia.org';
		} else {
			pg.wiki.hostname = location.hostname; // use in preference to location.hostname for flexibility (?)
		}
		pg.wiki.wikimedia =
			/(wiki([mp]edia|source|books|news|quote|versity|species|voyage|data)|metawiki|wiktionary|mediawiki)\.org/.test(
				pg.wiki.hostname
			);
		pg.wiki.wikia = /\.wikia\.com$/i.test(pg.wiki.hostname);
		pg.wiki.isLocal = pg.wiki.hostname.startsWith('localhost');
		pg.wiki.commons =
			pg.wiki.wikimedia && pg.wiki.hostname !== 'commons.wikimedia.org' ? 'commons.wikimedia.org' : null;
		pg.wiki.lang = mw.config.get('wgContentLanguage');
		const port = location.port ? `:${location.port}` : '';
		pg.wiki.sitebase = pg.wiki.hostname + port;
	};
	const setUserInfo = () => {
		const params = {
			action: 'query',
			list: 'users',
			ususers: mw.config.get('wgUserName'),
			usprop: 'rights',
		};
		pg.user.canReview = false;
		if (getValueOf('popupReview')) {
			getMwApi()
				.get(params)
				.done((data) => {
					const [{rights}] = data.query.users;
					pg.user.canReview = rights.includes('review'); // TODO: Should it be a getValueOf('ReviewRight') ?
				});
		}
	};
	const fetchSpecialPageNames = () => {
		const params = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			maxage: 3600,
			meta: 'siteinfo',
			siprop: 'specialpagealiases',
			// cache for an hour
			uselang: 'content',
		};
		return getMwApi()
			.get(params)
			.then((data) => {
				pg.wiki.specialpagealiases = data.query.specialpagealiases;
			});
	};
	const setTitleBase = () => {
		const protocol = window.popupLocalDebug ? 'http:' : location.protocol;
		pg.wiki.articlePath = mw.config.get('wgArticlePath').replace(/\/\$1/, ''); // as in http://some.thing.com/wiki/Article
		pg.wiki.botInterfacePath = mw.config.get('wgScript');
		pg.wiki.APIPath = `${mw.config.get('wgScriptPath')}/api.php`;
		// default mediawiki setting is paths like http://some.thing.com/articlePath/index.php?title=foo
		const titletail = `${pg.wiki.botInterfacePath}?title=`;
		// let titletail2 = joinPath([pg.wiki.botInterfacePath, 'wiki.phtml?title=']);
		// other sites may need to add code here to set titletail depending on how their urls work
		pg.wiki.titlebase = `${protocol}//${pg.wiki.sitebase}${titletail}`;
		// pg.wiki.titlebase2  = protocol + '//' + joinPath([pg.wiki.sitebase, titletail2]);
		pg.wiki.wikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.botInterfacePath}`;
		pg.wiki.apiwikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.APIPath}`;
		pg.wiki.articlebase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.articlePath}`;
		pg.wiki.commonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.botInterfacePath}`;
		pg.wiki.apicommonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.APIPath}`;
		pg.re.basenames = new RegExp(`^(${map(literalizeRegex, [pg.wiki.titlebase, pg.wiki.articlebase]).join('|')})`);
	};
	// Global regexps
	const setMainRegex = () => {
		const reStart = '[^:]*://';
		let preTitles = `${literalizeRegex(mw.config.get('wgScriptPath'))}/(?:index[.]php|wiki[.]phtml)[?]title=`;
		preTitles += `|${literalizeRegex(`${pg.wiki.articlePath}/`)}`;
		const reEnd = `(${preTitles})([^&?#]*)[^#]*(?:#(.+))?`;
		pg.re.main = new RegExp(reStart + literalizeRegex(pg.wiki.sitebase) + reEnd);
	};
	const buildSpecialPageGroup = (specialPageObj) => {
		const variants = [];
		variants.push(
			mw.util.escapeRegExp(specialPageObj.realname),
			mw.util.escapeRegExp(encodeURI(specialPageObj.realname))
		);
		for (const alias of specialPageObj.aliases) {
			variants.push(mw.util.escapeRegExp(alias), mw.util.escapeRegExp(encodeURI(alias)));
		}
		return variants.join('|');
	};
	const setRegexps = () => {
		setMainRegex();
		const sp = nsRe(pg.nsSpecialId);
		pg.re.urlNoPopup = new RegExp(`((title=|/)${sp}(?:%3A|:)|section=[0-9]|^#$)`);
		for (const specialpage of pg.wiki.specialpagealiases) {
			switch (specialpage.realname) {
				case 'Contributions':
					pg.re.contribs = new RegExp(
						`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})` +
							`(&target=|/|/${nsRe(pg.nsUserId)}:)(.*)`,
						'i'
					);
					break;
				case 'Diff':
					pg.re.specialdiff = new RegExp(
						`/${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})/([^?#]*)`,
						'i'
					);
					break;
				case 'Emailuser':
					pg.re.email = new RegExp(
						`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})` +
							`(&target=|/|/(?:${nsRe(pg.nsUserId)}:)?)(.*)`,
						'i'
					);
					break;
				case 'Whatlinkshere':
					pg.re.backlinks = new RegExp(
						`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})(&target=|/)([^&]*)`,
						'i'
					);
					break;
			}
		}
		const im = nsReImage();
		// note: tries to get images in infobox templates too, e.g. movie pages, album pages etc
		//					  (^|\[\[)image: *([^|\]]*[^|\] ]) *
		//					  (^|\[\[)image: *([^|\]]*[^|\] ])([^0-9\]]*([0-9]+) *px)?
		//														$4 = 120 as in 120px
		pg.re.image = new RegExp(
			`(^|\\[\\[)${im}: *([^|\\]]*[^|\\] ])${String.raw`([^0-9\]]*([0-9]+) *px)?|(?:\n *[|]?|[|]) *`}(${getValueOf('popupImageVarsRegexp')})` +
				` *= *(?:\\[\\[ *)?(?:${im}:)?${String.raw`([^|]*?)(?:\]\])? *[|]? *\n`}`,
			'img'
		);
		pg.re.imageBracketCount = 6;
		pg.re.category = new RegExp(`\\[\\[${nsRe(pg.nsCategoryId)}: *([^|\\]]*[^|\\] ]) *`, 'i');
		pg.re.categoryBracketCount = 1;
		// IPv6 | IPv4
		pg.re.ipUser =
			/^(?::(?::|(?::[\dA-Fa-f]{1,4}){1,7})|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){0,6}::|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){7})|(((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))$/;
		pg.re.stub = new RegExp(getValueOf('popupStubRegexp'), 'im');
		pg.re.disambig = new RegExp(getValueOf('popupDabRegexp'), 'im');
		// FIXME replace with general parameter parsing function, this is daft
		pg.re.oldid = /[&?]oldid=([^&]*)/;
		pg.re.diff = /[&?]diff=([^&]*)/;
	};
	// miscellany
	const setupCache = () => {
		// page caching
		pg.cache.pages = [];
	};
	const setMisc = () => {
		pg.current.link = null;
		pg.current.links = [];
		pg.current.linksHash = {};
		setupCache();
		pg.timer.checkPopupPosition = null;
		pg.counter.loop = 0;
		// ids change with each popup: popupImage0, popupImage1 etc
		pg.idNumber = 0;
		// for myDecodeURI
		pg.misc.decodeExtras = [
			{from: '%2C', to: ','},
			{from: '_', to: ' '},
			{from: '%24', to: '$'},
			{from: '%26', to: '&'}, // no ,
		];
	};
	const getMwApi = () => {
		if (!pg.api.client) {
			pg.api.userAgent = `Navigation popups/1.0 (${mw.config.get('wgWikiID')})`;
			pg.api.client = initMwApi(pg.api.userAgent);
		}
		return pg.api.client;
	};
	// We need a callback since this might end up asynchronous because of
	// the mw.loader.using() call.
	const setupPopups = function setupPopups(callback) {
		if (setupPopups.completed) {
			if (typeof callback === 'function') {
				callback();
			}
			return;
		}
		// These dependencies should alse be enforced from the gadget,
		// but not everyone loads this as a gadget, so double check
		fetchSpecialPageNames().then(() => {
			// NB translatable strings should be set up first (strings.js)
			// basics
			setupDebugging();
			setSiteInfo();
			setTitleBase();
			setOptions(); // see options.js
			setUserInfo();
			// namespaces etc
			setNamespaces();
			setInterwiki();
			// regexps
			setRegexps();
			setRedirs();
			// other stuff
			setMisc();
			setupLivePreview();
			// main deal here
			setupTooltips();
			log('In setupPopups(), just called setupTooltips()');
			Navpopup.tracker.enable();
			setupPopups.completed = true;
			if (typeof callback === 'function') {
				callback();
			}
		});
	};
	// ENDFILE: init.js
	// STARTFILE: navlinks.js
	// navlinks... let the fun begin
	//
	const defaultNavlinkSpec = () => {
		let str = '';
		str += '<b><<mainlink|shortcut= >></b>';
		if (getValueOf('popupLastEditLink')) {
			str += '*<<lastEdit|shortcut=/>>|<<lastContrib>>|<<sinceMe>>if(oldid){|<<oldEdit>>|<<diffCur>>}';
		}
		// user links
		// contribs - log - count - email - block
		// count only if applicable; block only if popupAdminLinks
		str += 'if(user){<br><<contribs|shortcut=c>>*<<userlog|shortcut=L|log>>';
		str += 'if(ipuser){*<<arin>>}if(wikimedia){*<<count|shortcut=#>>}';
		str += 'if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>|<<blocklog|log>>}}';
		// editing links
		// talkpage   -> edit|new - history - un|watch - article|edit
		// other page -> edit - history - un|watch - talk|edit|new
		const editstr = '<<edit|shortcut=e>>';
		const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
		const historystr = '<<history|shortcut=h>>|<<editors|shortcut=E|>>';
		const watchstr = '<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>';
		str +=
			`<br>if(talk){${editOldidStr}|<<new|shortcut=+>>` +
			`*${historystr}*${watchstr}*` +
			'<b><<article|shortcut=a>></b>|<<editArticle|edit>>' +
			`}else{${
				// not a talk page
				editOldidStr
			}*${historystr}*${watchstr}*` +
			'<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}';
		// misc links
		str += '<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>*<<move|shortcut=m>>';
		// admin links
		str +=
			'if(admin){<br><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>>*' +
			'<<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>>}';
		return str;
	};
	const navLinksHTML = (article, _hint, params) => {
		// oldid, rcid) {
		const str = `<span class="popupNavLinks">${defaultNavlinkSpec()}</span>`;
		// BAM
		return navlinkStringToHTML(str, article, params);
	};
	const expandConditionalNavlinkString = function expandConditionalNavlinkString(s, article, z, recursionCount) {
		const {oldid} = z;
		const {rcid} = z;
		const {diff} = z;
		// nested conditionals (up to 10 deep) are ok, hopefully! (work from the inside out)
		if (typeof recursionCount !== typeof 0) {
			recursionCount = 0;
		}
		// (1	 if	\\(	(2	2)	\\)	  {(3	3)}  (4   else	  {(5	 5)}  4)1)
		const conditionalSplitRegex = /(;?\s*if\s*\(\s*(\w*)\s*\)\s*{([^{}]*)}(\s*else\s*{([^{}]*?)}|))/i;
		const splitted = s.split(conditionalSplitRegex);
		// $1: whole conditional
		// $2: test condition
		// $3: true expansion
		// $4: else clause (possibly empty)
		// $5: false expansion (possibly null)
		const numParens = 5;
		let [ret] = splitted;
		for (let i = 1; i < splitted.length; i = i + numParens + 1) {
			const testString = splitted[i + 2 - 1];
			const trueString = splitted[i + 3 - 1];
			let falseString = splitted[i + 5 - 1];
			if (falseString === undefined || !falseString) {
				falseString = '';
			}
			let testResult;
			switch (testString) {
				case 'user':
					testResult = !!article.userName();
					break;
				case 'talk':
					testResult = !article.talkPage(); // talkPage converts _articles_ to talkPages
					break;
				case 'admin':
					testResult = !!getValueOf('popupAdminLinks');
					break;
				case 'oldid':
					testResult = !!(oldid !== undefined && oldid);
					break;
				case 'rcid':
					testResult = !!(rcid !== undefined && rcid);
					break;
				case 'ipuser':
					testResult = !!article.isIpUser();
					break;
				case 'mainspace_en':
					testResult = isInMainNamespace(article) && pg.wiki.hostname === 'en.wikipedia.org';
					break;
				case 'wikimedia':
					testResult = !!pg.wiki.wikimedia;
					break;
				case 'diff':
					testResult = !!(diff !== undefined && diff);
					break;
			}
			switch (testResult) {
				case null:
					ret += splitted[i];
					break;
				case true:
					ret += trueString;
					break;
				case false:
					ret += falseString;
					break;
			}
			// append non-conditional string
			ret += splitted[i + numParens];
		}
		if (conditionalSplitRegex.test(ret) && recursionCount < 10) {
			return expandConditionalNavlinkString(ret, article, z, recursionCount + 1);
		}
		return ret;
	};
	const navlinkStringToArray = (s, article, params) => {
		s = expandConditionalNavlinkString(s, article, params);
		const splitted = s.split(/<<(.*?)>>/);
		const ret = [];
		for (const [i, element] of splitted.entries()) {
			if (i % 2) {
				// i odd, so s is a tag
				const t = new navlinkTag();
				const ss = element.split('|');
				[t.id] = ss;
				for (let j = 1; j < ss.length; ++j) {
					const sss = ss[j].split('=');
					if (sss.length > 1) {
						[, t[sss[0]]] = sss;
					} else {
						// no assignment (no "="), so treat this as a title (overwriting the last one)
						t.text = popupString(sss[0]);
					}
				}
				t.article = article;
				const {oldid} = params;
				const {rcid} = params;
				const {diff} = params;
				if (oldid !== undefined && oldid !== null) {
					t.oldid = oldid;
				}
				if (rcid !== undefined && rcid !== null) {
					t.rcid = rcid;
				}
				if (diff !== undefined && diff !== null) {
					t.diff = diff;
				}
				if (!t.text && t.id !== 'mainlink') {
					t.text = popupString(t.id);
				}
				ret.push(t);
			} else {
				// plain HTML
				ret.push(element);
			}
		}
		return ret;
	};
	const navlinkSubstituteHTML = (s) => {
		return s
			.split('*')
			.join(getValueOf('popupNavLinkSeparator'))
			.split('<menurow>')
			.join('<li class="popup_menu_row">')
			.split('</menurow>')
			.join('</li>')
			.split('<menu>')
			.join('<ul class="popup_menu">')
			.split('</menu>')
			.join('</ul>');
	};
	const navlinkDepth = (magic, s) => {
		return s.split(`<${magic}>`).length - s.split(`</${magic}>`).length;
	};
	// navlinkString: * becomes the separator
	//				<<foo|bar=baz|fubar>> becomes a foo-link with attribute bar='baz'
	//									  and visible text 'fubar'
	//				if(test){...} and if(test){...}else{...} work too (nested ok)
	const navlinkStringToHTML = (s, article, params) => {
		// limitAlert(navlinkStringToHTML, 5, 'navlinkStringToHTML\n' + article + '\n' + (typeof article));
		const p = navlinkStringToArray(s, article, params);
		let html = '';
		let menudepth = 0; // nested menus not currently allowed, but doesn't do any harm to code for it
		let menurowdepth = 0;
		for (const element of p) {
			if (typeof element === typeof '') {
				html += navlinkSubstituteHTML(element);
				menudepth += navlinkDepth('menu', element);
				menurowdepth += navlinkDepth('menurow', element);
				//			if (menudepth === 0) {
				//				tagType='span';
				//			} else if (menurowdepth === 0) {
				//				tagType='li';
				//			} else {
				//				tagType = null;
				//			}
			} else if (element.type !== undefined && element.type === 'navlinkTag') {
				html +=
					menudepth > 0 && menurowdepth === 0
						? `<li class="popup_menu_item">${element.html()}</li>`
						: element.html();
			}
		}
		return html;
	};
	class navlinkTag {
		constructor() {
			this.type = 'navlinkTag';
		}
		html() {
			this.getNewWin();
			this.getPrintFunction();
			let html = '';
			let opening;
			let closing;
			const tagType = 'span';
			if (tagType) {
				opening = `<${tagType} class="popup_${this.id}">`;
				closing = `</${tagType}>`;
			} else {
				opening = '';
				closing = '';
			}
			if (typeof this.print === 'function') {
				html = this.print(this);
				if (typeof html !== typeof '') {
					html = '';
				} else if (this.shortcut !== undefined) {
					html = addPopupShortcut(html, this.shortcut);
				}
			} else {
				errlog(`Oh dear - invalid print function for a navlinkTag, id=${this.id}`);
			}
			return opening + html + closing;
		}
		getNewWin() {
			getValueOf('popupLinksNewWindow');
			if (pg.option.popupLinksNewWindow[this.id] === undefined) {
				this.newWin = null;
			}
			this.newWin = pg.option.popupLinksNewWindow[this.id];
		}
		getPrintFunction() {
			// think about this some more
			// this.id and this.article should already be defined
			if (typeof this.id !== typeof '' || typeof this.article !== typeof {}) {
				return;
			}
			this.noPopup = 1;
			switch (this.id) {
				case 'contribs':
				case 'history':
				case 'whatLinksHere':
				case 'userPage':
				case 'userTalk':
				case 'talk':
				case 'article':
				case 'lastEdit':
					this.noPopup = null;
			}
			switch (this.id) {
				case 'email':
				case 'contribs':
				case 'block':
				case 'unblock':
				case 'userlog':
				case 'userSpace':
				case 'deletedContribs':
					this.article = this.article.userName();
			}
			switch (this.id) {
				case 'userTalk':
				case 'newUserTalk':
				case 'editUserTalk':
				case 'userPage':
				case 'blocklog':
					this.article = this.article.userName(true);
				/* falls through */
				case 'pagelog':
				case 'deletelog':
				case 'protectlog':
					delete this.oldid;
			}
			if (this.id !== 'mainlink') {
				// FIXME anchor handling should be done differently with Title object
				this.article = this.article.removeAnchor();
				// if (typeof this.text=='undefined') { this.text=popupString(this.id); }
			}
			switch (this.id) {
				case 'undelete':
					this.print = specialLink;
					this.specialpage = 'Undelete';
					this.sep = '/';
					break;
				case 'whatLinksHere':
					this.print = specialLink;
					this.specialpage = 'Whatlinkshere';
					break;
				case 'relatedChanges':
					this.print = specialLink;
					this.specialpage = 'Recentchangeslinked';
					break;
				case 'move':
					this.print = specialLink;
					this.specialpage = 'Movepage';
					break;
				case 'contribs':
					this.print = specialLink;
					this.specialpage = 'Contributions';
					break;
				case 'deletedContribs':
					this.print = specialLink;
					this.specialpage = 'Deletedcontributions';
					break;
				case 'email':
					this.print = specialLink;
					this.specialpage = 'EmailUser';
					this.sep = '/';
					break;
				case 'block':
					this.print = specialLink;
					this.specialpage = 'Blockip';
					this.sep = '&ip=';
					break;
				case 'unblock':
					this.print = specialLink;
					this.specialpage = 'Ipblocklist';
					this.sep = '&action=unblock&ip=';
					break;
				case 'userlog':
					this.print = specialLink;
					this.specialpage = 'Log';
					this.sep = '&user=';
					break;
				case 'blocklog':
					this.print = specialLink;
					this.specialpage = 'Log';
					this.sep = '&type=block&page=';
					break;
				case 'pagelog':
					this.print = specialLink;
					this.specialpage = 'Log';
					this.sep = '&page=';
					break;
				case 'protectlog':
					this.print = specialLink;
					this.specialpage = 'Log';
					this.sep = '&type=protect&page=';
					break;
				case 'deletelog':
					this.print = specialLink;
					this.specialpage = 'Log';
					this.sep = '&type=delete&page=';
					break;
				case 'userSpace':
					this.print = specialLink;
					this.specialpage = 'PrefixIndex';
					this.sep = '&namespace=2&prefix=';
					break;
				case 'search':
					this.print = specialLink;
					this.specialpage = 'Search';
					this.sep = '&fulltext=Search&search=';
					break;
				case 'thank':
					this.print = specialLink;
					this.specialpage = 'Thanks';
					this.sep = '/';
					this.article.value = this.diff === 'prev' ? this.oldid : this.diff;
					break;
				case 'unwatch':
				case 'watch':
					this.print = magicWatchLink;
					this.action = `${this.id}&autowatchlist=1&autoimpl=${popupString(
						'autoedit_version'
					)}&actoken=${autoClickToken()}`;
					break;
				case 'history':
				case 'historyfeed':
				case 'unprotect':
				case 'protect':
					this.print = wikiLink;
					this.action = this.id;
					break;
				case 'delete':
					this.print = wikiLink;
					this.action = 'delete';
					if (this.article.namespaceId() === pg.nsImageId) {
						const img = this.article.stripNamespace();
						this.action += `&image=${img}`;
					}
					break;
				case 'markpatrolled':
				case 'edit':
					// editOld should keep the oldid, but edit should not.
					delete this.oldid;
				/* falls through */
				case 'view':
				case 'purge':
				case 'render':
					this.print = wikiLink;
					this.action = this.id;
					break;
				case 'raw':
					this.print = wikiLink;
					this.action = 'raw';
					break;
				case 'new':
					this.print = wikiLink;
					this.action = 'edit&section=new';
					break;
				case 'mainlink':
					if (this.text === undefined) {
						this.text = this.article.toString().entify();
					}
					if (getValueOf('popupSimplifyMainLink') && isInStrippableNamespace(this.article)) {
						// only show the /subpage part of the title text
						const s = this.text.split('/');
						this.text = s.at(-1);
						if (this.text === '' && s.length > 1) {
							this.text = s.at(-2);
						}
					}
					this.print = titledWikiLink;
					if (this.title === undefined && pg.current.link && pg.current.link.href !== undefined) {
						this.title = safeDecodeURI(pg.current.link.originalTitle ?? this.article);
						if (this.oldid !== undefined && this.oldid) {
							this.title = tprintf('Revision %s of %s', [this.oldid, this.title]);
						}
					}
					this.action = 'view';
					break;
				case 'userPage':
				case 'article':
				case 'editArticle':
					delete this.oldid;
					// mw.notify(`${this.id}\n${this.article}\n${typeof this.article}`, {tag: 'popups', type: 'warn'});
					this.article = this.article.articleFromTalkOrArticle();
					// mw.notify(`${this.id}\n${this.article}\n${typeof this.article}`, {tag: 'popups', type: 'warn'});
					this.print = wikiLink;
					this.action = this.id.indexOf('edit') === 0 ? 'edit' : 'view';
					break;
				case 'userTalk':
				case 'talk':
					this.article = this.article.talkPage();
					delete this.oldid;
					this.print = wikiLink;
					this.action = 'view';
					break;
				case 'arin':
					this.print = arinLink;
					break;
				case 'count':
					this.print = editCounterLink;
					break;
				case 'editors':
					this.print = editorListLink;
					break;
				case 'lastEdit':
					this.print = titledDiffLink;
					this.title = popupString('Show the last edit');
					this.from = 'prev';
					this.to = 'cur';
					break;
				case 'oldEdit':
					this.print = titledDiffLink;
					this.title = `${popupString('Show the edit made to get revision')} ${this.oldid}`;
					this.from = 'prev';
					this.to = this.oldid;
					break;
				case 'editOld':
					this.print = wikiLink;
					this.action = 'edit';
					break;
				case 'undo':
					this.print = wikiLink;
					this.action = 'edit&undo=';
					break;
				case 'revert':
					this.print = wikiLink;
					this.action = 'revert';
					break;
				case 'nullEdit':
					this.print = wikiLink;
					this.action = 'nullEdit';
					break;
				case 'diffCur':
					this.print = titledDiffLink;
					this.title = tprintf('Show changes since revision %s', [this.oldid]);
					this.from = this.oldid;
					this.to = 'cur';
					break;
				case 'editUserTalk':
				case 'editTalk':
					delete this.oldid;
					this.article = this.article.talkPage();
					this.action = 'edit';
					this.print = wikiLink;
					break;
				case 'newUserTalk':
				case 'newTalk':
					this.article = this.article.talkPage();
					this.action = 'edit&section=new';
					this.print = wikiLink;
					break;
				case 'lastContrib':
				case 'sinceMe':
					this.print = magicHistoryLink;
					break;
				case 'togglePreviews':
					this.text = popupString(pg.option.simplePopups ? 'enable previews' : 'disable previews');
				/* falls through */
				case 'disablePopups':
				case 'purgePopups':
					this.print = popupMenuLink;
					break;
				default:
					this.print = function () {
						return `Unknown navlink type: ${this.id}`;
					};
			}
		}
	}
	//
	//  end navlinks
	// ENDFILE: navlinks.js
	// STARTFILE: shortcutkeys.js
	const popupHandleKeypress = function popupHandleKeypress(evt) {
		const keyCode = window.event ? window.event.keyCode : evt.keyCode ?? evt.which;
		if (!keyCode || !pg.current.link || !pg.current.link.navpopup) {
			return;
		}
		if (keyCode === 27) {
			// escape
			killPopup();
			return false; // swallow keypress
		}
		const letter = String.fromCodePoint(keyCode);
		const links = pg.current.link.navpopup.mainDiv.querySelectorAll('A');
		let startLink = 0;
		let i;
		let j;
		if (popupHandleKeypress.lastPopupLinkSelected) {
			for (i = 0; i < links.length; ++i) {
				if (links[i] === popupHandleKeypress.lastPopupLinkSelected) {
					startLink = i;
				}
			}
		}
		for (j = 0; j < links.length; ++j) {
			i = (startLink + j + 1) % links.length;
			if (links[i].getAttribute('popupkey') === letter) {
				if (evt && evt.preventDefault) {
					evt.preventDefault();
				}
				links[i].focus();
				popupHandleKeypress.lastPopupLinkSelected = links[i];
				return false; // swallow keypress
			}
		}
		// pass keypress on
		if (document.oldPopupOnkeypress) {
			return document.oldPopupOnkeypress(evt);
		}
		return true;
	};
	const addPopupShortcuts = () => {
		if (document.onkeypress !== popupHandleKeypress) {
			document.oldPopupOnkeypress = document.onkeypress;
		}
		document.onkeypress = popupHandleKeypress;
	};
	const rmPopupShortcuts = () => {
		popupHandleKeypress.lastPopupLinkSelected = null;
		try {
			if (document.oldPopupOnkeypress && document.oldPopupOnkeypress === popupHandleKeypress) {
				// panic
				document.onkeypress = null; // () => {};
				return;
			}
			document.onkeypress = document.oldPopupOnkeypress;
		} catch {
			/* IE goes here */
		}
	};
	const addLinkProperty = (html, property) => {
		// take "<a href=...>...</a> and add a property
		// not sophisticated at all, easily broken
		const i = html.indexOf('>');
		if (i < 0) {
			return html;
		}
		return `${html.slice(0, Math.max(0, i))} ${property}${html.slice(Math.max(0, i))}`;
	};
	const addPopupShortcut = (html, key) => {
		if (!getValueOf('popupShortcutKeys')) {
			return html;
		}
		const ret = addLinkProperty(html, `popupkey="${key}"`);
		if (key === ' ') {
			key = popupString('spacebar');
		}
		return ret.replace(/^(.*?)(title=")(.*?)(".*)$/i, `$1$2$3 [${key}]$4`);
	};
	// ENDFILE: shortcutkeys.js
	// STARTFILE: diffpreview.js
	// lets jump through hoops to find the rev ids we need to retrieve
	const loadDiff = (article, oldid, diff, navpop) => {
		navpop.diffData = {
			oldRev: {},
			newRev: {},
		};
		const api = getMwApi();
		const params = {
			action: 'compare',
			prop: ['ids', 'title'],
		};
		if (article.title) {
			params.fromtitle = article.title;
		}
		switch (diff) {
			case 'cur':
				switch (oldid) {
					case null:
					case '':
					case 'prev':
						// this can only work if we have the title
						// cur -> prev
						params.torelative = 'prev';
						break;
					default:
						params.fromrev = oldid;
						params.torelative = 'cur';
						break;
				}
				break;
			case 'prev':
				if (oldid) {
					params.fromrev = oldid;
				} else {
					params.fromtitle;
				}
				params.torelative = 'prev';
				break;
			case 'next':
				params.fromrev = oldid || 0;
				params.torelative = 'next';
				break;
			default:
				params.fromrev = oldid || 0;
				params.torev = diff || 0;
				break;
		}
		api.get(params).then((data) => {
			navpop.diffData.oldRev.revid = data.compare.fromrevid;
			navpop.diffData.newRev.revid = data.compare.torevid;
			addReviewLink(navpop, 'popupMiscTools');
			const go = () => {
				pendingNavpopTask(navpop);
				let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
				url += `revids=${navpop.diffData.oldRev.revid}|${navpop.diffData.newRev.revid}`;
				url += '&prop=revisions&rvprop=ids|timestamp|content';
				getPageWithCaching(url, doneDiff, navpop);
				return true; // remove hook once run
			};
			if (navpop.visible || !getValueOf('popupLazyDownloads')) {
				go();
			} else {
				navpop.addHook(go, 'unhide', 'before', 'DOWNLOAD_DIFFS');
			}
		});
	};
	// Put a "mark patrolled" link to an element target
	// TODO: Allow patrol a revision, as well as a diff
	const addReviewLink = (navpop, target) => {
		if (!pg.user.canReview) {
			return;
		}
		// If 'newRev' is older than 'oldRev' than it could be confusing, so we do not show the review link.
		if (navpop.diffData.newRev.revid <= navpop.diffData.oldRev.revid) {
			return;
		}
		const params = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: ['info', 'flagged'],
			revids: navpop.diffData.oldRev.revid,
		};
		getMwApi()
			.get(params)
			.then((data) => {
				const stable_revid = (data.query.pages[0].flagged && data.query.pages[0].flagged.stable_revid) || 0;
				// The diff can be reviewed if the old version is the last reviewed version
				// TODO: Other possible conditions that we may want to implement instead of this one:
				// - old version is patrolled and the new version is not patrolled
				// - old version is patrolled and the new version is more recent than the last reviewed version
				if (stable_revid === navpop.diffData.oldRev.revid) {
					const a = document.createElement('a');
					a.innerHTML = popupString('mark patrolled');
					a.title = popupString('markpatrolledHint');
					a.onclick = () => {
						const params = {
							action: 'review',
							comment: tprintf('defaultpopupReviewedSummary', [
								navpop.diffData.oldRev.revid,
								navpop.diffData.newRev.revid,
							]),
							revid: navpop.diffData.newRev.revid,
						};
						getMwApi()
							.postWithToken('csrf', params)
							.done(() => {
								a.style.display = 'none';
								// TODO: Update current page and other already constructed popups
							})
							.fail(() => {
								mw.notify(popupString('Could not marked this edit as patrolled'), {
									tag: 'popups',
									type: 'error',
								});
							});
					};
					setPopupHTML(a, target, navpop.idNumber, null, true);
				}
			});
	};
	const doneDiff = (download) => {
		if (!download.owner || !download.owner.diffData) {
			return;
		}
		const navpop = download.owner;
		completedNavpopTask(navpop);
		let pages;
		let revisions = [];
		try {
			// Process the downloads
			({pages} = getJsObj(download.data).query);
			for (const page of pages) {
				revisions = [...revisions, ...page.revisions];
			}
			for (const revision of revisions) {
				if (revision.revid === navpop.diffData.oldRev.revid) {
					navpop.diffData.oldRev.revision = revision;
				} else if (revision.revid === navpop.diffData.newRev.revid) {
					navpop.diffData.newRev.revision = revision;
				}
			}
		} catch {
			errlog('Could not get diff');
		}
		insertDiff(navpop);
	};
	const rmBoringLines = (a, b, context) => {
		if (context === undefined) {
			context = 2;
		}
		// this is fairly slow... i think it's quicker than doing a word-based diff from the off, though
		const aa = [];
		const aaa = [];
		const bb = [];
		const bbb = [];
		let i;
		let j;
		// first, gather all disconnected nodes in a and all crossing nodes in a and b
		for (i = 0; i < a.length; ++i) {
			if (!a[i].paired) {
				aa[i] = 1;
			} else if (countCrossings(b, a, i, true)) {
				aa[i] = 1;
				bb[a[i].row] = 1;
			}
		}
		// pick up remaining disconnected nodes in b
		for (i = 0; i < b.length; ++i) {
			if (bb[i] === 1) {
				continue;
			}
			if (!b[i].paired) {
				bb[i] = 1;
			}
		}
		// another pass to gather context: we want the neighbours of included nodes which are not
		// yet included we have to add in partners of these nodes, but we don't want to add context
		// for *those* nodes in the next pass
		for (i = 0; i < b.length; ++i) {
			if (bb[i] === 1) {
				for (j = Math.max(0, i - context); j < Math.min(b.length, i + context); ++j) {
					if (!bb[j]) {
						bb[j] = 1;
						aa[b[j].row] = 0.5;
					}
				}
			}
		}
		for (i = 0; i < a.length; ++i) {
			if (aa[i] === 1) {
				for (j = Math.max(0, i - context); j < Math.min(a.length, i + context); ++j) {
					if (!aa[j]) {
						aa[j] = 1;
						bb[a[j].row] = 0.5;
					}
				}
			}
		}
		for (i = 0; i < bb.length; ++i) {
			if (bb[i] > 0) {
				// it's a row we need
				if (b[i].paired) {
					bbb.push(b[i].text); // joined; partner should be in aa
				} else {
					bbb.push(b[i]);
				}
			}
		}
		for (i = 0; i < aa.length; ++i) {
			if (aa[i] > 0) {
				// it's a row we need
				if (a[i].paired) {
					aaa.push(a[i].text);
				} else {
					// joined; partner should be in aa
					aaa.push(a[i]);
				}
			}
		}
		return {
			a: aaa,
			b: bbb,
		};
	};
	const stripOuterCommonLines = (a, b, context) => {
		let i = 0;
		while (i < a.length && i < b.length && a[i] === b[i]) {
			++i;
		}
		let j = a.length - 1;
		let k = b.length - 1;
		while (j >= 0 && k >= 0 && a[j] === b[k]) {
			--j;
			--k;
		}
		return {
			a: a.slice(Math.max(0, i - 1 - context), Math.min(a.length + 1, j + context + 1)),
			b: b.slice(Math.max(0, i - 1 - context), Math.min(b.length + 1, k + context + 1)),
		};
	};
	const insertDiff = (navpop) => {
		// for speed reasons, we first do a line-based diff, discard stuff that seems boring, then
		// do a word-based diff
		// FIXME: sometimes this gives misleading diffs as distant chunks are squashed together
		let oldlines = navpop.diffData.oldRev.revision.content.split('\n');
		let newlines = navpop.diffData.newRev.revision.content.split('\n');
		let inner = stripOuterCommonLines(oldlines, newlines, getValueOf('popupDiffContextLines'));
		oldlines = inner.a;
		newlines = inner.b;
		let truncated = false;
		getValueOf('popupDiffMaxLines');
		if (oldlines.length > pg.option.popupDiffMaxLines || newlines.length > pg.option.popupDiffMaxLines) {
			// truncate
			truncated = true;
			inner = stripOuterCommonLines(
				oldlines.slice(0, pg.option.popupDiffMaxLines),
				newlines.slice(0, pg.option.popupDiffMaxLines),
				pg.option.popupDiffContextLines
			);
			oldlines = inner.a;
			newlines = inner.b;
		}
		const lineDiff = diff(oldlines, newlines);
		const lines2 = rmBoringLines(lineDiff.o, lineDiff.n);
		const oldlines2 = lines2.a;
		const newlines2 = lines2.b;
		let html = '<hr>';
		if (getValueOf('popupDiffDates')) {
			html += diffDatesTable(navpop);
			html += '<hr>';
		}
		html += shortenDiffString(
			diffString(oldlines2.join('\n'), newlines2.join('\n')),
			getValueOf('popupDiffContextCharacters')
		).join('<hr>');
		setPopupTipsAndHTML(
			html.split('\n').join('<br>') +
				(truncated ? `<hr><b>${popupString('Diff truncated for performance reasons')}</b>` : ''),
			'popupPreview',
			navpop.idNumber
		);
	};
	const diffDatesTable = (navpop) => {
		let html = '<table class="popup_diff_dates">';
		html += diffDatesTableRow(navpop.diffData.newRev.revision, tprintf('New revision'));
		html += diffDatesTableRow(navpop.diffData.oldRev.revision, tprintf('Old revision'));
		html += '</table>';
		return html;
	};
	const diffDatesTableRow = (revision, label) => {
		let txt = '';
		const lastModifiedDate = new Date(revision.timestamp);
		txt = formattedDateTime(lastModifiedDate);
		const revlink = generalLink({
			url: `${mw.config.get('wgScript')}?oldid=${revision.revid}`,
			text: label,
			title: label,
		});
		return simplePrintf('<tr><td>%s</td><td>%s</td></tr>', [revlink, txt]);
	};
	// ENDFILE: diffpreview.js
	// STARTFILE: links.js
	// LINK GENERATION //
	// titledDiffLink --> titledWikiLink --> generalLink
	// wikiLink	   --> titledWikiLink --> generalLink
	// editCounterLink --> generalLink
	// TODO Make these functions return Element objects, not just raw HTML strings.
	const titledDiffLink = (l) => {
		return titledWikiLink({
			article: l.article,
			action: `${l.to}&oldid=${l.from}`,
			newWin: l.newWin,
			noPopup: l.noPopup,
			text: l.text,
			title: l.title,
			/* hack: no oldid here */
			actionName: 'diff',
		});
	};
	const wikiLink = (l) => {
		// {article:article, action:action, text:text, oldid, newid}) {
		if (!(typeof l.article === typeof {} && typeof l.action === typeof '' && typeof l.text === typeof '')) {
			return null;
		}
		if (l.oldid === undefined) {
			l.oldid = null;
		}
		const savedOldid = l.oldid;
		if (!/^(edit|view|revert|render)$|^raw/.test(l.action)) {
			l.oldid = null;
		}
		let hint = popupString(`${l.action}Hint`); // revertHint etc etc etc
		const oldidData = [l.oldid, safeDecodeURI(l.article)];
		let revisionString = tprintf('revision %s of %s', oldidData);
		log(`revisionString=${revisionString}`);
		switch (l.action) {
			case 'edit&section=new':
				hint = popupString('newSectionHint');
				break;
			case 'edit&undo=':
				if (l.diff && l.diff !== 'prev' && savedOldid) {
					l.action += `${l.diff}&undoafter=${savedOldid}`;
				} else if (savedOldid) {
					l.action += savedOldid;
				}
				hint = popupString('undoHint');
				break;
			case 'raw&ctype=text/css':
				hint = popupString('rawHint');
				break;
			case 'revert': {
				const p = parseParams(pg.current.link.href);
				l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString(
					'autoedit_version'
				)}&autosummary=${revertSummary(l.oldid, p.diff)}`;
				if (p.diff === 'prev') {
					l.action += '&direction=prev';
					revisionString = tprintf('the revision prior to revision %s of %s', oldidData);
				}
				if (getValueOf('popupRevertSummaryPrompt')) {
					l.action += '&autosummaryprompt=true';
				}
				if (getValueOf('popupMinorReverts')) {
					l.action += '&autominor=true';
				}
				log(`revisionString is now ${revisionString}`);
				break;
			}
			case 'nullEdit':
				l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString(
					'autoedit_version'
				)}&autosummary=null`;
				break;
			case 'historyfeed':
				l.action = 'history&feed=rss';
				break;
			case 'markpatrolled':
				l.action = `markpatrolled&rcid=${l.rcid}`;
		}
		if (hint) {
			hint = l.oldid ? simplePrintf(hint, [revisionString]) : simplePrintf(hint, [safeDecodeURI(l.article)]);
		} else {
			hint = safeDecodeURI(`${l.article}&action=${l.action}`) + l.oldid ? `&oldid=${l.oldid}` : '';
		}
		return titledWikiLink({
			article: l.article,
			action: l.action,
			text: l.text,
			newWin: l.newWin,
			title: hint,
			oldid: l.oldid,
			noPopup: l.noPopup,
			onclick: l.onclick,
		});
	};
	const revertSummary = (oldid, diff) => {
		let ret = '';
		ret =
			diff === 'prev'
				? getValueOf('popupQueriedRevertToPreviousSummary')
				: getValueOf('popupQueriedRevertSummary');
		return `${ret}&autorv=${oldid}`;
	};
	const titledWikiLink = (l) => {
		// possible properties of argument:
		// article, action, text, title, oldid, actionName, className, noPopup
		// oldid = null is fine here
		// article and action are mandatory args
		if (l.article === undefined || l.action === undefined) {
			errlog('got undefined article or action in titledWikiLink');
			return null;
		}
		const base = pg.wiki.titlebase + l.article.urlString();
		let url = base;
		if (l.actionName === undefined || !l.actionName) {
			l.actionName = 'action';
		}
		// no need to add &action=view, and this confuses anchors
		if (l.action !== 'view') {
			url = `${base}&${l.actionName}=${l.action}`;
		}
		if (l.oldid !== undefined && l.oldid) {
			url += `&oldid=${l.oldid}`;
		}
		let cssClass = pg.misc.defaultNavlinkClassname;
		if (l.className !== undefined && l.className) {
			cssClass = l.className;
		}
		return generalNavLink({
			url,
			newWin: l.newWin,
			title: l.title === undefined ? null : l.title,
			text: l.text === undefined ? null : l.text,
			className: cssClass,
			noPopup: l.noPopup,
			onclick: l.onclick,
		});
	};
	pg.fn.getLastContrib = (wikipage, newWin) => {
		getHistoryInfo(wikipage, (x) => {
			processLastContribInfo(x, {page: wikipage, newWin});
		});
	};
	const processLastContribInfo = (info, stuff) => {
		if (!info.edits || info.edits.length === 0) {
			mw.notify('Popups: an odd thing happened. Please retry.', {tag: 'popups', type: 'error'});
			return;
		}
		if (!info.firstNewEditor) {
			mw.notify(tprintf('Only found one editor: %s made %s edits', [info.edits[0].editor, info.edits.length]), {
				tag: 'popups',
				type: 'error',
			});
			return;
		}
		const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${
			info.firstNewEditor.oldid
		}`;
		displayUrl(newUrl, stuff.newWin);
	};
	pg.fn.getDiffSinceMyEdit = (wikipage, newWin) => {
		getHistoryInfo(wikipage, (x) => {
			processDiffSinceMyEdit(x, {page: wikipage, newWin});
		});
	};
	const processDiffSinceMyEdit = (info, stuff) => {
		if (!info.edits || info.edits.length === 0) {
			mw.notify('Popups: something fishy happened. Please try again.', {tag: 'popups', type: 'error'});
			return;
		}
		const friendlyName = stuff.page.split('_').join(' ');
		if (!info.myLastEdit) {
			mw.notify(
				tprintf("Couldn't find an edit by %s\nin the last %s edits to\n%s", [
					info.userName,
					getValueOf('popupHistoryLimit'),
					friendlyName,
				]),
				{tag: 'popups', type: 'error'}
			);
			return;
		}
		if (info.myLastEdit.index === 0) {
			mw.notify(tprintf('%s seems to be the last editor to the page %s', [info.userName, friendlyName]), {
				type: 'error',
			});
			return;
		}
		const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${
			info.myLastEdit.oldid
		}`;
		displayUrl(newUrl, stuff.newWin);
	};
	const displayUrl = (url, newWin) => {
		if (newWin) {
			window.open(url);
		} else {
			document.location = url;
		}
	};
	pg.fn.purgePopups = () => {
		processAllPopups(true);
		setupCache(); // deletes all cached items (not browser cached, though...)
		pg.option = {};
		abortAllDownloads();
	};
	const processAllPopups = (nullify, banish) => {
		for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
			if (!pg.current.links[i].navpopup) {
				continue;
			}
			if (nullify || banish) {
				pg.current.links[i].navpopup.banish();
			}
			pg.current.links[i].simpleNoMore = false;
			if (nullify) {
				pg.current.links[i].navpopup = null;
			}
		}
	};
	pg.fn.disablePopups = () => {
		processAllPopups(false, true);
		setupTooltips(null, true);
	};
	pg.fn.togglePreviews = () => {
		processAllPopups(true, true);
		pg.option.simplePopups = !pg.option.simplePopups;
		abortAllDownloads();
	};
	const magicWatchLink = function magicWatchLink(l) {
		// Yuck!! Would require a thorough redesign to add this as a click event though ...
		l.onclick = simplePrintf("pg.fn.modifyWatchlist('%s','%s');return false;", [
			l.article
				.toString(true)
				.split('\\')
				.join('\\\\')
				.split("'")
				.join(String.raw`\'`),
			this.id,
		]);
		return wikiLink(l);
	};
	pg.fn.modifyWatchlist = async (title, action) => {
		const reqData = {
			action: 'watch',
			formatversion: '2',
			titles: title,
			uselang: mw.config.get('wgUserLanguage'),
		};
		if (action === 'unwatch') {
			reqData.unwatch = true;
		}
		// Load the Addedwatchtext or Removedwatchtext message and show it
		const mwTitle = mw.Title.newFromText(title);
		let messageName;
		if (mwTitle && mwTitle.getNamespaceId() > 0 && mwTitle.getNamespaceId() % 2 === 1) {
			messageName = action === 'watch' ? 'addedwatchtext-talk' : 'removedwatchtext-talk';
		} else {
			messageName = action === 'watch' ? 'addedwatchtext' : 'removedwatchtext';
		}
		await getMwApi().postWithToken('watch', reqData);
		await getMwApi().loadMessagesIfMissing([messageName]);
		// Messages that can be used here:
		// * see string.js
		// * for more information
		mw.notify(mw.message(messageName, title).parseDom(), {tag: 'popups'});
	};
	const magicHistoryLink = (l) => {
		// FIXME use onclick change href trick to sort this out instead of window.open
		let jsUrl = '';
		let title = '';
		let onClick = '';
		switch (l.id) {
			case 'lastContrib':
				onClick = simplePrintf("pg.fn.getLastContrib('%s',%s)", [
					l.article
						.toString(true)
						.split('\\')
						.join('\\\\')
						.split("'")
						.join(String.raw`\'`),
					l.newWin,
				]);
				title = popupString('lastContribHint');
				break;
			case 'sinceMe':
				onClick = simplePrintf("pg.fn.getDiffSinceMyEdit('%s',%s)", [
					l.article
						.toString(true)
						.split('\\')
						.join('\\\\')
						.split("'")
						.join(String.raw`\'`),
					l.newWin,
				]);
				title = popupString('sinceMeHint');
				break;
		}
		jsUrl = `javascript:${onClick}`; // jshint ignore:line
		onClick += ';return false;';
		return generalNavLink({
			url: jsUrl,
			newWin: false,
			title,
			text: l.text,
			noPopup: l.noPopup,
			onclick: onClick,
		});
	};
	const popupMenuLink = (l) => {
		// eslint-disable-next-line no-script-url
		const jsUrl = simplePrintf('javascript:pg.fn.%s()', [l.id]); // jshint ignore:line
		const title = popupString(simplePrintf('%sHint', [l.id]));
		const onClick = simplePrintf('pg.fn.%s();return false;', [l.id]);
		return generalNavLink({
			url: jsUrl,
			newWin: false,
			title,
			text: l.text,
			noPopup: l.noPopup,
			onclick: onClick,
		});
	};
	const specialLink = (l) => {
		// properties: article, specialpage, text, sep
		if (l.specialpage === undefined || !l.specialpage) {
			return null;
		}
		const base = `${pg.wiki.titlebase + mw.config.get('wgFormattedNamespaces')[pg.nsSpecialId]}:${l.specialpage}`;
		if (l.sep === undefined || l.sep === null) {
			l.sep = '&target=';
		}
		let article = l.article.urlString({
			keepSpaces: l.specialpage === 'Search',
		});
		let hint = popupString(`${l.specialpage}Hint`);
		switch (l.specialpage) {
			case 'Log':
				switch (l.sep) {
					case '&user=':
						hint = popupString('userLogHint');
						break;
					case '&type=block&page=':
						hint = popupString('blockLogHint');
						break;
					case '&page=':
						hint = popupString('pageLogHint');
						break;
					case '&type=protect&page=':
						hint = popupString('protectLogHint');
						break;
					case '&type=delete&page=':
						hint = popupString('deleteLogHint');
						break;
					default:
						log(`Unknown log type, sep=${l.sep}`);
						hint = 'Missing hint (FIXME)';
				}
				break;
			case 'PrefixIndex':
				article += '/';
				break;
		}
		hint = hint ? simplePrintf(hint, [safeDecodeURI(l.article)]) : safeDecodeURI(`${l.specialpage}:${l.article}`);
		const url = base + l.sep + article;
		return generalNavLink({
			url,
			title: hint,
			text: l.text,
			newWin: l.newWin,
			noPopup: l.noPopup,
		});
	};
	const generalLink = (l) => {
		// l.url, l.text, l.title, l.newWin, l.className, l.noPopup, l.onclick
		if (l.url === undefined) {
			return null;
		}
		// only quotation marks in the url can screw us up now... I think
		const url = l.url.split('"').join('%22');
		let ret = `<a href="${url}"`;
		if (l.title !== undefined && l.title) {
			ret += ` title="${pg.escapeQuotesHTML(l.title)}"`;
		}
		if (l.onclick !== undefined && l.onclick) {
			ret += ` onclick="${pg.escapeQuotesHTML(l.onclick)}"`;
		}
		if (l.noPopup) {
			ret += ' noPopup=1';
		}
		let newWin;
		if (l.newWin === undefined || l.newWin === null) {
			newWin = getValueOf('popupNewWindows');
		} else {
			({newWin} = l);
		}
		if (newWin) {
			ret += ' rel="noopener" target="_blank"';
		}
		if (l.className !== undefined && l.className) {
			ret += ` class="${l.className}"`;
		}
		ret += '>';
		if (typeof l.text === typeof '') {
			// We need to HTML-escape this to avoid XSS, but we also want to
			// display any existing HTML entities correctly, so unescape it first.
			// For example, the display text of the user page menu item is defined
			// as "user&nbsp;page", so we need to unescape first to avoid it being
			// escaped to "user&amp;nbsp;page".
			ret += pg.escapeQuotesHTML(pg.unescapeQuotesHTML(l.text));
		}
		ret += '</a>';
		return ret;
	};
	const appendParamsToLink = (linkstr, params) => {
		const sp = linkstr.split(/(href="[^"]+?)"/i);
		if (sp.length < 2) {
			return null;
		}
		let ret = sp.shift() + sp.shift();
		ret += `&${params}"`;
		ret += sp.join('');
		return ret;
	};
	const changeLinkTargetLink = (x) => {
		// newTarget, text, hint, summary, clickButton, minor, title (optional), alsoChangeLabel {
		if (x.newTarget) {
			log(`changeLinkTargetLink: newTarget=${x.newTarget}`);
		}
		if (x.oldTarget !== decodeURIComponent(x.oldTarget)) {
			log(`This might be an input problem: ${x.oldTarget}`);
		}
		// FIXME: first character of page title as well as namespace should be case insensitive
		// eg [[:category:X1]] and [[:Category:X1]] are equivalent
		// this'll break if charAt(0) is nasty
		const cA = mw.util.escapeRegExp(x.oldTarget);
		let chs = cA.charAt(0).toUpperCase();
		chs = `[${chs}${chs.toLowerCase()}]`;
		let currentArticleRegexBit = chs + cA.slice(1);
		currentArticleRegexBit = currentArticleRegexBit
			.split(/[ _]+|%20/g)
			.join('(?:[_ ]+|%20)')
			.split(String.raw`\(`)
			.join(String.raw`(?:%28|\()`)
			.split(String.raw`\)`)
			.join(String.raw`(?:%29|\))`); // why does this need to match encoded strings ? links in the document ?

		// leading and trailing space should be ignored, and anchor bits optional:
		currentArticleRegexBit = `\\s*(${currentArticleRegexBit}(?:#[^\\[\\|]*)?)\\s*`;
		// e.g. Computer (archaic) -> \s*([Cc]omputer[_ ](?:%2528|\()archaic(?:%2528|\)))\s*
		// autoedit=s~\[\[([Cc]ad)\]\]~[[Computer-aided%20design|$1]]~g;s~\[\[([Cc]AD)[|]~[[Computer-aided%20design|~g
		const title = x.title || mw.config.get('wgPageName').split('_').join(' ');
		const lk = titledWikiLink({
			article: new Title(title),
			newWin: x.newWin,
			action: 'edit',
			text: x.text,
			title: x.hint,
			className: 'popup_change_title_link',
		});
		let cmd = '';
		if (x.newTarget) {
			// escape '&' and other nasties
			const t = x.newTarget;
			const s = mw.util.escapeRegExp(x.newTarget);
			if (x.alsoChangeLabel) {
				cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}]]~g;`;
				cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
				cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
			} else {
				cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}|$1]]~g;`;
				cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
				cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
			}
		} else {
			cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~$1~g;`;
			cmd += `s~\\[\\[${currentArticleRegexBit}[|](.*?)\\]\\]~$2~g`;
		}
		// Build query
		cmd = `autoedit=${encodeURIComponent(cmd)}`;
		cmd += `&autoclick=${encodeURIComponent(x.clickButton)}&actoken=${encodeURIComponent(autoClickToken())}`;
		cmd += x.minor === null ? '' : `&autominor=${encodeURIComponent(x.minor)}`;
		cmd += x.watch === null ? '' : `&autowatch=${encodeURIComponent(x.watch)}`;
		cmd += `&autosummary=${encodeURIComponent(x.summary)}`;
		cmd += `&autoimpl=${encodeURIComponent(popupString('autoedit_version'))}`;
		return appendParamsToLink(lk, cmd);
	};
	const redirLink = (redirMatch, article) => {
		// NB redirMatch is in wikiText
		let ret = '';
		if (getValueOf('popupAppendRedirNavLinks') && getValueOf('popupNavLinks')) {
			ret += '<hr>';
			if (getValueOf('popupFixRedirs') && autoEdit !== undefined && autoEdit) {
				ret += popupString('Redirects to: (Fix ');
				log(`redirLink: newTarget=${redirMatch}`);
				ret += addPopupShortcut(
					changeLinkTargetLink({
						newTarget: redirMatch,
						text: popupString('target'),
						hint: popupString('Fix this redirect, changing just the link target'),
						summary: simplePrintf(getValueOf('popupFixRedirsSummary'), [article.toString(), redirMatch]),
						oldTarget: article.toString(),
						clickButton: getValueOf('popupRedirAutoClick'),
						minor: true,
						watch: getValueOf('popupWatchRedirredPages'),
					}),
					'R'
				);
				ret += popupString(' or ');
				ret += addPopupShortcut(
					changeLinkTargetLink({
						newTarget: redirMatch,
						text: popupString('target & label'),
						hint: popupString('Fix this redirect, changing the link target and label'),
						summary: simplePrintf(getValueOf('popupFixRedirsSummary'), [article.toString(), redirMatch]),
						oldTarget: article.toString(),
						clickButton: getValueOf('popupRedirAutoClick'),
						minor: true,
						watch: getValueOf('popupWatchRedirredPages'),
						alsoChangeLabel: true,
					}),
					'R'
				);
				ret += popupString(')');
			} else {
				ret += popupString('Redirects') + popupString(' to ');
			}
			return ret;
		}
		return `<br> ${popupString('Redirects')}${popupString(' to ')}${titledWikiLink({
			article: new Title().fromWikiText(redirMatch),
			action: 'view' /* FIXME: newWin */,
			text: safeDecodeURI(redirMatch),
			title: popupString('Bypass redirect'),
		})}`;
	};
	const arinLink = (l) => {
		if (!saneLinkCheck(l)) {
			return null;
		}
		if (!l.article.isIpUser() || !pg.wiki.wikimedia) {
			return null;
		}
		const uN = l.article.userName();
		return generalNavLink({
			url: `http://ws.arin.net/cgi-bin/whois.pl?queryinput=${encodeURIComponent(uN)}`,
			newWin: l.newWin,
			title: tprintf('Look up %s in ARIN whois database', [uN]),
			text: l.text,
			noPopup: 1,
		});
	};
	const toolDbName = (cookieStyle) => {
		let ret = mw.config.get('wgDBname');
		if (!cookieStyle) {
			ret += '_p';
		}
		return ret;
	};
	const saneLinkCheck = (l) => {
		if (typeof l.article !== typeof {} || typeof l.text !== typeof '') {
			return false;
		}
		return true;
	};
	const editCounterLink = (l) => {
		if (!saneLinkCheck(l)) {
			return null;
		}
		if (!pg.wiki.wikimedia) {
			return null;
		}
		const uN = l.article.userName();
		const tool = getValueOf('popupEditCounterTool');
		let url;
		const defaultToolUrl = '//tools.wmflabs.org/supercount/index.php?user=$1&project=$2.$3';
		switch (tool) {
			case 'custom':
				url = simplePrintf(getValueOf('popupEditCounterUrl'), [encodeURIComponent(uN), toolDbName()]);
				break;
			default: {
				const theWiki = pg.wiki.hostname.split('.');
				url = simplePrintf(defaultToolUrl, [encodeURIComponent(uN), theWiki[0], theWiki[1]]);
			}
		}
		return generalNavLink({
			url,
			title: tprintf('editCounterLinkHint', [uN]),
			newWin: l.newWin,
			text: l.text,
			noPopup: 1,
		});
	};
	const editorListLink = (l) => {
		if (!saneLinkCheck(l)) {
			return null;
		}
		const article = l.article.articleFromTalkPage() || l.article;
		const url = `https://xtools.wmflabs.org/articleinfo/${encodeURI(
			pg.wiki.hostname
		)}/${article.urlString()}?uselang=${mw.config.get('wgUserLanguage')}`;
		return generalNavLink({
			url,
			title: tprintf('editorListHint', [article]),
			newWin: l.newWin,
			text: l.text,
			noPopup: 1,
		});
	};
	const generalNavLink = (l) => {
		l.className = l.className === null ? 'popupNavLink' : l.className;
		return generalLink(l);
	};
	// magic history links
	//
	const getHistoryInfo = (wikipage, whatNext) => {
		log('getHistoryInfo');
		getHistory(
			wikipage,
			whatNext
				? (d) => {
						whatNext(processHistory(d));
					}
				: processHistory
		);
	};
	// FIXME eliminate pg.idNumber ... how? :-(
	const getHistory = (wikipage, onComplete) => {
		log('getHistory');
		const url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&prop=revisions&titles=${new Title(
			wikipage
		).urlString()}&rvlimit=${getValueOf('popupHistoryLimit')}`;
		log(`getHistory: url=${url}`);
		return startDownload(url, `${pg.idNumber}history`, onComplete);
	};
	const processHistory = (download) => {
		const jsobj = getJsObj(download.data);
		try {
			const {revisions} = anyChild(jsobj.query.pages);
			const edits = [];
			for (const revision of revisions) {
				edits.push({
					oldid: revision.revid,
					editor: revision.user,
				});
			}
			log(`processed ${edits.length} edits`);
			return finishProcessHistory(edits, mw.config.get('wgUserName'));
		} catch {
			log('Something went wrong with JSON business');
			return finishProcessHistory([]);
		}
	};
	const finishProcessHistory = (edits, userName) => {
		const histInfo = {};
		histInfo.edits = edits;
		histInfo.userName = userName;
		for (let i = 0; i < edits.length; ++i) {
			if (histInfo.myLastEdit === undefined && userName && edits[i].editor === userName) {
				histInfo.myLastEdit = {
					index: i,
					oldid: edits[i].oldid,
					previd: i === 0 ? null : edits[i - 1].oldid,
				};
			}
			if (histInfo.firstNewEditor === undefined && edits[i].editor !== edits[0].editor) {
				histInfo.firstNewEditor = {
					index: i,
					oldid: edits[i].oldid,
					previd: i === 0 ? null : edits[i - 1].oldid,
				};
			}
		}
		// pg.misc.historyInfo=histInfo;
		return histInfo;
	};
	// ENDFILE: links.js
	// STARTFILE: options.js
	// options
	// check for existing value, else use default
	const defaultize = (x) => {
		if (pg.option[x] === null || pg.option[x] === undefined) {
			pg.option[x] = window[x] === undefined ? pg.optionDefault[x] : window[x];
		}
	};
	const newOption = (x, def) => {
		pg.optionDefault[x] = def;
	};
	const setDefault = (x, def) => {
		return newOption(x, def);
	};
	const getValueOf = (varName) => {
		defaultize(varName);
		return pg.option[varName];
	};
	const setOptions = () => {
		// user-settable parameters and defaults
		let userIsSysop = false;
		if (mw.config.get('wgUserGroups')) {
			for (let g = 0; g < mw.config.get('wgUserGroups').length; ++g) {
				if (mw.config.get('wgUserGroups')[g] === 'sysop') {
					userIsSysop = true;
				}
				if (mw.config.get('wgUserGroups')[g] === 'steward') {
					userIsSysop = true;
				}
			}
		}
		// Basic options
		newOption('popupDelay', 0.5);
		newOption('popupHideDelay', 0.5);
		newOption('simplePopups', false);
		newOption('popupStructure', 'shortmenus'); // see later - default for popupStructure is 'original' if simplePopups is true
		newOption('popupActionsMenu', true);
		newOption('popupSetupMenu', true);
		newOption('popupAdminLinks', userIsSysop);
		newOption('popupShortcutKeys', false);
		newOption('popupHistoricalLinks', true);
		newOption('popupOnlyArticleLinks', true);
		newOption('removeTitles', true);
		newOption('popupMaxWidth', 350);
		newOption('popupSimplifyMainLink', true);
		newOption('popupAppendRedirNavLinks', true);
		newOption('popupTocLinks', false);
		newOption('popupSubpopups', true);
		newOption('popupDragHandle', false /* 'popupTopLinks' */);
		newOption('popupLazyPreviews', true);
		newOption('popupLazyDownloads', true);
		newOption('popupAllDabsStubs', false);
		newOption('popupDebugging', false);
		newOption('popupActiveNavlinks', true);
		newOption('popupModifier', false); // ctrl, shift, alt or meta
		newOption('popupModifierAction', 'enable'); // or 'disable'
		newOption('popupDraggable', true);
		newOption('popupReview', false);
		newOption('popupLocale', false);
		newOption('popupDateTimeFormatterOptions', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		newOption('popupDateFormatterOptions', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		newOption('popupTimeFormatterOptions', {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		// images
		newOption('popupImages', true);
		newOption('imagePopupsForImages', true);
		newOption('popupNeverGetThumbs', false);
		// newOption('popupImagesToggleSize',       true);
		newOption('popupThumbAction', 'imagepage'); // 'sizetoggle');
		newOption('popupImageSize', 60);
		newOption('popupImageSizeLarge', 200);
		// redirs, dabs, reversion
		newOption('popupFixRedirs', false);
		newOption('popupRedirAutoClick', 'wpDiff');
		newOption('popupFixDabs', false);
		newOption('popupDabsAutoClick', 'wpDiff');
		newOption('popupRevertSummaryPrompt', false);
		newOption('popupMinorReverts', false);
		newOption('popupRedlinkRemoval', false);
		newOption('popupRedlinkAutoClick', 'wpDiff');
		newOption('popupWatchDisambiggedPages', null);
		newOption('popupWatchRedirredPages', null);
		newOption('popupDabWiktionary', 'last');
		// navlinks
		newOption('popupNavLinks', true);
		newOption('popupNavLinkSeparator', ' &sdot; ');
		newOption('popupLastEditLink', true);
		newOption('popupEditCounterTool', 'supercount');
		newOption('popupEditCounterUrl', '');
		// previews etc
		newOption('popupPreviews', true);
		newOption('popupSummaryData', true);
		newOption('popupMaxPreviewSentences', 5);
		newOption('popupMaxPreviewCharacters', 600);
		newOption('popupLastModified', true);
		newOption('popupPreviewKillTemplates', true);
		newOption('popupPreviewRawTemplates', true);
		newOption('popupPreviewFirstParOnly', true);
		newOption('popupPreviewCutHeadings', true);
		newOption('popupPreviewButton', false);
		newOption('popupPreviewButtonEvent', 'click');
		// diffs
		newOption('popupPreviewDiffs', true);
		newOption('popupDiffMaxLines', 100);
		newOption('popupDiffContextLines', 2);
		newOption('popupDiffContextCharacters', 40);
		newOption('popupDiffDates', true);
		newOption('popupDiffDatePrinter', 'toLocaleString'); // no longer in use

		// edit summaries. God, these are ugly.
		newOption('popupReviewedSummary', popupString('defaultpopupReviewedSummary'));
		newOption('popupFixDabsSummary', popupString('defaultpopupFixDabsSummary'));
		newOption('popupExtendedRevertSummary', popupString('defaultpopupExtendedRevertSummary'));
		newOption('popupRevertSummary', popupString('defaultpopupRevertSummary'));
		newOption('popupRevertToPreviousSummary', popupString('defaultpopupRevertToPreviousSummary'));
		newOption('popupQueriedRevertSummary', popupString('defaultpopupQueriedRevertSummary'));
		newOption('popupQueriedRevertToPreviousSummary', popupString('defaultpopupQueriedRevertToPreviousSummary'));
		newOption('popupFixRedirsSummary', popupString('defaultpopupFixRedirsSummary'));
		newOption('popupRedlinkSummary', popupString('defaultpopupRedlinkSummary'));
		newOption('popupRmDabLinkSummary', popupString('defaultpopupRmDabLinkSummary'));
		// misc
		newOption('popupHistoryLimit', 50);
		newOption('popupFilters', [
			popupFilterStubDetect,
			popupFilterDisambigDetect,
			popupFilterPageSize,
			popupFilterCountLinks,
			popupFilterCountImages,
			popupFilterCountCategories,
			popupFilterLastModified,
		]);
		newOption('extraPopupFilters', []);
		newOption('popupOnEditSelection', 'cursor');
		newOption('popupPreviewHistory', true);
		newOption('popupImageLinks', true);
		newOption('popupCategoryMembers', true);
		newOption('popupUserInfo', true);
		newOption('popupHistoryPreviewLimit', 25);
		newOption('popupContribsPreviewLimit', 25);
		newOption('popupRevDelUrl', '//en.wikipedia.org/wiki/Wikipedia:Revision_deletion');
		newOption('popupShowGender', true);
		// new windows
		newOption('popupNewWindows', false);
		newOption('popupLinksNewWindow', {lastContrib: true, sinceMe: true});
		// regexps
		newOption(
			'popupDabRegexp',
			String.raw`\{\{\s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))\s*(\|[^}]*)?\}\}|is a .*disambiguation.*page`
		);
		newOption('popupAnchorRegexp', 'anchors?'); // how to identify an anchors template
		newOption('popupStubRegexp', '(sect)?stub[}][}]|This .*-related article is a .*stub');
		newOption('popupImageVarsRegexp', 'image|image_(?:file|skyline|name|flag|seal)|cover|badge|logo');
	};
	// ENDFILE: options.js
	// STARTFILE: strings.js
	// Translatable strings
	//
	// See instructions at
	// {@link https://en.wikipedia.org/wiki/Wikipedia:Tools/Navigation_popups/Translation}
	pg.string = {
		// summary data, searching etc.
		article: 'article',
		category: 'category',
		categories: 'categories',
		image: 'image',
		images: 'images',
		stub: 'stub',
		'section stub': 'section stub',
		'Empty page': 'Empty page',
		kB: 'kB',
		bytes: 'bytes',
		day: 'day',
		days: 'days',
		hour: 'hour',
		hours: 'hours',
		minute: 'minute',
		minutes: 'minutes',
		second: 'second',
		seconds: 'seconds',
		week: 'week',
		weeks: 'weeks',
		search: 'search',
		SearchHint: 'Find English Wikipedia articles containing %s',
		web: 'web',
		global: 'global',
		// article-related actions and info
		// (some actions also apply to user pages)
		actions: 'actions',
		popupsMenu: 'popups',
		togglePreviewsHint: 'Toggle preview generation in popups on this page',
		'enable previews': 'enable previews',
		'disable previews': 'disable previews',
		'toggle previews': 'toggle previews',
		'show preview': 'show preview',
		reset: 'reset',
		'more...': 'more...',
		disable: 'disable popups',
		disablePopupsHint: 'Disable popups on this page. Reload page to re-enable.',
		historyfeedHint: 'RSS feed of recent changes to this page',
		purgePopupsHint: 'Reset popups, clearing all cached popup data.',
		PopupsHint: 'Reset popups, clearing all cached popup data.',
		spacebar: 'space',
		view: 'view',
		'view article': 'view article',
		viewHint: 'Go to %s',
		talk: 'talk',
		'talk page': 'talk page',
		'this&nbsp;revision': 'this&nbsp;revision',
		'revision %s of %s': 'revision %s of %s',
		'Revision %s of %s': 'Revision %s of %s',
		'the revision prior to revision %s of %s': 'the revision prior to revision %s of %s',
		'Toggle image size': 'Click to toggle image size',
		del: 'del',
		delete: 'delete',
		deleteHint: 'Delete %s',
		undeleteShort: 'un',
		UndeleteHint: 'Show the deletion history for %s',
		protect: 'protect',
		protectHint: 'Restrict editing rights to %s',
		unprotectShort: 'un',
		unprotectHint: 'Allow %s to be edited by anyone again',
		'send thanks': 'send thanks',
		ThanksHint: 'Send a thank you notification to this user',
		move: 'move',
		'move page': 'move page',
		MovepageHint: 'Change the title of %s',
		edit: 'edit',
		'edit article': 'edit article',
		editHint: 'Change the content of %s',
		'edit talk': 'edit talk',
		new: 'new',
		'new topic': 'new topic',
		newSectionHint: 'Start a new section on %s',
		'null edit': 'null edit',
		nullEditHint: 'Submit an edit to %s, making no changes ',
		hist: 'hist',
		history: 'history',
		historyHint: 'List the changes made to %s',
		last: 'prev',
		lastEdit: 'lastEdit',
		'mark patrolled': 'mark patrolled',
		markpatrolledHint: 'Mark this edit as patrolled',
		'Could not marked this edit as patrolled': 'Could not marked this edit as patrolled',
		'show last edit': 'most recent edit',
		'Show the last edit': 'Show the effects of the most recent change',
		lastContrib: 'lastContrib',
		'last set of edits': 'latest edits',
		lastContribHint: 'Show the net effect of changes made by the last editor',
		cur: 'cur',
		diffCur: 'diffCur',
		'Show changes since revision %s': 'Show changes since revision %s',
		'%s old': '%s old',
		oldEdit: 'oldEdit',
		purge: 'purge',
		purgeHint: 'Demand a fresh copy of %s',
		raw: 'source',
		rawHint: 'Download the source of %s',
		render: 'simple',
		renderHint: 'Show a plain HTML version of %s',
		'Show the edit made to get revision': 'Show the edit made to get revision',
		sinceMe: 'sinceMe',
		'changes since mine': 'diff my edit',
		sinceMeHint: 'Show changes since my last edit',
		"Couldn't find an edit by %s\nin the last %s edits to\n%s":
			"Couldn't find an edit by %s\nin the last %s edits to\n%s",
		eds: 'eds',
		editors: 'editors',
		editorListHint: 'List the users who have edited %s',
		related: 'related',
		relatedChanges: 'relatedChanges',
		'related changes': 'related changes',
		RecentchangeslinkedHint: 'Show changes in articles related to %s',
		editOld: 'editOld',
		rv: 'rv',
		revert: 'revert',
		revertHint: 'Revert to %s',
		defaultpopupReviewedSummary:
			'Accepted by reviewing the [[Special:diff/%s/%s|difference]] between this version and previously accepted version using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupRedlinkSummary:
			'Removing link to empty page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupFixDabsSummary:
			'Disambiguate [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupFixRedirsSummary:
			'Redirect bypass from [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupExtendedRevertSummary:
			'Revert to revision dated %s by %s, oldid %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupRevertToPreviousSummary:
			'Revert to the revision prior to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupRevertSummary: 'Revert to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupQueriedRevertToPreviousSummary:
			'Revert to the revision prior to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupQueriedRevertSummary:
			'Revert to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		defaultpopupRmDabLinkSummary:
			'Remove link to dab page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]',
		Redirects: 'Redirects',
		' to ': ' to ',
		'Bypass redirect': 'Bypass redirect',
		'Fix this redirect': 'Fix this redirect',
		disambig: 'disambig',
		disambigHint: 'Disambiguate this link to [[%s]]',
		'Click to disambiguate this link to:': 'Click to disambiguate this link to:',
		'remove this link': 'remove this link',
		'remove all links to this page from this article': 'remove all links to this page from this article',
		'remove all links to this disambig page from this article':
			'remove all links to this disambig page from this article',
		mainlink: 'mainlink',
		wikiLink: 'wikiLink',
		wikiLinks: 'wikiLinks',
		'links here': 'links here',
		whatLinksHere: 'whatLinksHere',
		'what links here': 'what links here',
		WhatlinkshereHint: 'List the pages that are hyperlinked to %s',
		unwatchShort: 'un',
		watchThingy: 'watch',
		watchHint: 'Add %s to my watchlist',
		unwatchHint: 'Remove %s from my watchlist',
		'Only found one editor: %s made %s edits': 'Only found one editor: %s made %s edits',
		'%s seems to be the last editor to the page %s': '%s seems to be the last editor to the page %s',
		rss: 'rss',
		// diff previews
		'Diff truncated for performance reasons': 'Diff truncated for performance reasons',
		'Old revision': 'Old revision',
		'New revision': 'New revision',
		'Something went wrong :-(': 'Something went wrong :-(',
		'Empty revision, maybe non-existent': 'Empty revision, maybe non-existent',
		'Unknown date': 'Unknown date',
		// other special previews
		'Empty category': 'Empty category',
		'Category members (%s shown)': 'Category members (%s shown)',
		'No image links found': 'No image links found',
		'File links': 'File links',
		'No image found': 'No image found',
		'Image from Commons': 'Image from Commons',
		'Description page': 'Description page',
		'Alt text:': 'Alt text:',
		revdel: 'Hidden revision',
		// user-related actions and info
		user: 'user',
		'user&nbsp;page': 'user&nbsp;page',
		'user talk': 'user talk',
		'edit user talk': 'edit user talk',
		'leave comment': 'leave comment',
		email: 'email',
		'email user': 'email user',
		EmailuserHint: 'Send an email to %s',
		space: 'space',
		PrefixIndexHint: 'Show pages in the userspace of %s',
		count: 'count',
		'edit counter': 'edit counter',
		editCounterLinkHint: 'Count the contributions made by %s',
		contribs: 'contribs',
		contributions: 'contributions',
		deletedContribs: 'deleted contributions',
		DeletedcontributionsHint: 'List deleted edits made by %s',
		ContributionsHint: 'List the contributions made by %s',
		log: 'log',
		'user log': 'user log',
		userLogHint: "Show %s's user log",
		arin: 'ARIN lookup',
		'Look up %s in ARIN whois database': 'Look up %s in the ARIN whois database',
		unblockShort: 'un',
		block: 'block',
		'block user': 'block user',
		IpblocklistHint: 'Unblock %s',
		BlockipHint: 'Prevent %s from editing',
		'block log': 'block log',
		blockLogHint: 'Show the block log for %s',
		protectLogHint: 'Show the protection log for %s',
		pageLogHint: 'Show the page log for %s',
		deleteLogHint: 'Show the deletion log for %s',
		'Invalid %s %s': 'The option %s is invalid: %s',
		'No backlinks found': 'No backlinks found',
		' and more': ' and more',
		undo: 'undo',
		undoHint: 'undo this edit',
		'Download preview data': 'Download preview data',
		'Invalid or IP user': 'Invalid or IP user',
		'Not a registered username': 'Not a registered username',
		BLOCKED: 'BLOCKED',
		'Has blocks': 'Has blocks',
		' edits since: ': ' edits since: ',
		'last edit on ': 'last edit on ',
		'he/him': 'he/him',
		'she/her': 'she/her',
		// Autoediting
		'Enter a non-empty edit summary or press cancel to abort':
			'Enter a non-empty edit summary or press cancel to abort',
		'Failed to get revision information, please edit manually.\n\n':
			'Failed to get revision information, please edit manually.\n\n',
		'The %s button has been automatically clicked. Please wait for the next page to load.':
			'The %s button has been automatically clicked. Please wait for the next page to load.',
		'Could not find button %s. Please check the settings in your javascript file.':
			'Could not find button %s. Please check the settings in your javascript file.',
		// Popups setup
		'Open full-size image': 'Open full-size image',
		autoedit_version: 'np20140416',
	};
	const popupString = (str) => {
		if (popupStrings !== undefined && popupStrings && popupStrings[str]) {
			return popupStrings[str];
		}
		if (pg.string[str]) {
			return pg.string[str];
		}
		return str;
	};
	const tprintf = (str, subs) => {
		if (typeof subs !== typeof []) {
			subs = [subs];
		}
		return simplePrintf(popupString(str), subs);
	};
	// ENDFILE: strings.js
	// STARTFILE: run.js
	// Run things
	// For some reason popups requires a fully loaded page jQuery.ready(...) causes problems for some.
	// The old addOnloadHook did something similar to the below
	if (document.readyState === 'complete') {
		autoEdit();
	} else {
		// will setup popups
		$(window).on('load', autoEdit);
	}
	// Support for MediaWiki's live preview, VisualEditor's saves and Echo's flyout.
	(() => {
		let once = true;
		const dynamicContentHandler = ($content) => {
			// Try to detect the hook fired on initial page load and disregard
			// it, we already hook to onload (possibly to different parts of
			// page - it's configurable) and running twice might be bad. Ugly...
			if ($content.attr('id') === 'mw-content-text' && once) {
				once = false;
				return;
			}
			const registerHooksForVisibleNavpops = () => {
				for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
					const navpop = pg.current.links[i].navpopup;
					if (!navpop || !navpop.isVisible()) {
						continue;
					}
					Navpopup.tracker.addHook(posCheckerHook(navpop));
				}
			};
			const doIt = () => {
				registerHooksForVisibleNavpops();
				$content.each((_index, element) => {
					element.ranSetupTooltipsAlready = false;
					setupTooltips(element);
				});
			};
			setupPopups(doIt);
		};
		// This hook is also fired after page load.
		mw.hook('wikipage.content').add(dynamicContentHandler);
		mw.hook('ext.echo.overlay.beforeShowingOverlay').add(($overlay) => {
			dynamicContentHandler($overlay.find('.mw-echo-state'));
		});
	})();
	// ENDFILE: run.js
};
