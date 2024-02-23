import {WG_NAMESPACE_NUMBER} from './constant';

const smartNewSection = ($body: JQuery<HTMLBodyElement>): void => {
	if (!mw.user.options.get('discussiontools-newtopictool') || !mw.user.options.get('discussiontools-betaenable')) {
		const $caTalk: JQuery = $body.find('#ca-talk');
		if ($caTalk.hasClass('new') && WG_NAMESPACE_NUMBER !== 2) {
			const $a: JQuery<HTMLAnchorElement> = $('a:first', $caTalk);
			$a.attr('href', `${$a.attr('href')}&section=new`);
		}
	}
};

export {smartNewSection};
