### 如何使用 MediaWiki 中的`module.exports`和`require()`？<br>How to use `module.exports` and `require()` in MediaWiki?

#### 使用`module.exports`<br>Using `module.exports`

在本仓库中使用`module.exports`，你需要<br>To use `module.exports` in this repository, you need to

1. 确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38

2. 如果需要让仓库中的其他小工具使用导出的变量和方法，则应该在小工具的`*.d.ts`中声明相关类型，如：<br>Then, if you need other gadgets in this repository to use the exported variables and methods, you should declare the relevant types in the gadget's `*.d.ts`, for example:

```ts
declare module 'ext.gadget.any_package' {
	export function func(): void;
}
```

3. 在入口文件中使用`export`导出变量和方法<br>Finally, use `export` to export variables and methods in the entry file:

```ts
const func = () => {};

export {func};
```

#### 使用`require()`<br>Using `require()`

在本仓库中使用`require()`，你需要<br>To use `require()` in this repository, you need to

1. 确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38
2. 在小工具对应的`definition.json`中，将需要导入的包添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the required package as a dependency

```jsonc
{
	"dependencies": ["@wikimedia/codex", "ext.gadget.any_package"],
	// Other properties...
}
```

然后，运行以下命令<br>Then, run the following command

```bash
pnpm add <package-name>
```

如：<br>For example:

```bash
pnpm add @wikimedia/codex
```

如果需要导入的不是 npm 包或包名与 MiediaWiki 内置模块不同，则应该在导入前于小工具的`*.d.ts`中声明相关类型，如：<br>If the imported package is not a npm package or the package name is different from MediaWiki built-in modules, you should declare the types in the `*.d.ts` of the gadget before importing it. For example:

```ts
declare module 'ext.gadget.any_package' {
	export function func(): void;
}
```

3. 使用`import`来导入依赖项，如：<br> Finally, use `import` to import the dependency. For example:

```ts
import {CdxButton} from '@wikimedia/codex';
import {func} from 'ext.gadget.any_package';

console.log({
	CdxButton,
	func,
});
```

#### 使用 MediaWiki 内置的包<br>Using MediaWiki built-in packages

对于 MediaWiki 内置的一部分包，可以通过以下的方式使用：<br> For some MediaWiki built-in packages, you can use them as follows:

-   `jquery.ui`、`mediawiki.util`和`oojs-ui-core`等“第一方”包<br>First-party packages such as `jquery.ui`, `mediawiki.util`, and `oojs-ui-core`
    -   在小工具对应的`definition.json`中，将对应的包添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, just add the used package as a dependency

```jsonc
{
	"dependencies": ["mediawiki.util", "oojs-ui-core"],
	// Other properties...
}
```

-   `moment`

    -   确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38
    -   在小工具对应的`definition.json`中，将`moment`添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the `moment` package as a dependency
    -   使用`import`来导入，如：<br> Finally, use `import`. For example:

```jsonc
{
	"dependencies": ["moment"],
	// Other properties...
}
```

```ts
import moment from 'moment';

console.log(moment.utc());
```

-   `@wikimedia/codex`、`vue`和`pinia`等 Vue 相关的包<br>Vue-related packages such as `@wikimedia/codex`, `vue` and `pinia`
    -   可以通过上述方式安装后使用，但仓库本身暂不支持单文件组件（`.vue`），使用范围相对受限<br>They can be used after installation through the above methods, but the repository itself does not currently support single-file components (`.vue`), and their usage is relatively limited.
