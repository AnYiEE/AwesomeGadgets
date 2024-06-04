<script setup lang="ts">
import VAIcon, {Icon} from './VAIcon.vue';

defineEmits(['click']);

defineProps<{
	icon?: Icon;
	indicator?: Icon;
	action?: 'progressive';
	weight?: 'quiet';
}>();
</script>

<template>
	<button
		class="va-button"
		:class="{
			'va-button--action-progressive': action === 'progressive',
			'va-button--weight-quiet': weight === 'quiet',
		}"
		@click="$emit('click')"
	>
		<VAIcon v-if="icon !== undefined" class="va-button__icon" :icon="icon" />
		<span v-if="$slots['default']" class="va-button__text">
			<slot />
		</span>
		<VAIcon v-if="indicator !== undefined" class="va-button__indicator" :icon="indicator" :size="16" />
	</button>
</template>

<style scoped lang="less">
@import (reference) '../styles/mixins.less';

.va-button {
	.button-base();

	background-color: @background-color-interactive-subtle;
	color: @color-base;
	border-color: @border-color-base;

	padding-top: @spacing-vertical-button;
	padding-bottom: @spacing-vertical-button;
	text-align: left;

	display: flex;
	align-items: center;
	// Doesn't work in legacy browsers, but should not be a major problem
	gap: @spacing-25;

	&:hover {
		background-color: @background-color-base;
	}

	&:active {
		color: @color-emphasized;
		background-color: @background-color-interactive;
		border-color: @border-color-interactive;
	}

	&:focus {
		outline: @outline-base--focus;

		&:not(:active) {
			border-color: @border-color-progressive--focus;
			box-shadow: @box-shadow-progressive--focus;
		}
	}

	&--weight-quiet {
		background-color: @background-color-transparent;
		border-color: @border-color-transparent;

		&:hover {
			background-color: @background-color-button-quiet--hover;
		}

		&:active {
			background-color: @background-color-button-quiet--active;
		}
	}

	&--action-progressive {
		color: @color-progressive;

		&:hover {
			color: @color-progressive--hover;
			background-color: @background-color-progressive-subtle;
			border-color: @border-color-progressive;
		}

		&:active {
			color: @color-inverted;
			background-color: @background-color-progressive--active;
			border-color: @border-color-progressive--active;
		}
	}

	&:disabled {
		background-color: @background-color-disabled;
		color: @color-inverted;
		border-color: @border-color-transparent;
		cursor: @cursor-not-allowed;
	}

	&--weight-quiet {
		&:disabled {
			background-color: @background-color-transparent;
			color: @color-disabled;
		}
	}

	&__text {
		flex: 1;
	}

	&__icon {
		fill: currentColor;
	}

	&__indicator {
		fill: currentColor;
	}
}
</style>
