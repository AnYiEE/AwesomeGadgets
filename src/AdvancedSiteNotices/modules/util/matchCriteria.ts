import {WG_USER_GROUPS, WG_USER_LANGUAGE} from '../constant';

// eslint-disable-next-line camelcase
const in_group = (group: string): boolean => {
	return WG_USER_GROUPS.includes(group);
};

// eslint-disable-next-line camelcase
const only_for = (userLanguage: string): boolean => {
	return userLanguage === WG_USER_LANGUAGE;
};

const matchCriteria = ($notice: JQuery): boolean => {
	const cache = $notice.data('asn-cache') as boolean | undefined;
	if (cache !== undefined) {
		return cache;
	}

	const testCriteria = (criteria: string): boolean => {
		// FIXME: This shouldn't be using eval on data entered in wikitext.
		// If that data is malformed it will throw an exception e.g. criteria = "(false))"
		try {
			// eslint-disable-next-line no-eval
			return window.eval(criteria) as boolean;
		} catch {
			return false;
		}
	};

	let result: boolean = false;

	const criteriaData: string = (($notice.data('asn-criteria') as string | undefined) ?? '').trim();
	if (criteriaData) {
		try {
			result = testCriteria(mw.Uri.decode(criteriaData));
		} catch {
			result = true;
		}
	} else if ($notice.attr('class')) {
		let criteria: boolean | undefined;

		if ($notice.hasClass('only_sysop')) {
			criteria ||= in_group('sysop') || in_group('bureaucrat');
		}
		if ($notice.hasClass('only_logged')) {
			criteria ||= in_group('user');
		}
		if ($notice.hasClass('only_anon')) {
			criteria ||= !in_group('user');
		}
		if ($notice.hasClass('only_zh_cn')) {
			criteria ||= only_for('zh-cn');
		}
		if ($notice.hasClass('only_zh_sg')) {
			criteria ||= only_for('zh-sg');
		}
		if ($notice.hasClass('only_zh_my')) {
			criteria ||= only_for('zh-my');
		}
		if ($notice.hasClass('only_zh_hk')) {
			criteria ||= only_for('zh-hk');
		}
		if ($notice.hasClass('only_zh_mo')) {
			criteria ||= only_for('zh-mo');
		}
		if ($notice.hasClass('only_zh_tw')) {
			criteria ||= only_for('zh-tw');
		}

		if (criteria === undefined) {
			criteria = true;
		}

		result = criteria;
	} else {
		result = true;
	}

	$notice.data('asn-cache', result);

	return result;
};

export {matchCriteria};
