import * as OPTIONS from '../../options.json';
import {WG_NAMESPACE_IDS} from '../constant';

const generateUserNamespaceTitles = (): string[] => {
	const userNamespaceTitles: string[] = [];

	for (const [namespace, id] of Object.entries(WG_NAMESPACE_IDS)) {
		if (!OPTIONS.userNamespaceNumbers.includes(id)) {
			continue;
		}

		userNamespaceTitles[userNamespaceTitles.length] = `${mw.util.escapeRegExp(namespace.replace(/_/g, ' '))}:`; // Replace `[].push()` to avoid polyfilling core-js
	}

	return userNamespaceTitles;
};

export {generateUserNamespaceTitles};
