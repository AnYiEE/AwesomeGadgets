/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-easy-archive.js>
 * @base <https://meta.wikimedia.org/w/index.php?oldid=18915644>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/EasyArchive>
 * @dependency ext.gadget.Ding
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
var _objectHasOwn = function (object, property) {
  if (typeof object === 'undefined' || object === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  return Object.prototype.hasOwnProperty.call(Object(object), property);
};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function easyArchive(_window, _window$easy_archive, _window$easy_archive2, _window$easy_archive3) {
  if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgPageName') === '有兽档案馆:首页') {
    return;
  }
  (_window$easy_archive = (_window = window).easy_archive) !== null && _window$easy_archive !== void 0 ? _window$easy_archive : _window.easy_archive = {};
  // minified code dependency functions
  var Pare_str = /*#__PURE__*/function () {
    function Pare_str(pare_string, config) {
      _classCallCheck(this, Pare_str);
      this.str = pare_string;
      this.left = '(';
      this.delim = ':';
      this.right = ')';
      if (typeof config !== 'string') {
        config = String(config);
      }
      if (pare_string.length > 6 && /[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) && !(config.indexOf('ignore-set') !== -1)) {
        this.left = pare_string[4];
        this.delim = pare_string[5];
        this.right = pare_string[6];
        if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
          throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
        }
      }
    }
    _createClass(Pare_str, [{
      key: "find",
      value: function find(lookup_key) {
        lookup_key = this.left + lookup_key + this.delim;
        if (!(this.str.indexOf(lookup_key) !== -1)) {
          return null;
        }
        return this.str.split(lookup_key)[1].split(this.right)[0];
      }
    }]);
    return Pare_str;
  }(); // common repo.
  var expose = function () {
    var global = {
      api: "".concat(mw.config.get('wgScriptPath'), "/api.php"),
      page_name: mw.config.get('wgPageName'),
      user_name: mw.config.get('wgUserName'),
      user_page: "User:".concat(mw.config.get('wgUserName')),
      user_talk: "User_talk:".concat(mw.config.get('wgUserName')),
      csrfToken: undefined
    };
    var asyncPost = function asyncPost(url, body, callback) {
      var ajax = new XMLHttpRequest();
      ajax.addEventListener('readystatechange', callback);
      ajax.open('POST', url, true);
      ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      ajax.send(body);
    };
    var loadTokenSilently = function loadTokenSilently() {
      var callback = function callback() {
        if (this.readyState === 4) {
          global.csrfToken = JSON.parse(this.responseText).query.tokens.csrftoken;
        }
      };
      var queryParam = 'action=query&meta=tokens&format=json';
      asyncPost(global.api, queryParam, callback);
      setTimeout(loadTokenSilently, 18e5);
    };
    loadTokenSilently();
    var takeToken = function takeToken() {
      if (global.csrfToken) {
        return global.csrfToken;
      }
      loadTokenSilently();
      return false;
    };
    var getPage = function getPage(page_name, callback) {
      var z = 'action=query&prop=revisions&rvprop=ids|flags|timestamp|user|userid|size|comment|tags|content&format=json&titles=';
      asyncPost(global.api, z + encodeURIComponent(page_name), callback);
    };
    var getPageSection = function getPageSection(page_name, section, callback) {
      var queryParam = 'action=query&prop=revisions&rvprop=content&format=json&titles=';
      asyncPost(global.api, "".concat(queryParam + encodeURIComponent(page_name), "&rvsection=").concat(encodeURIComponent(section)), callback);
    };
    var pickPageContent = function pickPageContent(response_text) {
      if (typeof response_text === 'string') {
        var data = JSON.parse(response_text);
        if (_typeof(data) === 'object') {
          for (var page in data.query.pages) {
            if (!_objectHasOwn(data.query.pages, page)) {
              continue;
            }
            var c = data.query.pages[page];
            return c.revisions[0]['*'];
          }
        } else {
          return false;
        }
      } else {
        // from now on pick functions will only work with string inputs. DO NOT parse pages before passing them into pick functions.
        return false;
      }
    };
    var tellPageExist = function tellPageExist(response_text) {
      var data;
      try {
        data = JSON.parse(response_text);
      } catch (_unused) {
        return false;
      }
      if (_typeof(data) !== 'object' || !('query' in data) || !('pages' in data.query) || -1 in data.query.pages) {
        return false;
      }
      return true;
    };
    var edit = function edit(page_name, text, summary, token, callback) {
      var _callback = typeof callback === 'function' ? function () {
        if (this.readyState === 4) {
          callback();
        }
      } : function () {}; // from now on, f is definable.
      if (!token) {
        token = takeToken();
      }
      var query_param = 'action=edit&format=json&title=';
      asyncPost(global.api, "".concat(query_param + encodeURIComponent(page_name), "&text=").concat(encodeURIComponent(text), "&summary=").concat(encodeURIComponent(summary), "&token=").concat(encodeURIComponent(token)), _callback);
    };
    var editPro = function editPro(page_name, section, text, summary, token, callback) {
      // ding("Requesting page edit for: "+a+" in section: "+b+" Summary: "+d,1);
      var _callback = typeof callback === 'function' ? function () {
        if (this.readyState === 4) {
          callback();
        }
      } : function () {};
      var query_param = 'action=edit&format=json&title=';
      asyncPost(global.api, "".concat(query_param + encodeURIComponent(page_name), "&section=").concat(encodeURIComponent(section), "&text=").concat(encodeURIComponent(text), "&summary=").concat(encodeURIComponent(summary), "&token=").concat(encodeURIComponent(token)), _callback);
    };
    var editAppend = function editAppend(a, b, c, d, fn) {
      var f = function f() {
        if (this.readyState === 4) {
          var original_content = tellPageExist(this.responseText) === false ? '' : pickPageContent(this.responseText);
          edit(a, String(original_content) + b, c, d, fn);
        }
      };
      getPage(a, f);
    };
    var archive_section = function archive_section(page_name, section, to, callback, summary) {
      getPageSection(page_name, section, function () {
        var doneness = 0;
        var done = function done() {
          doneness++;
          if (doneness === 2) {
            callback();
          }
        };
        if (this.readyState === 4) {
          editAppend(to, "\n\n".concat(pickPageContent(this.responseText)), summary, takeToken(), done);
          editPro(page_name, section.toString(), '', summary, takeToken(), done);
        }
      });
    };
    var delete_section = function delete_section(page_name, section, callback, summary) {
      editPro(page_name, section.toString(), '', summary, takeToken(), callback);
    };
    return {
      archive_section: archive_section,
      delete_section: delete_section
    };
  }();
  // default settings:
  window.easy_archive.settings_string = '#set%|?									\n' + 'display section delete link	%sec-del|1?	\n' + 'display section archive line	%sec-arc|1?	\n' + 'display control bar at top	%top-bar|0?	\n' + 'archive location				%arc-loc|?	\n' + 'subsection effectiveness		%sub-sec|2?	\n' + 'confirm action				%confirm|0?	\n' + 'is this data initialized		%data-init|0? \n';
  window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  window.easy_archive.my_user_talk = null;
  (_window$easy_archive3 = (_window$easy_archive2 = window.easy_archive).never_enable_on_these_pages_regex) !== null && _window$easy_archive3 !== void 0 ? _window$easy_archive3 : _window$easy_archive2.never_enable_on_these_pages_regex = [];
  window.easy_archive.dis_support_these_pages_regex = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  var settings_span_collection = document.querySelectorAll('.easy_archive_data_point_collection');
  var _settings_span_collec = _slicedToArray(settings_span_collection, 1),
    settings_span = _settings_span_collec[0];
  var settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str('');
  if (settings.find('data-init') === '1') {
    window.easy_archive.settings_string = settings_span.innerHTML;
    window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  }
  // identify if Easy Archive can be used on the page - compatibility
  window.easy_archive.on_user_talk = mw.config.get('wgNamespaceNumber') === 3;
  window.easy_archive.my_user_talk = window.easy_archive.on_user_talk && function () {
    var page_name = mw.config.get('wgPageName').split(':');
    page_name[0] = '';
    page_name = page_name.join('');
    var _page_name$split = page_name.split('/');
    var _page_name$split2 = _slicedToArray(_page_name$split, 1);
    page_name = _page_name$split2[0];
    var user_name = mw.config.get('wgUserName');
    return user_name.split('_').join('').split(' ').join('') === page_name.split('_').join('').split(' ').join('');
  }();
  window.easy_archive.has_template = settings.find('data-init') === '1';
  window.easy_archive.others_user_talk = window.easy_archive.my_user_talk === false && window.easy_archive.on_user_talk === true;
  window.easy_archive.on_article = mw.config.get('wgNamespaceNumber') === 0;
  window.easy_archive.on_hist_version = mw.config.get('wgCurRevisionId') - mw.config.get('wgRevisionId') !== 0;
  if (!window.easy_archive.lang) {
    window.easy_archive.lang = {};
  }
  var localize = window.i18n.localize;
  window.easy_archive.lang.delete = localize({
    en: 'delete',
    'zh-hans': '删除',
    'zh-hant': '刪除'
  });
  window.easy_archive.lang.archive = localize({
    en: 'archive',
    'zh-hans': '存档',
    'zh-hant': '存檔'
  });
  window.easy_archive.lang.supports = localize({
    en: 'Easy Archive is enabled on this talk page',
    'zh-hans': '本讨论页面使用 Easy Archive 快速存档',
    'zh-hant': '此頁面使用 Easy Archive'
  });
  window.easy_archive.lang.others_page = localize({
    en: 'Easy Archive is not enabled.',
    'zh-hans': '此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。',
    'zh-hant': '此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。'
  });
  window.easy_archive.lang.to_enable = localize({
    en: 'This page is not using Easy Archive.',
    'zh-hans': '此页面没有启用 Easy Archive。',
    'zh-hant': '本頁没有啟用 Easy Archive。'
  });
  window.easy_archive.lang.enable_on_generic_page = localize({
    en: '<div>This page is not your user talk page. However Easy Archive still can be used if needed.</div><div>To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.</div>',
    'zh-hans': '<div>此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。</div><div>若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。</div>',
    'zh-hant': '<div>此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。</div><div>若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>'
  });
  window.easy_archive.lang.please_enable = localize({
    en: '<div>Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.</div>',
    'zh-hans': '<div>请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。</div>',
    'zh-hant': '<div>請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。</div>'
  });
  window.easy_archive.lang.please_enable_elaborate = localize({
    en: "<div>You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. </div><div>To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.</div>",
    'zh-hans': '<div>您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。</div>',
    'zh-hant': '<div>您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>'
  });
  window.easy_archive.lang.arc_all = localize({
    en: 'Archive all topics',
    'zh-hans': '存档全部讨论',
    'zh-hant': '全部討論存檔'
  });
  window.easy_archive.lang.arc_old_percent = localize({
    en: 'Archive oldest ${1}',
    'zh-hans': '存档最旧${1}',
    'zh-hant': '存檔最舊${1}'
  });
  window.easy_archive.lang.arc_old = localize({
    en: 'Archive oldest ${1} topic${2}',
    // ${2} = 's' if plural
    'zh-hans': '存档最旧${1}个',
    'zh-hant': '存檔最舊${1}個'
  });
  window.easy_archive.lang.arc_all_but = localize({
    en: 'Archive all but ${1} topic${2}',
    // ${2} = 's' if plural
    'zh-hans': '只留下${1}个最新',
    'zh-hant': '只留最新${1}個'
  });
  window.easy_archive.lang.stop_using = localize({
    en: 'Turn off',
    'zh-hans': '停用',
    'zh-hant': '停用'
  });
  window.easy_archive.lang.left_par_split = localize({
    en: ' (',
    zh: '（'
  });
  window.easy_archive.lang.right_par = localize({
    en: ')',
    zh: '）'
  });
  window.easy_archive.lang.full_stop_split = localize({
    en: '. ',
    zh: '。'
  });
  window.easy_archive.lang.archive_path_colon_split = localize({
    en: 'Archive location: ',
    'zh-hans': '存档地址：',
    'zh-hant': '存檔至：'
  });
  window.easy_archive.lang.warning_stop_using = localize({
    en: '<div>Once Easy Archive is turned off, and you want it back on, you\'ll have to turn it on manually.</div><div>Do you want to turn it off? <div style="height:.5em"></div><button onclick="window.easy_archive.turn_off(1)">Yes</button><button onclick="window.easy_archive.elaborate_notice(3163);">No</button></div>',
    'zh-hans': '<div>停用 Easy Archive 后，如要再次启用，只能手工操作。</div><div>要现在停用 Easy Archive 吗？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>',
    'zh-hant': '<div>停用 Easy Archive 後，如要再次啟用，則必須手動重啟。</div><div>要現在停用 Easy Archive 嗎？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>'
  });
  window.easy_archive.lang.stop_manually = localize({
    en: '<div>Cannot turn off Easy Archive automatically. </div><div>To manually discontinue use, delete the template {{Easy Archive|to=[Archive location]}} from this page.</div>',
    'zh-hans': '<div>经过尝试，无法自动停用 Easy Archive。请手动停用。</div><div>请从此页面删除如下模版：{{Easy Archive|to=存档位置}}。</div>',
    'zh-hant': '<div>經過嘗試，無法自動停用 Easy Archive。請手動停用。</div><div>請從本頁刪除以下模板︰{{Easy Archive|to=存檔位置}}。</div>'
  });
  window.easy_archive.lang.loading_section_i = localize({
    en: '<div>Loading section ${1}</div>',
    'zh-hans': '<div>正在读取第 ${1} 节的内容</div>',
    'zh-hant': '<div>正在讀取第 ${1} 節的內容</div>'
  });
  window.easy_archive.lang.deleting_section_i = localize({
    en: '<div>Deleting section ${1}</div>',
    'zh-hans': '<div>正在删除第 ${1} 节的内容</div>',
    'zh-hant': '<div>正在刪除第 ${1} 節的內容</div>'
  });
  window.easy_archive.lang.done_section_i = localize({
    en: '<div>Section ${1} has been archived to ${2}</div>',
    'zh-hans': '<div>已经将第 ${1} 节存档到 ${2}</div>',
    'zh-hant': '<div>已經將第 ${1} 節存檔到 ${2}</div>'
  });
  window.easy_archive.lang.done_deleting_section_i = localize({
    en: '<div>Section ${1} has been deleted</div>',
    'zh-hans': '<div>已经将第 ${1} 节删除</div>',
    'zh-hant': '<div>已經將第 ${1} 節刪除</div>'
  });
  window.easy_archive.lang.being_archived = localize({
    en: 'being archived',
    'zh-hans': '存档中',
    'zh-hant': '存檔中'
  });
  window.easy_archive.lang.being_deleted = localize({
    en: 'being deleted',
    'zh-hans': '删除中',
    'zh-hant': '刪除中'
  });
  window.easy_archive.lang.already_archived = localize({
    en: 'archived',
    'zh-hans': '已存档',
    'zh-hant': '已存檔'
  });
  window.easy_archive.lang.already_deleted = localize({
    en: 'deleted',
    'zh-hans': '已删除',
    'zh-hant': '已刪除'
  });
  window.easy_archive.lang.others_talk_elaborate = localize({
    en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
    'zh-hans': '这是另一名用户的讨论页面，您不能代替另一名用户存档。',
    'zh-hant': '這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。'
  });
  window.easy_archive.lang.page_not_supported = localize({
    en: 'This page is not supported by Easy Archive.',
    'zh-hans': '此页面不支持 Easy Archive。',
    'zh-hant': '此頁面不支持 Easy Archive。'
  });
  window.easy_archive.lang.page_not_supported_elaborate = localize({
    en: '<div>These pages are not supported by Easy Archive: </div><div>File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.</div>',
    'zh-hans': '<div>这些页面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>',
    'zh-hant': '<div>這些頁面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>'
  });
  window.easy_archive.lang.cancelled = localize({
    en: '<div>Cancelled</div>',
    'zh-hans': '<div>已取消</div>',
    'zh-hant': '<div>已取消</div>'
  });
  window.easy_archive.lang.easy_archive_has_been_stopped = localize({
    en: '<div>Easy Archive has been stopped.</div>',
    'zh-hans': '<div>已在此页面停用 Easy Archive。</div>',
    'zh-hant': '<div>已在此頁面停用 Easy Archive。</div>'
  });
  window.easy_archive.lang.clickable_questionmark_split_before = localize({
    en: " (<a href='${1}'>?</a>)",
    'zh-hans': "（<a href='${1}'>？</a>）",
    'zh-hant': "（<a href='${1}'>？</a>）"
  });
  window.easy_archive.lang.problem_with_archive_location_main_space = localize({
    en: '<div>Currently the archive location of this page, "${1}", is under the article namespace, where archives should not be normally directed to. </div><div>Please check if you have the correct archive location.</div>',
    'zh-hans': '<div>此页面目前的存档地址是“${1}”，在条目名称空间之下。</div><div>一般而言不应向条目名称空间进行存档，请检查存档地址。</div>',
    'zh-hant': '<div>此頁面當前的存檔地址是「${1}」，在條目名稱空間之下。</div><div>一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。</div>'
  });
  window.easy_archive.lang.problem_with_archive_location_same_page = localize({
    en: '<div>Currently the archive location of this page, "${1}", is this page itself, Easy archive cannot operate like this. </div>',
    'zh-hans': '<div>此页面目前的存档地址是“${1}”，和此页面名称相同。Easy Archive 无法按此地址存档。</div>',
    'zh-hant': '<div>此頁面當前的存檔地址是「${1}」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。</div>'
  });
  window.easy_archive.lang.archive_summary = localize({
    en: 'archive section',
    'zh-hans': '存档段落',
    'zh-hant': '存檔段落'
  });
  window.easy_archive.lang.delete_summary = localize({
    en: 'delete section',
    'zh-hans': '删除段落',
    'zh-hant': '刪除段落'
  });
  window.easy_archive.lang.turn_off_summary = localize({
    en: 'Disable Easy Archive on this page.',
    'zh-hans': '在此页面停用 Easy Archive。',
    'zh-hant': '在本頁停用 Easy Archive。'
  });
  var looker_upper = function looker_upper(object, namelist) {
    var _iterator = _createForOfIteratorHelper(namelist),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        if (element in object) {
          object = object[element];
        } else {
          return null;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return object;
  };
  var arc_sum = looker_upper(window, ['easy_archive.user_custom_archive_summary']);
  var del_sum = looker_upper(window, ['easy_archive.user_custom_delete_summary']);
  var sanitize_html = function sanitize_html(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
  };
  // multi language selector definition
  var message = function message(tag, para_list) {
    try {
      var content = window.easy_archive.lang[tag];
      for (var has_unfulfilled_para = true, _i = 0; has_unfulfilled_para; _i++) {
        var search = "${".concat(_i + 1, "}");
        if (content.indexOf(search) !== -1) {
          content = para_list[_i] ? content.split(search).join(para_list[_i]) : content.split(search).join('');
        } else {
          has_unfulfilled_para = false;
        }
      }
      return content;
    } catch (_unused2) {
      return '(!) undefined language content';
    }
  };
  var nominal_sections = function (count) {
    var arr = Array.from({
      length: count
    });
    for (var _i = 0; _i < count; _i++) {
      arr[_i] = false;
    }
    return arr;
  }(window.easy_archive.section_count);
  var actual_section = function actual_section(nominal_section_number) {
    var less = 0;
    for (var _i = 0; _i < nominal_section_number; _i++) {
      if (nominal_sections[_i] === true) {
        less++;
      }
    }
    return nominal_section_number - less;
  };
  // ... interface done
  // archiving logic injection
  window.easy_archive.ding = function (text, type, ttl, persist) {
    return window.DingExposedInterface(text, type, ttl, persist);
  };
  var report_doneness_ui = function report_doneness_ui(section_number, doneness_type, to, ongoing_or_done) {
    var tag_ding;
    var tag_section;
    var ding_type;
    var ding_ttl;
    if (ongoing_or_done === 'ongoing') {
      ding_type = 'info';
      ding_ttl = 'long';
      if (doneness_type === 'delete') {
        tag_ding = 'deleting_section_i';
        tag_section = 'being_deleted';
      } else if (doneness_type === 'archive') {
        tag_ding = 'loading_section_i';
        tag_section = 'being_archived';
      }
    } else if (ongoing_or_done === 'done') {
      ding_type = 'success';
      ding_ttl = 3000;
      if (doneness_type === 'delete') {
        tag_ding = 'done_deleting_section_i';
        tag_section = 'already_deleted';
      } else if (doneness_type === 'archive') {
        tag_ding = 'done_section_i';
        tag_section = 'already_archived';
      }
    }
    var actions = {
      ding: function ding() {
        window.easy_archive.ding(message(tag_ding, [section_number.toString(), to]), ding_type, ding_ttl, false);
      },
      section_link: function section_link() {
        var node = document.querySelector(".easy-archive-section-id-span-order-".concat(section_number));
        var pnode = node.parentNode;
        for (var _i = 1; _i < pnode.childNodes.length - 2; _i++) {
          pnode.childNodes[_i].style.display = 'none';
        }
        node.innerHTML = message(tag_section);
        node.style.display = 'inline';
        node.style.color = 'rgb(0 0 0/.5)';
      }
    };
    return actions;
  };
  var delete_section_core = function delete_section_core(section_number, _nominal) {
    var actual_section_number = actual_section(section_number);
    report_doneness_ui(_nominal, 'delete', '', 'ongoing').ding();
    expose.delete_section(mw.config.get('wgPageName'), actual_section_number, function () {
      report_doneness_ui(_nominal, 'delete', '', 'done').ding();
      report_doneness_ui(_nominal, 'delete', '', 'done').section_link();
      nominal_sections[section_number] = true;
    }, del_sum || message('delete_summary'));
  };
  window.easy_archive.delete_section = function (section_number, _nominal) {
    report_doneness_ui(_nominal, 'delete', '', 'ongoing').section_link();
    delete_section_core(section_number, _nominal);
  };
  var archive_section_core = function archive_section_core(section_number, _nominal) {
    var actual_section_number = actual_section(section_number);
    var to = window.easy_archive.settings.find('arc-loc');
    report_doneness_ui(_nominal, 'archive', to, 'ongoing').ding();
    expose.archive_section(mw.config.get('wgPageName'), actual_section_number, to, function () {
      report_doneness_ui(_nominal, 'archive', to, 'done').ding();
      report_doneness_ui(_nominal, 'archive', to, 'done').section_link();
      nominal_sections[section_number] = true;
    }, arc_sum || message('archive_summary'));
  };
  window.easy_archive.archive_section = function (section_number, _nominal) {
    var to = window.easy_archive.settings.find('arc-loc');
    report_doneness_ui(_nominal, 'archive', to, 'ongoing').section_link();
    archive_section_core(section_number, _nominal);
  };
  window.easy_archive.turn_off = function (stage) {
    if (stage === 0) {
      window.easy_archive.elaborate_notice(227);
    } else if (stage === 1) {
      window.easy_archive.elaborate_notice(27);
    }
  };
  window.easy_archive.elaborate_notice = function (notice_tag_acronym) {
    var _notice_tag_dictionar;
    // acronym scheme: refer to qwerty keyboard layout. (p=9)
    var notice_tag_dictionary = {
      27: ['stop_manually', 'warning'],
      227: ['warning_stop_using', 'warning', 'long', false, true],
      933: ['please_enable_elaborate'],
      953: ['others_talk_elaborate'],
      3163: ['cancelled', 'warning', 1000],
      3165: ['easy_archive_has_been_stopped', 'warning', 3000],
      3959: ['enable_on_generic_page'],
      9219: ['problem_with_archive_location_main_space', 'warning', 'long', false, [sanitize_html(window.easy_archive.settings.find('arc-loc'))]],
      9220: ['problem_with_archive_location_same_page', 'warning', 'long', false, [sanitize_html(window.easy_archive.settings.find('arc-loc'))]],
      9623: ['page_not_supported_elaborate']
    };
    var notice_set = (_notice_tag_dictionar = notice_tag_dictionary[notice_tag_acronym]) !== null && _notice_tag_dictionar !== void 0 ? _notice_tag_dictionar : false;
    if (notice_set !== false) {
      var _notice_set$;
      var ntag = notice_set[0];
      var ntype = notice_set[1];
      var nttl = (_notice_set$ = notice_set[2]) !== null && _notice_set$ !== void 0 ? _notice_set$ : 3000;
      var npersist = notice_set[3];
      var nsubst = notice_set[4];
      window.easy_archive.ding(message(ntag, nsubst), ntype, nttl, npersist);
    }
  };
  // real deal here
  // interface injection - prepare
  var i = 0;
  var j = 0;
  var ele;
  var nominal;
  var actual;
  var pipe_html = '<span class="mw-editsection-divider"> | </span>';
  var section_delete_interface_inhibit = window.easy_archive.settings.find('sec-del') === '0' || window.easy_archive.settings.find('data-init') === '0';
  var section_archive_interface_inhibit = window.easy_archive.settings.find('sec-arc') === '0' || window.easy_archive.settings.find('data-init') === '0';
  var section_delete_interface_html;
  var section_archive_interface_html;
  var section_id_span_html = '<span class="easy-archive-section-id-span easy-archive-section-id-span-order-@@" style="display:none">section</span>';
  var footer_info_ele;
  var position_of_insertion;
  if (document.querySelector('#footer-info') || document.querySelectorAll('.page-info')) {
    footer_info_ele = document.querySelector('#footer-info') || document.querySelectorAll('.page-info')[0];
    position_of_insertion = 'afterbegin';
  } else {
    footer_info_ele = {
      insertAdjacentHTML: function insertAdjacentHTML() {}
    };
    position_of_insertion = '';
  }
  // ... interface injection - logic
  var is_in_blacklist = function is_in_blacklist(blacklist) {
    var _iterator2 = _createForOfIteratorHelper(blacklist),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        if (element.test(mw.config.get('wgPageName'))) {
          return true;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return false;
  };
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
    // insert no interface on an article page or a history version.
  } else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
    // insert no interface if the page name is blacklisted.
  } else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    // insert not supported notice if the page name indicates that it is not supported.
    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<div id=\"easy_archive_enable_notice\"><a style=\"color:inherit\" href=\"javascript:window.easy_archive.elaborate_notice(9623)\">".concat(message('page_not_supported'), "</a></div>"));
  } else if (mw.config.get('wgPageName') === window.easy_archive.settings.find('arc-loc')) {
    window.easy_archive.elaborate_notice(9220);
  } else if (window.easy_archive.has_template && !window.easy_archive.others_user_talk) {
    // any page that has template that's not others' talk page. function normally.
    // !! the archive location in main space and needs attention !!
    if (/.+:.+/.test(window.easy_archive.settings.find('arc-loc')) !== true) {
      window.easy_archive.elaborate_notice(9219);
    }
    var normal_function_inject_interface = function normal_function_inject_interface() {
      var editSectionCollection = document.querySelectorAll('.mw-editsection');
      for (i = 0; i < editSectionCollection.length; i++) {
        ele = editSectionCollection[i];
        var ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
        var child_node_number = ve ? 3 : 1;
        if (ele.parentNode.tagName.toLowerCase() === 'h2' && ele.parentNode.id !== 'firstHeading' && decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split('&')[0]) === mw.config.get('wgPageName')) {
          actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split('&')[0], 10);
          nominal = i - j + 1;
          section_delete_interface_html = section_delete_interface_inhibit ? '' : "".concat(pipe_html, "<a href=\"javascript:window.easy_archive.delete_section(").concat(actual, ", ").concat(nominal, ")\">").concat(message('delete'), "</a>");
          section_archive_interface_html = section_archive_interface_inhibit ? '' : "".concat(pipe_html, "<a href=\"javascript:window.easy_archive.archive_section(").concat(actual, ", ").concat(nominal, ")\">").concat(message('archive'), "</a>");
          ele.childNodes[child_node_number].insertAdjacentHTML('afterend', section_delete_interface_html + section_archive_interface_html + section_id_span_html.replace('@@', nominal.toString()));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.insertAdjacentHTML(position_of_insertion, "<div id=\"easy_archive_supports_notice\">".concat(message('supports')).concat(message('left_par_split'), "<a href=\"javascript:window.easy_archive.turn_off(0)\">").concat(message('stop_using'), "</a>").concat(message('right_par')).concat(message('full_stop_split'), "</div>") + "<div id=\"easy_archive_stop_notice\">".concat(message('archive_path_colon_split'), "<a href=\"/wiki/").concat(sanitize_html(window.easy_archive.settings.find('arc-loc')), "\"") + ">".concat(sanitize_html(window.easy_archive.settings.find('arc-loc'))));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    // others user talk.
    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<div id=\"easy_archive_enable_notice\"><a style=\"color:inherit\" href='javascript:window.easy_archive.elaborate_notice(953)'>".concat(message('others_page'), "</a></div>"));
  } else if (window.easy_archive.my_user_talk === false) {
    // a generic page that did not enable easy archive.
    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<div id=\"easy_archive_enable_notice\"><a style=\"color:inherit\" href='javascript:window.easy_archive.elaborate_notice(3959)'>".concat(message('to_enable'), "</a></div>"));
  } else {
    // then assert: (window.easy_archive.my_user_talk === true), (window.easy_archive.has_template === false).
    // my user talk -- installed easy archive but lacking template.
    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<div id=\"easy_archive_enable_notice\"><a style=\"color:inherit\" href='javascript:window.easy_archive.elaborate_notice(933)'>".concat(message('please_enable'), "</a></div>"));
  }
  if (mw.config.get('skin') === 'citizen') {
    $('#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice').replaceWith(function () {
      var $this = $(this);
      return $('<section>').addClass('page-info__item').attr('id', $this.attr('id')).html($this.html());
    });
    mw.util.addCSS('.easy-archive-section-id-span{font-size:.875rem;margin:0 .5rem}');
  }
  if (['vector', 'vector-2022', 'gongbi', 'write'].indexOf(mw.config.get('skin')) !== -1 || document.querySelector('ul#footer-info')) {
    $('#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice').replaceWith(function () {
      var $this = $(this);
      return $('<li>').attr('id', $this.attr('id')).html($this.html());
    });
  }
  mw.util.addCSS('.ve-activated #easy_archive_enable_notice,.ve-activated #easy_archive_stop_notice,.ve-activated #easy_archive_supports_notice{display:none}');
})();

/* </nowiki> */
