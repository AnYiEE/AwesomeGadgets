/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-vector}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/Edittools-vector/Edittools-vector.js
//! src/Edittools-vector/Edittools-vector.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
(0, import_ext_gadget.customizeToolbar)(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        oouiIcon: "tag",
        action: {
          type: "encapsulate",
          options: {
            pre: "[[Category:",
            post: "]]"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "format",
    tools: {
      bolditalic: {
        label: "粗斜体",
        type: "button",
        icon: "https://youshou.wiki/images/b/be/Toolbaricon_bolditalic_A.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "'''''",
            periMsg: "粗斜体文字",
            post: "'''''"
          }
        }
      },
      strikethrough: {
        label: "删除线",
        type: "button",
        oouiIcon: "strikethrough",
        action: {
          type: "encapsulate",
          options: {
            pre: "<s>",
            post: "</s>"
          }
        }
      },
      underline: {
        label: "下划线",
        type: "button",
        oouiIcon: "underline",
        action: {
          type: "encapsulate",
          options: {
            pre: "<u>",
            post: "</u>"
          }
        }
      },
      quote: {
        label: "块引用",
        type: "button",
        oouiIcon: "quotes",
        action: {
          type: "encapsulate",
          options: {
            pre: "<block".concat("quote>"),
            post: "</block".concat("quote>")
          }
        }
      },
      "justify-left": {
        label: "左对齐",
        type: "button",
        oouiIcon: "alignLeft",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align:left">',
            post: "</div>"
          }
        }
      },
      "justify-center": {
        label: "居中",
        type: "button",
        oouiIcon: "alignCenter",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: center;">',
            post: "</div>"
          }
        }
      },
      "justify-right": {
        label: "右对齐",
        type: "button",
        oouiIcon: "alignRight",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: right;">',
            post: "</div>"
          }
        }
      },
      source: {
        label: "源代码",
        type: "button",
        oouiIcon: "markup",
        action: {
          type: "encapsulate",
          options: {
            pre: '<syntaxhighlight lang="text">',
            post: "</syntaxhighlight>"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "insert",
    tools: {
      math: {
        label: "数学公式",
        type: "button",
        oouiIcon: "mathematics",
        action: {
          type: "encapsulate",
          options: {
            pre: "<math>",
            periMsg: "插入数学公式",
            post: "</math>"
          }
        }
      },
      hidden: {
        label: "注释或隐藏文字",
        type: "button",
        oouiIcon: "notice",
        action: {
          type: "encapsulate",
          options: {
            pre: "<!-- ",
            post: " -->"
          }
        }
      },
      hline: {
        label: "水平线",
        type: "button",
        oouiIcon: "subtract",
        action: {
          type: "encapsulate",
          options: {
            pre: "----",
            ownline: true
          }
        }
      },
      "hans-hant": {
        label: "繁简转换",
        type: "button",
        icon: "https://youshou.wiki/images/thumb/6/6a/Chinese_conversion_black.svg/24px-Chinese_conversion_black.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "-{",
            periMsg: "转换文字",
            post: "}-"
          }
        }
      },
      references: {
        label: "参考文献区",
        type: "button",
        oouiIcon: "references",
        action: {
          type: "encapsulate",
          options: {
            pre: "\n== 参考文献 ==\n{{reflist}}\n"
          }
        }
      }
    }
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12ZWN0b3IvRWRpdHRvb2xzLXZlY3Rvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcblxuY3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnbWFpbicsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRjYXRlZ29yeToge1xuXHRcdFx0XHRsYWJlbDogJ+WIhuexuycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3RhZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnW1tDYXRlZ29yeTonLFxuXHRcdFx0XHRcdFx0cG9zdDogJ11dJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ2FkdmFuY2VkJyxcblx0XHRncm91cDogJ2Zvcm1hdCcsXG5cdFx0dG9vbHM6IHtcblx0XHRcdGJvbGRpdGFsaWM6IHtcblx0XHRcdFx0bGFiZWw6ICfnspfmlpzkvZMnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9iL2JlL1Rvb2xiYXJpY29uX2JvbGRpdGFsaWNfQS5wbmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogXCInJycnJ1wiLFxuXHRcdFx0XHRcdFx0cGVyaU1zZzogJ+eyl+aWnOS9k+aWh+WtlycsXG5cdFx0XHRcdFx0XHRwb3N0OiBcIicnJycnXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Yig6Zmk57q/Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnc3RyaWtldGhyb3VnaCcsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPHM+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3M+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHVuZGVybGluZToge1xuXHRcdFx0XHRsYWJlbDogJ+S4i+WIkue6vycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3VuZGVybGluZScsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPHU+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3U+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHF1b3RlOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Z2X5byV55SoJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAncXVvdGVzJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8YmxvY2snLmNvbmNhdCgncXVvdGU+JyksXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9ibG9jaycuY29uY2F0KCdxdW90ZT4nKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LWxlZnQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn5bem5a+56b2QJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnYWxpZ25MZWZ0Jyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Rpdj4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktY2VudGVyJzoge1xuXHRcdFx0XHRsYWJlbDogJ+WxheS4rScsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ2FsaWduQ2VudGVyJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LXJpZ2h0Jzoge1xuXHRcdFx0XHRsYWJlbDogJ+WPs+Wvuem9kCcsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ2FsaWduUmlnaHQnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDtcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvZGl2PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzb3VyY2U6IHtcblx0XHRcdFx0bGFiZWw6ICfmupDku6PnoIEnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdtYXJrdXAnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxzeW50YXhoaWdobGlnaHQgbGFuZz1cInRleHRcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvc3ludGF4aGlnaGxpZ2h0PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdHNlY3Rpb246ICdhZHZhbmNlZCcsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRtYXRoOiB7XG5cdFx0XHRcdGxhYmVsOiAn5pWw5a2m5YWs5byPJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnbWF0aGVtYXRpY3MnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxtYXRoPicsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn5o+S5YWl5pWw5a2m5YWs5byPJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L21hdGg+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGhpZGRlbjoge1xuXHRcdFx0XHRsYWJlbDogJ+azqOmHiuaIlumakOiXj+aWh+WtlycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ25vdGljZScsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPCEtLSAnLFxuXHRcdFx0XHRcdFx0cG9zdDogJyAtLT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aGxpbmU6IHtcblx0XHRcdFx0bGFiZWw6ICfmsLTlubPnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdzdWJ0cmFjdCcsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnLS0tLScsXG5cdFx0XHRcdFx0XHRvd25saW5lOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2hhbnMtaGFudCc6IHtcblx0XHRcdFx0bGFiZWw6ICfnuYHnroDovazmjaInLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi82LzZhL0NoaW5lc2VfY29udmVyc2lvbl9ibGFjay5zdmcvMjRweC1DaGluZXNlX2NvbnZlcnNpb25fYmxhY2suc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnLXsnLFxuXHRcdFx0XHRcdFx0cGVyaU1zZzogJ+i9rOaNouaWh+WtlycsXG5cdFx0XHRcdFx0XHRwb3N0OiAnfS0nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0cmVmZXJlbmNlczoge1xuXHRcdFx0XHRsYWJlbDogJ+WPguiAg+aWh+eMruWMuicsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3JlZmVyZW5jZXMnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJ1xcbj09IOWPguiAg+aWh+eMriA9PVxcbnt7cmVmbGlzdH19XFxuJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQStCQyxRQUFBLHVDQUFBO0NBQUEsR0FFL0JELGtCQUFBRSxrQkFBaUIsV0FBOEI7QUFDOUMsUUFBTUMsT0FBTztBQUViQSxPQUFLQyxXQUFXLGdCQUFnQjtJQUMvQkMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE9BQU87TUFDTkMsVUFBVTtRQUNUQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7SUFDRDtFQUNELENBQUM7QUFDRFosT0FBS0MsV0FBVyxnQkFBZ0I7SUFDL0JDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxPQUFPO01BQ05TLFlBQVk7UUFDWFAsT0FBTztRQUNQQyxNQUFNO1FBQ05PLE1BQU07UUFDTkwsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMSSxTQUFTO1lBQ1RILE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQUksZUFBZTtRQUNkVixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQUssV0FBVztRQUNWWCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQU0sT0FBTztRQUNOWixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLLFNBQVNRLE9BQU8sUUFBUTtZQUM3QlAsTUFBTSxVQUFVTyxPQUFPLFFBQVE7VUFDaEM7UUFDRDtNQUNEO01BQ0EsZ0JBQWdCO1FBQ2ZiLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBLGtCQUFrQjtRQUNqQk4sT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMQyxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0EsaUJBQWlCO1FBQ2hCTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQVEsUUFBUTtRQUNQZCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7SUFDRDtFQUNELENBQUM7QUFDRFosT0FBS0MsV0FBVyxnQkFBZ0I7SUFDL0JDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxPQUFPO01BQ05pQixNQUFNO1FBQ0xmLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEksU0FBUztZQUNUSCxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0FVLFFBQVE7UUFDUGhCLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBVyxPQUFPO1FBQ05qQixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xhLFNBQVM7VUFDVjtRQUNEO01BQ0Q7TUFDQSxhQUFhO1FBQ1psQixPQUFPO1FBQ1BDLE1BQU07UUFDTk8sTUFBTTtRQUNOTCxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xJLFNBQVM7WUFDVEgsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBYSxZQUFZO1FBQ1huQixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1VBQ047UUFDRDtNQUNEO0lBQ0Q7RUFDRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9uIiwgImdyb3VwIiwgInRvb2xzIiwgImNhdGVnb3J5IiwgImxhYmVsIiwgInR5cGUiLCAib291aUljb24iLCAiYWN0aW9uIiwgIm9wdGlvbnMiLCAicHJlIiwgInBvc3QiLCAiYm9sZGl0YWxpYyIsICJpY29uIiwgInBlcmlNc2ciLCAic3RyaWtldGhyb3VnaCIsICJ1bmRlcmxpbmUiLCAicXVvdGUiLCAiY29uY2F0IiwgInNvdXJjZSIsICJtYXRoIiwgImhpZGRlbiIsICJobGluZSIsICJvd25saW5lIiwgInJlZmVyZW5jZXMiXQp9Cg==
