/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/User:Erutuon/scripts/gadgets-definition.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/GadgetsDefinition}
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

// dist/GadgetsDefinition/GadgetsDefinition.js
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
//! src/GadgetsDefinition/modules/constant.ts
var IS_DEFINITION_PAGE = mw.config.get("wgCanonicalNamespace") === "MediaWiki" && mw.config.get("wgTitle") === "Gadgets-definition";
var REXEX_GADGET_NAME = /^(\s*)([\w_-]+)\s*/;
//! src/GadgetsDefinition/modules/util/generateGadgetId.ts
var generateGadgetId = (gadgetName) => {
  return "Gadget-".concat(gadgetName);
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/GadgetsDefinition/modules/util/matchGadgetName.ts
var matchGadgetName = (innerHTML) => {
  var _ref;
  const regExpExecArray = REXEX_GADGET_NAME.exec(innerHTML);
  return (_ref = regExpExecArray ? regExpExecArray[2] : null) !== null && _ref !== void 0 ? _ref : "";
};
//! src/GadgetsDefinition/modules/util/makeLink.ts
var makeLink = (href, text) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  return link.outerHTML;
};
var makeWikilink = (page, text) => {
  return makeLink(mw.util.getUrl(page), text || page);
};
//! src/GadgetsDefinition/modules/processGadgetDefinition.ts
var linkGadgetSource = (sourcePage) => {
  return makeWikilink("MediaWiki:Gadget-".concat(sourcePage), sourcePage);
};
var linkGadgetAnchor = (gadgetName, text) => {
  return makeLink("#".concat(generateGadgetId(gadgetName)), text || gadgetName);
};
var processGadgetDefinition = (innerHTML) => {
  return innerHTML.replace(REXEX_GADGET_NAME, (_wholeMatch, whitespace, gadgetName) => {
    return "".concat(whitespace + linkGadgetSource(gadgetName), " ");
  }).replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource).replace(/\s*\|\s*/g, " | ").replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch, key, value) => {
    let splitValue = value.split(/\s*,\s*/g);
    switch (key) {
      case "dependencies":
        splitValue = splitValue.map((dependency) => {
          const gadgetName = /^ext\.gadget\.(.+)$/.exec(dependency);
          if (gadgetName) {
            var _gadgetName$;
            const _gadgetName = (_gadgetName$ = gadgetName[1]) !== null && _gadgetName$ !== void 0 ? _gadgetName$ : "";
            return linkGadgetAnchor(_gadgetName, dependency);
          }
          return makeWikilink("Special:GoToInterwiki/mw:ResourceLoader/Core_modules#".concat(dependency), dependency);
        });
        break;
      case "rights":
        key = makeWikilink("Special:GoToInterwiki/mw:Manual:User_rights#List_of_permissions", key);
        break;
      case "peers":
        splitValue = splitValue.map((gadgetName) => {
          return linkGadgetAnchor(gadgetName);
        });
    }
    return "".concat(key, " = ").concat(splitValue.join(", "));
  });
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
void (0, import_ext_gadget.getBody)().then(function gadgetsDefinition($body) {
  const $parserOutput = $body.find(".mw-parser-output");
  if (!IS_DEFINITION_PAGE || !$parserOutput.length) {
    return;
  }
  var _iterator = _createForOfIteratorHelper($parserOutput.find("li")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const gadgetName = matchGadgetName(element.innerHTML);
      if (gadgetName) {
        element.id = generateGadgetId(gadgetName);
      }
      element.innerHTML = processGadgetDefinition(element.innerHTML);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($parserOutput.find("pre")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dhZGdldHNEZWZpbml0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dhZGdldHNEZWZpbml0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUdhZGdldElkLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9HYWRnZXRzRGVmaW5pdGlvbi50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZS50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21ha2VMaW5rLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9tb2R1bGVzL3Byb2Nlc3NHYWRnZXREZWZpbml0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBJU19ERUZJTklUSU9OX1BBR0U6IGJvb2xlYW4gPVxuXHRtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScpID09PSAnTWVkaWFXaWtpJyAmJiBtdy5jb25maWcuZ2V0KCd3Z1RpdGxlJykgPT09ICdHYWRnZXRzLWRlZmluaXRpb24nO1xuXG5jb25zdCBSRVhFWF9HQURHRVRfTkFNRTogUmVnRXhwID0gL14oXFxzKikoW1xcd18tXSspXFxzKi87XG5cbmV4cG9ydCB7SVNfREVGSU5JVElPTl9QQUdFLCBSRVhFWF9HQURHRVRfTkFNRX07XG4iLCAiY29uc3QgZ2VuZXJhdGVHYWRnZXRJZCA9IChnYWRnZXROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYEdhZGdldC0ke2dhZGdldE5hbWV9YDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVHYWRnZXRJZH07XG4iLCAiLyoqXG4gKiBAZGVzY3JpcHRpb24gQWRkcyBsaW5rcyB0byBnYWRnZXQgZGVmaW5pdGlvbnMgaW4gW1tNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uXV0gYW5kXG4gKiBwcmV0dGlmaWVzIHRoZW0gYnkgYWRkaW5nIHdoaXRlc3BhY2UuXG4gKiBBZGRzIGFuY2hvcnMgdG8gZ2FkZ2V0IGRlZmluaXRpb25zIGFzIHdlbGwgYXMgQ1NTIHRvIGhpZ2hsaWdodCB0aGVtIHdoZW4gd2VcbiAqIGNsaWNrIGEgbGluayB0byB0aGVtLlxuICovXG4vLyBUZWNobmlxdWUgZ2xlYW5lZCBmcm9tIFtbZW53aWtpOmZyOlV0aWxpc2F0ZXVyOk9kMW4vQWRkTGlua3NHYWRnZXRzRGVmaW5pdGlvbi5qc11dLlxuaW1wb3J0ICcuL0dhZGdldHNEZWZpbml0aW9uLmxlc3MnO1xuaW1wb3J0IHtJU19ERUZJTklUSU9OX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlR2FkZ2V0SWQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttYXRjaEdhZGdldE5hbWV9IGZyb20gJy4vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZSc7XG5pbXBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0dhZGdldERlZmluaXRpb24nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGdhZGdldHNEZWZpbml0aW9uKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCAkcGFyc2VyT3V0cHV0OiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpO1xuXG5cdC8vIE9ubHkgb3BlcmF0ZSBvbiBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXSB3aGVuIHRoZSB0ZXh0IGlzIHZpc2libGUuXG5cdGlmICghSVNfREVGSU5JVElPTl9QQUdFIHx8ICEkcGFyc2VyT3V0cHV0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFByb2Nlc3MgZ2FkZ2V0IGRlZmluaXRpb25zIGluIGxpc3RzLlxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHBhcnNlck91dHB1dC5maW5kKCdsaScpKSB7XG5cdFx0Ly8gQWRkIGlkIHNvIHRoYXQgZ2FkZ2V0IGRlZmluaXRpb25zIGNhbiBiZSBoaWdobGlnaHRlZCB3aGVuIHdlIGNsaWNrIGEgbGluayB0byB0aGVtLlxuXHRcdGNvbnN0IGdhZGdldE5hbWU6IHN0cmluZyA9IG1hdGNoR2FkZ2V0TmFtZShlbGVtZW50LmlubmVySFRNTCk7XG5cdFx0aWYgKGdhZGdldE5hbWUpIHtcblx0XHRcdGVsZW1lbnQuaWQgPSBnZW5lcmF0ZUdhZGdldElkKGdhZGdldE5hbWUpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gcHJvY2Vzc0dhZGdldERlZmluaXRpb24oZWxlbWVudC5pbm5lckhUTUwpO1xuXHR9XG5cblx0Ly8gUHJvY2VzcyBnYWRnZXQgZGVmaW5pdGlvbnMgaW4gcHJlIHRhZ3MuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkcGFyc2VyT3V0cHV0LmZpbmQoJ3ByZScpKSB7XG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKC9bXlxcbl0rL2csIHByb2Nlc3NHYWRnZXREZWZpbml0aW9uKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBtYXRjaEdhZGdldE5hbWUgPSAoaW5uZXJIVE1MOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCByZWdFeHBFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBSRVhFWF9HQURHRVRfTkFNRS5leGVjKGlubmVySFRNTCk7XG5cblx0cmV0dXJuIChyZWdFeHBFeGVjQXJyYXkgPyByZWdFeHBFeGVjQXJyYXlbMl0gOiBudWxsKSA/PyAnJztcbn07XG5cbmV4cG9ydCB7bWF0Y2hHYWRnZXROYW1lfTtcbiIsICJjb25zdCBtYWtlTGluayA9IChocmVmOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHQvLyBUaGlzIGFuY2hvciBlbGVtZW50IGlzIHVzZWQgdG8gZ2VuZXJhdGUgbGlua3MgYW5kIGlzIG5vdCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQuXG5cdGNvbnN0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cdGxpbmsuaHJlZiA9IGhyZWY7XG5cdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdHJldHVybiBsaW5rLm91dGVySFRNTDtcbn07XG5cbmNvbnN0IG1ha2VXaWtpbGluayA9IChwYWdlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBtYWtlTGluayhtdy51dGlsLmdldFVybChwYWdlKSwgdGV4dCB8fCBwYWdlKTtcbn07XG5cbmV4cG9ydCB7bWFrZUxpbmssIG1ha2VXaWtpbGlua307XG4iLCAiaW1wb3J0IHttYWtlTGluaywgbWFrZVdpa2lsaW5rfSBmcm9tICcuL3V0aWwvbWFrZUxpbmsnO1xuaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUdhZGdldElkJztcblxuY29uc3QgbGlua0dhZGdldFNvdXJjZSA9IChzb3VyY2VQYWdlOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIG1ha2VXaWtpbGluayhgTWVkaWFXaWtpOkdhZGdldC0ke3NvdXJjZVBhZ2V9YCwgc291cmNlUGFnZSk7XG59O1xuXG5jb25zdCBsaW5rR2FkZ2V0QW5jaG9yID0gKGdhZGdldE5hbWU6IHN0cmluZywgdGV4dD86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gbWFrZUxpbmsoYCMke2dlbmVyYXRlR2FkZ2V0SWQoZ2FkZ2V0TmFtZSl9YCwgdGV4dCB8fCBnYWRnZXROYW1lKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NHYWRnZXREZWZpbml0aW9uID0gKGlubmVySFRNTDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIChcblx0XHRpbm5lckhUTUxcblx0XHRcdC8vIGxpbmsgZ2FkZ2V0IG5hbWUgdG8gc3lzdGVtIG1lc3NhZ2UgcGFnZSBhbmQgYWRkIHNwYWNlIGFmdGVyIGl0XG5cdFx0XHQucmVwbGFjZShSRVhFWF9HQURHRVRfTkFNRSwgKF93aG9sZU1hdGNoOiBzdHJpbmcsIHdoaXRlc3BhY2U6IHN0cmluZywgZ2FkZ2V0TmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke3doaXRlc3BhY2UgKyBsaW5rR2FkZ2V0U291cmNlKGdhZGdldE5hbWUpfSBgO1xuXHRcdFx0fSlcblx0XHRcdC5yZXBsYWNlKC8oW1xcd19cXC0uXStcXC4oPzpjc3N8anMoPzpvbik/KSkvZywgbGlua0dhZGdldFNvdXJjZSkgLy8gbGluayBzY3JpcHQgbmFtZXNcblx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8XFxzKi9nLCAnIHwgJykgLy8gc3BhY2VzIGFyb3VuZCBwaXBlc1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9jZXNzIG9wdGlvbnNcblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIGRlcGVuZGVuY2llczogZXh0LmdhZGdldC5uYW1lIHRvIGVudHJ5IG9uIHRoaXMgcGFnZSwgb3RoZXJzIHRvXG5cdFx0XHQgKiBbW213OlJlc291cmNlTG9hZGVyL0NvcmUgbW9kdWxlc11dIChldmVuIHRob3VnaCBub3QgYWxsIGhhdmUgYW4gZW50cnlcblx0XHRcdCAqIHRoZXJlKS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHBlZXJzIHRvIGVudHJ5IG9uIHRoaXMgcGFnZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHJpZ2h0cyB0byBbW213Ok1hbnVhbDpVc2VyX3JpZ2h0cyNMaXN0X29mX3Blcm1pc3Npb25zXV0uIFRoZXJlXG5cdFx0XHQgKiBhcmUgdW5mb3J0dW5hdGVseSBubyBhbmNob3JzIGZvciBpbmRpdmlkdWFsIHJpZ2h0cy5cblx0XHRcdCAqL1xuXHRcdFx0LnJlcGxhY2UoLyhbYS16XSspXFxzKj1cXHMqKC4rPykoPz1cXHMqW3xcXF1dKS9nLCAoX3dob2xlTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0bGV0IHNwbGl0VmFsdWU6IHN0cmluZ1tdID0gdmFsdWUuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0XHRcdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdFx0XHRjYXNlICdkZXBlbmRlbmNpZXMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChkZXBlbmRlbmN5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZ2FkZ2V0TmFtZTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9eZXh0XFwuZ2FkZ2V0XFwuKC4rKSQvLmV4ZWMoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChnYWRnZXROYW1lKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgX2dhZGdldE5hbWU6IHN0cmluZyA9IGdhZGdldE5hbWVbMV0gPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpbmtHYWRnZXRBbmNob3IoX2dhZGdldE5hbWUsIGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYWtlV2lraWxpbmsoXG5cdFx0XHRcdFx0XHRcdFx0YFNwZWNpYWw6R29Ub0ludGVyd2lraS9tdzpSZXNvdXJjZUxvYWRlci9Db3JlX21vZHVsZXMjJHtkZXBlbmRlbmN5fWAsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyaWdodHMnOlxuXHRcdFx0XHRcdFx0a2V5ID0gbWFrZVdpa2lsaW5rKCdTcGVjaWFsOkdvVG9JbnRlcndpa2kvbXc6TWFudWFsOlVzZXJfcmlnaHRzI0xpc3Rfb2ZfcGVybWlzc2lvbnMnLCBrZXkpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAncGVlcnMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChnYWRnZXROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbGlua0dhZGdldEFuY2hvcihnYWRnZXROYW1lKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBgJHtrZXl9ID0gJHtzcGxpdFZhbHVlLmpvaW4oJywgJyl9YDtcblx0XHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQ0xDLEdBQUdDLE9BQU9DLElBQUksc0JBQXNCLE1BQU0sZUFBZUYsR0FBR0MsT0FBT0MsSUFBSSxTQUFTLE1BQU07QUFFdkYsSUFBTUMsb0JBQTRCOztBQ0hsQyxJQUFNQyxtQkFBb0JDLGdCQUErQjtBQUN4RCxTQUFBLFVBQUFDLE9BQWlCRCxVQUFVO0FBQzVCOztBQ1FBLElBQUFFLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNSdEIsSUFBTUMsa0JBQW1CQyxlQUE4QjtBQUFBLE1BQUFDO0FBQ3RELFFBQU1DLGtCQUEwQ1Qsa0JBQWtCVSxLQUFLSCxTQUFTO0FBRWhGLFVBQUFDLE9BQVFDLGtCQUFrQkEsZ0JBQWdCLENBQUMsSUFBSSxVQUFBLFFBQUFELFNBQUEsU0FBQUEsT0FBUztBQUN6RDs7QUNOQSxJQUFNRyxXQUFXQSxDQUFDQyxNQUFjQyxTQUFnQztBQUUvRCxRQUFNQyxPQUEwQkMsU0FBU0MsY0FBYyxHQUFHO0FBRTFERixPQUFLRixPQUFPQTtBQUNaRSxPQUFLRyxjQUFjSjtBQUVuQixTQUFPQyxLQUFLSTtBQUNiO0FBRUEsSUFBTUMsZUFBZUEsQ0FBQ0MsTUFBY1AsU0FBeUI7QUFDNUQsU0FBT0YsU0FBU2QsR0FBR3dCLEtBQUtDLE9BQU9GLElBQUksR0FBR1AsUUFBUU8sSUFBSTtBQUNuRDs7QUNSQSxJQUFNRyxtQkFBb0JDLGdCQUF1QjtBQUNoRCxTQUFPTCxhQUFBLG9CQUFBaEIsT0FBaUNxQixVQUFVLEdBQUlBLFVBQVU7QUFDakU7QUFFQSxJQUFNQyxtQkFBbUJBLENBQUN2QixZQUFvQlcsU0FBa0I7QUFDL0QsU0FBT0YsU0FBQSxJQUFBUixPQUFhRixpQkFBaUJDLFVBQVUsQ0FBQyxHQUFJVyxRQUFRWCxVQUFVO0FBQ3ZFO0FBRUEsSUFBTXdCLDBCQUEyQm5CLGVBQThCO0FBQzlELFNBQ0NBLFVBRUVvQixRQUFRM0IsbUJBQW1CLENBQUM0QixhQUFxQkMsWUFBb0IzQixlQUErQjtBQUNwRyxXQUFBLEdBQUFDLE9BQVUwQixhQUFhTixpQkFBaUJyQixVQUFVLEdBQUMsR0FBQTtFQUNwRCxDQUFDLEVBQ0F5QixRQUFRLG1DQUFtQ0osZ0JBQWdCLEVBQzNESSxRQUFRLGFBQWEsS0FBSyxFQWExQkEsUUFBUSxxQ0FBcUMsQ0FBQ0MsYUFBcUJFLEtBQWFDLFVBQWtCO0FBQ2xHLFFBQUlDLGFBQXVCRCxNQUFNRSxNQUFNLFVBQVU7QUFDakQsWUFBUUgsS0FBQTtNQUNQLEtBQUs7QUFDSkUscUJBQWFBLFdBQVdFLElBQUtDLGdCQUF1QjtBQUNuRCxnQkFBTWpDLGFBQXFDLHNCQUFzQlEsS0FBS3lCLFVBQVU7QUFDaEYsY0FBSWpDLFlBQVk7QUFBQSxnQkFBQWtDO0FBQ2Ysa0JBQU1DLGVBQUFELGVBQXNCbEMsV0FBVyxDQUFDLE9BQUEsUUFBQWtDLGlCQUFBLFNBQUFBLGVBQUs7QUFDN0MsbUJBQU9YLGlCQUFpQlksYUFBYUYsVUFBVTtVQUNoRDtBQUNBLGlCQUFPaEIsYUFBQSx3REFBQWhCLE9BQ2tEZ0MsVUFBVSxHQUNsRUEsVUFDRDtRQUNELENBQUM7QUFDRDtNQUNELEtBQUs7QUFDSkwsY0FBTVgsYUFBYSxtRUFBbUVXLEdBQUc7QUFDekY7TUFDRCxLQUFLO0FBQ0pFLHFCQUFhQSxXQUFXRSxJQUFLaEMsZ0JBQStCO0FBQzNELGlCQUFPdUIsaUJBQWlCdkIsVUFBVTtRQUNuQyxDQUFDO0lBQ0g7QUFDQSxXQUFBLEdBQUFDLE9BQVUyQixLQUFHLEtBQUEsRUFBQTNCLE9BQU02QixXQUFXTSxLQUFLLElBQUksQ0FBQztFQUN6QyxDQUFDO0FBRUo7O0FIOUNBLE1BQUEsR0FBS2xDLGtCQUFBbUMsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGtCQUFrQkMsT0FBc0M7QUFDcEYsUUFBTUMsZ0JBQXdCRCxNQUFNRSxLQUFLLG1CQUFtQjtBQUc1RCxNQUFJLENBQUNoRCxzQkFBc0IsQ0FBQytDLGNBQWNFLFFBQVE7QUFDakQ7RUFDRDtBQUFBLE1BQUFDLFlBQUFDLDJCQUdzQkosY0FBY0MsS0FBSyxJQUFJLENBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQTdDLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWdEO0FBQUEsWUFBckNDLFVBQUFKLE1BQUFqQjtBQUVWLFlBQU03QixhQUFxQkksZ0JBQWdCOEMsUUFBUTdDLFNBQVM7QUFDNUQsVUFBSUwsWUFBWTtBQUNma0QsZ0JBQVFDLEtBQUtwRCxpQkFBaUJDLFVBQVU7TUFDekM7QUFFQWtELGNBQVE3QyxZQUFZbUIsd0JBQXdCMEIsUUFBUTdDLFNBQVM7SUFDOUQ7RUFBQSxTQUFBK0MsS0FBQTtBQUFBUixjQUFBUyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBUixjQUFBVSxFQUFBO0VBQUE7QUFBQSxNQUFBQyxhQUFBViwyQkFHc0JKLGNBQWNDLEtBQUssS0FBSyxDQUFBLEdBQUFjO0FBQUEsTUFBQTtBQUE5QyxTQUFBRCxXQUFBUixFQUFBLEdBQUEsRUFBQVMsU0FBQUQsV0FBQVAsRUFBQSxHQUFBQyxRQUFpRDtBQUFBLFlBQXRDQyxVQUFBTSxPQUFBM0I7QUFDVnFCLGNBQVE3QyxZQUFZNkMsUUFBUTdDLFVBQVVvQixRQUFRLFdBQVdELHVCQUF1QjtJQUNqRjtFQUFBLFNBQUE0QixLQUFBO0FBQUFHLGVBQUFGLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFHLGVBQUFELEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIklTX0RFRklOSVRJT05fUEFHRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIlJFWEVYX0dBREdFVF9OQU1FIiwgImdlbmVyYXRlR2FkZ2V0SWQiLCAiZ2FkZ2V0TmFtZSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtYXRjaEdhZGdldE5hbWUiLCAiaW5uZXJIVE1MIiwgIl9yZWYiLCAicmVnRXhwRXhlY0FycmF5IiwgImV4ZWMiLCAibWFrZUxpbmsiLCAiaHJlZiIsICJ0ZXh0IiwgImxpbmsiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJ0ZXh0Q29udGVudCIsICJvdXRlckhUTUwiLCAibWFrZVdpa2lsaW5rIiwgInBhZ2UiLCAidXRpbCIsICJnZXRVcmwiLCAibGlua0dhZGdldFNvdXJjZSIsICJzb3VyY2VQYWdlIiwgImxpbmtHYWRnZXRBbmNob3IiLCAicHJvY2Vzc0dhZGdldERlZmluaXRpb24iLCAicmVwbGFjZSIsICJfd2hvbGVNYXRjaCIsICJ3aGl0ZXNwYWNlIiwgImtleSIsICJ2YWx1ZSIsICJzcGxpdFZhbHVlIiwgInNwbGl0IiwgIm1hcCIsICJkZXBlbmRlbmN5IiwgIl9nYWRnZXROYW1lJCIsICJfZ2FkZ2V0TmFtZSIsICJqb2luIiwgImdldEJvZHkiLCAidGhlbiIsICJnYWRnZXRzRGVmaW5pdGlvbiIsICIkYm9keSIsICIkcGFyc2VyT3V0cHV0IiwgImZpbmQiLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgImlkIiwgImVyciIsICJlIiwgImYiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiXQp9Cg==
