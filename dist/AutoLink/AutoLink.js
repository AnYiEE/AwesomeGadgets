/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-autolink.js}
 * @base {@link https://en.wikipedia.org/wiki/Wikipedia:WikiProject_User_scripts/Scripts/Autolink}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AutoLink}
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

// dist/AutoLink/AutoLink.js
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
//! src/AutoLink/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_NAMESPACE = mw.config.get("wgCanonicalNamespace");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName").toString();
var IS_DIFF_ACTION = !!mw.util.getParamValue("diff");
var IS_TARGET_SPECIAL_PAGE = ["Contributions", "Log", "Newpages", "Recentchanges", "Recentchangeslinked", "Watchlist"].includes(WG_CANONICAL_SPECIAL_PAGE_NAME);
var IS_IN_TARGET_SPECIAL_PAGE = WG_CANONICAL_NAMESPACE === "Special" && IS_TARGET_SPECIAL_PAGE;
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
var IS_WG_HISTORY_ACTION = WG_ACTION === "history";
var REGEX_INTERNAL_URL = /([^=])([\s"'])((?:\/?w\/index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
var REGEX_IMPORT_SCRIPT = /([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
var REGEX_TL = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
var REGEX_URL = /((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;
//! src/AutoLink/modules/util/getTargetElements.ts
var getTargetElements = ($body) => {
  let color = "";
  let targetElements = [];
  if (IS_DIFF_ACTION) {
    color = "inherit";
    targetElements = [...$body.find(".diff,.firstrevisionheader")];
  } else if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
    targetElements = [...$body.find(".comment")];
  } else {
    targetElements = [...$body.find("source,.css,.source-css,.javascript,.source-javascript")];
  }
  return {
    color,
    targetElements
  };
};
//! src/AutoLink/AutoLink.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/AutoLink/modules/processElement.ts
var processElement = ({
  color,
  targetElements
}) => {
  let isActivateHTML = false;
  let regexURLinWikicodeWithoutLabel = /((?:[^[]|^)\[\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)([^\n\]]*])/gm;
  let regexSubstinWikicodeWithoutLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$6</a>$7');
  let regexURLinWikicodeWithLabel = regexURLinWikicodeWithoutLabel;
  let regexSubstinWikicodeWithLabel = regexSubstinWikicodeWithoutLabel;
  let regexOtherPages = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
  let regexSubstinOtherPages = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$6</a>$7');
  let regexTemplate = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
  let regexSubstinTemplate = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/Template:$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/Template:$2$4$6">$6</a>$7');
  let regexWikilink1 = /(\[{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)([^\n<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:[^\n\]]|][^\]])*]{2})/g;
  let regexSubstinWikilink1 = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$6</a>$7');
  let regexWikilink2 = regexWikilink1;
  let regexSubstinWikilink2 = regexSubstinWikilink1;
  if (!IS_DIFF_ACTION) {
    isActivateHTML = true;
    regexURLinWikicodeWithoutLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s*]/gm;
    regexSubstinWikicodeWithoutLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$2</a>');
    regexURLinWikicodeWithLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s+([^\n]+?)\s*]/gm;
    regexSubstinWikicodeWithLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$3</a>');
    regexOtherPages = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)((?:[Ss]pecial|[Qq](?:iuwen|Q)|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)(\||}{2})/gm;
    regexSubstinOtherPages = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2">$2</a>$3');
    regexTemplate = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
    regexSubstinTemplate = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2">$2</a>$3');
    regexWikilink1 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|\s*(.+?)\s*]{2}/g;
    regexSubstinWikilink1 = '<a class="autolink" style="color:'.concat(color, '" href="/wiki/$1">$2</a>');
    regexWikilink2 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|?\s*]{2}/g;
    regexSubstinWikilink2 = '<a class="autolink" style="color:'.concat(color, '" href="/wiki/$1">$1</a>');
  }
  var _iterator = _createForOfIteratorHelper(targetElements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const {
        innerHTML: originHtml
      } = element;
      let html = originHtml;
      html = html.replace(/&lt;/g, "&shy;<&shy;");
      html = html.replace(/&gt;/g, "&shy;>&shy;");
      html = html.replace(/&amp;/g, "&");
      html = html.replace(REGEX_TL, '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2">$2</a>'));
      html = html.replace(REGEX_URL, '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$2</a>'));
      html = html.replace(regexURLinWikicodeWithoutLabel, regexSubstinWikicodeWithoutLabel);
      html = html.replace(regexURLinWikicodeWithLabel, regexSubstinWikicodeWithLabel);
      html = html.replace(regexOtherPages, regexSubstinOtherPages);
      html = html.replace(regexTemplate, regexSubstinTemplate);
      html = html.replace(/href="\/wiki\/Template:#/g, 'href="/wiki/Help:');
      html = html.replace(regexWikilink1, regexSubstinWikilink1);
      html = html.replace(regexWikilink2, regexSubstinWikilink2);
      html = html.replace(REGEX_INTERNAL_URL, '$1$2<a class="external autolink" style="color:'.concat(color, '" href="$3">$3</a>$2'));
      html = html.replace(REGEX_IMPORT_SCRIPT, '$1$2<a class="autolink" style="color:'.concat(color, '" href="/wiki/$3">$3</a>$4'));
      html = html.replace(/&shy;<&shy;/g, "&lt;");
      html = html.replace(/&shy;>&shy;/g, "&gt;");
      if (isActivateHTML) {
        html = html.replace(/&lt;(span|b|i|strong|small|tt|del|s|u|sub|sup)&gt;(.*?)&lt;\/(\1)&gt;/g, "<$1>$2</$3>");
        html = html.replace(/([^']|^)'{3}(.+?)'{3}([^']|$)/gm, "$1<b>$2</b>$3");
        html = html.replace(/([^']|^)'{2}(.+?)'{2}([^']|$)/gm, "$1<i>$2</i>$3");
        if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
          html = html.replace(/<i>(.*?)<\/i>/g, '<span title="italic" style="border:1px solid #c0c0c0;padding:2px">$1</span>');
        }
      }
      if (IS_DIFF_ACTION) {
        html = html.replace(/<a [^>]+><\/a>/g, "");
        html = html.replace(/([^[]|^)\[\s*(<a [^>]+>)(?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+(<\/a>)\s+([^\n\]]+)]/gm, "$1$2$4$3");
        html = html.replace(/([^[]|^)\[\s*(<a [^>]+>)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)(<\/a>)\s*]/gm, "$1$2$3$4");
      }
      if (html !== originHtml) {
        requestAnimationFrame(() => {
          element.innerHTML = html;
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/AutoLink/AutoLink.ts
void (0, import_ext_gadget.getBody)().then(function autoLink($body) {
  if (!IS_IN_TARGET_SPECIAL_PAGE) {
    return;
  }
  const targetElements = getTargetElements($body);
  processElement(targetElements);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F1dG9MaW5rL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9nZXRUYXJnZXRFbGVtZW50cy50cyIsICJzcmMvQXV0b0xpbmsvQXV0b0xpbmsudHMiLCAic3JjL0F1dG9MaW5rL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfQ0FOT05JQ0FMX05BTUVTUEFDRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKS50b1N0cmluZygpO1xuXG5jb25zdCBJU19ESUZGX0FDVElPTjogYm9vbGVhbiA9ICEhbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdkaWZmJyk7XG4vLyBTcGVjaWFsIGNyb25vIHBhZ2VzIHdoZXJlIHRoaXMgc2NyaXB0IGlzIGVuYWJsZWRcbmNvbnN0IElTX1RBUkdFVF9TUEVDSUFMX1BBR0U6IGJvb2xlYW4gPSBbXG5cdCdDb250cmlidXRpb25zJyxcblx0J0xvZycsXG5cdCdOZXdwYWdlcycsXG5cdCdSZWNlbnRjaGFuZ2VzJyxcblx0J1JlY2VudGNoYW5nZXNsaW5rZWQnLFxuXHQnV2F0Y2hsaXN0Jyxcbl0uaW5jbHVkZXMoV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FKTtcbmNvbnN0IElTX0lOX1RBUkdFVF9TUEVDSUFMX1BBR0U6IGJvb2xlYW4gPSBXR19DQU5PTklDQUxfTkFNRVNQQUNFID09PSAnU3BlY2lhbCcgJiYgSVNfVEFSR0VUX1NQRUNJQUxfUEFHRTtcbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuY29uc3QgSVNfV0dfSElTVE9SWV9BQ1RJT046IGJvb2xlYW4gPSBXR19BQ1RJT04gPT09ICdoaXN0b3J5JztcblxuY29uc3QgUkVHRVhfSU5URVJOQUxfVVJMOiBSZWdFeHAgPSAvKFtePV0pKFtcXHNcIiddKSgoPzpcXC8/d1xcL2luZGV4XFwucGhwXFw/fFxcLz93aWtpXFwvKVtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspXFwyL2c7XG4vLyBFeHRlcm5hbCBsaW5rcyAobm8gd2lraWNvZGUpXG5jb25zdCBSRUdFWF9JTVBPUlRfU0NSSVBUOiBSZWdFeHAgPVxuXHQvKFtJaV1tcG9ydFtTc11jcmlwdCg/OjxzcGFuIGNsYXNzPVwiYnIwXCI+KT9cXCgoPzo8XFwvc3Bhbj48c3BhbiBjbGFzcz1cInN0MFwiPik/KSgnfFwiKShbXlxcbjw+W1xcXXt8fV0rPykoXFwyKD86PFxcL3NwYW4+PHNwYW4gY2xhc3M9XCJicjBcIj4pP1xcKSg/OjxcXC9zcGFuPik/KS9nO1xuLy8gSW1wb3J0U2NyaXB0XG5jb25zdCBSRUdFWF9UTDogUmVnRXhwID0gLyhbXntde3syfVxccypbVHRdbFxcfCkoW15cXG46PD5bXFxde3x9XSspL2c7XG4vLyBGb3Ige3t0bH19XG5jb25zdCBSRUdFWF9VUkw6IFJlZ0V4cCA9XG5cdC8oKD86W15cIltdfFtePV1cIikoPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rPykoPz0oPzo8XFwvc3Bhbj4pP1tcXHNcIicpXFxdfH1dKS9nO1xuXG5leHBvcnQge1xuXHRJU19ESUZGX0FDVElPTixcblx0SVNfSU5fVEFSR0VUX1NQRUNJQUxfUEFHRSxcblx0SVNfVEFSR0VUX1NQRUNJQUxfUEFHRSxcblx0SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLFxuXHRJU19XR19ISVNUT1JZX0FDVElPTixcblx0UkVHRVhfSU5URVJOQUxfVVJMLFxuXHRSRUdFWF9JTVBPUlRfU0NSSVBULFxuXHRSRUdFWF9UTCxcblx0UkVHRVhfVVJMLFxufTtcbiIsICJpbXBvcnQge0lTX0RJRkZfQUNUSU9OLCBJU19UQVJHRVRfU1BFQ0lBTF9QQUdFLCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIElTX1dHX0hJU1RPUllfQUNUSU9OfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmludGVyZmFjZSBUYXJnZXRFbGVtZW50cyB7XG5cdGNvbG9yOiBzdHJpbmc7XG5cdHRhcmdldEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdO1xufVxuXG5jb25zdCBnZXRUYXJnZXRFbGVtZW50cyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBUYXJnZXRFbGVtZW50cyA9PiB7XG5cdGxldCBjb2xvcjogc3RyaW5nID0gJyc7IC8vIGxpbmtzIGNvbG9yIChjb2xvdXJlZCBsaW5rcylcblx0bGV0IHRhcmdldEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG5cblx0aWYgKElTX0RJRkZfQUNUSU9OKSB7XG5cdFx0Ly8gaW4gZGlmZiBwYWdlc1xuXHRcdGNvbG9yID0gJ2luaGVyaXQnOyAvLyBub3QgY29sb3VyZWQgbGlua3Ncblx0XHR0YXJnZXRFbGVtZW50cyA9IFsuLi4kYm9keS5maW5kKCcuZGlmZiwuZmlyc3RyZXZpc2lvbmhlYWRlcicpXTtcblx0fSBlbHNlIGlmIChJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04gfHwgSVNfV0dfSElTVE9SWV9BQ1RJT04gfHwgSVNfVEFSR0VUX1NQRUNJQUxfUEFHRSkge1xuXHRcdC8vIGluIGNvbW1lbnRzXG5cdFx0dGFyZ2V0RWxlbWVudHMgPSBbLi4uJGJvZHkuZmluZCgnLmNvbW1lbnQnKV07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gY29kZSBzZWN0aW9uc1xuXHRcdHRhcmdldEVsZW1lbnRzID0gWy4uLiRib2R5LmZpbmQoJ3NvdXJjZSwuY3NzLC5zb3VyY2UtY3NzLC5qYXZhc2NyaXB0LC5zb3VyY2UtamF2YXNjcmlwdCcpXTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y29sb3IsXG5cdFx0dGFyZ2V0RWxlbWVudHMsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfTtcbiIsICJpbXBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRUYXJnZXRFbGVtZW50cyc7XG5pbXBvcnQge0lTX0lOX1RBUkdFVF9TUEVDSUFMX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGF1dG9MaW5rKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIUlTX0lOX1RBUkdFVF9TUEVDSUFMX1BBR0UpIHtcblx0XHRyZXR1cm47IC8vIERpc2FibGVkIGluIHRoZSBvdGhlciBzcGVjaWFsIHBhZ2VzXG5cdH1cblxuXHRjb25zdCB0YXJnZXRFbGVtZW50czogVGFyZ2V0RWxlbWVudHMgPSBnZXRUYXJnZXRFbGVtZW50cygkYm9keSk7XG5cblx0cHJvY2Vzc0VsZW1lbnQodGFyZ2V0RWxlbWVudHMpO1xufSk7XG4iLCAiLyoqXG4gKiBBdXRvbGluayBbW3dpa2lsaW5rc11dLCBbZXh0ZXJuYWwgbGlua3NdIGFuZCB7e3RlbXBsYXRlc319XG4gKi9cbmltcG9ydCB7XG5cdElTX0RJRkZfQUNUSU9OLFxuXHRJU19UQVJHRVRfU1BFQ0lBTF9QQUdFLFxuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdElTX1dHX0hJU1RPUllfQUNUSU9OLFxuXHRSRUdFWF9JTVBPUlRfU0NSSVBULFxuXHRSRUdFWF9JTlRFUk5BTF9VUkwsXG5cdFJFR0VYX1RMLFxuXHRSRUdFWF9VUkwsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1RhcmdldEVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMnO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICh7Y29sb3IsIHRhcmdldEVsZW1lbnRzfTogVGFyZ2V0RWxlbWVudHMpOiB2b2lkID0+IHtcblx0bGV0IGlzQWN0aXZhdGVIVE1MOiBib29sZWFuID0gZmFsc2U7XG5cdC8qIFJlZ2V4IChkZWZhdWx0IGZvciBkaWZmcykgKi9cblx0Ly8gUmVnZXggZm9yIGRpZmZzXG5cdGxldCByZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWw6IFJlZ0V4cCA9XG5cdFx0LygoPzpbXltdfF4pXFxbXFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKikoKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0qKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0qKShbXlxcblxcXV0qXSkvZ207XG5cdC8vIEV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBkaWZmIHBhZ2VzLCB3aWtpY29kZSB3aXRob3V0IGxhYmVsXG5cdGxldCByZWdleFVSTGluV2lraWNvZGVXaXRoTGFiZWw6IFJlZ0V4cCA9IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbDtcblx0Ly8gRXh0ZXJuYWwgbGlua3MgaW4gZGlmZiBwYWdlcywgd2lraWNvZGUgd2l0aCBsYWJlbFxuXHRsZXQgcmVnZXhTdWJzdGluV2lraWNvZGVXaXRoTGFiZWw6IHN0cmluZyA9IHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsO1xuXHQvLyBPdGhlciBwYWdlcyBpbmNsdWRlZCBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleE90aGVyUGFnZXM6IFJlZ0V4cCA9XG5cdFx0LygoPzpbXntdfF4pe3syfVxccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyooPzooPzpbU3NdW1V1XVtCYl1bU3NdW1R0XXxbTW1dW1NzXVtHZ118W01tXVtTc11bR2ddW05uXVtXd10pXFxzKjopP1xccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyopKCg/OltTc11wZWNpYWxlP3xbUXFdKD86aXV3ZW58W1d3XSl8W1d3XVtQcF18W1R0XWVtcGxhdGV8W1V1XXNlcik/XFxzKig/OiA/W1R0XWFsayk/XFxzKjpbXlxcbjo8PltcXF17fH1dKykoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuOjw+W1xcXXt8fV0qKShcXHx8fXsyfSkvZ207XG5cdGxldCByZWdleFN1YnN0aW5PdGhlclBhZ2VzOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBUZW1wbGF0ZXMgaW4gZGlmZiBwYWdlc1xuXHRsZXQgcmVnZXhUZW1wbGF0ZTogUmVnRXhwID1cblx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKykoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuOjw+W1xcXXt8fV0qKShcXHx8fXsyfXw6KS9nbTtcblx0bGV0IHJlZ2V4U3Vic3RpblRlbXBsYXRlOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpL1RlbXBsYXRlOiQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBXaWtpbGlua3MgaW4gZGlmZiBwYWdlc1xuXHRsZXQgcmVnZXhXaWtpbGluazE6IFJlZ0V4cCA9XG5cdFx0LyhcXFt7Mn1cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKShbXlxcbjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjw+W1xcXXt8fV0qKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjw+W1xcXXt8fV0qKSgoPzpbXlxcblxcXV18XVteXFxdXSkqXXsyfSkvZztcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2lsaW5rMTogc3RyaW5nID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDI8L2E+JDM8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kNDwvYT4kNTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ2PC9hPiQ3YDtcblx0bGV0IHJlZ2V4V2lraWxpbmsyOiBSZWdFeHAgPSByZWdleFdpa2lsaW5rMTtcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2lsaW5rMjogc3RyaW5nID0gcmVnZXhTdWJzdGluV2lraWxpbmsxO1xuXHQvLyBSZWdleCBmb3IgY29tbWVudHMgb3IgY29kZSBzZWN0aW9uc1xuXHRpZiAoIUlTX0RJRkZfQUNUSU9OKSB7XG5cdFx0Ly8gQWN0aXZhdGUgc29tZSBIVE1MIChpbmxpbmUpIGFuZCB3aWtpY29kZSBmb3IgYm9sZCBhbmQgaXRhbGljXG5cdFx0aXNBY3RpdmF0ZUhUTUwgPSB0cnVlO1xuXHRcdC8vIEV4dGVybmFsIGxpbmtzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnMsIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWxcblx0XHRyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwgPSAvKFteW118XilcXFtcXHMqKCg/Omh0dHBzP3xmdHBzPyk6XFwvXFwvW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXHMqXS9nbTtcblx0XHRyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhvdXRMYWJlbCA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyXCI+JDI8L2E+YDtcblx0XHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zLCB3aWtpY29kZSB3aXRoIGxhYmVsICh0aGUgVVJMIHdpbGwgbm90IGJlIHZpc2libGUpXG5cdFx0cmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsID0gLyhbXltdfF4pXFxbXFxzKigoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspXFxzKyhbXlxcbl0rPylcXHMqXS9nbTtcblx0XHRyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyXCI+JDM8L2E+YDtcblx0XHQvLyBPdGhlciBwYWdlcyBpbmNsdWRlZCBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdFx0cmVnZXhPdGhlclBhZ2VzID1cblx0XHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKSgoPzpbU3NdcGVjaWFsfFtRcV0oPzppdXdlbnxRKXxbV3ddW1BwXXxbVHRdZW1wbGF0ZXxbVXVdc2VyKT9cXHMqKD86ID9bVHRdYWxrKT9cXHMqOlteXFxuOjw+W1xcXXt8fV0rKShcXHx8fXsyfSkvZ207XG5cdFx0cmVnZXhTdWJzdGluT3RoZXJQYWdlcyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyXCI+JDI8L2E+JDNgO1xuXHRcdC8vIFRlbXBsYXRlcyBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdFx0cmVnZXhUZW1wbGF0ZSA9XG5cdFx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKikoW15cXG46PD5bXFxde3x9XSspKFxcfHx9ezJ9fDopL2dtO1xuXHRcdHJlZ2V4U3Vic3RpblRlbXBsYXRlID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDJcIj4kMjwvYT4kM2A7XG5cdFx0Ly8gV2lraWxpbmtzIGluIGNvZGUgc2VjdGlvbnMsIHdpdGggbGFiZWxcblx0XHRyZWdleFdpa2lsaW5rMSA9IC9cXFt7Mn1cXHMqKFteXFxuPD5bXFxde3x9XSs/KVxccypcXHxcXHMqKC4rPylcXHMqXXsyfS9nO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2lsaW5rMSA9IGA8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMVwiPiQyPC9hPmA7XG5cdFx0Ly8gV2lraWxpbmtzIGluIGNvZGUgc2VjdGlvbnMsIHdpdGhvdXQgbGFiZWxcblx0XHRyZWdleFdpa2lsaW5rMiA9IC9cXFt7Mn1cXHMqKFteXFxuPD5bXFxde3x9XSs/KVxccypcXHw/XFxzKl17Mn0vZztcblx0XHRyZWdleFN1YnN0aW5XaWtpbGluazIgPSBgPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDFcIj4kMTwvYT5gO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHRhcmdldEVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qge2lubmVySFRNTDogb3JpZ2luSHRtbH0gPSBlbGVtZW50O1xuXHRcdGxldCBodG1sOiBzdHJpbmcgPSBvcmlnaW5IdG1sO1xuXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJmx0Oy9nLCAnJnNoeTs8JnNoeTsnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICcmc2h5Oz4mc2h5OycpO1xuXHRcdC8vICZhbXA7bHQ7IHRvICZhbXA7c2h5OzwmYW1wO3NoeTsgYW5kICZhbXA7Z3Q7IHRvICZhbXA7c2h5Oz4mYW1wO3NoeTsgKCZhbXA7c2h5OyBpcyBhIG1hcmtlcilcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xuXHRcdC8vICZhbXA7YW1wOyB0byAmXG5cdFx0LyogLS0tICovXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShSRUdFWF9UTCwgYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDJcIj4kMjwvYT5gKTtcblx0XHQvLyBGb3Ige3t0bH19OiBtYWtlIGhpcyBhcmd1bWVudCBpbnRvIGxpbmtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFJFR0VYX1VSTCwgYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMjwvYT5gKTtcblx0XHQvLyBQYXJzZSBpbmFjdGl2ZSBleHRlcm5hbCBsaW5rcyAobm8gd2lraWNvZGUpXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwsIHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsKTtcblx0XHQvLyBNYWtlIGV4dGVybmFsIGxpbmtzIGluIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWwgaW50byBsaW5rc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsLCByZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCk7XG5cdFx0Ly8gTWFrZSBleHRlcm5hbCBsaW5rcyBpbiB3aWtpY29kZSB3aXRoIGxhYmVsIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4T3RoZXJQYWdlcywgcmVnZXhTdWJzdGluT3RoZXJQYWdlcyk7XG5cdFx0Ly8gTWFrZSBvdGhlciBwYWdlcyBpbmNsdWRlZCBjb2RlIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4VGVtcGxhdGUsIHJlZ2V4U3Vic3RpblRlbXBsYXRlKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9ocmVmPVwiXFwvd2lraVxcL1RlbXBsYXRlOiMvZywgJ2hyZWY9XCIvd2lraS9IZWxwOicpO1xuXHRcdC8vIE1ha2UgdGVtcGxhdGUgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFdpa2lsaW5rMSwgcmVnZXhTdWJzdGluV2lraWxpbmsxKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4V2lraWxpbmsyLCByZWdleFN1YnN0aW5XaWtpbGluazIpO1xuXHRcdC8vIE1ha2Ugd2lraWxpbmsgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFJFR0VYX0lOVEVSTkFMX1VSTCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDNcIj4kMzwvYT4kMmBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIGluYWN0aXZlIGV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0UkVHRVhfSU1QT1JUX1NDUklQVCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDNcIj4kMzwvYT4kNGBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIEltcG9ydFNjcmlwdFxuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyZzaHk7PCZzaHk7L2csICcmbHQ7Jyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJnNoeTs+JnNoeTsvZywgJyZndDsnKTtcblx0XHQvLyAmYW1wO3NoeTs8JmFtcDtzaHk7IHRvICZhbXA7bHQ7IGFuZCAmYW1wO3NoeTs+JmFtcDtzaHk7IHRvICZhbXA7Z3Q7IChyZXZlcnQpXG5cdFx0aWYgKGlzQWN0aXZhdGVIVE1MKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHQvJmx0OyhzcGFufGJ8aXxzdHJvbmd8c21hbGx8dHR8ZGVsfHN8dXxzdWJ8c3VwKSZndDsoLio/KSZsdDtcXC8oXFwxKSZndDsvZyxcblx0XHRcdFx0JzwkMT4kMjwvJDM+J1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyhbXiddfF4pJ3szfSguKz8pJ3szfShbXiddfCQpL2dtLCAnJDE8Yj4kMjwvYj4kMycpO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvKFteJ118XiknezJ9KC4rPyknezJ9KFteJ118JCkvZ20sICckMTxpPiQyPC9pPiQzJyk7XG5cdFx0XHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIHx8IElTX1dHX0hJU1RPUllfQUNUSU9OIHx8IElTX1RBUkdFVF9TUEVDSUFMX1BBR0UpIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0XHQvPGk+KC4qPyk8XFwvaT4vZyxcblx0XHRcdFx0XHQnPHNwYW4gdGl0bGU9XCJpdGFsaWNcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtwYWRkaW5nOjJweFwiPiQxPC9zcGFuPidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdC8vIEknbSBpbiBhIGNvbW1lbnQgZmllbGQgKGl0YWxpYylcblx0XHR9XG5cdFx0aWYgKElTX0RJRkZfQUNUSU9OKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC88YSBbXj5dKz48XFwvYT4vZywgJycpOyAvLyBDbGVhblxuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0LyhbXltdfF4pXFxbXFxzKig8YSBbXj5dKz4pKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKDxcXC9hPilcXHMrKFteXFxuXFxdXSspXS9nbSxcblx0XHRcdFx0JyQxJDIkNCQzJ1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHRcdC8oW15bXXxeKVxcW1xccyooPGEgW14+XSs+KSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspKDxcXC9hPilcXHMqXS9nbSxcblx0XHRcdFx0JyQxJDIkMyQ0J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoaHRtbCAhPT0gb3JpZ2luSHRtbCkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAvLyBXcml0ZSBpdCBiYWNrXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFN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S0MsUUFBUSxtQ0FBbUMsZUFBZTtBQUN0RUQsZUFBT0EsS0FBS0MsUUFBUSxtQ0FBbUMsZUFBZTtBQUN0RSxZQUFJdkMsK0JBQStCQyx3QkFBd0JKLHdCQUF3QjtBQUNsRnlDLGlCQUFPQSxLQUFLQyxRQUNYLGtCQUNBLDZFQUNEO1FBQ0Q7TUFFRDtBQUNBLFVBQUk3QyxnQkFBZ0I7QUFDbkI0QyxlQUFPQSxLQUFLQyxRQUFRLG1CQUFtQixFQUFFO0FBQ3pDRCxlQUFPQSxLQUFLQyxRQUNYLDhGQUNBLFVBQ0Q7QUFDQUQsZUFBT0EsS0FBS0MsUUFDWCxzRkFDQSxVQUNEO01BQ0Q7QUFFQSxVQUFJRCxTQUFTRCxZQUFZO0FBQ3hCRyw4QkFBc0IsTUFBWTtBQUNqQ04sa0JBQVFFLFlBQVlFO1FBQ3JCLENBQUM7TUFDRjtJQUNEO0VBQUEsU0FBQUcsS0FBQTtBQUFBYixjQUFBYyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBYixjQUFBZSxFQUFBO0VBQUE7QUFDRDs7QUR0SUEsTUFBQSxHQUFLaEMsa0JBQUFpQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU3ZDLE9BQXNDO0FBQzNFLE1BQUksQ0FBQ1IsMkJBQTJCO0FBQy9CO0VBQ0Q7QUFFQSxRQUFNVSxpQkFBaUNILGtCQUFrQkMsS0FBSztBQUU5RE0saUJBQWVKLGNBQWM7QUFDOUIsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfQ0FOT05JQ0FMX05BTUVTUEFDRSIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAidG9TdHJpbmciLCAiSVNfRElGRl9BQ1RJT04iLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIklTX1RBUkdFVF9TUEVDSUFMX1BBR0UiLCAiaW5jbHVkZXMiLCAiSVNfSU5fVEFSR0VUX1NQRUNJQUxfUEFHRSIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiSVNfV0dfSElTVE9SWV9BQ1RJT04iLCAiUkVHRVhfSU5URVJOQUxfVVJMIiwgIlJFR0VYX0lNUE9SVF9TQ1JJUFQiLCAiUkVHRVhfVEwiLCAiUkVHRVhfVVJMIiwgImdldFRhcmdldEVsZW1lbnRzIiwgIiRib2R5IiwgImNvbG9yIiwgInRhcmdldEVsZW1lbnRzIiwgImZpbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwcm9jZXNzRWxlbWVudCIsICJpc0FjdGl2YXRlSFRNTCIsICJyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAicmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAiY29uY2F0IiwgInJlZ2V4VVJMaW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleE90aGVyUGFnZXMiLCAicmVnZXhTdWJzdGluT3RoZXJQYWdlcyIsICJyZWdleFRlbXBsYXRlIiwgInJlZ2V4U3Vic3RpblRlbXBsYXRlIiwgInJlZ2V4V2lraWxpbmsxIiwgInJlZ2V4U3Vic3Rpbldpa2lsaW5rMSIsICJyZWdleFdpa2lsaW5rMiIsICJyZWdleFN1YnN0aW5XaWtpbGluazIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiaW5uZXJIVE1MIiwgIm9yaWdpbkh0bWwiLCAiaHRtbCIsICJyZXBsYWNlIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJlcnIiLCAiZSIsICJmIiwgImdldEJvZHkiLCAidGhlbiIsICJhdXRvTGluayJdCn0K
