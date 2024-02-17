/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://en.wikipedia.org/wiki/User:Enterprisey/search-shortcuts.js>
 * @base <https://en.wikipedia.org/wiki/User:Guarapiranga/search-shortcuts.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/SearchShortcuts>
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

$(function searchShortcuts() {
  var $searchInput = $('#searchInput');
  var searchShortcutsMain = function searchShortcutsMain() {
    var $searchInputVal = $searchInput.val();
    if (!$searchInputVal) {
      return;
    }
    var $searchInputValPure = $searchInputVal.trim();
    if (!/^\{\{[^{}]+}}$/.test($searchInputValPure)) {
      return;
    }
    if ($searchInputValPure.startsWith('{{#')) {
      if ($searchInputValPure.startsWith('{{#invoke:')) {
        $searchInput.val($searchInputVal.replace('{{#invoke:', 'Module:').replace(/\s*\|.*/, '').replace('}}', ''));
      } else {
        $searchInput.val($searchInputVal.replace('{{#', 'H:MW#').replace(/\s*\|.*/, '').replace('}}', ''));
      }
    } else {
      $searchInput.val($searchInputVal.replace('{{', 'Template:').replace(/\s*\|.*/, '').replace('}}', ''));
    }
  };
  $searchInput.on('keydown', searchShortcutsMain);
});
/* </nowiki> */
