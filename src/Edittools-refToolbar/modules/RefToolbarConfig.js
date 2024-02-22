/* global CiteTB */
/* eslint-disable camelcase, no-new, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * Sitewide options for the the Cite toolbar button:
 * All options should be specified
 *
 * "date format" sets the date format used for the function to insert the current date
 * Current available options:
 * date - the day of the month
 * zdate - day of the month, zero padded to 2 digits
 * monthname - The month name
 * month - The numberic month (1-12)
 * zmonth - numeric month, zero padded to 2 digits
 * year - The full year (4 digits)
 *
 * "autodate fields" is a list of template fields that should have a button to insert the current date
 *
 * "months" is a list of localized month names
 *
 * "modal" - if true, the dialogs will be modal windows, blocking access to the rest of the window.
 * All dialogs in the toolbar are modal by default
 *
 * "autoparse" - if true, previewing a ref will automatically trigger a preview of the parsed wikitext.
 * It is not recommended to set this to true as a global setting as it may slow the script down for
 * people with slow connections.
 *
 * "expandtemplates" - if true, templates and parser functions will be expanded when getting page text
 * (templates inside of ref tags will not be expanded). This will allow references inside of templates or
 * references using {{#tag:ref}} to be listed in the named refs dialog and searched by error checks.
 * This may slow loading the named refs and error check dialogs.
 */
