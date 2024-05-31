<script setup lang="ts">
import {ref} from 'vue';
import {type ValidVariant} from 'ext.gadget.VariantAlly';
import VAButton from './VAButton.vue';
import VASelect from './VASelect.vue';
import useI18n, {i18nVariant} from '../composables/useI18n';
import useUniqueId from '../composables/useUniqueId';
import {VALID_VARIANTS, inferredVariant, shuffleVariant} from '../modules/utils';
import messages from '../messages.json';
import useModelWrapper from '../composables/useModelWrapper';
import useDefault from '../composables/useDefault';

const props = withDefaults(
	defineProps<{
		open: boolean;
		disabled?: boolean;
	}>(),
	{
		disabled: false,
	}
);
const emit = defineEmits<{
	(e: 'update:open', value: boolean): void;
	(e: 'update:disabled', value: boolean): void;
	(e: 'select', variant: ValidVariant): void;
	(e: 'optout'): void;
}>();

const prompt = ref<HTMLElement | null>(null);
const titleId = useUniqueId();
const selectedVariant = useDefault(() => inferredVariant.value ?? shuffleVariant());
const isOpen = useModelWrapper(props, emit, 'open');
const isDisabled = useModelWrapper(props, emit, 'disabled');

function optOutAndClose() {
	emit('optout');
	isOpen.value = false;
}

function select(variant: ValidVariant) {
	isDisabled.value = true;
	emit('select', variant);
}
</script>

<template>
	<Transition name="va-variant-prompt-mobile" appear>
		<div
			v-if="open"
			ref="prompt"
			:lang="`zh-${i18nVariant}`"
			class="va-variant-prompt-mobile"
			role="dialog"
			aria-modal="false"
			:aria-labelledby="titleId"
		>
			<div class="va-variant-prompt-mobile__header">
				<h2 :id="titleId" class="va-variant-prompt-mobile__header__title va-title">
					{{ useI18n('vp.main') }}
				</h2>
				<VAButton
					class="va-variant-prompt-mobile__header__close"
					weight="quiet"
					icon="close"
					:title="useI18n('close')"
					:aria-label="useI18n('close')"
					:disabled="disabled"
					@click="optOutAndClose"
				/>
			</div>
			<div class="va-variant-prompt-mobile__main">
				<VASelect
					v-model="selectedVariant"
					class="va-variant-prompt-mobile__main__select"
					:lang="selectedVariant"
					:disabled="disabled"
					:aria-labelledby="titleId"
				>
					<option v-for="variant in VALID_VARIANTS" :key="variant" :value="variant" :lang="variant">
						{{ messages.variants[variant] }}
					</option>
				</VASelect>
				<VAButton
					class="va-variant-prompt-mobile__main__action"
					action="progressive"
					icon="arrowNext"
					:disabled="disabled"
					@click="select(selectedVariant)"
					>{{ useI18n('vp.button.ok') }}</VAButton
				>
			</div>
			<footer class="va-variant-prompt-mobile__footer">
				<p class="va-para va-para--subtle">
					{{ useI18n('vp.main.ext') }}
				</p>
			</footer>
		</div>
	</Transition>
</template>

<style scoped lang="less">
@import (reference) '../styles/mixins.less';
@import (reference) '../styles/tokens.less';

.va-title {
	border: 0; // Reset
	padding: 0; // Reset
	overflow-wrap: break-word;

	font-size: @font-size-xx-large;
	font-weight: @font-weight-bold;
	margin: @spacing-50 @spacing-0;
	color: @color-base;
}

.va-para {
	overflow-wrap: break-word;
	margin-top: @spacing-50;
	color: @color-base;

	&--subtle {
		color: @color-subtle;
		font-size: @font-size-x-small;
		margin-bottom: @spacing-35;
	}
}

.va-variant-prompt-mobile {
	box-sizing: @box-sizing-base;
	z-index: @z-index-overlay;
	padding: @spacing-50 @spacing-100;
	position: fixed;
	left: @spacing-0;
	right: @spacing-0;
	bottom: @spacing-0;
	margin: @spacing-0 auto;
	width: 100%;
	max-width: 600px;
	max-height: calc(100vh - 2em);

	overflow: auto;
	overscroll-behavior: none;
	background-color: @background-color-base;
	border: @border-base;
	border-radius: @border-radius-base;
	box-shadow: @box-shadow-drop-medium;
	font-family: @font-family-system-sans;
	font-size: 1rem; // Reset
	line-height: normal; // Reset

	&__header {
		display: flex;
		align-items: center;

		&__title {
			flex: 1;
			font-size: @font-size-medium;
		}

		&__close {
			padding: @spacing-shorthand-button-icon-only;
			margin-right: -(@spacing-horizontal-button-icon-only + 1px);
		}
	}

	&__main {
		display: flex;
		margin-top: @spacing-25;

		&__select {
			margin-right: @spacing-75;
			flex: 1;
		}

		&__action {
			flex-shrink: 0;
		}
	}

	&__close {
		padding: @spacing-shorthand-button-icon-only;
		float: right;
		margin-right: -(@spacing-horizontal-button-icon-only + 1px);
	}
}

/* Prompt transition effect */
.va-variant-prompt-mobile-enter-active,
.va-variant-prompt-mobile-leave-active {
	transition-property: @transition-property-layout;
	transition-duration: @transition-duration-medium;
	transition-timing-function: @transition-timing-function-system;
}

.va-variant-prompt-mobile-enter-from,
.va-variant-prompt-mobile-leave-to {
	transform: translateY(100%);
}
</style>
../modules/utils
