const smartNewSection = ($body: JQuery<HTMLBodyElement>): void => {
	if (!mw.user.options.get('discussiontools-newtopictool') || !mw.user.options.get('discussiontools-betaenable')) {
		const $caTalk: JQuery = $body.find('#ca-talk');
		const {wgNamespaceNumber} = mw.config.get();
		if ($caTalk.hasClass('new') && wgNamespaceNumber !== 2) {
			const $a: JQuery<HTMLAnchorElement> = $('a:first', $caTalk);
			$a.attr('href', `${$a.attr('href')}&section=new`);
		}
	}
};

export {smartNewSection};
