import {QuickPatrol} from './modules/core';

if (mw.config.get('wgCanonicalSpecialPageName') === 'Newpages') {
	$(QuickPatrol);
}
