import {type ApiParseResponse, type ApiResponse, parseWikitext} from './parseWikitext';
import {PORTLET_CLASS, WG_PAGE_NAME, WG_USER_VARIANT} from './constant';
import {ApiRetryFailError} from './util/ApiRetryFailError';
import React from 'ext.gadget.React';
import {assert} from './util/assert';
import {getMessage} from './i18n';
import {viewerMap} from './initViewMap';
import {windowManager} from './initWindowManager';

const getViewer = ($body: JQuery<HTMLBodyElement>, hash: string): typeof viewer => {
	if (viewerMap.has(hash)) {
		const storedViewer = viewerMap.get(hash);
		assert(storedViewer, 'viewer');

		return storedViewer;
	}

	const $targetElement: JQuery = $body.find(`#noteTA-${hash}`);
	if (!$targetElement.length) {
		throw new Error(`Can't get Element "#noteTA-${hash}".`);
	}

	class NoteTAViewer extends OO.ui.ProcessDialog {
		private dataIsLoaded: boolean;
		private executePromise?: ReturnType<typeof this.doExecute>;
		private mutationObserver: MutationObserver;
		private $realContent: JQuery;
		private $body: JQuery | undefined;
		private static lastError?: OO.ui.Error;
		private static noteTAParseText: string;

		public constructor() {
			super({
				size: 'larger',
			});

			this.dataIsLoaded = false;
			this.$realContent = $(<div />) as JQuery;

			this.mutationObserver = new MutationObserver(this.updateSize.bind(this));
			this.mutationObserver.observe(this.$realContent.get(0) as HTMLElement, {
				childList: true,
				subtree: true,
			});
		}

		public override initialize(): this {
			super.initialize();

			const panelLayout: OO.ui.PanelLayout = new OO.ui.PanelLayout({
				expanded: false,
				padded: true,
			});

			this.$realContent.appendTo(panelLayout.$element);
			panelLayout.$element.appendTo(this.$body as JQuery);

			return this;
		}

		public override getSetupProcess(data: OO.ui.Dialog.SetupDataMap): OO.ui.Process {
			return super.getSetupProcess(data).next((): void => {
				void this.doExecuteWrap();
				void this.executeAction('main');
			});
		}

		public override getActionProcess(action?: string): OO.ui.Process {
			const isMainAction: boolean = action === 'main';

			return (
				super
					.getActionProcess(action)
					// @ts-expect-error TS7030
					.next(() => {
						if (isMainAction) {
							return this.doExecuteWrap();
						}
					})
					.next(() => {
						if (isMainAction && NoteTAViewer.lastError) {
							return NoteTAViewer.lastError;
						}
						return super.getActionProcess(action).execute();
					})
			);
		}

		public destroy(): void {
			this.mutationObserver.disconnect();
		}

		private static getNoteTAParseText(): JQuery.Deferred<ApiResponse> {
			if (NoteTAViewer.noteTAParseText) {
				return $.Deferred<string>().resolve(NoteTAViewer.noteTAParseText);
			}

			const $noteTAtitle: JQuery = $targetElement.find('.noteTA-title');
			const actualTitle: string = WG_PAGE_NAME.replace(/_/g, ' ');
			let wikitext: string = '';

			const titleDeferred = $.Deferred<ApiResponse>();

			if ($noteTAtitle.length) {
				const titleConv: string | undefined = $noteTAtitle.attr('data-noteta-code');
				assert(titleConv, 'titleConv');

				let titleDesc: string | undefined = $noteTAtitle.attr('data-noteta-desc');
				if (titleDesc) {
					titleDesc = `（${titleDesc}）`;
				} else {
					titleDesc = '';
				}

				wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>\n`;
				wikitext += '; 本文使用[[Help:字词转换处理|标题手工转换]]\n';
				wikitext += `* 转换标题为：-{D|${titleConv}}-${titleDesc}\n`;
				wikitext += `* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{|${titleConv}}-\n`;

				void titleDeferred.resolve();
			} else {
				parseWikitext(`{{noteTA/multititle|${actualTitle}}}`, {
					title: actualTitle,
					variant: 'zh',
				})
					.then((resultHtml: ApiResponse): void => {
						const $multiTitle: JQuery = $($.parseHTML(resultHtml as ApiParseResponse)).find(
							'.noteTA-multititle'
						);
						if ($multiTitle.length) {
							wikitext += '; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：';

							const textVariant: Record<string, string[]> = {};
							const variantText: Record<string, string | null> = {};

							for (const element of $multiTitle.children()) {
								const $element = $(element);

								const variant: string | undefined = $element.attr('data-noteta-multititle-variant');
								assert(variant, 'variant');

								const text: string = $element.text().trim();
								variantText[variant] = text;

								const textVariantArray: string[] | undefined = textVariant[text];
								if (textVariantArray) {
									textVariantArray[textVariantArray.length] = variant;
								} else {
									textVariant[text] = [variant];
								}
							}

							const titleConverted: string | null | undefined = variantText[WG_USER_VARIANT as string];

							const multiTitle: string[] = [];
							for (const key in variantText) {
								if (!Object.hasOwn(variantText, key)) {
									continue;
								}

								const text: string | null | undefined = variantText[key];
								if (text === null || text === undefined) {
									continue;
								}

								const variants: string[] | undefined = textVariant[text];
								if (!variants) {
									continue;
								}

								for (const variant of variants) {
									variantText[variant] = null;
								}

								const variantsName: string = variants
									.map((variant: string): string => `-{R|{{MediaWiki:Variantname-${variant}}}}-`)
									.join('、');
								multiTitle[multiTitle.length] = `${variantsName}：-{R|${text}}-`;
							}

							const subItemSeparator: string = '\n** ';
							wikitext += `${subItemSeparator}${multiTitle.join(subItemSeparator)}`;
							wikitext += `\n* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{R|${titleConverted}}-\n`;
						}

						void titleDeferred.resolve();
					})
					.catch((error: ApiRetryFailError): void => {
						void titleDeferred.reject(error);
					});
			}

			const deferred = $.Deferred<ApiResponse>();

			titleDeferred
				.then((): void => {
					const $noteTAgroups: JQuery = $targetElement.find('.noteTA-group > *[data-noteta-group]');
					for (const element of $noteTAgroups) {
						const $element: JQuery = $(element);
						switch ($element.attr('data-noteta-group-source')) {
							case 'template':
								wikitext += `{{CGroup/${$element.attr('data-noteta-group')}}}\n`;
								break;
							case 'module':
								wikitext += `{{#invoke:CGroupViewer|dialog|${$element.attr('data-noteta-group')}}}\n`;
								break;
							case 'none':
								wikitext += `; 本文使用的公共转换组“${$element.attr('data-noteta-group')}”尚未创建\n`;
								wikitext += `* {{edit|Module:CGroup/${$element.attr('data-noteta-group')}|创建公共转换组“${$element.attr('data-noteta-group')}”}}\n`;
								break;
							default:
								wikitext += `; 未知公共转换组“${$element.attr('data-noteta-group')}”来源“${$element.attr('data-noteta-group-source')}”\n`;
						}
					}

					const $noteTAlocal: JQuery = $targetElement.find('.noteTA-local');
					if ($noteTAlocal.length) {
						wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>\n`;
						wikitext += '; 本文使用[[Help:字词转换处理|全文手工转换]]\n';

						const $noteTAlocals = $noteTAlocal.children('*[data-noteta-code]');
						for (const element of $noteTAlocals) {
							const $element: JQuery = $(element);

							let localDesc: string | undefined = $element.attr('data-noteta-desc');
							if (localDesc) {
								localDesc = `（${localDesc}）`;
							} else {
								localDesc = '';
							}

							const localConv: string | undefined = $element.attr('data-noteta-code');
							wikitext += `* -{D|${localConv}}-${localDesc}当前显示为：-{${localConv}}-\n`;
						}
					}

					wikitext += '{{noteTA/footer}}\n';

					NoteTAViewer.noteTAParseText = wikitext;

					void deferred.resolve(wikitext);
				})
				.catch((error: ApiRetryFailError): void => {
					void deferred.reject(error);
				});

			return deferred;
		}

		private doExecute() {
			if (this.dataIsLoaded) {
				return $.Deferred<ApiResponse>().resolve();
			}

			this.$realContent.empty().append(<p>{getMessage('Loading')}</p>);

			return NoteTAViewer.getNoteTAParseText()
				.then((wikitext: ApiResponse) =>
					parseWikitext(wikitext as ApiParseResponse, {
						title: 'Template:CGroup/-',
						variant: WG_USER_VARIANT as string,
					})
				)
				.then((parsedHtml: ApiResponse): void => {
					// The following classes are used here:
					// * see constant.ts
					// * for more information
					this.$realContent
						.empty()
						.html(parsedHtml as ApiParseResponse)
						.addClass(`${PORTLET_CLASS}-output`);

					(
						this.$realContent.find('.mw-collapsible') as JQuery & {makeCollapsible: () => JQuery}
					).makeCollapsible();

					this.updateSize();
					this.dataIsLoaded = true;
				})
				.catch((error: ApiRetryFailError | Error | string): void => {
					if (error instanceof ApiRetryFailError) {
						throw new OO.ui.Error(error.toJQuery(), {
							recoverable: true,
						});
					} else {
						throw new OO.ui.Error(String(error), {
							recoverable: false,
						});
					}
				});
		}

		private doExecuteWrap() {
			if (this.executePromise === undefined) {
				this.executePromise = this.doExecute();
				delete NoteTAViewer.lastError;

				const executeDeferred = $.Deferred<ApiResponse>();
				void (this.executePromise as JQuery.Promise<ApiResponse>)
					.then((response: ApiResponse): void => {
						void executeDeferred.resolve(response);
					})
					.catch((error: Error | OO.ui.Error | string): void => {
						if (error instanceof OO.ui.Error) {
							NoteTAViewer.lastError = error;
						} else {
							void executeDeferred.reject(error);
						}
					})
					.always((): void => {
						delete this.executePromise;
					});

				return executeDeferred;
			}

			const deferred = $.Deferred<ApiResponse>();
			void (this.executePromise as JQuery.Promise<ApiResponse>)
				.then((response: ApiResponse): void => {
					void deferred.resolve(response);
				})
				.catch((error: Error | OO.ui.Error | string): void => {
					if (error instanceof OO.ui.Error) {
						NoteTAViewer.lastError = error;
					} else {
						void deferred.reject(error);
					}
				})
				.always((): void => {
					delete this.executePromise;
				});

			return deferred;
		}
	}

	NoteTAViewer.static = {
		...OO.ui.ProcessDialog.static,
	};
	NoteTAViewer.static.name = `NoteTAViewer-${hash}`;
	NoteTAViewer.static.title = getMessage('Title');
	NoteTAViewer.static.actions = [
		{
			label: mw.msg('ooui-dialog-process-dismiss'),
			flags: 'safe',
		},
	];

	const viewer: NoteTAViewer = new NoteTAViewer();
	windowManager.addWindows([viewer]);
	viewerMap.set(hash, viewer);

	return viewer;
};

const resetAllViewer = (): void => {
	for (const viewer of viewerMap.values()) {
		viewer.destroy();
	}
	viewerMap.clear();
	void windowManager.clearWindows();
};

export {getViewer, resetAllViewer};
