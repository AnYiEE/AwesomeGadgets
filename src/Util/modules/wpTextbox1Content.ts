type GetWpTextbox1Content = typeof getWpTextbox1Content;
type SetWpTextbox1Content = typeof setWpTextbox1Content;

const getWpTextbox1Content = ({$editForm}: {$editForm: JQuery<HTMLElement>}): string => {
	return $editForm.find<HTMLTextAreaElement>('#wpTextbox1').textSelection('getContents') ?? '';
};

const setWpTextbox1Content = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}): void => {
	$editForm.find<HTMLTextAreaElement>('#wpTextbox1').textSelection('setContents', content);
};

export {getWpTextbox1Content, type GetWpTextbox1Content, setWpTextbox1Content, type SetWpTextbox1Content};
