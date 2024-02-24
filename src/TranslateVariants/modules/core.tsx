import React from 'ext.gadget.React';
import {TRANSLATE_VARIANTS_SUMMARY} from './constant';
import {initMwApi} from 'ext.gadget.Util';

export const translateVariants = (): void => {
	const langs: Set<string> = new Set([
		'zh',
		'zh-hans',
		'zh-cn',
		'zh-my',
		'zh-sg',
		'zh-hant',
		'zh-hk',
		'zh-mo',
		'zh-tw',
	]);
	const langname: Record<string, string> = {
		zh: '原始',
		'zh-hans': '简体',
		'zh-cn': '中国大陆简体',
		'zh-my': '马来西亚简体',
		'zh-sg': '新加坡简体',
		'zh-hant': '繁體',
		'zh-hk': '中國香港繁體',
		'zh-mo': '中國澳門繁體',
		'zh-tw': '中國臺灣繁體',
	};
	const result: Record<string, string> = {};
	const api: mw.Api = initMwApi('TranslateVariants/1.1');
	let basepagetext: string = '';
	const $table: JQuery = ($(<div id="TranslateVariants" />) as JQuery).prependTo('#bodyContent');
	const $submitAll: JQuery = $(
		<button className={['mw-ui-button', 'mw-ui-progressive', 'cdx-button', 'cdx-button--action-progressive']}>
			{window.wgULS('发布所有更改', '發佈所有變更')}
		</button>
	) as JQuery;
	$submitAll.on('click', (): void => {
		const $body: JQuery<HTMLBodyElement> = $('body');
		const $buttons: JQuery = $body.find('.TranslateVariants-publish-changes');
		if ($buttons.length === 0) {
			void mw.notify(window.wgULS('没有任何可以发布的更改', '沒有任何變更可發佈'), {
				tag: 'TranslateVariants',
				type: 'error',
			});
			return;
		}
		if (!confirm(`${window.wgULS('更改', '發佈')}${$buttons.length}${window.wgULS('个更改', '個變更')}？`)) {
			void mw.notify(window.wgULS('已取消更改', '已取消發佈'), {tag: 'TranslateVariants', type: 'warn'});
			return;
		}
		$buttons.each((_index, element) => {
			$(element).trigger('click');
		});
	});
	$table.append(
		$(
			<div
				style={{
					textAlign: 'right',
				}}
			/>
		).append($submitAll)
	);
	$(
		<div
			style={{
				color: '#f00',
			}}
		>
			{window.wgULS(
				'提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！',
				'提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！'
			)}
		</div>
	).appendTo($table);
	const defaultlangs: string = 'zh,zh-hans,zh-cn,zh-my,zh-sg,zh-hant,zh-hk,zh-mo,zh-tw';
	let runlangs: string | null = prompt(
		window.wgULS('转换以下语言（以逗号隔开）：', '轉換以下語言（以逗號隔開）：'),
		defaultlangs
	);
	if (runlangs === null) {
		runlangs = defaultlangs;
	}
	const langqueue: string[] = runlangs
		.split(',')
		.map((lang: string): string => lang.trim())
		.filter((lang: string): boolean => langs.has(lang));
	const process = (): void => {
		if (langqueue.length === 0) {
			return;
		}
		const lang: string | undefined = langqueue.shift();
		const $diffTable: JQuery = ($(<div id={`TranslateVariants-diff-${lang}`} />) as JQuery).appendTo($table);
		$(<hr />).appendTo($table);
		const basename: string = mw.config.get('wgPageName').replace(/\/zh$/, '');
		const targetTitle: string = lang === 'zh' ? basename : `${basename}/${lang}`;
		let newtext: string;
		if (!lang) {
			return;
		}
		void api
			.parse(`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TVcontent">${basepagetext}</div>`, {
				uselang: lang,
				prop: 'text',
			})
			.then(
				(data) => {
					newtext = $('<div>').html(data).find('#TVcontent').text();
					const _params: ApiQueryRevisionsParams = {
						action: 'query',
						prop: 'revisions',
						titles: [targetTitle],
						rvdifftotext: newtext,
						formatversion: '2',
					};
					return api.post(_params);
				},
				(error) => {
					void mw.notify(`解析${lang}${window.wgULS('时发生错误：', '時發生錯誤：')}${error}`, {
						type: 'error',
						tag: 'TranslateVariant',
					});
					return null;
				}
			)
			.then(
				(data) => {
					if (data !== null) {
						const $tool: JQuery = $(
							`<div><a href="${mw.util.getUrl(targetTitle)}">${lang}（${
								langname[lang as never]
							}）</a>（<a href="${mw.util.getUrl(targetTitle, {
								action: 'edit',
							})}">${window.wgULS('编', '編')}</a>）</div>`
						).appendTo($diffTable);
						const [page] = data['query'].pages;
						if (page.missing) {
							const $submit: JQuery = $(
								(
									<button
										className={['TranslateVariants-publish-changes', 'mw-ui-button', 'cdx-button']}
										style={{
											float: 'right',
										}}
									>
										{window.wgULS('发布页面', '發佈頁面')}
									</button>
								) as HTMLElement
							).appendTo($tool);
							$submit.on('click', function () {
								this.remove();
								api.create(
									targetTitle,
									{
										summary: TRANSLATE_VARIANTS_SUMMARY.replace(
											/\$1/g,
											mw.config.get('wgPageName')
										),
									},
									newtext
								).then(
									(): void => {
										void mw.notify(window.wgULS('已编辑 ', '已編輯 ') + targetTitle, {
											type: 'success',
											tag: 'TranslateVariant',
										});
									},
									(error): void => {
										void mw.notify(
											window.wgULS('编辑', '編輯 ') +
												targetTitle +
												window.wgULS(' 发生错误：', ' 發生錯誤：') +
												error,
											{
												type: 'error',
												tag: 'TranslateVariant',
											}
										);
									}
								);
							});
							$('<pre>')
								.html(newtext.replace(/[&<>]/gim, (s: string): string => `&#${s.codePointAt(0)};`))
								.appendTo($diffTable);
							return;
						}
						const diff: string = page.revisions[0].diff.body;
						if (diff === '') {
							$(
								<span
									style={{
										float: 'right',
									}}
								>
									{window.wgULS('无更改', '無變更')}
								</span>
							).appendTo($tool);
						} else {
							const $submit: JQuery = $(
								(
									<button
										className={['TranslateVariants-publish-changes', 'mw-ui-button', 'cdx-button']}
										style={{
											float: 'right',
										}}
									>
										{window.wgULS('发布更改', '發佈變更')}
									</button>
								) as HTMLElement
							).appendTo($tool);
							$submit.on('click', function () {
								this.remove();
								api.edit(
									targetTitle,
									(): ApiEditPageParams => ({
										text: newtext,
										summary: TRANSLATE_VARIANTS_SUMMARY.replace(
											/\$1/g,
											mw.config.get('wgPageName')
										),
										nocreate: false,
									})
								).then(
									(): void => {
										void mw.notify(window.wgULS('已编辑', '已編輯 ') + targetTitle, {
											type: 'success',
											tag: 'TranslateVariant',
										});
									},
									(error) => {
										void mw.notify(
											window.wgULS('编辑', '編輯 ') +
												targetTitle +
												window.wgULS(' 发生错误：', ' 發生錯誤：') +
												error,
											{
												type: 'error',
												tag: 'TranslateVariant',
											}
										);
									}
								);
							});
							$('<table>')
								.addClass('diff')
								.html(diff)
								.prepend(
									<colgroup>
										<col className="diff-marker" />
										<col className="diff-content" />
										<col className="diff-marker" />
										<col className="diff-content" />
									</colgroup>
								)
								.appendTo($diffTable);
						}
					}
				},
				(error): void => {
					void mw.notify(
						window.wgULS('获取', '取得') +
							lang +
							window.wgULS('差异时发生错误：', '差異時發生錯誤：') +
							error,
						{
							type: 'error',
							tag: 'TranslateVariant',
						}
					);
				}
			)
			.always((): void => {
				process();
			});
	};
	const params: ApiQueryRevisionsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		titles: [mw.config.get('wgPageName')],
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
	};
	void api
		.get(params)
		.then((data) => {
			if (!data['query'] || !data['query'].pages) {
				return $.Deferred().reject('unknown');
			}
			const [page] = data['query'].pages;
			if (!page || page.invalid) {
				return $.Deferred().reject('invalidtitle');
			}
			if (page.missing) {
				return $.Deferred().reject('nocreate-missing');
			}
			const [revision] = page.revisions;
			return {
				content: revision.content,
			};
		})
		.then(({content}): void => {
			let text: string = content;
			result['zh'] = text;
			text = text.replace(/[\s#&'*:<>[\]_{|}]/gim, (string: string) => `&#${string.codePointAt(0)};`);
			text = text.replace(
				/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g,
				'$1-{$2}-$3'
			);
			text = text.replace(/-&#123;(.+?)&#125;-/g, (string: string) => {
				string = string
					.replace('-&#123;', '-{')
					.replace('-&#123;', '-{')
					.replace('&#125;-', '}-')
					.replace(/&#124;/g, '|')
					.replace(/&#32;/g, ' ')
					.replace(/&#61;/g, '=')
					.replace(/&#62;/g, '>')
					.replace(/&#58;/g, ':');
				return string;
			});
			basepagetext = text;
			process();
		});
};
