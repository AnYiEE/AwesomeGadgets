import {URL_LIFILTER, URL_LIFILTER_CASE, URL_LIFILTER_EXPR, URL_LIFILTER_HILIGHT, URL_LIFILTER_INV} from './constant';
import {MESSAGES} from './messages';

class LogFilter {
	private readonly rightsLogOnly = location.href.includes('type=rights') || location.href.includes('Log/rights');
	private lastClicked = false;
	private $body: JQuery<HTMLBodyElement>;

	public constructor($body: JQuery<HTMLBodyElement>) {
		this.$body = $body;
		// Define interface messages
		mw.messages.set(MESSAGES);
	}

	public addPortletLink(): void {
		// Create portlet link
		const portletLink: HTMLLIElement | null = mw.util.addPortletLink(
			this.$body.find('#p-cactions').length ? 'p-cactions' : 'p-tb',
			'#',
			LogFilter.msg('portlet-text'),
			'ca-rxfilter',
			LogFilter.msg('portlet-description')
		);
		// Bind click listener
		if (portletLink) {
			const $portletLink: JQuery = $(portletLink);
			$portletLink.find('a').on('click', (event: JQuery.ClickEvent): void => {
				event.preventDefault();
				this.buildForm();
			});
		}
		// Display form direclty?
		if (URL_LIFILTER || URL_LIFILTER_EXPR) {
			this.buildForm();
		}
	}

	private buildForm(): void {
		const $pageTop: JQuery = this.$body.find('#contentSub,#topbar');
		if (!$pageTop.length) {
			return;
		}

		let fieldsetHtml: string = '';
		let oldInput: string = '';
		const instructions: string = this.rightsLogOnly
			? LogFilter.msg('rights-list-instructions')
			: LogFilter.msg('other-list-instructions');

		this.$body.find('#ca-rxfilter').hide();

		// Set up config
		const casing: boolean = URL_LIFILTER_CASE === '1';
		const hilight: boolean = URL_LIFILTER_HILIGHT === '1';
		const inverted: boolean = URL_LIFILTER_INV === '1';

		// Generate the form
		const $fieldSet: JQuery = $('<fieldset>').attr('id', 'rightsFilter').text(instructions);
		const $legend: JQuery = $('<legend>').text(LogFilter.msg('legend'));
		$fieldSet.append($legend);

		if (this.rightsLogOnly) {
			fieldsetHtml += '<select id="rfSelect">';
			fieldsetHtml += `<option>${mw.html.escape(LogFilter.msg('option-added'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(LogFilter.msg('option-removed'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(LogFilter.msg('option-added-or-removed'))}</option>`;
			fieldsetHtml += `<option>${mw.html.escape(LogFilter.msg('option-added-removed-static'))}</option>`;
			fieldsetHtml += '</select>';
		}
		fieldsetHtml += `<label for="rfRegex">${mw.html.escape(
			LogFilter.msg('regex-label')
		)}</label><input id="rfRegex">`;
		fieldsetHtml += `<input id="rfInvert" type="checkbox"><label for="rfInvert">${mw.html.escape(
			LogFilter.msg('invert-label')
		)}</label>`;
		fieldsetHtml += `<input id="rfCase" type="checkbox"><label for="rfCase">${mw.html.escape(
			LogFilter.msg('case-label')
		)}</label>`;
		fieldsetHtml += `<button type="button" value="0">${mw.html.escape(LogFilter.msg('filter-button'))}</button>`;
		fieldsetHtml += `<button type="button" value="1">${mw.html.escape(LogFilter.msg('highlight-button'))}</button>`;
		// Inject the html into the fieldset
		$fieldSet.append(fieldsetHtml);
		$pageTop.after($fieldSet);

		// Set passed values
		this.$body.find('#rfRegex').val(URL_LIFILTER_EXPR ?? '');
		this.$body.find('#rfCase').prop('checked', !casing);
		this.$body.find('#rfInvert').prop('checked', inverted);
		this.$body.find('#rfRegex').trigger('focus');

		// Bind click and change listeners
		this.$body
			.find('#rightsFilter')
			.find('input')
			.on('keyup change', (event): void => {
				const $element: JQuery = $(event.currentTarget);
				if ($element.attr('id') !== 'rfRegex') {
					this.filterLi();
					return;
				}
				const curInput: string = $element.val() as string;
				if (oldInput !== curInput) {
					oldInput = curInput;
					this.filterLi();
				}
			});
		$fieldSet.find('button').on('click', (event): void => {
			const $element: JQuery = $(event.currentTarget);
			this.lastClicked = !!$element.val();
			this.filterLi();
		});

		if (URL_LIFILTER_EXPR) {
			this.filterLi(hilight);
		}
	}

	private filterLi(hilight?: boolean): void {
		// Grab the list of all <li> in the content
		const $listItems: JQuery = this.$body.find('#bodyContent').find('li');
		if (!$listItems.length) {
			return;
		}

		hilight = !!(hilight || this.lastClicked.toString() === '1');

		// Grab options from form
		let type: string | undefined;
		if (this.rightsLogOnly) {
			type = this.$body.find('#rfSelect').attr('selectedIndex');
		}

		const invert = this.$body.find('#rfInvert').prop('checked') as boolean;
		const search: string = this.$body.find('#rfRegex').val()?.toString() ?? '';
		const flags: string = this.$body.find('#rfCase').prop('checked') ? 'ig' : 'g';
		let regexRf: RegExp | undefined;
		try {
			regexRf = new RegExp(`${search}`, `${flags}`);
		} catch (error) {
			console.log(error);
		}

		// The regex used to grab the Special:Log/rights changes
		const REGEX_RIGHT: RegExp = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;

		// Iterate
		for (const element of $listItems) {
			const $element: JQuery = $(element);
			let look: string = '';

			if (this.rightsLogOnly) {
				// Special:Log/rights
				const oldr: string = $element.text().replace(REGEX_RIGHT, '$1');
				const newr: string = $element.text().replace(REGEX_RIGHT, '$2');
				const oldrl: string[] = oldr.split(', ');
				const newrl: string[] = newr.split(', ');
				for (let i: number = 0; i < oldrl.length; i++) {
					for (let j: number = 0; j < newrl.length; j++) {
						if (oldrl[i] === newrl[j]) {
							oldrl[i] = '';
							newrl[j] = '';
						}
					}
				}
				const remr: string = oldrl.join(',');
				const addr: string = newrl.join(',');
				switch (type) {
					case '0':
						look = addr;
						break;
					case '1':
						look = remr;
						break;
					case '2':
						look = `${remr} ${addr}`;
						break;
					case '3':
						look = `${oldr} ${newr}`;
						break;
				}
			} else {
				// Any other list of <li> objects
				look = $element.text();
			}

			$element.css('background-color', '');
			$element.show();

			if (regexRf && ((look?.search(regexRf) === -1 && invert) || (look?.search(regexRf) !== -1 && !invert))) {
				if (hilight) {
					$element.css('background-color', '#ffff99');
				}
			} else if (!hilight) {
				$element.hide();
			}
		}
	}

	private static msg(key: string): string {
		key = `filter-${key}`;
		// Messages that can be used here:
		// * see messages.ts
		// * for more information
		return mw.message(key).plain();
	}
}

export {LogFilter};
