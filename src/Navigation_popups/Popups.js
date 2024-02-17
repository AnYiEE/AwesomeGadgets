/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-popups.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Popups>
 * @dependency ext.gadget.i18n
 */
$(function popupsLoader() {
  var _i18n = i18n,
    localize = _i18n.localize;
  // The following translated strings is based on <zh.wikipedia.org/w/index.php?title=User:Lupin/strings-draft&oldid=579996170>
  // Translatable strings
  window.popupStrings = {
    // summary data, searching etc.
    article: localize({
      'zh-hans': '条目',
      'zh-hant': '條目'
    }),
    category: localize({
      'zh-hans': '个分类',
      'zh-hant': '個分類'
    }),
    categories: localize({
      'zh-hans': '个分类',
      'zh-hant': '個分類'
    }),
    image: localize({
      'zh-hans': '个文件',
      'zh-hant': '個檔案'
    }),
    images: localize({
      'zh-hans': '个文件',
      'zh-hant': '個檔案'
    }),
    stub: '小作品',
    'section stub': localize({
      'zh-hans': '小章节',
      'zh-hant': '小章節'
    }),
    'Empty page': localize({
      'zh-hans': '空页面',
      'zh-hant': '空頁面'
    }),
    kB: localize({
      'zh-hans': '千字节<sub>（以1000为一进）</sub>',
      'zh-hant': '千位元組<sub>（以1000為一進）</sub>'
    }),
    bytes: localize({
      'zh-hans': '字节',
      'zh-hant': '位元組'
    }),
    day: '天',
    days: '天',
    hour: localize({
      'zh-hans': '小时',
      'zh-hant': '小時'
    }),
    hours: localize({
      'zh-hans': '小时',
      'zh-hant': '小時'
    }),
    minute: '分',
    minutes: '分',
    second: '秒',
    seconds: '秒',
    week: '周',
    weeks: '周',
    month: '月',
    months: '月',
    year: '年',
    years: '年',
    search: localize({
      'zh-hans': '搜索',
      'zh-hant': '搜尋'
    }),
    SearchHint: localize({
      'zh-hans': '搜索包含 %s 的页面',
      'zh-hant': '搜尋包含 %s 的頁面'
    }),
    web: 'Bing',
    global: '全域',
    'more...': '更多……',
    // article-related actions and info
    // (some actions also apply to user pages)
    actions: localize({
      'zh-hans': '操作',
      'zh-hant': '動作'
    }),
    // /// view articles and view talk
    popupsMenu: 'Popups',
    'disable previews': localize({
      'zh-hans': '禁用预览',
      'zh-hant': '禁用預覽'
    }),
    togglePreviewsHint: localize({
      'zh-hans': '切换本页 Popups 的预览开关',
      'zh-hant': '切換本頁 Popups 的預覽開關'
    }),
    'toggle previews': localize({
      'zh-hans': '切换预览开关',
      'zh-hant': '切換預覽開關'
    }),
    reset: localize({
      'zh-hans': '复位',
      'zh-hant': '複位'
    }),
    disable: '禁用 Popups',
    disablePopupsHint: localize({
      'zh-hans': '在本页禁用 Popups，刷新页面以重新启用。',
      'zh-hant': '在本頁禁用 Popups，重新整理頁面以重新啟用。'
    }),
    purgePopupsHint: localize({
      'zh-hans': '复位 Popups，清除所有缓存数据。',
      'zh-hant': '複位 Popups，清除所有快取資料。'
    }),
    PopupsHint: localize({
      'zh-hans': '复位 Popups，清除所有缓存数据。',
      'zh-hant': '複位 Popups，清除所有快取資料。'
    }),
    spacebar: '空格',
    view: localize({
      'zh-hans': '查看',
      'zh-hant': '檢視'
    }),
    'view article': localize({
      'zh-hans': '查看条目',
      'zh-hant': '檢視條目'
    }),
    viewHint: localize({
      'zh-hans': '前往 %s',
      'zh-hant': '前往 %s'
    }),
    talk: localize({
      'zh-hans': '讨论',
      'zh-hant': '討論'
    }),
    'talk page': localize({
      'zh-hans': '讨论页',
      'zh-hant': '討論頁'
    }),
    'this&nbsp;revision': localize({
      'zh-hans': '此修订版本',
      'zh-hant': '此修訂版本'
    }),
    'revision %s of %s': localize({
      'zh-hans': '页面 $2 的修订版本 $1',
      'zh-hant': '頁面 $2 的修訂版本 $1'
    }),
    'Revision %s of %s': localize({
      'zh-hans': '页面 $2 的修订版本 $1',
      'zh-hant': '頁面 $2 的修訂版本 $1'
    }),
    'the revision prior to revision %s of %s': localize({
      'zh-hans': '页面 $2 的修订版本 $1 之前的修订版本',
      'zh-hant': '頁面 $2 的修訂版本 $1 之前的修訂版本'
    }),
    'Toggle image size': localize({
      'zh-hans': '点击切换图片大小',
      'zh-hant': '點擊切換圖片大小'
    }),
    del: localize({
      'zh-hans': '删除',
      'zh-hant': '删除'
    }),
    // /// delete, protect, move
    'delete': localize({
      'zh-hans': '删除',
      'zh-hant': '删除'
    }),
    deleteHint: localize({
      'zh-hans': '删除 %s',
      'zh-hant': '删除 %s'
    }),
    undeleteShort: localize({
      'zh-hans': '恢复',
      'zh-hant': '恢復'
    }),
    UndeleteHint: localize({
      'zh-hans': '恢复 %s',
      'zh-hant': '恢復 %s'
    }),
    protect: localize({
      'zh-hans': '保护',
      'zh-hant': '保護'
    }),
    protectHint: localize({
      'zh-hans': '保护 %s',
      'zh-hant': '保護 %s'
    }),
    unprotectShort: localize({
      'zh-hans': '解除',
      'zh-hant': '解除'
    }),
    unprotectHint: localize({
      'zh-hans': '解除对 %s 的保护',
      'zh-hant': '解除對 %s 的保護'
    }),
    move: localize({
      'zh-hans': '移动',
      'zh-hant': '移動'
    }),
    'move page': localize({
      'zh-hans': '移动页面',
      'zh-hant': '移動頁面'
    }),
    MovepageHint: localize({
      'zh-hans': '修改 %s 的标题',
      'zh-hant': '修改 %s 的標題'
    }),
    edit: localize({
      'zh-hans': '编辑',
      'zh-hant': '編輯'
    }),
    // /// edit articles and talk
    'edit article': localize({
      'zh-hans': '编辑条目',
      'zh-hant': '編輯條目'
    }),
    editHint: localize({
      'zh-hans': '修改 %s 的内容',
      'zh-hant': '修改 %s 的內容'
    }),
    'edit talk': localize({
      'zh-hans': '编辑讨论页',
      'zh-hant': '編輯對話頁'
    }),
    'new': localize({
      'zh-hans': '新',
      'zh-hant': '新'
    }),
    'new topic': localize({
      'zh-hans': '新话题',
      'zh-hant': '新話題'
    }),
    newSectionHint: localize({
      'zh-hans': '在 %s 增加新的讨论话题',
      'zh-hant': '在 %s 增加新的討論話題'
    }),
    'null edit': localize({
      'zh-hans': '空编辑',
      'zh-hant': '空編輯'
    }),
    nullEditHint: localize({
      'zh-hans': '进行一次对 %s 的空编辑',
      'zh-hant': '製造一次對 %s 的空編輯'
    }),
    hist: localize({
      'zh-hans': '历史',
      'zh-hant': '歷史'
    }),
    // /// history, diffs, editors, related
    history: localize({
      'zh-hans': '历史',
      'zh-hant': '歷史'
    }),
    historyHint: localize({
      'zh-hans': '%s 的修订历史',
      'zh-hant': '%s 的修訂歷史'
    }),
    last: localize({
      'zh-hans': '之前',
      'zh-hant': '之前'
    }),
    // [[MediaWiki:Last]]
    lastEdit: localize({
      'zh-hans': '最近更改',
      'zh-hant': '最近更改'
    }),
    'show last edit': localize({
      'zh-hans': '最近一次更改',
      'zh-hant': '最新一次修訂'
    }),
    'Show the last edit': localize({
      'zh-hans': '显示最近一次更改的差异',
      'zh-hant': '顯示最新一次修訂的差異'
    }),
    lastContrib: localize({
      'zh-hans': '最近编辑',
      'zh-hant': '最近編輯'
    }),
    'last set of edits': localize({
      'zh-hans': '最近编辑',
      'zh-hant': '最近編輯'
    }),
    lastContribHint: localize({
      'zh-hans': '显示由最后一位编辑者造成的差异',
      'zh-hant': '顯示由最後一位編輯者製造的差異'
    }),
    cur: localize({
      'zh-hans': '当前',
      'zh-hant': '當前'
    }),
    diffCur: localize({
      'zh-hans': '与当前版本的差异',
      'zh-hant': '與目前版本的差異'
    }),
    'Show changes since revision %s': localize({
      'zh-hans': '显示自修订版本 %s 的差异',
      'zh-hant': '顯示自修訂版本 %s 的差異'
    }),
    '%s old': localize({
      'zh-hans': '%s 前的最后版本',
      'zh-hant': '%s 前的最后版本'
    }),
    // as in 4 weeks old
    oldEdit: localize({
      'zh-hans': '旧编辑',
      'zh-hant': '舊編輯'
    }),
    purge: localize({
      'zh-hans': '清除缓存',
      'zh-hant': '清除快取'
    }),
    purgeHint: localize({
      'zh-hans': '清除服务器中 %s 的缓存',
      'zh-hant': '清除伺服器中 %s 的快取'
    }),
    raw: localize({
      'zh-hans': '源代码',
      'zh-hant': '原始碼'
    }),
    rawHint: localize({
      'zh-hans': '查看 %s 的源代码',
      'zh-hant': '檢視 %s 的原始碼'
    }),
    render: localize({
      'zh-hans': '仅正文',
      'zh-hant': '僅正文'
    }),
    renderHint: localize({
      'zh-hans': '显示 %s 的纯HTML解析（仅正文内容）',
      'zh-hant': '顯示 %s 的純HTML解析（僅正文內容）'
    }),
    'Show the edit made to get revision': localize({
      'zh-hans': '显示编辑以得到修订版本',
      'zh-hant': '顯示編輯以得到修訂版本'
    }),
    sinceMe: localize({
      'zh-hans': '自我',
      'zh-hant': '自我'
    }),
    'changes since mine': localize({
      'zh-hans': '自我修订的差异',
      'zh-hant': '自我修訂的差異'
    }),
    sinceMeHint: localize({
      'zh-hans': '显示自我上次修改以来的差异',
      'zh-hant': '顯示自我上次修改以來的差異'
    }),
    "Couldn't find an edit by %s\nin the last %s edits to\n%s": localize({
      'zh-hans': '在 $3 最近 $2 次编辑中找不到 $1 做出的修改',
      'zh-hant': '在 $3 最近 $2 次編輯中找不到 $1 做出的修改'
    }),
    eds: localize({
      'zh-hans': '编辑',
      'zh-hant': '編輯'
    }),
    editors: localize({
      'zh-hans': '编辑者',
      'zh-hant': '編輯者'
    }),
    editorListHint: localize({
      'zh-hans': '列出编辑过 %s 的用户',
      'zh-hant': '列出編輯過 %s 的使用者'
    }),
    related: localize({
      'zh-hans': '相关',
      'zh-hant': '相關'
    }),
    relatedChanges: localize({
      'zh-hans': '相关更改',
      'zh-hant': '相關更改'
    }),
    'related changes': localize({
      'zh-hans': '相关更改',
      'zh-hant': '相關更改'
    }),
    RecentchangeslinkedHint: localize({
      'zh-hans': '显示相关 %s 的修改',
      'zh-hant': '顯示相關 %s 的修改'
    }),
    editOld: localize({
      'zh-hans': '编辑旧版',
      'zh-hant': '編輯舊版'
    }),
    // /// edit old version, or revert
    rv: localize({
      'zh-hans': '回退',
      'zh-hant': '恢復'
    }),
    revert: localize({
      'zh-hans': '回退',
      'zh-hant': '恢復'
    }),
    revertHint: localize({
      'zh-hans': '回退到 %s',
      'zh-hant': '恢復到 %s'
    }),
    undo: localize({
      'zh-hans': '撤销',
      'zh-hant': '撤銷'
    }),
    undoHint: localize({
      'zh-hans': '撤销这次编辑',
      'zh-hant': '撤銷這次編輯'
    }),
    defaultpopupRedlinkSummary: localize({
      'zh-hans': '移除到空页面[[%s]]的链接（Popups）',
      'zh-hant': '移除到空頁面[[%s]]的連結（Popups）'
    }),
    defaultpopupFixDabsSummary: localize({
      'zh-hans': '消歧义[[%s]]到[[%s]]（Popups）',
      'zh-hant': '消歧義[[%s]]到[[%s]]（Popups）'
    }),
    defaultpopupFixRedirsSummary: localize({
      'zh-hans': '忽略从[[%s]]到[[%s]]的重定向（Popups）',
      'zh-hant': '忽略從[[%s]]到[[%s]]的重新導向（Popups）'
    }),
    defaultpopupExtendedRevertSummary: localize({
      'zh-hans': '回退到$2在$1时编辑的修订版本$3（Popups）',
      'zh-hant': '還原到$2在$1時製作的修訂版本$3（Popups）'
    }),
    defaultpopupRevertToPreviousSummary: localize({
      'zh-hans': '回退到修订版本%s的上一个版本（Popups）',
      'zh-hant': '還原到修訂版本%s的上一個版本（Popups）'
    }),
    defaultpopupRevertSummary: localize({
      'zh-hans': '回退到修订版本%s（Popups）',
      'zh-hant': '還原到修訂版本%s（Popups）'
    }),
    defaultpopupQueriedRevertToPreviousSummary: localize({
      'zh-hans': '回退到修订版本$1的上一个版本，由$3在$2时编辑（Popups）',
      'zh-hant': '還原到修訂版本$1的上一個版本，由$3在$2時製作（Popups）'
    }),
    defaultpopupQueriedRevertSummary: localize({
      'zh-hans': '回退到$3在$2时编辑的修订版本$1（Popups）',
      'zh-hant': '還原到$3在$2時製作的修訂版本$1（Popups）'
    }),
    defaultpopupRmDabLinkSummary: localize({
      'zh-hans': '移除到消歧义页[[%s]]的链接（Popups）',
      'zh-hant': '移除到消歧義頁[[%s]]的連結（Popups）'
    }),
    Redirects: localize({
      'zh-hans': '重定向',
      'zh-hant': '重定向'
    }),
    // as in Redirects to ...
    // " to ": localize({ 'zh-hans': "到", 'zh-hant': "到" }),
    // as in Redirects to ...
    'Bypass redirect': localize({
      'zh-hans': '忽略重定向',
      'zh-hant': '忽略重新導向'
    }),
    'Fix this redirect': localize({
      'zh-hans': '修复重定向',
      'zh-hant': '修復重新導向'
    }),
    disambig: localize({
      'zh-hans': '消歧义',
      'zh-hant': '消歧義'
    }),
    // /// add or remove dab etc.
    disambigHint: localize({
      'zh-hans': '消歧义这个链接到 [[%s]]',
      'zh-hant': '消歧義這個連結到 [[%s]]'
    }),
    'Click to disambiguate this link to:': localize({
      'zh-hans': '点击以消歧义这个链接到：',
      'zh-hant': '點擊以消歧義這個連結到：'
    }),
    'remove this link': localize({
      'zh-hans': '移除链接',
      'zh-hant': '移除連結'
    }),
    'remove all links to this page from this article': localize({
      'zh-hans': '移除此条目到这页的所有链接',
      'zh-hant': '移除此條目到這頁的所有連結'
    }),
    'remove all links to this disambig page from this article': localize({
      'zh-hans': '移除此条目到这消歧义的所有链接',
      'zh-hant': '移除此條目到這消歧義的所有連結'
    }),
    mainlink: localize({
      'zh-hans': '主链接',
      'zh-hant': '主連結'
    }),
    // /// links, watch, unwatch
    wikiLink: localize({
      'zh-hans': '个内部链接',
      'zh-hant': '个內部連結'
    }),
    wikiLinks: localize({
      'zh-hans': '个内部链接',
      'zh-hant': '个內部連結'
    }),
    'links here': localize({
      'zh-hans': '链入',
      'zh-hant': '鏈入'
    }),
    whatLinksHere: localize({
      'zh-hans': '链入页面',
      'zh-hant': '鏈入頁面'
    }),
    'what links here': localize({
      'zh-hans': '链入页面',
      'zh-hant': '鏈入頁面'
    }),
    WhatlinkshereHint: localize({
      'zh-hans': '显示链接到 %s 的页面',
      'zh-hant': '顯示連結到 %s 的頁面'
    }),
    unwatchShort: localize({
      'zh-hans': '取消',
      'zh-hant': '取消'
    }),
    watchThingy: localize({
      'zh-hans': '监视',
      'zh-hant': '監視'
    }),
    // called watchThingy because {}.watch is a function
    watchHint: localize({
      'zh-hans': '加入 %s 到我的监视列表',
      'zh-hant': '加入 %s 到我的監視列表'
    }),
    unwatchHint: localize({
      'zh-hans': '从我的监视列表移除 %s',
      'zh-hant': '從我的監視列表移除 %s'
    }),
    'Only found one editor: %s made %s edits': localize({
      'zh-hans': '仅找到一位编者：%s 制造了 %s 次编辑',
      'zh-hant': '僅找到一位編者：%s 製造了 %s 次編輯'
    }),
    '%s seems to be the last editor to the page %s': localize({
      'zh-hans': '%s 看上去是 %s 这页的最后一位编者',
      'zh-hant': '%s 看上去是 %s 這頁的最後一位編者'
    }),
    rss: localize({
      'zh-hans': 'RSS',
      'zh-hant': 'RSS'
    }),
    // diff previews
    'Diff truncated for performance reasons': localize({
      'zh-hans': '出于性能考虑，差异已被截断',
      'zh-hant': '出於效能考慮，差異已被截斷'
    }),
    'Old revision': localize({
      'zh-hans': '旧版本',
      'zh-hant': '舊版本'
    }),
    'New revision': localize({
      'zh-hans': '新版本',
      'zh-hant': '新版本'
    }),
    'Something went wrong :-(': localize({
      'zh-hans': '出问题了 :-(',
      'zh-hant': '出問題了 :-('
    }),
    'Empty revision, maybe non-existent': localize({
      'zh-hans': '空的修订，可能并不存在',
      'zh-hant': '空的修訂，可能並不存在'
    }),
    'Unknown date': localize({
      'zh-hans': '未知日期',
      'zh-hant': '未知日期'
    }),
    // other special previews
    'Empty category': localize({
      'zh-hans': '空的分类',
      'zh-hant': '空的分類'
    }),
    'Category members (%s shown)': localize({
      'zh-hans': '分类成员（%s 显示）',
      'zh-hant': '分類成員（%s 顯示）'
    }),
    'No image links found': localize({
      'zh-hans': '未找到文件链接',
      'zh-hant': '未找到檔案連結'
    }),
    'File links': localize({
      'zh-hans': '文件链接',
      'zh-hant': '檔案連結'
    }),
    'not commons': localize({
      'zh-hans': '维基共享中无此名称的文件。',
      'zh-hant': '維基共享中無此名稱的檔案。'
    }),
    'commons only': localize({
      'zh-hans': '此文件来自维基共享。',
      'zh-hant': '此檔案來自維基共享。'
    }),
    'No image found': localize({
      'zh-hans': '找不到文件',
      'zh-hant': '找不到檔案'
    }),
    'commons dupe': localize({
      'zh-hans': '维基共享中存在此文件的副本。',
      'zh-hant': '維基共享中存在此檔案的副本。'
    }),
    'commons conflict': localize({
      'zh-hans': '维基共享中存在此文件名称不同的副本。',
      'zh-hant': '維基共享中存在此檔名稱不同的副本。'
    }),
    // user-related actions and info
    user: localize({
      'zh-hans': '用户',
      'zh-hant': '使用者'
    }),
    // /// user page, talk, email, space
    'user&nbsp;page': localize({
      'zh-hans': '用户页',
      'zh-hant': '使用者頁'
    }),
    'user talk': localize({
      'zh-hans': '用户讨论',
      'zh-hant': '使用者對話'
    }),
    'edit user talk': localize({
      'zh-hans': '编辑用户讨论',
      'zh-hant': '編輯使用者對話'
    }),
    'leave comment': localize({
      'zh-hans': '留言',
      'zh-hant': '留言'
    }),
    email: localize({
      'zh-hans': '电邮',
      'zh-hant': '電郵'
    }),
    'email user': localize({
      'zh-hans': '电邮用户',
      'zh-hant': '電郵使用者'
    }),
    EmailuserHint: localize({
      'zh-hans': '给 %s 发送电子邮件',
      'zh-hant': '給 %s 發送電子郵件'
    }),
    space: localize({
      'zh-hans': '子页面',
      'zh-hant': '子頁面'
    }),
    // short form for userSpace link
    PrefixindexHint: localize({
      'zh-hans': '显示 %s 的用户页子页面',
      'zh-hant': '顯示 %s 的使用者頁子頁面'
    }),
    count: localize({
      'zh-hans': '统计',
      'zh-hant': '統計'
    }),
    // /// contributions, tree, log
    'edit counter': localize({
      'zh-hans': '编辑次数',
      'zh-hant': '編輯次數'
    }),
    katelinkHint: localize({
      'zh-hans': '%s 的编辑次数',
      'zh-hant': '%s 的編輯次數'
    }),
    contribs: localize({
      'zh-hans': '贡献',
      'zh-hant': '貢獻'
    }),
    contributions: localize({
      'zh-hans': '贡献',
      'zh-hant': '貢獻'
    }),
    deletedContribs: localize({
      'zh-hans': '已删除的贡献',
      'zh-hant': '已刪除的貢獻'
    }),
    ContributionsHint: localize({
      'zh-hans': '%s 的用户贡献',
      'zh-hant': '%s 的使用者貢獻'
    }),
    tree: localize({
      'zh-hans': '树',
      'zh-hant': '樹'
    }),
    contribsTreeHint: localize({
      'zh-hans': '根据名字空间查看 %s 的贡献',
      'zh-hant': '根據命名空間檢視 %s 的貢獻'
    }),
    log: localize({
      'zh-hans': '日志',
      'zh-hant': '日誌'
    }),
    'user log': localize({
      'zh-hans': '用户日志',
      'zh-hant': '使用者日誌'
    }),
    userLogHint: localize({
      'zh-hans': '显示 %s 的用户日志',
      'zh-hant': '顯示 %s 的使用者日誌'
    }),
    unblockShort: localize({
      'zh-hans': '解除',
      'zh-hant': '解除'
    }),
    block: localize({
      'zh-hans': '封禁',
      'zh-hant': '封鎖'
    }),
    'block user': localize({
      'zh-hans': '封禁用户',
      'zh-hant': '封鎖使用者'
    }),
    IpblocklistHint: localize({
      'zh-hans': '解封 %s',
      'zh-hant': '解封 %s'
    }),
    BlockipHint: localize({
      'zh-hans': '封禁 %s',
      'zh-hant': '封鎖 %s'
    }),
    'block log': localize({
      'zh-hans': '封禁日志',
      'zh-hant': '封鎖日誌'
    }),
    blockLogHint: localize({
      'zh-hans': '显示 %s 的封禁日志',
      'zh-hant': '顯示 %s 的封鎖日誌'
    }),
    protectLogHint: localize({
      'zh-hans': '显示 %s 的保护日志',
      'zh-hant': '顯示 %s 的保護日誌'
    }),
    pageLogHint: localize({
      'zh-hans': '显示 %s 的日志',
      'zh-hant': '顯示 %s 的日誌'
    }),
    deleteLogHint: localize({
      'zh-hans': '显示 %s 的删除日志',
      'zh-hant': '顯示 %s 的刪除日誌'
    }),
    'Invalid %s %s': localize({
      'zh-hans': '选项 %s 不可用：%s',
      'zh-hant': '選項 %s 不可用：%s'
    }),
    m: '小',
    // Autoediting
    'Enter a non-empty edit summary or press cancel to abort': localize({
      'zh-hans': '输入编辑摘要，或按取消中止操作',
      'zh-hant': '輸入編輯摘要，或按取消中止操作'
    }),
    'Failed to get revision information, please edit manually.\n\n': localize({
      'zh-hans': '获取修订版本信息失败，请手动修改。\n\n',
      'zh-hant': '獲取修訂版本資訊失敗，請手動修改。\n\n'
    }),
    'The %s button has been automatically clicked. Please wait for the next page to load.': localize({
      'zh-hans': '按钮 %s 已被自动点击，请等待下一个页面加载。',
      'zh-hant': '按鈕 %s 已被自動點擊，請等待下一個頁面載入。'
    }),
    'Could not find button %s. Please check the settings in your javascript file.': localize({
      'zh-hans': '找不到按钮 %s，请检查您 JavaScript 文件中的设置。',
      'zh-hant': '找不到按鈕 %s，請檢查您 JavaScript 檔案中的設定。'
    }),
    // Popups setup
    'Open full-size image': localize({
      'zh-hans': '查看全尺寸图像',
      'zh-hant': '檢視全尺寸影像'
    }),
    zxy: 'zxy',
    // 以下内容由 AnnAngela 补正
    globalSearchHint: localize({
      'zh-hans': '在其他语言搜索“%s”',
      'zh-hant': '在其他語言搜尋「%s」'
    }),
    bingSearchHint: localize({
      'zh-hans': '在 Bing 上搜索“%s”',
      'zh-hant': '在 bing 上搜尋「%s」'
    }),
    'enable previews': localize({
      'zh-hans': '启用预览',
      'zh-hant': '啟用預覽'
    }),
    'show preview': localize({
      'zh-hans': '禁用预览',
      'zh-hant': '禁用預覽'
    }),
    historyfeedHint: localize({
      'zh-hans': '该页面的近期更改 RSS feed',
      'zh-hant': '該頁面的近期更改 RSS feed'
    }),
    'send thanks': localize({
      'zh-hans': '发送感谢',
      'zh-hant': '傳送感謝'
    }),
    ThanksHint: localize({
      'zh-hans': '向该用户发送一封感谢消息',
      'zh-hant': '向該使用者傳送一封感謝訊息'
    }),
    'mark patrolled': localize({
      'zh-hans': '标记为已巡查',
      'zh-hant': '標記為已巡查'
    }),
    markpatrolledHint: localize({
      'zh-hans': '标记该编辑为已巡查',
      'zh-hant': '標記該編輯為已巡查'
    }),
    'Could not marked this edit as patrolled': localize({
      'zh-hans': '无法标记该编辑为已巡查',
      'zh-hant': '無法標記該編輯為已巡查'
    }),
    defaultpopupReviewedSummary: localize({
      'zh-hans': '标记从版本%s到%s间的编辑为已巡查',
      'zh-hant': '標記從版本%s到%s間的編輯為已巡查'
    }),
    'Image from Commons': localize({
      'zh-hans': '来自维基共享的图片',
      'zh-hant': '來自維基共用的圖片'
    }),
    'Description page': localize({
      'zh-hans': '图片描述页',
      'zh-hant': '圖片描述頁'
    }),
    'Alt text:': localize({
      'zh-hans': '替换文本（Alt）：',
      'zh-hant': '替換文字（Alt）：'
    }),
    revdel: localize({
      'zh-hans': '历史版本被隐藏',
      'zh-hant': '歷史版本被隱藏'
    }),
    DeletedcontributionsHint: localize({
      'zh-hans': '用户%s的被删除编辑次数',
      'zh-hant': '使用者%s的被刪除編輯次數'
    }),
    'No backlinks found': localize({
      'zh-hans': '找不到链入页面',
      'zh-hant': '找不到鏈入頁面'
    }),
    ' and more': localize({
      'zh-hans': '以及其他页面',
      'zh-hant': '以及其他頁面'
    }),
    'Download preview data': localize({
      'zh-hans': '下载预览数据',
      'zh-hant': '下載預覽資料'
    }),
    'Not a registered username': localize({
      'zh-hans': '非已注册的用户',
      'zh-hant': '非已註冊的使用者'
    }),
    BLOCKED: localize({
      'zh-hans': '被封禁',
      'zh-hant': '被封鎖'
    }),
    'Has blocks': localize({
      'zh-hans': '被部分封禁',
      'zh-hant': '被部分封鎖'
    }),
    ' edits since: ': localize({
      'zh-hans': '次编辑，注册日期为',
      'zh-hant': '次編輯，註冊日期為'
    }),
    'last edit on ': localize({
      'zh-hans': '最后一次编辑于',
      'zh-hant': '最後一次編輯於'
    }),
    EmailUserHint: localize({
      'zh-hans': '给 %s 发送电子邮件',
      'zh-hant': '給 %s 發送電子郵件'
    }),
    RANGEBLOCKED: localize({
      'zh-hans': 'IP段被封禁',
      'zh-hant': 'IP段被封鎖'
    }),
    'IP user': localize({
      'zh-hans': 'IP用户',
      'zh-hant': 'IP使用者'
    }),
    '♀': '♀',
    '♂': '♂',
    HIDDEN: localize({
      'zh-hans': '全域隐藏',
      'zh-hant': '全域隱藏'
    }),
    LOCKED: localize({
      'zh-hans': '全域锁定',
      'zh-hant': '全域鎖定'
    }),
    'Invalid user': localize({
      'zh-hans': '非法用户名',
      'zh-hant': '非法使用者名稱'
    }),
    diff: localize({
      'zh-hans': '差异',
      'zh-hant': '差異'
    }),
    ' to ': '至',
    autoedit_version: 'np20140416',
    PrefixIndexHint: localize({
      'zh-hans': '显示用户%s的子页面',
      'zh-hant': '顯示使用者%s的子頁面'
    }),
    nullEditSummary: localize({
      'zh-hans': '进行一次零编辑',
      'zh-hant': '進行一次零編輯'
    }),
    // 用户组名称从系统消息获取
    'group-no-autoconfirmed': localize({
      'zh-hans': '非自动确认用户',
      'zh-hant': '非自動確認使用者'
    }),
    separator: '、',
    comma: '，'
  };
  mw.loader.load('/index.php?title=MediaWiki:Gadget-popups-main.js&action=raw&ctype=text/javascript&maxage=86400&smaxage=86400');
});
/* </nowiki> */
