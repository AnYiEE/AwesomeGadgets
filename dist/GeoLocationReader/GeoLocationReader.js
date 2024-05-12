/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=GeoLocationReader|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GeoLocationReader}
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

// dist/GeoLocationReader/GeoLocationReader.js
var _mw$config$get;
var _mw$config$get2;
var _mw$config$get3;
var _mw$config$get4;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/GeoLocationReader/options.json
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
var version = "2.0";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_NAME = (_mw$config$get2 = mw.config.get("wgUserName")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : "";
var WG_USER_EDIT_COUNT = (_mw$config$get3 = mw.config.get("wgUserEditCount")) !== null && _mw$config$get3 !== void 0 ? _mw$config$get3 : 0;
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
var IS_USER_PAGE = mw.config.get("wgNamespaceNumber") === userNameSpaceNumber;
var IS_WG_ACTION_VIEW = mw.config.get("wgAction") === "view";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_RELEVANT_USER_NAME = (_mw$config$get4 = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get4 !== void 0 ? _mw$config$get4 : "";
var WG_SKIN = mw.config.get("skin");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/GeoLocationReader/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocationReader/".concat(version));
//! src/GeoLocationReader/modules/util/name.ts
var getCountryOrAreaNameList = () => {
  if (["zh-hant", "zh-hk", "zh-mo"].includes(WG_USER_LANGUAGE)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安提瓜和巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "阿塞拜疆",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴巴多斯",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "伯利茲",
      BJ: "貝寧",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波黑",
      BW: "博茨瓦納",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布基納法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "科摩羅",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯達黎加",
      CI: "科特迪瓦",
      HR: "克羅地亞",
      CU: "古巴",
      CW: "庫拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多爾",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道畿內亞",
      ER: "厄立特里亞",
      EE: "愛沙尼亞",
      SZ: "斯威士蘭",
      ET: "埃塞俄比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬波利尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加蓬",
      GM: "岡比亞",
      GE: "格魯吉亞",
      DE: "德國",
      GH: "加納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格林納達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "危地馬拉",
      GG: "根西",
      GN: "畿內亞",
      GW: "畿內亞比紹",
      GY: "圭亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "洪都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "人島",
      IL: "以色列",
      IT: "意大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯雅",
      KI: "基里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "萊索托",
      LR: "利比里亞",
      LY: "利比亞",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉維",
      MY: "馬來西亞",
      MV: "馬爾代夫",
      ML: "馬里",
      MT: "馬耳他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "毛里塔尼亞",
      MU: "毛里裘斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "瑙魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "新西蘭",
      NI: "尼加拉瓜",
      NE: "尼日爾",
      NG: "尼日利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕勞",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞新畿內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔爾",
      RE: "留尼汪",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧旺達",
      BL: "聖巴泰勒米",
      SH: "聖海倫娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖基茨和尼維斯",
      LC: "聖盧西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮埃爾和密克隆",
      VC: "聖文森特和格林納丁斯",
      WS: "薩摩亞",
      SM: "聖馬力諾",
      ST: "聖多美和普林西比",
      SA: "沙地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞舌爾",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亞",
      SB: "所羅門群島",
      SO: "索馬里",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇里南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦桑尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "湯加",
      TT: "千里達和多巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "特克斯和凱科斯群島",
      TV: "圖瓦盧",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯酋",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "瓦努阿圖",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬處女群島",
      VI: "美屬處女群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "也門",
      ZM: "贊比亞",
      ZW: "津巴布韋"
    };
  } else if (["zh-tw"].includes(WG_USER_LANGUAGE)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安地卡及巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "亞塞拜然",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴貝多",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "貝里斯",
      BJ: "貝南",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波赫",
      BW: "波札那",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布吉納法索",
      BI: "蒲隆地",
      CV: "維德角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "查德",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "葛摩",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯大黎加",
      CI: "象牙海岸",
      HR: "克羅埃西亞",
      CU: "古巴",
      CW: "古拉索",
      CY: "賽普勒斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布地",
      DM: "多米尼克",
      DO: "多明尼加",
      EC: "厄瓜多",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道幾內亞",
      ER: "厄利垂亞",
      EE: "愛沙尼亞",
      SZ: "史瓦帝尼",
      ET: "衣索比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬玻里尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加彭",
      GM: "甘比亞",
      GE: "喬治亞",
      DE: "德國",
      GH: "迦納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格瑞那達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "瓜地馬拉",
      GG: "根西",
      GN: "幾內亞",
      GW: "幾內亞比索",
      GY: "蓋亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "宏都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "曼島",
      IL: "以色列",
      IT: "義大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯亞",
      KI: "吉里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "賴索托",
      LR: "賴比瑞亞",
      LY: "利比亞",
      LI: "列支敦斯登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉威",
      MY: "馬來西亞",
      MV: "馬爾地夫",
      ML: "馬里",
      MT: "馬爾他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "茅利塔尼亞",
      MU: "模里西斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "蒙特內哥羅",
      MS: "蒙哲臘",
      MA: "摩洛哥",
      MZ: "莫三比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "諾魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "紐西蘭",
      NI: "尼加拉瓜",
      NE: "尼日",
      NG: "奈及利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帛琉",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞紐幾內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡達",
      RE: "留尼旺",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧安達",
      BL: "聖巴泰勒米",
      SH: "聖海蓮娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖克里斯多福及尼維斯",
      LC: "聖露西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮耶與密克隆",
      VC: "聖文森及格瑞那丁",
      WS: "薩摩亞",
      SM: "聖馬利諾",
      ST: "聖多美普林西比",
      SA: "沙烏地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞席爾",
      SL: "獅子山",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛維尼亞",
      SB: "索羅門群島",
      SO: "索馬利亞",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇利南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦尚尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "東加",
      TT: "千里達及托巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "土克凱可群島",
      TV: "吐瓦魯",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "萬那杜",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬維京群島",
      VI: "美屬維京群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "葉門",
      ZM: "尚比亞",
      ZW: "辛巴威"
    };
  } else if (["zh-my", "zh-sg"].includes(WG_USER_LANGUAGE)) {
    return {
      AF: "阿富汗",
      AX: "奥兰",
      AL: "阿尔巴尼亚",
      DZ: "阿尔及利亚",
      AS: "美属萨摩亚",
      AD: "安道尔",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南极洲",
      AG: "安提瓜和巴布达",
      AR: "阿根廷",
      AM: "亚美尼亚",
      AW: "阿鲁巴",
      AU: "澳大利亚",
      AT: "奥地利",
      AZ: "阿塞拜疆",
      BS: "巴哈马",
      BH: "巴林",
      BD: "孟加拉国",
      BB: "巴巴多斯",
      BY: "白俄罗斯",
      BE: "比利时",
      BZ: "伯利兹",
      BJ: "贝宁",
      BM: "百慕大",
      BT: "不丹",
      BO: "玻利维亚",
      BQ: "荷兰加勒比区",
      BA: "波黑",
      BW: "博茨瓦纳",
      BV: "布韦岛",
      BR: "巴西",
      IO: "英属印度洋领地",
      BN: "汶莱",
      BG: "保加利亚",
      BF: "布基纳法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麦隆",
      CA: "加拿大",
      KY: "开曼群岛",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中国",
      CX: "圣诞岛",
      CC: "科科斯（基林）群岛",
      CO: "哥伦比亚",
      KM: "科摩罗",
      CG: "刚果共和国",
      CD: "刚果民主共和国",
      CK: "库克群岛",
      CR: "哥斯达黎加",
      CI: "象牙海岸",
      HR: "克罗地亚",
      CU: "古巴",
      CW: "库拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麦",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多尔",
      EG: "埃及",
      SV: "萨尔瓦多",
      GQ: "赤道几内亚",
      ER: "厄立特里亚",
      EE: "爱沙尼亚",
      SZ: "斯威士兰",
      ET: "埃塞俄比亚",
      FK: "福克兰群岛",
      FO: "法罗群岛",
      FJ: "斐济",
      FI: "芬兰",
      FR: "法国",
      GF: "法属圭亚那",
      PF: "法属波利尼西亚",
      TF: "法属南部和南极领地",
      GA: "加蓬",
      GM: "冈比亚",
      GE: "格鲁吉亚",
      DE: "德国",
      GH: "加纳",
      GI: "直布罗陀",
      GR: "希腊",
      GL: "格陵兰",
      GD: "格林纳达",
      GP: "瓜德罗普",
      GU: "关岛",
      GT: "危地马拉",
      GG: "根西",
      GN: "几内亚",
      GW: "几内亚比绍",
      GY: "圭亚那",
      HT: "海地",
      HM: "赫德岛和麦克唐纳群岛",
      VA: "梵蒂冈",
      HN: "洪都拉斯",
      HK: "中国香港",
      HU: "匈牙利",
      IS: "冰岛",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "爱尔兰",
      IM: "马恩岛",
      IL: "以色列",
      IT: "意大利",
      JM: "牙买加",
      JP: "日本",
      JE: "泽西",
      JO: "约旦",
      KZ: "哈萨克斯坦",
      KE: "肯尼亚",
      KI: "基里巴斯",
      KP: "北韩",
      KR: "韩国",
      KW: "科威特",
      KG: "吉尔吉斯斯坦",
      LA: "老挝",
      LV: "拉脱维亚",
      LB: "黎巴嫩",
      LS: "莱索托",
      LR: "利比里亚",
      LY: "利比亚",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "卢森堡",
      MO: "中国澳门",
      MG: "马达加斯加",
      MW: "马拉维",
      MY: "马来西亚",
      MV: "马尔代夫",
      ML: "马里",
      MT: "马耳他",
      MH: "马绍尔群岛",
      MQ: "马提尼克",
      MR: "毛里塔尼亚",
      MU: "毛里求斯",
      YT: "马约特",
      MX: "墨西哥",
      FM: "密克罗尼西亚联邦",
      MD: "摩尔多瓦",
      MC: "摩纳哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "缅甸",
      NA: "那米比亚",
      NR: "瑙鲁",
      NP: "尼泊尔",
      NL: "荷兰",
      NC: "新喀里多尼亚",
      NZ: "新西兰",
      NI: "尼加拉瓜",
      NE: "尼日尔",
      NG: "尼日利亚",
      NU: "纽埃",
      NF: "诺福克岛",
      MK: "北马其顿",
      MP: "北马里亚纳群岛",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕劳",
      PS: "巴勒斯坦",
      PA: "巴拿马",
      PG: "巴布亚新几内亚",
      PY: "巴拉圭",
      PE: "秘鲁",
      PH: "菲律宾",
      PN: "皮特凯恩群岛",
      PL: "波兰",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔尔",
      RE: "留尼汪",
      RO: "罗马尼亚",
      RU: "俄罗斯",
      RW: "卢旺达",
      BL: "圣巴泰勒米",
      SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
      KN: "圣基茨和尼维斯",
      LC: "圣卢西亚",
      MF: "法属圣马丁",
      PM: "圣皮埃尔和密克隆",
      VC: "圣文森特和格林纳丁斯",
      WS: "萨摩亚",
      SM: "圣马力诺",
      ST: "圣多美和普林西比",
      SA: "沙特阿拉伯",
      SN: "塞内加尔",
      RS: "塞尔维亚",
      SC: "塞舌尔",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷属圣马丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亚",
      SB: "所罗门群岛",
      SO: "索马里",
      ZA: "南非",
      GS: "南乔治亚和南桑威奇群岛",
      SS: "南苏丹",
      ES: "西班牙",
      LK: "斯里兰卡",
      SD: "苏丹",
      SR: "苏里南",
      SJ: "斯瓦尔巴和扬马延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "叙利亚",
      TW: "中国台湾",
      TJ: "塔吉克斯坦",
      TZ: "坦桑尼亚",
      TH: "泰国",
      TL: "东帝汶",
      TG: "多哥",
      TK: "托克劳",
      TO: "汤加",
      TT: "特立尼达和多巴哥",
      TN: "突尼斯",
      TR: "土耳其",
      TM: "土库曼斯坦",
      TC: "特克斯和凯科斯群岛",
      TV: "图瓦卢",
      UG: "乌干达",
      UA: "乌克兰",
      AE: "阿联酋",
      GB: "英国",
      US: "美国",
      UM: "美国本土外小岛屿",
      UY: "乌拉圭",
      UZ: "乌兹别克斯坦",
      VU: "瓦努阿图",
      VE: "委内瑞拉",
      VN: "越南",
      VG: "英属维尔京群岛",
      VI: "美属维尔京群岛",
      WF: "瓦利斯和富图纳",
      EH: "西撒哈拉",
      YE: "也门",
      ZM: "赞比亚",
      ZW: "津巴布韦"
    };
  }
  return {
    AF: "阿富汗",
    AX: "奥兰",
    AL: "阿尔巴尼亚",
    DZ: "阿尔及利亚",
    AS: "美属萨摩亚",
    AD: "安道尔",
    AO: "安哥拉",
    AI: "安圭拉",
    AQ: "南极洲",
    AG: "安提瓜和巴布达",
    AR: "阿根廷",
    AM: "亚美尼亚",
    AW: "阿鲁巴",
    AU: "澳大利亚",
    AT: "奥地利",
    AZ: "阿塞拜疆",
    BS: "巴哈马",
    BH: "巴林",
    BD: "孟加拉国",
    BB: "巴巴多斯",
    BY: "白俄罗斯",
    BE: "比利时",
    BZ: "伯利兹",
    BJ: "贝宁",
    BM: "百慕大",
    BT: "不丹",
    BO: "玻利维亚",
    BQ: "荷兰加勒比区",
    BA: "波黑",
    BW: "博茨瓦纳",
    BV: "布韦岛",
    BR: "巴西",
    IO: "英属印度洋领地",
    BN: "文莱",
    BG: "保加利亚",
    BF: "布基纳法索",
    BI: "布隆迪",
    CV: "佛得角",
    KH: "柬埔寨",
    CM: "喀麦隆",
    CA: "加拿大",
    KY: "开曼群岛",
    CF: "中非",
    TD: "乍得",
    CL: "智利",
    CN: "中国",
    CX: "圣诞岛",
    CC: "科科斯（基林）群岛",
    CO: "哥伦比亚",
    KM: "科摩罗",
    CG: "刚果共和国",
    CD: "刚果民主共和国",
    CK: "库克群岛",
    CR: "哥斯达黎加",
    CI: "科特迪瓦",
    HR: "克罗地亚",
    CU: "古巴",
    CW: "库拉索",
    CY: "塞浦路斯",
    CZ: "捷克",
    DK: "丹麦",
    DJ: "吉布提",
    DM: "多米尼克",
    DO: "多米尼加",
    EC: "厄瓜多尔",
    EG: "埃及",
    SV: "萨尔瓦多",
    GQ: "赤道几内亚",
    ER: "厄立特里亚",
    EE: "爱沙尼亚",
    SZ: "斯威士兰",
    ET: "埃塞俄比亚",
    FK: "福克兰群岛",
    FO: "法罗群岛",
    FJ: "斐济",
    FI: "芬兰",
    FR: "法国",
    GF: "法属圭亚那",
    PF: "法属波利尼西亚",
    TF: "法属南部和南极领地",
    GA: "加蓬",
    GM: "冈比亚",
    GE: "格鲁吉亚",
    DE: "德国",
    GH: "加纳",
    GI: "直布罗陀",
    GR: "希腊",
    GL: "格陵兰",
    GD: "格林纳达",
    GP: "瓜德罗普",
    GU: "关岛",
    GT: "危地马拉",
    GG: "根西",
    GN: "几内亚",
    GW: "几内亚比绍",
    GY: "圭亚那",
    HT: "海地",
    HM: "赫德岛和麦克唐纳群岛",
    VA: "梵蒂冈",
    HN: "洪都拉斯",
    HK: "中国香港",
    HU: "匈牙利",
    IS: "冰岛",
    IN: "印度",
    ID: "印尼",
    IR: "伊朗",
    IQ: "伊拉克",
    IE: "爱尔兰",
    IM: "马恩岛",
    IL: "以色列",
    IT: "意大利",
    JM: "牙买加",
    JP: "日本",
    JE: "泽西",
    JO: "约旦",
    KZ: "哈萨克斯坦",
    KE: "肯尼亚",
    KI: "基里巴斯",
    KP: "朝鲜",
    KR: "韩国",
    KW: "科威特",
    KG: "吉尔吉斯斯坦",
    LA: "老挝",
    LV: "拉脱维亚",
    LB: "黎巴嫩",
    LS: "莱索托",
    LR: "利比里亚",
    LY: "利比亚",
    LI: "列支敦士登",
    LT: "立陶宛",
    LU: "卢森堡",
    MO: "中国澳门",
    MG: "马达加斯加",
    MW: "马拉维",
    MY: "马来西亚",
    MV: "马尔代夫",
    ML: "马里",
    MT: "马耳他",
    MH: "马绍尔群岛",
    MQ: "马提尼克",
    MR: "毛里塔尼亚",
    MU: "毛里求斯",
    YT: "马约特",
    MX: "墨西哥",
    FM: "密克罗尼西亚联邦",
    MD: "摩尔多瓦",
    MC: "摩纳哥",
    MN: "蒙古",
    ME: "黑山",
    MS: "蒙特塞拉特",
    MA: "摩洛哥",
    MZ: "莫桑比克",
    MM: "缅甸",
    NA: "纳米比亚",
    NR: "瑙鲁",
    NP: "尼泊尔",
    NL: "荷兰",
    NC: "新喀里多尼亚",
    NZ: "新西兰",
    NI: "尼加拉瓜",
    NE: "尼日尔",
    NG: "尼日利亚",
    NU: "纽埃",
    NF: "诺福克岛",
    MK: "北马其顿",
    MP: "北马里亚纳群岛",
    NO: "挪威",
    OM: "阿曼",
    PK: "巴基斯坦",
    PW: "帕劳",
    PS: "巴勒斯坦",
    PA: "巴拿马",
    PG: "巴布亚新几内亚",
    PY: "巴拉圭",
    PE: "秘鲁",
    PH: "菲律宾",
    PN: "皮特凯恩群岛",
    PL: "波兰",
    PT: "葡萄牙",
    PR: "波多黎各",
    QA: "卡塔尔",
    RE: "留尼汪",
    RO: "罗马尼亚",
    RU: "俄罗斯",
    RW: "卢旺达",
    BL: "圣巴泰勒米",
    SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
    KN: "圣基茨和尼维斯",
    LC: "圣卢西亚",
    MF: "法属圣马丁",
    PM: "圣皮埃尔和密克隆",
    VC: "圣文森特和格林纳丁斯",
    WS: "萨摩亚",
    SM: "圣马力诺",
    ST: "圣多美和普林西比",
    SA: "沙特阿拉伯",
    SN: "塞内加尔",
    RS: "塞尔维亚",
    SC: "塞舌尔",
    SL: "塞拉利昂",
    SG: "新加坡",
    SX: "荷属圣马丁",
    SK: "斯洛伐克",
    SI: "斯洛文尼亚",
    SB: "所罗门群岛",
    SO: "索马里",
    ZA: "南非",
    GS: "南乔治亚和南桑威奇群岛",
    SS: "南苏丹",
    ES: "西班牙",
    LK: "斯里兰卡",
    SD: "苏丹",
    SR: "苏里南",
    SJ: "斯瓦尔巴和扬马延",
    SE: "瑞典",
    CH: "瑞士",
    SY: "叙利亚",
    TW: "中国臺湾",
    TJ: "塔吉克斯坦",
    TZ: "坦桑尼亚",
    TH: "泰国",
    TL: "东帝汶",
    TG: "多哥",
    TK: "托克劳",
    TO: "汤加",
    TT: "特立尼达和多巴哥",
    TN: "突尼斯",
    TR: "土耳其",
    TM: "土库曼斯坦",
    TC: "特克斯和凯科斯群岛",
    TV: "图瓦卢",
    UG: "乌干达",
    UA: "乌克兰",
    AE: "阿联酋",
    GB: "英国",
    US: "美国",
    UM: "美国本土外小岛屿",
    UY: "乌拉圭",
    UZ: "乌兹别克斯坦",
    VU: "瓦努阿图",
    VE: "委内瑞拉",
    VN: "越南",
    VG: "英属维尔京群岛",
    VI: "美属维尔京群岛",
    WF: "瓦利斯和富图纳",
    EH: "西撒哈拉",
    YE: "也门",
    ZM: "赞比亚",
    ZW: "津巴布韦"
  };
};
var getRegionNameList = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    return {
      AH: "安徽",
      BJ: "北京",
      CQ: "重慶",
      FJ: "福建",
      GD: "廣東",
      GS: "甘肅",
      GX: "廣西",
      GZ: "貴州",
      HA: "河南",
      HB: "湖北",
      HE: "河北",
      HI: "海南",
      HL: "黑龍江",
      HN: "湖南",
      JL: "吉林",
      JS: "江蘇",
      JX: "江西",
      LN: "遼寧",
      NM: "內蒙古",
      NX: "寧夏",
      QH: "青海",
      SC: "四川",
      SD: "山東",
      SH: "上海",
      SN: "陝西",
      SX: "山西",
      TJ: "天津",
      XJ: "新疆",
      XZ: "西藏",
      YN: "雲南",
      ZJ: "浙江"
    };
  }
  return {
    AH: "安徽",
    BJ: "北京",
    CQ: "重庆",
    FJ: "福建",
    GD: "广东",
    GS: "甘肃",
    GX: "广西",
    GZ: "贵州",
    HA: "河南",
    HB: "湖北",
    HE: "河北",
    HI: "海南",
    HL: "黑龙江",
    HN: "湖南",
    JL: "吉林",
    JS: "江苏",
    JX: "江西",
    LN: "辽宁",
    NM: "内蒙古",
    NX: "宁夏",
    QH: "青海",
    SC: "四川",
    SD: "山东",
    SH: "上海",
    SN: "陕西",
    SX: "山西",
    TJ: "天津",
    XJ: "新疆",
    XZ: "西藏",
    YN: "云南",
    ZJ: "浙江"
  };
};
//! src/GeoLocationReader/modules/util/getName.ts
var countryOrAreaList = getCountryOrAreaNameList();
var regionList = getRegionNameList();
var getCountryOrAreaName = (key) => {
  return countryOrAreaList[key];
};
var getRegionName = (key) => {
  return regionList[key];
};
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/GeoLocationReader/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ":": (0, import_ext_gadget2.localize)({
      en: ": ",
      ja: "：",
      zh: "："
    }),
    Unknown: (0, import_ext_gadget2.localize)({
      en: "Unknown Location",
      ja: "未知IP地域",
      "zh-hans": "未知IP属地",
      "zh-hant": "未知IP屬地"
    }),
    Location: (0, import_ext_gadget2.localize)({
      en: "IP Location",
      ja: "IP地域",
      "zh-hans": "IP属地",
      "zh-hant": "IP屬地"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var elementWrap = (spanClass, innerElement) => {
  const className = [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)];
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("section", {
      className
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("li", {
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className
  }, innerElement);
};
var indicator = (icon, indicatorText) => {
  const ipLocationDesc = getMessage("Location") + getMessage(":");
  const text = icon === "globe" ? ipLocationDesc + indicatorText : indicatorText !== null && indicatorText !== void 0 ? indicatorText : "";
  return /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: [CLASS_NAME_ICON, "".concat(CLASS_NAME_ICON, "-").concat(icon)],
    "aria-label": text
  }), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: CLASS_NAME_TEXT
  }, text));
};
var appendIcon = ({
  icon,
  indicatorText,
  spanClass
}) => {
  var _document$querySelect;
  if (!spanClass || !icon) {
    return;
  }
  const tag = elementWrap(spanClass, indicator(icon, indicatorText));
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
var appendGeoIcon = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const storePageTitle = "User:".concat(WG_RELEVANT_USER_NAME, "/GeoIP.json");
    try {
      var _ref2, _getCountryOrAreaName, _getRegionName;
      const params = {
        action: "query",
        titles: [storePageTitle],
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        rvprop: ["content"],
        rvslots: "main"
      };
      const data = yield api.post(params);
      const {
        country,
        countryOrArea,
        region
      } = JSON.parse(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        data["query"].pages[0].revisions[0].slots.main.content
      );
      const location = (_ref2 = country !== null && country !== void 0 ? country : countryOrArea) !== null && _ref2 !== void 0 ? _ref2 : "";
      const countryOrAreaName = (_getCountryOrAreaName = getCountryOrAreaName(location)) !== null && _getCountryOrAreaName !== void 0 ? _getCountryOrAreaName : getMessage("Unknown");
      const regionName = location === "CN" ? (_getRegionName = getRegionName(region)) !== null && _getRegionName !== void 0 ? _getRegionName : "" : "";
      appendIcon({
        icon: "globe",
        indicatorText: countryOrAreaName + regionName,
        spanClass: "green"
      });
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `appendGeoIcon` method:", error);
      appendIcon({
        icon: "helpNotice",
        indicatorText: getMessage("Unknown"),
        spanClass: "orange"
      });
    }
  });
  return function appendGeoIcon2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/modules/addElement.ts
