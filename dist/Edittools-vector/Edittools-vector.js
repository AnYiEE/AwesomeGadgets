/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-vector}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
window.customizeToolbar(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        icon: "https://youshou.wiki/images/0/0c/VisualEditor_-_Icon_-_Tag.svg",
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
        icon: "https://youshou.wiki/images/7/72/VisualEditor_-_Icon_-_Strikethrough-s.svg",
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
        icon: "https://youshou.wiki/images/a/a9/VisualEditor_-_Icon_-_Underline-u.svg",
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
        icon: "https://youshou.wiki/images/d/d8/VisualEditor_-_Icon_-_Block-quote.svg",
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
        icon: "https://youshou.wiki/images/7/7f/OOjs_UI_icon_alignLeft.svg",
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
        icon: "https://youshou.wiki/images/b/ba/OOjs_UI_icon_alignCenter.svg",
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
        icon: "https://youshou.wiki/images/1/13/OOjs_UI_icon_alignRight.svg",
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
        icon: "https://youshou.wiki/images/2/2c/VisualEditor_-_Icon_-_Source.svg",
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
        icon: "https://youshou.wiki/images/3/30/VisualEditor_-_Icon_-_Equation.svg",
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
        icon: "https://youshou.wiki/images/d/d1/VisualEditor_-_Icon_-_Comment.svg",
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
        icon: "https://youshou.wiki/images/0/0e/VisualEditor_-_Icon_-_Remove-item.svg",
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
        icon: "https://youshou.wiki/images/6/6a/Chinese_conversion_black.svg",
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
        icon: "https://youshou.wiki/wiki/File:VisualEditor_-_Icon_-_References.svg",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12ZWN0b3IvRWRpdHRvb2xzLXZlY3Rvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsid2luZG93LmN1c3RvbWl6ZVRvb2xiYXIoZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSk6IHZvaWQge1xuXHRjb25zdCBzZWxmID0gdGhpcyBhcyBKUXVlcnkgJiB7d2lraUVkaXRvcjogKG1ldGhvZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZH07XG5cblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ21haW4nLFxuXHRcdGdyb3VwOiAnaW5zZXJ0Jyxcblx0XHR0b29sczoge1xuXHRcdFx0Y2F0ZWdvcnk6IHtcblx0XHRcdFx0bGFiZWw6ICfliIbnsbsnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy8wLzBjL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9UYWcuc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICdbW0NhdGVnb3J5OicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnXV0nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnYWR2YW5jZWQnLFxuXHRcdGdyb3VwOiAnZm9ybWF0Jyxcblx0XHR0b29sczoge1xuXHRcdFx0Ym9sZGl0YWxpYzoge1xuXHRcdFx0XHRsYWJlbDogJ+eyl+aWnOS9kycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2IvYmUvVG9vbGJhcmljb25fYm9sZGl0YWxpY19BLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiBcIicnJycnXCIsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn57KX5pac5L2T5paH5a2XJyxcblx0XHRcdFx0XHRcdHBvc3Q6IFwiJycnJydcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHN0cmlrZXRocm91Z2g6IHtcblx0XHRcdFx0bGFiZWw6ICfliKDpmaTnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy83LzcyL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9TdHJpa2V0aHJvdWdoLXMuc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8cz4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvcz4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0dW5kZXJsaW5lOiB7XG5cdFx0XHRcdGxhYmVsOiAn5LiL5YiS57q/Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvYS9hOS9WaXN1YWxFZGl0b3JfLV9JY29uXy1fVW5kZXJsaW5lLXUuc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8dT4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvdT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0cXVvdGU6IHtcblx0XHRcdFx0bGFiZWw6ICflnZflvJXnlKgnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9kL2Q4L1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9CbG9jay1xdW90ZS5zdmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxibG9jaycuY29uY2F0KCdxdW90ZT4nKSxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Jsb2NrJy5jb25jYXQoJ3F1b3RlPicpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktbGVmdCc6IHtcblx0XHRcdFx0bGFiZWw6ICflt6blr7npvZAnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy83LzdmL09PanNfVUlfaWNvbl9hbGlnbkxlZnQuc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Rpdj4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktY2VudGVyJzoge1xuXHRcdFx0XHRsYWJlbDogJ+WxheS4rScsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2IvYmEvT09qc19VSV9pY29uX2FsaWduQ2VudGVyLnN2ZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvZGl2PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHQnanVzdGlmeS1yaWdodCc6IHtcblx0XHRcdFx0bGFiZWw6ICflj7Plr7npvZAnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy8xLzEzL09PanNfVUlfaWNvbl9hbGlnblJpZ2h0LnN2ZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O1wiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNvdXJjZToge1xuXHRcdFx0XHRsYWJlbDogJ+a6kOS7o+eggScsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzLzIvMmMvVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1NvdXJjZS5zdmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxzeW50YXhoaWdobGlnaHQgbGFuZz1cInRleHRcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvc3ludGF4aGlnaGxpZ2h0PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdHNlY3Rpb246ICdhZHZhbmNlZCcsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRtYXRoOiB7XG5cdFx0XHRcdGxhYmVsOiAn5pWw5a2m5YWs5byPJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvMy8zMC9WaXN1YWxFZGl0b3JfLV9JY29uXy1fRXF1YXRpb24uc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8bWF0aD4nLFxuXHRcdFx0XHRcdFx0cGVyaU1zZzogJ+aPkuWFpeaVsOWtpuWFrOW8jycsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9tYXRoPicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRoaWRkZW46IHtcblx0XHRcdFx0bGFiZWw6ICfms6jph4rmiJbpmpDol4/mloflrZcnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9kL2QxL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9Db21tZW50LnN2ZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPCEtLSAnLFxuXHRcdFx0XHRcdFx0cG9zdDogJyAtLT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aGxpbmU6IHtcblx0XHRcdFx0bGFiZWw6ICfmsLTlubPnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy8wLzBlL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9SZW1vdmUtaXRlbS5zdmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJy0tLS0nLFxuXHRcdFx0XHRcdFx0b3dubGluZTogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdoYW5zLWhhbnQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn57mB566A6L2s5o2iJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvNi82YS9DaGluZXNlX2NvbnZlcnNpb25fYmxhY2suc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICcteycsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn6L2s5o2i5paH5a2XJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICd9LScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRyZWZlcmVuY2VzOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Y+C6ICD5paH54yu5Yy6Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpL0ZpbGU6VmlzdWFsRWRpdG9yXy1fSWNvbl8tX1JlZmVyZW5jZXMuc3ZnJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICdcXG49PSDlj4LogIPmlofnjK4gPT1cXG57e3JlZmxpc3R9fVxcbicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxc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O1FBQ05DLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEcsU0FBUztZQUNURixNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0FZLFlBQVk7UUFDWGxCLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7VUFDTjtRQUNEO01BQ0Q7SUFDRDtFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiY3VzdG9taXplVG9vbGJhciIsICJzZWxmIiwgIndpa2lFZGl0b3IiLCAic2VjdGlvbiIsICJncm91cCIsICJ0b29scyIsICJjYXRlZ29yeSIsICJsYWJlbCIsICJ0eXBlIiwgImljb24iLCAiYWN0aW9uIiwgIm9wdGlvbnMiLCAicHJlIiwgInBvc3QiLCAiYm9sZGl0YWxpYyIsICJwZXJpTXNnIiwgInN0cmlrZXRocm91Z2giLCAidW5kZXJsaW5lIiwgInF1b3RlIiwgImNvbmNhdCIsICJzb3VyY2UiLCAibWF0aCIsICJoaWRkZW4iLCAiaGxpbmUiLCAib3dubGluZSIsICJyZWZlcmVuY2VzIl0KfQo=
