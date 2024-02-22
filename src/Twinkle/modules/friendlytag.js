// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - friendlytag.js */
(function friendlytag($) {
	const $body = $('body');
	/**
	 * friendlytag.js: Tag module
	 * Mode of invocation: Tab ("Tag")
	 * Active on: Existing articles and drafts; file pages with a corresponding file
	 * which is local (not on Share); all redirects
	 */
	Twinkle.tag = () => {
		// redirect tagging
		if (Morebits.isPageRedirect()) {
			Twinkle.tag.mode = window.wgULS('重定向', '重新導向');
			Twinkle.tag.modeEn = 'redirect';
			Twinkle.addPortletLink(
				Twinkle.tag.callback,
				window.wgULS('标记', '標記'),
				'friendly-tag',
				window.wgULS('标记重定向', '標記重新導向')
			);
			// file tagging
		} else if (
			mw.config.get('wgNamespaceNumber') === 6 &&
			!document.querySelector('#mw-sharedupload') &&
			document.querySelector('#mw-imagepage-section-filehistory')
		) {
			Twinkle.tag.mode = window.wgULS('文件', '檔案');
			Twinkle.tag.modeEn = 'file';
			Twinkle.addPortletLink(
				Twinkle.tag.callback,
				window.wgULS('标记', '標記'),
				'friendly-tag',
				window.wgULS('标记文件', '標記檔案')
			);
			// article/draft tagging
		} else if (
			([0, 302].includes(mw.config.get('wgNamespaceNumber')) && mw.config.get('wgCurRevisionId')) ||
			Morebits.pageNameNorm === Twinkle.getPref('sandboxPage')
		) {
			Twinkle.tag.mode = window.wgULS('条目', '條目');
			Twinkle.tag.modeEn = 'article';
			// Can't remove tags when not viewing current version
			Twinkle.tag.canRemove =
				mw.config.get('wgCurRevisionId') === mw.config.get('wgRevisionId') &&
				// Disabled on latest diff because the diff slider could be used to slide
				// away from the latest diff without causing the script to reload
				!mw.config.get('wgDiffNewId');
			Twinkle.addPortletLink(
				Twinkle.tag.callback,
				window.wgULS('标记', '標記'),
				'friendly-tag',
				window.wgULS('标记条目', '標記條目')
			);
		}
	};
	Twinkle.tag.checkedTags = [];
	Twinkle.tag.callback = () => {
		const Window = new Morebits.simpleWindow(630, Twinkle.tag.modeEn === 'article' ? 500 : 400);
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('标记设置', '標記設定'), 'H:TW/PREF#tag');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#tag');
		const form = new Morebits.quickForm(Twinkle.tag.callback.evaluate);
		form.append({
			type: 'input',
			label: window.wgULS('筛选标记列表：', '篩選標記列表：'),
			name: 'quickfilter',
			size: '30',
			event: function event() {
				// flush the DOM of all existing underline spans
				$allCheckboxDivs.find('.search-hit').each((_i, e) => {
					const label_element = e.parentElement;
					// This would convert <label>Hello <span class=search-hit>wo</span>rld</label>
					// to <label>Hello world</label>
					label_element.innerHTML = label_element.textContent;
				});
				if (this.value) {
					$allCheckboxDivs.hide();
					$allHeaders.hide();
					const searchString = this.value;
					const searchRegex = new RegExp(mw.util.escapeRegExp(searchString), 'i');
					$allCheckboxDivs.find('label').each((_index, element) => {
						const label_text = element.textContent;
						const searchHit = searchRegex.exec(label_text);
						if (searchHit) {
							const range = document.createRange();
							const [textnode] = element.childNodes;
							range.selectNodeContents(textnode);
							range.setStart(textnode, searchHit.index);
							range.setEnd(textnode, searchHit.index + searchString.length);
							const [underline_span] = $('<span>')
								.addClass('search-hit')
								.css('text-decoration', 'underline');
							range.surroundContents(underline_span);
							element.parentElement.style.display = 'block'; // show
						}
					});
				} else {
					$allCheckboxDivs.show();
					$allHeaders.show();
				}
			},
		});
		switch (Twinkle.tag.modeEn) {
			case 'article':
				Window.setTitle(window.wgULS('条目维护标记', '條目維護標記'));
				// Build sorting and lookup object flatObject, which is always
				// needed but also used to generate the alphabetical list
				// Would be infinitely better with Object.values
				Twinkle.tag.article.flatObject = {};
				for (const group of Twinkle.tag.article.tagList) {
					for (const subgroup of group.value) {
						if (subgroup.value) {
							for (const item of subgroup.value) {
								Twinkle.tag.article.flatObject[item.tag] = {
									description: item.description,
									excludeMI: !!item.excludeMI,
								};
							}
						} else {
							Twinkle.tag.article.flatObject[subgroup.tag] = {
								description: subgroup.description,
								excludeMI: !!subgroup.excludeMI,
							};
						}
					}
				}
				form.append({
					type: 'select',
					name: 'sortorder',
					label: window.wgULS('查看列表：', '檢視列表：'),
					tooltip: window.wgULS(
						'您可以在Twinkle参数设置（H:TW/PREF）中更改此项。',
						'您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。'
					),
					event: Twinkle.tag.updateSortOrder,
					list: [
						{
							type: 'option',
							value: 'cat',
							label: window.wgULS('按类型', '按類別'),
							selected: Twinkle.getPref('tagArticleSortOrder') === 'cat',
						},
						{
							type: 'option',
							value: 'alpha',
							label: '按字母',
							selected: Twinkle.getPref('tagArticleSortOrder') === 'alpha',
						},
					],
				});
				if (!Twinkle.tag.canRemove) {
					const divElement = document.createElement('div');
					divElement.innerHTML = window.wgULS(
						'要移除现有维护标记，请从当前条目版本中打开“标记”菜单',
						'要移除現有維護標記，請從目前條目版本中打開「標記」選單'
					);
					form.append({
						type: 'div',
						name: 'untagnotice',
						label: divElement,
					});
				}
				form.append({
					type: 'div',
					id: 'tagWorkArea',
					className: 'morebits-scrollbox',
					style: 'max-height: 28em',
				});
				form.append({
					type: 'checkbox',
					list: [
						{
							label: window.wgULS(
								'如可能，合并入{{multiple issues}}',
								'如可能，合併入{{multiple issues}}'
							),
							value: 'group',
							name: 'group',
							tooltip: window.wgULS(
								'若加入{{multiple issues}}支持的三个以上的模板，所有支持的模板都会被合并入{{multiple issues}}模板中。',
								'若加入{{multiple issues}}支援的三個以上的模板，所有支援的模板都會被合併入{{multiple issues}}模板中。'
							),
							checked: Twinkle.getPref('groupByDefault'),
						},
					],
				});
				form.append({
					type: 'input',
					label: '理由：',
					name: 'reason',
					tooltip: window.wgULS(
						'附加于编辑摘要的可选理由，例如指出条目内容的哪些部分有问题或移除模板的理由，但若理由很长则应该发表在讨论页。',
						'附加於編輯摘要的可選理由，例如指出條目內容的哪些部分有問題或移除模板的理由，但若理由很長則應該發表在討論頁。'
					),
					size: '80',
				});
				break;
			case 'file':
				Window.setTitle(window.wgULS('文件维护标记', '檔案維護標記'));
				for (const group of Twinkle.tag.fileList) {
					if (group.buildFilename) {
						for (const el of group.value) {
							el.subgroup = {
								type: 'input',
								label: window.wgULS('替换的文件：', '替換的檔案：'),
								tooltip: window.wgULS(
									'输入替换此文件的文件名称（必填）',
									'輸入替換此檔案的檔案名稱（必填）'
								),
								name: `${el.value.replace(/ /g, '_')}File`,
							};
						}
					}
					form.append({
						type: 'header',
						label: group.key,
					});
					form.append({
						type: 'checkbox',
						name: 'tags',
						list: group.value,
					});
				}
				if (Twinkle.getPref('customFileTagList').length) {
					form.append({
						type: 'header',
						label: window.wgULS('自定义模板', '自訂模板'),
					});
					form.append({
						type: 'checkbox',
						name: 'tags',
						list: Twinkle.getPref('customFileTagList'),
					});
				}
				break;
			case 'redirect': {
				Window.setTitle(window.wgULS('重定向标记', '重新導向標記'));
				const i = 1;
				for (const group of Twinkle.tag.redirectList) {
					form.append({
						type: 'header',
						id: `tagHeader${i}`,
						label: group.key,
					});
					form.append({
						type: 'checkbox',
						name: 'tags',
						list: group.value.map((item) => {
							return {
								value: item.tag,
								label: `{{${item.tag}}}：${item.description}`,
								subgroup: item.subgroup,
							};
						}),
					});
				}
				if (Twinkle.getPref('customRedirectTagList').length) {
					form.append({
						type: 'header',
						label: window.wgULS('自定义模板', '自訂模板'),
					});
					form.append({
						type: 'checkbox',
						name: 'tags',
						list: Twinkle.getPref('customRedirectTagList'),
					});
				}
				break;
			}
			default:
				mw.notify(`Twinkle.tag：未知模式 ${Twinkle.tag.mode}`, {
					type: 'warn',
					tag: 'friendlytag',
				});
				break;
		}
		if (document.querySelectorAll('.patrollink').length) {
			form.append({
				type: 'checkbox',
				list: [
					{
						label: window.wgULS('标记页面为已巡查', '標記頁面為已巡查'),
						value: 'patrol',
						name: 'patrol',
						checked: Twinkle.getPref('markTaggedPagesAsPatrolled'),
					},
				],
			});
		}
		form.append({
			type: 'submit',
			className: 'tw-tag-submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		// for quick filter:
		$allCheckboxDivs = $(result).find('[name$=tags]').parent();
		$allHeaders = $(result).find('h5');
		result.quickfilter.focus(); // place cursor in the quick filter field as soon as window is opened
		result.quickfilter.autocomplete = 'off'; // disable browser suggestions
		result.quickfilter.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				// prevent enter key from accidentally submitting the form
				e.preventDefault();
				return false;
			}
		});
		if (Twinkle.tag.modeEn === 'article') {
			Twinkle.tag.alreadyPresentTags = [];
			if (Twinkle.tag.canRemove) {
				// Look for existing maintenance tags in the lead section and put them in array
				// All tags are HTML table elements that are direct children of .mw-parser-output,
				// except when they are within {{multiple issues}}
				$body
					.find('.mw-parser-output')
					.children()
					.each((_i, e) => {
						// break out on encountering the first heading, which means we are no
						// longer in the lead section
						if (e.tagName === 'H2') {
							return false;
						}
						// The ability to remove tags depends on the template's {{ambox}} |name=
						// parameter bearing the template's correct name (preferably) or a name that at
						// least redirects to the actual name
						// All tags have their first class name as "box-" + template name
						if (e.className.indexOf('box-') === 0) {
							if (e.classList[0] === 'box-问题条目') {
								$(e)
									.find('.ambox')
									.each((_index, element) => {
										if (element.classList[0].indexOf('box-') === 0) {
											const boxTag = element.classList[0].slice('box-'.length).replace(/_/g, ' ');
											Twinkle.tag.alreadyPresentTags.push(boxTag);
										}
									});
								return true; // continue
							}

							const tag = e.classList[0].slice('box-'.length).replace(/_/g, ' ');
							Twinkle.tag.alreadyPresentTags.push(tag);
						}
					});
				// {{Uncategorized}} and {{Improve categories}} are usually placed at the end
				if ($body.find('.box-Uncategorized').length) {
					Twinkle.tag.alreadyPresentTags.push('Uncategorized');
				}
				if ($body.find('.box-Improve_categories').length) {
					Twinkle.tag.alreadyPresentTags.push('Improve categories');
				}
			}
			// Add status text node after Submit button
			const statusNode = document.createElement('span');
			statusNode.style.fontSize = '90%';
			statusNode.id = 'tw-tag-status';
			Twinkle.tag.status = {
				// initial state; defined like this because these need to be available for reference
				// in the click event handler
				numAdded: 0,
				numRemoved: 0,
			};
			$body.find('button.tw-tag-submit').after(statusNode);
			// fake a change event on the sort dropdown, to initialize the tag list
			const evt = document.createEvent('Event');
			evt.initEvent('change', true, true);
			result.sortorder.dispatchEvent(evt);
		} else {
			// Redirects and files: Add a link to each template's description page
			for (const checkbox of Morebits.quickForm.getElements(result, 'tags')) {
				generateLinks(checkbox);
			}
		}
	};
	// $allCheckboxDivs and $allHeaders are defined globally, rather than in the
	// quickfilter event function, to avoid having to recompute them on every keydown
	let $allCheckboxDivs;
	let $allHeaders;
	Twinkle.tag.updateSortOrder = (e) => {
		const {form} = e.target;
		const sortorder = e.target.value;
		Twinkle.tag.checkedTags = form.getChecked('tags');
		const container = new Morebits.quickForm.element({
			type: 'fragment',
		});
		// function to generate a checkbox, with appropriate subgroup if needed
		const makeCheckbox = (tag, description) => {
			const checkbox = {
				value: tag,
				label: `{{${tag}}}: ${description}`,
			};
			if (Twinkle.tag.checkedTags.includes(tag)) {
				checkbox.checked = true;
			}
			switch (tag) {
				case 'Expert needed':
					checkbox.subgroup = [
						{
							name: 'expert',
							type: 'input',
							label: window.wgULS('哪个领域的专家（必填）：', '哪個領域的專家（必填）：'),
							tooltip: window.wgULS(
								'必填，可参考 Category:需要专业人士关注的页面 使用现存的分类。',
								'必填，可參考 Category:需要專業人士關注的頁面 使用現存的分類。'
							),
						},
						{
							name: 'expert2',
							type: 'input',
							label: window.wgULS('哪个领域的专家：', '哪個領域的專家：'),
							tooltip: window.wgULS(
								'可选，可参考 Category:需要专业人士关注的页面 使用现存的分类。',
								'可選，可參考 Category:需要專業人士關注的頁面 使用現存的分類。'
							),
						},
						{
							name: 'expert3',
							type: 'input',
							label: window.wgULS('哪个领域的专家：', '哪個領域的專家：'),
							tooltip: window.wgULS(
								'可选，可参考 Category:需要专业人士关注的页面 使用现存的分类。',
								'可選，可參考 Category:需要專業人士關注的頁面 使用現存的分類。'
							),
						},
					];
					break;
				case 'Merge':
				case 'Merge from':
				case 'Merge to': {
					let otherTagName = 'Merge';
					switch (tag) {
						case 'Merge from':
							otherTagName = 'Merge to';
							break;
						case 'Merge to':
							otherTagName = 'Merge from';
							break;
						// no default
					}

					checkbox.subgroup = [
						{
							name: 'mergeTarget',
							type: 'input',
							label: window.wgULS('其他条目：', '其他條目：'),
							tooltip: window.wgULS(
								'如指定多个条目，请用管道符分隔：条目甲|条目乙',
								'如指定多個條目，請用管道符分隔：條目甲|條目乙'
							),
						},
						{
							type: 'checkbox',
							list: [
								{
									name: 'mergeTagOther',
									label: `用{{${otherTagName}${window.wgULS('}}标记其他条目', '}}標記其他條目')}`,
									checked: true,
									tooltip: window.wgULS(
										'仅在只输入了一个条目名时可用',
										'僅在只輸入了一個條目名時可用'
									),
								},
							],
						},
					];
					if (mw.config.get('wgNamespaceNumber') === 0) {
						checkbox.subgroup.push({
							name: 'mergeReason',
							type: 'textarea',
							label: window.wgULS(
								`合并理由（会被贴上${tag === 'Merge to' ? '其他' : '这'}条目的讨论页）：`,
								`合併理由（會被貼上${tag === 'Merge to' ? '其他' : '這'}條目的討論頁）：`
							),
							tooltip: window.wgULS(
								'可选，但强烈推荐。如不需要请留空。仅在只输入了一个条目名时可用。',
								'可選，但強烈推薦。如不需要請留空。僅在只輸入了一個條目名時可用。'
							),
						});
					}
					break;
				}
				case 'Missing information':
					checkbox.subgroup = {
						name: 'missingInformation',
						type: 'input',
						label: window.wgULS('缺少的内容（必填）：', '缺少的內容（必填）：'),
						tooltip: window.wgULS('必填，显示为“缺少有关……的信息。”', '必填，顯示為「缺少有關……的資訊。」'),
					};
					break;
				case 'Notability':
					checkbox.subgroup = {
						name: 'notability',
						type: 'select',
						list: [
							{
								label: `{{Notability}}：${window.wgULS('通用的关注度指引', '通用的關注度指引')}`,
								value: 'none',
							},
							{
								label: `{{Notability|Astro}}：${window.wgULS('天体', '天體')}`,
								value: 'Astro',
							},
							{
								label: `{{Notability|Biographies}}：${window.wgULS('人物传记', '人物傳記')}`,
								value: 'Biographies',
							},
							{
								label: `{{Notability|Book}}：${window.wgULS('书籍', '書籍')}`,
								value: 'Book',
							},
							{
								label: `{{Notability|Cyclone}}：${window.wgULS('气旋', '氣旋')}`,
								value: 'Cyclone',
							},
							{
								label: `{{Notability|Fiction}}：${window.wgULS('虚构事物', '虛構事物')}`,
								value: 'Fiction',
							},
							{
								label: `{{Notability|Geographic}}：${window.wgULS('地理特征', '地理特徵')}`,
								value: 'Geographic',
							},
							{
								label: `{{Notability|Geometry}}：${window.wgULS('几何图形', '幾何圖形')}`,
								value: 'Geometry',
							},
							{
								label: `{{Notability|Invention}}：${window.wgULS('发明、研究', '發明、研究')}`,
								value: 'Invention',
							},
							{
								label: `{{Notability|Music}}：${window.wgULS('音乐', '音樂')}`,
								value: 'Music',
							},
							{
								label: `{{Notability|Numbers}}：${window.wgULS('数字', '數字')}`,
								value: 'Numbers',
							},
							{
								label: `{{Notability|Organizations}}：${window.wgULS('组织', '組織')}`,
								value: 'Organizations',
							},
							{
								label: `{{Notability|Property}}：${window.wgULS('性质表', '性質表')}`,
								value: 'Property',
							},
							{
								label: '{{Notability|Traffic}}：交通',
								value: 'Traffic',
							},
							{
								label: `{{Notability|Web}}：${window.wgULS('网站、网络内容', '網站、網路內容')}（非正式指引）`,
								value: 'Web',
							},
						],
					};
					break;
				case 'Requested move':
					checkbox.subgroup = [
						{
							name: 'moveTarget',
							type: 'input',
							label: window.wgULS('新名称：', '新名稱：'),
						},
						{
							name: 'moveReason',
							type: 'textarea',
							label: window.wgULS(
								'移动理由（会被粘贴该条目的讨论页）：',
								'移動理由（會被貼上該條目的討論頁）：'
							),
							tooltip: window.wgULS(
								'可选，但强烈推荐。如不需要请留空。',
								'可選，但強烈推薦。如不需要請留空。'
							),
						},
					];
					break;
				case 'Split':
					checkbox.subgroup = [
						{
							name: 'target1',
							type: 'input',
							label: window.wgULS('页面名1：', '頁面名1：'),
							tooltip: window.wgULS('可选。', '可選。'),
						},
						{
							name: 'target2',
							type: 'input',
							label: window.wgULS('页面名2：', '頁面名2：'),
							tooltip: window.wgULS('可选。', '可選。'),
						},
						{
							name: 'target3',
							type: 'input',
							label: window.wgULS('页面名3：', '頁面名3：'),
							tooltip: window.wgULS('可选。', '可選。'),
						},
					];
					break;
				case 'Cleanup':
					checkbox.subgroup = [
						{
							name: 'cleanupReason',
							type: 'input',
							label: '需要清理的理由',
							tooltip: window.wgULS(
								'可选，但强烈推荐。如不需要请留空。',
								'可選，但強烈推薦。如不需要請留空。'
							),
						},
					];
					break;
				default:
					break;
			}
			return checkbox;
		};
		const makeCheckboxesForAlreadyPresentTags = () => {
			container.append({
				type: 'header',
				id: 'tagHeader0',
				label: window.wgULS('已放置的维护标记', '已放置的維護標記'),
			});
			const subdiv = container.append({
				type: 'div',
				id: 'tagSubdiv0',
			});
			const checkboxes = [];
			const unCheckedTags = e.target.form.getUnchecked('existingTags');
			for (const tag of Twinkle.tag.alreadyPresentTags) {
				const checkbox = {
					value: tag,
					label: `{{${tag}}}${
						Twinkle.tag.article.flatObject[tag]
							? `: ${Twinkle.tag.article.flatObject[tag].description}`
							: ''
					}`,
					checked: !unCheckedTags.includes(tag),
				};
				checkboxes.push(checkbox);
			}
			subdiv.append({
				type: 'checkbox',
				name: 'existingTags',
				list: checkboxes,
			});
		};
		if (sortorder === 'cat') {
			// categorical sort order
			// function to iterate through the tags and create a checkbox for each one
			const doCategoryCheckboxes = (subdiv, subgroup) => {
				const checkboxes = [];
				for (const item of subgroup) {
					if (!Twinkle.tag.alreadyPresentTags.includes(item.tag)) {
						checkboxes.push(makeCheckbox(item.tag, item.description));
					}
				}
				subdiv.append({
					type: 'checkbox',
					name: 'tags',
					list: checkboxes,
				});
			};
			if (Twinkle.tag.alreadyPresentTags.length > 0) {
				makeCheckboxesForAlreadyPresentTags();
			}
			let i = 1;
			// go through each category and sub-category and append lists of checkboxes
			for (const group of Twinkle.tag.article.tagList) {
				container.append({
					type: 'header',
					id: `tagHeader${i}`,
					label: group.key,
				});
				const subdiv = container.append({
					type: 'div',
					id: `tagSubdiv${i++}`,
				});
				if (group.value[0].tag) {
					doCategoryCheckboxes(subdiv, group.value);
				} else {
					for (const subgroup of group.value) {
						subdiv.append({
							type: 'div',
							label: [Morebits.htmlNode('b', subgroup.key)],
						});
						doCategoryCheckboxes(subdiv, subgroup.value);
					}
				}
			}
		} else {
			// alphabetical sort order
			if (Twinkle.tag.alreadyPresentTags.length > 0) {
				makeCheckboxesForAlreadyPresentTags();
				container.append({
					type: 'header',
					id: 'tagHeader1',
					label: window.wgULS('可用的维护标记', '可用的維護標記'),
				});
			}
			// Avoid repeatedly resorting
			Twinkle.tag.article.alphabeticalList ||= Object.keys(Twinkle.tag.article.flatObject).sort();
			const checkboxes = [];
			for (const tag of Twinkle.tag.article.alphabeticalList) {
				if (!Twinkle.tag.alreadyPresentTags.includes(tag)) {
					checkboxes.push(makeCheckbox(tag, Twinkle.tag.article.flatObject[tag].description));
				}
			}
			container.append({
				type: 'checkbox',
				name: 'tags',
				list: checkboxes,
			});
		}
		// append any custom tags
		if (Twinkle.getPref('customTagList').length) {
			container.append({
				type: 'header',
				label: window.wgULS('自定义模板', '自訂模板'),
			});
			container.append({
				type: 'checkbox',
				name: 'tags',
				list: Twinkle.getPref('customTagList').map((el) => {
					el.checked = Twinkle.tag.checkedTags.includes(el.value);
					return el;
				}),
			});
		}
		const $workarea = $(form).find('#tagWorkArea');
		const rendered = container.render();
		$workarea.empty().append(rendered);
		// for quick filter:
		$allCheckboxDivs = $workarea.find('[name=tags], [name=existingTags]').parent();
		$allHeaders = $workarea.find('h5, .quickformDescription');
		form.quickfilter.value = ''; // clear search, because the search results are not preserved over mode change
		form.quickfilter.focus();
		// style adjustments
		$workarea.find('h5').css({
			'font-size': '110%',
		});
		$workarea.find('h5:not(:first-child)').css({
			'margin-top': '1em',
		});
		$workarea.find('div').filter(':has(span.quickformDescription)').css({
			'margin-top': '0.4em',
		});
		for (const checkbox of Morebits.quickForm.getElements(form, 'existingTags')) {
			generateLinks(checkbox);
		}
		for (const checkbox of Morebits.quickForm.getElements(form, 'tags')) {
			generateLinks(checkbox);
		}
		// tally tags added/removed, update statusNode text
		const statusNode = document.querySelector('#tw-tag-status');
		$body.find('[name=tags], [name=existingTags]').on('click', function () {
			if (this.name === 'tags') {
				Twinkle.tag.status.numAdded += this.checked ? 1 : -1;
			} else if (this.name === 'existingTags') {
				Twinkle.tag.status.numRemoved += this.checked ? -1 : 1;
			}
			const firstPart = `加入${Twinkle.tag.status.numAdded}${window.wgULS('个标记', '個標記')}`;
			const secondPart = `移除${Twinkle.tag.status.numRemoved}${window.wgULS('个标记', '個標記')}`;
			statusNode.textContent =
				(Twinkle.tag.status.numAdded ? `  ${firstPart}` : '') +
				(Twinkle.tag.status.numRemoved ? (Twinkle.tag.status.numAdded ? '；' : '  ') + secondPart : '');
		});
	};
	/**
	 * Adds a link to each template's description page
	 *
	 * @param {Morebits.quickForm.element} checkbox  associated with the template
	 */
	const generateLinks = (checkbox) => {
		const link = Morebits.htmlNode('a', '>');
		link.setAttribute('class', 'tag-template-link');
		const tagname = checkbox.values;
		link.setAttribute(
			'href',
			mw.util.getUrl(
				(tagname.includes(':') ? '' : 'Template:') +
					(tagname.includes('|') ? tagname.slice(0, tagname.indexOf('|')) : tagname)
			)
		);
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
		$(checkbox).parent().append(['\u00A0', link]);
	};
	// Tags for ARTICLES start here
	Twinkle.tag.article = {};
	// Tags arranged by category; will be used to generate the alphabetical list,
	// but tags should be in alphabetical order within the categories
	// excludeMI: true indicate a tag that *does not* work inside {{multiple issues}}
	// Add new categories with discretion - the list is long enough as is!
	Twinkle.tag.article.tagList = [
		{
			key: window.wgULS('清理和维护模板', '清理和維護模板'),
			value: [
				{
					key: window.wgULS('常规清理', '常規清理'),
					value: [
						{
							tag: 'Cleanup',
							description: window.wgULS(
								'可能需要进行清理，以符合有兽档案馆的质量标准',
								'可能需要進行清理，以符合有獸檔案館的質量標準'
							),
						},
						{
							tag: 'Cleanup rewrite',
							description: window.wgULS(
								'不符合有兽档案馆的质量标准，需要完全重写',
								'不符合有獸檔案館的質量標準，需要完全重寫'
							),
						},
						{
							tag: 'Cleanup-jargon',
							description: window.wgULS(
								'包含过多行话或专业术语，可能需要简化或提出进一步解释',
								'包含過多行話或專業術語，可能需要簡化或提出進一步解釋'
							),
						},
						{
							tag: 'Copy edit',
							description: window.wgULS(
								'需要编修，以确保文法、用词、语气、格式、标点等使用恰当',
								'需要編修，以確保文法、用詞、語氣、格式、標點等使用恰當'
							),
						},
					],
				},
				{
					key: window.wgULS('可能多余的内容', '可能多餘的內容'),
					value: [
						{
							tag: 'Copypaste',
							description: window.wgULS(
								'内容可能是从某个来源处拷贝后粘贴',
								'內容可能是從某個來源處拷貝後貼上'
							),
						},
						{
							tag: 'External links',
							description: window.wgULS(
								'使用外部链接的方式可能不符合有兽档案馆的条例',
								'使用外部連結的方式可能不符合有獸檔案館的條例'
							),
						},
						{
							tag: 'Non-free',
							description: window.wgULS(
								'可能过多或不当地使用了受著作权保护的文字、图像或多媒体文件',
								'可能過多或不當地使用了受版權保護的文字、圖像或多媒體檔案'
							),
						},
					],
				},
				{
					key: window.wgULS('结构和导言', '結構和導言'),
					value: [
						{
							tag: 'Lead too long',
							description: window.wgULS('导言部分也许过于冗长', '導言部分也許過於冗長'),
						},
						{
							tag: 'Lead too short',
							description: window.wgULS('导言部分也许不足以概括其内容', '導言部分也許不足以概括其內容'),
						},
						{
							tag: 'Very long',
							description: window.wgULS('可能过于冗长', '可能過於冗長'),
						},
					],
				},
				{
					key: window.wgULS('虚构作品相关清理', '虛構作品相關清理'),
					value: [
						{
							tag: 'In-universe',
							description: window.wgULS(
								'使用小说故事内的观点描述一个虚构事物',
								'使用小說故事內的觀點描述一個虛構事物'
							),
						},
						{
							tag: 'Long plot',
							description: window.wgULS('可能包含过于详细的剧情摘要', '可能包含過於詳細的劇情摘要'),
						},
					],
				},
			],
		},
		{
			key: window.wgULS('常规条目问题', '常規條目問題'),
			value: [
				{
					key: '重要性和知名度',
					value: [
						{
							tag: 'Notability',
							description: window.wgULS('可能不符合通用关注度指引', '可能不符合通用關注度指引'),
							excludeMI: true,
						},
						{
							tag: 'Notability Unreferenced',
							description: window.wgULS(
								'可能具备关注度，但需要来源加以彰显',
								'可能具備關注度，但需要來源加以彰顯'
							),
						},
					],
				},
				{
					key: window.wgULS('写作风格', '寫作風格'),
					value: [
						{
							tag: 'Advert',
							description: window.wgULS('类似广告或宣传性内容', '類似廣告或宣傳性內容'),
						},
						{
							tag: 'Fanpov',
							description: window.wgULS('类似爱好者网页', '類似愛好者網頁'),
						},
						{
							tag: 'How-to',
							description: window.wgULS('包含指南或教学内容', '包含指南或教學內容'),
						},
						{
							tag: 'Inappropriate person',
							description: window.wgULS(
								'使用不适当的第一人称和第二人称',
								'使用不適當的第一人稱和第二人稱'
							),
						},
						{
							tag: 'Newsrelease',
							description: window.wgULS(
								'阅读起来像是新闻稿及包含过度的宣传性语调',
								'閱讀起來像是新聞稿及包含過度的宣傳性語調'
							),
						},
						{
							tag: 'Prose',
							description: window.wgULS(
								'使用了日期或时间列表式记述，需要改写为连贯的叙述性文字',
								'使用了日期或時間列表式記述，需要改寫為連貫的敘述性文字'
							),
						},
						{
							tag: 'Review',
							description: window.wgULS('阅读起来类似评论，需要清理', '閱讀起來類似評論，需要清理'),
						},
						{
							tag: 'Tone',
							description: window.wgULS(
								'语调或风格可能不适合百科全书的写作方式',
								'語調或風格可能不適合百科全書的寫作方式'
							),
						},
					],
				},
				{
					key: window.wgULS('内容', '內容'),
					value: [
						{tag: 'Missing information', description: '缺少必要的信息'}, // these three have a subgroup with several options
						{tag: 'Substub', description: window.wgULS('过于短小', '過於短小'), excludeMI: true},
						{
							tag: 'Unencyclopedic',
							description: window.wgULS('可能不适合写入百科全书', '可能不適合寫入百科全書'),
						},
					],
				},
				{
					key: window.wgULS('信息和细节', '資訊和細節'),
					value: [
						{
							tag: 'Expert needed',
							description: window.wgULS(
								'需要精通或熟悉本主题的专业人士（专家）参与及协助编辑',
								'需要精通或熟悉本主題的專業人士（專家）參與及協助編輯'
							),
						},
						{
							tag: 'Overly detailed',
							description: window.wgULS('包含太多过度细节内容', '包含太多過度細節內容'),
						},
						{
							tag: 'Trivia',
							description: window.wgULS(
								'应避免有陈列杂项、琐碎资料的部分',
								'應避免有陳列雜項、瑣碎資料的部分'
							),
						},
					],
				},
				{
					key: window.wgULS('时间性', '時間性'),
					value: [
						{
							tag: 'Current',
							description: window.wgULS('记述新闻动态', '記述新聞動態'),
							excludeMI: true,
						},
						{
							tag: 'Update',
							description: window.wgULS('当前条目或章节需要更新', '當前條目或章節需要更新'),
						},
					],
				},
				{
					key: window.wgULS('客观性和事实准确性', '客觀性和事實準確性'),
					value: [
						{
							tag: 'Autobiography',
							description: window.wgULS(
								'类似一篇自传，或内容主要由条目描述的当事人或组织撰写、编辑',
								'類似一篇自傳，或內容主要由條目描述的當事人或組織撰寫、編輯'
							),
						},
						{
							tag: 'COI',
							description: window.wgULS(
								'主要贡献者与本条目所宣扬的内容可能存在利益冲突',
								'主要貢獻者與本條目所宣揚的內容可能存在利益衝突'
							),
						},
						{
							tag: 'Disputed',
							description: window.wgULS('内容疑欠准确，有待查证', '內容疑欠準確，有待查證'),
						},
						{
							tag: 'Globalize',
							description: window.wgULS('仅具有一部分地区的信息或观点', '僅具有一部分地區的資訊或觀點'),
						},
						{
							tag: 'Hoax',
							description: window.wgULS('真实性被质疑', '真實性被質疑'),
						},
						{
							tag: 'POV',
							description: window.wgULS(
								'客观性有争议。内容、语调可能带有明显的个人观点或地方色彩',
								'客觀性有爭議。內容、語調可能帶有明顯的個人觀點或地方色彩'
							),
						},
						{
							tag: 'Self-contradictory',
							description: window.wgULS('内容自相矛盾', '內容自相矛盾'),
						},
						{
							tag: 'Weasel',
							description: window.wgULS(
								'语义模棱两可而损及其客观性或准确性',
								'語意模棱兩可而損及其客觀性或準確性'
							),
						},
					],
				},
				{
					key: window.wgULS('可供查证和来源', '可供查證和來源'),
					value: [
						{
							tag: 'BLPdispute',
							description: window.wgULS(
								'可能违反了有兽档案馆关于生者传记的条例',
								'可能違反了有獸檔案館關於生者傳記的條例'
							),
						},
						{
							tag: 'BLPsources',
							description: window.wgULS(
								'生者传记需要补充更多可供查证的来源',
								'生者傳記需要補充更多可供查證的來源'
							),
						},
						{
							tag: 'BLP unsourced',
							description: window.wgULS(
								'生者传记没有列出任何参考或来源',
								'生者傳記沒有列出任何參考或來源'
							),
						},
						{
							tag: 'Citecheck',
							description: window.wgULS(
								'可能包含不适用或被曲解的引用资料，部分内容的准确性无法被证实',
								'可能包含不適用或被曲解的引用資料，部分內容的準確性無法被證實'
							),
						},
						{
							tag: 'More footnotes needed',
							description: window.wgULS(
								'因为文内引用不足，部分字句的来源仍然不明',
								'因為文內引用不足，部分字句的來源仍然不明'
							),
						},
						{
							tag: 'No footnotes',
							description: window.wgULS(
								'因为没有内文引用而来源仍然不明',
								'因為沒有內文引用而來源仍然不明'
							),
						},
						{
							tag: 'Onesource',
							description: window.wgULS(
								'极大或完全地依赖于某个单一的来源',
								'極大或完全地依賴於某個單一的來源'
							),
						},
						{
							tag: 'Original research',
							description: window.wgULS('可能包含原创研究或未查证内容', '可能包含原創研究或未查證內容'),
						},
						{
							tag: 'Primarysources',
							description: window.wgULS('依赖第一手来源', '依賴第一手來源'),
						},
						{
							tag: 'Refimprove',
							description: window.wgULS('需要补充更多来源', '需要補充更多來源'),
						},
						{
							tag: 'Unreferenced',
							description: window.wgULS('没有列出任何参考或来源', '沒有列出任何參考或來源'),
						},
					],
				},
			],
		},
		{
			key: window.wgULS('具体内容问题', '具體內容問題'),
			value: [
				{
					key: window.wgULS('语言', '語言'),
					value: [
						{
							tag: 'NotMandarin',
							description: window.wgULS(
								'包含过多不是现代标准汉语的内容',
								'包含過多不是現代標準漢語的內容'
							),
							excludeMI: true,
						},
						{
							tag: 'Rough translation',
							description: window.wgULS('翻译品质不佳', '翻譯品質不佳'),
						},
					],
				},
				{
					key: window.wgULS('链接', '連結'),
					value: [
						{
							tag: 'Dead end',
							description: window.wgULS(
								'需要加上内部链接以构筑百科全书的链接网络',
								'需要加上內部連結以構築百科全書的連結網絡'
							),
						},
						{
							tag: 'Orphan',
							description: window.wgULS('没有或只有很少链入页面', '沒有或只有很少連入頁面'),
						},
						{
							tag: 'Overlinked',
							description: window.wgULS(
								'含有过多、重复、或不必要的内部链接',
								'含有過多、重複、或不必要的內部連結'
							),
						},
						{
							tag: 'Underlinked',
							description: window.wgULS(
								'需要更多内部链接以构筑百科全书的链接网络',
								'需要更多內部連結以構築百科全書的連結網絡'
							),
						},
					],
				},
				{
					key: window.wgULS('参考技术', '參考技術'),
					value: [
						{
							tag: 'Citation style',
							description: window.wgULS('引用需要进行清理', '引用需要進行清理'),
						},
					],
				},
				{
					key: window.wgULS('分类', '分類'),
					value: [
						{
							tag: 'Improve categories',
							description: window.wgULS('需要更多页面分类', '需要更多頁面分類'),
							excludeMI: true,
						},
						{
							tag: 'Uncategorized',
							description: window.wgULS('缺少页面分类', '缺少頁面分類'),
							excludeMI: true,
						},
					],
				},
			],
		},
		{
			key: window.wgULS('合并、拆分、移动', '合併、拆分、移動'),
			value: [
				{
					tag: 'Merge from',
					description: window.wgULS('建议将页面并入此页面', '建議將頁面併入此頁面'),
					excludeMI: true,
				},
				{
					tag: 'Merge to',
					description: window.wgULS('建议将此页面并入页面', '建議將此頁面併入頁面'),
					excludeMI: true,
				},
				{
					tag: 'Merge',
					description: window.wgULS('建议此页面与页面合并', '建議此頁面與頁面合併'),
					excludeMI: true,
				},
				{
					tag: 'Requested move',
					description: window.wgULS('建议将此页面移动到新名称', '建議將此頁面移動到新名稱'),
					excludeMI: true,
				},
				{
					tag: 'Split',
					description: window.wgULS('建议将此页面分割为多个页面', '建議將此頁面分割為多個頁面'),
					excludeMI: true,
				},
			],
		},
	];
	// Tags for REDIRECTS start here
	// Not by policy, but the list roughly approximates items with >500
	// transclusions from Template:R template index
	Twinkle.tag.redirectList = [
		{
			key: '常用模板',
			value: [
				{
					tag: window.wgULS('合并重定向', '合併重定向'),
					description: window.wgULS(
						'保持页面题名至相应主条目，令页面内容在合并后仍能保存其编辑历史',
						'保持頁面題名至相應主條目，令頁面內容在合併後仍能儲存其編輯歷史'
					),
				},
				{
					tag: window.wgULS('简繁重定向', '簡繁重定向'),
					description: window.wgULS('引导简体至繁体，或繁体至简体', '引導簡體至繁體，或繁體至簡體'),
				},
				{
					tag: window.wgULS('关注度重定向', '關注度重定向'),
					description: window.wgULS(
						'缺乏关注度的子主题向有关注度的母主题的重定向',
						'缺乏關注度的子主題向有關注度的母主題的重定向'
					),
				},
				{
					tag: '模板重定向',
					description: window.wgULS('指向模板的重定向页面', '指向模板的重定向頁面'),
				},
				{
					tag: window.wgULS('别名重定向', '別名重定向'),
					description: window.wgULS(
						'标题的其他名称、笔名、绰号、同义字等',
						'標題的其他名稱、筆名、綽號、同義字等'
					),
				},
				{
					tag: window.wgULS('译名重定向', '譯名重定向'),
					description: window.wgULS(
						'人物、作品等各项事物的其他翻译名称',
						'人物、作品等各項事物的其他翻譯名稱'
					),
				},
				{
					tag: window.wgULS('缩写重定向', '縮寫重定向'),
					description: window.wgULS('标题缩写', '標題縮寫'),
				},
				{
					tag: window.wgULS('拼写重定向', '拼寫重定向'),
					description: window.wgULS('标题的其他不同拼写', '標題的其他不同拼寫'),
				},
				{
					tag: window.wgULS('错字重定向', '錯字重定向'),
					description: window.wgULS('纠正标题的常见错误拼写或误植', '糾正標題的常見錯誤拼寫或誤植'),
				},
				{
					tag: window.wgULS('旧名重定向', '舊名重定向'),
					description: window.wgULS(
						'将事物早前的名称引导至更改后的主题',
						'將事物早前的名稱引導至更改後的主題'
					),
				},
				{
					tag: '全名重定向',
					description: window.wgULS('标题的完整或更完整名称', '標題的完整或更完整名稱'),
				},
				{
					tag: '短名重定向',
					description: window.wgULS(
						'完整标题名称或人物全名的部分、不完整的名称或简称',
						'完整標題名稱或人物全名的部分、不完整的名稱或簡稱'
					),
				},
				{
					tag: '姓氏重定向',
					description: '人物姓氏',
				},
				{
					tag: '名字重定向',
					description: '人物人名',
				},
				{
					tag: '本名重定向',
					description: '人物本名',
				},
				{
					tag: '非中文重定向',
					description: window.wgULS('非中文标题', '非中文標題'),
					subgroup: [
						{
							name: 'altLangFrom',
							type: 'input',
							label: '本重新導向的語言（可選）',
							tooltip:
								'輸入重新導向名稱所使用語言的ISO 639代碼，例如en代表英語，代碼可參見 Template:ISO_639_name',
						},
					],
				},
				{
					tag: '日文重定向',
					description: window.wgULS('日语名称', '日語名稱'),
				},
			],
		},
		{
			key: '偶用模板',
			value: [
				{
					tag: '角色重定向',
					description: window.wgULS('电视剧、电影、书籍等作品的角色', '電視劇、電影、書籍等作品的角色'),
				},
				{
					tag: window.wgULS('章节重定向', '章節重定向'),
					description: window.wgULS('导向至较高密度组织的页面', '導向至較高密度組織的頁面'),
				},
				{
					tag: '列表重定向',
					description: window.wgULS('导向至低密度的列表', '導向至低密度的列表'),
				},
				{
					tag: '可能性重定向',
					description: window.wgULS(
						'导向至当前提供内容更为详尽的目标页面',
						'導向至當前提供內容更為詳盡的目標頁面'
					),
				},
				{
					tag: window.wgULS('关联字重定向', '關聯字重定向'),
					description: window.wgULS('标题名称关联字', '標題名稱關聯字'),
				},
				{
					tag: window.wgULS('条目请求重定向', '條目請求重定向'),
					description: window.wgULS('需要独立条目的页面', '需要獨立條目的頁面'),
					subgroup: [
						{
							name: 'reqArticleLang',
							type: 'input',
							label: '外語語言代碼：',
							tooltip: '使用ISO 639代碼，可參見 Template:ISO_639_name',
						},
						{
							name: 'reqArticleTitle',
							type: 'input',
							label: '外語頁面名稱：',
							size: 60,
						},
					],
				},
				{
					tag: window.wgULS('快捷方式重定向', '捷徑重定向'),
					description: window.wgULS('有兽档案馆快捷方式', '有獸檔案館快捷方式'),
				},
			],
		},
		{
			key: window.wgULS('鲜用模板', '鮮用模板'),
			value: [
				{
					tag: window.wgULS('词组重定向', '詞組重定向'),
					description: window.wgULS(
						'将词组/词组/成语指向切题的条目及恰当章节',
						'將詞組/詞組/成語指向切題的條目及恰當章節'
					),
				},
				{
					tag: window.wgULS('消歧义页重定向', '消歧義頁重定向'),
					description: window.wgULS('指向消歧义页', '指向消歧義頁'),
				},
				{
					tag: '域名重定向',
					description: window.wgULS('域名', '網域名稱'),
				},
				{
					tag: '年代重定向',
					description: window.wgULS('于年份条目导向至年代条目', '於年份條目導向至年代條目'),
				},
				{
					tag: window.wgULS('用户框模板重定向', '用戶框模板重定向'),
					description: window.wgULS('用户框模板', '用戶框模板'),
				},
				{
					tag: '重定向模板用重定向',
					description: window.wgULS('导向至重定向模板', '導向至重定向模板'),
				},
				{
					tag: 'EXIF重定向',
					description: window.wgULS('JPEG图像文件包含EXIF信息', 'JPEG圖檔包含EXIF資訊'),
				},
			],
		},
	];
	// maintenance tags for FILES start here
	Twinkle.tag.fileList = [
		{
			key: window.wgULS('著作权和来源问题标签', '著作權和來源問題標籤'),
			value: [
				{
					label: `{{Non-free reduce}}：${window.wgULS(
						'非低分辨率的合理使用图像（或过长的音频剪辑等）',
						'非低解析度的合理使用圖像（或過長的音頻剪輯等）'
					)}`,
					value: 'Non-free reduce',
				},
			],
		},
		{
			key: window.wgULS('清理标签', '清理標籤'),
			value: [
				{
					label: `{{Watermark}}：${window.wgULS('图像包含了水印', '圖像包含了浮水印')}`,
					value: 'Watermark',
				},
				{
					label: `{{Rename media}}：${window.wgULS(
						'文件应该根据文件名称指引被重命名',
						'檔案應該根據檔案名稱指引被重新命名'
					)}`,
					value: 'Rename media',
					subgroup: [
						{
							type: 'input',
							name: 'renamemediaNewname',
							label: window.wgULS('新名称：', '新名稱：'),
							tooltip: window.wgULS('输入图像的新名称（可选）', '輸入圖像的新名稱（可選）'),
						},
						{
							type: 'input',
							name: 'renamemediaReason',
							label: '原因：',
							tooltip: window.wgULS('输入重命名的原因（可选）', '輸入重新命名的原因（可選）'),
						},
					],
				},
				{
					label: `{{Should be SVG}}：${window.wgULS(
						'PNG、GIF、JPEG文件应该重制成矢量图形',
						'PNG、GIF、JPEG檔案應該重製成向量圖形'
					)}`,
					value: 'Should be SVG',
				},
			],
		},
		{
			key: window.wgULS('文件取代标签', '檔案取代標籤'),
			value: [
				{
					label: `{{Obsolete}}：${window.wgULS('有新版本可用的过时文件', '有新版本可用的過時檔案')}`,
					value: 'Obsolete',
				},
				{
					label: `{{Vector version available}}：${window.wgULS(
						'有矢量图形可用的非矢量图形文件',
						'有向量圖形可用的非向量圖形檔案'
					)}`,
					value: 'Vector version available',
				},
			],
			buildFilename: true,
		},
	];
	Twinkle.tag.callbacks = {
		article: (pageobj) => {
			// Remove tags that become superfluous with this action
			let pageText = pageobj
				.getPageText()
				.replace(
					/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g,
					''
				);
			const params = pageobj.getCallbackParameters();
			/**
			 * Saves the page following the removal of tags if any. The last step.
			 * Called from removeTags()
			 */
			const postRemoval = () => {
				if (params.tagsToRemove.length) {
					// Remove empty {{multiple issues}} if found
					pageText = pageText.replace(
						/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*\}\}\n?/im,
						''
					);
					// Remove single-element {{multiple issues}} if found
					pageText = pageText.replace(
						/\{\{(?:multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*(\{\{(?:\{\{[^{}]*\}\}|[^{}])+\}\})\s*\}\}/im,
						'$1'
					);
				}
				// Build edit summary
				const makeSentence = (array) => {
					if (array.length < 3) {
						return array.join('和');
					}
					const last = array.pop();
					return `${array.join('、')}和${last}`;
				};
				const makeTemplateLink = (tag) => {
					let text = '{{[[';
					// if it is a custom tag with a parameter
					if (tag.includes('|')) {
						tag = tag.slice(0, tag.indexOf('|'));
					}
					text += tag.includes(':') ? tag : `Template:${tag}|${tag}`;
					return `${text}]]}}`;
				};
				let summaryText;
				const addedTags = params.tags.map(makeTemplateLink);
				const removedTags = params.tagsToRemove.map(makeTemplateLink);
				if (addedTags.length) {
					summaryText = `加入${makeSentence(addedTags)}`;
					summaryText += removedTags.length ? `並移除${makeSentence(removedTags)}` : '';
				} else {
					summaryText = `移除${makeSentence(removedTags)}`;
				}
				summaryText += window.wgULS('标记', '標記');
				if (params.reason) {
					summaryText += `：${params.reason}`;
				}
				// avoid truncated summaries
				if (summaryText.length > 499) {
					summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1');
				}
				pageobj.setPageText(pageText);
				pageobj.setEditSummary(summaryText);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
				pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
				pageobj.setCreateOption('nocreate');
				pageobj.save(() => {
					// special functions for merge tags
					if (params.mergeReason) {
						// post the rationale on the talk page (only operates in main namespace)
						const talkpage = new Morebits.wiki.page(
							`Talk:${params.discussArticle}`,
							window.wgULS('将理由贴进讨论页', '將理由貼進討論頁')
						);
						talkpage.setNewSectionText(`${params.mergeReason.trim()} ~~`.concat('~~'));
						talkpage.setNewSectionTitle(`请求与[[${params.nonDiscussArticle}]]合并`);
						talkpage.setChangeTags(Twinkle.changeTags);
						talkpage.setWatchlist(Twinkle.getPref('watchMergeDiscussions'));
						talkpage.setCreateOption('recreate');
						talkpage.newSection();
					}
					if (params.mergeTagOther) {
						// tag the target page if requested
						let otherTagName = 'Merge';
						if (params.mergeTag === 'Merge from') {
							otherTagName = 'Merge to';
						} else if (params.mergeTag === 'Merge to') {
							otherTagName = 'Merge from';
						}
						const newParams = {
							tags: [otherTagName],
							tagsToRemove: [],
							tagsToRemain: [],
							mergeTarget: Morebits.pageNameNorm,
							discussArticle: params.discussArticle,
							talkDiscussionTitle: params.talkDiscussionTitle,
							talkDiscussionTitleLinked: params.talkDiscussionTitleLinked,
						};
						const otherpage = new Morebits.wiki.page(
							params.mergeTarget,
							`${window.wgULS('标记其他页面（', '標記其他頁面（') + params.mergeTarget}）`
						);
						otherpage.setCallbackParameters(newParams);
						otherpage.load(Twinkle.tag.callbacks.article);
					}
					// special functions for requested move tags
					if (params.moveReason) {
						// post the rationale on the talk page (only operates in main namespace)
						let moveTalkpageText = '\n\n{{'.concat('subst:', `RM|1=${params.moveReason.trim()}`);
						if (params.moveTarget) {
							moveTalkpageText += `|2=${params.moveTarget}`;
						}
						moveTalkpageText += '}}';
						const moveTalkpage = new Morebits.wiki.page(
							`Talk:${params.discussArticle}`,
							window.wgULS('将理由贴进讨论页', '將理由貼進討論頁')
						);
						moveTalkpage.setAppendText(moveTalkpageText);
						moveTalkpage.setEditSummary(
							window.wgULS('请求移动', '請求移動') +
								(params.moveTarget ? `至[[${params.moveTarget}]]` : '')
						);
						moveTalkpage.setChangeTags(Twinkle.changeTags);
						moveTalkpage.setCreateOption('recreate');
						moveTalkpage.append();
					}
				});
				if (params.patrol) {
					pageobj.patrol();
				}
			};
			/**
			 * Removes the existing tags that were deselected (if any)
			 * Calls postRemoval() when done
			 */
			const removeTags = () => {
				if (params.tagsToRemove.length === 0) {
					postRemoval();
					return;
				}
				Morebits.status.info(
					window.wgULS('信息', '資訊'),
					window.wgULS('移除取消选择的已存在标记', '移除取消選擇的已存在標記')
				);
				const getRedirectsFor = [];
				// Remove the tags from the page text, if found in its proper name,
				// otherwise moves it to `getRedirectsFor` array earmarking it for
				// later removal
				for (const tag of params.tagsToRemove) {
					const tag_re = new RegExp(`\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?`);
					if (tag_re.test(pageText)) {
						pageText = pageText.replace(tag_re, '');
					} else {
						getRedirectsFor.push(`Template:${tag}`);
					}
				}
				if (!getRedirectsFor.length) {
					postRemoval();
					return;
				}
				// Remove tags which appear in page text as redirects
				const api = new Morebits.wiki.api(
					window.wgULS('获取模板重定向', '取得模板重新導向'),
					{
						action: 'query',
						prop: 'linkshere',
						titles: getRedirectsFor.join('|'),
						redirects: 1,
						lhnamespace: '10',
						lhshow: 'redirect',
						lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
					},
					(apiobj) => {
						$(apiobj.responseXML)
							.find('page')
							.each((_idx, page) => {
								let removed = false;
								$(page)
									.find('lh')
									.each((_index, element) => {
										const tag = $(element).attr('title').slice(9);
										const tag_re = new RegExp(
											`\\{\\{${Morebits.pageNameRegex(
												tag
											)}\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\}\\n?`
										);
										if (tag_re.test(pageText)) {
											pageText = pageText.replace(tag_re, '');
											removed = true;
											return false; // break out of $.each
										}
									});

								if (!removed) {
									Morebits.status.warn(
										window.wgULS('信息', '資訊'),
										window.wgULS('无法在页面上找到{{', '無法在頁面上找到{{') +
											$(page).attr('title').slice(9) +
											window.wgULS('}}……跳过', '}}……跳過')
									);
								}
							});
						postRemoval();
					}
				);
				api.post();
			};
			if (!params.tags.length) {
				removeTags();
				return;
			}
			let tagRe;
			let tagText = '';
			let tags = [];
			const groupableTags = [];
			const groupableExistingTags = [];
			// Executes first: addition of selected tags
			/**
			 * Updates `tagText` with the syntax of `tagName` template with its parameters
			 *
			 * @param {string} tagName
			 */
			const addTag = (tagName) => {
				let currentTag = '';
				if (tagName === 'Uncategorized' || tagName === 'Improve categories') {
					pageText += `\n\n{{${tagName}|time={{`.concat('subst:', '#time:c}}}}');
				} else {
					currentTag += `{{${tagName}`;
					// fill in other parameters, based on the tag
					switch (tagName) {
						case 'Expert needed':
							currentTag += `|subject=${params.expert}`;
							if (params.expert2) {
								currentTag += `|subject2=${params.expert2}`;
							}
							if (params.expert3) {
								currentTag += `|subject3=${params.expert3}`;
							}
							break;
						case 'Merge':
						case 'Merge to':
						case 'Merge from':
							if (params.mergeTarget) {
								// normalize the merge target for now and later
								params.mergeTarget = Morebits.string.toUpperCaseFirstChar(
									params.mergeTarget.replace(/_/g, ' ')
								);
								currentTag += `|${params.mergeTarget}`;
								// link to the correct section on the talk page, for article space only
								if (
									mw.config.get('wgNamespaceNumber') === 0 &&
									(params.mergeReason || params.discussArticle)
								) {
									if (!params.discussArticle) {
										// discussArticle is the article whose talk page will contain the discussion
										params.discussArticle =
											tagName === 'Merge to' ? params.mergeTarget : mw.config.get('wgTitle');
										// nonDiscussArticle is the article which won't have the discussion
										params.nonDiscussArticle =
											tagName === 'Merge to' ? mw.config.get('wgTitle') : params.mergeTarget;
										params.talkDiscussionTitle =
											window.wgULS('请求与', '請求與') +
											params.nonDiscussArticle +
											window.wgULS('合并', '合併');
									}
									currentTag += `|discuss=Talk:${params.discussArticle}#${params.talkDiscussionTitle}`;
								}
							}
							break;
						case 'Missing information':
							currentTag += `|1=${params.missingInformation}`;
							break;
						case 'Notability':
							if (params.notability !== 'none') {
								currentTag += `|3=${params.notability}`;
							}
							break;
						case 'Requested move':
							if (params.moveTarget) {
								// normalize the move target for now and later
								params.moveTarget = Morebits.string.toUpperCaseFirstChar(
									params.moveTarget.replace(/_/g, ' ')
								);
								params.discussArticle = mw.config.get('wgTitle');
								currentTag += `|${params.moveTarget}`;
							}
							break;
						case 'Split':
							if (params.target1) {
								currentTag += `|1=${params.target1}`;
							}
							if (params.target2) {
								currentTag += `|2=${params.target2}`;
							}
							if (params.target3) {
								currentTag += `|3=${params.target3}`;
							}
							break;
						case 'Cleanup':
							if (params.cleanupReason) {
								currentTag += `|reason=${params.cleanupReason}`;
							}
							break;
						default:
							break;
					}
					currentTag += '|time={{'.concat('subst:', '#time:c}}}}\n');
					tagText += currentTag;
				}
			};
			/**
			 * Adds the tags which go outside {{multiple issues}}, either because
			 * these tags aren't supported in {{multiple issues}} or because
			 * {{multiple issues}} is not being added to the page at all
			 */
			const addUngroupedTags = () => {
				for (const tag of tags) {
					addTag(tag);
				}
				// Insert tag after short description or any hatnotes,
				// as well as deletion/protection-related templates
				const ysarxiv_page = new Morebits.wikitext.page(pageText);
				const templatesAfter =
					// Protection templates
					// CSD
					// AfD
					`${Twinkle.hatnoteRegex}pp|pp-.*?|(?:Delete|Db-reason|D|Deletebecause|Db|速删|速刪|Speedy|SD|快删|快刪|CSD)|[rsaiftcmv]fd|vfd-(?:b|q|s|source|v|wikt)|(?:移动到维基|移動到維基)(?:教科书|教科書|语录|語錄|文库|文庫|导游|導遊|词典|詞典)`;
				pageText = ysarxiv_page.insertAfterTemplates(tagText, templatesAfter).getText();
				removeTags();
			};
			// Separate tags into groupable ones (`groupableTags`) and non-groupable ones (`tags`)
			for (const tag of params.tags) {
				tagRe = new RegExp(`\\{\\{${tag}(\\||\\}\\})`, 'im');
				// regex check for preexistence of tag can be skipped if in canRemove mode
				if (Twinkle.tag.canRemove || !tagRe.exec(pageText)) {
					if (
						tag === 'Notability' &&
						(mw.config.get('wgNamespaceNumber') === 0 ||
							confirm(
								window.wgULS(
									'该页面不是条目，您仍要提报到关注度提报吗？',
									'該頁面不是條目，您仍要提報到關注度提報嗎？'
								)
							))
					) {
						const ysarxiv_page = new Morebits.wiki.page(
							'LIB_talk:存废讨论/关注度提报',
							window.wgULS('加入关注度记录项', '加入關注度記錄項')
						);
						ysarxiv_page.setFollowRedirect(true);
						ysarxiv_page.setCallbackParameters(params);
						ysarxiv_page.load(Twinkle.tag.callbacks.notabilityList);
					}
					// condition Twinkle.tag.article.tags[tag] to ensure that its not a custom tag
					// Custom tags are assumed non-groupable, since we don't know whether MI template supports them
					if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
						groupableTags.push(tag);
					} else {
						tags.push(tag);
					}
				} else if (tag === 'Merge from') {
					tags.push(tag);
				} else {
					Morebits.status.warn(
						window.wgULS('信息', '資訊'),
						window.wgULS('在页面上找到{{', '在頁面上找到{{') + tag + window.wgULS('}}……跳过', '}}……跳過')
					);
					// don't do anything else with merge tags
					if (['Merge', 'Merge to'].includes(tag)) {
						params.mergeTarget = null;
						params.mergeReason = null;
						params.mergeTagOther = null;
					}
				}
			}
			// To-be-retained existing tags that are groupable
			for (const tag of params.tagsToRemain) {
				// If the tag is unknown to us, we consider it non-groupable
				if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
					groupableExistingTags.push(tag);
				}
			}
			const miTest =
				/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|[^}]+\{/im.exec(
					pageText
				);
			if (miTest && groupableTags.length > 0) {
				Morebits.status.info(
					window.wgULS('信息', '資訊'),
					window.wgULS(
						'加入支持的标记入已存在的{{multiple issues}}',
						'加入支援的標記入已存在的{{multiple issues}}'
					)
				);
				tagText = '';
				for (const tag of groupableTags) {
					addTag(tag);
				}
				const miRegex = new RegExp(
					`(\\{\\{\\s*${miTest[1]}\\s*(?:\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?)\\}\\}\\s*`,
					'im'
				);
				pageText = pageText.replace(miRegex, `$1${tagText}}}\n`);
				tagText = '';
				addUngroupedTags();
			} else if (params.group && !miTest && groupableExistingTags.length + groupableTags.length >= 2) {
				Morebits.status.info(
					window.wgULS('信息', '資訊'),
					window.wgULS('加入支持的标记入{{multiple issues}}', '加入支援的標記入{{multiple issues}}')
				);
				tagText += '{{Multiple issues|\n';
				/**
				 * Adds newly added tags to MI
				 */
				const addNewTagsToMI = () => {
					for (const tag of groupableTags) {
						addTag(tag);
					}
					tagText += '}}\n';
					addUngroupedTags();
				};
				const getRedirectsFor = [];
				// Reposition the tags on the page into {{multiple issues}}, if found with its
				// proper name, else moves it to `getRedirectsFor` array to be handled later
				for (const tag of groupableExistingTags) {
					const tag_re = new RegExp(`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?)`);
					if (tag_re.test(pageText)) {
						tagText += tag_re.exec(pageText)[1];
						pageText = pageText.replace(tag_re, '');
					} else {
						getRedirectsFor.push(`Template:${tag}`);
					}
				}
				if (!getRedirectsFor.length) {
					addNewTagsToMI();
					return;
				}
				const api = new Morebits.wiki.api(
					window.wgULS('获取模板重定向', '取得模板重新導向'),
					{
						action: 'query',
						prop: 'linkshere',
						titles: getRedirectsFor.join('|'),
						redirects: 1,
						lhnamespace: '10',
						lhshow: 'redirect',
						lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
					},
					(apiobj) => {
						$(apiobj.responseXML)
							.find('page')
							.each((_idx, page) => {
								let found = false;
								$(page)
									.find('lh')
									.each((_index, element) => {
										const tag = $(element).attr('title').slice(9);
										const tag_re = new RegExp(
											`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]*)?\\}\\}\\n?)`
										);
										if (tag_re.test(pageText)) {
											tagText += tag_re.exec(pageText)[1];
											pageText = pageText.replace(tag_re, '');
											found = true;
											return false; // break out of $.each
										}
									});

								if (!found) {
									Morebits.status.warn(
										window.wgULS('信息', '資訊'),
										window.wgULS('无法在页面上找到{{', '無法在頁面上找到{{') +
											$(page).attr('title').slice(9) +
											window.wgULS('}}……跳过', '}}……跳過')
									);
								}
							});
						addNewTagsToMI();
					}
				);
				api.post();
			} else {
				tags = [...tags, ...groupableTags];
				addUngroupedTags();
			}
		},
		notabilityList: (pageobj) => {
			pageobj.setAppendText('\n{{'.concat('subst:', `Fameitem|title=${Morebits.pageNameNorm}}}`));
			pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('recreate');
			pageobj.append();
		},
		redirect: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			let pageText = pageobj.getPageText();
			let tagRe;
			let tagText = '';
			let summaryText = '加入';
			const tags = [];
			let i;
			for (i = 0; i < params.tags.length; i++) {
				tagRe = new RegExp(`(\\{\\{${params.tags[i]}(\\||\\}\\}))`, 'im');
				if (tagRe.exec(pageText)) {
					Morebits.status.warn(
						window.wgULS('信息', '資訊'),
						window.wgULS('在重定向上找到{{', '在重新導向上找到{{') +
							params.tags[i] +
							window.wgULS('}}……跳过', '}}……跳過')
					);
				} else {
					tags.push(params.tags[i]);
				}
			}
			// used in Array#forEach
			const addTag = (tagName, tagIndex) => {
				tagText += `\n{{${tagName}`;
				if (tagName === '非中文重定向') {
					if (params.altLangFrom) {
						tagText += `|1=${params.altLangFrom}`;
					}
				} else if (
					(tagName === '条目请求重定向' || tagName === '條目請求重定向') &&
					params.reqArticleLang &&
					params.reqArticleTitle
				) {
					tagText += `|1=${params.reqArticleLang}`;
					tagText += `|2=${params.reqArticleTitle}`;
				}
				tagText += '}}';
				if (tagIndex > 0) {
					if (tagIndex === tags.length - 1) {
						summaryText += '和';
					} else if (tagIndex < tags.length - 1) {
						summaryText += '、';
					}
				}
				summaryText += `{{[[:${tagName.includes(':') ? tagName : `Template:${tagName}|${tagName}`}]]}}`;
			};
			if (!tags.length) {
				Morebits.status.warn(
					window.wgULS('信息', '資訊'),
					window.wgULS('没有标签可供标记', '沒有標籤可供標記')
				);
			}
			tags.sort();
			for (const tag of tags) {
				addTag(tag);
			}
			// Check for all Rcat shell redirects (from #433)
			if (pageText.match(/{{(?:redr|this is a redirect|r(?:edirect)?(?:.?cat.*)?[ _]?sh)/i)) {
				// Regex inspired by [[User:Kephir/gadgets/sagittarius.js]] ([[Special:PermaLink/831402893]])
				const oldTags = pageText.match(/(\s*{{[A-Za-z\s]+\|(?:\s*1=)?)((?:[^|{}]|{{[^}]+}})+)(}})\s*/i);
				pageText = pageText.replace(oldTags[0], oldTags[1] + tagText + oldTags[2] + oldTags[3]);
			} else {
				// Fold any pre-existing Rcats into taglist and under Rcatshell
				const pageTags = pageText.match(/\s*{{.+?重定向.*?}}/gim);
				let oldPageTags = '';
				if (pageTags) {
					for (let pageTag of pageTags) {
						const pageRe = new RegExp(Morebits.string.escapeRegExp(pageTag), 'img');
						pageText = pageText.replace(pageRe, '');
						pageTag = pageTag.trim();
						oldPageTags += `\n${pageTag}`;
					}
				}
				pageText += `\n{{Redirect category shell|${tagText}${oldPageTags}\n}}`;
			}
			summaryText +=
				(tags.length > 0 ? window.wgULS('标记', '標記') : '{{Redirect category shell}}') +
				window.wgULS('到重定向', '到重新導向');
			// avoid truncated summaries
			if (summaryText.length > 499) {
				summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1');
			}
			pageobj.setPageText(pageText);
			pageobj.setEditSummary(summaryText);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
			pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
			pageobj.setCreateOption('nocreate');
			pageobj.save();
			if (params.patrol) {
				pageobj.patrol();
			}
		},
		file: (pageobj) => {
			let text = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			let summary = '加入';
			// Add maintenance tags
			if (params.tags.length) {
				let tagtext = '';
				let currentTag;
				for (const tag of params.tags) {
					// when other commons-related tags are placed, remove "move to Share" tag
					if (['Keep local', 'Now YsArxiv Share', 'Do not move to YsArxiv Share'].includes(tag)) {
						text = text.replace(
							/{{(mtc|(copy |move )?to ?share|move to ysarxiv share|copy to ysarxiv share)[^}]*}}/gi,
							''
						);
					}
					if (tag === 'Vector version available') {
						text = text.replace(
							/\{\{((convert to |convertto|should be |shouldbe|to)?svg|badpng|vectorize)[^}]*\}\}/gi,
							''
						);
					}
					currentTag = tag;
					switch (tag) {
						case 'Now Commons':
							currentTag = `subst:${currentTag}`; // subst
							if (params.nowcommonsName !== '') {
								currentTag += `|1=${params.nowcommonsName}`;
							}
							break;
						case 'Keep local':
							if (params.keeplocalName !== '') {
								currentTag += `|1=${params.keeplocalName}`;
							}
							if (params.keeplocalReason !== '') {
								currentTag += `|reason=${params.keeplocalReason}`;
							}
							break;
						case 'Rename media':
							if (params.renamemediaNewname !== '') {
								currentTag += `|1=${params.renamemediaNewname}`;
							}
							if (params.renamemediaReason !== '') {
								currentTag += `|2=${params.renamemediaReason}`;
							}
							break;
						case 'Vector version available':
						/* falls through */
						case 'Obsolete':
							currentTag += `|1=${params[`${tag.replace(/ /g, '_')}File`]}`;
							break;
						case 'Do not move to Commons':
							currentTag += `|reason=${params.DoNotMoveToCommons_reason}`;
							break;
						case 'Copy to Wikimedia Commons':
							currentTag += `|human=${mw.config.get('wgUserName')}`;
							break;
						default:
							break;
						// don't care
					}

					currentTag = `{{${currentTag}}}\n`;
					tagtext += currentTag;
					summary += `{{${tag}}}、`;
				}
				if (!tagtext) {
					pageobj
						.getStatusElement()
						.warn(window.wgULS('用户取消操作，没什么要做的', '使用者取消操作，沒什麼要做的'));
					return;
				}
				text = tagtext + text;
			}
			pageobj.setPageText(text);
			pageobj.setEditSummary(summary.slice(0, Math.max(0, summary.length - 1)));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
			pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
			pageobj.setCreateOption('nocreate');
			pageobj.save();
			if (params.patrol) {
				pageobj.patrol();
			}
		},
	};
	Twinkle.tag.callback.evaluate = (e) => {
		const form = e.target;
		const params = Morebits.quickForm.getInputData(form);
		// Validation
		// Given an array of incompatible tags, check if we have two or more selected
		const checkIncompatible = (conflicts, extra) => {
			const count = conflicts.reduce((sum, tag) => {
				return (sum += params.tags.includes(tag));
			}, 0);
			if (count > 1) {
				let message = `${window.wgULS('请在以下标签中择一使用', '請在以下標籤中擇一使用')}：{{${conflicts.join(
					'}}、{{'
				)}}}。`;
				message += extra || '';
				mw.notify(message, {
					type: 'warn',
					tag: 'friendlytag',
				});
				return true;
			}
		};
		// Given a tag, ensure an associate parameter is present
		// Maybe just sock this away in each function???
		const checkParameter = (tag, parameter, description = '理由') => {
			if (params.tags.includes(tag) && params[parameter].trim() === '') {
				mw.notify(`${window.wgULS('您必须指定', '您必須指定')}{{${tag}}}的${description}。`, {
					type: 'warn',
					tag: 'friendlytag',
				});
				return true;
			}
		};
		// We could theoretically put them all checkIncompatible calls in a
		// forEach loop, but it's probably clearer not to have [[array one],
		// [array two]] devoid of context. Likewise, all the checkParameter
		// calls could be in one if, but could be similarly confusing.
		switch (Twinkle.tag.modeEn) {
			case 'article':
				params.tagsToRemove = form.getUnchecked('existingTags'); // not in `input`
				params.tagsToRemain = params.existingTags || []; // container not created if none present
				if (
					params.tags.includes('Merge') ||
					params.tags.includes('Merge from') ||
					params.tags.includes('Merge to')
				) {
					if (
						checkIncompatible(
							['Merge', 'Merge from', 'Merge to'],
							window.wgULS(
								'若需要多次合并，请使用{{Merge}}并用管道符分隔条目名（但在这种情形中Twinkle不能自动标记其他条目）。',
								'若需要多次合併，請使用{{Merge}}並用管道符分隔條目名（但在這種情形中Twinkle不能自動標記其他條目）。'
							)
						)
					) {
						return;
					}
					if (!params.mergeTarget) {
						mw.notify(
							window.wgULS(
								'请指定使用于merge模板中的另一个页面标题。',
								'請指定使用於merge模板中的另一個頁面標題。'
							),
							{
								type: 'warn',
								tag: 'friendlytag',
							}
						);
						return;
					}
					if ((params.mergeTagOther || params.mergeReason) && params.mergeTarget.includes('|')) {
						mw.notify(
							window.wgULS(
								'当前还不支持在一次合并中标记多个条目，与开启关于多个条目的讨论。请不要勾选“标记其他条目”并清空“理由”框后再提交。',
								'目前還不支援在一次合併中標記多個條目，與開啟關於多個條目的討論。請不要勾選「標記其他條目」並清空「理由」框後再提交。'
							),
							{
								type: 'warn',
								tag: 'friendlytag',
							}
						);
						return;
					}
				}
				if (
					checkParameter(
						'Missing information',
						'missingInformation',
						window.wgULS('缺少的内容', '缺少的內容')
					)
				) {
					return;
				}
				if (checkParameter('Expert needed', 'expert', window.wgULS('专家领域', '專家領域'))) {
					return;
				}
				break;
			case 'file':
				// Silly to provide the same string to each of these
				if (
					checkParameter('Obsolete', 'ObsoleteFile', window.wgULS('替换的文件名称', '替換的檔案名稱')) ||
					checkParameter(
						'Vector version available',
						'Vector_version_availableFile',
						window.wgULS('替换的文件名称', '替換的檔案名稱')
					)
				) {
					return;
				}
				if (checkParameter('Do not move to Commons', 'DoNotMoveToCommons_reason')) {
					return;
				}
				break;
			case 'redirect':
				break;
			default:
				mw.notify(`Twinkle.tag：未知模式 ${Twinkle.tag.mode}`, {
					type: 'warn',
					tag: 'friendlytag',
				});
				break;
		}
		// File/redirect: return if no tags selected
		// Article: return if no tag is selected and no already present tag is deselected
		if (params.tags.length === 0 && (Twinkle.tag.modeEn !== 'article' || params.tagsToRemove.length === 0)) {
			mw.notify(window.wgULS('必须选择至少一个标记！', '必須選擇至少一個標記！'), {
				type: 'warn',
				tag: 'friendlytag',
			});
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		Morebits.wiki.actionCompleted.redirect = Morebits.pageNameNorm;
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'标记完成，将在几秒内刷新页面',
			'標記完成，將在幾秒內重新整理頁面'
		);
		if (Twinkle.tag.modeEn === 'redirect') {
			Morebits.wiki.actionCompleted.followRedirect = false;
		}
		const ysarxiv_page = new Morebits.wiki.page(
			Morebits.pageNameNorm,
			window.wgULS('正在标记', '正在標記') + Twinkle.tag.mode
		);
		ysarxiv_page.setCallbackParameters(params);
		ysarxiv_page.load(Twinkle.tag.callbacks[Twinkle.tag.modeEn]);
	};
	Twinkle.addInitCallback(Twinkle.tag, 'tag');
})(jQuery);
