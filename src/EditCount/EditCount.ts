import {WG_USER_EDIT_COUNT} from './constant';

mw.loader.addStyleTag(
	`#pt-mycontris > a::after,
	.menu__item--userContributions > span > span::after {
		content:" (${WG_USER_EDIT_COUNT ?? 0})"
	}`
);
