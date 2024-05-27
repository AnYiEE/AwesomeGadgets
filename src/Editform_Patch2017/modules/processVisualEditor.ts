import * as OPTIONS from '~/Editform_Patch2017/options.json';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}) => {
	// Missing label messages
	const $labels: JQuery = $body.find(`.${OPTIONS.targetClass}`).find('label');
	for (const label of $labels) {
		if (!label.textContent?.startsWith('⧼')) {
			continue;
		}

		const labelName = label.textContent.replace('⧼', '').replace('⧽', '');

		if (['minoredit', 'watchthis'].includes(labelName)) {
			label.textContent = getMessage(labelName as 'minoredit' | 'watchthis');
			label.title = getMessage(labelName as 'minoredit' | 'watchthis');
		}
	}

	// Missing copyright warning
	if (!$body.find(`.${OPTIONS.dialogLicenseId}`).children().length) {
		$body.find(`.${OPTIONS.dialogLicenseId}`).append(
			$('<div>')
				.addClass('fmbox plainlinks fmbox-system')
				.append($('<div>').addClass('mbox-text').html(getMessage('copyrightwarning')))
		);
	}
};

export {processVisualEditor};
