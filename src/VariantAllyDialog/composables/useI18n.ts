import {computed} from 'vue';
import messages from '../messages.json';
import {wgUserVariant} from '../modules/utils';

// Interface variant of variant prompt
const i18nVariant = computed(() => {
	if (wgUserVariant.value === 'zh') {
		// No conversion: use randomly selected variant
		return Math.random() > 0.5 ? 'hans' : 'hant';
	}
	if (['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'].includes(wgUserVariant.value)) {
		return 'hant';
	}

	return 'hans';
});

function useI18n(key: string): string {
	const currentMsgsGroup: Record<string, string> = messages[i18nVariant.value];
	return currentMsgsGroup[key] ?? key;
}

export {useI18n as default, i18nVariant};
