import React from 'ext.gadget.React';
import WordCount from '../components/WordCount';
import {tip} from '../components/WordCount.module.less';

const wordCount = ($body: JQuery<HTMLBodyElement>): void => {
	$body.find(`.${tip}`).remove();

	const text: string | undefined = window.getSelection()?.toString();
	if (!text) {
		return;
	}

	const $element = $(<WordCount text={text} />);

	$element.appendTo($body);

	setTimeout((): void => {
		$element.fadeOut('slow');
	}, 5 * 1000);
};

export {wordCount};
