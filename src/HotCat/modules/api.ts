import {initMwApi} from 'ext.gadget.Util';

// Initialize MediaWiki API
const mwApi: (userAgent?: string) => mw.Api = (userAgent) => {
	return initMwApi(userAgent);
};

export {mwApi};
