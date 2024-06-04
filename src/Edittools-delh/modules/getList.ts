const getVfdText = (code: string, comment: string) => {
	return {
		label: comment,
		action: {
			type: 'encapsulate',
			options: {
				pre: `{${`{delh|${code}}}\n`}`,
				post: `\n----\n: ${comment}。--~~`.concat('~~\n{', '{delf}}'),
			},
		},
	};
};

const getList = <T extends Record<string, string>>(list: T): Record<string, Partial<ReturnType<typeof getVfdText>>> => {
	const object: ReturnType<typeof getList> = {};
	for (const [code, comment] of Object.entries(list)) {
		object[code] = getVfdText(code, comment);
	}

	return object;
};

export {getList};
