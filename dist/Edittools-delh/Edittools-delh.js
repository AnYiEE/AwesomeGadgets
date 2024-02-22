/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-delh.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-delh}
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

// dist/Edittools-delh/Edittools-delh.js
//! src/Edittools-delh/modules/constant.ts
var WG_PAGE_NAME = mw.config.get("wgPageName");
//! src/Edittools-delh/modules/getList.ts
var getVfdText = (code, comment) => {
  return {
    label: comment,
    action: {
      type: "encapsulate",
      options: {
        pre: "{".concat("{delh|".concat(code, "}}\n")),
        post: "\n----\n: ".concat(comment, "。--~~").concat("~~\n{", "{delf}}")
      }
    }
  };
};
var getList = (list) => {
  const object = {};
  for (var _i = 0, _Object$entries = Object.entries(list); _i < _Object$entries.length; _i++) {
    const [code, comment] = _Object$entries[_i];
    object[code] = getVfdText(code, comment);
  }
  return object;
};
//! src/Edittools-delh/modules/core.ts
var edittoolsDelh = () => {
  window.customizeToolbar(function() {
    const self = this;
    self.wikiEditor("addToToolbar", {
      sections: {
        delh: {
          type: "toolbar",
          label: window.wgULS("结束讨论", "結束討論")
        }
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      groups: {
        vfd: {}
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      group: "vfd",
      tools: {
        invalid: {
          label: window.wgULS("请求无效", "請求無效"),
          type: "select",
          list: getList({
            ir: window.wgULS("请求无效", "請求無效"),
            rep: window.wgULS("重复提出，无效", "重複提出，無效"),
            ne: window.wgULS("目标页面或文件不存在，无效", "目標頁面或檔案不存在，無效"),
            nq: window.wgULS("提删者未取得提删资格，无效", "提刪者未取得提刪資格，無效")
          })
        },
        keep: {
          label: "保留",
          type: "select",
          list: getList({
            k: "保留",
            sk: "快速保留",
            tk: window.wgULS("暂时保留", "暫時保留"),
            rr: window.wgULS("请求理由消失", "請求理由消失"),
            dan: window.wgULS("删后重建", "刪後重建")
          })
        },
        del: {
          label: window.wgULS("删除", "刪除"),
          type: "select",
          list: getList({
            d: window.wgULS("删除", "刪除"),
            ifd: window.wgULS("图像因侵权被删", "圖像因侵權被刪")
          })
        },
        speedyDel: {
          label: window.wgULS("快速删除", "快速刪除"),
          type: "select",
          list: getList({
            sd: window.wgULS("快速删除", "快速刪除"),
            lssd: window.wgULS("无来源或版权资讯，快速删除", "無來源或版權資訊，快速刪除"),
            svg: window.wgULS("已改用SVG图形，删除", "已改用SVG圖形，刪除"),
            drep: window.wgULS("多次被删除，条目锁定", "多次被刪除，條目鎖定")
          })
        },
        others: {
          label: window.wgULS("其他处理方法", "其他處理方法"),
          type: "select",
          list: getList({
            c: window.wgULS("转交侵权", "轉交侵權"),
            r: window.wgULS("重定向", "重定向"),
            cr: window.wgULS("分类重定向", "分類重定向"),
            m: window.wgULS("移动", "移動"),
            merge: window.wgULS("并入", "併入"),
            nc: window.wgULS("无共识", "無共識")
          })
        }
      }
    });
  });
};
//! src/Edittools-delh/Edittools-delh.ts
if (/^lib(?:[_ ]talk)?:存废讨论\//i.test(WG_PAGE_NAME)) {
  edittoolsDelh();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvZ2V0TGlzdC50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FfTtcbiIsICJjb25zdCBnZXRWZmRUZXh0ID0gKGNvZGU6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0bGFiZWw6IGNvbW1lbnQsXG5cdFx0YWN0aW9uOiB7XG5cdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRwcmU6IGB7JHtge2RlbGh8JHtjb2RlfX19XFxuYH1gLFxuXHRcdFx0XHRwb3N0OiBgXFxuLS0tLVxcbjogJHtjb21tZW50feOAgi0tfn5gLmNvbmNhdCgnfn5cXG57JywgJ3tkZWxmfX0nKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IGdldExpc3QgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGxpc3Q6IFQpOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJldHVyblR5cGU8dHlwZW9mIGdldFZmZFRleHQ+Pj4gPT4ge1xuXHRjb25zdCBvYmplY3Q6IFJldHVyblR5cGU8dHlwZW9mIGdldExpc3Q+ID0ge307XG5cdGZvciAoY29uc3QgW2NvZGUsIGNvbW1lbnRdIG9mIE9iamVjdC5lbnRyaWVzKGxpc3QpKSB7XG5cdFx0b2JqZWN0W2NvZGVdID0gZ2V0VmZkVGV4dChjb2RlLCBjb21tZW50KTtcblx0fVxuXG5cdHJldHVybiBvYmplY3Q7XG59O1xuXG5leHBvcnQge2dldExpc3R9O1xuIiwgImltcG9ydCB7Z2V0TGlzdH0gZnJvbSAnLi9nZXRMaXN0JztcblxuY29uc3QgZWRpdHRvb2xzRGVsaCA9ICgpOiB2b2lkID0+IHtcblx0d2luZG93LmN1c3RvbWl6ZVRvb2xiYXIoZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0ZGVsaDoge1xuXHRcdFx0XHRcdHR5cGU6ICd0b29sYmFyJyxcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnu5PmnZ/orqjorronLCAn57WQ5p2f6KiO6KuWJyksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbjogJ2RlbGgnLFxuXHRcdFx0Z3JvdXBzOiB7XG5cdFx0XHRcdHZmZDoge30sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbjogJ2RlbGgnLFxuXHRcdFx0Z3JvdXA6ICd2ZmQnLFxuXHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0aW52YWxpZDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ivt+axguaXoOaViCcsICfoq4vmsYLnhKHmlYgnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGlyOiB3aW5kb3cud2dVTFMoJ+ivt+axguaXoOaViCcsICfoq4vmsYLnhKHmlYgnKSxcblx0XHRcdFx0XHRcdHJlcDogd2luZG93LndnVUxTKCfph43lpI3mj5Dlh7rvvIzml6DmlYgnLCAn6YeN6KSH5o+Q5Ye677yM54Sh5pWIJyksXG5cdFx0XHRcdFx0XHRuZTogd2luZG93LndnVUxTKCfnm67moIfpobXpnaLmiJbmlofku7bkuI3lrZjlnKjvvIzml6DmlYgnLCAn55uu5qiZ6aCB6Z2i5oiW5qqU5qGI5LiN5a2Y5Zyo77yM54Sh5pWIJyksXG5cdFx0XHRcdFx0XHRucTogd2luZG93LndnVUxTKCfmj5DliKDogIXmnKrlj5blvpfmj5DliKDotYTmoLzvvIzml6DmlYgnLCAn5o+Q5Yiq6ICF5pyq5Y+W5b6X5o+Q5Yiq6LOH5qC877yM54Sh5pWIJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGtlZXA6IHtcblx0XHRcdFx0XHRsYWJlbDogJ+S/neeVmScsXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRrOiAn5L+d55WZJyxcblx0XHRcdFx0XHRcdHNrOiAn5b+r6YCf5L+d55WZJyxcblx0XHRcdFx0XHRcdHRrOiB3aW5kb3cud2dVTFMoJ+aaguaXtuS/neeVmScsICfmmqvmmYLkv53nlZknKSxcblx0XHRcdFx0XHRcdHJyOiB3aW5kb3cud2dVTFMoJ+ivt+axgueQhueUsea2iOWksScsICfoq4vmsYLnkIbnlLHmtojlpLEnKSxcblx0XHRcdFx0XHRcdGRhbjogd2luZG93LndnVUxTKCfliKDlkI7ph43lu7onLCAn5Yiq5b6M6YeN5bu6JyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlbDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKrpmaQnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGQ6IHdpbmRvdy53Z1VMUygn5Yig6ZmkJywgJ+WIqumZpCcpLFxuXHRcdFx0XHRcdFx0aWZkOiB3aW5kb3cud2dVTFMoJ+WbvuWDj+WboOS+teadg+iiq+WIoCcsICflnJblg4/lm6DkvrXmrIrooqvliKonKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlZWR5RGVsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5b+r6YCf5Yig6ZmkJywgJ+W/q+mAn+WIqumZpCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0c2Q6IHdpbmRvdy53Z1VMUygn5b+r6YCf5Yig6ZmkJywgJ+W/q+mAn+WIqumZpCcpLFxuXHRcdFx0XHRcdFx0bHNzZDogd2luZG93LndnVUxTKCfml6DmnaXmupDmiJbniYjmnYPotYTorq/vvIzlv6vpgJ/liKDpmaQnLCAn54Sh5L6G5rqQ5oiW54mI5qyK6LOH6KiK77yM5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRzdmc6IHdpbmRvdy53Z1VMUygn5bey5pS555SoU1ZH5Zu+5b2i77yM5Yig6ZmkJywgJ+W3suaUueeUqFNWR+WcluW9ou+8jOWIqumZpCcpLFxuXHRcdFx0XHRcdFx0ZHJlcDogd2luZG93LndnVUxTKCflpJrmrKHooqvliKDpmaTvvIzmnaHnm67plIHlrponLCAn5aSa5qyh6KKr5Yiq6Zmk77yM5qKd55uu6Y6W5a6aJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG90aGVyczoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFtuS7luWkhOeQhuaWueazlScsICflhbbku5bomZXnkIbmlrnms5UnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGM6IHdpbmRvdy53Z1VMUygn6L2s5Lqk5L615p2DJywgJ+i9ieS6pOS+teasiicpLFxuXHRcdFx0XHRcdFx0cjogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdFx0XHRcdFx0XHRjcjogd2luZG93LndnVUxTKCfliIbnsbvph43lrprlkJEnLCAn5YiG6aGe6YeN5a6a5ZCRJyksXG5cdFx0XHRcdFx0XHRtOiB3aW5kb3cud2dVTFMoJ+enu+WKqCcsICfnp7vli5UnKSxcblx0XHRcdFx0XHRcdG1lcmdlOiB3aW5kb3cud2dVTFMoJ+W5tuWFpScsICfkvbXlhaUnKSxcblx0XHRcdFx0XHRcdG5jOiB3aW5kb3cud2dVTFMoJ+aXoOWFseivhicsICfnhKHlhbHorZgnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtlZGl0dG9vbHNEZWxofTtcbiIsICJpbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7ZWRpdHRvb2xzRGVsaH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoL15saWIoPzpbXyBddGFsayk/OuWtmOW6n+iuqOiuulxcLy9pLnRlc3QoV0dfUEFHRV9OQU1FKSkge1xuXHRlZGl0dG9vbHNEZWxoKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUF1QkMsR0FBR0MsT0FBT0MsSUFBSSxZQUFZOztBQ0F2RCxJQUFNQyxhQUFhQSxDQUFDQyxNQUFjQyxZQUFvQjtBQUNyRCxTQUFPO0lBQ05DLE9BQU9EO0lBQ1BFLFFBQVE7TUFDUEMsTUFBTTtNQUNOQyxTQUFTO1FBQ1JDLEtBQUEsSUFBQUMsT0FBQSxTQUFBQSxPQUFrQlAsTUFBSSxNQUFBLENBQUE7UUFDdEJRLE1BQU0sYUFBQUQsT0FBYU4sU0FBTyxPQUFBLEVBQVFNLE9BQU8sU0FBUyxTQUFTO01BQzVEO0lBQ0Q7RUFDRDtBQUNEO0FBRUEsSUFBTUUsVUFBNkNDLFVBQW9FO0FBQ3RILFFBQU1DLFNBQXFDLENBQUM7QUFDNUMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBOEJDLE9BQU9DLFFBQVFMLElBQUksR0FBQUUsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBcEQsVUFBVyxDQUFDWixNQUFNQyxPQUFPLElBQUFZLGdCQUFBRCxFQUFBO0FBQ3hCRCxXQUFPWCxJQUFJLElBQUlELFdBQVdDLE1BQU1DLE9BQU87RUFDeEM7QUFFQSxTQUFPVTtBQUNSOztBQ2xCQSxJQUFNTSxnQkFBZ0JBLE1BQVk7QUFDakNDLFNBQU9DLGlCQUFpQixXQUE4QjtBQUNyRCxVQUFNQyxPQUFPO0FBRWJBLFNBQUtDLFdBQVcsZ0JBQWdCO01BQy9CQyxVQUFVO1FBQ1RDLE1BQU07VUFDTG5CLE1BQU07VUFDTkYsT0FBT2dCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1FBQ25DO01BQ0Q7SUFDRCxDQUFDO0FBQ0RKLFNBQUtDLFdBQVcsZ0JBQWdCO01BQy9CSSxTQUFTO01BQ1RDLFFBQVE7UUFDUEMsS0FBSyxDQUFDO01BQ1A7SUFDRCxDQUFDO0FBQ0RQLFNBQUtDLFdBQVcsZ0JBQWdCO01BQy9CSSxTQUFTO01BQ1RHLE9BQU87TUFDUEMsT0FBTztRQUNOQyxTQUFTO1VBQ1I1QixPQUFPZ0IsT0FBT00sTUFBTSxRQUFRLE1BQU07VUFDbENwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYnNCLElBQUliLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1lBQy9CUSxLQUFLZCxPQUFPTSxNQUFNLFdBQVcsU0FBUztZQUN0Q1MsSUFBSWYsT0FBT00sTUFBTSxpQkFBaUIsZUFBZTtZQUNqRFUsSUFBSWhCLE9BQU9NLE1BQU0saUJBQWlCLGVBQWU7VUFDbEQsQ0FBQztRQUNGO1FBQ0FXLE1BQU07VUFDTGpDLE9BQU87VUFDUEUsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2IyQixHQUFHO1lBQ0hDLElBQUk7WUFDSkMsSUFBSXBCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1lBQy9CZSxJQUFJckIsT0FBT00sTUFBTSxVQUFVLFFBQVE7WUFDbkNnQixLQUFLdEIsT0FBT00sTUFBTSxRQUFRLE1BQU07VUFDakMsQ0FBQztRQUNGO1FBQ0FpQixLQUFLO1VBQ0p2QyxPQUFPZ0IsT0FBT00sTUFBTSxNQUFNLElBQUk7VUFDOUJwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYmlDLEdBQUd4QixPQUFPTSxNQUFNLE1BQU0sSUFBSTtZQUMxQm1CLEtBQUt6QixPQUFPTSxNQUFNLFdBQVcsU0FBUztVQUN2QyxDQUFDO1FBQ0Y7UUFDQW9CLFdBQVc7VUFDVjFDLE9BQU9nQixPQUFPTSxNQUFNLFFBQVEsTUFBTTtVQUNsQ3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNib0MsSUFBSTNCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1lBQy9Cc0IsTUFBTTVCLE9BQU9NLE1BQU0saUJBQWlCLGVBQWU7WUFDbkR1QixLQUFLN0IsT0FBT00sTUFBTSxlQUFlLGFBQWE7WUFDOUN3QixNQUFNOUIsT0FBT00sTUFBTSxjQUFjLFlBQVk7VUFDOUMsQ0FBQztRQUNGO1FBQ0F5QixRQUFRO1VBQ1AvQyxPQUFPZ0IsT0FBT00sTUFBTSxVQUFVLFFBQVE7VUFDdENwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYnlDLEdBQUdoQyxPQUFPTSxNQUFNLFFBQVEsTUFBTTtZQUM5QjJCLEdBQUdqQyxPQUFPTSxNQUFNLE9BQU8sS0FBSztZQUM1QjRCLElBQUlsQyxPQUFPTSxNQUFNLFNBQVMsT0FBTztZQUNqQzZCLEdBQUduQyxPQUFPTSxNQUFNLE1BQU0sSUFBSTtZQUMxQjhCLE9BQU9wQyxPQUFPTSxNQUFNLE1BQU0sSUFBSTtZQUM5QitCLElBQUlyQyxPQUFPTSxNQUFNLE9BQU8sS0FBSztVQUM5QixDQUFDO1FBQ0Y7TUFDRDtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0Y7O0FDM0VBLElBQUksNEJBQTRCZ0MsS0FBSzdELFlBQVksR0FBRztBQUNuRHNCLGdCQUFjO0FBQ2Y7IiwKICAibmFtZXMiOiBbIldHX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdldFZmZFRleHQiLCAiY29kZSIsICJjb21tZW50IiwgImxhYmVsIiwgImFjdGlvbiIsICJ0eXBlIiwgIm9wdGlvbnMiLCAicHJlIiwgImNvbmNhdCIsICJwb3N0IiwgImdldExpc3QiLCAibGlzdCIsICJvYmplY3QiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJlZGl0dG9vbHNEZWxoIiwgIndpbmRvdyIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9ucyIsICJkZWxoIiwgIndnVUxTIiwgInNlY3Rpb24iLCAiZ3JvdXBzIiwgInZmZCIsICJncm91cCIsICJ0b29scyIsICJpbnZhbGlkIiwgImlyIiwgInJlcCIsICJuZSIsICJucSIsICJrZWVwIiwgImsiLCAic2siLCAidGsiLCAicnIiLCAiZGFuIiwgImRlbCIsICJkIiwgImlmZCIsICJzcGVlZHlEZWwiLCAic2QiLCAibHNzZCIsICJzdmciLCAiZHJlcCIsICJvdGhlcnMiLCAiYyIsICJyIiwgImNyIiwgIm0iLCAibWVyZ2UiLCAibmMiLCAidGVzdCJdCn0K
