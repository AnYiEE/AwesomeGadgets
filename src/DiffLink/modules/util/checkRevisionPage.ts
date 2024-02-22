const checkRevisionPage = ($content: JQuery): boolean => {
	return (
		($content.find('#contentSub #mw-revision-nav').length ||
			$content.find('main#content>.pre-content #mw-revision-nav').length) > 0
	);
};

export {checkRevisionPage};
