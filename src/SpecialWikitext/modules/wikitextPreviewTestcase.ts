import {api} from './api';
import {checkNeedPreview} from './util/checkNeedPreview';
import {luaCheck} from './lua/luaCheck';
import {mwAddLuaText} from './mw/mwAddText';
import {noticeLoadingElement} from './notice';

const {wgPageName} = mw.config.get();

// 本脚本的Testcase
const wikitextPreviewTestcase = async (isPreview: boolean): Promise<void> => {
	// 没有可预览元素，退出。
	if (!checkNeedPreview()) {
		return;
	}

	const testcaseList: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(
		'.special-wikitext-preview-testcase'
	);
	// 若页面中没有Testcase，退出。
	if (!testcaseList.length) {
		return;
	}

	// 收集位于页面中的Testcase预览元素
	const testcaseDataList: {
		element: HTMLElement;
		lang: string;
		code: string;
	}[] = [];

	let i: number = 0;
	for (i = 0; i < testcaseList.length; ++i) {
		const element: HTMLElement | undefined = testcaseList[i];
		if (!element) {
			continue;
		}

		const codeElement: HTMLElement | null = element.querySelector<HTMLElement>('.mw-highlight');
		if (!codeElement) {
			continue;
		}

		const {className} = codeElement;
		if (!className) {
			continue;
		}

		const [, codeId] = /mw-highlight-lang-(\S+)/.exec(className) ?? [];
		const {length} = testcaseDataList;

		element.setAttribute('preview-id', length.toString());
		testcaseDataList[length] = {
			element,
			lang: codeId?.toLowerCase() ?? '',
			code: codeElement.textContent?.trim() ?? '',
		}; // Replace `testcaseDataList.push()` to avoid polyfilling core-js
	}

	// 整理页面中的Testcase预览元素，并放置“[载入中]”消息
	let packageWikitext: string = '';
	for (const testcaseItem of Object.values(testcaseDataList)) {
		const {code, element, lang} = testcaseItem;

		if (!code) {
			continue;
		}

		const $element: JQuery = $(element);

		if (['javascript', 'js', 'css', 'json', 'text'].includes(testcaseItem.lang)) {
			const wikitext: string = luaCheck(code, lang);
			if (wikitext) {
				// 若解析结果非空才放置预览
				$element.prepend(noticeLoadingElement);
				packageWikitext += `<div class="special-wikitext-preview-testcase-${i}">\n${wikitext}\n</div>`;
			}
		} else if (['lua', 'scribunto'].includes(lang)) {
			void mwAddLuaText(
				code,
				wgPageName,
				isPreview,
				(() => {
					return (wikitext: string): void => {
						$element.prepend(wikitext);
					};
				})()
			);
		}
	}

	// 将整理完的Testcase预览元素统一发送API请求，并将返回结果分发到各Testcase
	if (packageWikitext) {
		packageWikitext = `<div class="special-wikitext-preview-testcase-undefined">${packageWikitext}</div>`;
		try {
			const params: ApiParseParams = {
				action: 'parse',
				format: 'json',
				formatversion: '2',
				text: packageWikitext,
				contentmodel: 'wikitext',
				prop: 'text',
			};
			if (isPreview) {
				params.disableeditsection = true;
				params.preview = true;
			}

			const data = await api.post(params);
			if (!data?.['parse']?.text) {
				return;
			}

			const parsedWikitext: string = (data['parse'].text as string).trim();
			if (parsedWikitext) {
				const $parsedElement: JQuery = $(parsedWikitext);
				for (const [key, testcaseItem] of Object.entries(testcaseDataList)) {
					const {element, lang} = testcaseItem;

					if (!['javascript', 'js', 'text', 'css', 'json'].includes(lang)) {
						continue;
					}

					const $element: JQuery<HTMLElement> = $parsedElement.find(
						`.special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-${key}`
					);
					if (!$element.length) {
						continue;
					}

					const $addTarget: JQuery = $(element).find('#specialwikitext-preview-loading');
					$addTarget.html($element.html());
					mw.hook('wikipage.content').fire($addTarget);
				}
			}
		} catch {}
	}
};

export {wikitextPreviewTestcase};
