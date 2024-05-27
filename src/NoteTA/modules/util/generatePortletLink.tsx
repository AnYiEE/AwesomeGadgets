import {PORTLET_CLASS} from '../constant';
import React from 'ext.gadget.React';
import {portletId} from '../initGlobalMethods';

const generatePortletLink = (hash: string): JQuery | undefined => {
	if (!portletId) {
		return;
	}

	const portletLink: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '汉/漢', `ca-noteTA-${hash}`);
	if (!portletLink) {
		return;
	}

	const style = {
		height: '85%',
		padding: '1px 3px',
	} as const satisfies React.CSSProperties;

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $portletLink: JQuery = $(portletLink).addClass(PORTLET_CLASS);
	$portletLink
		.find('a')
		.empty()
		.append(
			<div>
				<span
					style={{
						...style,
						background: '#d3e3f4',
						color: '#000',
					}}
				>
					{'汉'}
				</span>
				<span
					style={{
						...style,
						background: '#e9e9e9',
						color: '#434343',
					}}
				>
					{'漢'}
				</span>
			</div>
		);

	return $portletLink;
};

export {generatePortletLink};
