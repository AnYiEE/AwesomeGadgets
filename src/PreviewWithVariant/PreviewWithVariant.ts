/**
 * @description Add a "Preview with variant" option to the edit form.
 */
mw.hook('wikipage.editform').add(($editForm): void => {
	// Guard against double inclusions
	if (mw.config.get('wgPreviewWithVariantInitialized')) {
		return;
	}
	const $templateSandboxPreview: JQuery = $editForm.find('input[name="wpTemplateSandboxPreview"]');
	// It is possible that a user want to preview a page with a non-wikitext module
	// Do not return in this case
	if (mw.config.get('wgPageContentModel') !== 'wikitext' && !$templateSandboxPreview.length) {
		return;
	}
	const $layout: JQuery = $editForm.find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$layout.length) {
		return;
	}
	// Guard against double inclusions
	mw.config.set('wgPreviewWithVariantInitialized', true);
	const VARIANTS: {
		data: string;
		label: string;
	}[] = [
		{
			data: 'zh',
			label: window.wgULS('不转换', '不轉換'),
		},
		{
			data: 'zh-hans',
			label: '简体',
		},
		{
			data: 'zh-hant',
			label: '繁體',
		},
		{
			data: 'zh-cn',
			label: '中国大陆简体',
		},
		{
			data: 'zh-hk',
			label: '中國香港繁體',
		},
		{
			data: 'zh-mo',
			label: '中國澳門繁體',
		},
		{
			data: 'zh-my',
			label: '马来西亚简体',
		},
		{
			data: 'zh-sg',
			label: '新加坡简体',
		},
		{
			data: 'zh-tw',
			label: '中國臺灣繁體',
		},
	];
	const uriVariant: string | null = mw.util.getParamValue('variant');
	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: Boolean(uriVariant),
	});
	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		$overlay: true,
		disabled: !checkbox.isSelected(),
		menu: {
			items: VARIANTS.map(({data, label}): OO.ui.MenuOptionWidget => {
				return new OO.ui.MenuOptionWidget({
					data,
					label,
				});
			}),
		},
	});
	dropdown.getMenu().selectItemByData(mw.config.get('wgUserVariant') || uriVariant || mw.user.options.get('variant'));
	checkbox.on('change', (selected: boolean | string): void => {
		dropdown.setDisabled(!selected);
	});
	const getSelectedVariant = (): string | undefined => {
		if (!checkbox.isSelected()) {
			return;
		}
		const selectedItem: OO.ui.OptionWidget | null = dropdown
			.getMenu()
			.findSelectedItem() as OO.ui.OptionWidget | null;
		return selectedItem ? (selectedItem.getData() as string) : undefined;
	};
	const manipulateActionUrl = (): void => {
		const selectedVariant: string | undefined = getSelectedVariant();
		const originalAction: string | undefined = $editForm.attr('action');
		if (selectedVariant && originalAction) {
			$editForm.attr(
				'action',
				new mw.Uri(originalAction)
					.extend({
						variant: selectedVariant,
					})
					.getRelativePath()
			);
		}
	};
	const manipulateVariantConfig = (): void => {
		mw.config.set('wgUserVariant', getSelectedVariant() || (mw.user.options.get('variant') as string));
	};
	$editForm
		.find('input[name=wpPreview]')
		.on('click', mw.user.options.get('uselivepreview') ? manipulateVariantConfig : manipulateActionUrl);
	$templateSandboxPreview.on('click', manipulateActionUrl);
	dropdown.getMenu().on('select', manipulateVariantConfig);
	const checkboxField: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: window.wgULS('预览字词转换', '預覽字詞轉換'),
	});
	const dropdownField: OO.ui.FieldLayout<OO.ui.DropdownWidget> = new OO.ui.FieldLayout(dropdown, {
		align: 'top',
		label: window.wgULS('使用该语言变体显示预览：', '使用該語言變體顯示預覽：'),
		invisibleLabel: true,
	});
	$layout.append($('<div>').attr('id', 'pwv-area').append(checkboxField.$element, dropdownField.$element));
});
