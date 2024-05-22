<script setup lang="ts">
import {ref} from 'vue';
import {setLocalVariant, redirect, ValidVariant, setOptOut} from 'ext.gadget.VariantAlly';
import VAVariantPrompt from './components/VAVariantPrompt.vue';
import VAVariantPromptMobile from './components/VAVariantPromptMobile.vue';
import {getMountPoint, isMobileDevice} from './modules/utils';

const isOpen = ref(true);
const isDisabled = ref(false);
const isMobile = isMobileDevice();
const desktopMountPoint = getMountPoint();

function setVariant(variant: ValidVariant) {
	setLocalVariant(variant);
	redirect(variant, {forced: true});
}

// Browser support: iOS Safari < 15
// Work around Safari firing scroll event at unexpected conditions (e.g. popping up Select)
addEventListener(isMobile ? 'touchmove' : 'scroll', () => {
	if (!isDisabled.value) {
		isOpen.value = false;
	}
});

function onOptOut() {
	setOptOut();
}
</script>

<template>
	<Teleport :to="desktopMountPoint">
		<VAVariantPrompt
			v-if="!isMobile"
			v-model:open="isOpen"
			v-model:disabled="isDisabled"
			:auto-close="false"
			@optout="onOptOut"
			@select="setVariant"
		/>
	</Teleport>

	<!-- Teleport to body because they are always floated at bottom -->
	<Teleport to="body">
		<VAVariantPromptMobile
			v-if="isMobile"
			v-model:open="isOpen"
			v-model:disabled="isDisabled"
			@optout="onOptOut"
			@select="setVariant"
		/>
	</Teleport>
</template>

<style lang="less">
@import (reference) './styles/tokens.less';

.va-variant-prompt {
	// Vector 2022 specific adjustments
	.skin-vector-2022 & {
		// Calculated from Vector 2022 source code
		@vector-2022-header-height: 50px + 2 * 8px;
		max-height: calc(100% - @spacing-vertical-dialog - @vector-2022-header-height);

		.vector-toc-available.vector-feature-toc-pinned-clientpref-1 &,
		.vector-feature-main-menu-pinned-enabled & {
			@media screen and (min-width: 1000px) and (max-width: 1200px) {
				left: unset;

				// Calculated from Vector 2022 source code
				// In this width this prompt will not obscure article content
				@vector-2022-left-padding: 2.75em;
				margin-left: -(@vector-2022-left-padding / 3 * 2);
				max-width: calc(12.25em + 36px);
				padding: @spacing-100;
			}
		}

		@media screen and (min-width: 1200px) {
			@vector-2022-left-padding: 3.25em;
			left: unset;
			margin-left: -(@vector-2022-left-padding / 3 * 2);
			max-width: calc(15.75em + 36px);
		}
	}
}
</style>
./modules/utils
