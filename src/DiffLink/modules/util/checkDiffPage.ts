const checkDiffPage = ($content: JQuery): boolean => {
	const {wgCurRevisionId} = mw.config.get();
	return $content.find('table').hasClass('diff') && !!wgCurRevisionId;
};

export {checkDiffPage};
