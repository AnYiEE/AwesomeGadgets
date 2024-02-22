type GetGeoInfo = typeof import('../Geo').getGeoInfo;

declare module 'ext.gadget.Geo' {
	export const getGeoInfo: GetGeoInfo;
}
