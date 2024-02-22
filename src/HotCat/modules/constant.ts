const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

export {WG_USER_GROUPS, WG_USER_LANGUAGE};
