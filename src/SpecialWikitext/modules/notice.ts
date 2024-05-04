import {Failed, Loading} from '../components/generateElements';
import React from 'ext.gadget.React';
import {addParsedWikitext} from './util/addParsedWikitext';

// [[File:Gnome-dialog-warning2.svg|32px]]
// -{zh-hans:预览加载失败;zh-hant:預覽載入失败;}-
const noticeFailElement: React.ReactElement = Failed();

// {{Quote box |quote  = -{zh-hans:预览加载中;zh-hant:預覽載入中;}-…… |width  = 50% |align  = center}}
const noticeLoadingElement: React.ReactElement = Loading();

// 改动DOM内容
const replaceDOM = (selector: string, element?: React.ReactElement): void => {
	$(selector).html(element ?? '');
};

// 加入“[载入中]”的提示
const addLoadingNotice = (): void => {
	addParsedWikitext(noticeLoadingElement);
};

// 载入错误的提示
const loadingFailNotice = (): void => {
	replaceDOM('#specialwikitext-preview-loading__content', noticeFailElement);
};

// 移除“[载入中]”的提示
const removeLoadingNotice = (): void => {
	replaceDOM('#specialwikitext-preview-loading');
};

export {noticeLoadingElement, addLoadingNotice, loadingFailNotice, removeLoadingNotice};
