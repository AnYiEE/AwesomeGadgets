// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
let windowManager;
let printDialog;

const printOptionsMain = {
	install: () => {
		const $body = $('body');
		const $printLink = $body.find('#t-print a');
		if ($printLink.length === 0) {
			return;
		}
		$printLink
			.off('click')
			.get(0)
			.addEventListener(
				'click',
				(e) => {
					printOptionsMain.createWindow();
					e.stopPropagation();
					e.preventDefault();
				},
				true
			); // Use capturing phase, to beat the other click listener
	},
	createWindow: () => {
		const PrintDialog = function (config) {
			PrintDialog.super.call(this, config);
		};
		OO.inheritClass(PrintDialog, OO.ui.ProcessDialog);
		PrintDialog.static.name = 'printdialog';
		PrintDialog.static.title = `${window.wgULS('打', '列')}印此${window.wgULS('页', '頁')}面`;
		PrintDialog.static.actions = [
			{action: 'print', label: `${window.wgULS('打', '列')}印`, flags: ['primary', 'progressive']},
			{label: '取消', flags: ['safe', 'close']},
		];
		PrintDialog.prototype.initialize = function (...args) {
			let checkbox;
			const fieldset = [];
			PrintDialog.super.prototype.initialize.apply(this, args);
			this.panel = new OO.ui.PanelLayout({
				padded: true,
				expanded: false,
			});
			this.content = new OO.ui.FieldsetLayout();
			for (const question of printOptionsMain.questions) {
				if (question.type === 'checkbox') {
					checkbox = new OO.ui.CheckboxInputWidget({
						selected: question.checked,
					});
					question.widget = checkbox;
					fieldset.push(
						new OO.ui.FieldLayout(checkbox, {
							label: question.label,
							align: 'inline',
						})
					);
				}
			}
			this.content.addItems(fieldset);
			this.panel.$element.append(this.content.$element);
			this.$body.append(this.panel.$element);
		};
		PrintDialog.prototype.getActionProcess = function (action) {
			const self = this;
			if (action === 'print') {
				return new OO.ui.Process(() => {
					// Get values of checkboxes
					for (const question of printOptionsMain.questions) {
						if (question.type === 'checkbox' && question.widget) {
							printOptionsMain[question.returnvalue] = question.widget.isSelected();
						}
					}
					self.close({action}).done(() => {
						printOptionsMain.changePrintCSS();
						printOptionsMain.otherEnhancements();
						window.print();
					});
				});
			}
			return PrintDialog.super.prototype.getActionProcess.call(this, action);
		};
		if (!windowManager) {
			windowManager = new OO.ui.WindowManager();
			const $body = $('body');
			$body.append(windowManager.$element);
		}
		if (!printDialog) {
			printDialog = new PrintDialog({
				size: 'medium',
			});
			windowManager.addWindows([printDialog]);
		}
		windowManager.openWindow(printDialog);
	},
	changePrintCSS() {
		/* Here we:
		 * - disable stylesheets that are print specific
		 * - make screen specific stylesheets also enabled for print medium
		 * - remove print specific stylerules
		 * - make screen specific stylerules also enabled for print medium
		 */
		let printStyle = '';
		if (this.enhanced === false) {
			let i;
			let j;
			let k;
			let rule;
			let hasPrint;
			let hasScreen;
			let rules;
			let stylesheet;
			const stylesheets = document.styleSheets;
			for (i = 0; i < stylesheets.length; i++) {
				stylesheet = stylesheets[i];
				if (!stylesheet.media) {
					continue;
				}
				if (stylesheet.media.mediaText && stylesheet.media.mediaText.includes('print')) {
					if (!stylesheet.media.mediaText.includes('screen')) {
						stylesheet.disabled = true;
					}
				} else if (
					stylesheet.media.mediaText &&
					stylesheet.media.mediaText.includes('screen') &&
					!stylesheet.media.mediaText.includes('print')
				) {
					try {
						stylesheet.media.appendMedium('print');
					} catch {
						stylesheet.media.mediaText += ',print';
					}
				}
				/* now test individual stylesheet rules */
				try {
					rules = stylesheet.cssRules || stylesheet.rules;
				} catch {
					/* Cross domain issue. */
					mw.log.warn('Not possible to correct stylesheet due to cross origin restrictions.');
					continue;
				}
				stylesheet.compatdelete = stylesheet.deleteRule || stylesheet.removeRule;
				if (rules) {
					for (j = 0; j < rules.length; j++) {
						rule = rules[j];
						hasPrint = false;
						hasScreen = false;
						if (rule.type === CSSRule.MEDIA_RULE && rule.media) {
							for (k = 0; k < rule.media.length; k++) {
								if (rule.media[k] === 'print') {
									hasPrint = true;
								} else if (rule.media[k] === 'screen') {
									hasScreen = true;
								}
							}
						} else {
							continue;
						}
						if (hasPrint && !hasScreen) {
							stylesheet.compatdelete(j);
							j--;
						} else if (hasScreen && !hasPrint) {
							try {
								rule.media.appendMedium('print');
							} catch {
								rule.media.mediaText += ',print';
							}
						}
					}
				}
			}
		}
		/* Add css to hide images */
		if (this.noimages) {
			printStyle += 'img,.thumb{display:none}';
		}
		/* Add css to hide references markers and the references lists */
		if (this.norefs) {
			printStyle += '.mw-headline[id="References"],ol.references,.reference{display:none}';
		}
		if (this.notoc) {
			printStyle += '#toc,.toc{display:none}';
		}
		if (this.nobackground) {
			printStyle += '*{background:none !important}';
		}
		if (this.blacktext) {
			printStyle += '*{color:#000 !important}';
		}
		if (printStyle) {
			document.querySelector('#printStyle')?.remove();
			const styleTag = document.createElement('style');
			styleTag.id = 'printStyle';
			styleTag.media = 'print';
			styleTag.append(document.createTextNode(printStyle));
			document.head.append(styleTag);
		}
	},
	/* Rewrite the "retrieved from" url to be readable */
	otherEnhancements: () => {
		const $body = $('body');
		const link = $body.find('div.printfooter a');
		link.text(decodeURI(link.text()));
	},
	questions: [
		{
			label: '隐藏界面元素',
			type: 'checkbox',
			checked: true,
			returnvalue: 'enhanced',
		},
		{
			label: '隐藏图片',
			type: 'checkbox',
			checked: false,
			returnvalue: 'noimages',
		},
		{
			label: '隐藏参考文献',
			type: 'checkbox',
			checked: false,
			returnvalue: 'norefs',
		},
		{
			label: '隐藏目录',
			type: 'checkbox',
			checked: false,
			returnvalue: 'notoc',
		},
		{
			label: '移除背景（您的浏览器或可以覆盖本设置）',
			type: 'checkbox',
			checked: false,
			returnvalue: 'nobackground',
		},
		{
			label: '强制将所有文字设置为黑色',
			type: 'checkbox',
			checked: true,
			returnvalue: 'blacktext',
		},
	],
};

$(function PrintOptions() {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}
	// This can be before the click listener by MW is installed. Instead,
	// re-add ourselves to the back of the document.ready list
	// use async timeoute to do this
	setTimeout(() => {
		$(printOptionsMain.install);
	}, 0);
});
