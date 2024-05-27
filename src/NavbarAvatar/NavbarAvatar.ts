import './NavbarAvatar.less';
let username = mw.user.getName();
let imgsrc = '';
if (username) {
	username = username.replace(' ', '_'); // 避免名称包含空格时无法显示头像
	imgsrc = `${mw.config.get('wgServer')}/extensions/Avatar/avatar.php?user=${username}`;
} else {
	imgsrc = `${mw.config.get('wgServer')}/images/avatars/default/default.gif`;
}
const $body: JQuery<HTMLBodyElement> = $('body');
$body.find('#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar').css({
	'background-image': `url(${imgsrc})`,
});
