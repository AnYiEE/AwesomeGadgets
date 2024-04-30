const fixSummary = (): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	if (wgCanonicalSpecialPageName === 'Import') {
		const defaultSummary = '页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史';
		const defaultFileImportSummary = `${defaultSummary}；文件作者请参见此页面及来源页面记载`;

		// #mw-import-upload-form
		const userNamePrefixInput = document.querySelector<HTMLInputElement>(
			'#mw-import-upload-form input[name=usernamePrefix]'
		);
		if (userNamePrefixInput) {
			userNamePrefixInput.addEventListener('input', () => {
				const uploadLogCommentInput = document.querySelector<HTMLInputElement>(
					'#mw-import-upload-form input[name=log-comment]'
				);
				if (!uploadLogCommentInput) {
					return;
				}

				const importUploadPrefix = userNamePrefixInput?.value;
				uploadLogCommentInput.value = `导入自[[${importUploadPrefix}:|此网站]]的同名页面［${importUploadPrefix === 'commons' ? defaultFileImportSummary : defaultSummary}］`;
			});
		}

		// #mw-import-interwiki-form
		const interwikiLogCommentInput = document.querySelector<HTMLInputElement>(
			'#mw-import-interwiki-form input[name=log-comment]'
		);
		const interwikiPrefixSelect = document.querySelector<HTMLSelectElement>(
			'#mw-import-interwiki-form select[name=interwiki]'
		);

		if (interwikiLogCommentInput) {
			interwikiLogCommentInput.value = defaultSummary;

			if (interwikiPrefixSelect) {
				interwikiPrefixSelect.addEventListener('change', () => {
					switch (interwikiPrefixSelect.value) {
						case 'commons':
							interwikiLogCommentInput.value = `［${defaultFileImportSummary}］`;
							break;
						default:
							interwikiLogCommentInput.value = `［${defaultSummary}］`;
							break;
					}
				});
			}
		}

		// #assignKnownUsers
		const assignKnownUsers = document.querySelectorAll<HTMLInputElement>('input[name=assignKnownUsers]');
		if (assignKnownUsers.length) {
			for (const checkBox of assignKnownUsers) {
				checkBox.checked = true;
			}
		}
	}
};

export {fixSummary};
