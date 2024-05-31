import React from 'ext.gadget.React';
import {api} from './api';
import {getMessage} from './i18n';

const patrolAllPages = ($body: JQuery<HTMLBodyElement>) => (
	<li>
		<a
			id="gadget-quick_patrol__all"
			onClick={(): void => {
				if (!confirm(getMessage('Patrol all pages?'))) {
					return;
				}
				$body.find('.not-patrolled .gadget-quick_patrol__patrolbtn').each((_index, element): void => {
					if ($(element).css('pointer-events') !== 'none') {
						element.click();
					}
				});
			}}
		>
			{`[${getMessage('Patrol all pages')}]`}
		</a>
	</li>
);

const patrolSinglePage = (index: string, revId: string) => (
	<a
		className="gadget-quick_patrol__patrolbtn"
		id={`gadget-quick_patrol__${index}`}
		dataset={{
			btnid: index.toString(),
			revid: revId,
		}}
		onClick={(event): void => {
			const {btnid, revid} = event.currentTarget.dataset;
			const params: ApiPatrolParams = {
				action: 'patrol',
				format: 'json',
				revid: Number(revid),
			};
			void api
				.postWithToken('patrol', params)
				.done(({error}): void => {
					if (error) {
						void mw.notify(getMessage('API') + error['info'], {
							tag: 'QuickPatrol',
							type: 'error',
						});
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
					void mw.notify(getMessage('AJAX'), {
						tag: 'QuickPatrol',
						type: 'error',
					});
					$(`#gadget-quick_patrol__${btnid}`).css('color', '#f00');
					console.error('[QuickPatrol] Ajax error:', error);
				});
		}}
	>
		{`[${getMessage('Patrol')}]`}
	</a>
);

export {patrolAllPages, patrolSinglePage};
