type UserHasRight = typeof userHasRight;

const userHasRight = (right: string) => {
	const {wgUserRights} = mw.config.get();
	return (wgUserRights as string[])?.includes(right);
};

export {type UserHasRight, userHasRight};
