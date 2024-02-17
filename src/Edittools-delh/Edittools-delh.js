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
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-delh.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Edittools-delh>
 * @dependency ext.gadget.Edittools-vector, ext.gadget.i18n
 */
$(function editToolsDelh() {
  var _i18n = i18n,
    localize = _i18n.localize;
  if (/^lib:存废讨论\//i.test(mw.config.get('wgPageName'))) {
    var getVfdText = function getVfdText(code, comment) {
      return {
        label: comment,
        action: {
          type: 'encapsulate',
          options: {
            pre: "{".concat("{delh|".concat(code, "}}\n")),
            post: "\n----\n: ".concat(comment, "\u3002--~~").concat('~~\n{', '{delf}}')
          }
        }
      };
    };
    var getList = function getList(list) {
      var obj = {};
      for (var item in list) {
        obj[item] = getVfdText(item, list[item]);
      }
      return obj;
    };
    window.customizeToolbar(function () {
      this.wikiEditor('addToToolbar', {
        sections: {
          delh: {
            type: 'toolbar',
            label: localize({
              'zh-hans': '结束讨论',
              'zh-hant': '結束討論'
            })
          }
        }
      });
      this.wikiEditor('addToToolbar', {
        section: 'delh',
        groups: {
          vfd: {}
        }
      });
      this.wikiEditor('addToToolbar', {
        section: 'delh',
        group: 'vfd',
        tools: {
          invalid: {
            label: localize({
              'zh-hans': '请求无效',
              'zh-hant': '請求無效'
            }),
            type: 'select',
            list: getList({
              ir: localize({
                'zh-hans': '请求无效',
                'zh-hant': '請求無效'
              }),
              rep: localize({
                'zh-hans': '重复提出，无效',
                'zh-hant': '重複提出，無效'
              }),
              commons: localize({
                'zh-hans': '应在维基共享资源提请',
                'zh-hant': '應在維基共享資源提請'
              }),
              ne: localize({
                'zh-hans': '目标页面或文件不存在，无效',
                'zh-hant': '目標頁面或檔案不存在，無效'
              }),
              nq: localize({
                'zh-hans': '提删者未取得提删资格，无效',
                'zh-hant': '提刪者未取得提刪資格，無效'
              })
            })
          },
          keep: {
            label: '保留',
            type: 'select',
            list: getList({
              k: '保留',
              sk: '快速保留',
              tk: localize({
                'zh-hans': '暂时保留',
                'zh-hant': '暫時保留'
              }),
              rr: localize({
                'zh-hans': '请求理由消失',
                'zh-hant': '請求理由消失'
              }),
              dan: localize({
                'zh-hans': '删后重建',
                'zh-hant': '刪後重建'
              })
            })
          },
          del: {
            label: localize({
              'zh-hans': '删除',
              'zh-hant': '刪除'
            }),
            type: 'select',
            list: getList({
              d: localize({
                'zh-hans': '删除',
                'zh-hant': '刪除'
              }),
              ifd: localize({
                'zh-hans': '图像因侵权被删',
                'zh-hant': '圖像因侵權被刪'
              })
            })
          },
          speedyDel: {
            label: localize({
              'zh-hans': '快速删除',
              'zh-hant': '快速刪除'
            }),
            type: 'select',
            list: getList({
              sd: localize({
                'zh-hans': '快速删除',
                'zh-hant': '快速刪除'
              }),
              lssd: localize({
                'zh-hans': '无来源或版权资讯，快速删除',
                'zh-hant': '無來源或版權資訊，快速刪除'
              }),
              svg: localize({
                'zh-hans': '已改用SVG图形，删除',
                'zh-hant': '已改用SVG圖形，刪除'
              }),
              drep: localize({
                'zh-hans': '多次被删除，条目锁定',
                'zh-hant': '多次被刪除，條目鎖定'
              })
            })
          },
          others: {
            label: localize({
              'zh-hans': '其他处理方法',
              'zh-hant': '其他處理方法'
            }),
            type: 'select',
            list: getList({
              c: localize({
                'zh-hans': '转交侵权',
                'zh-hant': '轉交侵權'
              }),
              r: localize({
                'zh-hans': '重定向',
                'zh-hant': '重定向'
              }),
              cr: localize({
                'zh-hans': '分类重定向',
                'zh-hant': '分類重定向'
              }),
              m: localize({
                'zh-hans': '移动',
                'zh-hant': '移動'
              }),
              merge: localize({
                'zh-hans': '并入',
                'zh-hant': '併入'
              }),
              nc: localize({
                'zh-hans': '无共识',
                'zh-hant': '無共識'
              })
            })
          }
        }
      });
    });
  }
});
/* </nowiki> */
