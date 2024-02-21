import {addButton} from './modules/addButton';

mw.hook('wikipage.content').add(($content): void => {
	const $pres: JQuery<HTMLPreElement> = $content.find('pre');
	if (!$pres.length) {
		return;
	}

	addButton($pres);
});
