// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinkleunlink.js */
(function twinkleunlink($) {
	/**
	 * twinkleunlink.js: Unlink module
	 * Mode of invocation: Tab ("Unlink")
	 * Active on: Non-special pages, except LIB:沙盒
	 */
	Twinkle.unlink = () => {
		if (
			mw.config.get('wgNamespaceNumber') < 0 ||
			mw.config.get('wgPageName') === Twinkle.getPref('sandboxPage') ||
			!Morebits.userIsSysop
		) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.unlink.callback,
			window.wgULS('消链', '消連'),
			'tw-unlink',
			window.wgULS('取消到本页的链接', '取消到本頁的連結')
		);
	};
	// the parameter is used when invoking unlink from admin speedy
	Twinkle.unlink.callback = (presetReason) => {
		const fileSpace = mw.config.get('wgNamespaceNumber') === 6;
		const Window = new Morebits.simpleWindow(600, 440);
		Window.setTitle(
			window.wgULS('取消链入', '取消連入') +
				(fileSpace ? window.wgULS('和模板、文件使用', '和模板、檔案使用') : '')
		);
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('链入设置', '連入設定'), 'H:TW/PREF#unlink');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#unlink');
		const form = new Morebits.quickForm(Twinkle.unlink.callback.evaluate);
		// prepend some documentation: files are commented out, while any
		// display text is preserved for links (otherwise the link itself is used)
		const linkTextBefore = Morebits.htmlNode(
			'code',
			`[[${fileSpace ? ':' : ''}${Morebits.pageNameNorm}${window.wgULS('|链接文字]]', '|連結文字]]')}`
		);
		const linkTextAfter = Morebits.htmlNode('code', window.wgULS('链接文字', '連結文字'));
		const linkPlainBefore = Morebits.htmlNode('code', `[[${Morebits.pageNameNorm}]]`);
		const linkTemplateBefore = Morebits.htmlNode('code', `{{${mw.config.get('wgTitle')}}}`);
		let linkPlainAfter;
		if (fileSpace) {
			linkPlainAfter = Morebits.htmlNode('code', `<!-- [[${Morebits.pageNameNorm}]] -->`);
		} else {
			linkPlainAfter = Morebits.htmlNode('code', Morebits.pageNameNorm);
		}
		for (const node of [linkTextBefore, linkTextAfter, linkPlainBefore, linkPlainAfter, linkTemplateBefore]) {
			node.style.fontFamily = 'monospace';
			node.style.fontStyle = 'normal';
		}
		form.append({
			type: 'div',
			style: 'margin-bottom: 0.5em; font-style: normal',
			label: [
				`${
					window.wgULS(
						'这个工具可以取消所有指向该页的链接（“链入”）',
						'這個工具可以取消所有指向該頁的連結（「連入」）'
					) +
					(fileSpace
						? window.wgULS(
								'，或通过加入<!-- -->注释标记隐藏所有对此文件的使用',
								'，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用'
							)
						: '')
				}。例如：`,
				linkTextBefore,
				window.wgULS('将会变成', '將會變成'),
				linkTextAfter,
				'，',
				linkPlainBefore,
				window.wgULS('将会变成', '將會變成'),
				linkPlainAfter,
				'，',
				linkTemplateBefore,
				window.wgULS('将会被移除', '將會被移除'),
				window.wgULS('。请小心使用。', '。請小心使用。'),
			],
		});
		form.append({
			type: 'input',
			name: 'reason',
			label: '理由：',
			value: presetReason || '',
			size: 60,
		});
		const query = {
			action: 'query',
			list: 'backlinks',
			bltitle: mw.config.get('wgPageName'),
			bllimit: 'max',
			// 500 is max for normal users, 5000 for bots and sysops
			blnamespace: Twinkle.getPref('unlinkNamespaces'),
			rawcontinue: true,
			format: 'json',
		};
		if (fileSpace) {
			query.list += '|imageusage';
			query.iutitle = query.bltitle;
			query.iulimit = query.bllimit;
			query.iunamespace = query.blnamespace;
		} else {
			query.blfilterredir = 'nonredirects';
		}
		const ysarxiv_api = new Morebits.wiki.api(
			window.wgULS('抓取链入', '抓取連入'),
			query,
			Twinkle.unlink.callbacks.display.backlinks
		);
		ysarxiv_api.params = {
			form,
			Window,
			image: fileSpace,
		};
		ysarxiv_api.post();
		const root = document.createElement('div');
		root.style.padding = '15px'; // just so it doesn't look broken
		Morebits.status.init(root);
		ysarxiv_api.statelem.status(window.wgULS('加载中……', '載入中……'));
		Window.setContent(root);
		Window.display();
	};
	Twinkle.unlink.callback.evaluate = (event) => {
		const form = event.target;
		const input = Morebits.quickForm.getInputData(form);
		if (!input.reason) {
			mw.notify(window.wgULS('您必须指定取消链入的理由。', '您必須指定取消連入的理由。'), {
				type: 'warn',
				tag: 'twinkleunlink',
			});
			return;
		}
		input.backlinks ||= [];
		input.imageusage ||= [];
		const pages = Morebits.array.uniq([...input.backlinks, ...input.imageusage]);
		if (!pages.length) {
			mw.notify(window.wgULS('您必须至少选择一个要取消链入的页面。', '您必須至少選擇一個要取消連入的頁面。'), {
				type: 'warn',
				tag: 'twinkleunlink',
			});
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		const unlinker = new Morebits.batchOperation(
			`取消${
				input.backlinks.length
					? window.wgULS('链入', '連入') +
						(input.imageusage.length ? window.wgULS('与文件使用', '與檔案使用') : '')
					: window.wgULS('文件使用', '檔案使用')
			}`
		);
		unlinker.setOption('preserveIndividualStatusLines', true);
		unlinker.setPageList(pages);
		const params = {
			reason: input.reason,
			unlinker,
		};
		unlinker.run((pageName) => {
			const ysarxiv_page = new Morebits.wiki.page(
				pageName,
				window.wgULS('在页面“', '在頁面「') + pageName + window.wgULS('”中取消链入', '」中取消連入')
			);
			ysarxiv_page.setBotEdit(true); // unlink considered a floody operation
			ysarxiv_page.setCallbackParameters({
				doBacklinks: input.backlinks.includes(pageName),
				doImageusage: input.imageusage.includes(pageName),
				...params,
			});
			ysarxiv_page.load(Twinkle.unlink.callbacks.unlinkBacklinks);
		});
	};
	Twinkle.unlink.callbacks = {
		display: {
			backlinks: (apiobj) => {
				const response = apiobj.getResponse();
				let havecontent = false;
				let list;
				let namespaces;
				let i;
				if (apiobj.params.image) {
					const imageusage = response.query.imageusage.sort(Twinkle.sortByNamespace);
					list = [];
					for (i = 0; i < imageusage.length; ++i) {
						// Label made by Twinkle.generateBatchPageLinks
						list.push({
							label: '',
							value: imageusage[i].title,
							checked: true,
						});
					}
					if (list.length) {
						apiobj.params.form.append({
							type: 'header',
							label: window.wgULS('文件使用', '檔案使用'),
						});
						namespaces = [];
						for (const v of Twinkle.getPref('unlinkNamespaces')) {
							namespaces.push(
								v === '0'
									? window.wgULS('（条目）', '（條目）')
									: mw.config.get('wgFormattedNamespaces')[v]
							);
						}
						apiobj.params.form.append({
							type: 'div',
							label: window.wgULS('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、'),
							tooltip: window.wgULS(
								'您可在Twinkle参数设置中更改相关选项，请参见[[H:TW/PREF]]',
								'您可在Twinkle偏好設定中更改相關選項，請參見[[H:TW/PREF]]'
							),
						});
						if (response['query-continue'] && response['query-continue'].imageusage) {
							apiobj.params.form.append({
								type: 'div',
								label:
									window.wgULS('显示前', '顯示前') +
									mw.language.convertNumber(list.length) +
									window.wgULS('个文件使用。', '個檔案使用。'),
							});
						}
						apiobj.params.form.append({
							type: 'button',
							label: window.wgULS('全选', '全選'),
							event: (e) => {
								$(Morebits.quickForm.getElements(e.target.form, 'imageusage')).prop('checked', true);
							},
						});
						apiobj.params.form.append({
							type: 'button',
							label: window.wgULS('全不选', '全不選'),
							event: (e) => {
								$(Morebits.quickForm.getElements(e.target.form, 'imageusage')).prop('checked', false);
							},
						});
						apiobj.params.form.append({
							type: 'checkbox',
							name: 'imageusage',
							shiftClickSupport: true,
							list,
						});
						havecontent = true;
					} else {
						apiobj.params.form.append({
							type: 'div',
							label: window.wgULS('未找到文件使用。', '未找到檔案使用。'),
						});
					}
				}
				const backlinks = response.query.backlinks.sort(Twinkle.sortByNamespace);
				if (backlinks.length > 0) {
					list = [];
					for (i = 0; i < backlinks.length; ++i) {
						// Label made by Twinkle.generateBatchPageLinks
						list.push({
							label: '',
							value: backlinks[i].title,
							checked: true,
						});
					}
					apiobj.params.form.append({
						type: 'header',
						label: window.wgULS('链入', '連入'),
					});
					namespaces = [];
					for (const v of Twinkle.getPref('unlinkNamespaces')) {
						namespaces.push(
							v === '0' ? window.wgULS('（条目）', '（條目）') : mw.config.get('wgFormattedNamespaces')[v]
						);
					}
					apiobj.params.form.append({
						type: 'div',
						label: window.wgULS('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、'),
						tooltip: window.wgULS(
							'您可在Twinkle参数设置中更改相关选项，请参见[[H:TW/PREF]]',
							'您可在Twinkle偏好設定中更改相關選項，請參見[[H:TW/PREF]]'
						),
					});
					if (response['query-continue'] && response['query-continue'].backlinks) {
						apiobj.params.form.append({
							type: 'div',
							label:
								window.wgULS('显示前', '顯示前') +
								mw.language.convertNumber(list.length) +
								window.wgULS('个链入。', '個連入。'),
						});
					}
					apiobj.params.form.append({
						type: 'button',
						label: window.wgULS('全选', '全選'),
						event: (e) => {
							$(Morebits.quickForm.getElements(e.target.form, 'backlinks')).prop('checked', true);
						},
					});
					apiobj.params.form.append({
						type: 'button',
						label: window.wgULS('全不选', '全不選'),
						event: (e) => {
							$(Morebits.quickForm.getElements(e.target.form, 'backlinks')).prop('checked', false);
						},
					});
					apiobj.params.form.append({
						type: 'checkbox',
						name: 'backlinks',
						shiftClickSupport: true,
						list,
					});
					havecontent = true;
				} else {
					apiobj.params.form.append({
						type: 'div',
						label: window.wgULS('未找到链入。', '未找到連入。'),
					});
				}
				if (havecontent) {
					apiobj.params.form.append({
						type: 'submit',
					});
				}
				const result = apiobj.params.form.render();
				apiobj.params.Window.setContent(result);
				for (const link of Morebits.quickForm.getElements(result, 'backlinks')) {
					Twinkle.generateBatchPageLinks(link);
				}
				for (const link of Morebits.quickForm.getElements(result, 'imageusage')) {
					Twinkle.generateBatchPageLinks(link);
				}
			},
		},
		unlinkBacklinks: (pageobj) => {
			let oldtext = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			const ysarxiv_page = new Morebits.wikitext.page(oldtext);
			let summaryText = '';
			let warningString = false;
			let text;
			// remove image usages
			if (params.doImageusage) {
				text = ysarxiv_page.commentOutImage(mw.config.get('wgTitle'), window.wgULS('注释', '注釋')).getText();
				// did we actually make any changes?
				if (text === oldtext) {
					warningString = window.wgULS('文件使用', '檔案使用');
				} else {
					summaryText = window.wgULS('注释文件使用', '注釋檔案使用');
					oldtext = text;
				}
			}
			// remove backlinks
			if (params.doBacklinks) {
				text = ysarxiv_page.removeLink(Morebits.pageNameNorm).getText();
				text = ysarxiv_page.removeTemplate(mw.config.get('wgTitle')).getText();
				// did we actually make any changes?
				if (text === oldtext) {
					warningString = warningString
						? window.wgULS('取消链入或文件使用', '取消連入或檔案使用')
						: window.wgULS('取消链入', '取消連入');
				} else {
					summaryText = (summaryText ? `${summaryText} / ` : '') + window.wgULS('取消链结到', '取消連結到');
					oldtext = text;
				}
			}
			if (warningString) {
				// nothing to do!
				pageobj
					.getStatusElement()
					.error(`${window.wgULS('未能在页面上找到', '未能在頁面上找到') + warningString}。`);
				params.unlinker.workerFailure(pageobj);
				return;
			}
			pageobj.setPageText(text);
			pageobj.setEditSummary(
				summaryText +
					window.wgULS('“', '「') +
					Morebits.pageNameNorm +
					window.wgULS('”：', '」：') +
					params.reason
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('nocreate');
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.unlink, 'unlink');
})(jQuery);
