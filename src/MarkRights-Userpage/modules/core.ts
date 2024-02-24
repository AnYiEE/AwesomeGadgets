import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_RELEVANT_USER_NAME} from './constant';
import type {UserRights} from '~/MarkRights/modules/types';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const getPermissions = async (): Promise<void> => {
	if (!WG_RELEVANT_USER_NAME) {
		return;
	}
	const api: mw.Api = initMwApi('MarkRights-Userpage/1.0');
	try {
		const listUsersParams: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			ususers: WG_RELEVANT_USER_NAME,
			usprop: 'groups',
		};
		const {query} = await api.get(listUsersParams);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const [{groups}]: [{groups: UserRights[]}] = query.users;
		if (WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes('responsibleoperator')) {
			appendIcon(getMessage('Webmaster'), 'responsibleoperator');
		}
		if (groups.includes('bureaucrat')) {
			appendIcon(getMessage('Bureaucrat'), 'bureaucrat');
		}
		if (groups.includes('checkuser')) {
			appendIcon(getMessage('CheckUser'), 'checkuser');
		}
		if (groups.includes('suppress')) {
			appendIcon(getMessage('Suppress'), 'suppress');
		}
		if (groups.includes('sysop')) {
			appendIcon(getMessage('SysOp'), 'sysop');
		}
		if (groups.includes('interface-admin')) {
			appendIcon(getMessage('InterfaceAdmin'), 'interface-admin');
		}
		if (groups.includes('templateeditor')) {
			appendIcon(getMessage('TemplateEditor'), 'templateeditor');
		}
		if (groups.includes('importer')) {
			appendIcon(getMessage('Importer'), 'importer');
		}
		if (groups.includes('patroller')) {
			appendIcon(getMessage('Patroller'), 'patroller');
		}
		if (groups.includes('autopatrolled')) {
			appendIcon(getMessage('AutoPatrolled'), 'autopatrolled');
		}
		if (groups.includes('massmessage-sender')) {
			appendIcon(getMessage('MassMessageSender'), 'massmessage-sender');
		}
		if (groups.includes('autoconfirmed')) {
			appendIcon(getMessage('AutoConfirmed'), 'autoconfirmed');
		} else if (groups.includes('confirmed')) {
			appendIcon(getMessage('Confirmed'), 'confirmed');
		}
		if (groups.includes('rnrsverify-exempt')) {
			appendIcon(getMessage('RNRSVerifyExempt'), 'rnrsverify-exempt');
		}
		if (
			groups.includes('bot') &&
			!SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) // Already shown in GeoLocationViewer
		) {
			appendIcon(getMessage('Bot'), 'bot');
		}
		if (groups.includes('flood')) {
			appendIcon(getMessage('Flood'), 'flood');
		}
		if (groups.includes('ipblock-exempt')) {
			appendIcon(getMessage('IPBlockExempt'), 'ipblock-exempt');
		}
	} catch {}
};
