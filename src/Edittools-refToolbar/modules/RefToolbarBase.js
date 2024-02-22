/* global CiteTB */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {getMessage} from './util/getMessage';

const refToolbarBase = () => {
	window.CiteTB ||= {
		Templates: {}, // All templates
		Options: {}, // Global options
		UserOptions: {}, // User options
		DefaultOptions: {}, // Script defaults
		ErrorChecks: {}, // Error check functions
	};

	// Class for cite templates
	window.CiteTemplate = class CiteTemplate {
		constructor(templatename, shortform, basicfields, expandedfields) {
			// Properties
			this.templatename = templatename; // The template name - "cite web", "cite book", etc.
			this.shortform = shortform; // A short form, used for the dropdown box
			this.basic = basicfields; // Basic fields - author, title, publisher...

			// Less common - quote, archiveurl - should be everything the template supports minus the basic ones
			this.extra = expandedfields;
			this.incrementables = {};

			// Add it to the list
			CiteTB.Templates[this.templatename] = this;
		}
		makeFormInner(fields, incrsetup) {
			const trs = [];
			const autofills = [];
			let tr;
			for (const [i, fieldobj] of fields.entries()) {
				let {field} = fieldobj;
				let labelfield = fieldobj.field;
				let ad = false;
				let im;
				if (incrsetup && fieldobj.increment_group) {
					field = fieldobj.field.replace('<N>', '1');
					labelfield = fieldobj.field.replace('<N>', '');
					if (
						this.incrementables[fieldobj.increment_group] &&
						!this.incrementables[fieldobj.increment_group].setup
					) {
						// The object has been created, but not fully initialized
						this.incrementables[fieldobj.increment_group].fields.push(fieldobj);
					} else if (!this.incrementables[fieldobj.increment_group]) {
						// Object not yet created
						this.incrementables[fieldobj.increment_group] = {
							fields: [fieldobj],
							val: 1,
							setup: false,
						};
					} else if (
						this.incrementables[fieldobj.increment_group] &&
						this.incrementables[fieldobj.increment_group].setup
					) {
						// Fully initialized from a previous invocation of this function, just resetting the number
						this.incrementables[fieldobj.increment_group].val = 1;
					}
				} else if (fieldobj.increment_group) {
					// Adding a new row
					const incrval = this.incrementables[fieldobj.increment_group].val;
					field = fieldobj.field.replace('<N>', incrval.toString());
					labelfield = fieldobj.field.replace('<N>', '');
				}
				const autodateFields = CiteTB.getOption('autodate fields');
				if (autodateFields.includes(field)) {
					im = $('<img>').attr('src', 'https://youshou.wiki/images/7/7b/Nuvola_apps_date.svg');
					im.attr('alt', getMessage('cite-insert-date')).attr('title', getMessage('cite-insert-date'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-date-${CiteTB.escStr(this.shortform)}-${field}`);
					$(document).on(
						'click',
						`#cite-date-${CiteTB.escStr(this.shortform)}-${field}`,
						CiteTB.fillAccessdate
					);
				}
				if (fieldobj.autofillid) {
					const autotype = fieldobj.autofillid;
					im = $('<img>').attr('src', 'https://youshou.wiki/images/1/17/System-search.svg');
					im.attr('alt', getMessage('cite-autofill-alt')).attr('title', getMessage('cite-autofill-alt'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-auto-${CiteTB.escStr(this.shortform)}-${field}-${autotype}`);
					autofills.push(`#cite-auto-${CiteTB.escStr(this.shortform)}-${field}-${autotype}`);
				}
				if (fieldobj.increment_button) {
					const incrtype = fieldobj.increment_group;
					im = $('<img>').attr('src', 'https://youshou.wiki/images/b/b9/Nuvola_action_edit_add.svg');
					im.attr('alt', getMessage('cite-increment-alt')).attr('title', getMessage('cite-increment-alt'));
					ad = $('<a>').attr('href', '#');
					ad.append(im);
					ad.attr('id', `cite-incr-${CiteTB.escStr(this.shortform)}-${incrtype}`);
				}

				let display = getMessage(`cite-${labelfield}-label`);
				if (typeof display !== 'string') {
					display = fieldobj.label ? CiteTB.fixStr(fieldobj.label) : CiteTB.fixStr(labelfield);
				}
				const tooltip = fieldobj.tooltip
					? $('<abbr>').attr('title', getMessage(fieldobj.tooltip)).html($('<sup>').text('?'))
					: false;
				let input = '';
				input = $('<input>').attr({
					tabindex: '1',
					style: ad ? 'width: 85%' : 'width: 100%',
					type: 'text',
				});
				input.attr('id', `cite-${CiteTB.escStr(this.shortform)}-${field}`);
				if (fieldobj.autofillprop) {
					let classname = `cite-${CiteTB.escStr(this.shortform)}-${fieldobj.autofillprop}`;
					if (fieldobj.increment_group) {
						// eslint-disable-next-line mediawiki/class-doc
						input.addClass(`cite-${CiteTB.escStr(this.shortform)}-incr-${fieldobj.increment_group}`);
						classname += `-${this.incrementables[fieldobj.increment_group].val.toString()}`;
					}
					// eslint-disable-next-line mediawiki/class-doc
					input.addClass(classname);
				}
				const label = $('<label>');
				label.attr('for', `cite-${CiteTB.escStr(this.shortform)}-${field}`).text(display);
				if (tooltip) {
					label.append(tooltip);
				}
				let style = 'text-align: right; width: 20%;';
				if (i % 2 === 1) {
					style += ' padding-left: 1em;';
				} else {
					tr = $('<tr>');
				}
				const td1 = $('<td>').addClass('cite-form-td').attr({
					style,
				});
				td1.append(label);
				tr.append(td1);
				const td2 = $('<td>').addClass('cite-form-td').css('width', '30%');
				td2.append(input);
				if (ad) {
					td2.append(ad);
				}
				tr.append(td2);
				if (i % 2 === 0) {
					trs.push(tr);
				}
			}
			let needsetup = false;
			for (const g in this.incrementables) {
				if (!this.incrementables[g].setup) {
					needsetup = true;
					$(document).on('click', `#cite-incr-${CiteTB.escStr(this.shortform)}-${g}`, CiteTB.incrementFields);
					this.incrementables[g].setup = true;
				}
			}
			if (needsetup || Object.keys(this.incrementables).length === 0) {
				for (const autofill of autofills) {
					$(document).on('click', autofill, CiteTB.initAutofill);
				}
			}
			return trs;
		}
		// gives a little bit of HTML so the open form can be identified
		getInitial() {
			const hidden = $('<input>').addClass('cite-template').attr({
				type: 'hidden',
				value: this.templatename,
			});
			return hidden;
		}
		// makes the form used in the dialog boxes
		getForm() {
			const main = $('<div>').addClass('cite-form-container');
			const form1 = $('<table>').addClass('cite-basic-fields').css({
				width: '100%',
				'background-color': 'transparent',
			});
			let trs = this.makeFormInner(this.basic, true);
			for (const tr of trs) {
				form1.append(tr);
			}
			const form2 = $('<table>').addClass('cite-extra-fields').css({
				width: '100%',
				'background-color': 'transparent',
				display: 'none',
			});
			trs = this.makeFormInner(this.extra, true);
			for (const tr of trs) {
				form2.append(tr);
			}
			main.append(form1).append(form2);
			const form3 = $('<table>').addClass('cite-other-fields').css({
				width: '100%',
				'background-color': 'transparent',
				'padding-top': '1em',
			});
			const $tr = $('<tr>');
			const $td1 = $('<td>').addClass('cite-form-td').css({
				'text-align': 'right',
				width: '20%',
			});
			const $label1 = $('<label>');
			$label1.attr('for', `cite-${CiteTB.escStr(this.shortform)}-name`).text(getMessage('cite-name-label'));
			$td1.append($label1);
			const td2 = $('<td>').addClass('cite-form-td').css('width', '30%');
			const input1 = $('<input>').attr({
				tabindex: '1',
				style: 'width: 100%',
				type: 'text',
			});
			input1.attr('id', `cite-${CiteTB.escStr(this.shortform)}-name`);
			td2.append(input1);
			const td3 = $('<td>').addClass('cite-form-td').css({
				'text-align': 'right',
				'padding-left': '1em',
				width: '20%',
			});
			const label2 = $('<label>');
			label2.attr('for', `cite-${CiteTB.escStr(this.shortform)}-group`).text(getMessage('cite-group-label'));
			td3.append(label2);
			const td4 = $('<td>').addClass('cite-form-td').css('width', '30%');
			const input2 = $('<input>').attr({
				tabindex: '1',
				style: 'width: 100%',
				type: 'text',
			});
			input2.attr('id', `cite-${CiteTB.escStr(this.shortform)}-group`);
			td4.append(input2);
			$tr.append($td1).append(td2).append(td3).append(td4);
			form3.append($tr);
			main.append(form3);
			const extras = $('<div>');
			extras.append(
				$('<input>').addClass('cite-form-status').attr({
					type: 'hidden',
					value: 'closed',
				})
			);
			const hidden = $('<input>').addClass('cite-template').attr('type', 'hidden');
			hidden.val(this.templatename);
			extras.append(hidden);
			const span1 = $('<span>').addClass('cite-preview-label').css('display', 'none');
			span1.text(getMessage('cite-raw-preview'));
			extras.append(span1).append(
				$('<div>').addClass('cite-ref-preview').css({
					padding: '0.5em',
					'font-size': '110%',
				})
			);
			const span2 = $('<span>').addClass('cite-prev-parsed-label').css('display', 'none');
			span2.text(getMessage('cite-parsed-label'));
			extras.append(span2).append(
				$('<div>').addClass('cite-preview-parsed').css({
					'padding-bottom': '0.5em',
					'font-size': '110%',
				})
			);
			const link = $('<a>').addClass('cite-prev-parse').attr('href', '#').css({
				margin: '0 1em',
				display: 'none',
				color: '#00008b',
			});
			link.text(getMessage('cite-form-parse'));
			extras.append(link);
			main.append(extras);
			return main;
		}
	};
	/**
	 * Class for error checks
	 * FIXME: DOCS OUT OF DATE
	 * type - type of error check - current options:
	 * * 'refcheck' - apply a function on each ref individually
	 * - function should accept a ref object, return a string
	 * * 'reflist' - apply a function on the entire ref list
	 * - function should accept an array of ref objects, return an array of strings
	 * * 'search' - apply a function ro the page text
	 * - function should accept the page text as a string, return an array of strings
	 * The strings returned by the function should be valid HTML
	 * function - The function described above testname - Name of the error check, must not contain spaces
	 * desc - A short description of the test
	 *
	 * @param {unknown} obj
	 */
	window.CiteErrorCheck = class CiteErrorCheck {
		constructor(obj) {
			this.obj = obj;

			CiteTB.ErrorChecks[this.obj.testname] = this;
		}
		run() {
			let errors = [];
			switch (this.obj.type) {
				case 'refcheck':
					CiteTB.loadRefs();
					for (let i = 0; i < CiteTB.mainRefList.length; i++) {
						const e = this.obj.func(CiteTB.mainRefList[i]);
						if (e) {
							errors.push(e);
						}
					}
					break;
				case 'reflist':
					CiteTB.loadRefs();
					errors = this.obj.func(CiteTB.mainRefList);
					break;
				case 'search': {
					const {func} = this.obj;
					CiteTB.getPageText((text) => {
						errors = func(text);
					});
					break;
				}
			}
			return errors;
		}
		getRow() {
			const row = $('<li>');
			const check = $('<input>').attr({
				type: 'checkbox',
				name: 'cite-err-test',
			});
			check.attr('value', this.obj.testname);
			const label = $('<label>').html(getMessage(this.obj.desc));
			label.attr('for', this.obj.testname);
			row.append(check).append(' &ndash; ').append(label);
			return row;
		}
	};

	$(document).find('head').trigger('reftoolbarbase');
};

export {refToolbarBase};
