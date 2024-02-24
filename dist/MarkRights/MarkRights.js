/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkRights}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
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
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
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
      en: "Webmaster",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    bureaucrat: (0, import_ext_gadget.localize)({
      en: "Bureaucrat",
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
  bureaucrat: [],
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
            // * gadget-markrights__bureaucrat
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
$(function markRights() {
  mw.hook("wikipage.content").add(($content) => {
    if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
      void markUserRights($content);
    }
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyIsICJzcmMvTWFya1JpZ2h0cy9NYXJrUmlnaHRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cmVzcG9uc2libGVvcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6LSj5Lu76L+Q6JClJyxcblx0XHRcdCd6aC1oYW50JzogJ+iyrOS7u+mBi+eHnycsXG5cdFx0fSksXG5cdFx0YnVyZWF1Y3JhdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCdXJlYXVjcmF0Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aho+ahiOeQhuS6i+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqpTmoYjnkIbkuovlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdGltcG9ydGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3BhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S8mOi0qOe8lui+keiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflhKros6rnt6jovK/ogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdyb3VwczogUmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZ1tdPiA9IHtcblx0Ly8g5YWo56uZ566h55CG5Z6L5p2D6ZmQXG5cdHJlc3BvbnNpYmxlb3BlcmF0b3I6IFtdLFxuXHRidXJlYXVjcmF0OiBbXSxcblx0Y2hlY2t1c2VyOiBbXSxcblx0c3VwcHJlc3M6IFtdLFxuXHRzeXNvcDogW10sXG5cdCdpbnRlcmZhY2UtYWRtaW4nOiBbXSxcblx0dGVtcGxhdGVlZGl0b3I6IFtdLFxuXHRpbXBvcnRlcjogW10sXG5cdC8vIOmhtemdoueuoeeQhuWei+adg+mZkFxuXHRwYXRyb2xsZXI6IFtdLFxuXHRhdXRvcGF0cm9sbGVkOiBbXSxcblx0Ly8g5aSn6YeP5pON5L2c5Z6L5p2D6ZmQXG5cdGV2ZW50c3BvbnNvcjogW10sXG5cdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBbXSxcblx0Ly8g56Gu6K6k5p2D6ZmQXG5cdGNvbmZpcm1lZDogW10sXG5cdGF1dG9jb25maXJtZWQ6IFtdLFxuXHQvLyDmnLrlmajmnYPpmZBcblx0Ym90OiBbXSxcblx0Zmxvb2Q6IFtdLFxuXHQvLyDosYHlhY1cblx0J2lwYmxvY2stZXhlbXB0JzogW10sXG5cdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hcmtVc2VyUmlnaHRzID0gYXN5bmMgKCRjb250ZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgJHVzZXJMaW5rczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBxdWV1ZTogQXJyYXk8dHlwZW9mIHVzZXJzPiA9IFtdO1xuXHQkdXNlckxpbmtzLmVhY2goKF9pbmRleDogbnVtYmVyLCB7dGV4dENvbnRlbnR9OiB7dGV4dENvbnRlbnQ6IHN0cmluZyB8IG51bGx9KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgdXNlckxpbmtUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblx0XHRpZiAodXNlckxpbmtUZXh0KSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlckxpbmtUZXh0OyAvLyBSZXBsYWNlIGB1c2Vycy5wdXNoKHVzZXJMaW5rVGV4dClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cdFx0dXNlcnMgPSBbLi4ubmV3IFNldCh1c2VycyldO1xuXHRcdGlmICh1c2Vycy5sZW5ndGggPT09IDUwKSB7XG5cdFx0XHRxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdXNlcnM7IC8vIFJlcGxhY2UgYHF1ZXVlLnB1c2godXNlcnMpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHR1c2VycyA9IFtdO1xuXHRcdH1cblx0fSk7XG5cdGlmICh1c2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0cXVldWVbcXVldWUubGVuZ3RoXSA9IHVzZXJzOyAvLyBSZXBsYWNlIGBxdWV1ZS5wdXNoKHVzZXJzKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cdGNvbnN0IGdldFVzZXJuYW1lID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRpZiAoIXVybCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCB1cmwpO1xuXHRcdGNvbnN0IGRlY29kZSA9IChzdHJpbmc6IHN0cmluZywgcmVwbGFjZTogKF9zdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRcdCgoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2Uoc3RyaW5nKS5yZXBsYWNlKC8lKD8hXFxkKykvZywgJyUyNScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGlmICh1c2VybmFtZSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCdVc2VyOicsICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgdXNlcm5hbWVNYXRjaDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB1cmwubWF0Y2goL1xcL3dpa2lcXC9Vc2VyOiguKz8pJC8pO1xuXHRcdGlmICh1c2VybmFtZU1hdGNoPy5bMV0pIHtcblx0XHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWVNYXRjaFsxXSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdCR1c2VyTGlua3MuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJuYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0XHRpZiAoIXVzZXJuYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRzdXBzOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIGluIGdyb3Vwcykge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24oZ3JvdXBzLCBncm91cCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBncm91cHNHcm91cDogc3RyaW5nW10gPSBncm91cHNbZ3JvdXAgYXMgbmV2ZXJdID8/IFtdO1xuXHRcdFx0XHRpZiAoIWdyb3Vwc0dyb3VwLmluY2x1ZGVzKHVzZXJuYW1lKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gYGdhZGdldHMtbWFya3JpZ2h0c19fJHtncm91cH1gO1xuXHRcdFx0XHRpZiAoJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcmVzcG9uc2libGVvcGVyYXRvclxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2J1cmVhdWNyYXRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jaGVja3VzZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdXBwcmVzc1xuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N5c29wXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faW50ZXJmYWNlLWFkbWluXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdGVtcGxhdGVlZGl0b3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pbXBvcnRlclxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3BhdHJvbGxlclxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2F1dG9wYXRyb2xsZWRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ldmVudHNwb25zb3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19tYXNzbWVzc2FnZS1zZW5kZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jb25maXJtZWRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvY29uZmlybWVkXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYm90XG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZmxvb2Rcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pcGJsb2NrLWV4ZW1wdFxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3JucnN2ZXJpZnktZXhlbXB0XG5cdFx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzTmFtZSlcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdNYXJrUmlnaHRzLzEuMScpO1xuXHRmb3IgKGNvbnN0IHVzdXNlcnMgb2YgcXVldWUpIHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdFx0dXN1c2Vycyxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBfdXNlcnM6IHtncm91cHM6IHN0cmluZzsgbmFtZTogc3RyaW5nfVtdID0gcmVzcG9uc2VbJ3F1ZXJ5J10/LnVzZXJzID8/IFtdO1xuXHRcdGZvciAoY29uc3QgdXNlciBvZiBfdXNlcnMpIHtcblx0XHRcdGlmICghdXNlciB8fCAhdXNlci5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIGluIGdyb3Vwcykge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24oZ3JvdXBzLCBncm91cCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBncm91cHNHcm91cDogc3RyaW5nW10gPSBncm91cHNbZ3JvdXAgYXMgbmV2ZXJdIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRpZiAodXNlci5ncm91cHMuaW5jbHVkZXMoZ3JvdXApKSB7XG5cdFx0XHRcdFx0Z3JvdXBzR3JvdXBbZ3JvdXBzR3JvdXAubGVuZ3RoXSA9IHVzZXIubmFtZTsgLy8gUmVwbGFjZSBgZ3JvdXBzR3JvdXAucHVzaCh1c2VyLm5hbWUpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9uZSgpO1xuXHR9XG59O1xuIiwgIi8qKlxuICogQGRlc2NyaXB0aW9uIOWcqOacgOi/keS/ruaUueOAgeebkeinhuWIl+ihqOOAgeadoeebruWOhuWPsuiusOW9leetieS9jee9ruS7peeJueauiuagvOW8j+aYvuekuuacieeJueauiuadg+mZkOeahOeUqOaIt1xuICovXG5pbXBvcnQge21hcmtVc2VyUmlnaHRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQoZnVuY3Rpb24gbWFya1JpZ2h0cygpOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSA9PT0gJ213LWNvbnRlbnQtdGV4dCcgfHwgJGNvbnRlbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0JykpIHtcblx0XHRcdHZvaWQgbWFya1VzZXJSaWdodHMoJGNvbnRlbnQpO1xuXHRcdH1cblx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsc0JBQUEsR0FBcUJILGtCQUFBSSxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLGFBQUEsR0FBWU4sa0JBQUFJLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsWUFBQSxHQUFXUCxrQkFBQUksVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVSLGtCQUFBSSxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFFBQUEsR0FBT1Qsa0JBQUFJLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9CQUFBLEdBQW1CTCxrQkFBQUksVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxpQkFBQSxHQUFnQlYsa0JBQUFJLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE0sV0FBQSxHQUFVWCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETyxZQUFBLEdBQVdaLGtCQUFBSSxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RRLGdCQUFBLEdBQWViLGtCQUFBSSxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RTLGVBQUEsR0FBY2Qsa0JBQUFJLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx1QkFBQSxHQUFzQkwsa0JBQUFJLFVBQVM7TUFDOUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFUsWUFBQSxHQUFXZixrQkFBQUksVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEVyxnQkFBQSxHQUFlaEIsa0JBQUFJLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFksTUFBQSxHQUFLakIsa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYSxRQUFBLEdBQU9sQixrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJMLGtCQUFBSSxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsbUJBQUEsR0FBa0JMLGtCQUFBSSxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1jLGVBQWVqQixnQkFBZ0I7QUFFckMsSUFBTWtCLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDbkdBLElBQUFDLHFCQUF3QnJCLFFBQUEsaUJBQUE7QUFFeEIsSUFBTXNCLFNBQXVDOztFQUU1Q3BCLHFCQUFxQixDQUFBO0VBQ3JCRyxZQUFZLENBQUE7RUFDWkMsV0FBVyxDQUFBO0VBQ1hDLFVBQVUsQ0FBQTtFQUNWQyxPQUFPLENBQUE7RUFDUCxtQkFBbUIsQ0FBQTtFQUNuQkMsZ0JBQWdCLENBQUE7RUFDaEJDLFVBQVUsQ0FBQTs7RUFFVkMsV0FBVyxDQUFBO0VBQ1hDLGVBQWUsQ0FBQTs7RUFFZkMsY0FBYyxDQUFBO0VBQ2Qsc0JBQXNCLENBQUE7O0VBRXRCQyxXQUFXLENBQUE7RUFDWEMsZUFBZSxDQUFBOztFQUVmQyxLQUFLLENBQUE7RUFDTEMsT0FBTyxDQUFBOztFQUVQLGtCQUFrQixDQUFBO0VBQ2xCLHFCQUFxQixDQUFBO0FBQ3RCO0FBRU8sSUFBTU0saUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBaUIsV0FBT0MsVUFBb0M7QUFDeEUsVUFBTUMsYUFBcUJELFNBQVNFLEtBQUsscUNBQXFDO0FBQzlFLFFBQUlDLFFBQWtCLENBQUE7QUFDdEIsVUFBTUMsUUFBNkIsQ0FBQTtBQUNuQ0gsZUFBV0ksS0FBSyxDQUFDQyxRQUFnQjtNQUFDQztJQUFXLE1BQTBDO0FBQ3RGLFlBQU1DLGVBQW1DRCxnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQWFFLFNBQVM7QUFDL0QsVUFBSUQsY0FBYztBQUNqQkwsY0FBTUEsTUFBTU8sTUFBTSxJQUFJRjtNQUN2QjtBQUNBTCxjQUFRLENBQUMsR0FBRyxJQUFJUSxJQUFJUixLQUFLLENBQUM7QUFDMUIsVUFBSUEsTUFBTU8sV0FBVyxJQUFJO0FBQ3hCTixjQUFNQSxNQUFNTSxNQUFNLElBQUlQO0FBQ3RCQSxnQkFBUSxDQUFBO01BQ1Q7SUFDRCxDQUFDO0FBQ0QsUUFBSUEsTUFBTU8sU0FBUyxHQUFHO0FBQ3JCTixZQUFNQSxNQUFNTSxNQUFNLElBQUlQO0lBQ3ZCO0FBQ0EsVUFBTVMsY0FBZUMsU0FBd0I7QUFDNUMsVUFBSSxDQUFDQSxLQUFLO0FBQ1QsZUFBTztNQUNSO0FBQ0EsWUFBTUMsV0FBMEJDLEdBQUdDLEtBQUtDLGNBQWMsU0FBU0osR0FBRztBQUNsRSxZQUFNSyxTQUFTQSxDQUFDQyxRQUFnQkMsWUFBaUQ7QUFDaEYsZUFBT0Msb0JBQ0wsTUFBYztBQUNkLGNBQUk7QUFDSCxtQkFBT0EsbUJBQW1CRCxRQUFRRCxNQUFNLENBQUM7VUFDMUMsUUFBUTtBQUNQLG1CQUFPQyxRQUFRRCxNQUFNLEVBQUVDLFFBQVEsYUFBYSxLQUFLO1VBQ2xEO1FBQ0QsR0FBRyxDQUNKO01BQ0Q7QUFDQSxVQUFJTixVQUFVO0FBQ2IsZUFBT0ksT0FBT0osVUFBV0ssWUFBMkI7QUFDbkQsaUJBQU9BLE9BQU9DLFFBQVEsU0FBUyxFQUFFLEVBQUVBLFFBQVEsTUFBTSxHQUFHO1FBQ3JELENBQUM7TUFDRjtBQUNBLFlBQU1FLGdCQUF5Q1QsSUFBSVUsTUFBTSxxQkFBcUI7QUFDOUUsVUFBSUQsa0JBQUEsUUFBQUEsa0JBQUEsVUFBQUEsY0FBZ0IsQ0FBQyxHQUFHO0FBQ3ZCLGVBQU9KLE9BQU9JLGNBQWMsQ0FBQyxHQUFJSCxZQUEyQjtBQUMzRCxpQkFBT0EsT0FBT0MsUUFBUSxNQUFNLEdBQUc7UUFDaEMsQ0FBQztNQUNGO0FBQ0EsYUFBTztJQUNSO0FBQ0EsVUFBTUksT0FBT0EsTUFBWTtBQUN4QnZCLGlCQUFXSSxLQUFLLENBQUNDLFFBQWdCbUIsWUFBK0I7QUFBQSxZQUFBQztBQUMvRCxjQUFNQyxXQUFtQkMsRUFBRUgsT0FBTztBQUNsQyxZQUFJRSxTQUFTRSxRQUFRLElBQUksRUFBRTNCLEtBQUsscUJBQXFCLEVBQUVRLFFBQVE7QUFDOUQ7UUFDRDtBQUNBLGNBQU1JLFdBQW1CRixhQUFBYyxpQkFBWUMsU0FBU0csS0FBSyxNQUFNLE9BQUEsUUFBQUosbUJBQUEsU0FBQUEsaUJBQUssRUFBRTtBQUNoRSxZQUFJLENBQUNaLFVBQVU7QUFDZDtRQUNEO0FBQ0EsY0FBTWlCLFFBQWdCSCxFQUFFLFFBQVEsRUFBRUksU0FBUyxvQkFBb0I7QUFDL0QsbUJBQVdDLFNBQVNyQyxRQUFRO0FBQUEsY0FBQXNDO0FBQzNCLGNBQUksQ0FBQ0MsT0FBT0MsT0FBT3hDLFFBQVFxQyxLQUFLLEdBQUc7QUFDbEM7VUFDRDtBQUNBLGdCQUFNSSxlQUFBSCxnQkFBd0J0QyxPQUFPcUMsS0FBYyxPQUFBLFFBQUFDLGtCQUFBLFNBQUFBLGdCQUFLLENBQUE7QUFDeEQsY0FBSSxDQUFDRyxZQUFZQyxTQUFTeEIsUUFBUSxHQUFHO0FBQ3BDO1VBQ0Q7QUFDQSxnQkFBTXlCLFlBQUEsdUJBQUFDLE9BQTJDUCxLQUFLO0FBQ3RELGNBQUlGLE1BQU03QixLQUFLLEtBQUssRUFBRXVDLFNBQVNGLFNBQVMsR0FBRztBQUMxQztVQUNEO0FBQ0FSLGdCQUFNVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkxkLEVBQUUsT0FBTyxFQUNQSSxTQUFTTyxTQUFTLEVBQ2xCVCxLQUFLO2NBQ0xhLEtBQUtsRCxXQUFXd0MsS0FBbUI7Y0FDbkNXLE9BQU9uRCxXQUFXd0MsS0FBbUI7WUFDdEMsQ0FBQztVQUNIO1FBQ0Q7QUFDQU4saUJBQVNrQixNQUFNZCxLQUFLO01BQ3JCLENBQUM7SUFDRjtBQUNBLFVBQU1lLE9BQUEsR0FBY25ELG1CQUFBb0QsV0FBVSxnQkFBZ0I7QUFDOUMsYUFBQUMsS0FBQSxHQUFBQyxTQUFzQjdDLE9BQUE0QyxLQUFBQyxPQUFBdkMsUUFBQXNDLE1BQU87QUFBQSxVQUFBRSx1QkFBQUM7QUFBN0IsWUFBV0MsVUFBQUgsT0FBQUQsRUFBQTtBQUNWLFlBQU1LLFNBQThCO1FBQ25DQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxNQUFNO1FBQ05DLFFBQVE7UUFDUk47TUFDRDtBQUNBLFlBQU1PLFdBQUEsTUFBaUJiLElBQUljLElBQUlQLE1BQU07QUFFckMsWUFBTVEsVUFBQVgseUJBQUFDLGtCQUEyQ1EsU0FBUyxPQUFPLE9BQUEsUUFBQVIsb0JBQUEsU0FBQSxTQUFoQkEsZ0JBQW1CaEQsV0FBQSxRQUFBK0MsMEJBQUEsU0FBQUEsd0JBQVMsQ0FBQTtBQUFDLFVBQUFZLFlBQUFDLDJCQUMzREYsTUFBQSxHQUFBRztBQUFBLFVBQUE7QUFBbkIsYUFBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQTFDLFFBQTJCO0FBQUEsZ0JBQWhCMkMsT0FBQUgsTUFBQUk7QUFDVixjQUFJLENBQUNELFFBQVEsQ0FBQ0EsS0FBS3ZFLFFBQVE7QUFDMUI7VUFDRDtBQUNBLHFCQUFXcUMsU0FBU3JDLFFBQVE7QUFDM0IsZ0JBQUksQ0FBQ3VDLE9BQU9DLE9BQU94QyxRQUFRcUMsS0FBSyxHQUFHO0FBQ2xDO1lBQ0Q7QUFDQSxrQkFBTUksY0FBd0J6QyxPQUFPcUMsS0FBYztBQUNuRCxnQkFBSWtDLEtBQUt2RSxPQUFPMEMsU0FBU0wsS0FBSyxHQUFHO0FBQ2hDSSwwQkFBWUEsWUFBWTNCLE1BQU0sSUFBSXlELEtBQUtFO1lBQ3hDO1VBQ0Q7UUFDRDtNQUFBLFNBQUFDLEtBQUE7QUFBQVIsa0JBQUFTLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFSLGtCQUFBVSxFQUFBO01BQUE7QUFDQWhELFdBQUs7SUFDTjtFQUNELENBQUE7QUFBQSxTQUFBLFNBbElhM0IsZ0JBQUE0RSxJQUFBO0FBQUEsV0FBQTNFLEtBQUE0RSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDMUJiL0MsRUFBRSxTQUFTZ0QsYUFBbUI7QUFDN0I3RCxLQUFHOEQsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSzlFLGNBQW1CO0FBQ25ELFFBQUlBLFNBQVM4QixLQUFLLElBQUksTUFBTSxxQkFBcUI5QixTQUFTeUMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyRixXQUFLNUMsZUFBZUcsUUFBUTtJQUM3QjtFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJyZXNwb25zaWJsZW9wZXJhdG9yIiwgImxvY2FsaXplIiwgImVuIiwgImJ1cmVhdWNyYXQiLCAiY2hlY2t1c2VyIiwgInN1cHByZXNzIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgImltcG9ydGVyIiwgInBhdHJvbGxlciIsICJhdXRvcGF0cm9sbGVkIiwgImV2ZW50c3BvbnNvciIsICJjb25maXJtZWQiLCAiYXV0b2NvbmZpcm1lZCIsICJib3QiLCAiZmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJncm91cHMiLCAibWFya1VzZXJSaWdodHMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICIkY29udGVudCIsICIkdXNlckxpbmtzIiwgImZpbmQiLCAidXNlcnMiLCAicXVldWUiLCAiZWFjaCIsICJfaW5kZXgiLCAidGV4dENvbnRlbnQiLCAidXNlckxpbmtUZXh0IiwgInRvU3RyaW5nIiwgImxlbmd0aCIsICJTZXQiLCAiZ2V0VXNlcm5hbWUiLCAidXJsIiwgInVzZXJuYW1lIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiZG9uZSIsICJlbGVtZW50IiwgIl8kZWxlbWVudCRhdHRyIiwgIiRlbGVtZW50IiwgIiQiLCAicGFyZW50cyIsICJhdHRyIiwgIiRzdXBzIiwgImFkZENsYXNzIiwgImdyb3VwIiwgIl9ncm91cHMkZ3JvdXAiLCAiT2JqZWN0IiwgImhhc093biIsICJncm91cHNHcm91cCIsICJpbmNsdWRlcyIsICJjbGFzc05hbWUiLCAiY29uY2F0IiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiYWZ0ZXIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJfaSIsICJfcXVldWUiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHVzZXJzIiwgIl9yZXNwb25zZSRxdWVyeSIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl91c2VycyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgInVzZXIiLCAidmFsdWUiLCAibmFtZSIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtYXJrUmlnaHRzIiwgImhvb2siLCAiYWRkIl0KfQo=
