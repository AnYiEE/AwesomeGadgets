const getMessage = (key: string, ...args: string[]): string => {
	key = `hotcat-${key}`;
	// Messages that can be used here:
	// * see messages.ts
	// * for more information
	return mw.message(key, ...args).plain();
};

export {getMessage};
