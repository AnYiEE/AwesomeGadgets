'use strict';
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js>
 */
(function ($, mw) {
    var bytecount = function (text) {
        // eslint-disable-next-line no-control-regex
        text = text.replace(/[\u0000-\u007F]/g, '.');
        text = text.replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, '..');
        text = text.replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, '...');
        return text.length;
    };
    var cjkcount = function (text) {
        text = text.replace(/\./g, '');
        text = text.replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, '.');
        text = text.replace(/[^.]/g, '');
        return text.length;
    };
    var getwcbytext = function (text) { return "".concat(text.length, " 字符 (").concat(cjkcount(text), " CJK汉字)<br>").concat(bytecount(text), " 字节 在 <a href=\"").concat(mw.config.get('wgScript'), "?title=UTF-8\">UTF-8</a> 编码中"); };
    var getsel = function () { return window.getSelection().toString(); };
    var dowc = function () {
        $('.wordcount').remove();
        var text = getsel();
        if (text.length === 0) {
            return;
        }
        var divj = $('<div>')
            .html(getwcbytext(text))
            .css({
            position: 'fixed',
            right: '0',
            bottom: '0',
            margin: '4px',
            padding: '6px'
        })
            .addClass('wordcount ui-state-highlight ui-corner-all')
            .appendTo('body');
        window.setTimeout(function () {
            divj.fadeOut('slow');
        }, 5000);
    };
    if (mw.config.get('wgAction') === 'view') {
        if ('ontouchstart' in document) {
            $(document).on('touchstart touchend', dowc);
        }
        else {
            $(document).on('mouseup', dowc).on('keyup', dowc);
        }
    }
})(jQuery, mediaWiki);