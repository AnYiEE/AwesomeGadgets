const {wgULS} = window;

const COMMON_SUMMARIES_LABEL: string = wgULS('常用编辑摘要', '常用編輯摘要');

const COMMON_SUMMARIES: string[] = [
	wgULS('新页面', '新頁面'),
	wgULS('修正语法错误', '修正語法錯誤'),
	wgULS('修正错别字', '修正錯別字'),
	wgULS('修正格式', '修正格式'),
	wgULS('移除破坏', '移除破壞'),
	wgULS('移除测试编辑', '移除測試編輯'),
	wgULS('移除未经解释的内容移除', '移除未經解釋的內容移除'),
];
const ARTICLE_SUMMARIES: string[] = [
	wgULS('扩写条目', '擴寫條目'),
	wgULS('调整来源', '調整來源'),
	wgULS('调整内部链接', '调整內部連結'),
	wgULS('调整外部链接', '調整外部連結'),
	wgULS('调整格式', '調整格式'),
	wgULS('调整分类', '調整分類'),
	wgULS('删除无来源内容', '刪除無來源內容'),
];
const TALKPAGE_SUMMARIES: string[] = [
	wgULS('回复', '回覆'),
	wgULS('评论', '評論'),
	wgULS('意见', '意見'),
	wgULS('请求', '請求'),
];

export {COMMON_SUMMARIES_LABEL, COMMON_SUMMARIES, ARTICLE_SUMMARIES, TALKPAGE_SUMMARIES};
