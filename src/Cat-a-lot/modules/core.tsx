/* eslint-disable mediawiki/class-doc */
import * as OPTIONS from '../options.json';
import {
	CLASS_NAME,
	CLASS_NAME_CONTAINER,
	CLASS_NAME_CONTAINER_DATA,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND,
	CLASS_NAME_CONTAINER_DATA_MARK_COUNTER,
	CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
	CLASS_NAME_CONTAINER_DATA_SELECTIONS,
	CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL,
	CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE,
	CLASS_NAME_CONTAINER_HEAD,
	CLASS_NAME_CONTAINER_HEAD_LINK,
	CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED,
	CLASS_NAME_CURRENT_COUNTER,
	CLASS_NAME_FEEDBACK,
	CLASS_NAME_FEEDBACK_DONE,
	CLASS_NAME_LABEL,
	CLASS_NAME_LABEL_DONE,
	CLASS_NAME_LABEL_SELECTED,
	DEFAULT_SETTING,
	VARIANTS,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_TITLE,
} from './constant';
import {DEFAULT_MESSAGES, setMessages} from './messages';
import type {MessageKey, Setting} from './types';
import {getBody, initMwApi} from 'ext.gadget.Util';
import React from 'ext.gadget.React';

/**
 * Changes category of multiple files
 */
