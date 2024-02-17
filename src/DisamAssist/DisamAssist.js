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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js>
 * @base <https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/DisamAssist>
 * @dependency mediawiki.api, mediawiki.Title
 */
/**
 * DisamAssist: a tool for repairing links from articles to disambiguation pages.
 * 由Qwertyytrewqqwerty最初设计：CC BY-SA 3.0
 * 由GZWDer本地化：2020-08-19 CC BY-SA 3.0
 * 由和平奋斗救地球稍作翻译 2021-05-15 CC BY-SA 3.0
 * 求闻百科Njzjz简体化 2022-2-14 CC BY-SA 4.0
 */
(function disamAssist($, mw) {
  var api = new mw.Api();
  var cfg = {
    /* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
    disamCategories: ['全部消歧義頁面'],
    /* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
    disamLinkTemplates: ['Disambiguation needed', 'Ambiguous link', 'Amblink', 'Dab needed', 'Disamb-link', 'Disambig needed', 'Disambiguate', 'Dn', 'Needdab'],
    /* "Canonical names" of the templates that designate intentional links to disambiguation pages */
    disamLinkIgnoreTemplates: ['R from ambiguous page', 'R to disambiguation page', 'R from incomplete disambiguation'],
    /* Format string for "Foo (disambiguation)"-style pages */
    disamFormat: '$1（消歧义）',
    /* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
    disamRegExp: '^(.*)（(消歧义|消歧義)）$',
    /* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
    disamNeededText: '{{dn|date={{subst:'.concat('CURRENTMONTHNAME', '}} {{subst:', 'CURRENTYEAR}}}}'),
    /* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
    redirectToDisam: '#重定向 [[$1]]'.concat('{{R to disambiguation page}}'),
    /* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
    intentionalLinkOption: false,
    /* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
    targetNamespaces: [6, 10, 14, 118, 0],
    /* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
    backlinkLimit: 250,
    /* Number of titles we can query for at once */
    queryTitleLimit: 50,
    /* Number of characters before and after the incoming link that will be displayed */
    radius: 300,
    /* Height of the context box, in lines */
    numContextLines: 4,
    /* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
    historySize: 2,
    /* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
    editCooldown: 0,
    /* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
    watch: 'nochange'
  };
  var txt = {
    start: '为链接消歧义',
    startMain: '为链至主条目的链接消歧义',
    startSame: '为链至消歧义页的链接消歧义',
    close: '关闭',
    undo: '复原',
    omit: '跳过',
    refresh: '重新整理',
    titleAsText: '其它目标',
    disamNeeded: '标示{{dn}}',
    intentionalLink: '有意链到消歧义页的链接',
    titleAsTextPrompt: '请输入新的链接目标：',
    removeLink: '去除链接',
    optionMarker: ' [链接到这里]',
    targetOptionMarker: ' [当前目标]',
    redirectOptionMarker: ' [当前目标（重定向）]',
    pageTitleLine: '<a href="$1">$2</a>：',
    noMoreLinks: '没有需要消歧义的链接了。',
    pendingEditCounter: '已保存$1个，已编辑$2个',
    pendingEditBox: 'DisamAssist正在储存您的编辑（$1）。',
    pendingEditBoxTimeEstimation: '$1；剩余时间：$2',
    pendingEditBoxLimited: '在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑求闻百科，但是请勿同时使用多个DisamAssist。',
    error: '错误：$1',
    fetchRedirectsError: '获取重定向失败："$1".',
    getBacklinksError: '下载反向链接失败："$1".',
    fetchRightsError: '获取用户权限失败："$1",',
    loadPageError: '加载$1失败："$2".',
    savePageError: '保存至$1失败："$2".',
    dismissError: 'Dismiss',
    pending: 'DisamAssist尚有未储存的编辑。如欲储存之，请按“关闭”。',
    editInProgress: 'DisamAssist正在进行编辑。如果您将本分页关闭，可能会丧失您的编辑。',
    ellipsis: '……',
    notifyCharacter: '✔',
    summary: '使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[LIB:DAB|消歧义]]链接：[[$1]]（$2）。',
    summaryChanged: '改链接至[[$1]]',
    summaryOmitted: '链接已跳过',
    summaryRemoved: '链接已移除',
    summaryIntentional: '刻意链接至消歧义页面',
    summaryHelpNeeded: '需要帮助',
    summarySeparator: '; ',
    redirectSummary: '使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。'
  };
  var startLink;
  var ui;
  var links;
  var pageChanges;
  var currentPageTitle;
  var currentPageParameters;
  var currentLink;
  var possibleBacklinkDestinations;
  var forceSamePage = false;
  var running = false;
  var choosing = false;
  var canMarkIntentionalLinks = false;
  var displayedPages = {};
  var editCount = 0;
  var editLimit;
  var pendingSaves = [];
  var pendingEditBox;
  var pendingEditBoxText;
  var lastEditMillis = 0;
  var runningSaves = false;
  /* Entry point. Check whether we are in a disambiguation page. If so, add a link to start the tool */
  var install = function install() {
    if (mw.config.get('wgAction') === 'view' && isDisam()) {
      $(function () {
        // This is a " (disambiguation)" page
        if (new RegExp(cfg.disamRegExp).test(getTitle())) {
          var startMainLink = $(mw.util.addPortletLink('p-cactions', '#', txt.startMain, 'ca-disamassist-main')).on('click', startMain);
          var startSameLink = $(mw.util.addPortletLink('p-cactions', '#', txt.startSame, 'ca-disamassist-same')).on('click', startSame);
          startLink = startMainLink.add(startSameLink);
        } else {
          startLink = $(mw.util.addPortletLink('p-cactions', '#', txt.start, 'ca-disamassist-page')).on('click', start);
        }
      });
    }
  };
  /* Start the tool. Display the UI and begin looking for links to fix */
  var start = function start() {
    if (!running) {
      running = true;
      links = [];
      pageChanges = [];
      displayedPages = {};
      ensureDABExists().then(function (canMark) {
        canMarkIntentionalLinks = canMark;
        createUI();
        addUnloadConfirm();
        markDisamOptions();
        checkEditLimit().then(function () {
          togglePendingEditBox(false);
          doPage();
        });
      });
    }
  };
  /* Start DisamAssist. Disambiguate incoming links to the current page, regardless of the title. */
  var startSame = function startSame() {
    forceSamePage = true;
    start();
  };
  /* Start DisamAssist. If the page title ends with " (disambiguation)", disambiguate links to the primary topic article. Otherwise, disambiguate links to the current page. */
  var startMain = function startMain() {
    forceSamePage = false;
    start();
  };
  /* Create and show the user interface. */
  var createUI = function createUI() {
    ui = {
      display: $('<div>').addClass('disamassist-box disamassist-mainbox'),
      finishedMessage: $('<div>').text(txt.noMoreLinks).hide(),
      pageTitleLine: $('<span>').addClass('disamassist-pagetitleline'),
      pendingEditCounter: $('<div>').addClass('disamassist-editcounter'),
      context: $('<span>').addClass('disamassist-context'),
      undoButton: createButton(txt.undo, undo),
      omitButton: createButton(txt.omit, omit),
      endButton: createButton(txt.close, saveAndEnd),
      refreshButton: createButton(txt.refresh, refresh),
      titleAsTextButton: createButton(txt.titleAsText, chooseTitleFromPrompt),
      intentionalLinkButton: canMarkIntentionalLinks ? createButton(txt.intentionalLink, chooseIntentionalLink) : $('<span>'),
      disamNeededButton: cfg.disamNeededText ? createButton(txt.disamNeeded, chooseDisamNeeded) : $('<span>'),
      removeLinkButton: createButton(txt.removeLink, chooseLinkRemoval)
    };
    var top = $('<div>').addClass('disamassist-top').append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
    var leftButtons = $('<div>').addClass('disamassist-leftbuttons').append([ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.omitButton]);
    var rightButtons = $('<div>').addClass('disamassist-rightbuttons').append([ui.undoButton, ui.refreshButton, ui.endButton]);
    var allButtons = $('<div>').addClass('disamassist-allbuttons').append([leftButtons, rightButtons]);
    ui.display.append([top, ui.context, allButtons]);
    updateEditCounter();
    toggleActionButtons(false);
    // Insert the UI in the page
    $('#mw-content-text').before(ui.display);
    ui.display.hide().fadeIn();
  };
  /* If there are pending changes, show a confirm dialog before closing */
  var addUnloadConfirm = function addUnloadConfirm() {
    $(window).on('beforeunload', function () {
      if (running && checkActualChanges()) {
        return txt.pending;
      } else if (editCount !== 0) {
        return txt.editInProgress;
      }
    });
  };
  /* Mark the disambiguation options as such */
  var markDisamOptions = function markDisamOptions() {
    var optionPageTitles = [];
    var optionMarkers = [];
    getDisamOptions().each(function (_index, element) {
      var link = $(element);
      var title = extractPageName(link);
      var optionMarker = $('<a>').attr('href', '#').addClass('disamassist-optionmarker').text(txt.optionMarker).on('click', function (ev) {
        ev.preventDefault();
        chooseReplacement(title);
      });
      link.after(optionMarker);
      optionMarkers.push(optionMarker);
      optionPageTitles.push(title);
    });
    // Now check the disambiguation options and display a different message for those that are
    // actually the same as the target page where the links go, as choosing those options doesn't really
    // accomplish anything (except bypassing redirects, which might be useful in some cases)
    var targetPage = getTargetPage();
    fetchRedirects([].concat(optionPageTitles, _toConsumableArray(targetPage))).done(function (redirects) {
      var endTargetPage = resolveRedirect(targetPage, redirects);
      var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            ii = _step$value[0],
            optionPageTitle = _step$value[1];
          var endOptionTitle = resolveRedirect(optionPageTitle, redirects);
          if (isSamePage(optionPageTitle, targetPage)) {
            optionMarkers[ii].text(txt.targetOptionMarker).addClass('disamassist-curroptionmarker');
          } else if (isSamePage(endOptionTitle, endTargetPage)) {
            optionMarkers[ii].text(txt.redirectOptionMarker).addClass('disamassist-curroptionmarker');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }).fail(error);
  };
  /* Check whether intentional links to disambiguation pages can be explicitly marked/* * as such in this wiki. If so, ensure that a "Foo (disambiguation)" page exists./* * Returns a jQuery promise */
  var ensureDABExists = function ensureDABExists() {
    var dfd = new $.Deferred();
    var title = getTitle();
    // That concept doesn't exist in this wiki.
    if (!cfg.intentionalLinkOption) {
      dfd.resolve(false);
      // "Foo (disambiguation)" exists: it's the current page.
    } else if (new RegExp(cfg.disamRegExp).test(title)) {
      dfd.resolve(true);
    } else {
      var disamTitle = cfg.disamFormat.replace('$1', title);
      loadPage(disamTitle).done(function (page) {
        // "Foo (disambiguation)" doesn't exist.
        if (page.missing) {
          // We try to create it
          page.content = cfg.redirectToDisam.replace('$1', title);
          var summary = txt.redirectSummary.replace('$1', title);
          savePage(disamTitle, page, summary, false, true).done(function () {
            dfd.resolve(true);
          }).fail(function (description) {
            error(description);
            dfd.resolve(false);
          });
          // It does exist
        } else {
          dfd.resolve(true);
        }
      }).fail(function (description) {
        error(description);
        dfd.resolve(false);
      });
    }
    return dfd.promise();
  };
  /* Check whether the edit cooldown applies and sets editLimit accordingly./* * Returns a jQuery promise */
  var checkEditLimit = function checkEditLimit() {
    var dfd = new $.Deferred();
    if (cfg.editCooldown <= 0) {
      editLimit = false;
      dfd.resolve();
    } else {
      fetchRights().done(function (rights) {
        editLimit = !(rights.indexOf('bot') !== -1);
      }).fail(function (description) {
        error(description);
        editLimit = true;
      }).always(function () {
        dfd.resolve();
      });
    }
    return dfd.promise();
  };
  /* Find and ask the user to fix all the incoming links to the disambiguation ("target")/* * page from a single "origin" page */
  var doPage = function doPage() {
    if (pageChanges.length > cfg.historySize) {
      applyChange(pageChanges.shift());
    }
    if (links.length) {
      currentPageTitle = links.shift();
      displayedPages[currentPageTitle] = true;
      toggleActionButtons(false);
      loadPage(currentPageTitle).done(function (data) {
        currentPageParameters = data;
        currentLink = undefined;
        doLink();
      }).fail(error);
    } else {
      var targetPage = getTargetPage();
      getBacklinks(targetPage).done(function (backlinks, pageTitles) {
        var pending = {};
        for (var _i2 = 0, _pendingSaves = pendingSaves; _i2 < _pendingSaves.length; _i2++) {
          var el = _pendingSaves[_i2];
          pending[el[0]] = true;
        }
        pageTitles.filter(function (t) {
          if (t === targetPage) {
            return true;
          }
          return removeDisam(t) !== targetPage;
        });
        // Only incoming links from pages we haven't seen yet and we aren't currently
        // saving (displayedPages is reset when the tool is closed and opened again,
        // while the list of pending changes isn't; if the edit cooldown is disabled,
        // it will be empty)
        links = backlinks.filter(function (el) {
          return !displayedPages[el] && !pending[el];
        });
        if (links.length) {
          doPage();
        } else {
          updateContext();
        }
      }).fail(error);
    }
  };
  /* Find and ask the user to fix a single incoming link to the disambiguation ("target")/* * page */
  var doLink = function doLink() {
    currentLink = extractLinkToPage(currentPageParameters.content, possibleBacklinkDestinations, currentLink ? currentLink.end : 0);
    if (currentLink) {
      updateContext();
    } else {
      doPage();
    }
  };
  /* Replace the target of a link with a different one/* * pageTitle: New link target/* * extra: Additional text after the link (optional)/* * summary: Change summary (optional) */
  var chooseReplacement = function chooseReplacement(pageTitle, extra, summary) {
    if (choosing) {
      choosing = false;
      if (!summary) {
        summary = pageTitle ? txt.summaryChanged.replace('$1', pageTitle) : txt.summaryOmitted;
      }
      addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
      if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
        currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || '');
      }
      doLink();
    }
  };
  /* Replace the link with an explicit link to the disambiguation page */
  var chooseIntentionalLink = function chooseIntentionalLink() {
    var disamTitle = cfg.disamFormat.replace('$1', getTargetPage());
    chooseReplacement(disamTitle, '', txt.summaryIntentional);
  };
  /* Prompt for an alternative link target and use it as a replacement */
  var chooseTitleFromPrompt = function chooseTitleFromPrompt() {
    var title = prompt(txt.titleAsTextPrompt);
    if (title !== null) {
      chooseReplacement(title);
    }
  };
  /* Remove the current link, leaving the text unchanged */
  var chooseLinkRemoval = function chooseLinkRemoval() {
    if (choosing) {
      var summary = txt.summaryRemoved;
      addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
      currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
      doLink();
    }
  };
  /* Add a "disambiguation needed" template after the link */
  var chooseDisamNeeded = function chooseDisamNeeded() {
    chooseReplacement(currentLink.title, cfg.disamNeededText, txt.summaryHelpNeeded);
  };
  /* Undo the last change */
  var undo = function undo() {
    if (pageChanges.length > 0) {
      var lastPage = pageChanges[pageChanges.length - 1];
      if (currentPageTitle !== lastPage.title) {
        links.unshift(currentPageTitle);
        currentPageTitle = lastPage.title;
      }
      currentPageParameters = lastPage.page;
      currentPageParameters.content = lastPage.contentBefore.pop();
      currentLink = lastPage.links.pop();
      lastPage.summary.pop();
      if (!lastPage.contentBefore.length) {
        pageChanges.pop();
      }
      updateContext();
    }
  };
  /* Omit the current link without making a change */
  var omit = function omit() {
    chooseReplacement();
  };
  /* Save all the pending changes and restart the tool. */
  var refresh = function refresh() {
    saveAndEnd();
    start();
  };
  /* Enable or disable the buttons that can perform actions on a page or change the current link./* * enabled: Whether to enable or disable the buttons */
  var toggleActionButtons = function toggleActionButtons(enabled) {
    var affectedButtons = [ui.omitButton, ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.undoButton];
    for (var _i3 = 0, _affectedButtons = affectedButtons; _i3 < _affectedButtons.length; _i3++) {
      var button = _affectedButtons[_i3];
      button.prop('disabled', !enabled);
    }
  };
  /* Show or hide the 'no more links' message/* * show: Whether to show or hide the message */
  var toggleFinishedMessage = function toggleFinishedMessage(show) {
    toggleActionButtons(!show);
    ui.undoButton.prop('disabled', !pageChanges.length);
    ui.finishedMessage.toggle(show);
    ui.pageTitleLine.toggle(!show);
    ui.context.toggle(!show);
  };
  var togglePendingEditBox = function togglePendingEditBox(show) {
    if (!pendingEditBox) {
      pendingEditBox = $('<div>').addClass('disamassist-box disamassist-pendingeditbox');
      pendingEditBoxText = $('<div>');
      pendingEditBox.append(pendingEditBoxText).hide();
      if (editLimit) {
        pendingEditBox.append($('<div>').text(txt.pendingEditBoxLimited).addClass('disamassist-subtitle'));
      }
      $('#mw-content-text').before(pendingEditBox);
      updateEditCounter();
    }
    if (show) {
      pendingEditBox.fadeIn();
    } else {
      pendingEditBox.fadeOut();
    }
  };
  var notifyCompletion = function notifyCompletion() {
    var oldTitle = document.title;
    document.title = txt.notifyCharacter + document.title;
    var $body = $(document.body);
    $body.one('mousemove', function () {
      document.title = oldTitle;
    });
  };
  /* Update the displayed information to match the current link/* * or lack thereof */
  var updateContext = function updateContext() {
    updateEditCounter();
    if (currentLink) {
      ui.pageTitleLine.html(txt.pageTitleLine.replace('$1', mw.util.getUrl(currentPageTitle, {
        redirect: 'no'
      })).replace('$2', mw.html.escape(currentPageTitle)));
      var context = extractContext(currentPageParameters.content, currentLink);
      ui.context.empty().append($('<span>').text(context[0])).append($('<span>').text(context[1]).addClass('disamassist-inclink')).append($('<span>').text(context[2]));
      var numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css('line-height')));
      if (numLines < cfg.numContextLines) {
        // Add cfg.numContextLines - numLines + 1 line breaks, so that the total number
        // of lines is cfg.numContextLines
        ui.context.append(Array.from({
          length: cfg.numContextLines - numLines + 2
        }).join('<br>'));
      }
      toggleFinishedMessage(false);
      ui.undoButton.prop('disabled', !pageChanges.length);
      ui.removeLinkButton.prop('disabled', currentPageParameters.redirect);
      ui.intentionalLinkButton.prop('disabled', currentPageParameters.redirect);
      ui.disamNeededButton.prop('disabled', currentPageParameters.redirect || currentLink.hasDisamTemplate);
      choosing = true;
    } else {
      toggleFinishedMessage(true);
    }
  };
  /* Update the count of pending changes */
  var updateEditCounter = function updateEditCounter() {
    if (ui.pendingEditCounter) {
      ui.pendingEditCounter.text(txt.pendingEditCounter.replace('$1', editCount).replace('$2', countActuallyChangedFullyCheckedPages()));
    }
    if (pendingEditBox) {
      if (editCount === 0 && !running) {
        togglePendingEditBox(false);
        notifyCompletion();
      }
      var textContent = editCount;
      if (editLimit) {
        textContent = txt.pendingEditBoxTimeEstimation.replace('$1', editCount).replace('$2', secondsToHHMMSS(cfg.editCooldown * editCount));
      }
      pendingEditBoxText.text(txt.pendingEditBox.replace('$1', textContent));
    }
  };
  /* Apply the changes made to an "origin" page/* * pageChange: Change that will be saved */
  var applyChange = function applyChange(pageChange) {
    if (pageChange.page.content !== pageChange.contentBefore[0]) {
      editCount++;
      var changeSummaries = pageChange.summary.join(txt.summarySeparator);
      var summary = txt.summary.replace('$1', getTargetPage()).replace('$2', changeSummaries);
      var save = editLimit ? saveWithCooldown : savePage;
      save(pageChange.title, pageChange.page, summary, true, true).always(function () {
        if (editCount > 0) {
          editCount--;
        }
        updateEditCounter();
      }).fail(error);
      updateEditCounter();
    }
  };
  /* Save all the pending changes */
  var applyAllChanges = function applyAllChanges() {
    var _iterator2 = _createForOfIteratorHelper(pageChanges),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var pageChange = _step2.value;
        applyChange(pageChange);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    pageChanges = [];
  };
  /* Record a new pending change/* * pageTitle: Title of the page/* * page: Content of the page/* * oldContent: Content of the page before the change/* * link: Link that has been changed/* * summary: Change summary */
  var addChange = function addChange(pageTitle, page, oldContent, link, summary) {
    if (!pageChanges.length || pageChanges[pageChanges.length - 1].title !== pageTitle) {
      pageChanges.push({
        title: pageTitle,
        page: page,
        contentBefore: [],
        links: [],
        summary: []
      });
    }
    var lastPageChange = pageChanges[pageChanges.length - 1];
    lastPageChange.contentBefore.push(oldContent);
    lastPageChange.links.push(link);
    lastPageChange.summary.push(summary);
  };
  /* Check whether actual changes are stored in the history array */
  var checkActualChanges = function checkActualChanges() {
    return countActualChanges() !== 0;
  };
  /* Return the number of entries in the history array that represent actual changes */
  var countActualChanges = function countActualChanges() {
    var changeCount = 0;
    var _iterator3 = _createForOfIteratorHelper(pageChanges),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var pageChange = _step3.value;
        if (pageChange.page.content !== pageChange.contentBefore[0]) {
          changeCount++;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return changeCount;
  };
  /* Return the number of changed pages in the history array, ignoring the last entry/* * if we aren't done with that page yet */
  var countActuallyChangedFullyCheckedPages = function countActuallyChangedFullyCheckedPages() {
    var changeCount = countActualChanges();
    if (pageChanges.length > 0) {
      var lastChange = pageChanges[pageChanges.length - 1];
      if (lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
        changeCount--;
      }
    }
    return changeCount;
  };
  /* Find the links to disambiguation options in a disambiguation page */
  var getDisamOptions = function getDisamOptions() {
    return $('#mw-content-text a').filter(function (_index, element) {
      return !!extractPageName($(element));
    });
  };
  /* Save all the pending changes and close the tool */
  var saveAndEnd = function saveAndEnd() {
    applyAllChanges();
    end();
  };
  /* Close the tool */
  var end = function end() {
    var currentToolUI = ui.display;
    choosing = false;
    running = false;
    startLink.removeClass('selected');
    $('.disamassist-optionmarker').remove();
    currentToolUI.fadeOut({
      complete: function complete() {
        currentToolUI.remove();
        if (editCount !== 0) {
          togglePendingEditBox(true);
        }
      }
    });
  };
  /* Display an error message */
  var error = function error(errorDescription) {
    var errorBox = $('<div>').addClass('disamassist-box disamassist-errorbox');
    errorBox.text(txt.error.replace('$1', errorDescription));
    errorBox.append(createButton(txt.dismissError, function () {
      errorBox.fadeOut();
    }).addClass('disamassist-errorbutton'));
    var uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
    var nextElement = uiIsInPlace ? ui.display : $('#mw-content-text');
    nextElement.before(errorBox);
    errorBox.hide().fadeIn();
  };
  /* Change a link so that it points to the title/* * text: The wikitext of the whole page/* * title: The new destination of the link/* * link: The link that will be modified/* * extra: Text that will be added after the link (optional) */
  var replaceLink = function replaceLink(text, title, link, extra) {
    var newContent;
    isSamePage(title, link.description) ?
    // [[B|A]] should be replaced with [[A]] rather than [[A|A]]
    newContent = link.description : newContent = "".concat(title, "|").concat(link.description);
    var linkStart = text.slice(0, Math.max(0, link.start));
    var linkEnd = text.slice(Math.max(0, link.end));
    return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra || '').concat(linkEnd);
  };
  /* Remove a link from the text/* * text: The wikitext of the whole page/* * link: The link that will be removed */
  var removeLink = function removeLink(text, link) {
    var linkStart = text.slice(0, Math.max(0, link.start));
    var linkEnd = text.slice(Math.max(0, link.end));
    return linkStart + link.description + link.afterDescription + linkEnd;
  };
  /* Extract a link from a string in wiki format,/* * starting from a given index. Return a link if one can be found,/* * otherwise return null. The "link" includes "disambiguation needed"/* * templates inmediately following the link proper/* * text: Text from which the link will be extracted/* * lastIndex: Index from which the search will start */
  var extractLink = function extractLink(text, lastIndex) {
    // FIXME: Not an actual title regex (lots of false positives
    // and some false negatives), but hopefully good enough.
    var titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
    // Ditto for the template regex. Disambiguation link templates
    // should be simple enough for this not to matter, though.
    var templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
    titleRegex.lastIndex = lastIndex;
    var match = titleRegex.exec(text);
    if (match !== null && match.index !== -1) {
      var _match$;
      var possiblyAmbiguous = true;
      var hasDisamTemplate = false;
      var _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
      var afterDescription = '';
      var rest = text.slice(Math.max(0, _end));
      var templateMatch = templateRegex.exec(rest);
      if (templateMatch !== null) {
        var templateTitle = getCanonicalTitle(templateMatch[2]);
        var disamLinkTemplates = cfg.disamLinkTemplates;
        var disamLinkIgnoreTemplates = cfg.disamLinkIgnoreTemplates;
        if (disamLinkTemplates.indexOf(templateTitle) !== -1) {
          _end += templateMatch[0].length;
          afterDescription = templateMatch[1].replace(/\s$/, '');
          hasDisamTemplate = true;
        } else if (disamLinkIgnoreTemplates.indexOf(templateTitle) !== -1) {
          possiblyAmbiguous = false;
        }
      }
      return {
        start: match.index,
        end: _end,
        possiblyAmbiguous: possiblyAmbiguous,
        hasDisamTemplate: hasDisamTemplate,
        title: match[1],
        description: (_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1],
        afterDescription: afterDescription
      };
    }
  };
  /* Extract a link to one of a number of destination pages from a string/* * ("text") in wiki format, starting from a given index ("lastIndex")./* * "Disambiguation needed" templates are included as part of the links./* * text: Page in wiki format/* * destinations: Array of page titles to look for/* * lastIndex: Index from which the search will start */
  var extractLinkToPage = function extractLinkToPage(text, destinations, lastIndex) {
    var link;
    var title;
    do {
      link = extractLink(text, lastIndex);
      if (link) {
        lastIndex = link.end;
        title = getCanonicalTitle(link.title);
      }
    } while (link && (!link.possiblyAmbiguous || !(destinations.indexOf(title) !== -1)));
    return link;
  };
  /* Find the "target" page: either the one we are in or the "main" one found by extracting/* * the title from ".* (disambiguation)" or whatever the appropiate local format is */
  var getTargetPage = function getTargetPage() {
    var title = getTitle();
    return forceSamePage ? title : removeDisam(title);
  };
  /* Get the page title, with the namespace prefix if any. */
  var getTitle = function getTitle() {
    return mw.config.get('wgPageName').replace(/_/g, ' ');
  };
  /* Extract a "main" title from ".* (disambiguation)" or whatever the appropiate local format is */
  var removeDisam = function removeDisam(title) {
    var match = new RegExp(cfg.disamRegExp).exec(title);
    return match ? match[1] : title;
  };
  /* Check whether two page titles are the same */
  var isSamePage = function isSamePage(title1, title2) {
    return getCanonicalTitle(title1) === getCanonicalTitle(title2);
  };
  /* Return the 'canonical title' of a page */
  var getCanonicalTitle = function getCanonicalTitle(title) {
    try {
      title = new mw.Title(title).getPrefixedText();
    } catch (_unused) {
      // mw.Title seems to be buggy, and some valid titles are rejected
      // FIXME: This may cause false negatives
    }
    return title;
  };
  /* Extract the context around a given link in a text string */
  var extractContext = function extractContext(text, link) {
    var contextStart = link.start - cfg.radius;
    var contextEnd = link.end + cfg.radius;
    var contextPrev = text.slice(contextStart, link.start);
    if (contextStart > 0) {
      contextPrev = txt.ellipsis + contextPrev;
    }
    var contextNext = text.slice(link.end, contextEnd);
    if (contextEnd < text.length) {
      contextNext = contextNext + txt.ellipsis;
    }
    return [contextPrev, text.slice(link.start, link.end), contextNext];
  };
  /* Extract the prefixed page name from a link */
  var extractPageName = function extractPageName(link) {
    var pageName = extractPageNameRaw(link);
    if (pageName) {
      var sectionPos = pageName.indexOf('#');
      var section = '';
      if (sectionPos !== -1) {
        section = pageName.slice(Math.max(0, sectionPos));
        pageName = pageName.slice(0, Math.max(0, sectionPos));
      }
      return getCanonicalTitle(pageName) + section;
    }
  };
  /* Extract the page name from a link, as is */
  var extractPageNameRaw = function extractPageNameRaw(link) {
    if (!link.hasClass('image')) {
      var href = link.attr('href');
      if (link.hasClass('new')) {
        // "Red" link
        if (href.indexOf(mw.config.get('wgScript')) !== -1) {
          return mw.util.getParamValue('title', href);
        }
      } else {
        var regex = mw.config.get('wgArticlePath').replace('$1', '(.*)');
        var regexResult = new RegExp("^".concat(regex, "$")).exec(href);
        if (Array.isArray(regexResult) && regexResult.length > 1) {
          return decodeURIComponent(regexResult[1]);
        }
      }
    }
  };
  /* Check whether this is a disambiguation page */
  var isDisam = function isDisam() {
    var categories = mw.config.get('wgCategories', []);
    var _iterator4 = _createForOfIteratorHelper(categories),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var category = _step4.value;
        var disamCategories = cfg.disamCategories;
        if (disamCategories.indexOf(category) !== -1) {
          return true;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return false;
  };
  var secondsToHHMMSS = function secondsToHHMMSS(totalSeconds) {
    var hhmmss = '';
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    var seconds = Math.floor(totalSeconds % 3600 % 60);
    if (hours >= 1) {
      hhmmss = "".concat(pad(hours, '0', 2), ":");
    }
    hhmmss += "".concat(pad(minutes, '0', 2), ":").concat(pad(seconds, '0', 2));
    return hhmmss;
  };
  var pad = function pad(str, z, width) {
    str = str.toString();
    if (str.length >= width) {
      return str;
    }
    return Array.from({
      length: width - str.length + 1
    }).join(z) + str;
  };
  /* Create a new button
   * text: Text that will be displayed on the button
   * onClick: Function that will be called when the
   * button is clicked
   */
  var createButton = function createButton(text, onClick) {
    var button = $('<input>').attr({
      type: 'button',
      value: text
    });
    button.addClass('disamassist-button').on('click', onClick);
    return button;
  };
  /* Given a page title and an array of possible redirects {from, to} ("canonical titles"), find the page/* * at the end of the redirect chain, if there is one. Otherwise, return the page title that was passed */
  var resolveRedirect = function resolveRedirect(pageTitle, possibleRedirects) {
    var appliedRedirect = true;
    var visitedPages = {};
    var currentPage = getCanonicalTitle(pageTitle);
    while (appliedRedirect) {
      appliedRedirect = false;
      var _iterator5 = _createForOfIteratorHelper(possibleRedirects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var possibleRedirect = _step5.value;
          if (possibleRedirect.from === currentPage) {
            if (visitedPages[possibleRedirect.to]) {
              // Redirect chain detected
              return pageTitle;
            }
            visitedPages[currentPage] = true;
            appliedRedirect = true;
            currentPage = possibleRedirect.to;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    // No redirect rules applied for an iteration of the outer loop:
    // no more redirects. We are done
    return currentPage;
  };
  /* Fetch the incoming links to a page. Returns a jQuery promise/* * (success - array of titles of pages that contain links to the target page and/* * array of "canonical titles" of possible destinations of the backlinks (either/* * the target page or redirects to the target page), failure - error description)/* * page: Target page */
  var getBacklinks = function getBacklinks(page) {
    var dfd = new $.Deferred();
    api.get({
      action: 'query',
      list: 'backlinks',
      bltitle: page,
      blredirect: true,
      bllimit: cfg.backlinkLimit,
      blnamespace: cfg.targetNamespaces.join('|')
    }).done(function (_ref) {
      var query = _ref.query;
      // There might be duplicate entries in some corner cases. We don't care,
      // since we are going to check later, anyway
      var backlinks = [];
      var linkTitles = [getCanonicalTitle(page)];
      var backlinksQuery = query.backlinks;
      $.each(backlinksQuery, function (_index, element) {
        backlinks.push(element.title);
        if (element.redirlinks) {
          linkTitles.push(element.title);
          var redirlinks = element.redirlinks;
          $.each(redirlinks, function (__index, _ref2) {
            var title = _ref2.title;
            backlinks.push(title);
          });
        }
      });
      dfd.resolve(backlinks, linkTitles);
    }).fail(function (code) {
      dfd.reject(txt.getBacklinksError.replace('$1', code));
    });
    return dfd.promise();
  };
  /* Download a list of redirects for some pages. Returns a jQuery callback (success -/* * array of redirects ({from, to}), failure - error description )/* * pageTitles: Array of page titles */
  var fetchRedirects = function fetchRedirects(pageTitles) {
    var dfd = new $.Deferred();
    var currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
    var restTitles = pageTitles.slice(cfg.queryTitleLimit);
    api.get({
      action: 'query',
      titles: currentTitles.join('|'),
      redirects: true
    }).done(function (_ref3) {
      var _query$redirects;
      var query = _ref3.query;
      var theseRedirects = (_query$redirects = query.redirects) !== null && _query$redirects !== void 0 ? _query$redirects : [];
      if (restTitles.length > 0) {
        fetchRedirects(restTitles).done(function (redirects) {
          dfd.resolve([].concat(_toConsumableArray(theseRedirects), _toConsumableArray(redirects)));
        }).fail(function (description) {
          dfd.reject(description);
        });
      } else {
        dfd.resolve(theseRedirects);
      }
    }).fail(function (code) {
      dfd.reject(txt.fetchRedirectsError.replace('$1', code));
    });
    return dfd.promise();
  };
  /* Download the list of user rights for the current user. Returns a/* * jQuery promise (success - array of right names, error - error description) */
  var fetchRights = function fetchRights() {
    var dfd = $.Deferred();
    api.get({
      action: 'query',
      meta: 'userinfo',
      uiprop: 'rights'
    }).done(function (_ref4) {
      var query = _ref4.query;
      dfd.resolve(query.userinfo.rights);
    }).fail(function (code) {
      dfd.reject(txt.fetchRightsError.replace('$1', code));
    });
    return dfd.promise();
  };
  /* Load the raw page text for a given title. Returns a jQuery promise (success - page/* * content, failure - error description)/* * pageTitle: Title of the page */
  var loadPage = function loadPage(pageTitle) {
    var dfd = new $.Deferred();
    api.get({
      action: 'query',
      titles: pageTitle,
      prop: 'revisions',
      rvprop: 'timestamp|content',
      meta: 'tokens',
      type: 'csrf'
    }).done(function (_ref5) {
      var query = _ref5.query;
      var pages = query.pages;
      var key;
      for (key in pages) {
        if (Object.prototype.hasOwnProperty.call(pages, key)) {
          break;
        }
      }
      var rawPage = query.pages[key];
      var page = {};
      page.redirect = rawPage.redirect !== undefined;
      page.missing = rawPage.missing !== undefined;
      if (rawPage.revisions) {
        page.content = rawPage.revisions[0]['*'];
        page.baseTimeStamp = rawPage.revisions[0].timestamp;
      } else {
        page.content = '';
        page.baseTimeStamp = undefined;
      }
      page.startTimeStamp = rawPage.starttimestamp;
      page.editToken = query.tokens.csrftoken;
      dfd.resolve(page);
    }).fail(function (code) {
      dfd.reject(txt.loadPageError.replace('$1', pageTitle).replace('$2', code));
    });
    return dfd.promise();
  };
  /* Register changes to a page, to be saved later. Returns a jQuery promise/* * (success - no params, failure - error description). Takes the same parameters/* * as savePage */
  var saveWithCooldown = function saveWithCooldown() {
    var deferred = new $.Deferred();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    pendingSaves.push({
      args: args,
      dfd: deferred
    });
    if (!runningSaves) {
      checkAndSave();
    }
    return deferred.promise();
  };
  /* Save the first set of changes in the list of pending changes, providing that/* * enough time has passed since the last edit */
  var checkAndSave = function checkAndSave() {
    if (!pendingSaves.length) {
      runningSaves = false;
      return;
    }
    runningSaves = true;
    var millisSinceLast = Date.now() - lastEditMillis;
    if (millisSinceLast < cfg.editCooldown * 1000) {
      setTimeout(checkAndSave, cfg.editCooldown * 1000 - millisSinceLast);
    } else {
      // The last edit started at least cfg.editCooldown seconds ago
      var save = pendingSaves.shift();
      savePage.apply(this, save.args).done(function () {
        checkAndSave();
        save.dfd.resolve();
      }).fail(function (description) {
        checkAndSave();
        save.dfd.reject(description);
      });
      // We'll use the time since the last edit started
      lastEditMillis = Date.now();
    }
  };
  /* Save the changes made to a page. Returns a jQuery promise (success - no params,/* * failure - error description)/* * pageTitle: Title of the page/* * page: Page data/* * summary: Summary of the changes made to the page/* * minorEdit: Whether to mark the edit as 'minor'/* * botEdit: Whether to mark the edit as 'bot' */
  var savePage = function savePage(pageTitle, _ref6, summary, minorEdit, botEdit) {
    var editToken = _ref6.editToken,
      content = _ref6.content,
      baseTimeStamp = _ref6.baseTimeStamp,
      startTimeStamp = _ref6.startTimeStamp;
    var dfd = new $.Deferred();
    api.post({
      action: 'edit',
      title: pageTitle,
      token: editToken,
      text: content,
      basetimestamp: baseTimeStamp,
      starttimestamp: startTimeStamp,
      summary: summary,
      watchlist: cfg.watch,
      minor: minorEdit,
      bot: botEdit
    }).done(function () {
      dfd.resolve();
    }).fail(function (code) {
      dfd.reject(txt.savePageError.replace('$1', pageTitle).replace('$2', code));
    });
    return dfd.promise();
  };
  install();
})($, mw);
/* </nowiki> */
