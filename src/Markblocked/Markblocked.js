/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Markblocked>
 * @dependency ext.gadget.i18n, mediawiki.util
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * This gadget will pull the user accounts and IPs from the history page
 * and will strike out the users that are currently blocked.
 */
(function markBlocked($, mw) {
  var _i18n = i18n,
    localize = _i18n.localize;
  var markBlockedUser = function markBlockedUser(container) {
    var ipv6Regex = /^((?=.*::)(?!.*::.+::)(::)?([\da-f]{1,4}:(:|\b)|){5}|([\da-f]{1,4}:){6})((([\da-f]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    // Collect all the links in the page's content
    var contentLinks = $(container).find('a');
    var markBlockedTooltip = localize({
      en: '; blocked ($1) by $2: $3 ($4 ago)',
      'zh-hans': '；由$2封禁$1：$3（$4前）',
      'zh-hant': '；由$2封鎖$1：$3（$4前）'
    });
    // Get all aliases for user: & user_talk:
    var userNamespace = [];
    for (var namespace in mw.config.get('wgNamespaceIds')) {
      if (mw.config.get('wgNamespaceIds')[namespace] === 2 || mw.config.get('wgNamespaceIds')[namespace] === 3) {
        userNamespace.push("".concat(mw.util.escapeRegExp(namespace.replace(/_/g, ' ')), ":"));
      }
    }
    // Let wikis that are importing this gadget specify the local alias of Special:Contributions
    var specialContribs = 'Special:Contributions';
    // RegExp for all titles that are  User:| User_talk: | Special:Contributions/ (for userscripts)
    var userTitleRegex = new RegExp("^(".concat(userNamespace.join('|'), "|").concat(specialContribs, "\\/)+([^\\/#]+)$"), 'i');
    // RegExp for links
    // articleRegex also matches external links in order to support the noping template
    var articleRegex = new RegExp("".concat(mw.config.get('wgArticlePath').replace('$1', ''), "([^#]+)"));
    var scriptRegex = new RegExp("^".concat(mw.config.get('wgScript'), "\\?title=([^#&]+)"));
    var userLinks = {};
    var user;
    var url;
    var match;
    var pageTitle;
    // Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
    contentLinks.each(function (_index, link) {
      if ($(link).hasClass('mw-changeslist-date') || $(link).parent('span').hasClass('mw-history-undo') || $(link).parent('span').hasClass('mw-rollback-link')) {
        return;
      }
      url = $(link).attr('href');
      if (!url) {
        return;
      }
      if (articleRegex.test(url)) {
        match = articleRegex.exec(url);
        pageTitle = match[1];
      } else if (scriptRegex.test(url)) {
        match = scriptRegex.exec(url);
        pageTitle = match[1];
      } else {
        return;
      }
      pageTitle = decodeURIComponent(pageTitle).replace(/_/g, ' ');
      user = userTitleRegex.exec(pageTitle);
      if (!user) {
        return;
      }
      user = user[2].slice(0, 1).toUpperCase() + user[2].slice(1);
      if (ipv6Regex.test(user)) {
        user = user.toUpperCase();
      }
      $(link).addClass('userlink');
      if (!userLinks[user]) {
        userLinks[user] = [];
      }
      userLinks[user].push(link);
    });
    // Convert users into array
    var users = [];
    for (var u in userLinks) {
      users.push(u);
    }
    if (users.length === 0) {
      return;
    }
    // API request
    var serverTime;
    var apiRequests = 0;
    container.addClass('markblocked-loading');
    while (users.length > 0) {
      apiRequests++;
      $.post("".concat(mw.util.wikiScript('api'), "?format=json&action=query"), {
        list: 'blocks',
        bklimit: 100,
        bkusers: users.splice(0, 50).join('|'),
        bkprop: 'user|by|timestamp|expiry|reason|restrictions'
        // no need for 'id|flags'
      }, markLinks);
    }
    return; // the end
    // Callback: receive data and mark links
    function markLinks(response, _status, xhr) {
      serverTime = new Date(xhr.getResponseHeader('Date'));
      var list;
      var block;
      var tip;
      var links;
      var link;
      if (!response || !(list = response.query) || !(list = list.blocks)) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          block = element;
          var partial = block.restrictions && !Array.isArray(block.restrictions); // Partial block
          var cssClass = void 0;
          var blockTime = void 0;
          if (block.expiry.startsWith('in')) {
            cssClass = partial ? 'user-blocked-partial' : 'user-blocked-indef';
            blockTime = block.expiry;
          } else {
            cssClass = partial ? 'user-blocked-partial' : 'user-blocked-temp';
            blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
          }
          tip = markBlockedTooltip;
          if (partial) {
            tip = tip.replace('封禁', '部分封禁').replace('封鎖', '部分封鎖');
          }
          tip = tip.replace('$1', blockTime).replace('$2', block.by).replace('$3', block.reason).replace('$4', inHours(serverTime - parseTS(block.timestamp)));
          links = userLinks[block.user];
          if (links) {
            for (var k = 0; k < links.length; k++) {
              link = $(links[k]);
              link = link.addClass(cssClass);
              link.attr('title', link.attr('title') + tip);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (--apiRequests === 0) {
        // last response
        container.removeClass('markblocked-loading');
        $('#ca-showblocks').parent().remove(); // remove added portlet link
      }
    }
    // --------AUX functions
    // 20081226220605  or  2008-01-26T06:34:19Z   -> date
    function parseTS(string) {
      var m = string.replace(/\D/g, '').match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
      return new Date(Date.UTC(m[1], m[2] - 1, m[3], m[4], m[5], m[6]));
    }
    function inHours(ms) {
      var mm = Math.floor(ms / 6e4);
      if (!mm) {
        return "".concat(Math.floor(ms / 1e3), "s");
      }
      var hh = Math.floor(mm / 60);
      mm = mm % 60;
      var dd = Math.floor(hh / 24);
      hh = hh % 24;
      if (dd) {
        return "".concat(dd + (dd < 10 ? ".".concat(zz(hh)) : ''), "d");
      }
      return "".concat(hh, ":").concat(zz(mm));
    }
    function zz(v) {
      if (v <= 9) {
        v = "0".concat(v);
      }
      return v;
    }
  };
  switch (mw.config.get('wgAction')) {
    case 'edit':
    case 'submit':
      break;
    default:
      {
        // 'view', 'history', 'purge', ...
        var maybeAutostart = $.Deferred();
        maybeAutostart.resolve();
        $.when($.ready, maybeAutostart).then(function () {
          var firstTime = true;
          mw.hook('wikipage.content').add(function ($content) {
            // On the first call after initial page load, container is mw.util.$content
            // Used to limit mainspace activity to just the diff definitions
            if (mw.config.get('wgAction') === 'view' && mw.config.get('wgNamespaceNumber') === 0) {
              $content = $content.find('.diff-title');
            }
            if (firstTime) {
              firstTime = false;
              // On page load, also update the namespace tab
              $content = $content.add('#ca-nstab-user');
              mw.util.addCSS('.markblocked-loading a.userlink{opacity:.85}' + 'a.user-blocked-temp{text-decoration:line-through;opacity:.7}' + 'a.user-blocked-indef{text-decoration:line-through;font-style:italic;opacity:.4}' + 'a.user-blocked-partial{text-decoration:underline;text-decoration-style:dotted}' + '.user-blocked-tipbox{padding:0 .3em;border:1px solid #fea;background:ivory;color:#aaa;font-size:smaller}');
            }
            markBlockedUser($content);
          });
        });
      }
  }
})($, mw);
/* </nowiki> */
