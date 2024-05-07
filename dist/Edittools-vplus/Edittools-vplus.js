/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vplus.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-vplus}
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

// dist/Edittools-vplus/Edittools-vplus.js
//! src/Edittools-vplus/modules/edittoolsVplus.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
var edittoolsVplus = () => {
  (0, import_ext_gadget.customizeToolbar)(function() {
    const self = this;
    self.wikiEditor("addToToolbar", {
      sections: {
        pageedits: {
          type: "toolbar",
          // Can also be 'booklet'
          label: window.wgULS("条目编辑", "條目編輯")
        }
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "pageedits",
      groups: {
        pageedits: {}
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "pageedits",
      group: "pageedits",
      tools: {
        articleEdit: {
          label: window.wgULS("条目编辑", "條目編輯"),
          type: "select",
          list: {
            elink: {
              label: window.wgULS("外部链接章节", "外部連結章節"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "\n== 外部链接 ==\n* [",
                  periMsg: "网页地址 网页说明",
                  post: "]\n"
                }
              }
            },
            seealso: {
              label: window.wgULS("参见章节", "參見章節"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "\n== 参见 ==\n* [[",
                  periMsg: "参见地址",
                  post: "]]\n"
                }
              }
            },
            Disambig: {
              label: window.wgULS("消歧义", "消歧義"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "\n'''{{subst:".concat("PAGENAME}}'''可以指：\n"),
                  periMsg: window.wgULS("* [[歧义1]]：描述1\n* [[歧义2]]：描述2", "* [[歧義1]]：描述1\n* [[歧義2]]：描述2"),
                  post: "\n{{disambig}}"
                }
              }
            },
            otheruses: {
              label: window.wgULS("条目消歧义", "條目消歧義"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{Otheruses|",
                  periMsg: window.wgULS("条目名称|subject=本页主题描述|other=同名或类似名的其它条目描述", "條目名稱|subject=本頁主題描述|other=同名或類似名的其它條目描述"),
                  post: "}}"
                }
              }
            },
            Current: {
              label: window.wgULS("正在发生", "正在發生"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{Current|time={{subst:".concat("#time:Y年Fj日|{{#time:c}}}}")
                }
              }
            }
          }
        },
        articleMaintenance: {
          label: window.wgULS("页面维护", "頁面維護"),
          type: "select",
          list: {
            stub: {
              label: "小作品",
              action: {
                type: "encapsulate",
                options: {
                  pre: "\n{{",
                  post: "小作品}}"
                }
              }
            },
            inuse: {
              label: window.wgULS("正在编辑", "正在編輯"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{Inuse}}"
                }
              }
            },
            Substub: {
              label: window.wgULS("小小条目", "小小條目"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{subst:Substub".concat("/auto", "}}")
                }
              }
            },
            mergeto: {
              label: window.wgULS("合并本条目到", "合併本條目到"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{mergeto|",
                  periMsg: window.wgULS("合并本条目到的条目名称", "合並本條目到的條目名稱"),
                  post: "}}"
                }
              }
            },
            mergefrom: {
              label: window.wgULS("合并到本条目", "合併到本條目"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{mergefrom|",
                  periMsg: window.wgULS("需要合并到本条目的条目名称", "需要合並到本條目的條目名稱"),
                  post: "}}"
                }
              }
            },
            split: {
              label: window.wgULS("分拆条目", "分拆條目"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{Split}}"
                }
              }
            }
          }
        },
        zhhanshant: {
          label: "繁简转换",
          type: "select",
          list: {
            noconv: {
              label: window.wgULS("取消繁简转换", "取消繁簡轉換"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "-{",
                  periMsg: window.wgULS("不转换内容", "不轉換內容"),
                  post: "}-"
                }
              }
            },
            title: {
              label: window.wgULS("标题错误", "標題錯誤"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "-{T|",
                  periMsg: window.wgULS("正确标题名称", "正確標題名稱"),
                  post: "}-"
                }
              }
            },
            noteTA: {
              label: window.wgULS("标题全文转换", "標題全文轉換"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{noteTA\n",
                  periMsg: "|G1=".concat(window.wgULS("公共组名", "公共組名"), "\n|1=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n|2=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n"),
                  post: "}}"
                }
              }
            },
            image: {
              label: window.wgULS("地区语言图像", "地區語言圖像"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{Image\n",
                  periMsg: "	|zh=".concat(window.wgULS("无转换图像名", "無轉換圖像名"), "\n	|zh-hans=简体图像名\n	|zh-hant= 繁体圖像名\n	|zh-cn=大陆图像名\n	|zh-tw=臺灣圖像名\n	|zh-hk=香港圖像名\n	|zh=马新图像名\n	|").concat(window.wgULS("图像属性", "圖像屬性"), "\n"),
                  post: "}}"
                }
              }
            }
          }
        },
        langTags: {
          label: window.wgULS("非中文标明", "非中文標明"),
          type: "select",
          list: {
            en: {
              label: window.wgULS("英语", "英語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|en|",
                  periMsg: window.wgULS("英语", "英語"),
                  post: "}}"
                }
              }
            },
            de: {
              label: window.wgULS("德语", "德語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|de|",
                  periMsg: window.wgULS("德语", "德語"),
                  post: "}}"
                }
              }
            },
            fr: {
              label: window.wgULS("法语", "法語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|fr|",
                  periMsg: window.wgULS("法语", "法語"),
                  post: "}}"
                }
              }
            },
            ja: {
              label: window.wgULS("日语", "日語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|ja|",
                  periMsg: window.wgULS("日语", "日語"),
                  post: "}}"
                }
              }
            },
            es: {
              label: window.wgULS("西班牙语", "西班牙語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|es|",
                  periMsg: window.wgULS("西班牙语", "西班牙語"),
                  post: "}}"
                }
              }
            },
            ar: {
              label: window.wgULS("阿拉伯语", "阿拉伯語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|ar|",
                  periMsg: window.wgULS("阿拉伯语", "阿拉伯語"),
                  post: "}}"
                }
              }
            },
            ru: {
              label: window.wgULS("俄语", "俄語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|ru|",
                  periMsg: window.wgULS("俄语", "俄語"),
                  post: "}}"
                }
              }
            },
            he: {
              label: window.wgULS("希伯来语", "希伯來語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|he|",
                  periMsg: window.wgULS("希伯来语", "希伯來語"),
                  post: "}}"
                }
              }
            },
            el: {
              label: window.wgULS("希腊语", "希臘語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|el|",
                  periMsg: window.wgULS("希腊语", "希臘語"),
                  post: "}}"
                }
              }
            },
            pt: {
              label: window.wgULS("葡萄牙语", "葡萄牙語"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|pt|",
                  periMsg: window.wgULS("葡萄牙语", "葡萄牙語"),
                  post: "}}"
                }
              }
            },
            la: {
              label: "拉丁语",
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|la|",
                  periMsg: "拉丁语",
                  post: "}}"
                }
              }
            },
            langcode: {
              label: window.wgULS("其他语言", "其他語言"),
              action: {
                type: "encapsulate",
                options: {
                  pre: "{{lang|".concat(window.wgULS("在此填上语言代码|", "在此填上語言代碼|")),
                  periMsg: window.wgULS("其他语言", "其他語言"),
                  post: "}}"
                }
              }
            }
          }
        }
      }
    });
  });
};
//! src/Edittools-vplus/Edittools-vplus.ts
var {
  wgNamespaceNumber
} = mw.config.get();
if (![8, 828].includes(wgNamespaceNumber)) {
  edittoolsVplus();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12cGx1cy9tb2R1bGVzL2VkaXR0b29sc1ZwbHVzLnRzIiwgInNyYy9FZGl0dG9vbHMtdnBsdXMvRWRpdHRvb2xzLXZwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2N1c3RvbWl6ZVRvb2xiYXJ9IGZyb20gJ2V4dC5nYWRnZXQuRWRpdHRvb2xzLWN1c3RvbWl6ZVRvb2xiYXInO1xuXG5jb25zdCBlZGl0dG9vbHNWcGx1cyA9ICgpOiB2b2lkID0+IHtcblx0Y3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgYXMgSlF1ZXJ5ICYge3dpa2lFZGl0b3I6IChtZXRob2Q6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWR9O1xuXG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uczoge1xuXHRcdFx0XHRwYWdlZWRpdHM6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0Ly8gQ2FuIGFsc28gYmUgJ2Jvb2tsZXQnXG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5p2h55uu57yW6L6RJywgJ+aineebrue3qOi8rycpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRcdHNlY3Rpb246ICdwYWdlZWRpdHMnLFxuXHRcdFx0Z3JvdXBzOiB7XG5cdFx0XHRcdHBhZ2VlZGl0czoge30sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbjogJ3BhZ2VlZGl0cycsXG5cdFx0XHRncm91cDogJ3BhZ2VlZGl0cycsXG5cdFx0XHR0b29sczoge1xuXHRcdFx0XHRhcnRpY2xlRWRpdDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+adoeebrue8lui+kScsICfmop3nm67nt6jovK8nKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiB7XG5cdFx0XHRcdFx0XHRlbGluazoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflpJbpg6jpk77mjqXnq6DoioInLCAn5aSW6YOo6YCj57WQ56ug56+AJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAnXFxuPT0g5aSW6YOo6ZO+5o6lID09XFxuKiBbJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6ICfnvZHpobXlnLDlnYAg572R6aG16K+05piOJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICddXFxuJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHNlZWFsc286IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5Y+C6KeB56ug6IqCJywgJ+WPg+imi+eroOevgCcpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ1xcbj09IOWPguingSA9PVxcbiogW1snLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogJ+WPguingeWcsOWdgCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnXV1cXG4nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0RGlzYW1iaWc6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogXCJcXG4nJyd7e3N1YnN0OlwiLmNvbmNhdChcIlBBR0VOQU1FfX0nJyflj6/ku6XmjIfvvJpcXG5cIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCcqIFtb5q2n5LmJMV1d77ya5o+P6L+wMVxcbiogW1vmrafkuYkyXV3vvJrmj4/ov7AyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JyogW1vmrafnvqkxXV3vvJrmj4/ov7AxXFxuKiBbW+atp+e+qTJdXe+8muaPj+i/sDInXG5cdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ1xcbnt7ZGlzYW1iaWd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvdGhlcnVzZXM6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5p2h55uu5raI5q2n5LmJJywgJ+aineebrua2iOatp+e+qScpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7T3RoZXJ1c2VzfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCfmnaHnm67lkI3np7B8c3ViamVjdD3mnKzpobXkuLvpopjmj4/ov7B8b3RoZXI95ZCM5ZCN5oiW57G75Ly85ZCN55qE5YW25a6D5p2h55uu5o+P6L+wJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J+aineebruWQjeeosXxzdWJqZWN0PeacrOmggeS4u+mhjOaPj+i/sHxvdGhlcj3lkIzlkI3miJbpoZ7kvLzlkI3nmoTlhbblroPmop3nm67mj4/ov7AnXG5cdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdEN1cnJlbnQ6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5q2j5Zyo5Y+R55SfJywgJ+ato+WcqOeZvOeUnycpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7Q3VycmVudHx0aW1lPXt7c3Vic3Q6Jy5jb25jYXQoJyN0aW1lOlnlubRGauaXpXx7eyN0aW1lOmN9fX19JyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXJ0aWNsZU1haW50ZW5hbmNlOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6aG16Z2i57u05oqkJywgJ+mggemdoue2reittycpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IHtcblx0XHRcdFx0XHRcdHN0dWI6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICflsI/kvZzlk4EnLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ1xcbnt7Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICflsI/kvZzlk4F9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbnVzZToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmraPlnKjnvJbovpEnLCAn5q2j5Zyo57eo6LyvJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tJbnVzZX19Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFN1YnN0dWI6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5bCP5bCP5p2h55uuJywgJ+Wwj+Wwj+aineebricpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7c3Vic3Q6U3Vic3R1YicuY29uY2F0KCcvYXV0bycsICd9fScpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bWVyZ2V0bzoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflkIjlubbmnKzmnaHnm67liLAnLCAn5ZCI5L215pys5qKd55uu5YiwJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3ttZXJnZXRvfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+WQiOW5tuacrOadoeebruWIsOeahOadoeebruWQjeensCcsICflkIjkuKbmnKzmop3nm67liLDnmoTmop3nm67lkI3nqLEnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtZXJnZWZyb206IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5ZCI5bm25Yiw5pys5p2h55uuJywgJ+WQiOS9teWIsOacrOaineebricpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7bWVyZ2Vmcm9tfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+mcgOimgeWQiOW5tuWIsOacrOadoeebrueahOadoeebruWQjeensCcsICfpnIDopoHlkIjkuKbliLDmnKzmop3nm67nmoTmop3nm67lkI3nqLEnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzcGxpdDoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfliIbmi4bmnaHnm64nLCAn5YiG5ouG5qKd55uuJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tTcGxpdH19Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR6aGhhbnNoYW50OiB7XG5cdFx0XHRcdFx0bGFiZWw6ICfnuYHnroDovazmjaInLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IHtcblx0XHRcdFx0XHRcdG5vY29udjoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflj5bmtojnuYHnroDovazmjaInLCAn5Y+W5raI57mB57Ch6L2J5o+bJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAnLXsnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKCfkuI3ovazmjaLlhoXlrrknLCAn5LiN6L2J5o+b5YWn5a65JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfS0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5qCH6aKY6ZSZ6K+vJywgJ+aomemhjOmMr+iqpCcpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJy17VHwnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKCfmraPnoa7moIfpopjlkI3np7AnLCAn5q2j56K65qiZ6aGM5ZCN56ixJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfS0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bm90ZVRBOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+agh+mimOWFqOaWh+i9rOaNoicsICfmqJnpoYzlhajmlofovYnmj5snKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e25vdGVUQVxcbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiBgfEcxPSR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQn5YWs5YWx57uE5ZCNJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J+WFrOWFsee1hOWQjSdcblx0XHRcdFx0XHRcdFx0XHRcdCl9XFxufDE9emgtY2465aSn6ZmGO3poLXR3OuWPsOeBozt6aC1oazrpppnmuK87emgtc2c65paw6amsO1xcbnwyPXpoLWNuOuWkp+mZhjt6aC10dzrlj7DngaM7emgtaGs66aaZ5rivO3poLXNnOuaWsOmprDtcXG5gLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WcsOWMuuivreiogOWbvuWDjycsICflnLDljYDoqp7oqIDlnJblg48nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e0ltYWdlXFxuJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IGBcXHR8emg9JHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCfml6DovazmjaLlm77lg4/lkI0nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQn54Sh6L2J5o+b5ZyW5YOP5ZCNJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cXG5cXHR8emgtaGFucz3nroDkvZPlm77lg4/lkI1cXG5cXHR8emgtaGFudD0g57mB5L2T5ZyW5YOP5ZCNXFxuXFx0fHpoLWNuPeWkp+mZhuWbvuWDj+WQjVxcblxcdHx6aC10dz3oh7rngaPlnJblg4/lkI1cXG5cXHR8emgtaGs96aaZ5riv5ZyW5YOP5ZCNXFxuXFx0fHpoPemprOaWsOWbvuWDj+WQjVxcblxcdHwke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J+WbvuWDj+WxnuaApycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCflnJblg4/lsazmgKcnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxcbmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhbmdUYWdzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6Z2e5Lit5paH5qCH5piOJywgJ+mdnuS4reaWh+aomeaYjicpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IHtcblx0XHRcdFx0XHRcdGVuOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+iLseivrScsICfoi7Hoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8ZW58Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn6Iux6K+tJywgJ+iLseiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRlOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+W+t+ivrScsICflvrfoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8ZGV8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5b636K+tJywgJ+W+t+iqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZyOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+azleivrScsICfms5Xoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8ZnJ8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5rOV6K+tJywgJ+azleiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGphOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aXpeivrScsICfml6Xoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8amF8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5pel6K+tJywgJ+aXpeiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGVzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ilv+ePreeJmeivrScsICfopb/nj63niZnoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8ZXN8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn6KW/54+t54mZ6K+tJywgJ+ilv+ePreeJmeiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGFyOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mYv+aLieS8r+ivrScsICfpmL/mi4nkvK/oqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8YXJ8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn6Zi/5ouJ5Lyv6K+tJywgJ+mYv+aLieS8r+iqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJ1OiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S/hOivrScsICfkv4Toqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8cnV8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5L+E6K+tJywgJ+S/hOiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGhlOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+W4jOS8r+adpeivrScsICfluIzkvK/kvoboqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8aGV8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5biM5Lyv5p2l6K+tJywgJ+W4jOS8r+S+huiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGVsOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+W4jOiFiuivrScsICfluIzoh5joqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8ZWx8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5biM6IWK6K+tJywgJ+W4jOiHmOiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHB0OiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+iRoeiQhOeJmeivrScsICfokaHokITniZnoqp4nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8cHR8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn6JGh6JCE54mZ6K+tJywgJ+iRoeiQhOeJmeiqnicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGxhOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5ouJ5LiB6K+tJyxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e2xhbmd8bGF8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6ICfmi4nkuIHor60nLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGxhbmdjb2RlOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFtuS7luivreiogCcsICflhbbku5boqp7oqIAnKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6IGB7e2xhbmd8JHt3aW5kb3cud2dVTFMoJ+WcqOatpOWhq+S4iuivreiogOS7o+eggXwnLCAn5Zyo5q2k5aGr5LiK6Kqe6KiA5Luj56K8fCcpfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+WFtuS7luivreiogCcsICflhbbku5boqp7oqIAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtlZGl0dG9vbHNWcGx1c307XG4iLCAiaW1wb3J0IHtlZGl0dG9vbHNWcGx1c30gZnJvbSAnLi9tb2R1bGVzL2VkaXR0b29sc1ZwbHVzJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKCFbOCwgODI4XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0ZWRpdHRvb2xzVnBsdXMoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUErQkMsUUFBQSx1Q0FBQTtB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Q0Q7WUFDQThCLFVBQVU7Y0FDVDVDLE9BQU9DLE9BQU9DLE1BQU0sUUFBUSxNQUFNO2NBQ2xDUSxRQUFRO2dCQUNQWCxNQUFNO2dCQUNOWSxTQUFTO2tCQUNSQyxLQUFBLFVBQUFLLE9BQWVoQixPQUFPQyxNQUFNLGFBQWEsV0FBVyxDQUFDO2tCQUNyRFcsU0FBU1osT0FBT0MsTUFBTSxRQUFRLE1BQU07a0JBQ3BDWSxNQUFNO2dCQUNQO2NBQ0Q7WUFDRDtVQUNEO1FBQ0Q7TUFDRDtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0Y7O0FDaldBLElBQU07RUFBQytCO0FBQWlCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUVDLFNBQVNKLGlCQUFpQixHQUFHO0FBQzFDcEQsaUJBQWU7QUFDaEI7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZWRpdHRvb2xzVnBsdXMiLCAiY3VzdG9taXplVG9vbGJhciIsICJzZWxmIiwgIndpa2lFZGl0b3IiLCAic2VjdGlvbnMiLCAicGFnZWVkaXRzIiwgInR5cGUiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgInNlY3Rpb24iLCAiZ3JvdXBzIiwgImdyb3VwIiwgInRvb2xzIiwgImFydGljbGVFZGl0IiwgImxpc3QiLCAiZWxpbmsiLCAiYWN0aW9uIiwgIm9wdGlvbnMiLCAicHJlIiwgInBlcmlNc2ciLCAicG9zdCIsICJzZWVhbHNvIiwgIkRpc2FtYmlnIiwgImNvbmNhdCIsICJvdGhlcnVzZXMiLCAiQ3VycmVudCIsICJhcnRpY2xlTWFpbnRlbmFuY2UiLCAic3R1YiIsICJpbnVzZSIsICJTdWJzdHViIiwgIm1lcmdldG8iLCAibWVyZ2Vmcm9tIiwgInNwbGl0IiwgInpoaGFuc2hhbnQiLCAibm9jb252IiwgInRpdGxlIiwgIm5vdGVUQSIsICJpbWFnZSIsICJsYW5nVGFncyIsICJlbiIsICJkZSIsICJmciIsICJqYSIsICJlcyIsICJhciIsICJydSIsICJoZSIsICJlbCIsICJwdCIsICJsYSIsICJsYW5nY29kZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIl0KfQo=
