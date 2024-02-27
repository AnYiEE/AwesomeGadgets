import {WG_USER_VARIANT} from './constant';

export const preserveVariant = (): void => {
	if (
		!WG_USER_VARIANT ||
		!WG_USER_VARIANT.includes('zh-') ||
		!(
			window.location.pathname.includes(`/${WG_USER_VARIANT}/`) &&
			mw.util.getParamValue('variant') !== WG_USER_VARIANT
		)
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
				self.href = `/${WG_USER_VARIANT}${originalHref.slice(5)}`;
			} else if (originalHref.includes('/index.php?')) {
				self.href = uri
					.extend({
						variant: WG_USER_VARIANT,
					})
					.getRelativePath();
			}
		}
	});
};
