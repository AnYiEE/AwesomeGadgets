### 如何使用 jsx-dom 或 React？<br>How to use jsx-dom or React?

[jsx-dom](https://www.npmjs.com/package/jsx-dom) 可以让你使用 JSX/TSX 语法和样式化组件来创建 DOM 元素。它可以被看作是 React 的替代品，比 React 更快，体积也小得非常多。<br>
The package [jsx-dom](https://www.npmjs.com/package/jsx-dom) is a JavaScript library that allows you to use JSX and styled components for creating DOM elements, which is a faster and much smaller alternative to React.

在本仓库中使用 jsx-dom 或 React，你需要：<br>To use `jsx-dom` in this repository, you need to run the following command:

```bash
pnpm add jsx-dom
```

或<br>Or

```bash
pnpm add react react-dom @types/react @types/react-dom
```

#### 目标 MediaWiki 的版本低于 1.38<br>The target MediaWiki version is lower than 1.38

按正常使用 jsx-dom 或 React 的方式使用即可。需要注意的是，每个使用 jsx-dom 或 React 的小工具都会打包一份对应的库，可能会严重影响代码体积（React 真的非常大）。<br>Just use jsx-dom or React in the normal way. It should be noted that each gadget using them will bundle a corresponding library, which may significantly affect the code size (React is really very large).

```css
/* modules/style.module.css */
.red {
	color: #d33;
}
```

```tsx
import React from 'jsx-dom';
import {red as classRed} from './modules/style.module.css';

document.body.append(
	<div id="id" className={classRed}>
		Hello World!
	</div>
);
```

#### 目标 MediaWiki 的版本不低于 1.38<br>The target MediaWiki version is at least 1.38

推荐使用 jsx-dom，因为可能和第三方 React 组件库存在一些兼容性问题。<br>Here recommend using `jsx-dom`, because there may be some compatibility issues with third-party React component libraries.

1. 根据实际情况修改`src/React`文件夹中的以下文件<br>According to actual needs, modify some files in the `src/React` folder

    - `React.ts`
    - `modules/global.d.ts`
    - `definition.json`（将`enable`属性改为`true`）/ (change `enable` property to `true`)

2. 在小工具对应的`definition.json`中，将`ext.gadget.React`添加为依赖项（`dependencies`）<br>In the corresponding `definition.json` of the gadget, add the `ext.gadget.React` as a dependency

```jsonc
{
	"dependencies": ["ext.gadget.React"]
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
