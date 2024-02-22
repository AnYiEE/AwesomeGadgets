window.customizeToolbar(function (this: JQuery): void {
	const self = this as JQuery & {wikiEditor: (method: string, options: Record<string, unknown>) => void};

	self.wikiEditor('addToToolbar', {
		section: 'main',
		group: 'insert',
		tools: {
			category: {
				label: '分类',
				type: 'button',
				icon: 'https://youshou.wiki/images/0/0c/VisualEditor_-_Icon_-_Tag.svg',
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
				icon: 'https://youshou.wiki/images/7/72/VisualEditor_-_Icon_-_Strikethrough-s.svg',
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
				icon: 'https://youshou.wiki/images/a/a9/VisualEditor_-_Icon_-_Underline-u.svg',
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
				icon: 'https://youshou.wiki/images/d/d8/VisualEditor_-_Icon_-_Block-quote.svg',
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
				icon: 'https://youshou.wiki/images/7/7f/OOjs_UI_icon_alignLeft.svg',
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
				icon: 'https://youshou.wiki/images/b/ba/OOjs_UI_icon_alignCenter.svg',
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
				icon: 'https://youshou.wiki/images/1/13/OOjs_UI_icon_alignRight.svg',
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
				icon: 'https://youshou.wiki/images/2/2c/VisualEditor_-_Icon_-_Source.svg',
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
				icon: 'https://youshou.wiki/images/3/30/VisualEditor_-_Icon_-_Equation.svg',
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
				icon: 'https://youshou.wiki/images/d/d1/VisualEditor_-_Icon_-_Comment.svg',
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
				icon: 'https://youshou.wiki/images/0/0e/VisualEditor_-_Icon_-_Remove-item.svg',
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
				icon: 'https://youshou.wiki/images/6/6a/Chinese_conversion_black.svg',
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
				icon: 'https://youshou.wiki/wiki/File:VisualEditor_-_Icon_-_References.svg',
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
