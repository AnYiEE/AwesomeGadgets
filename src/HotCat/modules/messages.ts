import {WG_USER_LANGUAGE} from './constant';

export const hotCatMessages = (): void => {
	if (['zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'].includes(WG_USER_LANGUAGE)) {
		mw.messages.set({
			'hotcat-messages-cat_removed': '已移除[[Category:$1]]',
			'hotcat-messages-template_removed': '已移除{{[[Category:$1]]}}',
			'hotcat-messages-cat_added': '已添加[[Category:$1]]',
			// $2 is the new key
			'hotcat-messages-cat_keychange': '已設置[[Category:$1]]的新排序字："$2"',
			'hotcat-messages-cat_notFound': '分類“$1”沒有找到',
			'hotcat-messages-cat_exists': '分類“$1”已經存在，沒有添加。',
			'hotcat-messages-cat_resolved': '（重定向[[Category:$1]]已處理）',
			'hotcat-messages-uncat_removed': '已移除{{uncategorized}}',
			// Some text to prefix to the edit summary.
			'hotcat-messages-prefix': '使用[[H:HOTCAT|HotCat]]',
			// Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
			// to have a marker at the front, use prefix and set this to the empty string.
			'hotcat-messages-using': '',
			'hotcat-messages-multi_change': '$1個分類',
			// Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
			// any items, but that contains links to other categories where stuff should be categorized. If you don't have
			// that concept on your wiki, set it to blank string. Use blanks, not underscores.
			'hotcat-disambig_category': '',
			// Any category in this category is deemed a (soft) redirect to some other category defined by a link
			// to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
			// If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
			// a disambiguation category instead.
			'hotcat-redir_category': '已重定向的分类',
			'hotcat-messages-separator': '; ',
			// $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
			// you can set this to an array of strings suitable for passing to mw.language.configPlural().
			// If that function doesn't exist, HotCat will simply fall back to using the last
			// entry in the array.
			// Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
			// not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
			// by a category name.
			'hotcat-messages-short_catchange': '$1',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-commit': '儲存',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-ok': '確定',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-cancel': '取消',
			// Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-multi_error':
				'無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。',
			// Plural of category_canonical.
			'hotcat-categories': '分類',
			// Names for the search engines
			'hotcat-engine_names-searchindex': '搜尋索引',
			'hotcat-engine_names-pagelist': '頁面列表',
			'hotcat-engine_names-combined': '合併搜尋',
			'hotcat-engine_names-subcat': '子分類',
			'hotcat-engine_names-parentcat': '上層分類',
			// The tooltips for the above links
			'hotcat-tooltips-change': '修改',
			'hotcat-tooltips-remove': '移除',
			'hotcat-tooltips-add': '增加一個新分類',
			'hotcat-tooltips-restore': '復原變更',
			'hotcat-tooltips-undo': '復原變更',
			'hotcat-tooltips-down': '打開以修改並顯示子分類',
			'hotcat-tooltips-up': '打開以修改並顯示上層分類',
			// Tooltip for the "enter multi-mode" link
			'hotcat-multi_tooltip': '修改多個分類',
		});
	} else {
		mw.messages.set({
			'hotcat-messages-cat_removed': '已移除[[Category:$1]]',
			'hotcat-messages-template_removed': '已移除{{[[Category:$1]]}}',
			'hotcat-messages-cat_added': '已添加[[Category:$1]]',
			// $2 is the new key
			'hotcat-messages-cat_keychange': '已设置[[Category:$1]]的新排序字："$2"',
			'hotcat-messages-cat_notFound': '分类“$1”没有找到',
			'hotcat-messages-cat_exists': '分类“$1”已经存在，没有添加。',
			'hotcat-messages-cat_resolved': '（重定向[[Category:$1]]已处理）',
			'hotcat-messages-uncat_removed': '已移除{{uncategorized}}',
			// Some text to prefix to the edit summary.
			'hotcat-messages-prefix': '使用[[H:HOTCAT|HotCat]]',
			// Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
			// to have a marker at the front, use prefix and set this to the empty string.
			'hotcat-messages-using': '',
			'hotcat-messages-multi_change': '$1个分类',
			// Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
			// any items, but that contains links to other categories where stuff should be categorized. If you don't have
			// that concept on your wiki, set it to blank string. Use blanks, not underscores.
			'hotcat-disambig_category': '',
			// Any category in this category is deemed a (soft) redirect to some other category defined by a link
			// to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
			// If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
			// a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
			'hotcat-messages-separator': '; ',
			// $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
			// you can set this to an array of strings suitable for passing to mw.language.configPlural().
			// If that function doesn't exist, HotCat will simply fall back to using the last
			// entry in the array.
			// Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
			// not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
			// by a category name.
			'hotcat-messages-short_catchange': '$1',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-commit': '保存',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-ok': '确定',
			// Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-cancel': '取消',
			// Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
			// see localization hook below.
			'hotcat-messages-multi_error':
				'无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。',
			// Plural of category_canonical.
			'hotcat-categories': '分类',
			// Names for the search engines
			'hotcat-engine_names-searchindex': '搜索索引',
			'hotcat-engine_names-pagelist': '页面列表',
			'hotcat-engine_names-combined': '合并搜索',
			'hotcat-engine_names-subcat': '子分类',
			'hotcat-engine_names-parentcat': '上层分类',
			// The tooltips for the above links
			'hotcat-tooltips-change': '修改',
			'hotcat-tooltips-remove': '移除',
			'hotcat-tooltips-add': '增加一个新分类',
			'hotcat-tooltips-restore': '撤销更改',
			'hotcat-tooltips-undo': '撤销更改',
			'hotcat-tooltips-down': '打开以修改并显示子分类',
			'hotcat-tooltips-up': '打开以修改并显示上层分类',
			// Tooltip for the "enter multi-mode" link
			'hotcat-multi_tooltip': '修改多个分类',
		});
	}
};
