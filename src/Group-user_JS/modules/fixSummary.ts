const fixSummary = ($body: JQuery<HTMLBodyElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	switch (wgCanonicalSpecialPageName) {
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
};

export {fixSummary};
