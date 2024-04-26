import {customizeToolbar} from 'ext.gadget.Edittools-customizeToolbar';

customizeToolbar(function (this: JQuery): void {
	const self = this as JQuery & {wikiEditor: (method: string, options: Record<string, unknown>) => void};

	self.wikiEditor('addToToolbar', {
		section: 'main',
		group: 'insert',
		tools: {
			category: {
				label: '分类',
				type: 'button',
				oouiIcon: 'tag',
				action: {
					type: 'encapsulate',
					options: {
						pre: '[[Category:',
						post: ']]',
					},
				},
			},
		},
	});
	self.wikiEditor('addToToolbar', {
		section: 'advanced',
		group: 'format',
		tools: {
			bolditalic: {
				label: '粗斜体',
				type: 'button',
				icon: 'https://youshou.wiki/images/b/be/Toolbaricon_bolditalic_A.png',
				action: {
					type: 'encapsulate',
					options: {
						pre: "'''''",
						periMsg: '粗斜体文字',
						post: "'''''",
					},
				},
			},
			strikethrough: {
				label: '删除线',
				type: 'button',
				oouiIcon: 'strikethrough',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<s>',
						post: '</s>',
					},
				},
			},
			underline: {
				label: '下划线',
				type: 'button',
				oouiIcon: 'underline',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<u>',
						post: '</u>',
					},
				},
			},
			quote: {
				label: '块引用',
				type: 'button',
				oouiIcon: 'quotes',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<block'.concat('quote>'),
						post: '</block'.concat('quote>'),
					},
				},
			},
			'justify-left': {
				label: '左对齐',
				type: 'button',
				oouiIcon: 'alignLeft',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<div style="text-align:left">',
						post: '</div>',
					},
				},
			},
			'justify-center': {
				label: '居中',
				type: 'button',
				oouiIcon: 'alignCenter',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<div style="text-align: center;">',
						post: '</div>',
					},
				},
			},
			'justify-right': {
				label: '右对齐',
				type: 'button',
				oouiIcon: 'alignRight',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<div style="text-align: right;">',
						post: '</div>',
					},
				},
			},
			source: {
				label: '源代码',
				type: 'button',
				oouiIcon: 'markup',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<syntaxhighlight lang="text">',
						post: '</syntaxhighlight>',
					},
				},
			},
		},
	});
	self.wikiEditor('addToToolbar', {
		section: 'advanced',
		group: 'insert',
		tools: {
			math: {
				label: '数学公式',
				type: 'button',
				oouiIcon: 'mathematics',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<math>',
						periMsg: '插入数学公式',
						post: '</math>',
					},
				},
			},
			hidden: {
				label: '注释或隐藏文字',
				type: 'button',
				oouiIcon: 'notice',
				action: {
					type: 'encapsulate',
					options: {
						pre: '<!-- ',
						post: ' -->',
					},
				},
			},
			hline: {
				label: '水平线',
				type: 'button',
				oouiIcon: 'subtract',
				action: {
					type: 'encapsulate',
					options: {
						pre: '----',
						ownline: true,
					},
				},
			},
			'hans-hant': {
				label: '繁简转换',
				type: 'button',
				icon: 'https://youshou.wiki/images/thumb/6/6a/Chinese_conversion_black.svg/24px-Chinese_conversion_black.svg.png',
				action: {
					type: 'encapsulate',
					options: {
						pre: '-{',
						periMsg: '转换文字',
						post: '}-',
					},
				},
			},
			references: {
				label: '参考文献区',
				type: 'button',
				oouiIcon: 'references',
				action: {
					type: 'encapsulate',
					options: {
						pre: '\n== 参考文献 ==\n{{reflist}}\n',
					},
				},
			},
		},
	});
});
