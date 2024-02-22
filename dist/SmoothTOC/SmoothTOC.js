/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/SmoothTOC}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/SmoothTOC/SmoothTOC.js
//! src/SmoothTOC/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var smoothTOC = () => {
  const checkA11yKey = (event) => {
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") {
      return true;
    }
    return false;
  };
  const eventListener = ($element, event) => {
    if (checkA11yKey(event)) {
      return;
    }
    const herf = $element.attr("href");
    if (!herf) {
      return;
    }
    const anchorOffset = $(herf).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget.scrollTop)(mw.config.get("skin") === "vector" ? "".concat(anchorOffset.top, "px") : "".concat(anchorOffset.top - 60, "px"));
  };
  const smoothToc = () => {
    const $body = $("body");
    $body.find("#toc a, #p-toc a, .sidebar-toc-link").each((_index, element) => {
      const $element = $(element);
      $element.on("click", (event) => {
        eventListener($element, event);
      });
      $element.on("keydown", (event) => {
        eventListener($element, event);
      });
    });
  };
  setTimeout(smoothToc, 0);
};
//! src/SmoothTOC/SmoothTOC.ts
$(smoothTOC);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Ntb290aFRPQy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Ntb290aFRPQy9TbW9vdGhUT0MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7c2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3Qgc21vb3RoVE9DID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0ExMXlLZXkgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnksIGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoY2hlY2tBMTF5S2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBoZXJmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFoZXJmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hvck9mZnNldDogSlF1ZXJ5LkNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkID0gJChoZXJmKS5vZmZzZXQoKTtcblx0XHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNjcm9sbFRvcChtdy5jb25maWcuZ2V0KCdza2luJykgPT09ICd2ZWN0b3InID8gYCR7YW5jaG9yT2Zmc2V0LnRvcH1weGAgOiBgJHthbmNob3JPZmZzZXQudG9wIC0gNjB9cHhgKTtcblx0fTtcblx0Y29uc3Qgc21vb3RoVG9jID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcjdG9jIGEsICNwLXRvYyBhLCAuc2lkZWJhci10b2MtbGluaycpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50TGlzdGVuZXIoJGVsZW1lbnQsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnRMaXN0ZW5lcigkZWxlbWVudCwgZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cdHNldFRpbWVvdXQoc21vb3RoVG9jLCAwKTtcbn07XG4iLCAiaW1wb3J0IHtzbW9vdGhUT0N9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChzbW9vdGhUT0MpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRWpCLElBQU1DLFlBQVlBLE1BQVk7QUFDcEMsUUFBTUMsZUFBZ0JDLFdBQTREO0FBQ2pGLFFBQUlBLE1BQU1DLFNBQVMsYUFBYUQsTUFBTUUsUUFBUSxXQUFXRixNQUFNRSxRQUFRLEtBQUs7QUFDM0UsYUFBTztJQUNSO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTUMsZ0JBQWdCQSxDQUFDQyxVQUFrQkosVUFBeUQ7QUFDakcsUUFBSUQsYUFBYUMsS0FBSyxHQUFHO0FBQ3hCO0lBQ0Q7QUFDQSxVQUFNSyxPQUEyQkQsU0FBU0UsS0FBSyxNQUFNO0FBQ3JELFFBQUksQ0FBQ0QsTUFBTTtBQUNWO0lBQ0Q7QUFDQSxVQUFNRSxlQUErQ0MsRUFBRUgsSUFBSSxFQUFFSSxPQUFPO0FBQ3BFLFFBQUksQ0FBQ0YsY0FBYztBQUNsQjtJQUNEO0FBQ0FQLFVBQU1VLGVBQWU7QUFDckIsS0FBQSxHQUFBZCxrQkFBQWUsV0FBVUMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNLE1BQU0sV0FBQSxHQUFBQyxPQUFjUixhQUFhUyxLQUFHLElBQUEsSUFBQSxHQUFBRCxPQUFVUixhQUFhUyxNQUFNLElBQUUsSUFBQSxDQUFJO0VBQ3RHO0FBQ0EsUUFBTUMsWUFBWUEsTUFBWTtBQUM3QixVQUFNQyxRQUFpQ1YsRUFBRSxNQUFNO0FBQy9DVSxVQUFNQyxLQUFLLHFDQUFxQyxFQUFFQyxLQUFLLENBQUNDLFFBQWdCQyxZQUErQjtBQUN0RyxZQUFNbEIsV0FBbUJJLEVBQUVjLE9BQU87QUFDbENsQixlQUFTbUIsR0FBRyxTQUFVdkIsV0FBbUM7QUFDeERHLHNCQUFjQyxVQUFVSixLQUFLO01BQzlCLENBQUM7QUFDREksZUFBU21CLEdBQUcsV0FBWXZCLFdBQXFDO0FBQzVERyxzQkFBY0MsVUFBVUosS0FBSztNQUM5QixDQUFDO0lBQ0YsQ0FBQztFQUNGO0FBQ0F3QixhQUFXUCxXQUFXLENBQUM7QUFDeEI7O0FDbkNBVCxFQUFFVixTQUFTOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInNtb290aFRPQyIsICJjaGVja0ExMXlLZXkiLCAiZXZlbnQiLCAidHlwZSIsICJrZXkiLCAiZXZlbnRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJoZXJmIiwgImF0dHIiLCAiYW5jaG9yT2Zmc2V0IiwgIiQiLCAib2Zmc2V0IiwgInByZXZlbnREZWZhdWx0IiwgInNjcm9sbFRvcCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNvbmNhdCIsICJ0b3AiLCAic21vb3RoVG9jIiwgIiRib2R5IiwgImZpbmQiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJvbiIsICJzZXRUaW1lb3V0Il0KfQo=
