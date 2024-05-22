type Redirect = import('../../VariantAlly/modules/controller').Redirect;
type SetLocalVariant = import('../../VariantAlly/modules/model').SetLocalVariant;
type SetOptOut = import('../../VariantAlly/modules/model').SetOptOut;

declare module 'ext.gadget.VariantAlly' {
	const redirect: Redirect;
	const setLocalVariant: SetLocalVariant;
	const setOptOut: SetOptOut;
	type ValidVariant = import('../../VariantAlly/modules/model').ValidVariant;
	type Variant = import('../../VariantAlly/modules/model').Variant;
}
