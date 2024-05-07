// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklearv.js */
(function twinklearv($) {
	const $body = $('body');
	/**
	 * twinklearv.js: ARV module
	 * Mode of invocation: Tab ("ARV")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.)
	 */
	Twinkle.arv = () => {
		const username = mw.config.get('wgRelevantUserName');
		if (!username) {
			return;
		}
		const isIP = mw.util.isIPAddress(username);
		const title = isIP
			? window.wgULS('报告IP给管理员', '報告IP給管理員')
			: window.wgULS('报告用户给管理人员', '報告使用者給管理人員');
		Twinkle.addPortletLink(
			() => {
				Twinkle.arv.callback(username, isIP);
			},
			window.wgULS('告状', '告狀'),
			'tw-arv',
			title
		);
	};
	Twinkle.arv.callback = (uid, isIP) => {
		if (uid === mw.config.get('wgUserName')) {
			mw.notify(window.wgULS('你不想报告你自己，对吧？', '你不想報告你自己，對吧？'), {
				type: 'warn',
				tag: 'twinklearv',
			});
			return;
		}
		const Window = new Morebits.simpleWindow(600, 500);
		Window.setTitle(window.wgULS('报告用户给管理人员', '報告使用者給管理人員'));
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('告状设置', '告狀設定'), 'H:TW/PREF#arv');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW#告狀');
		const form = new Morebits.quickForm(Twinkle.arv.callback.evaluate);
		const categories = form.append({
			type: 'select',
			name: 'category',
			label: window.wgULS('选择报告类型：', '選擇報告類別：'),
			event: Twinkle.arv.callback.changeCategory,
		});
		categories.append({
			type: 'option',
			label: window.wgULS('破坏（LIB:VIP）', '破壞（LIB:VIP）'),
			value: 'aiv',
		});
		categories.append({
			type: 'option',
			label: window.wgULS('编辑争议（LIB:EWIP）', '編輯爭議（LIB:EWIP）'),
			value: 'ewip',
		});
		categories.append({
			type: 'option',
			label: window.wgULS('用户名（LIB:UAA）', '使用者名稱（LIB:UAA）'),
			value: 'username',
			disabled: mw.util.isIPAddress(uid),
		});
		categories.append({
			type: 'option',
			label: window.wgULS('傀儡调查（LIB:SPI）', '傀儡調查（LIB:SPI）'),
			value: 'spi',
			disabled: mw.util.isIPAddress(uid),
		});
		form.append({
			type: 'div',
			label: '',
			style: 'color: #f00',
			id: 'twinkle-arv-blockwarning',
		});
		form.append({
			type: 'field',
			label: 'Work area',
			name: 'work_area',
		});
		form.append({
			type: 'submit',
			label: '提交',
		});
		form.append({
			type: 'hidden',
			name: 'uid',
			value: uid,
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		// Check if the user is blocked, update notice
		const query = {
			action: 'query',
			list: 'blocks',
			bkprop: 'range|flags',
			format: 'json',
		};
		if (isIP) {
			query.bkip = uid;
		} else {
			query.bkusers = uid;
		}
		new Morebits.wiki.api(window.wgULS('检查用户的封禁状态', '檢查使用者的封鎖狀態'), query, (apiobj) => {
			const blocklist = apiobj.getResponse().query.blocks;
			if (blocklist.length) {
				const [block] = blocklist;
				let message =
					(isIP ? window.wgULS('此IP地址', '此IP位址') : window.wgULS('此账号', '此賬號')) +
					window.wgULS('已经被', '已經被') +
					(block.partial ? '部分' : '');
				// Start and end differ, range blocked
				message += block.rangestart === (block.rangeend ? '段' : '') + window.wgULS('封禁。', '封鎖。');
				if (block.partial) {
					$body.find('#twinkle-arv-blockwarning').css('color', 'black'); // Less severe
				}
				$body.find('#twinkle-arv-blockwarning').text(message);
			}
		}).post();
		// We must init the
		const evt = document.createEvent('Event');
		evt.initEvent('change', true, true);
		result.category.dispatchEvent(evt);
	};
	Twinkle.arv.lta_list = [
		{
			value: '',
			label: window.wgULS('请选择', '請選擇'),
		},
	];
	Twinkle.arv.callback.sockmaster_changed = (e) => {
		Twinkle.arv.callback.set_sockmaster(e.target.value);
	};
	Twinkle.arv.callback.set_sockmaster = (sockmaster) => {
		$body.find('code.tw-arv-sockmaster').text('{{'.concat('subst:', `Socksuspectnotice|1=${sockmaster}}}`));
	};
	Twinkle.arv.callback.changeCategory = (e) => {
		const value_ = e.target.value;
		const root_ = e.target.form;
		const [old_area] = Morebits.quickForm.getElements(root_, 'work_area');
		let work_area = null;
		const previewlink = document.createElement('a');
		previewlink.style.cursor = 'pointer';
		previewlink.textContent = window.wgULS('预览', '預覽');
		$(previewlink).on('click', () => {
			Twinkle.arv.callback.preview(root_);
		});
		switch (value_) {
			case 'ewip':
				work_area = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('报告编辑争议', '報告編輯爭議'),
					name: 'work_area',
				});
				work_area.append({
					type: 'dyninput',
					name: 'page',
					label: window.wgULS('相关页面：', '相關頁面：'),
					sublabel: window.wgULS('页面：', '頁面：'),
					tooltip: window.wgULS('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空'),
					min: 1,
					max: 10,
				});
				work_area.append({
					type: 'textarea',
					name: 'reason',
					label: window.wgULS('评论：', '評論：'),
				});
				work_area.append({
					type: 'div',
					id: 'arvpreview',
					label: [previewlink],
				});
				work_area.append({
					type: 'div',
					id: 'twinklearv-previewbox',
					style: 'display: none',
				});
				work_area = work_area.render();
				old_area.parentNode.replaceChild(work_area, old_area);
				break;
			case 'username':
				work_area = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('报告不当用户名', '報告不當使用者名稱'),
					name: 'work_area',
				});
				work_area.append({
					type: 'header',
					label: window.wgULS('不当用户名类型', '不當使用者名稱類別'),
					tooltip: window.wgULS(
						'有兽档案馆不允许使用带有误导性、宣传性、侮辱性或破坏性的用户名。此外，使用域名及邮箱地址的用户名亦被禁止。这些准则俱应应用至用户名及签名。在其他语言中不当的用户名或通过错拼、替代、暗示、拆字或任何间接方法达成的非妥当用户名同样视为违规。',
						'有獸檔案館不允許使用帶有誤導性、宣傳性、侮辱性或破壞性的使用者名稱。此外，使用域名及電子信箱位址的使用者名稱亦被禁止。這些準則俱應應用至使用者名稱及簽名。在其他語言中不當的使用者名稱或通過錯拼、替代、暗示、拆字或任何間接方法達成的非妥當使用者名稱同樣視為違規。'
					),
				});
				work_area.append({
					type: 'checkbox',
					name: 'arvtype',
					list: [
						{
							label: window.wgULS('误导性用户名', '誤導性使用者名稱'),
							value: window.wgULS('误导性', '誤導性'),
							tooltip: window.wgULS(
								'误导性用户名隐含着与贡献者相关或误导他人的事情。例如︰不实观点、暗示账号拥有特定权限或暗示该账号并非由一人拥有而是由一个组群、一个项目或一个集体运作。',
								'誤導性使用者名稱隱含著與貢獻者相關或誤導他人的事情。例如︰不實觀點、暗示賬號擁有特定權限或暗示該賬號並非由一人擁有而是由一個群組、一個計畫或一個集體運作。'
							),
						},
						{
							label: window.wgULS('宣传性用户名', '宣傳性使用者名稱'),
							value: window.wgULS('宣传性', '宣傳性'),
							tooltip: window.wgULS(
								'宣传性用户名会于有兽档案馆上起推销一个组群或一间公司的作用。',
								'宣傳性使用者名稱會於有獸檔案館上起推銷一個群組或一間公司的作用。'
							),
						},
						{
							label: window.wgULS('暗示并非由一人拥有', '暗示並非由一人擁有'),
							value: 'shared',
							tooltip: window.wgULS(
								'每个账号只可以代表个人（容许一些例外情况），所有与他人分享账号的行为（包括分享账号密码）均被禁止。',
								'每個賬號只可以代表個人（容許一些例外情況），所有與他人分享賬號的行為（包括分享賬號密碼）均被禁止。'
							),
						},
						{
							label: window.wgULS('侮辱性用户名', '侮辱性使用者名稱'),
							value: '侮辱性',
							tooltip: window.wgULS(
								'侮辱性用户名令协调编辑变得困难，甚至无可能。',
								'侮辱性使用者名稱令協調編輯變得困難，甚至無可能。'
							),
						},
						{
							label: window.wgULS('破坏性用户名', '破壞性使用者名稱'),
							value: window.wgULS('破坏性', '破壞性'),
							tooltip: window.wgULS(
								'破坏性用户名包括人身攻击、伪冒他人或其他一切有着清晰可见的破坏有兽档案馆意图的用户名。',
								'破壞性使用者名稱包括人身攻擊、偽冒他人或其他一切有著清晰可見的破壞有獸檔案館意圖的使用者名稱。'
							),
						},
					],
				});
				work_area.append({
					type: 'checkbox',
					list: [
						{
							label: window.wgULS(
								'在页面上隐藏用户名（需监督的用户名请勿于站内报告，勾选此项并不构成能在站内报告的理由）',
								'在頁面上隱藏使用者名稱（需監督的使用者名稱請勿於站內報告，勾選此項並不構成能在站內報告的理由）'
							),
							tooltip: window.wgULS(
								'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
								'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
							),
							name: 'hidename',
							value: 'hidename',
						},
					],
					style: 'font-weight: bold;',
				});
				work_area.append({
					type: 'textarea',
					name: 'reason',
					label: window.wgULS('评论：', '評論：'),
				});
				work_area.append({
					type: 'div',
					id: 'arvpreview',
					label: [previewlink],
				});
				work_area.append({
					type: 'div',
					id: 'twinklearv-previewbox',
					style: 'display: none',
				});
				work_area = work_area.render();
				old_area.parentNode.replaceChild(work_area, old_area);
				break;
			case 'spi':
				work_area = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('发起傀儡调查', '發起傀儡調查'),
					name: 'work_area',
				});
				work_area.append({
					type: 'input',
					name: 'sockmaster',
					tooltip: window.wgULS('主账号的用户名（不含User:前缀）', '主賬號的使用者名稱（不含User:字首）'),
					value: root_.uid.value,
					event: Twinkle.arv.callback.sockmaster_changed,
				});
				work_area.append({
					type: 'div',
					id: 'twinklearv-spinoticebox',
					style: 'display: none',
				});
				work_area.append({
					type: 'dyninput',
					name: 'sockpuppet',
					label: '傀儡',
					sublabel: '傀儡：',
					tooltip: window.wgULS('傀儡的用户名（不含User:前缀）', '傀儡的使用者名稱（不含User:字首）'),
					min: 2,
					max: 9,
				});
				work_area.append({
					type: 'textarea',
					label: window.wgULS('证据：', '證據：'),
					name: 'reason',
					tooltip: window.wgULS(
						'输入能够用来体现这些用户可能滥用多重账号的证据，这通常包括茶馆发言、页面历史或其他有关的信息。请避免在此处提供非与傀儡或滥用多重账号相关的其他讨论。',
						'輸入能夠用來體現這些使用者可能濫用多重賬號的證據，這通常包括茶館發言、頁面歷史或其他有關的資訊。請避免在此處提供非與傀儡或濫用多重賬號相關的其他討論。'
					),
				});
				work_area.append({
					type: 'checkbox',
					list: [
						{
							label: window.wgULS('请求用户查核', '請求使用者查核'),
							name: 'checkuser',
							tooltip: window.wgULS(
								'用户查核是一种用于获取傀儡指控相关技术证据的工具，若没有正当理由则不会使用，您必须在证据字段充分解释为什么需要使用该工具。用户查核不会用于公开连接用户账号使用的IP地址。',
								'使用者查核是一種用於獲取傀儡指控相關技術證據的工具，若沒有正當理由則不會使用，您必須在證據欄位充分解釋為什麼需要使用該工具。使用者查核不會用於公開連接使用者賬號使用的IP位址。'
							),
						},
					],
				});
				work_area.append({
					type: 'div',
					id: 'arvpreview',
					label: [previewlink],
				});
				work_area.append({
					type: 'div',
					id: 'twinklearv-previewbox',
					style: 'display: none',
				});
				work_area.append({
					type: 'div',
					label: [
						window.wgULS('请使用常识决定是否以', '請使用常識決定是否以'),
						$('<code>').addClass('tw-arv-sockmaster').css('margin', '2px;')[0],
						window.wgULS(
							'通知用户。这不是必须的，对于涉及新用户的报告而言，通知他们能让报告显得更公平，但是许多情况下（如长期破坏者）通知更可能适得其反。',
							'通知使用者。這不是必須的，對於涉及新使用者的報告而言，通知他們能讓報告顯得更公平，但是許多情況下（如長期破壞者）通知更可能適得其反。'
						),
					],
				});
				work_area = work_area.render();
				$('input:text[name=sockpuppet]', work_area).first().val(root_.uid.value);
				old_area.parentNode.replaceChild(work_area, old_area);
				root_.spinoticepreviewer = new Morebits.wiki.preview(
					$(work_area).find('#twinklearv-spinoticebox').last()[0]
				);
				Twinkle.arv.callback.set_sockmaster(root_.uid.value);
				break;

			/* case 'aiv': */
			/* falls through */
			default:
				work_area = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('报告用户破坏', '報告使用者破壞'),
					name: 'work_area',
				});
				work_area.append({
					type: 'div',
					label: window.wgULS(
						'提报傀儡应优先发送至傀儡调查，除非相关的账号有高频率、涉及多个页面等紧急严重的破坏行为。',
						'提報傀儡應優先發送至傀儡調查，除非相關的賬號有高頻率、涉及多個頁面等緊急嚴重的破壞行為。'
					),
				});
				work_area.append({
					type: 'input',
					name: 'page',
					label: window.wgULS('相关页面：', '相關頁面：'),
					tooltip: window.wgULS('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空'),
					value: mw.util.getParamValue('vanarticle') || '',
					event: (event) => {
						const {value} = event.target;
						const root = event.target.form;
						if (value === '') {
							root.badid.disabled = true;
							root.goodid.disabled = true;
						} else {
							root.badid.disabled = false;
							root.goodid.disabled = root.badid.value === '';
						}
					},
				});
				work_area.append({
					type: 'input',
					name: 'badid',
					label: window.wgULS('受到破坏的修订版本：', '受到破壞的修訂版本：'),
					tooltip: window.wgULS('留空以略过差异', '留空以略過差異'),
					value: mw.util.getParamValue('vanarticlerevid') || '',
					disabled: !mw.util.getParamValue('vanarticle'),
					event: (event) => {
						const {value} = event.target;
						const root = event.target.form;
						root.goodid.disabled = value === '';
					},
				});
				work_area.append({
					type: 'input',
					name: 'goodid',
					label: window.wgULS('破坏前的修订版本：', '破壞前的修訂版本：'),
					tooltip: window.wgULS('留空以略过差异的较早版本', '留空以略過差異的較早版本'),
					value: mw.util.getParamValue('vanarticlegoodrevid') || '',
					disabled: !mw.util.getParamValue('vanarticle') || mw.util.getParamValue('vanarticlerevid'),
				});
				work_area.append({
					type: 'checkbox',
					name: 'arvtype',
					list: [
						{
							label: window.wgULS('已发出最后警告', '已發出最後警告'),
							value: 'final',
						},
						{
							label: window.wgULS('封禁过期后随即破坏', '封鎖過期後隨即破壞'),
							value: 'postblock',
						},
						{
							label: window.wgULS('显而易见的纯破坏用户', '顯而易見的純破壞使用者'),
							value: 'vandalonly',
							disabled: mw.util.isIPAddress(root_.uid.value),
						},
						{
							label: window.wgULS('显而易见的spambot或失窃账号', '顯而易見的spambot或失竊賬號'),
							value: 'spambot',
						},
						{
							label: window.wgULS('仅用来散发广告宣传的用户', '僅用來散發廣告宣傳的使用者'),
							value: 'promoonly',
							disabled: mw.util.isIPAddress(root_.uid.value),
						},
					],
				});
				if (!mw.util.isIPAddress(mw.config.get('wgRelevantUserName'))) {
					work_area.append({
						type: 'checkbox',
						list: [
							{
								label: window.wgULS('在页面上及编辑摘要隐藏用户名', '在頁面上及編輯摘要隱藏使用者名稱'),
								tooltip: window.wgULS(
									'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
									'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
								),
								name: 'hidename',
								value: 'hidename',
							},
						],
					});
				}
				work_area.append({
					type: 'textarea',
					name: 'reason',
					label: window.wgULS('评论：', '評論：'),
				});
				work_area.append({
					type: 'div',
					id: 'arvpreview',
					label: [previewlink],
				});
				work_area.append({
					type: 'div',
					id: 'twinklearv-previewbox',
					style: 'display: none',
				});
				work_area = work_area.render();
				old_area.parentNode.replaceChild(work_area, old_area);
				break;
		}
		root_.previewer = new Morebits.wiki.preview($(work_area).find('#twinklearv-previewbox').last()[0]);
	};
	Twinkle.arv.callback.preview = (form) => {
		const reason = Twinkle.arv.callback.getReportWikitext(form);
		if (reason === undefined) {
			return;
		}
		const input = Morebits.quickForm.getInputData(form);
		let title;
		switch (input.category) {
			case 'vip':
				title = 'LIB_talk:报告当前破坏';
				break;
			case 'ewip':
				title = 'LIB_talk:管理员告示板';
				break;
			case 'username':
				title = 'LIB_talk:管理员告示板';
				break;
			case 'spi':
				title = 'LIB_talk:管理员告示板';
				break;
			default:
				title = mw.config.get('wgPageName');
				break;
		}
		form.previewer.beginRender(`__NOTOC__${reason[0]}`, title);
	};
	Twinkle.arv.callback.getReportWikitext = (form) => {
		const input = Morebits.quickForm.getInputData(form);
		let reason = '';
		let comment = '';
		const {uid} = input;
		const checkTitle = (title, revid) => {
			if (/https?:\/\//.test(title)) {
				mw.notify(window.wgULS('页面名称不能使用网址。', '頁面名稱不能使用網址。'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return false;
			}
			let page_;
			try {
				page_ = new mw.Title(title);
			} catch {
				mw.notify(
					`${
						window.wgULS('“', '「') +
						title +
						window.wgULS(
							'”不是一个有效的页面名称，如要使用差异链接请放在“评论”',
							'」不是一個有效的頁面名稱，如要使用差異連結請放在「評論」'
						) +
						(revid ? window.wgULS('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
					}。`,
					{
						type: 'warn',
						tag: 'twinklearv',
					}
				);
				return false;
			}
			if (page_.namespace === -1) {
				mw.notify(
					`${
						window.wgULS('“', '「') +
						title +
						window.wgULS(
							'”属于特殊页面，如要使用差异链接请放在“评论”',
							'」屬於特殊頁面，如要使用差異連結請放在「評論」'
						) +
						(revid ? window.wgULS('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
					}。`,
					{
						type: 'warn',
						tag: 'twinklearv',
					}
				);
				return false;
			}
			return page_;
		};
		let page;
		switch (input.category) {
			// Report 3RR
			case 'ewip': {
				if (input.reason === '') {
					mw.notify(window.wgULS('您必须指定理由', '您必須指定理由'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				reason += `== 编辑战举报（${uid}） ==\n`;
				reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}}}'''\n`;
				const pages = $('input:text[name=page]', form).map((o, e) => {
					return $(e).val() || null;
				});
				for (const page_ of pages) {
					page = checkTitle(page_, false);
					if (!page) {
						return;
					}
					comment += `* {{pagelinks|${
						page.getPrefixedText().includes('=') ? '1=' : ''
					}${page.getPrefixedText()}}}\n`;
				}
				input.reason = input.reason.replace(/\n\n+/g, '\n');
				input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
				comment += `* ${input.reason}\n`;
				comment = comment.trim();
				comment = Morebits.string.appendPunctuation(comment);
				reason += `${comment}\n* 提报人：~~`.concat('~~\n* 处理：');
				break;
			}
			// Report inappropriate username
			case 'username': {
				let types = input.arvtype.map(Morebits.string.toLowerCaseFirstChar);
				const hasShared = types.includes('shared');
				if (hasShared) {
					types.splice(types.indexOf('shared'), 1);
				}
				if (
					types.includes('侮辱性') &&
					!confirm(
						window.wgULS(
							'警告：严重的侮辱性用户名和针对特定个人的侮辱性用户名不应在公开页面报告，而是应当私下联系监督员处理。是否继续？',
							'警告：嚴重的侮辱性使用者名稱和針對特定個人的侮辱性使用者名稱不應在公開頁面報告，而是應當私下聯絡監督員處理。是否繼續？'
						)
					)
				) {
					return;
				}
				if (types.length <= 2) {
					types = types.join('和');
				} else {
					types = [types.slice(0, -1).join('、'), types.slice(-1)].join('和');
				}
				comment += `*{{user-uaa|1=${uid}`;
				if (input.hidename) {
					comment += '|hidename=1';
				}
				comment += '}} &ndash; ';
				if (types.length) {
					comment += types + window.wgULS('用户名', '使用者名稱');
				}
				if (types.length && hasShared) {
					comment += '，';
				}
				if (hasShared) {
					comment += window.wgULS('暗示该账号并非由一人拥有', '暗示該賬號並非由一人擁有');
				}
				if (types.length || hasShared) {
					comment += '。';
				}
				if (input.reason) {
					comment += Morebits.string.toUpperCaseFirstChar(input.reason);
				}
				comment = Morebits.string.appendPunctuation(comment);
				comment += '--~~'.concat('~~');
				comment = comment.replace(/\r?\n/g, '\n*:'); // indent newlines
				reason = `== 不当用户名报告（${
					input.hidename ? window.wgULS('已隐藏用户名', '已隱藏使用者名稱') : uid
				}） ==\n`;
				reason += comment;
				break;
			}
			// LIB:SPI
			case 'spi': {
				if (!input.reason) {
					mw.notify(window.wgULS('请输入证据。', '請輸入證據。'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				const sockpuppets = Morebits.array.uniq(
					[...$('input:text[name=sockpuppet]', form)].map((o) => {
						return $(o).val().trim() || null;
					})
				);
				if (!sockpuppets[0]) {
					mw.notify(window.wgULS('您没有指定任何傀儡。', '您沒有指定任何傀儡。'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				comment += '{{'.concat('subst:', 'SPI report|');
				if (!sockpuppets.includes(input.sockmaster)) {
					comment += '1={{'.concat(
						'subst:',
						'#ifexist:{{',
						'subst:',
						`FULLPAGENAME}}||${input.sockmaster}}}|`
					);
				}
				comment += `${sockpuppets
					.map((sock, index) => {
						return `${index + 2}=${sock}`;
					})
					.join('|')}\n|evidence=${Morebits.string.appendPunctuation(input.reason)}\n`;
				if (input.checkuser) {
					comment += '|checkuser=yes';
				}
				comment += '}}';
				reason = comment;
				break;
			}

			// Report user for vandalism
			/* case 'aiv': */
			/* falls through */
			default: {
				if (!input.arvtype.length && input.reason === '') {
					mw.notify(window.wgULS('您必须指定理由', '您必須指定理由'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				reason += `== ${input.hidename ? window.wgULS('已隐藏用户名', '已隱藏使用者名稱') : uid} ==\n`;
				reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}`;
				if (input.hidename) {
					reason += '|hidename=1';
				}
				reason += "}}'''\n";
				const types = input.arvtype
					.map((v) => {
						switch (v) {
							case 'final':
								return '已发出最后警告';
							case 'postblock':
								return '封禁过期后随即破坏';
							case 'spambot':
								return '显而易见的spambot或失窃账号';
							case 'vandalonly':
								return '显而易见的纯破坏用户';
							case 'promoonly':
								return '仅用来散发广告宣传的用户';
							default:
								return '未知理由';
						}
					})
					.join('，');
				if (input.page !== '') {
					page = checkTitle(input.page, true);
					if (!page) {
						return;
					}
					comment += `* {{pagelinks|${
						page.getPrefixedText().includes('=') ? '1=' : ''
					}${page.getPrefixedText()}}}`;
					if (input.badid) {
						comment += `（{{diff|${page.getPrefixedText()}|${input.badid}|${input.goodid ?? ''}|diff}}）`;
					}
					comment += '\n';
				}
				if (types) {
					comment += `* ${types}`;
				}
				if (input.reason !== '') {
					input.reason = input.reason.replace(/\n\n+/g, '\n');
					input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
					comment += (types ? '。' : '* ') + input.reason;
				}
				comment = comment.trim();
				comment = Morebits.string.appendPunctuation(comment);
				reason += `${comment}\n* 发现人：~~`.concat('~~\n* 处理：');
				break;
			}
		}
		return [reason, comment];
	};
	Twinkle.arv.callback.evaluate = (e) => {
		const form = e.target;
		const input = Morebits.quickForm.getInputData(form);
		const {uid} = input;
		let reason;
		let summary;
		switch (input.category) {
			// Report 3RR
			case 'ewip': {
				reason = Twinkle.arv.callback.getReportWikitext(form);
				if (reason === undefined) {
					return;
				}
				summary = `${window.wgULS('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const ewipPage = new Morebits.wiki.page(
					'LIB_talk:管理员告示板',
					window.wgULS('处理EWIP请求', '處理EWIP請求')
				);
				ewipPage.setFollowRedirect(true);
				ewipPage.load(() => {
					const text = ewipPage.getPageText();
					const $ewipLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:EWIP">LIB:EWIP</a>';
					// check if user has already been reported
					if (
						new RegExp(
							`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
								uid
							)}\\s*\\}\\}\\s*===`
						).test(text)
					) {
						ewipPage
							.getStatusElement()
							.error(window.wgULS('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其加入到',
								'您輸入的評論已在下方提供，您可以將其加入到'
							) +
								$ewipLink +
								window.wgULS('已存在的小节中：', '已存在的小節中：')
						);
						return;
					}
					ewipPage.setPageSection(0);
					ewipPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					ewipPage.setEditSummary(summary);
					ewipPage.setChangeTags(Twinkle.changeTags);
					ewipPage.setAppendText(`\n${reason[0]}`);
					ewipPage.append();
				});
				break;
			}
			// Report inappropriate username
			case 'username': {
				reason = Twinkle.arv.callback.getReportWikitext(form);
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const uaaPage = new Morebits.wiki.page(
					'LIB_talk:管理员告示板',
					window.wgULS('处理UAA请求', '處理UAA請求')
				);
				uaaPage.setFollowRedirect(true);
				uaaPage.load(() => {
					const text = uaaPage.getPageText();
					// check if user has already been reported
					if (
						new RegExp(
							`\\{\\{\\s*user-uaa\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.string.escapeRegExp(
								uid
							)}\\s*(\\||\\})`
						).test(text)
					) {
						uaaPage.getStatusElement().error(window.wgULS('用户已被列入。', '使用者已被列入。'));
						const $uaaLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:UAA">LIB:UAA</a>';
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其手工加入',
								'您輸入的評論已在下方提供，您可以將其手工加入'
							) +
								$uaaLink +
								window.wgULS('上该用户的报告中：', '上該使用者的報告中：')
						);
						return;
					}
					uaaPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					uaaPage.setEditSummary(window.wgULS('新提报', '新提報'));
					uaaPage.setChangeTags(Twinkle.changeTags);
					uaaPage.setAppendText(`\n\n${reason[0]}`);
					uaaPage.append();
				});
				break;
			}
			// LIB:SPI
			case 'spi': {
				reason = Twinkle.arv.callback.getReportWikitext(form);
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				const reportpage = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.redirect = reportpage;
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const spiPage = new Morebits.wiki.page(reportpage, window.wgULS('抓取讨论页面', '抓取討論頁面'));
				spiPage.setFollowRedirect(true);
				spiPage.setEditSummary(window.wgULS('加入新提报', '加入新提報'));
				spiPage.setChangeTags(Twinkle.changeTags);
				spiPage.setAppendText(reason[0]);
				spiPage.setWatchlist(Twinkle.getPref('spiWatchReport'));
				spiPage.append();
				break;
			}

			// Report user for vandalism
			/* case 'aiv': */
			/* falls through */
			default: {
				reason = Twinkle.arv.callback.getReportWikitext(form);
				if (reason === undefined) {
					return;
				}
				summary = `${window.wgULS('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
				if (input.hidename) {
					summary = window.wgULS('报告一名用户', '報告一名使用者');
				}
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:报告当前破坏';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const aivPage = new Morebits.wiki.page(
					'LIB_talk:报告当前破坏',
					window.wgULS('处理VIP请求', '處理VIP請求')
				);
				aivPage.setFollowRedirect(true);
				aivPage.load(() => {
					const text = aivPage.getPageText();
					const $aivLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:VIP">LIB:VIP</a>';
					// check if user has already been reported
					if (
						new RegExp(
							`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
								uid
							)}\\s*\\}\\}\\s*===`
						).test(text)
					) {
						aivPage
							.getStatusElement()
							.error(window.wgULS('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其加入到',
								'您輸入的評論已在下方提供，您可以將其加入到'
							) +
								$aivLink +
								window.wgULS('已存在的小节中：', '已存在的小節中：')
						);
						return;
					}
					aivPage.setPageSection(0);
					aivPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					aivPage.setEditSummary(summary);
					aivPage.setChangeTags(Twinkle.changeTags);
					aivPage.setAppendText(`\n${reason[0]}`);
					aivPage.append();
				});
				break;
			}
		}
	};
	Twinkle.addInitCallback(Twinkle.arv, 'arv');
})(jQuery);
