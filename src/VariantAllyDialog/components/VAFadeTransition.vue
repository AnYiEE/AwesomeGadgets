<template>
	<Transition name="va-fade" mode="out-in">
		<slot />
	</Transition>
</template>

<style scoped lang="less">
@import (reference) '../styles/mixins.less';

.va-fade-enter-active,
.va-fade-leave-active {
	transition-property: @transition-property-fade;
	transition-duration: @transition-duration-medium;
	transition-timing-function: @transition-timing-function-system;
}

.va-fade-enter-from,
.va-fade-leave-to {
	opacity: 0;
}
</style>
