/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 白给
 */
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroller = function () {
        function Scroller() {
                var _this = this;

                _classCallCheck(this, Scroller);

                this.scroller_focus_id = 0;
                this.scroller_items = document.getElementsByClassName('scroller-item');
                this.scroller_container = document.getElementsByClassName('scroller-container');
                this.scroller_item_width = this.scroller_items[0].offsetWidth;
                this.scroller_item_length = this.scroller_items.length;

                if (this.scroller_container.length == 0) {return 0}

                this.e_last_btn = document.getElementById('scroller-last-btn');
                this.e_next_Btn = document.getElementById('scroller-next-btn');

                this.scroller_items[0].classList.add('scroller-item-now');

                this.e_last_btn.addEventListener('click', function () {
                        _this.scroll_element_intoView(-1);
                });
                this.e_next_Btn.addEventListener('click', function () {
                        _this.scroll_element_intoView(1);
                });
        }

        _createClass(Scroller, [{
                key: 'scroll_element_intoView',
                value: function scroll_element_intoView(jump) {
                        var target = this.scroller_focus_id + jump;

                        if (target <= 0) {
                                target = 0;
                        }
                        if (target >= this.scroller_item_length) {
                                target = this.scroller_item_length - 1;
                        }

                        this.scroller_container[0].scrollTo(this.scroller_item_width * target, 0);

                        try {
                                this.scroller_items[this.scroller_focus_id].classList.remove('scroller-item-now');
                        } finally {}
                        this.scroller_items[target].classList.add('scroller-item-now');

                        this.scroller_focus_id = target;
                }
        }]);

        return Scroller;
}();

new Scroller();
/* </nowiki> */
