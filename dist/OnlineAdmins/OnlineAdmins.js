/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/OnlineAdmins}
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

// dist/OnlineAdmins/OnlineAdmins.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa";
//! src/OnlineAdmins/modules/components/groupList.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    " ($1 online):": (0, import_ext_gadget.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Admins: (0, import_ext_gadget.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    Patrollers: (0, import_ext_gadget.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/groupList.tsx
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&lt;").replace(/"/g, "&quot;");
var UserLink = ({
  userName
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, sanitize(userName)), " ", /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: talkPageLink
}, "（", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User_talk:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, "留言"), "）"));
var onlineCountText = getMessage(" ($1 online):");
var GroupList = ({
  groupName,
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: section
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, groupName), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, onlineCountText.replace("$1", String(userNames.length))), /* @__PURE__ */ import_ext_gadget2.default.createElement("ul", {
  className: sectionList
}, userNames.map((user) => /* @__PURE__ */ import_ext_gadget2.default.createElement(UserLink, {
  key: user,
  userName: user
}))));
var groupListElement = (groupName, userNames) => /* @__PURE__ */ import_ext_gadget2.default.createElement(GroupList, {
  groupName,
  userNames
});
var listTitle = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("OnlineWithin30Minutes"));
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/options.json
var version = "2.0";
//! src/OnlineAdmins/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("OnlineAdmins/".concat(version));
//! src/OnlineAdmins/modules/doClick.ts
var doClick = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (event) {
    event.preventDefault();
    let users = [];
    const usersExt = [];
    const stewards = [];
    const admins = [];
    const patrollers = [];
    const time = /* @__PURE__ */ new Date();
    const rcstart = time.toISOString();
    time.setMinutes(time.getMinutes() - 30);
    const rcend = time.toISOString();
    try {
      const recentchangesParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "recentchanges",
        rcprop: "user",
        rcshow: ["!bot", "!anon"],
        rclimit: 500,
        rcstart,
        rcend
      };
      const recentchanges = yield api.get(recentchangesParams);
      var _iterator2 = _createForOfIteratorHelper(recentchanges["query"].recentchanges), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            user
          } = _step2.value;
          users[users.length] = user;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      const logeventsParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "logevents",
        leprop: "user",
        lelimit: 500,
        lestart: rcstart,
        leend: rcend
      };
      const logevents = yield api.get(logeventsParams);
      var _iterator3 = _createForOfIteratorHelper(logevents["query"].logevents), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const {
            user
          } = _step3.value;
          usersExt[usersExt.length] = user;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      users = [.../* @__PURE__ */ new Set([...users, ...usersExt])];
      const promises = [];
      for (let i = 0; i < users.length; i++) {
        const ususers = users.splice(0, 50);
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          const params = {
            action: "query",
            format: "json",
            formatversion: "2",
            list: "users",
            ususers,
            usprop: "groups"
          };
          const response = yield api.get(params);
          var _iterator4 = _createForOfIteratorHelper(response["query"].users), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const {
                groups,
                name
              } = _step4.value;
              if (groups.includes("bot") || BLACK_LIST.includes(name) || !name) {
                continue;
              }
              if (groups.includes("steward")) {
                stewards[stewards.length] = name;
              }
              if (groups.includes("sysop")) {
                admins[admins.length] = name;
              }
              if (groups.includes("patroller")) {
                patrollers[patrollers.length] = name;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        });
      }
      for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
        const promise = _promises[_i];
        yield promise();
      }
      if (stewards.length + admins.length + patrollers.length > 0) {
        const elements = [listTitle()];
        if (stewards.length > 0) {
          elements[elements.length] = groupListElement(getMessage("Stewards"), stewards);
        }
        if (admins.length > 0) {
          elements[elements.length] = groupListElement(getMessage("Admins"), admins);
        }
        if (patrollers.length > 0) {
          elements[elements.length] = groupListElement(getMessage("Patrollers"), patrollers);
        }
        void mw.notify($("<div>").append(elements), {
          tag: "onlineAdmins"
        });
      } else {
        void mw.notify(getMessage("NoOnline"), {
          tag: "onlineAdmins",
          type: "warn"
        });
      }
    } catch {
      void mw.notify(getMessage("Network error"), {
        tag: "onlineAdmins",
        type: "error"
      });
    }
  });
  return function doClick2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/OnlineAdmins/OnlineAdmins.ts
