/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/67345361}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant}
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

// dist/PreviewWithVariant/PreviewWithVariant.js
//! src/PreviewWithVariant/PreviewWithVariant.ts
mw.hook("wikipage.editform").add(($editForm) => {
  if (mw.config.get("wgPreviewWithVariantInitialized")) {
    return;
  }
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (mw.config.get("wgPageContentModel") !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set("wgPreviewWithVariantInitialized", true);
  const VARIANTS = [{
    data: "zh",
    label: window.wgULS("不转换", "不轉換")
  }, {
    data: "zh-hans",
    label: "简体"
  }, {
    data: "zh-hant",
    label: "繁體"
  }, {
    data: "zh-cn",
    label: "中国大陆简体"
  }, {
    data: "zh-hk",
    label: "中國香港繁體"
  }, {
    data: "zh-mo",
    label: "中國澳門繁體"
  }, {
    data: "zh-my",
    label: "马来西亚简体"
  }, {
    data: "zh-sg",
    label: "新加坡简体"
  }, {
    data: "zh-tw",
    label: "中國臺灣繁體"
  }];
  const uriVariant = mw.util.getParamValue("variant");
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: Boolean(uriVariant)
  });
  const dropdown = new OO.ui.DropdownWidget({
    $overlay: true,
    disabled: !checkbox.isSelected(),
    menu: {
      items: VARIANTS.map(({
        data,
        label
      }) => {
        return new OO.ui.MenuOptionWidget({
          data,
          label
        });
      })
    }
  });
  dropdown.getMenu().selectItemByData(mw.config.get("wgUserVariant") || uriVariant || mw.user.options.get("variant"));
  checkbox.on("change", (selected) => {
    dropdown.setDisabled(!selected);
  });
  const getSelectedVariant = () => {
    if (!checkbox.isSelected()) {
      return;
    }
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem ? selectedItem.getData() : void 0;
  };
  const manipulateActionUrl = () => {
    const selectedVariant = getSelectedVariant();
    const originalAction = $editForm.attr("action");
    if (selectedVariant && originalAction) {
      $editForm.attr("action", new mw.Uri(originalAction).extend({
        variant: selectedVariant
      }).getRelativePath());
    }
  };
  const manipulateVariantConfig = () => {
    mw.config.set("wgUserVariant", getSelectedVariant() || mw.user.options.get("variant"));
  };
  $editForm.find("input[name=wpPreview]").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
  $templateSandboxPreview.on("click", manipulateActionUrl);
  dropdown.getMenu().on("select", manipulateVariantConfig);
  const checkboxField = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: window.wgULS("预览字词转换", "預覽字詞轉換")
  });
  const dropdownField = new OO.ui.FieldLayout(dropdown, {
    align: "top",
    label: window.wgULS("使用该语言变体显示预览：", "使用該語言變體顯示預覽："),
    invisibleLabel: true
  });
  $layout.append($("<div>").attr("id", "pwv-area").append(checkboxField.$element, dropdownField.$element));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cdC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdhbnQgdG8gcHJldmlldyBhIHBhZ2Ugd2l0aCBhIG5vbi13aWtpdGV4dCBtb2R1bGVcblx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGxheW91dDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRpZiAoISRsYXlvdXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIHRydWUpO1xuXHRjb25zdCBWQVJJQU5UUzoge1xuXHRcdGRhdGE6IHN0cmluZztcblx0XHRsYWJlbDogc3RyaW5nO1xuXHR9W10gPSBbXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poJyxcblx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRcdGxhYmVsOiAn566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRcdGxhYmVsOiAn57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1teScsXG5cdFx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9LFxuXHRdO1xuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHR9KTtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRkaXNhYmxlZDogIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSxcblx0XHRtZW51OiB7XG5cdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSxcblx0XHR9LFxuXHR9KTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpIHx8IHVyaVZhcmlhbnQgfHwgbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpKTtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdH0pO1xuXHRjb25zdCBnZXRTZWxlY3RlZFZhcmlhbnQgPSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlQWN0aW9uVXJsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0Y29uc3Qgb3JpZ2luYWxBY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlZGl0Rm9ybS5hdHRyKCdhY3Rpb24nKTtcblx0XHRpZiAoc2VsZWN0ZWRWYXJpYW50ICYmIG9yaWdpbmFsQWN0aW9uKSB7XG5cdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0J2FjdGlvbicsXG5cdFx0XHRcdG5ldyBtdy5Vcmkob3JpZ2luYWxBY3Rpb24pXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblx0JGVkaXRGb3JtXG5cdFx0LmZpbmQoJ2lucHV0W25hbWU9d3BQcmV2aWV3XScpXG5cdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyk7XG5cdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mihOiniOWtl+ivjei9rOaNoicsICfpoJDopr3lrZfoqZ7ovYnmj5snKSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duRmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkRyb3Bkb3duV2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wZG93biwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0aW52aXNpYmxlTGFiZWw6IHRydWUsXG5cdH0pO1xuXHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsR0FBR0MsS0FBSyxtQkFBbUIsRUFBRUMsSUFBS0MsZUFBb0I7QUFFckQsTUFBSUgsR0FBR0ksT0FBT0MsSUFBSSxpQ0FBaUMsR0FBRztBQUNyRDtFQUNEO0FBQ0EsUUFBTUMsMEJBQWtDSCxVQUFVSSxLQUFLLHdDQUF3QztBQUcvRixNQUFJUCxHQUFHSSxPQUFPQyxJQUFJLG9CQUFvQixNQUFNLGNBQWMsQ0FBQ0Msd0JBQXdCRSxRQUFRO0FBQzFGO0VBQ0Q7QUFDQSxRQUFNQyxVQUFrQk4sVUFBVUksS0FBSyx5Q0FBeUM7QUFDaEYsTUFBSSxDQUFDRSxRQUFR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MEMsZ0JBQWdCO0VBQ2pCLENBQUM7QUFDRGhELFVBQVFpRCxPQUFPQyxFQUFFLE9BQU8sRUFBRVosS0FBSyxNQUFNLFVBQVUsRUFBRVcsT0FBT0wsY0FBY08sVUFBVUosY0FBY0ksUUFBUSxDQUFDO0FBQ3hHLENBQUM7IiwKICAibmFtZXMiOiBbIm13IiwgImhvb2siLCAiYWRkIiwgIiRlZGl0Rm9ybSIsICJjb25maWciLCAiZ2V0IiwgIiR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3IiwgImZpbmQiLCAibGVuZ3RoIiwgIiRsYXlvdXQiLCAic2V0IiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgInVyaVZhcmlhbnQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiQm9vbGVhbiIsICJkcm9wZG93biIsICJEcm9wZG93bldpZGdldCIsICIkb3ZlcmxheSIsICJkaXNhYmxlZCIsICJpc1NlbGVjdGVkIiwgIm1lbnUiLCAiaXRlbXMiLCAibWFwIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAib3B0aW9ucyIsICJvbiIsICJzZXREaXNhYmxlZCIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgInNlbGVjdGVkVmFyaWFudCIsICJvcmlnaW5hbEFjdGlvbiIsICJhdHRyIiwgIlVyaSIsICJleHRlbmQiLCAidmFyaWFudCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgImFwcGVuZCIsICIkIiwgIiRlbGVtZW50Il0KfQo=
