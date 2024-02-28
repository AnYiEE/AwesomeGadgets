const STORAGE_KEY: string = 'ext.gadget.CookieWarning_cookieConsent';

const LAST_STORAGE_VALUE: string | null = mw.storage.get(STORAGE_KEY) as string | null;

const URL_CONSENT_READ: string | null = mw.util.getParamValue('consentRead');

const WG_USER_NAME: string | null = mw.config.get('wgUserName');

export {LAST_STORAGE_VALUE, STORAGE_KEY, URL_CONSENT_READ, WG_USER_NAME};
