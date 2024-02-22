const checkDiffPage = ($content: JQuery): boolean => {
	return $content.find('table').hasClass('diff') && !!mw.config.get('wgCurRevisionId');
};

export {checkDiffPage};
