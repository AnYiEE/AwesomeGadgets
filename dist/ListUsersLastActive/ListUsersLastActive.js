/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/list-user-last-active.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=MediaWiki:Gadget-CommentsinLocalTime.js&oldid=48314651}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ListUsersLastActive}
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

// dist/ListUsersLastActive/ListUsersLastActive.js
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
//! src/ListUsersLastActive/modules/util/adjustTime.ts
var addLeadingZero = (number) => {
  const numberString = typeof number === "number" && number < 10 ? "0".concat(number.toString()) : number.toString();
  return numberString;
};
var adjustTime = (time) => {
  let date;
  let today = /* @__PURE__ */ new Date();
  const yesterday = /* @__PURE__ */ new Date();
  const tomorrow = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const utcOffset = -1 * time.getTimezoneOffset() / 60;
  const utcOffsetToString = utcOffset >= 0 ? "+".concat(utcOffset) : "−".concat(Math.abs(utcOffset));
  const year = time.getFullYear();
  const month = addLeadingZero(time.getMonth() + 1);
  const day = time.getDate();
  const hour = Number.parseInt(time.getHours().toString(), 10);
  const minute = addLeadingZero(time.getMinutes());
  if (year === today.getFullYear() && month === addLeadingZero(today.getMonth() + 1) && day === today.getDate()) {
    date = "今天";
  } else if (year === yesterday.getFullYear() && month === addLeadingZero(yesterday.getMonth() + 1) && day === yesterday.getDate()) {
    date = "昨天";
  } else if (year === tomorrow.getFullYear() && month === addLeadingZero(tomorrow.getMonth() + 1) && day === tomorrow.getDate()) {
    date = "明天";
  } else {
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    date = "".concat(year, "年").concat(addLeadingZero(month), "月").concat(addLeadingZero(day), "日");
  }
  const hourMinute = "".concat(addLeadingZero(hour), ":").concat(minute, " ");
  return "".concat(date, ", ").concat(hourMinute, " (UTC").concat(utcOffsetToString, ")");
};
//! src/ListUsersLastActive/options.json
var version = "2.0";
//! src/ListUsersLastActive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ListUsersLastActive/".concat(version));
//! src/ListUsersLastActive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "(": (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget2.localize)({
      en: ") ",
      zh: "）"
    }),
    "Last active on": (0, import_ext_gadget2.localize)({
      en: "Last active on $1",
      "zh-hans": "最后操作于$1",
      "zh-hant": "最後動作於$1"
    }),
    "Never active": (0, import_ext_gadget2.localize)({
      en: "Never active",
      "zh-hans": "从未有操作",
      "zh-hant": "從未有動作"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ListUsersLastActive/modules/checkLastActive.ts
var checkLastActive = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($element) {
    const userName = $element.find(".mw-userlink > bdi").text();
    const logEventsParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      lelimit: 1,
      leprop: "timestamp",
      leuser: userName
    };
    const userContribsParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "usercontribs",
      ucdir: "older",
      uclimit: 1,
      ucprop: "timestamp",
      ucuser: userName
    };
    let maxDate;
    try {
      const userContribs = yield api.get(userContribsParams);
      if (userContribs["query"].usercontribs[0]) {
        maxDate = new Date(userContribs["query"].usercontribs[0].timestamp);
      }
      const logEvents = yield api.get(logEventsParams);
      if (logEvents["query"].logevents[0]) {
        const date = new Date(logEvents["query"].logevents[0].timestamp);
        if (!maxDate || date > maxDate) {
          maxDate = date;
        }
      }
      const lastActiveMessage = getMessage("(") + (maxDate ? getMessage("Last active on").replace("$1", adjustTime(maxDate)) : getMessage("Never active")) + getMessage(")");
      $element.append(lastActiveMessage);
    } catch (error) {
      console.error("[ListUsersLastActive] Ajax error:", error);
    }
  });
  return function checkLastActive2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ListUsersLastActive/ListUsersLastActive.ts
