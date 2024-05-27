const fixCheckbox = () => {
	const {wgCanonicalSpecialPageName, wgWikiID} = mw.config.get();

	if (wgCanonicalSpecialPageName !== 'Import') {
		return;
	}

	const interwikiHistory = document.querySelector<HTMLInputElement>('input[name=interwikiHistory]');
	const interwikiTemplates = document.querySelector<HTMLInputElement>('input[name=interwikiTemplates]');

	if (interwikiHistory) {
		interwikiHistory.checked = false;
	}

	if (interwikiTemplates) {
		interwikiTemplates.checked = false;
	}

	if (wgWikiID === 'wiki-ysy') {
		if (interwikiHistory) {
			interwikiHistory.disabled = true;
		}

		if (interwikiTemplates) {
			interwikiTemplates.disabled = true;
		}
	}

	const form = document.querySelector<HTMLFormElement>('#mw-import-interwiki-form');

	if (form) {
		form.addEventListener('submit', (event: SubmitEvent): void => {
			event.preventDefault();
			void (async () => {
				if (!interwikiHistory || !interwikiHistory.checked) {
					return;
				}
				const confirmed = await OO.ui.confirm('您是否要导入此页面的所有版本？');
				if (!confirmed) {
					interwikiHistory.checked = false;
				}
			})()
				.then(async () => {
					if (!interwikiTemplates || !interwikiTemplates.checked) {
						return;
					}
					const confirmed = await OO.ui.confirm('您是否要导入此页面所包含的所有模板和其他页面？');
					if (!confirmed) {
						interwikiTemplates.checked = false;
					}
				})
				.then(() => {
					form.submit();
				});
		});
	}
};

export {fixCheckbox};
