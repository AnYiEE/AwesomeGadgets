/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-rightsfilter.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/LogFilter}
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

// dist/LogFilter/LogFilter.js
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSB8fCAnJztcblxuZXhwb3J0IHtcblx0UkVHRVhfVEFSR0VUX1BBR0UsXG5cdFVSTF9MSUZJTFRFUixcblx0VVJMX0xJRklMVEVSX0NBU0UsXG5cdFVSTF9MSUZJTFRFUl9FWFBSLFxuXHRVUkxfTElGSUxURVJfSElMSUdIVCxcblx0VVJMX0xJRklMVEVSX0lOVixcblx0V0dfQUNUSU9OLFxuXHRXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUsXG59O1xuIiwgImNvbnN0IE1FU1NBR0VTID0ge1xuXHQnZmlsdGVyLXBvcnRsZXQtdGV4dCc6ICfov4fmu6QnLFxuXHQnZmlsdGVyLXBvcnRsZXQtZGVzY3JpcHRpb24nOiAn5omT5byA5Lqk5LqS5byP5pel5b+X5q2j5YiZ6L+H5ruk5ZmoJyxcblx0J2ZpbHRlci1nYWRnZXQtcGFnZSc6ICdNZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcycsXG5cdCdmaWx0ZXItcmlnaHRzLWxpc3QtaW5zdHJ1Y3Rpb25zJzogJ+ato+WImeihqOi+vuW8j+i/h+a7pOS7peepuuagvOWIhumalOeahOadg+mZkOWIl+ihqOOAgicsXG5cdCdmaWx0ZXItb3RoZXItbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5pys5YiX6KGo55qE57qv5paH5pys5qC35byP44CCJyxcblx0J2ZpbHRlci1sZWdlbmQnOiAn6L+H5ruk5YiX6KGoJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQnOiAn5re75Yqg5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tcmVtb3ZlZCc6ICfliKDpmaTmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZC1vci1yZW1vdmVkJzogJ+a3u+WKoOaIluWIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJzogJ+W3sua3u+WKoC/lt7Lnp7vpmaQv5L+d5oyB5LiN5Y+YJyxcblx0J2ZpbHRlci1yZWdleC1sYWJlbCc6ICfmraPliJnooajovr7lvI/vvJonLFxuXHQnZmlsdGVyLWludmVydC1sYWJlbCc6ICflj43pgIknLFxuXHQnZmlsdGVyLWNhc2UtbGFiZWwnOiAn5aSn5bCP5YaZ5pWP5oSfJyxcblx0J2ZpbHRlci1maWx0ZXItYnV0dG9uJzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItaGlnaGxpZ2h0LWJ1dHRvbic6ICfpq5jkuq4nLFxufTtcblxuZXhwb3J0IHtNRVNTQUdFU307XG4iLCAiaW1wb3J0IHtVUkxfTElGSUxURVIsIFVSTF9MSUZJTFRFUl9DQVNFLCBVUkxfTElGSUxURVJfRVhQUiwgVVJMX0xJRklMVEVSX0hJTElHSFQsIFVSTF9MSUZJTFRFUl9JTlZ9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtNRVNTQUdFU30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNsYXNzIExvZ0ZpbHRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcmlnaHRzTG9nT25seSA9IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3R5cGU9cmlnaHRzJykgfHwgbG9jYXRpb24uaHJlZi5pbmNsdWRlcygnTG9nL3JpZ2h0cycpO1xuXHRwcml2YXRlIGxhc3RDbGlja2VkID0gZmFsc2U7XG5cdHByaXZhdGUgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pIHtcblx0XHR0aGlzLiRib2R5ID0gJGJvZHk7XG5cdFx0Ly8gRGVmaW5lIGludGVyZmFjZSBtZXNzYWdlc1xuXHRcdG13Lm1lc3NhZ2VzLnNldChNRVNTQUdFUyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkUG9ydGxldExpbmsoKTogdm9pZCB7XG5cdFx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInLFxuXHRcdFx0JyMnLFxuXHRcdFx0TG9nRmlsdGVyLm1zZygncG9ydGxldC10ZXh0JyksXG5cdFx0XHQnY2EtcnhmaWx0ZXInLFxuXHRcdFx0TG9nRmlsdGVyLm1zZygncG9ydGxldC1kZXNjcmlwdGlvbicpXG5cdFx0KTtcblx0XHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdFx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspO1xuXHRcdFx0JHBvcnRsZXRMaW5rLmZpbmQoJ2EnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuYnVpbGRGb3JtKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gRGlzcGxheSBmb3JtIGRpcmVjbHR5P1xuXHRcdGlmIChVUkxfTElGSUxURVIgfHwgVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuYnVpbGRGb3JtKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBidWlsZEZvcm0oKTogdm9pZCB7XG5cdFx0Y29uc3QgJHBhZ2VUb3A6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2NvbnRlbnRTdWIsI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGZpZWxkc2V0SHRtbDogc3RyaW5nID0gJyc7XG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+JykuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJykudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSAnPHNlbGVjdCBpZD1cInJmU2VsZWN0XCI+Jztcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5gO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9IGA8b3B0aW9uPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLXJlbW92ZWQnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZC1vci1yZW1vdmVkJykpfTwvb3B0aW9uPmA7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gYDxvcHRpb24+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSAnPC9zZWxlY3Q+Jztcblx0XHR9XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8bGFiZWwgZm9yPVwicmZSZWdleFwiPiR7bXcuaHRtbC5lc2NhcGUoXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpXG5cdFx0KX08L2xhYmVsPjxpbnB1dCBpZD1cInJmUmVnZXhcIj5gO1xuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGlucHV0IGlkPVwicmZJbnZlcnRcIiB0eXBlPVwiY2hlY2tib3hcIj48bGFiZWwgZm9yPVwicmZJbnZlcnRcIj4ke213Lmh0bWwuZXNjYXBlKFxuXHRcdFx0TG9nRmlsdGVyLm1zZygnaW52ZXJ0LWxhYmVsJylcblx0XHQpfTwvbGFiZWw+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxpbnB1dCBpZD1cInJmQ2FzZVwiIHR5cGU9XCJjaGVja2JveFwiPjxsYWJlbCBmb3I9XCJyZkNhc2VcIj4ke213Lmh0bWwuZXNjYXBlKFxuXHRcdFx0TG9nRmlsdGVyLm1zZygnY2FzZS1sYWJlbCcpXG5cdFx0KX08L2xhYmVsPmA7XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIjBcIj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ZpbHRlci1idXR0b24nKSl9PC9idXR0b24+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiMVwiPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnaGlnaGxpZ2h0LWJ1dHRvbicpKX08L2J1dHRvbj5gO1xuXHRcdC8vIEluamVjdCB0aGUgaHRtbCBpbnRvIHRoZSBmaWVsZHNldFxuXHRcdCRmaWVsZFNldC5hcHBlbmQoZmllbGRzZXRIdG1sKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZlJlZ2V4JykudmFsKFVSTF9MSUZJTFRFUl9FWFBSID8/ICcnKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZkNhc2UnKS5wcm9wKCdjaGVja2VkJywgIWNhc2luZyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjcmZJbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI3JmUmVnZXgnKS50cmlnZ2VyKCdmb2N1cycpO1xuXG5cdFx0Ly8gQmluZCBjbGljayBhbmQgY2hhbmdlIGxpc3RlbmVyc1xuXHRcdHRoaXMuJGJvZHlcblx0XHRcdC5maW5kKCcjcmlnaHRzRmlsdGVyJylcblx0XHRcdC5maW5kKCdpbnB1dCcpXG5cdFx0XHQub24oJ2tleXVwIGNoYW5nZScsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0aWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT09ICdyZlJlZ2V4Jykge1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY3VySW5wdXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpIGFzIHN0cmluZztcblx0XHRcdFx0aWYgKG9sZElucHV0ICE9PSBjdXJJbnB1dCkge1xuXHRcdFx0XHRcdG9sZElucHV0ID0gY3VySW5wdXQ7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHQkZmllbGRTZXQuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdHRoaXMubGFzdENsaWNrZWQgPSAhISRlbGVtZW50LnZhbCgpO1xuXHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmZpbHRlckxpKGhpbGlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTGkoaGlsaWdodD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBHcmFiIHRoZSBsaXN0IG9mIGFsbCA8bGk+IGluIHRoZSBjb250ZW50XG5cdFx0Y29uc3QgJGxpc3RJdGVtczogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjYm9keUNvbnRlbnQnKS5maW5kKCdsaScpO1xuXHRcdGlmICghJGxpc3RJdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRoaWxpZ2h0ID0gISEoaGlsaWdodCB8fCB0aGlzLmxhc3RDbGlja2VkLnRvU3RyaW5nKCkgPT09ICcxJyk7XG5cblx0XHQvLyBHcmFiIG9wdGlvbnMgZnJvbSBmb3JtXG5cdFx0bGV0IHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHR0eXBlID0gdGhpcy4kYm9keS5maW5kKCcjcmZTZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjcmZJbnZlcnQnKS5wcm9wKCdjaGVja2VkJykgYXMgYm9vbGVhbjtcblx0XHRjb25zdCBzZWFyY2g6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI3JmUmVnZXgnKS52YWwoKT8udG9TdHJpbmcoKSA/PyAnJztcblx0XHRjb25zdCBmbGFnczogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjcmZDYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChgJHtzZWFyY2h9YCwgYCR7ZmxhZ3N9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiLyoqXG4gKiBMb2cgZmlsdGVyIHNjcmlwdFxuICpcbiAqIENyZWF0ZWQgYnkgU3BsYXJrYVxuICogQW1lbmRlZCBieSBNaWtlLmxpZmVndWFyZCAmIEx1cG9cbiAqIFBhcnRpYWxseSByZXdyaXR0ZW4gYnkgRGllQnVjaGVcbiAqXG4gKiA8bGk+IGVsZW1lbnQgRmlsdGVyIFNjcmlwdCwgdmVyc2lvbiBbMC4yXVxuICogU2hvdWxkIGN1cnJlbnRseSB3b3JrIG9uIGFsbCBrbm93biBza2lucyAod2l0aCBhICNjb250ZW50U3ViIG9yICN0b3BiYXIpXG4gKlxuICogbXcudXRpbC5nZXRVcmwoIG13LmNvbmZpZy5nZXQoICd3Z1BhZ2VOYW1lJyApICkgKyAnPycgK1xuICogJ3dpdGhKUz1NZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcyZsaWZpbHRlcj0xJmxpZmlsdGVyZXhwcj1URVNUJmxpZmlsdGVyY2FzZSZsaWZpbHRlcmhpbGlnaHQmbGlmaWx0ZXJpbnYnXG4gKi9cbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0UsIFVSTF9MSUZJTFRFUiwgV0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHQvLyBXaGVuIHRvIGVuYWJsZSBhbGwgdGhpc1xuXHRpZiAoV0dfQUNUSU9OICE9PSAnaGlzdG9yeScgJiYgIVVSTF9MSUZJTFRFUiAmJiAhUkVHRVhfVEFSR0VUX1BBR0UudGVzdChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dMb2dGaWx0ZXJJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dMb2dGaWx0ZXJJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvLyBMb2FkXG5cdFx0bmV3IExvZ0ZpbHRlcigkYm9keSkuYWRkUG9ydGxldExpbmsoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1h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YyxhQUFhLENBQUNSLGdCQUFnQixDQUFDRCxrQkFBa0IyRyxLQUFLL0YsOEJBQThCLEdBQUc7QUFDeEc7RUFDRDtBQUdBLE1BQUlWLEdBQUdRLE9BQU9DLElBQUksc0JBQXNCLEdBQUc7QUFDMUM7RUFDRDtBQUVBVCxLQUFHUSxPQUFPYyxJQUFJLHdCQUF3QixJQUFJO0FBRTFDLFFBQUEsR0FBS2dGLGtCQUFBSSxTQUFRLEVBQUVDLEtBQU14RixXQUF5QztBQUU3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIlJFR0VYX1RBUkdFVF9QQUdFIiwgIlVSTF9MSUZJTFRFUiIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0xJRklMVEVSX0NBU0UiLCAiVVJMX0xJRklMVEVSX0VYUFIiLCAiVVJMX0xJRklMVEVSX0hJTElHSFQiLCAiVVJMX0xJRklMVEVSX0lOViIsICJXR19BQ1RJT04iLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiTUVTU0FHRVMiLCAiTG9nRmlsdGVyIiwgIl9Mb2dGaWx0ZXIiLCAicmlnaHRzTG9nT25seSIsICJsb2NhdGlvbiIsICJocmVmIiwgImluY2x1ZGVzIiwgImxhc3RDbGlja2VkIiwgIiRib2R5IiwgImNvbnN0cnVjdG9yIiwgIm1lc3NhZ2VzIiwgInNldCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJtc2ciLCAiJHBvcnRsZXRMaW5rIiwgIiQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYnVpbGRGb3JtIiwgIiRwYWdlVG9wIiwgImZpZWxkc2V0SHRtbCIsICJvbGRJbnB1dCIsICJpbnN0cnVjdGlvbnMiLCAiaGlkZSIsICJjYXNpbmciLCAiaGlsaWdodCIsICJpbnZlcnRlZCIsICIkZmllbGRTZXQiLCAiYXR0ciIsICJ0ZXh0IiwgIiRsZWdlbmQiLCAiYXBwZW5kIiwgImNvbmNhdCIsICJodG1sIiwgImVzY2FwZSIsICJhZnRlciIsICJ2YWwiLCAicHJvcCIsICJ0cmlnZ2VyIiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAiZmlsdGVyTGkiLCAiY3VySW5wdXQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwkIiwgIl90aGlzJCRib2R5JGZpbmQkdmFsIiwgIiRsaXN0SXRlbXMiLCAidG9TdHJpbmciLCAidHlwZSIsICJpbnZlcnQiLCAic2VhcmNoIiwgImZsYWdzIiwgInJlZ2V4UmYiLCAiUmVnRXhwIiwgImVycm9yIiwgImNvbnNvbGUiLCAibG9nIiwgIlJFR0VYX1JJR0hUIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfbG9vayIsICJfbG9vazIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJsb29rIiwgIm9sZHIiLCAicmVwbGFjZSIsICJuZXdyIiwgIm9sZHJsIiwgInNwbGl0IiwgIm5ld3JsIiwgImkiLCAiaiIsICJyZW1yIiwgImpvaW4iLCAiYWRkciIsICJjc3MiLCAic2hvdyIsICJlcnIiLCAiZSIsICJmIiwgImtleSIsICJtZXNzYWdlIiwgInBsYWluIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibG9nRmlsdGVyIiwgInRlc3QiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
