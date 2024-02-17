/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Wikiplus>
 * @dependency mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
/**
 * Including icons from OOUI Project <https://github.com/wikimedia/oojs-ui/blob/master/src/themes/wikimediaui/images/icons>
 * Licensed under MIT License <https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT>
 * See <https://github.com/wikimedia/oojs-ui/blob/master/AUTHORS.txt> for contributors.
 */
(function wikiplusLoad() {
    if (mw.config.get('wgAction') === 'view' && mw.config.get('wgIsArticle')) {
      mw.loader.load(mw.util.getUrl('MediaWiki:Gadget-Wikiplus.js', {
        action: 'raw',
        ctype: 'text/javascript',
        maxage: '3600',
        smaxage: '3600'
      }));
      mw.util.addCSS('.mw-editsection-visualeditor{display:none}.Wikiplus-InterBox{max-width:90vw}body.skin-write li#Wikiplus-Edit-TopBtn{display:inline-block !important}body.skin-write li#Wikiplus-Edit-TopBtn a{padding:0 1em 0 0;display:inline-block;width:auto}');
      if (!('ontouchstart' in document)) {
        /**
         * @description settings Icon from OOjs UI
         * @base <https://github.com/wikimedia/oojs-ui/blob/e17952e413cfc00c15cfd861d47463c29062afe7/src/themes/wikimediaui/images/icons/settings.svg>
         * @license MIT <https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT>
         */
        var settingsIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20' height='20' fill='%2354595d'%3E%3Cg transform='translate(10 10)'%3E%3Cpath id='A' d='M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3'/%3E%3Cuse transform='rotate(45)' xlink:href='%23A'/%3E%3Cuse transform='rotate(90)' xlink:href='%23A'/%3E%3Cuse transform='rotate(135)' xlink:href='%23A'/%3E%3C/g%3E%3Cpath d='M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7'/%3E%3C/svg%3E";
        mw.util.addCSS(".Wikiplus-Symbol-Btn{vertical-align:bottom!important}.mw-ui-icon-portletlink-wphl-settings:before{background-image:url(".concat(settingsIcon, ")}"));
        mw.loader.load(mw.util.getUrl('MediaWiki:Gadget-Wikiplus-highlight.js', {
          action: 'raw',
          ctype: 'text/javascript',
          maxage: '3600',
          smaxage: '3600'
        }));
      }
    }
  })();
  /* </nowiki> */