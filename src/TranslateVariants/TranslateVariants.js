/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/TranslateVariants>
 * @dependency ext.gadget.i18n, mediawiki.api, mediawiki.diff.styles, mediawiki.util
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function translateVariants() {
  var TranslateVariantsSummary = '自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）';
  var main = function main() {
    var langs = new Set(['zh', 'zh-hans', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hant', 'zh-hk', 'zh-mo', 'zh-tw']);
    var langname = {
      zh: '原始',
      'zh-hans': '简体',
      'zh-cn': '中国大陆简体',
      'zh-my': '马来西亚简体',
      'zh-sg': '新加坡简体',
      'zh-hant': '繁體',
      'zh-hk': '中國香港繁體',
      'zh-mo': '中國澳門繁體',
      'zh-tw': '中國臺灣繁體'
    };
    var result = {};
    var api = new mw.Api({
      ajax: {
        headers: {
          'Api-User-Agent': "YsArxiv/1.1 (TranslateVariants/1.1; ".concat(mw.config.get('wgWikiID'), ")")
        }
      }
    });
    var basepagetext = '';
    var table = $('<div>').attr('id', 'TranslateVariants').prependTo('#bodyContent');
    var $submitAll = $('<button>').text(window.wgULS('发布所有更改', '發佈所有變更'));
    $submitAll.on('click', function () {
      var $buttons = $('.TranslateVariants-publish-changes');
      if ($buttons.length === 0) {
        mw.notify(window.wgULS('没有任何可以发布的更改', '沒有任何變更可發佈'), {
          tag: 'TranslateVariants',
          type: 'error'
        });
        return;
      }
      if (!confirm("".concat(window.wgULS('更改', '發佈')).concat($buttons.length).concat(window.wgULS('个更改', '個變更'), "\uFF1F"))) {
        mw.notify(window.wgULS('已取消更改', '已取消發佈'), {
          tag: 'TranslateVariants',
          type: 'warn'
        });
        return;
      }
      $buttons.each(function (_index, element) {
        $(element).trigger('click');
      });
    });
    table.append($('<div>').css('text-align', 'right').append($submitAll));
    $('<div>').css('color', '#f00').text(window.wgULS('提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！', '提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！')).appendTo(table);
    var defaultlangs = 'zh,zh-hans,zh-cn,zh-my,zh-sg,zh-hant,zh-hk,zh-mo,zh-tw';
    var runlangs = prompt(window.wgULS('转换以下语言（以逗号隔开）：', '轉換以下語言（以逗號隔開）：'), defaultlangs);
    if (runlangs === null) {
      runlangs = defaultlangs;
    }
    var langqueue = runlangs.split(',').map(function (lang) {
      return lang.trim();
    }).filter(function (lang) {
      return langs.has(lang);
    });
    var process = function process() {
      if (langqueue.length === 0) {
        return;
      }
      var lang = langqueue.shift();
      var diffTable = $('<div>').attr('id', "TranslateVariants-diff-".concat(lang)).appendTo(table);
      $('<hr>').appendTo(table);
      var basename = mw.config.get('wgPageName').replace(/\/zh$/, '');
      var targetTitle = lang === 'zh' ? String(basename) : "".concat(basename, "/").concat(lang);
      var newtext;
      if (lang !== undefined) {
        api.parse("{{NoteTA|G1=IT|G2=MediaWiki}}<div id=\"TVcontent\">".concat(basepagetext, "</div>"), {
          uselang: lang,
          prop: 'text'
        }).then(function (data) {
          newtext = $('<div>').html(data).find('#TVcontent').text();
          var _params = {
            action: 'query',
            prop: 'revisions',
            titles: [targetTitle],
            rvdifftotext: newtext,
            formatversion: '2'
          };
          return api.post(_params);
        }, function (error) {
          mw.notify("\u89E3\u6790".concat(lang).concat(window.wgULS('时发生错误：', '時發生錯誤：')).concat(error), {
            type: 'error',
            tag: 'TranslateVariant'
          });
          return null;
        }).then(function (data) {
          if (data !== null) {
            var tool = $("<div><a href=\"".concat(mw.util.getUrl(targetTitle), "\">").concat(lang, "\uFF08").concat(langname[lang], "\uFF09</a>\uFF08<a href=\"").concat(mw.util.getUrl(targetTitle, {
              action: 'edit'
            }), "\">").concat(window.wgULS('编', '編'), "</a>\uFF09</div>")).appendTo(diffTable);
            var _data$query$pages = _slicedToArray(data['query'].pages, 1),
              page = _data$query$pages[0];
            if (page.missing) {
              var $submit = $('<button>').addClass('TranslateVariants-publish-changes').css('float', 'right').text(window.wgULS('发布页面', '發佈頁面')).appendTo(tool);
              $submit.on('click', function () {
                this.remove();
                api.create(targetTitle, {
                  summary: TranslateVariantsSummary.replace(/\$1/g, mw.config.get('wgPageName'))
                }, newtext).then(function () {
                  mw.notify(window.wgULS('已编辑 ', '已編輯 ') + targetTitle, {
                    type: 'success',
                    tag: 'TranslateVariant'
                  });
                }, function (error) {
                  mw.notify(window.wgULS('编辑', '編輯 ') + targetTitle + window.wgULS(' 发生错误：', ' 發生錯誤：') + error, {
                    type: 'error',
                    tag: 'TranslateVariant'
                  });
                });
              });
              $('<pre>').html(newtext.replace(/[&<>]/gim, function (s) {
                return "&#".concat(s.codePointAt(0), ";");
              })).appendTo(diffTable);
              return;
            }
            var diff = page.revisions[0].diff.body;
            if (diff === '') {
              $('<span>').css('float', 'right').text(window.wgULS('无更改', '無變更')).appendTo(tool);
            } else {
              var _$submit = $('<button>').addClass('TranslateVariants-publish-changes').css('float', 'right').text(window.wgULS('发布更改', '發佈變更')).appendTo(tool);
              _$submit.on('click', function () {
                this.remove();
                api.edit(targetTitle, function () {
                  return {
                    text: newtext,
                    summary: TranslateVariantsSummary.replace(/\$1/g, mw.config.get('wgPageName')),
                    nocreate: false
                  };
                }).then(function () {
                  mw.notify(window.wgULS('已编辑', '已編輯 ') + targetTitle, {
                    type: 'success',
                    tag: 'TranslateVariant'
                  });
                }, function (error) {
                  mw.notify(window.wgULS('编辑', '編輯 ') + targetTitle + window.wgULS(' 发生错误：', ' 發生錯誤：') + error, {
                    type: 'error',
                    tag: 'TranslateVariant'
                  });
                });
              });
              $('<table>').addClass('diff').html(diff).prepend('<colgroup><col class="diff-marker"><col class="diff-content"><col class="diff-marker"><col class="diff-content"></colgroup>').appendTo(diffTable);
            }
          }
        }, function (error) {
          mw.notify(window.wgULS('获取', '取得') + lang + window.wgULS('差异时发生错误：', '差異時發生錯誤：') + error, {
            type: 'error',
            tag: 'TranslateVariant'
          });
        }).always(function () {
          process();
        });
      }
    };
    var params = {
      action: 'query',
      format: 'json',
      formatversion: '2',
      prop: 'revisions',
      titles: [mw.config.get('wgPageName')],
      curtimestamp: true,
      rvprop: ['content', 'timestamp']
    };
    api.get(params).then(function (data) {
      if (!data['query'] || !data['query'].pages) {
        return $.Deferred().reject('unknown');
      }
      var _data$query$pages2 = _slicedToArray(data['query'].pages, 1),
        page = _data$query$pages2[0];
      if (!page || page.invalid) {
        return $.Deferred().reject('invalidtitle');
      }
      if (page.missing) {
        return $.Deferred().reject('nocreate-missing');
      }
      var _page$revisions = _slicedToArray(page.revisions, 1),
        revision = _page$revisions[0];
      return {
        content: revision.content
      };
    }).then(function (_ref) {
      var content = _ref.content;
      var text = content;
      Object.defineProperty(result, 'zh', {
        value: text,
        writable: true
      });
      text = text.replace(/[\s#&'*:<>[\]_{|}]/gim, function (string) {
        return "&#".concat(string.codePointAt(0), ";");
      });
      text = text.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, '$1-{$2}-$3');
      text = text.replace(/-&#123;(.+?)&#125;-/g, function (string) {
        string = string.replace('-&#123;', '-{').replace('-&#123;', '-{').replace('&#125;-', '}-').replace(/&#124;/g, '|').replace(/&#32;/g, ' ').replace(/&#61;/g, '=').replace(/&#62;/g, '>').replace(/&#58;/g, ':');
        return string;
      });
      basepagetext = text;
      process();
    });
  };
  if (/^MediaWiki:[^/]+(\/zh)?$/.test(mw.config.get('wgPageName'))) {
    var link = mw.util.addPortletLink(document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb', '#', window.wgULS('转换变体', '轉換變體'));
    if (link) {
      $(link).on('click', function () {
        this.remove();
        main();
      });
    }
  }
})();
/* </nowiki> */
