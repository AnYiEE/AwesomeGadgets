import './UserLinkAvatar.less';

/* eslint-disable no-jquery/no-constructor-attributes */
/* eslint-disable no-jquery/no-parse-html-literal */

const magnifierOn = +mw.user.options.get('gadget-userLinkAvatarMagnifier', 0) === 1;
const $window = $(window);
const loadingImage = 'https://youshou.wiki/images/d/de/Ajax-loader.gif';
$window.on('load.UserLinkAvatar', () => {
	const images: (HTMLElement | undefined)[] = [];
	$('.mw-userlink:not(.user-avatar-added)').each((_, ele) => {
		const item = $(ele);
		const src = `https://commons.moegirl.org.cn/extensions/Avatar/avatar.php?user=${encodeURIComponent(item.text())}`;
		const img = $('<img/>')
			.on('error', () => {
				window.setTimeout(() => {
					img.closest('.userlink-avatar').remove();
				}, 0);
			})
			.addClass('userlink-avatar-small')
			.attr({
				'data-src': src,
				src: loadingImage,
			});
		images.push(img[0]);
		const bigAvatar = $('<span/>').addClass('userlink-avatar');
		item.prepend(bigAvatar.append(img));
		item.addClass('user-avatar-added');
		if (magnifierOn) {
			const magnifierImg = $('<img/>', {
				attr: {
					'data-src': src,
					src: loadingImage,
				},
				on: {
					error: () => {
						window.setTimeout(() => {
							magnifierImg.closest('.userlink-avatar-large').remove();
						}, 0);
					},
				},
			});
			images.push(magnifierImg[0]);
			bigAvatar
				.on('click', () => {
					window.open(
						`https://youshou.wiki/index.php?title=Special%3A查看头像&user=${encodeURIComponent(item.text())}`,
						'_blank'
					);
					return false;
				})
				.append(
					$('<div/>', {
						attr: {
							class: 'userlink-avatar-large',
						},
					}).prepend(magnifierImg)
				)
				.addClass('userlink-avatar-hover');
			item.before(bigAvatar);
			bigAvatar.add(bigAvatar.children()).attr('title', `查看用户${item.text()}的头像`);
		}
	});
});
$(() => {
	$window.trigger('load.UserLinkAvatar');
});