const catALot = (): void => {
	/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
	class CAL {
		public static isSearchMode = false;

		private static readonly MESSAGES: Record<MessageKey, string> = DEFAULT_MESSAGES;
		private static readonly DEFAULT_SETTING: Setting = DEFAULT_SETTING;
		private static readonly VERSION: string = OPTIONS.version;

		private static readonly API_TAG: string = OPTIONS.apiTag;
		private static readonly TARGET_NAMESPACE: number = OPTIONS.targetNamespace;

		private static readonly CURRENT_CATEGROY: string = WG_TITLE;

		private static readonly WG_FORMATTED_NAMESPACES: Record<number, string> = WG_FORMATTED_NAMESPACES;
		private static readonly WG_NAMESPACE_IDS: Record<string, number> = WG_NAMESPACE_IDS;

		private static isAutoCompleteInit = false;

		private static api = initMwApi(`Cat-a-lot/${CAL.VERSION}`);

		private static alreadyThere: string[] = [];
		private static connectionError: string[] = [];
		private static notFound: string[] = [];
		private static counterCurrent = 0;
		private static counterNeeded = 0;

		private static counterCat = 0;
		private static currentCategory = '';

		private static dialogHeight = 450;
		private static editToken = '';
		private static localCatName = WG_FORMATTED_NAMESPACES[CAL.TARGET_NAMESPACE] as string;

		private static parentCats: string[] = [];
		private static subCats: string[] = [];

		private static settings: NonNullable<typeof window.CatALotPrefs> = {};
		private static variantCache: Record<string, string[]> = {};

		private static $counter: JQuery = $();
		private static $progressDialog: JQuery = $();
		private static $labels: JQuery = $();
		private static $selectedLabels: JQuery = $();

		private readonly $body: JQuery<HTMLBodyElement>;
		private readonly $container: JQuery;
		private readonly $dataContainer: JQuery;
		private readonly $markCounter: JQuery;
		private readonly $resultList: JQuery;
		private readonly $searchInput: JQuery<HTMLInputElement>;
		private readonly $head: JQuery;
		private readonly $link: JQuery<HTMLAnchorElement>;

		public constructor($body: JQuery<HTMLBodyElement>) {
			if (!mw.msg('cat-a-lot-loading')) {
				mw.messages.set(CAL.MESSAGES);
			}

			this.$body = $body;
			CAL.initSettings();

			const container = (
				<div className={[CLASS_NAME, CLASS_NAME_CONTAINER, 'noprint']}>
					<div className={CLASS_NAME_CONTAINER_DATA}>
						<div className={CLASS_NAME_CONTAINER_DATA_MARK_COUNTER} />
						<div className={CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST} />
						<div>
							<input
								className={CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT}
								placeholder={CAL.msg('enter-name')}
								type="text"
								value={CAL.isSearchMode ? mw.util.getParamValue('search') ?? '' : ''}
								onKeyDown={(event): void => {
									const $element = $(event.currentTarget) as JQuery<HTMLInputElement>;
									if (event.key === 'Enter') {
										const cat: string = $element.val()?.trim() ?? '';
										if (cat) {
											this.updateCats(cat);
										}
									}
								}}
							/>
						</div>
						<div className={CLASS_NAME_CONTAINER_DATA_SELECTIONS}>
							{[CAL.msg('select'), ' ']}
							<a
								className={CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL}
								onClick={() => {
									this.toggleAll(true);
								}}
							>
								{CAL.msg('all')}
							</a>
							{' • '}
							<a
								className={CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE}
								onClick={() => {
									this.toggleAll(false);
								}}
							>
								{CAL.msg('none')}
							</a>
						</div>
					</div>
					<div className={CLASS_NAME_CONTAINER_HEAD}>
						<a className={CLASS_NAME_CONTAINER_HEAD_LINK}>{'Cat-a-lot'}</a>
					</div>
				</div>
			);

			this.$container = $(container) as JQuery;
			this.$container.appendTo(this.$body);

			this.$dataContainer = this.$container.find(`.${CLASS_NAME_CONTAINER_DATA}`);
			this.$markCounter = this.$dataContainer.find(`.${CLASS_NAME_CONTAINER_DATA_MARK_COUNTER}`);
			this.$resultList = this.$dataContainer.find(`.${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}`);
			this.$searchInput = this.$dataContainer.find<HTMLInputElement>(
				`.${CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT}`
			);

			this.$head = this.$container.find(`.${CLASS_NAME_CONTAINER_HEAD}`);
			this.$link = this.$head.find<HTMLAnchorElement>(`.${CLASS_NAME_CONTAINER_HEAD_LINK}`);
		}

		public buildElements(): void {
			const regexCat: RegExp = new RegExp(`^\\s*${CAL.localizedRegex(CAL.TARGET_NAMESPACE, 'Category')}:`, '');

			this.$searchInput.on('input keyup', (event: JQuery.TriggeredEvent | JQuery.KeyUpEvent): void => {
				const currentTarget = event.currentTarget as HTMLInputElement;
				const oldVal: string = currentTarget.value;
				const newVal: string = oldVal.replace(regexCat, '');
				if (newVal !== oldVal) {
					currentTarget.value = newVal;
				}
			});

			const initAutocomplete = (): void => {
				if (CAL.isAutoCompleteInit) {
					return;
				}
				CAL.isAutoCompleteInit = true;

				this.$searchInput.autocomplete({
					source: (request: {term: unknown}, response: (arg: JQuery<string>) => void): void => {
						this.doAPICall(
							{
								action: 'opensearch',
								namespace: CAL.TARGET_NAMESPACE,
								redirects: 'resolve',
								search: request.term,
							},
							(result): void => {
								if (result[1]) {
									response(
										$(result[1]).map((_index: number, item: string): string =>
											item.replace(regexCat, '')
										)
									);
								}
							}
						);
					},
					position: {
						my: 'right bottom',
						at: 'right top',
						of: this.$searchInput,
					},
					appendTo: `.${CLASS_NAME_CONTAINER}`,
				});
			};
			this.$link.on('click', (event: JQuery.ClickEvent): void => {
				$(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
				initAutocomplete();
				this.run();
			});
		}

		private static initSettings(): void {
			let catALotPrefs: typeof CAL.settings = window.CatALotPrefs ?? {};
			const typeOfCatALotPrefs = typeof catALotPrefs;
			if ((typeOfCatALotPrefs === 'object' && !Array.isArray(catALotPrefs)) || typeOfCatALotPrefs !== 'object') {
				catALotPrefs = {};
			}

			for (const settingKey of Object.keys(CAL.DEFAULT_SETTING) as (keyof Setting)[]) {
				const setting = CAL.DEFAULT_SETTING[settingKey];

				CAL.settings[settingKey] = catALotPrefs[settingKey] ?? setting.default;

				if (!setting.select_i18n) {
					continue;
				}

				setting.select = {};
				for (const messageKey of Object.keys(setting.select_i18n)) {
					const message: string = setting.select_i18n[messageKey] as keyof typeof setting.select_i18n;
					// Messages that can be used here:
					// * see messages.ts
					// * for more information
					setting.select[CAL.msg(messageKey as never)] = message;
				}
			}
		}

		private static msg(key: MessageKey extends `cat-a-lot-${infer P}` ? P : never, ...args: string[]): string {
			const fullKey: string = `cat-a-lot-${key}`;
			// Messages that can be used here:
			// * see messages.ts
			// * for more information
			return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
		}
		private static localizedRegex(namespaceNumber: number, fallback: string): string {
			// Copied from HotCat, thanks Lupo.
			const wikiTextBlank: string =
				'[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+';
			const wikiTextBlankRE: RegExp = new RegExp(wikiTextBlank, 'g');
			const createRegexStr = (name: string | undefined): string => {
				if (!name?.length) {
					return '';
				}
				let regexName: string = '';
				for (let i: number = 0; i < name.length; i++) {
					const initial: string = name.slice(i, i + 1);
					const ll: string = initial.toLowerCase();
					const ul: string = initial.toUpperCase();
					regexName += ll === ul ? initial : `[${ll}${ul}]`;
				}
				return regexName.replace(/([$()*+.?\\^])/g, '\\$1').replace(wikiTextBlankRE, wikiTextBlank);
			};
			fallback = fallback.toLowerCase();
			const canonical: string | undefined = CAL.WG_FORMATTED_NAMESPACES[namespaceNumber]?.toLowerCase();
			let regexString: string = createRegexStr(canonical);
			if (fallback && canonical !== fallback) {
				regexString += `|${createRegexStr(fallback)}`;
			}
			for (const catName of Object.keys(CAL.WG_NAMESPACE_IDS)) {
				if (
					catName.toLowerCase() !== canonical &&
					catName.toLowerCase() !== fallback &&
					CAL.WG_NAMESPACE_IDS[catName] === namespaceNumber
				) {
					regexString += `|${createRegexStr(catName)}`;
				}
			}
			return `(?:${regexString})`;
		}
		private updateSelectionCounter(): void {
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			this.$markCounter.show().html(CAL.msg('files-selected', CAL.$selectedLabels.length.toString()));
		}
		private toggleAll(select: boolean): void {
			// The following classes are used here:
			// * see constant.ts
			// * for more information
			CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
			this.updateSelectionCounter();
		}

		private static async findAllVariants(category: string): Promise<string[]> {
			if (CAL.variantCache[category] !== undefined) {
				return CAL.variantCache[category] as string[];
			}
			const results: string[] = [];
			const params: ApiParseParams = {
				action: 'parse',
				format: 'json',
				formatversion: '2',
				text: category,
				title: 'temp',
			};
			for (const variant of VARIANTS) {
				const {parse} = await CAL.api.post({
					...params,
					variant,
				});
				const {text} = parse;
				results[results.length] = $(text).eq(0).text().trim();
			}
			// De-duplicate
			CAL.variantCache[category] = [...new Set(results)];
			return results;
		}

		private static async regexBuilder(category: string): Promise<RegExp> {
			// Build a regexp string for matching the given category:
			const catName: string = CAL.localizedRegex(CAL.TARGET_NAMESPACE, 'Category');
			// trim leading/trailing whitespace and underscores
			category = category.replace(/^[\s_]+/, '').replace(/[\s_]+$/, '');
			// Find all variants
			const variants: string[] = await CAL.findAllVariants(category);
			// escape regexp metacharacters (= any ASCII punctuation except _)
			const variantRegExps: string[] = [];
			for (let variant of variants) {
				variant = mw.util.escapeRegExp(variant);
				// any sequence of spaces and underscores should match any other
				variant = variant.replace(/[\s_]+/g, '[\\s_]+');
				// Make the first character case-insensitive:
				const first: string = variant.slice(0, 1);
				if (first.toUpperCase() !== first.toLowerCase()) {
					variant = `[${first.toUpperCase()}${first.toLowerCase()}]${variant.slice(1)}`;
				}
				variantRegExps[variantRegExps.length] = variant;
			}
			// Compile it into a RegExp that matches MediaWiki category syntax (yeah, it looks ugly):
			// XXX: the first capturing parens are assumed to match the sortkey, if present, including the | but excluding the ]]
			return new RegExp(
				`\\[\\[[\\s_]*${catName}[\\s_]*:[\\s_]*(?:${variantRegExps.join(
					'|'
				)})[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]`,
				'g'
			);
		}

		private doAPICall(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			params: Record<string, any>,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			callback: (data: any) => void
		) {
			params['format'] = 'json';
			params['formatversion'] = '2';
			let i: number = 0;
			const doCall = (): void => {
				const handleError = (error: string): void => {
					mw.log.error('[Cat-a-lot] Ajax error:', error);
					if (i < 4) {
						setTimeout(doCall, 300);
						i++;
					} else if (params['title']) {
						CAL.connectionError[CAL.connectionError.length] = params['title'] as string;
						this.updateCounter();
					}
				};
				CAL.api.post(params).then(callback).catch(handleError);
			};
			doCall();
		}

		private static markAsDone(
			$markedLabel: JQuery,
			targetCategory: string,
			mode: 'add' | 'copy' | 'move' | 'remove'
		): void {
			$markedLabel.addClass(CLASS_NAME_LABEL_DONE);

			switch (mode) {
				case 'add':
					$markedLabel.append(
						<>
							<br />
							{CAL.msg('added-cat', targetCategory)}
						</>
					);
					break;
				case 'copy':
					$markedLabel.append(
						<>
							<br />
							{CAL.msg('copied-cat', targetCategory)}
						</>
					);
					break;
				case 'move':
					$markedLabel.append(
						<>
							<br />
							{CAL.msg('moved-cat', targetCategory)}
						</>
					);
					break;
				case 'remove':
					$markedLabel.append(
						<>
							<br />
							{CAL.msg('removed-cat', targetCategory)}
						</>
					);
					break;
			}
		}
		private static doCleanup(text: string): string {
			return CAL.settings.docleanup ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, '') : text;
		} // Remove {{Uncategorized}} (also with comment). No need to replace it with anything
		private static removeUncat(text: string): string {
			return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, '');
		}
		private displayResult(): void {
			this.$body.css({
				cursor: '',
				overflow: '',
			});
			this.$body.find(`.${CLASS_NAME_FEEDBACK}`).addClass(CLASS_NAME_FEEDBACK_DONE);

			const $parent: JQuery = CAL.$counter.parent();
			$parent.html(<h3>{CAL.msg('done')}</h3>);
			$parent.append(
				<>
					{CAL.msg('all-done')}
					<br />
				</>
			);

			$parent.append(
				<a
					onClick={(): void => {
						CAL.$progressDialog.remove();
						this.toggleAll(false);
					}}
				>
					{CAL.msg('return-to-page')}
				</a>
			);

			if (CAL.alreadyThere.length) {
				$parent.append(
					<>
						<h5>{CAL.msg('skipped-already', CAL.alreadyThere.length.toString())}</h5>
						{CAL.alreadyThere.reduce(
							(pre, cur, index) =>
								index < CAL.alreadyThere.length - 1 ? [...pre, cur, <br key={index} />] : [...pre, cur],
							[] as (string | React.ReactElement)[]
						)}
					</>
				);
			}
			if (CAL.notFound.length) {
				$parent.append(
					<>
						<h5>{CAL.msg('skipped-not-found', CAL.notFound.length.toString())}</h5>
						{CAL.notFound.reduce(
							(pre, cur, index) =>
								index < CAL.notFound.length - 1 ? [...pre, cur, <br key={index} />] : [...pre, cur],
							[] as (string | React.ReactElement)[]
						)}
					</>
				);
			}
			if (CAL.connectionError.length) {
				$parent.append(
					<>
						<h5>{CAL.msg('skipped-server', CAL.connectionError.length.toString())}</h5>
						{CAL.connectionError.reduce(
							(pre, cur, index) =>
								index < CAL.connectionError.length - 1
									? [...pre, cur, <br key={index} />]
									: [...pre, cur],
							[] as (string | React.ReactElement)[]
						)}
					</>
				);
			}
		}
		private updateCounter(): void {
			CAL.counterCurrent++;
			if (CAL.counterCurrent > CAL.counterNeeded) {
				this.displayResult();
			} else {
				CAL.$counter.text(CAL.counterCurrent);
			}
		}
		private async editCategories(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			result: Record<string, any>,
			markedLabel: ReturnType<typeof this.getMarkedLabels>[0],
			targetCategory: string,
			mode: 'add' | 'copy' | 'move' | 'remove'
		): Promise<void> {
			const [markedLabelTitle, $markedLabel] = markedLabel;

			if (!result?.['query']) {
				CAL.connectionError[CAL.connectionError.length] = markedLabelTitle;
				this.updateCounter();
				return;
			}

			let originText: string = '';
			let starttimestamp: number = 0;
			let timestamp: number = 0;
			CAL.editToken = result['query'].tokens.csrftoken;
			const {pages} = result['query'];

			const [page] = pages;
			originText = page.revisions[0].content;
			({starttimestamp} = page);
			[{timestamp}] = page.revisions;

			const sourcecat: string = CAL.CURRENT_CATEGROY;
			// Check if that file is already in that category
			const targeRegExp = await CAL.regexBuilder(targetCategory);
			if (mode !== 'remove' && targeRegExp.test(originText) && mode !== 'move') {
				CAL.alreadyThere[CAL.alreadyThere.length] = markedLabelTitle;
				this.updateCounter();
				return;
			}

			// Fix text
			let text: string = originText;
			let summary: string;
			const sourceCatRegExp = await CAL.regexBuilder(sourcecat);
			switch (mode) {
				case 'add':
					text += `\n[[${CAL.localCatName}:${targetCategory}]]\n`;
					summary = CAL.msg('summary-add').replace('$1', targetCategory);
					break;
				case 'copy':
					text = text.replace(
						sourceCatRegExp,
						`[[${CAL.localCatName}:${sourcecat}$1]]\n[[${CAL.localCatName}:${targetCategory}$1]]`
					);
					summary = CAL.msg('summary-copy').replace('$1', sourcecat).replace('$2', targetCategory);
					// If category is added through template:
					if (originText === text) {
						text += `\n[[${CAL.localCatName}:${targetCategory}]]`;
					}
					break;
				case 'move':
					text = text.replace(sourceCatRegExp, `[[${CAL.localCatName}:${targetCategory}$1]]`);
					summary = CAL.msg('summary-move').replace('$1', sourcecat).replace('$2', targetCategory);
					break;
				case 'remove':
					text = text.replace(sourceCatRegExp, '');
					summary = CAL.msg('summary-remove').replace('$1', sourcecat);
					break;
			}

			if (text === originText) {
				CAL.notFound[CAL.notFound.length] = markedLabelTitle;
				this.updateCounter();
				return;
			}

			// Remove uncat after we checked whether we changed the text successfully.
			// Otherwise we might fail to do the changes, but still replace {{uncat}}
			if (mode !== 'remove') {
				text = CAL.doCleanup(CAL.removeUncat(text));
			}

			this.doAPICall(
				{
					action: 'edit',
					token: CAL.editToken,
					tags: CAL.API_TAG,
					title: markedLabelTitle,
					assert: 'user',
					bot: true,
					basetimestamp: timestamp,
					watchlist: CAL.settings.watchlist,
					text,
					summary,
					starttimestamp,
				},
				(): void => {
					this.updateCounter();
				}
			);

			CAL.markAsDone($markedLabel, targetCategory, mode);
		}
		private getContent(
			markedLabel: ReturnType<typeof this.getMarkedLabels>[0],
			targetCategory: string,
			mode: 'add' | 'copy' | 'move'
		): void {
			this.doAPICall(
				{
					action: 'query',
					meta: 'tokens',
					titles: markedLabel[0],
					prop: 'revisions',
					rvprop: 'content|timestamp',
				},
				(result): void => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					void this.editCategories(result, markedLabel, targetCategory, mode);
				}
			);
		}
		private static getTitleFromLink(href: string | undefined): string {
			try {
				return (decodeURIComponent(href ?? '').match(/wiki\/(.+?)(?:#.+)?$/)?.[1] ?? '').replace(/_/g, ' ');
			} catch {
				return '';
			}
		}
		private getMarkedLabels(): [string, JQuery][] {
			const markedLabels: ReturnType<typeof this.getMarkedLabels> = [];
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			CAL.$selectedLabels.each((_index: number, label: HTMLElement): void => {
				const $label: JQuery = $(label);
				const $labelLink: JQuery = $label.find('a[title]');
				const title: string =
					$labelLink.attr('title') ||
					CAL.getTitleFromLink($labelLink.attr('href')) ||
					CAL.getTitleFromLink($label.find('a').attr('href'));
				markedLabels[markedLabels.length] = [title, $label];
			});
			return markedLabels;
		}
		private showProgress(): void {
			this.$body.css({
				cursor: 'wait',
				overflow: 'hidden',
			});
			CAL.$progressDialog = $(
				<div>
					{CAL.msg('editing')}
					<span className={CLASS_NAME_CURRENT_COUNTER}>{CAL.counterCurrent}</span>
					{[CAL.msg('of'), CAL.counterNeeded]}
				</div>
			).dialog({
				dialogClass: CLASS_NAME_FEEDBACK,
				minHeight: 90,
				height: 90,
				width: 450,
				modal: true,
				closeOnEscape: false,
				draggable: false,
				resizable: false,
			});
			this.$body.find(`.${CLASS_NAME_FEEDBACK} .ui-dialog-titlebar`).hide();
			this.$body.find(`.${CLASS_NAME_FEEDBACK} .ui-dialog-content`).height('auto');
			CAL.$counter = this.$body.find(`.${CLASS_NAME_CURRENT_COUNTER}`);
		}
		private doSomething(targetCategory: string, mode: 'add' | 'copy' | 'move'): void {
			const markedLabels: ReturnType<typeof this.getMarkedLabels> = this.getMarkedLabels();
			if (!markedLabels.length) {
				void mw.notify(CAL.msg('none-selected'), {
					tag: 'catALot',
				});
				return;
			}
			CAL.alreadyThere = [];
			CAL.connectionError = [];
			CAL.notFound = [];
			CAL.counterCurrent = 1;
			CAL.counterNeeded = markedLabels.length;
			this.showProgress();
			for (const markedLabel of markedLabels) {
				this.getContent(markedLabel, targetCategory, mode);
			}
		}
		private addHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'add');
		}
		private copyHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'copy');
		}
		private moveHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'move');
		}
		private createCatLinks(symbol: string, categories: string[]): void {
			categories.sort();
			for (const category of categories) {
				const $tr = $(
					<tr dataset={{category}}>
						<td>{symbol}</td>
						<td>
							<a
								onClick={(event): void => {
									const $element = $(event.currentTarget);
									this.updateCats($element.closest('tr').data('category') as string);
								}}
							>
								{category}
							</a>
						</td>
					</tr>
				);
				// Can't move to source category
				if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
					$tr.append(
						<td>
							<a
								className={CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION}
								onClick={(event): void => {
									const $element = $(event.currentTarget);
									this.addHere($element.closest('tr').data('category') as string);
								}}
							>
								{CAL.msg('add')}
							</a>
						</td>
					);
				} else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
					$tr.append(
						<>
							<td>
								<a
									className={CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION}
									onClick={(event): void => {
										const $element = $(event.currentTarget);
										this.copyHere($element.closest('tr').data('category') as string);
									}}
								>
									{CAL.msg('copy')}
								</a>
							</td>
							<td>
								<a
									className={CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION}
									onClick={(event): void => {
										const $element = $(event.currentTarget);
										this.moveHere($element.closest('tr').data('category') as string);
									}}
								>
									{CAL.msg('move')}
								</a>
							</td>
						</>
					);
				}
				this.$resultList.find('table').append($tr);
			}
		}
		private showCategoryList(): void {
			this.$body.css('cursor', '');
			const currentCategories: string[] = [CAL.currentCategory];
			this.$resultList.empty();
			this.$resultList.append(<table />);
			this.createCatLinks('↑', CAL.parentCats);
			this.createCatLinks('→', currentCategories);
			this.createCatLinks('↓', CAL.subCats);
			// Reset width
			this.$container.width('');
			this.$container.height('');
			this.$container.width(Math.min((this.$container.width() ?? 0) * 1.1 + 15, ($(window).width() ?? 0) - 10));
			this.$resultList.css({
				'max-height': `${CAL.dialogHeight}px`,
				height: '',
			});
		}
		private getParentCats(): void {
			this.doAPICall(
				{
					action: 'query',
					titles: `Category:${CAL.currentCategory}`,
					prop: 'categories',
				},
				(result): void => {
					if (!result) {
						return;
					}
					CAL.parentCats = [];
					const {pages} = result.query;
					if (pages[0]?.missing) {
						this.$body.css('cursor', '');
						this.$resultList.html(
							<span className={CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND}>
								{CAL.msg('cat-not-found')}
							</span>
						);
						this.createCatLinks('→', [CAL.currentCategory]);
						return;
					}
					let categories: {title: string}[] = [];
					[{categories}] = pages;
					for (const cat of categories) {
						CAL.parentCats[CAL.parentCats.length] = cat.title.replace(/^[^:]+:/, '');
					}
					CAL.counterCat++;
					if (CAL.counterCat === 2) {
						this.showCategoryList();
					}
				}
			);
		}
		private getSubCats(): void {
			this.doAPICall(
				{
					action: 'query',
					list: 'categorymembers',
					cmtype: 'subcat',
					cmlimit: CAL.settings.subcatcount,
					cmtitle: `Category:${CAL.currentCategory}`,
				},
				(result): void => {
					const cats: {title: string}[] = result?.query?.categorymembers || [];
					CAL.subCats = [];
					for (const cat of cats) {
						CAL.subCats[CAL.subCats.length] = cat.title.replace(/^[^:]+:/, '');
					}
					CAL.counterCat++;
					if (CAL.counterCat === 2) {
						this.showCategoryList();
					}
				}
			);
		}
		private getCategoryList(): void {
			CAL.counterCat = 0;
			this.getParentCats();
			this.getSubCats();
		}
		private updateCats(cat: string): void {
			this.$body.css('cursor', 'wait');
			CAL.currentCategory = cat;
			this.$resultList.html(<div>{CAL.msg('loading')}</div>);
			this.getCategoryList();
		}

		private findAllLabels(): void {
			// It's possible to allow any kind of pages as well but what happens if you click on "select all" and don't expect it
			if (CAL.isSearchMode) {
				CAL.$labels = this.$body.find('table.searchResultImage').find('tr>td').eq(1);
				if (CAL.settings.editpages) {
					CAL.$labels = CAL.$labels.add('div.mw-search-result-heading');
				}
			} else {
				CAL.$labels = this.$body
					.find('div.gallerytext')
					.add(this.$body.find('div#mw-category-media').find('li[class!="gallerybox"]'));
				if (CAL.settings.editpages) {
					const $pages: JQuery<HTMLLIElement> = this.$body
						.find('div#mw-pages, div#mw-subcategories')
						.find('li');
					CAL.$labels = CAL.$labels.add($pages);
				}
			}
		}
		private makeClickable(): void {
			this.findAllLabels();
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			CAL.$labels
				.addClass(CLASS_NAME_LABEL)
				// @ts-expect-error TS2339
				.onCatALotShiftClick((): void => {
					this.updateSelectionCounter();
				});
		}

		private run(): void {
			if (this.$link.hasClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED)) {
				this.makeClickable();
				this.$dataContainer.show();
				this.$container.resizable({
					alsoResize: this.$resultList,
					handles: 'n',
					resize: (event: JQueryEventObject): void => {
						const $currentTarget = $(event.currentTarget) as JQuery;
						$currentTarget.css({
							left: '',
							top: '',
						});
						CAL.dialogHeight = $currentTarget.height() ?? CAL.dialogHeight;
						this.$resultList.css({
							maxHeight: '',
							width: '',
						});
					},
				});
				this.$resultList.css('max-height', '450px');
				if (CAL.isSearchMode) {
					this.updateCats('Pictures and images');
				} else {
					this.updateCats(CAL.CURRENT_CATEGROY);
				}
			} else {
				this.$dataContainer.hide();
				this.$container.resizable('destroy');
				this.$container.css('width', '');
				CAL.$labels.off('click.catALot');
			}
		}
	}

	if (
		(WG_NAMESPACE_NUMBER === -1 && WG_CANONICAL_SPECIAL_PAGE_NAME === 'Search') ||
		WG_NAMESPACE_NUMBER === OPTIONS.targetNamespace
	) {
		if (WG_NAMESPACE_NUMBER === -1) {
			CAL.isSearchMode = true;
		}
		/*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
		setMessages();
		void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
			new CAL($body).buildElements();
		});
	}
};

export {catALot};
