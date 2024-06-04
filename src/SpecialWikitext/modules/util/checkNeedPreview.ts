import * as OPTIONS from '../../options.json';

// 检查是否有预览的必要性
const checkNeedPreview = (): boolean => {
	return document.body.innerHTML.search(OPTIONS.wikiTextKey) > -1;
};

export {checkNeedPreview};
