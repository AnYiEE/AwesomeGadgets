const getWpTextbox1Content = ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	return $editForm.find('textarea[name=wpTextbox1]').textSelection('getContents');
};

const setWpTextbox1Content = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}) => {
	$editForm.find('textarea[name=wpTextbox1]').textSelection('setContents', content);
};

export {getWpTextbox1Content, setWpTextbox1Content};
