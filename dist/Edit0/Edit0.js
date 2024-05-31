/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edit0|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.css}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edit0}
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

// dist/Edit0/Edit0.js
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
//! src/Edit0/modules/constant.ts
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_SKIN = mw.config.get("skin");
//! src/Edit0/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit0: (0, import_ext_gadget.localize)({
      en: "Edit lead section",
      ja: "最初の段落を編集",
      "zh-hans": "编辑首段",
      "zh-hant": "編輯首段"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Edit0/modules/core.ts
var edit0 = ($body) => {
  const $content = $body.find("#content, #mw_content").first();
  const $span1 = $content.find("span.mw-editsection:not(.plainlinks)").first();
  if (!$span1.length) {
    return;
  }
  const $span0 = $span1.clone();
  switch (WG_SKIN) {
    case "citizen":
      $body.find(".mw-indicators").prepend($span0);
      break;
    default:
      $body.find("#content h1#firstHeading").append($span0);
  }
  var _iterator = _createForOfIteratorHelper($span0.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      element.title = getMessage("Edit0");
      const {
        href
      } = element;
      const urlSearch = {
        summary: "/* top */ ",
        section: "0"
      };
      if (!/&(?:ve)?section=T/.test(href)) {
        element.href = new mw.Uri(href).extend(urlSearch).toString();
      } else if (/&vesection=/.test(href)) {
        element.href = new mw.Uri(href).extend({
          ...urlSearch,
          veaction: "edit",
          vesection: "0"
        }).toString();
      } else {
        element.href = new mw.Uri(href).extend({
          ...urlSearch,
          action: "edit"
        }).toString();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Edit0/Edit0.ts
var import_ext_gadget2 = require("ext.gadget.Util");
if (WG_NAMESPACE_NUMBER >= 0) {
  void (0, import_ext_gadget2.getBody)().then(edit0);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19TS0lOfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RWRpdDA6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBsZWFkIHNlY3Rpb24nLFxuXHRcdFx0amE6ICfmnIDliJ3jga7mrrXokL3jgpLnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6R6aaW5q61Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8r+mmluautScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblxuXHRzd2l0Y2ggKFdHX1NLSU4pIHtcblx0XHRjYXNlICdjaXRpemVuJzpcblx0XHRcdCRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JzJykucHJlcGVuZCgkc3BhbjApO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRib2R5LmZpbmQoJyNjb250ZW50IGgxI2ZpcnN0SGVhZGluZycpLmFwcGVuZCgkc3BhbjApO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRzcGFuMC5maW5kKCdhJykpIHtcblx0XHRlbGVtZW50LnRpdGxlID0gZ2V0TWVzc2FnZSgnRWRpdDAnKTtcblxuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXJsU2VhcmNoID0ge1xuXHRcdFx0c3VtbWFyeTogJy8qIHRvcCAqLyAnLFxuXHRcdFx0c2VjdGlvbjogJzAnLFxuXHRcdH0gYXMgY29uc3Qgc2F0aXNmaWVzIHtcblx0XHRcdHN1bW1hcnk6IHN0cmluZztcblx0XHRcdHNlY3Rpb246IHN0cmluZztcblx0XHR9O1xuXG5cdFx0aWYgKCEvJig/OnZlKT9zZWN0aW9uPVQvLnRlc3QoaHJlZikpIHtcblx0XHRcdC8vIG5vdCB0cmFuc2NsdWRlZFxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKS5leHRlbmQodXJsU2VhcmNoKS50b1N0cmluZygpO1xuXHRcdH0gZWxzZSBpZiAoLyZ2ZXNlY3Rpb249Ly50ZXN0KGhyZWYpKSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgVkVcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZilcblx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0Li4udXJsU2VhcmNoLFxuXHRcdFx0XHRcdHZlYWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dmVzZWN0aW9uOiAnMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgbm90IFZFXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdC4uLnVybFNlYXJjaCxcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXQwfTtcbiIsICJpbXBvcnQgJy4vRWRpdDAubGVzcyc7XG5pbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2VkaXQwfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID49IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihlZGl0MCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsc0JBQThCQyxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUNyRSxJQUFNQyxVQUFrQkgsR0FBR0MsT0FBT0MsSUFBSSxNQUFNOztBQ0Q1QyxJQUFBRSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPSCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDYkEsSUFBTUMsUUFBU0MsV0FBeUM7QUFDdkQsUUFBTUMsV0FBbUJELE1BQU1FLEtBQUssdUJBQXVCLEVBQUVDLE1BQU07QUFDbkUsUUFBTUMsU0FBaUJILFNBQVNDLEtBQUssc0NBQXNDLEVBQUVDLE1BQU07QUFDbkYsTUFBSSxDQUFDQyxPQUFPQyxRQUFRO0FBQ25CO0VBQ0Q7QUFFQSxRQUFNQyxTQUFpQkYsT0FBT0csTUFBTTtBQUVwQyxVQUFRbkIsU0FBQTtJQUNQLEtBQUs7QUFDSlksWUFBTUUsS0FBSyxnQkFBZ0IsRUFBRU0sUUFBUUYsTUFBTTtBQUMzQztJQUNEO0FBQ0NOLFlBQU1FLEtBQUssMEJBQTBCLEVBQUVPLE9BQU9ILE1BQU07RUFDdEQ7QUFBQSxNQUFBSSxZQUFBQywyQkFFc0JMLE9BQU9KLEtBQUssR0FBRyxDQUFBLEdBQUFVO0FBQUEsTUFBQTtBQUFyQyxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF3QztBQUFBLFlBQTdCQyxVQUFBSixNQUFBSztBQUNWRCxjQUFRRSxRQUFRckIsV0FBVyxPQUFPO0FBRWxDLFlBQU07UUFBQ3NCO01BQUksSUFBSUg7QUFDZixZQUFNSSxZQUFZO1FBQ2pCQyxTQUFTO1FBQ1RDLFNBQVM7TUFDVjtBQUtBLFVBQUksQ0FBQyxvQkFBb0JDLEtBQUtKLElBQUksR0FBRztBQUVwQ0gsZ0JBQVFHLE9BQU8sSUFBSWxDLEdBQUd1QyxJQUFJTCxJQUFJLEVBQUVNLE9BQU9MLFNBQVMsRUFBRU0sU0FBUztNQUM1RCxXQUFXLGNBQWNILEtBQUtKLElBQUksR0FBRztBQUVwQ0gsZ0JBQVFHLE9BQU8sSUFBSWxDLEdBQUd1QyxJQUFJTCxJQUFJLEVBQzVCTSxPQUFPO1VBQ1AsR0FBR0w7VUFDSE8sVUFBVTtVQUNWQyxXQUFXO1FBQ1osQ0FBQyxFQUNBRixTQUFTO01BQ1osT0FBTztBQUVOVixnQkFBUUcsT0FBTyxJQUFJbEMsR0FBR3VDLElBQUlMLElBQUksRUFDNUJNLE9BQU87VUFDUCxHQUFHTDtVQUNIUyxRQUFRO1FBQ1QsQ0FBQyxFQUNBSCxTQUFTO01BQ1o7SUFDRDtFQUFBLFNBQUFJLEtBQUE7QUFBQXBCLGNBQUFxQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcEIsY0FBQXNCLEVBQUE7RUFBQTtBQUNEOztBQ25EQSxJQUFBQyxxQkFBc0IzQyxRQUFBLGlCQUFBO0FBRXRCLElBQUlOLHVCQUF1QixHQUFHO0FBQzdCLFFBQUEsR0FBS2lELG1CQUFBQyxTQUFRLEVBQUVDLEtBQUtwQyxLQUFLO0FBQzFCOyIsCiAgIm5hbWVzIjogWyJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0MCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWRpdDAiLCAiJGJvZHkiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJmaXJzdCIsICIkc3BhbjEiLCAibGVuZ3RoIiwgIiRzcGFuMCIsICJjbG9uZSIsICJwcmVwZW5kIiwgImFwcGVuZCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJ0aXRsZSIsICJocmVmIiwgInVybFNlYXJjaCIsICJzdW1tYXJ5IiwgInNlY3Rpb24iLCAidGVzdCIsICJVcmkiLCAiZXh0ZW5kIiwgInRvU3RyaW5nIiwgInZlYWN0aW9uIiwgInZlc2VjdGlvbiIsICJhY3Rpb24iLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
