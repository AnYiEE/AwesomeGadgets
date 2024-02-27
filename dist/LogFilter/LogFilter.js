/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-rightsfilter.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/LogFilter}
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

// dist/LogFilter/LogFilter.js
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
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName") || "";
//! src/LogFilter/modules/messages.ts
var MESSAGES = {
  "filter-portlet-text": "过滤",
  "filter-portlet-description": "打开交互式日志正则过滤器",
  "filter-gadget-page": "MediaWiki:Gadget-LogFilter.js",
  "filter-rights-list-instructions": "正则表达式过滤以空格分隔的权限列表。",
  "filter-other-list-instructions": "正则表达式过滤本列表的纯文本样式。",
  "filter-legend": "过滤列表",
  "filter-option-added": "添加权限",
  "filter-option-removed": "删除权限",
  "filter-option-added-or-removed": "添加或删除权限",
  "filter-option-added-removed-static": "已添加/已移除/保持不变",
  "filter-regex-label": "正则表达式：",
  "filter-invert-label": "反选",
  "filter-case-label": "大小写敏感",
  "filter-filter-button": "过滤",
  "filter-highlight-button": "高亮"
};
//! src/LogFilter/modules/core.ts
var LogFilter = class _LogFilter {
  rightsLogOnly = location.href.includes("type=rights") || location.href.includes("Log/rights");
  lastClicked = false;
  $body;
  constructor($body) {
    this.$body = $body;
    mw.messages.set(MESSAGES);
  }
  addPortletLink() {
    const portletLink = mw.util.addPortletLink(this.$body.find("#p-cactions").length ? "p-cactions" : "p-tb", "#", _LogFilter.msg("portlet-text"), "ca-rxfilter", _LogFilter.msg("portlet-description"));
    if (portletLink) {
      const $portletLink = $(portletLink);
      $portletLink.find("a").on("click", (event) => {
        event.preventDefault();
        this.buildForm();
      });
    }
    if (URL_LIFILTER || URL_LIFILTER_EXPR) {
      this.buildForm();
    }
  }
  buildForm() {
    const $pageTop = this.$body.find("#contentSub,#topbar");
    if (!$pageTop.length) {
      return;
    }
    let fieldsetHtml = "";
    let oldInput = "";
    const instructions = this.rightsLogOnly ? _LogFilter.msg("rights-list-instructions") : _LogFilter.msg("other-list-instructions");
    this.$body.find("#ca-rxfilter").hide();
    const casing = URL_LIFILTER_CASE === "1";
    const hilight = URL_LIFILTER_HILIGHT === "1";
    const inverted = URL_LIFILTER_INV === "1";
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").text(instructions);
    const $legend = $("<legend>").text(_LogFilter.msg("legend"));
    $fieldSet.append($legend);
    if (this.rightsLogOnly) {
      fieldsetHtml += '<select id="rfSelect">';
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-removed")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added-or-removed")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added-removed-static")), "</option>");
      fieldsetHtml += "</select>";
    }
    fieldsetHtml += '<label for="rfRegex">'.concat(mw.html.escape(_LogFilter.msg("regex-label")), '</label><input id="rfRegex">');
    fieldsetHtml += '<input id="rfInvert" type="checkbox"><label for="rfInvert">'.concat(mw.html.escape(_LogFilter.msg("invert-label")), "</label>");
    fieldsetHtml += '<input id="rfCase" type="checkbox"><label for="rfCase">'.concat(mw.html.escape(_LogFilter.msg("case-label")), "</label>");
    fieldsetHtml += '<button type="button" value="0">'.concat(mw.html.escape(_LogFilter.msg("filter-button")), "</button>");
    fieldsetHtml += '<button type="button" value="1">'.concat(mw.html.escape(_LogFilter.msg("highlight-button")), "</button>");
    $fieldSet.append(fieldsetHtml);
    $pageTop.after($fieldSet);
    this.$body.find("#rfRegex").val(URL_LIFILTER_EXPR !== null && URL_LIFILTER_EXPR !== void 0 ? URL_LIFILTER_EXPR : "");
    this.$body.find("#rfCase").prop("checked", !casing);
    this.$body.find("#rfInvert").prop("checked", inverted);
    this.$body.find("#rfRegex").trigger("focus");
    this.$body.find("#rightsFilter").find("input").on("keyup change", (event) => {
      const $element = $(event.currentTarget);
      if ($element.attr("id") !== "rfRegex") {
        this.filterLi();
        return;
      }
      const curInput = $element.val();
      if (oldInput !== curInput) {
        oldInput = curInput;
        this.filterLi();
      }
    });
    $fieldSet.find("button").on("click", (event) => {
      const $element = $(event.currentTarget);
      this.lastClicked = !!$element.val();
      this.filterLi();
    });
    if (URL_LIFILTER_EXPR) {
      this.filterLi(hilight);
    }
  }
  filterLi(hilight) {
    var _this$$body$find$val$, _this$$body$find$val;
    const $listItems = this.$body.find("#bodyContent").find("li");
    if (!$listItems.length) {
      return;
    }
    hilight = !!(hilight || this.lastClicked.toString() === "1");
    let type;
    if (this.rightsLogOnly) {
      type = this.$body.find("#rfSelect").attr("selectedIndex");
    }
    const invert = this.$body.find("#rfInvert").prop("checked");
    const search = (_this$$body$find$val$ = (_this$$body$find$val = this.$body.find("#rfRegex").val()) === null || _this$$body$find$val === void 0 ? void 0 : _this$$body$find$val.toString()) !== null && _this$$body$find$val$ !== void 0 ? _this$$body$find$val$ : "";
    const flags = this.$body.find("#rfCase").prop("checked") ? "ig" : "g";
    let regexRf;
    try {
      regexRf = new RegExp("".concat(search), "".concat(flags));
    } catch (error) {
      console.log(error);
    }
    const REGEX_RIGHT = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;
    var _iterator = _createForOfIteratorHelper($listItems), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _look, _look2;
        const element = _step.value;
        const $element = $(element);
        let look = "";
        if (this.rightsLogOnly) {
          const oldr = $element.text().replace(REGEX_RIGHT, "$1");
          const newr = $element.text().replace(REGEX_RIGHT, "$2");
          const oldrl = oldr.split(", ");
          const newrl = newr.split(", ");
          for (let i = 0; i < oldrl.length; i++) {
            for (let j = 0; j < newrl.length; j++) {
              if (oldrl[i] === newrl[j]) {
                oldrl[i] = "";
                newrl[j] = "";
              }
            }
          }
          const remr = oldrl.join(",");
          const addr = newrl.join(",");
          switch (type) {
            case "0":
              look = addr;
              break;
            case "1":
              look = remr;
              break;
            case "2":
              look = "".concat(remr, " ").concat(addr);
              break;
            case "3":
              look = "".concat(oldr, " ").concat(newr);
              break;
          }
        } else {
          look = $element.text();
        }
        $element.css("background-color", "");
        $element.show();
        if (regexRf && (((_look = look) === null || _look === void 0 ? void 0 : _look.search(regexRf)) === -1 && invert || ((_look2 = look) === null || _look2 === void 0 ? void 0 : _look2.search(regexRf)) !== -1 && !invert)) {
          if (hilight) {
            $element.css("background-color", "#ffff99");
          }
        } else if (!hilight) {
          $element.hide();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  static msg(key) {
    key = "filter-".concat(key);
    return mw.message(key).plain();
  }
};
//! src/LogFilter/LogFilter.ts
var import_ext_gadget = require("ext.gadget.Util");
(function logFilter() {
  if (WG_ACTION !== "history" && !URL_LIFILTER && !REGEX_TARGET_PAGE.test(WG_CANONICAL_SPECIAL_PAGE_NAME)) {
    return;
  }
  if (mw.config.get("wgLogFilterInstalled")) {
    return;
  }
  mw.config.set("wgLogFilterInstalled", true);
  void (0, import_ext_gadget.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSB8fCAnJztcblxuZXhwb3J0IHtcblx0UkVHRVhfVEFSR0VUX1BBR0UsXG5cdFVSTF9MSUZJTFRFUixcblx0VVJMX0xJRklMVEVSX0NBU0UsXG5cdFVSTF9MSUZJTFRFUl9FWFBSLFxuXHRVUkxfTElGSUxURVJfSElMSUdIVCxcblx0VVJMX0xJRklMVEVSX0lOVixcblx0V0dfQUNUSU9OLFxuXHRXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUsXG59O1xuIiwgImNvbnN0IE1FU1NBR0VTID0ge1xuXHQnZmlsdGVyLXBvcnRsZXQtdGV4dCc6ICfov4fmu6QnLFxuXHQnZmlsdGVyLXBvcnRsZXQtZGVzY3JpcHRpb24nOiAn5omT5byA5Lqk5LqS5byP5pel5b+X5q2j5YiZ6L+H5ruk5ZmoJyxcblx0J2ZpbHRlci1nYWRnZXQtcGFnZSc6ICdNZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcycsXG5cdCdmaWx0ZXItcmlnaHRzLWxpc3QtaW5zdHJ1Y3Rpb25zJzogJ+ato+WImeihqOi+vuW8j+i/h+a7pOS7peepuuagvOWIhumalOeahOadg+mZkOWIl+ihqOOAgicsXG5cdCdmaWx0ZXItb3RoZXItbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5pys5YiX6KGo55qE57qv5paH5pys5qC35byP44CCJyxcblx0J2ZpbHRlci1sZWdlbmQnOiAn6L+H5ruk5YiX6KGoJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQnOiAn5re75Yqg5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tcmVtb3ZlZCc6ICfliKDpmaTmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZC1vci1yZW1vdmVkJzogJ+a3u+WKoOaIluWIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJzogJ+W3sua3u+WKoC/lt7Lnp7vpmaQv5L+d5oyB5LiN5Y+YJyxcblx0J2ZpbHRlci1yZWdleC1sYWJlbCc6ICfmraPliJnooajovr7lvI/vvJonLFxuXHQnZmlsdGVyLWludmVydC1sYWJlbCc6ICflj43pgIknLFxuXHQnZmlsdGVyLWNhc2UtbGFiZWwnOiAn5aSn5bCP5YaZ5pWP5oSfJyxcblx0J2ZpbHRlci1maWx0ZXItYnV0dG9uJzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItaGlnaGxpZ2h0LWJ1dHRvbic6ICfpq5jkuq4nLFxufTtcblxuZXhwb3J0IHtNRVNTQUdFU307XG4iLCAiaW1wb3J0IHtVUkxfTElGSUxURVIsIFVSTF9MSUZJTFRFUl9DQVNFLCBVUkxfTElGSUxURVJfRVhQUiwgVVJMX0xJRklMVEVSX0hJTElHSFQsIFVSTF9MSUZJTFRFUl9JTlZ9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtNRVNTQUdFU30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNsYXNzIExvZ0ZpbHRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcmlnaHRzTG9nT25seSA9IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3R5cGU9cmlnaHRzJykgfHwgbG9jYXRpb24uaHJlZi5pbmNsdWRlcygnTG9nL3JpZ2h0cycpO1xuXHRwcml2YXRlIGxhc3RDbGlja2VkID0gZmFsc2U7XG5cdHByaXZhdGUgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pIHtcblx0XHR0aGlzLiRib2R5ID0gJGJvZHk7XG5cdFx0Ly8gRGVmaW5lIGludGVyZmFjZSBtZXNzYWdlc1xuXHRcdG13Lm1lc3NhZ2VzLnNldChNRVNTQUdFUyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkUG9ydGxldExpbmsoKTogdm9pZCB7XG5cdFx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInLFxuXHRcdFx0JyMnLFxuXHRcdFx0TG9nRmlsdGVyLm1zZygncG9ydGxldC10ZXh0JyksXG5cdFx0XHQnY2EtcnhmaWx0ZXInLFxuXHRcdFx0TG9nRmlsdGVyLm1zZygncG9ydGxldC1kZXNjcmlwdGlvbicpXG5cdFx0KTtcblx0XHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdFx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspO1xuXHRcdFx0JHBvcnRsZXRMaW5rLmZpbmQoJ2EnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuYnVpbGRGb3JtKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gRGlzcGxheSBmb3JtIGRpcmVjbHR5P1xuXHRcdGlmIChVUkxfTElGSUxURVIgfHwgVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuYnVpbGRGb3JtKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBidWlsZEZvcm0oKTogdm9pZCB7XG5cdFx0Y29uc3QgJHBhZ2VUb3A6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2NvbnRlbnRTdWIsI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGZpZWxkc2V0SHRtbDogc3RyaW5nID0gJyc7XG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+JykuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJykudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSAnPHNlbGVjdCBpZD1cInJmU2VsZWN0XCI+Jztcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5gO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9IGA8b3B0aW9uPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLXJlbW92ZWQnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZC1vci1yZW1vdmVkJykpfTwvb3B0aW9uPmA7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gYDxvcHRpb24+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSAnPC9zZWxlY3Q+Jztcblx0XHR9XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8bGFiZWwgZm9yPVwicmZSZWdleFwiPiR7bXcuaHRtbC5lc2NhcGUoXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpXG5cdFx0KX08L2xhYmVsPjxpbnB1dCBpZD1cInJmUmVnZXhcIj5gO1xuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGlucHV0IGlkPVwicmZJbnZlcnRcIiB0eXBlPVwiY2hlY2tib3hcIj48bGFiZWwgZm9yPVwicmZJbnZlcnRcIj4ke213Lmh0bWwuZXNjYXBlKFxuXHRcdFx0TG9nRmlsdGVyLm1zZygnaW52ZXJ0LWxhYmVsJylcblx0XHQpfTwvbGFiZWw+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxpbnB1dCBpZD1cInJmQ2FzZVwiIHR5cGU9XCJjaGVja2JveFwiPjxsYWJlbCBmb3I9XCJyZkNhc2VcIj4ke213Lmh0bWwuZXNjYXBlKFxuXHRcdFx0TG9nRmlsdGVyLm1zZygnY2FzZS1sYWJlbCcpXG5cdFx0KX08L2xhYmVsPmA7XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIjBcIj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ZpbHRlci1idXR0b24nKSl9PC9idXR0b24+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiMVwiPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnaGlnaGxpZ2h0LWJ1dHRvbicpKX08L2J1dHRvbj5gO1xuXHRcdC8vIEluamVjdCB0aGUgaHRtbCBpbnRvIHRoZSBmaWVsZHNldFxuXHRcdCRmaWVsZFNldC5hcHBlbmQoZmllbGRzZXRIdG1sKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZlJlZ2V4JykudmFsKFVSTF9MSUZJTFRFUl9FWFBSID8/ICcnKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZkNhc2UnKS5wcm9wKCdjaGVja2VkJywgIWNhc2luZyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjcmZJbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI3JmUmVnZXgnKS50cmlnZ2VyKCdmb2N1cycpO1xuXG5cdFx0Ly8gQmluZCBjbGljayBhbmQgY2hhbmdlIGxpc3RlbmVyc1xuXHRcdHRoaXMuJGJvZHlcblx0XHRcdC5maW5kKCcjcmlnaHRzRmlsdGVyJylcblx0XHRcdC5maW5kKCdpbnB1dCcpXG5cdFx0XHQub24oJ2tleXVwIGNoYW5nZScsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0aWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT09ICdyZlJlZ2V4Jykge1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY3VySW5wdXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpIGFzIHN0cmluZztcblx0XHRcdFx0aWYgKG9sZElucHV0ICE9PSBjdXJJbnB1dCkge1xuXHRcdFx0XHRcdG9sZElucHV0ID0gY3VySW5wdXQ7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHQkZmllbGRTZXQuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdHRoaXMubGFzdENsaWNrZWQgPSAhISRlbGVtZW50LnZhbCgpO1xuXHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmZpbHRlckxpKGhpbGlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTGkoaGlsaWdodD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBHcmFiIHRoZSBsaXN0IG9mIGFsbCA8bGk+IGluIHRoZSBjb250ZW50XG5cdFx0Y29uc3QgJGxpc3RJdGVtczogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjYm9keUNvbnRlbnQnKS5maW5kKCdsaScpO1xuXHRcdGlmICghJGxpc3RJdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRoaWxpZ2h0ID0gISEoaGlsaWdodCB8fCB0aGlzLmxhc3RDbGlja2VkLnRvU3RyaW5nKCkgPT09ICcxJyk7XG5cblx0XHQvLyBHcmFiIG9wdGlvbnMgZnJvbSBmb3JtXG5cdFx0bGV0IHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHR0eXBlID0gdGhpcy4kYm9keS5maW5kKCcjcmZTZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjcmZJbnZlcnQnKS5wcm9wKCdjaGVja2VkJykgYXMgYm9vbGVhbjtcblx0XHRjb25zdCBzZWFyY2g6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI3JmUmVnZXgnKS52YWwoKT8udG9TdHJpbmcoKSA/PyAnJztcblx0XHRjb25zdCBmbGFnczogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjcmZDYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChgJHtzZWFyY2h9YCwgYCR7ZmxhZ3N9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiLyoqXG4gKiBMb2cgZmlsdGVyIHNjcmlwdFxuICpcbiAqIENyZWF0ZWQgYnkgU3BsYXJrYVxuICogQW1lbmRlZCBieSBNaWtlLmxpZmVndWFyZCAmIEx1cG9cbiAqIFBhcnRpYWxseSByZXdyaXR0ZW4gYnkgRGllQnVjaGVcbiAqXG4gKiA8bGk+IGVsZW1lbnQgRmlsdGVyIFNjcmlwdCwgdmVyc2lvbiBbMC4yXVxuICogU2hvdWxkIGN1cnJlbnRseSB3b3JrIG9uIGFsbCBrbm93biBza2lucyAod2l0aCBhICNjb250ZW50U3ViIG9yICN0b3BiYXIpXG4gKlxuICogbXcudXRpbC5nZXRVcmwoIG13LmNvbmZpZy5nZXQoICd3Z1BhZ2VOYW1lJyApICkgKyAnPycgK1xuICogJ3dpdGhKUz1NZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcyZsaWZpbHRlcj0xJmxpZmlsdGVyZXhwcj1URVNUJmxpZmlsdGVyY2FzZSZsaWZpbHRlcmhpbGlnaHQmbGlmaWx0ZXJpbnYnXG4gKi9cbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0UsIFVSTF9MSUZJTFRFUiwgV0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHQvLyBXaGVuIHRvIGVuYWJsZSBhbGwgdGhpc1xuXHRpZiAoV0dfQUNUSU9OICE9PSAnaGlzdG9yeScgJiYgIVVSTF9MSUZJTFRFUiAmJiAhUkVHRVhfVEFSR0VUX1BBR0UudGVzdChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dMb2dGaWx0ZXJJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dMb2dGaWx0ZXJJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvLyBMb2FkXG5cdFx0bmV3IExvZ0ZpbHRlcigkYm9keSkuYWRkUG9ydGxldExpbmsoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFDTDtBQUVELElBQU1DLGVBQThCQyxHQUFHQyxLQUFLQyxjQUFjLFVBQVU7QUFDcEUsSUFBTUMsb0JBQW1DSCxHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUUsb0JBQW1DSixHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUcsdUJBQXNDTCxHQUFHQyxLQUFLQyxjQUFjLGlCQUFpQjtBQUNuRixJQUFNSSxtQkFBa0NOLEdBQUdDLEtBQUtDLGNBQWMsYUFBYTtBQUUzRSxJQUFNSyxZQUF3Q1AsR0FBR1EsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLGlDQUF5Q1YsR0FBR1EsT0FBT0MsSUFBSSw0QkFBNEIsS0FBSzs7QUNWOUYsSUFBTUUsV0FBVztFQUNoQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM1Qjs7QUNiQSxJQUFNQyxZQUFOLE1BQU1DLFdBQVU7RUFDRUMsZ0JBQWdCQyxTQUFTQyxLQUFLQyxTQUFTLGFBQWEsS0FBS0YsU0FBU0MsS0FBS0MsU0FBUyxZQUFZO0VBQ3JHQyxjQUFjO0VBQ2RDO0VBRURDLFlBQVlELE9BQWdDO0FBQ2xELFNBQUtBLFFBQVFBO0FBRWJuQixPQUFHcUIsU0FBU0MsSUFBSVgsUUFBUTtFQUN6QjtFQUVPWSxpQkFBdUI7QUFFN0IsVUFBTUMsY0FBb0N4QixHQUFHQyxLQUFLc0IsZUFDakQsS0FBS0osTUFBTU0sS0FBSyxhQUFhLEVBQUVDLFNBQVMsZUFBZSxRQUN2RCxLQUNBYixXQUFVYyxJQUFJLGNBQWMsR0FDNUIsZUFDQWQsV0FBVWMsSUFBSSxxQkFBcUIsQ0FDcEM7QUFFQSxRQUFJSCxhQUFhO0FBQ2hCLFlBQU1JLGVBQXVCQyxFQUFFTCxXQUFXO0FBQzFDSSxtQkFBYUgsS0FBSyxHQUFHLEVBQUVLLEdBQUcsU0FBVUMsV0FBbUM7QUFDdEVBLGNBQU1DLGVBQWU7QUFDckIsYUFBS0MsVUFBVTtNQUNoQixDQUFDO0lBQ0Y7QUFFQSxRQUFJbEMsZ0JBQWdCSyxtQkFBbUI7QUFDdEMsV0FBSzZCLFVBQVU7SUFDaEI7RUFDRDtFQUVRQSxZQUFrQjtBQUN6QixVQUFNQyxXQUFtQixLQUFLZixNQUFNTSxLQUFLLHFCQUFxQjtBQUM5RCxRQUFJLENBQUNTLFNBQVNSLFFBQVE7QUFDckI7SUFDRDtBQUVBLFFBQUlTLGVBQXVCO0FBQzNCLFFBQUlDLFdBQW1CO0FBQ3ZCLFVBQU1DLGVBQXVCLEtBQUt2QixnQkFDL0JELFdBQVVjLElBQUksMEJBQTBCLElBQ3hDZCxXQUFVYyxJQUFJLHlCQUF5QjtBQUUxQyxTQUFLUixNQUFNTSxLQUFLLGNBQWMsRUFBRWEsS0FBSztBQUdyQyxVQUFNQyxTQUFrQnBDLHNCQUFzQjtBQUM5QyxVQUFNcUMsVUFBbUJuQyx5QkFBeUI7QUFDbEQsVUFBTW9DLFdBQW9CbkMscUJBQXFCO0FBRy9DLFVBQU1vQyxZQUFvQmIsRUFBRSxZQUFZLEVBQUVjLEtBQUssTUFBTSxjQUFjLEVBQUVDLEtBQUtQLFlBQVk7QUFDdEYsVUFBTVEsVUFBa0JoQixFQUFFLFVBQVUsRUFBRWUsS0FBSy9CLFdBQVVjLElBQUksUUFBUSxDQUFDO0FBQ2xFZSxjQUFVSSxPQUFPRCxPQUFPO0FBRXhCLFFBQUksS0FBSy9CLGVBQWU7QUFDdkJxQixzQkFBZ0I7QUFDaEJBLHNCQUFBLFdBQUFZLE9BQTJCL0MsR0FBR2dELEtBQUtDLE9BQU9wQyxXQUFVYyxJQUFJLGNBQWMsQ0FBQyxHQUFDLFdBQUE7QUFDeEVRLHNCQUFBLFdBQUFZLE9BQTJCL0MsR0FBR2dELEtBQUtDLE9BQU9wQyxXQUFVYyxJQUFJLGdCQUFnQixDQUFDLEdBQUMsV0FBQTtBQUMxRVEsc0JBQUEsV0FBQVksT0FBMkIvQyxHQUFHZ0QsS0FBS0MsT0FBT3BDLFdBQVVjLElBQUkseUJBQXlCLENBQUMsR0FBQyxXQUFBO0FBQ25GUSxzQkFBQSxXQUFBWSxPQUEyQi9DLEdBQUdnRCxLQUFLQyxPQUFPcEMsV0FBVWMsSUFBSSw2QkFBNkIsQ0FBQyxHQUFDLFdBQUE7QUFDdkZRLHNCQUFnQjtJQUNqQjtBQUNBQSxvQkFBQSx3QkFBQVksT0FBd0MvQyxHQUFHZ0QsS0FBS0MsT0FDL0NwQyxXQUFVYyxJQUFJLGFBQWEsQ0FDNUIsR0FBQyw4QkFBQTtBQUNEUSxvQkFBQSw4REFBQVksT0FBOEUvQyxHQUFHZ0QsS0FBS0MsT0FDckZwQyxXQUFVYyxJQUFJLGNBQWMsQ0FDN0IsR0FBQyxVQUFBO0FBQ0RRLG9CQUFBLDBEQUFBWSxPQUEwRS9DLEdBQUdnRCxLQUFLQyxPQUNqRnBDLFdBQVVjLElBQUksWUFBWSxDQUMzQixHQUFDLFVBQUE7QUFDRFEsb0JBQUEsbUNBQUFZLE9BQW1EL0MsR0FBR2dELEtBQUtDLE9BQU9wQyxXQUFVYyxJQUFJLGVBQWUsQ0FBQyxHQUFDLFdBQUE7QUFDakdRLG9CQUFBLG1DQUFBWSxPQUFtRC9DLEdBQUdnRCxLQUFLQyxPQUFPcEMsV0FBVWMsSUFBSSxrQkFBa0IsQ0FBQyxHQUFDLFdBQUE7QUFFcEdlLGNBQVVJLE9BQU9YLFlBQVk7QUFDN0JELGFBQVNnQixNQUFNUixTQUFTO0FBR3hCLFNBQUt2QixNQUFNTSxLQUFLLFVBQVUsRUFBRTBCLElBQUkvQyxzQkFBQSxRQUFBQSxzQkFBQSxTQUFBQSxvQkFBcUIsRUFBRTtBQUN2RCxTQUFLZSxNQUFNTSxLQUFLLFNBQVMsRUFBRTJCLEtBQUssV0FBVyxDQUFDYixNQUFNO0FBQ2xELFNBQUtwQixNQUFNTSxLQUFLLFdBQVcsRUFBRTJCLEtBQUssV0FBV1gsUUFBUTtBQUNyRCxTQUFLdEIsTUFBTU0sS0FBSyxVQUFVLEVBQUU0QixRQUFRLE9BQU87QUFHM0MsU0FBS2xDLE1BQ0hNLEtBQUssZUFBZSxFQUNwQkEsS0FBSyxPQUFPLEVBQ1pLLEdBQUcsZ0JBQWlCQyxXQUFnQjtBQUNwQyxZQUFNdUIsV0FBbUJ6QixFQUFFRSxNQUFNd0IsYUFBYTtBQUM5QyxVQUFJRCxTQUFTWCxLQUFLLElBQUksTUFBTSxXQUFXO0FBQ3RDLGFBQUthLFNBQVM7QUFDZDtNQUNEO0FBQ0EsWUFBTUMsV0FBbUJILFNBQVNILElBQUk7QUFDdEMsVUFBSWYsYUFBYXFCLFVBQVU7QUFDMUJyQixtQkFBV3FCO0FBQ1gsYUFBS0QsU0FBUztNQUNmO0lBQ0QsQ0FBQztBQUNGZCxjQUFVakIsS0FBSyxRQUFRLEVBQUVLLEdBQUcsU0FBVUMsV0FBZ0I7QUFDckQsWUFBTXVCLFdBQW1CekIsRUFBRUUsTUFBTXdCLGFBQWE7QUFDOUMsV0FBS3JDLGNBQWMsQ0FBQyxDQUFDb0MsU0FBU0gsSUFBSTtBQUNsQyxXQUFLSyxTQUFTO0lBQ2YsQ0FBQztBQUVELFFBQUlwRCxtQkFBbUI7QUFDdEIsV0FBS29ELFNBQVNoQixPQUFPO0lBQ3RCO0VBQ0Q7RUFFUWdCLFNBQVNoQixTQUF5QjtBQUFBLFFBQUFrQix1QkFBQUM7QUFFekMsVUFBTUMsYUFBcUIsS0FBS3pDLE1BQU1NLEtBQUssY0FBYyxFQUFFQSxLQUFLLElBQUk7QUFDcEUsUUFBSSxDQUFDbUMsV0FBV2xDLFFBQVE7QUFDdkI7SUFDRDtBQUVBYyxjQUFVLENBQUMsRUFBRUEsV0FBVyxLQUFLdEIsWUFBWTJDLFNBQVMsTUFBTTtBQUd4RCxRQUFJQztBQUNKLFFBQUksS0FBS2hELGVBQWU7QUFDdkJnRCxhQUFPLEtBQUszQyxNQUFNTSxLQUFLLFdBQVcsRUFBRWtCLEtBQUssZUFBZTtJQUN6RDtBQUVBLFVBQU1vQixTQUFTLEtBQUs1QyxNQUFNTSxLQUFLLFdBQVcsRUFBRTJCLEtBQUssU0FBUztBQUMxRCxVQUFNWSxVQUFBTix5QkFBQUMsdUJBQWlCLEtBQUt4QyxNQUFNTSxLQUFLLFVBQVUsRUFBRTBCLElBQUksT0FBQSxRQUFBUSx5QkFBQSxTQUFBLFNBQWhDQSxxQkFBbUNFLFNBQVMsT0FBQSxRQUFBSCwwQkFBQSxTQUFBQSx3QkFBSztBQUN4RSxVQUFNTyxRQUFnQixLQUFLOUMsTUFBTU0sS0FBSyxTQUFTLEVBQUUyQixLQUFLLFNBQVMsSUFBSSxPQUFPO0FBQzFFLFFBQUljO0FBQ0osUUFBSTtBQUNIQSxnQkFBVSxJQUFJQyxPQUFBLEdBQUFwQixPQUFVaUIsTUFBTSxHQUFBLEdBQUFqQixPQUFPa0IsS0FBSyxDQUFFO0lBQzdDLFNBQVNHLE9BQU87QUFDZkMsY0FBUUMsSUFBSUYsS0FBSztJQUNsQjtBQUdBLFVBQU1HLGNBQXNCO0FBQUEsUUFBQUMsWUFBQUMsMkJBR05iLFVBQUEsR0FBQWM7QUFBQSxRQUFBO0FBQXRCLFdBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWtDO0FBQUEsWUFBQUMsT0FBQUM7QUFBQSxjQUF2QkMsVUFBQU4sTUFBQU87QUFDVixjQUFNM0IsV0FBbUJ6QixFQUFFbUQsT0FBTztBQUNsQyxZQUFJRSxPQUFlO0FBRW5CLFlBQUksS0FBS3BFLGVBQWU7QUFFdkIsZ0JBQU1xRSxPQUFlN0IsU0FBU1YsS0FBSyxFQUFFd0MsUUFBUWIsYUFBYSxJQUFJO0FBQzlELGdCQUFNYyxPQUFlL0IsU0FBU1YsS0FBSyxFQUFFd0MsUUFBUWIsYUFBYSxJQUFJO0FBQzlELGdCQUFNZSxRQUFrQkgsS0FBS0ksTUFBTSxJQUFJO0FBQ3ZDLGdCQUFNQyxRQUFrQkgsS0FBS0UsTUFBTSxJQUFJO0FBQ3ZDLG1CQUFTRSxJQUFZLEdBQUdBLElBQUlILE1BQU01RCxRQUFRK0QsS0FBSztBQUM5QyxxQkFBU0MsSUFBWSxHQUFHQSxJQUFJRixNQUFNOUQsUUFBUWdFLEtBQUs7QUFDOUMsa0JBQUlKLE1BQU1HLENBQUMsTUFBTUQsTUFBTUUsQ0FBQyxHQUFHO0FBQzFCSixzQkFBTUcsQ0FBQyxJQUFJO0FBQ1hELHNCQUFNRSxDQUFDLElBQUk7Y0FDWjtZQUNEO1VBQ0Q7QUFDQSxnQkFBTUMsT0FBZUwsTUFBTU0sS0FBSyxHQUFHO0FBQ25DLGdCQUFNQyxPQUFlTCxNQUFNSSxLQUFLLEdBQUc7QUFDbkMsa0JBQVE5QixNQUFBO1lBQ1AsS0FBSztBQUNKb0IscUJBQU9XO0FBQ1A7WUFDRCxLQUFLO0FBQ0pYLHFCQUFPUztBQUNQO1lBQ0QsS0FBSztBQUNKVCxxQkFBQSxHQUFBbkMsT0FBVTRDLE1BQUksR0FBQSxFQUFBNUMsT0FBSThDLElBQUk7QUFDdEI7WUFDRCxLQUFLO0FBQ0pYLHFCQUFBLEdBQUFuQyxPQUFVb0MsTUFBSSxHQUFBLEVBQUFwQyxPQUFJc0MsSUFBSTtBQUN0QjtVQUNGO1FBQ0QsT0FBTztBQUVOSCxpQkFBTzVCLFNBQVNWLEtBQUs7UUFDdEI7QUFFQVUsaUJBQVN3QyxJQUFJLG9CQUFvQixFQUFFO0FBQ25DeEMsaUJBQVN5QyxLQUFLO0FBRWQsWUFBSTdCLGNBQWFZLFFBQUFJLFVBQUEsUUFBQUosVUFBQSxTQUFBLFNBQUFBLE1BQU1kLE9BQU9FLE9BQU8sT0FBTSxNQUFNSCxZQUFZZ0IsU0FBQUcsVUFBQSxRQUFBSCxXQUFBLFNBQUEsU0FBQUEsT0FBTWYsT0FBT0UsT0FBTyxPQUFNLE1BQU0sQ0FBQ0gsU0FBVTtBQUN2RyxjQUFJdkIsU0FBUztBQUNaYyxxQkFBU3dDLElBQUksb0JBQW9CLFNBQVM7VUFDM0M7UUFDRCxXQUFXLENBQUN0RCxTQUFTO0FBQ3BCYyxtQkFBU2hCLEtBQUs7UUFDZjtNQUNEO0lBQUEsU0FBQTBELEtBQUE7QUFBQXhCLGdCQUFBeUIsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQXhCLGdCQUFBMEIsRUFBQTtJQUFBO0VBQ0Q7RUFFQSxPQUFldkUsSUFBSXdFLEtBQXFCO0FBQ3ZDQSxVQUFBLFVBQUFwRCxPQUFnQm9ELEdBQUc7QUFJbkIsV0FBT25HLEdBQUdvRyxRQUFRRCxHQUFHLEVBQUVFLE1BQU07RUFDOUI7QUFDRDs7QUM5TEEsSUFBQUMsb0JBQXNCQyxRQUFBLGlCQUFBO0NBRXJCLFNBQVNDLFlBQWtCO0FBRTNCLE1BQUlqRyxjQUFjLGFBQWEsQ0FBQ1IsZ0JBQWdCLENBQUNELGtCQUFrQjJHLEtBQUsvRiw4QkFBOEIsR0FBRztBQUN4RztFQUNEO0FBR0EsTUFBSVYsR0FBR1EsT0FBT0MsSUFBSSxzQkFBc0IsR0FBRztBQUMxQztFQUNEO0FBRUFULEtBQUdRLE9BQU9jLElBQUksd0JBQXdCLElBQUk7QUFFMUMsUUFBQSxHQUFLZ0Ysa0JBQUFJLFNBQVEsRUFBRUMsS0FBTXhGLFdBQXlDO0FBRTdELFFBQUlQLFVBQVVPLEtBQUssRUFBRUksZUFBZTtFQUNyQyxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiUkVHRVhfVEFSR0VUX1BBR0UiLCAiVVJMX0xJRklMVEVSIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfTElGSUxURVJfQ0FTRSIsICJVUkxfTElGSUxURVJfRVhQUiIsICJVUkxfTElGSUxURVJfSElMSUdIVCIsICJVUkxfTElGSUxURVJfSU5WIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJNRVNTQUdFUyIsICJMb2dGaWx0ZXIiLCAiX0xvZ0ZpbHRlciIsICJyaWdodHNMb2dPbmx5IiwgImxvY2F0aW9uIiwgImhyZWYiLCAiaW5jbHVkZXMiLCAibGFzdENsaWNrZWQiLCAiJGJvZHkiLCAiY29uc3RydWN0b3IiLCAibWVzc2FnZXMiLCAic2V0IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm1zZyIsICIkcG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJidWlsZEZvcm0iLCAiJHBhZ2VUb3AiLCAiZmllbGRzZXRIdG1sIiwgIm9sZElucHV0IiwgImluc3RydWN0aW9ucyIsICJoaWRlIiwgImNhc2luZyIsICJoaWxpZ2h0IiwgImludmVydGVkIiwgIiRmaWVsZFNldCIsICJhdHRyIiwgInRleHQiLCAiJGxlZ2VuZCIsICJhcHBlbmQiLCAiY29uY2F0IiwgImh0bWwiLCAiZXNjYXBlIiwgImFmdGVyIiwgInZhbCIsICJwcm9wIiwgInRyaWdnZXIiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJmaWx0ZXJMaSIsICJjdXJJbnB1dCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwiLCAiJGxpc3RJdGVtcyIsICJ0b1N0cmluZyIsICJ0eXBlIiwgImludmVydCIsICJzZWFyY2giLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgIl9sb29rIiwgIl9sb29rMiIsICJlbGVtZW50IiwgInZhbHVlIiwgImxvb2siLCAib2xkciIsICJyZXBsYWNlIiwgIm5ld3IiLCAib2xkcmwiLCAic3BsaXQiLCAibmV3cmwiLCAiaSIsICJqIiwgInJlbXIiLCAiam9pbiIsICJhZGRyIiwgImNzcyIsICJzaG93IiwgImVyciIsICJlIiwgImYiLCAia2V5IiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJsb2dGaWx0ZXIiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
