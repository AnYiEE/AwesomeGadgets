/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Enterprisey/search-shortcuts.js}
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/search-shortcuts.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SearchShortcuts}
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

// dist/SearchShortcuts/SearchShortcuts.js
//! src/SearchShortcuts/modules/util/keydownListener.ts
var keydownListener = ($searchInput) => {
  var _$searchInput$val;
  const inputValue = (_$searchInput$val = $searchInput.val()) === null || _$searchInput$val === void 0 ? void 0 : _$searchInput$val.trim();
  if (!inputValue || !/^\{\{[^{}]+}}$/.test(inputValue)) {
    return;
  }
  if (inputValue.startsWith("{{#")) {
    if (inputValue.startsWith("{{#invoke:")) {
      $searchInput.val(inputValue.replace("{{#invoke:", "Module:").replace(/\s*\|.*/, "").replace("}}", ""));
    } else {
      $searchInput.val(inputValue.replace("{{#", "H:MW#").replace(/\s*\|.*/, "").replace("}}", ""));
    }
  } else {
    $searchInput.val(inputValue.replace("{{", "Template:").replace(/\s*\|.*/, "").replace("}}", ""));
  }
};
//! src/SearchShortcuts/modules/addKeyDownListener.ts
var addKeyDownListener = ($searchInput) => {
  $searchInput.on("keydown", () => {
    keydownListener($searchInput);
  });
};
//! src/SearchShortcuts/modules/constant.ts
var SEARCH_INPUT_ELEMENT_SELECTOR = "#searchInput";
//! src/SearchShortcuts/modules/getSearchInput.ts
var getSearchInput = ($body) => {
  const $searchInput = $body.find(SEARCH_INPUT_ELEMENT_SELECTOR);
  return $searchInput;
};
//! src/SearchShortcuts/SearchShortcuts.ts
$(function searchShortcuts() {
  const $body = $("body");
  const $searchInput = getSearchInput($body);
  addKeyDownListener($searchInput);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL3V0aWwva2V5ZG93bkxpc3RlbmVyLnRzIiwgInNyYy9TZWFyY2hTaG9ydGN1dHMvbW9kdWxlcy9hZGRLZXlEb3duTGlzdGVuZXIudHMiLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TZWFyY2hTaG9ydGN1dHMvbW9kdWxlcy9nZXRTZWFyY2hJbnB1dC50cyIsICJzcmMvU2VhcmNoU2hvcnRjdXRzL1NlYXJjaFNob3J0Y3V0cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3Qga2V5ZG93bkxpc3RlbmVyID0gKCRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IGlucHV0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRzZWFyY2hJbnB1dC52YWwoKT8udHJpbSgpO1xuXHRpZiAoIWlucHV0VmFsdWUgfHwgIS9eXFx7XFx7W157fV0rfX0kLy50ZXN0KGlucHV0VmFsdWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aCgne3sjJykpIHtcblx0XHRpZiAoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKCd7eyNpbnZva2U6JykpIHtcblx0XHRcdCRzZWFyY2hJbnB1dC52YWwoXG5cdFx0XHRcdGlucHV0VmFsdWVcblx0XHRcdFx0XHQucmVwbGFjZSgne3sjaW52b2tlOicsICdNb2R1bGU6Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKlxcfC4qLywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ319JywgJycpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2VhcmNoSW5wdXQudmFsKFxuXHRcdFx0XHRpbnB1dFZhbHVlXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ3t7IycsICdIOk1XIycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypcXHwuKi8sICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd9fScsICcnKVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0JHNlYXJjaElucHV0LnZhbChcblx0XHRcdGlucHV0VmFsdWVcblx0XHRcdFx0LnJlcGxhY2UoJ3t7JywgJ1RlbXBsYXRlOicpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8LiovLCAnJylcblx0XHRcdFx0LnJlcGxhY2UoJ319JywgJycpXG5cdFx0KTtcblx0fVxufTtcblxuZXhwb3J0IHtrZXlkb3duTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7a2V5ZG93bkxpc3RlbmVyfSBmcm9tICcuL3V0aWwva2V5ZG93bkxpc3RlbmVyJztcblxuY29uc3QgYWRkS2V5RG93bkxpc3RlbmVyID0gKCRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCRzZWFyY2hJbnB1dC5vbigna2V5ZG93bicsICgpOiB2b2lkID0+IHtcblx0XHRrZXlkb3duTGlzdGVuZXIoJHNlYXJjaElucHV0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEtleURvd25MaXN0ZW5lcn07XG4iLCAiY29uc3QgU0VBUkNIX0lOUFVUX0VMRU1FTlRfU0VMRUNUT1I6IHN0cmluZyA9ICcjc2VhcmNoSW5wdXQnO1xuXG5leHBvcnQge1NFQVJDSF9JTlBVVF9FTEVNRU5UX1NFTEVDVE9SfTtcbiIsICJpbXBvcnQge1NFQVJDSF9JTlBVVF9FTEVNRU5UX1NFTEVDVE9SfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZ2V0U2VhcmNoSW5wdXQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFNFQVJDSF9JTlBVVF9FTEVNRU5UX1NFTEVDVE9SKTtcblxuXHRyZXR1cm4gJHNlYXJjaElucHV0O1xufTtcblxuZXhwb3J0IHtnZXRTZWFyY2hJbnB1dH07XG4iLCAiaW1wb3J0IHthZGRLZXlEb3duTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRLZXlEb3duTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRTZWFyY2hJbnB1dH0gZnJvbSAnLi9tb2R1bGVzL2dldFNlYXJjaElucHV0JztcblxuJChmdW5jdGlvbiBzZWFyY2hTaG9ydGN1dHMoKTogdm9pZCB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSBnZXRTZWFyY2hJbnB1dCgkYm9keSk7XG5cblx0YWRkS2V5RG93bkxpc3RlbmVyKCRzZWFyY2hJbnB1dCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxrQkFBbUJDLGtCQUFpRDtBQUFBLE1BQUFDO0FBQ3pFLFFBQU1DLGNBQUFELG9CQUFpQ0QsYUFBYUcsSUFBSSxPQUFBLFFBQUFGLHNCQUFBLFNBQUEsU0FBakJBLGtCQUFvQkcsS0FBSztBQUNoRSxNQUFJLENBQUNGLGNBQWMsQ0FBQyxpQkFBaUJHLEtBQUtILFVBQVUsR0FBRztBQUN0RDtFQUNEO0FBRUEsTUFBSUEsV0FBV0ksV0FBVyxLQUFLLEdBQUc7QUFDakMsUUFBSUosV0FBV0ksV0FBVyxZQUFZLEdBQUc7QUFDeENOLG1CQUFhRyxJQUNaRCxXQUNFSyxRQUFRLGNBQWMsU0FBUyxFQUMvQkEsUUFBUSxXQUFXLEVBQUUsRUFDckJBLFFBQVEsTUFBTSxFQUFFLENBQ25CO0lBQ0QsT0FBTztBQUNOUCxtQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxPQUFPLE9BQU8sRUFDdEJBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLE1BQU0sRUFBRSxDQUNuQjtJQUNEO0VBQ0QsT0FBTztBQUNOUCxpQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxNQUFNLFdBQVcsRUFDekJBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLE1BQU0sRUFBRSxDQUNuQjtFQUNEO0FBQ0Q7O0FDNUJBLElBQU1DLHFCQUFzQlIsa0JBQWlEO0FBQzVFQSxlQUFhUyxHQUFHLFdBQVcsTUFBWTtBQUN0Q1Ysb0JBQWdCQyxZQUFZO0VBQzdCLENBQUM7QUFDRjs7QUNOQSxJQUFNVSxnQ0FBd0M7O0FDRTlDLElBQU1DLGlCQUFrQkMsV0FBNkQ7QUFDcEYsUUFBTVosZUFBeUNZLE1BQU1DLEtBQXVCSCw2QkFBNkI7QUFFekcsU0FBT1Y7QUFDUjs7QUNIQWMsRUFBRSxTQUFTQyxrQkFBd0I7QUFDbEMsUUFBTUgsUUFBaUNFLEVBQUUsTUFBTTtBQUMvQyxRQUFNZCxlQUF5Q1csZUFBZUMsS0FBSztBQUVuRUoscUJBQW1CUixZQUFZO0FBQ2hDLENBQUM7IiwKICAibmFtZXMiOiBbImtleWRvd25MaXN0ZW5lciIsICIkc2VhcmNoSW5wdXQiLCAiXyRzZWFyY2hJbnB1dCR2YWwiLCAiaW5wdXRWYWx1ZSIsICJ2YWwiLCAidHJpbSIsICJ0ZXN0IiwgInN0YXJ0c1dpdGgiLCAicmVwbGFjZSIsICJhZGRLZXlEb3duTGlzdGVuZXIiLCAib24iLCAiU0VBUkNIX0lOUFVUX0VMRU1FTlRfU0VMRUNUT1IiLCAiZ2V0U2VhcmNoSW5wdXQiLCAiJGJvZHkiLCAiZmluZCIsICIkIiwgInNlYXJjaFNob3J0Y3V0cyJdCn0K
