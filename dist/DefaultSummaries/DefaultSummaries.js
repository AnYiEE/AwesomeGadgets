/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-defaultsummaries.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/DefaultSummaries}
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
//! src/DefaultSummaries/options.json
var configKey = "gadget-DefaultSummaries__Initialized";
var dropdownId = "editform_default_summary";
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
  const {
    wgNamespaceNumber
  } = mw.config.get();
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.setElementId("".concat(dropdownId));
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (wgNamespaceNumber === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (wgNamespaceNumber === 118) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var processVisualEditor = ($body) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
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
  if ($body.find("#".concat(dropdownId)).length) {
    mw.config.set(configKey, true);
  } else {
    $saveOptions.before($dropdowns);
  }
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const $editCheckboxes = $editForm.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($editForm.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  if (!$editForm.find("#".concat(dropdownId)).length) {
    $editCheckboxes.before($dropdowns);
  }
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL0RlZmF1bHRTdW1tYXJpZXMudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRcIixcblx0XCJkcm9wZG93bklkXCI6IFwiZWRpdGZvcm1fZGVmYXVsdF9zdW1tYXJ5XCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5cbmNvbnN0IENPTU1PTl9TVU1NQVJJRVNfTEFCRUw6IHN0cmluZyA9IHdnVUxTKCfluLjnlKjnvJbovpHmkZjopoEnLCAn5bi455So57eo6Lyv5pGY6KaBJyk7XG5cbmNvbnN0IENPTU1PTl9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5paw6aG16Z2iJywgJ+aWsOmggemdoicpLFxuXHR3Z1VMUygn5L+u5q2j6K+t5rOV6ZSZ6K+vJywgJ+S/ruato+iqnuazlemMr+iqpCcpLFxuXHR3Z1VMUygn5L+u5q2j6ZSZ5Yir5a2XJywgJ+S/ruato+mMr+WIpeWtlycpLFxuXHR3Z1VMUygn5L+u5q2j5qC85byPJywgJ+S/ruato+agvOW8jycpLFxuXHR3Z1VMUygn56e76Zmk56C05Z2PJywgJ+enu+mZpOegtOWjnicpLFxuXHR3Z1VMUygn56e76Zmk5rWL6K+V57yW6L6RJywgJ+enu+mZpOa4rOippue3qOi8rycpLFxuXHR3Z1VMUygn56e76Zmk5pyq57uP6Kej6YeK55qE5YaF5a6556e76ZmkJywgJ+enu+mZpOacque2k+ino+mHi+eahOWFp+Wuueenu+mZpCcpLFxuXTtcbmNvbnN0IEFSVElDTEVfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+aJqeWGmeadoeebricsICfmk7Tlr6vmop3nm64nKSxcblx0d2dVTFMoJ+iwg+aVtOadpea6kCcsICfoqr/mlbTkvobmupAnKSxcblx0d2dVTFMoJ+iwg+aVtOWGhemDqOmTvuaOpScsICfosIPmlbTlhafpg6jpgKPntZAnKSxcblx0d2dVTFMoJ+iwg+aVtOWklumDqOmTvuaOpScsICfoqr/mlbTlpJbpg6jpgKPntZAnKSxcblx0d2dVTFMoJ+iwg+aVtOagvOW8jycsICfoqr/mlbTmoLzlvI8nKSxcblx0d2dVTFMoJ+iwg+aVtOWIhuexuycsICfoqr/mlbTliIbpoZ4nKSxcblx0d2dVTFMoJ+WIoOmZpOaXoOadpea6kOWGheWuuScsICfliKrpmaTnhKHkvobmupDlhaflrrknKSxcbl07XG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcblxuY29uc3QgZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0ID0gKGxhYmVsOiBzdHJpbmcpOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRsYWJlbCxcblx0fSk7XG59O1xuXG5jb25zdCBhZGRPcHRpb25zVG9Ecm9wZG93biA9IChkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQsIHN1bW1hcmllczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0Y29uc3QgbWVudU9wdGlvbldpZGdldHM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcblx0XHRtZW51T3B0aW9uV2lkZ2V0c1ttZW51T3B0aW9uV2lkZ2V0cy5sZW5ndGhdID0gZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0KHN1bW1hcnkpOyAvLyBSZXBsYWNlIGBtZW51T3B0aW9uV2lkZ2V0cy5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9uV2lkZ2V0cyk7XG59O1xuXG5jb25zdCBvblNlbGVjdENhbGxiYWNrID0gKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblx0Y29uc3QgY3VzdG9tU3VtbWFyeTogc3RyaW5nID0gb3B0aW9uV2lkZ2V0LmdldExhYmVsKCkgYXMgc3RyaW5nO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duID0gKCR3cFN1bW1hcnk6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogQ09NTU9OX1NVTU1BUklFU19MQUJFTCxcblx0fSk7XG5cblx0ZHJvcGRvd25XaWRnZXQuc2V0RWxlbWVudElkKGAke09QVElPTlMuZHJvcGRvd25JZH1gKTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmICh3Z05hbWVzcGFjZU51bWJlciAlIDIgIT09IDAgJiYgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMTE4KSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bldpZGdldC4kZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IHt0YXJnZXR9ID0gdmUuaW5pdDtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSB0YXJnZXQuc2F2ZURpYWxvZyBhcyBKUXVlcnk7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0IGFzIEpRdWVyeSk7XG5cblx0aWYgKCRib2R5LmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHQkc2F2ZU9wdGlvbnMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGVkaXRDaGVja2JveGVzOiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cblx0aWYgKCEkZWRpdEZvcm0uZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUVDLEtBQUssU0FBU0MsaUJBQWlCbkIsT0FBc0M7QUFDbkZSLEtBQUc0QixLQUFLLG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyREQsc0JBQWtCQyxTQUFTO0VBQzVCLENBQUM7QUFFRHJCLEtBQUc0QixLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckR0Qix3QkFBb0JDLEtBQUs7QUFHekJSLE9BQUc0QixLQUFLLHVCQUF1QixFQUFFQyxJQUFJLE1BQU07QUFDMUMsVUFBSTdCLEdBQUdDLE9BQU9DLElBQVloRCxTQUFTLEdBQUc7QUFDckM4QyxXQUFHQyxPQUFPUSxJQUFZdkQsV0FBVyxLQUFLO01BQ3ZDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiZHJvcGRvd25JZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIndnVUxTIiwgIndpbmRvdyIsICJDT01NT05fU1VNTUFSSUVTX0xBQkVMIiwgIkNPTU1PTl9TVU1NQVJJRVMiLCAiQVJUSUNMRV9TVU1NQVJJRVMiLCAiVEFMS1BBR0VfU1VNTUFSSUVTIiwgImdlbmVyYXRlTWVudU9wdGlvbldpZGdldCIsICJsYWJlbCIsICJPTyIsICJ1aSIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZE9wdGlvbnNUb0Ryb3Bkb3duIiwgImRyb3Bkb3duV2lkZ2V0IiwgInN1bW1hcmllcyIsICJtZW51T3B0aW9uV2lkZ2V0cyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAic3VtbWFyeSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJnZXRNZW51IiwgImFkZEl0ZW1zIiwgIm9uU2VsZWN0Q2FsbGJhY2siLCAib3B0aW9uV2lkZ2V0IiwgIiR3cFN1bW1hcnkiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidmFsIiwgImN1c3RvbVN1bW1hcnkiLCAiZ2V0TGFiZWwiLCAidHJpbSIsICJjb25jYXQiLCAidHJpZ2dlciIsICJnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkRyb3Bkb3duV2lkZ2V0IiwgInNldEVsZW1lbnRJZCIsICJvbiIsICIkZWxlbWVudCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgInNldCIsICJ0YXJnZXQiLCAidmUiLCAiaW5pdCIsICIkc2F2ZU9wdGlvbnMiLCAic2F2ZURpYWxvZyIsICIkZHJvcGRvd25zIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgImZpbmQiLCAiYmVmb3JlIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkZWRpdENoZWNrYm94ZXMiLCAiY3NzIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJkZWZhdWx0U3VtbWFyaWVzIiwgImhvb2siLCAiYWRkIl0KfQo=
