// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinkleclose.js */
(function twinkleclose($) {
	const $body = $('body');
	/**
	 * twinkleclose.js: XFD closing module
	 * Mode of invocation: Links after section heading
	 * Active on: AfD dated archive pages
	 * Config directives in: TwinkleConfig
	 */
	Twinkle.close = () => {
		if (
			Twinkle.getPref('XfdClose') === 'hide' ||
			!/^有兽档案馆([_ ]talk)?:存废讨论\/记录(?:\/\d+){3}$/.test(mw.config.get('wgPageName'))
		) {
			return;
		}
		mw.hook('wikipage.content').add((item) => {
			if (item.attr('id') === 'mw-content-text') {
				Twinkle.close.addLinks();
			}
		});
	};
	Twinkle.close.addLinks = () => {
		const spanTag = (color, content) => {
			const span = document.createElement('span');
			span.style.color = color;
			span.appendChild(document.createTextNode(content));
			return span;
		};
		$body
			.find(
				'h1:has(.mw-headline),h2:has(.mw-headline),h3:has(.mw-headline),h4:has(.mw-headline),h5:has(.mw-headline),h6:has(.mw-headline)',
				'#bodyContent'
			)
			.each((index, element) => {
				element.dataset.section = index + 1;
			});
		const selector = ':has(.mw-headline a:only-of-type):not(:has(+ div.NavFrame))';
		const titles = $body.find('#bodyContent').find(`h2${selector}:not(:has(+ p + h3)), h3${selector}`); // really needs to work on
		const delNode = document.createElement('strong');
		const delLink = document.createElement('a');
		delLink.appendChild(spanTag('Black', '['));
		delLink.appendChild(spanTag('Red', window.wgULS('关闭讨论', '關閉討論')));
		delLink.appendChild(spanTag('Black', ']'));
		delNode.appendChild(delLink);
		for (const current of titles) {
			const headlinehref = $(current).find('.mw-headline a').attr('href');
			if (headlinehref !== undefined) {
				let title = null;
				if (headlinehref.includes('redlink=1')) {
					title = headlinehref.slice(19, -22);
				} else {
					const m = headlinehref.match(/\/wiki\/([^?]+)/, '$1');
					if (m !== null) {
						[, title] = m;
					}
				}
				if (title !== null) {
					title = decodeURIComponent(title);
					title = title.replace(/_/g, ' '); // Normalize for using in interface and summary
					const pagenotexist = $(current).find('.mw-headline a').hasClass('new');
					const {section} = current.dataset;
					const [node] = current.querySelectorAll('.mw-headline');
					node.appendChild(document.createTextNode(' '));
					const tmpNode = delNode.cloneNode(true);
					tmpNode.firstChild.href = `#${section}`;
					$(tmpNode.firstChild).on('click', () => {
						Twinkle.close.callback(title, section, pagenotexist);
						return false;
					});
					node.appendChild(tmpNode);
				}
			}
		}
	};
	// Keep this synchronized with {{delh}}
	Twinkle.close.codes = [
		{
			key: window.wgULS('请求无效', '請求無效'),
			value: {
				ir: {
					label: window.wgULS('请求无效', '請求無效'),
					action: 'keep',
				},
				rep: {
					label: window.wgULS('重复提出，无效', '重複提出，無效'),
					action: 'keep',
				},
				ne: {
					label: window.wgULS('目标页面或文件不存在，无效', '目標頁面或檔案不存在，無效'),
					action: 'keep',
				},
				nq: {
					label: window.wgULS('提删者未获取提删资格，无效', '提刪者未取得提刪資格，無效'),
					action: 'keep',
				},
			},
		},
		{
			key: '保留',
			value: {
				k: {
					label: '保留',
					action: 'keep',
					adminonly: true,
				},
				sk: {
					label: '快速保留',
					action: 'keep',
				},
				tk: {
					label: window.wgULS('暂时保留，改挂维护模板（关注度等）', '暫時保留，改掛維護模板（關注度等）'),
					value: window.wgULS('暂时保留', '暫時保留'),
					action: 'keep',
				},
				rr: {
					label: window.wgULS('请求理由消失', '請求理由消失'),
					action: 'keep',
					selected: Twinkle.getPref('XfdClose') === 'nonadminonly',
				},
				dan: {
					label: window.wgULS('删后重建', '刪後重建'),
					action: 'keep',
					adminonly: true,
				},
			},
		},
		{
			key: window.wgULS('删除', '刪除'),
			value: {
				d: {
					label: window.wgULS('删除', '刪除'),
					action: 'del',
					adminonly: true,
					selected: Twinkle.getPref('XfdClose') === 'all',
				},
				ic: {
					label: window.wgULS('图像因侵权被删', '圖像因侵權被刪'),
					action: 'del',
					adminonly: true,
				},
			},
		},
		{
			key: window.wgULS('快速删除', '快速刪除'),
			value: {
				sd: {
					label: window.wgULS('快速删除', '快速刪除'),
					action: 'del',
				},
				lssd: {
					label: window.wgULS('无来源或著作权信息，快速删除', '無來源或版權資訊，快速刪除'),
					action: 'del',
				},
				svg: {
					label: window.wgULS('已改用SVG图形，快速删除', '已改用SVG圖形，快速刪除'),
					action: 'del',
				},
				drep: {
					label: window.wgULS('多次被删除，条目锁定', '多次被刪除，條目鎖定'),
					action: 'del',
					adminonly: true,
				},
			},
		},
		{
			key: window.wgULS('其他处理方法', '其他處理方法'),
			value: {
				c: {
					label: window.wgULS('转交侵权', '轉交侵權'),
					action: 'noop',
				},
				r: {
					label: '重定向',
					action: 'keep',
					adminonly: true,
				},
				cr: {
					label: window.wgULS('分类重定向', '分類重定向'),
					action: 'keep',
					adminonly: true,
				},
				m: {
					label: window.wgULS('移动', '移動'),
					action: 'keep',
					adminonly: true,
				},
				merge: {
					label: window.wgULS('并入', '併入'),
					action: 'keep',
					adminonly: true,
				},
				mergeapproved: {
					label: window.wgULS('允许并入', '允許併入'),
					action: 'keep',
					adminonly: true,
				},
				nc: {
					label: window.wgULS('无共识暂时保留', '無共識暫時保留'),
					value: window.wgULS('无共识', '無共識'),
					action: 'keep',
				},
			},
		},
	];
	Twinkle.close.callback = (title, section, noop) => {
		const Window = new Morebits.simpleWindow(410, 200);
		Window.setTitle(`关闭存废讨论 \u00B7 ${title}`);
		Window.setScriptName('Twinkle');
		Window.addFooterLink('存废讨论设置', 'H:TW/PREF#关闭存废讨论');
		Window.addFooterLink('Twinkle帮助', 'H:TW/DOC#关闭存废讨论');
		const form = new Morebits.quickForm(Twinkle.close.callback.evaluate);
		form.append({
			type: 'select',
			label: '处理结果：',
			name: 'sub_group',
			event: Twinkle.close.callback.change_code,
		});
		form.append({
			type: 'input',
			name: 'sdreason',
			label: '速删理由：',
			tooltip: '用于删除日志，使用{{delete}}的参数格式，例如 A1 或 A1|G1',
			hidden: true,
		});
		form.append({
			type: 'input',
			name: 'remark',
			label: '补充说明：',
		});
		form.append({
			type: 'checkbox',
			list: [
				{
					label: '只关闭讨论，不进行其他操作',
					value: 'noop',
					name: 'noop',
					event: Twinkle.close.callback.change_operation,
					checked: noop,
				},
			],
		});
		if (new mw.Title(title).namespace % 2 === 0 && new mw.Title(title).namespace !== 2) {
			// hide option for user pages, to avoid accidentally deleting user talk page
			form.append({
				type: 'checkbox',
				list: [
					{
						label: '删除关联的讨论页',
						value: 'talkpage',
						name: 'talkpage',
						tooltip: '删除时附带删除此页面的讨论页。',
						checked: true,
						event: (e) => {
							e.stopPropagation();
						},
					},
				],
			});
		}
		form.append({
			type: 'checkbox',
			list: [
				{
					label: '删除重定向页',
					value: 'redirects',
					name: 'redirects',
					tooltip: '删除到此页的重定向。',
					checked: true,
					event: (e) => {
						e.stopPropagation();
					},
				},
			],
		});
		form.append({
			type: 'submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		const [sub_group] = result.querySelectorAll('select'); // hack
		const resultData = {
			title,
			section: Number.parseInt(section, 10),
			noop,
		};
		$(result).data('resultData', resultData);
		// worker function to create the combo box entries
		const createEntries = (contents, container) => {
			for (const [itemKey, itemProperties] of Object.entries(contents)) {
				const key = typeof itemKey === 'string' ? itemKey : itemProperties.value;
				const elem = new Morebits.quickForm.element({
					type: 'option',
					label: `${key}：${itemProperties.label}`,
					value: key,
					selected: itemProperties.selected,
					disabled:
						(Twinkle.getPref('XfdClose') !== 'all' && itemProperties.adminonly) || itemProperties.disabled,
				});
				const elemRendered = container.appendChild(elem.render());
				$(elemRendered).data('messageData', itemProperties);
			}
		};
		for (const group of Twinkle.close.codes) {
			let optgroup = new Morebits.quickForm.element({
				type: 'optgroup',
				label: group.key,
			});
			optgroup = optgroup.render();
			sub_group.appendChild(optgroup);
			// create the options
			createEntries(group.value, optgroup);
		}
		const event = document.createEvent('Event');
		event.initEvent('change', true, true);
		result.sub_group.dispatchEvent(event);
	};
	Twinkle.close.callback.change_operation = (e) => {
		const noop = e.target.checked;
		const code = e.target.form.sub_group.value;
		const messageData = $(e.target.form.sub_group).find(`option[value="${code}"]`).data('messageData');
		const {talkpage} = e.target.form;
		const {redirects} = e.target.form;
		if (noop || messageData.action === 'keep') {
			if (talkpage) {
				talkpage.checked = false;
				talkpage.disabled = true;
			}
			redirects.checked = false;
			redirects.disabled = true;
		} else {
			if (talkpage) {
				talkpage.checked = true;
				talkpage.disabled = false;
			}
			redirects.checked = true;
			redirects.disabled = false;
		}
	};
	Twinkle.close.callback.change_code = (e) => {
		const resultData = $(e.target.form).data('resultData');
		const messageData = $(e.target).find(`option[value="${e.target.value}"]`).data('messageData');
		const {noop} = e.target.form;
		const {talkpage} = e.target.form;
		const {redirects} = e.target.form;
		if (resultData.noop || messageData.action === 'noop') {
			noop.checked = true;
			noop.disabled = true;
			if (talkpage) {
				talkpage.checked = false;
				talkpage.disabled = true;
			}
			redirects.checked = false;
			redirects.disabled = true;
		} else {
			noop.checked = false;
			noop.disabled = false;
			if (messageData.action === 'keep') {
				if (talkpage) {
					talkpage.checked = false;
					talkpage.disabled = true;
				}
				redirects.checked = false;
				redirects.disabled = true;
			} else {
				if (talkpage) {
					talkpage.checked = true;
					talkpage.disabled = false;
				}
				redirects.checked = true;
				redirects.disabled = false;
			}
			if (e.target.value === 'sd') {
				e.target.form.sdreason.parentElement.removeAttribute('hidden');
			} else {
				e.target.form.sdreason.parentElement.setAttribute('hidden', '');
			}
		}
	};
	Twinkle.close.callback.evaluate = (e) => {
		const code = e.target.sub_group.value;
		const resultData = $(e.target).data('resultData');
		const messageData = $(e.target.sub_group).find(`option[value="${code}"]`).data('messageData');
		const noop = e.target.noop.checked;
		const talkpage = e.target.talkpage && e.target.talkpage.checked;
		const redirects = e.target.redirects.checked;
		const params = {
			title: resultData.title,
			code,
			remark: e.target.remark.value,
			sdreason: e.target.sdreason.value,
			section: resultData.section,
			parentSection: resultData.parentSection,
			messageData,
			talkpage,
			redirects,
		};
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(e.target);
		Morebits.wiki.actionCompleted.notice = '操作完成';
		if (noop || messageData.action === 'noop') {
			Twinkle.close.callbacks.talkend(params);
		} else {
			switch (messageData.action) {
				case 'del':
					Twinkle.close.callbacks.del(params);
					break;
				case 'keep': {
					const ysarxiv_page = new Morebits.wiki.page(params.title, '移除存废讨论模板');
					ysarxiv_page.setCallbackParameters(params);
					ysarxiv_page.load(Twinkle.close.callbacks.keep);
					break;
				}
				default:
					mw.notify(`关闭存废讨论：未定义 ${code}`, {
						type: 'warn',
						tag: 'twinkleclose',
					});
			}
		}
	};
	Twinkle.close.callbacks = {
		del: (params) => {
			let query;
			let ysarxiv_api;
			Morebits.wiki.addCheckpoint();
			const page = new Morebits.wiki.page(params.title, '删除页面');
			if (params.code === 'sd') {
				Twinkle.speedy.callbacks.parseWikitext(params.title, `{{delete|${params.sdreason}}}`, (reason) => {
					reason = prompt('输入删除理由，或点击确定以接受自动生成的：', reason);
					if (reason === null) {
						page.getStatusElement().warn('没有执行删除');
						Twinkle.close.callbacks.talkend(params);
					} else {
						page.setEditSummary(reason);
						page.setChangeTags(Twinkle.changeTags);
						page.deletePage(() => {
							page.getStatusElement().info('完成');
							Twinkle.close.callbacks.talkend(params);
						});
					}
				});
			} else {
				page.setEditSummary(`存废讨论通过：[[${mw.config.get('wgPageName')}#${params.title}]]`);
				page.setChangeTags(Twinkle.changeTags);
				page.deletePage(() => {
					page.getStatusElement().info('完成');
					Twinkle.close.callbacks.talkend(params);
				});
			}
			if (params.redirects) {
				query = {
					action: 'query',
					titles: params.title,
					prop: 'redirects',
					rdlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};

				ysarxiv_api = new Morebits.wiki.api(
					'正在获取重定向',
					query,
					Twinkle.close.callbacks.deleteRedirectsMain
				);
				ysarxiv_api.params = params;
				ysarxiv_api.post();
			}
			if (params.talkPage) {
				const pageTitle = mw.Title.newFromText(params.title);
				if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
					pageTitle.namespace++; // now pageTitle is the talk page title!
					query = {
						action: 'query',
						titles: pageTitle.toText(),
					};
					ysarxiv_api = new Morebits.wiki.api(
						'正在检查讨论页面是否存在',
						query,
						Twinkle.close.callbacks.deleteTalk
					);
					ysarxiv_api.params = params;
					ysarxiv_api.apiobj.params.talkPage = pageTitle.toText();
					ysarxiv_api.post();
				}
			}
			Morebits.wiki.removeCheckpoint();
		},
		deleteRedirectsMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('rd')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (pages.length === 0) {
				return;
			}
			const redirectDeleter = new Morebits.batchOperation(
				window.wgULS('正在删除到 ', '正在刪除到 ') +
					apiobj.params.title +
					window.wgULS(' 的重定向', ' 的重新導向')
			);
			redirectDeleter.setOption('chunkSize', Twinkle.getPref('batchdeleteChunks'));
			redirectDeleter.setPageList(pages);
			redirectDeleter.run((pageName) => {
				const ysarxiv_page = new Morebits.wiki.page(
					pageName,
					window.wgULS('正在删除 ', '正在刪除 ') + pageName
				);
				ysarxiv_page.setEditSummary(
					`[[LIB:CSD#G5|G5]]：${window.wgULS('指向已删页面“', '指向已刪頁面「')}${apiobj.params.title}${window.wgULS(
						'”的重定向',
						'」的重新導向'
					)}`
				);
				ysarxiv_page.setChangeTags(Twinkle.changeTags);
				ysarxiv_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
			});
		},
		deleteTalk: (apiobj) => {
			const xml = apiobj.responseXML;
			const exists = $(xml).find('page:not([missing])').length > 0;
			if (!exists) {
				// no talk page; forget about it
				return;
			}
			const page = new Morebits.wiki.page(
				apiobj.params.talkPage,
				window.wgULS('正在删除页面 ', '正在刪除頁面 ') +
					apiobj.params.title +
					window.wgULS(' 的讨论页', ' 的討論頁')
			);
			page.setEditSummary(
				`[[LIB:CSD#G5|G5]]：${window.wgULS('已删页面“', '已刪頁面「')}${apiobj.params.title}${window.wgULS(
					'”的[[Help:讨论页|讨论页]]',
					'」的[[Help:討論頁|討論頁]]'
				)}`
			);
			page.setChangeTags(Twinkle.changeTags);
			page.deletePage();
		},
		keep: (pageobj) => {
			const statelem = pageobj.getStatusElement();
			if (!pageobj.exists()) {
				statelem.error('页面不存在，可能已被删除');
				return;
			}
			const text = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			const pagetitle = mw.Title.newFromText(params.title);
			if (pagetitle.getNamespaceId() % 2 === 0) {
				const talkpagetitle = new mw.Title(pagetitle.getMainText(), pagetitle.getNamespaceId() + 1);
				const talkpage = new Morebits.wiki.page(
					talkpagetitle.toString(),
					window.wgULS('标记讨论页', '標記討論頁')
				);
				const reason = params.messageData.value || params.messageData.label;
				const vfdkept = `{{Old vfd multi|${mw.config
					.get('wgPageName')
					.split('/')
					.slice(2)
					.join('/')}|${reason}}}\n`;
				talkpage.setPrependText(vfdkept);
				talkpage.setEditSummary(`[[${mw.config.get('wgPageName')}#${params.title}]]：${reason}`);
				talkpage.setChangeTags(Twinkle.changeTags);
				talkpage.setCreateOption('recreate');
				talkpage.prepend();
			}
			let newtext = text.replace(
				/<noinclude>\s*\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*<\/noinclude>\s*/gi,
				''
			);
			newtext = newtext.replace(/\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, '');
			if (params.code !== 'tk') {
				newtext = newtext.replace(
					/{{(notability|fame|mair|知名度|重要性|显著性|顯著性|知名度不足|人物重要性|重要性不足|notable|关注度|关注度不足|關注度|關注度不足|重要|重要度)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi,
					''
				);
				newtext = newtext.replace(
					/{{(substub|小小作品|cod|小小條目|小小条目)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi,
					''
				);
			}
			if (params.code === 'mergeapproved') {
				const tag = '{{'
					.concat('subst:')
					.concat(`Merge approved/auto|discuss=${mw.config.get('wgPageName')}#${params.title}}}\n`);
				// Insert tag after short description or any hatnotes
				const ysarxiv_page = new Morebits.wikitext.page(newtext);
				newtext = ysarxiv_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
			}
			if (newtext === text) {
				statelem.warn('未找到存废讨论模板，可能已被移除');
				Twinkle.close.callbacks.talkend(params);
				return;
			}
			const editsummary = `存废讨论关闭：[[${mw.config.get('wgPageName')}#${params.title}]]`;
			pageobj.setPageText(newtext);
			pageobj.setEditSummary(editsummary);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('nocreate');
			pageobj.save(Twinkle.close.callbacks.keepComplete);
		},
		keepComplete: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			Twinkle.close.callbacks.talkend(params);
		},
		talkend: (params) => {
			const ysarxiv_page = new Morebits.wiki.page(mw.config.get('wgPageName'), '关闭讨论');
			ysarxiv_page.setCallbackParameters(params);
			ysarxiv_page.setPageSection(params.section);
			ysarxiv_page.load(Twinkle.close.callbacks.saveTalk);
		},
		saveTalk: (pageobj) => {
			const statelem = pageobj.getStatusElement();
			let text = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			if (text.includes('{{delh')) {
				statelem.error('讨论已被关闭');
				return;
			}
			const sbegin = text.includes('<section begin=backlog />');
			const send = text.includes('<section end=backlog />');
			text = text.replace('\n<section begin=backlog />', '');
			text = text.replace('\n<section end=backlog />', '');
			const bar = text.split('\n----\n');
			const split = bar[0].split('\n');
			text = `${split[0]}\n{{delh|${params.code}}}\n`;
			text += split.slice(1).join('\n');
			const reason = params.messageData.value || params.messageData.label;
			text += `\n<hr>\n: ${reason}`;
			if (params.remark) {
				text += `：${Morebits.string.appendPunctuation(params.remark)}`;
			} else {
				text += '。';
			}
			if (!Morebits.userIsSysop) {
				text += '{{'.concat('subst:').concat('NAC}}');
			}
			text += '--~~'.concat('~~', '\n{{delf}}');
			if (bar[1]) {
				text += `\n----\n${bar.slice(1).join('\n----\n')}`;
			}
			if (send) {
				text += '\n<section end=backlog />';
			}
			if (sbegin) {
				// guaranteed to be at tne end?
				text += '\n<section begin=backlog />';
			}
			pageobj.setPageText(text);
			pageobj.setEditSummary(`/* ${params.title} */ ${reason}`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('nocreate');
			pageobj.save(Twinkle.close.callbacks.disableLink);
		},
		disableLink: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			$(`strong a[href=#${params.section}] span`).css('color', '#808080');
		},
	};
	Twinkle.addInitCallback(Twinkle.close, 'close');
})(jQuery);
