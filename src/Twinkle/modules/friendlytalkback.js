// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - friendlytalkback.js */
(function friendlytalkback($) {
	const $body = $('body');
	/**
	 * friendlytalkback.js: Talkback module
	 * Mode of invocation: Tab ("TB")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.) except IP ranges
	 * Config directives in: FriendlyConfig
	 */
	Twinkle.talkback = () => {
		if (!mw.config.get('wgRelevantUserName')) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.talkback.callback,
			'通告',
			'friendly-talkback',
			window.wgULS('回复通告', '回覆通告')
		);
	};
	Twinkle.talkback.callback = () => {
		if (
			mw.config.get('wgRelevantUserName') === mw.config.get('wgUserName') &&
			!confirm(window.wgULS('您寂寞到了要自己回复自己的程度么？', '您寂寞到了要自己回覆自己的程度麼？'))
		) {
			return;
		}
		const Window = new Morebits.simpleWindow(600, 350);
		Window.setTitle(window.wgULS('回复通告', '回覆通告'));
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('关于{{talkback}}', '關於{{talkback}}'), 'Template:Talkback');
		Window.addFooterLink(window.wgULS('通告设置', '通告設定'), 'H:TW/PREF#talkback');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#talkback');
		const form = new Morebits.quickForm(Twinkle.talkback.evaluate);
		form.append({
			type: 'radio',
			name: 'tbtarget',
			list: [
				{
					label: window.wgULS('回复：我的讨论页', '回覆：我的討論頁'),
					value: 'mytalk',
					checked: 'true',
				},
				{
					label: window.wgULS('回复：其他用户的讨论页', '回覆：其他使用者的討論頁'),
					value: 'usertalk',
				},
				{
					label: window.wgULS('回复：其它页面', '回覆：其它頁面'),
					value: 'other',
				},
				{
					label: window.wgULS('邀请讨论', '邀請討論'),
					value: 'see',
				},
				{
					label: '通告板通知',
					value: 'notice',
				},
				{
					label: window.wgULS('“有新邮件”', '「有新郵件」'),
					value: 'mail',
				},
			],
			event: Twinkle.talkback.changeTarget,
		});
		form.append({
			type: 'field',
			label: '工作区',
			name: 'work_area',
		});
		const previewlink = document.createElement('a');
		$(previewlink).on('click', () => {
			Twinkle.talkback.preview(result); // |result| is defined below
		});

		previewlink.style.cursor = 'pointer';
		previewlink.textContent = window.wgULS('预览', '預覽');
		form.append({
			type: 'div',
			id: 'talkbackpreview',
			label: [previewlink],
		});
		form.append({
			type: 'div',
			id: 'friendlytalkback-previewbox',
			style: 'display: none',
		});
		form.append({
			type: 'submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		result.previewer = new Morebits.wiki.preview($(result).find('div#friendlytalkback-previewbox').last()[0]);
		// We must init the
		const evt = document.createEvent('Event');
		evt.initEvent('change', true, true);
		result.tbtarget[0].dispatchEvent(evt);
		// Check whether the user has opted out from talkback
		const query = {
			action: 'query',
			prop: 'extlinks',
			titles: `User talk:${mw.config.get('wgRelevantUserName')}`,
			elquery: 'userjs.invalid/noTalkback',
			ellimit: '1',
		};
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('抓取退出通告信息', '抓取退出通告資訊'),
			query,
			Twinkle.talkback.callback.optoutStatus
		);
		ysarchives_api.post();
	};
	Twinkle.talkback.optout = '';
	Twinkle.talkback.callback.optoutStatus = (apiobj) => {
		const $el = $(apiobj.getXML()).find('el');
		if ($el.length) {
			Twinkle.talkback.optout =
				mw.config.get('wgRelevantUserName') + window.wgULS('不希望收到回复通告', '不希望收到回覆通告');
			const url = $el.text();
			const reason = mw.util.getParamValue('reason', url);
			Twinkle.talkback.optout += reason ? `：${Morebits.string.appendPunctuation(reason)}` : '。';
		}
		$body.find('#twinkle-talkback-optout-message').text(Twinkle.talkback.optout);
	};
	let prev_page = '';
	let prev_section = '';
	let prev_message = '';
	Twinkle.talkback.changeTarget = (e) => {
		const value = e.target.values;
		const root = e.target.form;
		const [old_area] = Morebits.quickForm.getElements(root, 'work_area');
		if (root.section) {
			prev_section = root.section.value;
		}
		if (root.message) {
			prev_message = root.message.value;
		}
		if (root.page) {
			prev_page = root.page.value;
		}
		let work_area = new Morebits.quickForm.element({
			type: 'field',
			label: window.wgULS('回复通告信息', '回覆通告資訊'),
			name: 'work_area',
		});
		root.previewer.closePreview();
		switch (value) {
			case 'usertalk':
				work_area.append({
					type: 'div',
					label: '',
					style: 'color: #f00',
					id: 'twinkle-talkback-optout-message',
				});
				work_area.append({
					type: 'input',
					name: 'page',
					label: window.wgULS('用户（必填）', '使用者（必填）'),
					tooltip: window.wgULS('您留言页面的用户名，必填。', '您留言頁面的使用者名稱，必填。'),
					value: prev_page,
					required: true,
				});
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('章节（可选）', '章節（可選）'),
					tooltip: window.wgULS(
						'您留言的章节标题，留空则不会产生章节链接。',
						'您留言的章節標題，留空則不會產生章節連結。'
					),
					value: prev_section,
				});
				break;
			case 'notice': {
				const noticeboard = work_area.append({
					type: 'select',
					name: 'noticeboard',
					label: '通告板：',
				});
				for (const [nbname, data] of Object.entries(Twinkle.talkback.noticeboards)) {
					noticeboard.append({
						type: 'option',
						label: data.label,
						value: nbname,
						selected: !!data.defaultSelected,
					});
				}
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('章节（可选）', '章節（可選）'),
					tooltip: window.wgULS('章节标题，留空则不会产生章节链接。', '章節標題，留空則不會產生章節連結。'),
					value: prev_section,
				});
				break;
			}
			case 'other':
				work_area.append({
					type: 'div',
					label: '',
					style: 'color: #f00',
					id: 'twinkle-talkback-optout-message',
				});
				work_area.append({
					type: 'input',
					name: 'page',
					label: window.wgULS('完整页面名', '完整頁面名'),
					tooltip: window.wgULS(
						'您留下消息的完整页面名，例如“LIB_talk:首页”。',
						'您留下訊息的完整頁面名，例如「LIB_talk:首頁」。'
					),
					value: prev_page,
					required: true,
				});
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('章节（可选）', '章節（可選）'),
					tooltip: window.wgULS(
						'您留言的章节标题，留空则不会产生章节链接。',
						'您留言的章節標題，留空則不會產生章節連結。'
					),
					value: prev_section,
				});
				break;
			case 'mail':
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('电子邮件主题（可选）', '電子郵件主題（可選）'),
					tooltip: window.wgULS('您发出的电子邮件的主题。', '您發出的電子郵件的主題。'),
				});
				break;
			case 'see':
				work_area.append({
					type: 'input',
					name: 'page',
					label: window.wgULS('完整页面名', '完整頁面名'),
					tooltip: window.wgULS(
						'您留下消息的完整页面名，例如“LIB_talk:首页”。',
						'您留下訊息的完整頁面名，例如「LIB_talk:首頁」。'
					),
					value: prev_page,
					required: true,
				});
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('章节（可选）', '章節（可選）'),
					tooltip: window.wgULS(
						'您留言的章节标题，留空则不会产生章节链接。',
						'您留言的章節標題，留空則不會產生章節連結。'
					),
					value: prev_section,
				});
				break;
			/* case 'mytalk': */
			/* falls through */
			default:
				work_area.append({
					type: 'div',
					label: '',
					style: 'color: #f00',
					id: 'twinkle-talkback-optout-message',
				});
				work_area.append({
					type: 'input',
					name: 'section',
					label: window.wgULS('章节（可选）', '章節（可選）'),
					tooltip: window.wgULS(
						'您留言的章节标题，留空则不会产生章节链接。',
						'您留言的章節標題，留空則不會產生章節連結。'
					),
					value: prev_section,
				});
				break;
		}
		if (value !== 'notice') {
			work_area.append({
				type: 'textarea',
				label: window.wgULS('附加信息（可选）：', '附加資訊（可選）：'),
				name: 'message',
				tooltip: window.wgULS(
					'会在回复通告模板下出现的消息，您的签名会被加在最后。',
					'會在回覆通告模板下出現的訊息，您的簽名會被加在最後。'
				),
			});
		}
		work_area = work_area.render();
		root.replaceChild(work_area, old_area);
		if (root.message) {
			root.message.value = prev_message;
		}
		$body.find('#twinkle-talkback-optout-message').text(Twinkle.talkback.optout);
	};
	Twinkle.talkback.noticeboards = {
		affp: {
			label: `LIB:AF/FP（${window.wgULS('过滤器处理/报告', '過濾器處理/報告')}）`,
			title: window.wgULS('过滤器错误报告有新回应', '過濾器錯誤報告有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:过滤器处理/报告|过滤器错误报告]]已有回应，请前往查看。',
				'您的[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:过滤器处理/报告|过滤器错误报告]]的通知',
				'有關[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]的通知'
			),
			defaultSelected: true,
		},
		sbl: {
			label: 'Spam-blacklist',
			title: window.wgULS('垃圾链接黑名单请求有新回应', '垃圾連結黑名單請求有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]已有回应，请前往查看。',
				'您的[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]的通知',
				'有關[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]的通知'
			),
		},
		shl: {
			label: 'Spam-whitelist',
			title: window.wgULS('垃圾链接白名单请求有新回应', '垃圾連結白名單請求有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:管理员告示板|垃圾链接白名单请求]]已有回应，请前往查看。',
				'您的[[LIB_talk:管理员告示板|垃圾連結白名單請求]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:管理员告示板|垃圾链接白名单请求]]的通知',
				'有關[[LIB_talk:管理员告示板|垃圾連結白名單請求]]的通知'
			),
		},
	};
	Twinkle.talkback.evaluate = (e) => {
		const form = e.target;
		const [tbtarget] = form.getChecked('tbtarget');
		let page;
		let message;
		const section = form.section.value;
		let editSummary;
		if (tbtarget === 'notice') {
			page = form.noticeboard.value;
			({editSummary} = Twinkle.talkback.noticeboards[page]);
		} else {
			// usertalk, other, see
			page = form.page ? form.page.value : mw.config.get('wgUserName');
			if (form.message) {
				message = form.message.value.trim();
			}
			if (tbtarget === 'mail') {
				editSummary = window.wgULS('通知：有新邮件', '通知：有新郵件');
			} else if (tbtarget === 'see') {
				editSummary = `${window.wgULS('请看看', '請看看')}[[:${page}${section ? `#${section}` : ''}]]${window.wgULS(
					'上的讨论',
					'上的討論'
				)}`;
			} else {
				// tbtarget one of mytalk, usertalk, other
				editSummary = `${window.wgULS('回复通告', '回覆通告')}（[[:`;
				if (tbtarget !== 'other' && !new RegExp(`^\\s*${Morebits.namespaceRegex(3)}:`, 'i').test(page)) {
					editSummary += 'User talk:';
				}
				editSummary += `${page + (section ? `#${section}` : '')}]])`;
			}
		}
		Morebits.simpleWindow.setButtonsEnabled(false);
		Morebits.status.init(form);
		const fullUserTalkPageName = `${
			mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceIds').user_talk]
		}:${mw.config.get('wgRelevantUserName')}`;
		Morebits.wiki.actionCompleted.redirect = fullUserTalkPageName;
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'回复通告完成，将在几秒内刷新页面',
			'回覆通告完成，將在幾秒內重新整理頁面'
		);
		const text = `\n\n${Twinkle.talkback.getNoticeWikitext(tbtarget, page, section, message)[0]}`;
		const talkpage = new Morebits.wiki.page(fullUserTalkPageName, window.wgULS('加入回复通告', '加入回覆通告'));
		talkpage.setEditSummary(editSummary);
		talkpage.setChangeTags(Twinkle.changeTags);
		talkpage.setAppendText(text);
		talkpage.setCreateOption('recreate');
		talkpage.setMinorEdit(Twinkle.getPref('markTalkbackAsMinor'));
		talkpage.setFollowRedirect(true);
		talkpage.append();
	};
	Twinkle.talkback.preview = (form) => {
		const [tbtarget] = form.getChecked('tbtarget');
		const section = form.section.value;
		let page;
		let message;
		if (tbtarget === 'notice') {
			page = form.noticeboard.value;
		} else {
			// usertalk, other, see
			page = form.page ? form.page.value : mw.config.get('wgUserName');
			if (form.message) {
				message = form.message.value.trim();
			}
		}
		const [noticetext] = Twinkle.talkback.getNoticeWikitext(tbtarget, page, section, message);
		form.previewer.beginRender(noticetext, `User_talk:${mw.config.get('wgRelevantUserName')}`); // Force wikitext/correct username
	};

	Twinkle.talkback.getNoticeWikitext = (tbtarget, page, section, message) => {
		let text;
		let title;
		let content;
		if (tbtarget === 'notice') {
			({title} = Twinkle.talkback.noticeboards[page]);
			content = Morebits.string.safeReplace(Twinkle.talkback.noticeboards[page].content, '$SECTION', section);
			text = `== ${title} ==\n${content}`;
		} else if (tbtarget === 'see') {
			title = page + window.wgULS('的相关讨论', '的相關討論');
			content = '{{'.concat(
				'subst:',
				`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
			);
			text = '{{'.concat(
				'subst:',
				`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
			);
		} else {
			text = '==';
			if (tbtarget === 'mail') {
				title = Twinkle.getPref('mailHeading');
				content = `{{You've got mail|subject=${section}|ts=~~`.concat('~', '~~}}');
				text += `${Twinkle.getPref('mailHeading')}==\n{{You've got mail|subject=${section}`;
			} else {
				// tbtarget one of mytalk, usertalk, other
				// clean talkback heading: strip section header markers that were erroneously suggested in the documentation
				title = Twinkle.getPref('talkbackHeading').replace(/^\s*=+\s*(.*?)\s*=+$\s*/, '$1');
				content = `{{talkback|${page}${section ? `|${section}` : ''}`;
				text += `${Twinkle.getPref('talkbackHeading').replace(
					/^\s*=+\s*(.*?)\s*=+$\s*/,
					'$1'
				)}==\n{{talkback|${page}${section ? `|${section}` : ''}`;
			}
			content += '|ts=~~'.concat('~', '~~}}');
			text += '|ts=~~'.concat('~', '~~}}');
			if (message) {
				content += `\n${message}`;
				text += `\n${message}  ~~`.concat('~~');
			} else if (Twinkle.getPref('insertTalkbackSignature')) {
				text += '\n~~'.concat('~~');
			}
		}
		return [text, title, content];
	};
	Twinkle.addInitCallback(Twinkle.talkback, 'talkback');
})(jQuery);
