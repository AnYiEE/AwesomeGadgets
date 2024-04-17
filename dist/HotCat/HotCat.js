/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat/HotCat-check.js}
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

// dist/HotCat/HotCat.js
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
//! src/HotCat/modules/check.module.less
var catcheckInlineIcon = "check-module__catcheckInlineIcon_mJ5NDq";
//! src/HotCat/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var mwApi = (userAgent) => {
  return (0, import_ext_gadget.initMwApi)(userAgent);
};
//! src/HotCat/modules/check.ts
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelector(".checkcategories")) {
    return;
  }
  const api = mwApi("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " ").concat(catcheckInlineIcon)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self = this;
    const newVal = (_self$wpTextbox1$valu = self.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self.wpSummary.value));
      self.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true,
        text
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/HotCat.js
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "https://youshou.wiki/images/b/be/P_yes.svg/24px-P_yes.svg.png",
    existsNo: "https://youshou.wiki/images/4/42/P_no.svg/24px-P_no.svg.png",
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      let _a;
      if (!map) {
        return;
      }
      (_a = window.HotCat).shortcuts || (_a.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*";
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, "\\$1");
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result[result.length] = {
        match: curr_match
      };
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        interlanguageRE ? match = interlanguageRE.exec(copiedtext) : (
          // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
          // a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
          // and "tokipona".
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext)
        );
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    if (key) {
      key = "|".concat(key);
    }
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary[summary.length] = getMessage("messages-template_removed", toRemove);
        } else {
          summary[summary.length] = getMessage("messages-cat_removed", toRemove);
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary[summary.length] = getMessage("messages-cat_keychange", toAdd, k);
      } else {
        summary[summary.length] = getMessage("messages-cat_added", toAdd);
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary[summary.length] = getMessage("messages-uncat_removed");
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots["main"].content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, "\\$1");
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "main",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added[added.length] = edit.currentCategory;
          } else {
            changed[changed.length] = {
              from: edit.originalCategory,
              to: edit.currentCategory
            };
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted[deleted.length] = edit.originalCategory;
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary[summary.length] = "−".concat(getMessage("messages-short_catchange", deleted[i]));
        }
        if (deleted.length === 1) {
          shortSummary[shortSummary.length] = "−".concat(getMessage("messages-short_catchange", deleted[0]));
        } else if (deleted.length > 0) {
          shortSummary[shortSummary.length] = "− ".concat(multiChangeMsg(deleted.length));
        }
        for (i = 0; i < added.length; i++) {
          summary[summary.length] = "+".concat(getMessage("messages-short_catchange", added[i]));
        }
        if (added.length === 1) {
          shortSummary[shortSummary.length] = "+".concat(getMessage("messages-short_catchange", added[0]));
        } else if (added.length > 0) {
          shortSummary[shortSummary.length] = "+ ".concat(multiChangeMsg(added.length));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from));
          } else {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from));
          } else {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to));
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = "± ".concat(multiChangeMsg(changed.length));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles[titles.length] = match;
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles[titles.length] = "Category:".concat(v);
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        if (which.lastSelection) {
          which.lastSelection = {
            start: v[0].length,
            end: v[0].length
          };
        }
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve[toResolve.length] = editor;
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              if (!firstDab) {
                firstDab = element;
              }
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.parentNode.replaceChild(commitButton, multiSpan);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          if (!cat_prefix) {
            cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):"));
          }
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self = this;
      setTimeout(() => {
        self.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self.ime && self.lastKey === IME && !self.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self.keyCount === 0) {
              return self.processKey(event);
            }
          } else {
            if (key === ESC && self.lastKey !== IME && !self.resetKeySelection()) {
              self.cancel();
              return;
            }
            self.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self.lastKey = key;
          self.keyCount = 0;
          if (!self.ime && key === IME && !self.usesComposition) {
            self.ime = true;
          } else if (self.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === RET) {
            return self.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self.keyCount++;
          return self.processKey(event);
        });
        $(text).on("focus", () => {
          makeActive(self);
        });
        $(text).on(text.onbeforedeactivate !== void 0 && text.createTextRange ? "beforedeactivate" : "blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = true;
          });
          $(text).on("compositionend", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = false;
          });
          $(text).on("textInput", () => {
            self.ime = false;
            self.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self.usesComposition = false;
          self.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self.highlightSuggestion(0)) {
            self.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self.highlightSuggestion(0)) {
            self.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self.highlightSuggestion(0);
          self.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self.resetKeySelection();
            self.text.focus();
            setTimeout(() => {
              self.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self.engine = self.engineSelector.options[self.engineSelector.selectedIndex].value;
            self.text.focus();
            self.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.append(make(" ", true));
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          self.state = self.originalState;
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self.text.readOnly = false;
          if (!cb.cancelled) {
            self.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self.callbackObj) {
            self.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...(0, import_ext_gadget2.generateArray)(titles)];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe >= 0) {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      } else {
        this.currentKey = null;
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        if (is_webkit && !document.evaluate) {
          return window["inner".concat(what)];
        }
        const s = "client".concat(what);
        if (window.opera) {
          return $("body")[0][s];
        }
        return (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.createTextRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      } else if (this.text.createTextRange) {
        const new_selection = this.text.createTextRange();
        new_selection.move("character", from);
        new_selection.moveEnd("character", to - from);
        new_selection.select();
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        const rng = document.selection.createRange().duplicate();
        if (rng.parentNode() === this.text) {
          try {
            const textRng = this.text.createTextRange();
            textRng.move("character", 0);
            textRng.setEndPoint("EndToEnd", rng);
            to = textRng.text.length;
            textRng.setEndPoint("EndToStart", rng);
            from = textRng.text.length;
          } catch {
            from = this.text.value.length;
            to = from;
          }
        }
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = tgt < 0 ? 0 : tgt;
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result[result.length] = item;
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("input[name=wpSave]").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else if ($("body")[0].currentStyle) {
        is_rtl = $("body")[0].currentStyle.direction;
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("input[name=wpDestFile]");
    if (!ip) {
      ip = document.querySelector("input[name=wpDestFile]");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("input[name=wpForReUpload]");
    const destFile = document.querySelector("input[name=wpDestFile]");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("textarea[name=wpUploadDescription]") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit"><input type="hidden" name="wpTextbox1">', '<input type="hidden" name="model" value="'.concat(conf.wgPageContentModel, '">'), '<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "main",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans[newSpans.length] = {
          element: span,
          title: cat,
          key
        };
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwNDhlMik7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS9jb21tb24uanNgLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1TYXZpbmcgSG90Q2F0IGNvbmZpZ3VyYXRpb24uYCxcblx0XHRcdFx0YXBwZW5kdGV4dDogJGVsLmRhdGEoJ2FkZFRleHQnKSBhcyBzdHJpbmcsXG5cdFx0XHR9IGFzIGNvbnN0O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE9uIFdpa2ltZWRpYSBDb21tb25zIHRoZXJlIHdlcmUgcGVvcGxlIHdobyBzYWlkOlxuXHRcdCAqIFwiQ2F0ZWdvcml6aW5nIHdpdGggSG90Q2F0IGRvZXMgbGVnaXQgYXV0b21hdGVkIHJlbW92YWwgb2YgdGhlIGNoZWNrLWNhdC1tZXNzYWdlXCJcblx0XHQgKiBTbyB3ZSBpbnZlbnRlZCBhIGRpYWxvZyB0aGF0IHNob3VsZCBiZSByZWFkYWJsZSBieSB1c2VycyBldmVuIHdpdGggdmVyeSBmZXcgRW5nbGlzaCBza2lsbHMuXG5cdFx0ICovXG5cdFx0Y29uc3QgcHJvbXB0ID0gKCkgPT4ge1xuXHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRpZDogJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoKHRoaXMgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fSBhcyBjb25zdDtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvYi9iZS9QX3llcy5zdmcvMjRweC1QX3llcy5zdmcucG5nJyxcblx0XHRleGlzdHNObzogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy80LzQyL1Bfbm8uc3ZnLzI0cHgtUF9uby5zdmcucG5nJyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGxldCBfYTtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdChfYSA9IHdpbmRvdy5Ib3RDYXQpLnNob3J0Y3V0cyB8fCAoX2Euc2hvcnRjdXRzID0ge30pO1xuXHRcdFx0Zm9yIChsZXQgayBpbiBtYXApIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG1hcCwgaykgfHwgdHlwZW9mIGsgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHNba10gPSB2O1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IEhDID0gd2luZG93LkhvdENhdDtcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgY2F0X3ByZWZpeCA9IG51bGw7XG5cdGxldCBub1N1Z2dlc3Rpb25zID0gZmFsc2U7XG5cdC8vIE5vIGZ1cnRoZXIgY2hhbmdlcyBzaG91bGQgYmUgbmVjZXNzYXJ5IGhlcmUuXG5cdC8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSAnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQVxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0rJztcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cblx0Ly8gU2VlIHtAbGluayBodHRwOi8vc3ZuLndpa2ltZWRpYS5vcmcvdmlld3ZjL21lZGlhd2lraS90cnVuay9waGFzZTMvaW5jbHVkZXMvVGl0bGUucGhwP3JldmlzaW9uPTEwNDA1MSZ2aWV3PW1hcmt1cCNsMjcyMn1cblx0Ly8gU2VlIGFsc28ge0BsaW5rIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9acy9saXN0Lmh0bX1cblx0Ly8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuXHQvLyBudW1iZXIgb2Ygc3BlY2lhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYnkgc2ltcGxlIGJsYW5rcy4gQW5kIGZpbmFsbHksIGJsYW5rcyBhcmUgdHJlYXRlZCBhcyB1bmRlcnNjb3Jlcy5cblx0Ly8gVGhlcmVmb3JlLCB3aGVuIGxvb2tpbmcgZm9yIHBhZ2UgdGl0bGVzIGluIHdpa2l0ZXh0LCB3ZSBtdXN0IGhhbmRsZSBhbGwgdGhlc2UgY2FzZXMuXG5cdC8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cblx0Ly8gYXBwZWFycyB0byBub3QgaGFuZGxlIGl0LiBUaGUgemVyby13aWR0aCBzcGFjZSBcXHUyMDBCIGlzIF9ub3RfIGhhbmRsZWQgYXMgYSBzcGFjZSBpbnNpZGUgdGl0bGVzIGJ5IE1XLlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rT3JCaWRpID0gJ1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEJcXFxcdTIwMEVcXFxcdTIwMEZcXFxcdTIwMjgtXFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSonO1xuXHQvLyBXaGl0ZXNwYWNlIHJlZ2V4cCBmb3IgaGFuZGxpbmcgd2hpdGVzcGFjZSBiZXR3ZWVuIGxpbmsgY29tcG9uZW50cy4gSW5jbHVkaW5nIHRoZSBob3Jpem9udGFsIHRhYiwgYnV0IG5vdCBcXG5cXHJcXGZcXHY6XG5cdC8vIGEgbGluayBtdXN0IGJlIG9uIG9uZSBzaW5nbGUgbGluZS5cblx0Ly8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuXHQvLyBUaGlzIGlzICpub3QqIGhhbmRsZWQsIGFzIGl0IHdvdWxkIHJlcXVpcmUgdXMgdG8gYWxsb3cgYW55IG9mIFtcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0gYmV0d2VlbiBhbnkgdHdvXG5cdC8vIGNoYXJhY3RlcnMgaW5zaWRlIGEgY2F0ZWdvcnkgbGluay4gSXQgX2NvdWxkXyBiZSBkb25lIHRob3VnaC4uLiBXZSBfZG9fIGhhbmRsZSBzdHJhbmdlIHNwYWNlcywgaW5jbHVkaW5nIHRoZVxuXHQvLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuXHQvLyBvciBhZGphY2VudCB0byBhbmQgaW5zaWRlIG9mIFwiW1tcIiBhbmQgXCJdXVwiKS5cblx0Ly8gRmlyc3QgYXV0by1sb2NhbGl6ZSB0aGUgcmVnZXhwcyBmb3IgdGhlIGNhdGVnb3J5IGFuZCB0aGUgdGVtcGxhdGUgbmFtZXNwYWNlcy5cblx0Y29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRjb25zdCBuYW1lc3BhY2VJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRjb25zdCBhdXRvTG9jYWxpemUgPSAobmFtZXNwYWNlTnVtYmVyLCBmYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lKSA9PiB7XG5cdFx0XHRpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJlZ2V4X25hbWUgPSAnJztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpbml0aWFsID0gbmFtZS5jaGFyQXQoaSk7XG5cdFx0XHRcdGNvbnN0IGxsID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRjb25zdCB1bCA9IGluaXRpYWwudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0cmVnZXhfbmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVnZXhfbmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1tTdHJpbmcobmFtZXNwYWNlTnVtYmVyKV0udG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J107XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0Y29uc3QgbWFrZSA9IChhcmcsIGxpdGVyYWwpID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZSwgdXJpKSA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWYpID0+IHtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBzY3JpcHQgPSBgJHtjb25mLndnU2NyaXB0fT9gO1xuXHRcdGlmIChcblx0XHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0XHRocmVmLmluZGV4T2YoY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdChjb25mLndnU2VydmVyLnNsaWNlKDAsIDIpID09PSAnLy8nICYmXG5cdFx0XHRcdGhyZWYuaW5kZXhPZihkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwKVxuXHRcdCkge1xuXHRcdFx0Ly8gaHJlZj1cIi9pbmRleC5waHA/dGl0bGU9Li4uXCJcblx0XHRcdHJldHVybiBwYXJhbSgndGl0bGUnLCBocmVmKTtcblx0XHR9XG5cdFx0Ly8gaHJlZj1cIi93aWtpLy4uLlwiXG5cdFx0bGV0IHByZWZpeCA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKTtcblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRcdHByZWZpeCA9IGNvbmYud2dTZXJ2ZXIgKyBwcmVmaXg7XG5cdFx0fSAvLyBGdWxseSBleHBhbmRlZCBVUkw/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdFx0cHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBwcmVmaXg7XG5cdFx0fSAvLyBQcm90b2NvbC1yZWxhdGl2ZSB3Z1NlcnZlcj9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBoYXNDbGFzcyA9ICh7Y2xhc3NOYW1lfSwgbmFtZSkgPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcblx0XHRpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdHJldHVybiBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQocGFnZU5hbWUpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcblx0fTtcblx0Y29uc3QgZXNjYXBlUkUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCAnXFxcXCQxJyk7XG5cdH07XG5cdGNvbnN0IHN1YnN0aXR1dGVGYWN0b3J5ID0gKG9wdGlvbnMpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJFxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSgke2luZGljYXRvcn0pKXxgICtcblx0XHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdC8vICR7a2V5fVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHRcdC8vICRrZXkgKG9ubHkgaWYgZmlyc3QgY2hhciBhZnRlciAkIGlzIG5vdCAkLCBkaWdpdCwgb3IgeyApXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPyEoPzpbJHtpbmRpY2F0b3J9JHtsYnJhY2V9XXxcXFxcZCkpKFxcXFxTKz8pXFxcXGIpYCxcblx0XHRcdCdnJ1xuXHRcdCk7XG5cdFx0Ly8gUmVwbGFjZSAkMSwgJDIsIG9yICR7a2V5MX0sICR7a2V5Mn0sIG9yICRrZXkxLCAka2V5MiBieSB2YWx1ZXMgZnJvbSBtYXAuICQkIGlzIHJlcGxhY2VkIGJ5IGEgc2luZ2xlICQuXG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoLCBwcmVmaXgsIGlkeCwga2V5LCBhbHBoYSkgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdFx0aW5kaWNhdG9yOiAnIycsXG5cdFx0XHRsYnJhY2U6ICdbJyxcblx0XHRcdHJicmFjZTogJ10nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdC8vIFRleHQgbW9kaWZpY2F0aW9uXG5cdGNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OlteXFxcXF1dK1xcXFxdXFxcXF1gLFxuXHRcdCdnJ1xuXHQpO1xuXHRjb25zdCByZXBsYWNlQnlCbGFua3MgPSAobWF0Y2gpID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAod2lraXRleHQsIGNhdGVnb3J5LCBvbmNlKSA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleCA9IG51bGw7XG5cdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy50ZW1wbGF0ZV9yZWdleHB9KD89JHt3aWtpVGV4dEJsYW5rT3JCaWRpfTopKT8ke3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XX0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0bGV0IGN1cnJfbWF0Y2ggPSBudWxsO1xuXHRcdHdoaWxlICgoY3Vycl9tYXRjaCA9IGNhdF9yZWdleC5leGVjKGNvcGllZHRleHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0ge1xuXHRcdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0XHRyZXR1cm4gcmVzdWx0OyAvLyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBtYXRjaGVzLCB3aXRoIHBvc2l0aW9ucywgaW4gcmVzdWx0WyBpIF0ubWF0Y2hcblx0fTtcblx0bGV0IGludGVybGFuZ3VhZ2VSRSA9IG51bGw7XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgdG9SZW1vdmUsIHRvQWRkLCBrZXksIGlzX2hpZGRlbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRfaW5zZXJ0aW9ucG9pbnQgPSAoX3dpa2l0ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcylcblx0XHRcdFx0LnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRmaW5kQ2F0c1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRcdGluZGV4ID0gZmluZENhdHNSRS5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpbnRlcmxhbmd1YWdlIGxpbmsuLi5cblx0XHRcdFx0bGV0IG1hdGNoID0gbnVsbDtcblx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFXG5cdFx0XHRcdFx0PyAobWF0Y2ggPSBpbnRlcmxhbmd1YWdlUkUuZXhlYyhjb3BpZWR0ZXh0KSlcblx0XHRcdFx0XHQ6IC8vIEFwcHJveGltYXRpb24gd2l0aG91dCBBUEk6IGludGVybGFuZ3VhZ2UgbGlua3Mgc3RhcnQgd2l0aCAyIHRvIDMgbG93ZXIgY2FzZSBsZXR0ZXJzLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5XG5cdFx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHRcdC8vIGFuZCBcInRva2lwb25hXCIuXG5cdFx0XHRcdFx0XHQobWF0Y2ggPSAvKChefFxcblxccj8pKFxcW1xcW1xccyooKFthLXpdezIsM30oLVthLXpdKykqKXxzaW1wbGV8dG9raXBvbmEpXFxzKjpbXlxcXV0rXV1cXHMqKSkrJC8uZXhlYyhcblx0XHRcdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdCh7aW5kZXh9ID0gbWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gW107XG5cdFx0Y29uc3QgbmFtZVNwYWNlID0gSEMuY2F0ZWdvcnlfY2Fub25pY2FsO1xuXHRcdGNvbnN0IC8vIFBvc2l0aW9uIG9mIHJlbW92ZWQgY2F0ZWdvcnk7XG5cdFx0XHRrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlcztcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0a2V5ID0gYHwke2tleX1gO1xuXHRcdH1cblx0XHQvLyBSZW1vdmVcblx0XHRpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvUmVtb3ZlKTtcblx0XHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9ub3RGb3VuZCcsIHRvUmVtb3ZlKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBiZWZvcmUgPSB3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4KSk7XG5cdFx0XHRsZXQgYWZ0ZXIgPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4ICsgbWF0Y2hlc1swXS5tYXRjaFswXS5sZW5ndGgpKTtcblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0XHRtYXRjaGVzLnJlLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIucmVwbGFjZShtYXRjaGVzLnJlLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRvQWRkICYmIC8vIG5hbWVTcGFjZSA9IG1hdGNoZXNbIDAgXS5tYXRjaFsgMSBdIHx8IG5hbWVTcGFjZTsgQ2Fub25pY2FsIG5hbWVzcGFjZSBzaG91bGQgYmUgYWx3YXlzIHByZWZlcnJlZFxuXHRcdFx0XHRrZXkgPT09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsIGtleV0gPSBtYXRjaGVzWzBdLm1hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRjb25zdCBldnRLZXlzID0gKHtjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleX0pID0+IHtcblx0XHRsZXQgY29kZSA9IDA7XG5cdFx0aWYgKGN0cmxLZXkpIHtcblx0XHRcdC8vIEFsbCBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdC8vIEN0cmwtY2xpY2sgc2VlbXMgdG8gYmUgb3ZlcmxvYWRlZCBpbiBGRi9NYWMgKGl0IG9wZW5zIGEgcG9wLXVwIG1lbnUpLCBzbyB0cmVhdCBjbWQtY2xpY2tcblx0XHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdFx0aWYgKGN0cmxLZXkgfHwgbWV0YUtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoaWZ0S2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb2RlO1xuXHR9O1xuXHRjb25zdCBldnRLaWxsID0gKGUpID0+IHtcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGxldCBjYXRMaW5lID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5cdGxldCBvblVwbG9hZCA9IGZhbHNlO1xuXHRsZXQgZWRpdG9ycyA9IFtdO1xuXHRsZXQgY29tbWl0QnV0dG9uID0gbnVsbDtcblx0bGV0IGNvbW1pdEZvcm0gPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0ID0gbnVsbDtcblx0bGV0IHBhZ2VUaW1lID0gbnVsbDtcblx0bGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5cdGxldCB3YXRjaENyZWF0ZSA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hFZGl0ID0gZmFsc2U7XG5cdGxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5cdGxldCBlZGl0VG9rZW4gPSBudWxsO1xuXHRsZXQgaXNfcnRsID0gZmFsc2U7XG5cdGxldCBzZXJ2ZXJUaW1lID0gbnVsbDtcblx0bGV0IGxhc3RSZXZJZCA9IG51bGw7XG5cdGxldCBwYWdlVGV4dFJldklkID0gbnVsbDtcblx0bGV0IGNvbmZsaWN0aW5nVXNlciA9IG51bGw7XG5cdGxldCBuZXdET00gPSBmYWxzZTtcblx0Y29uc3QgVU5DSEFOR0VEID0gMDtcblx0Y29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcblx0Y29uc3QgQ0hBTkdFX1BFTkRJTkcgPSAyOyAvLyBPcGVuLCBzb21lIGlucHV0IG1hZGVcblx0Y29uc3QgQ0hBTkdFRCA9IDM7XG5cdGNvbnN0IERFTEVURUQgPSA0O1xuXHRjb25zdCBzZXRQYWdlID0gKGRhdGEpID0+IHtcblx0XHRsZXQgc3RhcnRUaW1lID0gbnVsbDtcblx0XHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhLnF1ZXJ5LnBhZ2VzO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXS5jb250ZW50O1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGltZSA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnJldmlkKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBwYWdlLnJldmlzaW9uc1swXS5yZXZpZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IHBhZ2UucmV2aXNpb25zWzFdLnVzZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdFx0bGFzdFJldklkID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnN0YXJ0dGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRzdGFydFRpbWUgPSBwYWdlLnN0YXJ0dGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZ2VXYXRjaGVkID0gdHlwZW9mIHBhZ2Uud2F0Y2hlZCA9PT0gJ3N0cmluZyc7XG5cdFx0XHRcdFx0aWYgKGRhdGEucXVlcnkudG9rZW5zKSB7XG5cdFx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhbmdsaW5rcyAmJiAoIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10gfHwgIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10ubGFuZ2xpbmtzKSkge1xuXHRcdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdFx0bGV0IHJlID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGFuZ2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHJlICs9IChpID4gMCA/ICd8JyA6ICcnKSArIHBhZ2UubGFuZ2xpbmtzW2ldLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcmxhbmd1YWdlUkUgPSBuZXcgUmVnRXhwKGAoKF58XFxcXG5cXFxccj8pKFxcXFxbXFxcXFtcXFxccyooJHtyZX0pXFxcXHMqOlteXFxcXF1dK1xcXFxdXFxcXF1cXFxccyopKSskYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBTaXRlaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbCkge1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUgJiYgIXN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRcdEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwuY2FzZSA9PT0gJ2ZpcnN0LWxldHRlcic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlcnZlclRpbWUgPSBzdGFydFRpbWU7XG5cdFx0XHQvLyBVc2VyaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkudXNlcmluZm8gJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zKSB7XG5cdFx0XHRcdHdhdGNoQ3JlYXRlID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hkZWZhdWx0ID09PSAnMSc7XG5cdFx0XHRcdG1pbm9yRWRpdHMgPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMubWlub3JkZWZhdWx0ID09PSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgdXNlciBoYXMgdGhlIFwiQWxsIGVkaXRzIGFyZSBtaW5vclwiIHByZWZlcmVuY2UgZW5hYmxlZCwgd2Ugc2hvdWxkIGhvbm9yIHRoYXRcblx0XHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0XHRpZiAobWlub3JFZGl0cykge1xuXHRcdFx0XHRcdEhDLnNpbmdsZV9taW5vciA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGxldCBzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRjb25zdCBpbml0aWF0ZUVkaXQgPSAoZG9FZGl0LCBmYWlsdXJlKSA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlO1xuXHRcdFx0fVxuXHRcdFx0ZmFpbHVyZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9O1xuXHRcdC8vIE11c3QgdXNlIEFqYXggaGVyZSB0byBnZXQgdGhlIHVzZXIgb3B0aW9ucyBhbmQgdGhlIGVkaXQgdG9rZW4uXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0ZG9FZGl0KGZhaWwpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKCh7c3RhdHVzLCBzdGF0dXNUZXh0fSkgPT4ge1xuXHRcdFx0XHRmYWlsKGAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWApO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG11bHRpQ2hhbmdlTXNnID0gKGNvdW50KSA9PiB7XG5cdFx0cmV0dXJuIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2NoYW5nZScsIFN0cmluZyhjb3VudCkpO1xuXHR9O1xuXHRjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IHRzID0gU3RyaW5nKG5vdy5nZXRVVENGdWxsWWVhcigpKTtcblx0XHRjb25zdCB0d28gPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMuc2xpY2UoLTIpO1xuXHRcdH07XG5cdFx0dHMgKz1cblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ01vbnRoKCkgKyAxfWApICtcblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ0RhdGUoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDTWludXRlcygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENTZWNvbmRzKCl9YCk7XG5cdFx0cmV0dXJuIHRzO1xuXHR9O1xuXHRjb25zdCBwZXJmb3JtQ2hhbmdlcyA9IChmYWlsdXJlLCBzaW5nbGVFZGl0b3IpID0+IHtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHRcdC8vIChhKSBzZW5zaWJseSByZXBvcnRpbmcgYmFjayBlcnJvcnMgbGlrZSBlZGl0IGNvbmZsaWN0cyBpcyBhbHdheXMgYSBoYXNzbGUsIGFuZFxuXHRcdC8vIChiKSB3ZSB3YW50IHRvIHNob3cgYSBkaWZmIGZvciBtdWx0aS1lZGl0cyBhbnl3YXksIGFuZFxuXHRcdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHRcdC8vIFVzaW5nIHRoZSBmb3JtLCB3ZSBjYW4gZG8gKGIpIGFuZCAoYyksIGFuZCB3ZSBnZXQgKGEpIGZvciBmcmVlLiBBbmQsIG9mIGNvdXJzZSwgdXNpbmcgdGhlIGZvcm1cblx0XHQvLyBhdXRvbWF0aWNhbGx5IHJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBjYXRlZ29yaWVzIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQsIHdoaWNoXG5cdFx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRcdGxldCBhY3Rpb247XG5cdFx0Ly8gTm9ybWFsbHksIHdlIGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCBlZGl0IGNvbmZsaWN0cy4gSWYgc29tZSBvdGhlciB1c2VyIGVkaXRlZCB0aGUgcGFnZSBpbiB0aGUgbWVhbnRpbWUsIHRoZVxuXHRcdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0XHQvLyBzZXJ2ZXIgc3VwcHJlc3NlcyBlZGl0IGNvbmZsaWN0cyB3aXRoIG9uZXNlbGYuIEhlbmNlLCBpZiB3ZSBoYXZlIGEgY29uZmxpY3QsIGFuZCB0aGUgY29uZmxpY3RpbmcgdXNlciBpcyB0aGVcblx0XHQvLyBjdXJyZW50IHVzZXIsIHRoZW4gd2Ugc2V0IHRoZSBcIm9sZGlkXCIgdmFsdWUgYW5kIHN3aXRjaCB0byBkaWZmLCB3aGljaCBnaXZlcyB0aGUgXCJ5b3UgYXJlIGVkaXRpbmcgYW4gb2xkIHZlcnNpb247XG5cdFx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0XHRjb25zdCBzZWxmRWRpdENvbmZsaWN0ID1cblx0XHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHRcdChwYWdlVGV4dFJldklkICE9PSBudWxsICYmIHBhZ2VUZXh0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSkgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWU7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybS53cEVkaXRUb2tlbi52YWx1ZSA9IGVkaXRUb2tlbjtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BEaWZmO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BTYXZlJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB7XG5cdFx0XHR0ZXh0OiBwYWdlVGV4dCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQgPSBbXTtcblx0XHRjb25zdCBhZGRlZCA9IFtdO1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSBbXTtcblx0XHRjb25zdCB0b0VkaXQgPSBzaW5nbGVFZGl0b3IgPyBbc2luZ2xlRWRpdG9yXSA6IGVkaXRvcnM7XG5cdFx0bGV0IGVkaXQ7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGVycm9yID0gbnVsbDtcblx0XHRsZXQgY2hhbmdlcyA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvRWRpdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWRpdCA9IHRvRWRpdFtpXTtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmlsbCBpbiB0aGUgZm9ybSBhbmQgc3VibWl0IGl0XG5cdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gbWlub3JFZGl0cztcblx0XHRjb21taXRGb3JtLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BBdXRvU3VtbWFyeS52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQuc3VtbWFyeSAmJiByZXN1bHQuc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzKSB7XG5cdFx0XHRcdGxldCBzdW1tYXJ5ID0gW107XG5cdFx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeSA9IFtdO1xuXHRcdFx0XHQvLyBEZWxldGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVsZXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiAke211bHRpQ2hhbmdlTXNnKGRlbGV0ZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW2ldLmZyb20gPT09IGNoYW5nZWRbaV0udG8pIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbaV0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFswXS5mcm9tID09PSBjaGFuZ2VkWzBdLnRvKSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbMF0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybS53cFRleHRib3gxLnZhbHVlID0gcmVzdWx0LnRleHQ7XG5cdFx0Y29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZSA9IHNlcnZlclRpbWUgfHwgY3VycmVudFRpbWVzdGFtcCgpO1xuXHRcdGNvbW1pdEZvcm0ud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWU7XG5cdFx0aWYgKHNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdGNvbW1pdEZvcm0ub2xkaWQudmFsdWUgPSBTdHJpbmcocGFnZVRleHRSZXZJZCB8fCBjb25mLndnQ3VyUmV2aXNpb25JZCk7XG5cdFx0fVxuXHRcdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRcdGNvbW1pdEZvcm0uaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlLCB0b1Jlc29sdmUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgaXNfbWlzc2luZyA9IHR5cGVvZiBwYWdlLm1pc3NpbmcgPT09ICdzdHJpbmcnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiB0aGUgc2VydmVyIHJldHVybnMgaW4gcGFnZSBhbiBORkMgbm9ybWFsaXplZCBVbmljb2RlIHRpdGxlLiBJZiBvdXIgaW5wdXQgd2FzIG5vdCBORkMgbm9ybWFsaXplZCwgd2UgbWF5IG5vdCBmaW5kXG5cdFx0XHQvLyBhbnkgZW50cnkgaGVyZS4gSWYgd2UgaGF2ZSBvbmx5IG9uZSBlZGl0b3IgdG8gcmVzb2x2ZSAodGhlIG1vc3QgY29tbW9uIGNhc2UsIEkgcHJlc3VtZSksIHdlIG1heSBzaW1wbHkgc2tpcCB0aGUgY2hlY2suXG5cdFx0XHR0b1Jlc29sdmVbaV0uY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9ICFpc19taXNzaW5nO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHRcdH1cblx0XHRpZiAoaXNfbWlzc2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmIGNhdHMgJiYgKGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykgfHwgZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRfLnRpdGxlO1xuXHRcdFx0XHQvLyBTdHJpcCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRjYXQgPSBjYXQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRcdFx0aWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rc1tpXS5ucyA9PT0gMTQgJiZcblx0XHRcdFx0Ly8gTmFtZSBub3QgZW1wdHlcblx0XHRcdFx0bGlua3NbaV0udGl0bGUgJiZcblx0XHRcdFx0bGlua3NbaV0udGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBsaW5rc1tpXS50aXRsZTtcblx0XHRcdFx0bWF0Y2ggPSBtYXRjaC5zbGljZShNYXRoLm1heCgwLCBtYXRjaC5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBgQ2F0ZWdvcnk6JHt2fWA7XG5cdFx0fVxuXHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGpzb24pID0+IHtcblx0XHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24pO1xuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRcdGVkaXRvci5pbmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWNoLmlzX2FjdGl2ZSA9IHRydWU7XG5cdFx0aWYgKHdoaWNoLmRhYikge1xuXHRcdFx0c2hvd0RhYih3aGljaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENoZWNrIGZvciBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlcy5cblx0XHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRcdGNvbnN0IGFjdHVhbFZhbHVlID0gd2hpY2gudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHY7XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCB3aGljaC5jdXJyZW50S2V5XSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0XHR3aGljaC5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRcdFx0c3RhcnQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ZW5kOiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR3aGljaC5zZXRTZWxlY3Rpb24od2hpY2gubGFzdFNlbGVjdGlvbi5zdGFydCwgd2hpY2gubGFzdFNlbGVjdGlvbi5lbmQpO1xuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNob3dEYWIgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHR3aGljaC5zaG93U3VnZ2VzdGlvbnMod2hpY2guZGFiLCBmYWxzZSwgbnVsbCwgbnVsbCk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBubyBrZXksIG5vIGVuZ2luZSBzZWxlY3RvclxuXHRcdFx0d2hpY2guZGFiID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFrZUFjdGl2ZSh3aGljaCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtdWx0aVN1Ym1pdCA9ICgpID0+IHtcblx0XHRjb25zdCB0b1Jlc29sdmUgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlID09PSBDSEFOR0VfUEVORElORyB8fCBlZGl0b3Iuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0dG9SZXNvbHZlW3RvUmVzb2x2ZS5sZW5ndGhdID0gZWRpdG9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9SZXNvbHZlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRsZXQgZmlyc3REYWIgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGlmICghZmlyc3REYWIpIHtcblx0XHRcdFx0XHRcdFx0Zmlyc3REYWIgPSBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0TXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0QnV0dG9uIHx8IG9uVXBsb2FkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbiA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcblx0XHRjb21taXRCdXR0b24udmFsdWUgPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jb21taXQnKTtcblx0XHRjb21taXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtdWx0aVN1Ym1pdCk7XG5cdFx0aWYgKG11bHRpU3Bhbikge1xuXHRcdFx0bXVsdGlTcGFuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1pdEJ1dHRvbiwgbXVsdGlTcGFuKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQoY29tbWl0QnV0dG9uKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNoZWNrTXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1pdEJ1dHRvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRoYXNDaGFuZ2VzID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9ICFoYXNDaGFuZ2VzO1xuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uRW5naW5lcyA9IHtcblx0XHRvcGVuc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1vcGVuc2VhcmNoJm5hbWVzcGFjZT0xNCZsaW1pdD0zMCZzZWFyY2g9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0Ly8gJDEgPSBzZWFyY2ggdGVybVxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gY29udmVydCByZXN1bHQgb2YgdXJpIGludG8gYW4gYXJyYXkgb2YgY2F0ZWdvcnkgbmFtZXNcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gcXVlcnlSZXN1bHRbMF0uc2xpY2UoTWF0aC5tYXgoMCwgcXVlcnlSZXN1bHRbMF0uaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IFssIHRpdGxlc10gPSBxdWVyeVJlc3VsdDtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYXRfcHJlZml4KSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4ID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y2F0X3ByZWZpeC5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbSA9IGNhdF9wcmVmaXguZXhlYyh0aXRsZXNbaV0pO1xuXHRcdFx0XHRcdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0uaW5kZXhPZignOicpICsgMSkpOyAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGl0bGVzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTsgLy8gTm9wZSwgaXQncyBub3QgYSBjYXRlZ29yeSBhZnRlciBhbGwuXG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IGV4aXN0cztcblx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IGtleSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSBORkMgbm9ybWFsaXplZCBrZXkgd2UgZ290IGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbnRlcm5hbHNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1hbGxwYWdlcyZhcG5hbWVzcGFjZT0xNCZhcGxpbWl0PTMwJmFwZnJvbT0kMSZhcHByZWZpeD0kMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRleGlzdHM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9aW5mbyZ0aXRsZXM9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMgJiYgIXF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzWy0xXSkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBoYXZlIGV4YWN0bHkgMVxuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBfdGl0bGUgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS50aXRsZTtcblx0XHRcdFx0XHRcdF90aXRsZSA9IF90aXRsZS5zbGljZShNYXRoLm1heCgwLCBfdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gW190aXRsZV07XG5cdFx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0gX3RpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0gX3RpdGxlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwYXJlbnRjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWNhdGVnb3JpZXMmdGl0bGVzPUNhdGVnb3J5OiQxJmNsbGltaXQ9bWF4YCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmIChxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXM7XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uQ29uZmlncyA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0Ly8gRXZlbnQga2V5Q29kZXMgdGhhdCB3ZSBoYW5kbGUgaW4gdGhlIHRleHQgaW5wdXQgZmllbGQvc3VnZ2VzdGlvbiBsaXN0LlxuXHRjb25zdCBCUyA9IDg7XG5cdGNvbnN0IFRBQiA9IDk7XG5cdGNvbnN0IFJFVCA9IDEzO1xuXHRjb25zdCBFU0MgPSAyNztcblx0Y29uc3QgU1BBQ0UgPSAzMjtcblx0Y29uc3QgUEdVUCA9IDMzO1xuXHRjb25zdCBQR0RPV04gPSAzNDtcblx0Y29uc3QgVVAgPSAzODtcblx0Y29uc3QgRE9XTiA9IDQwO1xuXHRjb25zdCBERUwgPSA0Njtcblx0Y29uc3QgSU1FID0gMjI5O1xuXHRjbGFzcyBDYXRlZ29yeUVkaXRvciB7XG5cdFx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKGxpbmUsIHNwYW4sIGFmdGVyLCBrZXksIGlzX2hpZGRlbikge1xuXHRcdFx0Ly8gSWYgYSBzcGFuIGlzIGdpdmVuLCAnYWZ0ZXInIGlzIHRoZSBjYXRlZ29yeSB0aXRsZSwgb3RoZXJ3aXNlIGl0IG1heSBiZSBhbiBlbGVtZW50IGFmdGVyIHdoaWNoIHRvXG5cdFx0XHQvLyBpbnNlcnQgdGhlIG5ldyBzcGFuLiAna2V5JyBpcyBsaWtld2lzZSBvdmVybG9hZGVkOyBpZiBhIHNwYW4gaXMgZ2l2ZW4sIGl0IGlzIHRoZSBjYXRlZ29yeSBrZXkgKGlmXG5cdFx0XHQvLyBrbm93biksIG90aGVyd2lzZSBpdCBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGEgYmFyIHNoYWxsIGJlIHByZXBlbmRlZC5cblx0XHRcdGlmIChzcGFuKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBzcGFuLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9IGFmdGVyO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0ga2V5ICYmIGtleS5sZW5ndGggPiAxID8ga2V5LnNsaWNlKDEpIDogbnVsbDsgLy8gPiAxIGJlY2F1c2UgaXQgaW5jbHVkZXMgdGhlIGxlYWRpbmcgYmFyXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSAhaGFzQ2xhc3ModGhpcy5jYXRMaW5rLCAnbmV3Jyk7XG5cdFx0XHRcdC8vIENyZWF0ZSBjaGFuZ2UgYW5kIGRlbCBsaW5rc1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHRpZiAoIXRoaXMub3JpZ2luYWxFeGlzdHMgJiYgdGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IHRydWU7XG5cdFx0XHRcdC8vIENyZWF0ZSBhZGQgc3BhbiBhbmQgYXBwZW5kIHRvIGNhdExpbmtzXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9ICcnO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRcdHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnIHwgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5uZXh0U2libGluZztcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUgJiYgbGluZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmFkZCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtYWRkJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRzcGFuID0gbWFrZShuZXdET00gPyAnbGknIDogJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRTdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rICYmIHRoaXMuY3VycmVudEtleSkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3JzW2VkaXRvcnMubGVuZ3RoXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VMaW5rU3BhbigpIHtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRsZXQgbGluayA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmIHRoaXMub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUuYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVtb3ZlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdGhpcy5vcmlnaW5hbENhdGVnb3J5XSkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5jaGFuZ2UsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvd24uYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5kb3duLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXAuYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11cCcpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQodGhpcy51cERvd25MaW5rcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmNsYXNzTmFtZSA9ICdub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZXN0b3JlLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVzdG9yZScpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobGluayk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLnVuZGVsTGluayk7XG5cdFx0fVxuXHRcdGludm9rZVN1Z2dlc3Rpb25zKGRvbnRfYXV0b2NvbXBsZXRlKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuZW5naW5lICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCAmJlxuXHRcdFx0XHQhZG9udF9hdXRvY29tcGxldGVcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0fSAvLyBSZXNldCB0byBhIHNlYXJjaCB1cG9uIGlucHV0XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUpO1xuXHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0fVxuXHRcdG1ha2VGb3JtKCkge1xuXHRcdFx0Y29uc3QgZm9ybSA9IG1ha2UoJ2Zvcm0nKTtcblx0XHRcdGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuZm9ybSA9IGZvcm07XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IHRleHQgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0dGV4dC50eXBlID0gJ3RleHQnO1xuXHRcdFx0dGV4dC5zaXplID0gSEMuZWRpdGJveF93aWR0aDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBCZSBjYXJlZnVsIGhlcmUgdG8gaGFuZGxlIElNRSBpbnB1dC4gVGhpcyBpcyBicm93c2VyL09TL0lNRSBkZXBlbmRlbnQsIGJ1dCBiYXNpY2FsbHkgdGhlcmUgYXJlIHR3byBtZWNoYW5pc21zOlxuXHRcdFx0XHQvLyAtIE1vZGVybiAoRE9NIExldmVsIDMpIGJyb3dzZXJzIHVzZSBjb21wb3NpdGlvbnN0YXJ0L2NvbXBvc2l0aW9uZW5kIGV2ZW50cyB0byBzaWduYWwgY29tcG9zaXRpb247IGlmIHRoZVxuXHRcdFx0XHQvLyAgIGNvbXBvc2l0aW9uIGlzIG5vdCBjYW5jZWxlZCwgdGhlcmUnbGwgYmUgYSB0ZXh0SW5wdXQgZXZlbnQgZm9sbG93aW5nLiBEdXJpbmcgYSBjb21wb3NpdGlvbiBrZXkgZXZlbnRzIGFyZVxuXHRcdFx0XHQvLyAgIGVpdGhlciBhbGwgc3VwcHJlc3NlZCAoRkYvR2Vja28pLCBvciBvdGhlcndpc2UgaGF2ZSBrZXlEb3duID09PSBJTUUgZm9yIGFsbCBrZXlzIChXZWJraXQpLlxuXHRcdFx0XHQvLyAgIC0gV2Via2l0IHNlbmRzIGEgdGV4dElucHV0IGZvbGxvd2VkIGJ5IGtleURvd24gPT09IElNRSBhbmQgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbi5cblx0XHRcdFx0Ly8gICAtIEdlY2tvIGRvZXNuJ3Qgc2VuZCB0ZXh0SW5wdXQgYnV0IGp1c3QgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbiwgd2l0aG91dCBzZW5kaW5nIGtleURvd25cblx0XHRcdFx0Ly9cdCBmaXJzdC4gR2Vja28gZG9lc24ndCBzZW5kIGFueSBrZXlkb3duIHdoaWxlIElNRSBpcyBhY3RpdmUuXG5cdFx0XHRcdC8vIC0gT2xkZXIgYnJvd3NlcnMgc2lnbmFsIGNvbXBvc2l0aW9uIGJ5IGtleURvd24gPT09IElNRSBmb3IgdGhlIGZpcnN0IGFuZCBzdWJzZXF1ZW50IGtleXMgZm9yIGEgY29tcG9zaXRpb24uIFRoZVxuXHRcdFx0XHQvLyAgIGZpcnN0IGtleURvd24gIT09IElNRSBpcyBjZXJ0YWlubHkgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY29tcG9zaXRpb24uIFR5cGljYWxseSwgY29tcG9zaXRpb24gZW5kIGNhbiBhbHNvIGJlXG5cdFx0XHRcdC8vICAgZGV0ZWN0ZWQgYnkgYSBrZXlEb3duIElNRSB3aXRoIGEga2V5VXAgb2Ygc3BhY2UsIHRhYiwgZXNjYXBlLCBvciByZXR1cm4uXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID09PSBJTUUgJiZcblx0XHRcdFx0XHRcdCFzZWxmLnVzZXNDb21wb3NpdGlvbiAmJlxuXHRcdFx0XHRcdFx0KGtleSA9PT0gVEFCIHx8IGtleSA9PT0gUkVUIHx8IGtleSA9PT0gRVNDIHx8IGtleSA9PT0gU1BBQ0UpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBVUCB8fCBrZXkgPT09IERPV04gfHwga2V5ID09PSBQR1VQIHx8IGtleSA9PT0gUEdET1dOKSB7XG5cdFx0XHRcdFx0XHQvLyBJbiBjYXNlIGEgYnJvd3NlciBkb2Vzbid0IGdlbmVyYXRlIGtleXByZXNzIGV2ZW50cyBmb3IgYXJyb3cga2V5cy4uLlxuXHRcdFx0XHRcdFx0aWYgKHNlbGYua2V5Q291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09IEVTQyAmJiBzZWxmLmxhc3RLZXkgIT09IElNRSAmJiAhc2VsZi5yZXNldEtleVNlbGVjdGlvbigpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE5vIHVuZG8gb2Yga2V5IHNlbGVjdGlvbjogdHJlYXQgRVNDIGFzIFwiY2FuY2VsXCIuXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIEFsc28gZG8gdGhpcyBmb3IgRVNDIGFzIGEgd29ya2Fyb3VuZCBmb3IgRmlyZWZveCBidWcgNTI0MzYwXG5cdFx0XHRcdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTI0MzYwfVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhrZXkgPT09IEJTIHx8IGtleSA9PT0gREVMIHx8IGtleSA9PT0gRVNDKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBrZXk7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCA9IDA7XG5cdFx0XHRcdFx0Ly8gRE9NIExldmVsIDwgMyBJTUUgaW5wdXRcblx0XHRcdFx0XHRpZiAoIXNlbGYuaW1lICYmIGtleSA9PT0gSU1FICYmICFzZWxmLnVzZXNDb21wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0Ly8gc2VsZi51c2VzQ29tcG9zaXRpb24gY2F0Y2hlcyBicm93c2VycyB0aGF0IG1heSBlbWl0IHNwdXJpb3VzIGtleWRvd24gSU1FIGFmdGVyIGEgY29tcG9zaXRpb24gaGFzIGVuZGVkXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRrZXkgIT09IElNRSAmJlxuXHRcdFx0XHRcdFx0ISgoa2V5ID49IDE2ICYmIGtleSA8PSAyMCkgfHwgKGtleSA+PSA5MSAmJiBrZXkgPD0gOTMpIHx8IGtleSA9PT0gMTQ0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGNvbnRyb2wga2V5czogY3RybCwgc2hpZnQsIGFsdCwgYWx0IGdyLCBjYXBzIGxvY2ssIHdpbmRvd3MvYXBwbGUgY21kIGtleXMsIG51bSBsb2NrLiBPbmx5IHRoZSB3aW5kb3dzIGtleXNcblx0XHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHRcdC8vIE5vdGU6IFNhZmFyaSA0ICg1MzAuMTcpIHByb3BhZ2F0ZXMgRVNDIG91dCBvZiBhbiBJTUUgY29tcG9zaXRpb24gKG9ic2VydmVkIGF0IGxlYXN0IG9uIFdpbiBYUCkuXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIYW5kbGUgcmV0dXJuIGV4cGxpY2l0bHksIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiB0byBiZSBhYmxlIHRvIGNoZWNrIGZvciBjdHJsXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3Igb2YgRVNDIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBBbmQgaGFuZGxlIGNvbnRpbnVlZCBwcmVzc2luZyBvZiBhcnJvdyBrZXlzXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50Kys7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKHRleHQpLm9uKCdmb2N1cycsICgpID0+IHtcblx0XHRcdFx0XHRtYWtlQWN0aXZlKHNlbGYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gT24gSUUsIGJsdXIgZXZlbnRzIGFyZSBhc3luY2hyb25vdXMsIGFuZCBtYXkgdGh1cyBhcnJpdmUgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGxvc3QgdGhlIGZvY3VzLiBTaW5jZSBJRVxuXHRcdFx0XHQvLyBjYW4gZ2V0IHRoZSBzZWxlY3Rpb24gb25seSB3aGlsZSB0aGUgZWxlbWVudCBpcyBhY3RpdmUgKGhhcyB0aGUgZm9jdXMpLCB3ZSBtYXkgbm90IGFsd2F5cyBnZXQgdGhlIHNlbGVjdGlvbi5cblx0XHRcdFx0Ly8gVGhlcmVmb3JlLCB1c2UgYW4gSUUtc3BlY2lmaWMgc3luY2hyb25vdXMgZXZlbnQgb24gSUUuLi5cblx0XHRcdFx0Ly8gRG9uJ3QgdGVzdCBmb3IgdGV4dC5zZWxlY3Rpb25TdGFydCBiZWluZyBkZWZpbmVkO1xuXHRcdFx0XHQkKHRleHQpLm9uKFxuXHRcdFx0XHRcdHRleHQub25iZWZvcmVkZWFjdGl2YXRlICE9PSB1bmRlZmluZWQgJiYgdGV4dC5jcmVhdGVUZXh0UmFuZ2UgPyAnYmVmb3JlZGVhY3RpdmF0ZScgOiAnYmx1cicsXG5cdFx0XHRcdFx0dGhpcy5zYXZlVmlldy5iaW5kKHRoaXMpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIERPTSBMZXZlbCAzIElNRSBoYW5kbGluZ1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFNldHRpbmcgbGFzdEtleSA9IElNRSBwcm92aWRlcyBhIGZha2Uga2V5RG93biBmb3IgR2Vja28ncyBzaW5nbGUga2V5VXAgYWZ0ZXIgYSBjbXBvc2l0aW9uLiBJZiB3ZSBkaWRuJ3QgZG8gdGhpcyxcblx0XHRcdFx0XHQvLyBjYW5jZWxsaW5nIGEgY29tcG9zaXRpb24gdmlhIEVTQyB3b3VsZCBhbHNvIGNhbmNlbCBhbmQgY2xvc2UgdGhlIHdob2xlIGNhdGVnb3J5IGlucHV0IGVkaXRvci5cblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCd0ZXh0SW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLmljb24gPSBtYWtlKCdpbWcnKTtcblx0XHRcdGxldCBsaXN0ID0gbnVsbDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRsaXN0ID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCk7XG5cdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gRVNDKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFIQy5maXhlZF9zZWFyY2gpIHtcblx0XHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHN1Z2dlc3Rpb25Db25maWdzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5zaG93KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRcdFx0XHRvcHQudmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRoaXMuZW5naW5lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvcHQuYXBwZW5kKG1ha2Uoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5uYW1lLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFwcGVuZChvcHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmVuZ2luZSA9IHNlbGYuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tzZWxmLmVuZ2luZVNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciA9IGVuZ2luZVNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBsaXN0O1xuXHRcdFx0Y29uc3QgYnV0dG9uX2xhYmVsID0gKF9pZCwgZGVmYXVsdFRleHQpID0+IHtcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWxhYmVsIHx8ICFsYWJlbC5kYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlZmF1bHRUZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsYWJlbC5kYXRhO1xuXHRcdFx0fTtcblx0XHRcdC8vIERvIG5vdCB1c2UgdHlwZSAnc3VibWl0Jzsgd2UgY2Fubm90IGRldGVjdCBtb2RpZmllciBrZXlzIGlmIHdlIGRvXG5cdFx0XHRjb25zdCBPSyA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRPSy50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRPSy52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BPa1VwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW9rJykpO1xuXHRcdFx0T0suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMub2sgPSBPSztcblx0XHRcdGNvbnN0IGNhbmNlbCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0Y2FuY2VsLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cENhbmNlbFVwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhbmNlbCcpKTtcblx0XHRcdGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5jYW5jZWxCdXR0b24gPSBjYW5jZWw7XG5cdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnaG90Y2F0aW5wdXQnO1xuXHRcdFx0c3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdFx0XHRzcGFuLmFwcGVuZCh0ZXh0KTtcblx0XHRcdC8vIFB1dCBzb21lIHRleHQgaW50byB0aGlzIHNwYW4gKGEwIGlzIG5ic3ApIGFuZCBtYWtlIHN1cmUgaXQgYWx3YXlzIHN0YXlzIG9uIHRoZSBzYW1lXG5cdFx0XHQvLyBsaW5lIGFzIHRoZSBpbnB1dCBmaWVsZCwgb3RoZXJ3aXNlLCBJRTgvOSBtaXNjYWxjdWxhdGVzIHRoZSBoZWlnaHQgb2YgdGhlIHNwYW4gYW5kXG5cdFx0XHQvLyB0aGVuIHRoZSBlbmdpbmUgc2VsZWN0b3IgbWF5IG92ZXJsYXAgdGhlIGlucHV0IGZpZWxkLlxuXHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTtcblx0XHRcdHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmVuZ2luZVNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmljb24pO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5hcHBlbmQoT0spO1xuXHRcdFx0c3Bhbi5hcHBlbmQoY2FuY2VsKTtcblx0XHRcdGZvcm0uYXBwZW5kKHNwYW4pO1xuXHRcdFx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5zcGFuLmFwcGVuZChmb3JtKTtcblx0XHR9XG5cdFx0ZGlzcGxheShldmVudCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5mb3JtKSB7XG5cdFx0XHRcdHRoaXMubWFrZUZvcm0oKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmljb24uc3JjID0gdGhpcy5jdXJyZW50RXhpc3RzID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEID8gT1BFTiA6IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0XHRlbmQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0Ly8gRGlzcGxheSB0aGUgZm9ybVxuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHQvLyBLaWxsIHRoZSBldmVudCBiZWZvcmUgZm9jdXNzaW5nLCBvdGhlcndpc2UgSUUgd2lsbCBraWxsIHRoZSBvbmZvY3VzIGV2ZW50IVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRzaG93KGV2ZW50LCBlbmdpbmUsIHJlYWRPbmx5KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmRpc3BsYXkoZXZlbnQpO1xuXHRcdFx0Y29uc3QgdiA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblx0XHRcdHRoaXMudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBmb3JjZSBkaXNwbGF5IG9mIHN1Z2dlc3Rpb25zXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRvcGVuKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCB0aGlzLmVuZ2luZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHRcdH1cblx0XHRkb3duKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAnc3ViY2F0JywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHVwKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAncGFyZW50Y2F0Jyk7XG5cdFx0fVxuXHRcdGNhbmNlbCgpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7IC8vIFdlIGFkZGVkIGEgbmV3IGFkZGVyIHdoZW4gb3BlbmluZ1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBDbG9zZSwgcmUtZGlzcGxheSBsaW5rXG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgJiYgdGhpcy5jdXJyZW50S2V5Lmxlbmd0aCA+IDAgPyB0aGlzLmN1cnJlbnRLZXkgOiAnJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cmVtb3ZlRWRpdG9yKCkge1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuc3Bhbi5uZXh0U2libGluZztcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3Bhbi5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWRpdG9yc1tpXSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdGVkaXRvcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cm9sbGJhY2soZXZlbnQpIHtcblx0XHRcdHRoaXMudW5kb0xpbmsucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLnVuZG9MaW5rID0gbnVsbDtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudENhdGVnb3J5IHx8IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRpbmFjdGl2YXRlKCkge1xuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNfYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGFjY2VwdENoZWNrKGRvbnRDaGVjaykge1xuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhZG9udENoZWNrICYmXG5cdFx0XHRcdCgoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdiA9PT0gY29uZi53Z1RpdGxlKSB8fCAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpKSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGFjY2VwdChldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSkgIT09IDBcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHRcdHRoaXMubm9Db21taXQgPSBldnRLZXlzKGV2ZW50KSA9PT0gMTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0XHRjb25zdCB0b1Jlc29sdmUgPSBbdGhpc107XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNvbHZlZFswXS5kYWIpIHtcblx0XHRcdFx0XHRcdHNob3dEYWIocmVzb2x2ZWRbMF0pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzb2x2ZWRbMF0uYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmNvbW1pdChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY3VycmVudENhdGVnb3J5ID09PSBvcmlnaW5hbFxuXHRcdFx0XHRcdFx0XHRcdD8gbnVsbFxuXHRcdFx0XHRcdFx0XHRcdDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3Jlc29sdmVkJywgb3JpZ2luYWwpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRjbG9zZSgpIHtcblx0XHRcdGlmICghdGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBhIGNhdExpbmtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UoJ2ZvbycsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMuc3Bhbi5pbnNlcnRCZWZvcmUodGhpcy5jYXRMaW5rLCB0aGlzLnNwYW4uZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLmN1cnJlbnRIaWRkZW47XG5cdFx0XHQvLyBDbG9zZSBmb3JtIGFuZCByZWRpc3BsYXkgY2F0ZWdvcnlcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHRpZiAob25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHR0aGlzLnNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLnVuZG9MaW5rKSB7XG5cdFx0XHRcdC8vIEFwcGVuZCBhbiB1bmRvIGxpbmsuXG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb2xsYmFjay5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51bmRvLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11bmRvJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRUQ7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0Y29tbWl0KCkge1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW4gdG8gY2F0Y2ggcHJvYmxlbSBjYXNlcyBhZnRlciByZWRpcmVjdCByZXNvbHV0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gdGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmXG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gdGhpcy5vcmlnaW5hbEtleSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5Lmxlbmd0aCA9PT0gMCkpKSB8fFxuXHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IGNvbmYud2dUaXRsZSkgfHxcblx0XHRcdFx0KEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSlcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0XHR0aGlzLmRvUmVtb3ZlKGV2dEtleXMoZXZlbnQpID09PSAxKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0ZG9SZW1vdmUobm9Db21taXQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5jc3NUZXh0ICs9ICc7IHRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50Oyc7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25VcGxvYWQpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgZWRpdG9yIGNvbXBsZXRlbHlcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vQ29tbWl0ID0gbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXN0b3JlKGV2ZW50KSB7XG5cdFx0XHQvLyBDYW4gb2NjdXIgb25seSBpZiB3ZSBkbyBoYXZlIGEgY29tbWl0IGJ1dHRvbiBhbmQgYXJlIG5vdCBvbiB0aGUgdXBsb2FkIGZvcm1cblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0Ly8gSW50ZXJuYWwgb3BlcmF0aW9uc1xuXHRcdHNlbGVjdEVuZ2luZShlbmdpbmVOYW1lKSB7XG5cdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnNlbGVjdGVkID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnZhbHVlID09PSBlbmdpbmVOYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzYW5pdGl6ZUlucHV0KCkge1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7IC8vIFRyaW0gbGVhZGluZyBibGFua3MgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGlmIChyZS50ZXN0KHYpKSB7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHYuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTtcblx0XHRcdH1cblx0XHRcdHYgPSB2LnJlcGxhY2UoL1xcdTIwMEUkLywgJycpOyAvLyBUcmltIGVuZGluZyBsZWZ0LXRvLXJpZ2h0IG1hcmtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT25seSB1cGRhdGUgdGhlIGlucHV0IGZpZWxkIGlmIHRoZXJlIGlzIGEgZGlmZmVyZW5jZS4gVmFyaW91cyBicm93c2VycyBvdGhlcndpc2Vcblx0XHRcdC8vIHJlc2V0IHRoZSBzZWxlY3Rpb24gYW5kIGN1cnNvciBwb3NpdGlvbiBhZnRlciBlYWNoIHZhbHVlIHJlLWFzc2lnbm1lbnQuXG5cdFx0XHRpZiAodGhpcy50ZXh0LnZhbHVlICE9PSBudWxsICYmIHRoaXMudGV4dC52YWx1ZSAhPT0gdikge1xuXHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB2O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYWtlQ2FsbCh1cmwsIGNhbGxiYWNrT2JqLCBlbmdpbmUsIHF1ZXJ5S2V5LCBjbGVhbktleSkge1xuXHRcdFx0bGV0IGNiID0gY2FsbGJhY2tPYmo7XG5cdFx0XHRjb25zdCBlID0gZW5naW5lO1xuXHRcdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdFx0Y29uc3QgeiA9IGNsZWFuS2V5O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdFx0XHRjYi5jYWxsc01hZGUrKztcblx0XHRcdFx0aWYgKGNiLmNhbGxzTWFkZSA9PT0gY2Iubm9mQ2FsbHMpIHtcblx0XHRcdFx0XHRpZiAoY2IuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5ub3JtYWxpemVkID0gY2Iubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFjYi5kb250Q2FjaGUgJiYgIXN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdKSB7XG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSA9IGNiLmFsbFRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYi5jYW5jZWxsZWQpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2hvd1N1Z2dlc3Rpb25zKGNiLmFsbFRpdGxlcywgY2Iubm9Db21wbGV0aW9uLCB2LCBjYi5lbmdpbmVOYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiID09PSBzZWxmLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2IgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHQkLmdldEpTT04odXJsLCAoanNvbikgPT4ge1xuXHRcdFx0XHRjb25zdCB0aXRsZXMgPSBlLmhhbmRsZXIoanNvbiwgeik7XG5cdFx0XHRcdGlmICh0aXRsZXMgJiYgdGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjYi5hbGxUaXRsZXMgPSBjYi5hbGxUaXRsZXMgPT09IG51bGwgPyB0aXRsZXMgOiBbLi4uY2IuYWxsVGl0bGVzLCAuLi5nZW5lcmF0ZUFycmF5KHRpdGxlcyldO1xuXHRcdFx0XHRcdGlmICh0aXRsZXMuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLm5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSkuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IuZG9udENhY2hlID0gdHJ1ZTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHR0ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlLCBmb3JjZSkge1xuXHRcdFx0Ly8gSGlkZSBhbGwgb3RoZXIgbGlzdHNcblx0XHRcdG1ha2VBY3RpdmUodGhpcyk7XG5cdFx0XHQvLyBHZXQgaW5wdXQgdmFsdWUsIG9taXQgc29ydCBrZXksIGlmIGFueVxuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZTtcblx0XHRcdC8vIERpc3JlZ2FyZCBhbnl0aGluZyBhZnRlciBhIHBpcGUuXG5cdFx0XHRjb25zdCBwaXBlID0gdi5pbmRleE9mKCd8Jyk7XG5cdFx0XHRpZiAocGlwZSA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgcGlwZSArIDEpKTtcblx0XHRcdFx0diA9IHYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcGlwZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCA9PT0gdiAmJiAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSAvLyBObyBjaGFuZ2Vcblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCAhPT0gdikge1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IHY7XG5cdFx0XHQvLyBNYXJrIGJsYWNrbGlzdGVkIGlucHV0cy5cblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSB2Lmxlbmd0aCA+IDAgJiYgSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpO1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gTm8gQWpheDoganVzdCBtYWtlIHN1cmUgdGhlIGxpc3QgaXMgaGlkZGVuXG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGNsZWFuS2V5ID0gdi5yZXBsYWNlKC9bXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdL2csICcnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgJyAnKTtcblx0XHRcdGNsZWFuS2V5ID0gcmVwbGFjZVNob3J0Y3V0cyhjbGVhbktleSwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGNsZWFuS2V5ID0gY2xlYW5LZXkudHJpbSgpO1xuXHRcdFx0aWYgKGNsZWFuS2V5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2tPYmouY2FuY2VsbGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGVuZ2luZU5hbWUgPSBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gPyB0aGlzLmVuZ2luZSA6ICdjb21iaW5lZCc7XG5cdFx0XHRkb250X2F1dG9jb21wbGV0ZSB8fD0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0ubm9Db21wbGV0aW9uO1xuXHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0sIGRvbnRfYXV0b2NvbXBsZXRlLCB2LCBlbmdpbmVOYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge2VuZ2luZXN9ID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV07XG5cdFx0XHR0aGlzLmNhbGxiYWNrT2JqID0ge1xuXHRcdFx0XHRhbGxUaXRsZXM6IG51bGwsXG5cdFx0XHRcdGNhbGxzTWFkZTogMCxcblx0XHRcdFx0bm9mQ2FsbHM6IGVuZ2luZXMubGVuZ3RoLFxuXHRcdFx0XHRub0NvbXBsZXRpb246IGRvbnRfYXV0b2NvbXBsZXRlLFxuXHRcdFx0XHRlbmdpbmVOYW1lLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMubWFrZUNhbGxzKGVuZ2luZXMsIHRoaXMuY2FsbGJhY2tPYmosIHYsIGNsZWFuS2V5KTtcblx0XHR9XG5cdFx0bWFrZUNhbGxzKGVuZ2luZXMsIGNiLCB2LCBjbGVhbktleSkge1xuXHRcdFx0Zm9yIChjb25zdCBlbmdpbmVfIG9mIGVuZ2luZXMpIHtcblx0XHRcdFx0Y29uc3QgZW5naW5lID0gc3VnZ2VzdGlvbkVuZ2luZXNbZW5naW5lX107XG5cdFx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0XHR0aGlzLm1ha2VDYWxsKHVybCwgY2IsIGVuZ2luZSwgdiwgY2xlYW5LZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzaG93U3VnZ2VzdGlvbnModGl0bGVzLCBkb250QXV0b2NvbXBsZXRlLCBxdWVyeUtleSwgZW5naW5lTmFtZSkge1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLmRhYiA9IG51bGw7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0aWYgKCF0aGlzLmxpc3QpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gRGVmYXVsdC4uLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBlbmdpbmVOYW1lO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmIChxdWVyeUtleSkge1xuXHRcdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQuaW5kZXhPZihxdWVyeUtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5ICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0SW5wdXQuaW5kZXhPZih0aGlzLmxhc3RRdWVyeSkgPT09IDAgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeS5sZW5ndGggPiBxdWVyeUtleS5sZW5ndGhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RRdWVyeSA9IHF1ZXJ5S2V5O1xuXHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdHYgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF07XG5cdFx0XHRsZXQgdk5vcm1hbGl6ZWQgPSB2O1xuXHRcdFx0Y29uc3Qga25vd25Ub0V4aXN0ID0gdGl0bGVzICYmIHRpdGxlcy5leGlzdHM7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGlmICh0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkICYmIHYuaW5kZXhPZihxdWVyeUtleSkgPT09IDApIHtcblx0XHRcdFx0XHQvLyBXZSBnb3QgYmFjayBhIGRpZmZlcmVudCBub3JtYWxpemF0aW9uIHRoYW4gd2hhdCBpcyBpbiB0aGUgaW5wdXQgZmllbGRcblx0XHRcdFx0XHR2Tm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkICsgdi5zbGljZShxdWVyeUtleS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHZMb3cgPSB2Tm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHQvLyBTdHJpcCBibGFja2xpc3RlZCBjYXRlZ29yaWVzXG5cdFx0XHRcdGlmIChIQy5ibGFja2xpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0LnRlc3QodGl0bGVzW2ldKSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGEgPT09IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYS5pbmRleE9mKGIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYSBiZWdpbnMgd2l0aCBiOiBhID4gYlxuXHRcdFx0XHRcdGlmIChiLmluZGV4T2YoYSkgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYiBiZWdpbnMgd2l0aCBhOiBhIDwgYlxuXHRcdFx0XHRcdC8vIE9wZW5zZWFyY2ggbWF5IHJldHVybiBzdHVmZiBub3QgYmVnaW5uaW5nIHdpdGggdGhlIHNlYXJjaCBwcmVmaXghXG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQSA9IGEuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hCID0gYi5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2FzZS1pbnNlbnNpdGl2ZSBwcmVmaXggbWF0Y2ghXG5cdFx0XHRcdFx0Y29uc3QgYUxvdyA9IGEudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCBiTG93ID0gYi50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQSA9IGFMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQiA9IGJMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEgPCBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiIDwgYSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXMgYW5kIHNlbGYtcmVmZXJlbmNlc1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0KGkgKyAxIDwgdGl0bGVzLmxlbmd0aCAmJiB0aXRsZXNbaV0gPT09IHRpdGxlc1tpICsgMV0pIHx8XG5cdFx0XHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGl0bGVzW2ldID09PSBjb25mLndnVGl0bGUpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aXRsZXMgfHwgdGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzTm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbZmlyc3RUaXRsZV0gPSB0aXRsZXM7XG5cdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZShmaXJzdFRpdGxlLCB2LCB2Tm9ybWFsaXplZCwga2V5LCBkb250QXV0b2NvbXBsZXRlKTtcblx0XHRcdGNvbnN0IGV4aXN0aW5nID0gY29tcGxldGVkIHx8IGtub3duVG9FeGlzdCB8fCBmaXJzdFRpdGxlID09PSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHR0aGlzLmljb24uc3JjID0gZXhpc3RpbmcgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGV4aXN0aW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IGZpcnN0VGl0bGU7XG5cdFx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHRcdHdoaWxlICh0aGlzLmxpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLmxpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0sIHRydWUpKTtcblx0XHRcdFx0b3B0LnNlbGVjdGVkID0gY29tcGxldGVkICYmIGkgPT09IDA7XG5cdFx0XHRcdHRoaXMubGlzdC5hcHBlbmQob3B0KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGlzcGxheUxpc3QoKTtcblx0XHR9XG5cdFx0ZGlzcGxheUxpc3QoKSB7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuaXNfYWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgbm9mSXRlbXMgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggPiBIQy5saXN0U2l6ZSA/IEhDLmxpc3RTaXplIDogdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDw9IDEpIHtcblx0XHRcdFx0bm9mSXRlbXMgPSAyO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnNpemUgPSBub2ZJdGVtcztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5hbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHQvLyBDb21wdXRlIGluaXRpYWwgbGlzdCBwb3NpdGlvbi4gRmlyc3QgdGhlIGhlaWdodC5cblx0XHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRsZXQgbGlzdGggPSAwO1xuXHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0Ly8gT2ZmLXNjcmVlbiBkaXNwbGF5IHRvIGdldCB0aGUgaGVpZ2h0XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0VG9wfXB4YDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQXBwcm94aW1hdGUgY2FsY3VsYXRpb24gb2YgbWF4aW11bSBsaXN0IHNpemVcblx0XHRcdGxldCBtYXhMaXN0SGVpZ2h0ID0gbGlzdGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPCBIQy5saXN0U2l6ZSkge1xuXHRcdFx0XHRtYXhMaXN0SGVpZ2h0ID0gKGxpc3RoIC8gbm9mSXRlbXMpICogSEMubGlzdFNpemU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGlmIChpc193ZWJraXQgJiYgIWRvY3VtZW50LmV2YWx1YXRlKSB7XG5cdFx0XHRcdFx0Ly8gU2FmYXJpIDwgMy4wXG5cdFx0XHRcdFx0cmV0dXJuIHdpbmRvd1tgaW5uZXIke3doYXR9YF07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcyA9IGBjbGllbnQke3doYXR9YDtcblx0XHRcdFx0aWYgKHdpbmRvdy5vcGVyYSkge1xuXHRcdFx0XHRcdHJldHVybiAkKCdib2R5JylbMF1bc107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwKSB8fCAkKCdib2R5JylbMF1bc10gfHwgMDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0Y29uc3QgcyA9IGBzY3JvbGwke3doYXR9YDtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwKSB8fCAkKCdib2R5JylbMF1bc10gfHwgMDtcblx0XHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0XHQvLyBSVEwgaW5jb25zaXN0ZW5jaWVzLlxuXHRcdFx0XHRcdC8vIEZGOiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IG5lZ2F0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBXZWJraXQ6IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggYXQgdGhlIGZhciByaWdodCwgdGhlbiBkb3duIHRvIHplcm8uXG5cdFx0XHRcdFx0Ly8gT3BlcmE6IGRvbid0IGtub3cuLi5cblx0XHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gLXJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHNjcm9sbF9vZmZzZXQoJ1dpZHRoJykgLSB2aWV3cG9ydCgnV2lkdGgnKSAtIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSAobm9kZSkgPT4ge1xuXHRcdFx0XHQvLyBTdHJpcHBlZC1kb3duIHNpbXBsaWZpZWQgcG9zaXRpb24gZnVuY3Rpb24uIEl0J3MgZ29vZCBlbm91Z2ggZm9yIG91ciBwdXJwb3Nlcy5cblx0XHRcdFx0aWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0eDogTWF0aC5yb3VuZChib3gubGVmdCArIHNjcm9sbF9vZmZzZXQoJ0xlZnQnKSksXG5cdFx0XHRcdFx0XHR5OiBNYXRoLnJvdW5kKGJveC50b3AgKyBzY3JvbGxfb2Zmc2V0KCdUb3AnKSksXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdCA9IDA7XG5cdFx0XHRcdGxldCBsID0gMDtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHQgKz0gbm9kZS5vZmZzZXRUb3AgfHwgMDtcblx0XHRcdFx0XHRsICs9IG5vZGUub2Zmc2V0TGVmdCB8fCAwO1xuXHRcdFx0XHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0XHRcdFx0fSB3aGlsZSAobm9kZSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogbCxcblx0XHRcdFx0XHR5OiB0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQpO1xuXHRcdFx0Y29uc3QgbmwgPSAwO1xuXHRcdFx0bGV0IG50ID0gMDtcblx0XHRcdC8vIE9wZXJhIDkuNSBzb21laG93IGhhcyBvZmZzZXRXaWR0aCA9IDAgaGVyZT8/IFVzZSB0aGUgbmV4dCBiZXN0IHZhbHVlLi4uXG5cdFx0XHRsZXQgb2Zmc2V0ID0gMDtcblx0XHRcdGNvbnN0IHRleHRCb3hXaWR0aCA9IHRoaXMudGV4dC5vZmZzZXRXaWR0aCB8fCB0aGlzLnRleHQuY2xpZW50V2lkdGg7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHQvLyBGaWd1cmUgb3V0IHRoZSBoZWlnaHQgb2YgdGhpcyBzZWxlY3RvcjogZGlzcGxheSBpdCBvZmYtc2NyZWVuLCB0aGVuIGhpZGUgaXQgYWdhaW4uXG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0UG9zLnkgPCBtYXhMaXN0SGVpZ2h0ICsgb2Zmc2V0ICsgMSkge1xuXHRcdFx0XHQvLyBUaGUgbGlzdCBtaWdodCBleHRlbmQgYmV5b25kIHRoZSB1cHBlciBib3JkZXIgb2YgdGhlIHBhZ2UuIExldCdzIGF2b2lkIHRoYXQgYnkgcGxhY2luZyBpdFxuXHRcdFx0XHQvLyBiZWxvdyB0aGUgaW5wdXQgdGV4dCBmaWVsZC5cblx0XHRcdFx0bnQgPSB0aGlzLnRleHQub2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0ICsgMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldEhlaWdodH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG50ID0gLWxpc3RoIC0gb2Zmc2V0IC0gMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7LShvZmZzZXQgKyAxKX1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHtudH1weGA7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSAnJzsgLy8gTm8gZml4ZWQgd2lkdGggKHlldClcblx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVuZ2luZSh0aGlzLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGxpc3Rcblx0XHRcdGlmICh0aGlzLmxpc3Qub2Zmc2V0V2lkdGggPCB0ZXh0Qm94V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRjb25zdCBzY3JvbGwgPSBzY3JvbGxfb2Zmc2V0KCdMZWZ0Jyk7XG5cdFx0XHRjb25zdCB2aWV3X3cgPSB2aWV3cG9ydCgnV2lkdGgnKTtcblx0XHRcdGxldCB3ID0gdGhpcy5saXN0Lm9mZnNldFdpZHRoO1xuXHRcdFx0Y29uc3QgbF9wb3MgPSBwb3NpdGlvbih0aGlzLmxpc3QpO1xuXHRcdFx0bGV0IGxlZnQgPSBsX3Bvcy54O1xuXHRcdFx0bGV0IHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRpZiAobGVmdCA8IHNjcm9sbCB8fCByaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRpZiAodyA+IHZpZXdfdykge1xuXHRcdFx0XHRcdHcgPSB2aWV3X3c7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7d31weGA7XG5cdFx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlbGF0aXZlX29mZnNldCA9IDA7XG5cdFx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gc2Nyb2xsIC0gbGVmdDtcblx0XHRcdFx0fSBlbHNlIGlmIChyaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWxhdGl2ZV9vZmZzZXQpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sICsgcmVsYXRpdmVfb2Zmc2V0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRhdXRvQ29tcGxldGUobmV3VmFsLCBhY3RWYWwsIG5vcm1hbGl6ZWRBY3RWYWwsIGtleSwgZG9udE1vZGlmeSkge1xuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbnRNb2RpZnkgfHwgdGhpcy5pbWUgfHwgIXRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgd2UgY2FuJ3Qgc2VsZWN0IHByb3Blcmx5IG9yIGFuIElNRSBjb21wb3NpdGlvbiBpcyBvbmdvaW5nLCBhdXRvY29tcGxldGlvbiB3b3VsZCBiZSBhIG1ham9yIGFubm95YW5jZSB0byB0aGUgdXNlci5cblx0XHRcdGlmIChuZXdWYWwuaW5kZXhPZihhY3RWYWwpKSB7XG5cdFx0XHRcdC8vIE1heWJlIGl0J2xsIHdvcmsgd2l0aCB0aGUgbm9ybWFsaXplZCB2YWx1ZSAoTkZDKT9cblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRBY3RWYWwgJiYgbmV3VmFsLmluZGV4T2Yobm9ybWFsaXplZEFjdFZhbCkgPT09IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5sYXN0UmVhbElucHV0ID09PSBhY3RWYWwpIHtcblx0XHRcdFx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjdFZhbCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBBY3R1YWwgaW5wdXQgaXMgYSBwcmVmaXggb2YgdGhlIG5ldyB0ZXh0LiBGaWxsIGluIG5ldyB0ZXh0LCBzZWxlY3RpbmcgdGhlIG5ld2x5IGFkZGVkIHN1ZmZpeFxuXHRcdFx0Ly8gc3VjaCB0aGF0IGl0IGNhbiBiZSBlYXNpbHkgcmVtb3ZlZCBieSB0eXBpbmcgYmFja3NwYWNlIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHVud2FudGVkLlxuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSBuZXdWYWwgKyBrZXk7XG5cdFx0XHR0aGlzLnNldFNlbGVjdGlvbihhY3RWYWwubGVuZ3RoLCBuZXdWYWwubGVuZ3RoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjYW5TZWxlY3QoKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UgfHxcblx0XHRcdFx0dGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSB8fFxuXHRcdFx0XHQodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50ZXh0LnNlbGVjdGlvbkVuZCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0c2V0U2VsZWN0aW9uKGZyb20sIHRvKSB7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcblx0XHRcdFx0Ly8gZS5nLiBraHRtbFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UoZnJvbSwgdG8pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoZnJvbSA+IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UpIHtcblx0XHRcdFx0Ly8gSUVcblx0XHRcdFx0Y29uc3QgbmV3X3NlbGVjdGlvbiA9IHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UoKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5tb3ZlKCdjaGFyYWN0ZXInLCBmcm9tKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5tb3ZlRW5kKCdjaGFyYWN0ZXInLCB0byAtIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLnNlbGVjdCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRTZWxlY3Rpb24oKSB7XG5cdFx0XHRsZXQgZnJvbSA9IDA7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGxldCB0byA9IDA7XG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHQvLyBObyB0ZXh0LlxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0O1xuXHRcdFx0XHR0byA9IHRoaXMudGV4dC5zZWxlY3Rpb25FbmQ7XG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcblx0XHRcdFx0Ly8gSUVcblx0XHRcdFx0Y29uc3Qgcm5nID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuZHVwbGljYXRlKCk7XG5cdFx0XHRcdGlmIChybmcucGFyZW50Tm9kZSgpID09PSB0aGlzLnRleHQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dFJuZyA9IHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UoKTtcblx0XHRcdFx0XHRcdHRleHRSbmcubW92ZSgnY2hhcmFjdGVyJywgMCk7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLnNldEVuZFBvaW50KCdFbmRUb0VuZCcsIHJuZyk7XG5cdFx0XHRcdFx0XHQvLyBXZSdyZSBpbiBhIHNpbmdsZS1saW5lIGlucHV0IGJveDogbm8gbmVlZCB0byBjYXJlIGFib3V0IElFJ3Mgc3RyYW5nZVxuXHRcdFx0XHRcdFx0Ly8gaGFuZGxpbmcgb2YgbGluZSBlbmRzXG5cdFx0XHRcdFx0XHR0byA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLnNldEVuZFBvaW50KCdFbmRUb1N0YXJ0Jywgcm5nKTtcblx0XHRcdFx0XHRcdGZyb20gPSB0ZXh0Um5nLnRleHQubGVuZ3RoO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR0byA9IGZyb207IC8vIEF0IGVuZCBvZiB0ZXh0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdFx0ZW5kOiB0byxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHNhdmVWaWV3KCkge1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0cHJvY2Vzc0tleShldmVudCkge1xuXHRcdFx0bGV0IGRpciA9IDA7XG5cdFx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERPV046XG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR1VQOlxuXHRcdFx0XHRcdGRpciA9IC1IQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR0RPV046XG5cdFx0XHRcdFx0ZGlyID0gSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVNDOlxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcikge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuXHRcdFx0XHRcdC8vIExpc3QgaXMgdmlzaWJsZSwgc28gdGhlcmUgYXJlIHN1Z2dlc3Rpb25zXG5cdFx0XHRcdFx0dGhpcy5oaWdobGlnaHRTdWdnZXN0aW9uKGRpcik7XG5cdFx0XHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQsIG90aGVyd2lzZSBzb21lIGJyb3dzZXJzIChlLmcuLCBGaXJlZm94KSBtYXkgYWRkaXRpb25hbGx5IHRyZWF0IGFuIHVwLWFycm93XG5cdFx0XHRcdFx0Ly8gYXMgXCJwbGFjZSB0aGUgdGV4dCBjdXJzb3IgYXQgdGhlIGZyb250XCIsIHdoaWNoIHdlIGRvbid0IHdhbnQgaGVyZS5cblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0dGhpcy5rZXlDb3VudCA8PSAxICYmXG5cdFx0XHRcdFx0KCF0aGlzLmNhbGxiYWNrT2JqIHx8IHRoaXMuY2FsbGJhY2tPYmouY2FsbHNNYWRlID09PSB0aGlzLmNhbGxiYWNrT2JqLm5vZkNhbGxzKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBJZiBubyBzdWdnZXN0aW9ucyBkaXNwbGF5ZWQsIGdldCB0aGVtLCB1bmxlc3Mgd2UncmUgYWxyZWFkeSBnZXR0aW5nIHRoZW0uXG5cdFx0XHRcdFx0dGhpcy50ZXh0Y2hhbmdlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRoaWdobGlnaHRTdWdnZXN0aW9uKGRpcikge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGxldCB0Z3QgPSAtMTtcblx0XHRcdGlmIChkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPCAwIHx8IGN1cnIgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRndCA9IGN1cnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0Z3QgPSBjdXJyIDwgMCA/IDAgOiBjdXJyICsgZGlyO1xuXHRcdFx0XHR0Z3QgPSB0Z3QgPCAwID8gMCA6IHRndDtcblx0XHRcdFx0aWYgKHRndCA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0Z3QgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGd0ICE9PSBjdXJyIHx8IGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggJiYgZGlyICE9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUodGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0LCB0aGlzLmxhc3RSZWFsSW5wdXQsIG51bGwsIGtleSwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIWNvbXBsZXRlZCB8fCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgPT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCArIGtleTtcblx0XHRcdFx0XHRpZiAodGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24odGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0O1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYmUgd3JvbmcgaWYgZnJvbSBhIGRhYiBsaXN0Li4uXG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXNldEtleVNlbGVjdGlvbigpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0XHQvLyBvdXIgZXZlbnQgaGFuZGxlcnMgZXZlciBnZXQgYSBjaGFuY2UgdG8gcnVuLlxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdlswXSAhPT0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxhc3RSZWFsSW5wdXQgKyBrZXk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGFzdFJlYWxJbnB1dDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHQvLyBVc2VyIGNvbmZpZ3VyYXRpb25zOiBEbyB0aGlzIGhlcmUsIGNhbGxlZCBmcm9tIHRoZSBvbmxvYWQgaGFuZGxlciwgc28gdGhhdCB1c2VycyBjYW5cblx0XHQvLyBvdmVycmlkZSBpdCBlYXNpbHkgaW4gdGhlaXIgb3duIHVzZXIgc2NyaXB0IGZpbGVzIGJ5IGp1c3QgZGVjbGFyaW5nIHZhcmlhYmxlcy5cblx0XHRjb25zdCBjb25maWcgPSB7fTtcblx0XHRIQy5kb250X2FkZF90b193YXRjaGxpc3QgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0XG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdDtcblx0XHRIQy5ub19hdXRvY29tbWl0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBjb25mLndnTmFtZXNwYWNlTnVtYmVyICUgMlxuXHRcdFx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdFx0XHQ6IEhDLm5vX2F1dG9jb21taXQgLy8gT24gdGFsayBuYW1lc3BhY2UgZGVmYXVsdCBhdXRvY29tbWl0IG9mZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0O1xuXHRcdEhDLmRlbF9uZWVkc19kaWZmID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZGVsX25lZWRzX2RpZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmZcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmY7XG5cdFx0SEMuc3VnZ2VzdF9kZWxheSA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IHx8IEhDLnN1Z2dlc3RfZGVsYXk7XG5cdFx0SEMuZWRpdGJveF93aWR0aCA9IHdpbmRvdy5ob3RjYXRfZWRpdGJveF93aWR0aCB8fCBjb25maWcuSG90Q2F0RWRpdEJveFdpZHRoIHx8IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0SEMuc3VnZ2VzdGlvbnMgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zIHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9ucyB8fCBIQy5zdWdnZXN0aW9ucztcblx0XHRpZiAodHlwZW9mIEhDLnN1Z2dlc3Rpb25zICE9PSAnc3RyaW5nJyB8fCAhc3VnZ2VzdGlvbkNvbmZpZ3NbSEMuc3VnZ2VzdGlvbnNdKSB7XG5cdFx0XHRIQy5zdWdnZXN0aW9ucyA9ICdjb21iaW5lZCc7XG5cdFx0fVxuXHRcdEhDLmZpeGVkX3NlYXJjaCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5maXhlZF9zZWFyY2hcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkO1xuXHRcdEhDLnNpbmdsZV9taW5vciA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5zaW5nbGVfbWlub3Jcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yO1xuXHRcdEhDLmJnX2NoYW5nZWQgPSB3aW5kb3cuaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCB8fCBjb25maWcuSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQgfHwgSEMuYmdfY2hhbmdlZDtcblx0XHRIQy51c2VfdXBfZG93biA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMudXNlX3VwX2Rvd25cblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcztcblx0XHRIQy5saXN0U2l6ZSA9IHdpbmRvdy5ob3RjYXRfbGlzdF9zaXplIHx8IGNvbmZpZy5Ib3RDYXRMaXN0U2l6ZSB8fCBIQy5saXN0U2l6ZTtcblx0XHRIQy5jaGFuZ2VUYWcgPSBjb25maWcuSG90Q2F0Q2hhbmdlVGFnIHx8ICcnO1xuXHRcdC8vIFRoZSBuZXh0IHdob2xlIHNoZWJhbmcgaXMgbmVlZGVkLCBiZWNhdXNlIG1hbnVhbCB0YWdzIGdldCBub3Qgc3VibWl0dGVkIGV4Y2VwdCBvZiBzYXZlXG5cdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0Y29uc3QgZUZvcm0gPSBkb2N1bWVudC5lZGl0Zm9ybTtcblx0XHRcdGNvbnN0IGNhdFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxcW1xcXFxbKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRsZXQgb2xkVHh0O1xuXHRcdFx0Ly8gUmV0dXJucyB0cnVlIGlmIG1pbm9yIGNoYW5nZVxuXHRcdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpID0+IHtcblx0XHRcdFx0bGV0IG5ld1R4dCA9IGVGb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdGlmICghbmV3VHh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1R4dCA9IG5ld1R4dC52YWx1ZTtcblx0XHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRjb25zdCBuZXdMaW5lcyA9IG5ld1R4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGxldCBjQXJyOyAvLyBjaGFuZ2VzXG5cdFx0XHRcdGNvbnN0IGV4Y2VwdCA9IChhQXJyLCBiQXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRcdFx0bGV0IGxBcnI7IC8vIHNtYWxsZXJcblx0XHRcdFx0XHRsZXQgLy8gbGFyZ2VyXG5cdFx0XHRcdFx0XHRzQXJyO1xuXHRcdFx0XHRcdGlmIChhQXJyLmxlbmd0aCA8IGJBcnIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYkFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYUFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgbEFycikge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5kID0gc0Fyci5pbmRleE9mKGl0ZW0pO1xuXHRcdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGNBcnIgPSBleGNlcHQob2xkTGluZXMsIG5ld0xpbmVzKTtcblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNBcnIgPSBjQXJyLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0XHRcdFx0YyA9IGMudHJpbSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGMgJiYgIWNhdFJlZ0V4cC50ZXN0KGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdG9sZFR4dCA9IG5ld1R4dDtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmIChcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiA9PT0gJ3N1Ym1pdCcgJiZcblx0XHRcdFx0Y29uZi53Z0FydGljbGVJZCAmJlxuXHRcdFx0XHRlRm9ybSAmJlxuXHRcdFx0XHRlRm9ybS53cFN1bW1hcnkgJiZcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpa2lEaWZmJylcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBzdW0gPSBlRm9ybS53cFN1bW1hcnk7XG5cdFx0XHRcdGNvbnN0IHN1bUEgPSBlRm9ybS53cEF1dG9TdW1tYXJ5O1xuXHRcdFx0XHRpZiAoc3VtLnZhbHVlICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdC8vIEhvdENhdCBkaWZmXG5cdFx0XHRcdFx0Ly8gTUQ1IGhhc2ggb2YgdGhlIGVtcHR5IHN0cmluZywgYXMgSG90Q2F0IGVkaXQgaXMgYmFzZWQgb24gZW1wdHkgc3VtXG5cdFx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHRcdC8vIEF0dHIgY3JlYXRpb24gYW5kIGV2ZW50IGhhbmRsaW5nIGlzIG5vdCBzYW1lIGluIGFsbCAob2xkKSBicm93c2VycyBzbyB1c2UgJFxuXHRcdFx0XHRcdGNvbnN0ICRjdCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnZhbChIQy5jaGFuZ2VUYWcpO1xuXHRcdFx0XHRcdCQoZUZvcm0pLmFwcGVuZCgkY3QpO1xuXHRcdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDEudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNhdmVdJykub25lKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICgkY3QudmFsKCkpIHtcblx0XHRcdFx0XHRcdFx0c3VtLnZhbHVlID0gc3VtLnZhbHVlLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSB8fCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZUNoYW5nZVRhZyA9ICgpID0+IHtcblx0XHRcdFx0XHRcdCQoZUZvcm0ud3BUZXh0Ym94MSlcblx0XHRcdFx0XHRcdFx0LmFkZChzdW0pXG5cdFx0XHRcdFx0XHRcdC5vbmUoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzTWlub3JDaGFuZ2UoKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRjdC52YWwoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTnVtZXJpYyBpbnB1dCwgbWFrZSBzdXJlIHdlIGhhdmUgYSBudW1lcmljIHZhbHVlXG5cdFx0SEMubGlzdFNpemUgPSBOdW1iZXIucGFyc2VJbnQoSEMubGlzdFNpemUsIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzTmFOKEhDLmxpc3RTaXplKSB8fCBIQy5saXN0U2l6ZSA8IDUpIHtcblx0XHRcdEhDLmxpc3RTaXplID0gNTtcblx0XHR9XG5cdFx0SEMubGlzdFNpemUgPSBNYXRoLm1pbihIQy5saXN0U2l6ZSwgMzApOyAvLyBNYXggc2l6ZVxuXHRcdC8vIExvY2FsaXplIHNlYXJjaCBlbmdpbmUgbmFtZXNcblx0XHRmb3IgKGNvbnN0IFtrZXksIHN1Z2dlc3Rpb25Db25maWddIG9mIE9iamVjdC5lbnRyaWVzKHN1Z2dlc3Rpb25Db25maWdzKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGtleSAmJiBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCkpIHtcblx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnLm5hbWUgPSBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQ2F0Y2ggYm90aCBuYXRpdmUgUlRMIGFuZCBcImZha2VkXCIgUlRMIHRocm91Z2ggW1tNZWRpYVdpa2k6UnRsLmpzXV1cblx0XHRpc19ydGwgPSBoYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdydGwnKTtcblx0XHRpZiAoIWlzX3J0bCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0Ly8gR2Vja28gZXRjLlxuXHRcdFx0XHRpc19ydGwgPSBkb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgbnVsbClcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XG5cdFx0XHR9IGVsc2UgaWYgKCQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUpIHtcblx0XHRcdFx0Ly8gSUUsIGhhcyBzdWJ0bGUgZGlmZmVyZW5jZXMgdG8gZ2V0Q29tcHV0ZWRTdHlsZVxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uY3VycmVudFN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vdCBleGFjdGx5IHJpZ2h0LCBidXQgYmVzdCBlZmZvcnRcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLnN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlzX3J0bCA9IGlzX3J0bCA9PT0gJ3J0bCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjYW5fZWRpdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLWVkaXQnKSAhPT0gbnVsbDtcblx0fTtcblx0Ly8gTGVnYWN5IHN0dWZmXG5cdGNvbnN0IGNsb3NlRm9ybSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBDbG9zZSBhbGwgb3BlbiBlZGl0b3JzIHdpdGhvdXQgcmVkaXJlY3QgcmVzb2x1dGlvbiBhbmQgb3RoZXIgYXN5bmNocm9ub3VzIHN0dWZmLlxuXHRcdGZvciAoY29uc3QgZWRpdCBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VfUEVORElORykge1xuXHRcdFx0XHRlZGl0LnNhbml0aXplSW5wdXQoKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBlZGl0LnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdFx0XHRlZGl0LmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldHVwX3VwbG9hZCA9ICgpID0+IHtcblx0XHRvblVwbG9hZCA9IHRydWU7XG5cdFx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0XHRsZXQgaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaHRtbGZvcm0tZGVzY3JpcHRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0XHR3aGlsZSAoaXAgJiYgaXAubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RhYmxlJykge1xuXHRcdFx0XHRpcCA9IGlwLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV1cGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRm9yUmVVcGxvYWRdJyk7XG5cdFx0Y29uc3QgZGVzdEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKChyZXVwbG9hZCAmJiAhIXJldXBsb2FkLnZhbHVlKSB8fCAoZGVzdEZpbGUgJiYgKGRlc3RGaWxlLmRpc2FibGVkIHx8IGRlc3RGaWxlLnJlYWRPbmx5KSkpIHtcblx0XHRcdHJldHVybjsgLy8gcmUtdXBsb2FkIGZvcm0uLi5cblx0XHR9XG5cdFx0Ly8gSW5zZXJ0IGEgdGFibGUgcm93IHdpdGggdHdvIGZpZWxkcyAobGFiZWwgYW5kIGVtcHR5IGNhdGVnb3J5IGJhcilcblx0XHRjb25zdCBsYWJlbENlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdGNvbnN0IGxpbmVDZWxsID0gbWFrZSgndGQnKTtcblx0XHQvLyBDcmVhdGUgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0Y2F0TGluZS5jbGFzc05hbWUgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuaWQgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHQvLyBXZSdsbCBiZSBpbnNpZGUgYSB0YWJsZSByb3cuIE1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IGhhdmUgbWFyZ2lucyBvciBzdHJhbmdlIGJvcmRlcnMuXG5cdFx0Y2F0TGluZS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5cdFx0Y2F0TGluZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cdFx0bGluZUNlbGwuYXBwZW5kKGNhdExpbmUpO1xuXHRcdC8vIENyZWF0ZSB0aGUgbGFiZWxcblx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0aWYgKGxhYmVsKSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWxUcmFuc2xhdGVkJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobGFiZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWwnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdH1cblx0XHRsYWJlbENlbGwuY2xhc3NOYW1lID0gJ213LWxhYmVsJztcblx0XHRsYWJlbENlbGwuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRsYWJlbENlbGwuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHRcdC8vIENoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LXVwbG9hZC1mb3JtJyk7XG5cdFx0aWYgKGZvcm0pIHtcblx0XHRcdGNvbnN0IG5ld1JvdyA9IGlwLmluc2VydFJvdygtMSk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxhYmVsQ2VsbCk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxpbmVDZWxsKTtcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKG9sZFN1Ym1pdCwgLi4uYXJncykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgZG9fc3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAob2xkU3VibWl0KSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9sZFN1Ym1pdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gd2luZG93LmV2YWwob2xkU3VibWl0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob2xkU3VibWl0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gb2xkU3VibWl0LmFwcGx5KGZvcm0sIFtvbGRTdWJtaXQsIC4uLmFyZ3NdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFkb19zdWJtaXQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvc2VGb3JtKCk7XG5cdFx0XHRcdFx0Ly8gQ29weSB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdGNvbnN0IGViID1cblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BVcGxvYWREZXNjcmlwdGlvbl0nKSB8fFxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzYycpO1xuXHRcdFx0XHRcdGxldCBhZGRlZE9uZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdfY2F0ID0gYFtbJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dH0ke2tleSA/IGB8JHtrZXl9YCA6ICcnfV1dYDtcblx0XHRcdFx0XHRcdC8vIE9ubHkgYWRkIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRcdFx0XHRjb25zdCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZS5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgpO1xuXHRcdFx0XHRcdFx0aWYgKCFmaW5kX2NhdGVnb3J5KF9jbGVhbmVkVGV4dCwgdCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdFx0ZWIudmFsdWUgKz0gYFxcbiR7bmV3X2NhdH1gO1xuXHRcdFx0XHRcdFx0XHRhZGRlZE9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhZGRlZE9uZSkge1xuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIFwic3Vic3Q6dW5jXCIgYWRkZWQgYnkgRmxpbmZvIGlmIGl0IGRpZG4ndCBmaW5kIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgne3skJy5jb25jYXQoJ3N1YnN0OicpLmNvbmNhdCgndW5jfX0nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGViLnZhbHVlID0gZWIudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSkoZm9ybS5vbnN1Ym1pdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGxldCBjbGVhbmVkVGV4dCA9IG51bGw7XG5cdGNvbnN0IGlzT25QYWdlID0gKHtmaXJzdENoaWxkfSkgPT4ge1xuXHRcdGlmIChmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBjYXRUaXRsZSA9IHRpdGxlKGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdGlmICghY2F0VGl0bGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXRUaXRsZSA9IGNhdFRpdGxlLnNsaWNlKGNhdFRpdGxlLmluZGV4T2YoJzonKSArIDEpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRpZiAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KGNhdFRpdGxlKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdHRpdGxlOiBjYXRUaXRsZSxcblx0XHRcdG1hdGNoOiBbJycsICcnLCAnJ10sXG5cdFx0fTtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChjbGVhbmVkVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNsZWFuZWRUZXh0ID0gcGFnZVRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCAnJyk7XG5cdFx0fVxuXHRcdHJlc3VsdC5tYXRjaCA9IGZpbmRfY2F0ZWdvcnkoY2xlYW5lZFRleHQsIGNhdFRpdGxlLCB0cnVlKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0bGV0IHNldHVwVGltZW91dCA9IG51bGw7XG5cdGNvbnN0IGZpbmRCeUNsYXNzID0gKHNjb3BlLCB0YWcsIGNsYXNzTmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQoc2NvcGUpLmZpbmQoYCR7dGFnfS4ke2NsYXNzTmFtZX1gKTtcblx0XHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdIDogbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0dXAgPSAoYWRkaXRpb25hbFdvcmspID0+IHtcblx0XHRpZiAoaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdGlmIChzZXR1cFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoc2V0dXBUaW1lb3V0KTtcblx0XHRcdHNldHVwVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIEZpbmQgdGhlIGNhdGVnb3J5IGJhciwgb3IgY3JlYXRlIGFuIGVtcHR5IG9uZSBpZiB0aGVyZSBpc24ndCBvbmUuIFRoZW4gYWRkIC0vKy0gbGlua3MgYWZ0ZXJcblx0XHQvLyBlYWNoIGNhdGVnb3J5LCBhbmQgYWRkIHRoZSArIGxpbmsuXG5cdFx0Y2F0TGluZSB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vcm1hbC1jYXRsaW5rcycpOyAvLyBTcGVjaWFsOlVwbG9hZFxuXHRcdGNvbnN0IGhpZGRlbkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaGlkZGVuLWNhdGxpbmtzJyk7XG5cdFx0aWYgKCFjYXRMaW5lKSB7XG5cdFx0XHRsZXQgZm9vdGVyID0gbnVsbDtcblx0XHRcdGlmICghaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRmb290ZXIgPSBmaW5kQnlDbGFzcyhkb2N1bWVudCwgJ2RpdicsICdwcmludGZvb3RlcicpO1xuXHRcdFx0XHRpZiAoIWZvb3Rlcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSAvLyBEb24ndCBrbm93IHdoZXJlIHRvIGluc2VydCB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0Y2F0TGluZS5pZCA9ICdtdy1ub3JtYWwtY2F0bGlua3MnO1xuXHRcdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0Ly8gQWRkIGEgbGFiZWxcblx0XHRcdGNvbnN0IGxhYmVsID0gbWFrZSgnYScpO1xuXHRcdFx0bGFiZWwuaHJlZiA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICdTcGVjaWFsOkNhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLnRpdGxlID0gZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChsYWJlbCk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChtYWtlKCc6JywgdHJ1ZSkpO1xuXHRcdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgY2F0ZWdvcnkgbGluZVxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IGhpZGRlbkNhdHMgPyBoaWRkZW5DYXRzLnBhcmVudE5vZGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MnKTtcblx0XHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0XHRjb250YWluZXIuaWQgPSAnY2F0bGlua3MnO1xuXHRcdFx0XHRmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBmb290ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyBub3ByaW50Jztcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRoaWRkZW5DYXRzLmJlZm9yZShjYXRMaW5lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbmQgaWYgY2F0TGluZSBleGlzdHNcblx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRjYXRMaW5lLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0XHRjb25zdCBjcmVhdGVFZGl0b3JzID0gKGxpbmUsIGlzX2hpZGRlbikgPT4ge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgY2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblx0XHRcdGlmIChjYXRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bmV3RE9NID0gdHJ1ZTtcblx0XHRcdFx0bGluZSA9IGNhdHNbMF0ucGFyZW50Tm9kZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcblx0XHRcdH1cblx0XHRcdC8vIENvcHkgY2F0cywgb3RoZXJ3aXNlIGl0J2xsIGFsc28gbWFnaWNhbGx5IGNvbnRhaW4gb3VyIGFkZGVkIHNwYW5zIGFzIGl0IGlzIGEgbGl2ZSBjb2xsZWN0aW9uIVxuXHRcdFx0Y29uc3QgY29weUNhdHMgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBjYXRzLmxlbmd0aCxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29weUNhdHNbaV0gPSBjYXRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNvcHlDYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjb3B5Q2F0c1tpXSk7XG5cdFx0XHRcdGlmICh0ZXN0ICE9PSBudWxsICYmIHRlc3QubWF0Y2ggIT09IG51bGwgJiYgbGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihsaW5lLCBjb3B5Q2F0c1tpXSwgdGVzdC50aXRsZSwgdGVzdC5tYXRjaFsyXSwgaXNfaGlkZGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHlDYXRzLmxlbmd0aCA+IDAgPyBjb3B5Q2F0cy5hdCgtMSkgOiBudWxsO1xuXHRcdH07XG5cdFx0Y29uc3QgbGFzdFNwYW4gPSBjcmVhdGVFZGl0b3JzKGNhdExpbmUsIGZhbHNlKTtcblx0XHQvLyBDcmVhdGUgb25lIHRvIGFkZCBhIG5ldyBjYXRlZ29yeVxuXHRcdG5ldyBDYXRlZ29yeUVkaXRvcihuZXdET00gPyBjYXRMaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJylbMF0gOiBjYXRMaW5lLCBudWxsLCBudWxsLCBsYXN0U3BhbiAhPT0gbnVsbCwgZmFsc2UpO1xuXHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdGlmIChwYWdlVGV4dCAhPT0gbnVsbCAmJiBoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRoaWRkZW5DYXRzLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNyZWF0ZUVkaXRvcnMoaGlkZGVuQ2F0cywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgZmluYWxseSBhZGQgdGhlIFwibXVsdGktbW9kZVwiIHNwYW4uIChEbyB0aGlzIGF0IHRoZSBlbmQsIG90aGVyd2lzZSBpdCBlbmRzIHVwIGluIHRoZSBsaXN0IGFib3ZlLilcblx0XHRcdGNvbnN0IGVuYWJsZU11bHRpID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRlbmFibGVNdWx0aS5kaXIgPSAncnRsJztcblx0XHRcdH1cblx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKGVuYWJsZU11bHRpLCBjYXRMaW5lLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7IC8vIG5ic3Bcblx0XHRcdG11bHRpU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtdWx0aVNwYW4pO1xuXHRcdFx0bXVsdGlTcGFuLmlubmVySFRNTCA9IGAoPGE+JHtIQy5hZGRtdWx0aX08L2E+KWA7XG5cdFx0XHRjb25zdCBbbGlua10gPSBtdWx0aVNwYW4ucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCdtdWx0aV90b29sdGlwJyk7XG5cdFx0XHRsaW5rLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblx0XHR9XG5cdFx0Y2xlYW5lZFRleHQgPSBudWxsO1xuXHRcdGlmIChhZGRpdGlvbmFsV29yayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHRcdH1cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5maXJlKCk7IC8vIEV4ZWN1dGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHQkKCdib2R5JykudHJpZ2dlcignaG90Y2F0U2V0dXBDb21wbGV0ZWQnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlQ29tbWl0Rm9ybSA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0Rm9ybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmb3JtQ29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0Zm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cdFx0Zm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJob3RjYXRDb21taXRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiJHtcblx0XHRcdGNvbmYud2dTY3JpcHRcblx0XHR9P3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0Y29uZi53Z1BhZ2VOYW1lXG5cdFx0KX0mYWN0aW9uPXN1Ym1pdFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVGV4dGJveDFcIj4ke2A8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJtb2RlbFwiIHZhbHVlPVwiJHtjb25mLndnUGFnZUNvbnRlbnRNb2RlbH1cIj5gfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm1hdFwiIHZhbHVlPVwidGV4dC94LXdpa2lcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN1bW1hcnlcIiB2YWx1ZT1cIlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BNaW5vcmVkaXRcIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwV2F0Y2h0aGlzXCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BBdXRvU3VtbWFyeVwiIHZhbHVlPVwiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXR0aW1lXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdGFydHRpbWVcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cERpZmZcIiB2YWx1ZT1cIndwRGlmZlwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9sZGlkXCIgdmFsdWU9XCIwXCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiaGNDb21taXRcIiB2YWx1ZT1cImhjQ29tbWl0XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0VG9rZW5cIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFVsdGltYXRlUGFyYW1cIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cENoYW5nZVRhZ3NcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwi4oSz8J2SsuKZpfCdk4rwnZOD8J2SvvCdkrjihLTwnZK54oSvXCIgbmFtZT1cIndwVW5pY29kZUNoZWNrXCI+PC9mb3JtPmA7XG5cdFx0Y29tbWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3RjYXRDb21taXRGb3JtJyk7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG5cdFx0Ly8gV2Uga25vdyB3ZSBoYXZlIGFuIGFydGljbGUgaGVyZS5cblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcyddLFxuXHRcdFx0XHRydmxpbWl0OiAnMScsXG5cdFx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0bWV0YTogWydzaXRlaW5mbyddLFxuXHRcdFx0fTtcblx0XHRcdEhDLnN0YXJ0ID0gKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9O1xuXHRcdFx0YXBpLmdldChwYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0SEMuc3RhcnQoZGF0YSk7XG5cdFx0XHR9KTtcblx0XHRcdHNldHVwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH0sIDQwMDApOyAvLyA0IHNlYywganVzdCBpbiBjYXNlIGdldHRpbmcgdGhlIHdpa2l0ZXh0IHRha2VzIGxvbmdlci5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRG9lc24ndCBleGlzdCB5ZXQuIERpc2FibGUgb24gbm9uLWV4aXN0aW5nIFVzZXIgcGFnZXMuXG5cdFx0XHRpZiAoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwYWdlVGV4dCA9ICcnO1xuXHRcdFx0cGFnZVRpbWUgPSBudWxsO1xuXHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXRTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBzdGF0ZS5zcGxpdCgnXFxuJyk7XG5cdFx0aWYgKGNhdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGluaXRpYWxpemVkICYmIGVkaXRvcnMubGVuZ3RoID09PSAxICYmIGVkaXRvcnNbMF0uaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0Ly8gSW5zZXJ0IG5ldyBzcGFucyBhbmQgY3JlYXRlIG5ldyBlZGl0b3JzIGZvciB0aGVtLlxuXHRcdFx0Y29uc3QgbmV3U3BhbnMgPSBbXTtcblx0XHRcdGNvbnN0IGJlZm9yZSA9IGVkaXRvcnMubGVuZ3RoID09PSAxID8gZWRpdG9yc1swXS5zcGFuIDogbnVsbDtcblx0XHRcdGxldCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGNhdHNbaV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNhdCA9IGNhdHNbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gY2F0Lmxlbmd0aCA+IDEgPyBjYXRbMV0gOiBudWxsO1xuXHRcdFx0XHRbY2F0XSA9IGNhdDtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHtjYXR9YCk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoY2F0LCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIWkpIHtcblx0XHRcdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShtYWtlKCcgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmVmb3JlLmJlZm9yZShzcGFuKTtcblx0XHRcdFx0aWYgKGJlZm9yZSAmJiBpICsgMSA8IGNhdHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTcGFuc1tuZXdTcGFucy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdGVsZW1lbnQ6IHNwYW4sXG5cdFx0XHRcdFx0dGl0bGU6IGNhdCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgY2hhbmdlIHRoZSBsYXN0IG9uZS4uLlxuXHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmV3U3BhbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGNhdExpbmUsIG5ld1NwYW5zW2ldLmVsZW1lbnQsIG5ld1NwYW5zW2ldLnRpdGxlLCBuZXdTcGFuc1tpXS5rZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0bGV0IHRleHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRleHQgKz0gYHwke2tleX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBgXFxuJHt0ZXh0fWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0Y29uc3QgcmVhbGx5X3J1biA9ICgpID0+IHtcblx0XHRpbml0aWFsaXplKCk7XG5cdFx0aWYgKFxuXHRcdFx0IUhDLnVwbG9hZF9kaXNhYmxlZCAmJlxuXHRcdFx0Y29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiZcblx0XHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0XHRjb25mLndnVXNlck5hbWVcblx0XHQpIHtcblx0XHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdFx0c2V0dXAoKCkgPT4ge1xuXHRcdFx0XHQvLyBDaGVjayBmb3Igc3RhdGUgcmVzdG9yYXRpb24gb25jZSB0aGUgc2V0dXAgaXMgZG9uZSBvdGhlcndpc2UsIGJ1dCBiZWZvcmUgc2lnbmFsbGluZyBzZXR1cCBjb21wbGV0aW9uXG5cdFx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiBVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSkge1xuXHRcdFx0XHRcdFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUoVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0XHRjb25mLndnQWN0aW9uICE9PSAndmlldycgfHxcblx0XHRcdFx0cGFyYW0oJ2RpZmYnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHQhY2FuX2VkaXQoKSB8fFxuXHRcdFx0XHRIQy5kaXNhYmxlKClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRQYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBydW4gPSAoKSA9PiB7XG5cdFx0aWYgKEhDLnN0YXJ0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0SEMuc3RhcnRlZCA9IHRydWU7XG5cdFx0cmVhbGx5X3J1bigpO1xuXHR9O1xuXHQvLyBFeHBvcnQgbGVnYWN5IGZ1bmN0aW9uc1xuXHR3aW5kb3cuaG90Y2F0X2dldF9zdGF0ZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9zZXRfc3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X2Nsb3NlX2Zvcm0gPSAoKSA9PiB7XG5cdFx0Y2xvc2VGb3JtKCk7XG5cdH07XG5cdEhDLnJ1bldoZW5SZWFkeSA9IChjYWxsYmFjaykgPT4ge1xuXHRcdC8vIHJ1biB1c2VyLXJlZ2lzdGVyZWQgY29kZSBvbmNlIEhvdENhdCBpcyBmdWxseSBzZXQgdXAgYW5kIHJlYWR5LlxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG5cdH07XG5cdC8vIFJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGlzIHZhcmllcyBkZXBlbmRpbmcgb24gTWVkaWFXaWtpIHZlcnNpb247XG5cdC8vIHdpbmRvdydzICdsb2FkJyBldmVudCBpcyBhbHdheXMgc2FmZSwgYnV0IHVzdWFsbHkgd2UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXG5cdGlmIChjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnVXBsb2FkJykge1xuXHRcdC8vIFJlbG9hZCBIb3RDYXQgYWZ0ZXIgKFZFKSBlZGl0cyAoYnVnIFQxMDMyODUpXG5cdFx0bXcuaG9vaygncG9zdEVkaXQnKS5hZGQoKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgSG90Q2F0IGluIGNhc2UgdGhpcyBpcyBhIHNvZnQgcmVsb2FkIChlLmcuIFZpc3VhbEVkaXRvciBlZGl0KSwgdW5sZXNzIHRoZSBjYXRlZ29yaWVzXG5cdFx0XHQvLyB3ZXJlIG5vdCByZS1yZW5kZXJlZCBhbmQgb3VyIGludGVyZmFjZSBpcyBzdGlsbCB0aGVyZSAoZS5nLiBEaXNjdXNzaW9uVG9vbHMgZWRpdClcblx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MgLmhvdGNhdGxpbmsnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbnVsbDtcblx0XHRcdGVkaXRvcnMgPSBbXTtcblx0XHRcdGluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHRIQy5zdGFydGVkID0gZmFsc2U7XG5cdFx0XHRydW4oKTtcblx0XHR9KTtcblx0fVxuXHQvLyBXZSBjYW4gc2FmZWx5IHRyaWdnZXIganVzdCBhZnRlciB1c2VyIGNvbmZpZ3VyYXRpb24gaXMgbG9hZGVkLlxuXHQvLyBVc2UgYWx3YXlzKCkgaW5zdGVhZCBvZiB0aGVuKCkgdG8gYWxzbyBzdGFydCBIb3RDYXQgaWYgdGhlIHVzZXIgbW9kdWxlIGhhcyBwcm9ibGVtcy5cblx0JChydW4pO1xufSkoKTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGtleSA9IGBob3RjYXQtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaG90Q2F0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7LoqK3nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG6aGe4oCcJDHigJ3mspLmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhumhnuKAnCQx4oCd5bey57aT5a2Y5Zyo77yM5rKS5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suiZleeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeWAi+WIhumhnicsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXG5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5YSy5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+eiuuWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn54Sh5rOV5b6e5Ly65pyN5Zmo5Y+W5b6X6aCB6Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG6aGe6K6K5pu054Sh5rOV5YSy5a2Y44CC5oiR5YCR54K65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG6aGeJyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOWwi+e0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpoIHpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5L215pCc5bCLJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDlgIvmlrDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrlrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrlgIvliIbpoZ4nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7Lorr7nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG57G74oCcJDHigJ3msqHmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhuexu+KAnCQx4oCd5bey57uP5a2Y5Zyo77yM5rKh5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suWkhOeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeS4quWIhuexuycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+S/neWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnoa7lrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+aXoOazleS7juacjeWKoeWZqOWPluW+l+mhtemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhuexu+abtOaUueaXoOazleS/neWtmOOAguaIkeS7rOS4uuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhuexuycsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzntKLntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aG16Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOW5tuaQnOe0oicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5Liq5paw5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5Liq5YiG57G7Jyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtob3RDYXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLHFCQUFxQjs7QUNEbEMsSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBR3hCLElBQU1DLFFBQXlDQyxlQUFjO0FBQzVELFVBQUEsR0FBT0gsa0JBQUFJLFdBQVVELFNBQVM7QUFDM0I7O0NDTUMsU0FBU0UsY0FBYztBQUN2QixNQUNDQyxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQ3ZDQyxPQUFPQyxrQ0FDUCxDQUFDQyxTQUFTQyxjQUFjLGtCQUFrQixHQUN6QztBQUNEO0VBQ0Q7QUFDQSxRQUFNQyxNQUFNWCxNQUFNLGlCQUFpQjtBQUNuQyxRQUFNWSx3QkFBd0I7QUFDOUIsUUFBTUMsV0FBVztBQUNqQixRQUFNQyxrQkFBa0I7QUFDeEIsUUFBTUMsY0FBY1gsR0FBR1ksUUFBUVYsSUFBSVEsZUFBZTtBQU9sRCxRQUFNRyxjQUFlQyxlQUE4QjtBQUNsRCxXQUFPQyxFQUFFLFFBQVEsRUFBRUMsS0FBSyxTQUFBLFdBQUFDLE9BQW9CSCxXQUFTLEdBQUEsRUFBQUcsT0FBSXhCLGtCQUFrQixDQUFFLEVBQUV5QixLQUFLLEdBQUc7RUFDeEY7QUFDQSxRQUFNQyxtQkFBbUJBLENBQUNDLFVBQStCQyxNQUFjQyxVQUF1QztBQUM3RyxXQUFPUCxFQUFFLE9BQU8sRUFDZFEsU0FBUyxXQUFXLEVBQ3BCQyxPQUNBVCxFQUFFLE9BQU8sRUFDUEMsS0FBSyxTQUFBLEdBQUFDLE9BQVlLLE9BQUssZ0JBQUEsQ0FBZ0IsRUFDdENHLElBQUk7TUFDSixjQUFjO01BQ2RDLFNBQVM7SUFDVixDQUFDLEVBQ0FGLE9BQU9ULEVBQUUsS0FBSyxF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em9CLE9BQUd5b0IsVUFBVTtBQUNiTixlQUFXO0VBQ1o7QUFFQTd5QixTQUFPb3pCLG1CQUFtQixNQUFNO0FBQy9CLFdBQU9WLFNBQVM7RUFDakI7QUFDQTF5QixTQUFPcXpCLG1CQUFvQmx5QixXQUFVO0FBQ3BDLFdBQU9xeEIsU0FBU3J4QixLQUFLO0VBQ3RCO0FBQ0FuQixTQUFPc3pCLG9CQUFvQixNQUFNO0FBQ2hDekUsY0FBVTtFQUNYO0FBQ0Fua0IsS0FBRzZvQixlQUFnQjFZLGNBQWE7QUFFL0JoYixPQUFHcXlCLEtBQUssY0FBYyxFQUFFdHFCLElBQUlpVCxRQUFRO0VBQ3JDO0FBR0EsTUFBSXpULEtBQUswckIsK0JBQStCLFVBQVU7QUFFakRqekIsT0FBR3F5QixLQUFLLFVBQVUsRUFBRXRxQixJQUFJLE1BQU07QUFHN0IsVUFBSTFILFNBQVNDLGNBQWMsdUJBQXVCLEdBQUc7QUFDcEQ7TUFDRDtBQUNBeVIsZ0JBQVU7QUFDVkUsZ0JBQVUsQ0FBQTtBQUNWaWYsb0JBQWM7QUFDZHJtQixTQUFHeW9CLFVBQVU7QUFDYkQsVUFBSTtJQUNMLENBQUM7RUFDRjtBQUdBdHlCLElBQUVzeUIsR0FBRztBQUNOLEdBQUc7IiwKICAibmFtZXMiOiBbImNhdGNoZWNrSW5saW5lSWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiaG90Q2F0Q2hlY2siLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICJkbGdCdXR0b25zIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkMiIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAib2ZmIiwgInBhcmFtcyIsICJhY3Rpb24iLCAidGl0bGUiLCAic3VtbWFyeSIsICJhcHBlbmR0ZXh0IiwgImRhdGEiLCAiZWRpdERvbmUiLCAiZWRpdFN0YXQiLCAiZXJyb3IiLCAibm90aWZ5IiwgImNvZGUiLCAiaW5mbyIsICJ0YWciLCAidHlwZSIsICJmYWRlT3V0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAiZmFkZUluIiwgImFwcGVuZFRvIiwgImRpc3BsYXkiLCAidXNlciIsICJpc0Fub24iLCAiaGlkZSIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgIndpZHRoIiwgImJ1dHRvbnMiLCAiY2xvc2UiLCAiJGJvZHkiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIm9wZW4iLCAiJGJ1dHRvbnMiLCAicGFyZW50IiwgImVxIiwgImJ1dHRvbiIsICJpY29ucyIsICJwcmltYXJ5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImxvYWRIb3RDYXRDaGVjayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgImhvdENhdE1lc3NhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgImhvdENhdCIsICJjb25mIiwgInZhbHVlcyIsICJIb3RDYXQiLCAibm9kZU5hbWUiLCAid2dBY3Rpb24iLCAibGlua3MiLCAiY2hhbmdlIiwgInJlbW92ZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgImNyZWF0b3IiLCAidGltZWR0ZXh0IiwgImluc3RpdHV0aW9uIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiZXhpc3RzTm8iLCAidGVtcGxhdGVfY2F0ZWdvcmllcyIsICJjYXBpdGFsaXplUGFnZU5hbWVzIiwgInVwbG9hZF9kaXNhYmxlZCIsICJibGFja2xpc3QiLCAiYmdfY2hhbmdlZCIsICJub19hdXRvY29tbWl0IiwgImRlbF9uZWVkc19kaWZmIiwgInN1Z2dlc3RfZGVsYXkiLCAiZWRpdGJveF93aWR0aCIsICJzdWdnZXN0aW9ucyIsICJmaXhlZF9zZWFyY2giLCAidXNlX3VwX2Rvd24iLCAibGlzdFNpemUiLCAic2luZ2xlX21pbm9yIiwgImRvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJzaG9ydGN1dHMiLCAiYWRkU2hvcnRjdXRzIiwgIm1hcCIsICJfYSIsICJrIiwgIk9iamVjdCIsICJoYXNPd24iLCAidiIsICJ0cmltIiwgImxlbmd0aCIsICJIQyIsICJ1YSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiaXNfd2Via2l0IiwgImNhdF9wcmVmaXgiLCAibm9TdWdnZXN0aW9ucyIsICJ3aWtpVGV4dEJsYW5rIiwgIndpa2lUZXh0QmxhbmtSRSIsICJSZWdFeHAiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJmb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJuYW1lc3BhY2VJZHMiLCAiYXV0b0xvY2FsaXplIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJjcmVhdGVSZWdleHBTdHIiLCAibmFtZSIsICJyZWdleF9uYW1lIiwgImkiLCAiaW5pdGlhbCIsICJjaGFyQXQiLCAibGwiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiY2Fub25pY2FsIiwgIlN0cmluZyIsICJyZWdleHAiLCAiY2F0X25hbWUiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAibWFrZSIsICJhcmciLCAibGl0ZXJhbCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50IiwgInBhcmFtIiwgInVyaSIsICJsb2NhdGlvbiIsICJyZSIsICJtIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInNjcmlwdCIsICJ3Z1NjcmlwdCIsICJpbmRleE9mIiwgIndnU2VydmVyIiwgInNsaWNlIiwgInByb3RvY29sIiwgInByZWZpeCIsICJ3Z0FydGljbGVQYXRoIiwgImNsYXNzTmFtZSIsICJjYXBpdGFsaXplIiwgInN0ciIsICJ3aWtpUGFnZVBhdGgiLCAicGFnZU5hbWUiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVzY2FwZVJFIiwgInN1YnN0aXR1dGVGYWN0b3J5IiwgIm9wdGlvbnMiLCAibGVhZCIsICJpbmRpY2F0b3IiLCAibGJyYWNlIiwgInJicmFjZSIsICJtYXRjaCIsICJpZHgiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImZpbmRDYXRzUkUiLCAicmVwbGFjZUJ5QmxhbmtzIiwgImZpbmRfY2F0ZWdvcnkiLCAid2lraXRleHQiLCAiY2F0ZWdvcnkiLCAib25jZSIsICJjYXRfcmVnZXgiLCAibm93aWtpUmVnZXgiLCAiY29waWVkdGV4dCIsICJjdXJyX21hdGNoIiwgImludGVybGFuZ3VhZ2VSRSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgImluZGV4IiwgImxhc3RJbmRleCIsICJvbkNhdCIsICJuYW1lU3BhY2UiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgInR4dCIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAicXVlcnkiLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAibGFzdHJldmlkIiwgInN0YXJ0dGltZXN0YW1wIiwgIndhdGNoZWQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJsYW5nbGlua3MiLCAibGFuZyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInBhcmVudE5vZGUiLCAicmVwbGFjZUNoaWxkIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAiYWxpZ24iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZXZhbHVhdGUiLCAib3BlcmEiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiYm94IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInQiLCAibCIsICJvZmZzZXRMZWZ0IiwgIm9mZnNldFBhcmVudCIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxlY3Rpb25FbmQiLCAibmV3X3NlbGVjdGlvbiIsICJtb3ZlIiwgIm1vdmVFbmQiLCAic2VsZWN0IiwgImdldFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAicm5nIiwgImR1cGxpY2F0ZSIsICJ0ZXh0Um5nIiwgInNldEVuZFBvaW50IiwgImN1cnIiLCAidGd0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiY0FyciIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpdGVtIiwgImluZCIsICJmaWx0ZXIiLCAiYyIsICJzdW0iLCAic3VtQSIsICIkY3QiLCAicmVtb3ZlQ2hhbmdlVGFnIiwgIk51bWJlciIsICJwYXJzZUludCIsICJpc05hTiIsICJtaW4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImN1cnJlbnRTdHlsZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfY2xlYW5lZFRleHQiLCAicmVnZXgiLCAib25zdWJtaXQiLCAiY2xlYW5lZFRleHQiLCAiaXNPblBhZ2UiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2F0VGl0bGUiLCAiZ2V0QXR0cmlidXRlIiwgImluaXRpYWxpemVkIiwgInNldHVwVGltZW91dCIsICJmaW5kQnlDbGFzcyIsICJzY29wZSIsICJzZXR1cCIsICJhZGRpdGlvbmFsV29yayIsICJjbGVhclRpbWVvdXQiLCAiaGlkZGVuQ2F0cyIsICJmb290ZXIiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVkaXRvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb3B5Q2F0cyIsICJBcnJheSIsICJhdCIsICJsYXN0U3BhbiIsICJlbmFibGVNdWx0aSIsICJpbm5lckhUTUwiLCAiY3Vyc29yIiwgImhvb2siLCAiZmlyZSIsICJjcmVhdGVDb21taXRGb3JtIiwgImZvcm1Db250YWluZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImdldFBhZ2UiLCAic2V0U3RhdGUiLCAibmV3U3BhbnMiLCAiZ2V0U3RhdGUiLCAiX2k5IiwgIl9lZGl0b3JzOCIsICJyZWFsbHlfcnVuIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIlVwbG9hZEZvcm0iLCAicHJldmlvdXNfaG90Y2F0X3N0YXRlIiwgIndnSXNBcnRpY2xlIiwgInJ1biIsICJzdGFydGVkIiwgImhvdGNhdF9nZXRfc3RhdGUiLCAiaG90Y2F0X3NldF9zdGF0ZSIsICJob3RjYXRfY2xvc2VfZm9ybSIsICJydW5XaGVuUmVhZHkiXQp9Cg==
