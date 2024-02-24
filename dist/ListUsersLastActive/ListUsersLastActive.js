/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/list-user-last-active.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=MediaWiki:Gadget-CommentsinLocalTime.js&oldid=48314651}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ListUsersLastActive}
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
//! src/ListUsersLastActive/modules/constant.ts
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
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
//! src/ListUsersLastActive/modules/checkLastActive.ts
var checkLastActive = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($element) {
    const userName = $element.find(".mw-userlink>bdi").text();
    const logEventsParams = {
      action: "query",
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
      const lastActiveMessage = maxDate ? "（".concat(window.wgULS("最后操作于", "最後動作於")).concat(adjustTime(maxDate), "）") : "（".concat(window.wgULS("从未有操作", "從未有動作"), "）");
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
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(($body) => {
  if (WG_CANONICAL_SPECIAL_PAGE_NAME !== "Listusers") {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL3V0aWwvYWRqdXN0VGltZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jaGVja0xhc3RBY3RpdmUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvTGlzdFVzZXJzTGFzdEFjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgfCBmYWxzZSA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJyk7XG5cbmV4cG9ydCB7V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FfTtcbiIsICJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthZGp1c3RUaW1lfSBmcm9tICcuL3V0aWwvYWRqdXN0VGltZSc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0xhc3RBY3RpdmUgPSBhc3luYyAoJGVsZW1lbnQ6IEpRdWVyeSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gJGVsZW1lbnQuZmluZCgnLm13LXVzZXJsaW5rPmJkaScpLnRleHQoKTtcblxuXHRjb25zdCBsb2dFdmVudHNQYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdGxldXNlcjogdXNlck5hbWUsXG5cdH07XG5cdGNvbnN0IHVzZXJDb250cmlic1BhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2RpcjogJ29sZGVyJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHRcdHVjcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0dWN1c2VyOiB1c2VyTmFtZSxcblx0fTtcblxuXHRsZXQgbWF4RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJDb250cmlicyA9IGF3YWl0IGFwaS5nZXQodXNlckNvbnRyaWJzUGFyYW1zKTtcblx0XHRpZiAodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXSkge1xuXHRcdFx0bWF4RGF0ZSA9IG5ldyBEYXRlKHVzZXJDb250cmlic1sncXVlcnknXS51c2VyY29udHJpYnNbMF0udGltZXN0YW1wIGFzIG51bWJlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nRXZlbnRzID0gYXdhaXQgYXBpLmdldChsb2dFdmVudHNQYXJhbXMpO1xuXHRcdGlmIChsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUobG9nRXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50c1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHRcdGlmICghbWF4RGF0ZSB8fCBkYXRlID4gbWF4RGF0ZSkge1xuXHRcdFx0XHRtYXhEYXRlID0gZGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBsYXN0QWN0aXZlTWVzc2FnZTogc3RyaW5nID0gbWF4RGF0ZVxuXHRcdFx0PyBg77yIJHt3aW5kb3cud2dVTFMoJ+acgOWQjuaTjeS9nOS6jicsICfmnIDlvozli5XkvZzmlrwnKX0ke2FkanVzdFRpbWUobWF4RGF0ZSl977yJYFxuXHRcdFx0OiBg77yIJHt3aW5kb3cud2dVTFMoJ+S7juacquacieaTjeS9nCcsICflvp7mnKrmnInli5XkvZwnKX3vvIlgO1xuXHRcdCRlbGVtZW50LmFwcGVuZChsYXN0QWN0aXZlTWVzc2FnZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0xpc3RVc2Vyc0xhc3RBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge2NoZWNrTGFzdEFjdGl2ZX07XG4iLCAiLyoqXG4gKiDkuo5bW1NwZWNpYWw6TGlzdHVzZXJzXV3mmL7npLrkvb/nlKjogIXmnIDlkI7nvJbovpHml7bpl7RcbiAqL1xuaW1wb3J0IHtXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2NoZWNrTGFzdEFjdGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FICE9PSAnTGlzdHVzZXJzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0PnVsPmxpJykpIHtcblx0XHR2b2lkIGNoZWNrTGFzdEFjdGl2ZSgkKGVsZW1lbnQpKTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGlDQUFpREMsR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEI7O0FDQWpHLElBQU1DLGlCQUFrQkMsWUFBb0M7QUFDM0QsUUFBTUMsZUFDTCxPQUFPRCxXQUFXLFlBQVlBLFNBQVMsS0FBQSxJQUFBRSxPQUFTRixPQUFPRyxTQUFTLENBQUMsSUFBS0gsT0FBT0csU0FBUztBQUV2RixTQUFPRjtBQUNSO0FBRUEsSUFBTUcsYUFBY0MsVUFBdUI7QUFDMUMsTUFBSUM7QUFFSixNQUFJQyxRQUFjLG9CQUFJQyxLQUFLO0FBQzNCLFFBQU1DLFlBQWtCLG9CQUFJRCxLQUFLO0FBQ2pDLFFBQU1FLFdBQWlCLG9CQUFJRixLQUFLO0FBQ2hDQyxZQUFVRSxRQUFRRixVQUFVRyxRQUFRLElBQUksQ0FBQztBQUN6Q0YsV0FBU0MsUUFBUUQsU0FBU0UsUUFBUSxJQUFJLENBQUM7QUFHdkMsUUFBTUMsWUFBcUIsS0FBS1IsS0FBS1Msa0JBQWtCLElBQUs7QUFDNUQsUUFBTUMsb0JBQTRCRixhQUFhLElBQUEsSUFBQVgsT0FBUVcsU0FBUyxJQUFBLElBQUFYLE9BQVNjLEtBQUtDLElBQUlKLFNBQVMsQ0FBQztBQUc1RixRQUFNSyxPQUFlYixLQUFLYyxZQUFZO0FBQ3RDLFFBQU1DLFFBQWdCckIsZUFBZU0sS0FBS2dCLFNBQVMsSUFBSSxDQUFDO0FBQ3hELFFBQU1DLE1BQWNqQixLQUFLTyxRQUFRO0FBQ2pDLFFBQU1XLE9BQWVDLE9BQU9DLFNBQVNwQixLQUFLcUIsU0FBUyxFQUFFdkIsU0FBUyxHQUFHLEVBQUU7QUFDbkUsUUFBTXdCLFNBQWlCNUIsZUFBZU0sS0FBS3VCLFdBQVcsQ0FBQztBQUd2RCxNQUFJVixTQUFTWCxNQUFNWSxZQUFZLEtBQUtDLFVBQVVyQixlQUFlUSxNQUFNYyxTQUFTLElBQUksQ0FBQyxLQUFLQyxRQUFRZixNQUFNSyxRQUFRLEdBQUc7QUFDOUdOLFdBQU87RUFDUixXQUNDWSxTQUFTVCxVQUFVVSxZQUFZLEtBQy9CQyxVQUFVckIsZUFBZVUsVUFBVVksU0FBUyxJQUFJLENBQUMsS0FDakRDLFFBQVFiLFVBQVVHLFFBQVEsR0FDekI7QUFDRE4sV0FBTztFQUNSLFdBQ0NZLFNBQVNSLFNBQVNTLFlBQVksS0FDOUJDLFVBQVVyQixlQUFlVyxTQUFTVyxTQUFTLElBQUksQ0FBQyxLQUNoREMsUUFBUVosU0FBU0UsUUFBUSxHQUN4QjtBQUNETixXQUFPO0VBQ1IsT0FBTztBQUNOQyxZQUFRLElBQUlDLEtBQUtELE1BQU1ZLFlBQVksR0FBR1osTUFBTWMsU0FBUyxHQUFHZCxNQUFNSyxRQUFRLENBQUM7QUFDdkVQLFdBQU8sSUFBSUcsS0FBS0gsS0FBS2MsWUFBWSxHQUFHZCxLQUFLZ0IsU0FBUyxHQUFHaEIsS0FBS08sUUFBUSxDQUFDO0FBQ25FTixXQUFBLEdBQUFKLE9BQVVnQixNQUFJLEdBQUEsRUFBQWhCLE9BQUlILGVBQWVxQixLQUFLLEdBQUMsR0FBQSxFQUFBbEIsT0FBSUgsZUFBZXVCLEdBQUcsR0FBQyxHQUFBO0VBQy9EO0FBRUEsUUFBTU8sYUFBQSxHQUFBM0IsT0FBd0JILGVBQWV3QixJQUFJLEdBQUMsR0FBQSxFQUFBckIsT0FBSXlCLFFBQU0sR0FBQTtBQUU1RCxTQUFBLEdBQUF6QixPQUFVSSxNQUFJLElBQUEsRUFBQUosT0FBSzJCLFlBQVUsT0FBQSxFQUFBM0IsT0FBUWEsbUJBQWlCLEdBQUE7QUFDdkQ7O0FDbERDLElBQUFlLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsdUJBQUFoQyxPQUF5QzRCLE9BQU8sQ0FBRTs7QUNBdEUsSUFBTUssa0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBa0IsV0FBT0MsVUFBb0M7QUFDbEUsVUFBTUMsV0FBbUJELFNBQVNFLEtBQUssa0JBQWtCLEVBQUVDLEtBQUs7QUFFaEUsVUFBTUMsa0JBQTJDO01BQ2hEQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxTQUFTO01BQ1RDLFFBQVE7TUFDUkMsUUFBUVQ7SUFDVDtBQUNBLFVBQU1VLHFCQUFpRDtNQUN0RE4sUUFBUTtNQUNSTyxRQUFRO01BQ1JOLGVBQWU7TUFDZkMsTUFBTTtNQUNOTSxPQUFPO01BQ1BDLFNBQVM7TUFDVEMsUUFBUTtNQUNSQyxRQUFRZjtJQUNUO0FBRUEsUUFBSWdCO0FBRUosUUFBSTtBQUNILFlBQU1DLGVBQUEsTUFBcUJ2QixJQUFJbkMsSUFBSW1ELGtCQUFrQjtBQUNyRCxVQUFJTyxhQUFhLE9BQU8sRUFBRUMsYUFBYSxDQUFDLEdBQUc7QUFDMUNGLGtCQUFVLElBQUkvQyxLQUFLZ0QsYUFBYSxPQUFPLEVBQUVDLGFBQWEsQ0FBQyxFQUFFQyxTQUFtQjtNQUM3RTtBQUVBLFlBQU1DLFlBQUEsTUFBa0IxQixJQUFJbkMsSUFBSTRDLGVBQWU7QUFDL0MsVUFBSWlCLFVBQVUsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRztBQUNwQyxjQUFNdEQsT0FBYSxJQUFJRSxLQUFLbUQsVUFBVSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxFQUFFRixTQUFtQjtBQUMvRSxZQUFJLENBQUNILFdBQVdqRCxPQUFPaUQsU0FBUztBQUMvQkEsb0JBQVVqRDtRQUNYO01BQ0Q7QUFFQSxZQUFNdUQsb0JBQTRCTixVQUFBLElBQUFyRCxPQUMzQjRELE9BQU9DLE1BQU0sU0FBUyxPQUFPLENBQUMsRUFBQTdELE9BQUdFLFdBQVdtRCxPQUFPLEdBQUMsR0FBQSxJQUFBLElBQUFyRCxPQUNwRDRELE9BQU9DLE1BQU0sU0FBUyxPQUFPLEdBQUMsR0FBQTtBQUNyQ3pCLGVBQVMwQixPQUFPSCxpQkFBaUI7SUFDbEMsU0FBU0ksT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0scUNBQXFDQSxLQUFLO0lBQ3pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0E3Q005QixpQkFBQWdDLElBQUE7QUFBQSxXQUFBL0IsS0FBQWdDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNFTixJQUFBQyxxQkFBc0J0QyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS3NDLG1CQUFBQyxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQzdELE1BQUk5RSxtQ0FBbUMsYUFBYTtBQUNuRDtFQUNEO0FBQUEsTUFBQStFLFlBQUFDLDJCQUVzQkYsTUFBTWpDLEtBQUssd0JBQXdCLENBQUEsR0FBQW9DO0FBQUEsTUFBQTtBQUF6RCxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE0RDtBQUFBLFlBQWpEQyxVQUFBSixNQUFBSztBQUNWLFdBQUs5QyxnQkFBZ0IrQyxFQUFFRixPQUFPLENBQUM7SUFDaEM7RUFBQSxTQUFBRyxLQUFBO0FBQUFULGNBQUFVLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFULGNBQUFXLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImFkZExlYWRpbmdaZXJvIiwgIm51bWJlciIsICJudW1iZXJTdHJpbmciLCAiY29uY2F0IiwgInRvU3RyaW5nIiwgImFkanVzdFRpbWUiLCAidGltZSIsICJkYXRlIiwgInRvZGF5IiwgIkRhdGUiLCAieWVzdGVyZGF5IiwgInRvbW9ycm93IiwgInNldERhdGUiLCAiZ2V0RGF0ZSIsICJ1dGNPZmZzZXQiLCAiZ2V0VGltZXpvbmVPZmZzZXQiLCAidXRjT2Zmc2V0VG9TdHJpbmciLCAiTWF0aCIsICJhYnMiLCAieWVhciIsICJnZXRGdWxsWWVhciIsICJtb250aCIsICJnZXRNb250aCIsICJkYXkiLCAiaG91ciIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZ2V0SG91cnMiLCAibWludXRlIiwgImdldE1pbnV0ZXMiLCAiaG91ck1pbnV0ZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjaGVja0xhc3RBY3RpdmUiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICIkZWxlbWVudCIsICJ1c2VyTmFtZSIsICJmaW5kIiwgInRleHQiLCAibG9nRXZlbnRzUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAibGVsaW1pdCIsICJsZXByb3AiLCAibGV1c2VyIiwgInVzZXJDb250cmlic1BhcmFtcyIsICJmb3JtYXQiLCAidWNkaXIiLCAidWNsaW1pdCIsICJ1Y3Byb3AiLCAidWN1c2VyIiwgIm1heERhdGUiLCAidXNlckNvbnRyaWJzIiwgInVzZXJjb250cmlicyIsICJ0aW1lc3RhbXAiLCAibG9nRXZlbnRzIiwgImxvZ2V2ZW50cyIsICJsYXN0QWN0aXZlTWVzc2FnZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiYXBwZW5kIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJlcnIiLCAiZSIsICJmIl0KfQo=
