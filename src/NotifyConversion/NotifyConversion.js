/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-notifyConversion.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/NotifyConversion>
 * @dependency ext.gadget.Ding, mediawiki.storage, mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

(function notifyConversion() {
  var gadgetName = 'ext.gadget.NotifyConversion';
  // 只在浏览页面时显示
  if (mw.config.get('wgAction') !== 'view') {
    return;
  }
  // 是否点过“不再提示”
  if (mw.storage.get(gadgetName) === 'hide') {
    return;
  }
  var ding = function ding(value) {
    var autoHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';
    autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
  };
  var messageHans = '您现在使用的中文变体可能会影响一些词语繁简转换的效果。建议您根据您的偏好切换到下列变体之一：$1。（<a id="nc-conversion-donotshow" class="nc-conversion-link" href="#">下次不再提示</a> | <a id="nc-conversion-showmore" class="nc-conversion-link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）';
  var messageHant = '您現在使用的中文變體可能會影響一些詞語繁簡轉換的效果。建議您根據您的偏好切換到下列變體之一：$1。（<a id="nc-conversion-donotshow" class="nc-conversion-link" href="#">下次不再提示</a> | <a id="nc-conversion-showmore" class="nc-conversion-link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）';
  var variantLinks = '中国大陆简体、中國香港繁體、中國澳門繁體、马来西亚简体、新加坡简体、中國臺灣繁體';
  // 注意这里如果 wgUserVariant 是 zh-hans（zh/zh-hant 同理），有多种可能：
  // (1) 登录用户在参数设定里把内容语言变种设成了 zh-hans；
  // (2) 用户自己在 URL 后面添加了 ?variant=zh-hans 或者 ?uselang=zh-hans 的参数；
  // (3) URL 是 /zh-hans/example 而不是 /wiki/example。
  // 我们这里只针对 (1) 和 (3) 的情况通知用户。
  // 对于 (2)，我们认为这样做的用户不是新手（例如在技术测试），不进行提示。
  // 所以，我们使用正则截取 URL //www.qiuwenbaike.cn/zh-hans/ 中的 zh-hans 部分，
  // 这样做是为了最大程度地保留 URL 中原有的参数（如查看日志时或其他小工具），只替换变体部分。
  // 如果这个部分是 / 的话，说明目前 URL 是 /index.php?title=x 的形式，也不进行提示。
  var url = location.href;
  var urlRegex = /(\/\/[^/]+\/)([^/]+)(\/)/;
  if (mw.util.getParamValue('variant') || mw.util.getParamValue('uselang')) {
    return;
  }
  if (!(url.indexOf('/zh/') !== -1) && !(url.indexOf('/zh-hans/') !== -1) && !(url.indexOf('/zh-hant/') !== -1)) {
    return;
  }
  var makeLinks = function makeLinks() {
    return variantLinks.replace('中国大陆简体', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-cn$3'), "\">\u4E2D\u56FD\u5927\u9646\u7B80\u4F53</a>")).replace('中國香港繁體', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-hk$3'), "\">\u4E2D\u570B\u9999\u6E2F\u7E41\u9AD4</a>")).replace('中國澳門繁體', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-mo$3'), "\">\u4E2D\u570B\u6FB3\u9580\u7E41\u9AD4</a>")).replace('马来西亚简体', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-my$3'), "\">\u9A6C\u6765\u897F\u4E9A\u7B80\u4F53</a>")).replace('新加坡简体', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-sg$3'), "\">\u65B0\u52A0\u5761\u7B80\u4F53</a>")).replace('中國臺灣繁體', "<a class=\"nc-conversion-link\" href=\"".concat(url.replace(urlRegex, '$1zh-tw$3'), "\">\u4E2D\u570B\u81FA\u7063\u7E41\u9AD4</a>"));
  };
  // 根据简繁体显示不同提示文字
  var userlang = mw.config.get('wgUserVariant');
  if (url.indexOf('/zh/') !== -1 || url.indexOf('/zh-hans/') !== -1 || userlang === 'zh' || userlang === 'zh-hans') {
    ding("<span class=\"nc-conversion\">".concat(messageHans, "</span>").replace('$1', makeLinks()), false);
  } else if (url.indexOf('/zh-hant/') !== -1 || userlang === 'zh-hant') {
    ding("<span class=\"nc-conversion\">".concat(messageHant, "</span>").replace('$1', makeLinks()), false);
  }
  // 点击“不再提示”，在LocalStorage添加条目
  $('#nc-conversion-donotshow').on('click', function (event) {
    event.preventDefault();
    if (mw.config.get('wgUserGroups').indexOf('user') !== -1) {
      // 登录用户直接停用小工具
      var api = new mw.Api({
        ajax: {
          headers: {
            'Api-User-Agent': "Qiuwen/1.1 (NotifyConversion/1.1; ".concat(mw.config.get('wgWikiID'), ")")
          }
        }
      });
      api.saveOption('gadget-NotifyConversion', '0').fail(function () {
        mw.storage.set(gadgetName, 'hide');
      });
    } else {
      mw.storage.set(gadgetName, 'hide');
    }
    $('.nc-conversion').parent().hide();
  });
  $('#nc-conversion-showmore').on('click', function (event) {
    // 不触发上层 onclick 事件（即点击该链接不会关闭横幅）
    // 预期用户点击“了解更多”后会返回来继续切换变体
    event.stopPropagation();
  });
})();
/* </nowiki> */
