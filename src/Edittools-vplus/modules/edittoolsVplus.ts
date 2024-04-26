import {customizeToolbar} from 'ext.gadget.Edittools-customizeToolbar';

const edittoolsVplus = (): void => {
	customizeToolbar(function (this: JQuery): void {
		const self = this as JQuery & {wikiEditor: (method: string, options: Record<string, unknown>) => void};

		self.wikiEditor('addToToolbar', {
			sections: {
				pageedits: {
					type: 'toolbar',
					// Can also be 'booklet'
					label: window.wgULS('条目编辑', '條目編輯'),
				},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'pageedits',
			groups: {
				pageedits: {},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'pageedits',
			group: 'pageedits',
			tools: {
				articleEdit: {
					label: window.wgULS('条目编辑', '條目編輯'),
					type: 'select',
					list: {
						elink: {
							label: window.wgULS('外部链接章节', '外部連結章節'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n== 外部链接 ==\n* [',
									periMsg: '网页地址 网页说明',
									post: ']\n',
								},
							},
						},
						seealso: {
							label: window.wgULS('参见章节', '參見章節'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n== 参见 ==\n* [[',
									periMsg: '参见地址',
									post: ']]\n',
								},
							},
						},
						Disambig: {
							label: window.wgULS('消歧义', '消歧義'),
							action: {
								type: 'encapsulate',
								options: {
									pre: "\n'''{{subst:".concat("PAGENAME}}'''可以指：\n"),
									periMsg: window.wgULS(
										'* [[歧义1]]：描述1\n* [[歧义2]]：描述2',
										'* [[歧義1]]：描述1\n* [[歧義2]]：描述2'
									),
									post: '\n{{disambig}}',
								},
							},
						},
						otheruses: {
							label: window.wgULS('条目消歧义', '條目消歧義'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Otheruses|',
									periMsg: window.wgULS(
										'条目名称|subject=本页主题描述|other=同名或类似名的其它条目描述',
										'條目名稱|subject=本頁主題描述|other=同名或類似名的其它條目描述'
									),
									post: '}}',
								},
							},
						},
						Current: {
							label: window.wgULS('正在发生', '正在發生'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Current|time={{subst:'.concat('#time:Y年Fj日|{{#time:c}}}}'),
								},
							},
						},
					},
				},
				articleMaintenance: {
					label: window.wgULS('页面维护', '頁面維護'),
					type: 'select',
					list: {
						stub: {
							label: '小作品',
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n{{',
									post: '小作品}}',
								},
							},
						},
						inuse: {
							label: window.wgULS('正在编辑', '正在編輯'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Inuse}}',
								},
							},
						},
						Substub: {
							label: window.wgULS('小小条目', '小小條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{subst:Substub'.concat('/auto', '}}'),
								},
							},
						},
						mergeto: {
							label: window.wgULS('合并本条目到', '合併本條目到'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{mergeto|',
									periMsg: window.wgULS('合并本条目到的条目名称', '合並本條目到的條目名稱'),
									post: '}}',
								},
							},
						},
						mergefrom: {
							label: window.wgULS('合并到本条目', '合併到本條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{mergefrom|',
									periMsg: window.wgULS('需要合并到本条目的条目名称', '需要合並到本條目的條目名稱'),
									post: '}}',
								},
							},
						},
						split: {
							label: window.wgULS('分拆条目', '分拆條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Split}}',
								},
							},
						},
					},
				},
				zhhanshant: {
					label: '繁简转换',
					type: 'select',
					list: {
						noconv: {
							label: window.wgULS('取消繁简转换', '取消繁簡轉換'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '-{',
									periMsg: window.wgULS('不转换内容', '不轉換內容'),
									post: '}-',
								},
							},
						},
						title: {
							label: window.wgULS('标题错误', '標題錯誤'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '-{T|',
									periMsg: window.wgULS('正确标题名称', '正確標題名稱'),
									post: '}-',
								},
							},
						},
						noteTA: {
							label: window.wgULS('标题全文转换', '標題全文轉換'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{noteTA\n',
									periMsg: `|G1=${window.wgULS(
										'公共组名',
										'公共組名'
									)}\n|1=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n|2=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n`,
									post: '}}',
								},
							},
						},
						image: {
							label: window.wgULS('地区语言图像', '地區語言圖像'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Image\n',
									periMsg: `\t|zh=${window.wgULS(
										'无转换图像名',
										'無轉換圖像名'
									)}\n\t|zh-hans=简体图像名\n\t|zh-hant= 繁体圖像名\n\t|zh-cn=大陆图像名\n\t|zh-tw=臺灣圖像名\n\t|zh-hk=香港圖像名\n\t|zh=马新图像名\n\t|${window.wgULS(
										'图像属性',
										'圖像屬性'
									)}\n`,
									post: '}}',
								},
							},
						},
					},
				},
				langTags: {
					label: window.wgULS('非中文标明', '非中文標明'),
					type: 'select',
					list: {
						en: {
							label: window.wgULS('英语', '英語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|en|',
									periMsg: window.wgULS('英语', '英語'),
									post: '}}',
								},
							},
						},
						de: {
							label: window.wgULS('德语', '德語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|de|',
									periMsg: window.wgULS('德语', '德語'),
									post: '}}',
								},
							},
						},
						fr: {
							label: window.wgULS('法语', '法語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|fr|',
									periMsg: window.wgULS('法语', '法語'),
									post: '}}',
								},
							},
						},
						ja: {
							label: window.wgULS('日语', '日語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ja|',
									periMsg: window.wgULS('日语', '日語'),
									post: '}}',
								},
							},
						},
						es: {
							label: window.wgULS('西班牙语', '西班牙語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|es|',
									periMsg: window.wgULS('西班牙语', '西班牙語'),
									post: '}}',
								},
							},
						},
						ar: {
							label: window.wgULS('阿拉伯语', '阿拉伯語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ar|',
									periMsg: window.wgULS('阿拉伯语', '阿拉伯語'),
									post: '}}',
								},
							},
						},
						ru: {
							label: window.wgULS('俄语', '俄語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ru|',
									periMsg: window.wgULS('俄语', '俄語'),
									post: '}}',
								},
							},
						},
						he: {
							label: window.wgULS('希伯来语', '希伯來語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|he|',
									periMsg: window.wgULS('希伯来语', '希伯來語'),
									post: '}}',
								},
							},
						},
						el: {
							label: window.wgULS('希腊语', '希臘語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|el|',
									periMsg: window.wgULS('希腊语', '希臘語'),
									post: '}}',
								},
							},
						},
						pt: {
							label: window.wgULS('葡萄牙语', '葡萄牙語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|pt|',
									periMsg: window.wgULS('葡萄牙语', '葡萄牙語'),
									post: '}}',
								},
							},
						},
						la: {
							label: '拉丁语',
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|la|',
									periMsg: '拉丁语',
									post: '}}',
								},
							},
						},
						langcode: {
							label: window.wgULS('其他语言', '其他語言'),
							action: {
								type: 'encapsulate',
								options: {
									pre: `{{lang|${window.wgULS('在此填上语言代码|', '在此填上語言代碼|')}`,
									periMsg: window.wgULS('其他语言', '其他語言'),
									post: '}}',
								},
							},
						},
					},
				},
			},
		});
	});
};

export {edittoolsVplus};
