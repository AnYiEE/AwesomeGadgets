import type {UserRights} from './types';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

const groups: Record<UserRights, string[]> = {
	// 全站管理型权限
	responsibleoperator: [],
	bureaucrat: [],
	checkuser: [],
	suppress: [],
	sysop: [],
	'interface-admin': [],
	templateeditor: [],
	importer: [],
	// 页面管理型权限
	patroller: [],
	autopatrolled: [],
	// 大量操作型权限
	eventsponsor: [],
	'massmessage-sender': [],
	// 确认权限
	confirmed: [],
	autoconfirmed: [],
	// 机器权限
	bot: [],
	flood: [],
	// 豁免
	'ipblock-exempt': [],
	'rnrsverify-exempt': [],
};

export const markUserRights = async ($content: JQuery): Promise<void> => {
	const $userLinks: JQuery = $content.find('a.mw-userlink:not(.mw-anonuserlink)');
	let users: string[] = [];
	const queue: Array<typeof users> = [];
	$userLinks.each((_index: number, {textContent}: {textContent: string | null}): void => {
		const userLinkText: string | undefined = textContent?.toString();
		if (userLinkText) {
			users[users.length] = userLinkText; // Replace `users.push(userLinkText)` to avoid polyfilling core-js
		}
		users = [...new Set(users)];
		if (users.length === 50) {
			queue[queue.length] = users; // Replace `queue.push(users)` to avoid polyfilling core-js
			users = [];
		}
	});
	if (users.length > 0) {
		queue[queue.length] = users; // Replace `queue.push(users)` to avoid polyfilling core-js
	}
	const getUsername = (url: string): string => {
		if (!url) {
			return '';
		}
		const username: string | null = mw.util.getParamValue('title', url);
		const decode = (string: string, replace: (_string: string) => string): string => {
			return decodeURIComponent(
				((): string => {
					try {
						return decodeURIComponent(replace(string));
					} catch {
						return replace(string).replace(/%(?!\d+)/g, '%25');
					}
				})()
			);
		};
		if (username) {
			return decode(username, (string: string): string => {
				return string.replace('User:', '').replace(/_/g, ' ');
			});
		}
		const usernameMatch: RegExpMatchArray | null = url.match(/\/wiki\/User:(.+?)$/);
		if (usernameMatch?.[1]) {
			return decode(usernameMatch[1], (string: string): string => {
				return string.replace(/_/g, ' ');
			});
		}
		return '';
	};
	const done = (): void => {
		$userLinks.each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			if ($element.parents('li').find('.gadgets-markrights').length) {
				return;
			}
			const username: string = getUsername($element.attr('href') ?? '');
			if (!username) {
				return;
			}
			const $sups: JQuery = $('<span>').addClass('gadgets-markrights');
			for (const group in groups) {
				if (!Object.hasOwn(groups, group)) {
					continue;
				}
				const groupsGroup: string[] = groups[group as never] ?? [];
				if (!groupsGroup.includes(username)) {
					continue;
				}
				const className: string = `gadgets-markrights__${group}`;
				if ($sups.find('sup').hasClass(className)) {
					return;
				}
				$sups.append(
					// The following classes are used here:
					// * gadget-markrights__responsibleoperator
					// * gadget-markrights__bureaucrat
					// * gadget-markrights__checkuser
					// * gadget-markrights__suppress
					// * gadget-markrights__sysop
					// * gadget-markrights__interface-admin
					// * gadget-markrights__templateeditor
					// * gadget-markrights__importer
					// * gadget-markrights__patroller
					// * gadget-markrights__autopatrolled
					// * gadget-markrights__eventsponsor
					// * gadget-markrights__massmessage-sender
					// * gadget-markrights__confirmed
					// * gadget-markrights__autoconfirmed
					// * gadget-markrights__bot
					// * gadget-markrights__flood
					// * gadget-markrights__ipblock-exempt
					// * gadget-markrights__rnrsverify-exempt
					$('<sup>')
						.addClass(className)
						.attr({
							alt: getMessage(group as UserRights),
							title: getMessage(group as UserRights),
						})
				);
			}
			$element.after($sups);
		});
	};
	const api: mw.Api = initMwApi('MarkRights/1.1');
	for (const ususers of queue) {
		const params: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			usprop: 'groups',
			ususers,
		};
		const response = await api.get(params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const _users: {groups: string; name: string}[] = response['query']?.users ?? [];
		for (const user of _users) {
			if (!user || !user.groups) {
				continue;
			}
			for (const group in groups) {
				if (!Object.hasOwn(groups, group)) {
					continue;
				}
				const groupsGroup: string[] = groups[group as never] as string[];
				if (user.groups.includes(group)) {
					groupsGroup[groupsGroup.length] = user.name; // Replace `groupsGroup.push(user.name)` to avoid polyfilling core-js
				}
			}
		}
		done();
	}
};
