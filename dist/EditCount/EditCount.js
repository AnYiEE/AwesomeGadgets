/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/EditCount}
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

// dist/EditCount/EditCount.js
//! src/EditCount/constant.ts
var WG_USER_EDIT_COUNT = mw.config.get("wgUserEditCount");
//! src/EditCount/EditCount.ts
mw.loader.addStyleTag('#pt-mycontris > a::after,\n	.menu__item--userContributions > span > span::after {\n		content:" ('.concat(WG_USER_EDIT_COUNT !== null && WG_USER_EDIT_COUNT !== void 0 ? WG_USER_EDIT_COUNT : 0, ')"\n	}'));

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb3VudC9jb25zdGFudC50cyIsICJzcmMvRWRpdENvdW50L0VkaXRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfVVNFUl9FRElUX0NPVU5UOiBudW1iZXIgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyRWRpdENvdW50Jyk7XG5cbmV4cG9ydCB7V0dfVVNFUl9FRElUX0NPVU5UfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfRURJVF9DT1VOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbm13LmxvYWRlci5hZGRTdHlsZVRhZyhcblx0YCNwdC1teWNvbnRyaXMgPiBhOjphZnRlcixcblx0Lm1lbnVfX2l0ZW0tLXVzZXJDb250cmlidXRpb25zID4gc3BhbiA+IHNwYW46OmFmdGVyIHtcblx0XHRjb250ZW50OlwiICgke1dHX1VTRVJfRURJVF9DT1VOVCA/PyAwfSlcIlxuXHR9YFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUFvQ0MsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUI7O0FDRXpFRixHQUFHRyxPQUFPQyxZQUFBLG1HQUFBQyxPQUdLTix1QkFBQSxRQUFBQSx1QkFBQSxTQUFBQSxxQkFBc0IsR0FBQyxRQUFBLENBRXRDOyIsCiAgIm5hbWVzIjogWyJXR19VU0VSX0VESVRfQ09VTlQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiY29uY2F0Il0KfQo=
