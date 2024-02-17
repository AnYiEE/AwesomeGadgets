/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <meta.wikimedia.org/wiki/User:Bluedeck/source/edit-conflict.js>
 */
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function (ele, txt, time, condition) {
  if (!condition) {
    return;
  }
  ele.innerHTML = "";
  (function (ele, txt, time) {
    txt = txt.split("");
    var len = txt.length,
      rate = time / len;
    for (var i = 0; i < len; i++) {
      setTimeout(function () {
        ele.innerHTML += txt.shift();
      }, i * rate);
    }
  })(ele, txt, time);
})(document.getElementById("edit_conflict"), "2021.0.2", 400, document.getElementById("8c23b4144bd58c689e192c6ab912a3b75c76f6849977518b8bedefd5e347d67f"));
(function (w) {
  // if not edit mode, abort
  if (!/[&?]action=edit/.test(w.location.search)) {
    return;
  }
  if ((mw.config.values.wgCurRevisionId || w.wgCurRevisionId) === 0) {
    // the page does not exist, abort actions.
    return;
  }
  var lang_code = "en_us";
  var done = false;
  var interval_id = null;
  var current_revid = mw.config.values.wgCurRevisionId || w.wgCurRevisionId;
  var lang = {
    notice: {
      en_us: '<div>This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts. </div><div style="margin-top: 0.4em;"><button>OK</button>&nbsp;<button onclick="window.location.reload()">Refresh</button></div>',
      zh_cn: '<div>本页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。</div><div style="margin-top: 0.4em;"><button>OK</button>&nbsp;<button onclick="window.location.reload()">刷新</button></div>',
      zh_hk: '<div>本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。</div><div style="margin-top: 0.4em;"><button>OK</button>&nbsp;<button onclick="window.location.reload()">重新載入</button></div>'
    }
  };

  // libs
  var ding = window.DingExposedInterface;
  var acc_lang = function () {
    var PREVENT_INFINITE_LOOP = 1000;
    var accepted_languages_dict = {
      // lang_code
      en: "en_us",
      enau: "en_au",
      enca: "en_ca",
      enhk: "en_hk",
      ennz: "en_nz",
      enuk: "en_uk",
      enus: "en_us",
      zh: "zh_cn",
      zhcn: "zh_cn",
      zhhk: "zh_hk",
      zhmo: "zh_mo",
      zhtw: "zh_tw",
      zhsg: "zh_sg",
      // country code
      au: "en_au",
      ca: "en_ca",
      ch: "de_ch",
      cn: "zh_cn",
      hk: "zh_hk",
      nz: "en_us",
      tw: "zh_tw",
      sg: "zh_cn",
      uk: "en_uk",
      us: "en_us",
      // non-standard raw lang code
      "zh-hans": "zh_cn",
      "zh-hant": "zh_hk"
    };
    var Language_proximity_group = /*#__PURE__*/function () {
      function Language_proximity_group(desc) {
        _classCallCheck(this, Language_proximity_group);
        this.parent = null;
        this.desc = desc;
        this.sub_groups = [];
        this.languages = [];
      }
      _createClass(Language_proximity_group, [{
        key: "all",
        value: function all() {
          var all_codes = [];
          for (var i = 0; i < this.languages.length; i++) {
            all_codes = all_codes.concat(this.languages[i]);
          }
          for (var _i2 = 0; _i2 < this.sub_groups.length; _i2++) {
            all_codes = all_codes.concat(this.sub_groups[_i2].all());
          }
          return all_codes;
        }
      }, {
        key: "add_one",
        value: function add_one(item) {
          if (typeof item === "string" && this.languages.indexOf(item) === -1) {
            this.languages.push(item);
          } else if (_typeof(item) === "object" && item !== null && item.constructor === Language_proximity_group && this.sub_groups.indexOf(item) === -1) {
            item.parent = this, this.sub_groups.push(item);
          } else {
            throw new TypeError("cannot add this item ".concat(_typeof(item), ". add only language code and proximity groups."));
          }
          return this;
        }
      }, {
        key: "add",
        value: function add() {
          for (var i = 0; i < arguments.length; i++) {
            this.add_one(arguments[i]);
          }
          return this;
        }

        // return the group in which the language code resides.
      }, {
        key: "group_of",
        value: function group_of(code_or_desc) {
          if (this.languages.indexOf(code_or_desc) !== -1) {
            // desired language is in this group
            return this;
          } else if (this.all().indexOf(code_or_desc) !== -1) {
            // desired language is not in this group, but in a sub group of this group
            for (var i = 0; i < this.sub_groups.length; i++) {
              var search_result = this.sub_groups[i].group_of(code_or_desc);
              if (search_result !== null) {
                return search_result;
              }
            }
            // search has finished but all subgroups returned null, which should not happen since the desired language is alleged to be in one of these sub groups, as per the opening condition of this if-else ladder.
            console.log("reporting a [peculiarity], see line 90 of dependencies/accepted_languages.js. this line is never intended to be executed.");
            return null;
          } else if (this.desc === code_or_desc) {
            // this is the desired group
            return this;
          }

          // desired language is not in this group
          return null;
        }
      }]);
      return Language_proximity_group;
    }();
    var group_north_am_eng = new Language_proximity_group("en_north_american").add("en_us", "en_ca");
    var group_australian_eng = new Language_proximity_group("en_au_nz").add("en_nz", "en_au");
    var group_dominant_english = new Language_proximity_group("en_native").add("en_uk", group_north_am_eng, group_australian_eng);
    var group_english = new Language_proximity_group("en").add(group_dominant_english, "en_sg", "en_hk");
    var group_european = new Language_proximity_group("european").add(group_english);
    var group_zh_hans = new Language_proximity_group("zh_hans").add("zh_cn", "zh_sg", "zh_mo");
    var group_zh_hant = new Language_proximity_group("zh_hant").add("zh_hk", "zh_tw");
    var group_zh = new Language_proximity_group("zh").add(group_zh_hans, group_zh_hant);
    var group_asian = new Language_proximity_group("asian").add(group_zh);
    var group_world = new Language_proximity_group("world").add(group_asian, group_european);
    var accepted_languages = function accepted_languages(raw_lang_code) {
      var all_acceptable_codes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var processed_lang_code = String(raw_lang_code).toLowerCase().replace(/[^a-z]/g, "").slice(0, 4);
      var processed_lang_code_short = processed_lang_code.slice(0, 2);
      var best_match;
      if (raw_lang_code in accepted_languages_dict) {
        best_match = accepted_languages_dict[raw_lang_code];
      } else if (processed_lang_code in accepted_languages_dict) {
        best_match = accepted_languages_dict[processed_lang_code];
      } else if (processed_lang_code_short in accepted_languages_dict) {
        best_match = accepted_languages_dict[processed_lang_code_short];
      } else {
        best_match = null;
      }
      if (all_acceptable_codes === null || _typeof(all_acceptable_codes) !== "object" ||
      // eslint-disable-next-line no-unsafe-negation
      !all_acceptable_codes instanceof Array || all_acceptable_codes.length === 0 || all_acceptable_codes.indexOf(best_match) !== -1) {
        return best_match;
      }
      var current_group = group_world.group_of(best_match);
      if (current_group === null) {
        return all_acceptable_codes[0];
      }

      // this was originally a while(true) loop, but i changed it into a for loop that will force quit if it runs more than a specified length,
      // just as a fail safe in case the current_group.parent somehow referred to itself.
      for (var i = 0; i < PREVENT_INFINITE_LOOP; i++) {
        var close_match_group = current_group.all();
        for (var _i4 = 0; _i4 < close_match_group.length; _i4++) {
          if (all_acceptable_codes.indexOf(close_match_group[_i4]) !== -1) {
            return close_match_group[_i4];
          }
        }
        if (current_group.parent) {
          current_group = current_group.parent;
        } else {
          return all_acceptable_codes[0];
        }
      }
      console.log("[warning][peculiarity] produced at accepted_languages.js:175, forced jump out of a suspected 1k loop that should not happen. This indicates that a faulty language proximity group has one/multiple parent pointer(s) that formed a circle.");
      return all_acceptable_codes[0];
    };
    return accepted_languages;
  }();
  var ui_notify = function ui_notify() {
    ding(lang.notice[lang_code], "info", "long");
  };
  var expose = function () {
    var glb = {
      url: mw.config.values.wgServer,
      p: mw.config.values.wgPageName,
      un: mw.config.values.wgUserName,
      u: "User:".concat(mw.config.values.wgUserName),
      ut: "User_talk:".concat(mw.config.values.wgUserName),
      t: null
    };
    glb.a = "".concat(glb.url).concat(mw.config.get("wgScriptPath"), "/api.php");
    var eur = encodeURIComponent;
    var asyncPost = function asyncPost(url, body, cb) {
      var z1 = "Content-Type";
      var z2 = "application/x-www-form-urlencoded";
      var a = new XMLHttpRequest();
      a.onreadystatechange = cb;
      a.open("POST", url, true);
      a.setRequestHeader(z1, z2);
      a.send(body);
    };
    var getPage = function getPage(a, cb) {
      var z = "action=query&prop=revisions&rvprop=ids|flags|timestamp|user|userid|size&format=json&titles=";
      asyncPost(glb.a, z + eur(a), cb);
    };
    var pickPageRevid = function pickPageRevid(a) {
      var focus = "revid";
      if (typeof a === "string") {
        var b = JSON.parse(a);
        if (_typeof(b) === "object") {
          for (var x in b.query.pages) {
            var c = b.query.pages[x];
            return c.revisions[0][focus];
          }
        } else {
          return false;
        }
        // from now on pick functions will only work with string inputs. DO NOT parse pages before passing them into pick functions.
      } else {
        return false;
      }
    };
    var tellPageExist = function tellPageExist(a) {
      try {
        a = JSON.parse(a);
      } catch (e) {
        return false;
      }
      if (_typeof(a) !== "object") {
        return false;
      }
      if (!("query" in a)) {
        return false;
      }
      if (!("pages" in a.query)) {
        return false;
      }
      if (-1 in a.query.pages) {
        return false;
      }
      return true;
    };
    var check_page_revid = function check_page_revid(title) {
      // eslint-disable-next-line compat/compat, no-unused-vars
      return new Promise(function (r, _s) {
        getPage(title, function () {
          if (this.readyState !== 4) {
            return;
          }
          if (tellPageExist(this.responseText)) {
            r(pickPageRevid(this.responseText));
          } else {
            r(null);
          }
        });
      });
    };
    return check_page_revid;
  }();
  // end of libs
  var raw_lang_code = mw.config.get("wgUserLanguage") || navigator.language;
  lang_code = acc_lang(raw_lang_code, ["en_us", "zh_cn", "zh_hk"]);
  var main_loop = function main_loop() {
    if (done) {
      return;
    }
    expose(mw.config.values.wgPageName || w.wgPageName).then(function (a) {
      if (a === null) {
        // the page does not exist. stop polling.
        done = true;
        clearInterval(interval_id);
      } else if (a > current_revid) {
        ui_notify();
        done = true;
        if (interval_id !== null) {
          clearInterval(interval_id);
        }
      } else {
        return 0;
      }
    });
  };
  interval_id = setInterval(main_loop, 2000);
  try {
    document.getElementById("wpSave").addEventListener("click", function () {
      done = true;
      clearInterval(interval_id);
    });
  } catch (e) {}
})(window);