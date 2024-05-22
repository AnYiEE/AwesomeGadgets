/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/MarkRights}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/MarkRights/MarkRights.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    responsibleoperator: (0, import_ext_gadget.localize)({
      en: "ResponsibleOperator",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    steward: (0, import_ext_gadget.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    checkuser: (0, import_ext_gadget.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    importer: (0, import_ext_gadget.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autopatrolled: (0, import_ext_gadget.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "优质编辑者",
      "zh-hant": "優質編輯者"
    }),
    eventsponsor: (0, import_ext_gadget.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var groups = {
  // 全站管理型权限
  responsibleoperator: [],
  steward: [],
  checkuser: [],
  suppress: [],
  sysop: [],
  "interface-admin": [],
  templateeditor: [],
  importer: [],
  // 页面管理型权限
  patroller: [],
  autopatrolled: [],
  // 大量操作型权限
  eventsponsor: [],
  "massmessage-sender": [],
  // 确认权限
  confirmed: [],
  autoconfirmed: [],
  // 机器权限
  bot: [],
  flood: [],
  // 豁免
  "ipblock-exempt": [],
  "rnrsverify-exempt": []
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    $userLinks.each((_index, {
      textContent
    }) => {
      const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (userLinkText) {
        users[users.length] = userLinkText;
      }
      users = [...new Set(users)];
      if (users.length === 50) {
        queue[queue.length] = users;
        users = [];
      }
    });
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    const getUsername = (url) => {
      if (!url) {
        return "";
      }
      const username = mw.util.getParamValue("title", url);
      const decode = (string, replace) => {
        return decodeURIComponent((() => {
          try {
            return decodeURIComponent(replace(string));
          } catch {
            return replace(string).replace(/%(?!\d+)/g, "%25");
          }
        })());
      };
      if (username) {
        return decode(username, (string) => {
          return string.replace("User:", "").replace(/_/g, " ");
        });
      }
      const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
      if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
        return decode(usernameMatch[1], (string) => {
          return string.replace(/_/g, " ");
        });
      }
      return "";
    };
    const done = () => {
      $userLinks.each((_index, element) => {
        var _$element$attr;
        const $element = $(element);
        if ($element.parents("li").find(".gadgets-markrights").length) {
          return;
        }
        const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
        if (!username) {
          return;
        }
        const $sups = $("<span>").addClass("gadgets-markrights");
        for (const group in groups) {
          var _groups$group;
          if (!Object.hasOwn(groups, group)) {
            continue;
          }
          const groupsGroup = (_groups$group = groups[group]) !== null && _groups$group !== void 0 ? _groups$group : [];
          if (!groupsGroup.includes(username)) {
            continue;
          }
          const className = "gadgets-markrights__".concat(group);
          if ($sups.find("sup").hasClass(className)) {
            return;
          }
          $sups.append(
            // The following classes are used here:
            // * gadget-markrights__responsibleoperator
            // * gadget-markrights__steward
            // * gadget-markrights__checkuser
            // * gadget-markrights__suppress
            // * gadget-markrights__sysop
            // * gadget-markrights__interface-admin
            // * gadget-markrights__templateeditor
            // * gadget-markrights__importer
            // * gadget-markrights__patroller
            // * gadget-markrights__autopatrolled
            // * gadget-markrights__eventsponsor
            // * gadget-markrights__massmessage-sender
            // * gadget-markrights__confirmed
            // * gadget-markrights__autoconfirmed
            // * gadget-markrights__bot
            // * gadget-markrights__flood
            // * gadget-markrights__ipblock-exempt
            // * gadget-markrights__rnrsverify-exempt
            $("<sup>").addClass(className).attr({
              alt: getMessage(group),
              title: getMessage(group)
            })
          );
        }
        $element.after($sups);
      });
    };
    const api = (0, import_ext_gadget2.initMwApi)("MarkRights/1.1");
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      var _response$query$users, _response$query;
      const ususers = _queue[_i];
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "users",
        usprop: "groups",
        ususers
      };
      const response = yield api.get(params);
      const _users = (_response$query$users = (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.users) !== null && _response$query$users !== void 0 ? _response$query$users : [];
      var _iterator = _createForOfIteratorHelper(_users), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const user = _step.value;
          if (!user || !user.groups) {
            continue;
          }
          for (const group in groups) {
            if (!Object.hasOwn(groups, group)) {
              continue;
            }
            const groupsGroup = groups[group];
            if (user.groups.includes(group)) {
              groupsGroup[groupsGroup.length] = user.name;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      done();
    }
  });
  return function markUserRights2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyIsICJzcmMvTWFya1JpZ2h0cy9NYXJrUmlnaHRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cmVzcG9uc2libGVvcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXNwb25zaWJsZU9wZXJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i0o+S7u+i/kOiQpScsXG5cdFx0XHQnemgtaGFudCc6ICfosqzku7vpgYvnh58nLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfmoaPmoYjnkIbkuovlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qqU5qGI55CG5LqL5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHRpbXBvcnRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9wYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjotKjnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq6LOq57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBncm91cHM6IFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmdbXT4gPSB7XG5cdC8vIOWFqOermeeuoeeQhuWei+adg+mZkFxuXHRyZXNwb25zaWJsZW9wZXJhdG9yOiBbXSxcblx0c3Rld2FyZDogW10sXG5cdGNoZWNrdXNlcjogW10sXG5cdHN1cHByZXNzOiBbXSxcblx0c3lzb3A6IFtdLFxuXHQnaW50ZXJmYWNlLWFkbWluJzogW10sXG5cdHRlbXBsYXRlZWRpdG9yOiBbXSxcblx0aW1wb3J0ZXI6IFtdLFxuXHQvLyDpobXpnaLnrqHnkIblnovmnYPpmZBcblx0cGF0cm9sbGVyOiBbXSxcblx0YXV0b3BhdHJvbGxlZDogW10sXG5cdC8vIOWkp+mHj+aTjeS9nOWei+adg+mZkFxuXHRldmVudHNwb25zb3I6IFtdLFxuXHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogW10sXG5cdC8vIOehruiupOadg+mZkFxuXHRjb25maXJtZWQ6IFtdLFxuXHRhdXRvY29uZmlybWVkOiBbXSxcblx0Ly8g5py65Zmo5p2D6ZmQXG5cdGJvdDogW10sXG5cdGZsb29kOiBbXSxcblx0Ly8g6LGB5YWNXG5cdCdpcGJsb2NrLWV4ZW1wdCc6IFtdLFxuXHQncm5yc3ZlcmlmeS1leGVtcHQnOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXJrVXNlclJpZ2h0cyA9IGFzeW5jICgkY29udGVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICR1c2VyTGlua3M6IEpRdWVyeSA9ICRjb250ZW50LmZpbmQoJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcXVldWU6IEFycmF5PHR5cGVvZiB1c2Vycz4gPSBbXTtcblx0JHVzZXJMaW5rcy5lYWNoKChfaW5kZXg6IG51bWJlciwge3RleHRDb250ZW50fToge3RleHRDb250ZW50OiBzdHJpbmcgfCBudWxsfSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHVzZXJMaW5rVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cdFx0aWYgKHVzZXJMaW5rVGV4dCkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXJMaW5rVGV4dDsgLy8gUmVwbGFjZSBgdXNlcnMucHVzaCh1c2VyTGlua1RleHQpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXHRcdHVzZXJzID0gWy4uLm5ldyBTZXQodXNlcnMpXTtcblx0XHRpZiAodXNlcnMubGVuZ3RoID09PSA1MCkge1xuXHRcdFx0cXVldWVbcXVldWUubGVuZ3RoXSA9IHVzZXJzOyAvLyBSZXBsYWNlIGBxdWV1ZS5wdXNoKHVzZXJzKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0dXNlcnMgPSBbXTtcblx0XHR9XG5cdH0pO1xuXHRpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgcXVldWUucHVzaCh1c2VycylgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXHRjb25zdCBnZXRVc2VybmFtZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKCF1cmwpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgdXJsKTtcblx0XHRjb25zdCBkZWNvZGUgPSAoc3RyaW5nOiBzdHJpbmcsIHJlcGxhY2U6IChfc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHN0cmluZykucmVwbGFjZSgvJSg/IVxcZCspL2csICclMjUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKClcblx0XHRcdCk7XG5cdFx0fTtcblx0XHRpZiAodXNlcm5hbWUpIHtcblx0XHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblx0XHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgZG9uZSA9ICgpOiB2b2lkID0+IHtcblx0XHQkdXNlckxpbmtzLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VybmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkc3VwczogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldHMtbWFya3JpZ2h0cycpO1xuXHRcdFx0Zm9yIChjb25zdCBncm91cCBpbiBncm91cHMpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKGdyb3VwcywgZ3JvdXApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZ3JvdXBzR3JvdXA6IHN0cmluZ1tdID0gZ3JvdXBzW2dyb3VwIGFzIG5ldmVyXSA/PyBbXTtcblx0XHRcdFx0aWYgKCFncm91cHNHcm91cC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdFx0aWYgKCRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3Jlc3BvbnNpYmxlb3BlcmF0b3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdGV3YXJkXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fY2hlY2t1c2VyXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc3VwcHJlc3Ncblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zeXNvcFxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2ludGVyZmFjZS1hZG1pblxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3RlbXBsYXRlZWRpdG9yXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faW1wb3J0ZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19wYXRyb2xsZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvcGF0cm9sbGVkXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZXZlbnRzcG9uc29yXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fbWFzc21lc3NhZ2Utc2VuZGVyXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fY29uZmlybWVkXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYXV0b2NvbmZpcm1lZFxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2JvdFxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2Zsb29kXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faXBibG9jay1leGVtcHRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ybnJzdmVyaWZ5LWV4ZW1wdFxuXHRcdFx0XHRcdCQoJzxzdXA+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGFsdDogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0JGVsZW1lbnQuYWZ0ZXIoJHN1cHMpO1xuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTWFya1JpZ2h0cy8xLjEnKTtcblx0Zm9yIChjb25zdCB1c3VzZXJzIG9mIHF1ZXVlKSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRcdHVzdXNlcnMsXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3QgX3VzZXJzOiB7Z3JvdXBzOiBzdHJpbmc7IG5hbWU6IHN0cmluZ31bXSA9IHJlc3BvbnNlWydxdWVyeSddPy51c2VycyA/PyBbXTtcblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgX3VzZXJzKSB7XG5cdFx0XHRpZiAoIXVzZXIgfHwgIXVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBncm91cCBpbiBncm91cHMpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKGdyb3VwcywgZ3JvdXApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZ3JvdXBzR3JvdXA6IHN0cmluZ1tdID0gZ3JvdXBzW2dyb3VwIGFzIG5ldmVyXSBhcyBzdHJpbmdbXTtcblx0XHRcdFx0aWYgKHVzZXIuZ3JvdXBzLmluY2x1ZGVzKGdyb3VwKSkge1xuXHRcdFx0XHRcdGdyb3Vwc0dyb3VwW2dyb3Vwc0dyb3VwLmxlbmd0aF0gPSB1c2VyLm5hbWU7IC8vIFJlcGxhY2UgYGdyb3Vwc0dyb3VwLnB1c2godXNlci5uYW1lKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvbmUoKTtcblx0fVxufTtcbiIsICIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEs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QU0sSUFBSXlELEtBQUtFO1lBQ3hDO1VBQ0Q7UUFDRDtNQUFBLFNBQUFDLEtBQUE7QUFBQVIsa0JBQUFTLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFSLGtCQUFBVSxFQUFBO01BQUE7QUFDQWhELFdBQUs7SUFDTjtFQUNELENBQUE7QUFBQSxTQUFBLFNBbElhM0IsZ0JBQUE0RSxJQUFBO0FBQUEsV0FBQTNFLEtBQUE0RSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDMUJiNUQsR0FBRzZELEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsV0FBVzlFLFVBQWdCO0FBQ25FLE1BQUlBLFNBQVM4QixLQUFLLElBQUksTUFBTSxxQkFBcUI5QixTQUFTeUMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyRixTQUFLNUMsZUFBZUcsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInJlc3BvbnNpYmxlb3BlcmF0b3IiLCAibG9jYWxpemUiLCAiZW4iLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAiaW1wb3J0ZXIiLCAicGF0cm9sbGVyIiwgImF1dG9wYXRyb2xsZWQiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdyb3VwcyIsICJtYXJrVXNlclJpZ2h0cyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRjb250ZW50IiwgIiR1c2VyTGlua3MiLCAiZmluZCIsICJ1c2VycyIsICJxdWV1ZSIsICJlYWNoIiwgIl9pbmRleCIsICJ0ZXh0Q29udGVudCIsICJ1c2VyTGlua1RleHQiLCAidG9TdHJpbmciLCAibGVuZ3RoIiwgIlNldCIsICJnZXRVc2VybmFtZSIsICJ1cmwiLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRlY29kZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlcm5hbWVNYXRjaCIsICJtYXRjaCIsICJkb25lIiwgImVsZW1lbnQiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiJCIsICJwYXJlbnRzIiwgImF0dHIiLCAiJHN1cHMiLCAiYWRkQ2xhc3MiLCAiZ3JvdXAiLCAiX2dyb3VwcyRncm91cCIsICJPYmplY3QiLCAiaGFzT3duIiwgImdyb3Vwc0dyb3VwIiwgImluY2x1ZGVzIiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImFsdCIsICJ0aXRsZSIsICJhZnRlciIsICJhcGkiLCAiaW5pdE13QXBpIiwgIl9pIiwgIl9xdWV1ZSIsICJfcmVzcG9uc2UkcXVlcnkkdXNlcnMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInVzdXNlcnMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJnZXQiLCAiX3VzZXJzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAidXNlciIsICJ2YWx1ZSIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
