import {Ref, ref, watch} from 'vue';
import {type ValidVariant} from 'ext.gadget.VariantAlly';
import {inferredVariant, shuffleVariant} from '../modules/utils';

const INTERVAL = 3 * 1000;

/**
 * Return a ref which shuffle between all possible variants.
 *
 * @param isFreezed should shuffling pause or not
 */
function useShuffledVariant(isFreezed: Ref<boolean>): Ref<ValidVariant> {
	const result = ref<ValidVariant>(shuffleVariant());
	let id: number;

	watch(
		isFreezed,
		(newValue) => {
			if (newValue) {
				clearInterval(id);
				// Attempt to freeze at inferred variant at a best effort
				// This should be most cases
				result.value = inferredVariant.value ?? shuffleVariant();
			} else {
				id = window.setInterval(() => {
					result.value = shuffleVariant(result.value);
				}, INTERVAL);
			}
		},
		{immediate: true}
	);

	return result;
}

export default useShuffledVariant;
