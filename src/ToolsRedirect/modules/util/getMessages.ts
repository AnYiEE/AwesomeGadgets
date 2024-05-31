export const getMessage = (key: string, ...args: string[]) => {
	// Messages that can be used here:
	// * see messages.ts
	// * for more information
	key = `toolsredirect-${key}`;
	return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
