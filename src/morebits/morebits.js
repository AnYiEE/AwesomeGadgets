// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - morebits.js */

/**
 * A library full of lots of goodness for user scripts on MediaWiki wikis.
 *
 * The highlights include:
 * - {@link Morebits.wiki.api} - make calls to the MediaWiki API
 * - {@link Morebits.wiki.page} - modify pages on the wiki (edit, revert, delete, etc.)
 * - {@link Morebits.date} - enhanced date object processing, sort of a light moment.js
 * - {@link Morebits.quickForm} - generate quick HTML forms on the fly
 * - {@link Morebits.simpleWindow} - a wrapper for jQuery UI Dialog with a custom look and extra features
 * - {@link Morebits.status} - a rough-and-ready status message displayer, used by the Morebits.wiki classes
 * - {@link Morebits.wikitext} - utilities for dealing with wikitext
 * - {@link Morebits.string} - utilities for manipulating strings
 * - {@link Morebits.array} - utilities for manipulating arrays
 * - {@link Morebits.ip} - utilities to help process IP addresses
 *
 * Dependencies:
 * - The whole thing relies on jQuery.  But most wikis should provide this by default.
 * - {@link Morebits.quickForm}, {@link Morebits.simpleWindow}, and {@link Morebits.status} rely on the "morebits.css" file for their styling.
 * - {@link Morebits.simpleWindow} and {@link Morebits.quickForm} tooltips rely on jQuery UI Dialog (from ResourceLoader module name 'jquery.ui').
 * - To create a gadget based on morebits.js, use this syntax in MediaWiki:Gadgets-definition:
 *     - `*GadgetName[ResourceLoader|dependencies=mediawiki.user,mediawiki.util,mediawiki.Title,jquery.ui]|morebits.js|morebits.css|GadgetName.js`
 * - Alternatively, you can configure morebits.js as a hidden gadget in MediaWiki:Gadgets-definition:
 *     - `*morebits[ResourceLoader|dependencies=mediawiki.user,mediawiki.util,mediawiki.Title,jquery.ui|hidden]|morebits.js|morebits.css`
 *     and then load ext.gadget.morebits as one of the dependencies for the new gadget.
 *
 * All the stuff here works on all browsers for which MediaWiki provides JavaScript support.
 *
 * This library is maintained by the maintainers of Twinkle.
 * For queries, suggestions, help, etc., head to [Help:Twinkle](https://youshou.wiki/wiki/H:TW).
 * The latest development source is available at {@link https://github.com/wikimedia-gadgets/twinkle/blob/master/morebits.js|GitHub}.
 *
 * @param {JQuery} $
 * @namespace Morebits
 */
import './morebits.less';

