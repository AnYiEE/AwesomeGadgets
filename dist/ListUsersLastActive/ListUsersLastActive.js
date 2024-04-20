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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy91dGlsL2FkanVzdFRpbWUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvb3B0aW9ucy5qc29uIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9MaXN0VXNlcnNMYXN0QWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJykgJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnTGFzdCBhY3RpdmUgb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xhc3QgYWN0aXZlIG9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acgOWQjuaTjeS9nOS6jiQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+acgOW+jOWLleS9nOaWvCQxJyxcblx0XHR9KSxcblx0XHQnTmV2ZXIgYWN0aXZlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXZlciBhY3RpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LuO5pyq5pyJ5pON5L2cJyxcblx0XHRcdCd6aC1oYW50JzogJ+W+nuacquacieWLleS9nCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRqdXN0VGltZX0gZnJvbSAnLi91dGlsL2FkanVzdFRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY2hlY2tMYXN0QWN0aXZlID0gYXN5bmMgKCRlbGVtZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9ICRlbGVtZW50LmZpbmQoJy5tdy11c2VybGluayA+IGJkaScpLnRleHQoKTtcblxuXHRjb25zdCBsb2dFdmVudHNQYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdGxldXNlcjogdXNlck5hbWUsXG5cdH07XG5cdGNvbnN0IHVzZXJDb250cmlic1BhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2RpcjogJ29sZGVyJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHRcdHVjcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0dWN1c2VyOiB1c2VyTmFtZSxcblx0fTtcblxuXHRsZXQgbWF4RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJDb250cmlicyA9IGF3YWl0IGFwaS5nZXQodXNlckNvbnRyaWJzUGFyYW1zKTtcblx0XHRpZiAodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXSkge1xuXHRcdFx0bWF4RGF0ZSA9IG5ldyBEYXRlKHVzZXJDb250cmlic1sncXVlcnknXS51c2VyY29udHJpYnNbMF0udGltZXN0YW1wIGFzIG51bWJlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nRXZlbnRzID0gYXdhaXQgYXBpLmdldChsb2dFdmVudHNQYXJhbXMpO1xuXHRcdGlmIChsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUobG9nRXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50c1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHRcdGlmICghbWF4RGF0ZSB8fCBkYXRlID4gbWF4RGF0ZSkge1xuXHRcdFx0XHRtYXhEYXRlID0gZGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBsYXN0QWN0aXZlTWVzc2FnZTogc3RyaW5nID1cblx0XHRcdGdldE1lc3NhZ2UoJygnKSArXG5cdFx0XHQobWF4RGF0ZSA/IGdldE1lc3NhZ2UoJ0xhc3QgYWN0aXZlIG9uJykucmVwbGFjZSgnJDEnLCBhZGp1c3RUaW1lKG1heERhdGUpKSA6IGdldE1lc3NhZ2UoJ05ldmVyIGFjdGl2ZScpKSArXG5cdFx0XHRnZXRNZXNzYWdlKCcpJyk7XG5cblx0XHQkZWxlbWVudC5hcHBlbmQobGFzdEFjdGl2ZU1lc3NhZ2UpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tMaXN0VXNlcnNMYXN0QWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0xhc3RBY3RpdmV9O1xuIiwgIi8qKlxuICog5LqOW1tTcGVjaWFsOkxpc3R1c2Vyc11d5pi+56S65L2/55So6ICF5pyA5ZCO57yW6L6R5pe26Ze0XG4gKi9cbmltcG9ydCB7Y2hlY2tMYXN0QWN0aXZlfSBmcm9tICcuL21vZHVsZXMvY2hlY2tMYXN0QWN0aXZlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnTGlzdHVzZXJzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0PnVsPmxpJykpIHtcblx0XHR2b2lkIGNoZWNrTGFzdEFjdGl2ZSgkKGVsZW1lbnQpKTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LCAiYWRqdXN0VGltZSIsICJ0aW1lIiwgImRhdGUiLCAidG9kYXkiLCAiRGF0ZSIsICJ5ZXN0ZXJkYXkiLCAidG9tb3Jyb3ciLCAic2V0RGF0ZSIsICJnZXREYXRlIiwgInV0Y09mZnNldCIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ1dGNPZmZzZXRUb1N0cmluZyIsICJNYXRoIiwgImFicyIsICJ5ZWFyIiwgImdldEZ1bGxZZWFyIiwgIm1vbnRoIiwgImdldE1vbnRoIiwgImRheSIsICJob3VyIiwgIk51bWJlciIsICJwYXJzZUludCIsICJnZXRIb3VycyIsICJtaW51dGUiLCAiZ2V0TWludXRlcyIsICJob3VyTWludXRlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNoZWNrTGFzdEFjdGl2ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRlbGVtZW50IiwgInVzZXJOYW1lIiwgImZpbmQiLCAidGV4dCIsICJsb2dFdmVudHNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAibGVsaW1pdCIsICJsZXByb3AiLCAibGV1c2VyIiwgInVzZXJDb250cmlic1BhcmFtcyIsICJ1Y2RpciIsICJ1Y2xpbWl0IiwgInVjcHJvcCIsICJ1Y3VzZXIiLCAibWF4RGF0ZSIsICJ1c2VyQ29udHJpYnMiLCAiZ2V0IiwgInVzZXJjb250cmlicyIsICJ0aW1lc3RhbXAiLCAibG9nRXZlbnRzIiwgImxvZ2V2ZW50cyIsICJsYXN0QWN0aXZlTWVzc2FnZSIsICJyZXBsYWNlIiwgImFwcGVuZCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImVyciIsICJlIiwgImYiXQp9Cg==
