import {WritableComputedRef, computed} from 'vue';

/**
 * Return a computed property that returns the corresponding prop value when is accessed
 * and fires an event when is set. Used with v-model.
 *
 * @param props props field of a component
 * @param emit emit function of a component
 * @param name name of the prop
 * @return wrapped computer property
 */
function useModelWrapper<T extends string, P extends Record<T, unknown>>(
	props: P,
	emit: (event: `update:${T}`, value: P[T]) => void,
	name: T = 'modelValue' as T
): WritableComputedRef<P[T]> {
	return computed({
		get() {
			return props[name];
		},
		set(value) {
			emit(`update:${name}`, value);
		},
	});
}

export default useModelWrapper;
