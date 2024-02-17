/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js>
 * @base <https://github.com/Xi-Plus/MediaWiki-Gadget/blob/master/fix-invalid-self-closed-tags.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/EditFormJS>
 * @dependency ext.gadget.i18n, mediawiki.util, oojs-ui-core
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

/**
 * 管理员注意：
 *
 * 本页面脚本在使用传统编辑器、可视化编辑器、2017 wikitext编辑器时均会加载，且只加载一次。
 * 但可视化编辑器与2017 wikitext编辑器有两个问题：
 * 1. 此脚本运行时，编辑器可能尚未加载完成。
 * 2. 互相切换时，或者放弃编辑之后再次点击编辑时，浏览器页面不会刷新，本页面脚本不会再次加载。
 *
 * 因此，如果代码与可视化编辑器、2017 wikitext编辑器相关，需要在进入编辑器时运行，请集中放在后面的
 *  mw.hook('ve.activationComplete').add((): void => {
 *  ……
 *  });
 * 中。
 */
(function editForm() {
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      preview: localize({
        en: 'Please preview the edited text',
        ja: 'プレビューしてください',
        'zh-hans': '请先预览',
        'zh-hant': '請先預覽'
      }),
      conversionSoftware: localize({
        en: 'The system has detected that you are using a client-side traditional-simplified conversion software, which has converted the content in the text box. Please close this software and reopen the editing interface before making any edits.',
        ja: 'システムは、クライアント側の簡繁体字変換ソフトウェアを検出しました。このソフトウェアがテキストボックス内のコンテンツを変換しています。編集する前に、このソフトウェアを閉じて、編集インターフェースを再度開いてから編集してください。',
        'zh-hans': '系统检测到您使用了客户端繁简转换软件，且此软件对文本框中的内容进行了转换。请关闭此软件后重新打开编辑界面，再进行编辑。',
        'zh-hant': '系統檢測到您使用了用戶端繁簡轉換軟體，且此軟體對文字方塊中的內容進行了轉換。請關閉此軟體後重新打開編輯介面，再進行編輯。'
      }),
      aiAssisted: localize({
        en: 'This edited content was assisted by artificial intelligence',
        ja: 'この編集内容は人工知能による支援を受けています',
        'zh-hans': '此编辑由人工智能（AI）辅助',
        'zh-hant': '此編輯由人工智能（AI）輔助'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  // 编辑工具栏
  $(function () {
    var $element = $('span.oo-ui-fieldLayout-header');
    if (mw.config.get('wgAction') === 'edit' && $element.length > 0) {
      $element.css('max-width', 'none'); // 在一行显示编辑摘要
    }
  });

  $(function () {
    var veInitCount = 0;
    // 在提交新段落时，让主题栏在特定情况下失效
    if ($('#no-new-title').length > 0 && $('#editform input[name=wpSection]').val() === 'new') {
      // 传统文本编辑器
      var $wpSummary = $('#wpSummary');
      $wpSummary.attr('disabled', 'disabled');
      $wpSummary.val('');
    }
    // 可视化编辑器 / 新wikitext模式
    var noSectionTitlePages = ['LIB:过滤器处理/报告', 'LIB:字词转换处理/地区词候选'];
    if (noSectionTitlePages.indexOf(mw.config.get('wgPageName')) !== -1 && mw.util.getParamValue('section') === 'new') {
      mw.util.addCSS('h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}');
    }
    /**
     * 快速选择常见编辑摘要
     * 摘要内容请到[[MediaWiki:Summary]]及相关中文变体页面维护。
     */
    var insertSummary = function insertSummary($this, $summary) {
      var _$item$attr;
      var summary = $summary.val();
      var $item = $this.parent('.mw-summary-preset-item');
      summary = summary.replace(/\s+$/g, '');
      if (summary !== '') {
        summary += ' ';
      }
      summary += (_$item$attr = $item.attr('title')) !== null && _$item$attr !== void 0 ? _$item$attr : $this.text();
      $this.replaceWith($this.contents());
      $summary.val(summary).trigger('change');
    };
    // 传统编辑器
    $('#wpSummaryLabel .mw-summary-preset').on('click', '.mw-summary-preset-item a', function (event) {
      event.preventDefault();
      insertSummary($(this), $('#wpSummary'));
    });
    // 可视化编辑器、新Wikitext
    var isInitSummary = false;
    mw.hook('ve.saveDialog.stateChanged').add(function () {
      // 编辑摘要链接在第一次点击“发布更改”按钮之后才会加载，因此需要额外判断
      if (isInitSummary) {
        return;
      }
      $('div.ve-ui-mwSaveDialog-summaryLabel span.mw-summary-preset-item > a').removeAttr('target').on('click', function (event) {
        event.preventDefault();
        insertSummary($(this), $('div.ve-ui-mwSaveDialog-summary > textarea'));
      });
      isInitSummary = true;
    });
    /**
     * 每次进入可视化编辑器、2017 wikitext编辑器都要运行的代码请集中放在此处，
     * 由于无法保证加载顺序，请避免另外实现mw.hook('ve.activationComplete').add(...)。
     */
    mw.hook('ve.activationComplete').add(function () {
      // 由于无法保证用户是第一次进入编辑器，需记录进入次数。
      veInitCount = veInitCount + 1;
      // 编辑摘要链接初始化
      isInitSummary = false;
    });
  });
  // 强制预览
  $(function () {
    var permittedGroups = ['autoconfirmed', 'confirmed'];
    if (mw.config.get('wgAction') !== 'edit' || permittedGroups.some(function (group) {
      return mw.config.get('wgUserGroups').indexOf(group) !== -1;
    })) {
      return;
    }
    var originalLabel;
    mw.hook('wikipage.editform').add(function ($editForm) {
      var saveButton;
      try {
        saveButton = OO.ui.infuse($editForm.find('#wpSaveWidget'));
      } catch (_unused) {
        return;
      }
      if (!$('#wikiPreview, #wikiDiff').is(':visible')) {
        // @ts-ignore
        if (saveButton.isDisabled()) {
          return;
        }
        if (originalLabel === undefined) {
          // @ts-ignore
          originalLabel = saveButton.getLabel();
        }
        saveButton
        // @ts-ignore
        .setDisabled(true).setLabel("".concat(originalLabel, "\uFF08").concat(message('preview'), "\uFF09"));
      } else if (originalLabel !== undefined) {
        // @ts-ignore
        saveButton.setLabel(originalLabel).setDisabled(false);
      }
    });
  });
  // 取消修订编辑摘要修正
  $(function () {
    var autoSummary = document.querySelector('[name=wpAutoSummary]');
    if (location.search.indexOf('undo=') !== -1 && autoSummary) {
      autoSummary.value = '';
    }
  });
  // 检测客户端繁简转换
  $(function () {
    $('#antispam-container').append($('<input>').attr({
      id: 'wpAntiConv',
      type: 'text',
      value: "\u6C49\u6F22"
    }));
    var checkAntiConv = function checkAntiConv() {
      var $wpAntiConv = $('#wpAntiConv');
      if ($wpAntiConv.length > 0 && $wpAntiConv.val() !== "\u6C49\u6F22") {
        $('#editform :input').attr({
          disabled: 'disabled',
          readonly: 'readonly'
        });
        mw.notify(message('conversionSoftware'), {
          type: 'warn',
          autoHide: false
        });
      } else {
        setTimeout(checkAntiConv, 1000);
      }
    };
    setTimeout(checkAntiConv, 1000);
  });
  // AI辅助编辑特殊声明
  $(function () {
    var isInit = false;
    var statement = function statement(tagName, labelName) {
      if (isInit) {
        return;
      }
      // @ts-ignore
      var $layout = ve.init ? $('.ve-ui-mwSaveDialog-checkboxes') : $('#editform').find('.editCheckboxes .oo-ui-horizontalLayout');
      if (!$layout.length) {
        return;
      }
      isInit = true;
      var checkbox = new OO.ui.CheckboxInputWidget({
        selected: false
      });
      var checkboxField = new OO.ui.FieldLayout(checkbox, {
        align: 'inline',
        label: labelName
      });
      checkbox.on('change', function () {
        var changeTags;
        // @ts-ignore
        if (ve.init) {
          var _ve$init$target$saveF, _ve$init$target$saveF2, _ve$init$target$saveF3;
          // @ts-ignore
          changeTags = (_ve$init$target$saveF = (_ve$init$target$saveF2 = (_ve$init$target$saveF3 = ve.init.target.saveFields).wpChangeTags) === null || _ve$init$target$saveF2 === void 0 ? void 0 : _ve$init$target$saveF2.call(_ve$init$target$saveF3)) !== null && _ve$init$target$saveF !== void 0 ? _ve$init$target$saveF : '';
          changeTags = checkbox.isSelected() ? "".concat(changeTags, ",").concat(tagName) : changeTags.replace(",".concat(tagName), '');
          // @ts-ignore
          ve.init.target.saveFields.wpChangeTags = function () {
            return changeTags;
          };
        } else {
          var $tagInput = $('<input>').attr({
            id: 'wpChangeTags',
            name: 'wpChangeTags',
            type: 'hidden',
            value: ''
          });
          var $wpChangeTags = $('#wpChangeTags');
          if (!$wpChangeTags.length) {
            $('#editform').prepend($tagInput);
          }
          changeTags = $wpChangeTags.val();
          changeTags = checkbox.isSelected() ? "".concat(changeTags, ",").concat(tagName) : changeTags.replace(",".concat(tagName), '');
          $wpChangeTags.val(changeTags);
        }
      });
      $layout.append(checkboxField.$element);
    };
    var addStatement = function addStatement() {
      statement('AI_assisted', message('aiAssisted'));
    };
    mw.hook('wikipage.editform').add(addStatement);
    mw.hook('ve.saveDialog.stateChanged').add(addStatement);
  });
  // 自动替换不当的HTML标记语法
  
})();
/* </nowiki> */
