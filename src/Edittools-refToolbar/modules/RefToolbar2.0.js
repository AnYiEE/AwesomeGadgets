/* global CiteTB */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {api} from './util/api';
import {getMessage} from './util/getMessage';
import {refToolbarConfig} from './RefToolbarConfig';

// TODO: make autodate an option in the CiteTemplate object, not a preference
const refToolbar2 = ($body) => {
	// Default options, these mainly exist so the script won't break if a new option is added
	CiteTB.DefaultOptions = {
		'date format': '<year>-<zmonth>-<zdate>',
		'autodate fields': [],
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		modal: true,
		autoparse: false,
		expandtemplates: false,
	};

	// Get an option - user settings override global which override defaults
	CiteTB.getOption = (opt) => {
		if (CiteTB.UserOptions[opt] !== undefined) {
			return CiteTB.UserOptions[opt];
		} else if (CiteTB.Options[opt] !== undefined) {
			return CiteTB.Options[opt];
		}
		return CiteTB.DefaultOptions[opt];
	};

	CiteTB.init = () => {
		/* Main stuff, build the actual toolbar structure
		 * 1. get the template list, make the dropdown list and set up the template dialog boxes
		 * 2. actually build the toolbar:
		 * - A section for cites
		 * -- dropdown for the templates (previously defined)
		 * -- button for named refs with a dialog box
		 * 3. add the whole thing to the main toolbar
		 */

		$(document).find('head').trigger('reftoolbarbase');
		const $target = $body.find('textarea[name=wpTextbox1]');
		const temlist = {};
		for (const t in CiteTB.Templates) {
			if (Object.hasOwn(CiteTB.Templates, t)) {
				const tem = CiteTB.Templates[t];
				const sform = CiteTB.escStr(tem.shortform);
				const actionobj = {
					type: 'dialog',
					module: `cite-dialog-${sform}`,
				};
				const dialogobj = {};
				dialogobj[`cite-dialog-${sform}`] = {
					resizeme: false,
					// eslint-disable-next-line mediawiki/msg-doc
					title: mw.message(`cite-dialog-${sform}`).parse(),
					id: `citetoolbar-${sform}`,
					init: () => {},
					html: tem.getInitial(),
					dialog: {
						width: Math.round($(window).width() ?? 0 * 0.8),
						open() {
							$(this).html(CiteTB.getOpenTemplate().getForm());
							/** @param {jQuery.Event} e */
							$body.find('.cite-prev-parse').on('click', (e) => {
								e.preventDefault();
								CiteTB.prevParseClick();
							});
						},
						buttons: {
							'cite-form-submit'() {
								const ref = CiteTB.getRef(false, true);
								$(this).dialog('close');
								$.wikiEditor.modules.toolbar.fn.doAction(
									$(this).data('context'),
									{
										type: 'encapsulate',
										options: {
											post: ref,
										},
									},
									$(this)
								);
							},
							'cite-form-showhide': CiteTB.showHideExtra,
							'cite-refpreview'() {
								const ref = CiteTB.getRef(false, false);
								const template = CiteTB.getOpenTemplate();
								const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
								div.find('.cite-preview-label').show();
								div.find('.cite-ref-preview').text(ref).show();
								if (CiteTB.getOption('autoparse')) {
									CiteTB.prevParseClick();
								} else {
									div.find('.cite-prev-parse').show();
									div.find('.cite-prev-parsed-label').hide();
									div.find('.cite-preview-parsed').html('');
								}
							},
							'wikieditor-toolbar-tool-link-cancel'() {
								$(this).dialog('close');
							},
							'cite-form-reset'() {
								CiteTB.resetForm();
							},
						},
					},
				};
				try {
					$target.wikiEditor('addDialog', dialogobj);
				} catch {
					/* TypeError: range is null */
				}
				// if (!CiteTB.getOption('modal')) {
				// 	$body.find(`#citetoolbar-${sform}`).dialog('option', 'modal', false);
				// }
				temlist[sform] = {
					label: tem.templatename,
					action: actionobj,
				};
			}
		}

		const refsection = {
			sections: {
				cites: {
					type: 'toolbar',
					label: getMessage('cite-section-label'),
					groups: {
						template: {
							tools: {
								template: {
									type: 'select',
									label: getMessage('cite-template-list'),
									list: temlist,
								},
							},
						},
						namedrefs: {
							label: getMessage('cite-named-refs-label'),
							tools: {
								nrefs: {
									type: 'button',
									action: {
										type: 'dialog',
										module: 'cite-toolbar-namedrefs',
									},
									icon: 'https://youshou.wiki/images/thumb/b/be/Nuvola_clipboard_lined.svg/22px-Nuvola_clipboard_lined.svg.png',
									section: 'cites',
									group: 'namedrefs',
									label: getMessage('cite-named-refs-button'),
								},
							},
						},
					},
				},
			},
		};

		const defaultdialogs = {
			'cite-toolbar-namedrefs': {
				title: mw.message('cite-named-refs-title').parse(),
				resizeme: false,
				id: 'citetoolbar-namedrefs',
				html: `<div id="cite-namedref-loading"> <img src="https://youshou.wiki/images/b/b1/Loading_icon.gif" /> &nbsp;${getMessage(
					'cite-loading'
				)}</div>`,
				init: () => {},
				dialog: {
					width: Math.round($(window).width() ?? 0 * 0.8),
					open() {
						CiteTB.loadRefs();
					},
					buttons: {
						'cite-form-submit'() {
							const refname = $body.find('#cite-namedref-select').val();
							if (refname === '') {
								return;
							}
							$(this).dialog('close');
							$.wikiEditor.modules.toolbar.fn.doAction(
								$(this).data('context'),
								{
									type: 'encapsulate',
									options: {
										post: CiteTB.getNamedRef(refname, true),
									},
								},
								$(this)
							);
						},
						'wikieditor-toolbar-tool-link-cancel'() {
							$(this).dialog('close');
						},
					},
				},
			},
		};

		try {
			$target.wikiEditor('addDialog', defaultdialogs);
		} catch {
			// error occurred setting up wikieditor.
		}
		$body.find('#citetoolbar-namedrefs').off('dialogopen');
		if (!CiteTB.getOption('modal')) {
			// $body.find('#citetoolbar-namedrefs').dialog('option', 'modal', false);
			mw.util.addCSS('.ui-widget-overlay{display:none !important}');
		}
		try {
			$target.wikiEditor('addToToolbar', refsection);
		} catch {
			// error occurred setting up wikieditor.
		}
	};

	// Setup the main object
	CiteTB.mainRefList = [];
	CiteTB.refsLoaded = false;

	// REF FUNCTIONS
	// Actually assemble a ref from user input
	CiteTB.getRef = (inneronly, forinsert) => {
		let i, j, g, group;
		const template = CiteTB.getOpenTemplate();
		const {templatename} = template;
		let res = '';
		const refobj = {
			shorttag: false,
		};
		if (!inneronly) {
			group = $(`#cite-${CiteTB.escStr(template.shortform)}-group`).val();
			let refname = $(`#cite-${CiteTB.escStr(template.shortform)}-name`).val();
			res += '<ref';
			if (refname) {
				refname = String(refname).trim();
				res += ` name=${CiteTB.getQuotedString(refname)}`;
				refobj.refname = refname;
			}
			if (group) {
				group = String(group).trim();
				res += ` group=${CiteTB.getQuotedString(group)}`;
				refobj.refgroup = group;
			}
			res += '>';
		}
		let content = `{{${templatename}`;
		for (g in template.incrementables) {
			if (Object.hasOwn(template.incrementables, g)) {
				group = template.incrementables[g];
				for (i = 1; i <= group.val; i++) {
					for (j = 0; j < group.fields.length; j++) {
						const fieldname = group.fields[j].field;
						const fieldid = fieldname.replace('<N>', i.toString());
						const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldid}`).val();
						if (field) {
							content += ` |${fieldid}=`;
							content += String(field).trim();
						}
					}
				}
			}
		}
		for (i = 0; i < template.basic.length; i++) {
			if (template.basic[i].increment_group) {
				continue;
			}
			const fieldname = template.basic[i].field;
			const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldname}`).val();
			if (field) {
				content += ` |${fieldname}=`;
				content += String(field).trim();
			}
		}
		if ($body.find('#cite-form-status').val() !== 'closed') {
			for (i = 0; i < template.extra.length; i++) {
				if (template.extra[i].increment_group) {
					continue;
				}
				const fieldname = template.extra[i].field;
				const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldname}`).val();
				if (field) {
					content += ` |${fieldname}=`;
					content += String(field).trim();
				}
			}
		}
		content += '}}';
		res += content;
		refobj.content = content;
		if (!inneronly) {
			res += '</ref>';
		}
		if (forinsert) {
			CiteTB.mainRefList.push(refobj);
		}
		return res;
	};

	// Make a reference to a named ref
	CiteTB.getNamedRef = (refname, forinsert) => {
		if (forinsert) {
			CiteTB.mainRefList.push({
				shorttag: true,
				refname,
			});
		}
		return `<ref name=${CiteTB.getQuotedString(refname)} />`;
	};

	// Function to load the ref list
	CiteTB.loadRefs = () => {
		if (CiteTB.refsLoaded) {
			return;
		}
		CiteTB.getPageText(CiteTB.loadRefsInternal);
	};

	// Function that actually loads the list from the page text
	CiteTB.loadRefsInternal = (text) => {
		// What this does:             extract first name/group                                     extract second name/group                                          shorttag   inner content
		const refsregex =
			/< *ref(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?:\/ *>|>((?:.|\n)*?)< *\/ *ref *>)/gim;
		// This should work regardless of the quoting used for names/groups and for linebreaks in the inner content
		while (true) {
			const ref = refsregex.exec(text);
			if (ref === null) {
				break;
			}
			const refobj = {};
			if (ref[9]) {
				// Content + short tag check
				// mw.notify(`"${ref[9]}"`, {tag: 'RefToolbar2.0', type: 'warn'});
				[, , , , , , , , , refobj.content] = ref;
				refobj.shorttag = false;
			} else {
				refobj.shorttag = true;
			}
			if (ref[1] !== '') {
				// First name/group
				if (ref[2]) {
					[, , refobj[`ref${ref[1]}`]] = ref;
				} else if (ref[3]) {
					[, , , refobj[`ref${ref[1]}`]] = ref;
				} else {
					[, , , , refobj[`ref${ref[1]}`]] = ref;
				}
			}
			if (ref[5] !== '') {
				// Second name/group
				if (ref[6]) {
					[, , , , , , refobj[`ref${ref[5]}`]] = ref;
				} else if (ref[7]) {
					[, , , , , , , refobj[`ref${ref[5]}`]] = ref;
				} else {
					[, , , , , , , , refobj[`ref${ref[5]}`]] = ref;
				}
			}
			CiteTB.mainRefList.push(refobj);
		}
		CiteTB.refsLoaded = true;
		CiteTB.setupNamedRefs();
	};

	// AJAX FUNCTIONS
	// Parse some wikitext and hand it off to a callback function
	CiteTB.parse = (text, callback) => {
		const postdata = {
			action: 'parse',
			title: mw.config.get('wgPageName'),
			text,
			prop: 'text',
			format: 'json',
			formatversion: '2',
		};
		api.post(postdata).then(({parse}) => {
			const html = parse.text;
			callback(html);
		});
	};

	// Use the API to expand templates on some text
	CiteTB.expandtemplates = (text, callback) => {
		const postdata = {
			action: 'expandtemplates',
			title: mw.config.get('wgPageName'),
			text,
			format: 'json',
			formatversion: '2',
		};
		api.post(postdata).then(({expandtemplates}) => {
			const restext = expandtemplates.wikitext;
			callback(restext);
		});
	};

	// Function to get the page text
	CiteTB.getPageText = (callback) => {
		const section = $body.find('input[name=wpSection]').val();
		if (section === '') {
			if (CiteTB.getOption('expandtemplates')) {
				CiteTB.expandtemplates(
					$body.find('textarea[name=wpTextbox1]').wikiEditor('getContents').text(),
					callback
				);
			} else {
				callback($body.find('textarea[name=wpTextbox1]').wikiEditor('getContents').text());
			}
		} else {
			const {wgArticleId} = mw.config.get();
			const postdata = {
				action: 'query',
				prop: 'revisions',
				rvprop: 'content',
				pageids: wgArticleId,
				format: 'json',
				formatversion: '2',
			};
			if (CiteTB.getOption('expandtemplates')) {
				postdata.rvexpandtemplates = '1';
			}
			api.get(postdata).then(({query}) => {
				const pagetext = query.pages[0].revisions[0].content;
				callback(pagetext);
			});
		}
	};

	// Safe version of decodeURIComponent() that doesn't throw exceptions.
	// If the native decodeURIComponent() threw an exception, the original string will be returned.
	CiteTB.safeDecodeURIComponent = (s) => {
		try {
			s = decodeURIComponent(s);
		} catch {
			/* empty */
		}
		return s;
	};

	// Autofill a template from an ID (ISBN, DOI, PMID, URL)
	CiteTB.initAutofill = function () {
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-auto-(.*?)-(.*)-(.*)$/.exec(elemid);
		if (!res) {
			return false;
		}
		const [, tem, field, autotype] = res;
		let id = $(`#cite-${tem}-${field}`).val();
		if (!id) {
			return false;
		}
		let url = 'https://citoid.qiuwen.net.cn/lookup.php?';
		// Citoid expects minimally encoded input, so do some speculative decoding here to avoid
		// 404 fetches. https://phabricator.wikimedia.org/T146539
		id = CiteTB.safeDecodeURIComponent(id);
		url += `${autotype}=${encodeURIComponent(id)}`;
		url += `&template=${encodeURIComponent(tem)}`;
		const s = document.createElement('script');
		s.setAttribute('src', url);
		s.setAttribute('type', 'text/javascript');
		document.head.append(s);
		return false;
	};

	// Callback for autofill
	// TODO: Autofill the URL, at least for DOI
	CiteTB.autoFill = (data, template, type) => {
		const cl = `cite-${template}-`;
		let i, j;
		let coauthors;
		$(`.${cl}title`).val(data.title);
		// Fill in authors
		if (data.authors && data.authors.length > 0) {
			if ($(`.${cl}last-incr-1`).length > 0) {
				const classes = $(`.${cl}last-incr-1`).eq(0).attr('class')?.split(/\s+/);
				if (!classes) {
					return;
				}
				let group = false;
				const patt = /cite-[^-]*?-incr-(.*)/;
				for (const class_ of classes) {
					if (patt.exec(class_)) {
						[, group] = patt.exec(class_);
						break;
					}
				}
				$(`.${cl}last-incr-1`).val(data.authors[0][0]);
				$(`.${cl}first-incr-1`).val(data.authors[0][1]);
				const elemid = `#cite-incr-${template}-${group}`;
				for (i = 2; i < data.authors.length + 1; i++) {
					$(elemid).trigger('click');
					$(`.${cl}last-incr-${i.toString()}`).val(data.authors[i - 1][0]);
					$(`.${cl}first-incr-${i.toString()}`).val(data.authors[i - 1][1]);
				}
			} else if ($(`.${cl}author-incr-1`).length > 0) {
				const classes = $(`.${cl}author-incr-1`).eq(0).attr('class')?.split(/\s+/);
				if (!classes) {
					return;
				}
				let group = false;
				const patt = /cite-[^-]*?-incr-(.*)/;
				for (const class_ of classes) {
					if (patt.exec(class_)) {
						[, group] = patt.exec(class_);
						break;
					}
				}
				$(`.${cl}author-incr-1`).val(data.authors[0].join(', '));
				const elemid = `#cite-incr-${template}-${group}`;
				for (i = 2; i < data.authors.length + 1; i++) {
					$(elemid).trigger('click');
					$(`.${cl}author-incr-${i.toString()}`).val(data.authors[i - 1].join(', '));
				}
			} else if ($(`.${cl}last1`).length > 0) {
				for (i = 0; data.authors && i < data.authors.length; i++) {
					if ($(`.${cl}last${i + 1}`).length) {
						$(`.${cl}last${i + 1}`).val(data.authors[i][0]);
						$(`.${cl}first${i + 1}`).val(data.authors[i][1]);
					} else {
						coauthors = [];
						for (j = i; j < data.authors.length; j++) {
							coauthors.push(data.authors[j].join(', '));
						}
						$(`.${cl}coauthors`).val(coauthors.join('; '));
						break;
					}
				}
			} else if ($(`.${cl}author1`).length === 0) {
				const authors = [];
				for (i = 0; data.authors && i < data.authors.length; i++) {
					authors.push(data.authors[i].join(', '));
				}
				$(`.${cl}authors`).val(authors.join('; '));
			} else {
				for (i = 0; data.authors && i < data.authors.length; i++) {
					if ($(`.${cl}author${i + 1}`).length) {
						$(`.${cl}author${i + 1}`).val(data.authors[i].join(', '));
					} else {
						coauthors = [];
						for (j = i; j < data.authors.length; j++) {
							coauthors.push(data.authors[j].join(', '));
						}
						$(`.${cl}coauthors`).val(coauthors.join('; '));
						break;
					}
				}
			}
		}

		// Format partial dates of the format YYYY-MM, YYYY-MM-XX, or YYYY-MM-DD correctly
		if (data.date) {
			try {
				const DT = new Date(data.date);
				if (/^\d{4}-\d{2}(-XX)?$/i.test(data.date)) {
					data.date = data.date.replace('-XX', '');
					$(`.${cl}date`).val(CiteTB.formatDate(DT, false, true));
				} else if (/^\d{4}-\d{2}-\d{2}?/i.test(data.date)) {
					$(`.${cl}date`).val(CiteTB.formatDate(DT, true, true));
				} else {
					$(`.${cl}date`).val(data.date);
				}
			} catch {
				/* empty */
			}
		} else {
			$(`.${cl}date`).val(data.date);
		}

		switch (type) {
			case 'pmid':
			case 'doi':
				$(`.${cl}journal`).val(data.journal);
				$(`.${cl}volume`).val(data.volume);
				$(`.${cl}issue`).val(data.issue);
				$(`.${cl}pages`).val(data.pages);
				if (type === 'pmid' && data.doi) {
					$(`.${cl}doi`).val(data.doi);
				}

				break;

			case 'isbn':
				$(`.${cl}publisher`).val(data.publisher);
				$(`.${cl}location`).val(data.location);
				$(`.${cl}edition`).val(data.edition);

				break;

			case 'url':
				$(`.${cl}journal`).val(data.journal);
				$(`.${cl}volume`).val(data.volume);
				$(`.${cl}issue`).val(data.issue);
				$(`.${cl}pages`).val(data.pages);
				$(`.${cl}publisher`).val(data.publisher);
				$(`.${cl}edition`).val(data.edition);
				$(`.${cl}isbn`).val(data.isbn);
				$(`.${cl}issn`).val(data.issn);
				$(`.${cl}doi`).val(data.doi);
				// "en-US" isn't a valid value for the language parameter
				if (data.language && data.language !== 'en-US' && data.language !== 'en-GB') {
					$(`.${cl}language`).val(data.language);
				}
				$(`.${cl}chapter`).val(data.chapter);

				break;

			// No default
		}
	};

	// FORM DIALOG FUNCTIONS
	// Add new incrementable fields
	CiteTB.incrementFields = function () {
		const template = CiteTB.getOpenTemplate();
		const [currentrow] = $(this).parents('tr');
		$(this).prev().css('width', '100%');
		$(this).detach();
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-incr-(.*?)-(.*)$/.exec(elemid);
		if (!res) {
			return;
		}
		const [, , group] = res;
		const increments = template.incrementables[group];
		const {fields} = increments;
		template.incrementables[group].val += 1;
		const trs = template.makeFormInner(fields, false);
		trs.reverse();
		for (const tr of trs) {
			$(currentrow).after(tr);
		}
	};

	// fill the accessdate param with the current date
	CiteTB.fillAccessdate = function () {
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-date-(.*?)-(.*)$/.exec(elemid);
		const [, id] = res;
		if (!res) {
			return;
		}
		const [, , field] = res;
		const DT = new Date();
		const datestr = CiteTB.formatDate(DT);
		$(`#cite-${id}-${field}`).val(datestr);
		return false;
	};

	CiteTB.formatDate = (DT, useday, usemonth) => {
		if (useday === undefined) {
			useday = true;
		}
		if (usemonth === undefined) {
			usemonth = true;
		}
		let datestr = CiteTB.getOption('date format');
		let zmonth = '';
		let month = DT.getUTCMonth() + 1;
		if (month < 10) {
			zmonth = `0${month.toString()}`;
		} else {
			zmonth = month.toString();
		}
		month = month.toString();
		let zdate = '';
		let date = DT.getUTCDate();
		if (date < 10) {
			zdate = `0${date.toString()}`;
		} else {
			zdate = date.toString();
		}
		date = date.toString();
		if (useday) {
			datestr = datestr.replace('<date>', date);
			datestr = datestr.replace('<zdate>', zdate);
		} else {
			datestr = datestr.replace('<date>', '');
			datestr = datestr.replace('<zdate>', '');
		}
		if (usemonth) {
			datestr = datestr.replace('<month>', month);
			datestr = datestr.replace('<zmonth>', zmonth);
			datestr = datestr.replace('<monthname>', CiteTB.getOption('months')[DT.getUTCMonth()]);
		} else {
			datestr = datestr.replace('<month>', '');
			datestr = datestr.replace('<zmonth>', '');
			datestr = datestr.replace('<monthname>', '');
		}
		datestr = datestr.replace('<year>', DT.getUTCFullYear().toString());
		return datestr.replace(/^[ /\-,.]*(.*?)[ /\-,.]*$/g, '$1'); // Cleanup any dangling spaces or connectors that might result from omitting date/month
	};

	// Function called after the ref list is loaded, to actually set the contents of the named ref dialog
	// Until the list is loaded, its just a "Loading" placeholder
	CiteTB.setupNamedRefs = () => {
		const names = [];
		let i;
		for (i = 0; i < CiteTB.mainRefList.length; i++) {
			if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname) {
				names.push(CiteTB.mainRefList[i]);
			}
		}
		const stuff = $('<div>');
		$body.find('#citetoolbar-namedrefs').html(stuff);
		if (names.length === 0) {
			stuff.html(getMessage('cite-no-namedrefs'));
		} else {
			stuff.html(getMessage('cite-namedrefs-intro'));
			const select = $('<select>').attr('id', 'cite-namedref-select');
			select.append($('<option>').attr('value', '').text(getMessage('cite-named-refs-dropdown')));
			for (i = 0; i < names.length; i++) {
				select.append($('<option>').text(names[i].refname));
			}
			stuff.after(select);
			select.before('<br>');
			const prevlabel = $('<div>')
				.attr('id', 'cite-nref-preview-label')
				.css('display', 'none')
				.html(getMessage('cite-raw-preview'));
			select.after(prevlabel);
			prevlabel.before('<br><br>');
			prevlabel.after('<div id="cite-namedref-preview" style="padding:0.5em; font-size:110%" />');
			const parselabel = $('<span>')
				.attr('id', 'cite-parsed-label')
				.css('display', 'none')
				.html(getMessage('cite-parsed-label'));
			$body.find('#cite-namedref-preview').after(parselabel);
			parselabel.after('<div id="cite-namedref-parsed" style="padding-bottom:0.5em; font-size:110%" />');
			const link = $('<a>')
				.attr({
					href: '#',
					id: 'cite-nref-parse',
				})
				.css({
					margin: '0 1em 0 1em',
					display: 'none',
					color: '#00008b',
				});
			link.html(getMessage('cite-form-parse'));
			$body.find('#cite-namedref-parsed').after(link);

			$body.find('#cite-namedref-select').on('change', CiteTB.namedRefSelectClick);
			$body.find('#cite-nref-parse').on('click', CiteTB.nrefParseClick);
		}
	};

	// Callback function for parsed preview
	CiteTB.fillNrefPreview = (parsed) => {
		$body.find('#cite-parsed-label').show();
		$body.find('#cite-namedref-parsed').html(parsed);
	};

	// Click handler for the named-ref parsed preview
	CiteTB.nrefParseClick = () => {
		const choice = $body.find('#cite-namedref-select').val();
		if (choice === '') {
			$body.find('#cite-parsed-label').hide();
			$body.find('#cite-namedref-parsed').text('');
			return false;
		}
		$body.find('#cite-nref-parse').hide();
		for (const ref of CiteTB.mainRefList) {
			if (!ref.shorttag && ref.refname === choice) {
				CiteTB.parse(ref.content, CiteTB.fillNrefPreview);
				return false;
			}
		}
	};

	// Click handler for the named-ref dropdown
	CiteTB.lastnamedrefchoice = '';
	CiteTB.namedRefSelectClick = () => {
		const choice = $body.find('#cite-namedref-select').val();
		if (CiteTB.lastnamedrefchoice === choice) {
			return;
		}
		CiteTB.lastnamedrefchoice = choice;
		$body.find('#cite-parsed-label').hide();
		$body.find('#cite-namedref-parsed').text('');
		if (choice === '') {
			$body.find('#cite-nref-preview-label').hide();
			$body.find('#cite-namedref-preview').text('');
			$body.find('#cite-nref-parse').hide();
			return;
		}
		for (const ref of CiteTB.mainRefList) {
			if (!ref.shorttag && ref.refname === choice) {
				$body.find('#cite-nref-preview-label').show();
				$body.find('#cite-namedref-preview').text(ref.content);
				if (CiteTB.getOption('autoparse')) {
					CiteTB.nrefParseClick();
				} else {
					$body.find('#cite-nref-parse').show();
				}
			}
		}
	};

	// callback function for parsed preview
	CiteTB.fillTemplatePreview = (text) => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.find('.cite-prev-parsed-label').show();
		div.find('.cite-preview-parsed').html(text);
	};

	// Click handler for template parsed preview
	CiteTB.prevParseClick = () => {
		const ref = CiteTB.getRef(true, false);
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.find('.cite-prev-parse').hide();
		CiteTB.parse(ref, CiteTB.fillTemplatePreview);
	};

	// Show/hide the extra fields in the dialog box
	CiteTB.showHideExtra = () => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		const setting = div.find('.cite-form-status').val();
		if (setting === 'closed') {
			div.find('.cite-form-status').val('open');
			div.find('.cite-extra-fields').show(1, () => {
				// jQuery adds `display: block`, which screws things up
				div.find('.cite-extra-fields').css({
					width: '100%',
					'background-color': 'transparent',
				});
			});
		} else {
			div.find('.cite-form-status').val('closed');
			div.find('.cite-extra-fields').hide();
		}
	};

	// Resets form fields and previews
	// Resets form fields and previews
	CiteTB.resetForm = () => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.html(template.getForm());
	};

	// STRING UTILITY FUNCTIONS
	// Returns a string quoted as necessary for name/group attributes
	CiteTB.getQuotedString = (s) => {
		const sq = /'/.test(s); // single quotes
		const dq = /"/.test(s); // double quotes
		if (!sq && !dq) {
			// Always quotes for non-latin alphabet
			return `"${s}"`;
		} else if (!dq) {
			// Can use double quotes
			return `"${s}"`;
		} else if (!sq) {
			// Can use single quotes
			return `'${s}'`;
		}
		// Has double and single quotes
		s = s.replace(/"/g, "'");
		return `"${s}"`;
	};

	// Fix up strings for output - capitalize first char, replace underscores with spaces
	CiteTB.fixStr = (s) => {
		s = s.slice(0, 1).toUpperCase() + s.slice(1);
		s = s.replace('_', ' ');
		return s;
	};

	// Escape spaces and quotes for use in HTML classes/ids
	CiteTB.escStr = (s) => {
		return s
			.replace(/\s/g, '-')
			.replace(/'/g, String.raw`\'`)
			.replace(/"/g, String.raw`\"`);
	};

	// MISC FUNCTIONS
	// Determine which template form is open, and get the template object for it
	CiteTB.getOpenTemplate = () => {
		const dialogs = $body.find('.ui-dialog-content.ui-widget-content:visible');
		const templatename = $(dialogs[0]).find('.cite-template').val();
		return CiteTB.Templates[templatename];
	};

	// Display the report for the error checks
	CiteTB.displayErrors = (errors) => {
		$body.find('#cite-err-report').remove();
		const table = $('<table>').attr('id', 'cite-err-report').css({
			width: '100%',
			border: '1px solid #A9A9A9',
			'background-color': '#FFEFD5',
			padding: '0.25em',
			'margin-top': '0.5em',
		});
		$body.find('#editpage-copywarn').before(table);
		let tr;
		const tr1 = $('<tr>').css('width', '100%');
		const th1 = $('<th>').css('width', '60%').css('font-size', '110%').html(getMessage('cite-err-report-heading'));
		const th2 = $('<th>').css('width', '40%').css('text-align', 'right;');
		const im = $('<img>').attr('src', 'https://youshou.wiki/images/thumb/5/55/Gtk-stop.svg/20px-Gtk-stop.svg.png');
		im.attr('alt', getMessage('cite-err-report-close')).attr('title', getMessage('cite-err-report-close'));
		const ad = $('<a>').attr({
			id: 'cite-err-check-close',
			href: '#',
		});
		ad.append(im);
		th2.append(ad);
		tr1.append(th1).append(th2);
		table.append(tr1);
		$body.find('#cite-err-check-close').on('click', () => {
			$body.find('#cite-err-report').remove();
		});
		if (errors.length === 0) {
			tr = $('<tr>').css('width', '100%');
			const td = $('<td>')
				.css('text-align', 'center')
				.css('margin', '1.5px')
				.html(getMessage('cite-err-report-empty'));
			tr.append(td);
			table.append(tr);

			return;
		}
		for (const error in errors) {
			if (Object.hasOwn(errors, error)) {
				const err = errors[error];
				tr = $('<tr>').css('width', '100%');
				const td1 = $('<td>')
					.css({
						border: '1px solid #000',
						margin: '1.5px',
						width: '60%',
					})
					.html(err.err);
				const td2 = $('<td>')
					.css({
						border: '1px solid #000',
						margin: '1.5px',
						width: '40%',
					})
					.html(getMessage(err.msg));
				tr.append(td1).append(td2);
				table.append(tr);
			}
		}
	};

	// Load configuration for site
	refToolbarConfig();

	// End of code loaded only on edit
};

export {refToolbar2};
