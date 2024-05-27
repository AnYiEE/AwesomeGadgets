import {WG_USER_LANGUAGE} from './constant';

export const toolsRedirectMessages = (): void => {
	if (['zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'].includes(WG_USER_LANGUAGE)) {
		mw.messages.set({
			'toolsredirect-btntitle': '重新導向',
			'toolsredirect-btndesc': '創建和管理此頁面的重新導向',
			'toolsredirect-dlgtitle': '創建和管理重新導向',
			'toolsredirect-rediloading': '數據加載中，請稍候……',
			'toolsredirect-rediedit': '編輯',
			'toolsredirect-selectall': '全選',
			'toolsredirect-selectinverse': '反選',
			'toolsredirect-tabviewtitle': '查看',
			'toolsredirect-tabviewdesc': '以下是指向此頁面的重新導向頁：',
			'toolsredirect-tabviewnotfound': '沒有找到任何指向此頁面的重新導向頁。',
			'toolsredirect-tabviewmulti': '多重',
			'toolsredirect-tabviewfix': '修復',
			'toolsredirect-fixloading': '請稍候，正在自動修復重新導向……',
			'toolsredirect-fixtext': '#REDIRECT [[$1]]',
			'toolsredirect-fixsummary': '編輯工具：修復多重重新導向',
			'toolsredirect-tabcreatetitle': '創建',
			'toolsredirect-tabcreatedesc': '以下是尚未創建的重新導向頁：',
			'toolsredirect-tabcreatenotfound': '沒有找到可以創建的重新導向頁。',
			'toolsredirect-tabcreateall': '全部創建',
			'toolsredirect-createloading': '請稍候，正在自動創建重新導向……',
			'toolsredirect-createtext': '#REDIRECT [[$1]]',
			'toolsredirect-createsummary': '編輯工具：自動創建重新導向到[[$1]]',
			'toolsredirect-errcycleredirect': '無法自動修復：發現循環重新導向',
			'toolsredirect-refresh': '刷新',
		});
	} else {
		mw.messages.set({
			'toolsredirect-btntitle': '重定向',
			'toolsredirect-btndesc': '创建和管理此页面的重定向',
			'toolsredirect-dlgtitle': '创建和管理重定向',
			'toolsredirect-rediloading': '数据加载中，请稍候……',
			'toolsredirect-rediedit': '编辑',
			'toolsredirect-selectall': '全选',
			'toolsredirect-selectinverse': '反选',
			'toolsredirect-tabviewtitle': '查看',
			'toolsredirect-tabviewdesc': '以下是指向此页面的重定向页：',
			'toolsredirect-tabviewnotfound': '没有找到任何指向此页面的重定向页。',
			'toolsredirect-tabviewmulti': '多重',
			'toolsredirect-tabviewfix': '修复',
			'toolsredirect-fixloading': '请稍候，正在自动修复重定向……',
			'toolsredirect-fixtext': '#REDIRECT [[$1]]',
			'toolsredirect-fixsummary': '编辑工具：修复多重重定向',
			'toolsredirect-tabcreatetitle': '创建',
			'toolsredirect-tabcreatedesc': '以下是尚未创建的重定向页：',
			'toolsredirect-tabcreatenotfound': '没有找到可以创建的重定向页。',
			'toolsredirect-tabcreateall': '全部创建',
			'toolsredirect-createloading': '请稍候，正在自动创建重定向……',
			'toolsredirect-createtext': '#REDIRECT [[$1]]',
			'toolsredirect-createsummary': '编辑工具：自动创建重定向到[[$1]]',
			'toolsredirect-errcycleredirect': '无法自动修复：发现循环重定向',
			'toolsredirect-refresh': '刷新',
		});
	}
};
