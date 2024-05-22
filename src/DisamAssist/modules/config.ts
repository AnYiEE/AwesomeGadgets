const cfg = {
	/* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
	disamCategories: ['全部消歧义页面'],
	/* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
	disamLinkTemplates: [
		'Disambiguation needed',
		'Ambiguous link',
		'Amblink',
		'Dab needed',
		'Disamb-link',
		'Disambig needed',
		'Disambiguate',
		'Dn',
		'Needdab',
	],
	/* "Canonical names" of the templates that designate intentional links to disambiguation pages */
	disamLinkIgnoreTemplates: ['R from ambiguous page', 'R to disambiguation page', 'R from incomplete disambiguation'],
	/* Format string for "Foo (disambiguation)"-style pages */
	disamFormat: '$1（消歧义）',
	/* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
	disamRegExp: '^(.*)（(消歧义|消歧義)）$',
	/* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
	disamNeededText: '{{dn|date={{'.concat('subst:', 'CURRENTMONTHNAME', '}} {{', 'subst:', 'CURRENTYEAR}}}}'),
	/* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
	redirectToDisam: '#重定向 [[$1]]'.concat('{{R to disambiguation page}}'),
	/* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
	intentionalLinkOption: false,
	/* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
	targetNamespaces: [6, 10, 14, 302, 0],
	/* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
	backlinkLimit: 250,
	/* Number of titles we can query for at once */
	queryTitleLimit: 50,
	/* Number of characters before and after the incoming link that will be displayed */
	radius: 300,
	/* Height of the context box, in lines */
	numContextLines: 4,
	/* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
	historySize: 2,
	/* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
	editCooldown: 0,
	/* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
	watch: 'nochange',
};

export {cfg};