var addElement = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    const queryUserGroupsParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      ususers: WG_RELEVANT_USER_NAME,
      usprop: "groups"
    };
    try {
      const {
        query: {
          users: [{
            groups
          }]
        }
      } = yield api.get(queryUserGroupsParams);
      if (groups.includes("bot") || groups.includes("qiuwen")) {
      } else {
        void appendGeoIcon();
      }
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `addElement` method:", error);
    }
  });
  return function addElement2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/GeoLocationReader.ts
(function geoLocationReader() {
  if (SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) || WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || !WG_RELEVANT_USER_NAME || !IS_USER_PAGE || !IS_WG_ACTION_VIEW) {
    return;
  }
  const pageName = new mw.Title(WG_PAGE_NAME).toText();
  const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, userNameSpaceNumber).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void addElement();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy91dGlsL2FwcGVuZEljb24udHN4IiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYXBwZW5kR2VvSWNvbi50c3giLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYWRkRWxlbWVudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvR2VvTG9jYXRpb25SZWFkZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19VU0VSX0VESVRfQ09VTlQ6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckVkaXRDb3VudCcpID8/IDA7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfVVNFUl9FRElUX0NPVU5ULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtZ2VvX2xvY2F0aW9uX3JlYWRlcic7XG5jb25zdCBDTEFTU19OQU1FX0lDT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19pY29uYDtcbmNvbnN0IENMQVNTX05BTUVfVEVYVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RleHRgO1xuXG5jb25zdCBJU19VU0VSX1BBR0U6IGJvb2xlYW4gPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXI7XG5jb25zdCBJU19XR19BQ1RJT05fVklFVzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3JztcblxuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19SRUxFVkFOVF9VU0VSX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRVc2VyTmFtZScpID8/ICcnO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9JQ09OLFxuXHRDTEFTU19OQU1FX1RFWFQsXG5cdElTX1VTRVJfUEFHRSxcblx0SVNfV0dfQUNUSU9OX1ZJRVcsXG5cdFdHX1BBR0VfTkFNRSxcblx0V0dfUkVMRVZBTlRfVVNFUl9OQU1FLFxuXHRXR19TS0lOLFxuXHRXR19VU0VSX0xBTkdVQUdFLFxufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uUmVhZGVyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldENvdW50cnlPckFyZWFOYW1lTGlzdCA9ICgpID0+IHtcblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKFdHX1VTRVJfTEFOR1VBR0UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWn6JitJyxcblx0XHRcdEFMOiAn6Zi/54i+5be05bC85LqeJyxcblx0XHRcdERaOiAn6Zi/54i+5Y+K5Yip5LqeJyxcblx0XHRcdEFTOiAn576O5bGs6Jap5pGp5LqeJyxcblx0XHRcdEFEOiAn5a6J6YGT54i+Jyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5qW15rSyJyxcblx0XHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6YGUJyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqe576O5bC85LqeJyxcblx0XHRcdEFXOiAn6Zi/6a2v5be0Jyxcblx0XHRcdEFVOiAn5r6z5rSyJyxcblx0XHRcdEFUOiAn5aWn5Zyw5YipJyxcblx0XHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRcdEJTOiAn5be05ZOI6aasJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5ZyLJyxcblx0XHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRcdEJZOiAn55m95L+E576F5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pmCJyxcblx0XHRcdEJaOiAn5Lyv5Yip6IyyJyxcblx0XHRcdEJKOiAn6LKd5a+nJyxcblx0XHRcdEJNOiAn55m+5oWV6YGUJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57at5LqeJyxcblx0XHRcdEJROiAn6I236Jit5Yqg5YuS5q+U5Y2AJyxcblx0XHRcdEJBOiAn5rOi6buRJyxcblx0XHRcdEJXOiAn5Y2a6Iyo55Om57SNJyxcblx0XHRcdEJWOiAn5biD6Z+L5bO2Jyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGs5Y2w5bqm5rSL6aCY5ZywJyxcblx0XHRcdEJOOiAn5rG26JCKJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqeJyxcblx0XHRcdEJGOiAn5biD5Z+657SN5rOV57SiJyxcblx0XHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bql6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn6ZaL5pu8576k5bO2Jyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5LmN5b6XJyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5ZyLJyxcblx0XHRcdENYOiAn6IGW6KqV5bO2Jyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bO2Jyxcblx0XHRcdENPOiAn5ZOl5YCr5q+U5LqeJyxcblx0XHRcdEtNOiAn56eR5pGp576FJyxcblx0XHRcdENHOiAn5Ymb5p6c5YWx5ZKM5ZyLJyxcblx0XHRcdENEOiAn5Ymb5p6c5rCR5Li75YWx5ZKM5ZyLJyxcblx0XHRcdENLOiAn5bqr5YWL576k5bO2Jyxcblx0XHRcdENSOiAn5ZOl5pav6YGU6buO5YqgJyxcblx0XHRcdENJOiAn56eR54m56L+q55OmJyxcblx0XHRcdEhSOiAn5YWL576F5Zyw5LqeJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5bqr5ouJ57SiJyxcblx0XHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqlJyxcblx0XHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSa54i+Jyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6Jap54i+55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT55W/5YWn5LqeJyxcblx0XHRcdEVSOiAn5Y6E56uL54m56YeM5LqeJyxcblx0XHRcdEVFOiAn5oSb5rKZ5bC85LqeJyxcblx0XHRcdFNaOiAn5pav5aiB5aOr6JitJyxcblx0XHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqeJyxcblx0XHRcdEZLOiAn56aP5YWL6Jit576k5bO2Jyxcblx0XHRcdEZPOiAn5rOV576F576k5bO2Jyxcblx0XHRcdEZKOiAn5paQ5r+fJyxcblx0XHRcdEZJOiAn6Iqs6JitJyxcblx0XHRcdEZSOiAn5rOV5ZyLJyxcblx0XHRcdEdGOiAn5rOV5bGs5Zyt5Lqe6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGs5rOi5Yip5bC86KW/5LqeJyxcblx0XHRcdFRGOiAn5rOV5bGs5Y2X6YOo5ZKM5Y2X5qW16aCY5ZywJyxcblx0XHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRcdEdNOiAn5bKh5q+U5LqeJyxcblx0XHRcdEdFOiAn5qC86a2v5ZCJ5LqeJyxcblx0XHRcdERFOiAn5b635ZyLJyxcblx0XHRcdEdIOiAn5Yqg57SNJyxcblx0XHRcdEdJOiAn55u05biD576F6ZmAJyxcblx0XHRcdEdSOiAn5biM6IeYJyxcblx0XHRcdEdMOiAn5qC86Zm16JitJyxcblx0XHRcdEdEOiAn5qC85p6X57SN6YGUJyxcblx0XHRcdEdQOiAn55Oc5b63576F5pmuJyxcblx0XHRcdEdVOiAn6Zec5bO2Jyxcblx0XHRcdEdUOiAn5Y2x5Zyw6aas5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn55W/5YWn5LqeJyxcblx0XHRcdEdXOiAn55W/5YWn5Lqe5q+U57S5Jyxcblx0XHRcdEdZOiAn5Zyt5Lqe6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bO25ZKM6bql5YWL5ZSQ57SN576k5bO2Jyxcblx0XHRcdFZBOiAn5qK16JKC5bKhJyxcblx0XHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5ZyL6aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bO2Jyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn5oSb54i+6JitJyxcblx0XHRcdElNOiAn5Lq65bO2Jyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ6LK35YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5r6k6KW/Jyxcblx0XHRcdEpPOiAn57SE5pemJyxcblx0XHRcdEtaOiAn5ZOI6Jap5YWLJyxcblx0XHRcdEtFOiAn6IKv6ZuFJyxcblx0XHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+TJyxcblx0XHRcdEtSOiAn6Z+T5ZyLJyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ54i+5ZCJ5pavJyxcblx0XHRcdExBOiAn6ICB5pK+Jyxcblx0XHRcdExWOiAn5ouJ6ISr57at5LqeJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6JCK57Si5omYJyxcblx0XHRcdExSOiAn5Yip5q+U6YeM5LqeJyxcblx0XHRcdExZOiAn5Yip5q+U5LqeJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn55un5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5ZyL5r6z6ZaAJyxcblx0XHRcdE1HOiAn6aas6YGU5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6aas5ouJ57atJyxcblx0XHRcdE1ZOiAn6aas5L6G6KW/5LqeJyxcblx0XHRcdE1WOiAn6aas54i+5Luj5aSrJyxcblx0XHRcdE1MOiAn6aas6YeMJyxcblx0XHRcdE1UOiAn6aas6ICz5LuWJyxcblx0XHRcdE1IOiAn6aas57S554i+576k5bO2Jyxcblx0XHRcdE1ROiAn6aas5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn5q+b6YeM5aGU5bC85LqeJyxcblx0XHRcdE1VOiAn5q+b6YeM6KOY5pavJyxcblx0XHRcdFlUOiAn6aas57SE54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL576F5bC86KW/5Lqe6IGv6YKmJyxcblx0XHRcdE1EOiAn5pGp54i+5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57SN5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6buR5bGxJyxcblx0XHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRcdE1NOiAn57es55S4Jyxcblx0XHRcdE5BOiAn57SN57Gz5q+U5LqeJyxcblx0XHRcdE5SOiAn55GZ6a2vJyxcblx0XHRcdE5QOiAn5bC85rOK54i+Jyxcblx0XHRcdE5MOiAn6I236JitJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqeJyxcblx0XHRcdE5aOiAn5paw6KW/6JitJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pel54i+Jyxcblx0XHRcdE5HOiAn5bC85pel5Yip5LqeJyxcblx0XHRcdE5VOiAn57SQ5Z+DJyxcblx0XHRcdE5GOiAn6Ku+56aP5YWL5bO2Jyxcblx0XHRcdE1LOiAn5YyX6aas5YW26aCTJyxcblx0XHRcdE1QOiAn5YyX6aas5Yip5a6J57SN576k5bO2Jyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5biV5YueJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6aasJyxcblx0XHRcdFBHOiAn5be05biD5Lqe5paw55W/5YWn5LqeJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6a2vJyxcblx0XHRcdFBIOiAn6I+y5b6L6LOTJyxcblx0XHRcdFBOOiAn55qu54m56IKv576k5bO2Jyxcblx0XHRcdFBMOiAn5rOi6JitJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h5aGU54i+Jyxcblx0XHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRcdFJPOiAn576F6aas5bC85LqeJyxcblx0XHRcdFJVOiAn5L+E576F5pavJyxcblx0XHRcdFJXOiAn55un5pe66YGUJyxcblx0XHRcdEJMOiAn6IGW5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn6IGW5rW35YCr5aic44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLemBlOW6q+WwvOS6nicsXG5cdFx0XHRLTjogJ+iBluWfuuiMqOWSjOWwvOe2reaWrycsXG5cdFx0XHRMQzogJ+iBluebp+ilv+S6nicsXG5cdFx0XHRNRjogJ+azleWxrOiBlummrOS4gScsXG5cdFx0XHRQTTogJ+iBluearuWfg+eIvuWSjOWvhuWFi+mahicsXG5cdFx0XHRWQzogJ+iBluaWh+ajrueJueWSjOagvOael+e0jeS4geaWrycsXG5cdFx0XHRXUzogJ+iWqeaRqeS6nicsXG5cdFx0XHRTTTogJ+iBlummrOWKm+irvicsXG5cdFx0XHRTVDogJ+iBluWkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeWcsOmYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWFp+WKoOeIvicsXG5cdFx0XHRSUzogJ+WhnueIvue2reS6nicsXG5cdFx0XHRTQzogJ+WhnuiIjOeIvicsXG5cdFx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxrOiBlummrOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6nicsXG5cdFx0XHRTQjogJ+aJgOe+hemWgOe+pOWzticsXG5cdFx0XHRTTzogJ+e0oummrOmHjCcsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+WWrOayu+S6nuWSjOWNl+ahkeWogeWlh+e+pOWzticsXG5cdFx0XHRTUzogJ+WNl+iYh+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOiYreWNoScsXG5cdFx0XHRTRDogJ+iYh+S4uScsXG5cdFx0XHRTUjogJ+iYh+mHjOWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpueIvuW3tOWSjOaPmummrOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+aVmOWIqeS6nicsXG5cdFx0XHRUVzogJ+S4reWci+iHuueBoycsXG5cdFx0XHRUSjogJ+WhlOWQieWFiycsXG5cdFx0XHRUWjogJ+WdpuahkeWwvOS6nicsXG5cdFx0XHRUSDogJ+azsOWciycsXG5cdFx0XHRUTDogJ+adseW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WLnicsXG5cdFx0XHRUTzogJ+a5r+WKoCcsXG5cdFx0XHRUVDogJ+WNg+mHjOmBlOWSjOWkmuW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOilv+S6nicsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6q+abvCcsXG5cdFx0XHRUQzogJ+eJueWFi+aWr+WSjOWHseenkeaWr+e+pOWzticsXG5cdFx0XHRUVjogJ+WclueTpuebpycsXG5cdFx0XHRVRzogJ+eDj+W5sumBlCcsXG5cdFx0XHRVQTogJ+eDj+WFi+iYrScsXG5cdFx0XHRBRTogJ+mYv+iBr+mFiycsXG5cdFx0XHRHQjogJ+iLseWciycsXG5cdFx0XHRVUzogJ+e+juWciycsXG5cdFx0XHRVTTogJ+e+juWci+acrOWcn+WkluWwj+WztuW2vCcsXG5cdFx0XHRVWTogJ+eDj+aLieWcrScsXG5cdFx0XHRVWjogJ+eDj+iMsuWIpeWFiycsXG5cdFx0XHRWVTogJ+eTpuWKqumYv+WclicsXG5cdFx0XHRWRTogJ+WnlOWFp+eRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxrOiZleWls+e+pOWzticsXG5cdFx0XHRWSTogJ+e+juWxrOiZleWls+e+pOWzticsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWclue0jScsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+S5n+mWgCcsXG5cdFx0XHRaTTogJ+i0iuavlOS6nicsXG5cdFx0XHRaVzogJ+a0peW3tOW4g+mfiycsXG5cdFx0fTtcblx0fSBlbHNlIGlmIChbJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronlnLDljaHlj4rlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfkup7loZ7mi5znhLYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tosp3lpJonLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfosp3ph4zmlq8nLFxuXHRcdFx0Qko6ICfosp3ljZcnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6LotasnLFxuXHRcdFx0Qlc6ICfms6LmnK3pgqMnLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPlkInntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfokrLpmoblnLAnLFxuXHRcdFx0Q1Y6ICfntq3lvrfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfmn6XlvrcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfokZvmkaknLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/lpKfpu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvoXln4Popb/kup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflj6Tmi4nntKInLFxuXHRcdFx0Q1k6ICfos73mma7li5Lmlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPlnLAnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrmmI7lsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJonLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlub7lhafkup4nLFxuXHRcdFx0RVI6ICfljoTliKnlnoLkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICflj7Lnk6bluJ3lsLwnLFxuXHRcdFx0RVQ6ICfooaPntKLmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsaznjrvph4zlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDlva0nLFxuXHRcdFx0R006ICfnlJjmr5Tkup4nLFxuXHRcdFx0R0U6ICfllqzmsrvkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfov6bntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLznkZ7pgqPpgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfnk5zlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflub7lhafkup4nLFxuXHRcdFx0R1c6ICflub7lhafkup7mr5TntKInLFxuXHRcdFx0R1k6ICfok4vkup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICflro/pg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfmm7zls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfnvqnlpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/kup4nLFxuXHRcdFx0S0k6ICflkInph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfos7TntKLmiZgnLFxuXHRcdFx0TFI6ICfos7Tmr5TnkZ7kup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlabmlq/nmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nlqIEnLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7lnLDlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzniL7ku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfojIXliKnloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmqKHph4zopb/mlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfokpnnibnlhaflk6XnvoUnLFxuXHRcdFx0TVM6ICfokpnlk7Loh5gnLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvkuInmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfoq77pra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfntJDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6UnLFxuXHRcdFx0Tkc6ICflpYjlj4rliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJvnkIknLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7ntJDlub7lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHpgZQnLFxuXHRcdFx0UkU6ICfnlZnlsLzml7onLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6flronpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbfok67lqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5YWL6YeM5pav5aSa56aP5Y+K5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW6Zyy6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu6IC26IiH5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu5Y+K5qC855Ge6YKj5LiBJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yip6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54OP5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe5bit54i+Jyxcblx0XHRcdFNMOiAn542F5a2Q5bGxJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb57at5bC85LqeJyxcblx0XHRcdFNCOiAn57Si576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas5Yip5LqeJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH5Yip5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5bCa5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5p2x5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5Y+K5omY5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn5Zyf5YWL5Yex5Y+v576k5bO2Jyxcblx0XHRcdFRWOiAn5ZCQ55Om6a2vJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGvJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn6JCs6YKj5p2cJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn6JGJ6ZaAJyxcblx0XHRcdFpNOiAn5bCa5q+U5LqeJyxcblx0XHRcdFpXOiAn6L6b5be05aiBJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtbXknLCAnemgtc2cnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0XHRBTDogJ+mYv+WwlOW3tOWwvOS6micsXG5cdFx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0XHRBRDogJ+WuiemBk+WwlCcsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+aegea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6mue+juWwvOS6micsXG5cdFx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0XHRBVDogJ+WlpeWcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe9l+aWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0XHRCSjogJ+i0neWugScsXG5cdFx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee7tOS6micsXG5cdFx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue6sycsXG5cdFx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxnuWNsOW6pua0i+mihuWcsCcsXG5cdFx0XHRCTjogJ+axtuiOsScsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0XHRCRjogJ+W4g+Wfuue6s+azlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+W8gOabvOe+pOWymycsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWbvScsXG5cdFx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWymycsXG5cdFx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0XHRDRzogJ+WImuaenOWFseWSjOWbvScsXG5cdFx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0XHRDUjogJ+WTpeaWr+i+vum7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6picsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6micsXG5cdFx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6micsXG5cdFx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0XHRGSjogJ+aWkOa1jicsXG5cdFx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0XHRGUjogJ+azleWbvScsXG5cdFx0XHRHRjogJ+azleWxnuWcreS6mumCoycsXG5cdFx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0XHRERTogJ+W+t+WbvScsXG5cdFx0XHRHSDogJ+WKoOe6sycsXG5cdFx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0XHRHUjogJ+W4jOiFiicsXG5cdFx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0XHRHUDogJ+eTnOW+t+e9l+aZricsXG5cdFx0XHRHVTogJ+WFs+WymycsXG5cdFx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0XHRHWTogJ+WcreS6mumCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0XHRWQTogJ+aiteiSguWGiCcsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWymycsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+eIseWwlOWFsCcsXG5cdFx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+azveilvycsXG5cdFx0XHRKTzogJ+e6puaXpicsXG5cdFx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0XHRLRTogJ+iCr+WwvOS6micsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfqScsXG5cdFx0XHRLUjogJ+mfqeWbvScsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0XHRMQTogJ+iAgeaMnScsXG5cdFx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iOsee0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0XHRNTzogJ+S4reWbvea+s+mXqCcsXG5cdFx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0XHRNWTogJ+mprOadpeilv+S6micsXG5cdFx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0XHRNTDogJ+mprOmHjCcsXG5cdFx0XHRNVDogJ+mprOiAs+S7licsXG5cdFx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6micsXG5cdFx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee6s+WTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e8heeUuCcsXG5cdFx0XHROQTogJ+mCo+exs+avlOS6micsXG5cdFx0XHROUjogJ+eRmemygScsXG5cdFx0XHROUDogJ+WwvOaziuWwlCcsXG5cdFx0XHROTDogJ+iNt+WFsCcsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0XHROWjogJ+aWsOilv+WFsCcsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6micsXG5cdFx0XHROVTogJ+e6veWfgycsXG5cdFx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0XHRNSzogJ+WMl+mprOWFtumhvycsXG5cdFx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWKsycsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmygScsXG5cdFx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0XHRQTjogJ+earueJueWHr+aBqee+pOWymycsXG5cdFx0XHRQTDogJ+azouWFsCcsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e9l+mprOWwvOS6micsXG5cdFx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0XHRCTDogJ+Wco+W3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdFx0TEM6ICflnKPljaLopb/kuponLFxuXHRcdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICflnKPmlofmo67nibnlkozmoLzmnpfnurPkuIHmlq8nLFxuXHRcdFx0V1M6ICfokKjmkankuponLFxuXHRcdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFx0U1Q6ICflnKPlpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFx0UlM6ICfloZ7lsJTnu7TkuponLFxuXHRcdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkuponLFxuXHRcdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFx0U086ICfntKLpqazph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFx0U1I6ICfoi4/ph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFx0VFc6ICfkuK3lm73lj7Dmub4nLFxuXHRcdFx0VEo6ICfloZTlkInlhYvmlq/lnaYnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFx0VEg6ICfms7Dlm70nLFxuXHRcdFx0VEw6ICfkuJzluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFx0VE86ICfmsaTliqAnLFxuXHRcdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFx0VFY6ICflm77nk6bljaInLFxuXHRcdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdFx0QUU6ICfpmL/ogZTphYsnLFxuXHRcdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFx0VVM6ICfnvo7lm70nLFxuXHRcdFx0VU06ICfnvo7lm73mnKzlnJ/lpJblsI/lspvlsb8nLFxuXHRcdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lm74nLFxuXHRcdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn6YnLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdERaOiAn6Zi/5bCU5Y+K5Yip5LqaJyxcblx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6L6+Jyxcblx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdEFXOiAn6Zi/6bKB5be0Jyxcblx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0Qkg6ICflt7TmnpcnLFxuXHRcdEJEOiAn5a2f5Yqg5ouJ5Zu9Jyxcblx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdEJFOiAn5q+U5Yip5pe2Jyxcblx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0Qko6ICfotJ3lroEnLFxuXHRcdEJNOiAn55m+5oWV5aSnJyxcblx0XHRCVDogJ+S4jeS4uScsXG5cdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdEJROiAn6I235YWw5Yqg5YuS5q+U5Yy6Jyxcblx0XHRCQTogJ+azoum7kScsXG5cdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdEJWOiAn5biD6Z+m5bKbJyxcblx0XHRCUjogJ+W3tOilvycsXG5cdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdEJOOiAn5paH6I6xJyxcblx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdENNOiAn5ZaA6bqm6ZqGJyxcblx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdENGOiAn5Lit6Z2eJyxcblx0XHRURDogJ+S5jeW+lycsXG5cdFx0Q0w6ICfmmbrliKknLFxuXHRcdENOOiAn5Lit5Zu9Jyxcblx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdENPOiAn5ZOl5Lym5q+U5LqaJyxcblx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdENEOiAn5Yia5p6c5rCR5Li75YWx5ZKM5Zu9Jyxcblx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdENJOiAn56eR54m56L+q55OmJyxcblx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdENXOiAn5bqT5ouJ57SiJyxcblx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0Q1o6ICfmjbflhYsnLFxuXHRcdERLOiAn5Li56bqmJyxcblx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0RUc6ICfln4Plj4onLFxuXHRcdFNWOiAn6JCo5bCU55Om5aSaJyxcblx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdEVFOiAn54ix5rKZ5bC85LqaJyxcblx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdEZLOiAn56aP5YWL5YWw576k5bKbJyxcblx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0Rko6ICfmlpDmtY4nLFxuXHRcdEZJOiAn6Iqs5YWwJyxcblx0XHRGUjogJ+azleWbvScsXG5cdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFBGOiAn5rOV5bGe5rOi5Yip5bC86KW/5LqaJyxcblx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0R0E6ICfliqDok6wnLFxuXHRcdEdNOiAn5YaI5q+U5LqaJyxcblx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0REU6ICflvrflm70nLFxuXHRcdEdIOiAn5Yqg57qzJyxcblx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0R1I6ICfluIzohYonLFxuXHRcdEdMOiAn5qC86Zm15YWwJyxcblx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdEdVOiAn5YWz5bKbJyxcblx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0R0c6ICfmoLnopb8nLFxuXHRcdEdOOiAn5Yeg5YaF5LqaJyxcblx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdEhUOiAn5rW35ZywJyxcblx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0VkE6ICfmorXokoLlhognLFxuXHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0SFU6ICfljIjniZnliKknLFxuXHRcdElTOiAn5Yaw5bKbJyxcblx0XHRJTjogJ+WNsOW6picsXG5cdFx0SUQ6ICfljbDlsLwnLFxuXHRcdElSOiAn5LyK5pyXJyxcblx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdElNOiAn6ams5oGp5bKbJyxcblx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdEpNOiAn54mZ5Lmw5YqgJyxcblx0XHRKUDogJ+aXpeacrCcsXG5cdFx0SkU6ICfms73opb8nLFxuXHRcdEpPOiAn57qm5pemJyxcblx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRLUDogJ+acnemynCcsXG5cdFx0S1I6ICfpn6nlm70nLFxuXHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0TEE6ICfogIHmjJ0nLFxuXHRcdExWOiAn5ouJ6ISx57u05LqaJyxcblx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdExSOiAn5Yip5q+U6YeM5LqaJyxcblx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdE1HOiAn6ams6L6+5Yqg5pav5YqgJyxcblx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdE1WOiAn6ams5bCU5Luj5aSrJyxcblx0XHRNTDogJ+mprOmHjCcsXG5cdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdE1IOiAn6ams57uN5bCU576k5bKbJyxcblx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdE1VOiAn5q+b6YeM5rGC5pavJyxcblx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdEZNOiAn5a+G5YWL572X5bC86KW/5Lqa6IGU6YKmJyxcblx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRNRTogJ+m7keWxsScsXG5cdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0TU06ICfnvIXnlLgnLFxuXHRcdE5BOiAn57qz57Gz5q+U5LqaJyxcblx0XHROUjogJ+eRmemygScsXG5cdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdE5MOiAn6I235YWwJyxcblx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdE5VOiAn57q95Z+DJyxcblx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdE1QOiAn5YyX6ams6YeM5Lqa57qz576k5bKbJyxcblx0XHROTzogJ+aMquWogScsXG5cdFx0T006ICfpmL/mm7wnLFxuXHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRQVzogJ+W4leWKsycsXG5cdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFBBOiAn5be05ou/6amsJyxcblx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFBFOiAn56eY6bKBJyxcblx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFBMOiAn5rOi5YWwJyxcblx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFFBOiAn5Y2h5aGU5bCUJyxcblx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFJVOiAn5L+E572X5pavJyxcblx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFNIOiAn5Zyj6LWr5YuS5ou/44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLei+vuW6k+WwvOS6micsXG5cdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRNRjogJ+azleWxnuWco+mprOS4gScsXG5cdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRXUzogJ+iQqOaRqeS6micsXG5cdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRTQTogJ+aymeeJuemYv+aLieS8rycsXG5cdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRTQzogJ+WhnuiIjOWwlCcsXG5cdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRTWDogJ+iNt+WxnuWco+mprOS4gScsXG5cdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRTQjogJ+aJgOe9l+mXqOe+pOWymycsXG5cdFx0U086ICfntKLpqazph4wnLFxuXHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRHUzogJ+WNl+S5lOayu+S6muWSjOWNl+ahkeWogeWlh+e+pOWymycsXG5cdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRMSzogJ+aWr+mHjOWFsOWNoScsXG5cdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRTSjogJ+aWr+eTpuWwlOW3tOWSjOaJrOmprOW7ticsXG5cdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdENIOiAn55Ge5aOrJyxcblx0XHRTWTogJ+WPmeWIqeS6micsXG5cdFx0VFc6ICfkuK3lm73oh7rmub4nLFxuXHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRUWjogJ+WdpuahkeWwvOS6micsXG5cdFx0VEg6ICfms7Dlm70nLFxuXHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRURzogJ+WkmuWTpScsXG5cdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFRPOiAn5rGk5YqgJyxcblx0XHRUVDogJ+eJueeri+WwvOi+vuWSjOWkmuW3tOWTpScsXG5cdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRUTTogJ+Wcn+W6k+abvOaWr+WdpicsXG5cdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRVRzogJ+S5jOW5sui+vicsXG5cdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRHQjogJ+iLseWbvScsXG5cdFx0VVM6ICfnvo7lm70nLFxuXHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRVWTogJ+S5jOaLieWcrScsXG5cdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRWRTogJ+WnlOWGheeRnuaLiScsXG5cdFx0Vk46ICfotorljZcnLFxuXHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRWSTogJ+e+juWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRZRTogJ+S5n+mXqCcsXG5cdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0fTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWVMaXN0ID0gKCkgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUg6ICflronlvr0nLFxuXHRcdFx0Qko6ICfljJfkuqwnLFxuXHRcdFx0Q1E6ICfph43mhbYnLFxuXHRcdFx0Rko6ICfnpo/lu7onLFxuXHRcdFx0R0Q6ICflu6PmnbEnLFxuXHRcdFx0R1M6ICfnlJjogoUnLFxuXHRcdFx0R1g6ICflu6Popb8nLFxuXHRcdFx0R1o6ICfosrTlt54nLFxuXHRcdFx0SEE6ICfmsrPljZcnLFxuXHRcdFx0SEI6ICfmuZbljJcnLFxuXHRcdFx0SEU6ICfmsrPljJcnLFxuXHRcdFx0SEk6ICfmtbfljZcnLFxuXHRcdFx0SEw6ICfpu5Hpvo3msZ8nLFxuXHRcdFx0SE46ICfmuZbljZcnLFxuXHRcdFx0Skw6ICflkInmnpcnLFxuXHRcdFx0SlM6ICfmsZ/omIcnLFxuXHRcdFx0Slg6ICfmsZ/opb8nLFxuXHRcdFx0TE46ICfpgbzlr6cnLFxuXHRcdFx0Tk06ICflhafokpnlj6QnLFxuXHRcdFx0Tlg6ICflr6flpI8nLFxuXHRcdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFx0U0M6ICflm5vlt50nLFxuXHRcdFx0U0Q6ICflsbHmnbEnLFxuXHRcdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFx0U046ICfpmZ3opb8nLFxuXHRcdFx0U1g6ICflsbHopb8nLFxuXHRcdFx0VEo6ICflpKnmtKUnLFxuXHRcdFx0WEo6ICfmlrDnloYnLFxuXHRcdFx0WFo6ICfopb/ol48nLFxuXHRcdFx0WU46ICfpm7LljZcnLFxuXHRcdFx0Wko6ICfmtZnmsZ8nLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFIOiAn5a6J5b69Jyxcblx0XHRCSjogJ+WMl+S6rCcsXG5cdFx0Q1E6ICfph43luoYnLFxuXHRcdEZKOiAn56aP5bu6Jyxcblx0XHRHRDogJ+W5v+S4nCcsXG5cdFx0R1M6ICfnlJjogoMnLFxuXHRcdEdYOiAn5bm/6KW/Jyxcblx0XHRHWjogJ+i0teW3nicsXG5cdFx0SEE6ICfmsrPljZcnLFxuXHRcdEhCOiAn5rmW5YyXJyxcblx0XHRIRTogJ+ays+WMlycsXG5cdFx0SEk6ICfmtbfljZcnLFxuXHRcdEhMOiAn6buR6b6Z5rGfJyxcblx0XHRITjogJ+a5luWNlycsXG5cdFx0Skw6ICflkInmnpcnLFxuXHRcdEpTOiAn5rGf6IuPJyxcblx0XHRKWDogJ+axn+ilvycsXG5cdFx0TE46ICfovr3lroEnLFxuXHRcdE5NOiAn5YaF6JKZ5Y+kJyxcblx0XHROWDogJ+WugeWkjycsXG5cdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFNDOiAn5Zub5bedJyxcblx0XHRTRDogJ+WxseS4nCcsXG5cdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFNOOiAn6ZmV6KW/Jyxcblx0XHRTWDogJ+WxseilvycsXG5cdFx0VEo6ICflpKnmtKUnLFxuXHRcdFhKOiAn5paw55aGJyxcblx0XHRYWjogJ+ilv+iXjycsXG5cdFx0WU46ICfkupHljZcnLFxuXHRcdFpKOiAn5rWZ5rGfJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH07XG4iLCAiaW1wb3J0IHtnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIGdldFJlZ2lvbk5hbWVMaXN0fSBmcm9tICcuL25hbWUnO1xuXG50eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldENvdW50cnlPckFyZWFOYW1lTGlzdD47XG50eXBlIFJlZ2lvbk5hbWVMaXN0ID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0UmVnaW9uTmFtZUxpc3Q+O1xuXG5jb25zdCBjb3VudHJ5T3JBcmVhTGlzdDogQ291bnRyeU9yQXJlYU5hbWVMaXN0ID0gZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0KCk7XG5jb25zdCByZWdpb25MaXN0OiBSZWdpb25OYW1lTGlzdCA9IGdldFJlZ2lvbk5hbWVMaXN0KCk7XG5cbmNvbnN0IGdldENvdW50cnlPckFyZWFOYW1lID0gPFQgZXh0ZW5kcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+KGtleTogVCk6IENvdW50cnlPckFyZWFOYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiBjb3VudHJ5T3JBcmVhTGlzdFtrZXldO1xufTtcblxuY29uc3QgZ2V0UmVnaW9uTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgUmVnaW9uTmFtZUxpc3Q+KGtleTogVCk6IFJlZ2lvbk5hbWVMaXN0W1RdIHwgdW5kZWZpbmVkID0+IHtcblx0cmV0dXJuIHJlZ2lvbkxpc3Rba2V5XTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfSUNPTiwgQ0xBU1NfTkFNRV9URVhULCBXR19TS0lOfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoc3BhbkNsYXNzOiAnZ3JlZW4nIHwgJ29yYW5nZScsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IFtDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gXTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufTtcblxuY29uc3QgaW5kaWNhdG9yID0gKGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZScsIGluZGljYXRvclRleHQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBpcExvY2F0aW9uRGVzYzogc3RyaW5nID0gZ2V0TWVzc2FnZSgnTG9jYXRpb24nKSArIGdldE1lc3NhZ2UoJzonKTtcblx0Y29uc3QgdGV4dDogc3RyaW5nID0gaWNvbiA9PT0gJ2dsb2JlJyA/IGlwTG9jYXRpb25EZXNjICsgaW5kaWNhdG9yVGV4dCA6IGluZGljYXRvclRleHQgPz8gJyc7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9JQ09OLCBgJHtDTEFTU19OQU1FX0lDT059LSR7aWNvbn1gXX0gYXJpYS1sYWJlbD17dGV4dH0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RFWFR9Pnt0ZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoe1xuXHRpY29uLFxuXHRpbmRpY2F0b3JUZXh0LFxuXHRzcGFuQ2xhc3MsXG59OiB7XG5cdGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZSc7XG5cdGluZGljYXRvclRleHQ6IHN0cmluZztcblx0c3BhbkNsYXNzOiAnZ3JlZW4nIHwgJ29yYW5nZSc7XG59KTogdm9pZCA9PiB7XG5cdGlmICghc3BhbkNsYXNzIHx8ICFpY29uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKHNwYW5DbGFzcywgaW5kaWNhdG9yKGljb24sIGluZGljYXRvclRleHQpKTtcblx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdIGFzIEhUTUxFbGVtZW50KT8ucHJlcGVuZCh0YWcpO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdGphOiAn77yaJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHRVbmtub3duOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Vua25vd24gTG9jYXRpb24nLFxuXHRcdFx0amE6ICfmnKrnn6VJUOWcsOWfnycsXG5cdFx0XHQnemgtaGFucyc6ICfmnKrnn6VJUOWxnuWcsCcsXG5cdFx0XHQnemgtaGFudCc6ICfmnKrnn6VJUOWxrOWcsCcsXG5cdFx0fSksXG5cdFx0TG9jYXRpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSVAgTG9jYXRpb24nLFxuXHRcdFx0amE6ICdJUOWcsOWfnycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWxnuWcsCcsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWxrOWcsCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfSBmcm9tICcuL3V0aWwvZ2V0TmFtZSc7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vdXRpbC9hcHBlbmRJY29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYXBwZW5kR2VvSWNvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHR0aXRsZXM6IFtzdG9yZVBhZ2VUaXRsZV0sXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRydnByb3A6IFsnY29udGVudCddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGNvdW50cnksXG5cdFx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdFx0cmVnaW9uLFxuXHRcdH06IFN0b3JlR2VvSW5mbyAmIHtcblx0XHRcdGNvdW50cnk/OiBzdHJpbmc7XG5cdFx0fSA9IEpTT04ucGFyc2UoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0ZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50XG5cdFx0KTtcblxuXHRcdGNvbnN0IGxvY2F0aW9uOiBTdG9yZUdlb0luZm9bJ2NvdW50cnlPckFyZWEnXSA9IGNvdW50cnkgPz8gY291bnRyeU9yQXJlYSA/PyAnJztcblx0XHRjb25zdCBjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nID1cblx0XHRcdGdldENvdW50cnlPckFyZWFOYW1lKGxvY2F0aW9uIGFzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdCkgPz8gZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWU6IHN0cmluZyA9IGxvY2F0aW9uID09PSAnQ04nID8gZ2V0UmVnaW9uTmFtZShyZWdpb24gYXMga2V5b2YgUmVnaW9uTmFtZUxpc3QpID8/ICcnIDogJyc7XG5cblx0XHRhcHBlbmRJY29uKHtcblx0XHRcdGljb246ICdnbG9iZScsXG5cdFx0XHRpbmRpY2F0b3JUZXh0OiBjb3VudHJ5T3JBcmVhTmFtZSArIHJlZ2lvbk5hbWUsXG5cdFx0XHRzcGFuQ2xhc3M6ICdncmVlbicsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhcHBlbmRHZW9JY29uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdGFwcGVuZEljb24oe1xuXHRcdFx0aWNvbjogJ2hlbHBOb3RpY2UnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogZ2V0TWVzc2FnZSgnVW5rbm93bicpLFxuXHRcdFx0c3BhbkNsYXNzOiAnb3JhbmdlJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRHZW9JY29ufTtcbiIsICJpbXBvcnQge1dHX1JFTEVWQU5UX1VTRVJfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthcHBlbmRHZW9JY29ufSBmcm9tICcuL2FwcGVuZEdlb0ljb24nO1xuXG5jb25zdCBhZGRFbGVtZW50ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBxdWVyeVVzZXJHcm91cHNQYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzdXNlcnM6IFdHX1JFTEVWQU5UX1VTRVJfTkFNRSxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0dXNlcnM6IFt7Z3JvdXBzfV0sXG5cdFx0XHR9LFxuXHRcdH06IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHVzZXJzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Z3JvdXBzOiBzdHJpbmdbXTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblx0XHR9ID0gKGF3YWl0IGFwaS5nZXQocXVlcnlVc2VyR3JvdXBzUGFyYW1zKSkgYXMgbmV2ZXI7XG5cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHQvL+ermemVv+mihOeVme+8jOaVheaEj+S4jeaUuVxuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gTWFya1JpZ2h0cy1Vc2VycGFnZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIGFwcGVuZEdlb0ljb24oKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhZGRFbGVtZW50YCBtZXRob2Q6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtcblx0SVNfVVNFUl9QQUdFLFxuXHRJU19XR19BQ1RJT05fVklFVyxcblx0U1lTVEVNX1NDUklQVF9MSVNULFxuXHRXRUJNQVNURVJfTElTVCxcblx0V0dfUEFHRV9OQU1FLFxuXHRXR19SRUxFVkFOVF9VU0VSX05BTUUsXG59IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hZGRFbGVtZW50JztcblxuKGZ1bmN0aW9uIGdlb0xvY2F0aW9uUmVhZGVyKCk6IHZvaWQge1xuXHRpZiAoXG5cdFx0U1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgfHxcblx0XHRXRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19SRUxFVkFOVF9VU0VSX05BTUUpIHx8XG5cdFx0IVdHX1JFTEVWQU5UX1VTRVJfTkFNRSB8fFxuXHRcdCFJU19VU0VSX1BBR0UgfHxcblx0XHQhSVNfV0dfQUNUSU9OX1ZJRVdcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19QQUdFX05BTUUpLnRvVGV4dCgpO1xuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSwgT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKS50b1RleHQoKTtcblx0aWYgKHBhZ2VOYW1lICE9PSByZWxldmFudFVzZXJQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYWRkRWxlbWVudCgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsc0JBQXVCO0FBQ3ZCLElBQUFDLFVBQVc7O0FDSFosSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBRXRGLElBQU1DLGtCQUFBQyxpQkFBMkJDLEdBQUdDLE9BQU9DLElBQUksY0FBYyxPQUFBLFFBQUFILG1CQUFBLFNBQUFBLGlCQUFLLENBQUE7QUFDbEUsSUFBTUksZ0JBQUFDLGtCQUF1QkosR0FBR0MsT0FBT0MsSUFBSSxZQUFZLE9BQUEsUUFBQUUsb0JBQUEsU0FBQUEsa0JBQUs7QUFDNUQsSUFBTUMsc0JBQUFDLGtCQUE2Qk4sR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUIsT0FBQSxRQUFBSSxvQkFBQSxTQUFBQSxrQkFBSzs7QUNYdkUsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsUUFBQTtBQUM3QyxJQUFNRyxrQkFBQSxHQUFBRCxPQUE2QkYsWUFBVSxRQUFBO0FBRTdDLElBQU1JLGVBQXdCWCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFjUjtBQUM3RSxJQUFNa0Isb0JBQTZCWixHQUFHQyxPQUFPQyxJQUFJLFVBQVUsTUFBTTtBQUVqRSxJQUFNVyxlQUF1QmIsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3ZELElBQU1ZLHlCQUFBQyxrQkFBZ0NmLEdBQUdDLE9BQU9DLElBQUksb0JBQW9CLE9BQUEsUUFBQWEsb0JBQUEsU0FBQUEsa0JBQUs7QUFDN0UsSUFBTUMsVUFBa0JoQixHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDNUMsSUFBTWUsbUJBQTJCakIsR0FBR0MsT0FBT0MsSUFBSSxnQkFBZ0I7O0FDWC9ELElBQUFnQixvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxxQkFBQVosT0FBdUNkLE9BQU8sQ0FBRTs7QUNEcEUsSUFBTTJCLDJCQUEyQkEsTUFBTTtBQUN0QyxNQUFJLENBQUMsV0FBVyxTQUFTLE9BQU8sRUFBRUMsU0FBU04sZ0JBQWdCLEdBQUc7QUFDN0QsV0FBTztNQUNOTyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0QsV0FBVyxDQUFDLE9BQU8sRUFBRXpQLFNBQVNOLGdCQUFnQixHQUFHO0FBQ2hELFdBQU87TUFDTk8sSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBRXpQLFNBQVNOLGdCQUFnQixHQUFHO0FBQ3pELFdBQU87TUFDTk8sSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNEO0FBRUEsU0FBTztJQUNOeFAsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJ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QUE7O0FDSE4sSUFBTUMsYUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFqQyxrQkFBYSxhQUEyQjtBQUM3QyxVQUFNa0Msd0JBQTZDO01BQ2xENUIsUUFBUTtNQUNSRSxRQUFRO01BQ1JDLGVBQWU7TUFDZjBCLE1BQU07TUFDTkMsU0FBU2xXO01BQ1RtVyxRQUFRO0lBQ1Q7QUFFQSxRQUFJO0FBQ0gsWUFBTTtRQUNMQyxPQUFPO1VBQ05DLE9BQU8sQ0FBQztZQUFDQztVQUFNLENBQUM7UUFDakI7TUFDRCxJQUFBLE1BUVdoVyxJQUFJbEIsSUFBSTRXLHFCQUFxQjtBQUV4QyxVQUFJTSxPQUFPN1YsU0FBUyxLQUFLLEtBQUs2VixPQUFPN1YsU0FBUyxRQUFRLEdBQUc7TUFJekQsT0FBTztBQUNOLGFBQUttVCxjQUFjO01BQ3BCO0lBQ0QsU0FBUzhCLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDBEQUEwREEsS0FBSztJQUM5RTtFQUNELENBQUE7QUFBQSxTQUFBLFNBbkNNSSxjQUFBO0FBQUEsV0FBQUMsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDQ09MLFNBQVNVLG9CQUEwQjtBQUNuQyxNQUNDelgsbUJBQW1CMkIsU0FBU1QscUJBQXFCLEtBQ2pEakIsZUFBZTBCLFNBQVNULHFCQUFxQixLQUM3QyxDQUFDQSx5QkFDRCxDQUFDSCxnQkFDRCxDQUFDQyxtQkFDQTtBQUNEO0VBQ0Q7QUFFQSxRQUFNMFcsV0FBbUIsSUFBSXRYLEdBQUd1WCxNQUFNMVcsWUFBWSxFQUFFMlcsT0FBTztBQUMzRCxRQUFNQyx1QkFBK0IsSUFBSXpYLEdBQUd1WCxNQUFNelcsdUJBQStCcEIsbUJBQW1CLEVBQUU4WCxPQUFPO0FBQzdHLE1BQUlGLGFBQWFHLHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS2IsV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldDIiLCAiV0dfVVNFUl9FRElUX0NPVU5UIiwgIl9tdyRjb25maWckZ2V0MyIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfSUNPTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9URVhUIiwgIklTX1VTRVJfUEFHRSIsICJJU19XR19BQ1RJT05fVklFVyIsICJXR19QQUdFX05BTUUiLCAiV0dfUkVMRVZBTlRfVVNFUl9OQU1FIiwgIl9tdyRjb25maWckZ2V0NCIsICJXR19TS0lOIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldENvdW50cnlPckFyZWFOYW1lTGlzdCIsICJpbmNsdWRlcyIsICJBRiIsICJBWCIsICJBTCIsICJEWiIsICJBUyIsICJBRCIsICJBTyIsICJBSSIsICJBUSIsICJBRyIsICJBUiIsICJBTSIsICJBVyIsICJBVSIsICJBVCIsICJBWiIsICJCUyIsICJCSCIsICJCRCIsICJCQiIsICJCWSIsICJCRSIsICJCWiIsICJCSiIsICJCTSIsICJCVCIsICJCTyIsICJCUSIsICJCQSIsICJCVyIsICJCViIsICJCUiIsICJJTyIsICJCTiIsICJCRyIsICJCRiIsICJCSSIsICJDViIsICJLSCIsICJDTSIsICJDQSIsICJLWSIsICJDRiIsICJURCIsICJDTCIsICJDTiIsICJDWCIsICJDQyIsICJDTyIsICJLTSIsICJDRyIsICJDRCIsICJDSyIsICJDUiIsICJDSSIsICJIUiIsICJDVSIsICJDVyIsICJDWSIsICJDWiIsICJESyIsICJESiIsICJETSIsICJETyIsICJFQyIsICJFRyIsICJTViIsICJHUSIsICJFUiIsICJFRSIsICJTWiIsICJFVCIsICJGSyIsICJGTyIsICJGSiIsICJGSSIsICJGUiIsICJHRiIsICJQRiIsICJURiIsICJHQSIsICJHTSIsICJHRSIsICJERSIsICJHSCIsICJHSSIsICJHUiIsICJHTCIsICJHRCIsICJHUCIsICJHVSIsICJHVCIsICJHRyIsICJHTiIsICJHVyIsICJHWSIsICJIVCIsICJITSIsICJWQSIsICJITiIsICJISyIsICJIVSIsICJJUyIsICJJTiIsICJJRCIsICJJUiIsICJJUSIsICJJRSIsICJJTSIsICJJTCIsICJJVCIsICJKTSIsICJKUCIsICJKRSIsICJKTyIsICJLWiIsICJLRSIsICJLSSIsICJLUCIsICJLUiIsICJLVyIsICJLRyIsICJMQSIsICJMViIsICJMQiIsICJMUyIsICJMUiIsICJMWSIsICJMSSIsICJMVCIsICJMVSIsICJNTyIsICJNRyIsICJNVyIsICJNWSIsICJNViIsICJNTCIsICJNVCIsICJNSCIsICJNUSIsICJNUiIsICJNVSIsICJZVCIsICJNWCIsICJGTSIsICJNRCIsICJNQyIsICJNTiIsICJNRSIsICJNUyIsICJNQSIsICJNWiIsICJNTSIsICJOQSIsICJOUiIsICJOUCIsICJOTCIsICJOQyIsICJOWiIsICJOSSIsICJORSIsICJORyIsICJOVSIsICJORiIsICJNSyIsICJNUCIsICJOTyIsICJPTSIsICJQSyIsICJQVyIsICJQUyIsICJQQSIsICJQRyIsICJQWSIsICJQRSIsICJQSCIsICJQTiIsICJQTCIsICJQVCIsICJQUiIsICJRQSIsICJSRSIsICJSTyIsICJSVSIsICJSVyIsICJCTCIsICJTSCIsICJLTiIsICJMQyIsICJNRiIsICJQTSIsICJWQyIsICJXUyIsICJTTSIsICJTVCIsICJTQSIsICJTTiIsICJSUyIsICJTQyIsICJTTCIsICJTRyIsICJTWCIsICJTSyIsICJTSSIsICJTQiIsICJTTyIsICJaQSIsICJHUyIsICJTUyIsICJFUyIsICJMSyIsICJTRCIsICJTUiIsICJTSiIsICJTRSIsICJDSCIsICJTWSIsICJUVyIsICJUSiIsICJUWiIsICJUSCIsICJUTCIsICJURyIsICJUSyIsICJUTyIsICJUVCIsICJUTiIsICJUUiIsICJUTSIsICJUQyIsICJUViIsICJVRyIsICJVQSIsICJBRSIsICJHQiIsICJVUyIsICJVTSIsICJVWSIsICJVWiIsICJWVSIsICJWRSIsICJWTiIsICJWRyIsICJWSSIsICJXRiIsICJFSCIsICJZRSIsICJaTSIsICJaVyIsICJnZXRSZWdpb25OYW1lTGlzdCIsICJBSCIsICJDUSIsICJHWCIsICJHWiIsICJIQSIsICJIQiIsICJIRSIsICJISSIsICJITCIsICJKTCIsICJKUyIsICJKWCIsICJMTiIsICJOTSIsICJOWCIsICJRSCIsICJYSiIsICJYWiIsICJZTiIsICJaSiIsICJjb3VudHJ5T3JBcmVhTGlzdCIsICJyZWdpb25MaXN0IiwgImdldENvdW50cnlPckFyZWFOYW1lIiwgImtleSIsICJnZXRSZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiVW5rbm93biIsICJMb2NhdGlvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJlbGVtZW50V3JhcCIsICJzcGFuQ2xhc3MiLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJpbmRpY2F0b3IiLCAiaWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgImlwTG9jYXRpb25EZXNjIiwgInRleHQiLCAiRnJhZ21lbnQiLCAiYXBwZW5kSWNvbiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJhcHBlbmRHZW9JY29uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic3RvcmVQYWdlVGl0bGUiLCAiX3JlZjIiLCAiX2dldENvdW50cnlPckFyZWFOYW1lIiwgIl9nZXRSZWdpb25OYW1lIiwgInBhcmFtcyIsICJhY3Rpb24iLCAidGl0bGVzIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiZGF0YSIsICJwb3N0IiwgImNvdW50cnkiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImxvY2F0aW9uIiwgImNvdW50cnlPckFyZWFOYW1lIiwgInJlZ2lvbk5hbWUiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYWRkRWxlbWVudCIsICJfcmVmMyIsICJxdWVyeVVzZXJHcm91cHNQYXJhbXMiLCAibGlzdCIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJxdWVyeSIsICJ1c2VycyIsICJncm91cHMiLCAiZ2VvTG9jYXRpb25SZWFkZXIiLCAicGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIl0KfQo=
