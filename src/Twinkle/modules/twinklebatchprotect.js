// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklebatchprotect.js */
(function twinklebatchprotect($) {
	/**
	 * twinklebatchprotect.js: Batch protect module (sysops only)
	 * Mode of invocation: Tab ("P-batch")
	 * Active on: Existing project pages and user pages;
	 * existing and non-existing categories; Special:PrefixIndex
	 */
	Twinkle.batchprotect = () => {
		if (
			Morebits.userIsSysop &&
			((mw.config.get('wgArticleId') > 0 && [2, 4].includes(mw.config.get('wgNamespaceNumber'))) ||
				mw.config.get('wgNamespaceNumber') === 14 ||
				mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex')
		) {
			Twinkle.addPortletLink(Twinkle.batchprotect.callback, '批保', 'tw-pbatch', '批量保护链出页面');
		}
	};
	Twinkle.batchprotect.unlinkCache = {};
	Twinkle.batchprotect.callback = () => {
		const Window = new Morebits.simpleWindow(600, 400);
		Window.setTitle('批保');
		Window.setScriptName('Twinkle');
		Window.addFooterLink('保护条例', 'LIB:PROT');
		Window.addFooterLink(window.wgULS('帮助文档', '幫助文檔'), 'H:TW/DOC#保护');
		Window.addFooterLink(window.wgULS('问题反馈', '問題反饋'), 'HT:TW');
		const form = new Morebits.quickForm(Twinkle.batchprotect.callback.evaluate);
		form.append({
			type: 'checkbox',
			event: Twinkle.protect.formevents.editmodify,
			list: [
				{
					label: '修改编辑保护',
					value: 'editmodify',
					name: 'editmodify',
					tooltip: '仅限现有页面。',
					checked: true,
				},
			],
		});
		form.append({
			type: 'select',
			name: 'editlevel',
			label: '编辑权限：',
			event: Twinkle.protect.formevents.editlevel,
			list: Twinkle.protect.protectionLevels,
		});
		form.append({
			type: 'select',
			name: 'editexpiry',
			label: '终止时间：',
			event: (event) => {
				if (event.target.value === 'custom') {
					Twinkle.protect.doCustomExpiry(event.target);
				}
			},
			list: Twinkle.protect.protectionLengths, // Default (2 days) set after render
		});
		form.append({
			type: 'checkbox',
			event: Twinkle.protect.formevents.movemodify,
			list: [
				{
					label: '修改移动保护',
					value: 'movemodify',
					name: 'movemodify',
					tooltip: '仅限现有页面。',
					checked: true,
				},
			],
		});
		form.append({
			type: 'select',
			name: 'movelevel',
			label: '移动权限：',
			event: Twinkle.protect.formevents.movelevel,
			list: Twinkle.protect.protectionLevels.filter(
				// Autoconfirmed is required for a move, redundant
				(protLevel) => {
					return protLevel.value !== 'autoconfirmed';
				}
			),
		});
		form.append({
			type: 'select',
			name: 'moveexpiry',
			label: '终止时间：',
			event: (event) => {
				if (event.target.value === 'custom') {
					Twinkle.protect.doCustomExpiry(event.target);
				}
			},
			list: Twinkle.protect.protectionLengths, // Default (2 days) set after render
		});
		form.append({
			type: 'checkbox',
			event: (event) => {
				event.target.form.createlevel.disabled = !event.target.checked;
				event.target.form.createexpiry.disabled =
					!event.target.checked || event.target.form.createlevel.value === 'all';
				event.target.form.createlevel.style.color = event.target.checked ? '' : 'transparent';
				event.target.form.createexpiry.style.color = event.target.checked ? '' : 'transparent';
			},
			list: [
				{
					label: '修改创建保护',
					value: 'createmodify',
					name: 'createmodify',
					tooltip: '仅限不存在的页面。',
					checked: true,
				},
			],
		});
		form.append({
			type: 'select',
			name: 'createlevel',
			label: '创建权限：',
			event: Twinkle.protect.formevents.createlevel,
			list: Twinkle.protect.protectionLevels,
		});
		form.append({
			type: 'select',
			name: 'createexpiry',
			label: '终止时间：',
			event: (event) => {
				if (event.target.value === 'custom') {
					Twinkle.protect.doCustomExpiry(event.target);
				}
			},
			list: Twinkle.protect.protectionLengths, // Default (indefinite) set after render
		});
		form.append({
			type: 'header',
			label: '', // horizontal rule
		});
		form.append({
			type: 'input',
			name: 'reason',
			label: '理由（保护日志）',
			size: 60,
		});
		const query = {
			action: 'query',
			prop: 'revisions|info|imageinfo',
			rvprop: 'size|user',
			inprop: 'protection',
			format: 'json',
		};
		if (mw.config.get('wgNamespaceNumber') === 14) {
			// categories
			query.generator = 'categorymembers';
			query.gcmtitle = mw.config.get('wgPageName');
			query.gcmlimit = Twinkle.getPref('batchMax');
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
			query.generator = 'allpages';
			query.gapnamespace =
				mw.util.getParamValue('namespace') || document.querySelectorAll('select[name=namespace]')[0].value;
			query.gapprefix =
				mw.util.getParamValue('prefix') || document.querySelectorAll('input[name=prefix]')[0].value;
			query.gaplimit = Twinkle.getPref('batchMax');
		} else {
			query.generator = 'links';
			query.titles = mw.config.get('wgPageName');
			query.gpllimit = Twinkle.getPref('batchMax');
		}
		const statusdiv = document.createElement('div');
		statusdiv.style.padding = '15px'; // just so it doesn't look broken
		Window.setContent(statusdiv);
		Morebits.status.init(statusdiv);
		Window.display();
		const statelem = new Morebits.status('抓取页面列表');
		const ysarchives_api = new Morebits.wiki.api(
			'加载中……',
			query,
			(apiobj) => {
				const response = apiobj.getResponse();
				const pages = (response.query && response.query.pages) || [];
				const list = [];
				pages.sort(Twinkle.sortByNamespace);
				for (const page of pages) {
					const metadata = [];
					const missing = !!page.missing;
					let editProt;
					if (missing) {
						metadata.push('页面不存在');
						editProt = page.protection
							.filter((protection) => {
								return protection.type === 'create' && protection.level === 'sysop';
							})
							.pop();
					} else {
						if (page.redirect) {
							metadata.push('重定向');
						}
						if (page.ns === 6) {
							metadata.push(`上传者：${page.imageinfo[0].user}`, `最后编辑者：${page.revisions[0].user}`);
						} else {
							metadata.push(`${mw.language.convertNumber(page.revisions[0].size)}字节`);
						}
						editProt = page.protection
							.filter((protection) => {
								return protection.type === 'edit' && protection.level === 'sysop';
							})
							.pop();
					}
					if (editProt) {
						metadata.push(
							`${missing ? '白纸' : ''}全保护${
								editProt.expiry === 'infinity'
									? '（永久）'
									: `（${new Morebits.date(editProt.expiry).calendar('utc')} (UTC)过期）`
							}`
						);
					}
					const {title} = page;
					list.push({
						label: title + (metadata.length > 0 ? ` (${metadata.join('; ')})` : ''),
						value: title,
						checked: true,
						style: editProt ? 'color: #f00' : '',
					});
				}
				form.append({
					type: 'header',
					label: '待保护页面',
				});
				form.append({
					type: 'button',
					label: '全选',
					event: (event) => {
						$(Morebits.quickForm.getElements(event.target.form, 'pages')).prop('checked', true);
					},
				});
				form.append({
					type: 'button',
					label: '全不选',
					event: (event) => {
						$(Morebits.quickForm.getElements(event.target.form, 'pages')).prop('checked', false);
					},
				});
				form.append({
					type: 'checkbox',
					name: 'pages',
					shiftClickSupport: true,
					list,
				});
				form.append({
					type: 'submit',
				});
				const result = form.render();
				Window.setContent(result);
				// Set defaults
				result.editexpiry.value = '2 days';
				result.moveexpiry.value = '2 days';
				result.createexpiry.value = 'infinity';
				for (const links of Morebits.quickForm.getElements(result, '个页面')) {
					Twinkle.generateArrowLinks(links);
				}
			},
			statelem
		);
		ysarchives_api.post();
	};
	Twinkle.batchprotect.currentProtectCounter = 0;
	Twinkle.batchprotect.currentprotector = 0;
	Twinkle.batchprotect.callback.evaluate = (event) => {
		Morebits.wiki.actionCompleted.notice = '批量保护完成';
		const form = event.target;
		const numProtected = $(Morebits.quickForm.getElements(form, '个页面')).filter((_index, element) => {
			return element.checked && element.nextElementSibling.style.color === '#f00';
		}).length;
		if (
			numProtected > 0 &&
			!confirm(`您即将对${mw.language.convertNumber(numProtected)}个全保护页面进行操作。您确定吗？`)
		) {
			return;
		}
		const input = Morebits.quickForm.getInputData(form);
		if (!input.reason) {
			mw.notify('您必须给出一个理由。', {
				type: 'warn',
				tag: 'twinklebatchprotect',
			});
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		if (input.pages.length === 0) {
			Morebits.status.error('Error', '待保护页面不存在，程序终止');
			return;
		}
		const batchOperation = new Morebits.batchOperation('应用保护设置');
		batchOperation.setOption('chunkSize', Twinkle.getPref('batchChunks'));
		batchOperation.setOption('preserveIndividualStatusLines', true);
		batchOperation.setPageList(input.pages);
		batchOperation.run((pageName) => {
			const query = {
				action: 'query',
				titles: pageName,
				format: 'json',
			};
			const ysarchives_api = new Morebits.wiki.api(
				`正在检查页面“${pageName}”是否存在`,
				query,
				Twinkle.batchprotect.callbacks.main,
				null,
				batchOperation.workerFailure
			);
			ysarchives_api.params = {
				page: pageName,
				batchOperation,
				...input,
			};
			ysarchives_api.post();
		});
	};
	Twinkle.batchprotect.callbacks = {
		main: (apiobj) => {
			const response = apiobj.getResponse();
			if (response.query.normalized) {
				apiobj.params.page = response.query.normalized[0].to;
			}
			const exists = !response.query.pages[0].missing;
			const page = new Morebits.wiki.page(apiobj.params.page, `正在保护${apiobj.params.page}`);
			let takenAction = false;
			if (exists && apiobj.params.editmodify) {
				page.setEditProtection(apiobj.params.editlevel, apiobj.params.editexpiry);
				takenAction = true;
			}
			if (exists && apiobj.params.movemodify) {
				page.setMoveProtection(apiobj.params.movelevel, apiobj.params.moveexpiry);
				takenAction = true;
			}
			if (!exists && apiobj.params.createmodify) {
				page.setCreateProtection(apiobj.params.createlevel, apiobj.params.createexpiry);
				takenAction = true;
			}
			if (!takenAction) {
				Morebits.status.warn(
					`正在保护“${apiobj.params.page}`,
					`”页面${exists ? '存在' : '不存在'}；无事可做，跳过`
				);
				apiobj.params.batchOperation.workerFailure(apiobj);
				return;
			}
			page.setEditSummary(apiobj.params.reason);
			page.setChangeTags(Twinkle.changeTags);
			page.protect(apiobj.params.batchOperation.workerSuccess, apiobj.params.batchOperation.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.batchprotect, 'batchprotect');
})(jQuery);
