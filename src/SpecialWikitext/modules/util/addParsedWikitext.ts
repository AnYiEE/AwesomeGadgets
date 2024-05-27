import React from 'ext.gadget.React';
import {checkElementExist} from './checkElementExist';

// 将解析后的wikitext加入页面中
const addParsedWikitext = (parsedWikitext: string | React.ReactElement): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');
	const $parsedWikitext: JQuery = $().html(parsedWikitext);

	if (checkElementExist('#specialwikitext-preview-loading')) {
		const $element: JQuery = $body.find('#specialwikitext-preview-loading');
		$element.html(parsedWikitext);
		mw.hook('wikipage.content').fire($element);
	} else if (checkElementExist('.diff-currentversion-title')) {
		$body.find('.diff-currentversion-title').append($parsedWikitext);
	} else if (checkElementExist('.previewnote')) {
		$body.find('.previewnote').append($parsedWikitext);
	} else if (checkElementExist('.mw-undelete-revision')) {
		$body.find('.mw-undelete-revision').append($parsedWikitext);
	} else if (checkElementExist('#mw-content-text')) {
		$body.find('#mw-content-text').append($parsedWikitext);
	}

	mw.hook('wikipage.content').fire($parsedWikitext);
};

export {addParsedWikitext};
