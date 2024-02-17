/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @dependency ext.gadget.SiteCommonJS, ext.gadget.Ding, mediawiki.api, oojs-ui-windows
 */
"use strict";

/* !
 * @author 安忆
 * @file ConfirmLogout.js
 *
 * Copyright (c) 2021-present, 安忆.
 *
 * This source code is licensed under the GPL v3 license.
 */
(function ($, mw) {
  mw.loader.using(["ext.gadget.Ding", "mediawiki.api", "oojs-ui-windows"]).then(function () {
    $(function () {
      var dom = document.querySelector("#ca-cb-logout>a") || document.querySelector(".menu__item--logout") || document.querySelector("#pt-logout>a");
      if (dom && mw.config.get("wgUserName")) {
        var newDom = document.createElement("a");
        if (dom.className) {
          newDom.className = dom.className;
        }
        newDom.href = dom.href;
        newDom.innerHTML = dom.innerHTML;
        dom.parentNode.appendChild(newDom);
        dom.parentNode.removeChild(dom);
        newDom.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          OO.ui.confirm($("<div>").addClass("oo-ui-window-foot").css({
            border: ".1rem solid #0645ad",
            display: "flex",
            "justify-content": "space-evenly"
          }).html($("<span>").attr({
            style: "font-size :1.2rem; font-weight: 500; line-height: 1.8; padding: .4em 0"
          }).text("\u60A8".concat(wgULS("确", "確"), "\u5B9A\u8981").concat(wgULS("退", "登"), "\u51FA").concat(wgULS("吗", "嗎"), "\uFF1F")))).then(function (confirmed) {
            if (confirmed) {
              window.DingExposedInterface(mw.message("logging-out-notify"), "default", "long");
              new mw.Api({
                ajax: {
                  headers: {
                    "Api-User-Agent": "Qiuwen/1.1 (ConfirmLogout/1.1; ".concat(mw.config.get("wgWikiID"), ")")
                  }
                }
              }).postWithEditToken({
                action: "logout"
              }).then(function () {
                window.location.reload();
              });
            }
          });
        });
      }
    });
  });
})(jQuery, mediaWiki);