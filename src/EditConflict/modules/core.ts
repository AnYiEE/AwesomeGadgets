import {WG_CUR_REVISION_ID, WG_PAGE_NAME} from './constant';
import {delay, getBody} from 'ext.gadget.Util';
import {getCurrentRevisionId} from './getCurrentRevisionId';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const editConflict = async (): Promise<void> => {
	let isContinue: boolean = true;

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		$body.find('input[name="wpSave"]').on('click', (): void => {
			isContinue = false;
		});
	});

	const checkEditConflict = async (): Promise<void> => {
		const pageRevisionId: number = await getCurrentRevisionId(WG_PAGE_NAME);
		if (!pageRevisionId) {
			isContinue = false;
		} else if (pageRevisionId > WG_CUR_REVISION_ID) {
			isContinue = false;
			toastify(
				{
					node: $(getMessage('Notice')).get(0),
					close: true,
					duration: -1,
				},
				'info'
			);
		}
	};

	while (true) {
		await checkEditConflict();

		if (!isContinue) {
			break;
		}

		await delay(3 * 1000);
	}
};

export {editConflict};
