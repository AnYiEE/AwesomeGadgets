import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const QuickPatrol = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');

	/* Patrol single page */
	$body.find('.not-patrolled').each((index, element): void => {
		const [time] = $(element).find('a');
		const timeHref: string | null | undefined = time?.getAttribute('href');
		const revIds: RegExpMatchArray | null | undefined = timeHref?.match(/oldid=([0-9]+)/);
		if (!revIds || !revIds[1]) {
			return;
		}
		const [, revId] = revIds;
		const $patrolBtn: JQuery<HTMLAnchorElement> = $<HTMLAnchorElement>('<a>')
			.addClass('gadget-quick_patrol__patrolbtn')
			.text(getMessage('[') + getMessage('Patrol') + getMessage(']'))
			.attr({
				id: `gadget-quick_patrol__${index}`,
				'data-btnid': index,
				'data-revid': revId,
			});
		$patrolBtn.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
			const api = initMwApi('QuickPatrol/2.0');
			const {btnid, revid} = (event.currentTarget as HTMLElement).dataset;
			void api
				.postWithToken('patrol', {
					action: 'patrol',
					format: 'json',
					revid: revid as string,
				})
				.done(({error}): void => {
					if (error) {
						void mw.notify(getMessage('API') + error['info'], {type: 'error', tag: 'QuickPatrol'});
						$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
					} else {
						$(`#gadget-quick_patrol__${btnid}`)
							.css({
								pointerEvents: 'none',
								color: '#888',
							})
							.text(getMessage('Patrolled'));
					}
				})
				.fail((error): void => {
					void mw.notify(getMessage('AJAX'), {type: 'error', tag: 'QuickPatrol'});
					console.error('[QuickPatrol] Ajax error:', error);
					$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
				});
		});
		$patrolBtn.appendTo(element);
	});
	/* Patrol all pages */
	const $patrolAllBtn: JQuery = $('<li>').append(
		$('<a>')
			.attr('id', 'gadget-quick_patrol__all')
			.text(getMessage('[') + getMessage('Patrol all pages') + getMessage(']'))
	);
	$patrolAllBtn.on('click', (): void => {
		if (!confirm(getMessage('Patrol all pages?'))) {
			return;
		}
		$body.find('.not-patrolled').each((index): void => {
			if ($(`#gadget-quick_patrol__${index}`).css('pointer-events') !== 'none') {
				$(`#gadget-quick_patrol__${index}`).trigger('click');
			}
		});
	});
	$patrolAllBtn.appendTo($body.find('#mw-content-text ul'));
};
