import React from 'ext.gadget.React';

type OouiConfirmWithStyle = (message: string) => JQuery.Promise<boolean>;

/**
 * @requires oojs-ui-windows
 * @param {string} [message]
 * @return {JQuery.Promise<boolean>}
 */
const oouiConfirmWithStyle: OouiConfirmWithStyle = (message) =>
	OO.ui
		.confirm(
			$(
				<div
					className="oo-ui-window-foot"
					style={{
						border: '.1rem solid #0645ad',
						display: 'flex',
						justifyContent: 'space-evenly',
					}}
				>
					<span
						style={{
							fontSize: '1.2rem',
							fontWeight: '500',
							lineHeight: '1.8',
							padding: '.4em 0',
						}}
					>
						{message}
					</span>
				</div>
			) as JQuery
		)
		.then((isConfirm: boolean): boolean => isConfirm);

export {type OouiConfirmWithStyle, oouiConfirmWithStyle};
