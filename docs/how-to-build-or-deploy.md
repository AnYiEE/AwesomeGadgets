### 用法 / Usage

**对于小工具开发者：**<br>**For gadget developers:**

1. Fork 由目标 MediaWiki 网站所维护的仓库<br>Fork the repository maintained by the target MediaWiki website

2. 在`src`文件夹下以小工具名新建文件夹<br>Create a new folder within the `src` directory, using the name of your gadget

3. 在目录下新建`小工具名.{js, ts, css, less}`或`index.{js, ts, css, less}`<br>Within the directory, create either `GadgetName.{js, ts, css, less}` or `index.{js, ts, css, less}`

编译时的优先级如下：<br>The priority of compilation is as follows:

1.  `index.*` > `小工具名.*` / `index.*` > `GadgetName.*`
2.  `*.{tsx, ts}` > `*.{jsx, js}`
3.  `*.{jsx, tsx}` > `*.{js, ts}`
4.  `*.less` > `*.css`
5.  `.vue`仅供被其他脚本导入 / The `.vue` file is only allowed import by other script files

-   如果小工具包含脚本，且使用单独的样式表，则其所使用到的样式表应在脚本中导入<br>If the gadget has script files and style sheets, the style sheets used should be imported in the script file

    -   如果样式表名形如`*.module.{css, less}`，则其将被视为 [CSS/Less 模块](https://github.com/css-modules/css-modules)。注意，如需在 VS Code 中获得代码自动补全功能，应[切换到当前工作区中的 TypeScript 版本](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript)，如果在切换后未有效果，可尝试重新加载当前工作区<br> If the style sheet name is like `*.module.{css, less}`, it will be considered as [CSS/Less modules](https://github.com/css-modules/css-modules). Note that if you want to get code autocompletion in VS Code, you should [switch to the TypeScript version in the current workspace](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript). If it doesn't work after switching, try reloading the current workspace.

-   如果小工具仅包含样式表，则不需要在脚本中导入（无需新建一个脚本文件）<br>If the gadget only has style sheets, there is no need to import style sheets in the script file. (no need to create a script file)

4. 目录下可以创建`definition.json`以手动指定小工具定义（可选）<br>In the directory, you have the option to create a `definition.json` file to manually specify the gadget definition

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

5. 目录下可以创建`LICENSE`以标注小工具的版权信息（可选），文件中的内容会在部署时自动添加到对应小工具文件的顶部<br>In the directory, you have the option to create a `LICENSE` file to indicate the copyright information of your gadget. The content in this file will be automatically added to the top of the gadget file when it is deployed

6. 运行`pnpm run build`以格式化代码、检查语法、测试编译<br>Run `pnpm run build` to format the code, check syntax, and test the compilation

7. 向上游发起 Pull Request<br>Initiate a Pull Request to the upstream

> 脚本可以是 ts 或 js，可以使用 ESNext 所支持的语法（如`import`，支持跨目录导入）；导入的图片将被自动转换成 Data URLs（如`data:image/png;base64,...`）<br>The scripts can be in either TypeScript or JavaScript and can utilize the syntax supported by ESNext, such as import, which allows importing across directories. Imported images will be automatically converted to Data URLs, like `data:image/png;base64,...`.
>
> 样式可以是 Less 或 CSS，支持`@import`语法。<br>The styles can be written in either Less or CSS and support the `@import` syntax.

**对于网站维护者：**<br>**For website maintainers:**

1. Fork 本仓库<br>Fork this repository

2. 根据实际情况更改各个小工具的`definition.json`，可选值及默认值可见于`scripts/constant.ts` - `DEFAULT_DEFINITION`<br>Modify the definition.json for each gadget according to your specific requirements. Optional values and their default values can be found in `scripts/constant.ts` - `DEFAULT_DEFINITION`

3. 根据实际情况更改`scripts/constant.ts`中的信息<br>Update the information in `scripts/constant.ts` based on your specific needs

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

    根据工具需要，你应该授予机器人账号以下额外权限<br>Grant the robot account the following additional permissions:

    - 大量编辑<br>High-volume editing
    - 编辑存在的页面<br>Edit existing pages
    - 编辑受保护的页面<br>Edit protected pages
    - 编辑MediaWiki命名空间和全站/用户的JSON<br>Edit the MediaWiki namespace and sitewide/user JSON
    - 编辑全站和用户的CSS/JS<br>Edit sitewide and user CSS/JS
    - 创建、编辑和移动页面<br>Create, edit, and move pages
    - 删除页面、修订和日志记录<br>Delete pages, revisions, and log entries

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署<br>Run `pnpm run deploy` to check syntax, format code, compile the source code, and deploy to the website

> 请网站维护者注意：在 Fork 本仓库后，本仓库的 Actions 将自动同步上游变更。这意味着在一般情况下，不需要改动除了`src`文件夹和`scripts/constant.ts`之外的东西，以免发生合并冲突。<br>Please note that the Actions of this repository will automatically sync upstream changes. This means that in general, there is no need to modify anything except the `src` directory and `scripts/constant.ts` to avoid merge conflicts.

#### 直接部署 MediaWiki:Common.js 等 MediaWiki 命名空间下的脚本或样式

1. 在`src`文件夹下新建`global.json`文件，如下所示<br>Create a `global.json` file in the `src` directory, as shown below:

    ```jsonc
    {
    	"siteA": {
    		"Commmon.js": {
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
