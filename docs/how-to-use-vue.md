### 如何使用 Vue？<br>How to use Vue?

#### 准备依赖<br>Prepare dependencies

在本仓库中使用 Vue，有以下两种方式：<br>To use Vue in this repository, there are two ways:

- 使用 MediaWiki 内置的`vue`、`pinia`和`@wikimedia/codex`等 Vue 相关的包<br>Use Vue-related packages such as `vue`, `pinia` and `@wikimedia/codex` built into MediaWiki
    - 确保目标 MediaWiki 的版本至少为 1.41<br>Ensure that the target MediaWiki version is at least 1.41
    - 在小工具对应的`definition.json`中，将 MediaWiki 已经内置的包按需添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the built-in packages of MediaWiki as dependencies as needed

```jsonc
{
	"dependencies": ["vue", "@wikimedia/codex"],
	// Other properties...
}
```

- 使用 npm 包<br>Use packages from npm
    - 目标 MediaWiki 版本过低，尚未包含 Vue 相关的包，但依然需要使用 Vue<br>The target MediaWiki version is too low and does not yet built-in the Vue-related packages, but still needs to use Vue
    - 安装所需的包，直接使用即可<br>Install the required packages directly

#### 示例<br>Example

```vue
<!-- App.vue -->
<template lang="pug">
div
	p Hello {{msg}}!
</template>

<script setup lang="ts">
defineProps<{
	msg: string;
}>();
</script>

<style scoped lang="less">
div {
	background-color: #fff;
	p {
		color: #000;
	}
}
</style>
```

```ts
import App from './App.vue';
import {createApp} from 'vue';

const root: HTMLElement = document.createElement('div');
document.body.append(root);
createMwApp(App).mount(root);
```

#### 特别说明<br>Notes

- Vue 组件中需要临时将 TypeScript 的版本从“使用工作区版本”切换至“使用 VS Code 的版本”<br>In the Vue component, you need to temporarily switch the TypeScript version from "Use Workspace Version" to "Use VSCode's Version"
    - https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions
- `vue`和`pinia`已经内置在仓库中，无需额外安装<br>`vue` and `pinia` are already built into the repository, no need to install
- `@wikimedia/codex`等其他 Vue 相关的组件包需要额外按需安装<br>Other Vue-related components need to be installed separately
- Vue 组件中可以使用 Less 样式语法和 Pug 模板语法<br>Vue components can use Less style syntax and Pug template syntax
