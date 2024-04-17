/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AddSectionPlus}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/AddSectionPlus/AddSectionPlus.js
//! src/AddSectionPlus/AddSectionPlus.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/AddSectionPlus/modules/processElement.ts
var processElement = ($element, skin) => {
  const title = ($element.attr("aria-label") || $element.attr("title") || $element.text()).trim();
  if (!title) {
    return;
  }
  switch (skin) {
    case "gongbi":
      $element.attr({
        title
      }).html("&#8203");
      break;
    default:
      $element.attr({
        title
      }).text("[+]");
  }
};
//! src/AddSectionPlus/AddSectionPlus.ts
void (0, import_ext_gadget.getBody)().then(function addSectionPlus($body) {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return;
    //! style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
  }
  const $wrapper = $body.find("#ca-addsection");
  if (!$wrapper.length) {
    return;
  }
  const $target = $wrapper.find("span");
  if (!$target.length) {
    return;
  }
  processElement($target, skin);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FkZFNlY3Rpb25QbHVzL0FkZFNlY3Rpb25QbHVzLnRzIiwgInNyYy9BZGRTZWN0aW9uUGx1cy9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vQWRkU2VjdGlvblBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGFkZFNlY3Rpb25QbHVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjsgLy8hIHN0eWxlIGlzIGFscmVhZHkgYWRkZWQgYnkgW1tNZWRpYVdpa2k6R2FkZ2V0LUFkZFNlY3Rpb25QbHVzLXBhZ2VzdHlsZXMuY3NzXV1cblx0fVxuXG5cdGNvbnN0ICR3cmFwcGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtYWRkc2VjdGlvbicpO1xuXHRpZiAoISR3cmFwcGVyLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICR3cmFwcGVyLmZpbmQoJ3NwYW4nKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KCR0YXJnZXQsIHNraW4pO1xufSk7XG4iLCAiY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgc2tpbjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSAoJGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbCcpIHx8ICRlbGVtZW50LmF0dHIoJ3RpdGxlJykgfHwgJGVsZW1lbnQudGV4dCgpKS50cmltKCk7XG5cdGlmICghdGl0bGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzd2l0Y2ggKHNraW4pIHtcblx0XHRjYXNlICdnb25nYmknOlxuXHRcdFx0JGVsZW1lbnRcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuaHRtbCgnJiM4MjAzJyk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0JGVsZW1lbnRcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGV4dCgnWytdJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0R0QixJQUFNQyxpQkFBaUJBLENBQUNDLFVBQWtCQyxTQUF1QjtBQUNoRSxRQUFNQyxTQUFpQkYsU0FBU0csS0FBSyxZQUFZLEtBQUtILFNBQVNHLEtBQUssT0FBTyxLQUFLSCxTQUFTSSxLQUFLLEdBQUdDLEtBQUs7QUFDdEcsTUFBSSxDQUFDSCxPQUFPO0FBQ1g7RUFDRDtBQUVBLFVBQVFELE1BQUE7SUFDUCxLQUFLO0FBQ0pELGVBQ0VHLEtBQUs7UUFDTEQ7TUFDRCxDQUFDLEVBQ0FJLEtBQUssUUFBUTtBQUNmO0lBQ0Q7QUFDQ04sZUFDRUcsS0FBSztRQUNMRDtNQUNELENBQUMsRUFDQUUsS0FBSyxLQUFLO0VBQ2Q7QUFDRDs7QURqQkEsTUFBQSxHQUFLUCxrQkFBQVUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGVBQWVDLE9BQXNDO0FBQ2pGLFFBQU07SUFBQ1Q7RUFBSSxJQUFJVSxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLE1BQUlaLFNBQVMsV0FBVztBQUN2QjtJQUFRO0VBQ1Q7QUFFQSxRQUFNYSxXQUFtQkosTUFBTUssS0FBSyxnQkFBZ0I7QUFDcEQsTUFBSSxDQUFDRCxTQUFTRSxRQUFRO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNQyxVQUFrQkgsU0FBU0MsS0FBSyxNQUFNO0FBQzVDLE1BQUksQ0FBQ0UsUUFBUUQsUUFBUTtBQUNwQjtFQUNEO0FBRUFqQixpQkFBZWtCLFNBQVNoQixJQUFJO0FBQzdCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicHJvY2Vzc0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAic2tpbiIsICJ0aXRsZSIsICJhdHRyIiwgInRleHQiLCAidHJpbSIsICJodG1sIiwgImdldEJvZHkiLCAidGhlbiIsICJhZGRTZWN0aW9uUGx1cyIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR3cmFwcGVyIiwgImZpbmQiLCAibGVuZ3RoIiwgIiR0YXJnZXQiXQp9Cg==
