const getMessage = (key: string, ...args: string[]): string => {
	// Messages that can be used here:
	// * see messages.ts
	// * for more information
	return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};

export {getMessage};
