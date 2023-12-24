### 如何使用 MediaWiki 中的`require()`？<br>How to use `require()` in MediaWiki?

> 警告：实验性功能，不作任何保证。<br>Warning: Experimental feature, no guarantees.

自 MediaWiki 1.38 起，存在一个名为`require`的全局函数，用来导入被标记为[`packaged`](<https://www.mediawiki.org/wiki/ResourceLoader/Migration_guide_(users)#Package_Gadgets>)的其他小工具。<br>Since MediaWiki 1.38, there is a global function called `require` used to import other gadgets marked as [`packaged`](<https://www.mediawiki.org/wiki/ResourceLoader/Migration_guide_(users)#Package_Gadgets>).

在本仓库中使用`require()`，你需要<br>To use `require()` in this repository, you need to

1. 确保目标 MediaWiki 的版本至少为 1.38<br>Ensure that the target MediaWiki version is at least 1.38
2. 在小工具对应的`definition.json`中，将需要导入的包添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the required package as a dependency

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

最后，在小工具中使用`_require_()`来导入依赖项，如：<br> Finally, use `_require_()` in the gadget to import the dependency. For example:

```ts
// For npm package
import type * as Codex from '@wikimedia/codex';
const {CdxButton} = _require_<typeof Codex>('@wikimedia/codex');
console.log(CdxButton);

// For non-npm package
const {func} = _require_<typeof import('ext.gadget.any_package')>('@wikimedia/codex');
console.log(func);
```
