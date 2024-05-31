// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {initMwApi} from 'ext.gadget.Util';

/*! Twinkle.js - twinkleprotect.js */
(function twinkleprotect($) {
	const $body = $('body');
	/**
	 * twinkleprotect.js: Protect/RPP module
	 * Mode of invocation: Tab ("PP"/"RPP")
	 * Active on: Non-special, non-MediaWiki pages
	 */
	// Note: a lot of code in this module is re-used/called by batchprotect.
	Twinkle.protect = () => {
		if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgNamespaceNumber') === 8) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.protect.callback,
			window.wgULS('保护', '保護'),
			'tw-rpp',
			Morebits.userIsSysop ? window.wgULS('保护页面', '保護頁面') : window.wgULS('请求保护页面', '請求保護頁面')
		);
	};
	Twinkle.protect.callback = () => {
		const Window = new Morebits.simpleWindow(620, 530);
		Window.setTitle(
			Morebits.userIsSysop
				? window.wgULS('施行或请求保护页面', '施行或請求保護頁面')
				: window.wgULS('请求保护页面', '請求保護頁面')
		);
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('保护条例', '保護條例'), 'LIB:PROT');
		Window.addFooterLink(window.wgULS('保护设置', '保護設定'), 'H:TW/PREF#protect');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#protect');
		const form = new Morebits.quickForm(Twinkle.protect.callback.evaluate);
		const actionfield = form.append({
			type: 'field',
			label: window.wgULS('操作类型', '操作類別'),
		});
		if (Morebits.userIsSysop) {
			actionfield.append({
				type: 'radio',
				name: 'actiontype',
				event: Twinkle.protect.callback.changeAction,
				list: [
					{
						label: window.wgULS('保护页面', '保護頁面'),
						value: 'protect',
						checked: true,
					},
				],
			});
		}
		actionfield.append({
			type: 'radio',
			name: 'actiontype',
			event: Twinkle.protect.callback.changeAction,
			list: [
				{
					label: window.wgULS('请求保护页面', '請求保護頁面'),
					value: 'request',
					tooltip:
						window.wgULS('若您想在LIB:RFPP请求保护此页', '若您想在LIB:RFPP請求保護此頁') +
						(Morebits.userIsSysop ? '而不是自行完成。' : '。'),
					checked: !Morebits.userIsSysop,
				},
				{
					label: window.wgULS('用保护模板标记此页', '用保護模板標記此頁'),
					value: 'tag',
					tooltip: window.wgULS('可以用此为页面加上合适的保护模板。', '可以用此為頁面加上合適的保護模板。'),
					disabled: mw.config.get('wgArticleId') === 0 || mw.config.get('wgPageContentModel') === 'Scribunto',
				},
			],
		});
		form.append({
			type: 'field',
			label: window.wgULS('默认', '預設'),
			name: 'field_preset',
		});
		form.append({
			type: 'field',
			label: '1',
			name: 'field1',
		});
		form.append({
			type: 'field',
			label: '2',
			name: 'field2',
		});
		form.append({
			type: 'submit',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		// We must init the controls
		const evt = document.createEvent('Event');
		evt.initEvent('change', true, true);
		result.actiontype[0].dispatchEvent(evt);
		// get current protection level asynchronously
		Twinkle.protect.fetchProtectionLevel();
	};
	// Customizable namespace and FlaggedRevs settings
	// In theory it'd be nice to have restrictionlevels defined here,
	// but those are only available via a siteinfo query
	// Limit template editor; a Twinkle restriction, not a site setting
	const isTemplate = mw.config.get('wgNamespaceNumber') === 10 || mw.config.get('wgNamespaceNumber') === 828;
	// Contains the current protection level in an object
	// Once filled, it will look something like:
	// { edit: { level: "sysop", expiry: <some date>, cascade: true }, ... }
	Twinkle.protect.currentProtectionLevels = {};
	Twinkle.protect.previousProtectionLevels = {};
	Twinkle.protect.fetchProtectionLevel = async () => {
		const api = initMwApi('morebits.js; Twinkle/1.1');
		try {
			const params = {
				format: 'json',
				indexpageids: true,
				action: 'query',
				list: 'logevents',
				letype: 'protect',
				letitle: mw.config.get('wgPageName'),
				prop: 'info',
				inprop: 'protection|watched',
				titles: mw.config.get('wgPageName'),
			};
			const protectData = await api.get(params);
			const [pageid] = protectData.query.pageids;
			const page = protectData.query.pages[pageid];
			const current = {};
			const previous = {};
			// Save requested page's watched status for later in case needed when filing request
			Twinkle.protect.watched = page.watchlistexpiry || page.watched === '';
			for (const protection of page.protection) {
				if (protection.type !== 'aft') {
					current[protection.type] = {
						level: protection.level,
						expiry: protection.expiry,
						cascade: protection.cascade === '',
					};
				}
			}
			// Only use the log except unprotect
			if (protectData.query.logevents.length >= 1 && protectData.query.logevents[0].action !== 'unprotect') {
				[Twinkle.protect.previousProtectionLog] = protectData.query.logevents;
			} else if (protectData.query.logevents.length >= 2) {
				[, Twinkle.protect.previousProtectionLog] = protectData.query.logevents;
			}
			if (Twinkle.protect.previousProtectionLog) {
				for (const protection of Twinkle.protect.previousProtectionLog.params.details) {
					if (protection.type !== 'aft') {
						previous[protection.type] = {
							level: protection.level,
							expiry: protection.expiry,
							cascade: protection.cascade === '',
						};
					}
				}
			}
			// show the protection level and log info
			Twinkle.protect.hasProtectLog = !!protectData.query.logevents.length;
			Twinkle.protect.currentProtectionLevels = current;
			Twinkle.protect.previousProtectionLevels = previous;
			Twinkle.protect.callback.showLogAndCurrentProtectInfo();
		} catch {}
	};
	Twinkle.protect.callback.showLogAndCurrentProtectInfo = () => {
		const currentlyProtected = Object.keys(Twinkle.protect.currentProtectionLevels).length !== 0;
		if (Twinkle.protect.hasProtectLog || Twinkle.protect.hasStableLog) {
			const $linkMarkup = $('<span>');
			if (Twinkle.protect.hasProtectLog) {
				$linkMarkup.append(
					$(
						`<a rel="noopener" target="_blank" href="${mw.util.getUrl('Special:Log', {
							action: 'view',
							page: mw.config.get('wgPageName'),
							type: 'protect',
						})}">${window.wgULS('保护日志', '保護日誌')}</a>`
					),
					Twinkle.protect.hasStableLog ? $('<span>').html(' &bull; ') : null
				);
			}
			Morebits.status.init($body.find('div[name="hasprotectlog"] span')[0]);
			Morebits.status.warn(
				currentlyProtected
					? window.wgULS('先前保护', '先前保護')
					: [
							window.wgULS('此页面曾在', '此頁面曾在'),
							$(
								`<b>${new Morebits.date(Twinkle.protect.previousProtectionLog.timestamp).calendar(
									'utc'
								)}</b>`
							)[0],
							`被${Twinkle.protect.previousProtectionLog.user}${window.wgULS('保护', '保護')}：`,
							...Twinkle.protect.formatProtectionDescription(Twinkle.protect.previousProtectionLevels),
						],
				$linkMarkup[0]
			);
		}
		Morebits.status.init($body.find('div[name="currentprot"] span')[0]);
		let protectionNode = [];
		let statusLevel = 'info';
		protectionNode = Twinkle.protect.formatProtectionDescription(Twinkle.protect.currentProtectionLevels);
		if (currentlyProtected) {
			statusLevel = 'warn';
		}
		Morebits.status[statusLevel](window.wgULS('当前保护等级', '目前保護等級'), protectionNode);
	};
	Twinkle.protect.callback.changeAction = (e) => {
		let field_preset;
		let field1;
		let field2;
		switch (e.target.values) {
			case 'protect':
				field_preset = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('默认', '預設'),
					name: 'field_preset',
				});
				field_preset.append({
					type: 'select',
					name: 'category',
					label: window.wgULS('选择默认：', '選擇預設：'),
					event: Twinkle.protect.callback.changePreset,
					list: mw.config.get('wgArticleId')
						? Twinkle.protect.protectionTypesAdmin
						: Twinkle.protect.protectionTypesCreate,
				});
				field2 = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('保护选项', '保護選項'),
					name: 'field2',
				});
				field2.append({
					type: 'div',
					name: 'currentprot',
					label: ' ',
				}); // holds the current protection level, as filled out by the async callback
				field2.append({
					type: 'div',
					name: 'hasprotectlog',
					label: ' ',
				});
				// for existing pages
				if (mw.config.get('wgArticleId')) {
					field2.append({
						type: 'checkbox',
						event: Twinkle.protect.formevents.editmodify,
						list: [
							{
								label: window.wgULS('修改编辑权限', '修改編輯權限'),
								name: 'editmodify',
								tooltip: window.wgULS(
									'若此项关闭，编辑权限将不会修改。',
									'若此項關閉，編輯權限將不會修改。'
								),
								checked: true,
							},
						],
					});
					field2.append({
						type: 'select',
						name: 'editlevel',
						label: window.wgULS('编辑权限：', '編輯權限：'),
						event: Twinkle.protect.formevents.editlevel,
						list: Twinkle.protect.protectionLevels.filter(
							// Filter TE outside of templates and modules
							(level) => {
								return isTemplate || level.value !== 'templateeditor';
							}
						),
					});
					field2.append({
						type: 'select',
						name: 'editexpiry',
						label: window.wgULS('终止时间：', '終止時間：'),
						event: (event) => {
							if (event.target.value === 'custom') {
								Twinkle.protect.doCustomExpiry(event.target);
							}
							$('input[name=small]', $(event.target).closest('form'))[0].checked =
								event.target.selectedIndex >= 4; // 1 month
						},

						// default expiry selection (2 days) is conditionally set in Twinkle.protect.callback.changePreset
						list: Twinkle.protect.protectionLengths,
					});
					field2.append({
						type: 'checkbox',
						event: Twinkle.protect.formevents.movemodify,
						list: [
							{
								label: window.wgULS('修改移动权限', '修改移動權限'),
								name: 'movemodify',
								tooltip: window.wgULS(
									'若此项被关闭，移动权限将不被修改。',
									'若此項被關閉，移動權限將不被修改。'
								),
								checked: true,
							},
						],
					});
					field2.append({
						type: 'select',
						name: 'movelevel',
						label: window.wgULS('移动权限：', '移動權限：'),
						event: Twinkle.protect.formevents.movelevel,
						list: Twinkle.protect.protectionLevels.filter(
							// Autoconfirmed is required for a move, redundant
							(level) => {
								return (
									level.value !== 'autoconfirmed' && (isTemplate || level.value !== 'templateeditor')
								);
							}
						),
					});
					field2.append({
						type: 'select',
						name: 'moveexpiry',
						label: window.wgULS('终止时间：', '終止時間：'),
						event: (event) => {
							if (event.target.value === 'custom') {
								Twinkle.protect.doCustomExpiry(event.target);
							}
						},
						// default expiry selection (2 days) is conditionally set in Twinkle.protect.callback.changePreset
						list: Twinkle.protect.protectionLengths,
					});
				} else {
					// for non-existing pages
					field2.append({
						type: 'select',
						name: 'createlevel',
						label: window.wgULS('创建权限：', '建立權限：'),
						event: Twinkle.protect.formevents.createlevel,
						list: Twinkle.protect.protectionLevels.filter(
							// Filter TE always, and autoconfirmed in mainspace
							(level) => {
								return level.value !== 'templateeditor';
							}
						),
					});
					field2.append({
						type: 'select',
						name: 'createexpiry',
						label: window.wgULS('终止时间：', '終止時間：'),
						event: (event) => {
							if (event.target.value === 'custom') {
								Twinkle.protect.doCustomExpiry(event.target);
							}
						},
						// default expiry selection (indefinite) is conditionally set in Twinkle.protect.callback.changePreset
						list: Twinkle.protect.protectionLengths,
					});
				}
				field2.append({
					type: 'checkbox',
					list: [
						{
							name: 'close',
							label: window.wgULS('标记请求保护页面中的请求', '標記請求保護頁面中的請求'),
							checked: true,
						},
					],
				});
				field2.append({
					type: 'textarea',
					name: 'protectReason',
					label: window.wgULS('理由（保护日志）：', '理由（保護日誌）：'),
				});
				if (!mw.config.get('wgArticleId') || mw.config.get('wgPageContentModel') === 'Scribunto') {
					// tagging isn't relevant for non-existing or module pages
					break;
				}
			/* falls through */
			case 'tag':
				field1 = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('标记选项', '標記選項'),
					name: 'field1',
				});
				field1.append({
					type: 'div',
					name: 'currentprot',
					label: ' ',
				}); // holds the current protection level, as filled out by the async callback
				field1.append({
					type: 'div',
					name: 'hasprotectlog',
					label: ' ',
				});
				field1.append({
					type: 'select',
					name: 'tagtype',
					label: window.wgULS('选择保护模板：', '選擇保護模板：'),
					list: Twinkle.protect.protectionTags,
					event: Twinkle.protect.formevents.tagtype,
				});
				field1.append({
					type: 'checkbox',
					list: [
						{
							name: 'small',
							label: window.wgULS('使用图标（small=yes）', '使用圖示（small=yes）'),
							tooltip: window.wgULS(
								'将给模板加上|small=yes参数，显示成右上角的一把挂锁。',
								'將給模板加上|small=yes參數，顯示成右上角的一把掛鎖。'
							),
						},
						{
							name: 'noinclude',
							label: window.wgULS('用&lt;noinclude&gt;包裹保护模板', '用&lt;noinclude&gt;包裹保護模板'),
							tooltip: window.wgULS(
								'将保护模板包裹在&lt;noinclude&gt;中',
								'將保護模板包裹在&lt;noinclude&gt;中'
							),
							checked: mw.config.get('wgNamespaceNumber') === 10,
						},
						{
							name: 'showexpiry',
							label: window.wgULS('在模板显示到期时间', '在模板顯示到期時間'),
							tooltip: window.wgULS('将给模板加上|expiry参数', '將給模板加上|expiry參數'),
							checked: true,
							hidden: e.target.values === 'tag',
						},
					],
				});
				break;
			case 'request':
				field_preset = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('保护类型', '保護類別'),
					name: 'field_preset',
				});
				field_preset.append({
					type: 'select',
					name: 'category',
					label: window.wgULS('类型和理由：', '類別和理由：'),
					event: Twinkle.protect.callback.changePreset,
					list: mw.config.get('wgArticleId')
						? Twinkle.protect.protectionTypes
						: Twinkle.protect.protectionTypesCreate,
				});
				field1 = new Morebits.quickForm.element({
					type: 'field',
					label: window.wgULS('选项', '選項'),
					name: 'field1',
				});
				field1.append({
					type: 'div',
					name: 'currentprot',
					label: ' ',
				}); // holds the current protection level, as filled out by the async callback
				field1.append({
					type: 'div',
					name: 'hasprotectlog',
					label: ' ',
				});
				field1.append({
					type: 'select',
					name: 'expiry',
					label: window.wgULS('时长：', '時長：'),
					list: [
						{
							label: '',
							selected: true,
							value: '',
						},
						{
							label: window.wgULS('临时', '臨時'),
							value: 'temporary',
						},
						{
							label: '永久',
							value: 'infinity',
						},
					],
				});
				field1.append({
					type: 'textarea',
					name: 'reason',
					label: '理由：',
				});
				break;
			default:
				mw.notify(window.wgULS('这玩意儿被海豚吃掉了！', '這玩意兒被海豚吃掉了！'), {
					type: 'warn',
					tag: 'twinkleprotect',
				});
				break;
		}
		let oldfield;
		if (field_preset) {
			[oldfield] = $(e.target.form).find('fieldset[name="field_preset"]');
			oldfield.parentNode.replaceChild(field_preset.render(), oldfield);
		} else {
			$(e.target.form).find('fieldset[name="field_preset"]').css('display', 'none');
		}
		if (field1) {
			[oldfield] = $(e.target.form).find('fieldset[name="field1"]');
			oldfield.parentNode.replaceChild(field1.render(), oldfield);
		} else {
			$(e.target.form).find('fieldset[name="field1"]').css('display', 'none');
		}
		if (field2) {
			[oldfield] = $(e.target.form).find('fieldset[name="field2"]');
			oldfield.parentNode.replaceChild(field2.render(), oldfield);
		} else {
			$(e.target.form).find('fieldset[name="field2"]').css('display', 'none');
		}
		if (e.target.values === 'protect') {
			// fake a change event on the preset dropdown
			const evt = document.createEvent('Event');
			evt.initEvent('change', true, true);
			e.target.form.category.dispatchEvent(evt);
			// reduce vertical height of dialog
			$(e.target.form).find('fieldset[name="field2"] select').parent().css({
				display: 'inline-block',
				marginRight: '0.5em',
			});
		}
		// re-add protection level and log info, if it's available
		Twinkle.protect.callback.showLogAndCurrentProtectInfo();
	};
	// NOTE: This function is used by batchprotect as well
	Twinkle.protect.formevents = {
		editmodify: (e) => {
			e.target.form.editlevel.disabled = !e.target.checked;
			e.target.form.editexpiry.disabled = !e.target.checked || e.target.form.editlevel.value === 'all';
			e.target.form.editlevel.style.color = e.target.checked ? '' : 'transparent';
			e.target.form.editexpiry.style.color = e.target.checked ? '' : 'transparent';
		},
		editlevel: (e) => {
			e.target.form.editexpiry.disabled = e.target.value === 'all';
		},
		movemodify: (e) => {
			// sync move settings with edit settings if applicable
			if (e.target.form.movelevel.disabled && !e.target.form.editlevel.disabled) {
				e.target.form.movelevel.value = e.target.form.editlevel.value;
				e.target.form.moveexpiry.value = e.target.form.editexpiry.value;
			} else if (e.target.form.editlevel.disabled) {
				e.target.form.movelevel.value = 'sysop';
				e.target.form.moveexpiry.value = 'infinity';
			}
			e.target.form.movelevel.disabled = !e.target.checked;
			e.target.form.moveexpiry.disabled = !e.target.checked || e.target.form.movelevel.value === 'all';
			e.target.form.movelevel.style.color = e.target.checked ? '' : 'transparent';
			e.target.form.moveexpiry.style.color = e.target.checked ? '' : 'transparent';
		},
		movelevel: (e) => {
			e.target.form.moveexpiry.disabled = e.target.value === 'all';
		},
		createlevel: (e) => {
			e.target.form.createexpiry.disabled = e.target.value === 'all';
		},
		tagtype: (e) => {
			e.target.form.small.disabled = e.target.value === 'none' || e.target.value === 'noop';
			e.target.form.noinclude.disabled = e.target.value === 'none' || e.target.value === 'noop';
			e.target.form.showexpiry.disabled = e.target.value === 'none' || e.target.value === 'noop';
		},
	};
	Twinkle.protect.doCustomExpiry = (target) => {
		const custom = prompt(
			window.wgULS(
				'输入自定义终止时间。\n您可以使用相对时间，如“1 minute”或“19 days”，或绝对时间“yyyymmddhhmm”（如“200602011405”是2006年02月01日14：05（UTC））',
				'輸入自訂終止時間。\n您可以使用相對時間，如「1 minute」或「19 days」，或絕對時間「yyyymmddhhmm」（如「200602011405」是2006年02月01日14：05（UTC））'
			),
			''
		);
		if (custom) {
			const option = document.createElement('option');
			option.setAttribute('value', custom);
			option.textContent = custom;
			target.appendChild(option);
			target.value = custom;
		} else {
			target.selectedIndex = 0;
		}
	};
	// NOTE: This list is used by batchprotect as well
	Twinkle.protect.protectionLevels = [
		{
			label: '全部',
			value: 'all',
		},
		{
			label: window.wgULS('仅允许自动确认用户', '僅允許自動確認使用者'),
			value: 'autoconfirmed',
		},
		{
			label: window.wgULS('仅模板编辑员和管理员', '僅模板編輯員和管理員'),
			value: 'templateeditor',
		},
		{
			label: window.wgULS('仅管理员', '僅管理員'),
			value: 'sysop',
			selected: true,
		},
		{
			label: window.wgULS('仅允许档案理事员', '僅允許檔案理事員'),
			value: 'officialprotected',
		},
	];
	// default expiry selection is conditionally set in Twinkle.protect.callback.changePreset
	// NOTE: This list is used by batchprotect as well
	Twinkle.protect.protectionLengths = [
		{
			label: '1天',
			value: '1 day',
		},
		{
			label: '3天',
			value: '3 days',
		},
		{
			label: window.wgULS('1周', '1週'),
			value: '1 week',
		},
		{
			label: window.wgULS('2周', '2週'),
			value: '2 weeks',
		},
		{
			label: window.wgULS('1个月', '1個月'),
			value: '1 month',
		},
		{
			label: window.wgULS('3个月', '3個月'),
			value: '3 months',
		},
		{
			label: window.wgULS('6个月', '6個月'),
			value: '6 months',
		},
		{
			label: '1年',
			value: '1 year',
		},
		{
			label: window.wgULS('无限期', '無限期'),
			value: 'infinity',
		},
		{
			label: window.wgULS('自定义……', '自訂……'),
			value: 'custom',
		},
	];
	Twinkle.protect.protectionTypesAdmin = [
		{
			label: window.wgULS('解除保护', '解除保護'),
			value: 'unprotect',
		},
		{
			label: window.wgULS('全保护', '全保護'),
			list: [
				{
					label: window.wgULS('常规（全）', '常規（全）'),
					value: 'pp-protected',
				},
				{
					label: window.wgULS('争议、编辑战（全）', '爭議、編輯戰（全）'),
					value: 'pp-dispute',
				},
			],
		},
		{
			label: window.wgULS('模板保护', '模板保護'),
			list: [
				{
					label: window.wgULS('高风险模板（模板）', '高風險模板（模板）'),
					value: 'pp-template',
				},
			],
		},
		{
			label: window.wgULS('半保护', '半保護'),
			list: [
				{
					label: window.wgULS('常规（半）', '常規（半）'),
					value: 'pp-semi-protected',
				},
				{
					label: window.wgULS('持续破坏（半）', '持續破壞（半）'),
					value: 'pp-semi-vandalism',
				},
				{
					label: window.wgULS('违反生者传记条例（半）', '違反生者傳記條例（半）'),
					value: 'pp-semi-blp',
				},
				{
					label: window.wgULS('傀儡破坏（半）', '傀儡破壞（半）'),
					value: 'pp-semi-sock',
				},
				{
					label: window.wgULS('高风险模板（半）', '高風險模板（半）'),
					value: 'pp-semi-template',
				},
				{
					label: window.wgULS('被封禁用户滥用讨论页（半）', '被封禁使用者濫用討論頁（半）'),
					value: 'pp-semi-usertalk',
				},
			],
		},
		{
			label: window.wgULS('移动保护', '移動保護'),
			list: [
				{
					label: window.wgULS('常规（移动）', '常規（移動）'),
					value: 'pp-move',
				},
				{
					label: window.wgULS('争议、移动战（移动）', '爭議、移動戰（移動）'),
					value: 'pp-move-dispute',
				},
				{
					label: window.wgULS('移动破坏（移动）', '移動破壞（移動）'),
					value: 'pp-move-vandalism',
				},
				{
					label: window.wgULS('高风险页面（移动）', '高風險頁面（移動）'),
					value: 'pp-move-indef',
				},
			],
		},
	].filter(
		(
			// Filter for templates
			{label}
		) => {
			return isTemplate || (label !== '模板保护' && label !== '模板保護');
		}
	);
	Twinkle.protect.protectionTypesCreateOnly = [
		{
			label: window.wgULS('白纸保护', '白紙保護'),
			list: [
				{
					label: window.wgULS('常规（白纸）', '常規（白紙）'),
					value: 'pp-create',
				},
				{
					label: window.wgULS('多次重复创建（白纸）', '多次重複建立（白紙）'),
					value: 'pp-create-repeat',
				},
				{
					label: window.wgULS('持续破坏（白纸）', '持續破壞（白紙）'),
					value: 'pp-create-vandalism',
				},
				{
					label: window.wgULS('已封禁用户的用户页（白纸）', '已封禁使用者的使用者頁（白紙）'),
					value: 'pp-create-userpage',
				},
			],
		},
	];
	Twinkle.protect.protectionTypes = [
		...Twinkle.protect.protectionTypesAdmin,
		...Twinkle.protect.protectionTypesCreateOnly,
	];
	Twinkle.protect.protectionTypesCreate = [
		{
			label: '解除保护',
			value: 'unprotect',
		},
		...Twinkle.protect.protectionTypesCreateOnly,
	];
	// NOTICE: keep this synched with [[MediaWiki:Protect-dropdown]]
	// expiry will override any defaults
	Twinkle.protect.protectionPresetsInfo = {
		'pp-protected': {
			edit: 'sysop',
			move: 'sysop',
			reason: null,
		},
		'pp-dispute': {
			edit: 'sysop',
			move: 'sysop',
			reason: window.wgULS('编辑战', '編輯戰'),
		},
		'pp-template': {
			edit: 'templateeditor',
			move: 'templateeditor',
			expiry: 'infinity',
			reason: window.wgULS('[[LIB:HRT|高风险模板]]', '[[LIB:HRT|高風險模板]]'),
			template: 'noop',
		},
		'pp-vandalism': {
			edit: 'sysop',
			move: 'sysop',
			reason: window.wgULS('被自动确认用户破坏', '被自動確認使用者破壞'),
		},
		'pp-sock': {
			edit: 'sysop',
			move: 'sysop',
			reason: window.wgULS('持续的傀儡破坏', '持續的傀儡破壞'),
		},
		'pp-semi-vandalism': {
			edit: 'autoconfirmed',
			reason: window.wgULS('被新用户破坏', '被新使用者破壞'),
			template: 'pp-vandalism',
		},
		'pp-semi-blp': {
			edit: 'autoconfirmed',
			reason: window.wgULS('新用户违反生者传记条例', '新使用者違反生者傳記條例'),
		},
		'pp-semi-usertalk': {
			edit: 'autoconfirmed',
			reason: window.wgULS('被封禁用户滥用其讨论页', '被封禁使用者濫用其討論頁'),
		},
		'pp-semi-template': {
			// removed for now
			edit: 'autoconfirmed',
			expiry: 'infinity',
			reason: window.wgULS('[[LIB:HRT|高风险模板]]', '[[LIB:HRT|高風險模板]]'),
			template: 'noop',
		},
		'pp-semi-sock': {
			edit: 'autoconfirmed',
			reason: window.wgULS('持续的傀儡破坏', '持續的傀儡破壞'),
			template: 'pp-sock',
		},
		'pp-semi-protected': {
			edit: 'autoconfirmed',
			reason: null,
			template: 'pp-protected',
		},
		'pp-move': {
			move: 'sysop',
			reason: null,
		},
		'pp-move-dispute': {
			move: 'sysop',
			reason: window.wgULS('页面移动战', '頁面移動戰'),
		},
		'pp-move-vandalism': {
			move: 'sysop',
			reason: window.wgULS('移动破坏', '移動破壞'),
		},
		'pp-move-indef': {
			move: 'sysop',
			expiry: 'infinity',
			reason: window.wgULS('高风险页面', '高風險頁面'),
		},
		unprotect: {
			edit: 'all',
			move: 'all',
			create: 'all',
			reason: null,
			template: 'none',
		},
		'pp-create': {
			create: 'autoconfirmed',
			reason: null,
		},
		'pp-create-repeat': {
			create: 'autoconfirmed',
			reason: window.wgULS('多次重复创建', '多次重複建立'),
		},
		'pp-create-vandalism': {
			create: 'autoconfirmed',
			reason: window.wgULS('被新用户破坏', '被新使用者破壞'),
		},
		'pp-create-userpage': {
			create: 'sysop',
			expiry: 'infinity',
			reason: window.wgULS('被永久封禁的用户页', '被永久封禁的使用者頁面'),
		},
	};
	Twinkle.protect.protectionTags = [
		{
			label: window.wgULS('无（移除现有模板）', '無（移除現有模板）'),
			value: 'none',
		},
		{
			label: window.wgULS('无（不移除现有模板）', '無（不移除現有模板）'),
			value: 'noop',
		},
		{
			label: '通用模板',
			list: [
				{
					label: `{{pp-dispute}}: ${window.wgULS('争议', '爭議')}`,
					value: 'pp-dispute',
				},
				{
					label: `{{pp-vandalism}}: ${window.wgULS('破坏', '破壞')}`,
					value: 'pp-vandalism',
					selected: true,
				},
				{
					label: '{{pp-sock}}: 傀儡',
					value: 'pp-sock',
				},
				{
					label: `{{pp-template}}: ${window.wgULS('高风险模板', '高風險模板')}`,
					value: 'pp-template',
				},
				{
					label: `{{pp-protected}}: ${window.wgULS('常规', '常規')}`,
					value: 'pp-protected',
				},
			],
		},
		{
			label: window.wgULS('半保护模板', '半保護模板'),
			list: [
				{
					label: `{{pp-semi-usertalk}}: ${window.wgULS('封禁的用户', '封禁的使用者')}`,
					value: 'pp-semi-usertalk',
				},
				{
					label: `{{pp-semi-blp}}: ${window.wgULS('生者传记', '生者傳記')}`,
					value: 'pp-semi-blp',
				},
				{
					label: `{{pp-semi-indef}}: ${window.wgULS('长期', '長期')}`,
					value: 'pp-semi-indef',
				},
			],
		},
		{
			label: window.wgULS('移动保护模板', '移動保護模板'),
			list: [
				{
					label: `{{pp-move-dispute}}: ${window.wgULS('争议', '爭議')}`,
					value: 'pp-move-dispute',
				},
				{
					label: `{{pp-move-vandalism}}: ${window.wgULS('破坏', '破壞')}`,
					value: 'pp-move-vandalism',
				},
				{
					label: `{{pp-move-indef}}: ${window.wgULS('长期', '長期')}`,
					value: 'pp-move-indef',
				},
				{
					label: `{{pp-move}}: ${window.wgULS('常规', '常規')}`,
					value: 'pp-move',
				},
			],
		},
	];
	Twinkle.protect.callback.changePreset = (e) => {
		const {form} = e.target;
		const actiontypes = form.actiontype;
		let actiontype;
		for (const action_type_value of actiontypes) {
			if (!action_type_value.checked) {
				continue;
			}
			actiontype = action_type_value.values;
			break;
		}
		if (actiontype === 'protect') {
			// actually protecting the page
			const item = Twinkle.protect.protectionPresetsInfo[form.category.value];
			if (mw.config.get('wgArticleId')) {
				if (item.edit) {
					form.editmodify.checked = true;
					Twinkle.protect.formevents.editmodify({
						target: form.editmodify,
					});
					form.editlevel.value = item.edit;
					Twinkle.protect.formevents.editlevel({
						target: form.editlevel,
					});
				} else {
					form.editmodify.checked = false;
					Twinkle.protect.formevents.editmodify({
						target: form.editmodify,
					});
				}
				if (item.move) {
					form.movemodify.checked = true;
					Twinkle.protect.formevents.movemodify({
						target: form.movemodify,
					});
					form.movelevel.value = item.move;
					Twinkle.protect.formevents.movelevel({
						target: form.movelevel,
					});
				} else {
					form.movemodify.checked = false;
					Twinkle.protect.formevents.movemodify({
						target: form.movemodify,
					});
				}
				form.editexpiry.value = item.expiry || '1 week';
				form.moveexpiry.value = item.expiry || '1 week';
			} else {
				if (item.create) {
					form.createlevel.value = item.create;
					Twinkle.protect.formevents.createlevel({
						target: form.createlevel,
					});
					form.createexpiry.value = item.createexpiry || '1 week';
				}
				form.createexpiry.value = item.expiry || '1 week';
			}
			const reasonField = actiontype === 'protect' ? form.protectReason : form.reason;
			if (item.reason) {
				reasonField.value = item.reason;
			} else {
				reasonField.value = '';
			}
			// sort out tagging options, disabled if nonexistent or lua
			if (mw.config.get('wgArticleId') && mw.config.get('wgPageContentModel') !== 'Scribunto') {
				if (form.category.value === 'unprotect') {
					form.tagtype.value = 'none';
				} else {
					form.tagtype.value = item.template ?? form.category.value;
				}
				Twinkle.protect.formevents.tagtype({
					target: form.tagtype,
				});
				if (/template/.test(form.category.value)) {
					form.noinclude.checked = true;
				} else if (mw.config.get('wgNamespaceNumber') !== 10) {
					form.noinclude.checked = false;
				}
			}
		} else if (form.category.value === 'unprotect') {
			// RPP request
			form.expiry.value = '';
			form.expiry.disabled = true;
		} else {
			form.expiry.value = '';
			form.expiry.disabled = false;
		}
	};
	Twinkle.protect.callback.evaluate = (e) => {
		const form = e.target;
		const input = Morebits.quickForm.getInputData(form);
		let tagparams;
		if (
			input.actiontype === 'tag' ||
			(input.actiontype === 'protect' &&
				mw.config.get('wgArticleId') &&
				mw.config.get('wgPageContentModel') !== 'Scribunto')
		) {
			tagparams = {
				tag: input.tagtype,
				reason:
					(input.tagtype === 'pp-protected' ||
						input.tagtype === 'pp-semi-protected' ||
						input.tagtype === 'pp-move') &&
					input.protectReason
						? input.protectReason
						: null,
				showexpiry: input.actiontype === 'protect' ? input.showexpiry : null,
				small: input.small,
				noinclude: input.noinclude,
			};
			if (input.actiontype === 'protect') {
				if (input.editmodify) {
					tagparams.expiry = input.editexpiry;
				} else if (input.movemodify) {
					tagparams.expiry = input.moveexpiry;
				}
			}
		}
		const closeparams = {};
		if (input.close) {
			if (input.category === 'unprotect') {
				closeparams.type = 'unprotect';
			} else if (mw.config.get('wgArticleId')) {
				if (input.editmodify) {
					switch (input.editlevel) {
						case 'officialprotected':
							closeparams.type = 'officialprotected';
							closeparams.expiry = input.editexpiry;
							break;
						case 'revisionprotected':
							closeparams.type = 'revisionprotected';
							closeparams.expiry = input.editexpiry;
							break;
						case 'sysop':
							closeparams.type = 'full';
							closeparams.expiry = input.editexpiry;
							break;
						case 'templateeditor':
							closeparams.type = 'temp';
							closeparams.expiry = input.editexpiry;
							break;
						case 'autoconfirmed':
							closeparams.type = 'semi';
							closeparams.expiry = input.editexpiry;
							break;
						// No default
					}
				} else if (
					input.movemodify &&
					['officialprotected', 'revisionprotected', 'sysop', 'templateeditor'].includes(input.movelevel)
				) {
					closeparams.type = 'move';
					closeparams.expiry = input.moveexpiry;
				}
			} else if (input.createlevel !== 'all') {
				closeparams.type = 'salt';
				closeparams.expiry = input.createexpiry;
			}
		}
		switch (input.actiontype) {
			case 'protect': {
				// protect the page
				Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
				Morebits.wiki.actionCompleted.notice = window.wgULS('保护完成', '保護完成');
				let statusInited = false;
				let thispage;
				const allDone = () => {
					if (thispage) {
						thispage.getStatusElement().info('完成');
					}
					if (tagparams) {
						Twinkle.protect.callbacks.taggingPageInitial(tagparams);
					}
					if (closeparams && closeparams.type) {
						const rppPage = new Morebits.wiki.page(
							'LIB_talk:页面保护请求',
							window.wgULS('关闭请求', '關閉請求')
						);
						rppPage.setFollowRedirect(true);
						rppPage.setCallbackParameters(closeparams);
						rppPage.load(Twinkle.protect.callbacks.closeRequest);
					}
				};
				const protectIt = (next) => {
					thispage = new Morebits.wiki.page(
						mw.config.get('wgPageName'),
						window.wgULS('保护页面', '保護頁面')
					);
					if (mw.config.get('wgArticleId')) {
						if (input.editmodify) {
							thispage.setEditProtection(input.editlevel, input.editexpiry);
						}
						if (input.movemodify) {
							// Ensure a level has actually been chosen
							if (input.movelevel) {
								thispage.setMoveProtection(input.movelevel, input.moveexpiry);
							} else {
								mw.notify(window.wgULS('您需要选择保护层级！', '您需要選擇保護層級！'), {
									type: 'warn',
									tag: 'twinkleprotect',
								});
								return;
							}
						}
						thispage.setWatchlist(Twinkle.getPref('watchProtectedPages'));
					} else {
						thispage.setCreateProtection(input.createlevel, input.createexpiry);
						thispage.setWatchlist(false);
					}
					if (input.protectReason) {
						thispage.setEditSummary(input.protectReason);
						thispage.setChangeTags(Twinkle.changeTags);
					} else {
						mw.notify(
							window.wgULS(
								'您必须输入保护理由，这将被记录在保护日志中。',
								'您必須輸入保護理由，這將被記錄在保護日誌中。'
							),
							{
								type: 'warn',
								tag: 'twinkleprotect',
							}
						);
						return;
					}
					if (!statusInited) {
						Morebits.simpleWindow.setButtonsEnabled(false);
						Morebits.status.init(form);
						statusInited = true;
					}
					thispage.setChangeTags(Twinkle.changeTags);
					thispage.protect(next);
				};
				if (input.editmodify || input.movemodify || !mw.config.get('wgArticleId')) {
					protectIt(allDone);
				} else {
					mw.notify(
						window.wgULS(
							'请告诉Twinkle要做什么！\n若您只是想标记该页，请选择上面的“用保护模板标记此页”选项。',
							'請告訴Twinkle要做什麼！\n若您只是想標記該頁，請選擇上面的「用保護模板標記此頁」選項。'
						),
						{
							type: 'warn',
							tag: 'twinkleprotect',
						}
					);
				}
				break;
			}
			case 'tag':
				// apply a protection template
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
				Morebits.wiki.actionCompleted.followRedirect = false;
				Morebits.wiki.actionCompleted.notice = window.wgULS('标记完成', '標記完成');
				Twinkle.protect.callbacks.taggingPageInitial(tagparams);
				break;
			case 'request': {
				// file request at RFPP
				let typename;
				let typereason;
				switch (input.category) {
					case 'pp-dispute':
					case 'pp-protected':
						typename = window.wgULS('全保护', '全保護');
						break;
					case 'pp-template':
						typename = window.wgULS('模板保护', '模板保護');
						break;
					case 'pp-vandalism':
					case 'pp-semi-disruptive':
					case 'pp-semi-unsourced':
					case 'pp-semi-vandalism':
					case 'pp-semi-usertalk':
					case 'pp-semi-template': // removed for now
					case 'pp-semi-sock':
					case 'pp-semi-blp':
					case 'pp-semi-protected':
						typename = window.wgULS('半保护', '半保護');
						break;
					case 'pp-move':
					case 'pp-move-dispute':
					case 'pp-move-indef':
					case 'pp-move-vandalism':
						typename = window.wgULS('移动保护', '移動保護');
						break;
					case 'pp-create':
					case 'pp-create-offensive':
					case 'pp-create-blp':
					case 'pp-create-salt':
					case 'pp-create-userpage':
					case 'pp-create-repeat':
					case 'pp-create-vandalism':
						typename = window.wgULS('白纸保护', '白紙保護');
						break;
					/* case 'unprotect': */
					/* falls through */
					default:
						typename = window.wgULS('解除保护', '解除保護');
						break;
				}
				switch (input.category) {
					case 'pp-dispute':
						typereason = window.wgULS('争议、编辑战', '爭議、編輯戰');
						break;
					case 'pp-vandalism':
					case 'pp-semi-vandalism':
					case 'pp-create-vandalism':
						typereason = window.wgULS('持续破坏', '持續破壞');
						break;
					case 'pp-template':
					case 'pp-semi-template':
						// removed for now
						typereason = window.wgULS('高风险模板', '高風險模板');
						break;
					case 'pp-create-userpage':
						typereason = window.wgULS('被永久封禁的用户页', '被永久封鎖的使用者頁面');
						break;
					case 'pp-semi-usertalk':
						typereason = window.wgULS('已封禁用户的讨论页', '已封鎖使用者的討論頁');
						break;
					case 'pp-semi-sock':
						typereason = window.wgULS('傀儡破坏', '傀儡破壞');
						break;
					case 'pp-semi-blp':
						typereason = window.wgULS('违反生者传记条例', '違反生者傳記條例');
						break;
					case 'pp-move-dispute':
						typereason = window.wgULS('争议、移动战', '爭議、移動戰');
						break;
					case 'pp-move-vandalism':
						typereason = window.wgULS('移动破坏', '移動破壞');
						break;
					case 'pp-move-indef':
						typereason = window.wgULS('高风险页面', '高風險頁面');
						break;
					case 'pp-create-repeat':
						typereason = window.wgULS('多次重复创建', '多次重複建立');
						break;
					default:
						typereason = '';
						break;
				}
				let reason = typereason;
				if (input.reason !== '') {
					if (typereason !== '') {
						reason += '：';
					}
					reason += input.reason;
				}
				if (reason !== '') {
					reason = Morebits.string.appendPunctuation(reason);
				}
				const rppparams = {
					reason,
					typename,
					category: input.category,
					expiry: input.expiry,
				};
				Morebits.simpleWindow.setButtonsEnabled(false);
				Morebits.status.init(form);
				const rppName = 'LIB_talk:页面保护请求';
				// Updating data for the action completed event
				Morebits.wiki.actionCompleted.redirect = rppName;
				Morebits.wiki.actionCompleted.notice = window.wgULS(
					'提名完成，重定向到讨论页',
					'提名完成，重新導向到討論頁'
				);
				const rppPage = new Morebits.wiki.page(rppName, window.wgULS('请求保护页面', '請求保護頁面'));
				rppPage.setFollowRedirect(true);
				rppPage.setCallbackParameters(rppparams);
				rppPage.load(Twinkle.protect.callbacks.fileRequest);
				break;
			}
			default:
				mw.notify('twinkleprotect: 未知操作类型', {
					type: 'warn',
					tag: 'twinkleprotect',
				});
				break;
		}
	};
	Twinkle.protect.callbacks = {
		taggingPageInitial: (tagparams) => {
			if (tagparams.tag === 'noop') {
				Morebits.status.info(
					window.wgULS('应用保护模板', '應用保護模板'),
					window.wgULS('没什么要做的', '沒什麼要做的')
				);
				return;
			}
			const pageName = mw.config.get('wgPageName');
			const protectedPage = new Morebits.wiki.page(pageName, window.wgULS('标记页面', '標記頁面'));
			protectedPage.setCallbackParameters(tagparams);
			protectedPage.load(Twinkle.protect.callbacks.taggingPage);
		},
		getTaggedPage: (params, text) => {
			let tag;
			let summary;
			const oldtag_re =
				/(?:<noinclude>)?[ \t]*\{\{\s*(pp-[^{}]*?|protected|(?:t|v|s|p-|usertalk-v|usertalk-s|sb|move)protected(?:2)?|protected template|privacy protection)\s*?\}\}\s*(?:<\/noinclude>)?\s*/gi;
			const re_result = oldtag_re.exec(text);
			if (
				re_result &&
				(params.tag === 'none' ||
					confirm(
						window.wgULS('在页面上找到{{', '在頁面上找到{{') +
							re_result[1] +
							window.wgULS(
								'}}\n单击确定以移除，或单击取消以取消操作。',
								'}}\n點擊確定以移除，或點擊取消以取消操作。'
							)
					))
			) {
				text = text.replace(oldtag_re, '');
			}
			if (params.tag === 'none') {
				summary = window.wgULS('移除保护模板', '移除保護模板');
			} else {
				({tag} = params);
				if (params.reason) {
					tag += `|reason=${params.reason}`;
				}
				if (params.showexpiry && params.expiry && !Morebits.string.isInfinity(params.expiry)) {
					tag += '|expiry={{'.concat('subst:', `#time:c|${params.expiry}}}`);
				}
				if (params.small) {
					tag += '|small=yes';
				}
				if (/^\s*#(?:redirect|重定向|重新導向)/i.test(text)) {
					// redirect page
					// Only tag if no {{rcat shell}} is found
					if (
						text.match(
							/{{(?:Redirect[ _]category shell|Rcat[ _]shell|This[ _]is a redirect|多种类型重定向|多種類型重定向|多種類型重新導向|多种类型重新导向|R0|其他重定向|RCS|Redirect[ _]shell)/i
						)
					) {
						Morebits.status.info(
							'已存在Redirect category shell',
							window.wgULS('没什么可做的', '沒什麼可做的')
						);
						return;
					}
					text = text.replace(
						/#(?:redirect|重定向|重新導向) ?(\[\[.*?\]\])(.*)/i,
						`#REDIRECT $1$2\n\n{{${tag}}}`
					);
				} else {
					if (params.noinclude) {
						tag = `<noinclude>{{${tag}}}</noinclude>`;
						// 只有表格需要单独加回车，其他情况加回车会破坏模板。
						if (text.indexOf('{|') === 0) {
							tag += '\n';
						}
					} else {
						tag = `{{${tag}}}\n`;
					}
					// Insert tag after short description or any hatnotes
					const ysarchives_page = new Morebits.wikitext.page(text);
					text = ysarchives_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
				}
				summary = `加入{{${params.tag}}}`;
			}
			return {
				text,
				summary,
			};
		},
		taggingPage: (protectedPage) => {
			const params = protectedPage.getCallbackParameters();
			const text = protectedPage.getPageText();
			const newVersion = Twinkle.protect.callbacks.getTaggedPage(params, text);
			if (newVersion === undefined) {
				protectedPage.getStatusElement().info('完成');
				return;
			}
			protectedPage.setEditSummary(newVersion.summary);
			protectedPage.setChangeTags(Twinkle.changeTags);
			protectedPage.setWatchlist(Twinkle.getPref('watchPPTaggedPages'));
			protectedPage.setPageText(newVersion.text);
			protectedPage.setCreateOption('nocreate');
			protectedPage.suppressProtectWarning(); // no need to let admins know they are editing through protection
			protectedPage.save();
		},
		fileRequest: (rppPage) => {
			const params = rppPage.getCallbackParameters();
			let text = rppPage.getPageText();
			const statusElement = rppPage.getStatusElement();
			const rppRe = new RegExp(
				`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.string.escapeRegExp(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`,
				'm'
			);
			const tag = rppRe.exec(text);
			const rppLink = document.createElement('a');
			rppLink.setAttribute('href', mw.util.getUrl(rppPage.getPageName()));
			rppLink.appendChild(document.createTextNode(rppPage.getPageName()));
			if (tag) {
				statusElement.error([
					rppLink,
					window.wgULS('已有对此页面的保护提名，取消操作。', '已有對此頁面的保護提名，取消操作。'),
				]);
				return;
			}
			let newtag = `=== [[:${Morebits.pageNameNorm}]] ===\n`;
			if (new RegExp(`^${mw.util.escapeRegExp(newtag).replace(/\s+/g, String.raw`\s*`)}`, 'm').test(text)) {
				statusElement.error([
					rppLink,
					window.wgULS('已有对此页面的保护提名，取消操作。', '已有對此頁面的保護提名，取消操作。'),
				]);
				return;
			}
			let words;
			switch (params.expiry) {
				case 'temporary':
					words = window.wgULS('临时', '臨時');
					break;
				case 'infinity':
					words = '永久';
					break;
				default:
					words = '';
					break;
			}
			words += params.typename;
			newtag += `* <span style="font-size: 90%">${window.wgULS('当前保护状态', '目前保護狀態')}：{{protection status|${
				/[=]/.test(Morebits.pageNameNorm) ? '1=' : ''
			}${Morebits.pageNameNorm}}}</span>\n`;
			newtag += `${
				window.wgULS('请求', '請求') +
				Morebits.string.toUpperCaseFirstChar(words) +
				(params.reason === '' ? '。' : `：${Morebits.string.formatReasonText(params.reason)}`)
			}--~~`.concat('~~');
			let reg;
			if (params.category === 'unprotect') {
				reg = /(==\s*请求解除保护\s*==)/;
			} else {
				reg = /({{\s*\/header\s*}})/;
			}
			const originalTextLength = text.length;
			text = text.replace(reg, `$1\n${newtag}\n`);
			if (text.length === originalTextLength) {
				const linknode = document.createElement('a');
				linknode.setAttribute('href', mw.util.getUrl('Help:Twinkle/修复RFPP'));
				linknode.appendChild(document.createTextNode(window.wgULS('如何修复RFPP', '如何修復RFPP')));
				statusElement.error([
					window.wgULS(
						'无法在LIB:RFPP上找到相关定位点标记，要修复此问题，请参见',
						'無法在LIB:RFPP上找到相關定位點標記，要修復此問題，請參見'
					),
					linknode,
					'。',
				]);
				return;
			}
			statusElement.status('加入新提名…');
			rppPage.setEditSummary(
				`/* ${Morebits.pageNameNorm} */ ${window.wgULS('请求对', '請求對')}[[${Morebits.pageNameNorm}]]${
					params.typename
				}`
			);
			rppPage.setChangeTags(Twinkle.changeTags);
			rppPage.setPageText(text);
			rppPage.setCreateOption('recreate');
			rppPage.save(() => {
				// Watch the page being requested
				const watchPref = Twinkle.getPref('watchRequestedPages');
				// action=watch has no way to rely on user preferences (T262912), so we do it manually.
				// The watchdefault pref appears to reliably return '1' (string),
				// but that's not consistent among prefs so might as well be "correct"
				const watch =
					watchPref !== 'no' &&
					(watchPref !== 'default' || !!Number.parseInt(mw.user.options.get('watchdefault'), 10));
				if (watch) {
					const watch_query = {
						action: 'watch',
						titles: mw.config.get('wgPageName'),
						token: mw.user.tokens.get('watchToken'),
					};
					// Only add the expiry if page is unwatched or already temporarily watched
					if (Twinkle.protect.watched !== true && watchPref !== 'default' && watchPref !== 'yes') {
						watch_query.expiry = watchPref;
					}
					new Morebits.wiki.api(
						window.wgULS('将请求保护的页面加入到监视列表', '將請求保護的頁面加入到監視清單'),
						watch_query
					).post();
				}
			});
		},
		closeRequest: (rppPage) => {
			const params = rppPage.getCallbackParameters();
			let text = rppPage.getPageText();
			const statusElement = rppPage.getStatusElement();
			const sections = text.split(/(?=\n==\s*请求解除保护\s*==)/);
			if (sections.length !== 2) {
				const linknode2 = document.createElement('a');
				linknode2.setAttribute('href', mw.util.getUrl('Help:Twinkle/修复RFPP'));
				linknode2.appendChild(document.createTextNode('如何修复RFPP'));
				statusElement.error([
					window.wgULS(
						'无法在LIB:RFPP上找到相关定位点标记，要修复此问题，请参见',
						'無法在LIB:RFPP上找到相關定位點標記，要修復此問題，請參見'
					),
					linknode2,
					'。',
				]);
				return;
			}
			let sectionText;
			let expiryText = '';
			if (params.type === 'unprotect') {
				[, sectionText] = sections;
			} else {
				[sectionText] = sections;
				expiryText = Morebits.string.formatTime(params.expiry);
			}
			const requestList = sectionText.split(/(?=\n===.+===\s*\n)/);
			let found = false;
			const rppRe = new RegExp(
				`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.pageNameRegex(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`,
				'm'
			);
			for (let i = 1; i < requestList.length; i++) {
				if (rppRe.exec(requestList[i])) {
					requestList[i] = requestList[i].trimEnd();
					if (params.type === 'unprotect') {
						requestList[i] += '\n: {{RFPP|isun}}。--~~'.concat('~~\n');
					} else {
						requestList[i] += `\n: {{RFPP|${params.type}|${
							Morebits.string.isInfinity(params.expiry) ? 'infinity' : expiryText
						}}}。--~~`.concat('~~\n');
					}
					found = true;
					break;
				}
			}
			if (!found) {
				statusElement.warn(window.wgULS('没有找到相关的请求', '沒有找到相關的請求'));
				return;
			}
			if (params.type === 'unprotect') {
				text = sections[0] + requestList.join('');
			} else {
				text = requestList.join('') + sections[1];
			}
			let summary = '';
			if (params.type === 'unprotect') {
				[, sectionText] = sections;
			} else {
				[sectionText] = sections;
			}
			switch (params.type) {
				case 'semi':
					summary = window.wgULS('半保护', '半保護');
					break;
				case 'temp':
					summary = window.wgULS('模板保护', '模板保護');
					break;
				case 'ecp':
					summary = window.wgULS('延伸确认保护', '延伸確認保護');
					break;
				case 'full':
					summary = window.wgULS('全保护', '全保護');
					break;
				case 'revisionprotected':
					summary = window.wgULS('版本保护', '版本保護');
					break;
				case 'officialprotected':
					summary = window.wgULS('裁委会保护', '裁委會保護');
					break;
				case 'move':
					summary = window.wgULS('移动保护', '移動保護');
					break;
				case 'salt':
					summary = window.wgULS('白纸保护', '白紙保護');
					break;
				case 'unprotect':
					summary = window.wgULS('解除保护', '解除保護');
					break;
				default:
					statusElement.warn(window.wgULS('未知保护类型', '未知保護類別'));
					return;
			}
			if (Morebits.string.isInfinity(params.expiry)) {
				summary = expiryText + summary;
			} else {
				summary += expiryText;
			}
			rppPage.setEditSummary(`/* ${Morebits.pageNameNorm} */ ${summary}`);
			rppPage.setChangeTags(Twinkle.changeTags);
			rppPage.setPageText(text);
			rppPage.save();
		},
	};
	Twinkle.protect.formatProtectionDescription = (protectionLevels) => {
		const protectionNode = [];
		if (Object.keys(protectionLevels).length === 0) {
			protectionNode.push($(`<b>${window.wgULS('无保护', '無保護')}</b>`)[0]);
		} else {
			for (const [type, settings] of Object.entries(protectionLevels)) {
				let label;
				switch (type) {
					case 'edit':
						label = window.wgULS('编辑', '編輯');
						break;
					case 'move':
						label = window.wgULS('移动', '移動');
						break;
					case 'create':
						label = window.wgULS('创建', '建立');
						break;
					case 'upload':
						label = window.wgULS('上传', '上傳');
						break;
					default:
						label = type;
						break;
				}
				let level;
				switch (settings.level) {
					case 'officialprotected':
						level = window.wgULS('仅允许档案理事员', '僅允許檔案理事員');
						break;
					case 'autoconfirmed':
						level = window.wgULS('仅允许自动确认用户', '僅允許自動確認使用者');
						break;
					case 'templateeditor':
						level = window.wgULS('仅模板编辑员和管理员', '僅模板編輯員和管理員');
						break;
					case 'sysop':
						level = window.wgULS('仅管理员', '僅管理員');
						break;
					default:
						({level} = settings);
						break;
				}
				protectionNode.push($(`<b>${label}：${level}</b>`)[0]);
				if (Morebits.string.isInfinity(settings.expiry)) {
					protectionNode.push(window.wgULS('（无限期）', '（無限期）'));
				} else {
					protectionNode.push(
						`${window.wgULS('（过期：', '（過期：') + new Morebits.date(settings.expiry).calendar('utc')}）`
					);
				}
				if (settings.cascade) {
					protectionNode.push(window.wgULS('（连锁）', '（連鎖）'));
				}
			}
		}
		return protectionNode;
	};
	Twinkle.addInitCallback(Twinkle.protect, 'protect');
})(jQuery);
