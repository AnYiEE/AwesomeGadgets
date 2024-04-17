import {api} from './modules/api';

if (!mw.user.options.get('gadget-ToolsRedirect')) {
	void api.postWithEditToken({
		action: 'options',
		change: 'gadget-ToolsRedirect=1',
	} as ApiOptionsParams);

	void mw.loader.using('ext.gadget.ToolsRedirect');
}
