/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-ProveIt.js>
 */
/**
 * ProveIt is a powerful reference manager for Wikipedia
 * Documentation at <commons.wikimedia.org/wiki/Help:Gadget-ProveIt>
 *
 * This script sets the configuration options specific to this wiki
 * and loads the gadget code from Wikimedia Commons
 */
"use strict";

var loadProveIt = function loadProveIt() {
  mw.config.set({
    "proveit-tag": "ProveIt_edit",
    "proveit-summary": "使用[[MediaWiki:Gadget-ProveIt.js|ProveIt]]编辑参考文献",
    "proveit-templates": ["Citation", "Cite arXiv", "Cite AV media", "Cite AV media notes", "Cite book", "Cite bioRxiv", "Cite conference", "Cite comic", "Cite encyclopedia", "Cite episode", "Cite interview", "Cite journal", "Cite magazine", "Cite mailing list", "Cite map", "Cite news", "Cite newsgroup", "Cite paper", "Cite podcast", "Cite press release", "Cite report", "Cite serial", "Cite sign", "Cite speech", "Cite techreport", "Cite thesis", "Cite tweet", "Cite video", "Cite video game", "Cite ssrn", "Cite web"],
    "proveit-namespaces": [0, 2, 300, 302 // Draft namespace
    ]
  });

  mw.loader.load("/index.php?title=MediaWiki:Gadget-ProveIt.js&action=raw&ctype=text/javascript");
  mw.loader.load("/index.php?title=MediaWiki:Gadget-ProveIt.css&action=raw&ctype=text/css", "text/css");
};

// Only load when editing
mw.hook("wikipage.editform").add(loadProveIt);
mw.hook("ve.activationComplete").add(loadProveIt);
