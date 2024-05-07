import {api} from './api';

const checkDependencies = async () => {
	if (!mw.user.options.get('gadget-Wikiplus')) {
		void api.postWithEditToken({
			action: 'options',
			change: 'gadget-Wikiplus=1',
		} as ApiOptionsParams);

		await mw.loader.using('ext.gadget.Wikiplus');
	}
};

export {checkDependencies};