var import_ext_gadget3 = require("ext.gadget.Util");
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Listusers") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find("#mw-content-text>ul>li")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      void checkLastActive($(element));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy91dGlsL2FkanVzdFRpbWUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvb3B0aW9ucy5qc29uIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9MaXN0VXNlcnNMYXN0QWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJykgJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnTGFzdCBhY3RpdmUgb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xhc3QgYWN0aXZlIG9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acgOWQjuaTjeS9nOS6jiQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+acgOW+jOWLleS9nOaWvCQxJyxcblx0XHR9KSxcblx0XHQnTmV2ZXIgYWN0aXZlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXZlciBhY3RpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LuO5pyq5pyJ5pON5L2cJyxcblx0XHRcdCd6aC1oYW50JzogJ+W+nuacquacieWLleS9nCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRqdXN0VGltZX0gZnJvbSAnLi91dGlsL2FkanVzdFRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY2hlY2tMYXN0QWN0aXZlID0gYXN5bmMgKCRlbGVtZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9ICRlbGVtZW50LmZpbmQoJy5tdy11c2VybGluayA+IGJkaScpLnRleHQoKTtcblxuXHRjb25zdCBsb2dFdmVudHNQYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdGxldXNlcjogdXNlck5hbWUsXG5cdH07XG5cdGNvbnN0IHVzZXJDb250cmlic1BhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2RpcjogJ29sZGVyJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHRcdHVjcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0dWN1c2VyOiB1c2VyTmFtZSxcblx0fTtcblxuXHRsZXQgbWF4RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJDb250cmlicyA9IGF3YWl0IGFwaS5nZXQodXNlckNvbnRyaWJzUGFyYW1zKTtcblx0XHRpZiAodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXSkge1xuXHRcdFx0bWF4RGF0ZSA9IG5ldyBEYXRlKHVzZXJDb250cmlic1sncXVlcnknXS51c2VyY29udHJpYnNbMF0udGltZXN0YW1wIGFzIG51bWJlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nRXZlbnRzID0gYXdhaXQgYXBpLmdldChsb2dFdmVudHNQYXJhbXMpO1xuXHRcdGlmIChsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUobG9nRXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50c1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHRcdGlmICghbWF4RGF0ZSB8fCBkYXRlID4gbWF4RGF0ZSkge1xuXHRcdFx0XHRtYXhEYXRlID0gZGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBsYXN0QWN0aXZlTWVzc2FnZTogc3RyaW5nID1cblx0XHRcdGdldE1lc3NhZ2UoJygnKSArXG5cdFx0XHQobWF4RGF0ZSA/IGdldE1lc3NhZ2UoJ0xhc3QgYWN0aXZlIG9uJykucmVwbGFjZSgnJDEnLCBhZGp1c3RUaW1lKG1heERhdGUpKSA6IGdldE1lc3NhZ2UoJ05ldmVyIGFjdGl2ZScpKSArXG5cdFx0XHRnZXRNZXNzYWdlKCcpJyk7XG5cblx0XHQkZWxlbWVudC5hcHBlbmQobGFzdEFjdGl2ZU1lc3NhZ2UpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tMaXN0VXNlcnNMYXN0QWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0xhc3RBY3RpdmV9O1xuIiwgIi8qKlxuICog5LqOW1tTcGVjaWFsOkxpc3R1c2Vyc11d5pi+56S65L2/55So6ICF5pyA5ZCO57yW6L6R5pe26Ze0XG4gKi9cbmltcG9ydCB7Y2hlY2tMYXN0QWN0aXZlfSBmcm9tICcuL21vZHVsZXMvY2hlY2tMYXN0QWN0aXZlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnTGlzdHVzZXJzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0PnVsPmxpJykpIHtcblx0XHR2b2lkIGNoZWNrTGFzdEFjdGl2ZSgkKGVsZW1lbnQpKTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDL0UsWUFBSSxDQUFDSixXQUFXekQsT0FBT3lELFNBQVM7QUFDL0JBLG9CQUFVekQ7UUFDWDtNQUNEO0FBRUEsWUFBTWdFLG9CQUNMN0IsV0FBVyxHQUFHLEtBQ2JzQixVQUFVdEIsV0FBVyxnQkFBZ0IsRUFBRThCLFFBQVEsTUFBTW5FLFdBQVcyRCxPQUFPLENBQUMsSUFBSXRCLFdBQVcsY0FBYyxLQUN0R0EsV0FBVyxHQUFHO0FBRWZLLGVBQVMwQixPQUFPRixpQkFBaUI7SUFDbEMsU0FBU0csT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0scUNBQXFDQSxLQUFLO0lBQ3pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FoRE05QixpQkFBQWdDLElBQUE7QUFBQSxXQUFBL0IsS0FBQWdDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNBTixJQUFBQyxxQkFBc0I5QyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBSzhDLG1CQUFBQyxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQzdELFFBQU07SUFBQ0M7RUFBMEIsSUFBSUMsR0FBR0MsT0FBT25CLElBQUk7QUFFbkQsTUFBSWlCLCtCQUErQixhQUFhO0FBQy9DO0VBQ0Q7QUFBQSxNQUFBRyxZQUFBQywyQkFFc0JMLE1BQU1qQyxLQUFLLHdCQUF3QixDQUFBLEdBQUF1QztBQUFBLE1BQUE7QUFBekQsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNEQ7QUFBQSxZQUFqREMsVUFBQUosTUFBQUs7QUFDVixXQUFLakQsZ0JBQWdCa0QsRUFBRUYsT0FBTyxDQUFDO0lBQ2hDO0VBQUEsU0FBQUcsS0FBQTtBQUFBVCxjQUFBVSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBVCxjQUFBVyxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJhZGRMZWFkaW5nWmVybyIsICJudW1iZXIiLCAibnVtYmVyU3RyaW5nIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJhZGp1c3RUaW1lIiwgInRpbWUiLCAiZGF0ZSIsICJ0b2RheSIsICJEYXRlIiwgInllc3RlcmRheSIsICJ0b21vcnJvdyIsICJzZXREYXRlIiwgImdldERhdGUiLCAidXRjT2Zmc2V0IiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInV0Y09mZnNldFRvU3RyaW5nIiwgIk1hdGgiLCAiYWJzIiwgInllYXIiLCAiZ2V0RnVsbFllYXIiLCAibW9udGgiLCAiZ2V0TW9udGgiLCAiZGF5IiwgImhvdXIiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImdldEhvdXJzIiwgIm1pbnV0ZSIsICJnZXRNaW51dGVzIiwgImhvdXJNaW51dGUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY2hlY2tMYXN0QWN0aXZlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGVsZW1lbnQiLCAidXNlck5hbWUiLCAiZmluZCIsICJ0ZXh0IiwgImxvZ0V2ZW50c1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJsZWxpbWl0IiwgImxlcHJvcCIsICJsZXVzZXIiLCAidXNlckNvbnRyaWJzUGFyYW1zIiwgInVjZGlyIiwgInVjbGltaXQiLCAidWNwcm9wIiwgInVjdXNlciIsICJtYXhEYXRlIiwgInVzZXJDb250cmlicyIsICJnZXQiLCAidXNlcmNvbnRyaWJzIiwgInRpbWVzdGFtcCIsICJsb2dFdmVudHMiLCAibG9nZXZlbnRzIiwgImxhc3RBY3RpdmVNZXNzYWdlIiwgInJlcGxhY2UiLCAiYXBwZW5kIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiQiLCAiZXJyIiwgImUiLCAiZiJdCn0K
