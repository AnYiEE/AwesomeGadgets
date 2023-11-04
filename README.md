### 简介

Awesome Gadgets 是面向 MediaWiki 网站，用以统一存储、管理并编译全站小工具（Gadget）的工具。小工具开发者只需关心小工具本身的代码实现，无需关心其他方面。工具将自动检查语法、编译并部署到网站。

-   使用 esbuild 编译，babel 转译，支持 Typescript 和 Less
-   部署时将自动部署
    -   `MediaWiki:Gadgets-definition`
    -   `MediaWiki:Gadget-section-*`（支持自动转换中文变体）
    -   `MediaWiki:Gadget-*`（支持自动转换中文变体）
    -   `MediaWiki:Gadget-*.{js, css}`

### 用法

**对于小工具开发者：**

1. Fork 由目标 MediaWiki 网站所维护的仓库

2. 在`src`文件夹下以小工具名新建文件夹

3. 在目录下新建`小工具名.{js, ts, css, less}`或`index.{js, ts, css, less}`

    1. 当存在入口文件`{小工具名, index}.{js, ts, css, less}`时

        1. 只存在`小工具名.{js, ts, css, less}`，将最终生成`小工具名.{js, css}`，其他的脚本/样式是否被编译将取决于其是否被`小工具名.{js, ts, css, less}`导入
        2. 只存在`index.{js, ts, css, less}`，将最终生成`小工具名-index.{js, css}`，其他的脚本/样式是否被编译将取决于其是否被`index.{js, ts, css, less}`导入
        3. 二者同时存在，将最终生成`小工具名-index.{js, css}`，`小工具名.{js, ts, css, less}`和其他的脚本/样式是否被编译将取决于其是否被`index.{js, ts, css, less}`导入

    2. 不存在入口文件时，所有的脚本/样式均会被编译，生成`对应文件名.{js, css}`

4. 目录下可以创建`definition.json`以手动指定小工具定义（可选）

    ```json
    {
    	// 示例
    	"actions": ["view", "edit"],
    	"contentModels": ["wikitext"],
    	"dependencies": ["mediawiki.util"],
    	"namespaces": [0], // or false
    	"package": false,
    	"peers": ["peers"],
    	"rights": ["rollback"],
    	"skins": ["vector"]
    }
    ```

5. 运行`pnpm run build`以格式化代码、检查语法、测试编译

6. 向上游发起 Pull Request

> 脚本可以是 ts 或 js，可以使用 ESNext 所支持的语法（如`import`，支持跨目录导入）；导入的图片将被自动转换成 Data URLs（如`data:image/png;base64,...`）。
>
> 样式可以是 less 或 css，支持`@import`语法。

**对于网站维护者：**

1. Fork 本仓库

2. 根据实际情况更改各个小工具的`definition.json`，可选值及默认值可见于`script/constant.js` - `DEFAULT_DEFINITION`

3. 根据实际情况更改`script/constant.js`中的信息

4. 在`script`文件夹下新建`credentials.json`文件（多选一，取决于你的登录方式。存在多种登录凭据时，OAuth2 优先于 OAuth1.0a 优先于账号密码）

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改
    	"username": "", // 填入机器人账号和密码（可以在[[Special:BotPasswords]]获取）
    	"password": ""
    }
    ```

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改
    	"OAuth2AccessToken": "" // 填入 OAuth2 访问密钥
    }
    ```

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改
    	"OAuthCredentials": {
    		// 填入 OAuth1.0a 相关信息
    		"accessToken": "16_DIGIT_ALPHANUMERIC_KEY",
    		"accessSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    		"consumerToken": "16_DIGIT_ALPHANUMERIC_KEY",
    		"consumerSecret": "20_DIGIT_ALPHANUMERIC_KEY"
    	}
    }
    ```

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署

> 请网站维护者注意：在 Fork 本仓库后，本仓库的 Actions 将自动同步上游变更。这意味着在一般情况下，不需要改动除了`src`文件夹和`script/constant.js`之外的东西，以免发生合并冲突。
>
> 建议网站维护者只接受 Pull request，以便 Actions 自动检查并指出代码语法和格式的错误。如果检查未能通过，也不应修改本仓库的相关规则。未通过意味着代码本身存在问题，而不应该将问题归咎于严格的规则。
