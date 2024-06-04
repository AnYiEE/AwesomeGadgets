import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {getMessage} from './i18n';

const updateLinks = ($content: JQuery): void => {
	const $body: JQuery<HTMLBodyElement> = $content.parents('body');
	const $mwRollbackLinkA: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>('.mw-rollback-link a');

	$mwRollbackLinkA.off('click');

	$mwRollbackLinkA.on(
		'click',
		filterAlteredClicks((event: JQuery.ClickEvent): void => {
			event.preventDefault();

			let {href} = event.currentTarget as HTMLAnchorElement;

			let summary: string | null = prompt(getMessage('Prompt'));
			if (summary === null) {
				/* empty */
			} else if (summary === '') {
				location.assign(href);
			} else {
				const username: string | null = mw.util.getParamValue('from', href);
				if (username) {
					summary = getMessage('Rollback edits by').replaceAll('$1', username) + summary;
				} else {
					summary = getMessage('Rollback edits by a hidden user') + summary;
				}

				href += `&summary=${encodeURIComponent(summary)}`;

				location.assign(href);
			}
		})
	);

	$mwRollbackLinkA.css('color', '#099');
};

export {updateLinks};
