// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklebatchdelete.js */
(function twinklebatchdelete($) {
	const $body = $('body');
	/**
	 * twinklebatchdelete.js: Batch delete module (sysops only)
	 * Mode of invocation: Tab ("D-batch")
	 * Active on: Existing non-articles, and Special:PrefixIndex
	 */
	Twinkle.batchdelete = () => {
		if (
			Morebits.userIsSysop &&
			((mw.config.get('wgCurRevisionId') && mw.config.get('wgNamespaceNumber') > 0) ||
				mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex' ||
				mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects')
		) {
			Twinkle.addPortletLink(
				Twinkle.batchdelete.callback,
				window.wgULS('批删', '批刪'),
				'tw-batch',
				window.wgULS('删除此分类或页面中的所有链接', '刪除此分類或頁面中的所有連結')
			);
		}
	};
	Twinkle.batchdelete.unlinkCache = {};
	// Has the subpages list been loaded?
	let subpagesLoaded;
	Twinkle.batchdelete.callback = () => {
		subpagesLoaded = false;
		const Window = new Morebits.simpleWindow(600, 400);
		Window.setTitle(window.wgULS('批量删除', '批次刪除'));
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#batchdelete');
		const form = new Morebits.quickForm(Twinkle.batchdelete.callback.evaluate);
		form.append({
			type: 'checkbox',
			list: [
				{
					label: window.wgULS('删除页面', '刪除頁面'),
					name: 'delete_page',
					value: 'delete',
					checked: true,
					subgroup: {
						type: 'checkbox',
						list: [
							{
								label: window.wgULS(
									'删除关联的讨论页（用户讨论页除外）',
									'刪除關聯的討論頁（使用者討論頁除外）'
								),
								name: 'delete_talk',
								value: 'delete_talk',
								checked: true,
							},
							{
								label: window.wgULS('删除到已删页面的重定向页', '刪除到已刪頁面的重新導向頁面'),
								name: 'delete_redirects',
								value: 'delete_redirects',
								checked: true,
							},
							{
								label: window.wgULS('删除已删页面的子页面', '刪除已刪頁面的子頁面'),
								name: 'delete_subpages',
								value: 'delete_subpages',
								checked: false,
								event: Twinkle.batchdelete.callback.toggleSubpages,
								subgroup: {
									type: 'checkbox',
									list: [
										{
											label: window.wgULS('删除已删子页面的讨论页', '刪除已刪子頁面的討論頁'),
											name: 'delete_subpage_talks',
											value: 'delete_subpage_talks',
										},
										{
											label: window.wgULS(
												'删除到已删子页面的重定向页',
												'刪除到已刪子頁面的重新導向頁面'
											),
											name: 'delete_subpage_redirects',
											value: 'delete_subpage_redirects',
										},
										{
											label: window.wgULS(
												'取消所有已删页面的链入（仅处理条目命名空间）',
												'取消所有已刪頁面的連入（僅處理條目命名空間）'
											),
											name: 'unlink_subpages',
											value: 'unlink_subpages',
										},
									],
								},
							},
						],
					},
				},
				{
					label: window.wgULS('取消链入（仅处理条目命名空间）', '取消連入（僅處理條目命名空間）'),
					name: 'unlink_page',
					value: 'unlink',
					checked: false,
				},
				{
					label: window.wgULS('移除文件使用（所有命名空间）', '移除檔案使用（所有命名空間）'),
					name: 'unlink_file',
					value: 'unlink_file',
					checked: true,
				},
			],
		});
		form.append({
			type: 'select',
			name: 'common_reason',
			label: '常用理由：',
			style: 'width: 85%;',
			list: Twinkle.batchdelete.deletereasonlist,
			event: Twinkle.batchdelete.callback.change_common_reason,
		});
		form.append({
			name: 'reason',
			type: 'input',
			label: '理由：',
			size: 75,
		});
		const query = {
			action: 'query',
			prop: 'revisions|info|imageinfo',
			inprop: 'protection',
			rvprop: 'size|user',
		};
		// On categories
		if (mw.config.get('wgNamespaceNumber') === 14) {
			query.generator = 'categorymembers';
			query.gcmtitle = mw.config.get('wgPageName');
			query.gcmlimit = Twinkle.getPref('batchMax');
			// On Special:PrefixIndex
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
			query.generator = 'allpages';
			query.gaplimit = Twinkle.getPref('batchMax');
			if (mw.util.getParamValue('prefix')) {
				query.gapnamespace = mw.util.getParamValue('namespace');
				query.gapprefix = mw.util.getParamValue('prefix');
			} else {
				let pathSplit = decodeURIComponent(location.pathname).split('/');
				if (pathSplit.length < 3 || pathSplit[2] !== 'Special:前缀索引') {
					return;
				}
				const titleSplit = pathSplit[3].split(':');
				query.gapnamespace = mw.config.get('wgNamespaceIds')[titleSplit[0].toLowerCase()];
				if (titleSplit.length < 2 || query.gapnamespace === undefined) {
					query.gapnamespace = 0; // article namespace
					query.gapprefix = pathSplit.splice(3).join('/');
				} else {
					pathSplit = pathSplit.splice(4);
					pathSplit.splice(0, 0, titleSplit.splice(1).join(':'));
					query.gapprefix = pathSplit.join('/');
				}
			}
			// On Special:BrokenRedirects
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects') {
			query.generator = 'querypage';
			query.gqppage = 'BrokenRedirects';
			query.gqplimit = Twinkle.getPref('batchMax');
			// On normal pages
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
		Twinkle.batchdelete.pages = {};
		const statelem = new Morebits.status(window.wgULS('抓取页面列表', '抓取頁面列表'));
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('加载中…', '載入中…'),
			query,
			(apiobj) => {
				const xml = apiobj.responseXML;
				const $pages = $(xml).find('page').filter(':not([missing])'); // :not([imagerepository="shared"])
				$pages.each((_index, page) => {
					const $page = $(page);
					const ns = $page.attr('ns');
					const title = $page.attr('title');
					const isRedir = $page.attr('redirect') === '';
					const $editprot = $page.find('pr[type="edit"][level="sysop"]');
					const isProtected = $editprot.length > 0;
					const size = $page.find('rev').attr('size');
					const metadata = [];
					if (isRedir) {
						metadata.push(window.wgULS('重定向', '重新導向'));
					}
					if (isProtected) {
						metadata.push(
							window.wgULS('全保护，', '全保護，') +
								($editprot.attr('expiry') === 'infinity'
									? window.wgULS('无限期', '無限期')
									: `${new Morebits.date($editprot.attr('expiry')).calendar('utc')} (UTC)`) +
								window.wgULS('过期', '過期')
						);
					}
					if (ns === '6') {
						// mimic what delimages used to show for files
						metadata.push(
							window.wgULS('上传者：', '上傳者：') + $page.find('ii').attr('user'),
							window.wgULS('最后编辑：', '最後編輯：') + $page.find('rev').attr('user')
						);
					} else {
						metadata.push(mw.language.convertNumber(size) + window.wgULS('字节', '位元組'));
					}
					Twinkle.batchdelete.pages[title] = {
						label: title + (metadata.length ? `（${metadata.join('，')}）` : ''),
						value: title,
						checked: true,
						style: isProtected ? 'color: #f00' : '',
					};
				});
				const form_ = apiobj.params.form;
				form_.append({
					type: 'header',
					label: window.wgULS('待删除页面', '待刪除頁面'),
				});
				form_.append({
					type: 'button',
					label: window.wgULS('全选', '全選'),
					event: () => {
						$(result)
							.find('input[name=pages]:not(:checked)')
							.each((_, e) => {
								e.click(); // check it, and invoke click event so that subgroup can be shown
							});
						// Check any unchecked subpages too
						$body.find('input[name="pages.subpages"]').prop('checked', true);
					},
				});
				form_.append({
					type: 'button',
					label: window.wgULS('全不选', '全不選'),
					event: () => {
						$(result)
							.find('input[name=pages]:checked')
							.each((_, e) => {
								e.click(); // uncheck it, and invoke click event so that subgroup can be hidden
							});
					},
				});

				form_.append({
					type: 'checkbox',
					name: 'pages',
					id: 'tw-dbatch-pages',
					shiftClickSupport: true,
					list: Object.values(Twinkle.batchdelete.pages).map((e) => {
						return e;
					}),
				});
				form_.append({
					type: 'submit',
				});
				const result = form_.render();
				apiobj.params.Window.setContent(result);
				for (const checkbox of Morebits.quickForm.getElements(result, 'pages')) {
					generateArrowLinks(checkbox);
				}
			},
			statelem
		);
		ysarchives_api.params = {
			form,
			Window,
		};
		ysarchives_api.post();
	};
	const generateArrowLinks = (checkbox) => {
		const link = Morebits.htmlNode('a', ' >');
		link.setAttribute('class', 'tw-dbatch-page-link');
		link.setAttribute('href', mw.util.getUrl(checkbox.value));
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
		checkbox.nextElementSibling.append(link);
	};
	Twinkle.batchdelete.generateNewPageList = (form) => {
		// Update the list of checked pages in Twinkle.batchdelete.pages object
		const elements = form.elements.pages;
		if (elements instanceof NodeList) {
			// if there are multiple pages
			for (const element of elements) {
				Twinkle.batchdelete.pages[element.value].checked = element.checked;
			}
		} else if (elements instanceof HTMLInputElement) {
			// if there is just one page
			Twinkle.batchdelete.pages[elements.value].checked = elements.checked;
		}
		return new Morebits.quickForm.element({
			type: 'checkbox',
			name: 'pages',
			id: 'tw-dbatch-pages',
			shiftClickSupport: true,
			list: Object.values(Twinkle.batchdelete.pages).map((e) => {
				return e;
			}),
		}).render();
	};
	Twinkle.batchdelete.deletereasonlist = [
		{
			label: window.wgULS('请选择', '請選擇'),
			value: '',
		},
		{
			label: window.wgULS(
				'G6：原作者提请删除或清空页面，且页面原作者仅有一人',
				'G6：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
			),
			value: window.wgULS(
				'[[LIB:CSD#G6|G6]]：原作者提请删除或清空页面，且页面原作者仅有一人',
				'[[LIB:CSD#G6|G6]]：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
			),
		},
		{
			label: window.wgULS(
				'G9：孤立页面，比如没有主页面的讨论页、指向空页面的重定向等',
				'G9：孤立頁面，比如沒有主頁面的討論頁、指向空頁面的重新導向等'
			),
			value: window.wgULS('[[LIB:CSD#G9|G9]]：孤立页面', '[[LIB:CSD#G9|G9]]：孤立頁面'),
		},
		{
			label: window.wgULS('R1：不能发挥实际作用的重定向。', 'R1：不能發揮實際作用的重定向。'),
			value: window.wgULS(
				'[[LIB:CSD#R1|R1]]：不能发挥实际作用的重定向。',
				'[[LIB:CSD#R1|R1]]：不能發揮實際作用的重定向。'
			),
		},
		{
			label: window.wgULS(
				'R2：名称与导向目标代表事物不一致或不完全一致的重定向。',
				'R2：名稱與導向目標代表事物不一致或不完全一致的重定向。'
			),
			value: window.wgULS(
				'[[LIB:CSD#R2|R2]]：名称与导向目标代表事物不一致或不完全一致的重定向。',
				'[[LIB:CSD#R2|R2]]：名稱與導向目標代表事物不一致或不完全一致的重定向。'
			),
		},
		{
			label: window.wgULS('F4：可被替代的合理使用文件', 'F4：可被替代的合理使用檔案'),
			value: window.wgULS(
				'[[LIB:CSD#F4|F4]]：可被替代的合理使用文件',
				'[[LIB:CSD#F4|F4]]：可被替代的合理使用檔案'
			),
		},
		{
			label: window.wgULS(
				'F5：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
				'F5：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
			),
			value: window.wgULS(
				'[[LIB:CSD#F5|F5]]：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
				'[[LIB:CSD#F5|F5]]：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
			),
		},
		{
			label: window.wgULS(
				'O1：用户请求删除自己的用户页或其子页面',
				'O1：使用者請求刪除自己的使用者頁面或其子頁面'
			),
			value: window.wgULS(
				'[[LIB:CSD#O1|O1]]：用户请求删除自己的[[Help:用户页|用户页]]或其子页面。',
				'[[LIB:CSD#O1|O1]]：使用者請求刪除自己的[[Help:用户页|使用者頁面]]或其子頁面。'
			),
		},
		{
			label: window.wgULS('O2：空的分类（没有条目也没有子分类）', 'O2：空的分類（沒有條目也沒有子分類）'),
			value: window.wgULS(
				'[[LIB:CSD#O2|O2]]：空的分类（没有条目也没有子分类）。',
				'[[LIB:CSD#O2|O2]]：空的分類（沒有條目也沒有子分類）。'
			),
		},
		{
			label: window.wgULS('O3：废弃草稿', 'O3：廢棄草稿'),
			value: window.wgULS('[[LIB:CSD#O3|O3]]：废弃草稿。', '[[LIB:CSD#O3|O3]]：廢棄草稿。'),
		},
	];
	Twinkle.batchdelete.callback.change_common_reason = (e) => {
		if (e.target.form.reason.value !== '') {
			e.target.form.reason.value = Morebits.string.appendPunctuation(e.target.form.reason.value);
		}
		e.target.form.reason.value += e.target.value;
		e.target.value = '';
	};
	Twinkle.batchdelete.callback.toggleSubpages = (e) => {
		const {form} = e.target;
		let newPageList;
		if (e.target.checked) {
			form.delete_subpage_redirects.checked = form.delete_redirects.checked;
			form.delete_subpage_talks.checked = form.delete_talk.checked;
			form.unlink_subpages.checked = form.unlink_page.checked;
			// If lists of subpages were already loaded once, they are
			// available without use of any API calls
			if (subpagesLoaded) {
				for (const el of Twinkle.batchdelete.pages) {
					// Get back the subgroup from subgroup_, where we saved it
					if (el.subgroup === null && el.subgroup_) {
						el.subgroup = el.subgroup_;
					}
				}
				newPageList = Twinkle.batchdelete.generateNewPageList(form);
				$body.find('#tw-dbatch-pages').replaceWith(newPageList);
				for (const checkbox of Morebits.quickForm.getElements(newPageList, 'pages')) {
					generateArrowLinks(checkbox);
				}
				for (const checkbox of Morebits.quickForm.getElements(newPageList, 'pages.subpages')) {
					generateArrowLinks(checkbox);
				}
				return;
			}
			// Proceed with API calls to get list of subpages
			const loadingText = `<strong id="dbatch-subpage-loading">${window.wgULS('加载中...', '載入中...')}</strong>`;
			$(e.target).after(loadingText);
			const pages = $(form.pages)
				.map((_i, el) => {
					return el.value;
				})
				.get();
			const subpageLister = new Morebits.batchOperation();
			subpageLister.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			subpageLister.setPageList(pages);
			subpageLister.run(
				(pageName) => {
					const pageTitle = mw.Title.newFromText(pageName);
					// No need to look for subpages in main/file/mediawiki space
					if ([0, 6, 8].includes(pageTitle.namespace)) {
						subpageLister.workerSuccess();
						return;
					}
					const ysarchives_api = new Morebits.wiki.api(
						window.wgULS('正在获取 ', '正在取得 ') + pageName + window.wgULS(' 的子页面', ' 的子頁面'),
						{
							action: 'query',
							prop: 'revisions|info|imageinfo',
							generator: 'allpages',
							rvprop: 'size',
							inprop: 'protection',
							gapprefix: `${pageTitle.title}/`,
							gapnamespace: pageTitle.namespace,
							gaplimit: 'max',
							pageNameFull: pageName, // Not used by API, but added for access in onSuccess()
						},
						(apiobj) => {
							const xml = apiobj.responseXML;
							const $pages = $(xml).find('page');
							const subpageList = [];
							$pages.each((_index, page) => {
								const $page = $(page);
								const ns = $page.attr('ns');
								const title = $page.attr('title');
								const isRedir = $page.attr('redirect') === '';
								const $editprot = $page.find('pr[type="edit"][level="sysop"]');
								const isProtected = $editprot.length > 0;
								const size = $page.find('rev').attr('size');
								const metadata = [];
								if (isRedir) {
									metadata.push('redirect');
								}
								if (isProtected) {
									metadata.push(
										window.wgULS('全保护，', '全保護，') +
											($editprot.attr('expiry') === 'infinity'
												? window.wgULS('无限期', '無限期')
												: `${new Morebits.date($editprot.attr('expiry')).calendar(
														'utc'
													)} (UTC)`) +
											window.wgULS('过期', '過期')
									);
								}
								if (ns === '6') {
									// mimic what delimages used to show for files
									metadata.push(
										window.wgULS('上传者：', '上傳者：') + $page.find('ii').attr('user'),
										window.wgULS('最后编辑：', '最後編輯：') + $page.find('rev').attr('user')
									);
								} else {
									metadata.push(mw.language.convertNumber(size) + window.wgULS('字节', '位元組'));
								}
								subpageList.push({
									label: title + (metadata.length ? ` (${metadata.join('; ')})` : ''),
									value: title,
									checked: true,
									style: isProtected ? 'color: #f00' : '',
								});
							});
							if (subpageList.length) {
								const pageName_ = apiobj.query.pageNameFull;
								Twinkle.batchdelete.pages[pageName_].subgroup = {
									type: 'checkbox',
									name: 'subpages',
									className: 'dbatch-subpages',
									shiftClickSupport: true,
									list: subpageList,
								};
							}
							subpageLister.workerSuccess();
						},
						null /* statusElement */,
						() => {
							subpageLister.workerFailure();
						}
					);
					ysarchives_api.post();
				},
				() => {
					// List 'em on the interface
					newPageList = Twinkle.batchdelete.generateNewPageList(form);
					$body.find('#tw-dbatch-pages').replaceWith(newPageList);
					for (const checkbox of Morebits.quickForm.getElements(newPageList, 'pages')) {
						generateArrowLinks(checkbox);
					}
					for (const checkbox of Morebits.quickForm.getElements(newPageList, 'pages.subpages')) {
						generateArrowLinks(checkbox);
					}
					subpagesLoaded = true;
					// Remove "Loading... " text
					$body.find('#dbatch-subpage-loading').remove();
				}
			);
		} else if (!e.target.checked) {
			for (const el of Twinkle.batchdelete.pages) {
				if (el.subgroup) {
					// Remove subgroup after saving its contents in subgroup_
					// so that it can be retrieved easily if user decides to
					// delete the subpages again
					el.subgroup_ = el.subgroup;
					el.subgroup = null;
				}
			}
			newPageList = Twinkle.batchdelete.generateNewPageList(form);
			$body.find('#tw-dbatch-pages').replaceWith(newPageList);
			for (const checkbox of Morebits.quickForm.getElements(newPageList, 'pages')) {
				generateArrowLinks(checkbox);
			}
		}
	};
	Twinkle.batchdelete.callback.evaluate = (event) => {
		Morebits.wiki.actionCompleted.notice = window.wgULS('批量删除已完成', '批次刪除已完成');
		const form = event.target;
		const numProtected = $(Morebits.quickForm.getElements(form, 'pages')).filter((_index, element) => {
			return element.checked && element.nextElementSibling.style.color === 'red';
		}).length;
		if (
			numProtected > 0 &&
			!confirm(
				window.wgULS('您正要删除 ', '您正要刪除 ') +
					mw.language.convertNumber(numProtected) +
					window.wgULS(' 个全保护页面，您确定吗？', ' 個全保護頁面，您確定嗎？')
			)
		) {
			return;
		}
		const pages = form.getChecked('pages');
		const subpages = form.getChecked('pages.subpages');
		const reason = form.reason.value;
		const delete_page = form.delete_page.checked;
		let delete_talk;
		let delete_redirects;
		let delete_subpages;
		let delete_subpage_redirects;
		let delete_subpage_talks;
		let unlink_subpages;
		if (delete_page) {
			delete_talk = form.delete_talk.checked;
			delete_redirects = form.delete_redirects.checked;
			delete_subpages = form.delete_subpages.checked;
			if (delete_subpages) {
				delete_subpage_redirects = form.delete_subpage_redirects.checked;
				delete_subpage_talks = form.delete_subpage_talks.checked;
				unlink_subpages = form.unlink_subpages.checked;
			}
		}
		const unlink_page = form.unlink_page.checked;
		const unlink_file = form.unlink_file.checked;
		if (!reason) {
			mw.notify(window.wgULS('您需要给出一个理由', '您需要給出一個理由'), {
				type: 'warn',
				tag: 'twinklebatchdelete',
			});
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		if (!pages) {
			Morebits.status.error(
				window.wgULS('错误', '錯誤'),
				window.wgULS('没有要删除的内容，中止', '沒有要刪除的內容，中止')
			);
			return;
		}
		const pageDeleter = new Morebits.batchOperation(
			delete_page
				? window.wgULS('正在删除页面', '正在刪除頁面')
				: window.wgULS('正在启动要求的任务', '正在啟動要求的任務')
		);
		pageDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
		// we only need the initial status lines if we're deleting the pages in the pages array
		pageDeleter.setOption('preserveIndividualStatusLines', delete_page);
		pageDeleter.setPageList(pages);
		pageDeleter.run(
			(pageName) => {
				const params = {
					page: pageName,
					delete_page,
					delete_talk,
					delete_redirects,
					unlink_page,
					unlink_file: unlink_file && new RegExp(`^${Morebits.namespaceRegex(6)}:`, 'i').test(pageName),
					reason,
					pageDeleter,
				};
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					window.wgULS('正在删除页面 ', '正在刪除頁面 ') + pageName
				);
				ysarchives_page.setCallbackParameters(params);
				if (delete_page) {
					ysarchives_page.setEditSummary(`${reason}（批量）`);
					ysarchives_page.setChangeTags(Twinkle.changeTags);
					ysarchives_page.suppressProtectWarning();
					ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
				} else {
					Twinkle.batchdelete.callbacks.doExtras(ysarchives_page);
				}
			},
			() => {
				if (delete_subpages) {
					const subpageDeleter = new Morebits.batchOperation(
						window.wgULS('正在删除子页面', '正在刪除子頁面')
					);
					subpageDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
					subpageDeleter.setOption('preserveIndividualStatusLines', true);
					subpageDeleter.setPageList(subpages);
					subpageDeleter.run((pageName) => {
						const params = {
							page: pageName,
							delete_page: true,
							delete_talk: delete_subpage_talks,
							delete_redirects: delete_subpage_redirects,
							unlink_page: unlink_subpages,
							unlink_file: false,
							reason,
							pageDeleter: subpageDeleter,
						};
						const ysarchives_page = new Morebits.wiki.page(
							pageName,
							window.wgULS('正在删除子页面 ', '正在刪除子頁面 ') + pageName
						);
						ysarchives_page.setCallbackParameters(params);
						ysarchives_page.setEditSummary(`${reason}（批量）`);
						ysarchives_page.setChangeTags(Twinkle.changeTags);
						ysarchives_page.suppressProtectWarning();
						ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
					});
				}
			}
		);
	};
	Twinkle.batchdelete.callbacks = {
		// this stupid parameter name is a temporary thing until I implement an overhaul
		// of Morebits.wiki.* callback parameters
		doExtras: (thingWithParameters) => {
			const params = thingWithParameters.parent
				? thingWithParameters.parent.getCallbackParameters()
				: thingWithParameters.getCallbackParameters();
			// the initial batch operation's job is to delete the page, and that has
			// succeeded by now
			params.pageDeleter.workerSuccess(thingWithParameters);
			let query;
			let ysarchives_api;
			if (params.unlink_page) {
				Twinkle.batchdelete.unlinkCache = {};
				query = {
					action: 'query',
					list: 'backlinks',
					blfilterredir: 'nonredirects',
					blnamespace: [0],
					bltitle: params.page,
					bllimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};

				ysarchives_api = new Morebits.wiki.api(
					window.wgULS('正在获取链入', '正在取得連入'),
					query,
					Twinkle.batchdelete.callbacks.unlinkBacklinksMain
				);
				ysarchives_api.params = params;
				ysarchives_api.post();
			}
			if (params.unlink_file) {
				query = {
					action: 'query',
					list: 'imageusage',
					iutitle: params.page,
					iulimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};

				ysarchives_api = new Morebits.wiki.api(
					window.wgULS('正在获取文件链入', '正在取得檔案連入'),
					query,
					Twinkle.batchdelete.callbacks.unlinkImageInstancesMain
				);
				ysarchives_api.params = params;
				ysarchives_api.post();
			}
			if (params.delete_page) {
				if (params.delete_redirects) {
					query = {
						action: 'query',
						titles: params.page,
						prop: 'redirects',
						rdlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
					};

					ysarchives_api = new Morebits.wiki.api(
						window.wgULS('正在获取重定向', '正在取得重新導向'),
						query,
						Twinkle.batchdelete.callbacks.deleteRedirectsMain
					);
					ysarchives_api.params = params;
					ysarchives_api.post();
				}
				if (params.delete_talk) {
					const pageTitle = mw.Title.newFromText(params.page);
					if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
						pageTitle.namespace++; // now pageTitle is the talk page title!
						query = {
							action: 'query',
							titles: pageTitle.toText(),
						};
						ysarchives_api = new Morebits.wiki.api(
							window.wgULS('正在检查讨论页面是否存在', '正在檢查討論頁面是否存在'),
							query,
							Twinkle.batchdelete.callbacks.deleteTalk
						);
						ysarchives_api.params = params;
						ysarchives_api.params.talkPage = pageTitle.toText();
						ysarchives_api.post();
					}
				}
			}
		},
		deleteRedirectsMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('rd')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const redirectDeleter = new Morebits.batchOperation(
				window.wgULS('正在删除到 ', '正在刪除到 ') +
					apiobj.params.page +
					window.wgULS(' 的重定向', ' 的重新導向')
			);
			redirectDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			redirectDeleter.setPageList(pages);
			redirectDeleter.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					window.wgULS('正在删除 ', '正在刪除 ') + pageName
				);
				ysarchives_page.setEditSummary(
					`[[LIB:CSD#G9|G9]]: ${window.wgULS('指向已删页面“', '指向已刪頁面「')}${apiobj.params.page}${window.wgULS(
						'”的重定向',
						'」的重新導向'
					)}`
				);
				ysarchives_page.setChangeTags(Twinkle.changeTags);
				ysarchives_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
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
					apiobj.params.page +
					window.wgULS(' 的讨论页', ' 的討論頁')
			);
			page.setEditSummary(
				`[[LIB:CSD#G9|G9]]: ${window.wgULS('已删页面“', '已刪頁面「')}${apiobj.params.page}${window.wgULS(
					'”的[[Help:讨论页|讨论页]]',
					'」的[[Help:討論頁|討論頁]]'
				)}`
			);
			page.setChangeTags(Twinkle.changeTags);
			page.deletePage();
		},
		unlinkBacklinksMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('bl')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const unlinker = new Morebits.batchOperation(
				`正在取消到 ${apiobj.params.page}${window.wgULS(' 的链入', ' 的連入')}`
			);
			unlinker.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			unlinker.setPageList(pages);
			unlinker.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					`正在取消 ${pageName}${window.wgULS(' 上的链入', ' 上的連入')}`
				);
				const params = {
					...apiobj.params,
				};
				params.title = pageName;
				params.unlinker = unlinker;
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkBacklinks);
			});
		},
		unlinkBacklinks: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			if (!pageobj.exists()) {
				// we probably just deleted it, as a recursive backlink
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			let text;
			if (params.title in Twinkle.batchdelete.unlinkCache) {
				text = Twinkle.batchdelete.unlinkCache[params.title];
			} else {
				text = pageobj.getPageText();
			}
			const old_text = text;
			const ysarchives_page = new Morebits.wikitext.page(text);
			text = ysarchives_page.removeLink(params.page).getText();
			Twinkle.batchdelete.unlinkCache[params.title] = text;
			if (text === old_text) {
				// Nothing to do, return
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			pageobj.setEditSummary(
				window.wgULS('取消到已删页面', '取消到已刪頁面') + params.page + window.wgULS('的链入', '的連入')
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setPageText(text);
			pageobj.setCreateOption('nocreate');
			pageobj.setMaxConflictRetries(10);
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
		unlinkImageInstancesMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('iu')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const unlinker = new Morebits.batchOperation(
				`正在取消到 ${apiobj.params.page}${window.wgULS(' 的链入', ' 的連入')}`
			);
			unlinker.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			unlinker.setPageList(pages);
			unlinker.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					`取消 ${pageName}${window.wgULS(' 的文件使用', ' 的檔案使用')}`
				);
				const params = {
					...apiobj.params,
				};
				params.title = pageName;
				params.unlinker = unlinker;
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkImageInstances);
			});
		},
		unlinkImageInstances: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			if (!pageobj.exists()) {
				// we probably just deleted it, as a recursive backlink
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			const image = params.page.replace(new RegExp(`^${Morebits.namespaceRegex(6)}:`), '');
			let text;
			if (params.title in Twinkle.batchdelete.unlinkCache) {
				text = Twinkle.batchdelete.unlinkCache[params.title];
			} else {
				text = pageobj.getPageText();
			}
			const old_text = text;
			const ysarchives_page = new Morebits.wikitext.page(text);
			text = ysarchives_page
				.commentOutImage(image, window.wgULS('因文件已删，故注解', '因檔案已刪，故註解'))
				.getText();
			Twinkle.batchdelete.unlinkCache[params.title] = text;
			if (text === old_text) {
				pageobj
					.getStatusElement()
					.error(
						`在 ${pageobj.getPageName()} 上取消 ${image}${window.wgULS(' 的文件使用失败', ' 的檔案使用失敗')}`
					);
				params.unlinker.workerFailure(pageobj);
				return;
			}
			pageobj.setEditSummary(
				window.wgULS('取消使用已被删除文件', '取消使用已被刪除檔案') +
					image +
					window.wgULS('，因为：', '，因為：') +
					params.reason
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setPageText(text);
			pageobj.setCreateOption('nocreate');
			pageobj.setMaxConflictRetries(10);
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.batchdelete, 'batchdelete');
})(jQuery);