const refToolbarConfig = () => {
	const {CiteTemplate, CiteErrorCheck} = window;

	CiteTB.Options = {
		'date format': '<year>-<zmonth>-<zdate>',
		'autodate fields': ['accessdate'],
		months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		modal: true,
		autoparse: true,
		expandtemplates: false,
	};

	// Cite template definitions
	new CiteTemplate(
		'cite web',
		'web',
		[
			// Basic fields
			{
				field: 'author<N>',
				increment_group: 'author_alt',
				increment_button: true,
			},
			{
				field: 'title',
				autofillprop: 'title',
			},
			{
				field: 'url',
				autofillid: 'url',
			},
			{
				field: 'website',
				autofillprop: 'journal',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'accessdate',
			},
			{
				field: 'ref',
				tooltip: 'cite-ref-tooltip',
			},
		],
		[
			// Expanded fields
			{
				field: 'authorlink<N>',
				tooltip: 'cite-authorlink-tooltip',
				increment_group: 'authorlink',
				increment_button: true,
			},
			{
				field: 'last<N>',
				autofillprop: 'last-incr',
				increment_group: 'author',
			},
			{
				field: 'first<N>',
				autofillprop: 'first-incr',
				increment_group: 'author',
				increment_button: true,
			},
			{
				field: 'location',
			},
			{
				field: 'page',
				tooltip: 'cite-page-tooltip',
			},
			{
				field: 'pages',
				autofillprop: 'pages',
				tooltip: 'cite-pages-tooltip',
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'doi',
				autofillid: 'doi',
				autofillprop: 'doi',
			},
			{
				field: 'date',
				autofillprop: 'date',
			},
			{
				field: 'quote',
			},
		]
	);
	new CiteTemplate(
		'cite news',
		'news',
		[
			// Basic fields
			{
				field: 'author<N>',
				increment_group: 'author_alt',
				increment_button: true,
			},
			{
				field: 'title',
				autofillprop: 'title',
			},
			{
				field: 'url',
				autofillid: 'url',
			},
			{
				field: 'accessdate',
			},
			{
				field: 'work',
				tooltip: 'cite-work-tooltip',
				autofillprop: 'journal',
			},
			{
				field: 'agency',
			},
			{
				field: 'issue',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'date',
				autofillprop: 'date',
			},
			{
				field: 'ref',
				tooltip: 'cite-ref-tooltip',
			},
		],
		[
			// Expanded fields
			{
				field: 'authorlink<N>',
				tooltip: 'cite-authorlink-tooltip',
				increment_group: 'authorlink',
				increment_button: true,
			},
			{
				field: 'last<N>',
				autofillprop: 'last-incr',
				increment_group: 'author',
			},
			{
				field: 'first<N>',
				autofillprop: 'first-incr',
				increment_group: 'author',
				increment_button: true,
			},
			{
				field: 'location',
			},
			{
				field: 'page',
				tooltip: 'cite-page-tooltip',
			},
			{
				field: 'pages',
				autofillprop: 'pages',
				tooltip: 'cite-pages-tooltip',
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'doi',
				autofillid: 'doi',
				autofillprop: 'doi',
			},
			{
				field: 'quote',
			},
		]
	);
	new CiteTemplate(
		'cite book',
		'book',
		[
			// Basic fields
			{
				field: 'author<N>',
				increment_group: 'author_alt',
				increment_button: true,
			},
			{
				field: 'coauthors',
				autofillprop: 'coauthors',
			},
			{
				field: 'editor',
			},
			{
				field: 'title',
				autofillprop: 'title',
			},
			{
				field: 'date',
				autofillprop: 'year',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'location',
				autofillprop: 'location',
			},
			{
				field: 'isbn',
				/* "autofillid":"isbn", */ autofillprop: 'isbn',
			},
			{
				field: 'page',
				tooltip: 'cite-page-tooltip',
			},
			{
				field: 'pages',
				autofillprop: 'pages',
				tooltip: 'cite-pages-tooltip',
			},
			{
				field: 'edition',
				autofillprop: 'edition',
			},
			{
				field: 'url',
				autofillid: 'url',
			},
			{
				field: 'accessdate',
			},
			{
				field: 'ref',
				tooltip: 'cite-ref-tooltip',
			},
		],
		[
			// Expanded fields
			{
				field: 'last<N>',
				autofillprop: 'last-incr',
				increment_group: 'author',
			},
			{
				field: 'first<N>',
				autofillprop: 'first-incr',
				increment_group: 'author',
				increment_button: true,
			},
			{
				field: 'authorlink<N>',
				tooltip: 'cite-authorlink-tooltip',
				increment_group: 'authorlink',
				increment_button: true,
			},
			{
				field: 'editor<N>-last',
				increment_group: 'editor',
			},
			{
				field: 'editor<N>-first',
				increment_group: 'editor',
				increment_button: true,
			},
			{
				field: 'editor<N>-link',
				increment_group: 'editorlink',
				increment_button: true,
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'chapter',
				autofillprop: 'chapter',
			},
			{
				field: 'quote',
			},
		]
	);
	new CiteTemplate(
		'cite journal',
		'journal',
		[
			// Basic fields
			{
				field: 'author<N>',
				increment_group: 'author_alt',
				increment_button: true,
			},
			{
				field: 'coauthors',
				autofillprop: 'coauthors',
			},
			{
				field: 'title',
				autofillprop: 'title',
			},
			{
				field: 'journal',
				autofillprop: 'journal',
			},
			{
				field: 'date',
				autofillprop: 'date',
			},
			{
				field: 'volume',
				autofillprop: 'volume',
			},
			{
				field: 'issue',
				autofillprop: 'issue',
			},
			{
				field: 'page',
				tooltip: 'cite-page-tooltip',
			},
			{
				field: 'pages',
				autofillprop: 'pages',
				tooltip: 'cite-pages-tooltip',
			},
			{
				field: 'doi',
				autofillid: 'doi',
				autofillprop: 'doi',
			},
			{
				field: 'pmid',
				autofillid: 'pmid',
			},
			{
				field: 'url',
				autofillid: 'url',
			},
			{
				field: 'accessdate',
			},
			{
				field: 'ref',
				tooltip: 'cite-ref-tooltip',
			},
		],
		[
			// Expanded fields
			{
				field: 'authorlink<N>',
				tooltip: 'cite-authorlink-tooltip',
				increment_group: 'authorlink',
				increment_button: true,
			},
			{
				field: 'last<N>',
				autofillprop: 'last-incr',
				increment_group: 'author',
			},
			{
				field: 'first<N>',
				autofillprop: 'first-incr',
				increment_group: 'author',
				increment_button: true,
			},
			{
				field: 'editor<N>-last',
				increment_group: 'editor',
			},
			{
				field: 'editor<N>-first',
				increment_group: 'editor',
				increment_button: true,
			},
			{
				field: 'editor<N>-link',
				increment_group: 'editorlink',
				increment_button: true,
			},
			{
				field: 'series',
			},
			{
				field: 'at',
				tooltip: 'cite-at-tooltip',
			},
			{
				field: 'trans-title',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'location',
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'issn',
				autofillprop: 'issn',
			},
			{
				field: 'pmc',
			},
			{
				field: 'oclc',
			},
			{
				field: 'bibcode',
			},
			{
				field: 'id',
			},
			{
				field: 'quote',
			},
			{
				field: 'postscript',
				tooltip: 'cite-postscript-tooltip',
			},
		]
	);
	new CiteTemplate(
		'cite conference',
		'conference',
		[
			// Basic fields
			{
				field: 'author',
				autofillprop: 'author1',
			},
			{
				field: 'coauthors',
				autofillprop: 'coauthors',
			},
			{
				field: 'title',
				autofillprop: 'title',
			},
			{
				field: 'conference',
			},
			{
				field: 'conferenceurl',
			},
			{
				field: 'booktitle',
				autofillprop: 'journal',
			},
			{
				field: 'date',
				autofillprop: 'date',
			},
			{
				field: 'year',
			},
			{
				field: 'month',
			},
			{
				field: 'volume',
				autofillprop: 'volume',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'location',
				autofillprop: 'location',
			},
			{
				field: 'isbn' /* , "autofillid":"isbn" */,
			},
			{
				field: 'pages',
			},
			{
				field: 'doi',
				autofillid: 'doi',
				autofillprop: 'doi',
			},
			{
				field: 'pmid',
				autofillid: 'pmid',
			},
			{
				field: 'url',
				autofillid: 'url',
			},
			{
				field: 'accessdate',
				tooltip: 'cite-accessdate-tooltip',
			},
		],
		[
			// Expanded fields
			{
				field: 'last',
				autofillprop: 'last1',
			},
			{
				field: 'first',
				autofillprop: 'first1',
			},
			{
				field: 'authorlink',
				tooltip: 'cite-authorlink-tooltip',
			},
			{
				field: 'editor',
			},
			{
				field: 'others',
			},
			{
				field: 'edition',
				autofillprop: 'edition',
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'issn',
			},
			{
				field: 'oclc',
			},
			{
				field: 'id',
				tooltip: 'cite-id-tooltip',
			},
			{
				field: 'quote',
			},
		]
	);
	new CiteTemplate(
		'cite encyclopedia',
		'encyclopedia',
		[
			// Basic fields
			{
				field: 'author',
				autofillprop: 'author1',
			},
			{
				field: 'title',
			},
			{
				field: 'editor',
			},
			{
				field: 'encyclopedia',
				autofillprop: 'title',
			},
			{
				field: 'volume',
			},
			{
				field: 'year',
				autofillprop: 'year',
			},
			{
				field: 'publisher',
				autofillprop: 'publisher',
			},
			{
				field: 'location',
				autofillprop: 'location',
			},
			{
				field: 'isbn' /* , "autofillid":"isbn" */,
			},
			{
				field: 'pages',
			},
			{
				field: 'url',
			},
		],
		[
			// Expanded fields
			{
				field: 'last',
				autofillprop: 'last1',
			},
			{
				field: 'first',
				autofillprop: 'first1',
			},
			{
				field: 'authorlink',
				tooltip: 'cite-authorlink-tooltip',
			},
			{
				field: 'coauthors',
				autofillprop: 'coauthors',
			},
			{
				field: 'others',
			},
			{
				field: 'edition',
				autofillprop: 'edition',
			},
			{
				field: 'oclc',
			},
			{
				field: 'id',
				tooltip: 'cite-id-tooltip',
			},
			{
				field: 'accessdate',
				tooltip: 'cite-accessdate-tooltip',
			},
			{
				field: 'language',
				autofillprop: 'language',
			},
			{
				field: 'format',
			},
			{
				field: 'date',
			},
			{
				field: 'month',
			},
			{
				field: 'quote',
			},
		]
	);

	// Cite error check definitions
	new CiteErrorCheck({
		type: 'reflist',
		testname: 'samecontent',
		desc: 'cite-samecontent-desc',
		func: (reflist) => {
			const errors = [];
			const refs2 = [];
			for (const element of reflist) {
				if (element.shorttag) {
					continue;
				}
				if (refs2.includes(element.content)) {
					if (errors.includes(element.content)) {
						continue;
					}
					errors.push(element.content);
				} else {
					refs2.push(element.content);
				}
			}
			const ret = [];
			for (const error of errors) {
				ret.push({
					msg: 'cite-samecontent-error',
					err: error,
				});
			}
			return ret;
		},
	});
	new CiteErrorCheck({
		type: 'reflist',
		testname: 'repeated',
		desc: 'cite-repeated-desc',
		func: (reflist) => {
			const errors = [];
			const refs2 = [];
			for (const element of reflist) {
				if (element.shorttag || !element.refname) {
					continue;
				}
				if (refs2.includes(element.refname)) {
					if (errors.includes(element.refname)) {
						continue;
					}
					errors.push(element.refname);
				} else {
					refs2.push(element.refname);
				}
			}
			const ret = [];
			for (const error of errors) {
				ret.push({
					msg: 'cite-repeated-error',
					err: error,
				});
			}
			return ret;
		},
	});
	new CiteErrorCheck({
		type: 'reflist',
		testname: 'undefined',
		desc: 'cite-undefined-desc',
		func: (reflist) => {
			const errors = [];
			const longrefs = [];
			for (const value of Object.values(reflist)) {
				const {refname, shorttag} = value;
				if (!shorttag && refname) {
					longrefs.push(value.refname);
				}
				if (shorttag && errors.includes(refname) === -1 && !longrefs.includes(refname)) {
					errors.push(refname);
				}
			}
			const ret = [];
			for (const error of errors) {
				ret.push({
					msg: 'cite-undefined-error',
					err: error,
				});
			}
			return ret;
		},
	});

	// execute main function
	CiteTB.init();
};

export {refToolbarConfig};
