/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
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

// dist/ShortURL/ShortURL.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/ShortURL/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Clipboard");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Short URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The short URL has been copied to clipboard:",
      "zh-hans": "已复制本页短链接：",
      "zh-hant": "已復製本頁短網址："
    }),
    "Show short URL": (0, import_ext_gadget.localize)({
      en: "Show short URL",
      "zh-hans": "显示该页短链接",
      "zh-hant": "顯示該頁短網址"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var clipboardInstance;
var doIns = (link) => {
  var _clipboardInstance;
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  let element = document.querySelector("#t-shortlink");
  if (!element) {
    element = mw.util.addPortletLink(portletId, "#", getMessage("Short URL"), "t-shortlink", getMessage("Show short URL"));
  }
  if (element) {
    var _element$firstElement;
    ((_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element).onclick = (event) => {
      event.preventDefault();
      const $element = $("<div>");
      for (var _i = 0, _arr = ["youshou.wiki", "ysymh.cc"]; _i < _arr.length; _i++) {
        const domain = _arr[_i];
        $element.append(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          new mw.widgets.CopyTextLayout({
            align: "top",
            copyText: "https://".concat(domain).concat(link)
          }).$element
        );
      }
      void OO.ui.alert($element, {
        title: getMessage("Short URL copied to clipboard"),
        size: "medium"
      });
    };
    const isCitizen = mw.config.get("skin") === "citizen";
    if (isCitizen) {
      $(element).find("a").prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
    }
  }
  let headerElement = document.querySelector("#mw-indicator-shortURL a");
  if (!headerElement) {
    const $headerElement = $("<div>").addClass("mw-indicator").attr("id", "mw-indicator-shortURL").append($("<a>").attr({
      href: "#",
      "aria-label": getMessage("Short URL")
    }).append($("<span>").addClass("gadget-short-link__icon").text(getMessage("Short URL"))));
    $headerElement.prependTo(".mw-indicators");
    headerElement = $headerElement.find("a").get(0);
    (0, import_ext_gadget4.tippy)(headerElement, {
      arrow: true,
      content: getMessage("Short URL"),
      placement: "bottom"
    });
  }
  const shorturl = "https://ysymh.cc".concat(link);
  const $notifyElement = $("<span>").text(getMessage("Short URL copied to clipboard")).append($("<br>"), $("<a>").attr("href", "#").text(shorturl).on("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  }));
  headerElement.onclick = (event) => {
    event.preventDefault();
    void mw.notify($notifyElement, {
      tag: "shortURL",
      type: "info"
    });
  };
  (_clipboardInstance = clipboardInstance) === null || _clipboardInstance === void 0 || _clipboardInstance.destroy();
  clipboardInstance = new import_ext_gadget2.Clipboard(headerElement, {
    text: () => {
      return shorturl;
    }
  });
};
var init = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    diffId,
    oldId,
    articleId,
    revisionId
  }) {
    const $body = $("body");
    if (diffId) {
      const buildLink = (_oldId, link = "/d") => {
        if (_oldId) {
          link += "/".concat(_oldId);
        }
        link += "/".concat(diffId);
        doIns(link);
      };
      buildLink(oldId);
      if (oldId) {
        const api = (0, import_ext_gadget3.initMwApi)("ShortURL/1.1");
        try {
          const params = {
            action: "compare",
            format: "json",
            formatversion: "2",
            prop: "ids",
            fromrev: diffId,
            torelative: "prev"
          };
          const {
            compare
          } = yield api.get(params);
          if (diffId === mw.config.get("wgDiffNewId") && (compare === null || compare === void 0 ? void 0 : compare.fromrevid) === mw.config.get("wgDiffOldId")) {
            buildLink();
          }
        } catch {
        }
      }
    } else if (revisionId && ($body.find("#contentSub").find("#mw-revision-nav").length || $body.find("main#content>.pre-content #mw-revision-nav").length) > 0) {
      doIns("/p/".concat(revisionId));
    } else if (articleId) {
      doIns("/c/".concat(articleId));
    }
  });
  return function init2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ShortURL/ShortURL.ts
if (mw.config.get("wgNamespaceNumber") >= 0 || !document.querySelectorAll(".noarticletext").length || mw.config.get("wgAction") === "view") {
  mw.hook("wikipage.content").add(($content) => {
    if (mw.config.get("wgShortURLInstalled")) {
      return;
    }
    if ($content.attr("id") !== "mw-content-text") {
      return;
    }
    void init({
      diffId: mw.config.get("wgDiffNewId"),
      oldId: mw.config.get("wgDiffOldId"),
      articleId: mw.config.get("wgArticleId"),
      revisionId: mw.config.get("wgRevisionId")
    });
    mw.config.set("wgShortURLInstalled", true);
  });
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxubGV0IGNsaXBib2FyZEluc3RhbmNlOiBDbGlwYm9hcmRKUyB8IHVuZGVmaW5lZDtcblxuY29uc3QgZG9JbnMgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblxuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHBvcnRsZXRJZCxcblx0XHRcdCcjJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKGVsZW1lbnQpIHtcblx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsneW91c2hvdS53aWtpJywgJ3lzeW1oLmNjJ10pIHtcblx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0XHRcdFx0XHRuZXcgbXcud2lkZ2V0cy5Db3B5VGV4dExheW91dCh7XG5cdFx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7dGl0bGU6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyksIHNpemU6ICdtZWRpdW0nfSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCQoZWxlbWVudCkuZmluZCgnYScpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiPjwvc3Bhbj4nKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cblx0aWYgKCFoZWFkZXJFbGVtZW50KSB7XG5cdFx0Y29uc3QgJGhlYWRlckVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctaW5kaWNhdG9yJylcblx0XHRcdC5hdHRyKCdpZCcsICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nKS50ZXh0KGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpKSlcblx0XHRcdCk7XG5cdFx0JGhlYWRlckVsZW1lbnQucHJlcGVuZFRvKCcubXctaW5kaWNhdG9ycycpO1xuXHRcdGhlYWRlckVsZW1lbnQgPSAkaGVhZGVyRWxlbWVudC5maW5kKCdhJykuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdHRpcHB5KGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2hvcnR1cmw6IHN0cmluZyA9IGBodHRwczovL3lzeW1oLmNjJHtsaW5rfWA7XG5cdGNvbnN0ICRub3RpZnlFbGVtZW50ID0gJCgnPHNwYW4+Jylcblx0XHQudGV4dChnZXRNZXNzYWdlKCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8YnI+JyksXG5cdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0LnRleHQoc2hvcnR1cmwpXG5cdFx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fSlcblx0XHQpO1xuXHRoZWFkZXJFbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZvaWQgbXcubm90aWZ5KCRub3RpZnlFbGVtZW50LCB7dGFnOiAnc2hvcnRVUkwnLCB0eXBlOiAnaW5mbyd9KTtcblx0fTtcblx0Y2xpcGJvYXJkSW5zdGFuY2U/LmRlc3Ryb3koKTtcblx0Y2xpcGJvYXJkSW5zdGFuY2UgPSBuZXcgQ2xpcGJvYXJkKGhlYWRlckVsZW1lbnQsIHtcblx0XHR0ZXh0OiAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzaG9ydHVybDtcblx0XHR9LFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKHtcblx0ZGlmZklkLFxuXHRvbGRJZCxcblx0YXJ0aWNsZUlkLFxuXHRyZXZpc2lvbklkLFxufToge1xuXHRkaWZmSWQ6IG51bWJlciB8IG51bGw7XG5cdG9sZElkOiBudW1iZXIgfCBudWxsO1xuXHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0cmV2aXNpb25JZDogbnVtYmVyO1xufSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRjb25zdCBidWlsZExpbmsgPSAoX29sZElkPzogbnVtYmVyIHwgbnVsbCwgbGluayA9ICcvZCcpOiB2b2lkID0+IHtcblx0XHRcdGlmIChfb2xkSWQpIHtcblx0XHRcdFx0bGluayArPSBgLyR7X29sZElkfWA7XG5cdFx0XHR9XG5cdFx0XHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblx0XHRcdGRvSW5zKGxpbmspO1xuXHRcdH07XG5cblx0XHRidWlsZExpbmsob2xkSWQpO1xuXG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnU2hvcnRVUkwvMS4xJyk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBwYXJhbXM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2lkcycsXG5cdFx0XHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdFx0XHRcdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3Qge2NvbXBhcmV9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0XHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIGNvbXBhcmU/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdFx0XHRcdGJ1aWxkTGluaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKFxuXHRcdHJldmlzaW9uSWQgJiZcblx0XHQoJGJvZHkuZmluZCgnI2NvbnRlbnRTdWInKS5maW5kKCcjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpIHtcblx0XHRkb0lucyhgL3AvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGRvSW5zKGAvYy8ke2FydGljbGVJZH1gKTtcblx0fVxufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHNob3J0IFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLbmnKzpobXnn63pk77mjqXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO95pys6aCB55+t57ay5Z2A77yaJyxcblx0XHR9KSxcblx0XHQnU2hvdyBzaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgc2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhteefremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2luaXR9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKFxuXHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID49IDAgfHxcblx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoIHx8XG5cdG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3J1xuKSB7XG5cdC8vIExvYWQgbWFpbiBmdW5jdGlvblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dTaG9ydFVSTEluc3RhbGxlZCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dm9pZCBpbml0KHtcblx0XHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0YXJ0aWNsZUlkOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgZ3VhcmRcblx0XHRtdy5jb25maWcuc2V0KCd3Z1Nob3J0VVJMSW5zdGFsbGVkJywgdHJ1ZSk7XG5cdH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxxQkFBd0JDLFFBQUEsc0JBQUE7O0FDRHhCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGNBQUEsR0FBYUQsa0JBQUFFLFVBQVM7TUFDckJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQ0FB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cG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJjbGlwYm9hcmRJbnN0YW5jZSIsICJkb0lucyIsICJsaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50IiwgIm13IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImZpcnN0RWxlbWVudENoaWxkIiwgIm9uY2xpY2siLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJkb21haW4iLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiY29uY2F0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInRpdGxlIiwgInNpemUiLCAiaXNDaXRpemVuIiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJwcmVwZW5kIiwgImhlYWRlckVsZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJocmVmIiwgInRleHQiLCAicHJlcGVuZFRvIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgInNob3J0dXJsIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uIiwgInN0b3BQcm9wYWdhdGlvbiIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAiaW5pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImRpZmZJZCIsICJvbGRJZCIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICIkYm9keSIsICJidWlsZExpbmsiLCAiX29sZElkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImZyb21yZXYiLCAidG9yZWxhdGl2ZSIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJob29rIiwgImFkZCIsICIkY29udGVudCIsICJzZXQiXQp9Cg==
