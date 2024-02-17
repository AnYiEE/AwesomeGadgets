/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js>
 * @dependency ext.gadget.SiteCommonJS, jquery.makeCollapsible, jquery.ui, mediawiki.api
 */
"use strict";

/* <nowiki> */
mw.hook("wikipage.content").add(function () {
  setTimeout(function () {
    $(function () {
      var api = null;
      var run = function run($dialog, hash) {
          var wikitext = "";
          var $dom = $("#noteTA-".concat(hash));
          var collapse = true;
          var actualTitle = mw.config.get("wgPageName").replace(/_/g, " ");
          var parse = function parse() {
            api.post({
              action: "parse",
              title: "Template:CGroup/-",
              text: wikitext,
              prop: "text",
              variant: mw.config.get("wgUserVariant")
            }).done(function (results) {
              $dialog.html(results.parse.text["*"]);
              if (collapse) {
                $dialog.find(".mw-collapsible").makeCollapsible();
                $dialog.find(".mw-collapsible-toggle").on("click.mw-collapse", function () {
                  var $collapsibleContent = $(this).parent(".mw-collapsible").find(".mw-collapsible-content");
                  setTimeout(function () {
                    $collapsibleContent.promise().done(function () {
                      $dialog.dialog("option", "position", "center");
                    });
                  }, 0);
                });
              }
              $dialog.dialog("option", "width", Math.round($(window).width() * 0.8));
              $dialog.css("max-height", "".concat(Math.round($(window).height() * 0.8), "px"));
              $dialog.dialog("option", "position", "center");
            }).fail(parse);
          };
          var _maybeTitle2 = parse;
          var $noteTAtitle = $dom.find(".noteTA-title");
          if ($noteTAtitle.length) {
            var titleConv = $noteTAtitle.attr("data-noteta-code");
            var titleDesc = $noteTAtitle.attr("data-noteta-desc");
            if (titleDesc) {
              titleDesc = "\uFF08".concat(titleDesc, "\uFF09");
            } else {
              titleDesc = "";
            }
            wikitext += "<span style=\"float: right;\">{{edit|".concat(actualTitle, "|section=0}}</span>\n");
            wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
            wikitext += "* \u8F6C\u6362\u6807\u9898\u4E3A\uFF1A-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
            wikitext += "* \u5B9E\u9645\u6807\u9898\u4E3A\uFF1A-{R|".concat(actualTitle, "}-\uFF1B\u5F53\u524D\u663E\u793A\u4E3A\uFF1A-{|").concat(titleConv, "}-\n");
          } else {
            _maybeTitle2 = function _maybeTitle() {
              api.post({
                action: "parse",
                title: actualTitle,
                text: "{{noteTA/multititle|".concat(actualTitle, "}}"),
                prop: "text",
                variant: "zh"
              }).done(function (results) {
                var $multititle = $(results.parse.text["*"]).find(".noteTA-multititle");
                if ($multititle.length) {
                  var textVariant = {},
                    variantText = {};
                  var multititleText = "";
                  $multititle.children().each(function () {
                    var $li = $(this);
                    var variantLi = $li.attr("data-noteta-multititle-variant");
                    var liText = $li.text();
                    variantText[variantLi] = liText;
                    if (textVariant[liText]) {
                      textVariant[liText].push(variantLi);
                    } else {
                      textVariant[liText] = [variantLi];
                    }
                  });
                  multititleText += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n";
                  multititleText += "* 转换标题为：";
                  var multititle = [],
                    titleConverted = variantText[mw.config.get("wgUserVariant")];
                  for (var variant in variantText) {
                    if (Object.prototype.hasOwnProperty.call(variantText, variant)) {
                      var text = variantText[variant];
                      if (text === null) {
                        continue;
                      }
                      var variants = textVariant[text];
                      variants.forEach(function () {
                        variantText[this] = null;
                      });
                      var variantsName = variants.map(function (variantName) {
                        return "-{R|{{MediaWiki:Variantname-".concat(variantName, "}}}-");
                      }).join("、");
                      multititle.push("".concat(variantsName, "\uFF1A-{R|").concat(text, "}-"));
                    }
                  }
                  multititleText += multititle.join("；");
                  multititleText += "\n* \u5B9E\u9645\u6807\u9898\u4E3A\uFF1A-{R|".concat(actualTitle, "}-\uFF1B\u5F53\u524D\u663E\u793A\u4E3A\uFF1A-{R|").concat(titleConverted, "}-\n");
                  wikitext = multititleText + wikitext;
                }
                parse();
              }).fail(_maybeTitle2);
            };
          }
          var $noteTAgroups = $dom.find(".noteTA-group > *[data-noteta-group]");
          if ($noteTAgroups.length > 1) {
            collapse = true;
          }
          $noteTAgroups.each(function () {
            var $this = $(this);
            switch ($this.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($this.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($this.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; \u672C\u6587\u4F7F\u7528\u7684\u516C\u5171\u8F6C\u6362\u7EC4\u201C".concat($this.attr("data-noteta-group"), "\u201D\u5C1A\u672A\u521B\u5EFA\n");
                wikitext += "* {{edit|Module:CGroup/".concat($this.attr("data-noteta-group"), "|\u521B\u5EFA\u516C\u5171\u8F6C\u6362\u7EC4\u201C").concat($this.attr("data-noteta-group"), "\u201D}}\n");
                break;
              default:
                wikitext += "; \u672A\u77E5\u516C\u5171\u8F6C\u6362\u7EC4\u201C".concat($this.attr("data-noteta-group"), "\u201D\u6765\u6E90\u201C").concat($this.attr("data-noteta-group-source"), "\u201D\n");
            }
          });
          var $noteTAlocal = $dom.find(".noteTA-local");
          if ($noteTAlocal.length) {
            collapse = true;
            wikitext += "<span style=\"float: right;\">{{edit|".concat(actualTitle, "|section=0}}</span>\n");
            wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
            var $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
            $noteTAlocals.each(function () {
              var $this = $(this);
              var localConv = $this.attr("data-noteta-code");
              var localDesc = $this.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "\uFF08".concat(localDesc, "\uFF09");
              } else {
                localDesc = "";
              }
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "\u5F53\u524D\u663E\u793A\u4E3A\uFF1A-{").concat(localConv, "}-\n");
            });
          }
          wikitext += "{{noteTA/footer}}\n";
          _maybeTitle2();
        },
        init = function init(hash) {
          var $dialog = $("<div>").attr({
              "class": "noteTA-dialog"
            }),
            $dialogHTML = $("<div>").attr({
              "class": "mw-ajax-loader"
            }).css({
              "margin-top": "48px"
            });
          $dialog.append($dialogHTML);
          $dialog.dialog({
            title: wgULS("字词转换", "字詞轉換")
          });
          api = new mw.Api({
            ajax: {
              headers: {
                "Api-User-Agent": "Qiuwen/1.1 (NoteTA/1.1; ".concat(mw.config.get("wgWikiID"), ")")
              }
            }
          });
          run($dialog, hash);
          return $dialog;
        };
      $(".mw-indicator[id^=mw-indicator-noteTA-]").css("cursor", "pointer").each(function () {
        var $dialog = null;
        var $this = $(this);
        var hash = $this.attr("id").replace(/^mw-indicator-noteTA-/, "");
        $this.on("click", function () {
          if ($dialog === null) {
            $dialog = init(hash);
          } else {
            $dialog.dialog("open");
          }
        });
      });
    });
  }, 0);
});
/* </nowiki> */