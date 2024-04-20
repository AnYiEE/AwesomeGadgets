/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/MarkBlocked}
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

// dist/MarkBlocked/MarkBlocked.js
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
//! src/MarkBlocked/modules/constant.ts
var CLASS_NAME = "gadget-mark_blocked";
var CLASS_NAME_LOADING = "".concat(CLASS_NAME, "--loading");
var CLASS_NAME_USERLINK = "".concat(CLASS_NAME, "-userlink");
var CLASS_NAME_USERLINK_INDEF = "".concat(CLASS_NAME_USERLINK, "--indef");
var CLASS_NAME_USERLINK_PARTIAL = "".concat(CLASS_NAME_USERLINK, "--partial");
var CLASS_NAME_USERLINK_TEMP = "".concat(CLASS_NAME_USERLINK, "--temp");
var WG_ACTION = mw.config.get("wgAction");
var WG_ARTICLE_PATH = mw.config.get("wgArticlePath");
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_SCRIPT = mw.config.get("wgScript");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    partial: (0, import_ext_gadget.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget.localize)({
      en: "second",
      zh: "秒"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkBlocked/modules/util/parseTime.ts
var zz = (v) => {
  let _v = String(v);
  if (v <= 9) {
    _v = "0".concat(v);
  }
  return _v;
};
var inHours = (ms) => {
  let mm = Math.floor(ms / 6e4);
  if (!mm) {
    return "".concat(Math.floor(ms / 1e3)).concat(getMessage("s"));
  }
  let hh = Math.floor(mm / 60);
  mm %= 60;
  const dd = Math.floor(hh / 24);
  hh %= 24;
  if (dd) {
    return "".concat(dd + (dd < 10 ? ".".concat(zz(hh)) : "")).concat(getMessage("d"));
  }
  return "".concat(hh, ":").concat(zz(mm));
};
var parseTS = (string) => {
  const m = string.replace(/\D/g, "").match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])).getTime();
};
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var version = "2.0";
//! src/MarkBlocked/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const userNamespaceTitles2 = [];
  for (var _i = 0, _Object$entries = Object.entries(WG_NAMESPACE_IDS); _i < _Object$entries.length; _i++) {
    const [namespace, id] = _Object$entries[_i];
    if (!userNamespaceNumbers.includes(id)) {
      continue;
    }
    userNamespaceTitles2[userNamespaceTitles2.length] = "".concat(mw.util.escapeRegExp(namespace.replace(/_/g, " ")), ":");
  }
  return userNamespaceTitles2;
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var userNamespaceTitles = generateUserNamespaceTitles();
var userTitleRegex = new RegExp("^(".concat(userNamespaceTitles.join("|"), "|").concat(contributionsPageAlias, "\\/)+([^\\/#]+)$"), "i");
var articleRegex = new RegExp("".concat(WG_ARTICLE_PATH.replace("$1", ""), "([^#]+)"));
var scriptRegex = new RegExp("^".concat(WG_SCRIPT, "\\?title=([^#&]+)"));
var generateUserLinks = ($content) => {
  const userLinks = {};
  var _iterator = _createForOfIteratorHelper($content.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step.value;
      const $element = $(element);
      if ($element.hasClass("mw-changeslist-date") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
        continue;
      }
      const href = $element.attr("href");
      if (!href) {
        continue;
      }
      if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ""))) {
        continue;
      }
      try {
        if (new mw.Uri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new mw.Uri(location.href + href).host !== location.host) {
            continue;
          }
        } catch {
          continue;
        }
      }
      let pageTitle;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        pageTitle = match[1];
      } else if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        pageTitle = match[1];
      } else {
        continue;
      }
      pageTitle = decodeURIComponent(pageTitle).replace(/_/g, " ");
      const userExecArray = userTitleRegex.exec(pageTitle);
      if (!userExecArray || typeof userExecArray[2] !== "string") {
        continue;
      }
      let user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
      if (mw.util.isIPv6Address(user)) {
        user = user.toUpperCase();
      }
      $element.addClass(CLASS_NAME_USERLINK);
      (_userLinks$_user = userLinks[_user = user]) !== null && _userLinks$_user !== void 0 ? _userLinks$_user : userLinks[_user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  $content.addClass(CLASS_NAME_LOADING);
  let apiRequestCount = 0;
  const markLinks = (response) => {
    var _response$query;
    if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks)) {
      return;
    }
    var _iterator2 = _createForOfIteratorHelper(response["query"].blocks), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const block = _step2.value;
        const isPartialBlcok = typeof block.restrictions === "string" && block.restrictions !== "";
        let className = CLASS_NAME_USERLINK_PARTIAL;
        let blockTime = "";
        if (block.expiry.startsWith("in")) {
          if (!isPartialBlcok) {
            className = CLASS_NAME_USERLINK_INDEF;
          }
          blockTime = getMessage("infinity");
        } else {
          if (!isPartialBlcok) {
            className = CLASS_NAME_USERLINK_TEMP;
          }
          blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
        }
        let tip = getMessage("Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
        tip = isPartialBlcok ? tip.replace("$5", getMessage("partial")) : tip.replace("$5", "");
        const $links = userLinks[block.user];
        if (!$links) {
          continue;
        }
        var _iterator3 = _createForOfIteratorHelper($links), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const $link = _step3.value;
            $link.addClass(className).attr("title", $link.attr("title") + tip);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (--apiRequestCount === 0) {
      $content.removeClass(CLASS_NAME_LOADING);
    }
  };
  while (users.length > 0) {
    apiRequestCount++;
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "blocks",
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      bkusers: users.splice(0, 50).join("|")
    };
    api.post(params).then((response) => {
      markLinks(response);
    }).catch((error) => {
      console.error("[MarkBlocked] Ajax error:", error);
    });
  }
};
//! src/MarkBlocked/modules/addHook.ts
var addHook = () => {
  let isInit = false;
  mw.hook("wikipage.content").add(function markBlocked($content) {
    if (isInit) {
      return;
    }
    isInit = true;
    if (WG_ACTION === "view" && WG_NAMESPACE_NUMBER === 0) {
      $content = $content.find(".diff-title");
    }
    $content = $content.add("#ca-nstab-user");
    markBlockedUser($content);
  });
};
//! src/MarkBlocked/MarkBlocked.ts
if (!IS_WG_EDIT_OR_SUBMIT_ACTION) {
  addHook();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL21hcmtCbG9ja2VkVXNlci50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9hZGRIb29rLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9NYXJrQmxvY2tlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1tYXJrX2Jsb2NrZWQnO1xuY29uc3QgQ0xBU1NfTkFNRV9MT0FESU5HOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS0tbG9hZGluZ2A7XG5jb25zdCBDTEFTU19OQU1FX1VTRVJMSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS11c2VybGlua2A7XG5jb25zdCBDTEFTU19OQU1FX1VTRVJMSU5LX0lOREVGOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX1VTRVJMSU5LfS0taW5kZWZgO1xuY29uc3QgQ0xBU1NfTkFNRV9VU0VSTElOS19QQVJUSUFMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX1VTRVJMSU5LfS0tcGFydGlhbGA7XG5jb25zdCBDTEFTU19OQU1FX1VTRVJMSU5LX1RFTVA6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfVVNFUkxJTkt9LS10ZW1wYDtcblxuY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19BUlRJQ0xFX1BBVEg6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9JRFM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUVfTE9BRElORyxcblx0Q0xBU1NfTkFNRV9VU0VSTElOSyxcblx0Q0xBU1NfTkFNRV9VU0VSTElOS19JTkRFRixcblx0Q0xBU1NfTkFNRV9VU0VSTElOS19QQVJUSUFMLFxuXHRDTEFTU19OQU1FX1VTRVJMSU5LX1RFTVAsXG5cdFdHX0FDVElPTixcblx0V0dfQVJUSUNMRV9QQVRILFxuXHRXR19OQU1FU1BBQ0VfSURTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19TQ1JJUFQsXG5cdElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTixcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCB6eiA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgX3Y6IHN0cmluZyA9IFN0cmluZyh2KTtcblx0aWYgKHYgPD0gOSkge1xuXHRcdF92ID0gYDAke3Z9YDtcblx0fVxuXG5cdHJldHVybiBfdjtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke3p6KGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7enoobW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgIntcblx0XCJjb250cmlidXRpb25zUGFnZUFsaWFzXCI6IFwiU3BlY2lhbDpDb250cmlidXRpb25zXCIsXG5cdFwidXNlck5hbWVzcGFjZU51bWJlcnNcIjogWzIsIDNdLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX05BTUVTUEFDRV9JRFN9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyhXR19OQU1FU1BBQ0VfSURTKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtDTEFTU19OQU1FX1VTRVJMSU5LLCBXR19BUlRJQ0xFX1BBVEgsIFdHX1NDUklQVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke1dHX0FSVElDTEVfUEFUSC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7V0dfU0NSSVBUfVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0aWYgKG5ldyBtdy5VcmkoaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChuZXcgbXcuVXJpKGxvY2F0aW9uLmhyZWYgKyBocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgcGFnZVRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGVsZW1lbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9VU0VSTElOSyk7XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0IHtcblx0Q0xBU1NfTkFNRV9MT0FESU5HLFxuXHRDTEFTU19OQU1FX1VTRVJMSU5LX0lOREVGLFxuXHRDTEFTU19OQU1FX1VTRVJMSU5LX1BBUlRJQUwsXG5cdENMQVNTX05BTUVfVVNFUkxJTktfVEVNUCxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2luSG91cnMsIHBhcnNlVFN9IGZyb20gJy4vdXRpbC9wYXJzZVRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdCRjb250ZW50LmFkZENsYXNzKENMQVNTX05BTUVfTE9BRElORyk7XG5cblx0Ly8gQVBJIHJlcXVlc3Rcblx0dHlwZSBSZXNwb25zZSA9IHtcblx0XHRxdWVyeToge1xuXHRcdFx0YmxvY2tzPzogQXJyYXk8e1xuXHRcdFx0XHRieTogc3RyaW5nO1xuXHRcdFx0XHRleHBpcnk6IHN0cmluZztcblx0XHRcdFx0cmVhc29uOiBzdHJpbmc7XG5cdFx0XHRcdHJlc3RyaWN0aW9uczogc3RyaW5nIHwgc3RyaW5nW107XG5cdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHR9Pjtcblx0XHR9O1xuXHR9O1xuXHRsZXQgYXBpUmVxdWVzdENvdW50OiBudW1iZXIgPSAwO1xuXG5cdC8vIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3Ncblx0Y29uc3QgbWFya0xpbmtzID0gKHJlc3BvbnNlOiBSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRjb25zdCBpc1BhcnRpYWxCbGNvazogYm9vbGVhbiA9IHR5cGVvZiBibG9jay5yZXN0cmljdGlvbnMgPT09ICdzdHJpbmcnICYmIGJsb2NrLnJlc3RyaWN0aW9ucyAhPT0gJyc7IC8vIFBhcnRpYWwgYmxvY2tcblxuXHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gQ0xBU1NfTkFNRV9VU0VSTElOS19QQVJUSUFMO1xuXHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IENMQVNTX05BTUVfVVNFUkxJTktfSU5ERUY7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSBDTEFTU19OQU1FX1VTRVJMSU5LX1RFTVA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCbG9ja2VkJylcblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tibG9jay51c2VyXTtcblx0XHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHMgZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya19ibG9ja2VkLXVzZXJsaW5rLS1pbmRlZlxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrX2Jsb2NrZWQtdXNlcmxpbmstLXRlbXBcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya19ibG9ja2VkLXVzZXJsaW5rLS1wYXJ0aWFsXG5cdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoLS1hcGlSZXF1ZXN0Q291bnQgPT09IDApIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRjb250ZW50LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTE9BRElORyk7XG5cdFx0fVxuXHR9O1xuXG5cdHdoaWxlICh1c2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0YXBpUmVxdWVzdENvdW50Kys7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2Jsb2NrcycsXG5cdFx0XHRia2xpbWl0OiAxMDAsXG5cdFx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRcdGJrdXNlcnM6IHVzZXJzLnNwbGljZSgwLCA1MCkuam9pbignfCcpLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdG1hcmtMaW5rcyhyZXNwb25zZSBhcyBSZXNwb25zZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcjogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHtXR19BQ1RJT04sIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKFdHX0FDVElPTiA9PT0gJ3ZpZXcnICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmlmICghSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdGFkZEhvb2soKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7QUFDM0IsSUFBTUMscUJBQUEsR0FBQUMsT0FBZ0NGLFlBQVUsV0FBQTtBQUNoRCxJQUFNRyxzQkFBQSxHQUFBRCxPQUFpQ0YsWUFBVSxXQUFBO0FBQ2pELElBQU1JLDRCQUFBLEdBQUFGLE9BQXVDQyxxQkFBbUIsU0FBQTtBQUNoRSxJQUFNRSw4QkFBQSxHQUFBSCxPQUF5Q0MscUJBQW1CLFdBQUE7QUFDbEUsSUFBTUcsMkJBQUEsR0FBQUosT0FBc0NDLHFCQUFtQixRQUFBO0FBRS9ELElBQU1JLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsa0JBQTBCSCxHQUFHQyxPQUFPQyxJQUFJLGVBQWU7QUFDN0QsSUFBTUUsbUJBQTJDSixHQUFHQyxPQUFPQyxJQUFJ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ZUFBUzRELFlBQVlySSxrQkFBa0I7SUFDeEM7RUFDRDtBQUVBLFNBQU80RyxNQUFNL0MsU0FBUyxHQUFHO0FBQ3hCaUQ7QUFDQSxVQUFNd0IsU0FBK0I7TUFDcENDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsU0FBUztNQUNUQyxRQUFRLENBQUMsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLGFBQWEsTUFBTTtNQUN0RUMsU0FBU2pDLE1BQU1rQyxPQUFPLEdBQUcsRUFBRSxFQUFFekUsS0FBSyxHQUFHO0lBQ3RDO0FBQ0FoQixRQUFJMEYsS0FBS1QsTUFBTSxFQUNiVSxLQUFNaEMsY0FBbUI7QUFDekJELGdCQUFVQyxRQUFvQjtJQUMvQixDQUFDLEVBQ0FpQyxNQUFPQyxXQUF1QjtBQUM5QkMsY0FBUUQsTUFBTSw2QkFBNkJBLEtBQUs7SUFDakQsQ0FBQztFQUNIO0FBQ0Q7O0FDOUdBLElBQU1FLFVBQVVBLE1BQVk7QUFDM0IsTUFBSUMsU0FBa0I7QUFFdEI5SSxLQUFHK0ksS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxZQUFZL0UsVUFBZ0I7QUFDcEUsUUFBSTRFLFFBQVE7QUFDWDtJQUNEO0FBQ0FBLGFBQVM7QUFJVCxRQUFJL0ksY0FBYyxVQUFVTSx3QkFBd0IsR0FBRztBQUN0RDZELGlCQUFXQSxTQUFTSSxLQUFLLGFBQWE7SUFDdkM7QUFFQUosZUFBV0EsU0FBUzhFLElBQUksZ0JBQWdCO0FBRXhDNUMsb0JBQWdCbEMsUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDbkJBLElBQUksQ0FBQzNELDZCQUE2QjtBQUNqQ3NJLFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0xPQURJTkciLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfVVNFUkxJTksiLCAiQ0xBU1NfTkFNRV9VU0VSTElOS19JTkRFRiIsICJDTEFTU19OQU1FX1VTRVJMSU5LX1BBUlRJQUwiLCAiQ0xBU1NfTkFNRV9VU0VSTElOS19URU1QIiwgIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX0FSVElDTEVfUEFUSCIsICJXR19OQU1FU1BBQ0VfSURTIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfU0NSSVBUIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ6eiIsICJ2IiwgIl92IiwgIlN0cmluZyIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgIm5hbWVzcGFjZSIsICJpZCIsICJ1dGlsIiwgImVzY2FwZVJlZ0V4cCIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzIiwgInVzZXJUaXRsZVJlZ2V4IiwgIlJlZ0V4cCIsICJqb2luIiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgIl91c2VyIiwgIl91c2VyTGlua3MkX3VzZXIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgImhhc0NsYXNzIiwgInBhcmVudCIsICJocmVmIiwgImF0dHIiLCAiaXNJUHY2QWRkcmVzcyIsICJVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInVzZXIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiYWRkQ2xhc3MiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXIiLCAidXNlcnMiLCAia2V5cyIsICJhcGlSZXF1ZXN0Q291bnQiLCAibWFya0xpbmtzIiwgInJlc3BvbnNlIiwgIl9yZXNwb25zZSRxdWVyeSIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJyZW1vdmVDbGFzcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAiYmtsaW1pdCIsICJia3Byb3AiLCAiYmt1c2VycyIsICJzcGxpY2UiLCAicG9zdCIsICJ0aGVuIiwgImNhdGNoIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
