import {initMwApi} from 'ext.gadget.Util';

((): void => {
	if (mw.user.options.get('gadget-ToolsRedirect')) {
		return;
	}

	const api = initMwApi('ToolsRedirect-opt-bolds-names/2.0');

	void api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});

	void mw.loader.using(['ext.gadget.ToolsRedirect']);
})();
