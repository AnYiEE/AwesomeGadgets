/**
 * 于[[Special:Listusers]]显示使用者最后编辑时间
 */
import {checkLastActive} from './modules/checkLastActive';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();

	if (wgCanonicalSpecialPageName !== 'Listusers') {
		return;
	}

	for (const element of $body.find('#mw-content-text>ul>li')) {
		void checkLastActive($(element));
	}
});
