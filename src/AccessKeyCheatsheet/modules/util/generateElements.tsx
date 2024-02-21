import React from 'ext.gadget.React';
import {getMessage} from '../i18n';

const generateElements = (
	$body: JQuery<HTMLBodyElement>
): {
	$table: JQuery;
	$opener: JQuery<HTMLAnchorElement>;
} => {
	const table = (
		<table
			className="wikitable"
			style={{
				width: '100%',
			}}
		>
			{[...$body.find('[accesskey]')].reduce(
				(accumulator, element) => [
					...accumulator,
					<>
						<tr>
							<th>{element.accessKey.toUpperCase()}</th>
							<td>
								{(
									element.getAttribute('aria-label') ||
									element.title ||
									element.textContent ||
									(element as HTMLInputElement).value ||
									$body.find(`label[for="${element.id}"]`).text()
								)
									.replace(/\s*?\[.+?]$/, '')
									.trim()}
							</td>
						</tr>
					</>,
				],
				[] as React.ReactElement[]
			)}
		</table>
	);
	const $table = $(table) as JQuery;

	const $opener = $(<a accessKey="?">{getMessage('Text')}</a>) as JQuery<HTMLAnchorElement>;

	return {
		$table,
		$opener,
	};
};

export {generateElements};
