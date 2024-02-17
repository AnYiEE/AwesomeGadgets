/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/i18n>
 * @author 安忆 <i@anyi.in>
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function i18n() {
  var FALLBACK_TABLE = {
    zh: ['zh', 'zh-hans', 'zh-hant', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-sg', 'zh-mo', 'zh-my'],
    'zh-hans': ['zh-hans', 'zh-cn', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
    'zh-hant': ['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
    'zh-cn': ['zh-cn', 'zh-hans', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
    'zh-sg': ['zh-sg', 'zh-hans', 'zh-cn', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
    'zh-my': ['zh-my', 'zh-hans', 'zh-cn', 'zh-sg', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
    'zh-tw': ['zh-tw', 'zh-hant', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
    'zh-hk': ['zh-hk', 'zh-hant', 'zh-mo', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
    'zh-mo': ['zh-mo', 'zh-hant', 'zh-hk', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my']
  };
  var isValidKey = function isValidKey(object, key) {
    return key in object;
  };
  var getDefaultFallbackList = function getDefaultFallbackList() {
    var defaultLanguageCode = 'en';
    var getLanguageCodeSplitArray = function getLanguageCodeSplitArray(_languageCode) {
      return _languageCode.split('-').map(function (value) {
        return value.toLowerCase();
      });
    };
    var documentLanguageSplitArray = getLanguageCodeSplitArray(document.documentElement.lang);
    var navigatorLanguageSplitArray = getLanguageCodeSplitArray(navigator.language);
    var languageCode = defaultLanguageCode;
    for (var _i = 0, _arr = [documentLanguageSplitArray, navigatorLanguageSplitArray]; _i < _arr.length; _i++) {
      var languageCodeSplitArray = _arr[_i];
      switch (languageCodeSplitArray.length) {
        case 2:
          languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[1]);
          break;
        case 3:
          languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[2]);
          break;
        default:
          languageCode = languageCodeSplitArray[0];
          break;
      }
      if (isValidKey(FALLBACK_TABLE, languageCode)) {
        break;
      }
    }
    return _toConsumableArray(new Set([languageCode, defaultLanguageCode]));
  };
  var i18nMessages = function i18nMessages(_defaultFallbackList) {
    var elect = function elect(candidates, locale) {
      var fallbackList = _defaultFallbackList;
      for (var _i2 = 0, _arr2 = [locale].concat(_toConsumableArray(fallbackList)); _i2 < _arr2.length; _i2++) {
        var key = _arr2[_i2];
        if (isValidKey(FALLBACK_TABLE, key)) {
          fallbackList = FALLBACK_TABLE[key];
          break;
        }
      }
      var _iterator = _createForOfIteratorHelper(new Set([locale].concat(_toConsumableArray(fallbackList), _toConsumableArray(_defaultFallbackList)))),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _key = _step.value;
          if (isValidKey(candidates, _key)) {
            return candidates[_key];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return '';
    };
    return {
      content: function content(candidates) {
        return elect(candidates, mw.config.get('wgContentLanguage'));
      },
      localize: function localize(candidates) {
        var _mw$config$get;
        return elect(candidates, (_mw$config$get = mw.config.get('wgUserLanguage')) !== null && _mw$config$get !== void 0 ? _mw$config$get : mw.config.get('wgContentLanguage'));
      },
      vary: function vary(candidates) {
        var _mw$config$get2;
        return elect(candidates, (_mw$config$get2 = mw.config.get('wgUserVariant')) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : mw.config.get('wgContentLanguage'));
      }
    };
  };
  var defaultFallbackList = getDefaultFallbackList();
  var i18nMethods = i18nMessages(defaultFallbackList);
  window.i18n = i18nMethods;

  /* Deprecated window.wgU*S */
  var wgUXS = function wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, method) {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _zh, _ref9, _ref10, _ref11, _hans, _ref12, _ref13, _ref14, _hant, _cn, _sg, _tw, _hk, _mo, _my, _en;
    zh = String((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_ref8 = (_zh = zh) !== null && _zh !== void 0 ? _zh : hans) !== null && _ref8 !== void 0 ? _ref8 : hant) !== null && _ref7 !== void 0 ? _ref7 : cn) !== null && _ref6 !== void 0 ? _ref6 : tw) !== null && _ref5 !== void 0 ? _ref5 : hk) !== null && _ref4 !== void 0 ? _ref4 : sg) !== null && _ref3 !== void 0 ? _ref3 : mo) !== null && _ref2 !== void 0 ? _ref2 : my) !== null && _ref !== void 0 ? _ref : en);
    hans = String((_ref9 = (_ref10 = (_ref11 = (_hans = hans) !== null && _hans !== void 0 ? _hans : cn) !== null && _ref11 !== void 0 ? _ref11 : sg) !== null && _ref10 !== void 0 ? _ref10 : my) !== null && _ref9 !== void 0 ? _ref9 : zh);
    hant = String((_ref12 = (_ref13 = (_ref14 = (_hant = hant) !== null && _hant !== void 0 ? _hant : tw) !== null && _ref14 !== void 0 ? _ref14 : hk) !== null && _ref13 !== void 0 ? _ref13 : mo) !== null && _ref12 !== void 0 ? _ref12 : zh);
    cn = String((_cn = cn) !== null && _cn !== void 0 ? _cn : hans);
    sg = String((_sg = sg) !== null && _sg !== void 0 ? _sg : hans);
    tw = String((_tw = tw) !== null && _tw !== void 0 ? _tw : hant);
    hk = String((_hk = hk) !== null && _hk !== void 0 ? _hk : hant);
    mo = String((_mo = mo) !== null && _mo !== void 0 ? _mo : hant);
    my = String((_my = my) !== null && _my !== void 0 ? _my : hant);
    en = String((_en = en) !== null && _en !== void 0 ? _en : zh);
    return i18nMethods[method]({
      en: en,
      zh: zh,
      'zh-hans': hans,
      'zh-hant': hant,
      'zh-cn': cn,
      'zh-tw': tw,
      'zh-hk': hk,
      'zh-sg': sg,
      'zh-mo': mo,
      'zh-my': my
    });
  };
  window.wgUCS = function (hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'content');
  };
  window.wgULS = function (hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'localize');
  };
  window.wgUVS = function (hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, 'vary');
  };
})();
/** 本小工具来自求闻百科，采用CC-BY-SA 4.0协议授权，原用法见下。 **/
/* 用法
	// 定义多条消息
	// 支持多语言，可选值定义在index.d.ts#L-1，可直接添加其他值（RFC 5646）
	const i18nMessages = (): i18nMessages => {
		const {localize} = i18n;
		// i18n的三个方法会匹配当前语言和它所接收对象中的键，对于localize来说，假设已定义zh、en和ja，则
		//   当页面语言（wgUserLanguage ?? wgContentLanguage）为中文/英语/日语时，返回页面语言所对应的值
		//   当页面语言为法语，浏览器语言为中文/英语/日语时，返回浏览器语言所对应的值
		//   当页面语言为法语，且不存在浏览器语言所对应的键，返回L-25定义的键所对应的值。若此键同样没被定义，则返回空字符串
		return {
			Cancel: localize({
				en: 'Cancel',
				ja: 'キャンセル',
				zh: '取消',
			}),
			QiuWen: localize({
				en: 'QiuWen',
				ja: 'ちゅううん',
				'zh-cn': '求闻',
				'zh-hk': '求聞',
			}),
			LongText: localize({
				en: 'This is a very long text',
				ja: 'これは非常に長いテキストです',
				'zh-hans': '这是一段非常长的文本',
				'zh-hant': '這是一段非常長的文字',
			}),
		};
	};
	const messages = i18nMessages();
	const message = (key: string): string => {
		return messages[key] || key;
	};
	// 调用
	message('Cancel'); // en: Cancel, ja: キャンセル, zh: 取消, zh-hans: 取消, zh-hant: 取消, zh-cn: 取消, zh-hk: 取消, zh-tw: 取消
	message('QiuWen'); // en: QiuWen, ja: ちゅううん, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	message('LongText');
		// en: This is a very long text
		// ja: これは非常に長いテキストです
		// zh: 这是一段非常长的文本
		// zh-hans: 这是一段非常长的文本
		// zh-hant: 這是一段非常長的文字
		// zh-cn: 这是一段非常长的文本
		// zh-hk: 這是一段非常長的文字
		// zh-tw: 這是一段非常長的文字

	// 直接转换单条消息
	// 仅支持传递中文和英语。在非中文环境且未传递英语文本时，最终返回zh的值
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
*/
/* </nowiki> */
