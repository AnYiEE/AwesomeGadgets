/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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
$(function () {
    var username = mw.user.getName()
    if (username) {
        username = username.replace(' ', '_'); //避免名称带空格时无法显示头像
        var src = 'https://youshou.wiki/extensions/Avatar/avatar.php?user=' + username;
    }
    else {
        var src = 'https://youshou.wiki/images/avatars/default/default.gif'
    }
    $('#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar').css({
        'background-image': 'url(' + src + ')',
    });
});
/* </nowiki> */
