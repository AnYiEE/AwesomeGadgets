const disableTitle = ({$body, $editForm}: {$body: JQuery<HTMLBodyElement>; $editForm: JQuery<HTMLElement>}): void => {
	if ($body.find('#no-new-title').length && $body.find('#editform input[name="wpSection"]').val() === 'new') {
		// 传统文本编辑器
		const $wpSummary: JQuery = $editForm.find('input[name=wpSummary]');
		$wpSummary.prop('disabled', true);
		$wpSummary.val('');
	}

	const noSectionTitlePages: string[] = ['有兽档案馆_talk:侵权提报', '有兽档案馆_talk:存废讨论/关注度提报'];
	const noSectionTitlePagesRegex: RegExp = /^有兽档案馆_talk:存废讨论/;
	const {wgPageName} = mw.config.get();
	if (
		(noSectionTitlePages.includes(wgPageName) || noSectionTitlePagesRegex.test(wgPageName)) &&
		mw.util.getParamValue('section') === 'new'
	) {
		// 可视化编辑器 / 新wikitext模式
		mw.util.addCSS('h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}');
	}
};

export {disableTitle};
