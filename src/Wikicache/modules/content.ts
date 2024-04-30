const getWpTextbox1Content = ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	return $editForm.find<HTMLTextAreaElement>('#wpTextbox1').textSelection('getContents');
};

const getWpSummaryContent = ({$editForm}: {$editForm: JQuery<HTMLElement>}): string => {
	return $editForm.find<HTMLInputElement>('#wpSummary')?.val() ?? '';
};

const setWpTextbox1Content = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}) => {
	$editForm.find<HTMLTextAreaElement>('#wpTextbox1').textSelection('setContents', content);
};

const setWpSummaryContent = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}) => {
	$editForm.find<HTMLInputElement>('#wpSummary').val(content);
};

export {getWpSummaryContent, getWpTextbox1Content, setWpSummaryContent, setWpTextbox1Content};
