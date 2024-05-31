import {loadingFailNotice, removeLoadingNotice} from '../notice';
import {addParsedWikitext} from '../util/addParsedWikitext';
import {api} from '../api';
import {getLanguage} from '../util/getLanguage';

const {skin} = mw.config.get();

// 加入预览内容
const mwAddWikiText = async (wikitext: string, pageName: string, isPreview: boolean): Promise<void> => {
	if (wikitext.trim()) {
		const params: ApiParseParams = {
			action: 'parse',
			format: 'json',
			formatversion: '2',
			// 避免内容重复
			title: pageName,
			contentmodel: 'wikitext',
			text: wikitext,
			prop: 'text',
			uselang: getLanguage(),
			useskin: skin,
		};
		if (isPreview) {
			params.disableeditsection = true;
			params.preview = true;
		}

		try {
			const data = await api.post(params);
			if (!data?.['parse']?.text) {
				return;
			}

			const parsedWikitext: string = (data['parse'].text as string).trim();

			if (parsedWikitext) {
				addParsedWikitext(parsedWikitext);
			} else {
				removeLoadingNotice();
			}
		} catch {
			loadingFailNotice();
		}
	} else {
		removeLoadingNotice();
	}
};

// 加入预览的Lua内容
const mwAddLuaText = async (
	wikitext: string,
	pageName: string,
	isPreview: boolean,
	callBack?: (arg: string) => JQuery | HTMLElement | void
) => {
	const tempModuleName: string = 'AddText/Temp/Module/Data.lua';
	const moduleCall: {
		wikitext: string;
		pageName: string;
	} = {
		wikitext: '#invoke:',
		// 分开来，避免被分到[[:Category:有脚本错误的页面]]
		pageName: 'Module:',
	};

	if (wikitext.trim()) {
		try {
			const params: ApiParseParams = {
				action: 'parse',
				format: 'json',
				formatversion: '2',
				title: pageName,
				contentmodel: 'wikitext',
				templatesandboxtitle: moduleCall.pageName + tempModuleName,
				// 创建临时Lua Module
				templatesandboxtext: `return {
	main = function()
		xpcall(
			function()
				${wikitext}
			end,
			function()
			end
		)
		local moduleWikitext = package.loaded["Module:Module wikitext"]
		if moduleWikitext then
			local wikitext = moduleWikitext.main()
			if mw.text.trim(wikitext) ~= "" then
				return mw.getCurrentFrame():preprocess(moduleWikitext.main())
			end
		end
		return ""
	end
}`,
				templatesandboxcontentmodel: 'Scribunto',
				templatesandboxcontentformat: 'text/plain',
				text: `{{${moduleCall.wikitext}${tempModuleName}|main}}`,
				prop: 'text',
				uselang: getLanguage(),
				useskin: skin,
			};
			if (isPreview) {
				params.preview = true;
				params.disableeditsection = true;
			}

			const data = await api.post(params);
			if (!data?.['parse']?.text) {
				return;
			}

			const parsedWikitext: string = (data['parse'].text as string).trim();

			if (!parsedWikitext) {
				removeLoadingNotice();
				// 若在这个临时模块中出错则取消
			} else if ($(parsedWikitext).find('.scribunto-error').text().search(tempModuleName)) {
				removeLoadingNotice();
			} else if (typeof callBack === 'function') {
				callBack(parsedWikitext);
			} else {
				addParsedWikitext(parsedWikitext);
			}
		} catch {
			loadingFailNotice();
		}
	} else {
		removeLoadingNotice();
	}
};

export {mwAddLuaText, mwAddWikiText};
