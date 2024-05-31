type UserIsInGroup = typeof userIsInGroup;

const userIsInGroup = (group: string) => {
	const {wgUserGroups, wgGlobalGroups} = mw.config.get();
	return wgUserGroups?.includes(group) || (wgGlobalGroups as string[])?.includes(group);
};

export {type UserIsInGroup, userIsInGroup};
