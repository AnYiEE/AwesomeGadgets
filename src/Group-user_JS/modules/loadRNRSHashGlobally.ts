import {initMwApi} from 'ext.gadget.Util';

const loadRNRSHashGlobally = async () => {
	const optionnames = ['rnrsverify', 'rnrsverifytime', 'rnrsverifyhash'];

	await mw.loader.using(['mediawiki.api', 'mediawiki.ForeignApi']);
	const localApi = initMwApi('loadRNRSHashGlobally');
	const foreignApi = initMwApi('loadRNRSHashGlobally', 'https://youshou.wiki/api.php');

	// Get user data
	const localData = await localApi.get({action: 'query', meta: 'userinfo', uiprop: 'options'});
	const foreignData = await foreignApi.get({action: 'query', meta: 'userinfo', uiprop: 'options'});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const localOptions = localData['query'].userinfo.options;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const foreignOptions = foreignData['query'].userinfo.options;

	if (mw.config.get('wgUserName') !== foreignData['query'].userinfo.name) {
		return;
	}

	// Update global preferences
	for (const optionname of optionnames) {
		if (!localOptions[optionname] && foreignOptions[optionname]) {
			await foreignApi.postWithToken('csrf', {
				action: 'globalpreferences',
				optionname,

				optionvalue: foreignOptions[optionname] as string,
			});
		}
	}
};

export {loadRNRSHashGlobally};
