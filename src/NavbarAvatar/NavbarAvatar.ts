import './NavbarAvatar.less';
let username = mw.user.getName();
let imgsrc = '';
if (username) {
	username = username.replace(' ', '_'); //避免名称带空格时无法显示头像
	imgsrc = `https://youshou.wiki/extensions/Avatar/avatar.php?user=${username}`;
} else {
	imgsrc = 'https://youshou.wiki/images/avatars/default/default.gif';
}
const $body: JQuery<HTMLBodyElement> = $('body');
$body.find('#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar').css({
	'background-image': `url(${imgsrc})`,
});
