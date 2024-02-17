/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/User:Xiplus/js/userRightsManager.js>
 * @base <https://zh.wikipedia.org/wiki/User:MusikAnimal/userRightsManager.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/UserRightsManager>
 * @dependency ext.gadget.i18n, ext.gadget.morebits, mediawiki.api, mediawiki.widgets.SelectWithInputWidget, mediawiki.widgets.expiry, oojs-ui
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function userRightsManager() {
  var pagePermissions = {
    '有兽档案馆_talk:权限申请/申请巡查回退权': 'patroller',
    '有兽档案馆_talk:权限申请/申请优质编辑者': 'autopatroller',
    '有兽档案馆_talk:权限申请/申请确认用户权': 'confirmed',
    '有兽档案馆_talk:权限申请/申请大量消息发送权': 'massmessage-sender',
    '有兽档案馆_talk:权限申请/申请管理员或界面管理员': 'sysop',
    '有兽档案馆_talk:权限申请/申请模板编辑权': 'templateeditor',
    '有兽档案馆_talk:权限申请/申请机器人权限': 'bot',
  };
  var pageName = mw.config.get('wgPageName');
  var permission = pagePermissions[pageName];
  if (!permission) {
    return;
  }
  var permissionNames = {
    patroller: '巡查员',
    autopatrolled: '优质编辑者',
    confirmed: '确认用户',
    'massmessage-sender': '大量消息发送者',
    eventsponsor: '活动组织者',
    importer: '导入者',
    templateeditor: '模板编辑员',
    bot: '机器人',
    'suppress': '监督员',
    'interface-admin': '界面管理员',
    sysop: '管理员',
  };
  var templates = {
    patroller: 'Patrolgranted',
    autoreviewer: 'Autopatrolgranted',
    'massmessage-sender': 'MMSgranted',
    templateeditor: 'Template editor granted'
  };
  var api = new mw.Api({
    ajax: {
      headers: {
        'Api-User-Agent': "YsArxiv/1.1 (UserRightsManager/1.1; ".concat(mw.config.get('wgWikiID'), ")")
      }
    }
  });
  var permaLink;
  var userName;
  var dialog;
  var tagLine = '（使用[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）';
  var assignPermission = function assignPermission(summary, revId, expiry) {
    permaLink = "[[Special:PermaLink/".concat(revId, "#User:").concat(userName, "|\u6743\u9650\u7533\u8BF7]]");
    var fullSummary = "+".concat(permissionNames[permission], "\uFF1B").concat(permaLink);
    if (summary !== '') {
      fullSummary += "\uFF1B".concat(summary);
    }
    fullSummary += tagLine;
    var params = {
      action: 'userrights',
      user: userName.replace(/ /g, '_'),
      add: permission,
      expiry: expiry === '' ? 'infinity' : expiry,
      reason: fullSummary
    };
    return api.postWithToken('userrights', params);
  };
  var markAsDone = function markAsDone(closingRemarks) {
    var sectionNode = document.getElementById("User:".concat(userName.replace(/"/g, '.22').replace(/ /g, '_')));
    var _$$siblings$find$prop = $(sectionNode).siblings('.mw-editsection').find('a:not(.mw-editsection-visualeditor)').prop('href').match(/section=(\d+)/),
      _$$siblings$find$prop2 = _slicedToArray(_$$siblings$find$prop, 2),
      sectionNumber = _$$siblings$find$prop2[1];
    var basetimestamp;
    var curtimestamp;
    var page;
    var revision;
    var content;
    var params = {
      action: 'query',
      format: 'json',
      formatversion: '2',
      prop: 'revisions',
      titles: [pageName],
      curtimestamp: true,
      rvprop: ['content', 'timestamp'],
      rvsection: sectionNumber
    };
    return api.get(params).then(function (data) {
      if (!data.query || !data.query.pages) {
        return $.Deferred().reject('unknown');
      }
      var _data$query$pages = _slicedToArray(data.query.pages, 1);
      page = _data$query$pages[0];
      if (!page || page.invalid) {
        return $.Deferred().reject('invalidtitle');
      }
      if (page.missing) {
        return $.Deferred().reject('nocreate-missing');
      }
      var _page$revisions = _slicedToArray(page.revisions, 1);
      revision = _page$revisions[0];
      basetimestamp = revision.timestamp;
      curtimestamp = data.curtimestamp;
      var _revision = revision;
      content = _revision.content;
    }).then(function () {
      content = content.trim();
      content = content.replace(/:{{status(\|.*?)?}}/i, ':{{Status|+}}');
      content += closingRemarks;
      var params_ = {
        action: 'edit',
        format: 'json',
        formatversion: '2',
        title: pageName,
        assert: mw.config.get('wgUserName') ? 'user' : undefined,
        nocreate: true,
        section: sectionNumber,
        starttimestamp: curtimestamp,
        summary: "/* User:".concat(userName, " */ \u5B8C\u6210").concat(tagLine),
        text: content,
        basetimestamp: basetimestamp
      };
      return api.postWithEditToken(params_);
    });
  };
  var issueTemplate = function issueTemplate(watch) {
    var talkPage = "User talk:".concat(userName.replace(/ /g, '_'));
    var params = {
      action: 'edit',
      title: talkPage,
      appendtext: "\n\n{{subst:".concat(templates[permission], "}}"),
      summary: "\u6839\u636E".concat(permaLink, "\u6388\u4E88").concat(permissionNames[permission]).concat(tagLine),
      watchlist: watch ? 'watch' : 'unwatch'
    };
    return api.postWithEditToken(params);
  };
  var showDialog = function showDialog() {
    var Dialog = function Dialog(config) {
      Dialog.super.call(this, config);
    };
    OO.inheritClass(Dialog, OO.ui.ProcessDialog);
    Dialog.static.name = 'user-rights-manager';
    Dialog.static.title = "\u6388\u4E88".concat(permissionNames[permission]).concat(window.wgULS('给', '給')).concat(userName);
    Dialog.static.actions = [{
      action: 'submit',
      label: window.wgULS('授权', '授權'),
      flags: ['primary', 'progressive']
    }, {
      label: '取消',
      flags: ['safe', 'close']
    }];
    Dialog.prototype.getApiManager = function () {
      return this.apiManager;
    };
    Dialog.prototype.getBodyHeight = function () {
      return 255;
    };
    Dialog.prototype.initialize = function () {
      Dialog.super.prototype.initialize.call(this);
      this.editFieldset = new OO.ui.FieldsetLayout({
        classes: ['container']
      });
      this.editPanel = new OO.ui.PanelLayout({
        expanded: false
      });
      this.editPanel.$element.append(this.editFieldset.$element);
      var rightLogWapper = $('<span>');
      var url = mw.util.getUrl('Special:Log/rights', {
        type: 'rights',
        page: "User:".concat(userName)
      });
      $('<a>').text('最近权限日志').attr({
        href: url,
        target: '_blank'
      }).appendTo(rightLogWapper);
      rightLogWapper.append('：');
      var rightLogText = $('<span>').text('获取中').appendTo(rightLogWapper);
      this.rightLog = new OO.ui.LabelWidget({
        label: rightLogWapper
      });
      var params = {
        action: 'query',
        leaction: 'rights/rights',
        lelimit: 1,
        letitle: "User:".concat(userName),
        list: 'logevents'
      };
      api.get(params).done(function (_ref) {
        var query = _ref.query;
        var logs = query.logevents;
        if (logs.length === 0) {
          rightLogText.text('没有任何日志');
        } else {
          var timestamp = new Morebits.date(logs[0].timestamp).calendar();
          var rights = logs[0].params.newgroups.join('、') || '（无）';
          rightLogText.text("".concat(timestamp, " ").concat(logs[0].user, "\u5C06\u7528\u6237\u7EC4\u6539\u4E3A").concat(rights));
        }
      });
      this.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
        value: '',
        placeholder: '可留空'
      });
      this.expiryInput = new mw.widgets.ExpiryWidget({
        $overlay: $('.oo-ui-window'),
        RelativeInputClass: mw.widgets.SelectWithInputWidget,
        relativeInput: {
          or: true,
          dropdowninput: {
            options: [{
              data: '1 day',
              label: '1天'
            }, {
              data: '1 week',
              label: '1周'
            }, {
              data: '1 month',
              label: '1个月'
            }, {
              data: '3 months',
              label: '3个月'
            }, {
              data: '6 months',
              label: '6个月'
            }, {
              data: '1 year',
              label: '1年'
            }, {
              data: 'infinite',
              label: '无限期'
            }, {
              data: 'other',
              label: '其他时间'
            }],
            value: 'infinite'
          },
          textinput: {
            required: true
          }
        }
      });
      this.closingRemarksInput = new OO.ui.TextInputWidget({
        value: '{{done}}。--~~'.concat('~~')
      });
      this.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
        selected: false
      });
      this.editFieldset.addItems(this.rightLog);
      var formElements = [new OO.ui.FieldLayout(this.rightsChangeSummaryInput, {
        label: window.wgULS('授权原因', '授权原因')
      }), new OO.ui.FieldLayout(this.expiryInput, {
        label: window.wgULS('结束时间', '結束時間')
      }), new OO.ui.FieldLayout(this.closingRemarksInput, {
        label: window.wgULS('关闭请求留言', '關閉請求留言')
      })];
      if (templates[permission]) {
        formElements.push(new OO.ui.FieldLayout(this.watchTalkPageCheckbox, {
          label: window.wgULS('监视用户讨论页', '監視用戶討論頁')
        }));
      }
      this.editFieldset.addItems(formElements);
      this.submitPanel = new OO.ui.PanelLayout({
        $: this.$,
        expanded: false
      });
      this.submitFieldset = new OO.ui.FieldsetLayout({
        classes: ['container']
      });
      this.submitPanel.$element.append(this.submitFieldset.$element);
      this.changeRightsProgressLabel = new OO.ui.LabelWidget();
      this.changeRightsProgressField = new OO.ui.FieldLayout(this.changeRightsProgressLabel);
      this.markAsDoneProgressLabel = new OO.ui.LabelWidget();
      this.markAsDoneProgressField = new OO.ui.FieldLayout(this.markAsDoneProgressLabel);
      this.issueTemplateProgressLabel = new OO.ui.LabelWidget();
      this.issueTemplateProgressField = new OO.ui.FieldLayout(this.issueTemplateProgressLabel);
      this.stackLayout = new OO.ui.StackLayout({
        items: [this.editPanel, this.submitPanel],
        padded: true
      });
      this.$body.append(this.stackLayout.$element);
    };
    Dialog.prototype.onSubmit = function () {
      var _this = this;
      var self = this;
      var promiseCount = templates[permission] ? 3 : 2;
      self.actions.setAbilities({
        submit: false
      });
      var addPromise = function addPromise(_ref2, promise) {
        var $field = _ref2.$field;
        self.pushPending();
        promise.done(function () {
          $field.append($('<span>').text('完成！').prop('style', 'position: relative; top: .5em; color: #009000; font-weight: bold;'));
        }).fail(function (obj) {
          if (obj && obj.error && obj.error.info) {
            $field.append($('<span>').text("\u9519\u8BEF\uFF1A".concat(obj.error.info)).prop('style', 'position: relative; top: .5em; color: #c00; font-weight: bold;'));
          } else {
            $field.append($('<span>').text('发生未知错误。').prop('style', 'position: relative; top: .5em; color: #c00; font-weight: bold;'));
          }
        }).always(function () {
          promiseCount--; // FIXME: maybe we could use a self.isPending() or something
          self.popPending();
          if (promiseCount === 0) {
            setTimeout(function () {
              location.reload(true);
            }, 1000);
          }
        });
        return promise;
      };
      self.markAsDoneProgressField.setLabel('标记请求为已完成...');
      self.submitFieldset.addItems([self.markAsDoneProgressField]);
      self.changeRightsProgressField.setLabel('授予权限...');
      self.submitFieldset.addItems([self.changeRightsProgressField]);
      if (templates[permission]) {
        self.issueTemplateProgressField.setLabel('发送通知...');
        self.submitFieldset.addItems([self.issueTemplateProgressField]);
      }
      addPromise(self.markAsDoneProgressField, markAsDone("\n:".concat(this.closingRemarksInput.getValue()))).then(function (_ref3) {
        var edit = _ref3.edit;
        addPromise(self.changeRightsProgressField, assignPermission(_this.rightsChangeSummaryInput.getValue(), edit.newrevid, _this.expiryInput.getValue())).then(function () {
          if (templates[permission]) {
            addPromise(self.issueTemplateProgressField, issueTemplate(_this.watchTalkPageCheckbox.isSelected()));
          }
        });
      });
      self.stackLayout.setItem(self.submitPanel);
    };
    Dialog.prototype.getActionProcess = function (action) {
      return Dialog.super.prototype.getActionProcess.call(this, action).next(function () {
        if (action === 'submit') {
          return this.onSubmit();
        }
        return Dialog.super.prototype.getActionProcess.call(this, action);
      }, this);
    };
    dialog = new Dialog({
      size: 'medium'
    });
    var windowManager = new OO.ui.WindowManager();
    $('body').append(windowManager.$element);
    windowManager.addWindows([dialog]);
    windowManager.openWindow(dialog);
  };
  $('.perm-assign-permissions a').on('click', function (e) {
    if (permission === 'AutoWikiBrowser') {
      return true;
    }
    e.preventDefault();
    userName = mw.util.getParamValue('user', $(this).attr('href'));
    showDialog();
  });
})();
/* </nowiki> */