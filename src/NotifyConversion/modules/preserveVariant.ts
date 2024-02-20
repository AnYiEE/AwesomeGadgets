import {wgUserVariant} from './constant';

export const preserveVariant = (): void => {
	if (
		!wgUserVariant ||
		!wgUserVariant.includes('zh-') ||
		!(window.location.pathname.includes(`/${wgUserVariant}/`) && mw.util.getParamValue('variant') !== wgUserVariant)
	) {
		return;
	}
	$(document).on('keydown mousedown touchstart', 'a', function (): void {
		const self = this as HTMLAnchorElement;
		const originalHref: string | undefined = $(self).attr('href');
		if (!originalHref) {
			return;
		}
		let uri;
		try {
			uri = new mw.Uri(originalHref);
		} catch {
			return;
		}
		if (!('variant' in uri.query)) {
			if (originalHref.includes('/wiki/')) {
				self.href = `/${wgUserVariant}${originalHref.slice(5)}`;
			} else if (originalHref.includes('/index.php?')) {
				self.href = uri
					.extend({
						variant: wgUserVariant,
					})
					.getRelativePath();
			}
		}
	});
};
