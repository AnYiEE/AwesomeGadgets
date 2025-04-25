### 用法 / Usage

#### 对于小工具开发者 / For gadget developers

1. **克隆仓库**<br>克隆由目标 MediaWiki 网站所维护的仓库<br>Fork the repository maintained by the target MediaWiki site

2. **创建小工具目录**<br>在`src`目录下以小工具名新建文件夹<br>Create a new folder within the `src` directory, using the name of your gadget

3. **创建入口文件**<br>在目录下新建`小工具名.{js, ts, css, less}`或`index.{js, ts, css, less}`文件<br>Within the directory, create either `GadgetName.{js, ts, css, less}` or `index.{js, ts, css, less}` file

- 编译优先级<br>The priority of compilation

```
1. `index.*` > `GadgetName.*`
2. `*.{tsx, ts}` > `*.{jsx, js}`
3. `*.{jsx, tsx}` > `*.{js, ts}`
4. `*.less` > `*.css`
5. `.vue`仅供被其他脚本导入 / `.vue` files are only allowed import by other script files
```

4.  **样式管理**

- 如果小工具包含脚本，且使用单独的样式表，则其所使用到的样式表应在脚本中导入<br>If the gadget has script files and style sheets, the style sheets used should be imported in script files

    - 如果样式表名形如`*.module.{css, less}`，则其将被视为 [CSS/Less 模块](https://github.com/css-modules/css-modules)<br> If the style sheet name is like `*.module.{css, less}`, it will be considered as [CSS/Less modules](https://github.com/css-modules/css-modules)
        - 如需在 VS Code 中获得代码自动补全功能，应[切换到当前工作区中的 TypeScript 版本](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript)。如果在切换后未有效果，可尝试重新加载当前工作区<br>Note that if you want to get code autocompletion in VS Code, you should [switch to the TypeScript version in the current workspace](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript). If it doesn't work after switching, try reloading the current workspace.

- 如果小工具仅包含样式表，则不需要在脚本中导入（无需新建一个脚本文件）<br>If the gadget only has style sheets, there is no need to import style sheets in any script files. (no need to create a script file)

5. **高级配置（可选）**

- 在目录下创建`definition.json`文件以手动指定小工具定义<br>In the directory, you have the option to create a `definition.json` file to manually specify the gadget definition

    ```jsonc
    {
    	// 示例 / Example
    	"actions": ["view", "edit"],
    	"contentModels": ["wikitext"],
    	"dependencies": ["mediawiki.util"],
    	"namespaces": [0],
    	"peers": ["peers"],
    	"rights": ["rollback"],
    	"skins": ["vector"],
    }
    ```

- 在目录下创建`LICENSE`文件以标注小工具的版权信息，文件中的内容会在编译后自动添加到对应小工具文件的顶部<br>In the directory, you have the option to create a `LICENSE` file to indicate the copyright information of your gadget. The content of this file will be automatically added to the top of the gadget file when it is compiled

6. **开发流程**

- 运行`pnpm run build`以格式化代码、检查语法、测试编译<br>Run `pnpm run build` to format the code, check syntax, and test the compilation

- 向上游发起 Pull Request<br>Initiate a Pull Request to the upstream

> 脚本可以是 ts 或 js，可以使用 ESNext 所支持的语法（如`import`，支持跨目录导入）；导入的图片将被自动转换成 Data URLs（如`data:image/png;base64,...`）<br>The scripts can be in either TypeScript or JavaScript and can utilize the syntax supported by ESNext, such as import, which allows importing across directories. Imported images will be automatically converted to Data URLs, like `data:image/png;base64,...`.
>
> 样式可以是 Less 或 CSS，支持`@import`语法。<br>The styles can be written in either Less or CSS and support the `@import` syntax.

#### 对于网站维护者 / For Wiki Maintainers

1. 克隆本仓库<br>Fork this repository

2. 根据实际情况更改各个小工具的`definition.json`文件，可选值及默认值可见于`scripts/constant.ts`文件的`DEFAULT_DEFINITION`部分<br>Modify the `definition.json` file for each gadget according to your specific requirements. Optional values and their default values can be found in `scripts/constant.ts` file - `DEFAULT_DEFINITION` section

3. 根据实际情况更改`scripts/constant.ts`文件中的信息<br>Update the information in `scripts/constant.ts` file based on your specific needs

4. 在`script`文件夹下新建`credentials.json`文件（同一站点存在多种登录凭据时，OAuth2 优先于 OAuth1.0a 优先于机器人账号密码）<br>Create a `credentials.json` file in the `script` directory (If multiple login credentials are available for a site, OAuth2 takes precedence over OAuth1.0a, which takes precedence over bot password)

    ```jsonc
    {
    	// 站点名称 / Site name
    	"siteA": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"username": "", // 填入机器人账号和密码（可以在[[Special:BotPasswords]]获取）/ Enter the robot account and password (you can get it from [[Special:BotPasswords]])
    		"password": "",
    	},
    	"siteB": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"OAuth2AccessToken": "", // 填入 OAuth2 访问密钥 / Enter the OAuth2 access token
    	},
    	"siteC": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"OAuthCredentials": {
    			// 填入 OAuth1.0a 相关信息 / Enter the OAuth1.0a related information
    			"accessToken": "16_DIGIT_ALPHANUMERIC_KEY",
    			"accessSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    			"consumerToken": "16_DIGIT_ALPHANUMERIC_KEY",
    			"consumerSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    		},
    	},
    }
    ```

    也可以将字符串化后的`credentials.json`文本声明为`CREDENTIALS_JSON`环境变量。此时，`credentials.json`文件将被忽略<br>You can declare the stringified `credentials.json` text as the `CREDENTIALS_JSON` environment variable, in which case the `credentials.json` file will be ignored

    根据工具需要，你应该授予机器人账号以下额外权限<br>Grant the robot account the following additional permissions:

    - 大量编辑<br>High-volume editing
    - 编辑存在的页面<br>Edit existing pages
    - 编辑受保护的页面<br>Edit protected pages
    - 编辑MediaWiki命名空间和全站/用户的JSON<br>Edit the MediaWiki namespace and sitewide/user JSON
    - 编辑全站和用户的CSS/JS<br>Edit sitewide and user CSS/JS
    - 创建、编辑和移动页面<br>Create, edit, and move pages
    - 删除页面、修订和日志记录<br>Delete pages, revisions, and log entries

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署<br>Run `pnpm run deploy` to check syntax, format code, compile the source code, and deploy to the website

##### 直接部署 MediaWiki:Common.js 等 MediaWiki 命名空间下的脚本或样式

1. 在`src`文件夹下新建`global.json`文件，如下所示<br>Create a `global.json` file in the `src` directory, as shown below:

    ```jsonc
    {
    	"siteA": {
    		"Common.js": {
    			"enable": true,
    			"sourceCode": "mw.loader.using(['ext.gadget.Common']);", // 此处的代码不会经过编译，仅支持 CSS 或使用 ES5 语法的 JavaScript / The code here will not be compiled, only supports CSS or JavaScript using ES5 syntax
    			"licenseText": "", // 可选 / Optional
    		},
    		"Skin.js": {
    			"enable": true,
    			"sourceCode": "mw.loader.using(['ext.gadget.Skin']);",
    		},
    	},
    }
    ```

2. 按正常流程部署即可<br>Deploy according to the above process
