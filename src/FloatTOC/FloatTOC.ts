import './FloatTOC.less';
import {floatTOC} from './modules/core';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const $originToc: JQuery = $body.find('#toc');
	if (!$originToc.length) {
		return;
	}

	floatTOC($originToc);
});
