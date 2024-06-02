import './ShowAvatar.less';
/* eslint-disable no-jquery/no-parse-html-literal */

const avatarUrl = new mw.Uri(mw.config.get('wgServer'));
avatarUrl.query['user'] = mw.config.get('wgPageName').replace(/^user:/i, '');
avatarUrl.path = '/extensions/Avatar/avatar.php';
const imgUrl = new mw.Uri(avatarUrl);
imgUrl.query['user'] = mw.config.get('wgUserName');
const img = $('<img>').attr({
	src: imgUrl,
	title: '上传头像',
});
const link = $('<a>')
	.attr('href', `${mw.config.get('wgServer')}/wiki/Special:UploadAvatar`)
	.append(img);
const $body: JQuery<HTMLBodyElement> = $('body');
$body.find('#pt-userpage').before($('<li id="pt-avatar"></li>').append(link));
if (mw.config.get('wgNamespaceNumber') === 2 && !mw.config.get('wgPageName').includes('/')) {
	const hrefUrl = new mw.Uri(avatarUrl);
	hrefUrl.path = '/wiki/Special:Viewavatar';
	const srcUrl = new mw.Uri(avatarUrl);
	const $firstHeading = $body.find('.ns-2 #firstHeading');
	$firstHeading.prepend(
		$('<a/>')
			.attr({
				href: hrefUrl,
				title: '查看头像',
			})
			.prepend(
				$('<img/>')
					.attr({
						src: srcUrl,
						id: 'user-rootpage-avatar',
					})
					.css({
						width: '1.2em',
						height: '1.2em',
					})
			)
	);
}
