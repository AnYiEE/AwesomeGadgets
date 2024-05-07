import {addParsedWikitext} from '../util/addParsedWikitext';
import {api} from '../api';
import {checkElementExist} from '../util/checkElementExist';
import {getLanguage} from '../util/getLanguage';
import {luaCheck} from '../lua/luaCheck';
import {mwAddWikiText} from './mwAddText';
import {removeLoadingNotice} from '../notice';

const {skin, wgRevisionId} = mw.config.get();

// 加入编辑提示（若存在）
const mwApplyNotice = async (currentPageName: string, pageSubName: string): Promise<void> => {
	try {
		const params: ApiParseParams = {
			action: 'parse',
			format: 'json',
			formatversion: '2',
			// get the original wikitext content of a page
			title: currentPageName + pageSubName,
			text: `{{#invoke:Special wikitext/Template|getNotices|${currentPageName}|${pageSubName}}}`,
			prop: 'text',
			uselang: getLanguage(),
			useskin: skin,
		};

		const data = await api.post(params);
		if (!data?.['parse']?.text) {
			return;
		}

		const html = data['parse'].text as string;
		if ($(html).text().trim()) {
			addParsedWikitext(html);
		}
	} catch {}
};

// 从页面当前历史版本取出 <{OPTIONS.wikiTextKey}>
const mwApplyRevision = async (currentPageName: string): Promise<void> => {
	try {
		const params: ApiParseParams = {
			action: 'parse',
			format: 'json',
			formatversion: '2',
			// get the original wikitext content of a page
			oldid: wgRevisionId,
			prop: 'wikitext',
		};

		const data = await api.get(params);
		if (!data?.['parse']?.wikitext) {
			return;
		}

		let pageContent: string = luaCheck((data['parse'].wikitext as string).trim());
		pageContent =
			(checkElementExist('#mw-clearyourcache')
				? '{{#invoke:Special wikitext/Template|int|clearyourcache}}'
				: '') + pageContent;

		if (pageContent.trim()) {
			void mwAddWikiText(pageContent, currentPageName, true);
		} else {
			removeLoadingNotice();
		}
	} catch {
		removeLoadingNotice();
	}
};

export {mwApplyNotice, mwApplyRevision};