(function morebits($) {
	// Wrap entire file with anonymous function
	/** @lends Morebits */
	const Morebits = {};
	window.Morebits = Morebits; // allow global access
	// No Morebits.i18n at this time
	/**
	 * Wiki-specific configurations for Morebits
	 */
	Morebits.l10n = {
		/**
		 * Local aliases for "redirect" magic word.
		 * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
		 */
		redirectTagAliases: ['#REDIRECT', '#重定向'],
		/**
		 * Takes a string as argument and checks if it is a timestamp or not
		 * If not, it returns null. If yes, it returns an array of integers
		 * in the format [year, month, date, hour, minute, second]
		 * which can be passed to Date.UTC()
		 *
		 * @param {string} str
		 * @returns {number[] | null}
		 */
		signatureTimestampFormat: (str) => {
			const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/; // YYYY年Month月DD日 (w) HH:mm (UTC)
			const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/; // YYYY年Month月DD日 (w) HH:mm (CST)
			const match = rgxUTC.exec(str) || rgxCST.exec(str);
			const matchCST = rgxCST.exec(str);
			if (!match) {
				return null;
			}
			const month = Morebits.date.localeData.months.indexOf(match[4]);
			if (month === -1) {
				return null;
			}
			// ..... year .... month ... date .... hour ... minute
			return matchCST
				? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]]
				: [match[1], match[2] - 1, match[3], match[4], match[5]];
		},
	};
	/**
	 * Simple helper function to see what groups a user might belong.
	 *
	 * @param {string} group - e.g. `sysop`, `autoconfirmed`, etc.
	 * @returns {boolean}
	 */
	Morebits.userIsInGroup = (group) => {
		return mw.config.get('wgUserGroups').includes(group);
	};
	/**
	 * Hardcodes whether the user is a sysop, used a lot.
	 *
	 * @type {boolean}
	 */
	Morebits.userIsSysop = Morebits.userIsInGroup('sysop') || Morebits.userIsInGroup('steward');
	/**
	 * Deprecated as of February 2021, use {@link Morebits.ip.sanitizeIPv6}.
	 *
	 * @deprecated Use {@link Morebits.ip.sanitizeIPv6}.
	 * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
	 * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
	 * function from the IPUtils library.  Addresses are verbose, uppercase,
	 * normalized, and expanded to 8 words.
	 *
	 * @param {string} address - The IPv6 address, with or without CIDR.
	 * @returns {string}
	 */
	Morebits.sanitizeIPv6 = (address) => {
		console.warn(
			'NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead'
		);
		return Morebits.ip.sanitizeIPv6(address);
	};
	/**
	 * Determines whether the current page is a redirect or soft redirect. Fails
	 * to detect soft redirects on edit, history, etc. pages.  Will attempt to
	 * detect Module:RfD, with the same failure points.
	 *
	 * @returns {boolean}
	 */
	Morebits.isPageRedirect = () => {
		const $body = $('body');
		return !!(
			mw.config.get('wgIsRedirect') ||
			document.querySelector('#softredirect') ||
			$body.find('.box-RfD').length ||
			$body.find('.box-Redirect_category_shell').length
		);
	};
	/**
	 * Stores a normalized (underscores converted to spaces) version of the
	 * `wgPageName` variable.
	 *
	 * @type {string}
	 */
	Morebits.pageNameNorm = mw.config.get('wgPageName').replace(/_/g, ' ');
	/**
	 * Create a string for use in regex matching a page name.  Accounts for
	 * leading character's capitalization, underscores as spaces, and special
	 * characters being escaped.  See also {@link Morebits.namespaceRegex}.
	 *
	 * @param {string} pageName - Page name without namespace.
	 * @returns {string} - For a page name `Foo bar`, returns the string `[Ff]oo[_ ]bar`.
	 */
	Morebits.pageNameRegex = (pageName) => {
		if (pageName === '') {
			return '';
		}
		const [firstChar] = pageName;
		const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
		if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
			return `[${mw.Title.phpCharToUpper(firstChar)}${firstChar.toLowerCase()}]${remainder}`;
		}
		return Morebits.string.escapeRegExp(firstChar) + remainder;
	};
	/**
	 * Converts string or array of DOM nodes into an HTML fragment.
	 * Wikilink syntax (`[[...]]`) is transformed into HTML anchor.
	 * Used in Morebits.quickForm and Morebits.status
	 *
	 * @internal
	 * @param {string|Node|(string|Node)[]} input
	 * @returns {DocumentFragment}
	 */
	Morebits.createHtml = (input) => {
		const fragment = document.createDocumentFragment();
		if (!input) {
			return fragment;
		}
		if (!Array.isArray(input)) {
			input = [input];
		}
		for (const element of input) {
			if (element instanceof Node) {
				fragment.appendChild(element);
			} else {
				for (const node of $.parseHTML(Morebits.createHtml.renderWikilinks(element))) {
					fragment.appendChild(node);
				}
			}
		}
		return fragment;
	};
	/**
	 * Converts wikilinks to HTML anchor tags.
	 *
	 * @param text
	 * @returns {*}
	 */
	Morebits.createHtml.renderWikilinks = (text) => {
		const ub = new Morebits.unbinder(text);
		// Don't convert wikilinks within code tags as they're used for displaying wiki-code
		ub.unbind('<code>', '</code>');
		ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
			if (!target) {
				target = text_;
			}
			return `<a rel="noopener" target="_blank" href="${mw.util.getUrl(target)}" title="${target.replace(
				/"/g,
				'&#34;'
			)}">${text_}</a>`;
		});
		return ub.rebind();
	};
	/**
	 * Create a string for use in regex matching all namespace aliases, regardless
	 * of the capitalization and underscores/spaces.  Doesn't include the optional
	 * leading `:`, but if there's more than one item, wraps the list in a
	 * non-capturing group.  This means you can do `Morebits.namespaceRegex([4]) +
	 * ':' + Morebits.pageNameRegex('Twinkle')` to match a full page.  Uses
	 * {@link Morebits.pageNameRegex}.
	 *
	 * @param {number[]} namespaces - Array of namespace numbers.  Unused/invalid
	 * namespace numbers are silently discarded.
	 * @example
	 * // returns '(?:[Ff][Ii][Ll][Ee]|[Ii][Mm][Aa][Gg][Ee])'
	 * Morebits.namespaceRegex([6])
	 * @returns {string} - Regex-suitable string of all namespace aliases.
	 */
	Morebits.namespaceRegex = (namespaces) => {
		if (!Array.isArray(namespaces)) {
			namespaces = [namespaces];
		}
		const aliases = [];
		let regex;
		for (const [name, number] of Object.entries(mw.config.get('wgNamespaceIds'))) {
			if (namespaces.includes(number)) {
				// Namespaces are completely agnostic as to case,
				// and a regex string is more useful/compatible than a RegExp object,
				// so we accept any casing for any letter.
				aliases.push(
					[...name]
						.map((char) => {
							return Morebits.pageNameRegex(char);
						})
						.join('')
				);
			}
		}
		switch (aliases.length) {
			case 0:
				regex = '';
				break;
			case 1:
				[regex] = aliases;
				break;
			default:
				regex = `(?:${aliases.join('|')})`;
				break;
		}
		return regex;
	};
	/* **************** Morebits.quickForm **************** */
	/**
	 * Creation of simple and standard forms without much specific coding.
	 *
	 * @namespace Morebits.quickForm
	 * @memberof Morebits
	 * @class
	 * @param {event} event - Function to execute when form is submitted.
	 * @param {string} [eventType=submit] - Type of the event.
	 */
	Morebits.quickForm = function (event, eventType) {
		this.root = new Morebits.quickForm.element({
			type: 'form',
			event,
			eventType,
		});
	};
	/**
	 * Renders the HTML output of the quickForm.
	 *
	 * @memberof Morebits.quickForm
	 * @returns {HTMLElement}
	 */
	Morebits.quickForm.prototype.render = function () {
		const ret = this.root.render();
		ret.names = {};
		return ret;
	};
	/**
	 * Append element to the form.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(object|Morebits.quickForm.element)} data - A quickform element, or the object with which
	 * a quickform element is constructed.
	 * @returns {Morebits.quickForm.element} - Same as what is passed to the function.
	 */
	Morebits.quickForm.prototype.append = function (data) {
		return this.root.append(data);
	};
	/**
	 * Create a new element for the the form.
	 *
	 * Index to Morebits.quickForm.element types:
	 * - Global attributes: id, className, style, tooltip, extra, $data, adminonly
	 * - `select`: A combo box (aka drop-down).
	 *     - Attributes: name, label, multiple, size, list, event, disabled
	 *  - `option`: An element for a combo box.
	 *      - Attributes: value, label, selected, disabled
	 *  - `optgroup`: A group of "option"s.
	 *      - Attributes: label, list
	 *  - `field`: A fieldset (aka group box).
	 *      - Attributes: name, label, disabled
	 *  - `checkbox`: A checkbox. Must use "list" parameter.
	 *      - Attributes: name, list, event
	 *      - Attributes (within list): name, label, value, checked, disabled, event, subgroup
	 *  - `radio`: A radio button. Must use "list" parameter.
	 *      - Attributes: name, list, event
	 *      - Attributes (within list): name, label, value, checked, disabled, event, subgroup
	 *  - `input`: A text input box.
	 *      - Attributes: name, label, value, size, placeholder, maxlength, disabled, required, readonly, event
	 *  - `number`: A number input box.
	 *      - Attributes: Everything the text `input` has, as well as: min, max, step, list
	 *  - `dyninput`: A set of text boxes with "Remove" buttons and an "Add" button.
	 *      - Attributes: name, label, min, max, sublabel, value, size, maxlength, event
	 *  - `hidden`: An invisible form field.
	 *      - Attributes: name, value
	 *  - `header`: A level 5 header.
	 *      - Attributes: label
	 *  - `div`: A generic placeholder element or label.
	 *      - Attributes: name, label
	 *  - `submit`: A submit button. Morebits.simpleWindow moves these to the footer of the dialog.
	 *      - Attributes: name, label, disabled
	 *  - `button`: A generic button.
	 *      - Attributes: name, label, disabled, event
	 *  - `textarea`: A big, multi-line text box.
	 *      - Attributes: name, label, value, cols, rows, disabled, required, readonly
	 *  - `fragment`: A DocumentFragment object.
	 *      - No attributes, and no global attributes except adminonly.
	 * There is some difference on how types handle the `label` attribute:
	 * - `div`, `select`, `field`, `checkbox`/`radio`, `input`, `textarea`, `header`, and `dyninput` can accept an array of items,
	 * and the label item(s) can be `Element`s.
	 * - `option`, `optgroup`, `_dyninput_element`, `submit`, and `button` accept only a single string.
	 *
	 * @memberof Morebits.quickForm
	 * @class
	 * @param {Object} data - Object representing the quickform element. Should
	 * specify one of the available types from the index above, as well as any
	 * relevant and available attributes.
	 * @example new Morebits.quickForm.element({
	 *     name: 'target',
	 *     type: 'input',
	 *     label: 'Your target:',
	 *     tooltip: 'Enter your target. Required.',
	 *     required: true
	 * });
	 */
	Morebits.quickForm.element = function (data) {
		this.data = data;
		this.childs = [];
	};
	/**
	 * @memberof Morebits.quickForm.element
	 * @type {number}
	 */
	Morebits.quickForm.element.id = 0;
	/**
	 * Appends an element to current element.
	 *
	 * @memberof Morebits.quickForm.element
	 * @param {Morebits.quickForm.element} data - A quickForm element or the object required to
	 * create the quickForm element.
	 * @returns {Morebits.quickForm.element} The same element passed in.
	 */
	Morebits.quickForm.element.prototype.append = function (data) {
		let child;
		if (data instanceof Morebits.quickForm.element) {
			child = data;
		} else {
			child = new Morebits.quickForm.element(data);
		}
		this.childs.push(child);
		return child;
	};
	/**
	 * Renders the HTML output for the quickForm element.  This should be called
	 * without parameters: `form.render()`.
	 *
	 * @param {number} internalSubgroupId
	 * @memberof Morebits.quickForm.element
	 * @returns {HTMLElement}
	 */
	Morebits.quickForm.element.prototype.render = function (internalSubgroupId) {
		const currentNode = this.compute(this.data, internalSubgroupId);
		for (let i = 0; i < this.childs.length; ++i) {
			// do not pass internal_subgroup_id to recursive calls
			currentNode[1].appendChild(this.childs[i].render());
		}
		return currentNode[0];
	};
	/**
	 * @param {*} data
	 * @param {number} inId
	 * @memberof Morebits.quickForm.element
	 */
	Morebits.quickForm.element.prototype.compute = function (data, inId) {
		let node;
		let childContainer = null;
		let label;
		const id = `${inId ? `${inId}_` : ''}node_${Morebits.quickForm.element.id++}`;
		if (data.adminonly && !Morebits.userIsSysop) {
			// hell hack alpha
			data.type = 'hidden';
		}
		let i;
		let current;
		let subnode;
		switch (data.type) {
			case 'form':
				node = document.createElement('form');
				node.className = 'quickform';
				// eslint-disable-next-line no-script-url
				node.setAttribute('action', 'javascript:void(0);');
				if (data.event) {
					node.addEventListener(data.eventType || 'submit', data.event, false);
				}
				break;
			case 'fragment':
				node = document.createDocumentFragment();
				// fragments can't have any attributes, so just return it straight away
				return [node, node];
			case 'select': {
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.setAttribute('for', id);
					label.appendChild(Morebits.createHtml(data.label));
					// No margin
				}

				const select = node.appendChild(document.createElement('select'));
				if (data.event) {
					select.addEventListener('change', data.event, false);
				}
				if (data.multiple) {
					select.setAttribute('multiple', 'multiple');
				}
				if (data.size) {
					select.setAttribute('size', data.size);
				}
				if (data.disabled) {
					select.disabled = true;
				}
				select.setAttribute('name', data.name);
				if (data.list) {
					for (i = 0; i < data.list.length; ++i) {
						current = data.list[i];
						if (current.list) {
							current.type = 'optgroup';
						} else {
							current.type = 'option';
						}
						subnode = this.compute(current);
						select.appendChild(subnode[0]);
					}
				}
				childContainer = select;
				break;
			}
			case 'option':
				node = document.createElement('option');
				node.values = data.value;
				node.setAttribute('value', data.value);
				if (data.selected) {
					node.setAttribute('selected', 'selected');
				}
				if (data.disabled) {
					node.disabled = true;
				}
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				node.setAttribute('label', data.label);
				node.appendChild(document.createTextNode(data.label));
				break;
			case 'optgroup':
				node = document.createElement('optgroup');
				node.setAttribute('label', data.label);
				if (data.list) {
					for (i = 0; i < data.list.length; ++i) {
						current = data.list[i];
						current.type = 'option'; // must be options here
						subnode = this.compute(current);
						node.appendChild(subnode[0]);
					}
				}
				break;
			case 'field':
				node = document.createElement('fieldset');
				label = node.appendChild(document.createElement('legend'));
				label.appendChild(Morebits.createHtml(data.label));
				if (data.name) {
					node.setAttribute('name', data.name);
				}
				if (data.disabled) {
					node.disabled = true;
				}
				break;
			case 'checkbox':
			case 'radio':
				node = document.createElement('div');
				if (data.list) {
					for (i = 0; i < data.list.length; ++i) {
						const curId = `${id}_${i}`;
						current = data.list[i];
						let curDiv;
						if (current.type === 'header') {
							// inline hack
							curDiv = node.appendChild(document.createElement('h6'));
							curDiv.appendChild(document.createTextNode(current.label));
							if (current.tooltip) {
								Morebits.quickForm.element.generateTooltip(curDiv, current);
							}
							continue;
						}
						curDiv = node.appendChild(document.createElement('div'));
						// Add hidden attr
						if (current.hidden) {
							curDiv.setAttribute('hidden', '');
						}
						subnode = curDiv.appendChild(document.createElement('input'));
						subnode.values = current.value;
						subnode.setAttribute('value', current.value);
						subnode.setAttribute('type', data.type);
						subnode.setAttribute('id', curId);
						subnode.setAttribute('name', current.name || data.name);
						// If name is provided on the individual checkbox, add a data-single
						// attribute which indicates it isn't part of a list of checkboxes with
						// same name. Used in getInputData()
						if (current.name) {
							subnode.setAttribute('data-single', 'data-single');
						}
						if (current.checked) {
							subnode.checked = true;
						}
						if (current.disabled) {
							subnode.disabled = true;
						}
						label = curDiv.appendChild(document.createElement('label'));
						label.appendChild(Morebits.createHtml(current.label));
						label.setAttribute('for', curId);
						if (current.tooltip) {
							Morebits.quickForm.element.generateTooltip(label, current);
						}
						// styles go on the label, doesn't make sense to style a checkbox/radio
						if (current.style) {
							label.setAttribute('style', current.style);
						}
						let event;
						if (current.subgroup) {
							let tmpgroup = current.subgroup;
							if (!Array.isArray(tmpgroup)) {
								tmpgroup = [tmpgroup];
							}
							const subgroupRaw = new Morebits.quickForm.element({
								type: 'div',
								id: `${id}_${i}_subgroup`,
							});
							for (const el of tmpgroup) {
								const newEl = {
									...el,
								};
								if (!newEl.type) {
									newEl.type = data.type;
								}
								newEl.name = `${current.name || data.name}.${newEl.name}`;
								subgroupRaw.append(newEl);
							}
							const subgroup = subgroupRaw.render(curId);
							subgroup.className = 'quickformSubgroup';
							subnode.subgroup = subgroup;
							subnode.shown = false;
							event = (e) => {
								if (e.target.checked) {
									e.target.parentNode.appendChild(e.target.subgroup);
									if (e.target.type === 'radio') {
										const {name} = e.target;
										if (e.target.form.names[name] !== undefined) {
											e.target.form.names[name].parentNode.removeChild(
												e.target.form.names[name].subgroup
											);
										}
										e.target.form.names[name] = e.target;
									}
								} else {
									e.target.parentNode.removeChild(e.target.subgroup);
								}
							};
							subnode.addEventListener('change', event, true);
							if (current.checked) {
								subnode.parentNode.appendChild(subgroup);
							}
						} else if (data.type === 'radio') {
							event = (e) => {
								if (e.target.checked) {
									const {name} = e.target;
									if (e.target.form.names[name] !== undefined) {
										e.target.form.names[name].parentNode.removeChild(
											e.target.form.names[name].subgroup
										);
									}
									delete e.target.form.names[name];
								}
							};
							subnode.addEventListener('change', event, true);
						}
						// add users' event last, so it can interact with the subgroup
						if (data.event) {
							subnode.addEventListener('change', data.event, false);
						} else if (current.event) {
							subnode.addEventListener('change', current.event, true);
						}
					}
				}
				if (data.shiftClickSupport && data.type === 'checkbox') {
					Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
				}
				break;
			// input is actually a text-type, so number here inherits the same stuff
			case 'number':
			case 'input':
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.appendChild(Morebits.createHtml(data.label));
					label.setAttribute('for', data.id || id);
					// No margin
				}

				subnode = node.appendChild(document.createElement('input'));
				// Add value and placeholder attrs
				if (data.value) {
					subnode.setAttribute('value', data.value);
				}
				if (data.placeholder) {
					subnode.setAttribute('placeholder', data.placeholder);
				}
				subnode.setAttribute('name', data.name);
				if (data.type === 'input') {
					subnode.setAttribute('type', 'text');
				} else {
					subnode.setAttribute('type', 'number');
					for (const att of ['min', 'max', 'step', 'list']) {
						if (data[att]) {
							subnode.setAttribute(att, data[att]);
						}
					}
				}
				for (const att of ['value', 'size', 'placeholder', 'maxlength']) {
					if (data[att]) {
						subnode.setAttribute(att, data[att]);
					}
				}
				for (const att of ['disabled', 'required', 'readonly']) {
					if (data[att]) {
						subnode.setAttribute(att, att);
					}
				}
				if (data.event) {
					subnode.addEventListener('keyup', data.event, false);
				}
				childContainer = subnode;
				break;
			case 'dyninput': {
				const min = data.min || 1;
				const max = data.max || Number.POSITIVE_INFINITY;
				node = document.createElement('div');
				label = node.appendChild(document.createElement('h5'));
				label.appendChild(Morebits.createHtml(data.label));
				const listNode = node.appendChild(document.createElement('div'));
				const more = this.compute({
					type: 'button',
					label: '更多',
					disabled: min >= max,
					event: (e) => {
						const newNode = new Morebits.quickForm.element(e.target.sublist);
						e.target.area.appendChild(newNode.render());
						if (++e.target.counter >= e.target.max) {
							e.target.disabled = true;
						}
						e.stopPropagation();
					},
				});
				node.appendChild(more[0]);
				const [, moreButton] = more;
				const sublist = {
					type: '_dyninput_element',
					label: data.sublabel || data.label,
					name: data.name,
					value: data.value,
					size: data.size,
					remove: false,
					maxlength: data.maxlength,
					event: data.event,
				};
				for (i = 0; i < min; ++i) {
					const elem = new Morebits.quickForm.element(sublist);
					listNode.appendChild(elem.render());
				}
				sublist.remove = true;
				sublist.morebutton = moreButton;
				sublist.listnode = listNode;
				moreButton.sublist = sublist;
				moreButton.area = listNode;
				moreButton.max = max - min;
				moreButton.counter = 0;
				break;
			}
			case '_dyninput_element':
				// Private, similar to normal input
				node = document.createElement('div');
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.appendChild(document.createTextNode(data.label));
					label.setAttribute('for', id);
					// No margin
				}

				subnode = node.appendChild(document.createElement('input'));
				if (data.value) {
					subnode.setAttribute('value', data.value);
				}
				subnode.setAttribute('name', data.name);
				subnode.setAttribute('type', 'text');
				if (data.size) {
					subnode.setAttribute('size', data.size);
				}
				if (data.maxlength) {
					subnode.setAttribute('maxlength', data.maxlength);
				}
				if (data.event) {
					subnode.addEventListener('keyup', data.event, false);
				}
				if (data.remove) {
					const remove = this.compute({
						type: 'button',
						label: '移除',
						event: (e) => {
							const list = e.target.listnode;
							const node_ = e.target.inputnode;
							const more = e.target.morebutton;
							list.removeChild(node_);
							--more.counter;
							more.removeAttribute('disabled');
							e.stopPropagation();
						},
					});
					node.appendChild(remove[0]);
					const [, removeButton] = remove;
					removeButton.inputnode = node;
					removeButton.listnode = data.listnode;
					removeButton.morebutton = data.morebutton;
				}
				break;
			case 'hidden':
				node = document.createElement('input');
				node.setAttribute('type', 'hidden');
				node.values = data.value;
				node.setAttribute('value', data.value);
				node.setAttribute('name', data.name);
				break;
			case 'header':
				node = document.createElement('h5');
				node.appendChild(Morebits.createHtml(data.label));
				break;
			case 'div':
				node = document.createElement('div');
				if (data.name) {
					node.setAttribute('name', data.name);
				}
				if (data.label) {
					const result = document.createElement('span');
					result.className = 'quickformDescription';
					result.appendChild(Morebits.createHtml(data.label));
					node.appendChild(result);
				}
				break;
			case 'submit':
				node = document.createElement('span');
				childContainer = node.appendChild(document.createElement('input'));
				childContainer.setAttribute('type', 'submit');
				if (data.label) {
					childContainer.setAttribute('value', data.label);
				}
				childContainer.setAttribute('name', data.name || 'submit');
				if (data.disabled) {
					childContainer.disabled = true;
				}
				break;
			case 'button':
				node = document.createElement('span');
				childContainer = node.appendChild(document.createElement('input'));
				childContainer.setAttribute('type', 'button');
				if (data.label) {
					childContainer.setAttribute('value', data.label);
				}
				childContainer.setAttribute('name', data.name);
				if (data.disabled) {
					childContainer.disabled = true;
				}
				if (data.event) {
					childContainer.addEventListener('click', data.event, false);
				}
				break;
			case 'textarea':
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				if (data.label) {
					label = node.appendChild(document.createElement('h5'));
					const labelElement = document.createElement('label');
					labelElement.appendChild(Morebits.createHtml(data.label));
					labelElement.setAttribute('for', data.id || id);
					label.appendChild(labelElement);
				}
				subnode = node.appendChild(document.createElement('textarea'));
				subnode.setAttribute('name', data.name);
				if (data.cols) {
					subnode.setAttribute('cols', data.cols);
				}
				if (data.rows) {
					subnode.setAttribute('rows', data.rows);
				}
				if (data.disabled) {
					subnode.disabled = true;
				}
				if (data.required) {
					subnode.setAttribute('required', 'required');
				}
				if (data.readonly) {
					subnode.setAttribute('readonly', 'readonly');
				}
				if (data.value) {
					subnode.value = data.value;
				}
				// Add placeholder attr
				if (data.placeholder) {
					subnode.placeholder = data.placeholder;
				}
				childContainer = subnode;
				break;
			default:
				throw new Error(`Morebits.quickForm: unknown element type ${data.type.toString()}`);
		}
		if (!childContainer) {
			childContainer = node;
		}
		if (data.tooltip) {
			Morebits.quickForm.element.generateTooltip(label || node, data);
		}
		if (data.extra) {
			childContainer.extra = data.extra;
		}
		if (data.$data) {
			$(childContainer).data(data.$data);
		}
		if (data.style) {
			childContainer.setAttribute('style', data.style);
		}
		if (data.className) {
			childContainer.className = childContainer.className
				? `${childContainer.className} ${data.className}`
				: data.className;
		}
		childContainer.setAttribute('id', data.id || id);
		return [node, childContainer];
	};
	/**
	 * Create a jQuery UI-based tooltip.
	 *
	 * @memberof Morebits.quickForm.element
	 * @requires jquery.ui
	 * @param {HTMLElement} node - The HTML element beside which a tooltip is to be generated.
	 * @param {Object} data - Tooltip-related configuration data.
	 */
	Morebits.quickForm.element.generateTooltip = (node, data) => {
		const tooltipButton = node.appendChild(document.createElement('span'));
		tooltipButton.className = 'morebits-tooltipButton';
		tooltipButton.title = data.tooltip; // Provides the content for jQuery UI
		tooltipButton.appendChild(document.createTextNode('?'));
		$(tooltipButton).tooltip({
			position: {
				my: 'left top',
				at: 'center bottom',
				collision: 'flipfit',
			},
			// Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
			tooltipClass: 'morebits-ui-tooltip',
		});
	};
	// Some utility methods for manipulating quickForms after their creation:
	// (None of these work for "dyninput" type fields at present)
	/**
	 * Returns an object containing all filled form data entered by the user, with the object
	 * keys being the form element names. Disabled fields will be ignored, but not hidden fields.
	 *
	 * @memberof Morebits.quickForm
	 * @param {HTMLFormElement} form
	 * @returns {Object} With field names as keys, input data as values.
	 */
	Morebits.quickForm.getInputData = (form) => {
		const result = {};
		for (const field of form.elements) {
			if (field.disabled || !field.name || !field.type || field.type === 'submit' || field.type === 'button') {
				continue;
			}
			// For elements in subgroups, quickform prepends element names with
			// name of the parent group followed by a period, get rid of that.
			const fieldNameNorm = field.name.slice(field.name.indexOf('.') + 1);
			switch (field.type) {
				case 'radio':
					if (field.checked) {
						result[fieldNameNorm] = field.value;
					}
					break;
				case 'checkbox':
					if (field.dataset.single) {
						result[fieldNameNorm] = field.checked; // boolean
					} else {
						result[fieldNameNorm] ||= [];
						if (field.checked) {
							result[fieldNameNorm].push(field.value);
						}
					}
					break;
				case 'select-multiple':
					result[fieldNameNorm] = $(field).val(); // field.value doesn't work
					break;
				case 'text': // falls through
				case 'textarea':
					result[fieldNameNorm] = field.value.trim();
					break;
				default:
					// could be select-one, date, number, email, etc
					if (field.value) {
						result[fieldNameNorm] = field.value;
					}
					break;
			}
		}
		return result;
	};
	/**
	 * Returns all form elements with a given field name or ID.
	 *
	 * @memberof Morebits.quickForm
	 * @param {HTMLFormElement} form
	 * @param {string} fieldName - The name or id of the fields.
	 * @returns {HTMLElement[]} - Array of matching form elements.
	 */
	Morebits.quickForm.getElements = (form, fieldName) => {
		const $form = $(form);
		fieldName = $.escapeSelector(fieldName); // sanitize input
		let $elements = $form.find(`[name="${fieldName}"]`);
		if ($elements.length > 0) {
			return $elements.toArray();
		}
		$elements = $form.find(`#${fieldName}`);
		return $elements.toArray();
	};
	/**
	 * Searches the array of elements for a checkbox or radio button with a certain
	 * `value` attribute, and returns the first such element. Returns null if not found.
	 *
	 * @memberof Morebits.quickForm
	 * @param {HTMLInputElement[]} elementArray - Array of checkbox or radio elements.
	 * @param {string} value - Value to search for.
	 * @returns {HTMLInputElement}
	 */
	Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
		const found = elementArray.filter((element) => {
			return element.value === value;
		});
		if (found.length > 0) {
			return found[0];
		}
		return null;
	};
	/**
	 * Returns the &lt;div> containing the form element, or the form element itself
	 * May not work as expected on checkboxes or radios.
	 *
	 * @memberof Morebits.quickForm
	 * @param {HTMLElement} element
	 * @returns {HTMLElement}
	 */
	Morebits.quickForm.getElementContainer = (element) => {
		// for divs, headings and fieldsets, the container is the element itself
		if (
			element instanceof HTMLFieldSetElement ||
			element instanceof HTMLDivElement ||
			element instanceof HTMLHeadingElement
		) {
			return element;
		}
		// for others, just return the parent node
		return element.parentNode;
	};
	/**
	 * Gets the HTML element that contains the label of the given form element
	 * (mainly for internal use).
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|Morebits.quickForm.element)} element
	 * @returns {HTMLElement}
	 */
	Morebits.quickForm.getElementLabelObject = (element) => {
		// for buttons, divs and headers, the label is on the element itself
		if (
			element.type === 'button' ||
			element.type === 'submit' ||
			element instanceof HTMLDivElement ||
			element instanceof HTMLHeadingElement
		) {
			return element;
			// for fieldsets, the label is the child <legend> element
		} else if (element instanceof HTMLFieldSetElement) {
			return element.querySelector('legend');
			// for textareas, the label is the sibling <h5> element
		} else if (element instanceof HTMLTextAreaElement) {
			return element.parentNode.querySelector('h5');
		}
		// for others, the label is the sibling <label> element
		return element.parentNode.querySelector('label');
	};
	/**
	 * Gets the label text of the element.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|Morebits.quickForm.element)} element
	 * @returns {string}
	 */
	Morebits.quickForm.getElementLabel = (element) => {
		const labelElement = Morebits.quickForm.getElementLabelObject(element);
		if (!labelElement) {
			return null;
		}
		return labelElement.firstChild.textContent;
	};
	/**
	 * Sets the label of the element to the given text.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|Morebits.quickForm.element)} element
	 * @param {string} labelText
	 * @returns {boolean} True if succeeded, false if the label element is unavailable.
	 */
	Morebits.quickForm.setElementLabel = (element, labelText) => {
		const labelElement = Morebits.quickForm.getElementLabelObject(element);
		if (!labelElement) {
			return false;
		}
		labelElement.firstChild.textContent = labelText;
		return true;
	};
	/**
	 * Stores the element's current label, and temporarily sets the label to the given text.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|Morebits.quickForm.element)} element
	 * @param {string} temporaryLabelText
	 * @returns {boolean} `true` if succeeded, `false` if the label element is unavailable.
	 */
	Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
		if (!element.hasAttribute('data-oldlabel')) {
			element.setAttribute('data-oldlabel', Morebits.quickForm.getElementLabel(element));
		}
		return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
	};
	/**
	 * Restores the label stored by overrideElementLabel.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|Morebits.quickForm.element)} element
	 * @returns {boolean} True if succeeded, false if the label element is unavailable.
	 */
	Morebits.quickForm.resetElementLabel = (element) => {
		if (element.hasAttribute('data-oldlabel')) {
			return Morebits.quickForm.setElementLabel(element, element.getAttribute('data-oldlabel'));
		}
		return null;
	};
	/**
	 * Shows or hides a form element plus its label and tooltip.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|jQuery|string)} element - HTML/jQuery element, or jQuery selector string.
	 * @param {boolean} [visibility] - Skip this to toggle visibility.
	 */
	Morebits.quickForm.setElementVisibility = (element, visibility) => {
		$(element).toggle(visibility);
	};
	/**
	 * Shows or hides the question mark icon (which displays the tooltip) next to a form element.
	 *
	 * @memberof Morebits.quickForm
	 * @param {(HTMLElement|jQuery)} element
	 * @param {boolean} [visibility] - Skip this to toggle visibility.
	 */
	Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
		$(Morebits.quickForm.getElementContainer(element)).find('.morebits-tooltipButton').toggle(visibility);
	};
	/**
	 * @external HTMLFormElement
	 */
	/**
	 * Get checked items in the form.
	 *
	 * @function external:HTMLFormElement.getChecked
	 * @param {string} name - Find checked property of elements (i.e. a checkbox
	 * or a radiobutton) with the given name, or select options that have selected
	 * set to true (don't try to mix selects with radio/checkboxes).
	 * @param {string} [type] - Optionally specify either radio or checkbox (for
	 * the event that both checkboxes and radiobuttons have the same name).
	 * @returns {string[]} - Contains the values of elements with the given name
	 * checked property set to true.
	 */
	HTMLFormElement.prototype.getChecked = function (name, type) {
		const elements = this.elements[name];
		if (!elements) {
			return [];
		}
		const returnArray = [];
		let i;
		if (elements instanceof HTMLSelectElement) {
			const {options} = elements;
			for (i = 0; i < options.length; ++i) {
				if (options[i].selected) {
					if (options[i].values) {
						returnArray.push(options[i].values);
					} else {
						returnArray.push(options[i].value);
					}
				}
			}
		} else if (elements instanceof HTMLInputElement) {
			if (type && elements.type !== type) {
				return [];
			} else if (elements.checked) {
				return [elements.value];
			}
		} else {
			for (i = 0; i < elements.length; ++i) {
				if (elements[i].checked) {
					if (type && elements[i].type !== type) {
						continue;
					}
					if (elements[i].values) {
						returnArray.push(elements[i].values);
					} else {
						returnArray.push(elements[i].value);
					}
				}
			}
		}
		return returnArray;
	};
	/**
	 * Does the same as {@link HTMLFormElement.getChecked|getChecked}, but with unchecked elements.
	 *
	 * @function external:HTMLFormElement.getUnchecked
	 * @param {string} name - Find checked property of elements (i.e. a checkbox
	 * or a radiobutton) with the given name, or select options that have selected
	 * set to true (don't try to mix selects with radio/checkboxes).
	 * @param {string} [type] - Optionally specify either radio or checkbox (for
	 * the event that both checkboxes and radiobuttons have the same name).
	 * @returns {string[]} - Contains the values of elements with the given name
	 * checked property set to true.
	 */
	HTMLFormElement.prototype.getUnchecked = function (name, type) {
		const elements = this.elements[name];
		if (!elements) {
			return [];
		}
		const returnArray = [];
		let i;
		if (elements instanceof HTMLSelectElement) {
			const {options} = elements;
			for (i = 0; i < options.length; ++i) {
				if (!options[i].selected) {
					if (options[i].values) {
						returnArray.push(options[i].values);
					} else {
						returnArray.push(options[i].value);
					}
				}
			}
		} else if (elements instanceof HTMLInputElement) {
			if (type && elements.type !== type) {
				return [];
			} else if (!elements.checked) {
				return [elements.value];
			}
		} else {
			for (i = 0; i < elements.length; ++i) {
				if (!elements[i].checked) {
					if (type && elements[i].type !== type) {
						continue;
					}
					if (elements[i].values) {
						returnArray.push(elements[i].values);
					} else {
						returnArray.push(elements[i].value);
					}
				}
			}
		}
		return returnArray;
	};
	/**
	 * Utilities to help process IP addresses.
	 *
	 * @namespace Morebits.ip
	 * @memberof Morebits
	 */
	Morebits.ip = {
		/**
		 * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
		 * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
		 * function from the IPUtils library.  Addresses are verbose, uppercase,
		 * normalized, and expanded to 8 words.
		 *
		 * @param {string} address - The IPv6 address, with or without CIDR.
		 * @returns {string}
		 */
		sanitizeIPv6: (address) => {
			address = address.trim();
			if (address === '') {
				return null;
			}
			if (!mw.util.isIPv6Address(address, true)) {
				return address; // nothing else to do for IPv4 addresses or invalid ones
			}
			// Remove any whitespaces, convert to upper case
			address = address.toUpperCase();
			// Expand zero abbreviations
			const abbrevPos = address.indexOf('::');
			if (abbrevPos > -1) {
				// We know this is valid IPv6. Find the last index of the
				// address before any CIDR number (e.g. "a:b:c::/24").
				const CIDRStart = address.indexOf('/');
				const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
				// If the '::' is at the beginning...
				let repeat;
				let extra;
				let pad;
				if (abbrevPos === 0) {
					repeat = '0:';
					extra = address === '::' ? '0' : ''; // for the address '::'
					pad = 9; // 7+2 (due to '::')
					// If the '::' is at the end...
				} else if (abbrevPos === addressEnd - 1) {
					repeat = ':0';
					extra = '';
					pad = 9; // 7+2 (due to '::')
					// If the '::' is in the middle...
				} else {
					repeat = ':0';
					extra = ':';
					pad = 8; // 6+2 (due to '::')
				}

				let replacement = repeat;
				pad -= address.split(':').length - 1;
				for (let i = 1; i < pad; i++) {
					replacement += repeat;
				}
				replacement += extra;
				address = address.replace('::', replacement);
			}
			// Remove leading zeros from each bloc as needed
			return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, '$1$2');
		},
		/**
		 * Determine if the given IP address is a range.  Just conjoins
		 * `mw.util.isIPAddress` with and without the `allowBlock` option.
		 *
		 * @param {string} ip
		 * @returns {boolean} - True if given a valid IP address range, false otherwise.
		 */
		isRange: (ip) => {
			return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
		},
		/**
		 * Check that an IP range is within the CIDR limits.  Most likely to be useful
		 * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
		 * for IPv4 and /32 for IPv6.
		 *
		 * @param {string} ip
		 * @returns {boolean} - True for valid ranges within the CIDR limits,
		 * otherwise false (ranges outside the limit, single IPs, non-IPs).
		 */
		validCIDR: (ip) => {
			if (Morebits.ip.isRange(ip)) {
				const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
				if (subnet) {
					// Should be redundant
					if (mw.util.isIPv6Address(ip, true)) {
						if (subnet >= 32) {
							return true;
						}
					} else if (subnet >= 16) {
						return true;
					}
				}
			}
			return false;
		},
		/**
		 * Get the /64 subnet for an IPv6 address.
		 *
		 * @param {string} ipv6 - The IPv6 address, with or without a subnet.
		 * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
		 * otherwise the (sanitized) /64 address.
		 */
		get64: (ipv6) => {
			if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
				return false;
			}
			const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
			if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
				return false;
			}
			ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
			const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
			return ipv6.replace(ipRegex, '$1'.concat('0:0:0:0/64'));
		},
	};
	/**
	 * Helper functions to manipulate strings.
	 *
	 * @namespace Morebits.string
	 * @memberof Morebits
	 */
	Morebits.string = {
		/**
		 * @param {string} str
		 * @returns {string}
		 */
		toUpperCaseFirstChar: (str) => {
			str = str.toString();
			return str.slice(0, 1).toUpperCase() + str.slice(1);
		},
		/**
		 * @param {string} str
		 * @returns {string}
		 */
		toLowerCaseFirstChar: (str) => {
			str = str.toString();
			return str.slice(0, 1).toLowerCase() + str.slice(1);
		},
		/**
		 * Gives an array of substrings of `str` - starting with `start` and
		 * ending with `end` - which is not in `skiplist`.  Intended for use
		 * on wikitext with templates or links.
		 *
		 * @param {string} str
		 * @param {string} start
		 * @param {string} end
		 * @param {(string[]|string)} [skiplist]
		 * @returns {string[]}
		 * @throws If the `start` and `end` strings aren't of the same length.
		 * @throws If `skiplist` isn't an array or string
		 */
		splitWeightedByKeys: (str, start, end, skiplist) => {
			if (start.length !== end.length) {
				throw new Error('start marker and end marker must be of the same length');
			}
			let level = 0;
			let initial = null;
			const result = [];
			if (!Array.isArray(skiplist)) {
				if (skiplist === undefined) {
					skiplist = [];
				} else if (typeof skiplist === 'string') {
					skiplist = [skiplist];
				} else {
					throw new TypeError('non-applicable skiplist parameter');
				}
			}
			for (let i = 0; i < str.length; ++i) {
				for (const element of skiplist) {
					if (str.slice(i, i + element.length) === element) {
						i += element.length - 1;
						continue;
					}
				}
				if (str.slice(i, i + start.length) === start) {
					if (initial === null) {
						initial = i;
					}
					++level;
					i += start.length - 1;
				} else if (str.slice(i, i + end.length) === end) {
					--level;
					i += end.length - 1;
				}
				if (!level && initial !== null) {
					result.push(str.slice(initial, i + 1));
					initial = null;
				}
			}
			return result;
		},
		/**
		 * Formats freeform "reason" (from a textarea) for deletion/other
		 * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
		 * Handles `|` outside a nowiki tag.
		 * Optionally, also adds a signature if not present already.
		 *
		 * @param {string} str
		 * @param {boolean} [addSig]
		 * @returns {string}
		 */
		formatReasonText: (str, addSig) => {
			let reason = (str || '').toString().trim();
			const unbinder = new Morebits.unbinder(reason);
			unbinder.unbind('<no'.concat('wiki', '>'), '</no'.concat('wiki', '>'));
			unbinder.content = unbinder.content.replace(/\|/g, '{{'.concat('subst:', '!}}'));
			reason = unbinder.rebind();
			if (addSig) {
				const sig = '~~'.concat('~~');
				const sigIndex = reason.lastIndexOf(sig);
				if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
					reason += ` ${sig}`;
				}
			}
			return reason.trim();
		},
		/**
		 * Formats a "reason" (from a textarea) for inclusion in a userspace
		 * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
		 * list items for proper formatting.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		formatReasonForLog: (str) => {
			return (
				str
					// handle line breaks, which otherwise break numbering
					.replace(/\n+/g, '{{pb}}')
					// put an extra # in front before bulleted or numbered list items
					.replace(/^(#+)/gm, '#$1')
					.replace(/^(\*+)/gm, '#$1')
			);
		},
		/**
		 * Like `String.prototype.replace()`, but escapes any dollar signs in
		 * the replacement string.  Useful when the the replacement string is
		 * arbitrary, such as a username or freeform user input, and could
		 * contain dollar signs.
		 *
		 * @param {string} string - Text in which to replace.
		 * @param {(string|RegExp)} pattern
		 * @param {string} replacement
		 * @returns {string}
		 */
		safeReplace: (string, pattern, replacement) => {
			return string.replace(pattern, replacement.replace(/\$/g, '$$$$'));
		},
		/**
		 * Determine if the user-provided expiration will be considered an
		 * infinite-length by MW.
		 *
		 * @see {@link https://phabricator.wikimedia.org/T68646}
		 *
		 * @param {string} expiry
		 * @returns {boolean}
		 */
		isInfinity: (expiry) => {
			return ['indefinite', 'infinity', 'infinite', 'never'].includes(expiry);
		},
		/**
		 * Escapes a string to be used in a RegExp, replacing spaces and
		 * underscores with `[_ ]` as they are often equivalent.
		 *
		 * @param {string} text - String to be escaped.
		 * @returns {string} - The escaped text.
		 */
		escapeRegExp: (text) => {
			return mw.util.escapeRegExp(text).replace(/ |_/g, '[_ ]');
		},
		/**
		 * formatTime
		 *
		 * @param {*} time The string to foramt
		 * @returns {string}
		 */
		formatTime: (time) => {
			let m;
			if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
				return `${m[1]}秒`;
			}
			if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
				return `${m[1]}分`;
			}
			if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
				return m[1] + window.wgULS('小时', '小時');
			}
			if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
				return `${m[1]}天`;
			}
			if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
				return m[1] + window.wgULS('周', '週');
			}
			if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
				return m[1] + window.wgULS('个月', '個月');
			}
			if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
				return `${m[1]}年`;
			}
			if (Morebits.string.isInfinity(time.trim())) {
				return window.wgULS('无限期', '無限期');
			}
			return time;
		},
		/**
		 * Append punctuation to a string when it's missing
		 *
		 * @param {string} str
		 * @param {string} punctuation
		 * @returns {string}
		 */
		appendPunctuation: (str, punctuation) => {
			if (punctuation === undefined) {
				punctuation = '。';
			}
			if (str.search(/[.?!;。？！；]$/) === -1) {
				str += punctuation;
			}
			return str;
		},
	};
	/**
	 * Helper functions to manipulate arrays.
	 *
	 * @namespace Morebits.array
	 * @memberof Morebits
	 */
	Morebits.array = {
		/**
		 * Remove duplicated items from an array.
		 *
		 * @param {Array} arr
		 * @returns {Array} A copy of the array with duplicates removed.
		 * @throws When provided a non-array.
		 */
		uniq: (arr) => {
			if (!Array.isArray(arr)) {
				throw new TypeError('A non-array object passed to Morebits.array.uniq');
			}
			return arr.filter((item, idx) => {
				return arr.indexOf(item) === idx;
			});
		},
		/**
		 * Remove non-duplicated items from an array.
		 *
		 * @param {Array} arr
		 * @returns {Array} A copy of the array with the first instance of each value
		 * removed; subsequent instances of those values (duplicates) remain.
		 * @throws When provided a non-array.
		 */
		dups: (arr) => {
			if (!Array.isArray(arr)) {
				throw new TypeError('A non-array object passed to Morebits.array.dups');
			}
			return arr.filter((item, idx) => {
				return arr.indexOf(item) !== idx;
			});
		},
		/**
		 * Break up an array into smaller arrays.
		 *
		 * @param {Array} arr
		 * @param {number} size - Size of each chunk (except the last, which could be different).
		 * @returns {Array[]} An array containing the smaller, chunked arrays.
		 * @throws When provided a non-array.
		 */
		chunk: (arr, size) => {
			if (!Array.isArray(arr)) {
				throw new TypeError('A non-array object passed to Morebits.array.chunk');
			}
			if (typeof size !== 'number' || size <= 0) {
				// pretty impossible to do anything :)
				return [arr]; // we return an array consisting of this array.
			}

			const numChunks = Math.ceil(arr.length / size);
			const result = Array.from({
				length: numChunks,
			});
			for (let i = 0; i < numChunks; i++) {
				result[i] = arr.slice(i * size, (i + 1) * size);
			}
			return result;
		},
	};
	/**
	 * Utilities to enhance select2 menus. See twinklewarn, twinkleblock
	 * for sample usages.
	 *
	 * @see {@link https://select2.org/}
	 *
	 * @namespace Morebits.select2
	 * @memberof Morebits
	 * @requires jquery.select2
	 */
	Morebits.select2 = {
		matchers: {
			/**
			 * Custom matcher in which if the optgroup name matches, all options in that
			 * group are shown, like in jquery.chosen.
			 *
			 * @param {*} params
			 * @param {*} data
			 */
			optgroupFull: (params, data) => {
				const originalMatcher = $.fn.select2.defaults.defaults.matcher;
				const result = originalMatcher(params, data);
				if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
					result.children = data.children;
				}
				return result;
			},
			/**
			 * Custom matcher that matches from the beginning of words only.
			 *
			 * @param {*} params
			 * @param {*} data
			 */
			wordBeginning: (params, data) => {
				const originalMatcher = $.fn.select2.defaults.defaults.matcher;
				const result = originalMatcher(params, data);
				if (
					!params.term ||
					(result && new RegExp(`\\b${mw.util.escapeRegExp(params.term)}`, 'i').test(result.text))
				) {
					return result;
				}
				return null;
			},
		},
		/**
		 * Underline matched part of options.
		 *
		 * @param {*} data
		 */
		highlightSearchMatches: (data) => {
			const searchTerm = Morebits.select2SearchQuery;
			if (!searchTerm || data.loading) {
				return data.text;
			}
			const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
			if (idx < 0) {
				return data.text;
			}
			return $('<span>').append(
				data.text.slice(0, idx),
				$('<span>')
					.css('text-decoration', 'underline')
					.text(data.text.slice(idx, idx + searchTerm.length)),
				data.text.slice(idx + searchTerm.length)
			);
		},
		/**
		 * Intercept query as it is happening, for use in highlightSearchMatches.
		 *
		 * @param {*} params
		 */
		queryInterceptor: (params) => {
			Morebits.select2SearchQuery = params && params.term;
		},
		/**
		 * Open dropdown and begin search when the `.select2-selection` has
		 * focus and a key is pressed.
		 *
		 * @param {KeyboardEvent} ev
		 * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
		 */
		autoStart: (ev) => {
			if (ev.which < 48) {
				return;
			}
			let target = $(ev.target).closest('.select2-container');
			if (!target.length) {
				return;
			}
			target = target.prev();
			target.select2('open');
			const search = target.data('select2').dropdown.$search || target.data('select2').selection.$search;
			// Use DOM .focus() to work around a jQuery 3.6.0 regression (https://github.com/select2/select2/issues/5993)
			search[0].focus();
		},
	};
	/**
	 * Temporarily hide a part of a string while processing the rest of it.
	 * Used by {@link Morebits.wikitext.page#commentOutImage|Morebits.wikitext.page.commentOutImage}.
	 *
	 * @memberof Morebits
	 * @class
	 * @param {string} string - The initial text to process.
	 * @example const u = new Morebits.unbinder('Hello world <!-- world --> world');
	 * u.unbind('<!--', '-->'); // text inside comment remains intact
	 * u.content = u.content.replace(/world/g, 'earth');
	 * u.rebind(); // gives 'Hello earth <!-- world --> earth'
	 */
	Morebits.unbinder = function (string) {
		if (typeof string !== 'string') {
			throw new TypeError('not a string');
		}
		/** The text being processed. */
		this.content = string;
		this.counter = 0;
		this.history = {};
		this.prefix = `%UNIQ::${Math.random()}::`;
		this.postfix = '::UNIQ%';
	};
	Morebits.unbinder.prototype = {
		/**
		 * Hide the region encapsulated by the `prefix` and `postfix` from
		 * string processing.  `prefix` and `postfix` will be used in a
		 * RegExp, so items that need escaping should be use `\\`.
		 *
		 * @param {string} prefix
		 * @param {string} postfix
		 * @throws If either `prefix` or `postfix` is missing.
		 */
		unbind(prefix, postfix) {
			if (!prefix || !postfix) {
				throw new Error('Both prefix and postfix must be provided');
			}
			const re = new RegExp(`${prefix}([\\s\\S]*?)${postfix}`, 'g');
			this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
		},
		/**
		 * Restore the hidden portion of the `content` string.
		 *
		 * @returns {string} The processed output.
		 */
		rebind() {
			let {content} = this;
			for (const current in this.history) {
				if (!Object.hasOwn(this.history, current)) {
					continue;
				}
				content = content.replace(current, this.history[current]);
			}
			return content;
		},
		prefix: null,
		// %UNIQ::0.5955981644938324::
		postfix: null,
		// ::UNIQ%
		content: null,
		// string
		counter: null,
		// 0++
		history: null, // {}
	};
	/**
	 * @param {typeof Morebits} self
	 * @memberof Morebits.unbinder
	 */
	Morebits.unbinder.getCallback = (self) => {
		return (match) => {
			const current = self.prefix + self.counter + self.postfix;
			self.history[current] = match;
			++self.counter;
			return current;
		};
	};
	/* **************** Morebits.date **************** */
	/**
	 * Create a date object with enhanced processing capabilities, a la
	 * {@link https://momentjs.com/|moment.js}. MediaWiki timestamp format is also
	 * acceptable, in addition to everything that JS Date() accepts.
	 *
	 * @param {...any} args
	 * @memberof Morebits
	 * @class
	 */
	Morebits.date = function (...args) {
		// Check MediaWiki formats
		// Must be first since firefox erroneously accepts the timestamp
		// format, sans timezone (See also: #921, #936, #1174, #1187), and the
		// 14-digit string will be interpreted differently.
		if (args.length === 1) {
			const [param] = args;
			if (/^\d{14}$/.test(param)) {
				// YYYYMMDDHHmmss
				const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
				if (digitMatch) {
					// ..... year ... month .. date ... hour .... minute ..... second
					this._d = new Date(
						Reflect.apply(Date.UTC, null, [
							digitMatch[1],
							digitMatch[2] - 1,
							digitMatch[3],
							digitMatch[4],
							digitMatch[5],
							digitMatch[6],
						])
					);
				}
			} else if (typeof param === 'string') {
				// Wikitext signature timestamp
				const dateParts = Morebits.l10n.signatureTimestampFormat(param);
				if (dateParts) {
					this._d = new Date(Date.UTC.apply(null, dateParts));
				}
			}
		}
		if (!this._d) {
			// Try standard date
			this._d = new (Function.prototype.bind.apply(Date, [Date, ...(Array.isArray(args) ? args : [args])]))();
		}
		// Still no?
		if (!this.isValid()) {
			mw.log.warn('Invalid Morebits.date initialisation:', args);
		}
	};
	/**
	 * Localized strings for date processing.
	 *
	 * @memberof Morebits.date
	 * @type {object.<string, string>}
	 * @property {string[]} months
	 * @property {string[]} monthsShort
	 * @property {string[]} days
	 * @property {string[]} daysShort
	 * @property {object.<string, string>} relativeTimes
	 * @private
	 */
	Morebits.date.localeData = {
		// message names here correspond to MediaWiki message names
		// No i18n at this time
		months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		daysShort: ['日', '一', '二', '三', '四', '五', '六'],
		relativeTimes: {
			thisDay: '[今天]A hh:mm',
			prevDay: '[昨天]A hh:mm',
			nextDay: '[明天]A hh:mm',
			thisWeek: 'ddddA hh:mm',
			pastWeek: '[上]ddddA hh:mm',
			other: 'YYYY-MM-DD',
		},
	};
	/**
	 * Map units with getter/setter function names, for `add` and `subtract`
	 * methods.
	 *
	 * @memberof Morebits.date
	 * @type {object.<string, string>}
	 * @property {string} seconds
	 * @property {string} minutes
	 * @property {string} hours
	 * @property {string} days
	 * @property {string} weeks
	 * @property {string} months
	 * @property {string} years
	 */
	Morebits.date.unitMap = {
		seconds: 'Seconds',
		minutes: 'Minutes',
		hours: 'Hours',
		days: 'Date',
		weeks: 'Week',
		// Not a function but handled in `add` through cunning use of multiplication
		months: 'Month',
		years: 'FullYear',
	};
	Morebits.date.prototype = {
		/** @returns {boolean} */
		isValid() {
			return !Number.isNaN(this.getTime());
		},
		/**
		 * @param {(Date|Morebits.date)} date
		 * @returns {boolean}
		 */
		isBefore(date) {
			return this.getTime() < date.getTime();
		},
		/**
		 * @param {(Date|Morebits.date)} date
		 * @returns {boolean}
		 */
		isAfter(date) {
			return this.getTime() > date.getTime();
		},
		/** @returns {string} */
		getUTCMonthName() {
			return Morebits.date.localeData.months[this.getUTCMonth()];
		},
		/** @returns {string} */
		getUTCMonthNameAbbrev() {
			return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
		},
		/** @returns {string} */
		getMonthName() {
			return Morebits.date.localeData.months[this.getMonth()];
		},
		/** @returns {string} */
		getMonthNameAbbrev() {
			return Morebits.date.localeData.monthsShort[this.getMonth()];
		},
		/** @returns {string} */
		getUTCDayName() {
			return Morebits.date.localeData.days[this.getUTCDay()];
		},
		/** @returns {string} */
		getUTCDayNameAbbrev() {
			return Morebits.date.localeData.daysShort[this.getUTCDay()];
		},
		/** @returns {string} */
		getDayName() {
			return Morebits.date.localeData.days[this.getDay()];
		},
		/** @returns {string} */
		getDayNameAbbrev() {
			return Morebits.date.localeData.daysShort[this.getDay()];
		},
		/**
		 * Add a given number of minutes, hours, days, weeks, months, or years to the date.
		 * This is done in-place. The modified date object is also returned, allowing chaining.
		 *
		 * @param {number} number - Should be an integer.
		 * @param {string} unit
		 * @throws If invalid or unsupported unit is given.
		 * @returns {Morebits.date}
		 */
		add(number, unit) {
			let num = Number.parseInt(number, 10); // normalize
			if (Number.isNaN(num)) {
				throw new TypeError(`Invalid number "${number}" provided.`);
			}
			unit = unit.toLowerCase(); // normalize
			const {unitMap} = Morebits.date;
			let unitNorm = unitMap[unit] || unitMap[`${unit}s`]; // so that both singular and  plural forms work
			if (unitNorm) {
				// No built-in week functions, so rather than build out ISO's getWeek/setWeek, just multiply
				// Probably can't be used for Julian->Gregorian changeovers, etc.
				if (unitNorm === 'Week') {
					unitNorm = 'Date';
					num *= 7;
				}
				this[`set${unitNorm}`](this[`get${unitNorm}`]() + num);
				return this;
			}
			throw new Error(`Invalid unit "${unit}": Only ${Object.keys(unitMap).join(', ')} are allowed.`);
		},
		/**
		 * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
		 * This is done in-place. The modified date object is also returned, allowing chaining.
		 *
		 * @param {number} number - Should be an integer.
		 * @param {string} unit
		 * @throws If invalid or unsupported unit is given.
		 * @returns {Morebits.date}
		 */
		subtract(number, unit) {
			return this.add(-number, unit);
		},
		/**
		 * Format the date into a string per the given format string.
		 * Replacement syntax is a subset of that in moment.js:
		 *
		 * | Syntax | Output |
		 * |--------|--------|
		 * | H | Hours (24-hour) |
		 * | HH | Hours (24-hour, padded to 2 digits) |
		 * | h | Hours (12-hour) |
		 * | hh | Hours (12-hour, padded to 2 digits) |
		 * | A | AM or PM |
		 * | m | Minutes |
		 * | mm | Minutes (padded to 2 digits) |
		 * | s | Seconds |
		 * | ss | Seconds (padded to 2 digits) |
		 * | SSS | Milliseconds fragment, 3 digits |
		 * | d | Day number of the week (Sun=0) |
		 * | ddd | Abbreviated day name |
		 * | dddd | Full day name |
		 * | D | Date |
		 * | DD | Date (padded to 2 digits) |
		 * | M | Month number (1-indexed) |
		 * | MM | Month number (1-indexed, padded to 2 digits) |
		 * | MMM | Abbreviated month name |
		 * | MMMM | Full month name |
		 * | Y | Year |
		 * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
		 * | YYYY | Year (same as `Y`) |
		 *
		 * @param {string} formatstr - Format the date into a string, using
		 * the replacement syntax.  Use `[` and `]` to escape items.  If not
		 * provided, will return the ISO-8601-formatted string.
		 * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
		 * `utc`, or specify a time zone as number of minutes relative to UTC.
		 * @returns {string}
		 */
		format(formatstr, zone) {
			if (!this.isValid()) {
				return 'Invalid date'; // Put the truth out, preferable to "NaNNaNNan NaN:NaN" or whatever
			}

			let udate = this;
			// create a new date object that will contain the date to display as system time
			if (zone === 'utc') {
				udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), 'minutes');
			} else if (typeof zone === 'number') {
				// convert to utc, then add the utc offset given
				udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, 'minutes');
			}
			// default to ISOString
			if (!formatstr) {
				return udate.toISOString();
			}
			const pad = (num, len) => {
				len ||= 2; // Up to length of 00 + 1
				return `00${num}`.toString().slice(0 - len);
			};
			const h24 = udate.getHours();
			const m = udate.getMinutes();
			const s = udate.getSeconds();
			const ms = udate.getMilliseconds();
			const D = udate.getDate();
			const M = udate.getMonth() + 1;
			const Y = udate.getFullYear();
			const h12 = h24 % 12 || 12;
			const amOrPm = h24 >= 12 ? '下午' : '上午';
			const replacementMap = {
				HH: pad(h24),
				H: h24,
				hh: pad(h12),
				h: h12,
				A: amOrPm,
				mm: pad(m),
				m,
				ss: pad(s),
				s,
				SSS: pad(ms, 3),
				dddd: udate.getDayName(),
				ddd: udate.getDayNameAbbrev(),
				d: udate.getDay(),
				DD: pad(D),
				D,
				MMMM: udate.getMonthName(),
				MMM: udate.getMonthNameAbbrev(),
				MM: pad(M),
				M,
				YYYY: Y,
				YY: pad(Y % 100),
				Y,
			};
			const unbinder = new Morebits.unbinder(formatstr); // escape stuff between [...]
			unbinder.unbind('\\[', '\\]');
			unbinder.content = unbinder.content.replace(
				/* Regex notes:
				 * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
				 * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
				 */
				/H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
				(match) => {
					return replacementMap[match];
				}
			);
			return unbinder.rebind().replace(/\[(.*?)\]/g, '$1');
		},
		/**
		 * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
		 * Similar to `calendar` in moment.js, but with time zone support.
		 *
		 * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
		 * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
		 * @returns {string}
		 */
		calendar(zone) {
			// Zero out the hours, minutes, seconds and milliseconds - keeping only the date;
			// find the difference. Note that setHours() returns the same thing as getTime().
			const dateDiff = (new Date().setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 8.64e7;
			switch (true) {
				case dateDiff === 0:
					return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
				case dateDiff === 1:
					return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
				case dateDiff > 0 && dateDiff < 7:
					return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
				case dateDiff === -1:
					return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
				case dateDiff < 0 && dateDiff > -7:
					return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
				default:
					return this.format(Morebits.date.localeData.relativeTimes.other, zone);
			}
		},
		/**
		 * Get a regular expression that matches wikitext section titles, such
		 * as `==December 2019==` or `=== Jan 2018 ===`.
		 *
		 * @returns {RegExp}
		 */
		monthHeaderRegex() {
			return new RegExp(
				`^(==+)\\s*${this.getUTCFullYear()}年(?:${this.getUTCMonthName()}|${this.getUTCMonthNameAbbrev()})\\s*\\1`,
				'mg'
			);
		},
		/**
		 * Creates a wikitext section header with the month and year.
		 *
		 * @param {number} [level=2] - Header level.  Pass 0 for just the text
		 * with no wikitext markers (==).
		 * @returns {string}
		 */
		monthHeader(level) {
			// Default to 2, but allow for 0 or stringy numbers
			level = Number.parseInt(level, 10);
			level = Number.isNaN(level) ? 2 : level;
			const header = '='.repeat(level);
			const text = `${this.getUTCFullYear()}年${this.getUTCMonthName()}`;
			if (header.length) {
				// wikitext-formatted header
				return `${header} ${text} ${header}`;
			}
			return text; // Just the string
		},
	};
	// Allow native Date.prototype methods to be used on Morebits.date objects
	for (const func of Object.getOwnPropertyNames(Date.prototype)) {
		// Exclude methods that collide with PageTriage's Date.js external, which clobbers native Date
		if (!['add', 'getDayName', 'getMonthName'].includes(func)) {
			Morebits.date.prototype[func] = function (...args) {
				return this._d[func](...args);
			};
		}
	}
	/* **************** Morebits.wiki **************** */
	/**
	 * Various objects for wiki editing and API access, including
	 * {@link Morebits.wiki.api} and {@link Morebits.wiki.page}.
	 *
	 * @namespace Morebits.wiki
	 * @memberof Morebits
	 */
	Morebits.wiki = {};
	/**
	 * @deprecated in favor of Morebits.isPageRedirect as of November 2020
	 * @memberof Morebits.wiki
	 * @returns {boolean}
	 */
	Morebits.wiki.isPageRedirect = () => {
		console.warn('NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.');
		return Morebits.isPageRedirect();
	};
	/* **************** Morebits.wiki.actionCompleted **************** */
	/**
	 * @memberof Morebits.wiki
	 * @type {number}
	 */
	Morebits.wiki.numberOfActionsLeft = 0;
	/**
	 * @memberof Morebits.wiki
	 * @type {number}
	 */
	Morebits.wiki.nbrOfCheckpointsLeft = 0;
	/**
	 * Display message and/or redirect to page upon completion of tasks.
	 *
	 * Every call to Morebits.wiki.api.post() results in the dispatch of an
	 * asynchronous callback. Each callback can in turn make an additional call to
	 * Morebits.wiki.api.post() to continue a processing sequence. At the
	 * conclusion of the final callback of a processing sequence, it is not
	 * possible to simply return to the original caller because there is no call
	 * stack leading back to the original context. Instead,
	 * Morebits.wiki.actionCompleted.event() is called to display the result to
	 * the user and to perform an optional page redirect.
	 *
	 * The determination of when to call Morebits.wiki.actionCompleted.event() is
	 * managed through the globals Morebits.wiki.numberOfActionsLeft and
	 * Morebits.wiki.nbrOfCheckpointsLeft. Morebits.wiki.numberOfActionsLeft is
	 * incremented at the start of every Morebits.wiki.api call and decremented
	 * after the completion of a callback function. If a callback function does
	 * not create a new Morebits.wiki.api object before exiting, it is the final
	 * step in the processing chain and Morebits.wiki.actionCompleted.event() will
	 * then be called.
	 *
	 * Optionally, callers may use Morebits.wiki.addCheckpoint() to indicate that
	 * processing is not complete upon the conclusion of the final callback
	 * function.  This is used for batch operations. The end of a batch is
	 * signaled by calling Morebits.wiki.removeCheckpoint().
	 *
	 * @param {typeof Morebits} self
	 * @memberof Morebits.wiki
	 */
	Morebits.wiki.actionCompleted = (self) => {
		if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
			Morebits.wiki.actionCompleted.event(self);
		}
	};
	// Change per action wanted
	/** @memberof Morebits.wiki */
	Morebits.wiki.actionCompleted.event = () => {
		if (Morebits.wiki.actionCompleted.notice) {
			Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
		}
		if (Morebits.wiki.actionCompleted.redirect) {
			// if it isn't a URL, make it one. TODO: This breaks on the articles 'http://', 'ftp://', and similar ones.
			if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
				Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
				if (Morebits.wiki.actionCompleted.followRedirect === false) {
					Morebits.wiki.actionCompleted.redirect += '?redirect=no';
				}
			}
			setTimeout(() => {
				location = Morebits.wiki.actionCompleted.redirect;
			}, Morebits.wiki.actionCompleted.timeOut);
		}
	};
	/** @memberof Morebits.wiki */
	Morebits.wiki.actionCompleted.timeOut =
		window.wpActionCompletedTimeOut === undefined ? 5000 : window.wpActionCompletedTimeOut;
	/** @memberof Morebits.wiki */
	Morebits.wiki.actionCompleted.redirect = null;
	/** @memberof Morebits.wiki */
	Morebits.wiki.actionCompleted.notice = null;
	/** @memberof Morebits.wiki */
	Morebits.wiki.addCheckpoint = () => {
		++Morebits.wiki.nbrOfCheckpointsLeft;
	};
	/** @memberof Morebits.wiki */
	Morebits.wiki.removeCheckpoint = () => {
		if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
			Morebits.wiki.actionCompleted.event();
		}
	};
	/* **************** Morebits.wiki.api **************** */
	/**
	 * An easy way to talk to the MediaWiki API.  Accepts either json or xml
	 * (default) formats; if json is selected, will default to `formatversion=2`
	 * unless otherwise specified.  Similarly, enforces newer `errorformat`s,
	 * defaulting to `html` if unspecified.  `uselang` enforced to the wiki's
	 * content language.
	 *
	 * In new code, the use of the last 3 parameters should be avoided, instead
	 * use {@link Morebits.wiki.api#setStatusElement|setStatusElement()} to bind
	 * the status element (if needed) and use `.then()` or `.catch()` on the
	 * promise returned by `post()`, rather than specify the `onSuccess` or
	 * `onFailure` callbacks.
	 *
	 * @memberof Morebits.wiki
	 * @class
	 * @param {string} currentAction - The current action (required).
	 * @param {Object} query - The query (required).
	 * @param {Function} [onSuccess] - The function to call when request is successful.
	 * @param {Morebits.status} [statusElement] - A Morebits.status object to use for status messages.
	 * @param {Function} [onError] - The function to call if an error occurs.
	 */
	Morebits.wiki.api = function (currentAction, query, onSuccess, statusElement, onError) {
		this.currentAction = currentAction;
		this.query = query;
		this.query.assert = 'user';
		// Enforce newer error formats, preferring html
		if (!query.errorformat || !['wikitext', 'plaintext'].includes(query.errorformat)) {
			this.query.errorformat = 'html';
		}
		// Explicitly use the wiki's content language to minimize confusion,
		// see #1179 for discussion
		this.query.uselang ||= 'content'; // Use wgUserLanguage for preview
		this.query.errorlang = 'uselang';
		this.query.errorsuselocal = 1;
		this.onSuccess = onSuccess;
		this.onError = onError;
		if (statusElement) {
			this.setStatusElement(statusElement);
		} else {
			this.statelem = new Morebits.status(currentAction);
		}
		// JSON is used throughout Morebits/Twinkle, but xml remains the default for backwards compatibility
		if (!query.format) {
			this.query.format = 'xml';
		} else if (query.format === 'json' && !query.formatversion) {
			this.query.formatversion = '2';
		} else if (!['xml', 'json'].includes(query.format)) {
			this.statelem.error('Invalid API format: only xml and json are supported.');
		}
		// Ignore tags for queries and most common unsupported actions, produces warnings
		if (query.action && ['query', 'watch'].includes(query.action)) {
			delete query.tags;
		} else if (!query.tags && morebitsWikiChangeTag) {
			query.tags = morebitsWikiChangeTag;
		}
	};
	Morebits.wiki.api.prototype = {
		currentAction: '',
		onSuccess: null,
		onError: null,
		parent: window,
		// use global context if there is no parent object
		query: null,
		response: null,
		responseXML: null,
		// use `response` instead; retained for backwards compatibility
		statelem: null,
		// this non-standard name kept for backwards compatibility
		statusText: null,
		// result received from the API, normally "success" or "error"
		errorCode: null,
		// short text error code, if any, as documented in the MediaWiki API
		errorText: null,
		// full error description, if any
		badtokenRetry: false,
		// set to true if this on a retry attempted after a badtoken error
		/**
		 * Keep track of parent object for callbacks.
		 *
		 * @param {*} parent
		 */
		setParent(parent) {
			this.parent = parent;
		},
		/** @param {Morebits.status} statusElement */
		setStatusElement(statusElement) {
			this.statelem = statusElement;
			this.statelem.status(this.currentAction);
		},
		/**
		 * Carry out the request.
		 *
		 * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
		 * really want to give jQuery some extra parameters.
		 * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
		 */
		post(callerAjaxParameters) {
			++Morebits.wiki.numberOfActionsLeft;
			const _queryString = [];
			for (const [i, val] of Object.entries(this.query)) {
				if (Array.isArray(val)) {
					_queryString.push(`${encodeURIComponent(i)}=${val.map(encodeURIComponent).join('|')}`);
				} else if (val !== undefined) {
					_queryString.push(`${encodeURIComponent(i)}=${encodeURIComponent(val)}`);
				}
			}
			const queryString = _queryString.join('&').replace(/^(.*?)(\btoken=[^&]*)&(.*)/, '$1$3&$2');
			// token should always be the last item in the query string (bug TW-B-0013)
			const ajaxparams = {
				context: this,
				type: this.query.action === 'query' ? 'GET' : 'POST',
				url: mw.util.wikiScript('api'),
				data: queryString,
				dataType: this.query.format,
				headers: {
					'Api-User-Agent': morebitsWikiApiUserAgent,
				},
				...callerAjaxParameters,
			};
			return $.ajax(ajaxparams).then(
				function onAPIsuccess(response, statusText) {
					this.statusText = statusText;
					this.response = response;
					this.responseXML = response;
					// Limit to first error
					if (this.query.format === 'json') {
						this.errorCode = response.errors && response.errors[0].code;
						if (this.query.errorformat === 'html') {
							this.errorText = response.errors && response.errors[0].html;
						} else if (this.query.errorformat === 'wikitext' || this.query.errorformat === 'plaintext') {
							this.errorText = response.errors && response.errors[0].text;
						}
					} else {
						this.errorCode = $(response).find('errors error').eq(0).attr('code');
						// Sufficient for html, wikitext, or plaintext errorformats
						this.errorText = $(response).find('errors error').eq(0).text();
					}
					if (typeof this.errorCode === 'string') {
						// the API didn't like what we told it, e.g., bad edit token or an error creating a page
						return this.returnError(callerAjaxParameters);
					}
					// invoke success callback if one was supplied
					if (this.onSuccess) {
						// set the callback context to this.parent for new code and supply the API object
						// as the first argument to the callback (for legacy code)
						this.onSuccess.call(this.parent, this);
					} else {
						this.statelem.info('完成');
					}
					Morebits.wiki.actionCompleted();
					return $.Deferred().resolveWith(this.parent, [this]);
				},
				// only network and server errors reach here - complaints from the API itself are caught in success()
				function onAPIfailure(error, statusText, errorThrown) {
					this.statusText = statusText;
					this.errorThrown = errorThrown; // frequently undefined
					this.errorText =
						statusText +
						window.wgULS('在调用API时发生了错误“', '在呼叫API時發生了錯誤「') +
						error.statusText +
						window.wgULS('”。', '」。');
					return this.returnError();
				}
			);
		},
		returnError(callerAjaxParameters) {
			if (this.errorCode === 'badtoken' && !this.badtokenRetry) {
				this.statelem.warn(window.wgULS('无效令牌，获取新的令牌并重试……', '無效權杖，取得新的權杖並重試……'));
				this.badtokenRetry = true;
				// Get a new CSRF token and retry. If the original action needs a different
				// type of action than CSRF, we do one pointless retry before bailing out
				return Morebits.wiki.api.getToken().then((token) => {
					this.query.token = token;
					return this.post(callerAjaxParameters);
				});
			}
			this.statelem.error(`${this.errorText}（${this.errorCode}）`);
			// invoke failure callback if one was supplied
			if (this.onError) {
				// set the callback context to this.parent for new code and supply the API object
				// as the first argument to the callback for legacy code
				this.onError.call(this.parent, this);
			}
			// don't complete the action so that the error remains displayed
			return $.Deferred().rejectWith(this.parent, [this]);
		},
		getStatusElement() {
			return this.statelem;
		},
		getErrorCode() {
			return this.errorCode;
		},
		getErrorText() {
			return this.errorText;
		},
		getXML() {
			// retained for backwards compatibility, use getResponse() instead
			return this.responseXML;
		},
		getResponse() {
			return this.response;
		},
	};
	/**
	 * Retrieves wikitext from a page. Caching enabled, duration 1 day.
	 *
	 * @param {string} title
	 */
	Morebits.wiki.getCachedJson = (title) => {
		const query = {
			action: 'query',
			prop: 'revisions',
			titles: title,
			rvslots: 'main',
			rvprop: 'content',
			format: 'json',
			smaxage: '3600',
			maxage: '3600',
		};

		return new Morebits.wiki.api('', query).post().then((apiobj) => {
			apiobj.getStatusElement().unlink();
			const response = apiobj.getResponse();
			const wikitext = response.query.pages[0].revisions[0].slots.main.content;
			return JSON.parse(wikitext);
		});
	};
	let morebitsWikiApiUserAgent = 'YsArchives/1.1 (morebits.js)';
	/**
	 * Set the custom user agent header, which is used for server-side logging.
	 * Note that doing so will set the useragent for every `Morebits.wiki.api`
	 * process performed thereafter.
	 *
	 * @see {@link https://lists.wikimedia.org/pipermail/mediawiki-api-announce/2014-November/000075.html}
	 * for original announcement.
	 *
	 * @memberof Morebits.wiki.api
	 * @param {string} [ua=YsArchives/1.1 (morebits.js)] - User agent.  The default
	 * value of `morebits.js` will be appended to any provided
	 * value.
	 */
	Morebits.wiki.api.setApiUserAgent = (ua) => {
		morebitsWikiApiUserAgent = `YsArchives/1.1 (morebits.js${ua ? `; ${ua}` : ''})`;
	};
	/**
	 * Change/revision tag applied to Morebits actions when no other tags are specified.
	 * Unused by default.
	 *
	 * @constant
	 * @memberof Morebits.wiki.api
	 * @type {string}
	 */
	const morebitsWikiChangeTag = '';
	/**
	 * Get a new CSRF token on encountering token errors.
	 *
	 * @memberof Morebits.wiki.api
	 * @returns {string} MediaWiki CSRF token.
	 */
	Morebits.wiki.api.getToken = () => {
		const tokenApi = new Morebits.wiki.api(window.wgULS('获取令牌', '取得權杖'), {
			action: 'query',
			meta: 'tokens',
			type: 'csrf',
			format: 'json',
		});
		return tokenApi.post().then((apiobj) => {
			return apiobj.response.query.tokens.csrftoken;
		});
	};
	/* **************** Morebits.wiki.page **************** */
	/**
	 * Use the MediaWiki API to load a page and optionally edit it, move it, etc.
	 *
	 * Callers are not permitted to directly access the properties of this class!
	 * All property access is through the appropriate get___() or set___() method.
	 *
	 * Callers should set {@link Morebits.wiki.actionCompleted.notice} and {@link Morebits.wiki.actionCompleted.redirect}
	 * before the first call to {@link Morebits.wiki.page.load()}.
	 *
	 * Each of the callback functions takes one parameter, which is a
	 * reference to the Morebits.wiki.page object that registered the callback.
	 * Callback functions may invoke any Morebits.wiki.page prototype method using this reference.
	 *
	 *
	 * Call sequence for common operations (optional final user callbacks not shown):
	 *
	 * - Edit current contents of a page (no edit conflict):
	 * `.load(userTextEditCallback) -> ctx.loadApi.post() ->
	 * ctx.loadApi.post.success() -> ctx.fnLoadSuccess() -> userTextEditCallback() ->
	 * .save() -> ctx.saveApi.post() -> ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
	 *
	 * - Edit current contents of a page (with edit conflict):
	 * `.load(userTextEditCallback) -> ctx.loadApi.post() ->
	 * ctx.loadApi.post.success() -> ctx.fnLoadSuccess() -> userTextEditCallback() ->
	 * .save() -> ctx.saveApi.post() -> ctx.loadApi.post.success() ->
	 * ctx.fnSaveError() -> ctx.loadApi.post() -> ctx.loadApi.post.success() ->
	 * ctx.fnLoadSuccess() -> userTextEditCallback() -> .save() ->
	 * ctx.saveApi.post() -> ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
	 *
	 * - Append to a page (similar for prepend and newSection):
	 * `.append() -> ctx.loadApi.post() -> ctx.loadApi.post.success() ->
	 * ctx.fnLoadSuccess() -> ctx.fnAutoSave() -> .save() -> ctx.saveApi.post() ->
	 * ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
	 *
	 * Notes:
	 * 1. All functions following Morebits.wiki.api.post() are invoked asynchronously from the jQuery AJAX library.
	 * 2. The sequence for append/prepend/newSection could be slightly shortened,
	 * but it would require significant duplication of code for little benefit.
	 *
	 * @memberof Morebits.wiki
	 * @class
	 * @param {string} pageName - The name of the page, prefixed by the namespace (if any).
	 * For the current page, use `mw.config.get('wgPageName')`.
	 * @param {string|Morebits.status} [status] - A string describing the action about to be undertaken,
	 * or a Morebits.status object
	 */
	Morebits.wiki.page = function (pageName, status) {
		if (!status) {
			status = window.wgULS('打开页面“', '打開頁面「') + pageName + window.wgULS('”', '」');
		}
		/**
		 * Private context variables.
		 *
		 * This context is not visible to the outside, thus all the data here
		 * must be accessed via getter and setter functions.
		 *
		 * @private
		 */
		const ctx = {
			// backing fields for public properties
			pageName,
			pageExists: false,
			editSummary: null,
			changeTags: null,
			testActions: null,
			// array if any valid actions
			callbackParameters: null,
			statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
			// - edit
			pageText: null,
			editMode: 'all',
			// save() replaces entire contents of the page by default
			appendText: null,
			// can't reuse pageText for this because pageText is needed to follow a redirect
			prependText: null,
			// can't reuse pageText for this because pageText is needed to follow a redirect
			newSectionText: null,
			newSectionTitle: null,
			createOption: null,
			minorEdit: false,
			botEdit: false,
			pageSection: null,
			maxConflictRetries: 2,
			maxRetries: 2,
			followRedirect: false,
			followCrossNsRedirect: true,
			watchlistOption: 'nochange',
			watchlistExpiry: null,
			creator: null,
			timestamp: null,
			// - revert
			revertOldID: null,
			// - move
			moveDestination: null,
			moveTalkPage: false,
			moveSubpages: false,
			moveSuppressRedirect: false,
			// - protect
			protectEdit: null,
			protectMove: null,
			protectCreate: null,
			protectCascade: null,
			// - creation lookup
			lookupNonRedirectCreator: false,
			// internal status
			pageLoaded: false,
			csrfToken: null,
			loadTime: null,
			lastEditTime: null,
			pageID: null,
			contentModel: null,
			revertCurID: null,
			revertUser: null,
			watched: false,
			fullyProtected: false,
			suppressProtectWarning: false,
			conflictRetries: 0,
			retries: 0,
			// callbacks
			onLoadSuccess: null,
			onLoadFailure: null,
			onSaveSuccess: null,
			onSaveFailure: null,
			onLookupCreationSuccess: null,
			onLookupCreationFailure: null,
			onMoveSuccess: null,
			onMoveFailure: null,
			onDeleteSuccess: null,
			onDeleteFailure: null,
			onUndeleteSuccess: null,
			onUndeleteFailure: null,
			onProtectSuccess: null,
			onProtectFailure: null,
			// internal objects
			loadQuery: null,
			loadApi: null,
			saveApi: null,
			lookupCreationApi: null,
			moveApi: null,
			moveProcessApi: null,
			patrolApi: null,
			patrolProcessApi: null,
			deleteApi: null,
			deleteProcessApi: null,
			undeleteApi: null,
			undeleteProcessApi: null,
			protectApi: null,
			protectProcessApi: null,
		};
		const emptyFunction = () => {};
		/**
		 * Loads the text for the page.
		 *
		 * @param {Function} onSuccess - Callback function which is called when the load has succeeded.
		 * @param {Function} [onFailure] - Callback function which is called when the load fails.
		 */
		this.load = function (onSuccess, onFailure) {
			ctx.onLoadSuccess = onSuccess;
			ctx.onLoadFailure = onFailure || emptyFunction;
			// Need to be able to do something after the page loads
			if (!onSuccess) {
				ctx.statusElement.error('Internal error: no onSuccess callback provided to load()!');
				ctx.onLoadFailure(this);
				return;
			}
			ctx.loadQuery = {
				action: 'query',
				prop: 'info|revisions',
				inprop: 'watched',
				intestactions: 'edit',
				// can be expanded
				curtimestamp: '',
				meta: 'tokens',
				type: 'csrf',
				titles: ctx.pageName,
				format: 'json',
				// don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
			};

			if (ctx.editMode === 'all') {
				ctx.loadQuery.rvprop = 'content|timestamp'; // get the page content at the same time, if needed
			} else if (ctx.editMode === 'revert') {
				ctx.loadQuery.rvprop = 'timestamp';
				ctx.loadQuery.rvlimit = 1;
				ctx.loadQuery.rvstartid = ctx.revertOldID;
			}
			if (ctx.followRedirect) {
				ctx.loadQuery.redirects = ''; // follow all redirects
			}

			if (typeof ctx.pageSection === 'number') {
				ctx.loadQuery.rvsection = ctx.pageSection;
			}
			if (Morebits.userIsSysop) {
				ctx.loadQuery.inprop += '|protection';
			}
			ctx.loadApi = new Morebits.wiki.api(
				window.wgULS('抓取页面……', '抓取頁面……'),
				ctx.loadQuery,
				fnLoadSuccess,
				ctx.statusElement,
				ctx.onLoadFailure
			);
			ctx.loadApi.setParent(this);
			ctx.loadApi.post();
		};
		/**
		 * Saves the text for the page to Wikipedia.
		 * Must be preceded by successfully calling `load()`.
		 *
		 * Warning: Calling `save()` can result in additional calls to the
		 * previous `load()` callbacks to recover from edit conflicts! In this
		 * case, callers must make the same edit to the new pageText and
		 * re-invoke `save()`.  This behavior can be disabled with
		 * `setMaxConflictRetries(0)`.
		 *
		 * @param {Function} [onSuccess] - Callback function which is called when the save has succeeded.
		 * @param {Function} [onFailure] - Callback function which is called when the save fails.
		 */
		this.save = function (onSuccess, onFailure) {
			ctx.onSaveSuccess = onSuccess;
			ctx.onSaveFailure = onFailure || emptyFunction;
			// are we getting our editing token from mw.user.tokens?
			const canUseMwUserToken = fnCanUseMwUserToken('edit');
			if (!ctx.pageLoaded && !canUseMwUserToken) {
				ctx.statusElement.error('Internal error: attempt to save a page that has not been loaded!');
				ctx.onSaveFailure(this);
				return;
			}
			if (!ctx.editSummary) {
				// new section mode allows (nay, encourages) using the
				// title as the edit summary, but the query needs
				// editSummary to be undefined or '', not null
				if (ctx.editMode === 'new' && ctx.newSectionTitle) {
					ctx.editSummary = '';
				} else {
					ctx.statusElement.error('Internal error: edit summary not set before save!');
					ctx.onSaveFailure(this);
					return;
				}
			}
			// shouldn't happen if canUseMwUserToken === true
			if (
				ctx.fullyProtected &&
				!ctx.suppressProtectWarning &&
				!confirm(
					ctx.fullyProtected === 'infinity'
						? window.wgULS('您即将编辑全保护页面“', '您即將編輯全保護頁面「') +
								ctx.pageName +
								window.wgULS(
									'”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。',
									'」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。'
								)
						: `${
								window.wgULS('您即将编辑全保护页面“', '您即將編輯全保護頁面「') +
								ctx.pageName +
								window.wgULS('”（到期：', '」（到期：') +
								new Morebits.date(ctx.fullyProtected).calendar('utc')
							} (UTC)）。\n\n${window.wgULS(
								'单击确定以确定，或单击取消以取消操作。',
								'點擊確定以確定，或點擊取消以取消操作。'
							)}`
				)
			) {
				ctx.statusElement.error(window.wgULS('已取消对全保护页面的编辑。', '已取消對全保護頁面的編輯。'));
				ctx.onSaveFailure(this);
				return;
			}
			ctx.retries = 0;
			const query = {
				action: 'edit',
				title: ctx.pageName,
				summary: ctx.editSummary,
				token: canUseMwUserToken ? mw.user.tokens.get('csrfToken') : ctx.csrfToken,
				watchlist: ctx.watchlistOption,
				format: 'json',
			};
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			if (fnApplyWatchlistExpiry()) {
				query.watchlistexpiry = ctx.watchlistExpiry;
			}
			if (typeof ctx.pageSection === 'number') {
				query.section = ctx.pageSection;
			}
			// Set minor edit attribute. If these parameters are present with any value, it is interpreted as true
			if (ctx.minorEdit) {
				query.minor = true;
			} else {
				query.notminor = true; // force Twinkle config to override user preference setting for "all edits are minor"
			}
			// Set bot edit attribute. If this parameter is present with any value, it is interpreted as true
			if (ctx.botEdit) {
				query.bot = true;
			}
			switch (ctx.editMode) {
				case 'append':
					if (ctx.appendText === null) {
						ctx.statusElement.error('Internal error: append text not set before save!');
						ctx.onSaveFailure(this);
						return;
					}
					query.appendtext = ctx.appendText; // use mode to append to current page contents
					break;
				case 'prepend':
					if (ctx.prependText === null) {
						ctx.statusElement.error('Internal error: prepend text not set before save!');
						ctx.onSaveFailure(this);
						return;
					}
					query.prependtext = ctx.prependText; // use mode to prepend to current page contents
					break;
				case 'new':
					if (!ctx.newSectionText) {
						// API doesn't allow empty new section text
						ctx.statusElement.error('Internal error: new section text not set before save!');
						ctx.onSaveFailure(this);
						return;
					}
					query.section = 'new';
					query.text = ctx.newSectionText; // add a new section to current page
					query.sectiontitle = ctx.newSectionTitle || ctx.editSummary; // done by the API, but non-'' values would get treated as text
					break;
				case 'revert':
					query.undo = ctx.revertCurID;
					query.undoafter = ctx.revertOldID;
					if (ctx.lastEditTime) {
						query.basetimestamp = ctx.lastEditTime; // check that page hasn't been edited since it was loaded
					}

					query.starttimestamp = ctx.loadTime; // check that page hasn't been deleted since it was loaded (don't recreate bad stuff)
					break;
				default:
					// 'all'
					query.text = ctx.pageText; // replace entire contents of the page
					if (ctx.lastEditTime) {
						query.basetimestamp = ctx.lastEditTime; // check that page hasn't been edited since it was loaded
					}

					query.starttimestamp = ctx.loadTime; // check that page hasn't been deleted since it was loaded (don't recreate bad stuff)
					break;
			}
			if (['recreate', 'createonly', 'nocreate'].includes(ctx.createOption)) {
				query[ctx.createOption] = '';
			}
			if (canUseMwUserToken && ctx.followRedirect) {
				query.redirect = true;
			}
			ctx.saveApi = new Morebits.wiki.api(
				window.wgULS('保存页面……', '儲存頁面……'),
				query,
				fnSaveSuccess,
				ctx.statusElement,
				fnSaveError
			);
			ctx.saveApi.setParent(this);
			ctx.saveApi.post();
		};
		/**
		 * Adds the text provided via `setAppendText()` to the end of the
		 * page.  Does not require calling `load()` first, unless a watchlist
		 * expiry is used.
		 *
		 * @param {Function} [onSuccess] - Callback function which is called when the method has succeeded.
		 * @param {Function} [onFailure] - Callback function which is called when the method fails.
		 */
		this.append = function (onSuccess, onFailure) {
			ctx.editMode = 'append';
			if (fnCanUseMwUserToken('edit')) {
				this.save(onSuccess, onFailure);
			} else {
				ctx.onSaveSuccess = onSuccess;
				ctx.onSaveFailure = onFailure || emptyFunction;
				this.load(fnAutoSave, ctx.onSaveFailure);
			}
		};
		/**
		 * Adds the text provided via `setPrependText()` to the start of the
		 * page.  Does not require calling `load()` first, unless a watchlist
		 * expiry is used.
		 *
		 * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
		 * @param {Function}  [onFailure] - Callback function which is called when the method fails.
		 */
		this.prepend = function (onSuccess, onFailure) {
			ctx.editMode = 'prepend';
			if (fnCanUseMwUserToken('edit')) {
				this.save(onSuccess, onFailure);
			} else {
				ctx.onSaveSuccess = onSuccess;
				ctx.onSaveFailure = onFailure || emptyFunction;
				this.load(fnAutoSave, ctx.onSaveFailure);
			}
		};
		/**
		 * Creates a new section with the text provided by `setNewSectionText()`
		 * and section title from `setNewSectionTitle()`.
		 * If `editSummary` is provided, that will be used instead of the
		 * autogenerated "->Title (new section" edit summary.
		 * Does not require calling `load()` first, unless a watchlist expiry
		 * is used.
		 *
		 * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
		 * @param {Function}  [onFailure] - Callback function which is called when the method fails.
		 */
		this.newSection = function (onSuccess, onFailure) {
			ctx.editMode = 'new';
			if (fnCanUseMwUserToken('edit')) {
				this.save(onSuccess, onFailure);
			} else {
				ctx.onSaveSuccess = onSuccess;
				ctx.onSaveFailure = onFailure || emptyFunction;
				this.load(fnAutoSave, ctx.onSaveFailure);
			}
		};
		/** @returns {string} The name of the loaded page, including the namespace */
		this.getPageName = () => {
			return ctx.pageName;
		};
		/** @returns {string} The text of the page after a successful load() */
		this.getPageText = () => {
			return ctx.pageText;
		};
		/** @param {string} pageText - Updated page text that will be saved when `save()` is called */
		this.setPageText = (pageText) => {
			ctx.editMode = 'all';
			ctx.pageText = pageText;
		};
		/** @param {string} appendText - Text that will be appended to the page when `append()` is called */
		this.setAppendText = (appendText) => {
			ctx.editMode = 'append';
			ctx.appendText = appendText;
		};
		/** @param {string} prependText - Text that will be prepended to the page when `prepend()` is called */
		this.setPrependText = (prependText) => {
			ctx.editMode = 'prepend';
			ctx.prependText = prependText;
		};
		/** @param {string} newSectionText - Text that will be added in a new section on the page when `newSection()` is called */
		this.setNewSectionText = (newSectionText) => {
			ctx.editMode = 'new';
			ctx.newSectionText = newSectionText;
		};
		/**
		 * @param {string} newSectionTitle - Title for the new section created when `newSection()` is called
		 * If missing, `ctx.editSummary` will be used. Issues may occur if a substituted template is used.
		 */
		this.setNewSectionTitle = (newSectionTitle) => {
			ctx.editMode = 'new';
			ctx.newSectionTitle = newSectionTitle;
		};
		// Edit-related setter methods:
		/**
		 * Set the edit summary that will be used when `save()` is called.
		 * Unnecessary if editMode is 'new' and newSectionTitle is provided.
		 *
		 * @param {string} summary
		 */
		this.setEditSummary = (summary) => {
			ctx.editSummary = summary;
		};
		/**
		 * Set any custom tag(s) to be applied to the API action.
		 * A number of actions don't support it, most notably watch.
		 *
		 * @param {string|string[]} tags - String or array of tag(s).
		 */
		this.setChangeTags = (tags) => {
			ctx.changeTags = tags;
		};
		/**
		 * @param {string} [createOption=null] - Can take the following four values:
		 * - recreate: create the page if it does not exist, or edit it if it exists.
		 * - createonly: create the page if it does not exist, but return an
		 * error if it already exists.
		 * - nocreate: don't create the page, only edit it if it already exists.
		 * - `null`: create the page if it does not exist, unless it was deleted
		 * in the moment between loading the page and saving the edit (default).
		 */
		this.setCreateOption = (createOption) => {
			ctx.createOption = createOption;
		};
		/** @param {boolean} minorEdit - Set true to mark the edit as a minor edit. */
		this.setMinorEdit = (minorEdit) => {
			ctx.minorEdit = minorEdit;
		};
		/** @param {boolean} botEdit - Set true to mark the edit as a bot edit */
		this.setBotEdit = (botEdit) => {
			ctx.botEdit = botEdit;
		};
		/**
		 * @param {number} pageSection - Integer specifying the section number to load or save.
		 * If specified as `null`, the entire page will be retrieved.
		 */
		this.setPageSection = (pageSection) => {
			ctx.pageSection = pageSection;
		};
		/**
		 * @param {number} maxConflictRetries - Number of retries for save errors involving an edit conflict or
		 * loss of token. Default: 2.
		 */
		this.setMaxConflictRetries = (maxConflictRetries) => {
			ctx.maxConflictRetries = maxConflictRetries;
		};
		/**
		 * @param {number} maxRetries - Number of retries for save errors not involving an edit conflict or
		 * loss of token. Default: 2.
		 */
		this.setMaxRetries = (maxRetries) => {
			ctx.maxRetries = maxRetries;
		};
		/**
		 * Set whether and how to watch the page, including setting an expiry.
		 *
		 * @param {boolean|string|Morebits.date|Date} [watchlistOption=false] -
		 * Basically a mix of MW API and Twinkley options available pre-expiry:
		 * - `true`|`'yes'`|`'watch'`: page will be added to the user's
		 * watchlist when the action is called. Defaults to an indefinite
		 * watch unless `watchlistExpiry` is provided.
		 * - `false`|`'no'`|`'nochange'`: watchlist status of the page (including expiry) will not be changed.
		 * - `'default'`|`'preferences'`: watchlist status of the page will be
		 * set based on the user's preference settings when the action is
		 * called. Defaults to an indefinite watch unless `watchlistExpiry` is
		 * provided.
		 * - `'unwatch'`: explicitly unwatch the page.
		 * - Any other `string` or `number`, or a `Morebits.date` or `Date`
		 * object: watch page until the specified time, deferring to
		 * `watchlistExpiry` if provided.
		 * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
		 * A date-like string or number, or a date object.  If a string or number,
		 * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
		 * ISO 8601: 2038-01-09T03:14:07Z
		 * MediaWiki: 20380109031407
		 * UNIX: 2147483647
		 * SQL: 2038-01-09 03:14:07
		 * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
		 * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
		 */
		this.setWatchlist = (watchlistOption, watchlistExpiry) => {
			if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
				watchlistOption = watchlistOption.toISOString();
			}
			if (watchlistExpiry === undefined) {
				watchlistExpiry = 'infinity';
			} else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
				watchlistExpiry = watchlistExpiry.toISOString();
			}
			switch (watchlistOption) {
				case 'nochange':
				case 'no':
				case false:
				case undefined:
					ctx.watchlistOption = 'nochange';
					// The MW API allows for changing expiry with nochange (as "nochange" refers to the binary status),
					// but by keeping this null it will default to any existing expiry, ensure there is actually "no change."
					ctx.watchlistExpiry = null;
					break;
				case 'unwatch':
					// expiry unimportant
					ctx.watchlistOption = 'unwatch';
					break;
				case 'preferences':
				case 'default':
					ctx.watchlistOption = 'preferences';
					// The API allows an expiry here, but there is as of yet (T265716)
					// no expiry preference option, so it's a bit devoid of context.
					ctx.watchlistExpiry = watchlistExpiry;
					break;
				case 'watch':
				case 'yes':
				case true:
					ctx.watchlistOption = 'watch';
					ctx.watchlistExpiry = watchlistExpiry;
					break;
				default:
					// Not really a "default" per se but catches "any other string"
					ctx.watchlistOption = 'watch';
					ctx.watchlistExpiry = watchlistOption;
					break;
			}
		};
		/**
		 * Set a watchlist expiry. setWatchlist can mostly handle this by
		 * itself, so this is here largely for completeness and compatibility
		 * with the full suite of options.
		 *
		 * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
		 * A date-like string or number, or a date object.  If a string or number,
		 * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
		 * ISO 8601: 2038-01-09T03:14:07Z
		 * MediaWiki: 20380109031407
		 * UNIX: 2147483647
		 * SQL: 2038-01-09 03:14:07
		 * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
		 * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
		 */
		this.setWatchlistExpiry = (watchlistExpiry) => {
			if (watchlistExpiry === undefined) {
				watchlistExpiry = 'infinity';
			} else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
				watchlistExpiry = watchlistExpiry.toISOString();
			}
			ctx.watchlistExpiry = watchlistExpiry;
		};
		/**
		 * @deprecated As of December 2020, use setWatchlist.
		 * @param {boolean} [watchlistOption=false] -
		 * - `True`: page watchlist status will be set based on the user's
		 * preference settings when `save()` is called.
		 * - `False`: watchlist status of the page will not be changed.
		 *
		 * Watchlist notes:
		 * 1. The MediaWiki API value of 'unwatch', which explicitly removes
		 * the page from the user's watchlist, is not used.
		 * 2. If both `setWatchlist()` and `setWatchlistFromPreferences()` are
		 * called, the last call takes priority.
		 * 3. Twinkle modules should use the appropriate preference to set the watchlist options.
		 * 4. Most Twinkle modules use `setWatchlist()`. `setWatchlistFromPreferences()`
		 * is only needed for the few Twinkle watchlist preferences that
		 * accept a string value of `default`.
		 */
		this.setWatchlistFromPreferences = (watchlistOption) => {
			console.warn(
				'NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist'
			);
			if (watchlistOption) {
				ctx.watchlistOption = 'preferences';
			} else {
				ctx.watchlistOption = 'nochange';
			}
		};
		/**
		 * @param {boolean} [followRedirect=false] -
		 * - `true`: a maximum of one redirect will be followed. In the event
		 * of a redirect, a message is displayed to the user and the redirect
		 * target can be retrieved with getPageName().
		 * - `false`: (default) the requested pageName will be used without regard to any redirect.
		 * @param {boolean} [followCrossNsRedirect=true] - Not applicable if `followRedirect` is not set true.
		 * - `true`: (default) follow redirect even if it is a cross-namespace redirect
		 * - `false`: don't follow redirect if it is cross-namespace, edit the redirect itself.
		 */
		this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
			if (ctx.pageLoaded) {
				ctx.statusElement.error(
					'Internal error: cannot change redirect setting after the page has been loaded!'
				);
				return;
			}
			ctx.followRedirect = followRedirect;
			ctx.followCrossNsRedirect =
				followCrossNsRedirect === undefined ? ctx.followCrossNsRedirect : followCrossNsRedirect;
		};
		// lookup-creation setter function
		/**
		 * @param {boolean} flag - If set true, the author and timestamp of
		 * the first non-redirect version of the page is retrieved.
		 *
		 * Warning:
		 * 1. If there are no revisions among the first 50 that are
		 * non-redirects, or if there are less 50 revisions and all are
		 * redirects, the original creation is retrieved.
		 * 2. Revisions that the user is not privileged to access
		 * (revdeled/suppressed) will be treated as non-redirects.
		 * 3. Must not be used when the page has a non-wikitext contentmodel
		 * such as Modulespace Lua or user JavaScript/CSS.
		 */
		this.setLookupNonRedirectCreator = (flag) => {
			ctx.lookupNonRedirectCreator = flag;
		};
		// Move-related setter functions
		/** @param {string} destination */
		this.setMoveDestination = (destination) => {
			ctx.moveDestination = destination;
		};
		/** @param {boolean} flag */
		this.setMoveTalkPage = (flag) => {
			ctx.moveTalkPage = !!flag;
		};
		/** @param {boolean} flag */
		this.setMoveSubpages = (flag) => {
			ctx.moveSubpages = !!flag;
		};
		/** @param {boolean} flag */
		this.setMoveSuppressRedirect = (flag) => {
			ctx.moveSuppressRedirect = !!flag;
		};
		// Protect-related setter functions
		/**
		 * @param {string} level - The right required for the specific action
		 * e.g. sysop, templateeditor, autoconfirmed
		 * @param {string} [expiry=infinity]
		 */
		this.setEditProtection = (level, expiry) => {
			ctx.protectEdit = {
				level,
				expiry: expiry || 'infinity',
			};
		};
		this.setMoveProtection = (level, expiry) => {
			ctx.protectMove = {
				level,
				expiry: expiry || 'infinity',
			};
		};
		this.setCreateProtection = (level, expiry) => {
			ctx.protectCreate = {
				level,
				expiry: expiry || 'infinity',
			};
		};
		this.setCascadingProtection = (flag) => {
			ctx.protectCascade = !!flag;
		};
		this.suppressProtectWarning = () => {
			ctx.suppressProtectWarning = true;
		};
		// Revert-related getters/setters:
		this.setOldID = (oldID) => {
			ctx.revertOldID = oldID;
		};
		/** @returns {string} The current revision ID of the page */
		this.getCurrentID = () => {
			return ctx.revertCurID;
		};
		/** @returns {string} Last editor of the page */
		this.getRevisionUser = () => {
			return ctx.revertUser;
		};
		/** @returns {string} ISO 8601 timestamp at which the page was last edited. */
		this.getLastEditTime = () => {
			return ctx.lastEditTime;
		};
		// Miscellaneous getters/setters:
		/**
		 * Define an object for use in a callback function.
		 *
		 * `callbackParameters` is for use by the caller only. The parameters
		 * allow a caller to pass the proper context into its callback
		 * function.  Callers must ensure that any changes to the
		 * callbackParameters object within a `load()` callback still permit a
		 * proper re-entry into the `load()` callback if an edit conflict is
		 * detected upon calling `save()`.
		 *
		 * @param {Object} callbackParameters
		 */
		this.setCallbackParameters = (callbackParameters) => {
			ctx.callbackParameters = callbackParameters;
		};
		/**
		 * @returns {Object} - The object previously set by `setCallbackParameters()`.
		 */
		this.getCallbackParameters = () => {
			return ctx.callbackParameters;
		};
		/**
		 * @param {Morebits.status} statusElement
		 */
		this.setStatusElement = (statusElement) => {
			ctx.statusElement = statusElement;
		};
		/**
		 * @returns {Morebits.status} Status element created by the constructor.
		 */
		this.getStatusElement = () => {
			return ctx.statusElement;
		};
		/**
		 * @returns {boolean} True if the page existed on the wiki when it was last loaded.
		 */
		this.exists = () => {
			return ctx.pageExists;
		};
		/**
		 * @returns {string} Page ID of the page loaded. 0 if the page doesn't
		 * exist.
		 */
		this.getPageID = () => {
			return ctx.pageID;
		};
		/**
		 * @returns {string} - Content model of the page.  Possible values
		 * include (but may not be limited to): `wikitext`, `javascript`,
		 * `css`, `json`, `Scribunto`, `sanitized-css`, `MassMessageListContent`.
		 * Also gettable via `mw.config.get('wgPageContentModel')`.
		 */
		this.getContentModel = () => {
			return ctx.contentModel;
		};
		/**
		 * @returns {boolean|string} - Watched status of the page. Boolean
		 * unless it's being watched temporarily, in which case returns the
		 * expiry string.
		 */
		this.getWatched = () => {
			return ctx.watched;
		};
		/**
		 * @returns {string} ISO 8601 timestamp at which the page was last loaded.
		 */
		this.getLoadTime = () => {
			return ctx.loadTime;
		};
		/**
		 * @returns {string} The user who created the page following `lookupCreation()`.
		 */
		this.getCreator = () => {
			return ctx.creator;
		};
		/**
		 * @returns {string} The ISOString timestamp of page creation following `lookupCreation()`.
		 */
		this.getCreationTimestamp = () => {
			return ctx.timestamp;
		};
		/** @returns {boolean} whether or not you can edit the page */
		this.canEdit = () => {
			return !!ctx.testActions && ctx.testActions.includes('edit');
		};
		/**
		 * Retrieves the username of the user who created the page as well as
		 * the timestamp of creation.  The username can be retrieved using the
		 * `getCreator()` function; the timestamp can be retrieved using the
		 * `getCreationTimestamp()` function.
		 * Prior to June 2019 known as `lookupCreator()`.
		 *
		 * @param {Function} onSuccess - Callback function to be called when
		 * the username and timestamp are found within the callback.
		 * @param {Function} [onFailure] - Callback function to be called when
		 * the lookup fails
		 */
		this.lookupCreation = function (onSuccess, onFailure) {
			ctx.onLookupCreationSuccess = onSuccess;
			ctx.onLookupCreationFailure = onFailure || emptyFunction;
			if (!onSuccess) {
				ctx.statusElement.error('Internal error: no onSuccess callback provided to lookupCreation()!');
				ctx.onLookupCreationFailure(this);
				return;
			}
			const query = {
				action: 'query',
				prop: 'revisions',
				titles: ctx.pageName,
				rvlimit: 1,
				rvprop: 'user|timestamp',
				rvdir: 'newer',
				format: 'json',
			};
			// Only the wikitext content model can reliably handle
			// rvsection, others return an error when paired with the
			// content rvprop. Relatedly, non-wikitext models don't
			// understand the #REDIRECT concept, so we shouldn't attempt
			// the redirect resolution in fnLookupCreationSuccess
			if (ctx.lookupNonRedirectCreator) {
				query.rvsection = 0;
				query.rvprop += '|content';
			}
			if (ctx.followRedirect) {
				query.redirects = ''; // follow all redirects
			}

			ctx.lookupCreationApi = new Morebits.wiki.api(
				window.wgULS('抓取页面创建者信息', '抓取頁面建立者資訊'),
				query,
				fnLookupCreationSuccess,
				ctx.statusElement,
				ctx.onLookupCreationFailure
			);
			ctx.lookupCreationApi.setParent(this);
			ctx.lookupCreationApi.post();
		};
		/**
		 * Reverts a page to `revertOldID` set by `setOldID`.
		 *
		 * @param {Function} [onSuccess] - Callback function to run on success.
		 * @param {Function} [onFailure] - Callback function to run on failure.
		 */
		this.revert = function (onSuccess, onFailure) {
			ctx.onSaveSuccess = onSuccess;
			ctx.onSaveFailure = onFailure || emptyFunction;
			if (!ctx.revertOldID) {
				ctx.statusElement.error('Internal error: revision ID to revert to was not set before revert!');
				ctx.onSaveFailure(this);
				return;
			}
			ctx.editMode = 'revert';
			this.load(fnAutoSave, ctx.onSaveFailure);
		};
		/**
		 * Moves a page to another title.
		 *
		 * @param {Function} [onSuccess] - Callback function to run on success.
		 * @param {Function} [onFailure] - Callback function to run on failure.
		 */
		this.move = function (onSuccess, onFailure) {
			ctx.onMoveSuccess = onSuccess;
			ctx.onMoveFailure = onFailure || emptyFunction;
			if (!fnPreflightChecks.call(this, 'move', ctx.onMoveFailure)) {
				return; // abort
			}

			if (!ctx.moveDestination) {
				ctx.statusElement.error('Internal error: destination page name was not set before move!');
				ctx.onMoveFailure(this);
				return;
			}
			if (fnCanUseMwUserToken('move')) {
				fnProcessMove.call(this, this);
			} else {
				const query = fnNeedTokenInfoQuery('move');
				ctx.moveApi = new Morebits.wiki.api(
					window.wgULS('获取令牌……', '取得權杖……'),
					query,
					fnProcessMove,
					ctx.statusElement,
					ctx.onMoveFailure
				);
				ctx.moveApi.setParent(this);
				ctx.moveApi.post();
			}
		};
		/**
		 * Marks the page as patrolled, using `rcid` (if available) or `revid`.
		 *
		 * Patrolling as such doesn't need to rely on loading the page in
		 * question; simply passing a revid to the API is sufficient, so in
		 * those cases just using {@link Morebits.wiki.api} is probably preferable.
		 *
		 * No error handling since we don't actually care about the errors.
		 */
		this.patrol = function () {
			if (!Morebits.userIsSysop && !Morebits.userIsInGroup('patroller')) {
				return;
			}
			const $body = $('body');
			// If a link is present, don't need to check if it's patrolled
			if ($body.find('.patrollink').length) {
				const patrolhref = $body.find('.patrollink a').attr('href');
				ctx.rcid = mw.util.getParamValue('rcid', patrolhref);
				fnProcessPatrol(this, this);
			} else {
				const patrolQuery = {
					action: 'query',
					prop: 'info',
					meta: 'tokens',
					type: 'patrol',
					// as long as we're querying, might as well get a token
					list: 'recentchanges',
					// check if the page is unpatrolled
					titles: ctx.pageName,
					rcprop: 'patrolled',
					rctitle: ctx.pageName,
					rclimit: 1,
					format: 'json',
				};
				ctx.patrolApi = new Morebits.wiki.api(
					window.wgULS('获取令牌……', '取得權杖……'),
					patrolQuery,
					fnProcessPatrol
				);
				ctx.patrolApi.setParent(this);
				ctx.patrolApi.post();
			}
		};
		// |delete| is a reserved word in some flavours of JS
		/**
		 * Deletes a page (for admins only).
		 *
		 * @param {Function} [onSuccess] - Callback function to run on success.
		 * @param {Function} [onFailure] - Callback function to run on failure.
		 */
		this.deletePage = function (onSuccess, onFailure) {
			ctx.onDeleteSuccess = onSuccess;
			ctx.onDeleteFailure = onFailure || emptyFunction;
			if (!fnPreflightChecks.call(this, 'delete', ctx.onDeleteFailure)) {
				return; // abort
			}

			if (fnCanUseMwUserToken('delete')) {
				fnProcessDelete.call(this, this);
			} else {
				const query = fnNeedTokenInfoQuery('delete');
				ctx.deleteApi = new Morebits.wiki.api(
					window.wgULS('获取令牌……', '取得權杖……'),
					query,
					fnProcessDelete,
					ctx.statusElement,
					ctx.onDeleteFailure
				);
				ctx.deleteApi.setParent(this);
				ctx.deleteApi.post();
			}
		};
		/**
		 * Undeletes a page (for admins only).
		 *
		 * @param {Function} [onSuccess] - Callback function to run on success.
		 * @param {Function} [onFailure] - Callback function to run on failure.
		 */
		this.undeletePage = function (onSuccess, onFailure) {
			ctx.onUndeleteSuccess = onSuccess;
			ctx.onUndeleteFailure = onFailure || emptyFunction;
			if (!fnPreflightChecks.call(this, 'undelete', ctx.onUndeleteFailure)) {
				return; // abort
			}

			if (fnCanUseMwUserToken('undelete')) {
				fnProcessUndelete.call(this, this);
			} else {
				const query = fnNeedTokenInfoQuery('undelete');
				ctx.undeleteApi = new Morebits.wiki.api(
					window.wgULS('获取令牌……', '取得權杖……'),
					query,
					fnProcessUndelete,
					ctx.statusElement,
					ctx.onUndeleteFailure
				);
				ctx.undeleteApi.setParent(this);
				ctx.undeleteApi.post();
			}
		};
		/**
		 * Protects a page (for admins only).
		 *
		 * @param {Function} [onSuccess] - Callback function to run on success.
		 * @param {Function} [onFailure] - Callback function to run on failure.
		 */
		this.protect = function (onSuccess, onFailure) {
			ctx.onProtectSuccess = onSuccess;
			ctx.onProtectFailure = onFailure || emptyFunction;
			if (!fnPreflightChecks.call(this, 'protect', ctx.onProtectFailure)) {
				return; // abort
			}

			if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
				ctx.statusElement.error(
					'Internal error: you must set edit and/or move and/or create protection before calling protect()!'
				);
				ctx.onProtectFailure(this);
				return;
			}
			// because of the way MW API interprets protection levels
			// (absolute, not differential), we always need to request
			// protection levels from the server
			const query = fnNeedTokenInfoQuery('protect');
			ctx.protectApi = new Morebits.wiki.api(
				window.wgULS('获取令牌……', '取得權杖……'),
				query,
				fnProcessProtect,
				ctx.statusElement,
				ctx.onProtectFailure
			);
			ctx.protectApi.setParent(this);
			ctx.protectApi.post();
		};
		/*
		 * Private member functions
		 * These are not exposed outside
		 */
		/**
		 * Determines whether we can save an API call by using the csrf token
		 * sent with the page HTML, or whether we need to ask the server for
		 * more info (e.g. protection or watchlist expiry).
		 *
		 * Currently used for `append`, `prepend`, `newSection`, `move`,
		 * `deletePage`, and `undeletePage`. Not used for `protect`
		 * since it always needs to request protection status.
		 *
		 * @param {string} [action=edit] - The action being undertaken, e.g.
		 * "edit" or "delete". In practice, only "edit" or "notedit" matters.
		 * @returns {boolean}
		 */
		const fnCanUseMwUserToken = (action) => {
			action ||= 'edit';
			// If a watchlist expiry is set, we must always load the page
			// to avoid overwriting indefinite protection.  Of course, not
			// needed if setting indefinite watching!
			if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
				return false;
			}
			// API-based redirect resolution only works for action=query and
			// action=edit in append/prepend/new modes
			if (ctx.followRedirect) {
				if (!ctx.followCrossNsRedirect) {
					return false; // must load the page to check for cross namespace redirects
				}

				if (action !== 'edit' || ctx.editMode === 'all' || ctx.editMode === 'revert') {
					return false;
				}
			}
			// do we need to fetch the edit protection expiry?
			if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
				if (
					new mw.Title(Morebits.pageNameNorm).getPrefixedText() !==
					new mw.Title(ctx.pageName).getPrefixedText()
				) {
					return false;
				}
				// wgRestrictionEdit is null on non-existent pages,
				// so this neatly handles nonexistent pages
				const editRestriction = mw.config.get('wgRestrictionEdit');
				if (!editRestriction || editRestriction.includes('sysop')) {
					return false;
				}
			}
			return !!mw.user.tokens.get('csrfToken');
		};
		/**
		 * When functions can't use
		 * {@link Morebits.wiki.page~fnCanUseMwUserToken|fnCanUseMwUserToken}
		 * or require checking protection or watched status, maintain the query
		 * in one place. Used for {@link Morebits.wiki.page#deletePage|delete},
		 * {@link Morebits.wiki.page#undeletePage|undelete},
		 * {@link* Morebits.wiki.page#protect|protect},
		 * and {@link Morebits.wiki.page#move|move}
		 * (basically, just not {@link Morebits.wiki.page#load|load}).
		 *
		 * @param {string} action - The action being undertaken, e.g. "edit" or
		 * "delete".
		 * @returns {Object} Appropriate query.
		 */
		const fnNeedTokenInfoQuery = (action) => {
			const query = {
				action: 'query',
				meta: 'tokens',
				type: 'csrf',
				titles: ctx.pageName,
				prop: 'info',
				inprop: 'watched',
				format: 'json',
			};
			// Protection not checked for non-sysop moves
			if (action !== 'move' || Morebits.userIsSysop) {
				query.inprop += '|protection';
			}
			if (ctx.followRedirect && action !== 'undelete') {
				query.redirects = ''; // follow all redirects
			}

			return query;
		};
		// callback from loadSuccess() for append(), prepend(), and newSection() threads
		const fnAutoSave = (pageobj) => {
			pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
		};
		// callback from loadApi.post()
		const fnLoadSuccess = function () {
			const response = ctx.loadApi.getResponse().query;
			if (!fnCheckPageName(response, ctx.onLoadFailure)) {
				return; // abort
			}

			const [page] = response.pages;
			let rev;
			ctx.pageExists = !page.missing;
			if (ctx.pageExists) {
				[rev] = page.revisions;
				ctx.lastEditTime = rev.timestamp;
				ctx.pageText = rev.content;
				ctx.pageID = page.pageid;
			} else {
				ctx.pageText = ''; // allow for concatenation, etc.
				ctx.pageID = 0; // nonexistent in response, matches wgArticleId
			}

			ctx.csrfToken = response.tokens.csrftoken;
			if (!ctx.csrfToken) {
				ctx.statusElement.error(window.wgULS('未能获取编辑令牌。', '未能取得編輯權杖。'));
				ctx.onLoadFailure(this);
				return;
			}
			ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
			if (!ctx.loadTime) {
				ctx.statusElement.error(window.wgULS('未能获取当前时间戳。', '未能取得當前時間戳。'));
				ctx.onLoadFailure(this);
				return;
			}
			ctx.contentModel = page.contentmodel;
			ctx.watched = page.watchlistexpiry || page.watched;
			// extract protection info, to alert admins when they are about to edit a protected page
			// Includes cascading protection
			if (Morebits.userIsSysop) {
				const editProt = page.protection
					.filter((pr) => {
						return pr.type === 'edit' && pr.level === 'sysop';
					})
					.pop();
				if (editProt) {
					ctx.fullyProtected = editProt.expiry;
				} else {
					ctx.fullyProtected = false;
				}
			}
			ctx.revertCurID = page.lastrevid;
			const testactions = page.actions;
			ctx.testActions = []; // was null
			for (const action of Object.keys(testactions)) {
				if (testactions[action]) {
					ctx.testActions.push(action);
				}
			}
			if (ctx.editMode === 'revert') {
				ctx.revertCurID = rev && rev.revid;
				if (!ctx.revertCurID) {
					ctx.statusElement.error(window.wgULS('未能获取当前修订版本ID。', '未能取得目前修訂版本ID。'));
					ctx.onLoadFailure(this);
					return;
				}
				ctx.revertUser = rev && rev.user;
				if (!ctx.revertUser) {
					if (rev && rev.userhidden) {
						// username was RevDel'd or oversighted
						ctx.revertUser = window.wgULS('<用户名已隐藏>', '<使用者名稱已隱藏>');
					} else {
						ctx.statusElement.error(
							window.wgULS('未能获取此修订版本的编辑者。', '未能取得此修訂版本的編輯者。')
						);
						ctx.onLoadFailure(this);
						return;
					}
				}
				// set revert edit summary
				ctx.editSummary = `[[LIB:UNDO|撤销]]由 ${ctx.revertUser} 所做出的${window.wgULS('修订 ', '修訂 ')}${
					ctx.revertOldID
				}：${ctx.editSummary}`;
			}
			ctx.pageLoaded = true;
			// mw.notify("Generate edit conflict now", {type: 'warn', tag: 'morebits'});  // for testing edit conflict recovery logic
			ctx.onLoadSuccess(this); // invoke callback
		};
		// helper function to parse the page name returned from the API
		const fnCheckPageName = function (response, onFailure) {
			if (!onFailure) {
				onFailure = emptyFunction;
			}
			const page = response.pages && response.pages[0];
			if (page) {
				// check for invalid titles
				if (page.invalid) {
					ctx.statusElement.error(window.wgULS('标题不合法：', `標題不合法：${ctx.pageName}`));
					onFailure(this);
					return false; // abort
				}
				// retrieve actual title of the page after normalization and redirects
				const resolvedName = page.title;
				if (response.redirects) {
					// check for cross-namespace redirect:
					const origNs = new mw.Title(ctx.pageName).namespace;
					const newNs = new mw.Title(resolvedName).namespace;
					if (origNs !== newNs && !ctx.followCrossNsRedirect) {
						ctx.statusElement.error(
							ctx.pageName +
								window.wgULS('是跨命名空间重定向到', '是跨命名空間重新導向到') +
								resolvedName +
								window.wgULS('，略过', '，略過')
						);
						onFailure(this);
						return false;
					}
					// only notify user for redirects, not normalization
					new Morebits.status(
						window.wgULS('信息', '資訊'),
						window.wgULS('从 ', '從 ') +
							ctx.pageName +
							window.wgULS(' 重定向到 ', ' 重新導向到 ') +
							resolvedName
					);
				}
				ctx.pageName = resolvedName; // update to redirect target or normalized name
			} else {
				// could be a circular redirect or other problem
				ctx.statusElement.error(
					window.wgULS('不能解析页面的重定向：', '不能解析頁面的重新導向：') + ctx.pageName
				);
				onFailure(this);
				// force error to stay on the screen
				++Morebits.wiki.numberOfActionsLeft;
				return false; // abort
			}

			return true; // all OK
		};
		/**
		 * Determine whether we should provide a watchlist expiry.  Will not
		 * do so if the page is currently permanently watched, or the current
		 * expiry is *after* the new, provided expiry.  Only handles strings
		 * recognized by {@link Morebits.date} or relative timeframes with
		 * unit it can process.  Relies on the fact that fnCanUseMwUserToken
		 * requires page loading if a watchlistexpiry is provided, so we are
		 * ensured of knowing the watch status by the use of this.
		 *
		 * @returns {boolean}
		 */
		const fnApplyWatchlistExpiry = () => {
			if (ctx.watchlistExpiry) {
				if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
					return true;
				} else if (typeof ctx.watched === 'string') {
					let newExpiry;
					// Attempt to determine if the new expiry is a
					// relative (e.g. `1 month`) or absolute datetime
					const rel = ctx.watchlistExpiry.split(' ');
					try {
						newExpiry = new Morebits.date().add(rel[0], rel[1]);
					} catch {
						newExpiry = new Morebits.date(ctx.watchlistExpiry);
					}
					// If the date is valid, only use it if it extends the current expiry
					if (newExpiry.isValid()) {
						if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
							return true;
						}
					} else {
						// If it's still not valid, hope it's a valid MW expiry format that
						// Morebits.date doesn't recognize, so just default to using it.
						// This will also include minor typos.
						return true;
					}
				}
			}
			return false;
		};
		// callback from saveApi.post()
		const fnSaveSuccess = function () {
			ctx.editMode = 'all'; // cancel append/prepend/newSection/revert modes
			const response = ctx.saveApi.getResponse();
			// see if the API thinks we were successful
			if (response.edit.result === 'Success') {
				// real success
				// default on success action - display link for edited page
				const link = document.createElement('a');
				link.setAttribute('href', mw.util.getUrl(ctx.pageName));
				link.appendChild(document.createTextNode(ctx.pageName));
				ctx.statusElement.info(['完成（', link, '）']);
				if (ctx.onSaveSuccess) {
					ctx.onSaveSuccess(this); // invoke callback
				}

				return;
			}
			// errors here are only generated by extensions which hook APIEditBeforeSave within MediaWiki,
			// which as of 1.34.0-wmf.23 (Sept 2019) should only encompass captcha messages
			if (response.edit.captcha) {
				ctx.statusElement.error(
					window.wgULS('不能保存页面，因服务器要求您输入验证码。', '不能儲存頁面，因伺服器要求您輸入驗證碼。')
				);
			} else {
				ctx.statusElement.error(window.wgULS('保存页面时由API得到未知错误', '儲存頁面時由API得到未知錯誤'));
			}
			// force error to stay on the screen
			++Morebits.wiki.numberOfActionsLeft;
			ctx.onSaveFailure(this);
		};
		// callback from saveApi.post()
		const fnSaveError = function () {
			const errorCode = ctx.saveApi.getErrorCode();
			// check for edit conflict
			if (errorCode === 'editconflict' && ctx.conflictRetries++ < ctx.maxConflictRetries) {
				// edit conflicts can occur when the page needs to be purged from the server cache
				const purgeQuery = {
					action: 'purge',
					titles: ctx.pageName, // redirects are already resolved
				};

				const purgeApi = new Morebits.wiki.api(
					window.wgULS('检测到编辑冲突，正在更新服务器缓存', '檢測到編輯衝突，正在更新伺服器快取'),
					purgeQuery,
					() => {
						--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
						ctx.statusElement.info(window.wgULS('检测到编辑冲突，重试修改', '檢測到編輯衝突，重試修改'));
						if (fnCanUseMwUserToken('edit')) {
							ctx.saveApi.post(); // necessarily append, prepend, or newSection, so this should work as desired
						} else {
							ctx.loadApi.post(); // reload the page and reapply the edit
						}
					},
					ctx.statusElement
				);
				purgeApi.post();
				// check for network or server error
			} else if ((errorCode === null || errorCode === undefined) && ctx.retries++ < ctx.maxRetries) {
				// the error might be transient, so try again
				ctx.statusElement.info(window.wgULS('保存失败，在2秒后重试……', '儲存失敗，在2秒後重試……'));
				--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
				// wait for sometime for client to regain connectivity
				sleep(2000).then(() => {
					ctx.saveApi.post(); // give it another go!
				});
				// hard error, give up
			} else {
				const response = ctx.saveApi.getResponse();
				const errorData =
					response.error ||
					// bc error format
					response.errors[0].data; // html/wikitext/plaintext error format
				switch (errorCode) {
					case 'protectedpage':
						// non-admin attempting to edit a protected page - this gives a friendlier message than the default
						ctx.statusElement.error(window.wgULS('不能保存修改：页面被保护', '不能儲存修改：頁面被保護'));
						break;
					case 'abusefilter-disallowed':
						ctx.statusElement.error(
							window.wgULS('编辑被防滥用过滤器规则“', '編輯被防濫用過濾器規則「') +
								errorData.abusefilter.description +
								window.wgULS(
									'”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。',
									'」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。'
								)
						);
						break;
					case 'abusefilter-warning':
						ctx.statusElement.error([
							window.wgULS('编辑被防滥用过滤器规则“', '編輯被防濫用過濾器規則「'),
							errorData.abusefilter.description,
							window.wgULS(
								'”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。',
								'」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。'
							),
						]);
						// We should provide the user with a way to automatically retry the action if they so choose -
						// I can't see how to do this without creating a UI dependency on Morebits.wiki.page though -- TTO
						break;
					case 'spamblacklist': {
						// If multiple items are blacklisted, we only return the first
						const [spam] = errorData.spamblacklist.matches;
						ctx.statusElement.error(
							window.wgULS('不能保存页面，因URL ', '不能儲存頁面，因URL ') +
								spam +
								window.wgULS(' 在垃圾链接黑名单中。', ' 在垃圾連結黑名單中。')
						);
						break;
					}
					default:
						ctx.statusElement.error(
							window.wgULS('不能保存修改：', '不能儲存修改：') + ctx.saveApi.getErrorText()
						);
				}
				ctx.editMode = 'all'; // cancel append/prepend/newSection/revert modes
				if (ctx.onSaveFailure) {
					ctx.onSaveFailure(this); // invoke callback
				}
			}
		};

		const isTextRedirect = (text) => {
			if (!text) {
				// no text - content empty or inaccessible (revdelled or suppressed)
				return false;
			}
			return Morebits.l10n.redirectTagAliases.some((tag) => {
				return new RegExp(`^\\s*${tag}\\W`, 'i').test(text);
			});
		};
		const fnLookupCreationSuccess = function () {
			const response = ctx.lookupCreationApi.getResponse().query;
			if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
				return; // abort
			}

			const rev = response.pages[0].revisions && response.pages[0].revisions[0];
			if (!rev) {
				ctx.statusElement.error(
					window.wgULS('无法找到', '無法找到') +
						ctx.pageName +
						window.wgULS('的任何修订版本', '的任何修訂版本')
				);
				ctx.onLookupCreationFailure(this);
				return;
			}
			if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
				ctx.creator = rev.user;
				if (!ctx.creator) {
					ctx.statusElement.error(window.wgULS('无法获取页面创建者的名字', '無法取得頁面建立者的名字'));
					ctx.onLookupCreationFailure(this);
					return;
				}
				ctx.timestamp = rev.timestamp;
				if (!ctx.timestamp) {
					ctx.statusElement.error(window.wgULS('无法获取页面创建时间', '無法取得頁面建立時間'));
					ctx.onLookupCreationFailure(this);
					return;
				}
				ctx.statusElement.info(window.wgULS('已获取页面创建信息', '已取得頁面建立資訊'));
				ctx.onLookupCreationSuccess(this);
			} else {
				ctx.lookupCreationApi.query.rvlimit = 50; // modify previous query to fetch more revisions
				ctx.lookupCreationApi.query.titles = ctx.pageName; // update pageName if redirect resolution took place in earlier query
				ctx.lookupCreationApi = new Morebits.wiki.api(
					window.wgULS('获取页面创建信息', '取得頁面建立資訊'),
					ctx.lookupCreationApi.query,
					fnLookupNonRedirectCreator,
					ctx.statusElement,
					ctx.onLookupCreationFailure
				);
				ctx.lookupCreationApi.setParent(this);
				ctx.lookupCreationApi.post();
			}
		};
		const fnLookupNonRedirectCreator = function () {
			const response = ctx.lookupCreationApi.getResponse().query;
			const revs = response.pages[0].revisions;
			for (const rev of revs) {
				if (!isTextRedirect(rev.content)) {
					ctx.creator = rev.user;
					ctx.timestamp = rev.timestamp;
					break;
				}
			}
			if (!ctx.creator) {
				// fallback to give first revision author if no non-redirect version in the first 50
				ctx.creator = revs[0].user;
				ctx.timestamp = revs[0].timestamp;
				if (!ctx.creator) {
					ctx.statusElement.error(window.wgULS('无法获取页面创建者的名字', '無法取得頁面建立者的名字'));
					ctx.onLookupCreationFailure(this);
					return;
				}
			}
			if (!ctx.timestamp) {
				ctx.statusElement.error(window.wgULS('无法获取页面创建时间', '無法取得頁面建立時間'));
				ctx.onLookupCreationFailure(this);
				return;
			}
			ctx.statusElement.info(window.wgULS('已获取页面创建信息', '已取得頁面建立資訊'));
			ctx.onLookupCreationSuccess(this);
		};
		/**
		 * Common checks for action methods. Used for move, undelete, delete,
		 * protect.
		 *
		 * @param {string} action - The action being checked.
		 * @param {string} onFailure - Failure callback.
		 * @returns {boolean}
		 */
		const fnPreflightChecks = function (action, onFailure) {
			// if a non-admin tries to do this, don't bother
			if (!Morebits.userIsSysop && action !== 'move') {
				ctx.statusElement.error(
					window.wgULS('无法对页面进行“', '無法對頁面進行「') +
						action +
						window.wgULS('”操作：只有管理员可以进行此操作', '」操作：只有管理員可以進行此操作')
				);
				onFailure(this);
				return false;
			}
			if (!ctx.editSummary) {
				ctx.statusElement.error(`Internal error: ${action} reason not set (use setEditSummary function)!`);
				onFailure(this);
				return false;
			}
			return true; // all OK
		};
		/**
		 * Common checks for fnProcess functions (`fnProcessDelete`, `fnProcessMove`, etc.
		 * Used for move, undelete, delete, protect.
		 *
		 * @param {string} action - The action being checked.
		 * @param {string} onFailure - Failure callback.
		 * @param {string} response - The response document from the API call.
		 * @returns {boolean}
		 */
		const fnProcessChecks = function (action, onFailure, response) {
			const [{missing}] = response.pages;
			// No undelete as an existing page could have deleted revisions
			const actionMissing = missing && ['delete', 'move'].includes(action);
			const protectMissing = action === 'protect' && missing && (ctx.protectEdit || ctx.protectMove);
			const saltMissing = action === 'protect' && !missing && ctx.protectCreate;
			if (actionMissing || protectMissing || saltMissing) {
				ctx.statusElement.error(
					`${
						window.wgULS('无法对页面进行“', '無法對頁面進行「') +
						action +
						window.wgULS('”操作，因为页面', '」操作，因為頁面') +
						(missing ? '已不' : window.wgULS('已经', '已經'))
					}存在`
				);
				onFailure(this);
				return false;
			}
			// Delete, undelete, move
			// extract protection info
			let editprot;
			if (action === 'undelete') {
				editprot = response.pages[0].protection
					.filter((pr) => {
						return pr.type === 'create' && pr.level === 'sysop';
					})
					.pop();
			} else if (action === 'delete' || action === 'move') {
				editprot = response.pages[0].protection
					.filter((pr) => {
						return pr.type === 'edit' && pr.level === 'sysop';
					})
					.pop();
			}
			if (
				editprot &&
				!ctx.suppressProtectWarning &&
				!confirm(
					window.wgULS('您即将对全保护页面“', '您即將對全保護頁面「') +
						ctx.pageName +
						(editprot.expiry === 'infinity'
							? window.wgULS('”（永久）', '」（永久）')
							: `${
									window.wgULS('”（到期：', '」（到期：') +
									new Morebits.date(editprot.expiry).calendar('utc')
								} (UTC)）`) +
						window.wgULS('”进行“', '」進行「') +
						action +
						window.wgULS('”操作', '」操作') +
						window.wgULS(
							'。\n\n单击确定以继续操作，或单击取消以取消操作。',
							'。\n\n點擊確定以繼續操作，或點擊取消以取消操作。'
						)
				)
			) {
				ctx.statusElement.error(window.wgULS('已取消对全保护页面的操作。', '已取消對全保護頁面的操作。'));
				onFailure(this);
				return false;
			}
			if (!response.tokens.csrftoken) {
				ctx.statusElement.error(window.wgULS('无法获取令牌。', '無法取得權杖。'));
				onFailure(this);
				return false;
			}
			return true; // all OK
		};

		const fnProcessMove = function () {
			let pageTitle;
			let token;
			if (fnCanUseMwUserToken('move')) {
				token = mw.user.tokens.get('csrfToken');
				pageTitle = ctx.pageName;
			} else {
				const response = ctx.moveApi.getResponse().query;
				if (!fnProcessChecks('move', ctx.onMoveFailure, response)) {
					return; // abort
				}

				token = response.tokens.csrftoken;
				const [page] = response.pages;
				pageTitle = page.title;
				ctx.watched = page.watchlistexpiry || page.watched;
			}
			const query = {
				action: 'move',
				from: pageTitle,
				to: ctx.moveDestination,
				token,
				reason: ctx.editSummary,
				watchlist: ctx.watchlistOption,
				format: 'json',
			};
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			if (fnApplyWatchlistExpiry()) {
				query.watchlistexpiry = ctx.watchlistExpiry;
			}
			if (ctx.moveTalkPage) {
				query.movetalk = 'true';
			}
			if (ctx.moveSubpages) {
				query.movesubpages = 'true';
			}
			if (ctx.moveSuppressRedirect) {
				query.noredirect = 'true';
			}
			ctx.moveProcessApi = new Morebits.wiki.api(
				window.wgULS('移动页面……', '移動頁面……'),
				query,
				ctx.onMoveSuccess,
				ctx.statusElement,
				ctx.onMoveFailure
			);
			ctx.moveProcessApi.setParent(this);
			ctx.moveProcessApi.post();
		};
		const fnProcessPatrol = function () {
			const query = {
				action: 'patrol',
				format: 'json',
			};
			// Didn't need to load the page
			if (ctx.rcid) {
				query.rcid = ctx.rcid;
				query.token = mw.user.tokens.get('patrolToken');
			} else {
				const response = ctx.patrolApi.getResponse().query;
				// Don't patrol if not unpatrolled
				if (!response.recentchanges[0].unpatrolled) {
					return;
				}
				const [{lastrevid}] = response.pages;
				if (!lastrevid) {
					return;
				}
				query.revid = lastrevid;
				const token = response.tokens.csrftoken;
				if (!token) {
					return;
				}
				query.token = token;
			}
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			const patrolStat = new Morebits.status(window.wgULS('标记页面为已巡查', '標記頁面為已巡查'));
			ctx.patrolProcessApi = new Morebits.wiki.api(
				window.wgULS('巡查页面……', '巡查頁面……'),
				query,
				null,
				patrolStat
			);
			ctx.patrolProcessApi.setParent(this);
			ctx.patrolProcessApi.post();
		};
		const fnProcessDelete = function () {
			let pageTitle;
			let token;
			if (fnCanUseMwUserToken('delete')) {
				token = mw.user.tokens.get('csrfToken');
				pageTitle = ctx.pageName;
			} else {
				const response = ctx.deleteApi.getResponse().query;
				if (!fnProcessChecks('delete', ctx.onDeleteFailure, response)) {
					return; // abort
				}

				token = response.tokens.csrftoken;
				const [page] = response.pages;
				pageTitle = page.title;
				ctx.watched = page.watchlistexpiry || page.watched;
			}
			const query = {
				action: 'delete',
				title: pageTitle,
				token,
				reason: ctx.editSummary,
				watchlist: ctx.watchlistOption,
				format: 'json',
			};
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			if (fnApplyWatchlistExpiry()) {
				query.watchlistexpiry = ctx.watchlistExpiry;
			}
			ctx.deleteProcessApi = new Morebits.wiki.api(
				window.wgULS('删除页面……', '刪除頁面……'),
				query,
				ctx.onDeleteSuccess,
				ctx.statusElement,
				fnProcessDeleteError
			);
			ctx.deleteProcessApi.setParent(this);
			ctx.deleteProcessApi.post();
		};
		// callback from deleteProcessApi.post()
		const fnProcessDeleteError = function () {
			const errorCode = ctx.deleteProcessApi.getErrorCode();
			// check for "Database query error"
			if (errorCode === 'internal_api_error_DBQueryError' && ctx.retries++ < ctx.maxRetries) {
				ctx.statusElement.info(window.wgULS('数据库查询错误，重试', '資料庫查詢錯誤，重試'));
				--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
				ctx.deleteProcessApi.post(); // give it another go!
			} else if (errorCode === 'missingtitle') {
				ctx.statusElement.error(window.wgULS('不能删除页面，因其已不存在', '不能刪除頁面，因其已不存在'));
				if (ctx.onDeleteFailure) {
					ctx.onDeleteFailure.call(this, ctx.deleteProcessApi); // invoke callback
				}
				// hard error, give up
			} else {
				ctx.statusElement.error(
					window.wgULS('无法删除页面：', '無法刪除頁面：') + ctx.deleteProcessApi.getErrorText()
				);
				if (ctx.onDeleteFailure) {
					ctx.onDeleteFailure.call(this, ctx.deleteProcessApi); // invoke callback
				}
			}
		};

		const fnProcessUndelete = function () {
			let pageTitle;
			let token;
			if (fnCanUseMwUserToken('undelete')) {
				token = mw.user.tokens.get('csrfToken');
				pageTitle = ctx.pageName;
			} else {
				const response = ctx.undeleteApi.getResponse().query;
				if (!fnProcessChecks('undelete', ctx.onUndeleteFailure, response)) {
					return; // abort
				}

				token = response.tokens.csrftoken;
				const [page] = response.pages;
				pageTitle = page.title;
				ctx.watched = page.watchlistexpiry || page.watched;
			}
			const query = {
				action: 'undelete',
				title: pageTitle,
				token,
				reason: ctx.editSummary,
				watchlist: ctx.watchlistOption,
				format: 'json',
			};
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			if (fnApplyWatchlistExpiry()) {
				query.watchlistexpiry = ctx.watchlistExpiry;
			}
			ctx.undeleteProcessApi = new Morebits.wiki.api(
				window.wgULS('还原页面……', '還原頁面……'),
				query,
				ctx.onUndeleteSuccess,
				ctx.statusElement,
				fnProcessUndeleteError
			);
			ctx.undeleteProcessApi.setParent(this);
			ctx.undeleteProcessApi.post();
		};
		// callback from undeleteProcessApi.post()
		const fnProcessUndeleteError = function () {
			const errorCode = ctx.undeleteProcessApi.getErrorCode();
			// check for "Database query error"
			if (errorCode === 'internal_api_error_DBQueryError') {
				if (ctx.retries++ < ctx.maxRetries) {
					ctx.statusElement.info(window.wgULS('数据库查询错误，重试', '資料庫查詢錯誤，重試'));
					--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
					ctx.undeleteProcessApi.post(); // give it another go!
				} else {
					ctx.statusElement.error(
						window.wgULS(
							'持续的数据库查询错误，重新加载页面并重试',
							'持續的資料庫查詢錯誤，重新載入頁面並重試'
						)
					);
					if (ctx.onUndeleteFailure) {
						ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi); // invoke callback
					}
				}
			} else if (errorCode === 'cantundelete') {
				ctx.statusElement.error(
					window.wgULS(
						'无法还原删除页面，因没有版本供还原或已被还原',
						'無法還原刪除頁面，因沒有版本供還原或已被還原'
					)
				);
				if (ctx.onUndeleteFailure) {
					ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi); // invoke callback
				}
				// hard error, give up
			} else {
				ctx.statusElement.error(
					window.wgULS('无法还原页面：', '無法還原頁面：') + ctx.undeleteProcessApi.getErrorText()
				);
				if (ctx.onUndeleteFailure) {
					ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi); // invoke callback
				}
			}
		};

		const fnProcessProtect = function () {
			const response = ctx.protectApi.getResponse().query;
			if (!fnProcessChecks('protect', ctx.onProtectFailure, response)) {
				return; // abort
			}

			const token = response.tokens.csrftoken;
			const [page] = response.pages;
			const pageTitle = page.title;
			ctx.watched = page.watchlistexpiry || page.watched;
			// Fetch existing protection levels
			const prs = response.pages[0].protection;
			let editprot;
			let moveprot;
			let createprot;
			for (const pr of prs) {
				// Filter out protection from cascading
				if (pr.type === 'edit' && !pr.source) {
					editprot = pr;
				} else if (pr.type === 'move') {
					moveprot = pr;
				} else if (pr.type === 'create') {
					createprot = pr;
				}
			}
			// Fall back to current levels if not explicitly set
			if (!ctx.protectEdit && editprot) {
				ctx.protectEdit = {
					level: editprot.level,
					expiry: editprot.expiry,
				};
			}
			if (!ctx.protectMove && moveprot) {
				ctx.protectMove = {
					level: moveprot.level,
					expiry: moveprot.expiry,
				};
			}
			if (!ctx.protectCreate && createprot) {
				ctx.protectCreate = {
					level: createprot.level,
					expiry: createprot.expiry,
				};
			}
			// Default to pre-existing cascading protection if unchanged (similar to above)
			if (ctx.protectCascade === null) {
				ctx.protectCascade = !!prs.filter((pr) => {
					return pr.cascade;
				}).length;
			}
			// Warn if cascading protection being applied with an invalid protection level,
			// which for edit protection will cause cascading to be silently stripped
			if (ctx.protectCascade) {
				// On move protection, this is technically stricter than the MW API,
				// but seems reasonable to avoid dumb values and misleading log entries (T265626)
				if (
					(!ctx.protectEdit ||
						ctx.protectEdit.level !== 'sysop' ||
						!ctx.protectMove ||
						ctx.protectMove.level !== 'sysop') &&
					!confirm(
						window.wgULS('您已对“', '您已對「') +
							ctx.pageName +
							window.wgULS('”启用了连锁保护', '」啟用了連鎖保護') +
							window.wgULS(
								'，但没有设置仅管理员的保护级别。\n\n',
								'，但沒有設定僅管理員的保護級別。\n\n'
							) +
							window.wgULS(
								'单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作',
								'點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作'
							)
					)
				) {
					ctx.statusElement.error(window.wgULS('连锁保护已取消。', '連鎖保護已取消。'));
					ctx.onProtectFailure(this);
					return;
				}
				ctx.protectEdit.level = 'sysop';
				ctx.protectMove.level = 'sysop';
			}
			// Build protection levels and expirys (expiries?) for query
			const protections = [];
			const expirys = [];
			if (ctx.protectEdit) {
				protections.push(`edit=${ctx.protectEdit.level}`);
				expirys.push(ctx.protectEdit.expiry);
			}
			if (ctx.protectMove) {
				protections.push(`move=${ctx.protectMove.level}`);
				expirys.push(ctx.protectMove.expiry);
			}
			if (ctx.protectCreate) {
				protections.push(`create=${ctx.protectCreate.level}`);
				expirys.push(ctx.protectCreate.expiry);
			}
			const query = {
				action: 'protect',
				title: pageTitle,
				token,
				protections: protections.join('|'),
				expiry: expirys.join('|'),
				reason: ctx.editSummary,
				watchlist: ctx.watchlistOption,
				format: 'json',
			};
			// Only shows up in logs, not page history
			if (ctx.changeTags) {
				query.tags = ctx.changeTags;
			}
			if (fnApplyWatchlistExpiry()) {
				query.watchlistexpiry = ctx.watchlistExpiry;
			}
			if (ctx.protectCascade) {
				query.cascade = 'true';
			}
			ctx.protectProcessApi = new Morebits.wiki.api(
				window.wgULS('保护页面……', '保護頁面……'),
				query,
				ctx.onProtectSuccess,
				ctx.statusElement,
				ctx.onProtectFailure
			);
			ctx.protectProcessApi.setParent(this);
			ctx.protectProcessApi.post();
		};
		const sleep = (milliseconds) => {
			const deferred = $.Deferred();
			setTimeout(deferred.resolve, milliseconds);
			return deferred;
		};
	}; // end Morebits.wiki.page
	/* **************** Morebits.wiki.preview **************** */
	/**
	 * Use the API to parse a fragment of wikitext and render it as HTML.
	 *
	 * The suggested implementation pattern (in {@link Morebits.simpleWindow} and
	 * {@link Morebits.quickForm} situations) is to construct a
	 * `Morebits.wiki.preview` object after rendering a `Morebits.quickForm`, and
	 * bind the object to an arbitrary property of the form (e.g. |previewer|).
	 * For an example, see twinklewarn.js.
	 *
	 * @memberof Morebits.wiki
	 * @class
	 * @param {HTMLElement} previewbox - The element that will contain the rendered HTML,
	 * usually a <div> element.
	 */
	Morebits.wiki.preview = function (previewbox) {
		this.previewbox = previewbox;
		$(previewbox).addClass('morebits-previewbox').hide();
		/**
		 * Displays the preview box, and begins an asynchronous attempt
		 * to render the specified wikitext.
		 *
		 * @param {string} wikitext - Wikitext to render; most things should work, including `subst:` and `~~~~`.
		 * @param {string} [pageTitle] - Optional parameter for the page this should be rendered as being on, if omitted it is taken as the current page.
		 * @param {string} [sectionTitle] - If provided, render the text as a new section using this as the title.
		 * @returns {jQuery.promise}
		 */
		this.beginRender = (wikitext, pageTitle, sectionTitle) => {
			$(previewbox).show();
			const statusspan = document.createElement('span');
			previewbox.appendChild(statusspan);
			Morebits.status.init(statusspan);
			// 若页面不是wikitext（例如JS、CSS等），那么找一个wikitext页面来预览。
			let pageName = mw.config.get('wgPageName');
			if (mw.config.get('wgPageContentModel') !== 'wikitext') {
				pageName = `Draft:${pageName}`;
			}
			const query = {
				action: 'parse',
				prop: ['text', 'modules'],
				pst: true,
				// PST = pre-save transform; this makes substitution work properly
				preview: true,
				text: wikitext,
				title: pageTitle || pageName,
				disablelimitreport: true,
				disableeditsection: true,
				uselang: mw.config.get('wgUserLanguage'),
				// Use wgUserLanguage for preview
				format: 'json',
			};
			if (sectionTitle) {
				query.section = 'new';
				query.sectiontitle = sectionTitle;
			}
			const renderApi = new Morebits.wiki.api(
				window.wgULS('加载中……', '載入中……'),
				query,
				fnRenderSuccess,
				new Morebits.status(window.wgULS('预览', '預覽'))
			);
			renderApi.post();
		};
		const fnRenderSuccess = (apiobj) => {
			const response = apiobj.getResponse();
			const html = response.parse.text;
			if (!html) {
				apiobj.statelem.error(window.wgULS('加载预览失败，或模板为空', '載入預覽失敗，或模板為空'));
				return;
			}
			previewbox.innerHTML = html;
			mw.loader.load(response.parse.modulestyles);
			mw.loader.load(response.parse.modules);
			// this makes links open in new tab
			$(previewbox).find('a').attr('target', '_blank').attr('rel', 'noopener noreferrer');
		};
		/** Hides the preview box and clears it. */
		this.closePreview = () => {
			$(previewbox).empty().hide();
		};
	};
	/* **************** Morebits.wikitext **************** */
	/**
	 * Wikitext manipulation.
	 *
	 * @namespace Morebits.wikitext
	 * @memberof Morebits
	 */
	Morebits.wikitext = {};
	/**
	 * Get the value of every parameter found in the wikitext of a given template.
	 *
	 * @memberof Morebits.wikitext
	 * @param {string} text - Wikitext containing a template.
	 * @param {number} [start=0] - Index noting where in the text the template begins.
	 * @returns {Object} `{name: templateName, parameters: {key: value}}`.
	 */
	Morebits.wikitext.parseTemplate = (text, start) => {
		start ||= 0;
		const level = []; // Track of how deep we are ({{, {{{, or [[)
		let count = -1; // Number of parameters found
		let unnamed = 0; // Keep track of what number an unnamed parameter should receive
		let equals = -1; // After finding "=" before a parameter, the index; otherwise, -1
		let current = '';
		const result = {
			name: '',
			parameters: {},
		};
		let key;
		let value;
		/**
		 * Function to handle finding parameter values.
		 *
		 * @param {boolean} [final=false] - Whether this is the final
		 * parameter and we need to remove the trailing `}}`.
		 */
		const findParam = (final) => {
			// Nothing found yet, this must be the template name
			if (count === -1) {
				result.name = current.slice(2).trim();
				++count;
			} else if (equals === -1) {
				// In a parameter
				// No equals, so it must be unnamed; no trim since whitespace allowed
				const param = final ? current.slice(equals + 1, -2) : current;
				if (param) {
					result.parameters[++unnamed] = param;
					++count;
				}
			} else {
				// We found an equals, so save the parameter as key: value
				key = current.slice(0, Math.max(0, equals)).trim();
				value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
				result.parameters[key] = value;
				equals = -1;
			}
		};
		for (let i = start; i < text.length; ++i) {
			const test3 = text.slice(i, i + 3);
			if (test3 === '{{{' || (test3 === '}}}' && level.at(-1) === 3)) {
				current += test3;
				i += 2;
				if (test3 === '{{{') {
					level.push(3);
				} else {
					level.pop();
				}
				continue;
			}
			const test2 = text.slice(i, i + 2);
			// Entering a template (or link)
			if (test2 === '{{' || test2 === '[[') {
				current += test2;
				++i;
				if (test2 === '{{') {
					level.push(2);
				} else {
					level.push('wl');
				}
				continue;
			}
			// Either leaving a link or template/parser function
			if ((test2 === '}}' && level.at(-1) === 2) || (test2 === ']]' && level.at(-1) === 'wl')) {
				current += test2;
				++i;
				level.pop();
				// Find the final parameter if this really is the end
				if (test2 === '}}' && level.length === 0) {
					findParam(true);
					break;
				}
				continue;
			}
			if (text.charAt(i) === '|' && level.length === 1) {
				// Another pipe found, toplevel, so parameter coming up!
				findParam();
				current = '';
			} else if (equals === -1 && text.charAt(i) === '=' && level.length === 1) {
				// Equals found, toplevel
				equals = current.length;
				current += text.charAt(i);
			} else {
				// Just advance the position
				current += text.charAt(i);
			}
		}
		return result;
	};
	/**
	 * Adjust and manipulate the wikitext of a page.
	 *
	 * @class
	 * @memberof Morebits.wikitext
	 * @param {string} text - Wikitext to be manipulated.
	 */
	Morebits.wikitext.page = function (text) {
		this.text = text;
	};
	Morebits.wikitext.page.prototype = {
		text: '',
		/**
		 * Removes links to `link_target` from the page text.
		 *
		 * @param {string} linkTarget
		 * @returns {Morebits.wikitext.page}
		 */
		removeLink(linkTarget) {
			const mwTitle = mw.Title.newFromText(linkTarget);
			const namespaceID = mwTitle.getNamespaceId();
			const title = mwTitle.getMainText();
			let linkRegexString = '';
			if (namespaceID !== 0) {
				linkRegexString = `${Morebits.namespaceRegex(namespaceID)}:`;
			}
			linkRegexString += Morebits.pageNameRegex(title);
			// For most namespaces, unlink both [[User:Test]] and [[:User:Test]]
			// For files and categories, only unlink [[:Category:Test]]. Do not unlink [[Category:Test]]
			const isFileOrCategory = [6, 14].includes(namespaceID);
			const colon = isFileOrCategory ? ':' : ':?';
			const simpleLinkRegex = new RegExp(`\\[\\[${colon}(${linkRegexString})\\]\\]`, 'g');
			const pipedLinkRegex = new RegExp(`\\[\\[${colon}${linkRegexString}\\|(.+?)\\]\\]`, 'g');
			this.text = this.text.replace(simpleLinkRegex, '$1').replace(pipedLinkRegex, '$1');
			return this;
		},
		/**
		 * Comments out images from page text; if used in a gallery, deletes the whole line.
		 * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
		 *
		 * @param {string} image - Image name without `File:` prefix.
		 * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
		 * @returns {Morebits.wikitext.page}
		 */
		commentOutImage(image, reason) {
			const unbinder = new Morebits.unbinder(this.text);
			unbinder.unbind('<!--', '-->');
			reason = reason ? `${reason}: ` : '';
			const imageRegexString = Morebits.pageNameRegex(image);
			// Check for normal image links, i.e. [[File:Foobar.png|...]]
			// Will eat the whole link
			const linksRegex = new RegExp(
				`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`
			);
			const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, '[[', ']]');
			for (const allLink of allLinks) {
				if (linksRegex.test(allLink)) {
					const replacement = `<!-- ${reason}${allLink} -->`;
					unbinder.content = unbinder.content.replace(allLink, replacement);
					// unbind the newly created comments
					unbinder.unbind('<!--', '-->');
				}
			}
			// Check for gallery images, i.e. instances that must start on a new line,
			// eventually preceded with some space, and must include File: prefix
			// Will eat the whole line.
			const galleryImageRegex = new RegExp(
				`(^\\s*${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*(?:\\|.*?$|$))`,
				'mg'
			);
			unbinder.content = unbinder.content.replace(galleryImageRegex, `<!-- ${reason}$1 -->`);
			// unbind the newly created comments
			unbinder.unbind('<!--', '-->');
			// Check free image usages, for example as template arguments, might have the File: prefix excluded, but must be preceded by an |
			// Will only eat the image name and the preceding bar and an eventual named parameter
			const freeImageRegex = new RegExp(
				`(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:${Morebits.namespaceRegex(6)}:\\s*)?${imageRegexString})`,
				'mg'
			);
			unbinder.content = unbinder.content.replace(freeImageRegex, `<!-- ${reason}$1 -->`);
			// Rebind the content now, we are done!
			this.text = unbinder.rebind();
			return this;
		},
		/**
		 * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
		 *
		 * @param {string} image - Image name without File: prefix.
		 * @param {string} data - The display options.
		 * @returns {Morebits.wikitext.page}
		 */
		addToImageComment(image, data) {
			const imageRegexString = Morebits.pageNameRegex(image);
			const linksRegex = new RegExp(
				`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`
			);
			const allLinks = Morebits.string.splitWeightedByKeys(this.text, '[[', ']]');
			for (let replacement of allLinks) {
				if (linksRegex.test(replacement)) {
					// just put it at the end?
					replacement = replacement.replace(/\]\]$/, `|${data}]]`);
					this.text = this.text.replace(replacement, replacement);
				}
			}
			const galleryRegex = new RegExp(`^(\\s*${imageRegexString}.*?)\\|?(.*?)$`, 'mg');
			const newtext = `$1|$2 ${data}`;
			this.text = this.text.replace(galleryRegex, newtext);
			return this;
		},
		/**
		 * Remove all transclusions of a template from page text.
		 *
		 * @param {string} template - Page name whose transclusions are to be removed,
		 * include namespace prefix only if not in template namespace.
		 * @returns {Morebits.wikitext.page}
		 */
		removeTemplate(template) {
			const templateRegexString = Morebits.pageNameRegex(template);
			const linksRegex = new RegExp(
				`\\{\\{(?:${Morebits.namespaceRegex(10)}:)?\\s*${templateRegexString}\\s*[\\|(?:\\}\\})]`
			);
			const allTemplates = Morebits.string.splitWeightedByKeys(this.text, '{{', '}}', ['{{{', '}}}']);
			for (const allTemplate of allTemplates) {
				if (linksRegex.test(allTemplate)) {
					this.text = this.text.replace(allTemplate, '');
				}
			}
			return this;
		},
		/**
		 * Smartly insert a tag atop page text but after specified templates,
		 * such as hatnotes, short description, or deletion and protection templates.
		 * Notably, does *not* insert a newline after the tag.
		 *
		 * @param {string} tag - The tag to be inserted.
		 * @param {string|string[]} regex - Templates after which to insert tag,
		 * given as either as a (regex-valid) string or an array to be joined by pipes.
		 * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
		 * other falsey values will default to `i`.
		 * @param {string|string[]} [preRegex] - Optional regex string or array to match
		 * before any template matches (i.e. before `{{`), such as html comments.
		 * @returns {Morebits.wikitext.page}
		 */
		insertAfterTemplates(tag, regex, flags, preRegex) {
			if (tag === undefined) {
				throw new TypeError('No tag provided');
			}
			// .length is only a property of strings and arrays so we
			// shouldn't need to check type
			if (regex === undefined || !regex.length) {
				throw new Error('No regex provided');
			} else if (Array.isArray(regex)) {
				regex = regex.join('|');
			}
			if (typeof flags !== 'string') {
				flags = 'i';
			}
			if (!preRegex || !preRegex.length) {
				preRegex = '';
			} else if (Array.isArray(preRegex)) {
				preRegex = preRegex.join('|');
			}
			// Regex is extra complicated to allow for templates with
			// parameters and to handle whitespace properly
			this.text = this.text.replace(
				new RegExp(
					// leading whitespace
					// capture template(s)
					// Pre-template regex, such as leading html comments
					// begin template format
					// Template regex
					// end main template name, optionally with a number
					// Probably remove the (?:) though
					// template parameters
					// end template format
					// end capture
					// trailing whitespace
					`^\\s*(?:((?:\\s*${
						// Pre-template regex, such as leading html comments
						preRegex
					}|\\{\\{\\s*(?:${
						// Template regex
						regex
					})\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?`,
					flags
				),
				`$1${tag}`
			);
			return this;
		},
		/**
		 * Get the manipulated wikitext.
		 *
		 * @returns {string}
		 */
		getText() {
			return this.text;
		},
	};
	/* *********** Morebits.userspaceLogger ************ */
	/**
	 * Handles logging actions to a userspace log.
	 * Used in CSD, PROD, and XFD.
	 *
	 * @memberof Morebits
	 * @class
	 * @param {string} logPageName - Title of the subpage of the current user's log.
	 */
	Morebits.userspaceLogger = function (logPageName) {
		if (!logPageName) {
			throw new Error('no log page name specified');
		}
		/**
		 * The text to prefix the log with upon creation, defaults to empty.
		 *
		 * @type {string}
		 */
		this.initialText = '';
		/**
		 * The header level to use for months, defaults to 3 (`===`).
		 *
		 * @type {number}
		 */
		this.headerLevel = 3;
		this.changeTags = '';
		/**
		 * Log the entry.
		 *
		 * @param {string} logText - Doesn't include leading `#` or `*`.
		 * @param {string} summaryText - Edit summary.
		 * @returns {JQuery.Promise}
		 */
		this.log = function (logText, summaryText) {
			const def = $.Deferred();
			if (!logText) {
				return def.reject();
			}
			const page = new Morebits.wiki.page(
				`User:${mw.config.get('wgUserName')}/${logPageName}`,
				window.wgULS('将项目加入到用户空间日志', '將項目加入到使用者空間日誌')
			); // make this '... to ' + logPageName ?
			page.load((pageobj) => {
				// add blurb if log page doesn't exist or is blank
				let text = pageobj.getPageText() || this.initialText;
				// create monthly header if it doesn't exist already
				const date = new Morebits.date(pageobj.getLoadTime());
				if (!date.monthHeaderRegex().exec(text)) {
					text += `\n\n${date.monthHeader(this.headerLevel)}`;
				}
				pageobj.setPageText(`${text}\n${logText}`);
				pageobj.setEditSummary(summaryText);
				pageobj.setChangeTags(this.changeTags);
				pageobj.setCreateOption('recreate');
				pageobj.save(def.resolve, def.reject);
			});
			return def;
		};
	};
	/* **************** Morebits.status **************** */
	/**
	 * Create and show status messages of varying urgency.
	 * {@link Morebits.status.init|Morebits.status.init()} must be called before
	 * any status object is created, otherwise those statuses won't be visible.
	 *
	 * @memberof Morebits
	 * @class
	 * @param {string} text - Text before the the colon `:`.
	 * @param {string} stat - Text after the colon `:`.
	 * @param {string} [type=status] - Determine the font color of the status
	 * line, allowable values are: `status` (blue), `info` (green), `warn` (red),
	 * or `error` (bold red).
	 */
	Morebits.status = function (text, stat, type) {
		this.textRaw = text;
		this.text = Morebits.createHtml(text);
		this.type = type || 'status';
		this.generate();
		if (stat) {
			this.update(stat, type);
		}
	};
	/**
	 * Specify an area for status message elements to be added to.
	 *
	 * @memberof Morebits.status
	 * @param {HTMLElement} root - Usually a div element.
	 * @throws If `root` is not an `HTMLElement`.
	 */
	Morebits.status.init = (root) => {
		if (!(root instanceof Element)) {
			throw new TypeError('object not an instance of Element');
		}
		while (root.hasChildNodes()) {
			root.removeChild(root.firstChild);
		}
		Morebits.status.root = root;
		Morebits.status.errorEvent = null;
	};
	Morebits.status.root = null;
	/**
	 * @memberof Morebits.status
	 * @param {Function} handler - Function to execute on error.
	 * @throws When `handler` is not a function.
	 */
	Morebits.status.onError = (handler) => {
		if (typeof handler === 'function') {
			Morebits.status.errorEvent = handler;
		} else {
			throw new TypeError('Morebits.status.onError: handler is not a function');
		}
	};
	Morebits.status.prototype = {
		stat: null,
		statRaw: null,
		text: null,
		textRaw: null,
		type: 'status',
		target: null,
		node: null,
		linked: false,
		/** Add the status element node to the DOM. */
		link() {
			if (!this.linked && Morebits.status.root) {
				Morebits.status.root.appendChild(this.node);
				this.linked = true;
			}
		},
		/** Remove the status element node from the DOM. */
		unlink() {
			if (this.linked) {
				Morebits.status.root.removeChild(this.node);
				this.linked = false;
			}
		},
		/**
		 * Update the status.
		 *
		 * @param {string} status - Part of status message after colon.
		 * @param {string} type - 'status' (blue), 'info' (green), 'warn'
		 * (red), or 'error' (bold red).
		 */
		update(status, type) {
			this.statRaw = status;
			this.stat = Morebits.createHtml(status);
			if (type) {
				this.type = type;
				if (type === 'error') {
					// hack to force the page not to reload when an error is output - see also Morebits.status() above
					Morebits.wiki.numberOfActionsLeft = 1000;
					// call error callback
					if (Morebits.status.errorEvent) {
						Morebits.status.errorEvent();
					}
					// also log error messages in the browser console
					console.error(`[Morebits] ${this.textRaw}: ${this.statRaw}`);
				}
			}
			this.render();
		},
		/** Produce the html for first part of the status message. */
		generate() {
			this.node = document.createElement('div');
			this.node.appendChild(document.createElement('span')).appendChild(this.text);
			this.node.appendChild(document.createElement('span')).appendChild(document.createTextNode(': '));
			this.target = this.node.appendChild(document.createElement('span'));
			this.target.appendChild(document.createTextNode('')); // dummy node
		},

		/** Complete the html, for the second part of the status message. */
		render() {
			this.node.className = `morebits_status_${this.type}`;
			while (this.target.hasChildNodes()) {
				this.target.removeChild(this.target.firstChild);
			}
			this.target.appendChild(this.stat);
			this.link();
		},
		status(status) {
			this.update(status, 'status');
		},
		info(status) {
			this.update(status, 'info');
		},
		warn(status) {
			this.update(status, 'warn');
		},
		error(status) {
			this.update(status, 'error');
		},
	};
	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `status`-type (blue)
	 */
	Morebits.status.status = (text, status) => {
		return new Morebits.status(text, status);
	};
	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `info`-type (green)
	 */
	Morebits.status.info = (text, status) => {
		return new Morebits.status(text, status, 'info');
	};
	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `warn`-type (red)
	 */
	Morebits.status.warn = (text, status) => {
		return new Morebits.status(text, status, 'warn');
	};
	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `error`-type (bold red)
	 */
	Morebits.status.error = (text, status) => {
		return new Morebits.status(text, status, 'error');
	};
	/**
	 * For the action complete message at the end, create a status line without
	 * a colon separator.
	 *
	 * @memberof Morebits.status
	 * @param {string} text
	 */
	Morebits.status.actionCompleted = (text) => {
		const node = document.createElement('div');
		node.appendChild(document.createElement('b')).appendChild(document.createTextNode(text));
		node.className = 'morebits_status_info morebits_action_complete';
		if (Morebits.status.root) {
			Morebits.status.root.appendChild(node);
		}
	};
	/**
	 * Display the user's rationale, comments, etc. Back to them after a failure,
	 * so that they may re-use it.
	 *
	 * @memberof Morebits.status
	 * @param {string} comments
	 * @param {string} message
	 */
	Morebits.status.printUserText = (comments, message) => {
		const p = document.createElement('p');
		p.innerHTML = message;
		const div = document.createElement('div');
		div.className = 'morebits-usertext';
		div.style.marginTop = '0';
		div.style.whiteSpace = 'pre-wrap';
		div.textContent = comments;
		p.appendChild(div);
		Morebits.status.root.appendChild(p);
	};
	/**
	 * Simple helper function to create a simple node.
	 *
	 * @param {string} type - Type of HTML element.
	 * @param {string} content - Text content.
	 * @param {string} [color] - Font color.
	 * @returns {HTMLElement}
	 */
	Morebits.htmlNode = (type, content, color) => {
		const node = document.createElement(type);
		if (color) {
			node.style.color = color;
		}
		node.appendChild(document.createTextNode(content));
		return node;
	};
	/**
	 * Add shift-click support for checkboxes. The wikibits version
	 * (`window.addCheckboxClickHandlers`) has some restrictions, and doesn't work
	 * with checkboxes inside a sortable table, so let's build our own.
	 *
	 * @param jQuerySelector
	 * @param jQueryContext
	 */
	Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
		let lastCheckbox = null;
		const clickHandler = function clickHandler(event) {
			const thisCb = this;
			if (event.shiftKey && lastCheckbox !== null) {
				const cbs = $(jQuerySelector, jQueryContext); // can't cache them, obviously, if we want to support resorting
				let index = -1;
				let lastIndex = -1;
				let i;
				for (i = 0; i < cbs.length; i++) {
					if (cbs[i] === thisCb) {
						index = i;
						if (lastIndex > -1) {
							break;
						}
					}
					if (cbs[i] === lastCheckbox) {
						lastIndex = i;
						if (index > -1) {
							break;
						}
					}
				}
				if (index > -1 && lastIndex > -1) {
					// inspired by wikibits
					const endState = thisCb.checked;
					let start;
					let finish;
					if (index < lastIndex) {
						start = index + 1;
						finish = lastIndex;
					} else {
						start = lastIndex;
						finish = index - 1;
					}
					for (i = start; i <= finish; i++) {
						if (cbs[i].checked !== endState) {
							cbs[i].click();
						}
					}
				}
			}
			lastCheckbox = thisCb;
			return true;
		};
		$(jQuerySelector, jQueryContext).on('click', clickHandler);
	};
	/* **************** Morebits.batchOperation **************** */
	/**
	 * Iterates over a group of pages (or arbitrary objects) and executes a worker function
	 * for each.
	 *
	 * `setPageList(pageList)`: Sets the list of pages to work on. It should be an
	 * array of page names strings.
	 *
	 * `setOption(optionName, optionValue)`: Sets a known option:
	 * - `chunkSize` (integer): The size of chunks to break the array into (default
	 * 50). Setting this to a small value (<5) can cause problems.
	 * - `preserveIndividualStatusLines` (boolean): Keep each page's status element
	 * visible when worker is complete? See note below.
	 *
	 * `run(worker, postFinish)`: Runs the callback `worker` for each page in the
	 * list.  The callback must call `workerSuccess` when succeeding, or
	 * `workerFailure` when failing.  If using {@link Morebits.wiki.api} or
	 * {@link Morebits.wiki.page}, this is easily done by passing these two
	 * functions as parameters to the methods on those objects: for instance,
	 * `page.save(batchOp.workerSuccess, batchOp.workerFailure)`.  Make sure the
	 * methods are called directly if special success/failure cases arise.  If you
	 * omit to call these methods, the batch operation will stall after the first
	 * chunk!  Also ensure that either workerSuccess or workerFailure is called no
	 * more than once.  The second callback `postFinish` is executed when the
	 * entire batch has been processed.
	 *
	 * If using `preserveIndividualStatusLines`, you should try to ensure that the
	 * `workerSuccess` callback has access to the page title.  This is no problem for
	 * {@link Morebits.wiki.page} objects.  But when using the API, please set the
	 * |pageName| property on the {@link Morebits.wiki.api} object.
	 *
	 * There are sample batchOperation implementations using Morebits.wiki.page in
	 * twinklebatchdelete.js, twinklebatchundelete.js, and twinklebatchprotect.js.
	 *
	 * @memberof Morebits
	 * @class
	 * @param {string} [currentAction]
	 */
	Morebits.batchOperation = function (currentAction) {
		const ctx = {
			// backing fields for public properties
			pageList: null,
			options: {
				chunkSize: 50,
				preserveIndividualStatusLines: false,
			},
			// internal counters, etc.
			statusElement: new Morebits.status(currentAction || window.wgULS('执行批量操作', '執行批次操作')),
			worker: null,
			// function that executes for each item in pageList
			postFinish: null,
			// function that executes when the whole batch has been processed
			countStarted: 0,
			countFinished: 0,
			countFinishedSuccess: 0,
			currentChunkIndex: -1,
			pageChunks: [],
			running: false,
		};
		// shouldn't be needed by external users, but provided anyway for maximum flexibility
		this.getStatusElement = () => {
			return ctx.statusElement;
		};
		/**
		 * Sets the list of pages to work on.
		 *
		 * @param {Array} pageList - Array of objects over which you wish to execute the worker function
		 * This is usually the list of page names (strings).
		 */
		this.setPageList = (pageList) => {
			ctx.pageList = pageList;
		};
		/**
		 * Sets a known option.
		 *
		 * @param {string} optionName - Name of the option:
		 * - chunkSize (integer): The size of chunks to break the array into
		 * (default 50). Setting this to a small value (<5) can cause problems.
		 * - preserveIndividualStatusLines (boolean): Keep each page's status
		 * element visible when worker is complete?
		 * @param {number|boolean} optionValue - Value to which the option is
		 * to be set. Should be an integer for chunkSize and a boolean for
		 * preserveIndividualStatusLines.
		 */
		this.setOption = (optionName, optionValue) => {
			ctx.options[optionName] = optionValue;
		};
		/**
		 * Runs the first callback for each page in the list.
		 * The callback must call workerSuccess when succeeding, or workerFailure when failing.
		 * Runs the optional second callback when the whole batch has been processed.
		 *
		 * @param {Function} worker
		 * @param {Function} [postFinish]
		 */
		this.run = (worker, postFinish) => {
			if (ctx.running) {
				ctx.statusElement.error(window.wgULS('批量操作已在运行', '批次操作已在執行'));
				return;
			}
			ctx.running = true;
			ctx.worker = worker;
			ctx.postFinish = postFinish;
			ctx.countStarted = 0;
			ctx.countFinished = 0;
			ctx.countFinishedSuccess = 0;
			ctx.currentChunkIndex = -1;
			ctx.pageChunks = [];
			const total = ctx.pageList.length;
			if (!total) {
				ctx.statusElement.info(window.wgULS('没有指定页面', '沒有指定頁面'));
				ctx.running = false;
				if (ctx.postFinish) {
					ctx.postFinish();
				}
				return;
			}
			// chunk page list into more manageable units
			ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
			// start the process
			Morebits.wiki.addCheckpoint();
			ctx.statusElement.status('0%');
			fnStartNewChunk();
		};
		/**
		 * To be called by worker before it terminates successfully.
		 *
		 * @param {(Morebits.wiki.page|Morebits.wiki.api|string)} arg -
		 * This should be the `Morebits.wiki.page` or `Morebits.wiki.api` object used by worker
		 * (for the adjustment of status lines emitted by them).
		 * If no Morebits.wiki.* object is used (e.g. you're using `mw.Api()` or something else), and
		 * `preserveIndividualStatusLines` option is on, give the page name (string) as argument.
		 */
		this.workerSuccess = (arg) => {
			if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
				// update or remove status line
				const statelem = arg.getStatusElement();
				if (ctx.options.preserveIndividualStatusLines) {
					if (arg.getPageName || arg.pageName || (arg.query && arg.query.title)) {
						// we know the page title - display a relevant message
						const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
						statelem.info(`完成（[[${pageName}]]）`);
					} else {
						// we don't know the page title - just display a generic message
						statelem.info('完成');
					}
				} else {
					// remove the status line automatically produced by Morebits.wiki.*
					statelem.unlink();
				}
			} else if (typeof arg === 'string' && ctx.options.preserveIndividualStatusLines) {
				new Morebits.status(arg, `完成（[[${arg}]]）`);
			}
			ctx.countFinishedSuccess++;
			fnDoneOne();
		};
		this.workerFailure = () => {
			fnDoneOne();
		};
		// private functions
		const thisProxy = this;
		const fnStartNewChunk = () => {
			const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
			if (!chunk) {
				return; // done! yay
			}
			// start workers for the current chunk
			ctx.countStarted += chunk.length;
			for (const page of chunk) {
				ctx.worker(page, thisProxy);
			}
		};
		const fnDoneOne = () => {
			ctx.countFinished++;
			// update overall status line
			const total = ctx.pageList.length;
			if (ctx.countFinished < total) {
				const progress = Math.round((100 * ctx.countFinished) / total);
				ctx.statusElement.status(`${progress}%`);
				// start a new chunk if we're close enough to the end of the previous chunk, and
				// we haven't already started the next one
				if (
					ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) &&
					Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex
				) {
					fnStartNewChunk();
				}
			} else if (ctx.countFinished === total) {
				const statusString = `完成（${ctx.countFinishedSuccess}/${ctx.countFinished}操作成功完成）`;
				if (ctx.countFinishedSuccess < ctx.countFinished) {
					ctx.statusElement.warn(statusString);
				} else {
					ctx.statusElement.info(statusString);
				}
				if (ctx.postFinish) {
					ctx.postFinish();
				}
				Morebits.wiki.removeCheckpoint();
				ctx.running = false;
			} else {
				// ctx.countFinished > total
				// just for giggles! (well, serious debugging, actually)
				ctx.statusElement.warn(
					`${window.wgULS('完成（多执行了', '完成（多執行了') + (ctx.countFinished - total)}次）`
				);
				Morebits.wiki.removeCheckpoint();
				ctx.running = false;
			}
		};
	};
	/**
	 * A simple draggable window, now a wrapper for jQuery UI's dialog feature.
	 *
	 * @memberof Morebits
	 * @class
	 * @requires jquery.ui.dialog
	 * @param {number} width
	 * @param {number} height - The maximum allowable height for the content area.
	 */
	Morebits.simpleWindow = function (width, height) {
		const content = document.createElement('div');
		this.content = content;
		content.className = 'morebits-dialog-content';
		content.id = `morebits-dialog-content-${Math.round(Math.random() * 1e15)}`;
		this.height = height;
		$(this.content).dialog({
			autoOpen: false,
			buttons: {
				'Placeholder button': () => {},
			},
			dialogClass: 'morebits-dialog',
			width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
			// give jQuery the given height value (which represents the anticipated height of the dialog) here, so
			// it can position the dialog appropriately
			// the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
			// to that of the old SimpleWindow
			height: height + 20,
			close: (event) => {
				// dialogs and their content can be destroyed once closed
				$(event.target).dialog('destroy').remove();
			},
			resizeStart() {
				[this.scrollbox] = $(this).find('.morebits-scrollbox');
				if (this.scrollbox) {
					this.scrollbox.style.maxHeight = 'none';
				}
			},
			resizeStop() {
				this.scrollbox = null;
			},
			resize() {
				this.style.maxHeight = '';
				if (this.scrollbox) {
					this.scrollbox.style.width = '';
				}
			},
		});
		const $widget = $(this.content).dialog('widget');
		// delete the placeholder button (it's only there so the buttonpane gets created)
		$widget.find('button').each((key, value) => {
			value.parentNode.removeChild(value);
		});
		// add container for the buttons we add, and the footer links (if any)
		const buttonspan = document.createElement('span');
		buttonspan.className = 'morebits-dialog-buttons';
		const linksspan = document.createElement('span');
		linksspan.className = 'morebits-dialog-footerlinks';
		$widget.find('.ui-dialog-buttonpane').append(buttonspan, linksspan);
		// resize the scrollbox with the dialog, if one is present
		$widget.resizable('option', 'alsoResize', `#${this.content.id} .morebits-scrollbox, #${this.content.id}`);
	};
	Morebits.simpleWindow.prototype = {
		buttons: [],
		height: 600,
		hasFooterLinks: false,
		scriptName: null,
		/**
		 * Focuses the dialog. This might work, or on the contrary, it might not.
		 *
		 * @returns {Morebits.simpleWindow}
		 */
		focus() {
			$(this.content).dialog('moveToTop');
			return this;
		},
		/**
		 * Closes the dialog. If this is set as an event handler, it will stop the event
		 * from doing anything more.
		 *
		 * @param {event} [event]
		 * @returns {Morebits.simpleWindow}
		 */
		close(event) {
			if (event) {
				event.preventDefault();
			}
			$(this.content).dialog('close');
			return this;
		},
		/**
		 * Shows the dialog. Calling display() on a dialog that has previously been closed
		 * might work, but it is not guaranteed.
		 *
		 * @returns {Morebits.simpleWindow}
		 */
		display() {
			if (this.scriptName) {
				const $widget = $(this.content).dialog('widget');
				$widget.find('.morebits-dialog-scriptname').remove();
				const scriptnamespan = document.createElement('span');
				scriptnamespan.className = 'morebits-dialog-scriptname';
				scriptnamespan.textContent = `${this.scriptName} \u00B7 `; // U+00B7 MIDDLE DOT = &middot;
				$widget.find('.ui-dialog-title').prepend(scriptnamespan);
			}
			const dialog = $(this.content).dialog('open');
			if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
				// tie in with NAVPOP
				dialog.parent()[0].ranSetupTooltipsAlready = false;
				window.setupTooltips(dialog.parent()[0]);
			}
			this.setHeight(this.height); // init height algorithm
			return this;
		},
		/**
		 * Sets the dialog title.
		 *
		 * @param {string} title
		 * @returns {Morebits.simpleWindow}
		 */
		setTitle(title) {
			$(this.content).dialog('option', 'title', title);
			return this;
		},
		/**
		 * Sets the script name, appearing as a prefix to the title to help users determine which
		 * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
		 *
		 * @param {string} name
		 * @returns {Morebits.simpleWindow}
		 */
		setScriptName(name) {
			this.scriptName = name;
			return this;
		},
		/**
		 * Sets the dialog width.
		 *
		 * @param {number} width
		 * @returns {Morebits.simpleWindow}
		 */
		setWidth(width) {
			$(this.content).dialog('option', 'width', width);
			return this;
		},
		/**
		 * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
		 * but the content area will grow no larger than the height given here.
		 *
		 * @param {number} height
		 * @returns {Morebits.simpleWindow}
		 */
		setHeight(height) {
			this.height = height;
			// from display time onwards, let the browser determine the optimum height,
			// and instead limit the height at the given value
			// note that the given height will exclude the approx. 20px that the jQuery UI
			// chrome has in height in addition to the height of an equivalent "classic"
			// Morebits.simpleWindow
			if (
				Number.parseInt(getComputedStyle($(this.content).dialog('widget')[0], null).height, 10) >
				window.innerHeight
			) {
				$(this.content)
					.dialog('option', 'height', window.innerHeight - 2)
					.dialog('option', 'position', 'top');
			} else {
				$(this.content).dialog('option', 'height', 'auto');
			}
			$(this.content).dialog('widget').find('.morebits-dialog-content')[0].style.maxHeight = `${Number.parseInt(
				this.height - 30,
				10
			)}px`;
			return this;
		},
		/**
		 * Sets the content of the dialog to the given element node, usually from rendering
		 * a {@link Morebits.quickForm}.
		 * Re-enumerates the footer buttons, but leaves the footer links as they are.
		 * Be sure to call this at least once before the dialog is displayed...
		 *
		 * @param {HTMLElement} content
		 * @returns {Morebits.simpleWindow}
		 */
		setContent(content) {
			this.purgeContent();
			this.addContent(content);
			return this;
		},
		/**
		 * Adds the given element node to the dialog content.
		 *
		 * @param {HTMLElement} content
		 * @returns {Morebits.simpleWindow}
		 */
		addContent(content) {
			this.content.appendChild(content);
			// look for submit buttons in the content, hide them, and add a proxy button to the button pane
			const self = this;
			$(this.content)
				.find('input[type="submit"], button[type="submit"]')
				.each((key, value) => {
					value.style.display = 'none';
					const button = document.createElement('button');
					if (value.hasAttribute('value')) {
						button.textContent = value.getAttribute('value');
					} else if (value.textContent) {
						button.textContent = value.textContent;
					} else {
						button.textContent = '提交';
					}
					button.className = value.className || 'submitButtonProxy';
					// here is an instance of cheap coding, probably a memory-usage hit in using a closure here
					button.addEventListener(
						'click',
						() => {
							value.click();
						},
						false
					);
					self.buttons.push(button);
				});
			// remove all buttons from the button pane and re-add them
			if (this.buttons.length > 0) {
				$(this.content)
					.dialog('widget')
					.find('.morebits-dialog-buttons')
					.empty()
					.append(this.buttons)[0]
					.removeAttribute('data-empty');
			} else {
				$(this.content)
					.dialog('widget')
					.find('.morebits-dialog-buttons')[0]
					.setAttribute('data-empty', 'data-empty'); // used by CSS
			}

			return this;
		},
		/**
		 * Removes all contents from the dialog, barring any footer links.
		 *
		 * @returns {Morebits.simpleWindow}
		 */
		purgeContent() {
			this.buttons = [];
			// delete all buttons in the buttonpane
			$(this.content).dialog('widget').find('.morebits-dialog-buttons').empty();
			while (this.content.hasChildNodes()) {
				this.content.removeChild(this.content.firstChild);
			}
			return this;
		},
		/**
		 * Adds a link in the bottom-right corner of the dialog.
		 * This can be used to provide help or policy links.
		 * For example, Twinkle's CSD module adds a link to the CSD policy page,
		 * as well as a link to Twinkle's documentation.
		 *
		 * @param {string} text - Display text.
		 * @param {string} wikiPage - Link target.
		 * @param {boolean} [prep=false] - Set true to prepend rather than append.
		 * @returns {Morebits.simpleWindow}
		 */
		addFooterLink(text, wikiPage, prep) {
			const $footerlinks = $(this.content).dialog('widget').find('.morebits-dialog-footerlinks');
			if (this.hasFooterLinks) {
				const bullet = document.createElement('span');
				bullet.textContent = ' \u2022 '; // U+2022 BULLET
				if (prep) {
					$footerlinks.prepend(bullet);
				} else {
					$footerlinks.append(bullet);
				}
			}
			const link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(wikiPage));
			link.setAttribute('title', wikiPage);
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
			link.textContent = text;
			if (prep) {
				$footerlinks.prepend(link);
			} else {
				$footerlinks.append(link);
			}
			this.hasFooterLinks = true;
			return this;
		},
		/**
		 * Sets whether the window should be modal or not. Modal dialogs create
		 * an overlay below the dialog but above other page elements. This
		 * must be used (if necessary) before calling display().
		 *
		 * @param {boolean} [modal=false] - If set to true, other items on the
		 * page will be disabled, i.e., cannot be interacted with.
		 * @returns {Morebits.simpleWindow}
		 */
		setModality(modal) {
			$(this.content).dialog('option', 'modal', modal);
			return this;
		},
	};
	/**
	 * Enables or disables all footer buttons on all {@link Morebits.simpleWindow}s in the current page.
	 * This should be called with `false` when the button(s) become irrelevant (e.g. just before
	 * {@link Morebits.status.init} is called).
	 * This is not an instance method so that consumers don't have to keep a reference to the
	 * original `Morebits.simpleWindow` object sitting around somewhere. Anyway, most of the time
	 * there will only be one `Morebits.simpleWindow` open, so this shouldn't matter.
	 *
	 * @memberof Morebits.simpleWindow
	 * @param {boolean} enabled
	 */
	Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
		const $body = $('body');
		$body.find('.morebits-dialog-buttons button').prop('disabled', !enabled);
	};
})(jQuery);
