// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinklespeedy.js */
(function twinklespeedy($) {
	const $body = $('body');
	/**
	 * twinklespeedy.js: CSD module
	 * Mode of invocation: Tab ("CSD")
	 * Active on: Non-special, existing pages
	 *
	 * NOTE FOR DEVELOPERS:
	 *  If adding a new criterion, add it to the appropriate places at the top of
	 *  twinkleconfig.js.
	 *  Also, check out the default values of the CSD preferences in twinkle.js,
	 *  and add your new criterion to those if you think it would be good.
	 */
	Twinkle.speedy = () => {
		// Disable on:
		// * special pages
		// * non-existent pages
		if (mw.config.get('wgNamespaceNumber') < 0 || !mw.config.get('wgArticleId')) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.speedy.callback,
			window.wgULS('速删', '速刪'),
			'tw-csd',
			Morebits.userIsSysop ? window.wgULS('快速删除', '快速刪除') : window.wgULS('请求快速删除', '請求快速刪除')
		);
	};
	// This function is run when the CSD tab/header link is clicked
	Twinkle.speedy.callback = () => {
		Twinkle.speedy.initDialog(
			Morebits.userIsSysop ? Twinkle.speedy.callback.evaluateSysop : Twinkle.speedy.callback.evaluateUser,
			true
		);
	};
	// Used by unlink feature
	Twinkle.speedy.dialog = null;
	// Used throughout
	Twinkle.speedy.hasCSD = !!document.querySelector('#delete-reason');
	// The speedy criteria list can be in one of several modes
	Twinkle.speedy.mode = {
		sysopSingleSubmit: 1,
		// radio buttons, no subgroups, submit when "Submit" button is clicked
		sysopRadioClick: 2,
		// radio buttons, no subgroups, submit when a radio button is clicked
		sysopMultipleSubmit: 3,
		// check boxes, subgroups, "Submit" button already present
		sysopMultipleRadioClick: 4,
		// check boxes, subgroups, need to add a "Submit" button
		userMultipleSubmit: 5,
		// check boxes, subgroups, "Submit" button already pressent
		userMultipleRadioClick: 6,
		// check boxes, subgroups, need to add a "Submit" button
		userSingleSubmit: 7,
		// radio buttons, subgroups, submit when "Submit" button is clicked
		userSingleRadioClick: 8,
		// radio buttons, subgroups, submit when a radio button is clicked
		// are we in "delete page" mode?
		// (sysops can access both "delete page" [sysop] and "tag page only" [user] modes)
		isSysop: (mode) => {
			return (
				mode === Twinkle.speedy.mode.sysopSingleSubmit ||
				mode === Twinkle.speedy.mode.sysopMultipleSubmit ||
				mode === Twinkle.speedy.mode.sysopRadioClick ||
				mode === Twinkle.speedy.mode.sysopMultipleRadioClick
			);
		},
		// do we have a "Submit" button once the form is created?
		hasSubmitButton: (mode) => {
			return (
				mode === Twinkle.speedy.mode.sysopSingleSubmit ||
				mode === Twinkle.speedy.mode.sysopMultipleSubmit ||
				mode === Twinkle.speedy.mode.sysopMultipleRadioClick ||
				mode === Twinkle.speedy.mode.userMultipleSubmit ||
				mode === Twinkle.speedy.mode.userMultipleRadioClick ||
				mode === Twinkle.speedy.mode.userSingleSubmit
			);
		},
		// is db-multiple the outcome here?
		isMultiple: (mode) => {
			return (
				mode === Twinkle.speedy.mode.userMultipleSubmit ||
				mode === Twinkle.speedy.mode.sysopMultipleSubmit ||
				mode === Twinkle.speedy.mode.userMultipleRadioClick ||
				mode === Twinkle.speedy.mode.sysopMultipleRadioClick
			);
		},
	};
	// Prepares the speedy deletion dialog and displays it
	Twinkle.speedy.initDialog = (callbackfunc) => {
		Twinkle.speedy.dialog = new Morebits.simpleWindow(
			Twinkle.getPref('speedyWindowWidth'),
			Twinkle.getPref('speedyWindowHeight')
		);
		const {dialog} = Twinkle.speedy;
		dialog.setTitle(window.wgULS('选择快速删除理由', '選擇快速刪除理由'));
		dialog.setScriptName('Twinkle');
		dialog.addFooterLink(window.wgULS('快速删除条例', '快速刪除條例'), 'LIB:CSD');
		dialog.addFooterLink(window.wgULS('速删设置', '速刪設定'), 'H:TW/PREF#speedy');
		dialog.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#speedy');
		const form = new Morebits.quickForm(
			callbackfunc,
			Twinkle.getPref('speedySelectionStyle') === 'radioClick' ? 'change' : null
		);
		if (Morebits.userIsSysop) {
			form.append({
				type: 'checkbox',
				list: [
					{
						label: window.wgULS('只标记，不删除', '只標記，不刪除'),
						value: 'tag_only',
						name: 'tag_only',
						tooltip: window.wgULS('若您只想标记此页面而不是将其删除', '若您只想標記此頁面而不是將其刪除'),
						checked: !(Twinkle.speedy.hasCSD || Twinkle.getPref('deleteSysopDefaultToDelete')),
						event: (event) => {
							const cForm = event.target.form;
							const cChecked = event.target.checked;
							// enable/disable talk page checkbox
							if (cForm.talkpage) {
								cForm.talkpage.disabled = cChecked;
								cForm.talkpage.checked = !cChecked && Twinkle.getPref('deleteTalkPageOnDelete');
							}
							// enable/disable redirects checkbox
							cForm.redirects.disabled = cChecked;
							cForm.redirects.checked = !cChecked;
							// enable/disable delete multiple
							cForm.delmultiple.disabled = cChecked;
							cForm.delmultiple.checked = false;
							// enable/disable open talk page checkbox
							cForm.openusertalk.disabled = cChecked;
							cForm.openusertalk.checked = false;
							// enable/disable notify checkbox
							cForm.notify.disabled = !cChecked;
							cForm.notify.checked = cChecked;
							// enable/disable multiple
							cForm.multiple.disabled = !cChecked;
							cForm.multiple.checked = false;
							// enable requesting creation protection
							cForm.salting.checked = false;
							Twinkle.speedy.callback.modeChanged(cForm);
							event.stopPropagation();
						},
					},
				],
			});
			const deleteOptions = form.append({
				type: 'div',
				name: 'delete_options',
			});
			deleteOptions.append({
				type: 'header',
				label: window.wgULS('删除相关选项', '刪除相關選項'),
			});
			if (mw.config.get('wgNamespaceNumber') % 2 === 0 && mw.config.get('wgNamespaceNumber') !== 2) {
				// hide option for user pages, to avoid accidentally deleting user talk page
				deleteOptions.append({
					type: 'checkbox',
					list: [
						{
							label: window.wgULS('删除讨论页', '刪除討論頁'),
							value: 'talkpage',
							name: 'talkpage',
							tooltip: window.wgULS('删除时附带删除此页面的讨论页。', '刪除時附帶刪除此頁面的討論頁。'),
							checked: Twinkle.getPref('deleteTalkPageOnDelete'),
							event: (event) => {
								event.stopPropagation();
							},
						},
					],
				});
			}
			deleteOptions.append({
				type: 'checkbox',
				list: [
					{
						label: window.wgULS('删除重定向', '刪除重新導向'),
						value: 'redirects',
						name: 'redirects',
						tooltip: window.wgULS('删除到此页的重定向。', '刪除到此頁的重新導向。'),
						checked: Twinkle.getPref('deleteRedirectsOnDelete'),
						event: (event) => {
							event.stopPropagation();
						},
					},
				],
			});
			deleteOptions.append({
				type: 'checkbox',
				list: [
					{
						label: window.wgULS('应用多个理由删除', '應用多個理由刪除'),
						value: 'delmultiple',
						name: 'delmultiple',
						tooltip: window.wgULS('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。'),
						event: (event) => {
							Twinkle.speedy.callback.modeChanged(event.target.form);
							event.stopPropagation();
						},
					},
				],
			});
			deleteOptions.append({
				type: 'checkbox',
				list: [
					{
						label: window.wgULS('开启用户讨论页', '開啟使用者討論頁'),
						value: 'openusertalk',
						name: 'openusertalk',
						tooltip: window.wgULS(
							'此项的默认值为您的开启讨论页设置。在您选择应用多条理由删除时此项将保持不变。',
							'此項的預設值為您的開啟討論頁設定。在您選擇應用多條理由刪除時此項將保持不變。'
						),
						checked: false,
					},
				],
			});
		}
		const tagOptions = form.append({
			type: 'div',
			name: 'tag_options',
		});
		if (Morebits.userIsSysop) {
			tagOptions.append({
				type: 'header',
				label: window.wgULS('标记相关选项', '標記相關選項'),
			});
		}
		tagOptions.append({
			type: 'checkbox',
			list: [
				{
					label: window.wgULS('如可能，通知创建者', '如可能，通知建立者'),
					value: 'notify',
					name: 'notify',
					tooltip: window.wgULS(
						'一个通知模板将会被加入创建者的讨论页，若您启用了该理据的通知。',
						'一個通知模板將會被加入建立者的討論頁，若您啟用了該理據的通知。'
					),
					checked:
						!Morebits.userIsSysop ||
						!(Twinkle.speedy.hasCSD || Twinkle.getPref('deleteSysopDefaultToDelete')),
					event: (event) => {
						event.stopPropagation();
					},
				},
				{
					label: window.wgULS('清空页面', '清空頁面'),
					value: 'blank',
					name: 'blank',
					tooltip: window.wgULS(
						'在标记模板前，先清空页面，适用于严重破坏或负面生者传记等。',
						'在標記模板前，先清空頁面，適用於嚴重破壞或負面生者傳記等。'
					),
				},
				{
					label: window.wgULS('同时标记以请求白纸保护', '同時標記以請求白紙保護'),
					value: 'salting',
					name: 'salting',
					tooltip: window.wgULS(
						'选取后，快速删除模板后将附带 {{salt}} 标签，以请求执行删除的管理员进行白纸保护，仅在页面创建3次以上才选择此项。',
						'選取後，快速刪除模板後將附帶 {{salt}} 標籤，以請求執行刪除的管理員進行白紙保護，僅在頁面建立3次以上才選擇此項。'
					),
				},
				{
					label: window.wgULS('应用多个理由', '應用多個理由'),
					value: 'multiple',
					name: 'multiple',
					tooltip: window.wgULS('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。'),
					event: (event) => {
						Twinkle.speedy.callback.modeChanged(event.target.form);
						event.stopPropagation();
					},
				},
			],
		});
		form.append({
			type: 'div',
			id: 'prior-deletion-count',
		});
		form.append({
			type: 'div',
			name: 'work_area',
			label: window.wgULS(
				'初始化CSD模块失败，请重试，或将这报告给Twinkle开发者。',
				'初始化CSD模組失敗，請重試，或將這報告給Twinkle開發者。'
			),
		});
		if (Twinkle.getPref('speedySelectionStyle') !== 'radioClick') {
			form.append({
				type: 'submit',
				className: 'tw-speedy-submit',
			}); // Renamed in modeChanged
		}

		const result = form.render();
		dialog.setContent(result);
		dialog.display();
		Twinkle.speedy.callback.modeChanged(result);
		// Check for prior deletions.  Just once, upon init
		Twinkle.speedy.callback.priorDeletionCount();
	};
	Twinkle.speedy.callback.getMode = (form) => {
		let mode = Twinkle.speedy.mode.userSingleSubmit;
		if (form.tag_only && !form.tag_only.checked) {
			if (form.delmultiple.checked) {
				mode = Twinkle.speedy.mode.sysopMultipleSubmit;
			} else {
				mode = Twinkle.speedy.mode.sysopSingleSubmit;
			}
		} else if (form.multiple.checked) {
			mode = Twinkle.speedy.mode.userMultipleSubmit;
		} else {
			mode = Twinkle.speedy.mode.userSingleSubmit;
		}
		if (Twinkle.getPref('speedySelectionStyle') === 'radioClick') {
			mode++;
		}
		return mode;
	};
	Twinkle.speedy.callback.modeChanged = (form) => {
		const namespace = mw.config.get('wgNamespaceNumber');
		// first figure out what mode we're in
		const mode = Twinkle.speedy.callback.getMode(form);
		const isSysopMode = Twinkle.speedy.mode.isSysop(mode);
		if (isSysopMode) {
			$body.find('[name=delete_options]').show();
			$body.find('[name=tag_options]').hide();
			$body.find('button.tw-speedy-submit').text(window.wgULS('删除页面', '刪除頁面'));
		} else {
			$body.find('[name=delete_options]').hide();
			$body.find('[name=tag_options]').show();
			$body.find('button.tw-speedy-submit').text(window.wgULS('标记页面', '標記頁面'));
		}
		const work_area = new Morebits.quickForm.element({
			type: 'div',
			name: 'work_area',
		});
		if (
			mode === Twinkle.speedy.mode.userMultipleRadioClick ||
			mode === Twinkle.speedy.mode.sysopMultipleRadioClick
		) {
			const evaluateType = Twinkle.speedy.mode.isSysop(mode) ? 'evaluateSysop' : 'evaluateUser';
			work_area.append({
				type: 'div',
				label: window.wgULS('当选择完成后，单击：', '當選擇完成後，點擊：'),
			});
			work_area.append({
				type: 'button',
				name: 'submit-multiple',
				label: isSysopMode ? window.wgULS('删除页面', '刪除頁面') : window.wgULS('标记页面', '標記頁面'),
				event: (event) => {
					Twinkle.speedy.callback[evaluateType](event);
					event.stopPropagation();
				},
			});
		}
		const radioOrCheckbox = Twinkle.speedy.mode.isMultiple(mode) ? 'checkbox' : 'radio';
		if (isSysopMode && !Twinkle.speedy.mode.isMultiple(mode)) {
			work_area.append({
				type: 'header',
				label: window.wgULS('自定义理由', '自訂理由'),
			});
			work_area.append({
				type: radioOrCheckbox,
				name: 'csd',
				list: Twinkle.speedy.generateCsdList(Twinkle.speedy.customRationale, mode),
			});
		}
		switch (namespace) {
			case 0:
				// article and pseudo namespace
				work_area.append({
					type: 'header',
					label: window.wgULS('条目', '條目'),
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.articleList, mode),
				});
				break;
			case 2:
				// user
				work_area.append({
					type: 'header',
					label: window.wgULS('用户页', '使用者頁面'),
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.userList, mode),
				});
				break;
			case 3:
				// user talk
				if (mw.util.isIPAddress(mw.config.get('wgRelevantUserName'))) {
					work_area.append({
						type: 'header',
						label: window.wgULS('用户讨论页', '使用者討論頁'),
					});
					work_area.append({
						type: radioOrCheckbox,
						name: 'csd',
						list: Twinkle.speedy.generateCsdList(Twinkle.speedy.usertalkList, mode),
					});
				}
				break;
			case 6:
				// file
				work_area.append({
					type: 'header',
					label: window.wgULS('文件', '檔案'),
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.fileList, mode),
				});
				if (!Twinkle.speedy.mode.isSysop(mode)) {
					work_area.append({
						type: 'div',
						label: window.wgULS(
							'标记CSD F1、F3、F5，请使用Twinkle的“图权”功能。',
							'標記CSD F1、F3、F5，請使用Twinkle的「圖權」功能。'
						),
					});
				}
				break;
			case 14:
				// category
				work_area.append({
					type: 'header',
					label: window.wgULS('分类', '分類'),
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.categoryList, mode),
				});
				break;
			case 302:
				// draft
				work_area.append({
					type: 'header',
					label: '草稿',
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.draftList, mode),
				});
				break;
			case namespace % 2 === 1 && namespace !== 3:
				// show db-talk on talk pages, but not user talk pages
				work_area.append({
					type: 'header',
					label: window.wgULS('讨论页', '討論頁'),
				});
				work_area.append({
					type: radioOrCheckbox,
					name: 'csd',
					list: Twinkle.speedy.generateCsdList(Twinkle.speedy.talkList, mode),
				});
				break;
			default:
				break;
		}
		// custom rationale lives under general criteria when tagging
		let generalCriteria = Twinkle.speedy.generalList;
		if (!Twinkle.speedy.mode.isSysop(mode)) {
			generalCriteria = [
				...Twinkle.speedy.customRationale,
				...(Array.isArray(generalCriteria) ? generalCriteria : [generalCriteria]),
			];
		}
		work_area.append({
			type: 'header',
			label: window.wgULS('常规', '常規'),
		});
		work_area.append({
			type: radioOrCheckbox,
			name: 'csd',
			list: Twinkle.speedy.generateCsdList(generalCriteria, mode),
		});
		if (!Twinkle.speedy.mode.isSysop(mode)) {
			work_area.append({
				type: 'div',
				label: window.wgULS(
					'提报侵权页面，请使用Twinkle的“侵权”功能。',
					'提報侵權頁面，請使用Twinkle的「侵權」功能。'
				),
			});
		}
		if (mw.config.get('wgIsRedirect') || Morebits.userIsSysop) {
			work_area.append({
				type: 'header',
				label: '重定向',
			});
			work_area.append({
				type: radioOrCheckbox,
				name: 'csd',
				list: Twinkle.speedy.generateCsdList(Twinkle.speedy.redirectList, mode),
			});
		}
		const [old_area] = Morebits.quickForm.getElements(form, 'work_area');
		form.replaceChild(work_area.render(), old_area);
		// if sysop, check if CSD is already on the page and fill in custom rationale
		if (isSysopMode && Twinkle.speedy.hasCSD) {
			const [customOption] = $body.find('input[name=csd][value=reason]');
			if (customOption) {
				if (Twinkle.getPref('speedySelectionStyle') !== 'radioClick') {
					// force listeners to re-init
					customOption.click();
					customOption.parentNode.appendChild(customOption.subgroup);
				}
				customOption.subgroup.querySelector('input').value = decodeURIComponent(
					$body.find('#delete-reason').text()
				).replace(/\+/g, ' ');
			}
		}
		// enlarge G7 radio/checkbox and its label
		if (document.querySelector('input[value="g7"]') && Twinkle.getPref('enlargeG7Input')) {
			document.querySelector('input[value="g7"]').style =
				'height: 2em; width: 2em; height: -moz-initial; width: -moz-initial; -moz-transform: scale(2); -o-transform: scale(2);';
			document.querySelector('input[value="g7"]').labels[0].style = 'font-size: 1.5em; line-height: 1.5em;';
		}
		if (!isSysopMode && mw.config.get('wgPageContentModel') !== 'wikitext') {
			$body.find('[name=tag_options]').hide();
			$body.find('[name=work_area]').empty();
			const message = [
				window.wgULS('Twinkle不支持在页面内容模型为', 'Twinkle不支援在頁面內容模型為'),
				mw.config.get('wgPageContentModel'),
				window.wgULS('的页面上挂上快速删除模板，请参见', '的頁面上掛上快速刪除模板，請參見'),
				$('<a>')
					.attr({
						target: '_blank',
						rel: 'noopener noreferrer',
						href: mw.util.getUrl('LIB:SPECIALSD'),
					})
					.text(window.wgULS('手动放置模板时的注意事项', '手動放置模板時的注意事項'))[0],
				'。',
			];
			$body.find('[name=work_area]').append(message);
			Morebits.simpleWindow.setButtonsEnabled(false);
		} else {
			Morebits.simpleWindow.setButtonsEnabled(true);
		}
	};
	Twinkle.speedy.callback.priorDeletionCount = () => {
		const query = {
			action: 'query',
			format: 'json',
			list: 'logevents',
			letype: 'delete',
			leaction: 'delete/delete',
			// Just pure page deletion, no redirect overwrites or revdel
			letitle: mw.config.get('wgPageName'),
			leprop: '',
			// We're just counting we don't actually care about the entries
			lelimit: 5,
			// A little bit goes a long way
		};

		new Morebits.wiki.api(window.wgULS('检查之前的删除', '檢查之前的刪除'), query, (apiobj) => {
			const response = apiobj.getResponse();
			const delCount = response.query.logevents.length;
			if (delCount) {
				let message = window.wgULS('被删除', '被刪除');
				if (response.continue) {
					message += window.wgULS('超过', '超過');
				}
				message += `${delCount}次`;
				// 3+ seems problematic
				if (delCount >= 3) {
					$body.find('#prior-deletion-count').css('color', '#ff0000');
				}
				// Provide a link to page logs (CSD templates have one for sysops)
				const link = Morebits.htmlNode('a', window.wgULS('（日志）', '（日誌）'));
				link.setAttribute(
					'href',
					mw.util.getUrl('Special:Log', {
						page: mw.config.get('wgPageName'),
					})
				);
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener noreferrer');
				$body.find('#prior-deletion-count').text(message); // Space before log link
				$body.find('#prior-deletion-count').append(link);
			}
		}).post();
	};
	Twinkle.speedy.generateCsdList = (list, mode) => {
		// mode switches
		const isSysopMode = Twinkle.speedy.mode.isSysop(mode);
		const multiple = Twinkle.speedy.mode.isMultiple(mode);
		const hasSubmitButton = Twinkle.speedy.mode.hasSubmitButton(mode);
		const openSubgroupHandler = (e) => {
			$(e.target.form).find('input').prop('disabled', true);
			$(e.target.form).children().css('color', 'gray');
			$(e.target).parent().css('color', 'black').find('input').prop('disabled', false);
			$(e.target).parent().find('input:text')[0].focus();
			e.stopPropagation();
		};
		const submitSubgroupHandler = (e) => {
			const evaluateType = Twinkle.speedy.mode.isSysop(mode) ? 'evaluateSysop' : 'evaluateUser';
			Twinkle.speedy.callback[evaluateType](e);
			e.stopPropagation();
		};
		return Array.prototype.map.call(list, (critElement) => {
			const criterion = {
				...critElement,
			};
			if (multiple) {
				if (criterion.hideWhenMultiple) {
					return null;
				}
				if (criterion.hideSubgroupWhenMultiple) {
					criterion.subgroup = null;
				}
			} else {
				if (criterion.hideWhenSingle) {
					return null;
				}
				if (criterion.hideSubgroupWhenSingle) {
					criterion.subgroup = null;
				}
			}
			if (isSysopMode) {
				if (criterion.hideWhenSysop) {
					return null;
				}
				if (criterion.hideSubgroupWhenSysop) {
					criterion.subgroup = null;
				}
			} else {
				if (criterion.hideWhenUser) {
					return null;
				}
				if (criterion.hideSubgroupWhenUser) {
					criterion.subgroup = null;
				}
			}
			if (mw.config.get('wgIsRedirect') && criterion.hideWhenRedirect) {
				return null;
			}
			if (
				criterion.showInNamespaces &&
				!criterion.showInNamespaces.includes(mw.config.get('wgNamespaceNumber'))
			) {
				return null;
			} else if (
				criterion.hideInNamespaces &&
				criterion.hideInNamespaces.includes(mw.config.get('wgNamespaceNumber'))
			) {
				return null;
			}
			if (criterion.subgroup && !hasSubmitButton) {
				if (Array.isArray(criterion.subgroup)) {
					criterion.subgroup.push({
						type: 'button',
						name: 'submit',
						label: isSysopMode
							? window.wgULS('删除页面', '刪除頁面')
							: window.wgULS('标记页面', '標記頁面'),
						event: submitSubgroupHandler,
					});
				} else {
					criterion.subgroup = [
						criterion.subgroup,
						{
							type: 'button',
							name: 'submit',
							label: isSysopMode
								? window.wgULS('删除页面', '刪除頁面')
								: window.wgULS('标记页面', '標記頁面'),
							event: submitSubgroupHandler,
						},
					];
				}
				// FIXME: does this do anything?
				criterion.event = openSubgroupHandler;
			}
			if (isSysopMode) {
				const originalEvent = criterion.event;
				criterion.event = (e) => {
					if (multiple) {
						return originalEvent(e);
					}
					const normalizedCriterion = Twinkle.speedy.normalizeHash[e.target.value];
					$body
						.find('[name=openusertalk]')
						.prop(
							'checked',
							Twinkle.getPref('openUserTalkPageOnSpeedyDelete').includes(normalizedCriterion)
						);
					if (originalEvent) {
						return originalEvent(e);
					}
				};
			}
			return criterion;
		});
	};
	Twinkle.speedy.customRationale = [
		{
			label: `自定义理由${Morebits.userIsSysop ? '（自定义删除理由）' : ''}`,
			value: 'reason',
			tooltip: '该页至少应该符合一条快速删除的标准，并且您必须在理由中提到。',
			subgroup: {
				name: 'reason_1',
				type: 'input',
				label: '理由：',
				size: 60,
			},
		},
	];
	Twinkle.speedy.fileList = [
		{
			label: 'F1：明显不符合本站著作权条例的文件',
			value: 'f1',
			tooltip:
				'包括以下情况：1.上传后3天内仍然来源不明、著作权不明的文件。2.上传者宣称拥有，而在其他来源找到的文件。3.文件宣称由某作者依据某自由著作权协议发布，但找不到该自由协议的声明。4.其他明显侵权的文件，可附加侵权理由。',
		},
		{
			label: 'F2：重复且不再被使用的文件',
			value: 'f2',
			tooltip:
				'包括以下情况：与现有文件完全相同（或与现有文件内容一致但尺寸较小），且没有客观需要（如某些场合需使用小尺寸图片）的文件。或是被更加清晰的文件、SVG格式文件所取代的文件。请提报者确定文件没有任何页面使用后再提报删除，并附注对应质量更好的文件名。',
			subgroup: {
				name: 'f2_filename',
				type: 'input',
				label: '新文件名：',
				tooltip: '可不含“File:”前缀。',
			},
		},
	];
	Twinkle.speedy.articleList = [
		{
			label: 'A1：内容空泛或完全没有内容。',
			value: 'a1',
			tooltip:
				'条目的内容笼统，或甚至根本没有提及条目主体，使条目不能用以区分其他事物；或条目只包括外部链接、参见、参考来源、分类、模板，而没有文字描述。消歧义页、重定向页不适用此条。请注意有些用户可能会多次保存，若此类页面的最后一次编辑时间超过24小时，则可提请快速删除。',
		},
		{
			label: 'A2：与其他条目或其历史版本重复，且不适合作为其重定向。',
			value: 'a2',
			tooltip:
				'条目创建时的内容，与其他现有条目（或其历史版本）内容完全相同或非常相似，且名称不适合作为后者的重定向。不包括拆分、合并、重组后产生的条目。如有疑虑，可转交删除讨论。若后创建的条目名称可作为重定向，可直接改为重定向；若先创建的条目宜作为后创建条目的重定向，请提请移动请求。',
			subgroup: {
				name: 'a2_pagename',
				type: 'input',
				label: '现有条目名：',
				tooltip: '不自动加上链接，若需要请自行加上[[]]。',
				size: 60,
			},
		},
		{
			label: 'A3：非现代汉语或翻译拙劣的条目',
			value: 'a3',
			tooltip:
				'条目内容绝大部分非现代汉语，包括未翻译的外语、方言及文言文；或翻译质量低下，以至于难以理解或出现较多错误。',
		},
	];
	Twinkle.speedy.categoryList = [
		{
			label: 'O2：空分类。',
			value: 'o2',
			tooltip: '没有收录任何页面、文件、子分类的分类。Category:请勿删除的分类中的分类不适用。',
		},
	];
	Twinkle.speedy.draftList = [
		{
			label: 'O3：废弃草稿。',
			value: 'o3',
			tooltip: '草稿名字空间内六个月内无编辑的页面。',
		},
	];
	Twinkle.speedy.userList = [
		{
			label: 'O1：用户请求删除自己的用户页。',
			value: 'o1',
			tooltip: '管理员需查看编辑历史，确认该页面不是从其他名字空间移动而来。',
		},
	];
	Twinkle.speedy.generalList = [
		{
			label: 'G1：明显违反法律法规或违背公序良俗的页面',
			value: 'g1',
			tooltip:
				'明显违反服务器所在地的法律法规及有关规定，或突破社会公序良俗底线，按照中华人民共和国互联网管理规定应予删除的页面。',
		},
		{
			label: 'G2：没有实际内容的页面',
			value: 'g2',
			tooltip:
				'仅包括无意义字符串而没有实际内容的页面。由用户本人创建的用户页、用户讨论页，及专为测试提供的沙盒，不适用此准则。',
		},
		{
			label: 'G3：纯粹破坏',
			value: 'g3',
			tooltip:
				'包括但不限于明显的恶作剧、错误信息、人身攻击等，以及清理移动破坏时留下的重定向。若收到或发现严重的人身攻击与诋毁，管理员及其他用户应通知监督员进行监督隐藏。',
		},
		{
			label: 'G4：重新创建已被删除的页面',
			value: 'g4',
			tooltip:
				'若现有页面与曾在删除讨论（含页面存废讨论、文件存废讨论和侵权审核，不含快速删除）中被删除内容相同或非常相似，且现有内容仍然适用删除讨论中的结论，无论标题是否相同，都适用本标准。若现有页面标题与已删版本不一致，则提请速删者应一并注明已删版本的页面名；若该页面之前被快速删除，请以相同理由重新提请速删。若现有内容不适用删除讨论中的结论，应重新提出删除讨论。',
			subgroup: [
				{
					name: 'g4_pagename',
					type: 'input',
					label: '已删版此页面名：',
					size: 60,
				},
			],
			hideSubgroupWhenMultiple: true,
		},
		{
			label: 'G5：因技术原因删除页面',
			value: 'g5',
			tooltip:
				'包括以下情形：因移动请求而删除页面；以覆盖删除重定向；删除无用的MediaWiki页面，及其他技术团队或界面管理员认为有必要执行的快速删除情形。',
		},
		{
			label: 'G6：原作者提请删除或清空页面，且页面原作者仅有一人',
			value: 'g6',
			tooltip:
				'页面原作者持合理理由提出的快速删除；或页面原作者（实际贡献者）清空页面，其他用户提交的快速删除。页面原作者（实际贡献者）仅一人时满足本准则。若页面实际贡献者多于一人，请持合理理由提交删除讨论。后一情形不包括用户页、用户讨论页，且应在页面最后一次编辑6小时后提出。被导入的页面，导入者视为原作者。',
			subgroup: {
				name: 'g6_rationale',
				type: 'input',
				label: '删除原因：',
				size: 60,
			},
			hideSubgroupWhenSysop: true,
		},
		{
			label: 'G7：明显的广告宣传',
			value: 'g7',
			tooltip:
				'应用于明显的广告宣传，或只有相关人物、组织等事物联系方法（包括但不限于电话、地址、电子邮箱、即时通讯软件联系方式（如QQ号、微信号）、社交媒体链接）。若宣传语气不明显，建议转交删除讨论。',
		},
		{
			label: 'G8：未列明可靠来源且语调负面的生者传记',
			value: 'g8',
			tooltip: '本情况下有的页面严重侵犯他人名誉权，有时可能侵犯隐私权，可能需要提请监督。',
		},
		{
			label: 'G9：孤立页面',
			value: 'g9',
			tooltip:
				'包括以下几种类型：1.没有对应文件的文件页面；2.没有对应母页面的子页面（用户页子页面除外）；3.指向不存在页面的重定向；4.没有对应内容页面的讨论页（讨论页存档、用户讨论页，以及在主页面挂有{{CSD Placeholder}}模板的讨论页除外）；5.不存在注册用户的用户页及用户页子页面（随用户更名产生的用户页重定向除外）。请在删除时注意有无将内容移至他处的必要。',
		},
	];
	Twinkle.speedy.redirectList = [
		{
			label: 'R1：不能发挥实际作用的重定向。',
			value: 'r1',
			tooltip:
				'包括以下情况：1.指向本身或循环的重定向，如A→B→C→……→A或A→A（繁简重定向不适用此项）；2.格式错误的重定向，包括标题仅为繁体、繁简混用、消歧义使用的括弧或空格错误、间隔号使用错误（因类推简化字未收录至《通用规范汉字表》导致的繁简混杂情形，或系统无法自动进行繁简处理的情形，则不适用）。若重定向页面标题，与合乎命名常规的目标页面标题之间，仅存在繁简字体的区别，而不存在词语用法区别，则不保留该重定向。因系统无法自动繁简转换而必须保留的重定向页面除外。对于其他未列出的情况，若用户认为该重定向无法发挥实际作用，且依据常识没有任何争议，可凭合理理由提请速删，由管理员判断。指向不存在页面的重定向，适用G5准则。',
			subgroup: {
				name: 'r1_type',
				type: 'select',
				label: '适用类型：',
				list: [
					{
						label: '请选择',
						value: '',
					},
					{
						label: '指向本身或循环的重定向',
						value: '指向本身或循环的重定向。',
					},
					{
						label: '标题繁简混用',
						value: '标题繁简混用。',
					},
					{
						label: '消歧义使用的括号或空格错误',
						value: '消歧义使用的括号或空格错误。',
					},
					{
						label: '间隔号使用错误',
						value: '间隔号使用错误。',
					},
					{
						label: '其他理由（请勾选上方“应用多个理由”，并填写自定义理由）',
						value: '',
					},
				],
			},
		},
		{
			label: 'R2：名称与导向目标代表事物不一致或不完全一致的重定向。',
			value: 'r2',
			tooltip:
				'包括但不限于以下情况：1.由任何非条目页面（除用户页）导向条目页的重定向，以及由条目页导向任何非条目页面的重定向。2.明显笔误的重定向，如出现不常见的错别字等。（别称重定向不适用此项。若含错别字或有笔误的重定向使用频率高，此类重定向有助于帮助用户寻找到正确的页面，不适用此标准。有争议的此类重定向宜提交删除讨论。）3.明显与导向目标所涵盖的主题无关，或比导向目标所涵盖的主题更广泛的重定向。（若不明显，可改为提交删除讨论。）',
			subgroup: {
				name: 'r2_type',
				type: 'select',
				label: '适用类型：',
				list: [
					{
						label: '请选择',
						value: '',
					},
					{
						label: '由非条目页面（除用户页）导向条目页的重定向',
						value: '由非条目页面（除用户页）导向条目页的重定向。',
					},
					{
						label: '由条目页导向非条目页面的重定向',
						value: '由条目页导向任何非条目页面的重定向。',
					},
					{
						label: '明显笔误的重定向',
						value: '明显笔误的重定向。',
					},
					{
						label: '与导向目标无关或比其范围更广泛的重定向',
						value: '与导向目标无关或比其范围更广泛的重定向。',
					},
					{
						label: '其他理由（请勾选上方“应用多个理由”，并填写自定义理由）',
						value: '',
					},
				],
			},
		},
	];
	Twinkle.speedy.normalizeHash = {
		reason: 'db',
		multiple: 'multiple',
		'multiple-finish': 'multiple-finish',
		g1: 'g1',
		g2: 'g2',
		g3: 'g3',
		g4: 'g4',
		g5: 'g5',
		g6: 'g6',
		g7: 'g7',
		g8: 'g8',
		g9: 'g9',
		a1: 'a1',
		a2: 'a2',
		a3: 'a3',
		r1: 'r1',
		r2: 'r2',
		f1: 'f1',
		f2: 'f2',
		f3: 'f3',
		f4: 'f4',
		f5: 'f5',
		o1: 'o1',
		o2: 'o2',
		o3: 'o3',
	};
	Twinkle.speedy.callbacks = {
		getTemplateCodeAndParams: (params) => {
			let code;
			let parameters;
			let i;
			if (params.normalizeds.length > 1) {
				code = '{{delete';
				params.utparams = {};
				for (const [index, norm] of params.normalizeds.entries()) {
					if (norm !== 'db') {
						code += `|${norm.toUpperCase()}`;
					}
					parameters = params.templateParams[index] || [];
					for (const i_ in parameters) {
						if (typeof parameters[i_] === 'string') {
							code += `|${parameters[i_]}`;
						}
					}
					params.utparams = {
						...params.utparams,
						...Twinkle.speedy.getUserTalkParameters(norm, parameters),
					};
				}
				code += '}}';
			} else {
				parameters = params.templateParams[0] || [];
				code = '{{delete';
				if (params.values[0] !== 'reason') {
					code += `|${params.values[0]}`;
				}
				for (i in parameters) {
					if (typeof parameters[i] === 'string') {
						code += `|${parameters[i]}`;
					}
				}
				code += '}}';
				params.utparams = Twinkle.speedy.getUserTalkParameters(params.normalizeds[0], parameters);
			}
			return [code, params.utparams];
		},
		parseWikitext: (title, wikitext, callback) => {
			const query = {
				action: 'parse',
				prop: 'text',
				pst: 'true',
				text: wikitext,
				contentmodel: 'wikitext',
				title,
			};
			const statusIndicator = new Morebits.status(window.wgULS('构造删除理由', '構造刪除理由'));
			const api = new Morebits.wiki.api(
				window.wgULS('解析删除模板', '解析刪除模板'),
				query,
				(apiObj) => {
					const reason = decodeURIComponent(
						$(apiObj.getXML().querySelector('text').childNodes[0].nodeValue)
							.find('#delete-reason')
							.text()
							.replace(/\+/g, ' ')
					);
					if (reason) {
						statusIndicator.info('完成');
					} else {
						statusIndicator.warn(window.wgULS('未能从删除模板生成删除理由', '未能從刪除模板生成刪除理由'));
					}
					callback(reason);
				},
				statusIndicator
			);
			api.post();
		},
		sysop: {
			main: (params) => {
				let reason;
				if (!params.normalizeds.length && params.normalizeds[0] === 'db') {
					reason = prompt(window.wgULS('输入删除理由：', '輸入刪除理由：'), '');
					Twinkle.speedy.callbacks.sysop.deletePage(reason, params);
				} else {
					const [code] = Twinkle.speedy.callbacks.getTemplateCodeAndParams(params);
					Twinkle.speedy.callbacks.parseWikitext(mw.config.get('wgPageName'), code, (deleteReason) => {
						if (params.promptForSummary) {
							deleteReason = prompt(
								window.wgULS(
									'输入删除理由，或单击确定以接受自动生成的：',
									'輸入刪除理由，或點擊確定以接受自動生成的：'
								),
								deleteReason
							);
						}
						Twinkle.speedy.callbacks.sysop.deletePage(deleteReason, params);
					});
				}
			},
			deletePage: (reason, params) => {
				const thispage = new Morebits.wiki.page(
					mw.config.get('wgPageName'),
					window.wgULS('删除页面', '刪除頁面')
				);
				if (reason === null) {
					return Morebits.status.error(
						window.wgULS('询问理由', '詢問理由'),
						window.wgULS('用户取消操作。', '使用者取消操作。')
					);
				} else if (!reason || !reason.trim()) {
					return Morebits.status.error(
						window.wgULS('询问理由', '詢問理由'),
						window.wgULS('你不给我理由…我就…不管了…', '你不給我理由…我就…不管了…')
					);
				}
				const deleteMain = () => {
					thispage.setEditSummary(reason);
					thispage.setChangeTags(Twinkle.changeTags);
					thispage.setWatchlist(params.watch);
					thispage.deletePage(() => {
						thispage.getStatusElement().info('完成');
						Twinkle.speedy.callbacks.sysop.deleteTalk(params);
					});
				};
				// look up initial contributor. If prompting user for deletion reason, just display a link.
				// Otherwise open the talk page directly
				if (params.openUserTalk) {
					thispage.setCallbackParameters(params);
					thispage.lookupCreation(() => {
						Twinkle.speedy.callbacks.sysop.openUserTalkPage(thispage);
						deleteMain();
					});
				} else {
					deleteMain();
				}
			},
			deleteTalk: (params) => {
				// delete talk page
				if (
					params.deleteTalkPage &&
					params.normalized !== 'o1' &&
					!document.querySelector('#ca-talk').classList.contains('new')
				) {
					const talkpage = new Morebits.wiki.page(
						`${
							mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceNumber') + 1]
						}:${mw.config.get('wgTitle')}`,
						window.wgULS('删除讨论页', '刪除討論頁')
					);
					talkpage.setEditSummary(
						`[[LIB:CSD#G9|G9]]: 孤立页面：已删除页面“${Morebits.pageNameNorm}”的讨论页`
					);
					talkpage.setChangeTags(Twinkle.changeTags);
					talkpage.deletePage();
					// this is ugly, but because of the architecture of wiki.api, it is needed
					// (otherwise success/failure messages for the previous action would be suppressed)
					setTimeout(() => {
						Twinkle.speedy.callbacks.sysop.deleteRedirects(params);
					}, 1800);
				} else {
					Twinkle.speedy.callbacks.sysop.deleteRedirects(params);
				}
			},
			deleteRedirects: (params) => {
				// delete redirects
				if (params.deleteRedirects) {
					const query = {
						action: 'query',
						titles: mw.config.get('wgPageName'),
						prop: 'redirects',
						rdlimit: 5000, // 500 is max for normal users, 5000 for bots and sysops
					};

					const ysarchives_api = new Morebits.wiki.api(
						window.wgULS('获取重定向列表…', '取得重新導向列表…'),
						query,
						Twinkle.speedy.callbacks.sysop.deleteRedirectsMain,
						new Morebits.status(window.wgULS('删除重定向', '刪除重新導向'))
					);
					ysarchives_api.params = params;
					ysarchives_api.post();
				}
				// prompt for protect on G7
				let $link;
				let $bigtext;
				if (params.normalized === 'g7') {
					$link = $('<a>')
						.attr('href', '#')
						.text(window.wgULS('单击这里施行保护', '點擊這裡施行保護'))
						.css({
							'font-size': '125%',
							'font-weight': 'bold',
						})
						.on('click', () => {
							Morebits.wiki.actionCompleted.redirect = null;
							Twinkle.speedy.dialog.close();
							mw.config.set('wgArticleId', 0);
							Twinkle.protect.callback();
						});
					$bigtext = $('<span>')
						.css({
							'font-size': '125%',
							'font-weight': 'bold',
						})
						.text(window.wgULS('白纸保护该页', '白紙保護該頁'));
					Morebits.status.info($bigtext[0], $link[0]);
				}
				// promote Unlink tool
				if (mw.config.get('wgNamespaceNumber') === 6) {
					$link = $('<a>')
						.attr('href', '#')
						.text(window.wgULS('单击这里前往取消链入工具', '點擊這裡前往取消連入工具'))
						.css({
							'font-weight': 'bold',
						})
						.on('click', () => {
							Morebits.wiki.actionCompleted.redirect = null;
							Twinkle.speedy.dialog.close();
							Twinkle.unlink.callback(
								`${window.wgULS('取消对已删除文件 ', '取消對已刪除檔案 ') + Morebits.pageNameNorm} 的使用`
							);
						});
					$bigtext = $('<span>')
						.css({
							'font-weight': 'bold',
						})
						.text(window.wgULS('取消对已删除文件的使用', '取消對已刪除檔案的使用'));
					Morebits.status.info($bigtext[0], $link[0]);
				} else {
					$link = $('<a>')
						.attr('href', '#')
						.text(window.wgULS('单击这里前往取消链入工具', '點擊這裡前往取消連入工具'))
						.css({
							'font-weight': 'bold',
						})
						.on('click', () => {
							Morebits.wiki.actionCompleted.redirect = null;
							Twinkle.speedy.dialog.close();
							Twinkle.unlink.callback(
								window.wgULS('取消对已删除页面 ', '取消對已刪除頁面 ') +
									Morebits.pageNameNorm +
									window.wgULS(' 的链接', ' 的連結')
							);
						});
					$bigtext = $('<span>').text(window.wgULS('取消对已删除页面的链接', '取消對已刪除頁面的連結')).css({
						'font-weight': 'bold',
					});
					Morebits.status.info($bigtext[0], $link[0]);
				}
				$link = $('<a>')
					.attr('href', mw.util.getUrl('Special:RandomInCategory/快速删除候选'))
					.text(window.wgULS('单击前往下一个快速删除候选', '點擊前往下一個快速刪除候選'));
				Morebits.status.info('工具', $link[0]);
			},
			openUserTalkPage: (pageobj) => {
				pageobj.getStatusElement().unlink(); // don't need it anymore
				const user = pageobj.getCreator();
				const params = pageobj.getCallbackParameters();
				const query = {
					action: 'edit',
					preview: 'yes',
					vanarticle: Morebits.pageNameNorm,
				};
				const title = `User talk:${user}`;
				if (
					params.normalized === 'db' ||
					Twinkle.getPref('promptForSpeedyDeletionSummary').includes(params.normalized)
				) {
					// provide a link to the user talk page
					const $link = $('<a>')
						.attr({
							href: mw.util.getUrl(title, query),
							target: '_blank',
							rel: 'noopener noreferrer',
						})
						.css({
							'font-size': '125%',
							'font-weight': 'bold',
						})
						.text(window.wgULS('点此打开User talk:', '點此打開User talk:') + user);
					const $bigtext = $('<span>')
						.css({
							'font-size': '125%',
							'font-weight': 'bold',
						})
						.text(window.wgULS('通知页面创建者', '通知頁面建立者'));
					Morebits.status.info($bigtext[0], $link[0]);
				} else {
					// open the initial contributor's talk page
					const statusIndicator = new Morebits.status(
						window.wgULS('打开用户', '打開使用者') +
							user +
							window.wgULS('的讨论页编辑窗口', '的討論頁編輯視窗'),
						window.wgULS('打开中…', '打開中…')
					);
					switch (Twinkle.getPref('userTalkPageMode')) {
						case 'tab':
							window.open(mw.util.getUrl(title, query), '_blank', 'noopener,noreferrer');
							break;
						case 'blank':
							window.open(
								mw.util.getUrl(title, query),
								'_blank',
								'noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
							);
							break;
						/* case 'window': */
						/* falls through */
						default:
							window.open(
								mw.util.getUrl(title, query),
								window.name === 'twinklewarnwindow' ? '_blank' : 'twinklewarnwindow',
								window.name === 'twinklewarnwindow'
									? 'noopener,noreferrer,'
									: '' +
											'location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
							);
							break;
					}
					statusIndicator.info('完成');
				}
			},
			deleteRedirectsMain: (apiobj) => {
				const xmlDoc = apiobj.getXML();
				const $snapshot = $(xmlDoc).find('redirects rd');
				const total = $snapshot.length;
				const statusIndicator = apiobj.statelem;
				if (!total) {
					statusIndicator.info(window.wgULS('未发现重定向', '未發現重新導向'));
					return;
				}
				statusIndicator.status('0%');
				let current = 0;
				const onsuccess = (apiobjInner) => {
					const now = `${Number.parseInt((100 * ++current) / total, 10)}%`;
					statusIndicator.update(now);
					apiobjInner.statelem.unlink();
					if (current >= total) {
						statusIndicator.info(`${now}（完成）`);
						Morebits.wiki.removeCheckpoint();
					}
				};
				Morebits.wiki.addCheckpoint();
				$snapshot.each((_key, value) => {
					const title = $(value).attr('title');
					const page = new Morebits.wiki.page(
						title,
						`${window.wgULS('删除重定向 "', '刪除重新導向 "') + title}"`
					);
					page.setEditSummary(`[[LIB:CSD#G9|G9]]: 孤立页面：重定向到已删除页面“${Morebits.pageNameNorm}”`);
					page.setChangeTags(Twinkle.changeTags);
					page.deletePage(onsuccess);
				});
			},
		},
		user: {
			main: (pageobj) => {
				const statelem = pageobj.getStatusElement();
				if (!pageobj.exists()) {
					statelem.error(window.wgULS('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
					return;
				}
				let text = pageobj.getPageText();
				const params = pageobj.getCallbackParameters();
				statelem.status(window.wgULS('检查页面已有标记…', '檢查頁面已有標記…'));
				// check for existing deletion tags
				const textNoSd = text.replace(
					/\{\{\s*(db(-\w*)?|d|delete|deletebecause|speedy|csd|速刪|速删|快删|快刪)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
					''
				);
				if (
					text !== textNoSd &&
					!confirm(
						window.wgULS(
							'在页面上找到快速删除模板，要移除并加入新的吗？',
							'在頁面上找到快速刪除模板，要移除並加入新的嗎？'
						)
					)
				) {
					statelem.error(window.wgULS('快速删除模板已被置于页面中。', '快速刪除模板已被置於頁面中。'));
					return;
				}
				text = textNoSd;
				const copyvio = /(?:\{\{\s*(copyvio|侵权|侵權)[^{}]*?\}\})/i.exec(text);
				if (
					copyvio &&
					!confirm(
						window.wgULS(
							'著作权验证模板已被置于页面中，您是否仍想加入一个快速删除模板？',
							'著作權驗證模板已被置於頁面中，您是否仍想加入一個快速刪除模板？'
						)
					)
				) {
					statelem.error(window.wgULS('页面中已有著作权验证模板。', '頁面中已有著作權驗證模板。'));
					return;
				}
				const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
				if (
					xfd &&
					!confirm(
						window.wgULS('删除相关模板{{', '刪除相關模板{{') +
							xfd[1] +
							window.wgULS(
								'}}已被置于页面中，您是否仍想加入一个快速删除模板？',
								'}}已被置於頁面中，您是否仍想加入一個快速刪除模板？'
							)
					)
				) {
					statelem.error(window.wgULS('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
					return;
				}
				// given the params, builds the template and also adds the user talk page parameters to the params that were passed in
				// returns => [<string> wikitext, <object> utparams]
				const buildData = Twinkle.speedy.callbacks.getTemplateCodeAndParams(params);
				let [code] = buildData;
				[, params.utparams] = buildData;
				const thispage = new Morebits.wiki.page(mw.config.get('wgPageName'));
				// patrol the page, if reached from Special:NewPages
				if (Twinkle.getPref('markSpeedyPagesAsPatrolled')) {
					thispage.patrol();
				}
				// Wrap SD template in noinclude tags if we are in template space.
				// Won't work with userboxes in userspace, or any other transcluded page outside template space
				if (mw.config.get('wgNamespaceNumber') === 10) {
					// Template:
					code = `<noinclude>${code}</noinclude>`;
				}
				// Remove tags that become superfluous with this action
				text = text.replace(
					/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g,
					''
				);
				if (mw.config.get('wgNamespaceNumber') === 6) {
					// remove "move to Commons" tag - deletion-tagged files cannot be moved to Commons
					text = text.replace(
						/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (ysarchives share|wikimedia commons)|copy to (ysarchives share|wikimedia commons))[^}]*\}\}/gi,
						''
					);
				}
				if (params.requestsalt) {
					code = `{{salt}}\n${code}`;
				}
				// Generate edit summary for edit
				let editsummary;
				if (params.normalizeds.length > 1) {
					editsummary = window.wgULS('请求快速删除（', '請求快速刪除（');
					for (const norm of params.normalizeds) {
						if (norm !== 'db') {
							editsummary += `[[LIB:CSD#${norm.toUpperCase()}|CSD ${norm.toUpperCase()}]]、`;
						}
					}
					editsummary = editsummary.slice(0, Math.max(0, editsummary.length - 1)); // remove trailing comma
					editsummary += '）';
				} else if (params.normalizeds[0] === 'db') {
					editsummary =
						window.wgULS('请求[[LIB:CSD|快速删除]]：', '請求[[LIB:CSD|快速刪除]]：') +
						params.templateParams[0]['1'];
				} else {
					editsummary = `${window.wgULS(
						'请求快速删除',
						'請求快速刪除'
					)}（[[LIB:CSD#${params.normalizeds[0].toUpperCase()}|CSD ${params.normalizeds[0].toUpperCase()}]]）`;
				}
				// Blank attack pages
				if (params.blank) {
					text = code;
				} else {
					// Insert tag after short description or any hatnotes
					const ysarchives_page = new Morebits.wikitext.page(text);
					text = ysarchives_page.insertAfterTemplates(`${code}\n`, Twinkle.hatnoteRegex).getText();
				}
				pageobj.setPageText(text);
				pageobj.setEditSummary(editsummary);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(params.watch);
				pageobj.save(Twinkle.speedy.callbacks.user.tagComplete);
			},
			tagComplete: (pageobj) => {
				const params = pageobj.getCallbackParameters();
				// Notification to first contributor
				if (params.usertalk) {
					const callback = (pageObj) => {
						let initialContrib = pageObj.getCreator();
						// disallow warning yourself
						if (initialContrib === mw.config.get('wgUserName')) {
							Morebits.status.warn(
								`您（${initialContrib}${window.wgULS('）创建了该页，跳过通知', '）建立了該頁，跳過通知')}`
							);
							initialContrib = null;
							// don't notify users when their user talk page is nominated
						} else if (
							initialContrib === mw.config.get('wgTitle') &&
							mw.config.get('wgNamespaceNumber') === 3
						) {
							Morebits.status.warn(
								window.wgULS(
									'通知页面创建者：用户创建了自己的讨论页',
									'通知頁面建立者：使用者建立了自己的討論頁'
								)
							);
							initialContrib = null;
							// quick hack to prevent excessive unwanted notifications. Should actually be configurable on recipient page...
						} else if (initialContrib === 'A2093064-bot' && params.normalizeds[0] === 'g15') {
							Morebits.status.warn(
								window.wgULS(
									'通知页面创建者：由机器人创建，跳过通知',
									'通知頁面建立者：由機器人建立，跳過通知'
								)
							);
							initialContrib = null;
						} else {
							const talkPageName = `User talk:${initialContrib}`;
							const usertalkpage = new Morebits.wiki.page(
								talkPageName,
								`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + initialContrib}）`
							);
							let notifytext;
							notifytext = '\n{{'.concat('subst:', `db-notice|target=${Morebits.pageNameNorm}`);
							notifytext += "|nowelcome=yes'}}--~~".concat('~~');
							let editsummary = '通知：';
							if (params.normalizeds.includes('g3')) {
								editsummary += '一攻击性页面';
							} else {
								// no article name in summary for G10 deletions
								editsummary += `页面[[${Morebits.pageNameNorm}]]`;
							}
							editsummary += '快速删除提名';
							usertalkpage.setAppendText(notifytext);
							usertalkpage.setEditSummary(editsummary);
							usertalkpage.setChangeTags(Twinkle.changeTags);
							usertalkpage.setCreateOption('recreate');
							usertalkpage.setFollowRedirect(true, false);
							usertalkpage.append();
						}
						// add this nomination to the user's userspace log, if the user has enabled it
						if (params.lognomination) {
							Twinkle.speedy.callbacks.user.addToLog(params, initialContrib);
						}
					};
					const thispage = new Morebits.wiki.page(Morebits.pageNameNorm);
					thispage.lookupCreation(callback);
					// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
				} else if (params.lognomination) {
					Twinkle.speedy.callbacks.user.addToLog(params, null);
				}
			},
			// note: this code is also invoked from twinkleimage
			// the params used are:
			//   for CSD: params.values, params.normalizeds  (note: normalizeds is an array)
			//   for DI: params.fromDI = true, params.templatename, params.normalized  (note: normalized is a string)
			addToLog: (params, initialContrib) => {
				const usl = new Morebits.userspaceLogger(Twinkle.getPref('speedyLogPageName'));
				usl.initialText = `这是该用户使用[[H:TW|Twinkle]]的速删模块做出的[[LIB:CSD|快速删除]]提名列表。\n\n若您不再想保留此日志，请在[[${Twinkle.getPref(
					'configPage'
				)}|参数设置]]中关掉，并使用[[LIB:CSD#O1|CSD O1]]提交快速删除。${
					Morebits.userIsSysop ? '\n\n此日志并不记录用Twinkle直接执行的删除。' : ''
				}`;
				let appendText = `# [[:${Morebits.pageNameNorm}]]：`;
				if (params.fromDI) {
					appendText += `图版[[LIB:CSD#${params.normalized.toUpperCase()}|CSD ${params.normalized.toUpperCase()}]]（{{tl|${
						params.templatename
					}}}）`;
				} else if (params.normalizeds.length > 1) {
					appendText += '多个理由（';
					for (const norm of params.normalizeds) {
						appendText += `[[LIB:CSD#${norm.toUpperCase()}|${norm.toUpperCase()}]]、`;
					}
					appendText = appendText.slice(0, Math.max(0, appendText.length - 1)); // remove trailing comma
					appendText += '）';
				} else if (params.normalizeds[0] === 'db') {
					appendText += '自定义理由';
				} else {
					appendText += `[[LIB:CSD#${params.normalizeds[0].toUpperCase()}|CSD ${params.normalizeds[0].toUpperCase()}]]`;
				}
				if (params.requestsalt) {
					appendText += window.wgULS('；请求白纸保护', '；請求白紙保護');
				}
				if (initialContrib) {
					appendText += `；通知{{user|${initialContrib}}}`;
				}
				appendText += ' ~~'.concat('~', '~~\n');
				usl.changeTags = Twinkle.changeTags;
				usl.log(
					appendText,
					window.wgULS('记录对[[', '記錄對[[') +
						Morebits.pageNameNorm +
						window.wgULS(']]的快速删除提名', ']]的快速刪除提名')
				);
			},
		},
	};
	// validate subgroups in the form passed into the speedy deletion tag
	Twinkle.speedy.getParameters = (form, values) => {
		let parameters = [];
		for (const value of values) {
			const currentParams = [];
			let redimage;
			switch (value) {
				case 'reason':
					if (form['csd.reason_1']) {
						const dbrationale = form['csd.reason_1'].value;
						if (!dbrationale || !dbrationale.trim()) {
							mw.notify(window.wgULS('自定义理由：请指定理由。', '自訂理由：請指定理由。'), {
								type: 'warn',
								tag: 'twinklespeedy',
							});
							parameters = null;
							false;
							continue;
						}
						currentParams['1'] = dbrationale;
					}
					break;
				case 'a2':
					if (form['csd.a2_pagename']) {
						const otherpage = form['csd.a2_pagename'].value;
						if (!otherpage || !otherpage.trim()) {
							mw.notify(
								window.wgULS('CSD A2：请提供现有条目的名称。', 'CSD A2：請提供現有條目的名稱。'),
								{
									type: 'warn',
									tag: 'twinklespeedy',
								}
							);
							parameters = null;
							false;
							continue;
						}
						currentParams.pagename = otherpage;
					}
					break;
				case 'g4':
					if (form['csd.g4_pagename']) {
						const pagename = form['csd.g4_pagename'].value;
						if (!pagename || !pagename.trim()) {
							mw.notify(window.wgULS('CSD G4：请提供页面名称。', 'CSD G4：請提供頁面名稱。'), {
								type: 'warn',
								tag: 'twinklespeedy',
							});
							parameters = null;
							false;
							continue;
						}
						currentParams.pagename = pagename;
					}
					break;
				case 'f2':
					if (form['csd.f2_filename']) {
						redimage = form['csd.f2_filename'].value;
						if (!redimage || !redimage.trim()) {
							mw.notify(
								window.wgULS('CSD F2：请提供另一文件的名称。', 'CSD F2：請提供另一檔案的名稱。'),
								{
									type: 'warn',
									tag: 'twinklespeedy',
								}
							);
							parameters = null;
							false;
							continue;
						}
						currentParams.filename = redimage.replace(
							new RegExp(`^\\s*${Morebits.namespaceRegex(6)}:`, 'i'),
							''
						);
					}
					break;
				case 'r1':
					if (form['csd.r1_type']) {
						const redirtype = form['csd.r1_type'].value;
						if (!redirtype) {
							mw.notify(window.wgULS('CSD R1：请选择适用类型。', 'CSD R1：請選擇適用類別。'), {
								type: 'warn',
								tag: 'twinklespeedy',
							});
							parameters = null;
							false;
							continue;
						}
						currentParams['1'] = redirtype;
					}
					break;
				case 'r2':
					if (form['csd.r2_type']) {
						const redirtype = form['csd.r2_type'].value;
						if (!redirtype) {
							mw.notify(window.wgULS('CSD R2：请选择适用类型。', 'CSD R2：請選擇適用類別。'), {
								type: 'warn',
								tag: 'twinklespeedy',
							});
							parameters = null;
							false;
							continue;
						}
						currentParams['1'] = redirtype;
					}
					break;
				default:
					break;
			}
			parameters.push(currentParams);
		}
		return parameters;
	};
	// Function for processing talk page notification template parameters
	Twinkle.speedy.getUserTalkParameters = (normalized) => {
		const utparams = [];
		switch (normalized) {
			default:
				break;
		}
		return utparams;
	};
	Twinkle.speedy.resolveCsdValues = (e) => {
		const values = (e.target.form ?? e.target).getChecked('csd');
		if (values.length === 0) {
			mw.notify(window.wgULS('请选择一个理据！', '請選擇一個理據！'), {
				type: 'warn',
				tag: 'twinklespeedy',
			});
			return null;
		}
		return values;
	};
	Twinkle.speedy.callback.evaluateSysop = (e) => {
		const form = e.target.form ?? e.target;
		if (e.target.type === 'checkbox' || e.target.type === 'text' || e.target.type === 'select') {
			return;
		}
		const {tag_only} = form;
		if (tag_only && tag_only.checked) {
			Twinkle.speedy.callback.evaluateUser(e);
			return;
		}
		const values = Twinkle.speedy.resolveCsdValues(e);
		if (!values) {
			return;
		}
		const normalizeds = values.map((value) => {
			return Twinkle.speedy.normalizeHash[value];
		});
		// analyse each criterion to determine whether to watch the page, prompt for summary, or open user talk page
		let watchPage;
		let promptForSummary;
		for (const norm of normalizeds) {
			if (Twinkle.getPref('watchSpeedyPages').includes(norm)) {
				watchPage = Twinkle.getPref('watchSpeedyExpiry');
			}
			if (Twinkle.getPref('promptForSpeedyDeletionSummary').includes(norm)) {
				promptForSummary = true;
			}
		}
		const params = {
			values,
			normalizeds,
			watch: watchPage,
			deleteTalkPage: form.talkpage && form.talkpage.checked,
			deleteRedirects: form.redirects.checked,
			openUserTalk: form.openusertalk.checked,
			promptForSummary,
			templateParams: Twinkle.speedy.getParameters(form, values),
		};
		if (!params.templateParams) {
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		Twinkle.speedy.callbacks.sysop.main(params);
	};
	Twinkle.speedy.callback.evaluateUser = (e) => {
		const form = e.target.form ?? e.target;
		if (e.target.type === 'checkbox' || e.target.type === 'text' || e.target.type === 'select') {
			return;
		}
		const values = Twinkle.speedy.resolveCsdValues(e);
		if (!values) {
			return;
		}
		// const multiple = form.multiple.checked;
		const normalizeds = [];
		for (const value of values) {
			const norm = Twinkle.speedy.normalizeHash[value];
			normalizeds.push(norm);
		}
		// analyse each criterion to determine whether to watch the page/notify the creator
		let watchPage = false;
		for (const norm of normalizeds) {
			if (Twinkle.getPref('watchSpeedyPages').includes(norm)) {
				watchPage = Twinkle.getPref('watchSpeedyExpiry');
				false;
				continue; // break
			}
		}

		let notifyuser = false;
		if (form.notify.checked) {
			for (const norm of normalizeds) {
				if (Twinkle.getPref('notifyUserOnSpeedyDeletionNomination').includes(norm)) {
					notifyuser = true;
					false;
					continue; // break
				}
			}
		}

		let csdlog = false;
		if (Twinkle.getPref('logSpeedyNominations')) {
			for (const norm of normalizeds) {
				if (!Twinkle.getPref('noLogOnSpeedyNomination').includes(norm)) {
					csdlog = true;
					false;
					continue; // break
				}
			}
		}

		const params = {
			values,
			normalizeds,
			watch: watchPage,
			usertalk: notifyuser,
			lognomination: csdlog,
			blank: form.blank.checked,
			requestsalt: form.salting.checked,
			templateParams: Twinkle.speedy.getParameters(form, values),
		};
		if (!params.templateParams) {
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = window.wgULS('标记完成', '標記完成');
		const ysarchives_page = new Morebits.wiki.page(
			mw.config.get('wgPageName'),
			window.wgULS('标记页面', '標記頁面')
		);
		ysarchives_page.setCallbackParameters(params);
		ysarchives_page.load(Twinkle.speedy.callbacks.user.main);
	};
	Twinkle.addInitCallback(Twinkle.speedy, 'speedy');
})(jQuery);
