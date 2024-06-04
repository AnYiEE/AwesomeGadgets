type Purge = import('./purge').Purge;

declare module 'ext.gadget.PurgePageCache' {
	export const purge: Purge;
}
