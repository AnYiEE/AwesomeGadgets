import './AddSectionPlus.less';
import {getBody} from 'ext.gadget.Util';
import {processElement} from './modules/processElement';

void getBody().then(function addSectionPlus($body: JQuery<HTMLBodyElement>): void {
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return; //! style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
	}

	const $wrapper: JQuery = $body.find('#ca-addsection');
	if (!$wrapper.length) {
		return;
	}

	const $target: JQuery = $wrapper.find('span');
	if (!$target.length) {
		return;
	}

	processElement($target, skin);
});
