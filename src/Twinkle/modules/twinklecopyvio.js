// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinklecopyvio.js */
(function twinklecopyvio() {
	/**
	 * twinklecopyvio.js: Copyvio module
	 * Mode of invocation:	Tab ("Copyvio")
	 * Active on: Existing, non-special pages, except for file pages
	 * with no local file which are not redirects
	 * Config directives in:  TwinkleConfig
	 */
	Twinkle.copyvio = () => {
		// Disable on:
		// * special pages
		// * non-existent pages
		// * non-local files, whether there is a local page or not (unneeded local pages of non-local files are eligible for CSD F2)
		// * file pages without actual files (these are eligible for CSD G8)
		if (
			mw.config.get('wgNamespaceNumber') < 0 ||
			!mw.config.get('wgArticleId') ||
			(mw.config.get('wgNamespaceNumber') === 6 &&
				(document.querySelector('#mw-sharedupload') ||
					(!document.querySelector('#mw-imagepage-section-filehistory') && !Morebits.isPageRedirect())))
		) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.copyvio.callback,
			window.wgULS('侵权', '侵權'),
			'tw-copyvio',
			window.wgULS('提报侵权页面', '提報侵權頁面'),
			''
		);
	};
	Twinkle.copyvio.callback = () => {
		const Window = new Morebits.simpleWindow(600, 350);
		Window.setTitle(window.wgULS('提报侵权页面', '提報侵權頁面'));
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('侵权设置', '侵權設定'), 'H:TW/PREF#copyvio');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#copyvio');
		const form = new Morebits.quickForm(Twinkle.copyvio.callback.evaluate);
		form.append({
			type: 'textarea',
			label: window.wgULS('侵权来源：', '侵權來源：'),
			name: 'source',
		});
		form.append({
			type: 'checkbox',
			list: [
				{
					label: window.wgULS(
						'CSD G4: 曾经根据侵权审核删除后又重新创建的内容',
						'CSD G4: 曾經根據侵權審核刪除後又重新建立的內容'
					),
					value: 'g4',
					name: 'g4',
					tooltip: window.wgULS('同时以G4准则提报快速删除', '同時以G4準則提報快速刪除'),
					subgroup: [
						{
							name: 'g4_pagename',
							type: 'input',
							label: window.wgULS('前次删除的页面名称', '前次刪除的頁面名稱'),
							tooltip: window.wgULS(
								'选填，若前次删除的页面名称不同，请提供',
								'選填，若前次刪除的頁面名稱不同，請提供'
							),
						},
					],
				},
				{
					label: window.wgULS('通知页面创建者', '通知頁面建立者'),
					value: 'notify',
					name: 'notify',
					tooltip: window.wgULS(
						'在页面创建者讨论页上放置一通知模板。',
						'在頁面建立者討論頁上放置一通知模板。'
					),
					checked: true,
				},
			],
		});
		form.append({
			type: 'submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
	};
	Twinkle.copyvio.callbacks = {
		tryTagging: (pageobj) => {
			// 先尝试标记页面，若发现已经标记则停止提报
			const text = pageobj.getPageText();
			if (text.includes('{{Copyvio|')) {
				Morebits.status.error(
					window.wgULS('错误', '錯誤'),
					window.wgULS(
						'页面已经标记侵权，请人工确认是否已经提报。',
						'頁面已經標記侵權，請人工確認是否已經提報。'
					)
				);
			} else {
				Twinkle.copyvio.callbacks.taggingArticle(pageobj);
				// Contributor specific edits
				const ysarxiv_page = new Morebits.wiki.page(mw.config.get('wgPageName'));
				ysarxiv_page.setCallbackParameters(pageobj.getCallbackParameters());
				ysarxiv_page.lookupCreation(Twinkle.copyvio.callbacks.main);
			}
		},
		main: (pageobj) => {
			// this is coming in from lookupCreation...!
			const params = pageobj.getCallbackParameters();
			const initialContrib = pageobj.getCreator();
			// Adding discussion
			const ysarxiv_page = new Morebits.wiki.page(
				params.logpage,
				window.wgULS('加入侵权记录项', '加入侵權記錄項')
			);
			ysarxiv_page.setFollowRedirect(true);
			ysarxiv_page.setCallbackParameters(params);
			ysarxiv_page.load(Twinkle.copyvio.callbacks.copyvioList);
			// Notification to first contributor
			if (params.notify) {
				const usertalkpage = new Morebits.wiki.page(
					`User talk:${initialContrib}`,
					`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + initialContrib}）`
				);
				const notifytext = '\n{{'.concat('subst:', `CopyvioNotice|${mw.config.get('wgPageName')}}}`);
				usertalkpage.setAppendText(notifytext);
				usertalkpage.setEditSummary(
					window.wgULS('通知：页面[[', '通知：頁面[[') +
						mw.config.get('wgPageName') +
						window.wgULS(']]疑似侵犯著作权', ']]疑似侵犯版權')
				);
				usertalkpage.setChangeTags(Twinkle.changeTags);
				usertalkpage.setCreateOption('recreate');
				usertalkpage.setWatchlist(Twinkle.getPref('copyvioWatchUser'));
				usertalkpage.setFollowRedirect(true, false);
				usertalkpage.append();
			}
		},
		taggingArticle: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			const revisionId =
				mw.config.get('wgRevisionId') || mw.config.get('wgDiffNewId') || mw.config.get('wgCurRevisionId');
			let tag = '{{'.concat(
				'subst:',
				`Copyvio/auto|url=${params.source
					.replace(/http/g, '&#104;ttp')
					.replace(/\n+/g, '\n')
					.replace(/^\s*([^*])/gm, '* $1')
					.replace(/^\* $/m, '')}|OldRevision=${revisionId}}}`
			);
			const text = pageobj.getPageText();
			const oldcsd = text.match(/\{\{\s*(db(-\w*)?|d|delete)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}/i);
			if (
				oldcsd &&
				confirm(
					window.wgULS(
						'在页面上找到快速删除模板，要保留吗？\n\n当页面同时侵犯著作权又符合快速删除标准时，应该优先走快速删除程序。\n单击“确认”以保留快速删除模板，若您认为快速删除理由不合，单击“取消”以移除快速删除模板。',
						'在頁面上找到快速刪除模板，要保留嗎？\n\n當頁面同時侵犯版權又符合快速刪除標準時，應該優先走快速刪除程序。\n點擊「確認」以保留快速刪除模板，若您認為快速刪除理由不合，點擊「取消」以移除快速刪除模板。'
					)
				)
			) {
				tag = `${oldcsd[0]}\n${tag}`;
			}
			if (params.g4) {
				let speedyTag = '{{delete';
				speedyTag += '|g4';
				if (params.g4_pagename) {
					speedyTag += `|${params.g4_pagename}|c1=[[Special:Undelete/${params.g4_pagename}]]`;
				} else {
					speedyTag += `|c1=[[Special:Undelete/${mw.config.get('wgPageName')}]]`;
				}
				speedyTag += '}}';
				tag = `${speedyTag}\n${tag}`;
			}
			pageobj.setPageText(tag);
			pageobj.setEditSummary(window.wgULS('此页面疑似侵犯著作权', '此頁面疑似侵犯版權'));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('copyvioWatchPage'));
			// pageobj.setCreateOption('recreate');
			pageobj.save();
			if (Twinkle.getPref('markCopyvioPagesAsPatrolled')) {
				pageobj.patrol();
			}
		},
		copyvioList: (pageobj) => {
			const text = pageobj.getPageText();
			let output = '';
			const date = new Date();
			const dateHeaderRegex = new RegExp(
				`^==+\\s*${date.getUTCMonth() + 1}月${date.getUTCDate()}日\\s*==+`,
				'mg'
			);
			if (!dateHeaderRegex.exec(text)) {
				output = `\n\n==${date.getUTCMonth() + 1}月${date.getUTCDate()}日==`;
			}
			output += '\n{{'.concat('subst:', `CopyvioVFDRecord|${mw.config.get('wgPageName')}}}`);
			pageobj.setAppendText(output);
			pageobj.setEditSummary(`加入[[${mw.config.get('wgPageName')}]]`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('recreate');
			pageobj.append();
		},
	};
	Twinkle.copyvio.callback.evaluate = (e) => {
		const params = Morebits.quickForm.getInputData(e.target);
		if (!params.source.trim()) {
			mw.notify(window.wgULS('请指定侵权来源', '請指定侵權來源'), {
				type: 'warn',
				tag: 'twinklecopyvio',
			});
			return;
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(e.target);
		params.logpage = 'LIB_talk:侵权提报';
		Morebits.wiki.addCheckpoint();
		// Updating data for the action completed event
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'提报完成，将在几秒内刷新页面',
			'提報完成，將在幾秒內重新整理頁面'
		);
		// Tagging file
		const ysarxiv_page = new Morebits.wiki.page(
			mw.config.get('wgPageName'),
			window.wgULS('加入侵权模板到页面', '加入侵權模板到頁面')
		);
		ysarxiv_page.setCallbackParameters(params);
		ysarxiv_page.load(Twinkle.copyvio.callbacks.tryTagging);
		Morebits.wiki.removeCheckpoint();
	};
	Twinkle.addInitCallback(Twinkle.copyvio, 'copyvio');
})();
