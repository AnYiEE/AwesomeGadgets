const CLASS_NAME: string = 'gadget-advanced_site_notices';
const CLASS_NAME_DISMISS: string = `${CLASS_NAME}__dismiss`;
const CLASS_NAME_NOTICE: string = `${CLASS_NAME}__notice`;
const CLASS_NAME_NOTICE_CONTENT: string = `${CLASS_NAME_NOTICE}__content`;
const CLASS_NAME_TITLE: string = `${CLASS_NAME}__title`;

const STORAGE_KEY: string = 'ext.gadget.AdvancedSiteNotices_dismissASN';

const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

export {
	CLASS_NAME,
	CLASS_NAME_DISMISS,
	CLASS_NAME_NOTICE,
	CLASS_NAME_NOTICE_CONTENT,
	CLASS_NAME_TITLE,
	STORAGE_KEY,
	WG_USER_GROUPS,
	WG_USER_LANGUAGE,
};
