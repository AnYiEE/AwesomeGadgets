/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vplus.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-vplus}
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

// dist/Edittools-vplus/Edittools-vplus.js
//! src/Edittools-vplus/modules/constant.ts
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
//! src/Edittools-vplus/modules/edittoolsVplus.ts
var edittoolsVplus = () => {
  window.customizeToolbar(function() {
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
if (![8, 828].includes(WG_NAMESPACE_NUMBER)) {
  edittoolsVplus();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12cGx1cy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0dG9vbHMtdnBsdXMvbW9kdWxlcy9lZGl0dG9vbHNWcGx1cy50cyIsICJzcmMvRWRpdHRvb2xzLXZwbHVzL0VkaXR0b29scy12cGx1cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfTtcbiIsICJjb25zdCBlZGl0dG9vbHNWcGx1cyA9ICgpOiB2b2lkID0+IHtcblx0d2luZG93LmN1c3RvbWl6ZVRvb2xiYXIoZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0cGFnZWVkaXRzOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3Rvb2xiYXInLFxuXHRcdFx0XHRcdC8vIENhbiBhbHNvIGJlICdib29rbGV0J1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+adoeebrue8lui+kScsICfmop3nm67nt6jovK8nKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAncGFnZWVkaXRzJyxcblx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHRwYWdlZWRpdHM6IHt9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRcdHNlY3Rpb246ICdwYWdlZWRpdHMnLFxuXHRcdFx0Z3JvdXA6ICdwYWdlZWRpdHMnLFxuXHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0YXJ0aWNsZUVkaXQ6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmnaHnm67nvJbovpEnLCAn5qKd55uu57eo6LyvJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDoge1xuXHRcdFx0XHRcdFx0ZWxpbms6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5aSW6YOo6ZO+5o6l56ug6IqCJywgJ+WklumDqOmAo+e1kOeroOevgCcpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ1xcbj09IOWklumDqOmTvuaOpSA9PVxcbiogWycsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiAn572R6aG15Zyw5Z2AIOe9kemhteivtOaYjicsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnXVxcbicsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzZWVhbHNvOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WPguingeeroOiKgicsICflj4Popovnq6Dnr4AnKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICdcXG49PSDlj4Lop4EgPT1cXG4qIFtbJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6ICflj4Lop4HlnLDlnYAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ11dXFxuJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdERpc2FtYmlnOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+a2iOatp+S5iScsICfmtojmrafnvqknKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6IFwiXFxuJycne3tzdWJzdDpcIi5jb25jYXQoXCJQQUdFTkFNRX19Jycn5Y+v5Lul5oyH77yaXFxuXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnKiBbW+atp+S5iTFdXe+8muaPj+i/sDFcXG4qIFtb5q2n5LmJMl1d77ya5o+P6L+wMicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCcqIFtb5q2n576pMV1d77ya5o+P6L+wMVxcbiogW1vmrafnvqkyXV3vvJrmj4/ov7AyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICdcXG57e2Rpc2FtYmlnfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b3RoZXJ1c2VzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+adoeebrua2iOatp+S5iScsICfmop3nm67mtojmrafnvqknKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e090aGVydXNlc3wnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQn5p2h55uu5ZCN56ewfHN1YmplY3Q95pys6aG15Li76aKY5o+P6L+wfG90aGVyPeWQjOWQjeaIluexu+S8vOWQjeeahOWFtuWug+adoeebruaPj+i/sCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCfmop3nm67lkI3nqLF8c3ViamVjdD3mnKzpoIHkuLvpoYzmj4/ov7B8b3RoZXI95ZCM5ZCN5oiW6aGe5Ly85ZCN55qE5YW25a6D5qKd55uu5o+P6L+wJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRDdXJyZW50OiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ato+WcqOWPkeeUnycsICfmraPlnKjnmbznlJ8nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e0N1cnJlbnR8dGltZT17e3N1YnN0OicuY29uY2F0KCcjdGltZTpZ5bm0Rmrml6V8e3sjdGltZTpjfX19fScpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFydGljbGVNYWludGVuYW5jZToge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mhtemdoue7tOaKpCcsICfpoIHpnaLntq3orbcnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiB7XG5cdFx0XHRcdFx0XHRzdHViOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5bCP5L2c5ZOBJyxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICdcXG57eycsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAn5bCP5L2c5ZOBfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aW51c2U6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5q2j5Zyo57yW6L6RJywgJ+ato+WcqOe3qOi8rycpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7SW51c2V9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRTdWJzdHViOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+Wwj+Wwj+adoeebricsICflsI/lsI/mop3nm64nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e3N1YnN0OlN1YnN0dWInLmNvbmNhdCgnL2F1dG8nLCAnfX0nKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG1lcmdldG86IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5ZCI5bm25pys5p2h55uu5YiwJywgJ+WQiOS9teacrOaineebruWIsCcpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7bWVyZ2V0b3wnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKCflkIjlubbmnKzmnaHnm67liLDnmoTmnaHnm67lkI3np7AnLCAn5ZCI5Lim5pys5qKd55uu5Yiw55qE5qKd55uu5ZCN56ixJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bWVyZ2Vmcm9tOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WQiOW5tuWIsOacrOadoeebricsICflkIjkvbXliLDmnKzmop3nm64nKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICd7e21lcmdlZnJvbXwnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKCfpnIDopoHlkIjlubbliLDmnKzmnaHnm67nmoTmnaHnm67lkI3np7AnLCAn6ZyA6KaB5ZCI5Lim5Yiw5pys5qKd55uu55qE5qKd55uu5ZCN56ixJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c3BsaXQ6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YiG5ouG5p2h55uuJywgJ+WIhuaLhuaineebricpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJ3t7U3BsaXR9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0emhoYW5zaGFudDoge1xuXHRcdFx0XHRcdGxhYmVsOiAn57mB566A6L2s5o2iJyxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiB7XG5cdFx0XHRcdFx0XHRub2NvbnY6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5Y+W5raI57mB566A6L2s5o2iJywgJ+WPlua2iOe5geewoei9ieaPmycpLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogJy17Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2i5YaF5a65JywgJ+S4jei9ieaPm+WFp+WuuScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ30tJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+agh+mimOmUmeivrycsICfmqJnpoYzpjK/oqqQnKSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmU6ICcte1R8Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBlcmlNc2c6IHdpbmRvdy53Z1VMUygn5q2j56Gu5qCH6aKY5ZCN56ewJywgJ+ato+eiuuaomemhjOWQjeeosScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ30tJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG5vdGVUQToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmoIfpopjlhajmlofovazmjaInLCAn5qiZ6aGM5YWo5paH6L2J5o+bJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tub3RlVEFcXG4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogYHxHMT0ke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J+WFrOWFsee7hOWQjScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCflhazlhbHntYTlkI0nXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxcbnwxPXpoLWNuOuWkp+mZhjt6aC10dzrlj7DngaM7emgtaGs66aaZ5rivO3poLXNnOuaWsOmprDtcXG58Mj16aC1jbjrlpKfpmYY7emgtdHc65Y+w54GjO3poLWhrOummmea4rzt6aC1zZzrmlrDpqaw7XFxuYCxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflnLDljLror63oqIDlm77lg48nLCAn5Zyw5Y2A6Kqe6KiA5ZyW5YOPJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tJbWFnZVxcbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiBgXFx0fHpoPSR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQn5peg6L2s5o2i5Zu+5YOP5ZCNJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J+eEoei9ieaPm+WcluWDj+WQjSdcblx0XHRcdFx0XHRcdFx0XHRcdCl9XFxuXFx0fHpoLWhhbnM9566A5L2T5Zu+5YOP5ZCNXFxuXFx0fHpoLWhhbnQ9IOe5geS9k+WcluWDj+WQjVxcblxcdHx6aC1jbj3lpKfpmYblm77lg4/lkI1cXG5cXHR8emgtdHc96Ie654Gj5ZyW5YOP5ZCNXFxuXFx0fHpoLWhrPemmmea4r+WcluWDj+WQjVxcblxcdHx6aD3pqazmlrDlm77lg4/lkI1cXG5cXHR8JHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCflm77lg4/lsZ7mgKcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQn5ZyW5YOP5bGs5oCnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cXG5gLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogJ319Jyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYW5nVGFnczoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mdnuS4reaWh+agh+aYjicsICfpnZ7kuK3mlofmqJnmmI4nKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiB7XG5cdFx0XHRcdFx0XHRlbjoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfoi7Hor60nLCAn6Iux6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGVufCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+iLseivrScsICfoi7Hoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkZToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflvrfor60nLCAn5b636KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGRlfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+W+t+ivrScsICflvrfoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmcjoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfms5Xor60nLCAn5rOV6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGZyfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+azleivrScsICfms5Xoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRqYToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfml6Xor60nLCAn5pel6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGphfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+aXpeivrScsICfml6Xoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlczoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfopb/nj63niZnor60nLCAn6KW/54+t54mZ6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGVzfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+ilv+ePreeJmeivrScsICfopb/nj63niZnoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRhcjoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpmL/mi4nkvK/or60nLCAn6Zi/5ouJ5Lyv6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGFyfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+mYv+aLieS8r+ivrScsICfpmL/mi4nkvK/oqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRydToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkv4Tor60nLCAn5L+E6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfHJ1fCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+S/hOivrScsICfkv4Toqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRoZToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfluIzkvK/mnaXor60nLCAn5biM5Lyv5L6G6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGhlfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+W4jOS8r+adpeivrScsICfluIzkvK/kvoboqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlbDoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfluIzohYror60nLCAn5biM6IeY6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGVsfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+W4jOiFiuivrScsICfluIzoh5joqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRwdDoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfokaHokITniZnor60nLCAn6JGh6JCE54mZ6KqeJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfHB0fCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiB3aW5kb3cud2dVTFMoJ+iRoeiQhOeJmeivrScsICfokaHokITniZnoqp4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRsYToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+aLieS4geivrScsXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiAne3tsYW5nfGxhfCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwZXJpTXNnOiAn5ouJ5LiB6K+tJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6ICd9fScsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRsYW5nY29kZToge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflhbbku5bor63oqIAnLCAn5YW25LuW6Kqe6KiAJyksXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJlOiBge3tsYW5nfCR7d2luZG93LndnVUxTKCflnKjmraTloavkuIror63oqIDku6PnoIF8JywgJ+WcqOatpOWhq+S4iuiqnuiogOS7o+eivHwnKX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyaU1zZzogd2luZG93LndnVUxTKCflhbbku5bor63oqIAnLCAn5YW25LuW6Kqe6KiAJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiAnfX0nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZWRpdHRvb2xzVnBsdXN9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7ZWRpdHRvb2xzVnBsdXN9IGZyb20gJy4vbW9kdWxlcy9lZGl0dG9vbHNWcGx1cyc7XG5cbmlmICghWzgsIDgyOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0ZWRpdHRv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O1lBQ0Q7WUFDQTZCLElBQUk7Y0FDSDFDLE9BQU87Y0FDUFMsUUFBUTtnQkFDUFYsTUFBTTtnQkFDTlcsU0FBUztrQkFDUkMsS0FBSztrQkFDTEMsU0FBUztrQkFDVEMsTUFBTTtnQkFDUDtjQUNEO1lBQ0Q7WUFDQThCLFVBQVU7Y0FDVDNDLE9BQU9QLE9BQU9RLE1BQU0sUUFBUSxNQUFNO2NBQ2xDUSxRQUFRO2dCQUNQVixNQUFNO2dCQUNOVyxTQUFTO2tCQUNSQyxLQUFBLFVBQUFLLE9BQWV2QixPQUFPUSxNQUFNLGFBQWEsV0FBVyxDQUFDO2tCQUNyRFcsU0FBU25CLE9BQU9RLE1BQU0sUUFBUSxNQUFNO2tCQUNwQ1ksTUFBTTtnQkFDUDtjQUNEO1lBQ0Q7VUFDRDtRQUNEO01BQ0Q7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGOztBQzlWQSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRStCLFNBQVN4RCxtQkFBbUIsR0FBRztBQUM1Q0ksaUJBQWU7QUFDaEI7IiwKICAibmFtZXMiOiBbIldHX05BTUVTUEFDRV9OVU1CRVIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJlZGl0dG9vbHNWcGx1cyIsICJ3aW5kb3ciLCAiY3VzdG9taXplVG9vbGJhciIsICJzZWxmIiwgIndpa2lFZGl0b3IiLCAic2VjdGlvbnMiLCAicGFnZWVkaXRzIiwgInR5cGUiLCAibGFiZWwiLCAid2dVTFMiLCAic2VjdGlvbiIsICJncm91cHMiLCAiZ3JvdXAiLCAidG9vbHMiLCAiYXJ0aWNsZUVkaXQiLCAibGlzdCIsICJlbGluayIsICJhY3Rpb24iLCAib3B0aW9ucyIsICJwcmUiLCAicGVyaU1zZyIsICJwb3N0IiwgInNlZWFsc28iLCAiRGlzYW1iaWciLCAiY29uY2F0IiwgIm90aGVydXNlcyIsICJDdXJyZW50IiwgImFydGljbGVNYWludGVuYW5jZSIsICJzdHViIiwgImludXNlIiwgIlN1YnN0dWIiLCAibWVyZ2V0byIsICJtZXJnZWZyb20iLCAic3BsaXQiLCAiemhoYW5zaGFudCIsICJub2NvbnYiLCAidGl0bGUiLCAibm90ZVRBIiwgImltYWdlIiwgImxhbmdUYWdzIiwgImVuIiwgImRlIiwgImZyIiwgImphIiwgImVzIiwgImFyIiwgInJ1IiwgImhlIiwgImVsIiwgInB0IiwgImxhIiwgImxhbmdjb2RlIiwgImluY2x1ZGVzIl0KfQo=
