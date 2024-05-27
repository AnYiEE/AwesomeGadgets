<script setup lang="ts">
import {ref, watch} from 'vue';
import {type ValidVariant} from 'ext.gadget.VariantAlly';
import VAButton from './VAButton.vue';
import VAFadeTransition from './VAFadeTransition.vue';
import useI18n, {i18nVariant} from '../composables/useI18n';
import useUniqueId from '../composables/useUniqueId';
import useShuffledVariant from '../composables/useShuffledVariant';
import {VALID_VARIANTS, inferredVariant} from '../modules/utils';
import messages from '../messages.json';
import useModelWrapper from '../composables/useModelWrapper';
import useDefault from '../composables/useDefault';

const props = withDefaults(
	defineProps<{
		open: boolean;
		disabled?: boolean;
		autoClose?: boolean;
	}>(),
	{
		disabled: false,
		autoClose: false,
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
const descId = useUniqueId();
const isOpen = useModelWrapper(props, emit, 'open');
const isDisabled = useModelWrapper(props, emit, 'disabled');
const isVariantNarrowed = useDefault(() => inferredVariant.value !== null);
const shuffledVariant = useShuffledVariant(isVariantNarrowed);

function optOutAndClose() {
	emit('optout');
	isOpen.value = false;
}

function select(variant: ValidVariant) {
	isDisabled.value = true;
	emit('select', variant);
}

watch(prompt, () => {
	const element = prompt.value;
	if (element !== null) {
		element.addEventListener('mouseleave', (ev) => {
			// Do not dismiss if any button is pressed or the prompt is disabled
			if (ev.buttons === 0 && props.autoClose && !props.disabled) {
				isOpen.value = false;
			}
		});
	}
});
</script>

<template>
	<Transition name="va-variant-prompt" appear>
		<div
			v-if="open"
			ref="prompt"
			:lang="`zh-${i18nVariant}`"
			class="va-variant-prompt"
			role="dialog"
			aria-modal="false"
			:aria-labelledby="titleId"
			:aria-describedby="descId"
		>
			<VAButton
				class="va-variant-prompt__close"
				weight="quiet"
				icon="close"
				:title="useI18n('close')"
				:aria-label="useI18n('close')"
				:disabled="disabled"
				@click="optOutAndClose"
			/>
			<h2 :id="titleId" class="va-variant-prompt__title va-title">
				{{ useI18n(isVariantNarrowed ? 'vp.header.alt' : 'vp.header') }}<br />
				<VAFadeTransition>
					<span
						v-if="!isVariantNarrowed"
						:key="shuffledVariant"
						:lang="`zh-${shuffledVariant}`"
						class="va-variant-prompt__title__variant"
						>{{ messages.variants[shuffledVariant] }}</span
					>
				</VAFadeTransition>
			</h2>
			<p :id="descId" class="va-variant-prompt__desc va-para">
				{{ useI18n(isVariantNarrowed ? 'vp.main.alt' : 'vp.main') }}
			</p>
			<div class="va-variant-prompt__options">
				<!-- inferredVariant is non-null, guarded by isVariantNarrowed -->
				<VAButton
					v-for="variant in isVariantNarrowed && inferredVariant !== null
						? [inferredVariant]
						: VALID_VARIANTS"
					:key="variant"
					class="va-variant-prompt__options__button"
					:class="{'va-variant-prompt__options__button--primary': isVariantNarrowed}"
					indicator="arrowNext"
					weight="quiet"
					action="progressive"
					:lang="variant"
					:disabled="disabled"
					@click="select(variant)"
				>
					{{ messages.variants[variant] }}
				</VAButton>
				<VAButton
					v-if="isVariantNarrowed"
					class="va-variant-prompt__options__button"
					indicator="arrowNext"
					weight="quiet"
					action="progressive"
					:disabled="disabled"
					@click="isVariantNarrowed = false"
				>
					{{ useI18n('vp.button.other') }}
				</VAButton>
			</div>
			<footer class="va-variant-prompt__footer">
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
	margin-bottom: @spacing-50;
	color: @color-base;

	&--subtle {
		color: @color-subtle;
		font-size: @font-size-x-small;
		margin-bottom: @spacing-35;
	}
}

.va-variant-prompt {
	box-sizing: @box-sizing-base;
	z-index: @z-index-overlay;
	padding: @spacing-100 @spacing-150;
	position: fixed;
	left: @spacing-horizontal-dialog;
	bottom: @spacing-vertical-dialog;
	width: calc(100% - @spacing-horizontal-dialog * 2);
	max-width: 18em;
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

	&__close {
		padding: @spacing-shorthand-button-icon-only;
		float: right;
		margin-top: @spacing-50;
		margin-right: -(@spacing-horizontal-button-icon-only + 1px);
	}

	&__title {
		&__variant {
			color: @color-progressive;
		}
	}

	&__options {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin: @spacing-75 @spacing-0;

		border: 1px solid @border-color-base;
		border-radius: @border-radius-base;

		&__button {
			font-size: @font-size-small;
			color: @color-base;
			background-color: @background-color-interactive-subtle;
			border-radius: 0;

			&--primary {
				color: @color-progressive;
			}

			&:hover,
			&:active {
				border-color: @border-color-transparent;
			}
		}
	}
}

/* Prompt transition effect */
.va-variant-prompt-enter-active,
.va-variant-prompt-leave-active {
	transition-property: @transition-property-fade;
	transition-duration: @transition-duration-medium;
	transition-timing-function: @transition-timing-function-system;
}

.va-variant-prompt-enter-from,
.va-variant-prompt-leave-to {
	opacity: 0;
}
</style>
