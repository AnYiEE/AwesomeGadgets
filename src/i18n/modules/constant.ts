const WG_CONTENT_LANGUAGE: string = mw.config.get('wgContentLanguage');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_USER_VARIANT: string | null = mw.config.get('wgUserVariant');

export {WG_CONTENT_LANGUAGE, WG_USER_LANGUAGE, WG_USER_VARIANT};
