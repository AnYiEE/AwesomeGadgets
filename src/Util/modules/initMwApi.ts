type InitMwApi = typeof initMwApi;

/**
 * @requires mediawiki.api
 * @param {string} [userAgent]
 * @param {string} [apiUri]
 * @return {mw.Api|mw.ForeignApi}
 */
function initMwApi(userAgent?: string): mw.Api;
function initMwApi(userAgent: string, apiUri: string): mw.ForeignApi;
// eslint-disable-next-line func-style
function initMwApi(userAgent?: string, apiUri?: string): mw.Api | mw.ForeignApi {
	const apiOptions = {
		ajax: {
			headers: {
				'Api-User-Agent': userAgent ? `Qiuwen/1.1 (${userAgent})` : 'Qiuwen/1.1',
			},
		},
	};

	if (apiUri) {
		return new mw.ForeignApi(apiUri, apiOptions);
	}

	return new mw.Api(apiOptions);
}

export {type InitMwApi, initMwApi};
