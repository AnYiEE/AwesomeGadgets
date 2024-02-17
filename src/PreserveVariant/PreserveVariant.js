/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-preserve-variant.js>
 * @dependency ext.gadget.i18n, mediawiki.Uri
 */
/* <nowiki> */
'use strict';

/**
 * Work around <phabricator.wikimedia.org/T223053> by rewriting link URLs
 *
 * @Author: Wctaiwan, Lt2818
 * Thanks to Legoktm for the idea and for technical assistance, and to
 * Jack Phoenix for reviewing the implementation.
 */
(function preserveVariant($, mw) {
  var userVariant = mw.config.get('wgUserVariant');
  if (!userVariant || userVariant.indexOf('zh-') !== 0 || window.location.pathname.indexOf("/".concat(userVariant, "/")) !== 0 && new mw.Uri().query.variant !== userVariant) {
    return;
  }
  $(document).on('keydown mousedown touchstart', 'a', function () {
    var originalHref = $(this).attr('href');
    var uri;
    if (!originalHref) {
      return;
    }
    try {
      uri = new mw.Uri(originalHref);
    } catch (_unused) {
      return;
    }
    if (!('variant' in uri.query)) {
      if (originalHref.indexOf('/wiki/') === 0) {
        this.href = "/".concat(userVariant).concat(originalHref.slice(5));
      } else if (originalHref.indexOf('/index.php?') === 0) {
        this.href = uri.extend({
          variant: userVariant
        }).getRelativePath();
      }
    }
  });
})(jQuery, mw);
/* </nowiki> */