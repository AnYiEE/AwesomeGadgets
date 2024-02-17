### 如何使用 jsx-dom？<br>How to use jsx-dom?

[jsx-dom](https://www.npmjs.com/package/jsx-dom) 可以让你使用 JSX/TSX 语法和样式化组件来创建 DOM 元素。它可以被看作是 React 的替代品，比 React 更快，体积也小得非常多。<br>
The package [jsx-dom](https://www.npmjs.com/package/jsx-dom) is a JavaScript library that allows you to use JSX and styled components for creating DOM elements, which is a faster and much smaller alternative to React.

在本仓库中使用 jsx-dom，你需要：<br>To use `jsx-dom` in this repository, you need to run the following command:

```bash
pnpm add jsx-dom
```

#### 目标 MediaWiki 的版本低于 1.38<br>The target MediaWiki version is lower than 1.38

按正常使用 jsx-dom 的方式使用即可。需要注意的是，每个使用 jsx-dom 的小工具都[会打包若干份对应的库](https://github.com/evanw/esbuild/issues/475)，可能会影响代码体积。<br>Just use jsx-dom in the normal way. It should be noted that each gadget using them [will bundle several copies of the library](https://github.com/evanw/esbuild/issues/475), which may affect the code size.

```css
/* modules/style.module.css */
.red {
	color: #d33;
}
```

```tsx
import React from 'jsx-dom';
import style from './modules/style.module.css';

document.body.append(
	<div id="id" className={style.red}>
		Hello World!
	</div>
);
```

#### 目标 MediaWiki 的版本不低于 1.38<br>The target MediaWiki version is at least 1.38

1. 根据实际情况修改`src/React`文件夹中的以下文件<br>According to actual needs, modify some files in the `src/React` folder

    - `React.ts`
    - `modules/global.d.ts`
    - `definition.json`（将`enable`属性改为`true`）/ (change `enable` property to `true`)

2. 在小工具对应的`definition.json`中，将`ext.gadget.React`添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the `ext.gadget.React` as a dependency

```jsonc
{
	"dependencies": ["ext.gadget.React"],
	// Other properties...
}
```

3. 在 JSX 或 TSX 中，使用`import`导入`ext.gadget.React`<br>In the place where you need to use `jsx-dom`, import it using `import`

```ts
import React from 'ext.gadget.React';
```

现在，你可以使用 JSX 或 TSX 语法来创建 DOM 元素，并使用样式化组件来创建组件。<br>Now you can use JSX or TSX syntax to create DOM elements and use styled components to create components.

```tsx
import React, {styled} from 'ext.gadget.React';

const Header = styled.h2`
	font-size: 1.5em;
	font-weight: 500;
`;

document.body.append(<Header>Hello World!</Header>);
```
