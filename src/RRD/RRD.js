/* <nowiki> */
'use strict';

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-RRD.js>
 * @dependency jquery.ui, mediawiki.util, ext.gadget.i18n
 */
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function ($, mw) {
  mw.loader.using(['jquery.ui', 'mediawiki.util'], function () {
    var get = function get(obj, attr, defret) {
      return obj.hasAttribute(attr) ? obj.getAttribute(attr) : defret;
    };
    var RRDPage = 'LIB talk:版本删除提报';
    var config = {
      checkboxes: {},
      others: {}
    };
    var ids = [];
    var dl = null;
    var msg;
    var log = false;
    var loadIDs = function loadIDs() {
      var boxes = document.querySelectorAll('input');
      var _iterator = _createForOfIteratorHelper(boxes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var box = _step.value;
          if (get(box, 'type') === 'checkbox' && box.checked) {
            var idRe = /ids\[(\d+)]/;
            var idArr = idRe.exec(get(box, 'name', ''));
            if (idArr !== null) {
              ids.push(idArr[1]);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    var submit = function submit(toHide, reason, otherReasons) {
      ids = _toConsumableArray(new Set(ids));
      var rrdArr = ['{{Revdel', '|status = ', "|article = ".concat(mw.config.get('wgPageName')), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
      var _iterator2 = _createForOfIteratorHelper(ids.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            i = _step2$value[0],
            id = _step2$value[1];
          rrdArr.push("|id".concat(i + 1, " = ").concat(id));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      rrdArr.push('}}\n--~~'.concat('~~'));
      $.ajax({
        url: mw.util.wikiScript('api'),
        data: {
          action: 'query',
          prop: 'revisions',
          titles: RRDPage,
          rvprop: 'content',
          format: 'json'
        }
      }).done(function (data) {
        var content = null;
        if (data.query && data.query.pages) {
          for (var id in data.query.pages) {
            if (data.query.pages[id]) {
              var page = data.query.pages[id];
              if (page.revisions && page.revisions.length > 0 && page.revisions[0]['*']) {
                content = page.revisions[0]['*'];
              }
            }
          }
        }
        if (content !== null) {
          $.ajax({
            url: mw.util.wikiScript('api'),
            dataType: 'json',
            type: 'POST',
            data: {
              action: 'edit',
              title: RRDPage,
              summary: msg.edit_summary,
              text: "".concat(content, "\n\n").concat(rrdArr.join('\n')),
              token: mw.user.tokens.get('csrfToken'),
              format: 'json'
            }
          }).done(function (data) {
            if (data && data.edit && data.edit.result === 'Success') {
              window.location = mw.config.get('wgServer') + mw.config.get('wgArticlePath').replace('$1', RRDPage);
            } else {
              if (data.error.code) {
                alert("Some errors occured while saving page: ".concat(data.error.code));
              } else {
                alert('Some errors occured while saving page: unknown');
              }
            }
          }).fail(function (_jqXHR, _textStatus, errorThrown) {
            console.log("Error when editing page ".concat(RRDPage, ": ").concat(errorThrown));
          });
        } else {
          console.log("Error when loading page ".concat(RRDPage, ": missing"));
        }
      }).fail(function (_jqXHR, _textStatus, errorThrown) {
        console.log("Error when loading page ".concat(RRDPage, ": ").concat(errorThrown));
      });
    };
    var updateConfig = function updateConfig() {
      if ($('#rrdHideContent').prop('checked')) {
        config.checkboxes.rrdHideContent = 1;
      }
      if ($('#rrdHideUsername').prop('checked')) {
        config.checkboxes.rrdHideUsername = 1;
      }
      if ($('#rrdHideSummary').prop('checked')) {
        config.checkboxes.rrdHideSummary = 1;
      }
      config.others.rrdReason = $('#rrdReason').val();
      config.others.rrdOtherReasons = $('#rrdOtherReasons').val();
    };
    var loadConfig = function loadConfig() {
      for (var k in config.others) {
        if (Object.prototype.hasOwnProperty.call(config.others, k)) {
          $("#".concat(k)).val(config.others[k]);
        }
      }
      for (var _k in config.checkboxes) {
        $("#".concat(_k)).prop('checked', Object.prototype.hasOwnProperty.call(config.checkboxes, _k));
      }
    };
    var showWindow = function showWindow() {
      loadIDs();
      if (ids.length === 0) {
        alert(msg.err_no_revision_provided);
        return null;
      }
      var html = "<div id=\"rrdConfig\">".concat(msg.hide_items, "<br />") + '<div style="float: left; padding: 0 5px;">' + '<input name="content" id="rrdHideContent" type="checkbox" value="content" checked>' + "<label for=\"rrdHideContent\" id=\"rrd-content\">".concat(log ? msg.hide_log : msg.hide_content, "</label>") + '</div><div style="float: left; padding: 0 5px;">' + '<input name="username" id="rrdHideUsername" type="checkbox" value="username">' + "<label for=\"rrdHideUsername\" id=\"rrd-username\">".concat(msg.hide_username, "</label>") + '</div><div style="float: left; padding: 0 5px;">' + '<input name="summary" id="rrdHideSummary" type="checkbox" value="summary">' + "<label for=\"rrdHideSummary\" id=\"rrd-summary\">".concat(msg.hide_summary, "</label>") + "</div><br /><br />".concat(msg.hide_reason, "<br />") + '<select name="rrdReason" id="rrdReason">' + "<option value=".concat(msg.hide_reason_rd1, ">") + "RD1\uFF1A".concat(msg.hide_reason_rd1, "</option>") + "<option value=".concat(msg.hide_reason_rd2, ">") + "RD2\uFF1A".concat(msg.hide_reason_rd2, "</option>") + "<option value=".concat(msg.hide_reason_rd3, ">") + "RD3\uFF1A".concat(msg.hide_reason_rd3, "</option>") + "<option value=".concat(msg.hide_reason_rd4, ">") + "RD4\uFF1A".concat(msg.hide_reason_rd4, "</option>") + "<option value=".concat(msg.hide_reason_rd5, ">") + "RD5\uFF1A".concat(msg.hide_reason_rd5, "</option>") + "<option value=\"\">".concat(msg.hide_reason_other, "</option>") + '</select>' + "<br /><br />".concat(msg.other_reasons, "<br />") + '<textarea name="otherReasons" id="rrdOtherReasons" rows=4></textarea>' + '</div>';
      if (dl) {
        dl.html(html).dialog('open');
        loadConfig();
        return null;
      }
      dl = $(html).dialog({
        title: msg.dialog_title,
        minWidth: 515,
        minHeight: 150,
        close: updateConfig,
        buttons: [{
          text: msg.dialog_button_submit,
          click: function click() {
            $(this).dialog('close');
            var reason = config.others.rrdReason;
            var otherReasons = config.others.rrdOtherReasons;
            if (otherReasons && reason) {
              otherReasons = "\uFF0C".concat(otherReasons);
            }
            var toHide = [];
            if (Object.prototype.hasOwnProperty.call(config.checkboxes, 'rrdHideContent')) {
              toHide.push(log ? msg.hide_log : msg.hide_content);
            }
            if (Object.prototype.hasOwnProperty.call(config.checkboxes, 'rrdHideUsername')) {
              toHide.push(msg.hide_username);
            }
            if (Object.prototype.hasOwnProperty.call(config.checkboxes, 'rrdHideSummary')) {
              toHide.push(msg.hide_summary);
            }
            var cont = true;
            if (toHide.length === 0) {
              alert(msg.err_no_item_provided);
              return null;
            }
            if (!reason && !otherReasons) {
              cont = confirm(msg.warn_no_reason_provided);
            }
            if (cont) {
              submit(toHide.join('、'), reason, otherReasons);
            }
          }
        }, {
          text: msg.dialog_button_cancel,
          click: function click() {
            $(this).dialog('close');
          }
        }]
      });
    };
    var main = function main() {
      var $report = $('<button />', {
        name: 'reportRRD',
        type: 'button',
        'class': 'historysubmit mw-history-rrd mw-ui-button',
        title: msg.report_button_title + RRDPage,
        text: log ? msg.report_button_log_text : msg.report_button_text
      });
      $report.on('click', showWindow);
      // For action=history
      $('.historysubmit.mw-history-compareselectedversions-button').after($report);
      // For Special:Log
      $('.editchangetags-log-submit.mw-log-editchangetags-button').after($report);
    };
    var loadMessages = function loadMessages() {
      msg = {
        edit_summary: wgULS('[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除', '[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除'),
        err_no_revision_provided: wgULS('您没有选择需隐藏的版本！', '您沒有選擇需隱藏的版本！'),
        err_no_item_provided: wgULS('您没有选择需隐藏的项目！', '您沒有選擇需隱藏的項目！'),
        warn_no_reason_provided: wgULS('您没有输入任何理由！确定要继续吗？', '您沒有輸入任何理由！確定要繼續嗎？'),
        hide_items: wgULS('需隐藏的项目：', '需隱藏的項目：'),
        hide_content: wgULS('编辑内容', '編輯內容'),
        hide_log: wgULS('日志目标与参数', '日誌目標與參數'),
        hide_username: wgULS('编辑者用户名/IP地址', '編輯者用戶名/IP位址'),
        hide_summary: wgULS('编辑摘要', '編輯摘要'),
        hide_reason: wgULS('理据：', '理據：'),
        hide_reason_rd1: wgULS('条目中明显侵犯著作权的内容', '條目中明顯侵犯著作權的內容'),
        hide_reason_rd2: wgULS('严重侮辱、贬低或攻击性文本', '嚴重侮辱、貶低或攻擊性文本'),
        hide_reason_rd3: wgULS('纯粹扰乱性内容', '純粹擾亂性內容'),
        hide_reason_rd4: wgULS('明显违反法律法规或违背公序良俗的内容', '明顯違反法律法規或違背公序良俗的內容'),
        hide_reason_rd5: wgULS('其他不宜公开的版本内容', '其他不宜公開的版本內容'),
        hide_reason_other: wgULS('仅使用下方的附加理由', '僅使用下方的附加理由'),
        other_reasons: wgULS('附加理由（可选，不用签名）', '附加理由（可選，不用簽名）'),
        dialog_title: wgULS('提报修订版本删除', '提報修訂版本刪除'),
        dialog_button_submit: wgULS('提报', '提報'),
        dialog_button_cancel: wgULS('取消', '取消'),
        report_button_title: wgULS('将选中的版本提报到', '將選中的版本提報到'),
        report_button_text: wgULS('请求删除被选版本', '請求刪除被選版本'),
        report_button_log_text: wgULS('请求删除被选日志', '請求刪除被選日誌')
      };
    };
    var init = function init() {
      loadMessages();
      if (mw.config.get('wgAction') === 'history' || mw.config.get('wgCanonicalSpecialPageName') === 'Log') {
        log = mw.config.get('wgCanonicalSpecialPageName') === 'Log';
        main();
      }
    };
    $(init);
  });
})(jQuery, mediaWiki);
/* </nowiki> */
