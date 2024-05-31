const CLASS_NAME: string = 'gadget-mark_blocked';
const CLASS_NAME_LOADING: string = `${CLASS_NAME}--loading`;
const CLASS_NAME_USERLINK: string = `${CLASS_NAME}-userlink`;
const CLASS_NAME_USERLINK_INDEF: string = `${CLASS_NAME_USERLINK}--indef`;
const CLASS_NAME_USERLINK_PARTIAL: string = `${CLASS_NAME_USERLINK}--partial`;
const CLASS_NAME_USERLINK_TEMP: string = `${CLASS_NAME_USERLINK}--temp`;

const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_ARTICLE_PATH: string = mw.config.get('wgArticlePath');
const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_SCRIPT: string = mw.config.get('wgScript');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {
	CLASS_NAME_LOADING,
	CLASS_NAME_USERLINK,
	CLASS_NAME_USERLINK_INDEF,
	CLASS_NAME_USERLINK_PARTIAL,
	CLASS_NAME_USERLINK_TEMP,
	WG_ACTION,
	WG_ARTICLE_PATH,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_SCRIPT,
	IS_WG_EDIT_OR_SUBMIT_ACTION,
};
