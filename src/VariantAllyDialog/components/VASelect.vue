<script setup lang="ts">
import useModelWrapper from '../composables/useModelWrapper';

const props = defineProps<{
	modelValue: string;
}>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const modelValue = useModelWrapper(props, emit);
</script>

<template>
	<select v-model="modelValue" class="va-select">
		<slot />
	</select>
</template>

<style scoped lang="less">
@import (reference) '../styles/mixins.less';
@import (reference) '../styles/tokens.less';

.va-select {
	.select__handle();
	appearance: none;
	background-position: center right @spacing-75;
	background-repeat: no-repeat;
	background-image: @icon-expand;
	background-size: @size-icon-x-small;

	&:disabled {
		.select__handle--disabled();
		background-image: @icon-expand-disabled;
		// Support: Chrome, which sets an opacity less than 1 for disabled select elements.
		opacity: @opacity-base;
		cursor: @cursor-not-allowed;
	}

	&:enabled {
		.select__handle--enabled();
	}
}
</style>
