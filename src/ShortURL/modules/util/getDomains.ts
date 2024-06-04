const getDomains = (): string[] => {
	const {wgWikiID} = mw.config.get();
	let domains: string[] = [];

	switch (wgWikiID) {
		case 'wiki-ysy':
			domains = ['youshou.wiki', 'ysymh.cc'];
			break;
	}

	return domains;
};

export {getDomains};
