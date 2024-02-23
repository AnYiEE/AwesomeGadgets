import {WG_ACTION, WG_CANONICAL_SPECIAL_PAGE_NAME} from './constant';

const fixSummary = ($body: JQuery<HTMLBodyElement>): void => {
	switch (WG_CANONICAL_SPECIAL_PAGE_NAME) {
		case 'FileImporter-SpecialPage':
			$body
				.find('input[name=intendedRevisionSummary]')
				.val(
					`导入自[[commons:File:${$body
						.find('h2.mw-importfile-header-title')
						.html()}|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］`
				);
			break;
		case 'Import':
			$body.find('input[name=usernamePrefix]').val('qwbk');
			$body
				.find('#mw-import-upload-form input[name=log-comment]')
				.val('导入自[[qwbk:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］');
			$body
				.find('#mw-import-interwiki-form input[name=log-comment]')
				.val('［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］');
			$body.find('input[name=assignKnownUsers]').prop('checked', true);
			break;
		case 'MassEditRegex':
			$body.find('#wpSummaryLabel').html(
				$body
					.find('#wpSummaryLabel')
					.text()
					.replace(/\[\[#\.\|(.+?)]]/g, '$1')
			);
			break;
		case 'ReplaceText':
			$body.find('input[name=doAnnounce]').prop({
				checked: false,
				disabled: true,
			});
			break;
	}

	if (WG_ACTION === 'delete') {
		const $wpReason: JQuery = $body.find('input[name=wpReason]');
		if (!$wpReason.length) {
			return;
		}

		const autoSummaryRegExp: RegExp = /(内容|page was empty|content before blanking was)/i;
		if (autoSummaryRegExp.test(String($wpReason.val()))) {
			$wpReason.val('');
		}
	}
};

export {fixSummary};
