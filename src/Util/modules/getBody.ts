type GetBody = () => JQuery.Thenable<JQuery<HTMLBodyElement>>;

const getBody = () => {
	return $.ready.then((): JQuery<HTMLBodyElement> => {
		const $body: JQuery<HTMLBodyElement> = $('body');

		return $body;
	});
};

export {type GetBody, getBody};
