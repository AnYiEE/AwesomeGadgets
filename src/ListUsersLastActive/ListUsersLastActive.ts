/**
 * 于[[Special:Listusers]]显示使用者最后编辑时间
 */
import {WG_CANONICAL_SPECIAL_PAGE_NAME} from './modules/constant';
import {checkLastActive} from './modules/checkLastActive';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	if (WG_CANONICAL_SPECIAL_PAGE_NAME !== 'Listusers') {
		return;
	}

	for (const element of $body.find('#mw-content-text>ul>li')) {
		void checkLastActive($(element));
	}
});
