import * as OPTIONS from '../options.json';
import React from 'ext.gadget.React';
import {api} from './api';

type Langs = 'zh' | 'zh-hans' | 'zh-cn' | 'zh-my' | 'zh-sg' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-tw';
const langs: Set<Langs> = new Set(['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']);
const nameOfLangs = {
	zh: '原始',
	'zh-hans': '简体',
	'zh-cn': '中国大陆简体',
	'zh-my': '马来西亚简体',
	'zh-sg': '新加坡简体',
	'zh-hant': '繁體',
	'zh-hk': '中國香港繁體',
	'zh-mo': '中國澳門繁體',
	'zh-tw': '中國臺灣繁體',
} as const satisfies Record<Langs, string>;

const translateVariants = (wgPageName: string): void => {
	const summary: string = OPTIONS.translateVariantsSummary.replace(/\$1/g, wgPageName);

	const $wrapper: JQuery = ($(<div id="TranslateVariants" />) as JQuery).prependTo('#bodyContent');

	const $submitAll: JQuery = $(
		<button className={['mw-ui-button', 'mw-ui-progressive', 'cdx-button', 'cdx-button--action-progressive']}>
			{window.wgULS('发布所有更改', '發佈所有變更')}
		</button>
	) as JQuery;
	$submitAll.on('click', (): void => {
		const $buttons: JQuery = $wrapper.find('.TranslateVariants-publish-changes');
		if (!$buttons.length) {
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

		for (const button of $buttons) {
			$(button).trigger('click');
		}
	});

	$wrapper.append(
		$(<div style={{textAlign: 'right'}} />).append($submitAll),
		<div style={{color: '#f00'}}>
			{window.wgULS(
				'提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！',
				'提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！'
			)}
		</div>
	);

	const defaultLangs: Langs[] = [...langs];

	let runLangs = prompt(
		window.wgULS('转换以下语言（以逗号隔开）：', '轉換以下語言（以逗號隔開）：'),
		defaultLangs.join(',')
	)?.split(',') as Langs[] | null;
	if (runLangs === null) {
		runLangs = defaultLangs;
	}

	const langQueue: Langs[] = runLangs
		.map((lang: Langs): Langs => lang.trim() as Langs)
		.filter((lang: Langs): boolean => langs.has(lang));

	const process = (pageContent: string): void => {
		if (!langQueue.length) {
			return;
		}

		const lang = langQueue.shift() as Langs;

		const $diffTable: JQuery = $(<div id={`TranslateVariants-diff-${lang}`} />) as JQuery;
		$wrapper.append($diffTable, <hr />);

		const basePageName: string = wgPageName.replace(/\/zh$/, '');
		const targetTitle: string = lang === 'zh' ? basePageName : `${basePageName}/${lang}`;

		let newPageContent: string = '';
		void api
			.parse(`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TranslateVariants-content">${pageContent}</div>`, {
				prop: 'text',
				uselang: lang,
			})
			.then(
				(content: string) => {
					newPageContent = $(<div innerHTML={content} />)
						.find('#TranslateVariants-content')
						.text();

					const _params: ApiQueryRevisionsParams = {
						action: 'query',
						format: 'json',
						formatversion: '2',
						titles: targetTitle,
						prop: 'revisions',
						rvdifftotext: newPageContent,
					};

					return api.post(_params);
				},
				(error): null => {
					void mw.notify(`解析${lang}${window.wgULS('时发生错误：', '時發生錯誤：')}${error}`, {
						tag: 'TranslateVariant',
						type: 'error',
					});

					return null;
				}
			)
			.then(
				(data) => {
					if (data === null) {
						return;
					}

					const $tool = $(
						<div>
							<a href={mw.util.getUrl(targetTitle)}>
								{lang}（{nameOfLangs[lang]}）
							</a>
							（<a href={mw.util.getUrl(targetTitle, {action: 'edit'})}>{window.wgULS('编', '編')}</a>）
						</div>
					) as JQuery;

					$diffTable.append($tool);

					const [page] = data['query'].pages;
					if (page.missing) {
						const $submit = $(
							<button
								className={['TranslateVariants-publish-changes', 'mw-ui-button', 'cdx-button']}
								style={{float: 'right'}}
							>
								{window.wgULS('发布页面', '發佈頁面')}
							</button>
						) as JQuery;
						$submit.on('click', (): void => {
							$submit.remove();

							api.create(
								targetTitle,
								{
									summary,
								},
								newPageContent
							).then(
								(): void => {
									void mw.notify(window.wgULS('已编辑 ', '已編輯 ') + targetTitle, {
										tag: 'TranslateVariant',
										type: 'success',
									});
								},
								(error): void => {
									void mw.notify(
										window.wgULS('编辑', '編輯 ') +
											targetTitle +
											window.wgULS(' 发生错误：', ' 發生錯誤：') +
											error,
										{
											tag: 'TranslateVariant',
											type: 'error',
										}
									);
								}
							);
						});

						$tool.append($submit);
						$diffTable.append(
							<pre
								innerHTML={newPageContent.replace(
									/[&<>]/gim,
									(string: string): string => `&#${string.codePointAt(0)};`
								)}
							/>
						);

						return;
					}

					const diff: string = page.revisions[0].diff.body;
					if (diff === '') {
						$tool.append(<span style={{float: 'right'}}>{window.wgULS('无更改', '無變更')}</span>);
					} else {
						const $submit = $(
							<button
								className={['TranslateVariants-publish-changes', 'mw-ui-button', 'cdx-button']}
								style={{float: 'right'}}
							>
								{window.wgULS('发布更改', '發佈變更')}
							</button>
						) as JQuery;
						$submit.on('click', (): void => {
							$submit.remove();

							api.edit(
								targetTitle,
								(): ApiEditPageParams => ({
									summary,
									text: newPageContent,
									nocreate: false,
								})
							).then(
								(): void => {
									void mw.notify(window.wgULS('已编辑', '已編輯 ') + targetTitle, {
										tag: 'TranslateVariant',
										type: 'success',
									});
								},
								(error) => {
									void mw.notify(
										window.wgULS('编辑', '編輯 ') +
											targetTitle +
											window.wgULS(' 发生错误：', ' 發生錯誤：') +
											error,
										{
											tag: 'TranslateVariant',
											type: 'error',
										}
									);
								}
							);
						});

						$tool.append($submit);
						$diffTable.append(
							$(<table className="diff" innerHTML={diff} />).prepend(
								<colgroup>
									<col className="diff-marker" />
									<col className="diff-content" />
									<col className="diff-marker" />
									<col className="diff-content" />
								</colgroup>
							)
						);
					}
				},
				(error): void => {
					void mw.notify(
						window.wgULS('获取', '取得') +
							lang +
							window.wgULS('差异时发生错误：', '差異時發生錯誤：') +
							error,
						{
							tag: 'TranslateVariant',
							type: 'error',
						}
					);
				}
			)
			.always((): void => {
				process(pageContent);
			});
	};

	const params: ApiQueryRevisionsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		titles: wgPageName,
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
	};

	void api
		.get(params)
		.then((data) => {
			if (!data['query']?.pages) {
				return $.Deferred().reject('unknown');
			}

			const [page] = data['query'].pages;

			if (page.invalid) {
				return $.Deferred().reject('invalidtitle');
			}
			if (page.missing) {
				return $.Deferred().reject('nocreate-missing');
			}

			const [{content}] = page.revisions;

			return content as string;
		})
		.then((content: string): string => {
			let pageContent: string = content;

			pageContent = pageContent.replace(
				/[\s#&'*:<>[\]_{|}]/gim,
				(string: string): string => `&#${string.codePointAt(0)};`
			);
			pageContent = pageContent.replace(
				/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g,
				'$1-{$2}-$3'
			);
			pageContent = pageContent.replace(/-&#123;(.+?)&#125;-/g, (string: string): string =>
				string
					.replace('-&#123;', '-{')
					.replace('-&#123;', '-{')
					.replace('&#125;-', '}-')
					.replace(/&#124;/g, '|')
					.replace(/&#32;/g, ' ')
					.replace(/&#61;/g, '=')
					.replace(/&#62;/g, '>')
					.replace(/&#58;/g, ':')
			);

			return pageContent;
		})
		.then((pageContent: string): void => {
			process(pageContent);
		});
};

export {translateVariants};
