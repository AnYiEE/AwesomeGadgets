/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/SkinCitizen}
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

// dist/SkinCitizen/SkinCitizen.js
//! src/SkinCitizen/SkinCitizen.ts
mw.loader.using(["mediawiki.util"]).then(() => {
  if (mw.config.get("wgPageName") === "有兽档案馆:首页") {
    const searchTrigger = document.getElementById("skin-citizen-search-trigger");
    if (searchTrigger) {
      searchTrigger.addEventListener("click", () => {
        const event = new Event("input", {
          bubbles: true,
          composed: true
        });
        const checkbox = document.getElementById("citizen-search__checkbox");
        checkbox.checked = true;
        checkbox.dispatchEvent(event);
      });
    }
  }
}).catch((error) => {
  return console.error(error);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NraW5DaXRpemVuL1NraW5DaXRpemVuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vU2tpbkNpdGl6ZW4ubGVzcyc7XG5cbm13LmxvYWRlclxuXHQudXNpbmcoWydtZWRpYXdpa2kudXRpbCddKVxuXHQudGhlbigoKSA9PiB7XG5cdFx0LyogVHJpZ2dlciBzZWFyY2ggYm94IHdoZW4gY2xpY2sgb24gdGhlIGZha2Ugc2VhcmNoIGJ1dHRvbiBvbiBtYWluIHBhZ2UgKi9cblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSAn5pyJ5YW95qGj5qGI6aaGOummlumhtScpIHtcblx0XHRcdGNvbnN0IHNlYXJjaFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbi1jaXRpemVuLXNlYXJjaC10cmlnZ2VyJyk7XG5cdFx0XHRpZiAoc2VhcmNoVHJpZ2dlcikge1xuXHRcdFx0XHRzZWFyY2hUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGV2ZW50OiBFdmVudCA9IG5ldyBFdmVudCgnaW5wdXQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KTtcblx0XHRcdFx0XHRjb25zdCBjaGVja2JveDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0XHRcdFx0J2NpdGl6ZW4tc2VhcmNoX19jaGVja2JveCdcblx0XHRcdFx0XHQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0Y2hlY2tib3guZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxHQUFHQyxPQUNEQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFDeEJDLEtBQUssTUFBTTtBQUVYLE1BQUlILEdBQUdJLE9BQU9DLElBQUksWUFBWSxNQUFNLFlBQVk7QUFDL0MsVUFBTUMsZ0JBQWdCQyxTQUFTQyxlQUFlLDZCQUE2QjtBQUMzRSxRQUFJRixlQUFlO0FBQ2xCQSxvQkFBY0csaUJBQWlCLFNBQVMsTUFBTTtBQUM3QyxjQUFNQyxRQUFlLElBQUlDLE1BQU0sU0FBUztVQUFDQyxTQUFTO1VBQU1DLFVBQVU7UUFBSSxDQUFDO0FBQ3ZFLGNBQU1DLFdBQTZCUCxTQUFTQyxlQUMzQywwQkFDRDtBQUNBTSxpQkFBU0MsVUFBVTtBQUNuQkQsaUJBQVNFLGNBQWNOLEtBQUs7TUFDN0IsQ0FBQztJQUNGO0VBQ0Q7QUFDRCxDQUFDLEVBQ0FPLE1BQU9DLFdBQVU7QUFDakIsU0FBT0MsUUFBUUQsTUFBTUEsS0FBSztBQUMzQixDQUFDOyIsCiAgIm5hbWVzIjogWyJtdyIsICJsb2FkZXIiLCAidXNpbmciLCAidGhlbiIsICJjb25maWciLCAiZ2V0IiwgInNlYXJjaFRyaWdnZXIiLCAiZG9jdW1lbnQiLCAiZ2V0RWxlbWVudEJ5SWQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJFdmVudCIsICJidWJibGVzIiwgImNvbXBvc2VkIiwgImNoZWNrYm94IiwgImNoZWNrZWQiLCAiZGlzcGF0Y2hFdmVudCIsICJjYXRjaCIsICJlcnJvciIsICJjb25zb2xlIl0KfQo=
