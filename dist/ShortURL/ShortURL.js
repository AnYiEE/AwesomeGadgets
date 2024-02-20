/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
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
  const shorturl = "https://qwbk.cc".concat(link);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxubGV0IGNsaXBib2FyZEluc3RhbmNlOiBDbGlwYm9hcmRKUyB8IHVuZGVmaW5lZDtcblxuY29uc3QgZG9JbnMgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblxuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHBvcnRsZXRJZCxcblx0XHRcdCcjJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKGVsZW1lbnQpIHtcblx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsneW91c2hvdS53aWtpJywgJ3lzeW1oLmNjJ10pIHtcblx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0XHRcdFx0XHRuZXcgbXcud2lkZ2V0cy5Db3B5VGV4dExheW91dCh7XG5cdFx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7dGl0bGU6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyksIHNpemU6ICdtZWRpdW0nfSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCQoZWxlbWVudCkuZmluZCgnYScpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiPjwvc3Bhbj4nKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cblx0aWYgKCFoZWFkZXJFbGVtZW50KSB7XG5cdFx0Y29uc3QgJGhlYWRlckVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctaW5kaWNhdG9yJylcblx0XHRcdC5hdHRyKCdpZCcsICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nKS50ZXh0KGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpKSlcblx0XHRcdCk7XG5cdFx0JGhlYWRlckVsZW1lbnQucHJlcGVuZFRvKCcubXctaW5kaWNhdG9ycycpO1xuXHRcdGhlYWRlckVsZW1lbnQgPSAkaGVhZGVyRWxlbWVudC5maW5kKCdhJykuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdHRpcHB5KGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2hvcnR1cmw6IHN0cmluZyA9IGBodHRwczovL3F3YmsuY2Mke2xpbmt9YDtcblx0Y29uc3QgJG5vdGlmeUVsZW1lbnQgPSAkKCc8c3Bhbj4nKVxuXHRcdC50ZXh0KGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJykpXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHQudGV4dChzaG9ydHVybClcblx0XHRcdFx0Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9KVxuXHRcdCk7XG5cdGhlYWRlckVsZW1lbnQub25jbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoJG5vdGlmeUVsZW1lbnQsIHt0YWc6ICdzaG9ydFVSTCcsIHR5cGU6ICdpbmZvJ30pO1xuXHR9O1xuXHRjbGlwYm9hcmRJbnN0YW5jZT8uZGVzdHJveSgpO1xuXHRjbGlwYm9hcmRJbnN0YW5jZSA9IG5ldyBDbGlwYm9hcmQoaGVhZGVyRWxlbWVudCwge1xuXHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHNob3J0dXJsO1xuXHRcdH0sXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoe1xuXHRkaWZmSWQsXG5cdG9sZElkLFxuXHRhcnRpY2xlSWQsXG5cdHJldmlzaW9uSWQsXG59OiB7XG5cdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdGFydGljbGVJZDogbnVtYmVyO1xuXHRyZXZpc2lvbklkOiBudW1iZXI7XG59KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGNvbnN0IGJ1aWxkTGluayA9IChfb2xkSWQ/OiBudW1iZXIgfCBudWxsLCBsaW5rID0gJy9kJyk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKF9vbGRJZCkge1xuXHRcdFx0XHRsaW5rICs9IGAvJHtfb2xkSWR9YDtcblx0XHRcdH1cblx0XHRcdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXHRcdFx0ZG9JbnMobGluayk7XG5cdFx0fTtcblxuXHRcdGJ1aWxkTGluayhvbGRJZCk7XG5cblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdTaG9ydFVSTC8xLjEnKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwcm9wOiAnaWRzJyxcblx0XHRcdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0XHRcdFx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCB7Y29tcGFyZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgY29tcGFyZT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0XHRcdFx0YnVpbGRMaW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0cmV2aXNpb25JZCAmJlxuXHRcdCgkYm9keS5maW5kKCcjY29udGVudFN1YicpLmZpbmQoJyNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRib2R5LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCkge1xuXHRcdGRvSW5zKGAvcC8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0ZG9JbnMoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn55+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+efree2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgc2hvcnQgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhteefremTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHnn63ntrLlnYDvvJonLFxuXHRcdH0pLFxuXHRcdCdTaG93IHNob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBzaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG155+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggeefree2suWdgCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoXG5cdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPj0gMCB8fFxuXHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggfHxcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnXG4pIHtcblx0Ly8gTG9hZCBtYWluIGZ1bmN0aW9uXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1Nob3J0VVJMSW5zdGFsbGVkJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2b2lkIGluaXQoe1xuXHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHR9KTtcblxuXHRcdC8vIFNldCBndWFyZFxuXHRcdG13LmNvbmZpZy5zZXQoJ3dnU2hvcnRVUkxJbnN0YWxsZWQnLCB0cnVlKTtcblx0fSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLHFCQUF3QkMsUUFBQSxzQkFBQTs7QUNEeEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sY0FBQSxHQUFhRCxrQkFBQUUsVUFBUztNQUNyQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtDQUFB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b3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImNsaXBib2FyZEluc3RhbmNlIiwgImRvSW5zIiwgImxpbmsiLCAiX2NsaXBib2FyZEluc3RhbmNlIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAibXciLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJfZWxlbWVudCRmaXJzdEVsZW1lbnQiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAib25jbGljayIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImRvbWFpbiIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJjb25jYXQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAidGl0bGUiLCAic2l6ZSIsICJpc0NpdGl6ZW4iLCAiY29uZmlnIiwgImdldCIsICJmaW5kIiwgInByZXBlbmQiLCAiaGVhZGVyRWxlbWVudCIsICIkaGVhZGVyRWxlbWVudCIsICJhZGRDbGFzcyIsICJhdHRyIiwgImhyZWYiLCAidGV4dCIsICJwcmVwZW5kVG8iLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAic2hvcnR1cmwiLCAiJG5vdGlmeUVsZW1lbnQiLCAib24iLCAic3RvcFByb3BhZ2F0aW9uIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJkZXN0cm95IiwgIkNsaXBib2FyZCIsICJpbml0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZGlmZklkIiwgIm9sZElkIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgIiRib2R5IiwgImJ1aWxkTGluayIsICJfb2xkSWQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiZnJvbXJldiIsICJ0b3JlbGF0aXZlIiwgImNvbXBhcmUiLCAiZnJvbXJldmlkIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgInNldCJdCn0K
