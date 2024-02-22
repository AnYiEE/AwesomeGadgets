// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinkleimage.js */
(function twinkleimage() {
	/**
	 * twinkleimage.js: Image CSD module
	 * Mode of invocation: Tab ("DI")
	 * Active on: Local nonredirect file pages (not on Share)
	 */
	Twinkle.image = () => {
		if (
			mw.config.get('wgNamespaceNumber') === 6 &&
			!document.querySelector('#mw-sharedupload') &&
			document.querySelector('#mw-imagepage-section-filehistory')
		) {
			Twinkle.addPortletLink(
				Twinkle.image.callback,
				window.wgULS('图权', '圖權'),
				'tw-di',
				window.wgULS('提交文件快速删除', '提交檔案快速刪除')
			);
		}
	};
	Twinkle.image.callback = () => {
		const Window = new Morebits.simpleWindow(600, 330);
		Window.setTitle(window.wgULS('文件快速删除候选', '檔案快速刪除候選'));
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('快速删除条例', '快速刪除條例'), 'LIB:CSD');
		Window.addFooterLink(window.wgULS('图权设置', '圖權設定'), 'H:TW/PREF#image');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#image');
		const form = new Morebits.quickForm(Twinkle.image.callback.evaluate);
		form.append({
			type: 'checkbox',
			list: [
				{
					label: window.wgULS('通知上传者', '通知上傳者'),
					value: 'notify',
					name: 'notify',
					tooltip: window.wgULS(
						'若您在标记同一用户的很多文件，请取消此复选框以避免发送过多消息。CSD F5永远不会通知。',
						'若您在標記同一使用者的很多檔案，請取消此核取方塊以避免發送過多訊息。CSD F5永遠不會通知。'
					),
					checked: Twinkle.getPref('notifyUserOnDeli'),
				},
			],
		});
		const field = form.append({
			type: 'field',
			label: window.wgULS('需要的动作', '需要的動作'),
		});
		field.append({
			type: 'radio',
			name: 'type',
			list: [
				{
					label: window.wgULS('明显侵权之文件（CSD F1）', '明顯侵權之檔案（CSD F1）'),
					value: 'no permission',
					tooltip: window.wgULS(
						'上传者宣称拥有，而在其他来源找到的文件，或从侵权的来源获取的文件。',
						'上傳者宣稱擁有，而在其他來源找到的檔案，或從侵權的來源取得的檔案。'
					),
					subgroup: {
						name: 'f1_source',
						type: 'textarea',
						label: window.wgULS('侵权来源：', '侵權來源：'),
					},
				},
				{
					label: window.wgULS('来源不明（CSD F3）', '來源不明（CSD F3）'),
					value: 'no source',
					checked: true,
					tooltip: window.wgULS('本文件并未注明原始出处', '本檔案並未註明原始出處'),
				},
				{
					label: window.wgULS(
						'未知著作权或著作权无法被查证（CSD F3）',
						'未知著作權或著作權無法被查證（CSD F3）'
					),
					value: 'no license',
					tooltip: window.wgULS(
						'本文件缺少著作权信息，或声称的著作权信息无法被查证',
						'本檔案缺少著作權資訊，或聲稱的著作權資訊無法被查證'
					),
				},
				{
					label: window.wgULS(
						'来源不明且未知著作权或著作权无法被查证（CSD F3）',
						'來源不明且未知著作權或著作權無法被查證（CSD F3）'
					),
					value: 'no source no license',
					tooltip: window.wgULS(
						'本文件并未注明原始出处，且本文件缺少著作权信息或声称的著作权信息无法被查证',
						'本檔案並未註明原始出處，且本檔案缺少著作權資訊或聲稱的著作權資訊無法被查證'
					),
				},
				{
					label: window.wgULS('可被替代的非自由著作权文件（CSD F4）', '可被替代的非自由著作權檔案（CSD F4）'),
					value: 'replaceable fair use',
					tooltip: window.wgULS(
						'文件仅用于描述、识别或评论文件中展示的事物，或仅用作插图，且满足以下四个条件之一。若给出了其他合理使用依据，不适用本条。如对文件的可替代性存在争议，应交文件存废讨论处理。本条也不适用于正在或曾经由文件存废讨论处理过的文件。',
						'檔案僅用於描述、辨識或評論檔案中展示的事物，或僅用作插圖，且滿足以下四個條件之一。若給出了其他合理使用依據，不適用本條。如對檔案的可替代性存在爭議，應交檔案存廢討論處理。本條也不適用於正在或曾經由檔案存廢討論處理過的檔案。'
					),
					subgroup: {
						name: 'f4_type',
						type: 'select',
						label: window.wgULS('适用类型：', '適用類別：'),
						style: 'width: 85%;',
						list: [
							{
								type: 'option',
								label: window.wgULS('请选择', '請選擇'),
								value: '',
							},
							{
								type: 'option',
								label: window.wgULS(
									'有其他自由著作权文件展示相同的事物',
									'有其他自由著作權檔案展示相同的事物'
								),
								value: '1',
							},
							{
								type: 'option',
								label: window.wgULS(
									'文件描述的是在世或假定在世人物、仍然存在的建筑、室外雕塑或仍然在售的商品，且预计自行拍摄的照片不受他人著作权保护',
									'檔案描述的是在世或假定在世人物、仍然存在的建築、室外雕塑或仍然在售的商品，且預計自行拍攝的相片不受他人著作權保護'
								),
								value: '2',
							},
							{
								type: 'option',
								label: window.wgULS('文件为可自行绘制的地图或图表', '檔案為可自行繪製的地圖或圖表'),
								value: '3',
							},
							{
								type: 'option',
								label: window.wgULS(
									'文件来自商业图片机构（如Getty）',
									'檔案來自商業圖片機構（如Getty）'
								),
								value: '4',
							},
						],
					},
				},
				{
					label: window.wgULS(
						'没有被条目使用的非自由著作权文件（CSD F5）',
						'沒有被條目使用的非自由著作權檔案（CSD F5）'
					),
					value: 'orphaned fair use',
					tooltip: window.wgULS(
						'本文件为非自由著作权且没有被条目使用',
						'本檔案為非自由著作權且沒有被條目使用'
					),
				},
				{
					label: window.wgULS(
						'没有填写任何合理使用依据的非自由著作权文件（CSD F5）',
						'沒有填寫任何合理使用依據的非自由著作權檔案（CSD F5）'
					),
					value: 'no fair use rationale',
					tooltip: window.wgULS(
						'不适用于有争议但完整的合理使用依据。若非自由著作权文件只有部分条目的使用依据，但同时被使用于未提供合理使用依据的条目，则本条例也不适用。',
						'不適用於有爭議但完整的合理使用依據。若非自由著作權檔案只有部分條目的使用依據，但同時被使用於未提供合理使用依據的條目，則本條例也不適用。'
					),
				},
			],
		});
		form.append({
			type: 'submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		// We must init the parameters
		const evt = document.createEvent('Event');
		evt.initEvent('change', true, true);
		result.type[0].dispatchEvent(evt);
	};
	Twinkle.image.callback.evaluate = (event) => {
		let type;
		let notify = event.target.notify.checked;
		const types = event.target.type;
		for (const type_ of types) {
			if (type_.checked) {
				type = type_.values;
				break;
			}
		}
		let csdcrit;
		switch (type) {
			case 'no source':
				csdcrit = 'f3';
				break;
			case 'no license':
				csdcrit = 'f3';
				break;
			case 'no source no license':
				csdcrit = 'f3';
				break;
			case 'orphaned fair use':
				csdcrit = 'f5';
				notify = false;
				break;
			case 'no permission':
				csdcrit = 'f1';
				break;
			case 'no fair use rationale':
				csdcrit = 'f5';
				break;
			case 'replaceable fair use':
				csdcrit = 'f4';
				break;
			default:
				throw new Error('Twinkle.image.callback.evaluate：未知条款');
		}
		const lognomination =
			Twinkle.getPref('logSpeedyNominations') &&
			!Twinkle.getPref('noLogOnSpeedyNomination').includes(csdcrit.toLowerCase());
		const templatename = type;
		const params = {
			type,
			templatename,
			normalized: csdcrit,
			lognomination,
		};
		if (csdcrit === 'f1') {
			params.f1_source = event.target['type.f1_source'].value;
		}
		if (csdcrit === 'f4') {
			const f4_type = event.target['type.f4_type'].value;
			if (!f4_type) {
				mw.notify(window.wgULS('CSD F4：请选择适用类型。', 'CSD F4：請選擇適用類別。'), {
					type: 'warn',
					tag: 'twinkleimage',
				});
				return false;
			}
			params.f4_type = f4_type;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(event.target);
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = window.wgULS('标记完成', '標記完成');
		// Tagging image
		const ysarxiv_page = new Morebits.wiki.page(
			mw.config.get('wgPageName'),
			window.wgULS('加入删除标记', '加入刪除標記')
		);
		ysarxiv_page.setCallbackParameters(params);
		ysarxiv_page.load(Twinkle.image.callbacks.taggingImage);
		// Notifying uploader
		if (notify) {
			ysarxiv_page.lookupCreation(Twinkle.image.callbacks.userNotification);
		} else {
			// add to CSD log if desired
			if (lognomination) {
				params.fromDI = true;
				Twinkle.speedy.callbacks.user.addToLog(params, null);
			}
			// No auto-notification, display what was going to be added.
			if (type !== 'orphaned fair use') {
				const noteData = document.createElement('pre');
				noteData.appendChild(
					document.createTextNode(
						'{{'.concat('subst:', `Uploadvionotice|${Morebits.pageNameNorm}}}--~~`, '~~')
					)
				);
				Morebits.status.info(
					'提示',
					window.wgULS(
						['这些内容应贴进上传者对话页：', document.createElement('br'), noteData],
						['這些內容應貼進上傳者討論頁：', document.createElement('br'), noteData]
					)
				);
			}
		}
	};
	Twinkle.image.callbacks = {
		taggingImage: (pageobj) => {
			let text = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			// remove tag - deletion-tagged files cannot be moved
			text = text.replace(
				/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (ysarxiv share|wikimedia commons)|copy to (ysarxiv share|wikimedia commons))[^}]*\}\}/gi,
				''
			);
			// Adding discussion
			if (params.type !== 'orphaned fair use') {
				const ysarxiv_page = new Morebits.wiki.page(
					'LIB_talk:存废讨论/文件快速删除提报',
					window.wgULS('加入快速删除记录项', '加入快速刪除記錄項')
				);
				ysarxiv_page.setFollowRedirect(true);
				ysarxiv_page.setCallbackParameters(params);
				ysarxiv_page.load(Twinkle.image.callbacks.imageList);
			}
			let tag = '';
			switch (params.type) {
				case 'orphaned fair use':
					tag = '{{'.concat('subst:', 'orphaned fair use}}\n');
					break;
				case 'no permission':
					tag = '{{'.concat(
						'subst:',
						`${params.templatename}/auto|1=${params.f1_source
							.replace(/http/g, '&#104;ttp')
							.replace(/\n+/g, '\n')
							.replace(/^\s*([^*])/gm, '* $1')
							.replace(/^\* $/m, '')}}}\n`
					);
					break;
				case 'replaceable fair use':
					tag = '{{'.concat('subst:', `${params.templatename}/auto|1=${params.f4_type}}}\n`);
					break;
				default:
					tag = '{{'.concat('subst:', `${params.templatename}/auto}}\n`);
					break;
			}
			const textNoSd = text.replace(
				/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
				''
			);
			if (
				text !== textNoSd &&
				confirm(window.wgULS('在页面上找到快速删除模板，要移除吗？', '在頁面上找到快速刪除模板，要移除嗎？'))
			) {
				text = textNoSd;
			}
			pageobj.setPageText(tag + text);
			let editSummary = window.wgULS('请求快速删除（', '請求快速刪除（');
			editSummary += `[[LIB:CSD#${params.normalized.toUpperCase()}|CSD ${params.normalized.toUpperCase()}]]`;
			editSummary += '）';
			pageobj.setEditSummary(editSummary);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('deliWatchPage'));
			pageobj.setCreateOption('nocreate');
			pageobj.save();
		},
		userNotification: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			const initialContrib = pageobj.getCreator();
			// disallow warning yourself
			if (initialContrib === mw.config.get('wgUserName')) {
				pageobj
					.getStatusElement()
					.warn(`您（${initialContrib}）${window.wgULS('创建了该页，跳过通知', '建立了該頁，跳過通知')}`);
			} else {
				const talkPageName = `User talk:${initialContrib}`;
				const usertalkpage = new Morebits.wiki.page(
					talkPageName,
					`${window.wgULS('通知上传者', '通知上傳者')}（${initialContrib}）`
				);
				const notifytext = '\n{{'.concat(
					'subst:',
					`Di-${params.templatename}-notice|1=${Morebits.pageNameNorm}}}--~~`,
					'~~'
				);
				usertalkpage.setAppendText(notifytext);
				usertalkpage.setEditSummary(
					window.wgULS('通知：文件[[', '通知：檔案[[') +
						Morebits.pageNameNorm +
						window.wgULS(']]快速删除提名', ']]快速刪除提名')
				);
				usertalkpage.setChangeTags(Twinkle.changeTags);
				usertalkpage.setCreateOption('recreate');
				usertalkpage.setWatchlist(Twinkle.getPref('deliWatchUser'));
				usertalkpage.setFollowRedirect(true, false);
				usertalkpage.append();
			}
			// add this nomination to the user's userspace log, if the user has enabled it
			if (params.lognomination) {
				params.fromDI = true;
				Twinkle.speedy.callbacks.user.addToLog(params, initialContrib);
			}
		},
		imageList: (pageobj) => {
			const text = pageobj.getPageText();
			// const params = pageobj.getCallbackParameters();
			pageobj.setPageText(`${text}\n* [[:${Morebits.pageNameNorm}]]--~~`.concat('~~'));
			pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('recreate');
			pageobj.save();
		},
	};
	Twinkle.addInitCallback(Twinkle.image, 'image');
})();
