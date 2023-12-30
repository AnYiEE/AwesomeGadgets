### 如何使用 MediaWiki 中的`module.exports`和`require()`？<br>How to use `module.exports` and `require()` in MediaWiki?

#### 使用`module.exports`<br>Using `module.exports`

自 MediaWiki 1.38 起，存在一个名为`module.exports`的全局变量，被标记为[`packaged`](<https://www.mediawiki.org/wiki/ResourceLoader/Migration_guide_(users)#Package_Gadgets>)的小工具可以使用它来导出变量和方法以供其他小工具通过`require()`引用。<br>Since MediaWiki 1.38, there is a global variable called `module.exports` which can be used by packaged gadgets to export variables and methods for other gadgets to reference through `require()`.

在本仓库中使用`module.exports`，你需要<br>To use `module.exports` in this repository, you need to

首先，确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38

然后，如果需要让仓库中的其他小工具使用导出的变量和方法，则应该在小工具的`types.d.ts`中声明相关类型，如：<br>Then, if you need other gadgets in this repository to use the exported variables and methods, you should declare the relevant types in the gadget's `types.d.ts`, for example:

```ts
declare module 'ext.gadget.any_package' {
	export function func(): void;
}
```

最后，使用`export`导出变量和方法<br>Finally, use `export` to export variables and methods:

```ts
const func = () => {};

export {func};
```

#### 使用`require()`<br>Using `require()`

自 MediaWiki 1.38 起，存在一个名为`require`的全局函数，用来导入被标记为[`packaged`](<https://www.mediawiki.org/wiki/ResourceLoader/Migration_guide_(users)#Package_Gadgets>)的其他小工具或内置模块。<br>Since MediaWiki 1.38, there is a global function called `require` used to import other gadgets marked as [`packaged`](<https://www.mediawiki.org/wiki/ResourceLoader/Migration_guide_(users)#Package_Gadgets>) or built-in modules.

在本仓库中使用`require()`，你需要<br>To use `require()` in this repository, you need to

1. 确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38
2. 在小工具对应的`definition.json`中，将需要导入的包添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the required package as a dependency

```jsonc
{
	"dependencies": ["@wikimedia/codex", "ext.gadget.any_package"]
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

如果需要导入的不是 npm 包，则应该在导入前于小工具的`types.d.ts`中声明相关类型，如：<br>If the imported package is not a npm package, you should declare the types in the `types.d.ts` of the gadget before importing it. For example:

```ts
declare module 'ext.gadget.any_package' {
	export function func(): void;
}
```

最后，使用`import`来导入依赖项，如：<br> Finally, use `import` to import the dependency. For example:

```ts
import {CdxButton} from '@wikimedia/codex';
import {func} from 'ext.gadget.any_package';

console.log({
	CdxButton,
	func,
});
```
