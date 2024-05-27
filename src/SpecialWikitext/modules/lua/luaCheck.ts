import {luaGetCSSwikitext, luaGetJSONwikitext, luaGetJSwikitext} from './luaGetText';

const {wgPageContentModel} = mw.config.get();

// 判断是否为Lua
const luaCheck = (inputString: string = '', contentModel: string = wgPageContentModel): string => {
	// 根据页面内容模型选用适当的解析模式
	switch (contentModel.toLowerCase()) {
		case 'json':
			return luaGetJSONwikitext(inputString);
		case 'js':
		case 'javascript':
		case 'text':
			return luaGetJSwikitext(inputString);
		case 'css':
		case 'sanitized-css':
			return luaGetCSSwikitext(inputString);
		default:
			return '';
	}
};

export {luaCheck};
