type AddEventListenerWithRemover = import('./addEventListenerWithRemover').AddEventListenerWithRemover;
type ChangeOpacityWhenMouseEnterOrLeave =
	import('./changeOpacityWhenMouseEnterOrLeave').ChangeOpacityWhenMouseEnterOrLeave;
type CheckA11yConfirmKey = import('./checkA11yConfirmKey').CheckA11yConfirmKey;
type Delay = import('./delay').Delay;
type GenerateArray = import('./generateArray').GenerateArray;
type GenerateSvgDataUrl = import('./generateSvgDataUrl').GenerateSvgDataUrl;
type GetBody = import('./getBody').GetBody;
type InitMwApi = import('./initMwApi').InitMwApi;
type IsValidKey = import('./isValidKey').IsValidKey;
type OouiConfirmWithStyle = import('./oouiConfirmWithStyle').OouiConfirmWithStyle;
type ScrollTop = import('./scrollTop').ScrollTop;
type UserIsInGroup = import('./userIsInGroup').UserIsInGroup;
type UserHasRight = import('./userHasRight').UserHasRight;

declare module 'ext.gadget.Util' {
	export const addEventListenerWithRemover: AddEventListenerWithRemover;
	export const changeOpacityWhenMouseEnterOrLeave: ChangeOpacityWhenMouseEnterOrLeave;
	export const checkA11yConfirmKey: CheckA11yConfirmKey;
	export const delay: Delay;
	export const generateArray: GenerateArray;
	export const generateSvgDataUrl: GenerateSvgDataUrl;
	export const getBody: GetBody;
	export const initMwApi: InitMwApi;
	export const isValidKey: IsValidKey;
	export const oouiConfirmWithStyle: OouiConfirmWithStyle;
	export const scrollTop: ScrollTop;
	export const userIsInGroup: UserIsInGroup;
	export const userHasRight: UserHasRight;
}
