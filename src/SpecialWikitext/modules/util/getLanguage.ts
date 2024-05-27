const {wgUserLanguage, wgUserVariant} = mw.config.get();

const getLanguage = (): string => {
	const lang: string = wgUserLanguage;

	if (lang.includes('zh')) {
		return wgUserVariant as string;
	}

	return lang;
};

export {getLanguage};
