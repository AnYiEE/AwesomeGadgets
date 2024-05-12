type GetWpSummaryContent = typeof getWpSummaryContent;
type SetWpSummaryContent = typeof setWpSummaryContent;

const getWpSummaryContent = ({$editForm}: {$editForm: JQuery<HTMLElement>}): string => {
	return $editForm.find<HTMLInputElement>('#wpSummary')?.val() ?? '';
};

const setWpSummaryContent = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}): void => {
	$editForm.find<HTMLInputElement>('#wpSummary').val(content);
};

export {getWpSummaryContent, type GetWpSummaryContent, setWpSummaryContent, type SetWpSummaryContent};
