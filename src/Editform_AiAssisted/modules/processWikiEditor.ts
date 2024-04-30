import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import {getMessage} from './i18n';

const processWikiEditor = ({$body, $editForm}: {$body: JQuery<HTMLBodyElement>; $editForm?: JQuery}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = ($editForm as JQuery).find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(OPTIONS.inputId);

	checkbox.on('change', (): void => {
		const changeTag: string = 'AI_assisted';
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';

		const $wpChangeTags: JQuery = $('<input>').attr({
			id: 'wpChangeTags',
			name: 'wpChangeTags',
			type: 'hidden',
			value: '',
		});
		$body = ($editForm as JQuery).parents('body');
		const $originWpChangeTags: JQuery = $body.find('input[name=wpChangeTags]');
		if (!$originWpChangeTags.length) {
			$body.prepend($wpChangeTags);
		}
		changeTags = generateChangeTags($originWpChangeTags.val()?.toString() ?? '');
		$originWpChangeTags.val(changeTags);
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append(checkboxLayout.$element);
	}
};

export {processWikiEditor};
