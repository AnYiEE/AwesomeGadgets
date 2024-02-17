/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/HotCat>
 * @dependency jquery.ui, mediawiki.storage, mediawiki.util, mediawiki.user
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
 * CheckCategories HotCat Extension –
 * removes the template when categorizing (prompts before) with HotCat and
 * adds a link "Categories are OK" to the category-section
 *
 * @rev 2 (2014-03-20)
 * @author Rillke, 2012
 */
(function hotCatCheck() {
  if (mw.config.get('wgNamespaceNumber') !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !$('.checkcategories')[0]) {
    return;
  }
  var checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  var selfName = '([[MediaWiki:Gadget-HotCat-check.js|Script]]): ';
  var storageItemName = 'checkCat';
  var storageItem = mw.storage.get(storageItemName);
  /**
   * A few styling helper functions
   *
   * @return {undefined}
   */
  var createjIcon = function createjIcon(iconClass) {
    return $('<span>').attr('class', "ui-icon ".concat(iconClass, " catcheck-inline-icon")).text(' ');
  };
  var createNotifyArea = function createNotifyArea(textNode, icon, state) {
    return $('<div>').addClass('ui-widget').append($('<div>').attr('class', "".concat(state, " ui-corner-all")).css({
      'margin-top': '20px',
      padding: '0.7em'
    }).append($('<p>').append(createjIcon(icon).css('marginRight', '0.3em'), textNode)));
  };
  mw.util.addCSS('.catcheck-inline-icon{display:inline-block;position:relative;top:2px}');
  // Remove "check categories" when using HotCat
  // Only executed on first submit
  $('body').one('submit.checkCatListener', '#hotcatCommitForm', function (e) {
    if (storageItem === 'disabled') {
      return true;
    }
    var self = this;
    var newVal = self.wpTextbox1.value.replace(checkCategoriesRegExp, '');
    var dlgButtons = {};
    var $dialogCheckStorage;
    var $permaSaveHint;
    var $textHintNode;
    var $dialog;
    var doRemove = function doRemove() {
      self.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self.wpSummary.value));
      self.wpTextbox1.value = newVal;
    };
    var writeStorage = function writeStorage(val) {
      mw.storage.set(storageItemName, val, 6048e2); // 7 days
    };

    dlgButtons['Yes, Remove'] = function () {
      doRemove();
      if ($dialogCheckStorage[0].checked) {
        writeStorage('auto');
      }
      $(this).dialog('close');
    };
    dlgButtons['No, keep it'] = function () {
      if ($dialogCheckStorage[0].checked) {
        writeStorage('disabled');
      }
      $(this).dialog('close');
    };
    var _addToJS = function _addToJS(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass('ui-state-disabled')) {
        return;
      }
      var $el = $(this);
      $el.off('click').text('Please wait.');
      $permaSaveHint.addClass('ui-state-disabled');
      var params = {
        action: 'edit',
        title: "User:".concat(mw.config.get('wgUserName'), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data('addText'),
        token: mw.user.tokens.get('csrfToken')
      };
      var editDone = function editDone(editStat) {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: 'hotCatCheck',
            type: 'error'
          });
          $el.text('Edit-Error!');
        } else {
          $el.text('Done.');
          $permaSaveHint.fadeOut();
        }
      };
      $.post(mw.util.wikiScript('api'), params, editDone);
    };
    /**
     * On Wikimedia Commons there were people who said:
     * "Categorizing with HotCat does legit automated removal of the check-cat-message"
     * So we invented a dialog that should be readable by users even with very few English skills.
     */
    var prompt = function prompt() {
      $dialogCheckStorage = $('<input>').attr({
        type: 'checkbox',
        id: 'hotCatAutoRemoveCheckCatStorage'
      }).on('change', function () {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $('<ul>');
      $('<li>').append($('<a>').attr('href', '#').text('Disable this feature.').data('addText', '\nwindow.HotCatAutoRemoveCheckCatOptOut = true;').on('click', _addToJS)).appendTo($textHintNode);
      $('<li>').append($('<a>').attr('href', '#').text('Remove {{check categories}} when editing using HotCat without prompting.').data('addText', '\nwindow.HotCatAutoRemoveCheckCat = true;').on('click', _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($('<span>').text('Save these setting in your common.js: ').append($textHintNode), 'ui-icon-info', 'ui-state-highlight');
      $dialog = $('<div>').append($('<span>').css({
        'font-size': '2em',
        'line-height': '1.8em'
      }).append($('<span>').text(' {{check categories}} ').css({
        'background-color': '#F8CCB0',
        'text-decoration': 'line-through !important',
        display: 'inline-block'
      }), $('<span>').text(' ?'))).append('<br>', $dialogCheckStorage, $('<label>').attr('for', 'hotCatAutoRemoveCheckCatStorage').text("Don't ask again"), '<br>').append(mw.user.isAnon() ? '' : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: '{{check categories}} (−)?',
        width: 450,
        buttons: dlgButtons,
        close: function close() {
          $('#hotcatCommitForm').trigger('submit');
        },
        open: function open() {
          var $buttons = $(this).parent().find('.ui-dialog-buttonpane button');
          $buttons.eq(0).button({
            icons: {
              primary: 'ui-icon-circle-check'
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: 'ui-icon-cancel'
            }
          });
        }
      });
    };
    if (newVal !== self.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === 'auto') {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  // Add OK-Link to the cats panel
  var $okLink = $('<a>').attr({
    href: '#',
    title: 'Categories are OK! Immediately remove the template.'
  }).append('<s>').text('{{Check categories}}');
  $okLink.on('click', function (e) {
    e.preventDefault();
    var $el = $(this);
    $el.off('click');
    var doEdit = function doEdit(result) {
      if (!result) {
        return;
      }
      $el.text('Doing.');
      var text = result.replace(checkCategoriesRegExp, '');
      if (text === result) {
        $el.text('Template not found!');
        return;
      }
      var params = {
        action: 'edit',
        title: mw.config.get('wgPageName'),
        nocreate: 1,
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        text: text,
        token: mw.user.tokens.get('csrfToken')
      };
      var editDone = function editDone(editStat) {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          mw.notify("Unable to remove \"Check categories\" with the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: 'hotCatCheck',
            type: 'error'
          });
          $el.text('Edit-Error!');
        } else {
          $el.text('Edit Done.');
        }
        $('.checkcategories').fadeOut();
      };
      $el.text('Doing..');
      $.post(mw.util.wikiScript('api'), params, editDone);
    };
    $el.text('Doing');
    $.ajax({
      url: mw.config.get('wgScript'),
      data: {
        action: 'raw',
        title: mw.config.get('wgPageName').replace(/ /g, '_')
      },
      dataType: 'text',
      error: function error() {
        $el.text('Error!');
      },
      success: doEdit,
      type: 'GET',
      cache: false
    });
  });
  $(function () {
    $('#catlinks').find('ul:first').append($('<li>').append($okLink));
  });
})();
/* </nowiki> */
