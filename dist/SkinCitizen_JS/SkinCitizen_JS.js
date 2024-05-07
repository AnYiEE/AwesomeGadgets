/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SkinCitizen_JS}
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

// dist/SkinCitizen_JS/SkinCitizen_JS.js
//! src/SkinCitizen_JS/SkinCitizen_JS.ts
mw.loader.using(["mediawiki.util"]).then(() => {
  if (mw.config.get("wgPageName") === "有兽档案馆:首页") {
    const searchTrigger = document.querySelector("#skin-citizen-search-trigger");
    if (searchTrigger) {
      searchTrigger.addEventListener("click", () => {
        const event = new Event("input", {
          bubbles: true,
          composed: true
        });
        const checkbox = document.querySelector("#citizen-search__checkbox");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NraW5DaXRpemVuX0pTL1NraW5DaXRpemVuX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtdy5sb2FkZXJcblx0LnVzaW5nKFsnbWVkaWF3aWtpLnV0aWwnXSlcblx0LnRoZW4oKCkgPT4ge1xuXHRcdC8qIFRyaWdnZXIgc2VhcmNoIGJveCB3aGVuIGNsaWNrIG9uIHRoZSBmYWtlIHNlYXJjaCBidXR0b24gb24gbWFpbiBwYWdlICovXG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSA9PT0gJ+acieWFveaho+ahiOmmhjrpppbpobUnKSB7XG5cdFx0XHRjb25zdCBzZWFyY2hUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW4tY2l0aXplbi1zZWFyY2gtdHJpZ2dlcicpO1xuXHRcdFx0aWYgKHNlYXJjaFRyaWdnZXIpIHtcblx0XHRcdFx0c2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBldmVudDogRXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0Jywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSk7XG5cdFx0XHRcdFx0Y29uc3QgY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdFx0JyNjaXRpemVuLXNlYXJjaF9fY2hlY2tib3gnXG5cdFx0XHRcdFx0KSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdFx0XHRcdGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGNoZWNrYm94LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XG5cdH0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsR0FBR0MsT0FDREMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQ3hCQyxLQUFLLE1BQU07QUFFWCxNQUFJSCxHQUFHSSxPQUFPQyxJQUFJLFlBQVksTUFBTSxZQUFZO0FBQy9DLFVBQU1DLGdCQUFnQkMsU0FBU0MsY0FBYyw4QkFBOEI7QUFDM0UsUUFBSUYsZUFBZTtBQUNsQkEsb0JBQWNHLGlCQUFpQixTQUFTLE1BQU07QUFDN0MsY0FBTUMsUUFBZSxJQUFJQyxNQUFNLFNBQVM7VUFBQ0MsU0FBUztVQUFNQyxVQUFVO1FBQUksQ0FBQztBQUN2RSxjQUFNQyxXQUE2QlAsU0FBU0MsY0FDM0MsMkJBQ0Q7QUFDQU0saUJBQVNDLFVBQVU7QUFDbkJELGlCQUFTRSxjQUFjTixLQUFLO01BQzdCLENBQUM7SUFDRjtFQUNEO0FBQ0QsQ0FBQyxFQUNBTyxNQUFPQyxXQUFVO0FBQ2pCLFNBQU9DLFFBQVFELE1BQU1BLEtBQUs7QUFDM0IsQ0FBQzsiLAogICJuYW1lcyI6IFsibXciLCAibG9hZGVyIiwgInVzaW5nIiwgInRoZW4iLCAiY29uZmlnIiwgImdldCIsICJzZWFyY2hUcmlnZ2VyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJFdmVudCIsICJidWJibGVzIiwgImNvbXBvc2VkIiwgImNoZWNrYm94IiwgImNoZWNrZWQiLCAiZGlzcGF0Y2hFdmVudCIsICJjYXRjaCIsICJlcnJvciIsICJjb25zb2xlIl0KfQo=
