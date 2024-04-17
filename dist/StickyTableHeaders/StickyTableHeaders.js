/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/StickyTableHeaders}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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

// dist/StickyTableHeaders/StickyTableHeaders.js
//! src/StickyTableHeaders/modules/core.ts
var stickyTableHeaders = () => {
  const $body = $("body");
  $body.find(".wikitable:not(.sortable)").each((_index, table) => {
    const $table = $(table);
    const $thead = $table.find("thead");
    const $trTh = $table.find("tbody>tr>th").parent().eq(0);
    const $trTd = $table.find("tbody>tr>td").parent();
    const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
    if ($target && $trTd.length >= 5) {
      $table.addClass("mw-sticky-header");
      $target.addClass("thead");
    }
  });
};
//! src/StickyTableHeaders/StickyTableHeaders.ts
$(stickyTableHeaders);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBzdGlja3lUYWJsZUhlYWRlcnMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0JGJvZHkuZmluZCgnLndpa2l0YWJsZTpub3QoLnNvcnRhYmxlKScpLmVhY2goKF9pbmRleDogbnVtYmVyLCB0YWJsZTogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkdGFibGU6IEpRdWVyeTxIVE1MVGFibGVFbGVtZW50PiA9ICQodGFibGUpIGFzIEpRdWVyeTxIVE1MVGFibGVFbGVtZW50Pjtcblx0XHRjb25zdCAkdGhlYWQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gPSAkdGFibGUuZmluZCgndGhlYWQnKTtcblx0XHRjb25zdCAkdHJUaDogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJHRhYmxlXG5cdFx0XHQuZmluZCgndGJvZHk+dHI+dGgnKVxuXHRcdFx0LnBhcmVudCgpXG5cdFx0XHQuZXEoMCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXHRcdGNvbnN0ICR0clRkOiBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD4gPSAkdGFibGUuZmluZCgndGJvZHk+dHI+dGQnKS5wYXJlbnQoKSBhcyBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD47XG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PiB8IEpRdWVyeTxIVE1MVGFibGVSb3dFbGVtZW50PiB8IG51bGwgPSAkdGhlYWQubGVuZ3RoXG5cdFx0XHQ/ICR0aGVhZFxuXHRcdFx0OiAkdHJUaC5sZW5ndGhcblx0XHRcdFx0PyAkdHJUaFxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0aWYgKCR0YXJnZXQgJiYgJHRyVGQubGVuZ3RoID49IDUpIHtcblx0XHRcdCR0YWJsZS5hZGRDbGFzcygnbXctc3RpY2t5LWhlYWRlcicpO1xuXHRcdFx0JHRhcmdldC5hZGRDbGFzcygndGhlYWQnKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge3N0aWNreVRhYmxlSGVhZGVyc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKHN0aWNreVRhYmxlSGVhZGVycyk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxxQkFBcUJBLE1BQVk7QUFDN0MsUUFBTUMsUUFBaUNDLEVBQUUsTUFBTTtBQUMvQ0QsUUFBTUUsS0FBSywyQkFBMkIsRUFBRUMsS0FBSyxDQUFDQyxRQUFnQkMsVUFBNkI7QUFDMUYsVUFBTUMsU0FBbUNMLEVBQUVJLEtBQUs7QUFDaEQsVUFBTUUsU0FBMENELE9BQU9KLEtBQUssT0FBTztBQUNuRSxVQUFNTSxRQUFxQ0YsT0FDekNKLEtBQUssYUFBYSxFQUNsQk8sT0FBTyxFQUNQQyxHQUFHLENBQUM7QUFDTixVQUFNQyxRQUFxQ0wsT0FBT0osS0FBSyxhQUFhLEVBQUVPLE9BQU87QUFDN0UsVUFBTUcsVUFBZ0ZMLE9BQU9NLFNBQzFGTixTQUNBQyxNQUFNSyxTQUNMTCxRQUNBO0FBQ0osUUFBSUksV0FBV0QsTUFBTUUsVUFBVSxHQUFHO0FBQ2pDUCxhQUFPUSxTQUFTLGtCQUFrQjtBQUNsQ0YsY0FBUUUsU0FBUyxPQUFPO0lBQ3pCO0VBQ0QsQ0FBQztBQUNGOztBQ2xCQWIsRUFBRUYsa0JBQWtCOyIsCiAgIm5hbWVzIjogWyJzdGlja3lUYWJsZUhlYWRlcnMiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImVhY2giLCAiX2luZGV4IiwgInRhYmxlIiwgIiR0YWJsZSIsICIkdGhlYWQiLCAiJHRyVGgiLCAicGFyZW50IiwgImVxIiwgIiR0clRkIiwgIiR0YXJnZXQiLCAibGVuZ3RoIiwgImFkZENsYXNzIl0KfQo=
