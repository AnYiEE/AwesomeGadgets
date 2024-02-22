/* eslint-disable no-jquery/no-map-util */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {initMwApi} from 'ext.gadget.Util';

/*! Twinkle.js - twinkleblock.js */
(function twinkleblock($) {
	const $body = $('body');
	const api = initMwApi('morebits.js; Twinkle/1.1');
	let relevantUserName;
	let blockedUserName;
	const menuFormattedNamespaces = {
		...mw.config.get('wgFormattedNamespaces'),
	};
	menuFormattedNamespaces[0] = window.wgULS('（条目）', '（條目）');
	const blockActionText = {
		block: window.wgULS('封禁', '封鎖'),
		reblock: window.wgULS('重新封禁', '重新封鎖'),
		unblock: window.wgULS('解除封禁', '解除封鎖'),
	};
	/**
	 * twinkleblock.js: Block module
	 * Mode of invocation: Tab ("Block")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.)
	 */
	Twinkle.block = () => {
		relevantUserName = mw.config.get('wgRelevantUserName');
		// should show on Contributions or Block pages, anywhere there's a relevant user
		// Ignore ranges wider than the CIDR limit
		// Enable for non-admins
		if (
			(Morebits.userIsSysop || !mw.util.isIPAddress(relevantUserName, true)) &&
			relevantUserName &&
			(!Morebits.ip.isRange(relevantUserName) || Morebits.ip.validCIDR(relevantUserName))
		) {
			Twinkle.addPortletLink(
				Twinkle.block.callback,
				window.wgULS('封禁', '封鎖'),
				'tw-block',
				window.wgULS('封禁相关用户', '封鎖相關使用者')
			);
		}
	};
	Twinkle.block.callback = () => {
		if (
			relevantUserName === mw.config.get('wgUserName') &&
			!confirm(
				window.wgULS(
					'您即将对自己执行封禁相关操作！确认要继续吗？',
					'您即將對自己執行封鎖相關操作！確認要繼續嗎？'
				)
			)
		) {
			return;
		}
		Twinkle.block.currentBlockInfo = undefined;
		Twinkle.block.field_block_options = {};
		Twinkle.block.field_template_options = {};
		const Window = new Morebits.simpleWindow(650, 530);
		// need to be verbose about who we're blocking
		Window.setTitle(
			window.wgULS('封禁或向', '封鎖或向') + relevantUserName + window.wgULS('发出封禁模板', '發出封鎖模板')
		);
		Window.setScriptName('Twinkle');
		Window.addFooterLink(window.wgULS('封禁条例', '封鎖條例'), 'LIB:BLOCK');
		Window.addFooterLink(window.wgULS('封禁设置', '封鎖設定'), 'H:TW/PREF#block');
		Window.addFooterLink(window.wgULS('Twinkle帮助', 'Twinkle說明'), 'H:TW/DOC#block');
		const form = new Morebits.quickForm(Twinkle.block.callback.evaluate);
		const actionfield = form.append({
			type: 'field',
			label: window.wgULS('操作类型', '操作類別'),
		});
		actionfield.append({
			type: 'checkbox',
			name: 'actiontype',
			event: Twinkle.block.callback.change_action,
			list: [
				{
					label: window.wgULS('封禁用户', '封鎖使用者'),
					value: 'block',
					tooltip: window.wgULS(
						'用选择的选项全站封禁相关用户，若未勾选部分封禁则为全站封禁。',
						'用選擇的選項全站封鎖相關使用者，若未勾選部分封鎖則為全站封鎖。'
					),
					hidden: !Morebits.userIsSysop,
					checked: Morebits.userIsSysop,
				},
				{
					label: window.wgULS('部分封禁', '部分封鎖'),
					value: 'partial',
					tooltip: window.wgULS('启用部分封禁及部分封禁模板。', '啟用部分封鎖及部分封鎖模板。'),
					hidden: !Morebits.userIsSysop,
					checked: Twinkle.getPref('defaultToPartialBlocks'), // Overridden if already blocked
				},
				{
					label: window.wgULS('加入封禁模板到用户讨论页', '加入封鎖模板到使用者討論頁'),
					value: 'template',
					tooltip: window.wgULS(
						'若执行封禁的管理员忘记发出封禁模板，或你封禁了用户而没有给其发出模板，则你可以用此来发出合适的模板。勾选部分封禁以使用部分封禁模板。',
						'若執行封鎖的管理員忘記發出封鎖模板，或你封鎖了使用者而沒有給其發出模板，則你可以用此來發出合適的模板。勾選部分封鎖以使用部分封鎖模板。'
					),
					// Disallow when viewing the block dialog on an IP range
					hidden: !Morebits.userIsSysop,
					checked: Morebits.userIsSysop && !Morebits.ip.isRange(relevantUserName),
					disabled: Morebits.ip.isRange(relevantUserName),
				},
				{
					label: window.wgULS('标记用户页', '標記使用者頁面'),
					value: 'tag',
					tooltip: window.wgULS(
						'将用户页替换成相关的标记模板，仅限永久封禁使用。',
						'將使用者頁面替換成相關的標記模板，僅限永久封鎖使用。'
					),
					hidden: true,
					checked: !Morebits.userIsSysop,
				},
				{
					label: window.wgULS('保护用户页', '保護使用者頁面'),
					value: 'protect',
					tooltip: window.wgULS('全保护用户页，仅限永久封禁使用。', '全保護使用者頁面，僅限永久封鎖使用。'),
					hidden: true,
				},
				{
					label: window.wgULS('解除封禁用户', '解除封鎖使用者'),
					value: 'unblock',
					tooltip: window.wgULS('解除封禁相关用户。', '解除封鎖相關使用者。'),
					hidden: !Morebits.userIsSysop,
				},
			],
		});
		/**
		 * Add option for IPv6 ranges smaller than /64 to upgrade to the 64
		 * CIDR. This is one of the few places where we want
		 * wgRelevantUserName since this depends entirely on the original user.
		 * In theory, we shouldn't use Morebits.ip.get64 here since since we want
		 * to exclude functionally-equivalent /64s.  That'd be:
		 * // if (mw.util.isIPv6Address(mw.config.get('wgRelevantUserName'), true) &&
		 * // (mw.util.isIPv6Address(mw.config.get('wgRelevantUserName')) || parseInt(mw.config.get('wgRelevantUserName').replace(/^(.+?)\/?(\d{1,3})?$/, '$2'), 10) > 64)) {
		 * In practice, though, since functionally-equivalent ranges are
		 * (mis)treated as separate by MediaWiki's logging,
		 * using Morebits.ip.get64 provides a modicum of relief in thise case.
		 */
		const sixtyFour = Morebits.ip.get64(mw.config.get('wgRelevantUserName'));
		if (sixtyFour && sixtyFour !== mw.config.get('wgRelevantUserName')) {
			const block64field = form.append({
				type: 'field',
				label: window.wgULS('转换为/64段封禁', '轉換為/64段封鎖'),
				name: 'field_64',
			});
			block64field.append({
				type: 'div',
				style: 'margin-bottom: 0.5em',
				label: [wgULS('直接封禁/64段有益无害。', '直接封鎖/64段有益無害。')],
			});
			block64field.append({
				type: 'checkbox',
				name: 'block64',
				event: Twinkle.block.callback.change_block64,
				list: [
					{
						checked: Twinkle.getPref('defaultToBlock64'),
						label: window.wgULS('改成封禁/64', '改成封鎖/64'),
						value: 'block64',
						tooltip: Morebits.ip.isRange(mw.config.get('wgRelevantUserName'))
							? window.wgULS('将不会发送模板通知。', '將不會發送模板通知。')
							: window.wgULS('任何模板将会发送给原始IP：', '任何模板將會發送給原始IP：') +
								mw.config.get('wgRelevantUserName'),
					},
				],
			});
		}
		form.append({
			type: 'field',
			label: window.wgULS('默认', '預設'),
			name: 'field_preset',
		});
		form.append({
			type: 'field',
			label: window.wgULS('模板选项', '模板選項'),
			name: 'field_template_options',
		});
		form.append({
			type: 'field',
			label: window.wgULS('封禁选项', '封鎖選項'),
			name: 'field_block_options',
		});
		form.append({
			type: 'field',
			label: window.wgULS('标记用户页', '標記使用者頁面'),
			name: 'field_tag_options',
		});
		form.append({
			type: 'field',
			label: window.wgULS('解除封禁选项', '解除封鎖選項'),
			name: 'field_unblock_options',
		});
		form.append({
			type: 'submit',
			label: '提交',
		});
		const result = form.render();
		Window.setContent(result);
		Window.display();
		result.root = result;
		Twinkle.block.fetchUserInfo(() => {
			if (Twinkle.block.isRegistered) {
				const $form = $(result);
				Morebits.quickForm.setElementVisibility($form.find('[name=actiontype][value=tag]').parent(), true);
				if (Morebits.userIsSysop) {
					Morebits.quickForm.setElementVisibility(
						$form.find('[name=actiontype][value=protect]').parent(),
						true
					);
				}
			}
			// Toggle initial partial state depending on prior block type,
			// will override the defaultToPartialBlocks pref
			if (blockedUserName === relevantUserName) {
				$(result)
					.find('[name=actiontype][value=partial]')
					.prop('checked', Twinkle.block.currentBlockInfo.partial === '');
			}
			// clean up preset data (defaults, etc.), done exactly once, must be before Twinkle.block.callback.change_action is called
			Twinkle.block.transformBlockPresets();
			// init the controls after user and block info have been fetched
			const evt = document.createEvent('Event');
			evt.initEvent('change', true, true);
			if (result.block64 && result.block64.checked) {
				// Calls the same change_action event once finished
				result.block64.dispatchEvent(evt);
			} else {
				result.actiontype[0].dispatchEvent(evt);
			}
		});
	};
	// Store fetched user data, only relevant if switching IPv6 to a /64
	Twinkle.block.fetchedData = {};
	// Processes the data from a a query response, separated from
	// Twinkle.block.fetchUserInfo to allow reprocessing of already-fetched data
	Twinkle.block.processUserInfo = (data, fn) => {
		let [blockinfo] = data.query.blocks;
		const [userinfo] = data.query.users;
		// If an IP is blocked *and* rangeblocked, the above finds
		// whichever block is more recent, not necessarily correct.
		// Three seems... unlikely
		if (data.query.blocks.length > 1 && blockinfo.user !== relevantUserName) {
			[, blockinfo] = data.query.blocks;
		}
		// Cache response, used when toggling /64 blocks
		Twinkle.block.fetchedData[userinfo.name] = data;
		Twinkle.block.isRegistered = !!userinfo.userid;
		if (Twinkle.block.isRegistered) {
			Twinkle.block.userIsBot =
				!!userinfo.groupmemberships &&
				userinfo.groupmemberships
					.map((e) => {
						return e.group;
					})
					.includes('bot');
		} else {
			Twinkle.block.userIsBot = false;
		}
		if (blockinfo) {
			// handle frustrating system of inverted boolean values
			blockinfo.disabletalk = blockinfo.allowusertalk === undefined;
			blockinfo.hardblock = blockinfo.anononly === undefined;
		}
		// will undefine if no blocks present
		Twinkle.block.currentBlockInfo = blockinfo;
		blockedUserName = Twinkle.block.currentBlockInfo && Twinkle.block.currentBlockInfo.user;
		// Semi-busted on ranges.
		// Basically, logevents doesn't treat functionally-equivalent ranges
		// as equivalent, meaning any functionally-equivalent IP range is
		// misinterpreted by the log throughout.  Without logevents
		// redirecting (like Special:Block does) we would need a function to
		// parse ranges, which is a pain.  IPUtils has the code, but it'd be a
		// lot of cruft for one purpose.
		Twinkle.block.hasBlockLog = !!data.query.logevents.length;
		Twinkle.block.blockLog = Twinkle.block.hasBlockLog && data.query.logevents;
		// Used later to check if block status changed while filling out the form
		Twinkle.block.blockLogId = Twinkle.block.hasBlockLog ? data.query.logevents[0].logid : false;
		if (typeof fn === 'function') {
			return fn();
		}
	};
	Twinkle.block.fetchUserInfo = (fn) => {
		const query = {
			format: 'json',
			action: 'query',
			list: 'blocks|users|logevents',
			letype: 'block',
			lelimit: 2,
			letitle: `User:${relevantUserName}`,
			bkprop: 'expiry|reason|flags|restrictions|range|user',
			ususers: relevantUserName,
		};
		// bkusers doesn't catch single IPs blocked as part of a range block
		if (mw.util.isIPAddress(relevantUserName, true)) {
			query.bkip = relevantUserName;
		} else {
			query.bkusers = relevantUserName;
			// groupmemberships only relevant for registered users
			query.usprop = 'groupmemberships';
		}
		api.get(query).then(
			(data) => {
				Twinkle.block.processUserInfo(data, fn);
			},
			(error) => {
				Morebits.status.init($body.find('div[name="currentblock"] span').last()[0]);
				Morebits.status.warn(window.wgULS('抓取用户信息出错', '抓取使用者資訊出錯'), error);
			}
		);
	};
	Twinkle.block.callback.saveFieldset = (fieldset) => {
		Twinkle.block[$(fieldset).prop('name')] = {};
		for (const el of $(fieldset).serializeArray()) {
			// namespaces and pages for partial blocks are overwritten
			// here, but we're handling them elsewhere so that's fine
			Twinkle.block[$(fieldset).prop('name')][el.name] = el.value;
		}
	};
	Twinkle.block.callback.change_block64 = (e) => {
		const $form = $(e.target.form);
		const $block64 = $form.find('[name=block64]');
		// Show/hide block64 button
		// Single IPv6, or IPv6 range smaller than a /64
		const priorName = relevantUserName;
		if ($block64.is(':checked')) {
			relevantUserName = Morebits.ip.get64(mw.config.get('wgRelevantUserName'));
		} else {
			relevantUserName = mw.config.get('wgRelevantUserName');
		}
		// No templates for ranges, but if the original user is a single IP, offer the option
		// (done separately in Twinkle.block.callback.issue_template)
		const originalIsRange = Morebits.ip.isRange(mw.config.get('wgRelevantUserName'));
		$form
			.find('[name=actiontype][value=template]')
			.prop('disabled', originalIsRange)
			.prop('checked', !originalIsRange);
		// Refetch/reprocess user info then regenerate the main content
		const regenerateForm = () => {
			// Tweak titlebar text.  In theory, we could save the dialog
			// at initialization and then use `.setTitle` or
			// `dialog('option', 'title')`, but in practice that swallows
			// the scriptName and requires `.display`ing, which jumps the
			// window.  It's just a line of text, so this is fine.
			const titleBar = document.querySelector('.ui-dialog-title').firstChild.nextSibling;
			titleBar.nodeValue = titleBar.nodeValue.replace(priorName, relevantUserName);
			// Correct partial state
			$form.find('[name=actiontype][value=partial]').prop('checked', Twinkle.getPref('defaultToPartialBlocks'));
			if (blockedUserName === relevantUserName) {
				$form
					.find('[name=actiontype][value=partial]')
					.prop('checked', Twinkle.block.currentBlockInfo.partial === '');
			}
			// Set content appropriately
			Twinkle.block.callback.change_action(e);
		};
		if (Twinkle.block.fetchedData[relevantUserName]) {
			Twinkle.block.processUserInfo(Twinkle.block.fetchedData[relevantUserName], regenerateForm);
		} else {
			Twinkle.block.fetchUserInfo(regenerateForm);
		}
	};
	Twinkle.block.callback.change_action = (e) => {
		let field_preset;
		let field_template_options;
		let field_block_options;
		let field_tag_options;
		let field_unblock_options;
		const $form = $(e.target.form);
		// Make ifs shorter
		const $block = $form.find('[name=actiontype][value=block]');
		let blockBox = $block.is(':checked');
		const $template = $form.find('[name=actiontype][value=template]');
		let templateBox = $template.is(':checked');
		const $tag = $form.find('[name=actiontype][value=tag]');
		const tagBox = $tag.is(':checked');
		const $protect = $form.find('[name=actiontype][value=protect]');
		const $partial = $form.find('[name=actiontype][value=partial]');
		const partialBox = $partial.is(':checked');
		const $unblock = $form.find('[name=actiontype][value=unblock]');
		const unblockBox = $unblock.is(':checked');
		let blockGroup = partialBox ? Twinkle.block.blockGroupsPartial : Twinkle.block.blockGroups;
		if (e.target.value === 'unblock') {
			if (!Twinkle.block.currentBlockInfo) {
				$unblock.prop('checked', false);
				mw.notify(window.wgULS('用户没有被封禁', '使用者沒有被封鎖'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
			$block.prop('checked', false);
			blockBox = false;
			$template.prop('checked', false);
			templateBox = false;
			$tag.prop('checked', false);
			$protect.prop('checked', false);
			$partial.prop('checked', false);
		} else {
			$unblock.prop('checked', false);
		}
		$partial.prop('disabled', !blockBox && !templateBox);
		// Add current block parameters as default preset
		const prior = {
			label: window.wgULS('当前封禁', '目前封鎖'),
		};
		if (blockedUserName === relevantUserName) {
			Twinkle.block.blockPresetsInfo.prior = Twinkle.block.currentBlockInfo;
			// value not a valid template selection, chosen below by setting templateName
			prior.list = [
				{
					label: window.wgULS('当前封禁设置', '目前封鎖設定'),
					value: 'prior',
					selected: true,
				},
			];
			// Arrays of objects are annoying to check
			if (
				!blockGroup.some((bg) => {
					return bg.label === prior.label;
				})
			) {
				blockGroup.push(prior);
			}
			// Always ensure proper template exists/is selected when switching modes
			if (partialBox) {
				Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(
					Twinkle.block.currentBlockInfo.expiry
				)
					? 'uw-pblockindef'
					: 'uw-pblock';
			} else if (Twinkle.block.isRegistered) {
				Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(
					Twinkle.block.currentBlockInfo.expiry
				)
					? 'uw-blockindef'
					: 'uw-block';
			} else {
				Twinkle.block.blockPresetsInfo.prior.templateName = 'uw-ablock';
			}
		} else {
			// But first remove any prior prior
			blockGroup = blockGroup.filter((bg) => {
				return bg.label !== prior.label;
			});
		}
		Twinkle.block.callback.saveFieldset($body.find('[name=field_block_options]'));
		Twinkle.block.callback.saveFieldset($body.find('[name=field_template_options]'));
		Twinkle.block.callback.saveFieldset($body.find('[name=field_tag_options]'));
		Twinkle.block.callback.saveFieldset($body.find('[name=field_unblock_options]'));
		if (blockBox) {
			field_preset = new Morebits.quickForm.element({
				type: 'field',
				label: window.wgULS('默认', '預設'),
				name: 'field_preset',
			});
			field_preset.append({
				type: 'select',
				name: 'preset',
				label: window.wgULS('选择默认：', '選擇預設：'),
				event: Twinkle.block.callback.change_preset,
				list: Twinkle.block.callback.filtered_block_groups(blockGroup),
			});
			field_block_options = new Morebits.quickForm.element({
				type: 'field',
				label: window.wgULS('封禁选项', '封鎖選項'),
				name: 'field_block_options',
			});
			field_block_options.append({
				type: 'div',
				name: 'currentblock',
				label: ' ',
			});
			field_block_options.append({
				type: 'div',
				name: 'hasblocklog',
				label: ' ',
			});
			field_block_options.append({
				type: 'select',
				name: 'expiry_preset',
				label: window.wgULS('过期时间：', '過期時間：'),
				event: Twinkle.block.callback.change_expiry,
				list: [
					{
						label: window.wgULS('自定义', '自訂'),
						value: 'custom',
						selected: true,
					},
					{
						label: window.wgULS('无限期', '無限期'),
						value: 'infinity',
					},
					{
						label: window.wgULS('3小时', '3小時'),
						value: '3 hours',
					},
					{
						label: window.wgULS('12小时', '12小時'),
						value: '12 hours',
					},
					{
						label: '1天',
						value: '1 day',
					},
					{
						label: window.wgULS('31小时', '31小時'),
						value: '31 hours',
					},
					{
						label: '2天',
						value: '2 days',
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
						label: '2年',
						value: '2 years',
					},
					{
						label: '3年',
						value: '3 years',
					},
				],
			});
			field_block_options.append({
				type: 'input',
				name: 'expiry',
				label: window.wgULS('自定义过期时间', '自訂過期時間'),
				tooltip: window.wgULS(
					'您可以使用相对时间，如“1 minute”或“19 days”；或绝对时间，“yyyymmddhhmm”（如“200602011405”是2006年2月1日14:05 UTC。）',
					'您可以使用相對時間，如「1 minute」或「19 days」；或絕對時間，「yyyymmddhhmm」（如「200602011405」是2006年2月1日14:05 UTC。）'
				),
				value: Twinkle.block.field_block_options.expiry || Twinkle.block.field_template_options.template_expiry,
			});
			if (partialBox) {
				// Partial block
				field_block_options.append({
					type: 'select',
					multiple: true,
					name: 'pagerestrictions',
					label: window.wgULS('页面封禁', '頁面封鎖'),
					value: '',
					tooltip: window.wgULS('最多10个页面。', '最多10個頁面。'),
				});
				const ns = field_block_options.append({
					type: 'select',
					multiple: true,
					name: 'namespacerestrictions',
					label: window.wgULS('命名空间封禁', '命名空間封鎖'),
					value: '',
					tooltip: window.wgULS('指定封禁的命名空间。', '指定封鎖的命名空間。'),
				});
				for (const [number, name] of Object.entries(menuFormattedNamespaces)) {
					// Ignore -1: Special; -2: Media; and 2300-2303: Gadget (talk) and Gadget definition (talk)
					if (number >= 0 && number < 830) {
						ns.append({
							type: 'option',
							label: name,
							value: number,
						});
					}
				}
			}
			const blockoptions = [
				{
					checked: Twinkle.block.field_block_options.nocreate,
					label: window.wgULS('禁止创建账号', '禁止建立賬號'),
					name: 'nocreate',
					value: '1',
				},
				{
					checked: Twinkle.block.field_block_options.noemail,
					label: window.wgULS('电子邮件停用', '電子郵件停用'),
					name: 'noemail',
					value: '1',
				},
				{
					checked: Twinkle.block.field_block_options.disabletalk,
					label: window.wgULS('不能编辑自己的讨论页', '不能編輯自己的討論頁'),
					name: 'disabletalk',
					value: '1',
					tooltip: partialBox
						? window.wgULS(
								'若使用部分封禁，不应选择此项，除非您也想要禁止编辑用户讨论页。',
								'若使用部分封鎖，不應選擇此項，除非您也想要禁止編輯使用者討論頁。'
							)
						: '',
				},
			];
			if (Twinkle.block.isRegistered) {
				blockoptions.push({
					checked: Twinkle.block.field_block_options.autoblock,
					label: window.wgULS('自动封禁', '自動封鎖'),
					name: 'autoblock',
					value: '1',
				});
			} else {
				blockoptions.push({
					checked: Twinkle.block.field_block_options.hardblock,
					label: window.wgULS('阻止登录用户使用该IP地址编辑', '阻止登入使用者使用該IP位址編輯'),
					name: 'hardblock',
					value: '1',
				});
			}
			blockoptions.push(
				{
					checked: Twinkle.block.field_block_options.watchuser,
					label: window.wgULS('监视该用户的用户页和讨论页', '監視該使用者的使用者頁面和討論頁'),
					name: 'watchuser',
					value: '1',
				},
				{
					checked: true,
					label: window.wgULS('标记当前的破坏中的请求', '標記當前的破壞中的請求'),
					name: 'closevip',
					value: '1',
				}
			);
			field_block_options.append({
				type: 'checkbox',
				name: 'blockoptions',
				list: blockoptions,
			});
			field_block_options.append({
				type: 'textarea',
				label: window.wgULS('理由（用于封禁日志）：', '理由（用於封鎖日誌）：'),
				name: 'reason',
				tooltip: window.wgULS(
					'请考虑在默认的消息中加入有用的详细信息。',
					'請考慮在預設的訊息中加入有用的詳細資訊。'
				),
				value: Twinkle.block.field_block_options.reason,
			});
			field_block_options.append({
				type: 'div',
				name: 'filerlog_label',
				label: window.wgULS('参见：', '參見：'),
				style: 'display:inline-block;font-style:normal !important',
				tooltip: window.wgULS(
					'在封禁理由中标清特殊情况以供其他管理员参考',
					'在封鎖理由中標清特殊情況以供其他管理員參考'
				),
			});
			field_block_options.append({
				type: 'checkbox',
				name: 'filter_see_also',
				event: Twinkle.block.callback.toggle_see_alsos,
				style: 'display:inline-block; margin-right:5px',
				list: [
					{
						label: window.wgULS('过滤器日志', '過濾器日誌'),
						checked: false,
						value: window.wgULS('过滤器日志', '過濾器日誌'),
					},
				],
			});
			field_block_options.append({
				type: 'checkbox',
				name: 'deleted_see_also',
				event: Twinkle.block.callback.toggle_see_alsos,
				style: 'display:inline-block; margin-right:5px',
				list: [
					{
						label: window.wgULS('已删除的编辑', '已刪除的編輯'),
						checked: false,
						value: window.wgULS('已删除的编辑', '已刪除的編輯'),
					},
				],
			});
			field_block_options.append({
				type: 'checkbox',
				name: 'filter_see_also',
				event: Twinkle.block.callback.toggle_see_alsos,
				style: 'display:inline-block; margin-right:5px',
				list: [
					{
						label: window.wgULS('用户讨论页', '使用者討論頁'),
						checked: false,
						value: window.wgULS('用户讨论页', '使用者討論頁'),
					},
				],
			});
			field_block_options.append({
				type: 'checkbox',
				name: 'filter_see_also',
				event: Twinkle.block.callback.toggle_see_alsos,
				style: 'display:inline-block; margin-right:5px',
				list: [
					{
						label: window.wgULS('过去的封禁记录', '過去的封鎖記錄'),
						checked: false,
						value: window.wgULS('过去的封禁记录', '過去的封鎖記錄'),
					},
				],
			});
			// Yet-another-logevents-doesn't-handle-ranges-well
			if (blockedUserName === relevantUserName) {
				field_block_options.append({
					type: 'hidden',
					name: 'reblock',
					value: '1',
				});
			}
		}
		if (templateBox) {
			field_template_options = new Morebits.quickForm.element({
				type: 'field',
				label: window.wgULS('模板选项', '模板選項'),
				name: 'field_template_options',
			});
			field_template_options.append({
				type: 'select',
				name: 'template',
				label: window.wgULS('选择讨论页模板：', '選擇討論頁模板：'),
				event: Twinkle.block.callback.change_template,
				list: Twinkle.block.callback.filtered_block_groups(blockGroup, true),
				value: Twinkle.block.field_template_options.template,
			});
			field_template_options.append({
				type: 'input',
				name: 'article',
				label: window.wgULS('链接页面', '連結頁面'),
				value: '',
				tooltip: window.wgULS(
					'可以随通知链接页面，例如破坏的目标。没有条目需要链接则请留空。',
					'可以隨通知連結頁面，例如破壞的目標。沒有條目需要連結則請留空。'
				),
			});
			// Only visible if partial and not blocking
			field_template_options.append({
				type: 'input',
				name: 'area',
				label: window.wgULS('封禁范围', '封鎖範圍'),
				value: '',
				tooltip: window.wgULS(
					'阻止用户编辑的页面或命名空间的可选说明。',
					'阻止使用者編輯的頁面或命名空間的可選說明。'
				),
			});
			if (!blockBox) {
				field_template_options.append({
					type: 'input',
					name: 'template_expiry',
					label: '封禁期限：',
					value: '',
					tooltip: window.wgULS('封禁时长，如24小时、2周、无限期等。', '封鎖時長，如24小時、2週、無限期等。'),
				});
			}
			field_template_options.append({
				type: 'input',
				name: 'block_reason',
				label: window.wgULS('“由于……您已被封禁”', '「由於……您已被封鎖」'),
				tooltip: window.wgULS(
					'可选的理由，用于替换默认理由。只在常规封禁模板中有效。',
					'可選的理由，用於替換預設理由。只在常規封鎖模板中有效。'
				),
				value: Twinkle.block.field_template_options.block_reason,
				size: 60,
			});
			if (blockBox) {
				field_template_options.append({
					type: 'checkbox',
					name: 'blank_duration',
					list: [
						{
							label: window.wgULS('不在模板中包含封禁期限', '不在模板中包含封鎖期限'),
							checked: Twinkle.block.field_template_options.blank_duration,
							tooltip: window.wgULS(
								'模板将会显示“一段时间”而不是具体时长',
								'模板將會顯示「一段時間」而不是具體時長'
							),
						},
					],
				});
			} else {
				field_template_options.append({
					type: 'checkbox',
					list: [
						{
							label: window.wgULS('不能编辑自己的讨论页', '不能編輯自己的討論頁'),
							name: 'notalk',
							checked: Twinkle.block.field_template_options.notalk,
							tooltip: window.wgULS(
								'用此在封禁模板中指明该用户编辑讨论页的权限已被移除',
								'用此在封鎖模板中指明該使用者編輯討論頁的權限已被移除'
							),
						},
						{
							label: window.wgULS('不能发送电子邮件', '不能傳送電子郵件'),
							name: 'noemail_template',
							checked: Twinkle.block.field_template_options.noemail_template,
							tooltip: window.wgULS(
								'用此在封禁模板中指明该用户发送电子邮件的权限已被移除',
								'用此在封鎖模板中指明該使用者傳送電子郵件的權限已被移除'
							),
						},
						{
							label: window.wgULS('不能创建账号', '不能建立賬號'),
							name: 'nocreate_template',
							checked: Twinkle.block.field_template_options.nocreate_template,
							tooltip: window.wgULS(
								'用此在封禁模板中指明该用户创建账号的权限已被移除',
								'用此在封鎖模板中指明該使用者建立賬號的權限已被移除'
							),
						},
					],
				});
			}
			const $previewlink = $(`<a id="twinkleblock-preview-link">${window.wgULS('预览', '預覽')}</a>`);
			$previewlink.off('click').on('click', () => {
				Twinkle.block.callback.preview($form[0]);
			});
			$previewlink.css({
				cursor: 'pointer',
			});
			field_template_options.append({
				type: 'div',
				id: 'blockpreview',
				label: [$previewlink[0]],
			});
			field_template_options.append({
				type: 'div',
				id: 'twinkleblock-previewbox',
				style: 'display: none',
			});
		}
		if (tagBox) {
			field_tag_options = new Morebits.quickForm.element({
				type: 'field',
				label: window.wgULS('标记用户页', '標記使用者頁面'),
				name: 'field_tag_options',
			});
			field_tag_options.append({
				type: 'checkbox',
				name: 'tag',
				label: window.wgULS('选择用户页模板：', '選擇使用者頁面模板：'),
				list: [
					{
						label: `{{Blocked user}}：${window.wgULS('一般永久封禁', '一般永久封鎖')}`,
						value: 'Blocked user',
					},
					{
						label: `{{Sockpuppet}}：${window.wgULS('傀儡账号', '傀儡賬號')}`,
						value: 'Sockpuppet',
						subgroup: [
							{
								name: 'sppUsername',
								type: 'input',
								label: window.wgULS('主账号用户名：', '主賬號使用者名稱：'),
							},
							{
								name: 'sppType',
								type: 'select',
								label: window.wgULS('状态：', '狀態：'),
								list: [
									{
										type: 'option',
										value: 'blocked',
										label: `blocked - ${window.wgULS('仅依行为证据认定', '僅依行為證據認定')}`,
										selected: true,
									},
									{
										type: 'option',
										value: 'proven',
										label: `proven - ${window.wgULS('经傀儡调查确认', '經傀儡調查確認')}`,
									},
									{
										type: 'option',
										value: 'confirmed',
										label: `confirmed - ${window.wgULS('经查核确认', '經查核確認')}`,
									},
								],
							},
							{
								name: 'sppEvidence',
								type: 'input',
								label: window.wgULS('根据……确定：', '根據……確定：'),
								tooltip: window.wgULS(
									'纯文字或是带[[]]的链接，例如：[[Special:固定链接/xxxxxxxx|用户查核]]',
									'純文字或是帶[[]]的連結，例如：[[Special:固定链接/xxxxxxxx|用戶查核]]'
								),
							},
						],
					},
					{
						label: `{{Sockpuppeteer|blocked}}：${window.wgULS('傀儡主账号', '傀儡主賬號')}`,
						value: 'Sockpuppeteer',
						subgroup: [
							{
								type: 'checkbox',
								list: [
									{
										name: 'spmChecked',
										value: 'spmChecked',
										label: window.wgULS('经用户查核确认', '經使用者查核確認'),
									},
								],
							},
							{
								name: 'spmEvidence',
								type: 'input',
								label: window.wgULS('额外理由：', '額外理由：'),
							},
						],
					},
				],
			});
		}
		if (unblockBox) {
			field_unblock_options = new Morebits.quickForm.element({
				type: 'field',
				label: window.wgULS('解除封禁选项', '解除封鎖選項'),
				name: 'field_unblock_options',
			});
			field_unblock_options.append({
				type: 'textarea',
				label: window.wgULS('理由（用于封禁日志）：', '理由（用於封鎖日誌）：'),
				name: 'reason',
				value: Twinkle.block.field_unblock_options.reason,
			});
		}
		let oldfield;
		if (field_preset) {
			[oldfield] = $form.find('fieldset[name="field_preset"]');
			oldfield.parentNode.replaceChild(field_preset.render(), oldfield);
		} else {
			$form.find('fieldset[name="field_preset"]').hide();
		}
		if (field_block_options) {
			[oldfield] = $form.find('fieldset[name="field_block_options"]');
			oldfield.parentNode.replaceChild(field_block_options.render(), oldfield);
			$form.find('fieldset[name="field_64"]').show();
			$form.find('[name=pagerestrictions]').select2({
				width: '100%',
				placeholder: window.wgULS('输入要阻止用户编辑的页面', '輸入要阻止使用者編輯的頁面'),
				language: {
					errorLoading: () => {
						return window.wgULS('搜索词汇不完整或无效', '搜尋詞彙不完整或無效');
					},
				},
				maximumSelectionLength: 10,
				minimumInputLength: 1,
				ajax: {
					url: mw.util.wikiScript('api'),
					dataType: 'json',
					delay: 100,
					data: (params) => {
						const title = mw.Title.newFromText(params.term);
						if (!title) {
							return;
						}
						return {
							action: 'query',
							format: 'json',
							list: 'allpages',
							apfrom: title.title,
							apnamespace: title.namespace,
							aplimit: '10',
						};
					},
					processResults: (data) => {
						return {
							results: data.query.allpages.map((page) => {
								const title = mw.Title.newFromText(page.title, page.ns).toText();
								return {
									id: title,
									text: title,
								};
							}),
						};
					},
				},
				templateSelection: (choice) => {
					return $('<a>')
						.text(choice.text)
						.attr({
							href: mw.util.getUrl(choice.text),
							target: '_blank',
							rel: 'noopener noreferrer',
						});
				},
			});
			$form.find('[name=namespacerestrictions]').select2({
				width: '100%',
				matcher: Morebits.select2.matchers.wordBeginning,
				language: {
					searching: Morebits.select2.queryInterceptor,
				},
				templateResult: Morebits.select2.highlightSearchMatches,
				placeholder: window.wgULS('选择要禁止用户编辑的命名空间', '選擇要禁止使用者編輯的命名空間'),
			});
			mw.util.addCSS(
				/* Reduce padding;
				 * Adjust font size;
				 * Remove black border;
				 * Make the tiny cross larger
				 */
				'.select2-results .select2-results__option{padding-top:1px;padding-bottom:1px}.select2-container .select2-dropdown .select2-results,.select2-container .selection .select2-selection__rendered{font-size:13px}.select2-container--default.select2-container--focus .select2-selection--multiple{border:1px solid #aaa}.select2-selection__choice__remove{font-size:125%}'
			);
		} else {
			$form.find('fieldset[name="field_block_options"]').hide();
			$form.find('fieldset[name="field_64"]').hide();
			// Clear select2 options
			$form.find('[name=pagerestrictions]').val(null).trigger('change');
			$form.find('[name=namespacerestrictions]').val(null).trigger('change');
		}
		if (field_template_options) {
			[oldfield] = $form.find('fieldset[name="field_template_options"]');
			oldfield.parentNode.replaceChild(field_template_options.render(), oldfield);
			e.target.form.root.previewer = new Morebits.wiki.preview(
				$(e.target.form.root).find('#twinkleblock-previewbox').last()[0]
			);
		} else {
			$form.find('fieldset[name="field_template_options"]').hide();
		}
		if (field_tag_options) {
			[oldfield] = $form.find('fieldset[name="field_tag_options"]');
			oldfield.parentNode.replaceChild(field_tag_options.render(), oldfield);
		} else {
			$form.find('fieldset[name="field_tag_options"]').hide();
		}
		if (field_unblock_options) {
			[oldfield] = $form.find('fieldset[name="field_unblock_options"]');
			oldfield.parentNode.replaceChild(field_unblock_options.render(), oldfield);
		} else {
			$form.find('fieldset[name="field_unblock_options"]').hide();
		}
		// Any block, including ranges
		if (Twinkle.block.currentBlockInfo) {
			// false for an ip covered by a range or a smaller range within a larger range;
			// true for a user, single ip block, or the exact range for a range block
			const sameUser = blockedUserName === relevantUserName;
			Morebits.status.init($body.find('div[name="currentblock"] span').last()[0]);
			let statusStr = `${relevantUserName}已被${
				Twinkle.block.currentBlockInfo.partial === ''
					? window.wgULS('部分封禁', '部分封鎖')
					: window.wgULS('全站封禁', '全站封鎖')
			}`;
			// Range blocked
			if (Twinkle.block.currentBlockInfo.rangestart !== Twinkle.block.currentBlockInfo.rangeend) {
				if (sameUser) {
					statusStr += window.wgULS('（段封禁）', '（段封鎖）');
				} else {
					// Change order
					// Link to the full range
					const $rangeblockloglink = $('<span>').append(
						$(
							`<a rel="noopener" target="_blank" href="${mw.util.getUrl('Special:Log', {
								action: 'view',
								page: blockedUserName,
								type: 'block',
							})}">${
								Morebits.ip.get64(relevantUserName) === blockedUserName ? '/64' : blockedUserName
							}</a>)`
						)
					);
					statusStr +=
						window.wgULS('（位于', '（位於') +
						$rangeblockloglink.html() +
						window.wgULS('段封禁内）', '段封鎖內）');
				}
			}
			if (Twinkle.block.currentBlockInfo.expiry === 'infinity') {
				statusStr += window.wgULS('（无限期）', '（無限期）');
			} else if (new Morebits.date(Twinkle.block.currentBlockInfo.expiry).isValid()) {
				statusStr += `${
					window.wgULS('（终止于', '（終止於') +
					new Morebits.date(Twinkle.block.currentBlockInfo.expiry).calendar('utc')
				}）`;
			}
			let infoStr = window.wgULS('此表单将', '此表單將');
			if (sameUser) {
				infoStr += window.wgULS('更改封禁', '變更封鎖');
				if (Twinkle.block.currentBlockInfo.partial === undefined && partialBox) {
					infoStr += window.wgULS('为部分封禁', '為部分封鎖');
				} else if (Twinkle.block.currentBlockInfo.partial === '' && !partialBox) {
					infoStr += window.wgULS('为全站封禁', '為全站封鎖');
				}
				infoStr += '。';
			} else {
				infoStr +=
					window.wgULS('加上额外的', '加上額外的') +
					(partialBox ? '部分' : '') +
					window.wgULS('封禁。', '封鎖。');
			}
			Morebits.status.warn(statusStr, infoStr);
			// Default to the current block conditions on intial form generation
			Twinkle.block.callback.update_form(e, Twinkle.block.currentBlockInfo);
		}
		// This is where T146628 really comes into play: a rangeblock will
		// only return the correct block log if wgRelevantUserName is the
		// exact range, not merely a funtional equivalent
		if (Twinkle.block.hasBlockLog) {
			// Add more details
			const blockloginfo = [];
			const $blockloglink = $('<span>').append(
				$(
					`<a rel="noopener" target="_blank" href="${mw.util.getUrl('Special:Log', {
						action: 'view',
						page: relevantUserName,
						type: 'block',
					})}">${window.wgULS('封禁日志', '封鎖日誌')}</a>)`
				)
			);
			if (Twinkle.block.currentBlockInfo) {
				blockloginfo.push(window.wgULS('封禁详情', '封鎖詳情'));
			} else {
				const [lastBlockAction] = Twinkle.block.blockLog;
				const blockAction = lastBlockAction.action === 'unblock' ? Twinkle.block.blockLog[1] : lastBlockAction;
				blockloginfo.push(
					`此${
						Morebits.ip.isRange(relevantUserName)
							? window.wgULS('IP范围', 'IP範圍')
							: window.wgULS('用户', '使用者')
					}曾在`,
					$(`<b>${new Morebits.date(blockAction.timestamp).calendar('utc')}</b>`)[0],
					`被${blockAction.user}${window.wgULS('封禁', '封鎖')}`,
					$(`<b>${Morebits.string.formatTime(blockAction.params.duration)}</b>`)[0]
				);
				if (lastBlockAction.action === 'unblock') {
					blockloginfo.push(`，${new Morebits.date(lastBlockAction.timestamp).calendar('utc')}解封`);
				} else {
					// block or reblock
					blockloginfo.push(
						`，${new Morebits.date(blockAction.params.expiry).calendar('utc')}${window.wgULS('过期', '過期')}`
					);
				}
			}
			Morebits.status.init($body.find('div[name="hasblocklog"] span').last()[0]);
			Morebits.status.warn(blockloginfo, $blockloglink[0]);
		}
		// Make sure all the fields are correct based on initial defaults
		if (blockBox) {
			Twinkle.block.callback.change_preset(e);
		} else if (templateBox) {
			Twinkle.block.callback.change_template(e);
		}
	};
	/**
	 * Keep alphabetized by key name, Twinkle.block.blockGroups establishes
	 *    the order they will appear in the interface
	 *
	 * Block preset format, all keys accept only 'true' (omit for false) except where noted:
	 * <title of block template> : {
	 *   autoblock: <autoblock any IP addresses used (for registered users only)>
	 *   disabletalk: <disable user from editing their own talk page while blocked>
	 *   expiry: <string - expiry timestamp, can include relative times like "5 months", "2 weeks" etc>
	 *   forAnonOnly: <show block option in the interface only if the relevant user is an IP>
	 *   forRegisteredOnly: <show block option in the interface only if the relevant user is registered>
	 *   label: <string - label for the option of the dropdown in the interface (keep brief)>
	 *   noemail: prevent the user from sending email through Special:Emailuser
	 *   pageParam: <set if the associated block template accepts a page parameter>
	 *   prependReason: <string - prepends the value of 'reason' to the end of the existing reason, namely for when revoking talk page access>
	 *   nocreate: <block account creation from the user's IP (for anonymous users only)>
	 *   nonstandard: <template does not conform to stewardship of [[enwiki:WikiProject User Warnings]] and may not accept standard parameters>
	 *   reason: <string - block rationale, as would appear in the block log,
	 *            and the edit summary for when adding block template, unless 'summary' is set>
	 *   reasonParam: <set if the associated block template accepts a reason parameter>
	 *   sig: <string - set to ~~~~ if block template does not accept "true" as the value, or set null to omit sig param altogether>
	 *   summary: <string - edit summary for when adding block template to user's talk page, if not set, 'reason' is used>
	 *   suppressArticleInSummary: <set to suppress showing the article name in the edit summary, as with attack pages>
	 *   templateName: <string - name of template to use (instead of key name), entry will be omitted from the Templates list.
	 *                  (e.g. use another template but with different block options)>
	 *   useInitialOptions: <when preset is chosen, only change given block options, leave others as they were>
	 *
	 * WARNING: 'anononly' and 'allowusertalk' are enabled by default.
	 *   To disable, set 'hardblock' and 'disabletalk', respectively
	 */
	Twinkle.block.blockPresetsInfo = {
		// uw-prefixed
		'uw-block': {
			autoblock: true,
			expiry: '1 day',
			forRegisteredOnly: true,
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知', '封鎖通知'),
			suppressArticleInSummary: true,
		},
		'uw-blockindef': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知', '封鎖通知'),
			suppressArticleInSummary: true,
		},
		'uw-blocknotalk': {
			disabletalk: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知：禁止编辑讨论页', '封鎖通知：禁止編輯討論頁'),
			suppressArticleInSummary: true,
		},
		'uw-3block': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('违反[[LIB:3RR|回退不过三原则]]', '違反[[LIB:3RR|回退不過三原則]]'),
			summary: window.wgULS(
				'封禁通知：违反[[LIB:3RR|回退不过三原则]]',
				'封鎖通知：違反[[LIB:3RR|回退不過三原則]]'
			),
		},
		'uw-adblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('散发[[LIB:SOAP|散发广告或宣传]]', '散發[[LIB:SOAP|散發廣告或宣傳]]'),
			summary: window.wgULS(
				'封禁通知：散发[[LIB:SOAP|散发广告或宣传]]',
				'封鎖通知：散發[[LIB:SOAP|散發廣告或宣傳]]'
			),
		},
		'uw-attackblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			reason: window.wgULS(
				'[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]',
				'[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]'
			),
			summary: window.wgULS(
				'封禁通知：[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]',
				'封鎖通知：[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]'
			),
		},
		'uw-copyrightblock': {
			autoblock: true,
			expiry: 'infinity',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续[[LIB:COPYVIO|侵犯著作权]]', '持續[[LIB:COPYVIO|侵犯著作權]]'),
			summary: window.wgULS(
				'封禁通知：持续[[LIB:COPYVIO|侵犯著作权]]',
				'封鎖通知：持續[[LIB:COPYVIO|侵犯著作權]]'
			),
			templateName: 'uw-blockindef',
		},
		'uw-dblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续[[LIB:VAN|删除内容]]', '持續[[LIB:VAN|刪除內容]]'),
			summary: window.wgULS('封禁通知：持续[[LIB:VAN|删除内容]]', '封鎖通知：持續[[LIB:VAN|刪除內容]]'),
		},
		'uw-hblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('[[LIB:骚扰|骚扰]]其他用户', '[[LIB:騷擾|騷擾]]其他使用者'),
			summary: window.wgULS('封禁通知：[[LIB:骚扰|骚扰]]其他用户', '封鎖通知：[[LIB:騷擾|騷擾]]其他使用者'),
		},
		'uw-vblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('[[LIB:VAN|破坏]]', '[[LIB:VAN|破壞]]'),
			summary: window.wgULS('封禁通知：[[LIB:VAN|破坏]]', '封鎖通知：[[LIB:VAN|破壞]]'),
		},
		'uw-illegalblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续加入不符合中国价值观的非法内容', '持續加入不符合中國價值觀的非法內容'),
			summary: window.wgULS(
				'封禁通知：持续加入不符合中国价值观的非法内容',
				'封鎖通知：持續加入不符合中國價值觀的非法內容'
			),
		},
		'uw-sockblock': {
			autoblock: true,
			expiry: '1 week',
			forRegisteredOnly: true,
			nocreate: true,
			reason: window.wgULS('滥用[[LIB:SOCK|多个账号]]', '濫用[[LIB:SOCK|多個賬號]]'),
			summary: window.wgULS('封禁通知：滥用[[LIB:SOCK|多个账号]]', '封鎖通知：濫用[[LIB:SOCK|多個賬號]]'),
			templateName: 'uw-block',
		},
		// uw-u-prefixed
		'uw-ublock': {
			expiry: 'infinity',
			forRegisteredOnly: true,
			reason: `{{uw-ublock}}<!-- ${window.wgULS('不当用户名、软封禁', '不當使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-illegal': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-illegal}}<!-- ${window.wgULS('不合规的用户名', '不合規的使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-suggestive': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-suggestive}}<!-- ${window.wgULS('误导、混淆性用户名', '誤導、混淆性使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-spam': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-spam}}<!-- ${window.wgULS('宣传性用户名或宣传性编辑', '宣傳性使用者名稱或宣傳性編輯')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		// other block templates
		'range block': {
			expiry: '1 week',
			reason: '{{range block}}',
			nocreate: true,
			nonstandard: true,
			forAnonOnly: true,
			sig: '~~'.concat('~~'),
		},
		'blocked proxy': {
			expiry: '2 years',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			hardblock: true,
			reason: '{{blocked proxy}}',
			sig: null,
		},
		checkuserblock: {
			expiry: '1 week',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{checkuserblock}}',
			sig: '~~'.concat('~~'),
		},
		'checkuserblock-account': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{checkuserblock-account}}',
			sig: '~~'.concat('~~'),
		},
		'school block': {
			expiry: '1 week',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{school block}}',
			sig: '~~'.concat('~~'),
		},
		'Bot block message': {
			expiry: 'infinity',
			forRegisteredOnly: true,
			reason: window.wgULS('机器人故障', '機器人故障'),
			summary: window.wgULS('封禁通知：机器人故障', '封鎖通知：機器人故障'),
			sig: '~~'.concat('~~'),
		},
		// other block reasons
		bioblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('违反生者传记条例', '違反生者傳記條例'),
			summary: window.wgULS('封禁通知：违反生者传记条例', '封鎖通知：違反生者傳記條例'),
			templateName: 'uw-vblock',
		},
		ucblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('屡次增加没有[[LIB:RS|可靠来源]]的资料', '屢次增加沒有[[LIB:RS|可靠來源]]的資料'),
			summary: window.wgULS(
				'封禁通知：屡次增加没有[[LIB:RS|可靠来源]]的资料',
				'封鎖通知：屢次增加沒有[[LIB:RS|可靠來源]]的資料'
			),
			templateName: 'uw-block',
		},
		npblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('在条目中增加无意义文字', '在條目中增加無意義文字'),
			summary: window.wgULS('封禁通知：在条目中增加无意义文字', '封鎖通知：在條目中增加無意義文字'),
			templateName: 'uw-vblock',
		},
		'point-block': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			reason: window.wgULS('持续打制度擦边球', '持續打制度擦邊球'),
			summary: window.wgULS('封禁通知：持续打制度擦边球', '封鎖通知：持續打制度擦邊球'),
			templateName: 'uw-block',
		},
		'sock-contribs': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reasonParam: true,
			reason: window.wgULS(
				'确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 根据用户贡献确定',
				'確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 根據使用者貢獻確定'
			),
			summary: window.wgULS(
				'封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡',
				'封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡'
			),
			templateName: 'uw-blockindef',
		},
		'sock-cu': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reasonParam: true,
			reason: window.wgULS(
				'确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 用户查核确认',
				'確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 使用者查核確認'
			),
			summary: window.wgULS(
				'封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡',
				'封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡'
			),
			templateName: 'uw-blockindef',
		},
		'uw-ublock-attack': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-attack}}<!-- ${window.wgULS('攻击性用户名', '攻擊性使用者名稱')} -->`,
			summary: window.wgULS('封禁通知：攻击性用户名', '封鎖通知：攻擊性使用者名稱'),
		},
		// Begin partial block templates, accessed in Twinkle.block.blockGroupsPartial
		'uw-pblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: false,
			pageParam: false,
			reasonParam: true,
			summary: window.wgULS(
				'封禁通知：您已被禁止编辑有兽档案馆的部分区域',
				'封鎖通知：您已被禁止編輯有獸檔案館的部分區域'
			),
		},
		'uw-pblockindef': {
			autoblock: true,
			expiry: 'infinity',
			nocreate: false,
			pageParam: false,
			reasonParam: true,
			summary: window.wgULS(
				'封禁通知：您已被永久禁止编辑有兽档案馆的部分区域',
				'封鎖通知：您已被永久禁止編輯有獸檔案館的部分區域'
			),
		},
	};
	Twinkle.block.transformBlockPresets = () => {
		// Merge custom reason
		for (const item of Twinkle.getPref('customBlockReasonList')) {
			const newKey = `${item.value}|${item.label}`;
			Twinkle.block.blockPresetsInfo[newKey] = {
				autoblock: true,
				nocreate: true,
				...Twinkle.block.blockPresetsInfo[item.value],
				reason: item.label,
				templateName: item.value,
			};
			if (Twinkle.block.blockPresetsInfo[item.value] === undefined) {
				Twinkle.block.blockPresetsInfo[item.value] = {
					pageParam: true,
					reasonParam: true,
					custom: true,
				};
			}
		}
		// supply sensible defaults
		for (const [preset, settings] of Object.entries(Twinkle.block.blockPresetsInfo)) {
			settings.summary ||= settings.reason;
			settings.sig = settings.sig === undefined ? 'yes' : settings.sig;
			settings.indefinite ||= Morebits.string.isInfinity(settings.expiry);
			if (!Twinkle.block.isRegistered && settings.indefinite) {
				settings.expiry = '1 day';
			} else {
				settings.expiry ||= '1 day';
			}
			Twinkle.block.blockPresetsInfo[preset] = settings;
		}
	};
	// These are the groups of presets and defines the order in which they appear. For each list item:
	//   label: <string, the description that will be visible in the dropdown>
	//   value: <string, the key of a preset in blockPresetsInfo>
	//   meta: <boolean, show in templates only>
	Twinkle.block.blockGroups = [
		{
			label: window.wgULS('普通封禁', '普通封鎖'),
			list: [
				{label: window.wgULS('通用封禁（自定义理由）', '通用封鎖（自訂理由）'), value: 'uw-block'},
				{
					label: window.wgULS('无限期封禁（自定义理由）', '無限期封鎖（自訂理由）'),
					value: 'uw-blockindef',
				},
				{label: window.wgULS('禁止编辑讨论页', '禁止編輯討論頁'), value: 'uw-blocknotalk', meta: true},
				{label: window.wgULS('违反回退不过三原则', '違反回退不過三原則'), value: 'uw-3block'},
				{label: window.wgULS('散发广告或宣传', '散發廣告或宣傳'), value: 'uw-adblock'},
				{label: window.wgULS('行为无礼或人身攻击', '行為無禮或人身攻擊'), value: 'uw-attackblock'},
				{
					label: window.wgULS('多次加入侵犯著作权的内容', '多次加入侵犯著作權的內容'),
					value: 'uw-copyrightblock',
				},
				{label: window.wgULS('无故删除内容', '無故刪除內容'), value: 'uw-dblock'},
				{label: window.wgULS('骚扰用户', '騷擾使用者'), value: 'uw-hblock'},
				{label: window.wgULS('破坏', '破壞'), value: 'uw-vblock', selected: true},
				{
					label: window.wgULS('持续加入不符合中国价值观的非法内容', '持續加入不符合中國價值觀的非法內容'),
					value: 'uw-illegalblock',
				},
				{label: window.wgULS('滥用多个账号', '濫用多個賬號'), value: 'uw-sockblock'},
				// other block reasons
				{label: window.wgULS('违反生者传记条例', '違反生者傳記條例'), value: 'bioblock'},
				{label: window.wgULS('屡次增加没有可靠来源的资料', '屢次增加沒有可靠來源的資料'), value: 'ucblock'},
				{label: window.wgULS('在条目中增加无意义文字', '在條目中增加無意義文字'), value: 'npblock'},
				{label: window.wgULS('持续打制度擦边球', '持續打制度擦邊球'), value: 'point-block'},
				{
					label: window.wgULS(
						'确认为傀儡或真人傀儡（根据用户贡献确定）',
						'確認為傀儡或真人傀儡（根據使用者貢獻確定）'
					),
					value: 'sock-contribs',
				},
				{
					label: window.wgULS(
						'确认为傀儡或真人傀儡（用户查核确认）',
						'確認為傀儡或真人傀儡（使用者查核確認）'
					),
					value: 'sock-cu',
				},
				{
					label: window.wgULS('机器人发生故障并必须紧急停止', '機器人發生故障並必須緊急停止'),
					value: 'Bot block message',
				},
			],
		},
		{
			custom: true,
			label: window.wgULS('自定义封禁理由', '自訂封鎖理由'),
		},
		{
			label: window.wgULS('用户名封禁', '使用者名稱封鎖'),
			list: [
				{label: window.wgULS('违反用户名条例', '違反使用者名稱條例'), value: 'uw-ublock'},
				{label: window.wgULS('不合规的用户名', '不合規的使用者名稱'), value: 'uw-ublock-illegal'},
				{label: window.wgULS('宣传性用户名', '宣傳性使用者名稱'), value: 'uw-ublock-spam'},
				{label: window.wgULS('攻击性用户名', '攻擊性使用者名稱'), value: 'uw-ublock-attack'},
				{
					label: window.wgULS('混淆性或误导性用户名', '混淆性或誤導性使用者名稱'),
					value: 'uw-ublock-suggestive',
				},
			],
		},
		{
			label: '其他模板',
			list: [
				{label: 'range block', value: 'range block', forAnonOnly: true},
				{label: 'school block', value: 'school block', forAnonOnly: true},
				{label: 'blocked proxy', value: 'blocked proxy', forAnonOnly: true},
				{
					label: window.wgULS('用户查核封禁（主用户）', '使用者查核封鎖（主使用者）'),
					value: 'checkuserblock',
					forAnonOnly: true,
				},
				{
					label: window.wgULS('用户查核封禁（子用户）', '使用者查核封鎖（子使用者）'),
					value: 'checkuserblock-account',
					forRegisteredOnly: true,
				},
			],
		},
	];
	Twinkle.block.blockGroupsPartial = [
		{
			label: window.wgULS('常见部分封禁理由', '常見部分封鎖理由'),
			list: [
				{
					label: window.wgULS('通用部分封禁（自定义理由）', '通用部分封鎖（自訂理由）'),
					value: 'uw-pblock',
					selected: true,
				},
				{
					label: window.wgULS('无限期部分封禁（自定义理由）', '無限期部分封鎖（自訂理由）'),
					value: 'uw-pblockindef',
				},
			],
		},
	];
	Twinkle.block.callback.filtered_block_groups = (group, show_template) => {
		return $.map(group, (blockGroup) => {
			// Add custom reason
			if (blockGroup.custom) {
				if (show_template) {
					let templates = $.map(Twinkle.getPref('customBlockReasonList'), (item) => {
						if (Twinkle.block.blockPresetsInfo[item.value].custom) {
							return item.value;
						}
					});
					templates = Morebits.array.uniq(templates);
					blockGroup.list = $.map(templates, (template) => {
						return {
							label: window.wgULS('自定义模板', '自訂模板'),
							value: template,
						};
					});
				} else {
					blockGroup.list = $.map(Twinkle.getPref('customBlockReasonList'), (item) => {
						return {
							label: item.label,
							value: `${item.value}|${item.label}`,
						};
					});
				}
			}
			const list = $.map(blockGroup.list, (blockPreset) => {
				if (!show_template && blockPreset.meta) {
					return;
				}
				switch (blockPreset.value) {
					case 'range block':
						if (!Morebits.ip.isRange(relevantUserName)) {
							return;
						}
						blockPreset.selected = !Morebits.ip.get64(relevantUserName);
						break;
					default:
						break;
				}
				const blockSettings = Twinkle.block.blockPresetsInfo[blockPreset.value];
				let registrationRestrict;
				if (blockSettings.forRegisteredOnly) {
					registrationRestrict = Twinkle.block.isRegistered;
				} else if (blockSettings.forAnonOnly) {
					registrationRestrict = !Twinkle.block.isRegistered;
				} else {
					registrationRestrict = true;
				}
				if (!(blockSettings.templateName && show_template) && registrationRestrict) {
					const templateName = blockSettings.templateName || blockPreset.value;
					return {
						label: (show_template ? `{{${templateName}}}: ` : '') + blockPreset.label,
						value: blockPreset.value,
						data: [
							{
								name: 'template-name',
								value: templateName,
							},
						],
						selected: !!blockPreset.selected,
						disabled: !!blockPreset.disabled,
					};
				}
			});
			if (list.length) {
				return {
					label: blockGroup.label,
					list,
				};
			}
		});
	};
	Twinkle.block.callback.change_preset = (e) => {
		const {form} = e.target;
		const key = form.preset.value;
		if (!key) {
			return;
		}
		Twinkle.block.callback.update_form(e, Twinkle.block.blockPresetsInfo[key]);
		if (form.template) {
			form.template.value = Twinkle.block.blockPresetsInfo[key].templateName || key;
			Twinkle.block.callback.change_template(e);
		}
	};
	Twinkle.block.callback.change_expiry = (e) => {
		const {expiry} = e.target.form;
		if (e.target.value === 'custom') {
			Morebits.quickForm.setElementVisibility(expiry.parentNode, true);
		} else {
			Morebits.quickForm.setElementVisibility(expiry.parentNode, false);
			expiry.value = e.target.value;
		}
	};
	Twinkle.block.seeAlsos = [];
	Twinkle.block.callback.toggle_see_alsos = function () {
		const reason = this.form.reason.value.replace(
			new RegExp(`(<!-- )(参见|參見)${Twinkle.block.seeAlsos.join('、')}( -->)`),
			''
		);
		Twinkle.block.seeAlsos = Twinkle.block.seeAlsos.filter((el) => {
			return el !== this.value;
		});
		if (this.checked) {
			Twinkle.block.seeAlsos.push(this.value);
		}
		const seeAlsoMessage = Twinkle.block.seeAlsos.join('、');
		if (Twinkle.block.seeAlsos.length) {
			this.form.reason.value = `${reason}<!-- ${window.wgULS('参见', '參見')}${seeAlsoMessage} -->`;
		} else {
			this.form.reason.value = reason;
		}
	};
	// No ds
	Twinkle.block.callback.update_form = (e, data) => {
		const {form} = e.target;
		let {expiry} = data;
		// don't override original expiry if useInitialOptions is set
		if (!data.useInitialOptions) {
			if (Date.parse(expiry)) {
				expiry = new Date(expiry).toGMTString();
				form.expiry_preset.value = 'custom';
			} else {
				form.expiry_preset.value = data.expiry || 'custom';
			}
			form.expiry.value = expiry;
			if (form.expiry_preset.value === 'custom') {
				Morebits.quickForm.setElementVisibility(form.expiry.parentNode, true);
			} else {
				Morebits.quickForm.setElementVisibility(form.expiry.parentNode, false);
			}
		}
		// boolean-flipped options, more at [[mw:API:Block]]
		data.disabletalk = data.disabletalk === undefined ? false : data.disabletalk;
		data.hardblock = data.hardblock === undefined ? false : data.hardblock;
		// disable autoblock if blocking a bot
		if (Twinkle.block.userIsBot || /bot\b/i.test(relevantUserName)) {
			data.autoblock = false;
		}
		$(form)
			.find('[name=field_block_options]')
			.find(':checkbox')
			.each((_i, el) => {
				// don't override original options if useInitialOptions is set
				if (data.useInitialOptions && data[el.name] === undefined) {
					return;
				}
				if (el.name === 'closevip') {
					return;
				}
				const check = data[el.name] === '' || !!data[el.name];
				$(el).prop('checked', check);
			});
		if (data.prependReason && data.reason) {
			form.reason.value = `${data.reason}；${form.reason.value}`;
		} else {
			form.reason.value = data.reason || '';
		}
		// Clear and/or set any partial page or namespace restrictions
		if (form.pagerestrictions) {
			const $pageSelect = $(form).find('[name=pagerestrictions]');
			const $namespaceSelect = $(form).find('[name=namespacerestrictions]');
			// Respect useInitialOptions by clearing data when switching presets
			// In practice, this will always clear, since no partial presets use it
			if (!data.useInitialOptions) {
				$pageSelect.val(null).trigger('change');
				$namespaceSelect.val(null).trigger('change');
			}
			// Add any preset options; in practice, just used for prior block settings
			if (data.restrictions) {
				if (data.restrictions.pages && !$pageSelect.val().length) {
					const pages = data.restrictions.pages.map((pr) => {
						return pr.title;
					});
					// since page restrictions use an ajax source, we
					// short-circuit that and just add a new option
					for (const page of pages) {
						if (!$pageSelect.find(`option[value='${$.escapeSelector(page)}']`).length) {
							const newOption = new Option(page, page, true, true);
							$pageSelect.append(newOption);
						}
					}
					$pageSelect
						.val([...$pageSelect.val(), ...(Array.isArray(pages) ? pages : [pages])])
						.trigger('change');
				}
				if (data.restrictions.namespaces) {
					$namespaceSelect
						.val([
							...$namespaceSelect.val(),
							...(Array.isArray(data.restrictions.namespaces)
								? data.restrictions.namespaces
								: [data.restrictions.namespaces]),
						])
						.trigger('change');
				}
			}
		}
	};
	Twinkle.block.callback.change_template = (e) => {
		const {form} = e.target;
		const {value} = form.template;
		const settings = Twinkle.block.blockPresetsInfo[value];
		const blockBox = $(form).find('[name=actiontype][value=block]').is(':checked');
		const partialBox = $(form).find('[name=actiontype][value=partial]').is(':checked');
		const templateBox = $(form).find('[name=actiontype][value=template]').is(':checked');
		// Block form is not present
		if (!blockBox) {
			if (settings.indefinite || settings.nonstandard) {
				if (Twinkle.block.prev_template_expiry === null) {
					Twinkle.block.prev_template_expiry = form.template_expiry.value || '';
				}
				form.template_expiry.parentNode.style.display = 'none';
				form.template_expiry.value = 'infinity';
			} else if (form.template_expiry.parentNode.style.display === 'none') {
				if (Twinkle.block.prev_template_expiry !== null) {
					form.template_expiry.value = Twinkle.block.prev_template_expiry;
					Twinkle.block.prev_template_expiry = null;
				}
				form.template_expiry.parentNode.style.display = 'block';
			}
			if (Twinkle.block.prev_template_expiry) {
				form.expiry.value = Twinkle.block.prev_template_expiry;
			}
			Morebits.quickForm.setElementVisibility(form.notalk.parentNode, !settings.nonstandard);
			// Partial
			Morebits.quickForm.setElementVisibility(form.noemail_template.parentNode, partialBox);
			Morebits.quickForm.setElementVisibility(form.nocreate_template.parentNode, partialBox);
		} else if (templateBox) {
			// Only present if block && template forms both visible
			Morebits.quickForm.setElementVisibility(
				form.blank_duration.parentNode,
				!settings.indefinite && !settings.nonstandard
			);
		}
		// Only particularly relevant if template form is present
		Morebits.quickForm.setElementVisibility(form.article.parentNode, settings && !!settings.pageParam);
		Morebits.quickForm.setElementVisibility(form.block_reason.parentNode, settings && !!settings.reasonParam);
		// Apply reason from blockPresetsInfo
		if (settings.reasonParam) {
			form.block_reason.value = Twinkle.block.blockPresetsInfo[form.preset.value].reason || '';
		} else {
			form.block_reason.value = '';
		}
		// Partial block
		Morebits.quickForm.setElementVisibility(form.area.parentNode, partialBox && !blockBox);
		form.root.previewer.closePreview();
	};
	Twinkle.block.prev_template_expiry = null;
	Twinkle.block.callback.preview = (form) => {
		const params = {
			article: form.article.value,
			blank_duration: form.blank_duration ? form.blank_duration.checked : false,
			disabletalk: form.disabletalk.checked || (form.notalk ? form.notalk.checked : false),
			expiry: form.template_expiry ? form.template_expiry.value : form.expiry.value,
			hardblock: Twinkle.block.isRegistered ? form.autoblock.checked : form.hardblock.checked,
			indefinite: Morebits.string.isInfinity(
				form.template_expiry ? form.template_expiry.value : form.expiry.value
			),
			reason: form.block_reason.value,
			template: form.template.value,
			partial: $(form).find('[name=actiontype][value=partial]').is(':checked'),
			pagerestrictions: $(form.pagerestrictions).val() || [],
			namespacerestrictions: $(form.namespacerestrictions).val() || [],
			noemail: form.noemail.checked || (form.noemail_template ? form.noemail_template.checked : false),
			nocreate: form.nocreate.checked || (form.nocreate_template ? form.nocreate_template.checked : false),
			area: form.area.value,
		};
		const templateText = Twinkle.block.callback.getBlockNoticeWikitext(params);
		form.previewer.beginRender(templateText, `User_talk:${relevantUserName}/Wikitext`); // Force wikitext/correct username
	};
	Twinkle.block.callback.evaluate = (e) => {
		const params = Morebits.quickForm.getInputData(e.target);
		const $form = $(e.target);
		const toBlock = $form.find('[name=actiontype][value=block]').is(':checked');
		const toWarn = $form.find('[name=actiontype][value=template]').is(':checked');
		const toPartial = $form.find('[name=actiontype][value=partial]').is(':checked');
		const toTag = $form.find('[name=actiontype][value=tag]').is(':checked');
		const toProtect = $form.find('[name=actiontype][value=protect]').is(':checked');
		const toUnblock = $form.find('[name=actiontype][value=unblock]').is(':checked');
		let blockoptions = {};
		let templateoptions = {};
		let unblockoptions = {};
		Twinkle.block.callback.saveFieldset($form.find('[name=field_block_options]'));
		Twinkle.block.callback.saveFieldset($form.find('[name=field_template_options]'));
		Twinkle.block.callback.saveFieldset($form.find('[name=field_tag_options]'));
		Twinkle.block.callback.saveFieldset($form.find('[name=field_unblock_options]'));
		blockoptions = Twinkle.block.field_block_options;
		unblockoptions = Twinkle.block.field_unblock_options;
		const toClosevip = !!blockoptions.closevip;
		templateoptions = Twinkle.block.field_template_options;
		templateoptions.disabletalk = !!(templateoptions.disabletalk || blockoptions.disabletalk);
		templateoptions.hardblock = !!blockoptions.hardblock;
		// remove extraneous
		delete blockoptions.expiry_preset;
		delete blockoptions.closevip;
		// Partial API requires this to be gone, not false or 0
		if (toPartial) {
			blockoptions.partial = true;
			templateoptions.partial = true;
		}
		templateoptions.pagerestrictions = $form.find('[name=pagerestrictions]').val() || [];
		templateoptions.namespacerestrictions = $form.find('[name=namespacerestrictions]').val() || [];
		// Format for API here rather than in saveFieldset
		blockoptions.pagerestrictions = templateoptions.pagerestrictions.join('|');
		blockoptions.namespacerestrictions = templateoptions.namespacerestrictions.join('|');
		// use block settings as warn options where not supplied
		templateoptions.summary ||= blockoptions.reason;
		templateoptions.expiry = templateoptions.template_expiry || blockoptions.expiry;
		templateoptions.preset = toBlock ? params.preset : null;
		// Check tags
		// Given an array of incompatible tags, check if we have two or more selected
		const checkIncompatible = (conflicts, extra) => {
			const count = conflicts.reduce((sum, tag) => {
				return (sum += params.tag.includes(tag));
			}, 0);
			if (count > 1) {
				let message = `${window.wgULS('请在以下标签中择一使用', '請在以下標籤中擇一使用')}：{{${conflicts.join(
					'}}、{{'
				)}}}。`;
				message += extra || '';
				mw.notify(message, {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return true;
			}
		};
		if (toTag) {
			if (params.tag.length === 0) {
				mw.notify(window.wgULS('请至少选择一个用户页标记！', '請至少選擇一個使用者頁面標記！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
			if (
				checkIncompatible(
					['Blocked user', 'Sockpuppet'],
					window.wgULS(
						'{{Sockpuppet}}已涵盖{{Blocked user}}的功能。',
						'{{Sockpuppet}}已涵蓋{{Blocked user}}的功能。'
					)
				)
			) {
				return;
			}
			if (
				checkIncompatible(
					['Blocked user', 'Sockpuppeteer'],
					window.wgULS(
						'{{Sockpuppeteer}}已涵盖{{Blocked user}}的功能。',
						'{{Sockpuppeteer}}已涵蓋{{Blocked user}}的功能。'
					)
				)
			) {
				return;
			}
			if (
				checkIncompatible(
					['Sockpuppet', 'Sockpuppeteer'],
					window.wgULS('请从主账号和分身账号中选择一个。', '請從主賬號和分身賬號中選擇一個。')
				)
			) {
				return;
			}
			if (params.tag.includes('Sockpuppet') && params.sppUsername.trim() === '') {
				mw.notify(window.wgULS('请提供傀儡账号的主账号用户名！', '請提供傀儡賬號的主賬號使用者名稱！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
		}
		if (toBlock) {
			if (blockoptions.partial) {
				if (blockoptions.disabletalk && !blockoptions.namespacerestrictions.includes('3')) {
					mw.notify(
						window.wgULS(
							'部分封禁无法阻止编辑自己的讨论页，除非也封禁了User talk命名空间！',
							'部分封鎖無法阻止編輯自己的討論頁，除非也封鎖了User talk命名空間！'
						),
						{
							type: 'warn',
							tag: 'twinkleblock',
						}
					);
					return;
				}
				if (!blockoptions.namespacerestrictions && !blockoptions.pagerestrictions) {
					if (!blockoptions.noemail && !blockoptions.nocreate) {
						// Blank entries technically allowed
						mw.notify(
							window.wgULS(
								'没有选择页面或命名空间，也没有停用电子邮件或禁止创建账号；请选择至少一个选项以应用部分封禁！',
								'沒有選擇頁面或命名空間，也沒有停用電子郵件或禁止建立賬號；請選擇至少一個選項以應用部分封鎖！'
							),
							{
								type: 'warn',
								tag: 'twinkleblock',
							}
						);
						return;
					} else if (
						!confirm(
							window.wgULS(
								'您将要进行封禁，但没有阻止任何页面或命名空间的编辑，确定要继续？',
								'您將要進行封鎖，但沒有阻止任何頁面或命名空間的編輯，確定要繼續？'
							)
						)
					) {
						return;
					}
				}
			}
			if (!blockoptions.expiry) {
				mw.notify(window.wgULS('请提供过期时间！', '請提供過期時間！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			} else if (Morebits.string.isInfinity(blockoptions.expiry) && !Twinkle.block.isRegistered) {
				mw.notify(window.wgULS('禁止无限期封禁IP地址！', '禁止無限期封鎖IP位址！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
			if (!blockoptions.reason) {
				mw.notify(window.wgULS('请提供封禁理由！', '請提供封鎖理由！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
			Morebits.simpleWindow.setButtonsEnabled(false);
			Morebits.status.init(e.target);
			const statusElement = new Morebits.status(window.wgULS('执行封禁', '執行封鎖'));
			blockoptions.action = 'block';
			blockoptions.user = relevantUserName;
			// boolean-flipped options
			blockoptions.anononly = blockoptions.hardblock ? undefined : true;
			blockoptions.allowusertalk = blockoptions.disabletalk ? undefined : true;
			/**
			 * Check if block status changed while processing the form.
			 * There's a lot to consider here. list=blocks provides the
			 * current block status, but there are at least two issues with
			 * relying on it. First, the id doesn't update on a reblock,
			 * meaning the individual parameters need to be compared. This
			 * can be done roughly with JSON.stringify - we can thankfully
			 * rely on order from the server, although sorting would be
			 * fine if not - but falsey values are problematic and is
			 * non-ideal. More importantly, list=blocks won't indicate if a
			 * non-blocked user is blocked then unblocked. This should be
			 * exceedingy rare, but regardless, we thus need to check
			 * list=logevents, which has a nicely updating logid
			 * parameter. We can't rely just on that, though, since it
			 * doesn't account for blocks that have expired on their own.
			 * As such, we use both. Using some ternaries, the logid
			 * variables are false if there's no logevents, so if they
			 * aren't equal we defintely have a changed entry (send
			 * confirmation). If they are equal, then either the user was
			 * never blocked (the block statuses will be equal, no
			 * confirmation) or there's no new block, in which case either
			 * a block expired (different statuses, confirmation) or the
			 * same block is still active (same status, no confirmation).
			 */
			const query = {
				format: 'json',
				action: 'query',
				list: 'blocks|logevents',
				letype: 'block',
				lelimit: 1,
				letitle: `User:${blockoptions.user}`,
			};
			// bkusers doesn't catch single IPs blocked as part of a range block
			if (mw.util.isIPAddress(blockoptions.user, true)) {
				query.bkip = blockoptions.user;
			} else {
				query.bkusers = blockoptions.user;
				query.list += '|users';
				query.usprop = 'groups';
				query.ususers = blockoptions.user;
				query.meta = 'tokens';
				query.type = 'userrights';
			}
			api.get(query).then((data) => {
				let [block] = data.query.blocks;
				// As with the initial data fetch, if an IP is blocked
				// *and* rangeblocked, this would only grab whichever
				// block is more recent, which would likely mean a
				// mismatch.  However, if the rangeblock is updated
				// while filling out the form, this won't detect that,
				// but that's probably fine.
				if (data.query.blocks.length > 1 && block.user !== relevantUserName) {
					[, block] = data.query.blocks;
				}
				const [logevents] = data.query.logevents;
				const user = data.query.users ? data.query.users[0] : null;
				const logid = data.query.logevents.length ? logevents.logid : false;
				if (logid !== Twinkle.block.blockLogId || !!block !== !!Twinkle.block.currentBlockInfo) {
					let message = blockoptions.user + window.wgULS('的封禁状态已被修改。', '的封鎖狀態已被修改。');
					if (block) {
						message += window.wgULS('新状态：', '新狀態：');
					} else {
						message += window.wgULS('最新日志：', '最新日誌：');
					}
					let logExpiry = '';
					if (logevents.params.duration) {
						if (logevents.params.duration === 'infinity') {
							logExpiry = window.wgULS('无限期', '無限期');
						} else {
							const expiryDate = new Morebits.date(logevents.params.expiry);
							logExpiry +=
								(expiryDate.isBefore(new Date()) ? window.wgULS('过期于', '過期於') : '直到') +
								expiryDate.calendar();
						}
					} else {
						// no duration, action=unblock, just show timestamp
						logExpiry = `於${new Morebits.date(logevents.timestamp).calendar()}`;
					}
					message += `由${logevents.user}${window.wgULS('以“', '以「')}${logevents.comment}${window.wgULS('”', '」')}${
						blockActionText[logevents.action]
					}${logExpiry}${window.wgULS('，你想要以你的设置更改封禁吗？', '，你想要以你的設定變更封鎖嗎？')}`;
					if (!confirm(message)) {
						Morebits.status.info(
							window.wgULS('执行封禁', '執行封鎖'),
							window.wgULS('用户取消操作', '使用者取消操作')
						);
						return;
					}
					blockoptions.reblock = 1; // Writing over a block will fail otherwise
				}
				const groupsCanBeRemoved = [
					'autoreviewer',
					'confirmed',
					'rnrsverify-exempt',
					'massmessage-sender',
					'patroller',
					'templateeditor',
					'transwiki',
				];
				let groupsToBeRemoved = [];
				if (user && Morebits.string.isInfinity(blockoptions.expiry)) {
					groupsToBeRemoved = user.groups.filter((group) => {
						return groupsCanBeRemoved.includes(group);
					});
				}
				// execute block
				blockoptions.tags = Twinkle.changeTags;
				blockoptions.token = mw.user.tokens.get('csrfToken');
				const mbApi = new Morebits.wiki.api(window.wgULS('执行封禁', '執行封鎖'), blockoptions, () => {
					statusElement.info('完成');
					if (toWarn) {
						Twinkle.block.callback.issue_template(templateoptions);
					}
					if (toClosevip) {
						const vipPage = new Morebits.wiki.page(
							'LIB_talk:报告当前破坏',
							window.wgULS('关闭请求', '關閉請求')
						);
						vipPage.setFollowRedirect(true);
						vipPage.setCallbackParameters(blockoptions);
						vipPage.load(Twinkle.block.callback.closeRequest);
					}
					if (groupsToBeRemoved.length > 0) {
						const rightStatusElement = new Morebits.status(window.wgULS('移除权限', '移除權限'));
						if (
							confirm(
								window.wgULS('该用户有以下权限：', '該使用者有以下權限：') +
									groupsToBeRemoved.join('、') +
									window.wgULS('，您是否想要同时移除这些权限？', '，您是否想要同時移除這些權限？')
							)
						) {
							const revokeOptions = {
								action: 'userrights',
								user: blockoptions.user,
								remove: groupsToBeRemoved.join('|'),
								reason: window.wgULS('用户已被无限期封禁', '使用者已被無限期封鎖'),
								token: data.query.tokens.userrightstoken,
								tags: Twinkle.changeTags,
							};
							const mrApi = new Morebits.wiki.api(
								window.wgULS('移除权限', '移除權限'),
								revokeOptions,
								() => {
									rightStatusElement.info(`已移除${groupsToBeRemoved.join('、')}`);
								}
							);
							mrApi.post();
						} else {
							rightStatusElement.error(window.wgULS('用户取消操作。', '使用者取消操作。'));
						}
					}
				});
				mbApi.post();
			});
		} else if (toWarn) {
			Morebits.simpleWindow.setButtonsEnabled(false);
			Morebits.status.init(e.target);
			Twinkle.block.callback.issue_template(templateoptions);
		}
		if (toTag || toProtect) {
			Morebits.simpleWindow.setButtonsEnabled(false);
			Morebits.status.init(e.target);
			const userPage = `User:${mw.config.get('wgRelevantUserName')}`;
			const ysarxiv_page = new Morebits.wiki.page(
				userPage,
				window.wgULS('标记或保护用户页', '標記或保護使用者頁面')
			);
			ysarxiv_page.setCallbackParameters(params);
			ysarxiv_page.load(Twinkle.block.callback.taguserpage);
		}
		if (toUnblock) {
			if (!unblockoptions.reason) {
				mw.notify(window.wgULS('请提供解除封禁理由！', '請提供解除封鎖理由！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return;
			}
			Morebits.simpleWindow.setButtonsEnabled(false);
			Morebits.status.init(e.target);
			const unblockStatusElement = new Morebits.status(window.wgULS('执行解除封禁', '執行解除封鎖'));
			unblockoptions.action = 'unblock';
			unblockoptions.user = mw.config.get('wgRelevantUserName');
			// execute unblock
			unblockoptions.tags = Twinkle.changeTags;
			unblockoptions.token = mw.user.tokens.get('csrfToken');
			const unblockMbApi = new Morebits.wiki.api(
				window.wgULS('执行解除封禁', '執行解除封鎖'),
				unblockoptions,
				() => {
					unblockStatusElement.info('完成');
				}
			);
			unblockMbApi.post();
		}
		if (!toBlock && !toWarn && !toTag && !toProtect && !toUnblock) {
			mw.notify(window.wgULS('请给Twinkle点事做！', '請給Twinkle點事做！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
		}
	};
	Twinkle.block.callback.taguserpage = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const statelem = pageobj.getStatusElement();
		if (params.actiontype.includes('tag')) {
			const tags = [];
			for (const tag of params.tag) {
				let tagtext = `{{${tag}`;
				switch (tag) {
					case 'Blocked user':
						break;
					case 'Sockpuppet':
						tagtext += `\n| 1 = ${params.sppUsername.trim()}`;
						tagtext += `\n| 2 = ${params.sppType.trim()}`;
						if (params.sppEvidence.trim()) {
							tagtext += `\n| evidence = ${params.sppEvidence.trim()}`;
						}
						tagtext += '\n| locked = no';
						tagtext += '\n| notblocked = no';
						tagtext += '\n';
						break;
					case 'Sockpuppeteer':
						tagtext += '\n| 1 = blocked';
						tagtext += `\n| checked = ${params.spmChecked ? 'yes' : ''}`;
						if (params.spmEvidence.trim()) {
							tagtext += `\n| evidence = ${params.spmEvidence.trim()}`;
						}
						tagtext += '\n';
						break;
					default:
						mw.notify(window.wgULS('未知的用户页模板！', '未知的使用者頁面模板！'), {
							type: 'warn',
							tag: 'twinkleblock',
						});
						continue;
				}
				tagtext += '}}';
				tags.push(tagtext);
			}
			const text = tags.join('\n');
			pageobj.setPageText(text);
			pageobj.setEditSummary(window.wgULS('标记被永久封禁的用户页', '標記被永久封鎖的使用者頁面'));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.save(() => {
				Morebits.status.info(window.wgULS('标记用户页', '標記使用者頁面'), '完成');
				statelem.status(window.wgULS('正在保护页面', '正在保護頁面'));
				pageobj.load(Twinkle.block.callback.protectuserpage);
			});
		} else {
			Twinkle.block.callback.protectuserpage(pageobj);
		}
	};
	Twinkle.block.callback.protectuserpage = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const statelem = pageobj.getStatusElement();
		if (params.actiontype.includes('protect')) {
			if (pageobj.exists()) {
				pageobj.setEditProtection('sysop', 'indefinite');
				pageobj.setMoveProtection('sysop', 'indefinite');
			} else {
				pageobj.setCreateProtection('sysop', 'indefinite');
			}
			pageobj.setEditSummary(window.wgULS('被永久封禁的用户页', '被永久封鎖的使用者頁面'));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.protect(() => {
				Morebits.status.info(
					window.wgULS('保护用户页', '保護使用者頁面'),
					pageobj.exists() ? window.wgULS('已全保护', '已全保護') : window.wgULS('已白纸保护', '已白紙保護')
				);
				statelem.info('全部完成');
			});
		} else {
			statelem.info('全部完成');
		}
	};
	Twinkle.block.callback.issue_template = (formData) => {
		// Use wgRelevantUserName to ensure the block template goes to a single IP and not to the
		// "talk page" of an IP range (which does not exist)
		const userTalkPage = `User_talk:${mw.config.get('wgRelevantUserName')}`;
		const params = {
			...formData,
			messageData: Twinkle.block.blockPresetsInfo[formData.template],
			usertalk_summary: Twinkle.block.blockPresetsInfo[formData.preset || formData.template].summary,
			reason: Twinkle.block.field_template_options.block_reason,
			disabletalk: Twinkle.block.field_template_options.notalk,
			noemail: Twinkle.block.field_template_options.noemail_template,
			nocreate: Twinkle.block.field_template_options.nocreate_template,
		};
		Morebits.wiki.actionCompleted.redirect = userTalkPage;
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'完成，将在几秒后加载用户讨论页',
			'完成，將在幾秒後載入使用者討論頁'
		);
		const ysarxiv_page = new Morebits.wiki.page(userTalkPage, window.wgULS('用户讨论页修改', '使用者討論頁修改'));
		ysarxiv_page.setCallbackParameters(params);
		ysarxiv_page.load(Twinkle.block.callback.main);
	};
	Twinkle.block.callback.closeRequest = (vipPage) => {
		const params = vipPage.getCallbackParameters();
		let text = vipPage.getPageText();
		const statusElement = vipPage.getStatusElement();
		const userName = mw.config.get('wgRelevantUserName');
		const expiryText = Morebits.string.formatTime(params.expiry);
		const comment = `{{Blocked|${Morebits.string.isInfinity(params.expiry) ? 'indef' : expiryText}}}。`;
		const requestList = text.split(/(?=\n===.+===\s*\n)/);
		let found = false;
		let hidename = false;
		const vipRe = new RegExp(
			`{{\\s*[Vv]andal\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.pageNameRegex(
				userName
			)}\\s*(\\|\\s*hidename\\s*=[^|]+)?}}`,
			'm'
		);
		for (let i = 1; i < requestList.length; i++) {
			if (vipRe.exec(requestList[i])) {
				hidename = /\|\s*hidename\s*=[^|]+/.test(requestList[i]);
				requestList[i] = requestList[i].trimEnd();
				let newText = requestList[i].replace(
					/^(\*\s*处理：)[ \t]*(<!-- 非管理員僅可標記已執行的封禁，針對提報的意見請放在下一行 -->)?[ \t]*$/m,
					`$1${comment}--~~`.concat('~~')
				);
				if (requestList[i] === newText) {
					newText = `${requestList[i]}\n* 处理：${comment}--~~`.concat('~~');
				}
				requestList[i] = `${newText}\n`;
				found = true;
				break;
			}
		}
		if (!found) {
			statusElement.warn(window.wgULS('没有找到相关的请求', '沒有找到相關的請求'));
			return;
		}
		text = requestList.join('');
		let summary;
		if (hidename) {
			summary = window.wgULS('标记为已处理', '標記為已處理');
		} else {
			summary = `/* ${userName} */ `;
			if (Morebits.string.isInfinity(params.expiry)) {
				summary += window.wgULS('不限期封禁', '不限期封鎖');
			} else {
				summary += window.wgULS('封禁', '封鎖') + expiryText;
			}
		}
		vipPage.setEditSummary(summary);
		vipPage.setChangeTags(Twinkle.changeTags);
		vipPage.setPageText(text);
		vipPage.save();
	};
	Twinkle.block.callback.getBlockNoticeWikitext = (params) => {
		let text = '{{';
		const settings = Twinkle.block.blockPresetsInfo[params.template];
		if (settings.nonstandard) {
			text += params.template;
		} else {
			text += 'subst:'.concat(params.template);
			if (params.article && settings.pageParam) {
				text += `|page=${params.article}`;
			}
			if (!/te?mp|^\s*$|min/.exec(params.expiry)) {
				if (params.indefinite) {
					text += '|indef=yes';
				} else if (!params.blank_duration) {
					// No expiry checks
					// Block template wants a duration, not date
					text += `|time=${Morebits.string.formatTime(params.expiry)}`; // formatTime
				}
			}
			if (!Twinkle.block.isRegistered && !params.hardblock) {
				text += '|anon=yes';
			}
			if (params.reason) {
				text += `|reason=${params.reason}`;
			}
			if (params.disabletalk) {
				text += '|notalk=yes';
			}
			// Currently, all partial block templates are "standard"
			// Building the template, however, takes a fair bit of logic
			if (params.partial) {
				if (params.pagerestrictions.length || params.namespacerestrictions.length) {
					const makeSentence = (array) => {
						if (array.length < 3) {
							return array.join('和');
						}
						const last = array.pop();
						return `${array.join('、')}和${last}`;
					};
					text += '|area=某些';
					if (params.pagerestrictions.length) {
						text += `頁面（${makeSentence(
							params.pagerestrictions.map((p) => {
								return `[[:${p}]]`;
							})
						)}`;
						text += params.namespacerestrictions.length ? '）和某些' : '）';
					}
					if (params.namespacerestrictions.length) {
						// 1 => Talk, 2 => User, etc.
						const namespaceNames = params.namespacerestrictions.map((id) => {
							return menuFormattedNamespaces[id];
						});
						text += `${
							window.wgULS('[[Help:命名空间|命名空间]]（', '[[Help:命名空間|命名空間]]（') +
							makeSentence(namespaceNames)
						}）`;
					}
				} else if (params.area) {
					text += `|area=${params.area}`;
				} else {
					if (params.noemail) {
						text += '|email=yes';
					}
					if (params.nocreate) {
						text += '|accountcreate=yes';
					}
				}
			}
		}
		if (settings.sig) {
			text += `|sig=${settings.sig}`;
		}
		return `${text}}}`;
	};
	Twinkle.block.callback.main = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const date = new Morebits.date(pageobj.getLoadTime());
		const {messageData} = params;
		let text;
		params.indefinite = Morebits.string.isInfinity(params.expiry);
		if (Twinkle.getPref('blankTalkpageOnIndefBlock') && params.template !== 'uw-lblock' && params.indefinite) {
			Morebits.status.info(
				window.wgULS('信息', '資訊'),
				window.wgULS(
					'根据参数设置清空讨论页并为日期创建新2级标题',
					'根據偏好設定清空討論頁並為日期建立新2級標題'
				)
			);
			text = `${date.monthHeader()}\n`;
		} else {
			text = pageobj.getPageText();
			const dateHeaderRegex = date.monthHeaderRegex();
			let dateHeaderRegexLast;
			let dateHeaderRegexResult;
			while ((dateHeaderRegexLast = dateHeaderRegex.exec(text)) !== null) {
				dateHeaderRegexResult = dateHeaderRegexLast;
			}
			// If dateHeaderRegexResult is null then lastHeaderIndex is never checked. If it is not null but
			// \n== is not found, then the date header must be at the very start of the page. lastIndexOf
			// returns -1 in this case, so lastHeaderIndex gets set to 0 as desired.
			const lastHeaderIndex = text.lastIndexOf('\n==') + 1;
			if (text.length > 0) {
				text += '\n\n';
			}
			if (!dateHeaderRegexResult || dateHeaderRegexResult.index !== lastHeaderIndex) {
				Morebits.status.info(
					window.wgULS('信息', '資訊'),
					window.wgULS('未找到当月的二级标题，将创建新的', '未找到當月的二級標題，將建立新的')
				);
				text += `${date.monthHeader()}\n`;
			}
		}
		params.expiry = params.template_expiry === undefined ? params.expiry : params.template_expiry;
		text += Twinkle.block.callback.getBlockNoticeWikitext(params);
		// build the edit summary
		let summary = params.usertalk_summary;
		if (messageData.suppressArticleInSummary !== true && params.article) {
			summary += `${window.wgULS('，于', '，於')}[[:${params.article}]]`;
		}
		pageobj.setPageText(text);
		pageobj.setEditSummary(summary);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('watchBlockNotices'));
		pageobj.save();
	};
	Twinkle.addInitCallback(Twinkle.block, 'block');
})(jQuery);
