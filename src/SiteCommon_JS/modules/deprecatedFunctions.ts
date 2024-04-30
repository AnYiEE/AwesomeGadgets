const deprecatedFunctions = (): void => {
	/*!
	 * maintenance: Some user scripts may be using the following deprecated functions.
	 * These functions are no longer supported and should be updated.
	 */
	mw.log.deprecate(
		window,
		'importScript',
		(title: string): HTMLScriptElement => {
			return mw.loader.addScriptTag(
				mw.util.getUrl(title, {
					action: 'raw',
					ctype: 'text/javascript',
					maxage: '3600',
					smaxage: '3600',
				})
			);
		},
		'Use mw.loader.addScriptTag() instead'
	);
	mw.log.deprecate(
		window,
		'importStylesheet',
		(title: string): HTMLLinkElement => {
			return mw.loader.addLinkTag(
				mw.util.getUrl(title, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		},
		'Use mw.loader.addLinkTag() instead'
	);
	mw.log.deprecate(
		window,
		'importScriptURI',
		(modules: string): HTMLScriptElement => {
			return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
		},
		'Use mw.loader.addScriptTag() or mw.loader.getScript() instead'
	);
	mw.log.deprecate(
		window,
		'importStylesheetURI',
		(modules: string): HTMLLinkElement => {
			return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), 'text/css');
		},
		'Use mw.loader.addLinkTag() instead'
	);
	mw.log.deprecate(
		window,
		// @ts-expect-error TS2345
		'importScriptCallback',
		(title: string, ready: never): void => {
			void mw.loader
				.getScript(
					mw.util.getUrl(title, {
						action: 'raw',
						ctype: 'text/javascript',
						maxage: '3600',
						smaxage: '3600',
					})
				)
				.then(ready);
		},
		'Use mw.loader.getScript() instead'
	);
	mw.log.deprecate(
		window,
		// @ts-expect-error TS2345
		'importScriptURICallback',
		(url: string, ready: never): void => {
			void mw.loader.getScript(url).then(ready);
		},
		'Use mw.loader.getScript() instead'
	);
	/**
	 * maintenance: Some user scripts may be using the following deprecated functions.
	 * These functions are kept for compability.
	 */
	// mw.log.deprecate(window, 'JSConfig', {}, 'Use {} instead');
	/**
	 * wgU*S functions have been split to a seperate gadget (ext.gadget.i18n).
	 */
};

export {deprecatedFunctions};
