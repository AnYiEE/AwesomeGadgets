import {initMwApi} from 'ext.gadget.Util';

if (!mw.user.options.get('gadget-Wikiplus')) {
	void initMwApi('Wikiplus-highlight/2.0').postWithEditToken({
		action: 'options',
		change: 'gadget-Wikiplus=1',
	});

	void mw.loader.using('ext.gadget.Wikiplus');
}
