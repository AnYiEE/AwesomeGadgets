import {IS_LOG, RRD_PAGE} from './constant';
import {type rrdConfig, type rrdConfigCheckBoxes, type rrdConfigOthers} from './types';
import DialogInner from '../components/DialogInner';
import React from 'ext.gadget.React';
import ReportButton from '../components/ReportButton';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

const config: rrdConfig = {
	checkboxes: {},
	others: {},
};
let ids: string[] = [];
let $dialog: JQuery;

const loadIDs = (): void => {
	const boxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
	for (const box of boxes) {
		if (box.type === 'checkbox' && box.checked) {
			const idRegex: RegExp = /ids\[(\d+)]/;
			const idArray: RegExpExecArray | null = idRegex.exec(box.name);
			if (idArray && idArray[1] !== undefined) {
				ids.push(idArray[1]);
			}
		}
	}
};

const submit = async (toHide: string, reason: string, otherReasons: string): Promise<void> => {
	ids = [...new Set(ids)];
	const rrdArr: string[] = [
		'{{Revdel',
		'|status = ',
		`|article = ${mw.config.get('wgPageName')}`,
		`|set = ${toHide}`,
		`|reason = ${reason}${otherReasons}`,
	];
	for (const [index, id] of ids.entries()) {
		rrdArr.push(`|id${index + 1} = ${id}`);
	}
	rrdArr.push('}}\n--~~'.concat('~~'));
	const api: mw.Api = initMwApi('RRD/2.0');
	try {
		const params: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: 'revisions',
			titles: RRD_PAGE,
			rvprop: 'content',
		};
		const {query} = await api.get(params);
		let content: string | undefined;
		if (query.pages) {
			[{content}] = query.pages[0].revisions;
		}
		if (content === undefined) {
			void mw.notify(`Error when loading page ${RRD_PAGE}: missing`, {tag: 'RRD', type: 'error'});
			return;
		}
		try {
			const _params: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title: RRD_PAGE,
				text: `${content}\n\n${rrdArr.join('\n')}`,
				summary: getMessage('editSummary'),
			};
			const result = await api.postWithEditToken(_params);
			if (result['edit']?.result === 'Success') {
				location.replace(mw.util.getUrl(RRD_PAGE));
			} else if (result['error']?.code) {
				void mw.notify(`Some errors occured while saving page: ${result['error'].code}`, {
					tag: 'RRD',
					type: 'error',
				});
			} else {
				void mw.notify('Some errors occured while saving page: unknown', {
					tag: 'RRD',
					type: 'error',
				});
			}
		} catch {
			void mw.notify(`Error when editing page ${RRD_PAGE}`, {tag: 'RRD', type: 'error'});
		}
	} catch {
		void mw.notify(`Error when loading page ${RRD_PAGE}`, {tag: 'RRD', type: 'error'});
	}
};

const updateConfig = (): void => {
	const checkBoxes: rrdConfigCheckBoxes = {};
	if ((document.querySelector('#rrd__hide-content') as HTMLInputElement)?.checked) {
		checkBoxes.rrdHideContent = true;
	}
	if ((document.querySelector('#rrd__hide-username') as HTMLInputElement)?.checked) {
		checkBoxes.rrdHideUsername = true;
	}
	if ((document.querySelector('#rrd__hide-summary') as HTMLInputElement)?.checked) {
		checkBoxes.rrdHideSummary = true;
	}
	config.checkboxes = checkBoxes;
	const others: rrdConfigOthers = {
		rrdReason: (document.querySelector('#rrd__reason') as HTMLInputElement)?.value,
		rrdOtherReasons: (document.querySelector('#rrd__other-reasons') as HTMLInputElement)?.value,
	};
	config.others = others;
};

const loadConfig = (): void => {
	for (const [id, value] of Object.entries(config.others)) {
		if (document.querySelector(`#${id}`) !== null) {
			(document.querySelector(`#${id}`) as HTMLInputElement).value = value;
		}
	}
	for (const [id, value] of Object.entries(config.checkboxes)) {
		if (value === true && document.querySelector(`#${id}`) !== null) {
			(document.querySelector(`#${id}`) as HTMLInputElement).checked = true;
		}
	}
};

const showDialog = (): void => {
	loadIDs();
	if (!ids.length) {
		void mw.notify(getMessage('errNoRevisionProvided'), {tag: 'RRD', type: 'error'});
		return;
	}
	const html = <DialogInner />;
	if ($dialog) {
		$dialog.html(html).dialog('open');
		loadConfig();
		return;
	}
	$dialog = $(html).dialog({
		title: getMessage('dialogTitle'),
		minWidth: 515,
		minHeight: 150,
		close: updateConfig,
		buttons: [
			{
				text: getMessage('dialogButtonSubmit'),
				click(): void {
					$(this).dialog('close');
					const reason: string | undefined = config.others.rrdReason;
					let otherReasons: string | undefined = config.others.rrdOtherReasons;
					if (otherReasons && reason) {
						otherReasons = `，${otherReasons}`;
					}
					const toHide: string[] = [];
					if (config.checkboxes.rrdHideContent) {
						toHide.push(IS_LOG ? getMessage('hideLog') : getMessage('hideContent'));
					}
					if (config.checkboxes.rrdHideUsername) {
						toHide.push(getMessage('hideUsername'));
					}
					if (config.checkboxes.rrdHideSummary) {
						toHide.push(getMessage('hideSummary'));
					}
					let cont: boolean = true;
					if (!toHide.length) {
						void mw.notify(getMessage('errNoItemProvided'), {tag: 'RRD', type: 'error'});
						return;
					}
					if (!reason && !otherReasons) {
						cont = confirm(getMessage('warnNoReasonProvided'));
					}
					if (cont) {
						void submit(toHide.join('、'), reason ?? '', otherReasons ?? '');
					}
				},
			},
			{
				text: getMessage('dialogButtonCancel'),
				click(): void {
					$(this).dialog('close');
				},
			},
		],
	});
};

export const main = (): void => {
	// For action=history and Special:Log
	for (const element of document.querySelectorAll(
		'.historysubmit.mw-history-compareselectedversions-button, .editchangetags-log-submit.mw-log-editchangetags-button'
	)) {
		const reportButton = <ReportButton onClick={showDialog} />;
		element.after(reportButton);
	}
};