var addPortletLink = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  if (!element) {
    return;
  }
  $(element).find("a").on("click", (event) => {
    void doClick(event);
  });
};
$(addPortletLink);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCB0YWxrUGFnZUxpbmsgPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX3RhbGtQYWdlTGlua19XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdCxcbiAgXCJ0YWxrUGFnZUxpbmtcIjogdGFsa1BhZ2VMaW5rXG59O1xuICAgICAgIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3QsIHRhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5qGj5qGI55CG5LqL5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aqlOahiOeQhuS6i+WToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZG9DbGljayA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB1c2Vyc0V4dDogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qgc3Rld2FyZHM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IGFkbWluczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHR0aW1lLnNldE1pbnV0ZXModGltZS5nZXRNaW51dGVzKCkgLSAzMCk7IC8vIOacgOi/keabtOaUuTMw5YiG6ZKf5YaF55qE57yW6L6R55So5oi3XG5cdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZWNlbnRjaGFuZ2VzUGFyYW1zOiBBcGlRdWVyeVJlY2VudENoYW5nZXNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdFx0cmNzaG93OiBbJyFib3QnLCAnIWFub24nXSxcblx0XHRcdHJjbGltaXQ6IDUwMCxcblx0XHRcdHJjc3RhcnQsXG5cdFx0XHRyY2VuZCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlY2VudGNoYW5nZXMgPSBhd2FpdCBhcGkuZ2V0KHJlY2VudGNoYW5nZXNQYXJhbXMpO1xuXG5cdFx0Zm9yIChjb25zdCB7dXNlcn0gb2YgcmVjZW50Y2hhbmdlc1sncXVlcnknXS5yZWNlbnRjaGFuZ2VzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cdFx0Y29uc3QgbG9nZXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZXByb3A6ICd1c2VyJyxcblx0XHRcdGxlbGltaXQ6IDUwMCxcblx0XHRcdGxlc3RhcnQ6IHJjc3RhcnQsXG5cdFx0XHRsZWVuZDogcmNlbmQsXG5cdFx0fTtcblx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBhcGkuZ2V0KGxvZ2V2ZW50c1BhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiBsb2dldmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdHVzZXJzRXh0W3VzZXJzRXh0Lmxlbmd0aF0gPSB1c2VyO1xuXHRcdH1cblxuXHRcdHVzZXJzID0gWy4uLm5ldyBTZXQoWy4uLnVzZXJzLCAuLi51c2Vyc0V4dF0pXTsgLy8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cblx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgNTApO1xuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdFx0XHR1c3VzZXJzLFxuXHRcdFx0XHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qge2dyb3VwcywgbmFtZX0gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10udXNlcnMgYXMge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdC8vIOaJvuWIsOeuoeeQhuS6uuWRmO+8jOWOu+mZpOacuuWZqOS6uu+8jOa2iOmZpG5hbWXnmoTnqbrlgLxcblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBCTEFDS19MSVNULmluY2x1ZGVzKG5hbWUpIHx8ICFuYW1lKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdFx0YWRtaW5zW2FkbWlucy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0XHRcdHBhdHJvbGxlcnNbcGF0cm9sbGVycy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdH1cblxuXHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBhZG1pbnMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50czogRWxlbWVudFtdID0gW2xpc3RUaXRsZSgpXTtcblxuXHRcdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnU3Rld2FyZHMnKSwgc3Rld2FyZHMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFkbWlucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ0FkbWlucycpLCBhZG1pbnMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhdHJvbGxlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHBhdHJvbGxlcnMpO1xuXHRcdFx0fVxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJCgnPGRpdj4nKS5hcHBlbmQoZWxlbWVudHMpLCB7dGFnOiAnb25saW5lQWRtaW5zJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb09ubGluZScpLCB7XG5cdFx0XHRcdHRhZzogJ29ubGluZUFkbWlucycsXG5cdFx0XHRcdHR5cGU6ICd3YXJuJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCB7dGFnOiAnb25saW5lQWRtaW5zJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7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V0FBVyxRQUFRLEdBQUcsZUFBZTtBQUNsSCxNQUFJLENBQUMwRyxTQUFTO0FBQ2I7RUFDRDtBQUdBWCxJQUFFVyxPQUFPLEVBQ1BDLEtBQUssR0FBRyxFQUNSQyxHQUFHLFNBQVV6RSxXQUFVO0FBQ3ZCLFNBQUtILFFBQVFHLEtBQUs7RUFDbkIsQ0FBQztBQUNIO0FBRUE0RCxFQUFFTyxjQUFjOyIsCiAgIm5hbWVzIjogWyJzZWN0aW9uIiwgInNlY3Rpb25MaXN0IiwgInRhbGtQYWdlTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJBZG1pbnMiLCAiUGF0cm9sbGVycyIsICJTdGV3YXJkcyIsICJOb09ubGluZSIsICJPbmxpbmUiLCAiT25saW5lV2l0aGluMzBNaW51dGVzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJVc2VyTGluayIsICJ1c2VyTmFtZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAicmVsIiwgInRhcmdldCIsICJjbGFzc05hbWUiLCAib25saW5lQ291bnRUZXh0IiwgIkdyb3VwTGlzdCIsICJncm91cE5hbWUiLCAidXNlck5hbWVzIiwgIlN0cmluZyIsICJsZW5ndGgiLCAibWFwIiwgInVzZXIiLCAiZ3JvdXBMaXN0RWxlbWVudCIsICJsaXN0VGl0bGUiLCAiQkxBQ0tfTElTVCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImRvQ2xpY2siLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJ1c2VycyIsICJ1c2Vyc0V4dCIsICJzdGV3YXJkcyIsICJhZG1pbnMiLCAicGF0cm9sbGVycyIsICJ0aW1lIiwgIkRhdGUiLCAicmNzdGFydCIsICJ0b0lTT1N0cmluZyIsICJzZXRNaW51dGVzIiwgImdldE1pbnV0ZXMiLCAicmNlbmQiLCAicmVjZW50Y2hhbmdlc1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJyY3Byb3AiLCAicmNzaG93IiwgInJjbGltaXQiLCAicmVjZW50Y2hhbmdlcyIsICJnZXQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHNQYXJhbXMiLCAibGVwcm9wIiwgImxlbGltaXQiLCAibGVzdGFydCIsICJsZWVuZCIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiU2V0IiwgInByb21pc2VzIiwgImkiLCAidXN1c2VycyIsICJzcGxpY2UiLCAicGFyYW1zIiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJlbGVtZW50cyIsICJub3RpZnkiLCAiJCIsICJhcHBlbmQiLCAidGFnIiwgInR5cGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiZmluZCIsICJvbiJdCn0K
