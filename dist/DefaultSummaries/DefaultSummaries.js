/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-defaultsummaries.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/DefaultSummaries}
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

// dist/DefaultSummaries/DefaultSummaries.js
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
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), wgULS("修正语法错误", "修正語法錯誤"), wgULS("修正错别字", "修正錯別字"), wgULS("修正格式", "修正格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试编辑", "移除測試編輯"), wgULS("移除未经解释的内容移除", "移除未經解釋的內容移除")];
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整内部链接", "调整內部連結"), wgULS("调整外部链接", "調整外部連結"), wgULS("调整格式", "調整格式"), wgULS("调整分类", "調整分類"), wgULS("删除无来源内容", "刪除無來源內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
//! src/DefaultSummaries/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/DefaultSummaries/modules/util/generateSummaryDropdown.ts
var generateMenuOptionWidget = (label) => {
  return new OO.ui.MenuOptionWidget({
    label
  });
};
var addOptionsToDropdown = (dropdownWidget, summaries) => {
  const menuOptionWidgets = [];
  var _iterator = _createForOfIteratorHelper(summaries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const summary = _step.value;
      menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  dropdownWidget.getMenu().addItems(menuOptionWidgets);
};
var onSelectCallback = (optionWidget, $wpSummary) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  const customSummary = optionWidget.getLabel();
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
var generateSummaryDropdown = ($wpSummary) => {
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (WG_NAMESPACE_NUMBER === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (WG_NAMESPACE_NUMBER % 2 !== 0 && WG_NAMESPACE_NUMBER !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (WG_NAMESPACE_NUMBER === 302) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var processVisualEditor = () => {
  if (mw.config.get("wgDefaultSummariesInstalled")) {
    return;
  }
  mw.config.set("wgDefaultSummariesInstalled", true);
  const {
    target
  } = ve.init;
  const {
    $saveOptions
  } = target.saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  $saveOptions.before($dropdowns);
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($body) => {
  if (mw.config.get("wgDefaultSummariesInstalled")) {
    return;
  }
  mw.config.set("wgDefaultSummariesInstalled", true);
  const $editCheckboxes = $body.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($body.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  $editCheckboxes.before($dropdowns);
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries($body) {
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor($body);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGVmYXVsdFN1bW1hcmllcygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCRib2R5KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+aWsOmhtemdoicsICfmlrDpoIHpnaInKSxcblx0d2dVTFMoJ+S/ruato+ivreazlemUmeivrycsICfkv67mraPoqp7ms5XpjK/oqqQnKSxcblx0d2dVTFMoJ+S/ruato+mUmeWIq+WtlycsICfkv67mraPpjK/liKXlrZcnKSxcblx0d2dVTFMoJ+S/ruato+agvOW8jycsICfkv67mraPmoLzlvI8nKSxcblx0d2dVTFMoJ+enu+mZpOegtOWdjycsICfnp7vpmaTnoLTlo54nKSxcblx0d2dVTFMoJ+enu+mZpOa1i+ivlee8lui+kScsICfnp7vpmaTmuKzoqabnt6jovK8nKSxcblx0d2dVTFMoJ+enu+mZpOacque7j+ino+mHiueahOWGheWuueenu+mZpCcsICfnp7vpmaTmnKrntpPop6Pph4vnmoTlhaflrrnnp7vpmaQnKSxcbl07XG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTlhoXpg6jpk77mjqUnLCAn6LCD5pW05YWn6YOo6YCj57WQJyksXG5cdHdnVUxTKCfosIPmlbTlpJbpg6jpk77mjqUnLCAn6Kq/5pW05aSW6YOo6YCj57WQJyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5dO1xuY29uc3QgVEFMS1BBR0VfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+WbnuWkjScsICflm57opoYnKSxcblx0d2dVTFMoJ+ivhOiuuicsICfoqZXoq5YnKSxcblx0d2dVTFMoJ+aEj+ingScsICfmhI/oposnKSxcblx0d2dVTFMoJ+ivt+axgicsICfoq4vmsYInKSxcbl07XG5cbmV4cG9ydCB7Q09NTU9OX1NVTU1BUklFU19MQUJFTCwgQ09NTU9OX1NVTU1BUklFUywgQVJUSUNMRV9TVU1NQVJJRVMsIFRBTEtQQUdFX1NVTU1BUklFU307XG4iLCAiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059O1xuIiwgImltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuY29uc3QgYWRkT3B0aW9uc1RvRHJvcGRvd24gPSAoZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0LCBzdW1tYXJpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGNvbnN0IG1lbnVPcHRpb25XaWRnZXRzOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHN1bW1hcnkgb2Ygc3VtbWFyaWVzKSB7XG5cdFx0bWVudU9wdGlvbldpZGdldHNbbWVudU9wdGlvbldpZGdldHMubGVuZ3RoXSA9IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldChzdW1tYXJ5KTsgLy8gUmVwbGFjZSBgbWVudU9wdGlvbldpZGdldHMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuY29uc3Qgb25TZWxlY3RDYWxsYmFjayA9IChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeTogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdGNvbnN0IGN1c3RvbVN1bW1hcnk6IHN0cmluZyA9IG9wdGlvbldpZGdldC5nZXRMYWJlbCgpIGFzIHN0cmluZztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHR9KTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgJSAyICE9PSAwICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAzMDIpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IHt0YXJnZXR9ID0gdmUuaW5pdDtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSB0YXJnZXQuc2F2ZURpYWxvZyBhcyBKUXVlcnk7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0IGFzIEpRdWVyeSk7XG5cblx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd25zKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpKTtcblxuXHQkZHJvcGRvd25zLmNzcyh7XG5cdFx0J3BhZGRpbmctYm90dG9tJzogJzFlbScsXG5cdFx0d2lkdGg6ICc0OCUnLFxuXHR9KTtcblx0JGVkaXRDaGVja2JveGVzLmJlZm9yZSgkZHJvcGRvd25zKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQU07RUFBQ0M7QUFBSyxJQUFJQztBQUVoQixJQUFNQyx5QkFBaUNGLE1BQU0sVUFBVSxRQUFRO0FBRS9ELElBQU1HLG1CQUE2QixDQUNsQ0gsTUFBTSxPQUFPLEtBQUssR0FDbEJBLE1BQU0sVUFBVSxRQUFRLEdBQ3hCQSxNQUFNLFNBQVMsT0FBTyxHQUN0QkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFVBQVUsUUFBUSxHQUN4QkEsTUFBTSxlQUFlLGFBQWEsQ0FBQTtBQUVuQyxJQUFNSSxvQkFBOEIsQ0FDbkNKLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxVQUFVLFFBQVEsR0FDeEJBLE1BQU0sVUFBVSxRQUFRLEdBQ3hCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sV0FBVyxTQUFTLENBQUE7QUFFM0IsSUFBTUsscUJBQStCLENB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LGlCQUFpQjtBQUM1RCxNQUFJLENBQUNELGdCQUFnQmxDLFFBQVE7QUFDNUI7RUFDRDtBQUVBLFFBQU00QixhQUFxQlgsd0JBQXdCZ0IsTUFBTUUsS0FBSyx1QkFBdUIsQ0FBQztBQUV0RlAsYUFBV1EsSUFBSTtJQUNkLGtCQUFrQjtJQUNsQkMsT0FBTztFQUNSLENBQUM7QUFDREgsa0JBQWdCSCxPQUFPSCxVQUFVO0FBQ2xDOztBTG5CQSxNQUFBLEdBQUs1RCxrQkFBQXNFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxpQkFBaUJQLE9BQXNDO0FBQ25GeEQsS0FBR2dFLEtBQUssbUJBQW1CLEVBQUVDLElBQUksTUFBWTtBQUM1Q1Ysc0JBQWtCQyxLQUFLO0VBQ3hCLENBQUM7QUFFRHhELEtBQUdnRSxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRyQix3QkFBb0I7RUFDckIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAid2dVTFMiLCAid2luZG93IiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm9uIiwgIiRlbGVtZW50IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAic2V0IiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgIiRzYXZlT3B0aW9ucyIsICJzYXZlRGlhbG9nIiwgIiRkcm9wZG93bnMiLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAiYmVmb3JlIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRib2R5IiwgIiRlZGl0Q2hlY2tib3hlcyIsICJmaW5kIiwgImNzcyIsICJ3aWR0aCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZGVmYXVsdFN1bW1hcmllcyIsICJob29rIiwgImFkZCJdCn0K
