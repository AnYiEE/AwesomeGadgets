/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 + GPL-2.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=GPL-2.0}}'
 *
 * @base <https://commons.wikimedia.org/wiki/MediaWiki:Gadget-ProveIt.js>
 * @base <https://commons.wikimedia.org/wiki/MediaWiki:Gadget-ProveIt.css>
 * @copyright 2008-2011 Georgia Tech Research Corporation, Atlanta, GA 30332-0415, ALL RIGHTS RESERVED
 * @copyright 2011- Matthew Flaschen
 * @copyright Rewritten, internationalized, improved and maintained by Sophivorus since 2014
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/ProveIt>
 * @dependency jquery.textSelection, jquery.ui, mediawiki.api, mediawiki.storage, mediawiki.util
 */

/**
 * ProveIt is a smart and simple reference manager for Wikipedia (and any other MediaWiki wiki)
 * Documentation at <commons.wikimedia.org/wiki/Help:Gadget-ProveIt>
 *
 * Copyright 2008-2011 Georgia Tech Research Corporation, Atlanta, GA 30332-0415, ALL RIGHTS RESERVED
 * Copyright 2011- Matthew Flaschen
 * Rewritten, internationalized, improved and maintained by Sophivorus since 2014
 *
 * ProveIt is available under the GNU Free Documentation License (http://www.gnu.org/copyleft/fdl.html),
 * the Creative Commons Attribution/Share-Alike License 3.0 (http://creativecommons.org/licenses/by-sa/3.0/)
 * and the GNU General Public License 2 (http://www.gnu.org/licenses/gpl-2.0.html)
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
var _objectHasOwn = function (object, property) {
  if (typeof object === 'undefined' || object === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  return Object.prototype.hasOwnProperty.call(Object(object), property);
};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.ProveIt = {
  /**
   * Template data of the templates
   * Populated on ProveIt.realInit()
   *
   * @type {Object} Map from template name to template data
   */
  templateData: {},
  /**
   * Convenience method to get a ProveIt configuration option
   * Configuration options are set from the loader of the wiki, not here
   *
   * @param {string} key Option key without the "proveit-" prefix
   * @return {string} Option value
   */
  getOption: function getOption(key) {
    return mw.config.get("proveit-".concat(key));
  },
  /**
   * Convenience method to get a ProveIt interface message
   * Interface messages are set on ProveIt.init()
   *
   * @param {string} key Message key without the "proveit-" prefix
   * @return {string} Message value
   */
  getMessage: function getMessage(key) {
    return mw.message("proveit-".concat(key));
  },
  /**
   * Convenience method to detect the current editor
   *
   * @return {string|null} Name of the current editor ('core', 'wikieditor', 'codemirror' or '2017') or null if it's not supported
   */
  getEditor: function getEditor() {
    if (window.ve && ve.init && ve.init.target && ve.init.target.active) {
      if (ve.init.target.getSurface().getMode() === 'source') {
        return '2017'; // 2017 wikitext editor
      }

      return; // Visual editor
    }

    var action = mw.config.get('wgAction');
    if (['edit', 'submit'].indexOf(action) !== -1) {
      if (mw.user.options.get('usebetatoolbar') === 1) {
        if ($('.CodeMirror').length > 0) {
          return 'codemirror';
        }
        return 'wikieditor'; // WikiEditor
      }

      return 'core'; // Core editor
    }
  },

  /**
   * Convenience method to get the wikitext of the current page
   *
   * @return {string} Wikitext of the current page
   */
  getWikitext: function getWikitext() {
    return $('#wpTextbox1').textSelection('getContents');
  },
  /**
   * Initialization script
   */
  init: function init() {
    // Remove any previous instance
    $('#proveit').remove();
    // Only continue on wikitext pages
    var contentModel = mw.config.get('wgPageContentModel');
    if (contentModel !== 'wikitext') {
      return;
    }
    // Only continue on supported namespaces
    var namespace = mw.config.get('wgNamespaceNumber');
    var namespaces = ProveIt.getOption('namespaces');
    if (namespaces && !(namespaces.indexOf(namespace) !== -1)) {
      return;
    }
    // Only continue on supported editors
    if (!ProveIt.getEditor()) {
      return;
    }
    // Add the basic GUI
    ProveIt.buildGUI();
    // Remove ProveIt when switching out from the source editor
    mw.hook('ve.deactivationComplete').add(function () {
      $('#proveit').remove();
    });
    // When previewing, re-add the ProveIt tag (T154357)
    if (mw.config.get('wgAction') === 'submit') {
      var currentSummary = $('#wpSummary').val();
      var proveitSummary = ProveIt.getOption('summary');
      if (proveitSummary && currentSummary.indexOf(proveitSummary) !== -1) {
        ProveIt.addTag();
      }
    }
  },
  /**
   * Build the basic GUI and add it to the DOM
   */
  buildGUI: function buildGUI() {
    // Define the basic elements
    var $gui = $('<div>').attr('id', 'proveit');
    var $header = $('<div>').attr('id', 'proveit-header');
    var $body = $('<div>').attr('id', 'proveit-body');
    var $footer = $('<div>').attr('id', 'proveit-footer');
    var $logo = $('<span>').attr('id', 'proveit-logo');
    var $logoText = $('<span>').attr('id', 'proveit-logo-text').text('P');
    var $logoLeftBracket = $('<span>').addClass('proveit-logo-bracket').text('[');
    var $logoRightBracket = $('<span>').addClass('proveit-logo-bracket').text(']');
    // Put everything together and add it to the DOM
    $logo.append($logoLeftBracket, $logoText, $logoRightBracket);
    $header.append($logo);
    $gui.append($header, $body, $footer);
    $('body').append($gui);
    // Make the GUI draggable
    $gui.draggable({
      handle: $header,
      containment: 'window',
      start: function start() {
        $gui.css({
          right: 'auto',
          bottom: 'auto'
        });
      }
    });
    // Toggle the GUI when the logo is clicked
    var minimized = true;
    $logo.on('click', function () {
      if (minimized) {
        minimized = false;
        $('#proveit-logo-text').text('ProveIt');
        $('#proveit-header button, #proveit-body, #proveit-footer').show();
        if ($.isEmptyObject(ProveIt.templateData)) {
          ProveIt.realInit();
        } else if ($('#proveit-list').length > 0) {
          ProveIt.buildList(); // Make sure the list is updated
        }
      } else {
        minimized = true;
        $('#proveit-logo-text').text('P');
        $('#proveit-header button, #proveit-body, #proveit-footer').hide();
      }
      $gui.css({
        top: 'auto',
        left: 'auto',
        right: 0,
        bottom: 0
      }); // Reset the position of the gadget
    });
  },

  /**
   * Get the template data, redirects and interface messages, then build the reference list
   */
  realInit: function realInit() {
    $('#proveit-logo-text').text('.'); // Start loading
    // Get the list of template names and prepend the namespace
    var templates = ProveIt.getOption('templates') || [];
    var formattedNamespaces = mw.config.get('wgFormattedNamespaces');
    var templateNamespace = formattedNamespaces[10];
    var titles = [];
    var _iterator = _createForOfIteratorHelper(templates),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var templateName = _step.value;
        titles.push("".concat(templateNamespace, ":").concat(templateName));
      }
      // Get the template data
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var api = new mw.Api({
      ajax: {
        headers: {
          'Api-User-Agent': "Qiuwen/1.1 (ProveIt/2.0; ".concat(mw.config.get('wgWikiID'), ")")
        }
      }
    });
    var params = {
      action: 'templatedata',
      format: 'json',
      formatversion: 2,
      titles: titles.join('|'),
      includeMissingTitles: true,
      redirects: true
    };
    api.get(params).done(function (_ref) {
      var pages = _ref.pages;
      $('#proveit-logo-text').text('..'); // Still loading
      // Extract and set the template data
      var templateData;
      var templateTitle;
      var templateName;
      for (var id in pages) {
        if (!_objectHasOwn(pages, id)) {
          continue;
        }
        templateData = pages[id];
        if ('missing' in templateData) {
          continue;
        }
        templateTitle = templateData.title;
        templateName = templateTitle.slice(Math.max(0, templateTitle.indexOf(':') + 1)); // Remove the namespace
        ProveIt.templateData[templateName] = templateData;
      }
      // Get all the redirects to the citaton templates
      var params_ = {
        action: 'query',
        format: 'json',
        formatversion: 2,
        prop: 'redirects',
        titles: titles.join('|'),
        rdlimit: 'max',
        rdnamespace: 10
      };
      api.get(params_).done(function (_ref2) {
        var query = _ref2.query;
        $('#proveit-logo-text').text('...'); // Still loading
        // Map the redirects to the cannonical names
        var redirects;
        var redirectTitle;
        var redirectName;
        var _iterator2 = _createForOfIteratorHelper(query.pages),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var templateData_ = _step2.value;
            templateTitle = templateData_.title;
            templateName = templateTitle.slice(Math.max(0, templateTitle.indexOf(':') + 1)); // Remove the namespace
            if ('redirects' in templateData_) {
              redirects = templateData_.redirects;
              var _iterator3 = _createForOfIteratorHelper(redirects),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var redirect = _step3.value;
                  redirectTitle = redirect.title;
                  redirectName = redirectTitle.slice(Math.max(0, redirectTitle.indexOf(':') + 1)); // Remove the namespace
                  ProveIt.templateData[redirectName] = templateName;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
          // Get the latest English messages
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        $.get('https://gitcdn.qiuwen.net.cn/YSARXIV/mediawiki-gadgets-ProveIt/raw/branch/master/i18n/en.json', function (engMsg) {
          var englishMessages = _typeof(engMsg) === 'object' ? engMsg : JSON.parse(engMsg);
          delete englishMessages['@metadata'];
          // Get the latest translations to the preferred user language
          var userLanguage = ['zh-cn', 'zh-my', 'zh-sg'].indexOf(mw.config.get('wgUserLanguage')) !== -1 ? 'zh-hans' : ['zh-hk', 'zh-mo', 'zh-tw'].indexOf(mw.config.get('wgUserLanguage')) !== -1 ? 'zh-hant' : mw.config.get('wgUserLanguage');
          $.get("https://gitcdn.qiuwen.net.cn/YSARXIV/mediawiki-gadgets-ProveIt/raw/branch/master/i18n/".concat(userLanguage, ".json")).always(function (i18nMsg, status) {
            $('#proveit-logo-text').text('ProveIt'); // Finish loading
            var translatedMessages = {};
            if (status === 'success') {
              translatedMessages = _typeof(i18nMsg) === 'object' ? i18nMsg : JSON.parse(i18nMsg);
              delete translatedMessages['@metadata'];
            }
            // Merge and set the messages
            var messages = $.extend({}, englishMessages, translatedMessages);
            mw.messages.set(messages);
            // Finally, build the list
            ProveIt.buildList();
          });
        });
      });
    });
  },
  /**
   * Build the reference list and add it to the GUI
   */
  buildList: function buildList() {
    var $list = $('<ol>').attr('id', 'proveit-list');
    var $item;
    var $span;
    var $link;
    // Build a list item for each reference
    var wikitext = ProveIt.getWikitext();
    var references = ProveIt.getReferences(wikitext);
    var _iterator4 = _createForOfIteratorHelper(references.entries()),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
          index = _step4$value[0],
          reference = _step4$value[1];
        $item = $('<li>').addClass('proveit-item');
        $item.on('click', reference, function (_ref3) {
          var data = _ref3.data;
          var reference_ = data;
          ProveIt.highlight(reference_);
          ProveIt.buildForm(reference_);
        });
        // Add the number
        $span = $('<span>').addClass('proveit-number').text(index + 1);
        $item.append($span);
        // Add the arrow and letters
        $link = $('<a>').addClass('proveit-arrow').text('↑');
        $link.on('click', reference, ProveIt.highlight);
        $item.append($link);
        // Add the letters
        if (reference.citations.length > 0) {
          $link = $('<a>').addClass('proveit-letter').text('a');
          $link.on('click', reference, ProveIt.highlight);
          $item.append($link);
          var _iterator9 = _createForOfIteratorHelper(reference.citations.entries()),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _step9$value = _slicedToArray(_step9.value, 2),
                i = _step9$value[0],
                citation = _step9$value[1];
              var letter = String.fromCodePoint(98 + i); // 97 is the ASCII code for 'b'
              $link = $('<a>').addClass('proveit-letter').text(letter);
              $link.on('click', citation, ProveIt.highlight);
              $item.append($link);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        // Add the reference template, if any
        if (reference.template.name) {
          $span = $('<span>').addClass('proveit-template').text(reference.template.name);
          $item.append($span);
        }
        // Add the reference snippet
        $item.append(reference.snippet);
        // Add to the list
        $list.append($item);
      }
      // Build a list item for each template
      // First remove the references from the wikitext to avoid matching the templates again
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(references),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _reference = _step5.value;
        wikitext = wikitext.replace(_reference.wikitext, '');
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var templates = ProveIt.getTemplates(wikitext);
    var _iterator6 = _createForOfIteratorHelper(templates),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var template = _step6.value;
        $item = $('<li>').addClass('proveit-item');
        $item.on('click', template, function (_ref4) {
          var data = _ref4.data;
          var template_ = data;
          ProveIt.highlight(template_);
          ProveIt.buildForm(template_);
        });
        $link = $('<a>').addClass('proveit-arrow').text('↓');
        $link.on('click', template, ProveIt.highlight);
        $item.append($link);
        // Add the template name
        $span = $('<span>').addClass('proveit-template').text(template.name);
        $item.append($span);
        // Add the template snippet
        $item.append(template.snippet);
        // Add to the list
        $list.append($item);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (references.length > 0 || templates.length > 0) {
      // Add the list to the GUI and make sure we're at the top
      $('#proveit-body').html($list).scrollTop(0);
    } else {
      var $div = $('<div>').attr('id', 'proveit-no-references-message').text(ProveIt.getMessage('no-references'));
      $('#proveit-body').html($div);
    }
    // Build the footer
    var $footer = $('#proveit-footer');
    $footer.empty();
    if (references.length > 0 || templates.length > 0) {
      var $normalizeButton = $('<button>').attr('id', 'proveit-normalize-button').text(ProveIt.getMessage('normalize-button'));
      $footer.append($normalizeButton);
      $normalizeButton.on('click', function () {
        $(this).remove();
        mw.notify(ProveIt.getMessage('normalize-message'), {
          tag: 'ProveIt'
        });
        setTimeout(function () {
          var _iterator7 = _createForOfIteratorHelper(references),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var reference = _step7.value;
              ProveIt.buildForm(reference); // There's no current way to avoid going through the interface, but the user doesn't notice
              ProveIt.update(reference);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          var _iterator8 = _createForOfIteratorHelper(templates),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var template = _step8.value;
              ProveIt.buildForm(template);
              ProveIt.update(template);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          ProveIt.buildList();
        }, 100);
      });
      var $filterReferences = $('<input>').attr('placeholder', ProveIt.getMessage('filter-references'));
      $footer.prepend($filterReferences);
      $filterReferences.on('keyup', function () {
        var filter = $(this).val().toLowerCase();
        $('li', $list).show().filter(function (_index, element) {
          return !($(element).text().toLowerCase().indexOf(filter) !== -1);
        }).hide();
      });
    }
    // Build the header
    var $header = $('#proveit-header');
    var $addReferenceButton = $('<button>').text(ProveIt.getMessage('add-reference-button')).addClass('progressive');
    var $addBibliographyButton = $('<button>').text(ProveIt.getMessage('add-bibliography-button'));
    $('button', $header).remove();
    $header.prepend($addReferenceButton, $addBibliographyButton);
    // Bind events
    $addReferenceButton.on('click', function () {
      var
      // Remember the last choice
      templateName = mw.storage.get('proveit-last-template');
      var wikitext_ = templateName ? "<ref>{{".concat(templateName, "}}</ref>") : '<ref></ref>';
      var reference = new ProveIt.Reference(wikitext_);
      ProveIt.buildForm(reference);
    });
    $addBibliographyButton.on('click', function () {
      var
      // Remember the last choice
      templateName = mw.storage.get('proveit-last-template');
      var wikitext_ = templateName ? "{{".concat(templateName, "}}") : '';
      var template = new ProveIt.Template(wikitext_);
      ProveIt.buildForm(template);
    });
  },
  /**
   * Build the form and add it to the GUI
   *
   * @param {ProveIt.Reference|ProveIt.Template} object Reference or Template object to fill the form
   */
  buildForm: function buildForm(object) {
    var $form = $('<div>').attr('id', 'proveit-form'); // Yea it's not a <form>, for easier styling
    // Add the form to the GUI and make sure we're at the top
    $('#proveit-body').html($form).scrollTop(0);
    // Build the header
    var $header = $('#proveit-header');
    var $backButton = $('<button>').text(ProveIt.getMessage('back-button'));
    $('button', $header).remove();
    $header.prepend($backButton);
    $backButton.on('click', ProveIt.buildList);
    // Build the footer
    var $footer = $('#proveit-footer');
    var $insertButton = $('<button>').attr('id', 'proveit-insert-button').text(ProveIt.getMessage('insert-button')).on('click', object, ProveIt.insert).addClass('progressive');
    var $updateButton = $('<button>').attr('id', 'proveit-update-button').text(ProveIt.getMessage('update-button')).on('click', object, ProveIt.update).addClass('progressive');
    var $removeButton = $('<button>').attr('id', 'proveit-remove-button').text(ProveIt.getMessage('remove-button')).on('click', object, ProveIt.remove);
    $footer.empty();
    // Add the Insert button or the Remove and Update buttons
    if (ProveIt.getWikitext().indexOf(object.wikitext) !== -1) {
      $footer.append($removeButton, $updateButton);
    } else {
      $footer.append($insertButton);
    }
    // Add the relevant fields and buttons
    if (object instanceof ProveIt.Reference) {
      ProveIt.buildReferenceFields(object);
      ProveIt.buildTemplateFields(object.template);
    } else {
      ProveIt.buildTemplateFields(object);
    }
  },
  /**
   * Build the reference fields and add them to the form
   *
   * @param {ProveIt.Reference} reference Reference object to fill the fields
   */
  buildReferenceFields: function buildReferenceFields(reference) {
    var $fields = $('<div>').attr('id', 'proveit-reference-fields');
    var $label;
    var $input;
    var $div;
    // Add the reference name field
    $label = $('<label>').text(ProveIt.getMessage('reference-name-label'));
    $input = $('<input>').attr('id', 'proveit-reference-name').val(reference.name);
    $div = $('<div>').append($label, $input);
    $fields.append($div);
    // Add the reference group field
    $label = $('<label>').text(ProveIt.getMessage('reference-group-label'));
    $input = $('<input>').attr('id', 'proveit-reference-group').val(reference.group);
    $div = $('<div>').append($label, $input);
    $fields.append($div);
    // Add the reference content field
    $label = $('<label>').text(ProveIt.getMessage('reference-content-label'));
    $input = $('<textarea>').attr('id', 'proveit-reference-content').val(reference.content);
    $div = $('<div>').append($label, $input);
    $fields.append($div);
    // When the reference content changes, update the template fields
    $input.on('change', function () {
      var content = $(this).val();
      var dummy = new ProveIt.Reference("<ref>".concat(content, "</ref>"));
      ProveIt.buildTemplateFields(dummy.template);
    });
    // Add the fields to the form
    $('#proveit-reference-fields').remove();
    $('#proveit-form').prepend($fields);
    // Add the footer buttons
    var $buttons = $('<span>').attr('id', 'proveit-reference-buttons');
    var $citeButton = $('<button>').attr('id', 'proveit-cite-button').text(ProveIt.getMessage('cite-button')).on('click', reference, reference.cite);
    $buttons.append($citeButton);
    $('#proveit-reference-buttons').remove();
    $('#proveit-footer').prepend($buttons);
  },
  /**
   * Build the fields for the template parameters and add them to the reference form
   *
   * @param {ProveIt.Template} template Template object to fill the fields, if any
   */
  buildTemplateFields: function buildTemplateFields(template) {
    var $fields = $('<div>').attr('id', 'proveit-template-fields');
    var $label;
    var $input;
    var $option;
    var $button;
    var $div;
    // Add the template select menu
    $label = $('<label>').text(ProveIt.getMessage('reference-template-label'));
    $input = $('<select>').attr('id', 'proveit-template-select');
    $div = $('<div>').append($label, $input);
    $fields.append($div);
    // Add the empty option
    $option = $('<option>').text(ProveIt.getMessage('no-template')).val('');
    $input.append($option);
    // Add an option for each template
    var templateNames = Object.keys(ProveIt.templateData).sort();
    var _iterator10 = _createForOfIteratorHelper(templateNames),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var templateName = _step10.value;
        if (typeof ProveIt.templateData[templateName] === 'string') {
          continue;
        }
        $option = $('<option>').text(templateName).val(templateName);
        if (template.name === templateName) {
          $option.prop('selected', true);
        }
        $input.append($option);
      }
      // When the template select changes, update the template fields
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    $input.on('change', template, function (_ref5) {
      var data = _ref5.data;
      var template_ = data;
      template_.name = $(this).val();
      template_.data = template_.getData();
      template_.params = template_.getParams();
      template_.paramOrder = template_.getParamOrder();
      mw.storage.set('proveit-last-template', template_.name); // Remember the new choice
      ProveIt.buildTemplateFields(template_);
    });
    if ('maps' in template.data && 'citoid' in template.data.maps) {
      // Add the Citoid field
      $button = $('<button>').text(ProveIt.getMessage('citoid-load'));
      $label = $('<label>').text(ProveIt.getMessage('citoid-label')).attr('data-tooltip', ProveIt.getMessage('citoid-tooltip'));
      $input = $('<input>').attr('placeholder', ProveIt.getMessage('citoid-placeholder'));
      $div = $('<div>').append($button, $label, $input);
      $fields.append($div);
      // When the Citoid button is clicked, try to extract the reference data automatically via the Citoid service
      $button.on('click', function () {
        var $button_ = $(this);
        var query = $button_.siblings('input').val();
        // We need a query
        if (!query) {
          return;
        }
        // Show the loading message
        $button_.text(ProveIt.getMessage('citoid-loading')).prop('disabled', true);
        // Get the data
        $.get("//citoid.qiuwen.net.cn/api?action=query&format=mediawiki&search=".concat(encodeURIComponent(query))).done(function (data) {
          // Recursive helper function
          var setParamValue = function setParamValue(paramName_, paramValue_) {
            if (typeof paramName_ === 'string' && typeof paramValue_ === 'string') {
              $(".proveit-template-param [name=\"".concat(paramName_, "\"]")).val(paramValue_);
            } else if (Array.isArray(paramName_) && Array.isArray(paramValue_)) {
              for (var i in paramName_) {
                if (!_objectHasOwn(paramName_, i)) {
                  continue;
                }
                setParamValue(paramName_[i], paramValue_[i]);
              }
            }
          };
          // Fill the template fields
          var citoidMap = template.data.maps.citoid;
          var _data = _slicedToArray(data, 1),
            citoidData = _data[0];
          var paramName;
          var paramValue;
          for (var citoidKey in citoidData) {
            if (!_objectHasOwn(citoidData, citoidKey)) {
              continue;
            }
            paramName = citoidMap[citoidKey];
            paramValue = citoidData[citoidKey];
            setParamValue(paramName, paramValue);
          }
          // Reset the button
          $button_.text(ProveIt.getMessage('citoid-load')).prop('disabled', false);
          // Update the reference content too
          if ($('#proveit-reference-content').length > 0) {
            var content = $('#proveit-reference-content').val();
            var dummy = new ProveIt.Reference("<ref>".concat(content, "</ref>"));
            content = dummy.buildContent();
            $('#proveit-reference-content').val(content);
          }
          // @todo For some reason this isn't firing
        }).fail(function () {
          $button_.text(ProveIt.getMessage('citoid-error'));
          setTimeout(function () {
            $button_.text(ProveIt.getMessage('citoid-load')).prop('disabled', false);
          }, 3000);
        });
      });
    }
    // Add a field for each parameter
    var userLanguage = mw.config.get('wgUserLanguage');
    var contentLanguage = mw.config.get('wgContentLanguage');
    var paramData;
    var labelText;
    var labelTooltip;
    var inputValue;
    var inputPlaceholder;
    var _iterator11 = _createForOfIteratorHelper(template.paramOrder),
      _step11;
    try {
      var _loop = function _loop() {
        var inputName = _step11.value;
        // Reset defaults
        paramData = {
          label: null,
          description: null,
          required: false,
          suggested: false,
          deprecated: false
        };
        labelText = inputName;
        labelTooltip = null;
        inputValue = null;
        inputPlaceholder = null;
        // Override with template data
        if ('params' in template.data && inputName in template.data.params) {
          paramData = template.data.params[inputName];
        }
        if (paramData.label) {
          if (userLanguage in paramData.label) {
            labelText = paramData.label[userLanguage];
          } else if (contentLanguage in paramData.label) {
            labelText = paramData.label[contentLanguage];
          }
        }
        if (paramData.description) {
          if (userLanguage in paramData.description) {
            labelTooltip = paramData.description[userLanguage];
          } else if (contentLanguage in paramData.description) {
            labelTooltip = paramData.description[contentLanguage];
          }
        }
        // Extract the parameter value
        if (inputName in template.params) {
          inputValue = template.params[inputName];
        } else if (paramData.aliases) {
          var _iterator12 = _createForOfIteratorHelper(paramData.aliases),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var paramAlias = _step12.value;
              if (paramAlias in template.params) {
                inputValue = template.params[paramAlias];
                continue;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        // Build the label, input and div
        $label = $('<label>').text(labelText);
        if (labelTooltip) {
          $label.attr('data-tooltip', labelTooltip);
        }
        $input = paramData.type === 'content' ? $('<textarea>') : $('<input>');
        $input.val(inputValue).attr({
          name: inputName,
          placeholder: inputPlaceholder
        });
        $div = $('<div>').addClass('proveit-template-param').append($label, $input);
        // If the parameter is of the page type, search the wiki
        if (paramData.type === 'wiki-page-name') {
          $input.attr('list', "".concat(inputName, "-list"));
          var $list = $('<datalist>').attr('id', "".concat(inputName, "-list"));
          $div.prepend($list);
          $input.on('keyup', function () {
            var search = $(this).val();
            var api = new mw.Api({
              ajax: {
                headers: {
                  'Api-User-Agent': "Qiuwen/1.1 (ProveIt/2.0; ".concat(mw.config.get('wgWikiID'), ")")
                }
              }
            });
            var params = {
              action: 'opensearch',
              format: 'json',
              formatversion: 2,
              limit: 5,
              redirects: 'resolve',
              search: search
            };
            api.get(params).done(function (data) {
              $list.empty();
              var _data2 = _slicedToArray(data, 2),
                titles = _data2[1];
              var _iterator13 = _createForOfIteratorHelper(titles),
                _step13;
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var title = _step13.value;
                  var $option_ = $('<option>').val(title);
                  $list.append($option_);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            });
          });
        }
        // If the parameter is of the date type, add the Today button
        if (paramData.type === 'date') {
          $button = $('<button>').text(ProveIt.getMessage('today-button'));
          $div.prepend($button);
          $button.on('click', $input, function (_ref6) {
            var data = _ref6.data;
            var input = data;
            var date = new Date();
            var yyyy = date.getFullYear();
            var mm = "0".concat(date.getMonth() + 1).slice(-2);
            var dd = "0".concat(date.getDate()).slice(-2);
            input.val("".concat(yyyy, "-").concat(mm, "-").concat(dd));
          });
        }
        // Mark the div according to the parameter status
        if (paramData.required) {
          $div.addClass('proveit-required');
        } else if (paramData.suggested) {
          $div.addClass('proveit-suggested');
        } else if (paramData.deprecated) {
          $div.addClass('proveit-deprecated');
        } else {
          $div.addClass('proveit-optional');
        }
        // Hide all optional and deprecated parameters, unless they are filled
        if (!inputValue && ($div.hasClass('proveit-optional') || $div.hasClass('proveit-deprecated'))) {
          $div.hide();
        }
        // Add the div to the table
        $fields.append($div);
      };
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        _loop();
      }
      // Some reference templates may have no template data
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    if (!template.data || 'notemplatedata' in template.data) {
      $div = $('<div>').attr('id', 'proveit-no-template-data-message').text(ProveIt.getMessage('no-template-data'));
      $fields.append($div);
    }
    // Add the fields to the form
    $('#proveit-template-fields').remove();
    $('#proveit-form').append($fields);
    // Add the footer buttons
    var $buttons = $('<span>').attr('id', 'proveit-template-buttons');
    var $filterFields = $('<input>').attr('placeholder', ProveIt.getMessage('filter-fields'));
    var $showAllButton = $('<button>').attr('id', 'proveit-show-all-button').text(ProveIt.getMessage('show-all-button'));
    if (template.paramOrder.length > 0) {
      $buttons.append($filterFields);
    }
    if ($('.proveit-required, .proveit-suggested').length > 0 && $('.proveit-deprecated, .proveit-optional').length > 0) {
      $buttons.append($showAllButton);
    } else {
      $('.proveit-deprecated, .proveit-optional').show();
    }
    $('#proveit-template-buttons').remove();
    $('#proveit-footer').prepend($buttons);
    // Bind events
    $showAllButton.on('click', function () {
      $('.proveit-deprecated, .proveit-optional').show();
      $(this).remove();
    });
    $filterFields.on('keyup', function () {
      var filter = $(this).val().toLowerCase();
      $('div', $fields).show().filter(function (_index, element) {
        return !($(element).text().toLowerCase().indexOf(filter) !== -1);
      }).hide();
      $('#proveit-show-all-button').remove();
    });
    // When a template parameter changes, update the reference content
    if ($('#proveit-reference-content').length > 0) {
      $('select, input, textarea', '#proveit-template-fields').on('change', function () {
        var content = $('#proveit-reference-content').val();
        var dummy = new ProveIt.Reference("<ref>".concat(content, "</ref>"));
        content = dummy.buildContent();
        $('#proveit-reference-content').val(content);
      });
    }
  },
  /**
   * Parse the given wikitext in search for references and return an array of Reference objects
   *
   * @param {string} wikitext
   * @return {ProveIt.Reference[]} Array of Reference objects
   */
  getReferences: function getReferences(wikitext) {
    var references = [];
    var matches = wikitext.match(/<\s*ref[^>]*>[^<]*<\s*\/\s*ref\s*>/gi);
    if (matches) {
      var _iterator14 = _createForOfIteratorHelper(matches),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var match = _step14.value;
          var reference = new ProveIt.Reference(match);
          references.push(reference);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    return references;
  },
  /**
   * Parse the given wikitext in search for templates and return an array of Template objects
   *
   * @param {string} wikitext
   * @return {ProveIt.Template[]} Array of Template objects
   */
  getTemplates: function getTemplates(wikitext) {
    var templates = [];
    var templateName;
    var templateRegex;
    var templateMatch;
    var templateWikitext;
    var templateStart;
    var templateEnd;
    var templateDepth;
    var template;
    for (templateName in ProveIt.templateData) {
      if (!_objectHasOwn(ProveIt.templateData, templateName)) {
        continue;
      }
      templateRegex = new RegExp("{{\\s*".concat(templateName, "\\s*[|}]"), 'ig');
      while ((templateMatch = templateRegex.exec(wikitext)) !== null) {
        var _templateMatch = templateMatch;
        var _templateMatch2 = _slicedToArray(_templateMatch, 1);
        templateWikitext = _templateMatch2[0];
        templateStart = templateMatch.index;
        // Figure out the templateEnd by searching for the closing "}}"
        // knowing that there may be subtemplates, like so:
        // {{Cite book |title=Foo |year={{BC|123}} |author=Bar}}
        templateEnd = wikitext.length;
        templateDepth = 0;
        for (var i = templateStart; i < templateEnd; i++) {
          if (wikitext[i] + wikitext[i + 1] === '{{') {
            templateDepth++;
            i++; // We speed up the loop to avoid multiple matches when two or more templates are found together
          } else if (wikitext[i] + wikitext[i + 1] === '}}') {
            templateDepth--;
            i++;
          }
          if (templateDepth === 0) {
            templateEnd = i + 1;
            break;
          }
        }
        templateWikitext = wikitext.substring(templateStart, templateEnd);
        template = new ProveIt.Template(templateWikitext);
        templates.push(template);
      }
    }
    return templates;
  },
  /**
   * Add the ProveIt revision tag
   */
  addTag: function addTag() {
    var tag = ProveIt.getOption('tag');
    if (!tag) {
      return; // No tag defined
    }

    switch (ProveIt.getEditor()) {
      case 'core':
      case 'wikieditor':
      case 'codemirror':
        {
          var $tagInput = $('#wpChangeTags');
          // Don't add it twice
          if (!$tagInput.data('proveit')) {
            if ($tagInput.length > 0) {
              $tagInput.val("".concat($tagInput.val(), ",").concat(tag));
            } else {
              $tagInput = $('<input>').attr({
                id: 'wpChangeTags',
                type: 'hidden',
                name: 'wpChangeTags',
                value: tag
              });
              $('#editform').prepend($tagInput);
            }
            $tagInput.data('proveit', true);
          }
          break;
        }
      case '2017':
        ve.init.target.saveFields.wpChangeTags = function () {
          return tag;
        };
        break;
    }
  },
  /**
   * Add the ProveIt edit summary
   */
  addSummary: function addSummary() {
    var proveitSummary = ProveIt.getOption('summary');
    if (!proveitSummary) {
      return; // No summary defined
    }

    switch (ProveIt.getEditor()) {
      case 'core':
      case 'wikieditor':
      case 'codemirror':
        {
          var $summaryTextarea = $('#wpSummary');
          var currentSummary = $summaryTextarea.val();
          if (!currentSummary) {
            $summaryTextarea.val(proveitSummary);
          }
          break;
        }
      case '2017':
        $(document).on('focus', '.ve-ui-mwSaveDialog-summary textarea', function () {
          var $summaryTextarea = $(this);
          var currentSummary = $summaryTextarea.val();
          if (!currentSummary) {
            $summaryTextarea.val(proveitSummary);
          }
        });
        break;
    }
  },
  /**
   * Insert the given object in the wikitext
   *
   * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
   */
  insert: function insert(object) {
    if (object instanceof $.Event) {
      object = object.data;
    }
    var wikitext = object.buildWikitext();
    if (object instanceof ProveIt.Citation) {
      object.index = $('#wpTextbox1').textSelection('getCaretPosition');
    }
    $('#wpTextbox1').textSelection('encapsulateSelection', {
      peri: wikitext,
      replace: true
    });
    if (object instanceof ProveIt.Reference) {
      var reference = new ProveIt.Reference(wikitext);
      ProveIt.buildForm(reference); // Changes the Insert button for Update
    }

    if (object instanceof ProveIt.Template) {
      var template = new ProveIt.Template(wikitext);
      ProveIt.buildForm(template); // Changes the Insert button for Update
    }

    ProveIt.addTag();
    ProveIt.addSummary();
  },
  /**
   * Update the given object in the wikitext
   *
   * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
   */
  update: function update(object) {
    if (object instanceof $.Event) {
      object = object.data;
    }
    var wikitext = object.buildWikitext();
    // If the object is a reference, update the citations too
    if (object instanceof ProveIt.Reference) {
      var _iterator15 = _createForOfIteratorHelper(object.citations),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var citation = _step15.value;
          ProveIt.update(citation);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
    ProveIt.replace(object.wikitext, wikitext);
    object.wikitext = wikitext;
    ProveIt.highlight(object);
    ProveIt.addTag();
    ProveIt.addSummary();
  },
  /**
   * Remove the given object from the wikitext
   *
   * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
   */
  remove: function remove(object) {
    if (object instanceof $.Event) {
      object = object.data;
    }
    // If the object is a reference, remove the citations too
    if (object instanceof ProveIt.Reference && object.citations.length > 0 && confirm(ProveIt.getMessage('confirm-remove'))) {
      var _iterator16 = _createForOfIteratorHelper(object.citations),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var citation = _step16.value;
          ProveIt.remove(citation);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
    ProveIt.replace(object.wikitext, '');
    ProveIt.addTag();
    ProveIt.addSummary();
    ProveIt.buildList();
  },
  /**
   * Highlight the given object in the wikitext
   *
   * @param {jQuery.Event|ProveIt.Reference|ProveIt.Template|ProveIt.Citation} object Reference, template or citation, or a jQuery event containing one
   */
  highlight: function highlight(object) {
    if (object instanceof $.Event) {
      object.stopPropagation();
      object = object.data;
    }
    var wikitext = ProveIt.getWikitext();
    var index = wikitext.indexOf(object.wikitext);
    // Make sure we're highlighting the right occurrence
    if (object.index) {
      index = wikitext.indexOf(object.wikitext, object.index);
    }
    $('#wpTextbox1')
    // Focus for wikieditor
    .trigger('focus').textSelection('setSelection', {
      start: index,
      end: index + object.wikitext.length
    }).textSelection('scrollToCaretPosition');
  },
  /**
   * Helper function to search and replace a string in the editor (first match only)
   *
   * @param {string} search String to search
   * @param {string} replace Replacement string
   */
  replace: function replace(search, _replace) {
    var wikitext = ProveIt.getWikitext();
    var start = wikitext.indexOf(search);
    if (start !== -1) {
      $('#wpTextbox1').textSelection('setSelection', {
        start: start,
        end: start + search.length
      }).textSelection('replaceSelection', _replace);
    }
  },
  /**
   * Helper function to decode base64 strings
   *
   * @param {string} string Base64 encoded string
   * @return {string} Decoded string
   */
  // decodeBase64: (string) => decodeURIComponent(window.atob(string).split("").map((character) => {
  // 	return `%${`00${character.charCodeAt(0).toString(16)}`.slice(-2)}`;
  // }).join("")),
  /**
   * Citation class
   *
   * @class
   * @param {string} wikitext Citation wikitext
   * @param {number} index Citation index in the page wikitext
   */
  Citation: function Citation(wikitext, index) {
    /**
     * Citation wikitext
     */
    this.wikitext = wikitext;
    /**
     * Citation index in the page wikitext
     */
    this.index = index;
    /**
     * Get the name out of the wikitext
     *
     * @return {string} citation name
     */
    this.getName = function () {
      // Match <ref name="Foo">, <ref name="Foo's">
      var match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*"([^">]+)"[^>]*>/i);
      if (!match) {
        // Match <ref name='Foo'>, <ref name='The "Foo"'>
        match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*'([^'>]+)'[^>]*>/i);
      }
      if (!match) {
        // Match <ref name=Foo>, <ref name=Foo's> and <ref name=The"Foo">
        match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*([^ >]+)[^>]*>/i);
      }
      if (match) {
        return match[1];
      }
    };
    /**
     * Get the group out of the wikitext
     *
     * @return {string} citation group
     */
    this.getGroup = function () {
      // Match <ref group="Foo">, <ref group="Foo's">
      var match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*"([^">]+)"[^>]*>/i);
      if (!match) {
        // Match <ref group='Foo'>, <ref group='The "Foo"'>
        match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*'([^'>]+)'[^>]*>/i);
      }
      if (!match) {
        // Match <ref group=Foo>, <ref group=Foo's> and <ref group=The"Foo">
        match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*([^ >]+)[^>]*>/i);
      }
      if (match) {
        return match[1];
      }
    };
    /**
     * Build the wikitext out of the form
     *
     * @return {string} citation wikitext
     */
    this.buildWikitext = function () {
      var name = $('#proveit-reference-name').val();
      var group = $('#proveit-reference-group').val();
      var wikitext_ = '<ref';
      if (name) {
        wikitext_ += " name=\"".concat(name, "\"");
      }
      if (group) {
        wikitext_ += " group=\"".concat(group, "\"");
      }
      wikitext_ += ' />';
      return wikitext_;
    };
    /**
     * Set the properties
     */
    this.name = this.getName();
    this.group = this.getGroup();
  },
  /**
   * Template class
   *
   * @class
   * @param {string} wikitext Template wikitext
   */
  Template: function Template(wikitext) {
    /**
     * Template wikitext
     */
    this.wikitext = wikitext;
    /**
     * Extract the normalized template name from the reference wikitext
     *
     * @return {string} normalized template name
     */
    this.getName = function () {
      var name = '';
      var regex;
      var index;
      for (var templateName in ProveIt.templateData) {
        if (!_objectHasOwn(ProveIt.templateData, templateName)) {
          continue;
        }
        regex = new RegExp("{{\\s*".concat(templateName, "\\s*[|}]"), 'i');
        index = this.wikitext.search(regex);
        if (index > -1) {
          name = templateName;
          if (typeof ProveIt.templateData[name] === 'string') {
            name = ProveIt.templateData[name];
            break;
          }
          break;
        }
      }
      return name;
    };
    /**
     * Extract the normalized template parameters from the reference wikitext
     *
     * A complex template wikitext may be:
     * {{Cite book
     * | anonymous parameter
     * | param1 = value
     * | param2 = http://example.com?query=string
     * | param3 = [[Some|link]]
     * | param4 = {{Subtemplate|anon|param=value}}
     * }}
     *
     * @return {Object} Map from parameter name to parameter value
     */
    this.getParams = function () {
      var params = {};
      // Remove the outer braces and split by pipe
      // knowing that we may match pipes inside complex titles, wikilinks or subtemplates, like so:
      // {{Cite book |title=Some|Title |author=[[Foo|Bar]] |year={{AD|123}} }}
      var paramArray = this.wikitext.substring(2, this.wikitext.length - 2).split('|');
      // Drop the template name
      paramArray.shift();
      var paramString;
      var linkDepth = 0;
      var subtemplateDepth = 0;
      var indexOfEqual;
      var paramNumber = 0;
      var paramName;
      var paramValue;
      var _iterator17 = _createForOfIteratorHelper(paramArray),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var element = _step17.value;
          paramString = element.trim();
          // If we're inside a link or subtemplate, don't disturb it
          if (linkDepth || subtemplateDepth) {
            params[paramName] += "|".concat(paramString);
            if (paramString.indexOf(']]') !== -1) {
              linkDepth--;
            }
            if (paramString.indexOf('}}') !== -1) {
              subtemplateDepth--;
            }
            continue;
          }
          // If we reach this point and there's no equal sign, it's an anonymous parameter
          indexOfEqual = paramString.indexOf('=');
          if (indexOfEqual === -1) {
            paramNumber++;
            paramName = paramNumber;
            paramValue = paramString;
            params[paramName] = paramValue;
            continue;
          }
          paramName = paramString.slice(0, Math.max(0, indexOfEqual)).trim();
          paramValue = paramString.slice(Math.max(0, indexOfEqual + 1)).trim();
          // Check if there's an unclosed link or subtemplate
          if (paramValue.indexOf('[[') !== -1 && !(paramValue.indexOf(']]') !== -1)) {
            linkDepth++;
          }
          if (paramValue.indexOf('{{') !== -1 && !(paramValue.indexOf('}}') !== -1)) {
            subtemplateDepth++;
          }
          // Normalize the parameter name
          if (this.data && 'params' in this.data && !(paramName in this.data.params)) {
            var paramAliases = void 0;
            for (var param in this.data.params) {
              if (!_objectHasOwn(this.data.params, param)) {
                continue;
              }
              paramAliases = this.data.params[param].aliases;
              if (paramAliases.indexOf(paramName) !== -1) {
                paramName = param;
                break;
              }
            }
          }
          params[paramName] = paramValue;
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return params;
    };
    /**
     * Get the template data for this template
     *
     * @return {Object} Template data
     */
    this.getData = function () {
      var data = {};
      if (this.name in ProveIt.templateData) {
        data = ProveIt.templateData[this.name];
      }
      return data;
    };
    /**
     * Get the parameter order for this template
     *
     * @return {Array}
     */
    this.getParamOrder = function () {
      var paramOrder = [];
      if ('paramOrder' in this.data) {
        paramOrder = this.data.paramOrder;
      } else if ('params' in this.data) {
        paramOrder = Object.keys(this.data.params);
      }
      var paramNames = Object.keys(this.params);
      paramOrder = [].concat(_toConsumableArray(paramOrder), paramNames);
      paramOrder = paramOrder.filter(function (item, index // Remove duplicates
      ) {
        return paramOrder.indexOf(item) === index;
      });
      return paramOrder;
    };
    /**
     * Get the snippet for this reference
     *
     * @return {string} Snippet for this reference
     */
    this.getSnippet = function () {
      for (var param in this.params) {
        if ('params' in this.data && param in this.data.params && this.data.params[param].required && this.data.params[param].type === 'string') {
          return this.params[param];
        }
      }
      if (this.wikitext.length > 100) {
        return "".concat(this.wikitext.slice(0, 100).trim(), "...");
      }
      return this.wikitext;
    };
    /**
     * Build the template wikitext out of the template form
     *
     * @return {string} template wikitext
     */
    this.buildWikitext = function () {
      var templateWikitext = '';
      var templateName = $('#proveit-template-select').val();
      if (templateName) {
        var paramName;
        var paramValue;
        templateWikitext = "{{".concat(templateName);
        $('input, textarea', '.proveit-template-param').each(function (_index, element) {
          var $element = $(element);
          paramName = $element.attr('name');
          paramValue = $element.val();
          if (paramName && paramValue) {
            templateWikitext += element.data && element.data.format === 'block' ? '\r\n| ' : ' |';
            templateWikitext += typeof paramName === 'number' ? paramValue : "".concat(paramName, "=").concat(paramValue);
          }
        });
        templateWikitext += this.data && this.data.format === 'block' ? '\r\n}}' : '}}';
      }
      return templateWikitext;
    };
    /**
     * Set the properties
     */
    this.name = this.getName();
    this.data = this.getData();
    this.params = this.getParams();
    this.paramOrder = this.getParamOrder();
    this.snippet = this.getSnippet();
  },
  /**
   * Reference class
   *
   * @class
   * @param {string} wikitext Reference wikitext
   * @param {number} index Reference index
   */
  Reference: function Reference(wikitext, index) {
    /**
     * Reference wikitext
     */
    this.wikitext = wikitext;
    /**
     * Reference index
     */
    this.index = index;
    /**
     * Insert a <ref> for this reference
     *
     * @param {jQuery.Event} event
     */
    this.cite = function (_ref7) {
      var data = _ref7.data;
      var reference = data;
      var name = $('#proveit-reference-name').val();
      if (!name) {
        name = reference.snippet;
        name = name.replace('"', '');
        name = "".concat(name.slice(0, 30).trim(), "...");
        $('#proveit-reference-name').val(name);
      }
      var citationWikitext = "<ref name=\"".concat(this.name, "\" ").concat(reference.group ? " group=\"".concat(this.group, "\"") : '', " />");
      var citation = new ProveIt.Citation(citationWikitext);
      // Insert the citation first, update the reference name, and highlight the citation again
      ProveIt.insert(citation);
      ProveIt.update(reference);
      ProveIt.highlight(citation);
    };
    /**
     * Get the snippet for this reference
     *
     * @return {string} snippet of this reference
     */
    this.getSnippet = function () {
      if (this.template.snippet) {
        return this.template.snippet;
      }
      if (this.content.length > 100) {
        return "".concat(this.content.slice(0, 100).trim(), "...");
      }
      return this.content;
    };
    /**
     * Get the content out of the reference wikitext
     *
     * @return {string} reference content
     */
    this.getContent = function () {
      var match = this.wikitext.match(/>([\S\s]*)<\s*\/\s*ref\s*>/i);
      return match[1];
    };
    /**
     * Get the name out of the wikitext
     *
     * @return {string} New reference
     */
    this.getName = function () {
      // Match <ref name="Foo">, <ref name="Foo's">
      var match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*"([^">]+)"[^>]*>/i);
      if (!match) {
        // Match <ref name='Foo'>, <ref name='The "Foo"'>
        match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*'([^'>]+)'[^>]*>/i);
      }
      if (!match) {
        // Match <ref name=Foo>, <ref name=Foo's> and <ref name=The"Foo">
        match = this.wikitext.match(/<\s*ref[^>]+name\s*=\s*([^ >]+)[^>]*>/i);
      }
      if (match) {
        return match[1];
      }
    };
    /**
     * Get the group out of the wikitext
     *
     * @return {string} New reference
     */
    this.getGroup = function () {
      // Match <ref group="Foo">, <ref group="Foo's">
      var match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*"([^">]+)"[^>]*>/i);
      if (!match) {
        // Match <ref group='Foo'>, <ref group='The "Foo"'>
        match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*'([^'>]+)'[^>]*>/i);
      }
      if (!match) {
        // Match <ref group=Foo>, <ref group=Foo's> and <ref group=The"Foo">
        match = this.wikitext.match(/<\s*ref[^>]+group\s*=\s*([^ >]+)[^>]*>/i);
      }
      if (match) {
        return match[1];
      }
    };
    /**
     * Get the reference template
     *
     * @return {ProveIt.Template} Reference template
     */
    this.getTemplate = function () {
      var template = new ProveIt.Template('');
      var templates = ProveIt.getTemplates(this.wikitext);
      if (templates.length > 0) {
        var _templates = _slicedToArray(templates, 1);
        template = _templates[0];
      }
      return template;
    };
    /**
     * Get all the citations to this reference
     *
     * @return {ProveIt.Citation[]} Array of Citation objects
     */
    this.getCitations = function () {
      var citations = [];
      var wikitext_ = ProveIt.getWikitext();
      var citationRegex = /<ref[^/]*\/>/gi;
      var citationMatch;
      var citationWikitext;
      var citationIndex;
      var citationNameMatch;
      var citationName;
      var citation;
      while ((citationMatch = citationRegex.exec(wikitext_)) !== null) {
        var _citationMatch = citationMatch;
        var _citationMatch2 = _slicedToArray(_citationMatch, 1);
        citationWikitext = _citationMatch2[0];
        citationIndex = citationMatch.index;
        citationNameMatch = citationWikitext.match(/name\s*=\s*"([^">]+)"/i);
        if (!citationNameMatch) {
          citationNameMatch = citationWikitext.match(/name\s*=\s*'([^'>]+)'/i);
        }
        if (!citationNameMatch) {
          citationNameMatch = citationWikitext.match(/name\s*=\s*([^ >]+)/i);
        }
        if (citationNameMatch) {
          var _citationNameMatch = citationNameMatch;
          var _citationNameMatch2 = _slicedToArray(_citationNameMatch, 2);
          citationName = _citationNameMatch2[1];
          if (citationName === this.name) {
            citation = new ProveIt.Citation(citationWikitext, citationIndex);
            citations.push(citation);
          }
        }
      }
      return citations;
    };
    /**
     * Build the wikitext out of the form
     *
     * @return {string} Reference wikitext
     */
    this.buildWikitext = function () {
      var name = $('#proveit-reference-name').val();
      var group = $('#proveit-reference-group').val();
      var content = this.buildContent();
      var wikitext_ = '<ref';
      if (name) {
        wikitext_ += " name=\"".concat(name, "\"");
      }
      if (group) {
        wikitext_ += " group=\"".concat(group, "\"");
      }
      wikitext_ += ">".concat(content, "</ref>");
      return wikitext_;
    };
    /**
     * Build the content out of the form
     *
     * @return {string} Reference content
     */
    this.buildContent = function () {
      var content = $('#proveit-reference-content').val();
      var dummy = new ProveIt.Reference("<ref>".concat(content, "</ref>"));
      content = content.replace(dummy.template.wikitext, this.template.buildWikitext());
      content = content.trim();
      return content;
    };
    /**
     * Set the properties
     */
    this.name = this.getName();
    this.group = this.getGroup();
    this.content = this.getContent();
    this.template = this.getTemplate();
    this.snippet = this.getSnippet();
    this.citations = this.getCitations();
  }
};
$(ProveIt.init);
/* </nowiki> */
