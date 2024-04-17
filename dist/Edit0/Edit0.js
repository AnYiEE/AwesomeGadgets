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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19TS0lOfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RWRpdDA6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBsZWFkIHNlY3Rpb24nLFxuXHRcdFx0amE6ICfmnIDliJ3jga7mrrXokL3jgpLnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6R6aaW5q61Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8r+mmluautScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblxuXHRzd2l0Y2ggKFdHX1NLSU4pIHtcblx0XHRjYXNlICdjaXRpemVuJzpcblx0XHRcdCRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JzJykucHJlcGVuZCgkc3BhbjApO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRib2R5LmZpbmQoJyNjb250ZW50IGgxI2ZpcnN0SGVhZGluZycpLmFwcGVuZCgkc3BhbjApO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRzcGFuMC5maW5kKCdhJykpIHtcblx0XHRlbGVtZW50LnRpdGxlID0gZ2V0TWVzc2FnZSgnRWRpdDAnKTtcblxuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXJsU2VhcmNoID0ge1xuXHRcdFx0c3VtbWFyeTogJy8qIHRvcCAqLyAnLFxuXHRcdFx0c2VjdGlvbjogJzAnLFxuXHRcdH0gYXMgY29uc3Qgc2F0aXNmaWVzIHtcblx0XHRcdHN1bW1hcnk6IHN0cmluZztcblx0XHRcdHNlY3Rpb246IHN0cmluZztcblx0XHR9O1xuXG5cdFx0aWYgKCEvJig/OnZlKT9zZWN0aW9uPVQvLnRlc3QoaHJlZikpIHtcblx0XHRcdC8vIG5vdCB0cmFuc2NsdWRlZFxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKS5leHRlbmQodXJsU2VhcmNoKS50b1N0cmluZygpO1xuXHRcdH0gZWxzZSBpZiAoLyZ2ZXNlY3Rpb249Ly50ZXN0KGhyZWYpKSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgVkVcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZilcblx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0Li4udXJsU2VhcmNoLFxuXHRcdFx0XHRcdHZlYWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dmVzZWN0aW9uOiAnMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgbm90IFZFXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdC4uLnVybFNlYXJjaCxcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXQwfTtcbiIsICJpbXBvcnQgJy4vRWRpdDAubGVzcyc7XG5pbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2VkaXQwfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID49IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihlZGl0MCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHNCQUE4QkMsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUMsVUFBa0JILEdBQUdDLE9BQU9DLElBQUksTUFBTTs7QUNENUMsSUFBQUUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0gsa0JBQUFJLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQU1DLFFBQVNDLFdBQXlDO0FBQ3ZELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLHVCQUF1QixFQUFFQyxNQUFNO0FBQ25FLFFBQU1DLFNBQWlCSCxTQUFTQyxLQUFLLHNDQUFzQyxFQUFFQyxNQUFNO0FBQ25GLE1BQUksQ0FBQ0MsT0FBT0MsUUFBUTtBQUNuQjtFQUNEO0FBRUEsUUFBTUMsU0FBaUJGLE9BQU9HLE1BQU07QUFFcEMsVUFBUW5CLFNBQUE7SUFDUCxLQUFLO0FBQ0pZLFlBQU1FLEtBQUssZ0JBQWdCLEVBQUVNLFFBQVFGLE1BQU07QUFDM0M7SUFDRDtBQUNDTixZQUFNRSxLQUFLLDBCQUEwQixFQUFFTyxPQUFPSCxNQUFNO0VBQ3REO0FBQUEsTUFBQUksWUFBQUMsMkJBRXNCTCxPQUFPSixLQUFLLEdBQUcsQ0FBQSxHQUFBVTtBQUFBLE1BQUE7QUFBckMsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBd0M7QUFBQSxZQUE3QkMsVUFBQUosTUFBQUs7QUFDVkQsY0FBUUUsUUFBUXJCLFdBQVcsT0FBTztBQUVsQyxZQUFNO1FBQUNzQjtNQUFJLElBQUlIO0FBQ2YsWUFBTUksWUFBWTtRQUNqQkMsU0FBUztRQUNUQyxTQUFTO01BQ1Y7QUFLQSxVQUFJLENBQUMsb0JBQW9CQyxLQUFLSixJQUFJLEdBQUc7QUFFcENILGdCQUFRRyxPQUFPLElBQUlsQyxHQUFHdUMsSUFBSUwsSUFBSSxFQUFFTSxPQUFPTCxTQUFTLEVBQUVNLFNBQVM7TUFDNUQsV0FBVyxjQUFjSCxLQUFLSixJQUFJLEdBQUc7QUFFcENILGdCQUFRRyxPQUFPLElBQUlsQyxHQUFHdUMsSUFBSUwsSUFBSSxFQUM1Qk0sT0FBTztVQUNQLEdBQUdMO1VBQ0hPLFVBQVU7VUFDVkMsV0FBVztRQUNaLENBQUMsRUFDQUYsU0FBUztNQUNaLE9BQU87QUFFTlYsZ0JBQVFHLE9BQU8sSUFBSWxDLEdBQUd1QyxJQUFJTCxJQUFJLEVBQzVCTSxPQUFPO1VBQ1AsR0FBR0w7VUFDSFMsUUFBUTtRQUNULENBQUMsRUFDQUgsU0FBUztNQUNaO0lBQ0Q7RUFBQSxTQUFBSSxLQUFBO0FBQUFwQixjQUFBcUIsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXBCLGNBQUFzQixFQUFBO0VBQUE7QUFDRDs7QUNuREEsSUFBQUMscUJBQXNCM0MsUUFBQSxpQkFBQTtBQUV0QixJQUFJTix1QkFBdUIsR0FBRztBQUM3QixRQUFBLEdBQUtpRCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFLcEMsS0FBSztBQUMxQjsiLAogICJuYW1lcyI6IFsiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1NLSU4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRWRpdDAiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVkaXQwIiwgIiRib2R5IiwgIiRjb250ZW50IiwgImZpbmQiLCAiZmlyc3QiLCAiJHNwYW4xIiwgImxlbmd0aCIsICIkc3BhbjAiLCAiY2xvbmUiLCAicHJlcGVuZCIsICJhcHBlbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAidGl0bGUiLCAiaHJlZiIsICJ1cmxTZWFyY2giLCAic3VtbWFyeSIsICJzZWN0aW9uIiwgInRlc3QiLCAiVXJpIiwgImV4dGVuZCIsICJ0b1N0cmluZyIsICJ2ZWFjdGlvbiIsICJ2ZXNlY3Rpb24iLCAiYWN0aW9uIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
