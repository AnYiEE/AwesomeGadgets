import './UserLinkAvatar.less';

/* eslint-disable unicorn/no-array-for-each */
document.querySelectorAll('.mw-userlink').forEach((item) => {
	const img = document.createElement('img');
	img.classList.add('userlink-avatar');
	img.src = `${mw.config.get('wgScriptPath')}/extensions/Avatar/avatar.php?user=${item.textContent}`;
	img.alt = `Avatar of ${item.textContent}`; // alt
	item.prepend(img);
});
