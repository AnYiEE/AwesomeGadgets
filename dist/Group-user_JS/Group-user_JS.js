/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-SousPages.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-CleanDeleteReasons.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Group-user_JS}
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

// dist/Group-user_JS/Group-user_JS.js
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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-user_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-user_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-user_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Log: (0, import_ext_gadget.localize)({
      en: "Log",
      ja: "ログ",
      "zh-hans": "日志",
      "zh-hant": "日誌"
    }),
    Subpages: (0, import_ext_gadget.localize)({
      en: "Subpage",
      ja: "子ページ",
      "zh-hans": "子页面",
      "zh-hant": "子頁面"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Group-user_JS/modules/addLog.ts
var addLog = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 2, 3].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: wgPageName
  }), getMessage("Log"), "t-log");
};
//! src/Group-user_JS/modules/addSubpage.ts
var addSubpage = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 0, 14].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(wgPageName)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixReason.ts
var fixReason = ($body) => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction === "delete") {
    const $wpReason = $body.find("input[name=wpReason]");
    if (!$wpReason.length) {
      return;
    }
    const autoReasonRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoReasonRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  switch (wgCanonicalSpecialPageName) {
    case "MassEditRegex":
      $body.find("#wpSummaryLabel").html($body.find("#wpSummaryLabel").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
      break;
    case "ReplaceText":
      $body.find("input[name=doAnnounce]").prop({
        checked: false,
        disabled: true
      });
      break;
  }
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "LinkSearch") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find('.mw-spcontent a[href^="/wiki"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      $("<span>").append(" （", $("<a>").attr("href", "".concat(element.href, "?action=edit")).text(getMessage("Edit")), "）").insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Group-user_JS/modules/loadGadgetEditForm.ts
var loadGadgetEditForm = () => {
  const EDIT_GADGETS = ["ext.gadget.EditForm", "ext.gadget.EditForm_JS"];
  const usingEditFormJS = (gadgets) => {
    void mw.loader.using(gadgets);
  };
  const {
    wgAction
  } = mw.config.get();
  if (["edit", "submit"].includes(wgAction)) {
    usingEditFormJS(EDIT_GADGETS);
  }
};
//! src/Group-user_JS/modules/smartEditIntro.ts
var smartEditIntro = ($body) => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgCategories
  } = mw.config.get();
  if (!wgCategories) {
    return;
  }
  const $target = $body.find(".mw-editsection, #ca-edit, #ca-addsection").find("a");
  const addEditIntro = (name) => {
    var _iterator2 = _createForOfIteratorHelper($target), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.href = "".concat(element.href, "&editintro=").concat(name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  switch (wgNamespaceNumber) {
    case 0:
      if (wgCategories.includes("全部消歧义页面")) {
        addEditIntro("Template:Disambig_editintro");
      }
      if (wgCategories.includes("在世人物")) {
        addEditIntro("Template:BLP_editintro");
      }
      if (wgCategories.some((element) => {
        return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(element);
      })) {
        addEditIntro("Template:BLP_editintro");
      }
      break;
    case 4:
      if (wgCategories.includes("有兽档案馆条例完整列表")) {
        addEditIntro("Template:Policy_editintro");
      }
      break;
    case 8:
    case 12: {
      if (wgCategories.includes("CC-BY-NC-SA-4.0")) {
        addEditIntro("Template:NonCommercial_editintro");
      }
      if (wgCategories.includes("GPL-3.0")) {
        addEditIntro("Template:GPL-3.0_editintro");
      }
      if (wgCategories.includes("GPL-2.0-or-later")) {
        addEditIntro("Template:GPL-2.0-or-later_editintro");
      }
      if (wgCategories.includes("MIT许可证")) {
        addEditIntro("Template:MIT_editintro");
      }
      const $copywarn = $body.find("#editpage-copywarn");
      const $editintro = $body.find(".mw-editintro");
      if (["edit", "submit"].includes(wgAction) && $copywarn && $editintro) {
        $editintro.appendTo($copywarn);
      }
      break;
    }
  }
};
//! src/Group-user_JS/modules/smartNewSection.ts
var smartNewSection = ($body) => {
  if (!mw.user.options.get("discussiontools-newtopictool") || !mw.user.options.get("discussiontools-betaenable")) {
    const $caTalk = $body.find("#ca-talk");
    const {
      wgNamespaceNumber
    } = mw.config.get();
    if ($caTalk.hasClass("new") && wgNamespaceNumber !== 2) {
      const $a = $("a:first", $caTalk);
      $a.attr("href", "".concat($a.attr("href"), "&section=new"));
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  void loadGadgetEditForm();
  void (0, import_ext_gadget2.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixReason($body);
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvb3B0aW9ucy5qc29uIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZFN1YnBhZ2UudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhSZWFzb24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL0dyb3VwLXVzZXJfSlMudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0RWRpdEludHJvLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvc21hcnROZXdTZWN0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXVzZXJfSlNfX0luaXRpYWxpemVkXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0Jyxcblx0XHRcdGphOiAn57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK8nLFxuXHRcdH0pLFxuXHRcdExvZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2cnLFxuXHRcdFx0amE6ICfjg63jgrAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pel5b+XJyxcblx0XHRcdCd6aC1oYW50JzogJ+aXpeiqjCcsXG5cdFx0fSksXG5cdFx0U3VicGFnZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3VicGFnZScsXG5cdFx0XHRqYTogJ+WtkOODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZDpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Q6aCB6Z2iJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRMb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9ncycsIHtcblx0XHRcdHBhZ2U6IHdnUGFnZU5hbWUsXG5cdFx0fSksXG5cdFx0Z2V0TWVzc2FnZSgnTG9nJyksXG5cdFx0J3QtbG9nJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2d9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyog5ZCR5L6n6L655qCP5re75Yqg4oCc5a2Q6aG16Z2i4oCd6I+c5Y2VICovXG5jb25zdCBhZGRTdWJwYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbLTEsIDAsIDE0XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybChgU3BlY2lhbDpQcmVmaXhJbmRleC8ke3dnUGFnZU5hbWV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRTdWJwYWdlfTtcbiIsICJjb25zdCBmaXhSZWFzb24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnZGVsZXRlJykge1xuXHRcdGNvbnN0ICR3cFJlYXNvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFJlYXNvbl0nKTtcblx0XHRpZiAoISR3cFJlYXNvbi5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhdXRvUmVhc29uUmVnRXhwOiBSZWdFeHAgPSAvKOWGheWuuXxwYWdlIHdhcyBlbXB0eXxjb250ZW50IGJlZm9yZSBibGFua2luZyB3YXMpL2k7XG5cdFx0aWYgKGF1dG9SZWFzb25SZWdFeHAudGVzdChTdHJpbmcoJHdwUmVhc29uLnZhbCgpKSkpIHtcblx0XHRcdCR3cFJlYXNvbi52YWwoJycpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtmaXhSZWFzb259O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHN3aXRjaCAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUpIHtcblx0XHRjYXNlICdNYXNzRWRpdFJlZ2V4Jzpcblx0XHRcdCRib2R5LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpLmh0bWwoXG5cdFx0XHRcdCRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpXG5cdFx0XHRcdFx0LnRleHQoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsjXFwuXFx8KC4rPyldXS9nLCAnJDEnKVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1JlcGxhY2VUZXh0Jzpcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9ZG9Bbm5vdW5jZV0nKS5wcm9wKHtcblx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YWRkTG9nfSBmcm9tICcuL21vZHVsZXMvYWRkTG9nJztcbmltcG9ydCB7YWRkU3VicGFnZX0gZnJvbSAnLi9tb2R1bGVzL2FkZFN1YnBhZ2UnO1xuaW1wb3J0IHtmaXhSZWFzb259IGZyb20gJy4vbW9kdWxlcy9maXhSZWFzb24nO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufSBmcm9tICcuL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24nO1xuaW1wb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19IGZyb20gJy4vbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog57yW6L6R5o+Q56S677yIRWRpdEludHJv77yJICovXG5cdFx0c21hcnRFZGl0SW50cm8oJGJvZHkpO1xuXHRcdC8qIOaZuuiDveiuqOiuuumhtee8lui+ke+8iOaWsOW7uu+8iSAqL1xuXHRcdHNtYXJ0TmV3U2VjdGlvbigkYm9keSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufTtcbiIsICJjb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cdGNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKGdhZGdldHMpO1xuXHR9O1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiY29uc3Qgc21hcnRFZGl0SW50cm8gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ2F0ZWdvcmllc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dDYXRlZ29yaWVzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKHdnTmFtZXNwYWNlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+WcqOS4luS6uueJqScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR3Z0NhdGVnb3JpZXMuc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIC/mipfml6U/W+aImOaIsF1b5LqJ54itXT9b54m654qnXeeJsnzng4jlo6t8W+aImOaIsF1b5paX6ayl6aymXeiLsembhHzoi7Hpm4Q/5qihW+evhOiMg10/fOiLsembhD/ng4jlo6s/fOS6uuawkSjmlZnogrLlrrZ8W+iJuuiXnV1b5pyv6KGTXeWutnznp5Fb5a2m5a24XeWutnzoi7Hpm4R85qW35qihKXzlhbHlkoxb5Zu95ZyLXVvli4vli7Nd56ugfFvkuIPlhatd5LiAW+WLi+WLs13nq6Bb542y6I63XeW+l+iAhXxb5LiA54m5XeetieWKn+iHoy8udGVzdChcblx0XHRcdFx0XHRcdGVsZW1lbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5pyJ5YW95qGj5qGI6aaG5p2h5L6L5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnQ0MtQlktTkMtU0EtNC4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpOb25Db21tZXJjaWFsX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnR1BMLTMuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTMuMF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdNSVTorrjlj6/or4EnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk1JVF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRjb3B5d2FybjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJyk7XG5cdFx0XHRjb25zdCAkZWRpdGludHJvOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctZWRpdGludHJvJyk7XG5cdFx0XHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0aWYgKCRjYVRhbGsuaGFzQ2xhc3MoJ25ldycpICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3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MUJ5QyxtQkFBZXpDLEtBQUs7QUFFcEJvRCxvQkFBZ0JwRCxLQUFLO0VBQ3RCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJvcHRpb25zX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29uZmlnS2V5IiwgImRlZmF1bHQiLCAib3B0aW9uc19kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiTG9nIiwgIlN1YnBhZ2VzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRMb2ciLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiZ2V0VXJsIiwgInBhZ2UiLCAiYWRkU3VicGFnZSIsICJjb25jYXQiLCAiZml4UmVhc29uIiwgIiRib2R5IiwgIndnQWN0aW9uIiwgIiR3cFJlYXNvbiIsICJmaW5kIiwgImxlbmd0aCIsICJhdXRvUmVhc29uUmVnRXhwIiwgInRlc3QiLCAiU3RyaW5nIiwgInZhbCIsICJmaXhTdW1tYXJ5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImh0bWwiLCAidGV4dCIsICJyZXBsYWNlIiwgInByb3AiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibGlua1NlYXJjaEVkaXRCdXR0b24iLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJhcHBlbmQiLCAiYXR0ciIsICJocmVmIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAibG9hZEdhZGdldEVkaXRGb3JtIiwgIkVESVRfR0FER0VUUyIsICJ1c2luZ0VkaXRGb3JtSlMiLCAiZ2FkZ2V0cyIsICJsb2FkZXIiLCAidXNpbmciLCAic21hcnRFZGl0SW50cm8iLCAid2dDYXRlZ29yaWVzIiwgIiR0YXJnZXQiLCAiYWRkRWRpdEludHJvIiwgIm5hbWUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAic29tZSIsICIkY29weXdhcm4iLCAiJGVkaXRpbnRybyIsICJhcHBlbmRUbyIsICJzbWFydE5ld1NlY3Rpb24iLCAidXNlciIsICJvcHRpb25zIiwgIiRjYVRhbGsiLCAiaGFzQ2xhc3MiLCAiJGEiLCAidXNlckpTIiwgImNvbmZpZ0tleTIiLCAic2V0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
