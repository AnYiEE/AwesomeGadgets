/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/Wikiplus-highlight}
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

// dist/Wikiplus-highlight/Wikiplus-highlight.js
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
var import_ext_gadget = require("ext.gadget.Util");
if (!mw.user.options.get("gadget-Wikiplus")) {
  void (0, import_ext_gadget.initMwApi)("Wikiplus-highlight/2.0").postWithEditToken({
    action: "options",
    change: "gadget-Wikiplus=1"
  });
  void mw.loader.using("ext.gadget.Wikiplus");
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9XaWtpcGx1cy1oaWdobGlnaHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5pZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1XaWtpcGx1cycpKSB7XG5cdHZvaWQgaW5pdE13QXBpKCdXaWtpcGx1cy1oaWdobGlnaHQvMi4wJykucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdGNoYW5nZTogJ2dhZGdldC1XaWtpcGx1cz0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuV2lraXBsdXMnKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQUksQ0FBQ0MsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxpQkFBaUIsR0FBRztBQUM1QyxRQUFBLEdBQUtMLGtCQUFBTSxXQUFVLHdCQUF3QixFQUFFQyxrQkFBa0I7SUFDMURDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQUM7QUFFRCxPQUFLUCxHQUFHUSxPQUFPQyxNQUFNLHFCQUFxQjtBQUMzQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgImluaXRNd0FwaSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyJdCn0K
