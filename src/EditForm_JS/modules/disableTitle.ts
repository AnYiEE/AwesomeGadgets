import {WG_PAGE_NAME} from './constant';

const disableTitle = ($body: JQuery<HTMLBodyElement>): void => {
	if ($body.find('#no-new-title').length && $body.find('#editform input[name="wpSection"]').val() === 'new') {
		// 传统文本编辑器
		const $wpSummary: JQuery = $body.find('input[name=wpSummary]');
		$wpSummary.prop('disabled', true);
		$wpSummary.val('');
	}

	const noSectionTitlePages: string[] = ['LIB_talk:侵权提报', 'LIB_talk:存废讨论/关注度提报'];
	const noSectionTitlePagesRegex: RegExp = /^LIB_talk:存废讨论/;
	if (
		(noSectionTitlePages.includes(WG_PAGE_NAME) || noSectionTitlePagesRegex.test(WG_PAGE_NAME)) &&
		mw.util.getParamValue('section') === 'new'
	) {
		// 可视化编辑器 / 新wikitext模式
		mw.util.addCSS('h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}');
	}
};

export {disableTitle};
