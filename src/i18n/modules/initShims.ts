const initShims = (i18nMethods: typeof import('ext.gadget.i18n')): void => {
	const wgUXS = (
		hans: unknown,
		hant: unknown,
		cn: unknown,
		tw: unknown,
		hk: unknown,
		sg: unknown,
		zh: unknown,
		mo: unknown,
		my: unknown,
		en: unknown,
		method: 'content' | 'localize' | 'vary'
	): string => {
		zh = String(zh ?? hans ?? hant ?? cn ?? tw ?? hk ?? sg ?? mo ?? my ?? en);
		hans = String(hans ?? cn ?? sg ?? my ?? zh);
		hant = String(hant ?? tw ?? hk ?? mo ?? zh);
		cn = String(cn ?? hans);
		sg = String(sg ?? hans);
		tw = String(tw ?? hant);
		hk = String(hk ?? hant);
		mo = String(mo ?? hant);
		my = String(my ?? hant);
		en = String(en ?? zh);

		return i18nMethods[method]({
			en: en as string,
			zh: zh as string,
			'zh-hans': hans as string,
			'zh-hant': hant as string,
			'zh-cn': cn as string,
			'zh-tw': tw as string,
			'zh-hk': hk as string,
			'zh-sg': sg as string,
			'zh-mo': mo as string,
			'zh-my': my as string,
		});
	};

	window.wgUCS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'content');
	};
	window.wgULS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'localize');
	};
	window.wgUVS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
		return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'vary');
	};
};

export {initShims};
