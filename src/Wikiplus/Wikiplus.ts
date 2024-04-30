import './Wikiplus.less';

(async (): Promise<void> => {
	const {wgAction, wgIsArticle} = mw.config.get();
	if (wgAction !== 'view' || !wgIsArticle) {
		return;
	}

	const {'gadget-Wikiplus-highlight': isWphlEnable, 'visualeditor-enable': isVeEnable} =
		mw.user.options.get() as Record<string, unknown>;

	const loader = async (): Promise<void> => {
		/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
		await import('./modules/core');

		if (!('ontouchstart' in document) && isWphlEnable) {
			/*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
			await import('./modules/highlight');
		}
	};

	/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
	if (isVeEnable) {
		await mw.loader.using('ext.visualEditor.core');
	}

	void loader();
})();
