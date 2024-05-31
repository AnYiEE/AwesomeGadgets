import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = $body.find(`.${OPTIONS.targetClass}`);
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
		// @ts-expect-error TS2304
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
		changeTags = generateChangeTags(ve.init.target.saveFields.wpChangeTags?.() ?? '');
		// @ts-expect-error TS2304
		ve.init.target.saveFields.wpChangeTags = (): string => {
			return changeTags;
		};
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append(checkboxLayout.$element);
	}
};

export {processVisualEditor};
