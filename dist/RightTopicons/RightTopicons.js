/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/RightTopicons/RightTopicons.js
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
//! src/RightTopicons/modules/PermissionData.ts
var LIBdictionary = {
  responsibleoperator: {
    id: "1",
    aimgsrc: "https://youshou.wiki/images/d/d6/%E8%B4%A3%E4%BB%BB%E8%BF%90%E8%90%A5%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90#%E8%B4%A3%E4%BB%BB%E8%BF%90%E8%90%A5"
  },
  steward: {
    id: "2",
    aimgsrc: "https://youshou.wiki/images/a/a4/%E6%A1%A3%E6%A1%88%E7%90%86%E4%BA%8B%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E6%A1%A3%E6%A1%88%E7%90%86%E4%BA%8B%E5%9B%A2%E9%98%9F"
  },
  sysop: {
    id: "3",
    aimgsrc: "https://youshou.wiki/images/3/3e/%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E7%AE%A1%E7%90%86%E5%91%98"
  },
  templateeditor: {
    id: "4",
    aimgsrc: "https://youshou.wiki/images/4/47/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%BE%91%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%BE%91%E5%91%98"
  },
  "interface-admin": {
    id: "5",
    aimgsrc: "https://youshou.wiki/images/e/ea/%E7%95%8C%E9%9D%A2%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E7%95%8C%E9%9D%A2%E7%AE%A1%E7%90%86%E5%91%98"
  },
  patroller: {
    id: "6",
    aimgsrc: "https://youshou.wiki/images/6/67/%E5%B7%A1%E6%9F%A5%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E5%B7%A1%E6%9F%A5%E6%9D%A1%E4%BE%8B#%E5%B7%A1%E6%9F%A5%E5%91%98"
  },
  suppress: {
    id: "7",
    aimgsrc: "https://youshou.wiki/images/3/3d/%E7%9B%91%E7%9D%A3%E5%91%98%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E7%9B%91%E7%9D%A3%E6%9D%A1%E4%BE%8B#%E7%9B%91%E7%9D%A3%E5%91%98"
  },
  bot: {
    id: "8",
    aimgsrc: "https://youshou.wiki/images/f/f0/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E6%9C%BA%E5%99%A8%E4%BA%BA"
  },
  autopatrolled: {
    id: "9",
    aimgsrc: "https://youshou.wiki/images/1/1e/%E4%BC%98%E8%B4%A8%E7%BC%96%E8%BE%91%E8%80%85%E6%9D%83%E9%99%90%E6%A0%87%E8%AF%86.svg",
    src: "https://youshou.wiki/wiki/%E6%9C%89%E5%85%BD%E6%A1%A3%E6%A1%88%E9%A6%86:%E4%BC%98%E8%B4%A8%E7%BC%96%E8%BE%91%E8%80%85"
  },
  "massmessage-sender": {
    id: "10",
    aimgsrc: "https://youshou.wiki/images/c/cd/大量消息发送者权限标识.svg",
    src: "https://youshou.wiki/wiki/有兽档案馆:大量消息发送者"
  },
  confirmed: {
    id: "11",
    aimgsrc: "https://youshou.wiki/images/4/49/确认用户权限标识.svg",
    src: "https://youshou.wiki/wiki/有兽档案馆:用户权限#自动确认用户"
  }
};
//! src/RightTopicons/RightTopicons.ts
$(() => {
  const WikiURLName = window.location.pathname;
  const matchResult = /^\/wiki\/User:[^/]*$/.test(WikiURLName);
  if (!matchResult) {
    return;
  }
  const [_, userNameMatch] = WikiURLName.match(/User:(.*)$/) || [];
  const UserMessage = "".concat(mw.config.get("wgServer"), "/api.php?action=query&list=users&usprop=groups&format=json&ususers=").concat(userNameMatch);
  const createVirtualLinkImg = (href, aimgsrc) => {
    return {
      tag: "a",
      props: {
        href,
        style: "display: inline-block;"
      },
      children: [{
        tag: "img",
        props: {
          src: aimgsrc,
          style: "width: 39px; margin: 0 3px;"
        }
      }]
    };
  };
  const renderVirtualDOM = (virtualDOM, container) => {
    if (!(container instanceof jQuery)) {
      container = $(container);
    }
    const createRealNode = (virtualNode) => {
      const {
        tag,
        props,
        children
      } = virtualNode;
      const realNode = $("<".concat(tag, ">"));
      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        const propName = _Object$keys[_i];
        realNode.attr(propName, String(props[propName]));
      }
      if (children) {
        var _iterator = _createForOfIteratorHelper(children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const childVirtualNode = _step.value;
            const childRealNode = createRealNode(childVirtualNode);
            realNode.append(childRealNode);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return realNode;
    };
    const realNodes = virtualDOM.map((virtualNode) => {
      const realNode = createRealNode(virtualNode);
      return realNode;
    });
    var _iterator2 = _createForOfIteratorHelper(realNodes), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const node = _step2.value;
        container.append(node);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  const ArrayDataSort = (dataArray) => {
    dataArray.sort((a, b) => {
      return a.id - b.id;
    });
    if (dataArray.length > 3) {
      return dataArray.slice(0, 3);
    }
    return dataArray;
  };
  const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      if (!UserMessage) {
        reject(new Error("UserMessage is not defined"));
      }
      $.get(UserMessage, (data) => {
        const userData = {
          groups: data.query.users[0].groups
        };
        console.log(userData);
        resolve(userData);
      }, "json").then(() => {
      }).catch(reject);
    });
  };
  fetchUserData().then((userData) => {
    if (!userData || !Array.isArray(userData.groups)) {
      console.error(new Error("Invalid userData.groups: expected an array but received none or a non-array."));
      return;
    }
    const matchedGroups = userData.groups.filter((group) => {
      return typeof group === "string" && Object.hasOwn(LIBdictionary, group);
    }).map((group) => {
      return LIBdictionary[group];
    });
    const firstThreeItems = ArrayDataSort(matchedGroups);
    const virtualDOM = firstThreeItems.map((imgData) => {
      return imgData !== null && imgData !== void 0 && imgData.src && imgData !== null && imgData !== void 0 && imgData.aimgsrc ? createVirtualLinkImg(imgData.src, imgData.aimgsrc) : null;
    });
    const $body = $("body");
    const $dommountpoint = $body.find("#content header.mw-body-header .page-heading .mw-indicators");
    renderVirtualDOM(virtualDOM, $dommountpoint);
  }).catch((error) => {
    console.error("最终请求失败，不再重试:", error);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JpZ2h0VG9waWNvbnMvbW9kdWxlcy9QZXJtaXNzaW9uRGF0YS50cyIsICJzcmMvUmlnaHRUb3BpY29ucy9SaWdodFRvcGljb25zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIExJQkRpY3Rpb25hcnlFbnRyeSA9IHtcblx0aWQ6IHN0cmluZztcblx0YWltZ3NyYzogc3RyaW5nO1xuXHRzcmM6IHN0cmluZztcbn07XG4vLyDotKPvvIznkIbvvIznrqHvvIznm5HvvIznlYzvvIzlt6HvvIzmqKHvvIzmnLrvvIzkvJjvvIzlj5HvvIznoa5cblxuZXhwb3J0IGNvbnN0IExJQmRpY3Rpb25hcnk6IFJlY29yZDxzdHJpbmcsIExJQkRpY3Rpb25hcnlFbnRyeT4gPSB7XG5cdHJlc3BvbnNpYmxlb3BlcmF0b3I6IHtcblx0XHRpZDogJzEnLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2QvZDYvJUU4JUI0JUEzJUU0JUJCJUJCJUU4JUJGJTkwJUU4JTkwJUE1JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8lRTYlOUMlODklRTUlODUlQkQlRTYlQTElQTMlRTYlQTElODglRTklQTYlODY6JUU3JTk0JUE4JUU2JTg4JUI3JUU2JTlEJTgzJUU5JTk5JTkwIyVFOCVCNCVBMyVFNCVCQiVCQiVFOCVCRiU5MCVFOCU5MCVBNScsXG5cdH0sXG5cdHN0ZXdhcmQ6IHtcblx0XHRpZDogJzInLFxuXHRcdGFpbWdzcmM6XG5cdFx0XHQnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2EvYTQvJUU2JUExJUEzJUU2JUExJTg4JUU3JTkwJTg2JUU0JUJBJThCJUU1JTkxJTk4JUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8lRTYlOUMlODklRTUlODUlQkQlRTYlQTElQTMlRTYlQTElODglRTklQTYlODY6JUU2JUExJUEzJUU2JUExJTg4JUU3JTkwJTg2JUU0JUJBJThCJUU1JTlCJUEyJUU5JTk4JTlGJyxcblx0fSxcblx0c3lzb3A6IHtcblx0XHRpZDogJzMnLFxuXHRcdGFpbWdzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvMy8zZS8lRTclQUUlQTElRTclOTAlODYlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTclQUUlQTElRTclOTAlODYlRTUlOTElOTgnLFxuXHR9LFxuXHR0ZW1wbGF0ZWVkaXRvcjoge1xuXHRcdGlkOiAnNCcsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvNC80Ny8lRTYlQTglQTElRTYlOUQlQkYlRTclQkMlOTYlRTglQkUlOTElRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTYlQTglQTElRTYlOUQlQkYlRTclQkMlOTYlRTglQkUlOTElRTUlOTElOTgnLFxuXHR9LFxuXHQnaW50ZXJmYWNlLWFkbWluJzoge1xuXHRcdGlkOiAnNScsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvZS9lYS8lRTclOTUlOEMlRTklOUQlQTIlRTclQUUlQTElRTclOTAlODYlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTclOTUlOEMlRTklOUQlQTIlRTclQUUlQTElRTclOTAlODYlRTUlOTElOTgnLFxuXHR9LFxuXHRwYXRyb2xsZXI6IHtcblx0XHRpZDogJzYnLFxuXHRcdGFpbWdzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvNi82Ny8lRTUlQjclQTElRTYlOUYlQTUlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTUlQjclQTElRTYlOUYlQTUlRTYlOUQlQTElRTQlQkUlOEIjJUU1JUI3JUExJUU2JTlGJUE1JUU1JTkxJTk4Jyxcblx0fSxcblx0c3VwcHJlc3M6IHtcblx0XHRpZDogJzcnLFxuXHRcdGFpbWdzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvMy8zZC8lRTclOUIlOTElRTclOUQlQTMlRTUlOTElOTglRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTclOUIlOTElRTclOUQlQTMlRTYlOUQlQTElRTQlQkUlOEIjJUU3JTlCJTkxJUU3JTlEJUEzJUU1JTkxJTk4Jyxcblx0fSxcblx0Ym90OiB7XG5cdFx0aWQ6ICc4Jyxcblx0XHRhaW1nc3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2YvZjAvJUU2JTlDJUJBJUU1JTk5JUE4JUU0JUJBJUJBJUU2JTlEJTgzJUU5JTk5JTkwJUU2JUEwJTg3JUU4JUFGJTg2LnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8lRTYlOUMlODklRTUlODUlQkQlRTYlQTElQTMlRTYlQTElODglRTklQTYlODY6JUU2JTlDJUJBJUU1JTk5JUE4JUU0JUJBJUJBJyxcblx0fSxcblx0YXV0b3BhdHJvbGxlZDoge1xuXHRcdGlkOiAnOScsXG5cdFx0YWltZ3NyYzpcblx0XHRcdCdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvMS8xZS8lRTQlQkMlOTglRTglQjQlQTglRTclQkMlOTYlRTglQkUlOTElRTglODAlODUlRTYlOUQlODMlRTklOTklOTAlRTYlQTAlODclRTglQUYlODYuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpLyVFNiU5QyU4OSVFNSU4NSVCRCVFNiVBMSVBMyVFNiVBMSU4OCVFOSVBNiU4NjolRTQlQkMlOTglRTglQjQlQTglRTclQkMlOTYlRTglQkUlOTElRTglODAlODUnLFxuXHR9LFxuXHQnbWFzc21lc3NhZ2Utc2VuZGVyJzoge1xuXHRcdGlkOiAnMTAnLFxuXHRcdGFpbWdzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvYy9jZC/lpKfph4/mtojmga/lj5HpgIHogIXmnYPpmZDmoIfor4Yuc3ZnJyxcblx0XHRzcmM6ICdodHRwczovL3lvdXNob3Uud2lraS93aWtpL+acieWFveaho+ahiOmmhjrlpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHR9LFxuXHRjb25maXJtZWQ6IHtcblx0XHRpZDogJzExJyxcblx0XHRhaW1nc3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzLzQvNDkv56Gu6K6k55So5oi35p2D6ZmQ5qCH6K+GLnN2ZycsXG5cdFx0c3JjOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS/mnInlhb3moaPmoYjppoY655So5oi35p2D6ZmQI+iHquWKqOehruiupOeUqOaItycsXG5cdH0sXG59O1xuIiwgImltcG9ydCB7TElCZGljdGlvbmFyeX0gZnJvbSAnLi9tb2R1bGVzL1Blcm1pc3Npb25EYXRhJztcbiQoKCkgPT4ge1xuXHRjb25zdCBXaWtpVVJMTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblx0Y29uc3QgbWF0Y2hSZXN1bHQgPSAvXlxcL3dpa2lcXC9Vc2VyOlteL10qJC8udGVzdChXaWtpVVJMTmFtZSk7XG5cdGlmICghbWF0Y2hSZXN1bHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgW18sIHVzZXJOYW1lTWF0Y2hdID0gV2lraVVSTE5hbWUubWF0Y2goL1VzZXI6KC4qKSQvKSB8fCBbXTtcblx0Y29uc3QgVXNlck1lc3NhZ2UgPSBgJHttdy5jb25maWcuZ2V0KCd3Z1NlcnZlcicpfS9hcGkucGhwP2FjdGlvbj1xdWVyeSZsaXN0PXVzZXJzJnVzcHJvcD1ncm91cHMmZm9ybWF0PWpzb24mdXN1c2Vycz0ke3VzZXJOYW1lTWF0Y2h9YDtcblxuXHR0eXBlIFZpcnR1YWxET01Ob2RlID0ge1xuXHRcdHRhZzogc3RyaW5nO1xuXHRcdHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblx0XHRjaGlsZHJlbj86IFZpcnR1YWxET01Ob2RlW107XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlVmlydHVhbExpbmtJbWcgPSAoaHJlZjogc3RyaW5nLCBhaW1nc3JjOiBzdHJpbmcpOiBvYmplY3QgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0YWc6ICdhJyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOycsXG5cdFx0XHR9LFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ2ltZycsXG5cdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdHNyYzogYWltZ3NyYyxcblx0XHRcdFx0XHRcdHN0eWxlOiAnd2lkdGg6IDM5cHg7IG1hcmdpbjogMCAzcHg7Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclZpcnR1YWxET00gPSAodmlydHVhbERPTTogVmlydHVhbERPTU5vZGVbXSwgY29udGFpbmVyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XG5cdFx0aWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgalF1ZXJ5KSkge1xuXHRcdFx0Y29udGFpbmVyID0gJChjb250YWluZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNyZWF0ZVJlYWxOb2RlID0gKHZpcnR1YWxOb2RlOiBWaXJ0dWFsRE9NTm9kZSk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdFx0Y29uc3Qge3RhZywgcHJvcHMsIGNoaWxkcmVufSA9IHZpcnR1YWxOb2RlO1xuXHRcdFx0Y29uc3QgcmVhbE5vZGUgPSAkKGA8JHt0YWd9PmApO1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhwcm9wcykpIHtcblx0XHRcdFx0cmVhbE5vZGUuYXR0cihwcm9wTmFtZSwgU3RyaW5nKHByb3BzW3Byb3BOYW1lXSkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoaWxkcmVuKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgY2hpbGRWaXJ0dWFsTm9kZSBvZiBjaGlsZHJlbikge1xuXHRcdFx0XHRcdGNvbnN0IGNoaWxkUmVhbE5vZGUgPSBjcmVhdGVSZWFsTm9kZShjaGlsZFZpcnR1YWxOb2RlKTtcblx0XHRcdFx0XHRyZWFsTm9kZS5hcHBlbmQoY2hpbGRSZWFsTm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFsTm9kZTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVhbE5vZGVzID0gdmlydHVhbERPTS5tYXAoKHZpcnR1YWxOb2RlKSA9PiB7XG5cdFx0XHRjb25zdCByZWFsTm9kZSA9IGNyZWF0ZVJlYWxOb2RlKHZpcnR1YWxOb2RlKTtcblx0XHRcdHJldHVybiByZWFsTm9kZTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWFsTm9kZXMpIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQobm9kZSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBcnJheURhdGFTb3J0ID0gPERhdGFUeXBlIGV4dGVuZHMge2lkOiBudW1iZXJ9PihkYXRhQXJyYXk6IERhdGFUeXBlW10pID0+IHtcblx0XHRkYXRhQXJyYXkuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0cmV0dXJuIGEuaWQgLSBiLmlkO1xuXHRcdH0pO1xuXHRcdGlmIChkYXRhQXJyYXkubGVuZ3RoID4gMykge1xuXHRcdFx0cmV0dXJuIGRhdGFBcnJheS5zbGljZSgwLCAzKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGFBcnJheTtcblx0fTtcblxuXHR0eXBlIFVzZXJEYXRhID0ge1xuXHRcdGdyb3Vwczogc3RyaW5nW107XG5cdH07XG5cdGNvbnN0IGZldGNoVXNlckRhdGEgPSAoKTogUHJvbWlzZTxVc2VyRGF0YT4gPT4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRpZiAoIVVzZXJNZXNzYWdlKSB7XG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoJ1VzZXJNZXNzYWdlIGlzIG5vdCBkZWZpbmVkJykpO1xuXHRcdFx0fVxuXHRcdFx0JC5nZXQoXG5cdFx0XHRcdFVzZXJNZXNzYWdlLFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHVzZXJEYXRhOiBVc2VyRGF0YSA9IHtcblx0XHRcdFx0XHRcdGdyb3VwczogZGF0YS5xdWVyeS51c2Vyc1swXS5ncm91cHMgYXMgc3RyaW5nW10sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cdFx0XHRcdFx0cmVzb2x2ZSh1c2VyRGF0YSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdqc29uJ1xuXHRcdFx0KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7fSlcblx0XHRcdFx0LmNhdGNoKHJlamVjdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0ZmV0Y2hVc2VyRGF0YSgpXG5cdFx0LnRoZW4oKHVzZXJEYXRhOiBVc2VyRGF0YSkgPT4ge1xuXHRcdFx0aWYgKCF1c2VyRGF0YSB8fCAhQXJyYXkuaXNBcnJheSh1c2VyRGF0YS5ncm91cHMpKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdFx0bmV3IEVycm9yKCdJbnZhbGlkIHVzZXJEYXRhLmdyb3VwczogZXhwZWN0ZWQgYW4gYXJyYXkgYnV0IHJlY2VpdmVkIG5vbmUgb3IgYSBub24tYXJyYXkuJylcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYXRjaGVkR3JvdXBzID0gdXNlckRhdGEuZ3JvdXBzXG5cdFx0XHRcdC5maWx0ZXIoKGdyb3VwKTogZ3JvdXAgaXMgc3RyaW5nID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIGdyb3VwID09PSAnc3RyaW5nJyAmJiBPYmplY3QuaGFzT3duKExJQmRpY3Rpb25hcnksIGdyb3VwKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm1hcCgoZ3JvdXApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gTElCZGljdGlvbmFyeVtncm91cF07XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRpbnRlcmZhY2UgSW1hZ2VJdGVtIHtcblx0XHRcdFx0c3JjOiBzdHJpbmc7XG5cdFx0XHRcdGFpbWdzcmM6IHN0cmluZztcblx0XHRcdFx0aWQ6IG51bWJlcjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZpcnN0VGhyZWVJdGVtcyA9IEFycmF5RGF0YVNvcnQobWF0Y2hlZEdyb3VwcyBhcyB1bmtub3duIGFzIEltYWdlSXRlbVtdKTtcblx0XHRcdGNvbnN0IHZpcnR1YWxET00gPSBmaXJzdFRocmVlSXRlbXMubWFwKChpbWdEYXRhKSA9PiB7XG5cdFx0XHRcdHJldHVybiBpbWdEYXRhPy5zcmMgJiYgaW1nRGF0YT8uYWltZ3NyYyA/IGNyZWF0ZVZpcnR1YWxMaW5rSW1nKGltZ0RhdGEuc3JjLCBpbWdEYXRhLmFpbWdzcmMpIDogbnVsbDtcblx0XHRcdH0pIGFzIFZpcnR1YWxET01Ob2RlW107XG5cdFx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdFx0XHRjb25zdCAkZG9tbW91bnRwb2ludDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NvbnRlbnQgaGVhZGVyLm13LWJvZHktaGVhZGVyIC5wYWdlLWhlYWRpbmcgLm13LWluZGljYXRvcnMnKTtcblx0XHRcdHJlbmRlclZpcnR1YWxET00odmlydHVhbERPTSwgJGRvbW1vdW50cG9pbnQpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcign5pyA57uI6K+35rGC5aSx6LSl77yM5LiN5YaN6YeN6K+VOicsIGVycm9yKTtcblx0XHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPTyxJQUFNQSxnQkFBb0Q7RUFDaEVDLHFCQUFxQjtJQUNwQkMsSUFBSTtJQUNKQyxTQUNDO0lBQ0RDLEtBQUs7RUFDTjtFQUNBQyxTQUFTO0lBQ1JILElBQUk7SUFDSkMsU0FDQztJQUNEQyxLQUFLO0VBQ047RUFDQUUsT0FBTztJQUNOSixJQUFJO0lBQ0pDLFNBQVM7SUFDVEMsS0FBSztFQUNOO0VBQ0FHLGdCQUFnQjtJQUNmTCxJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0EsbUJBQW1CO0lBQ2xCRixJQUFJO0lBQ0pDLFNBQ0M7SUFDREMsS0FBSztFQUNOO0VBQ0FJLFdBQVc7SUFDVk4sSUFBSTtJQUNKQyxTQUFTO0lBQ1RDLEtBQUs7RUFDTjtFQUNBSyxVQUFVO0lBQ1RQLElBQUk7SUFDSkMsU0FBUztJQUNUQyxLQUFLO0VBQ047RUFDQU0sS0FBSztJQUNKUixJQUFJO0lBQ0pDLFNBQVM7SUFDVEMsS0FBSztFQUNOO0VBQ0FPLGVBQWU7SUFDZFQsSUFB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QU1FLEtBQUssNkRBQTZEO0FBQ3ZHaEUscUJBQWlCQyxZQUFZOEQsY0FBYztFQUM1QyxDQUFDLEVBQ0FYLE1BQU9HLFdBQVU7QUFDakJOLFlBQVFNLE1BQU0sZ0JBQWdCQSxLQUFLO0VBQ3BDLENBQUM7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogWyJMSUJkaWN0aW9uYXJ5IiwgInJlc3BvbnNpYmxlb3BlcmF0b3IiLCAiaWQiLCAiYWltZ3NyYyIsICJzcmMiLCAic3Rld2FyZCIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJwYXRyb2xsZXIiLCAic3VwcHJlc3MiLCAiYm90IiwgImF1dG9wYXRyb2xsZWQiLCAiY29uZmlybWVkIiwgIiQiLCAiV2lraVVSTE5hbWUiLCAid2luZG93IiwgImxvY2F0aW9uIiwgInBhdGhuYW1lIiwgIm1hdGNoUmVzdWx0IiwgInRlc3QiLCAiXyIsICJ1c2VyTmFtZU1hdGNoIiwgIm1hdGNoIiwgIlVzZXJNZXNzYWdlIiwgImNvbmNhdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNyZWF0ZVZpcnR1YWxMaW5rSW1nIiwgImhyZWYiLCAidGFnIiwgInByb3BzIiwgInN0eWxlIiwgImNoaWxkcmVuIiwgInJlbmRlclZpcnR1YWxET00iLCAidmlydHVhbERPTSIsICJjb250YWluZXIiLCAialF1ZXJ5IiwgImNyZWF0ZVJlYWxOb2RlIiwgInZpcnR1YWxOb2RlIiwgInJlYWxOb2RlIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvcE5hbWUiLCAiYXR0ciIsICJTdHJpbmciLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImNoaWxkVmlydHVhbE5vZGUiLCAidmFsdWUiLCAiY2hpbGRSZWFsTm9kZSIsICJhcHBlbmQiLCAiZXJyIiwgImUiLCAiZiIsICJyZWFsTm9kZXMiLCAibWFwIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIm5vZGUiLCAiQXJyYXlEYXRhU29ydCIsICJkYXRhQXJyYXkiLCAic29ydCIsICJhIiwgImIiLCAic2xpY2UiLCAiZmV0Y2hVc2VyRGF0YSIsICJQcm9taXNlIiwgInJlc29sdmUiLCAicmVqZWN0IiwgIkVycm9yIiwgImRhdGEiLCAidXNlckRhdGEiLCAiZ3JvdXBzIiwgInF1ZXJ5IiwgInVzZXJzIiwgImNvbnNvbGUiLCAibG9nIiwgInRoZW4iLCAiY2F0Y2giLCAiQXJyYXkiLCAiaXNBcnJheSIsICJlcnJvciIsICJtYXRjaGVkR3JvdXBzIiwgImZpbHRlciIsICJncm91cCIsICJoYXNPd24iLCAiZmlyc3RUaHJlZUl0ZW1zIiwgImltZ0RhdGEiLCAiJGJvZHkiLCAiJGRvbW1vdW50cG9pbnQiLCAiZmluZCJdCn0K
