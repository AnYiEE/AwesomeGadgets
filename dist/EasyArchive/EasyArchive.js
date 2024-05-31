/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-easy-archive.js}
 * @base {@link https://meta.wikimedia.org/w/index.php?oldid=18915644}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EasyArchive}
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

// dist/EasyArchive/EasyArchive.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var easy_archive_lang = () => {
  window.easy_archive.lang = {
    delete: (0, import_ext_gadget.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    })
  };
};
//! src/EasyArchive/EasyArchive.js
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.Toastify");
(function easyArchive(_window, _window$easy_archive, _window$easy_archive2, _window$easy_archive3, _window$easy_archive$, _window$easy_archive$2) {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === "有兽档案馆:首页") {
    return;
  }
  (_window$easy_archive = (_window = window).easy_archive) !== null && _window$easy_archive !== void 0 ? _window$easy_archive : _window.easy_archive = {};
  class Pare_str {
    constructor(pare_string, config) {
      this.str = pare_string;
      this.left = "(";
      this.delim = ":";
      this.right = ")";
      if (typeof config !== "string") {
        config = String(config);
      }
      if (pare_string.length > 6 && /[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) && !config.includes("ignore-set")) {
        [, , , , this.left, this.delim, this.right] = pare_string;
        if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
          throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
        }
      }
    }
    find(lookup_key) {
      lookup_key = this.left + lookup_key + this.delim;
      if (!this.str.includes(lookup_key)) {
        return null;
      }
      return this.str.split(lookup_key)[1].split(this.right)[0];
    }
  }
  const expose = /* @__PURE__ */ (() => {
    const asyncPost = (param, callback) => {
      const api = (0, import_ext_gadget2.initMwApi)("EasyAchive/3.0");
      api.postWithToken("csrf", param).then(callback);
    };
    const getPage = (title, callback) => {
      const param = {
        action: "query",
        prop: ["revisions"],
        rvprop: "ids|flags|timestamp|user|userid|size|comment|tags|content",
        format: "json",
        formatversion: "2",
        titles: title
      };
      asyncPost(param, callback);
    };
    const getPageSection = (title, section, callback) => {
      const param = {
        action: "query",
        prop: ["revisions"],
        rvprop: "content",
        format: "json",
        formatversion: "2",
        titles: title,
        rvsection: section
      };
      asyncPost(param, callback);
    };
    const pickPageContent = (data) => {
      if (data.query && data.query.pages && data.query.pages[0] && data.query.pages[0].revisions[0]) {
        return data.query.pages[0].revisions[0].content;
      }
      return false;
    };
    const tellPageExist = (data) => {
      if (typeof data !== "object" || !data.query || !data.query.pages || data.query.pages[0].missing) {
        return false;
      }
      return true;
    };
    const edit = (title, section, text, summary, callback) => {
      const param = {
        action: "edit",
        format: "json",
        formatversion: "2",
        title,
        summary,
        text
      };
      if (section) {
        param.section = section;
      }
      asyncPost(param, callback);
    };
    const editAppend = (page, added_content, summary, callback) => {
      getPage(page, (data) => {
        const original_content = tellPageExist(data) === false ? "" : pickPageContent(data);
        edit(page, null, String(original_content) + added_content, summary, callback);
      });
    };
    const archiveSection = (title, section, targetTitle, callback, summary) => {
      getPageSection(title, section, (data) => {
        editAppend(targetTitle, "\n\n".concat(pickPageContent(data)), summary);
        edit(title, section.toString(), "", summary, callback);
      });
    };
    const deleteSection = (title, section, callback, summary) => {
      edit(title, section.toString(), "", summary, callback);
    };
    return {
      archive_section: archiveSection,
      delete_section: deleteSection
    };
  })();
  window.easy_archive.settings_string = "#set%|?									\ndisplay section delete link	%sec-del|1?	\ndisplay section archive line	%sec-arc|1?	\ndisplay control bar at top	%top-bar|0?	\narchive location				%arc-loc|?	\nsubsection effectiveness		%sub-sec|2?	\nconfirm action				%confirm|0?	\nis this data initialized		%data-init|0? \n";
  window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  window.easy_archive.my_user_talk = null;
  (_window$easy_archive3 = (_window$easy_archive2 = window.easy_archive).never_enable_on_these_pages_regex) !== null && _window$easy_archive3 !== void 0 ? _window$easy_archive3 : _window$easy_archive2.never_enable_on_these_pages_regex = [];
  window.easy_archive.dis_support_these_pages_regex = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  const settings_span_collection = document.querySelectorAll(".easy_archive_data_point_collection");
  const [settings_span] = settings_span_collection;
  const settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str("");
  if (settings.find("data-init") === "1") {
    window.easy_archive.settings_string = settings_span.innerHTML;
    window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  }
  window.easy_archive.on_user_talk = mw.config.get("wgNamespaceNumber") === 3;
  window.easy_archive.my_user_talk = window.easy_archive.on_user_talk && (() => {
    let page_name = mw.config.get("wgPageName").split(":");
    page_name[0] = "";
    page_name = page_name.join("");
    [page_name] = page_name.split("/");
    const user_name = mw.config.get("wgUserName");
    return user_name.split("_").join("").split(" ").join("") === page_name.split("_").join("").split(" ").join("");
  })();
  window.easy_archive.has_template = settings.find("data-init") === "1";
  window.easy_archive.others_user_talk = window.easy_archive.my_user_talk === false && window.easy_archive.on_user_talk === true;
  window.easy_archive.on_article = mw.config.get("wgNamespaceNumber") === 0;
  window.easy_archive.on_hist_version = mw.config.get("wgCurRevisionId") - mw.config.get("wgRevisionId") !== 0;
  easy_archive_lang();
  const arc_sum = (_window$easy_archive$ = window.easy_archive.user_custom_archive_summary) !== null && _window$easy_archive$ !== void 0 ? _window$easy_archive$ : null;
  const del_sum = (_window$easy_archive$2 = window.easy_archive.user_custom_delete_summary) !== null && _window$easy_archive$2 !== void 0 ? _window$easy_archive$2 : null;
  const sanitize_html = (string) => {
    return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  };
  const message = (tag, para_list) => {
    try {
      let content = window.easy_archive.lang[tag];
      for (let has_unfulfilled_para = true, _i = 0; has_unfulfilled_para; _i++) {
        const search = "$".concat(_i + 1);
        if (content.includes(search)) {
          content = para_list[_i] ? content.split(search).join(para_list[_i]) : content.split(search).join("");
        } else {
          has_unfulfilled_para = false;
        }
      }
      return content;
    } catch {
      return "(!) undefined language content";
    }
  };
  const nominal_sections = ((count) => {
    const arr = Array.from({
      length: count
    });
    for (let _i = 0; _i < count; _i++) {
      arr[_i] = false;
    }
    return arr;
  })(window.easy_archive.section_count);
  const actual_section = (nominal_section_number) => {
    let less = 0;
    for (let _i = 0; _i < nominal_section_number; _i++) {
      if (nominal_sections[_i] === true) {
        less++;
      }
    }
    return nominal_section_number - less;
  };
  const report_doneness_ui = (section_number, doneness_type, to, ongoing_or_done) => {
    let tag_ding;
    let tag_section;
    let ding_type;
    let ding_autohide;
    if (ongoing_or_done === "ongoing") {
      ding_type = "info";
      ding_autohide = true;
      if (doneness_type === "delete") {
        tag_ding = "deleting_section_i";
        tag_section = "being_deleted";
      } else if (doneness_type === "archive") {
        tag_ding = "loading_section_i";
        tag_section = "being_archived";
      }
    } else if (ongoing_or_done === "done") {
      ding_type = "success";
      ding_autohide = false;
      if (doneness_type === "delete") {
        tag_ding = "done_deleting_section_i";
        tag_section = "already_deleted";
      } else if (doneness_type === "archive") {
        tag_ding = "done_section_i";
        tag_section = "already_archived";
      }
    }
    const actions = {
      ding: () => {
        (0, import_ext_gadget3.toastify)({
          text: message(tag_ding, [section_number.toString(), to]),
          close: !ding_autohide,
          duration: ding_autohide ? 3e3 : -1
        }, ding_type);
      },
      section_link: () => {
        const node = document.querySelector(".easy-archive-section-id-span-order-".concat(section_number));
        const pnode = node.parentNode;
        for (let _i = 1; _i < pnode.childNodes.length - 2; _i++) {
          pnode.childNodes[_i].style.display = "none";
        }
        node.innerHTML = message(tag_section);
        node.style.display = "inline";
        node.style.color = "rgb(0 0 0/.5)";
      }
    };
    return actions;
  };
  const delete_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    report_doneness_ui(_nominal, "delete", "", "ongoing").ding();
    expose.delete_section(mw.config.get("wgPageName"), actual_section_number, () => {
      report_doneness_ui(_nominal, "delete", "", "done").ding();
      report_doneness_ui(_nominal, "delete", "", "done").section_link();
      nominal_sections[section_number] = true;
    }, del_sum || message("delete_summary"));
  };
  window.easy_archive.delete_section = (section_number, _nominal) => {
    report_doneness_ui(_nominal, "delete", "", "ongoing").section_link();
    delete_section_core(section_number, _nominal);
  };
  const archive_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    const to = window.easy_archive.settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").ding();
    expose.archive_section(mw.config.get("wgPageName"), actual_section_number, to, () => {
      report_doneness_ui(_nominal, "archive", to, "done").ding();
      report_doneness_ui(_nominal, "archive", to, "done").section_link();
      nominal_sections[section_number] = true;
    }, arc_sum || message("archive_summary"));
  };
  window.easy_archive.archive_section = (section_number, _nominal) => {
    const to = window.easy_archive.settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").section_link();
    archive_section_core(section_number, _nominal);
  };
  window.easy_archive.elaborate_notice = (notice_tag_name) => {
    const notice_tag_dictionary = {
      please_enable_elaborate: ["please_enable_elaborate"],
      others_talk_elaborate: ["others_talk_elaborate"],
      enable_on_generic_page: ["enable_on_generic_page"],
      problem_with_archive_location_main_space: ["problem_with_archive_location_main_space", "warning", "long", false, [sanitize_html(window.easy_archive.settings.find("arc-loc"))]],
      problem_with_archive_location_same_page: ["problem_with_archive_location_same_page", "warning", "long", false, [sanitize_html(window.easy_archive.settings.find("arc-loc"))]],
      page_not_supported_elaborate: ["page_not_supported_elaborate"]
    };
    const notice_set = notice_tag_dictionary[notice_tag_name] || false;
    if (notice_set !== false) {
      const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
      const toastifyInstance = (0, import_ext_gadget3.toastify)({
        node: $("<span>").append(message(ntag, nsubst)).get(0),
        close: nttl === "long",
        duration: nttl === "long" ? -1 : nttl,
        onClick: () => {
          if (npersist) {
            return;
          }
          toastifyInstance.hideToast();
        }
      }, ntype);
    }
  };
  let i = 0;
  let j = 0;
  let ele;
  let nominal;
  let actual;
  const pipe_html = '<span class="mw-editsection-divider"> | </span>';
  const section_delete_interface_inhibit = window.easy_archive.settings.find("sec-del") === "0" || window.easy_archive.settings.find("data-init") === "0";
  const section_archive_interface_inhibit = window.easy_archive.settings.find("sec-arc") === "0" || window.easy_archive.settings.find("data-init") === "0";
  let section_delete_interface_html;
  let section_archive_interface_html;
  const section_id_span_html = '<span class="easy-archive-section-id-span easy-archive-section-id-span-order-@@" style="display:none">section</span>';
  let footer_info_ele;
  let position_of_insertion;
  if (document.querySelector("#footer-info") || document.querySelectorAll(".page-info")) {
    footer_info_ele = document.querySelector("#footer-info") || document.querySelectorAll(".page-info")[0];
    position_of_insertion = "afterbegin";
  } else {
    footer_info_ele = {
      insertAdjacentHTML: () => {
      }
    };
    position_of_insertion = "";
  }
  const is_in_blacklist = (blacklist) => {
    var _iterator = _createForOfIteratorHelper(blacklist), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element.test(mw.config.get("wgPageName"))) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  };
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
  } else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
  } else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('page_not_supported_elaborate')">`.concat(message("page_not_supported"), "</a></div>"));
  } else if (mw.config.get("wgPageName") === window.easy_archive.settings.find("arc-loc")) {
    window.easy_archive.elaborate_notice("problem_with_archive_location_same_page");
  } else if (window.easy_archive.has_template && !window.easy_archive.others_user_talk) {
    if (/.+:.+/.test(window.easy_archive.settings.find("arc-loc")) !== true) {
      window.easy_archive.elaborate_notice("problem_with_archive_location_main_space");
    }
    const normal_function_inject_interface = () => {
      const editSectionCollection = document.querySelectorAll(".mw-editsection");
      for (i = 0; i < editSectionCollection.length; i++) {
        ele = editSectionCollection[i];
        const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
        const child_node_number = ve ? 3 : 1;
        if (ele.parentNode.tagName.toLowerCase() === "h2" && ele.parentNode.id !== "firstHeading" && decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split("&")[0]) === mw.config.get("wgPageName")) {
          actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split("&")[0], 10);
          nominal = i - j + 1;
          section_delete_interface_html = section_delete_interface_inhibit ? "" : "".concat(pipe_html, '<a href="javascript:window.easy_archive.delete_section(').concat(actual, ", ").concat(nominal, ')">').concat(message("delete"), "</a>");
          section_archive_interface_html = section_archive_interface_inhibit ? "" : "".concat(pipe_html, '<a href="javascript:window.easy_archive.archive_section(').concat(actual, ", ").concat(nominal, ')">').concat(message("archive"), "</a>");
          ele.childNodes[child_node_number].insertAdjacentHTML("afterend", section_delete_interface_html + section_archive_interface_html + section_id_span_html.replace("@@", nominal.toString()));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.insertAdjacentHTML(position_of_insertion, '<div id="easy_archive_supports_notice">'.concat(message("supports")).concat(message("left_par_split")).concat(message("archive_path_colon_split"), '<a href="/wiki/').concat(sanitize_html(window.easy_archive.settings.find("arc-loc")), '">').concat(sanitize_html(window.easy_archive.settings.find("arc-loc")), "</a>").concat(message("right_par")).concat(message("period"), "</div>"));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('others_talk_elaborate')">`.concat(message("others_page"), "</a></div>"));
  } else if (window.easy_archive.my_user_talk === false) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('enable_on_generic_page')">`.concat(message("to_enable"), "</a></div>"));
  } else {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('please_enable_elaborate')">`.concat(message("please_enable"), "</a></div>"));
  }
  if (mw.config.get("skin") === "citizen") {
    const $body = $("body");
    $body.find("#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice").replaceWith(function() {
      const $this = $(this);
      return $("<section>").addClass("page-info__item").attr("id", $this.attr("id")).html($this.html());
    });
  }
  if (["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info")) {
    const $body = $("body");
    $body.find("#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice").replaceWith(function() {
      const $this = $(this);
      return $("<li>").attr("id", $this.attr("id")).html($this.html());
    });
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmV4cG9ydCBjb25zdCBlYXN5X2FyY2hpdmVfbGFuZyA9ICgpID0+IHtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5sYW5nID0ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtlYXN5X2FyY2hpdmVfbGFuZ30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDAgfHwgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSAn5pyJ5YW95qGj5qGI6aaGOummlumhtScpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0d2luZG93LmVhc3lfYXJjaGl2ZSA/Pz0ge307XG5cdC8vIG1pbmlmaWVkIGNvZGUgZGVwZW5kZW5jeSBmdW5jdGlvbnNcblx0Y2xhc3MgUGFyZV9zdHIge1xuXHRcdGNvbnN0cnVjdG9yKHBhcmVfc3RyaW5nLCBjb25maWcpIHtcblx0XHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0XHR0aGlzLmxlZnQgPSAnKCc7XG5cdFx0XHR0aGlzLmRlbGltID0gJzonO1xuXHRcdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRcdGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25maWcgPSBTdHJpbmcoY29uZmlnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0cGFyZV9zdHJpbmcubGVuZ3RoID4gNiAmJlxuXHRcdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHRcdCFjb25maWcuaW5jbHVkZXMoJ2lnbm9yZS1zZXQnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdFx0aWYgKHRoaXMubGVmdCA9PT0gdGhpcy5yaWdodCB8fCB0aGlzLmxlZnQgPT09IHRoaXMuZGVsaW0gfHwgdGhpcy5yaWdodCA9PT0gdGhpcy5kZWxpbSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlBvdW5kIHNldCBzdGF0ZW1lbnQgaGFzIHJlcGV0aXRpdmUgY2hhcmFjdGVycy4gRS5nLiAnI3NldHw6fCcgaXMgaWxsZWdhbC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluZChsb29rdXBfa2V5KSB7XG5cdFx0XHRsb29rdXBfa2V5ID0gdGhpcy5sZWZ0ICsgbG9va3VwX2tleSArIHRoaXMuZGVsaW07XG5cdFx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGxvb2t1cF9rZXkpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuc3RyLnNwbGl0KGxvb2t1cF9rZXkpWzFdLnNwbGl0KHRoaXMucmlnaHQpWzBdO1xuXHRcdH1cblx0fVxuXHQvLyBjb21tb24gcmVwby5cblx0Y29uc3QgZXhwb3NlID0gKCgpID0+IHtcblx0XHRjb25zdCBhc3luY1Bvc3QgPSAocGFyYW0sIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ0Vhc3lBY2hpdmUvMy4wJyk7XG5cdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2UgPSAodGl0bGUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6ICdpZHN8ZmxhZ3N8dGltZXN0YW1wfHVzZXJ8dXNlcmlkfHNpemV8Y29tbWVudHx0YWdzfGNvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0fTtcblx0XHRcdGFzeW5jUG9zdChwYXJhbSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgZ2V0UGFnZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHRcdFx0fTtcblx0XHRcdGFzeW5jUG9zdChwYXJhbSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgcGlja1BhZ2VDb250ZW50ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5ICYmIGRhdGEucXVlcnkucGFnZXMgJiYgZGF0YS5xdWVyeS5wYWdlc1swXSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdGNvbnN0IHRlbGxQYWdlRXhpc3QgPSAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fCAhZGF0YS5xdWVyeSB8fCAhZGF0YS5xdWVyeS5wYWdlcyB8fCBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRjb25zdCBlZGl0ID0gKHRpdGxlLCBzZWN0aW9uLCB0ZXh0LCBzdW1tYXJ5LCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0dGV4dCxcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0XHRwYXJhbS5zZWN0aW9uID0gc2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGFzeW5jUG9zdChwYXJhbSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdEFwcGVuZCA9IChwYWdlLCBhZGRlZF9jb250ZW50LCBzdW1tYXJ5LCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Z2V0UGFnZShwYWdlLCAoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbF9jb250ZW50ID0gdGVsbFBhZ2VFeGlzdChkYXRhKSA9PT0gZmFsc2UgPyAnJyA6IHBpY2tQYWdlQ29udGVudChkYXRhKTtcblx0XHRcdFx0ZWRpdChwYWdlLCBudWxsLCBTdHJpbmcob3JpZ2luYWxfY29udGVudCkgKyBhZGRlZF9jb250ZW50LCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGFyY2hpdmVTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCB0YXJnZXRUaXRsZSwgY2FsbGJhY2ssIHN1bW1hcnkpID0+IHtcblx0XHRcdGdldFBhZ2VTZWN0aW9uKHRpdGxlLCBzZWN0aW9uLCAoZGF0YSkgPT4ge1xuXHRcdFx0XHRlZGl0QXBwZW5kKHRhcmdldFRpdGxlLCBgXFxuXFxuJHtwaWNrUGFnZUNvbnRlbnQoZGF0YSl9YCwgc3VtbWFyeSk7XG5cdFx0XHRcdGVkaXQodGl0bGUsIHNlY3Rpb24udG9TdHJpbmcoKSwgJycsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgZGVsZXRlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2ssIHN1bW1hcnkpID0+IHtcblx0XHRcdGVkaXQodGl0bGUsIHNlY3Rpb24udG9TdHJpbmcoKSwgJycsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcmNoaXZlX3NlY3Rpb246IGFyY2hpdmVTZWN0aW9uLFxuXHRcdFx0ZGVsZXRlX3NlY3Rpb246IGRlbGV0ZVNlY3Rpb24sXG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gZGVmYXVsdCBzZXR0aW5nczpcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nKTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPSBudWxsO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCA/Pz0gW107XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXggPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cdGNvbnN0IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJyk7XG5cdGNvbnN0IFtzZXR0aW5nc19zcGFuXSA9IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbjtcblx0Y29uc3Qgc2V0dGluZ3MgPSBzZXR0aW5nc19zcGFuID8gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MKSA6IG5ldyBQYXJlX3N0cignJyk7XG5cdGlmIChzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcgPSBzZXR0aW5nc19zcGFuLmlubmVySFRNTDtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nKTtcblx0fVxuXHQvLyBpZGVudGlmeSBpZiBFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhlIHBhZ2UgLSBjb21wYXRpYmlsaXR5XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMztcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrICYmXG5cdFx0KCgpID0+IHtcblx0XHRcdGxldCBwYWdlX25hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuc3BsaXQoJzonKTtcblx0XHRcdHBhZ2VfbmFtZVswXSA9ICcnO1xuXHRcdFx0cGFnZV9uYW1lID0gcGFnZV9uYW1lLmpvaW4oJycpO1xuXHRcdFx0W3BhZ2VfbmFtZV0gPSBwYWdlX25hbWUuc3BsaXQoJy8nKTtcblx0XHRcdGNvbnN0IHVzZXJfbmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHVzZXJfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJykgPT09IHBhZ2VfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJylcblx0XHRcdCk7XG5cdFx0fSkoKTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgPSBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm90aGVyc191c2VyX3RhbGsgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID09PSBmYWxzZSAmJiB3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayA9PT0gdHJ1ZTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl9hcnRpY2xlID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMDtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl9oaXN0X3ZlcnNpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKSAtIG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpICE9PSAwO1xuXHRlYXN5X2FyY2hpdmVfbGFuZygpO1xuXHRjb25zdCBhcmNfc3VtID0gd2luZG93LmVhc3lfYXJjaGl2ZS51c2VyX2N1c3RvbV9hcmNoaXZlX3N1bW1hcnkgPz8gbnVsbDtcblx0Y29uc3QgZGVsX3N1bSA9IHdpbmRvdy5lYXN5X2FyY2hpdmUudXNlcl9jdXN0b21fZGVsZXRlX3N1bW1hcnkgPz8gbnVsbDtcblx0Y29uc3Qgc2FuaXRpemVfaHRtbCA9IChzdHJpbmcpID0+IHtcblx0XHRyZXR1cm4gc3RyaW5nXG5cdFx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXHR9O1xuXHQvLyBtdWx0aSBsYW5ndWFnZSBzZWxlY3RvciBkZWZpbml0aW9uXG5cdGNvbnN0IG1lc3NhZ2UgPSAodGFnLCBwYXJhX2xpc3QpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGNvbnRlbnQgPSB3aW5kb3cuZWFzeV9hcmNoaXZlLmxhbmdbdGFnXTtcblx0XHRcdGZvciAobGV0IGhhc191bmZ1bGZpbGxlZF9wYXJhID0gdHJ1ZSwgX2kgPSAwOyBoYXNfdW5mdWxmaWxsZWRfcGFyYTsgX2krKykge1xuXHRcdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7X2kgKyAxfWA7XG5cdFx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0XHRjb250ZW50ID0gcGFyYV9saXN0W19pXVxuXHRcdFx0XHRcdFx0PyBjb250ZW50LnNwbGl0KHNlYXJjaCkuam9pbihwYXJhX2xpc3RbX2ldKVxuXHRcdFx0XHRcdFx0OiBjb250ZW50LnNwbGl0KHNlYXJjaCkuam9pbignJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGFzX3VuZnVsZmlsbGVkX3BhcmEgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJyghKSB1bmRlZmluZWQgbGFuZ3VhZ2UgY29udGVudCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBub21pbmFsX3NlY3Rpb25zID0gKChjb3VudCkgPT4ge1xuXHRcdGNvbnN0IGFyciA9IEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiBjb3VudCxcblx0XHR9KTtcblx0XHRmb3IgKGxldCBfaSA9IDA7IF9pIDwgY291bnQ7IF9pKyspIHtcblx0XHRcdGFycltfaV0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fSkod2luZG93LmVhc3lfYXJjaGl2ZS5zZWN0aW9uX2NvdW50KTtcblx0Y29uc3QgYWN0dWFsX3NlY3Rpb24gPSAobm9taW5hbF9zZWN0aW9uX251bWJlcikgPT4ge1xuXHRcdGxldCBsZXNzID0gMDtcblx0XHRmb3IgKGxldCBfaSA9IDA7IF9pIDwgbm9taW5hbF9zZWN0aW9uX251bWJlcjsgX2krKykge1xuXHRcdFx0aWYgKG5vbWluYWxfc2VjdGlvbnNbX2ldID09PSB0cnVlKSB7XG5cdFx0XHRcdGxlc3MrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5vbWluYWxfc2VjdGlvbl9udW1iZXIgLSBsZXNzO1xuXHR9O1xuXHQvLyAuLi4gaW50ZXJmYWNlIGRvbmVcblx0Ly8gYXJjaGl2aW5nIGxvZ2ljIGluamVjdGlvblxuXHRjb25zdCByZXBvcnRfZG9uZW5lc3NfdWkgPSAoc2VjdGlvbl9udW1iZXIsIGRvbmVuZXNzX3R5cGUsIHRvLCBvbmdvaW5nX29yX2RvbmUpID0+IHtcblx0XHRsZXQgdGFnX2Rpbmc7XG5cdFx0bGV0IHRhZ19zZWN0aW9uO1xuXHRcdGxldCBkaW5nX3R5cGU7XG5cdFx0bGV0IGRpbmdfYXV0b2hpZGU7XG5cdFx0aWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ29uZ29pbmcnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnaW5mbyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gdHJ1ZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2xvYWRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob25nb2luZ19vcl9kb25lID09PSAnZG9uZScpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdzdWNjZXNzJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSBmYWxzZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBhY3Rpb25zID0ge1xuXHRcdFx0ZGluZzogKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlKHRhZ19kaW5nLCBbc2VjdGlvbl9udW1iZXIudG9TdHJpbmcoKSwgdG9dKSxcblx0XHRcdFx0XHRcdGNsb3NlOiAhZGluZ19hdXRvaGlkZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBkaW5nX2F1dG9oaWRlID8gMzAwMCA6IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGluZ190eXBlXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0c2VjdGlvbl9saW5rOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke3NlY3Rpb25fbnVtYmVyfWApO1xuXHRcdFx0XHRjb25zdCBwbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdFx0Zm9yIChsZXQgX2kgPSAxOyBfaSA8IHBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMjsgX2krKykge1xuXHRcdFx0XHRcdHBub2RlLmNoaWxkTm9kZXNbX2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlKHRhZ19zZWN0aW9uKTtcblx0XHRcdFx0bm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDAgMCAwLy41KSc7XG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIGFjdGlvbnM7XG5cdH07XG5cdGNvbnN0IGRlbGV0ZV9zZWN0aW9uX2NvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRleHBvc2UuZGVsZXRlX3NlY3Rpb24oXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRkZWxfc3VtIHx8IG1lc3NhZ2UoJ2RlbGV0ZV9zdW1tYXJ5Jylcblx0XHQpO1xuXHR9O1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmRlbGV0ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGRlbGV0ZV9zZWN0aW9uX2NvcmUoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZV9zZWN0aW9uX2NvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdGNvbnN0IHRvID0gd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRleHBvc2UuYXJjaGl2ZV9zZWN0aW9uKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0dG8sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGFyY19zdW0gfHwgbWVzc2FnZSgnYXJjaGl2ZV9zdW1tYXJ5Jylcblx0XHQpO1xuXHR9O1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmFyY2hpdmVfc2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCB0byA9IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRhcmNoaXZlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UgPSAobm90aWNlX3RhZ19uYW1lKSA9PiB7XG5cdFx0Ly8gYWNyb255bSBzY2hlbWU6IHJlZmVyIHRvIHF3ZXJ0eSBrZXlib2FyZCBsYXlvdXQuIChwPTkpXG5cdFx0Y29uc3Qgbm90aWNlX3RhZ19kaWN0aW9uYXJ5ID0ge1xuXHRcdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IFsncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnXSxcblx0XHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogWydvdGhlcnNfdGFsa19lbGFib3JhdGUnXSxcblx0XHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IFsnZW5hYmxlX29uX2dlbmVyaWNfcGFnZSddLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBbJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnXSxcblx0XHR9O1xuXHRcdGNvbnN0IG5vdGljZV9zZXQgPSBub3RpY2VfdGFnX2RpY3Rpb25hcnlbbm90aWNlX3RhZ19uYW1lXSB8fCBmYWxzZTtcblx0XHRpZiAobm90aWNlX3NldCAhPT0gZmFsc2UpIHtcblx0XHRcdGNvbnN0IFtudGFnLCBudHlwZSwgbnR0bCwgbnBlcnNpc3QsIG5zdWJzdF0gPSBub3RpY2Vfc2V0O1xuXHRcdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogJCgnPHNwYW4+JykuYXBwZW5kKG1lc3NhZ2UobnRhZywgbnN1YnN0KSkuZ2V0KDApLFxuXHRcdFx0XHRcdGNsb3NlOiBudHRsID09PSAnbG9uZycsXG5cdFx0XHRcdFx0ZHVyYXRpb246IG50dGwgPT09ICdsb25nJyA/IC0xIDogbnR0bCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobnBlcnNpc3QpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudHlwZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIHJlYWwgZGVhbCBoZXJlXG5cdC8vIGludGVyZmFjZSBpbmplY3Rpb24gLSBwcmVwYXJlXG5cdGxldCBpID0gMDtcblx0bGV0IGogPSAwO1xuXHRsZXQgZWxlO1xuXHRsZXQgbm9taW5hbDtcblx0bGV0IGFjdHVhbDtcblx0Y29uc3QgcGlwZV9odG1sID0gJzxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiPiB8IDwvc3Bhbj4nO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdzZWMtZGVsJykgPT09ICcwJyB8fCB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGNvbnN0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdzZWMtYXJjJykgPT09ICcwJyB8fCB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGxldCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbDtcblx0bGV0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbDtcblx0Y29uc3Qgc2VjdGlvbl9pZF9zcGFuX2h0bWwgPVxuXHRcdCc8c3BhbiBjbGFzcz1cImVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4gZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci1AQFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+c2VjdGlvbjwvc3Bhbj4nO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRsZXQgcG9zaXRpb25fb2ZfaW5zZXJ0aW9uO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlci1pbmZvJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtaW5mbycpKSB7XG5cdFx0Zm9vdGVyX2luZm9fZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlci1pbmZvJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtaW5mbycpWzBdO1xuXHRcdHBvc2l0aW9uX29mX2luc2VydGlvbiA9ICdhZnRlcmJlZ2luJztcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSB7XG5cdFx0XHRpbnNlcnRBZGphY2VudEhUTUw6ICgpID0+IHt9LFxuXHRcdH07XG5cdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uID0gJyc7XG5cdH1cblx0Ly8gLi4uIGludGVyZmFjZSBpbmplY3Rpb24gLSBsb2dpY1xuXHRjb25zdCBpc19pbl9ibGFja2xpc3QgPSAoYmxhY2tsaXN0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrbGlzdCkge1xuXHRcdFx0aWYgKGVsZW1lbnQudGVzdChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2FydGljbGUgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5vbl9oaXN0X3ZlcnNpb24pIHtcblx0XHQvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIG9uIGFuIGFydGljbGUgcGFnZSBvciBhIGhpc3RvcnkgdmVyc2lvbi5cblx0fSBlbHNlIGlmIChpc19pbl9ibGFja2xpc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5uZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vIGludGVyZmFjZSBpZiB0aGUgcGFnZSBuYW1lIGlzIGJsYWNrbGlzdGVkLlxuXHR9IGVsc2UgaWYgKGlzX2luX2JsYWNrbGlzdCh3aW5kb3cuZWFzeV9hcmNoaXZlLmRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBub3Qgc3VwcG9ydGVkIG5vdGljZSBpZiB0aGUgcGFnZSBuYW1lIGluZGljYXRlcyB0aGF0IGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdGA8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj48YSBzdHlsZT1cImNvbG9yOmluaGVyaXRcIiBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKVwiPiR7bWVzc2FnZShcblx0XHRcdFx0J3BhZ2Vfbm90X3N1cHBvcnRlZCdcblx0XHRcdCl9PC9hPjwvZGl2PmBcblx0XHQpO1xuXHR9IGVsc2UgaWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSA9PT0gd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUuaGFzX3RlbXBsYXRlICYmICF3aW5kb3cuZWFzeV9hcmNoaXZlLm90aGVyc191c2VyX3RhbGspIHtcblx0XHQvLyBhbnkgcGFnZSB0aGF0IGhhcyB0ZW1wbGF0ZSB0aGF0J3Mgbm90IG90aGVycycgdGFsayBwYWdlLiBmdW5jdGlvbiBub3JtYWxseS5cblx0XHQvLyAhISB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBpbiBtYWluIHNwYWNlIGFuZCBuZWVkcyBhdHRlbnRpb24gISFcblx0XHRpZiAoLy4rOi4rLy50ZXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZWRpdFNlY3Rpb25Db2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWRpdFNlY3Rpb25Db2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGVsZSA9IGVkaXRTZWN0aW9uQ29sbGVjdGlvbltpXTtcblx0XHRcdFx0Y29uc3QgdmUgPSAvWyY/XXZlYWN0aW9uPWVkaXQvLnRlc3QoZWxlLmNoaWxkTm9kZXNbMV0uaHJlZik7XG5cdFx0XHRcdGNvbnN0IGNoaWxkX25vZGVfbnVtYmVyID0gdmUgPyAzIDogMTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2gyJyAmJlxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLmlkICE9PSAnZmlyc3RIZWFkaW5nJyAmJlxuXHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXRpdGxlPS8pWzFdLnNwbGl0KCcmJylbMF0pID09PVxuXHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGFjdHVhbCA9IE51bWJlci5wYXJzZUludChcblx0XHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9dc2VjdGlvbj0vKVsxXS5zcGxpdCgnJicpWzBdLFxuXHRcdFx0XHRcdFx0MTBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdG5vbWluYWwgPSBpIC0gaiArIDE7XG5cdFx0XHRcdFx0c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwgPSBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdFxuXHRcdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdFx0OiBgJHtwaXBlX2h0bWx9PGEgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5kZWxldGVfc2VjdGlvbigke2FjdHVhbH0sICR7bm9taW5hbH0pXCI+JHttZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdkZWxldGUnXG5cdFx0XHRcdFx0XHRcdCl9PC9hPmA7XG5cdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0XG5cdFx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0XHQ6IGAke3BpcGVfaHRtbH08YSBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmFyY2hpdmVfc2VjdGlvbigke2FjdHVhbH0sICR7bm9taW5hbH0pXCI+JHttZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdhcmNoaXZlJ1xuXHRcdFx0XHRcdFx0XHQpfTwvYT5gO1xuXHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRcdFx0XHQnYWZ0ZXJlbmQnLFxuXHRcdFx0XHRcdFx0c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwgK1xuXHRcdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWwgK1xuXHRcdFx0XHRcdFx0XHRzZWN0aW9uX2lkX3NwYW5faHRtbC5yZXBsYWNlKCdAQCcsIG5vbWluYWwudG9TdHJpbmcoKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGorKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZWN0aW9uX2NvdW50ID0gaSAtIGogKyAxO1xuXHRcdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0XHRgPGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2VcIj4ke21lc3NhZ2UoJ3N1cHBvcnRzJyl9JHttZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpfSR7bWVzc2FnZShcblx0XHRcdFx0XHQnYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0J1xuXHRcdFx0XHQpfTxhIGhyZWY9XCIvd2lraS8ke3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfVwiPiR7c2FuaXRpemVfaHRtbChcblx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKVxuXHRcdFx0XHQpfTwvYT4ke21lc3NhZ2UoJ3JpZ2h0X3BhcicpfSR7bWVzc2FnZSgncGVyaW9kJyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0YDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPjxhIHN0eWxlPVwiY29sb3I6aW5oZXJpdFwiIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJylcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdCdvdGhlcnNfcGFnZSdcblx0XHRcdCl9PC9hPjwvZGl2PmBcblx0XHQpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID09PSBmYWxzZSkge1xuXHRcdC8vIGEgZ2VuZXJpYyBwYWdlIHRoYXQgZGlkIG5vdCBlbmFibGUgZWFzeSBhcmNoaXZlLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRgPGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+PGEgc3R5bGU9XCJjb2xvcjppbmhlcml0XCIgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdlbmFibGVfb25fZ2VuZXJpY19wYWdlJylcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdCd0b19lbmFibGUnXG5cdFx0XHQpfTwvYT48L2Rpdj5gXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHQvLyB0aGVuIGFzc2VydDogKHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID09PSB0cnVlKSwgKHdpbmRvdy5lYXN5X2FyY2hpdmUuaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdGA8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj48YSBzdHlsZT1cImNvbG9yOmluaGVyaXRcIiBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJylcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdCdwbGVhc2VfZW5hYmxlJ1xuXHRcdFx0KX08L2E+PC9kaXY+YFxuXHRcdCk7XG5cdH1cblx0aWYgKG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHlcblx0XHRcdC5maW5kKCcjZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N0b3Bfbm90aWNlJylcblx0XHRcdC5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuICQoJzxzZWN0aW9uPicpLmFkZENsYXNzKCdwYWdlLWluZm9fX2l0ZW0nKS5hdHRyKCdpZCcsICR0aGlzLmF0dHIoJ2lkJykpLmh0bWwoJHRoaXMuaHRtbCgpKTtcblx0XHRcdH0pO1xuXHR9XG5cdGlmIChcblx0XHRbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCdza2luJykpIHx8XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKVxuXHQpIHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keVxuXHRcdFx0LmZpbmQoJyNlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3RvcF9ub3RpY2UnKVxuXHRcdFx0LnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gJCgnPGxpPicpLmF0dHIoJ2lkJywgJHRoaXMuYXR0cignaWQnKSkuaHRtbCgkdGhpcy5odG1sKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUVo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UUFDaEosYUFDRCxHQUFDLFlBQUEsQ0FDRjtFQUNELFdBQVcvSCxPQUFPQyxhQUFhdUcsaUJBQWlCLE9BQU87QUFFdEQwRixvQkFBZ0JFLG1CQUNmRCx1QkFBQSxrSkFBQWxHLE9BQ2tKOEIsUUFDakosV0FDRCxHQUFDLFlBQUEsQ0FDRjtFQUNELE9BQU87QUFHTm1FLG9CQUFnQkUsbUJBQ2ZELHVCQUFBLG1KQUFBbEcsT0FDbUo4QixRQUNsSixlQUNELEdBQUMsWUFBQSxDQUNGO0VBQ0Q7QUFDQSxNQUFJckYsR0FBR0MsT0FBT0MsSUFBSSxNQUFNLE1BQU0sV0FBVztBQUN4QyxVQUFNaUwsUUFBUTFDLEVBQUUsTUFBTTtBQUN0QjBDLFVBQ0VuSyxLQUFLLHVGQUF1RixFQUM1Rm9LLFlBQVksV0FBWTtBQUN4QixZQUFNQyxRQUFRNUMsRUFBRSxJQUFJO0FBQ3BCLGFBQU9BLEVBQUUsV0FBVyxFQUFFNkMsU0FBUyxpQkFBaUIsRUFBRUMsS0FBSyxNQUFNRixNQUFNRSxLQUFLLElBQUksQ0FBQyxFQUFFQyxLQUFLSCxNQUFNRyxLQUFLLENBQUM7SUFDakcsQ0FBQztFQUNIO0FBQ0EsTUFDQyxDQUFDLFVBQVUsZUFBZSxRQUFRLEVBQUUxSyxTQUFTZCxHQUFHQyxPQUFPQyxJQUFJLE1BQU0sQ0FBQyxLQUNsRWdFLFNBQVNrRCxjQUFjLGdCQUFnQixHQUN0QztBQUNELFVBQU0rRCxRQUFRMUMsRUFBRSxNQUFNO0FBQ3RCMEMsVUFDRW5LLEtBQUssdUZBQXVGLEVBQzVGb0ssWUFBWSxXQUFZO0FBQ3hCLFlBQU1DLFFBQVE1QyxFQUFFLElBQUk7QUFDcEIsYUFBT0EsRUFBRSxNQUFNLEVBQUU4QyxLQUFLLE1BQU1GLE1BQU1FLEtBQUssSUFBSSxDQUFDLEVBQUVDLEtBQUtILE1BQU1HLEtBQUssQ0FBQztJQUNoRSxDQUFDO0VBQ0g7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImVhc3lfYXJjaGl2ZV9sYW5nIiwgIndpbmRvdyIsICJlYXN5X2FyY2hpdmUiLCAibGFuZyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJlYXN5QXJjaGl2ZSIsICJfd2luZG93IiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlMiIsICJfd2luZG93JGVhc3lfYXJjaGl2ZTMiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJDIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJQYXJlX3N0ciIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiaW5jbHVkZXMiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJsb29rdXBfa2V5IiwgInNwbGl0IiwgImV4cG9zZSIsICJhc3luY1Bvc3QiLCAicGFyYW0iLCAiY2FsbGJhY2siLCAiYXBpIiwgImluaXRNd0FwaSIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZ2V0UGFnZSIsICJ0aXRsZSIsICJhY3Rpb24iLCAicHJvcCIsICJydnByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImdldFBhZ2VTZWN0aW9uIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBpY2tQYWdlQ29udGVudCIsICJkYXRhIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInRlbGxQYWdlRXhpc3QiLCAibWlzc2luZyIsICJlZGl0IiwgInRleHQiLCAic3VtbWFyeSIsICJlZGl0QXBwZW5kIiwgInBhZ2UiLCAiYWRkZWRfY29udGVudCIsICJvcmlnaW5hbF9jb250ZW50IiwgImFyY2hpdmVTZWN0aW9uIiwgInRhcmdldFRpdGxlIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJkZWxldGVTZWN0aW9uIiwgImFyY2hpdmVfc2VjdGlvbiIsICJkZWxldGVfc2VjdGlvbiIsICJzZXR0aW5nc19zdHJpbmciLCAic2V0dGluZ3MiLCAibXlfdXNlcl90YWxrIiwgIm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCIsICJkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCIsICJzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR0aW5nc19zcGFuIiwgImlubmVySFRNTCIsICJvbl91c2VyX3RhbGsiLCAicGFnZV9uYW1lIiwgImpvaW4iLCAidXNlcl9uYW1lIiwgImhhc190ZW1wbGF0ZSIsICJvdGhlcnNfdXNlcl90YWxrIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgImFyY19zdW0iLCAidXNlcl9jdXN0b21fYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbF9zdW0iLCAidXNlcl9jdXN0b21fZGVsZXRlX3N1bW1hcnkiLCAic2FuaXRpemVfaHRtbCIsICJzdHJpbmciLCAicmVwbGFjZSIsICJtZXNzYWdlIiwgInRhZyIsICJwYXJhX2xpc3QiLCAiaGFzX3VuZnVsZmlsbGVkX3BhcmEiLCAiX2kiLCAic2VhcmNoIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAic2VjdGlvbl9jb3VudCIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZSIsICJxdWVyeVNlbGVjdG9yIiwgInBub2RlIiwgInBhcmVudE5vZGUiLCAiY2hpbGROb2RlcyIsICJzdHlsZSIsICJkaXNwbGF5IiwgImNvbG9yIiwgImRlbGV0ZV9zZWN0aW9uX2NvcmUiLCAiX25vbWluYWwiLCAiYWN0dWFsX3NlY3Rpb25fbnVtYmVyIiwgImFyY2hpdmVfc2VjdGlvbl9jb3JlIiwgImVsYWJvcmF0ZV9ub3RpY2UiLCAibm90aWNlX3RhZ19uYW1lIiwgIm5vdGljZV90YWdfZGljdGlvbmFyeSIsICJub3RpY2Vfc2V0IiwgIm50YWciLCAibnR5cGUiLCAibnR0bCIsICJucGVyc2lzdCIsICJuc3Vic3QiLCAidG9hc3RpZnlJbnN0YW5jZSIsICIkIiwgImFwcGVuZCIsICJvbkNsaWNrIiwgImhpZGVUb2FzdCIsICJpIiwgImoiLCAiZWxlIiwgIm5vbWluYWwiLCAiYWN0dWFsIiwgInBpcGVfaHRtbCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25faWRfc3Bhbl9odG1sIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJwb3NpdGlvbl9vZl9pbnNlcnRpb24iLCAiaW5zZXJ0QWRqYWNlbnRIVE1MIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAidmUiLCAiaHJlZiIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImlkIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiJGJvZHkiLCAicmVwbGFjZVdpdGgiLCAiJHRoaXMiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJodG1sIl0KfQo=
