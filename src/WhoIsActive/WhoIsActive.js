/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: 'https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WhoIsActiveGadgets/src/branch/master/src/WhoIsActive}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WhoIsActive}
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
(function () {

  "use strict";
  
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  (function () {
    // src/WhoIsActive/modules/i18n.ts
    var getI18nMessages = function getI18nMessages() {
      var _i18n = i18n,
        localize = _i18n.localize;
      return {
        OverAYear: localize({
          en: "Edited over a year ago",
          "zh-hans": "一年未有编辑",
          "zh-hant": "一年未有編輯"
        }),
        ThisWeek: localize({
          en: "Edited this week",
          "zh-hans": "一周内有编辑",
          "zh-hant": "一周內有編輯"
        }),
        ThisMonth: localize({
          en: "Edited this month",
          "zh-hans": "一月内有编辑",
          "zh-hant": "一月內有編輯"
        }),
        ThisYear: localize({
          en: "Edited this year",
          "zh-hans": "一年内有编辑",
          "zh-hant": "一年內有編輯"
        })
      };
    };
    var i18nMessages = getI18nMessages();
    var getMessage = function getMessage(key) {
      return i18nMessages[key] || key;
    };
  
    // src/util.ts
    var initMwApi = function initMwApi(userAgent) {
      return new mw.Api({
        ajax: {
          headers: {
            "Api-User-Agent": userAgent
          }
        }
      });
    };
  
    // src/WhoIsActive/modules/core.ts
    var whoIsActive = function whoIsActive() {
      var api = initMwApi("YsArxiv/1.1 (WhoIsActive/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
      var filteredLinks = [];
      var _mw$config$get = mw.config.get("wgFormattedNamespaces"),
        localizedUserNamespace = _mw$config$get[2];
      $(".mw-body-content").find("a[title^=\"User:\"]:not(.mw-changeslist-date):not([href*=\"undo\"]), a[title^=\"".concat(localizedUserNamespace, ":\"]:not(.mw-changeslist-date):not([href*=\"undo\"])")).each(function (_index, element) {
        var _link$attr;
        var link = $(element);
        var href = decodeURI((_link$attr = link.attr("href")) !== null && _link$attr !== void 0 ? _link$attr : "");
        var userRegex = new RegExp("((User)|(".concat(localizedUserNamespace, ")):(.*?)(?=&|$)"));
        var username = href.match(userRegex);
        if (username) {
          var index = username[0].indexOf("/");
          if (index === -1) {
            filteredLinks.push({
              username: username[0],
              element: link
            });
          }
        }
      });
      if (filteredLinks.length === 0) {
        return;
      }
      var getLastActiveMarker = function getLastActiveMarker(timestamp, indicator) {
        var date = Date.parse(timestamp);
        var now = Date.now();
        var diff = Math.floor((now - date) / (1e3 * 60 * 60 * 24));
        var timespan;
        if (diff > 365) {
          timespan = "OverAYear";
        } else if (diff > 30) {
          timespan = "ThisYear";
        } else if (diff > 7) {
          timespan = "ThisMonth";
        } else {
          timespan = "ThisWeek";
        }
        var elementName = indicator === true ? "div" : mw.config.get("skin") === "citizen" ? "section" : ["vector", "vector-2022", "gongbi", "write"].indexOf(mw.config.get("skin")) !== -1 ? "li" : "div";
        var $icon = $("<".concat(elementName, ">")).addClass("gadget-whoisactive__span gadget-whoisactive__".concat(timespan)).append($("<span>").addClass("gadget-whoisactive__icon gadget-whoisactive__icon__".concat(timespan)).attr({
          alt: getMessage(timespan),
          title: getMessage(timespan)
        })).append($("<span>").addClass("gadget-whoisactive__text".concat(indicator === true ? "  gadget-whoisactive__notext" : "")).text(getMessage(timespan)));
        return $icon;
      };
      var _loop = function _loop() {
        var item = _filteredLinks[_i];
        var username = item.username;
        var element = item.element;
        var params = {
          action: "query",
          list: "usercontribs",
          uclimit: 1,
          ucuser: username
        };
        api.get(params).then(function (result) {
          if (result["query"].usercontribs.length > 0) {
            var _result$query$usercon = _slicedToArray(result["query"].usercontribs, 1),
              timestamp = _result$query$usercon[0].timestamp;
            getLastActiveMarker(timestamp, true).insertAfter(element);
          }
        });
      };
      for (var _i = 0, _filteredLinks = filteredLinks; _i < _filteredLinks.length; _i++) {
        _loop();
      }
      var wgRelevantUserName = mw.config.get("wgRelevantUserName");
      if (wgRelevantUserName && mw.config.get("wgNamespaceNumber") === 2 && mw.config.get("wgAction") === "view") {
        var relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
        var pageName = new mw.Title(mw.config.get("wgPageName")).toText();
        if (relevantUserPageName === pageName) {
          var params = {
            action: "query",
            list: "usercontribs",
            uclimit: 1,
            ucuser: wgRelevantUserName
          };
          api.get(params).then(function (result) {
            if (result["query"].usercontribs.length > 0) {
              var _result$query$usercon2 = _slicedToArray(result["query"].usercontribs, 1),
                timestamp = _result$query$usercon2[0].timestamp;
              getLastActiveMarker(timestamp, false).prependTo($("#footer-info, .page-info"));
            }
          });
        }
      }
    };
  
    // src/WhoIsActive/WhoIsActive.ts
    if (!(mw.config.get("wgNamespaceNumber") < 0)) {
      $(whoIsActive);
    }
  })();
  
  })();
  /* </nowiki> */
  