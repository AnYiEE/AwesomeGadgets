import './ShowAvatar.less';
$(() => {
	const avatarUrl = new mw.Uri('https://youshou.wiki/');
	avatarUrl.query['user'] = mw.config.get('wgPageName').replace(/^user:/i, '');
	avatarUrl.path = '/extensions/Avatar/avatar.php';
	const imgUrl = new mw.Uri(avatarUrl);
	imgUrl.query['user'] = mw.config.get('wgUserName');

	if (mw.config.get('wgNamespaceNumber') === 2 && !mw.config.get('wgPageName').includes('/')) {
		const hrefUrl = new mw.Uri(avatarUrl);
		hrefUrl.path = '/wiki/Special:Viewavatar';
		const srcUrl = new mw.Uri(avatarUrl);
		$('.ns-2', '#firstHeading').prepend(
			$('<a>')
				.attr({
					href: hrefUrl,
					title: '查看头像',
				})
				.prepend(
					$('<img>')
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
});
