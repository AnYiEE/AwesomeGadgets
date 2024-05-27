import {addLoadingNotice, noticeLoadingElement, removeLoadingNotice} from '../notice';
import {luaGetCSSwikitext, luaGetJSONwikitext} from '../lua/luaGetText';
import {mwAddLuaText, mwAddWikiText} from './mwAddText';
import {mwApplyNotice, mwApplyRevision} from './mwApply';
import {checkElementExist} from '../util/checkElementExist';
import {checkMwConfig} from '../util/checkMwConfig';
import {checkNeedPreview} from '../util/checkNeedPreview';
import {luaCheck} from '../lua/luaCheck';

const {wgCanonicalNamespace, wgCanonicalSpecialPageName, wgPageName} = mw.config.get();

// 给页面添加预览
const mwAddPreview = ($body: JQuery<HTMLBodyElement>): void => {
	// 预览模式只适用于以下页面内容模型
	if (checkMwConfig('wgPageContentModel', ['javascript', 'js', 'json', 'text', 'css', 'sanitized-css'])) {
		// 模式1：页面预览
		if (checkElementExist('.previewnote')) {
			// 检查是否为预览模式
			// 预览有可能是在预览其他条目
			const pathPath: string = decodeURI(mw.util.getUrl(wgPageName)).replace(
				new RegExp(`^\\/?${mw.util.getUrl('').match(/[a-z]+/)?.[0] ?? ''}\\/`),
				''
			);

			// 若预览的页面并非本身，则不显示预览
			if (pathPath !== wgPageName) {
				return;
			}

			const wikitext: string = luaCheck();
			if (wikitext) {
				// 若解析结果非空才放置预览
				addLoadingNotice(); // 放置提示，提示使用者等待AJAX
				void mwAddWikiText(wikitext, wgPageName, true); // 若取得 _addText 则显示预览
			}
		} else if (!checkElementExist('.mw-_addText-content') && checkMwConfig('wgAction', 'view')) {
			// 模式2：不支持显示的特殊页面
			// 经查，不止是模板样式，所有未嵌入'#mw-clearyourcache'的页面皆无法正常显示
			if (!checkNeedPreview()) {
				return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
			}

			// 若已有#mw-clearyourcache则先清掉，否则会出现两个MediaWiki:Clearyourcache
			$body.find('#mw-clearyourcache').html('');

			if (!checkElementExist('textarea[name=wpTextbox1]')) {
				// 非编辑模式才执行 (预览使用上方的if区块)
				addLoadingNotice(); // 放置提示，提示使用者等待AJAX
				void mwApplyRevision(wgPageName); // 为了让历史版本正常显示，使用wgRevisionId取得内容
			}
		} else if (checkElementExist('#mw-revision-info') && checkMwConfig('wgAction', 'view')) {
			// 模式3：页面历史版本检视：如需复查的项目为页面历史版本，本工具提供页面历史版本内容显示支持
			// 有嵌入'#mw-clearyourcache'的页面的历史版本会只能显示最新版的 _addText 因此执行修正
			if (!checkElementExist('textarea[name=wpTextbox1]')) {
				// 非编辑模式才执行 (预览使用上方的if区块)
				$body.find('#mw-clearyourcache').html(noticeLoadingElement); // 差异模式（含检阅修订版本删除）的插入点不同
				void mwApplyRevision(wgPageName); // 为了让特定版本正常显示，使用wgRevisionId取得内容
			}
		} else {
			removeLoadingNotice();
		}
	} else if (checkMwConfig('wgPageContentModel', ['scribunto', 'lua'])) {
		// 模块预览功能
		if (!checkNeedPreview()) {
			return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
		}

		if (
			checkElementExist('textarea[name=wpTextbox1]') &&
			checkElementExist('table.diff') &&
			!checkElementExist('.previewnote') &&
			!checkMwConfig('wgAction', 'view')
		) {
			$(noticeLoadingElement).insertAfter('#wikiDiff');
			void mwAddLuaText(
				($body.find('textarea[name=wpTextbox1]').val() as string | undefined) ?? '',
				wgPageName,
				true
			);
		}
	} else if (checkElementExist('.mw-undelete-revision')) {
		// 模式4：已删页面预览
		// 已删内容页面是特殊页面，无法用常规方式判断页面内容模型
		if (!checkNeedPreview()) {
			return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
		}

		if (checkElementExist(['.mw-highlight', 'pre', '.mw-json'])) {
			// 确认正在预览已删内容
			const textareaContent: string = $body.find('textarea').val() ?? ''; // 尝试取得已删内容源代码

			let wikitext: string = luaGetJSONwikitext(textareaContent);
			if (!wikitext) {
				wikitext = luaGetCSSwikitext(textareaContent);
			}

			if (wikitext) {
				// 若取得 _addText 则显示预览
				addLoadingNotice();
				void mwAddWikiText(wikitext, mw.config.get('wgRelevantPageName'), true);
			} else if (/module[ _]wikitext.*_addtext/i.test($body.find('.mw-parser-output').text())) {
				// 尝试Lua解析
				// 本功能目前测试正常运作
				// 若哪天预览又失效，请取消注释下方那行
				// mwAddLuaText(textareaContent, mw.config.get("wgRelevantPageName"), true);
			}
		}
	} else if (!checkElementExist('.mw-editnotice') && checkMwConfig('wgCanonicalNamespace', 'special')) {
		// 若特殊页面缺乏编辑提示，则补上编辑提示 (若存在)
		const pageSubName: string = wgPageName.replace(/special:[^/]+/i, '');
		if (wgCanonicalSpecialPageName) {
			const fullPageName: string = `${wgCanonicalNamespace}:${wgCanonicalSpecialPageName}`;
			void mwApplyNotice(fullPageName, pageSubName);
		}
	} else {
		removeLoadingNotice(); // 都不是的情况则不显示预览
	}
};

export {mwAddPreview};
