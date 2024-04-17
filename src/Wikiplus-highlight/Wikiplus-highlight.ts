import {api} from './modules/api';

if (!mw.user.options.get('gadget-Wikiplus')) {
	void api.postWithEditToken({
		action: 'options',
		change: 'gadget-Wikiplus=1',
	} as ApiOptionsParams);

	void mw.loader.using('ext.gadget.Wikiplus');
}
