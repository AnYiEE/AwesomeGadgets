import {type ClientLoginParams, api} from './api';
import React from 'ext.gadget.React';
import {checkValid} from './util/checkValid';
import {generateElements} from './util/generateElements';
import {getMessage} from './i18n';
import {oouiPrompt} from './util/oouiPrompt';
import {queryLoginToken} from './util/queryLoginToken';
import {redirectOriginLoginPage} from './util/redirectOriginLoginPage';
import {removeWindowResizeHandler} from './util/removeWindowResizeHandler';
import {showError} from './util/showError';
import {toastify} from 'ext.gadget.Toastify';
import {windowManager} from './initWindowManager';

const ajaxLogin = (toastifyInstance: ToastifyInstance, isAgreeTos: boolean = false): void => {
	const {
		$agreeTos,
		$forgotPassword,
		$inputBox,
		$rememberMe,
		$tosLabel,
		agreeTosCheckbox,
		keepLoginCheckbox,
		messageDialog,
		nameInput,
		pwdInput,
	} = generateElements(isAgreeTos);

	let loginToken: string = '';
	const login = async ({loginContinue = false, retypePassword = false} = {}): Promise<void> => {
		try {
			if (!loginContinue) {
				({loginToken, toastifyInstance} = await queryLoginToken(toastifyInstance));
			}

			const params: ClientLoginParams = {
				action: 'clientlogin',
				format: 'json',
				formatversion: '2',
				logintoken: loginToken,
				loginreturnurl: location.href,
				username: nameInput.getValue(),
				password: pwdInput.getValue(),
			};
			if (keepLoginCheckbox.isSelected()) {
				params.rememberMe = true;
			}
			if (loginContinue || retypePassword) {
				await windowManager.clearWindows();
				delete params.loginreturnurl;
				delete params.username;
				delete params.password;
				params.logincontinue = true;

				const value: string | null = await oouiPrompt(retypePassword);

				toastifyInstance.hideToast();

				if (value === null) {
					toastify(
						{
							text: getMessage('Login cancelled'),
						},
						'info'
					);
					void windowManager.clearWindows();

					return;
				} else if (value === '') {
					if (retypePassword) {
						toastifyInstance = toastify(
							{
								text: getMessage('EmptyPassword'),
								duration: -1,
							},
							'warning'
						);
						void login({
							retypePassword: true,
						});
					} else {
						toastifyInstance = toastify(
							{
								text: getMessage('Empty2FA'),
								duration: -1,
							},
							'warning'
						);
						void login({
							loginContinue: true,
						});
					}

					return;
				}

				if (retypePassword) {
					params.password = value;
					params.retype = value;
				} else {
					params.OATHToken = value;
				}
			}

			toastifyInstance.hideToast();
			toastifyInstance = toastify(
				{
					text: getMessage('Logging in'),
				},
				'info'
			);

			const response = (await api.post(params)) as {
				clientlogin: {
					status?: string;
					messagecode?: string;
				};
			};

			toastifyInstance.hideToast();

			if (response['clientlogin']?.status === 'PASS') {
				toastify(
					{
						text: getMessage('Login succeed'),
					},
					'success'
				);
				location.reload();
			} else if (response['clientlogin']?.messagecode) {
				const {messagecode} = response['clientlogin'];
				switch (messagecode) {
					case 'login-throttled':
						toastifyInstance = toastify(
							{
								text: getMessage('TooFrequent'),
								duration: -1,
							},
							'error'
						);
						break;
					case 'oathauth-auth-ui':
						void login({
							loginContinue: true,
						});
						break;
					case 'oathauth-login-failed':
						toastifyInstance = toastify(
							{
								text: getMessage('Invalid 2FA verification code'),
								duration: -1,
							},
							'warning'
						);
						void login({
							loginContinue: true,
						});
						break;
					case 'resetpass-temp-emailed':
						toastifyInstance = toastify(
							{
								text: getMessage('New password is required'),
								duration: -1,
							},
							'warning'
						);
						void login({
							retypePassword: true,
						});
						break;
					case 'wrongpassword':
						toastifyInstance = toastify(
							{
								text: getMessage('Invalid useruame or password'),
								duration: -1,
							},
							'warning'
						);
						await windowManager.clearWindows();
						ajaxLogin(toastifyInstance);
						break;
					default:
						toastify(
							{
								text: getMessage('Unexpected API response').replace('$1', messagecode),
								close: true,
								duration: -1,
							},
							'error'
						);
						void redirectOriginLoginPage();
				}
			}
		} catch (error: unknown) {
			showError(error, toastifyInstance);
			void redirectOriginLoginPage();
		}
	};

	const check = async (): Promise<void> => {
		const {
			isValid,
			isAgreeTos: lastIsAgreeTos,
			toastifyInstance: lastToastifyInstance,
		} = await checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);

		toastifyInstance = lastToastifyInstance;

		if (isValid) {
			void login();
		} else {
			ajaxLogin(toastifyInstance, lastIsAgreeTos);
		}
	};

	pwdInput.on('enter', (): void => {
		void check();
	});
	messageDialog.getActionProcess = (action): OO.ui.Process =>
		new OO.ui.Process((): void => {
			if (action === 'login') {
				void check();
			} else {
				toastifyInstance.hideToast();
				void windowManager.clearWindows();
			}
		});

	windowManager.addWindows([messageDialog]);
	void windowManager.openWindow(messageDialog, {
		actions: [
			{
				action: 'login',
				flags: ['primary', 'progressive'],
				label: $(<b>{getMessage('Login')}</b>),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $(<b>{getMessage('Cancel')}</b>),
			},
		],
		message: $(
			<div className="oo-ui-window-foot">{[$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel]}</div>
		),
		title: $(<b className="oo-ui-window-head">{getMessage('Login')}</b>),
		size: 'small',
	});
	removeWindowResizeHandler();
};

export {ajaxLogin};
