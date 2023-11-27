[![NPM version](https://img.shields.io/npm/v/awesome-gadgets.svg)](https://www.npmjs.com/package/awesome-gadgets)
[![Linter](https://github.com/AnYiEE/AwesomeGadgets/actions/workflows/lint.yml/badge.svg)](https://github.com/AnYiEE/AwesomeGadgets/actions/workflows/lint.yml)

# 有兽档案馆代码库

## 概述 Brief
本仓库为有兽档案馆的代码仓库，为网站小工具、用户js/css等核心代码提供协作与部署支持。

## 底层支持 Base 
本小工具库是 [AnYiEE/AwsomeGadgets](https://github.com/AnYiEE/AwesomeGadgets) 的分支。

### 简介 / Introduction

Awesome Gadgets 是面向 MediaWiki 网站，用以统一存储、管理并编译全站小工具（Gadget）的工具。小工具开发者只需关心小工具本身的代码实现，无需关心其他方面。工具将自动检查语法、编译并部署到网站。<br>_Awesome Gadgets_ is a tool designed specifically for MediaWiki websites, with the goal of centralizing the storage, management, and compilation of all site-wide gadgets. Developers of these gadgets can solely focus on implementing the code for their creations without the need to worry about other aspects. The tool will automatically check the syntax, compile, and deploy gadgets to the website.

-   使用 esbuild 编译，babel 转译，支持 TypeScript 和 Less<br>It harnesses esbuild for compilation, babel for transpilation, and supports TypeScript and Less
-   部署时将自动部署<br>During deployment, it automatically deploys to the following
    -   `MediaWiki:Gadgets-definition`
    -   `MediaWiki:Gadget-section-*`（支持自动转换中文变体）/ (with automatic conversion for Chinese variations)
    -   `MediaWiki:Gadget-*`（支持自动转换中文变体）/ (with automatic conversion for Chinese variations)
    -   `MediaWiki:Gadget-*.{js, css}`
-   部署后将自动从网站内删除曾经部署过但现在不再需要的页面<br>After deployment, it automatically deletes pages from the website that have been deployed but are no longer needed

### 用法 / Usage

**对于小工具开发者：**<br>**For gadget developers:**

1. Fork 由目标 MediaWiki 网站所维护的仓库<br>Fork the repository maintained by the target MediaWiki website

2. 在`src`文件夹下以小工具名新建文件夹<br>Create a new directory within the `src` directory, using the name of your gadget

3. 在目录下新建`小工具名.{js, ts, css, less}`或`index.{js, ts, css, less}`<br>Within the directory, create either `GadgetName.{js, ts, css, less}` or `index.{js, ts, css, less}`

    1. 当存在入口文件`{小工具名, index}.{js, ts, css, less}`时<br>If there exists an entry file `{GadgetName, index}.{js, ts, css, less}`:

        1. 只存在`小工具名.{js, ts, css, less}`，将最终生成`小工具名.{js, css}`，其他的脚本/样式是否被编译将取决于其是否被`小工具名.{js, ts, css, less}`导入<br>Only exists `GadgetName.{js, ts, css, less}`, the final generation will be `GadgetName.{js, css}`. The compilation of other scripts/styles will depend on whether they are imported by `GadgetName.{js, ts, css, less}`
        2. 只存在`index.{js, ts, css, less}`，将最终生成`小工具名-index.{js, css}`，其他的脚本/样式是否被编译将取决于其是否被`index.{js, ts, css, less}`导入<br>Only exists `index.{js, ts, css, less}`, the final generation will be `GadgetName-index.{js, css}`. The compilation of other scripts/styles will depend on whether they are imported by `index.{js, ts, css, less}`
        3. 二者同时存在，将最终生成`小工具名-index.{js, css}`，`小工具名.{js, ts, css, less}`和其他的脚本/样式是否被编译将取决于其是否被`index.{js, ts, css, less}`导入<br>Both exist, the final generation will be `GadgetName-index.{js, css}`, `GadgetName.{js, ts, css, less}`. The compilation of other scripts/styles will depend on whether they are imported by `index.{js, ts, css, less}`

    2. 不存在入口文件时，所有的脚本/样式均会被编译，生成`对应文件名.{js, css}`<br>If no entry file exists, all scripts/styles will be compiled, generating `CorrespondingFileName.{js, css}`

4. 目录下可以创建`definition.json`以手动指定小工具定义（可选）<br>In the directory, you have the option to create a `definition.json` file to manually specify the gadget definition

    ```json
    {
    	// 示例 / Example
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

5. 目录下可以创建`LICENSE`以标注小工具的版权信息（可选），文件中的内容会在部署时自动添加到对应小工具文件的顶部<br>In the directory, you have the option to create a `LICENSE` file to indicate the copyright information of your gadget. The content in this file will be automatically added to the top of the gadget file when it is deployed

6. 运行`pnpm run build`以格式化代码、检查语法、测试编译<br>Run `pnpm run build` to format the code, check syntax, and test the compilation

7. 向上游发起 Pull Request<br>Initiate a Pull Request to the upstream

> 脚本可以是 ts 或 js，可以使用 ESNext 所支持的语法（如`import`，支持跨目录导入）；导入的图片将被自动转换成 Data URLs（如`data:image/png;base64,...`）<br>The scripts can be in either TypeScript or JavaScript and can utilize the syntax supported by ESNext, such as import, which allows importing across directories. Imported images will be automatically converted to Data URLs, like `data:image/png;base64,...`.
>
> 样式可以是 Less 或 CSS，支持`@import`语法。<br>The styles can be written in either Less or CSS and support the `@import` syntax.

**对于网站维护者：**<br>**For website maintainers:**

1. Fork 本仓库<br>Fork this repository

2. 根据实际情况更改各个小工具的`definition.json`，可选值及默认值可见于`scripts/constant.js` - `DEFAULT_DEFINITION`<br>Modify the definition.json for each gadget according to your specific requirements. Optional values and their default values can be found in `scripts/constant.js` - `DEFAULT_DEFINITION`

3. 根据实际情况更改`scripts/constant.js`中的信息<br>Update the information in `scripts/constant.js` based on your specific needs

4. 在`script`文件夹下新建`credentials.json`文件（多选一，取决于你的登录方式。存在多种登录凭据时，OAuth2 优先于 OAuth1.0a 优先于机器人账号密码）<br>Create a `credentials.json` file in the `script` directory (choose one based on your login method. If multiple login credentials are available, OAuth2 takes precedence over OAuth1.0a, which takes precedence over bot password)

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    	"username": "", // 填入机器人账号和密码（可以在[[Special:BotPasswords]]获取）/ Enter the robot account and password (you can get it from [[Special:BotPasswords]])
    	"password": ""
    }
    ```

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    	"OAuth2AccessToken": "" // 填入 OAuth2 访问密钥 / Enter the OAuth2 access token
    }
    ```

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    	"OAuthCredentials": {
    		// 填入 OAuth1.0a 相关信息 / Enter the OAuth1.0a related information
    		"accessToken": "16_DIGIT_ALPHANUMERIC_KEY",
    		"accessSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    		"consumerToken": "16_DIGIT_ALPHANUMERIC_KEY",
    		"consumerSecret": "20_DIGIT_ALPHANUMERIC_KEY"
    	}
    }
    ```

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署<br>Run `pnpm run deploy` to check syntax, format code, compile the source code, and deploy to the website

> 请网站维护者注意：在 Fork 本仓库后，本仓库的 Actions 将自动同步上游变更。这意味着在一般情况下，不需要改动除了`src`文件夹和`scripts/constant.js`之外的东西，以免发生合并冲突。<br>Please note that the Actions of this repository will automatically sync upstream changes. This means that in general, there is no need to modify anything except the `src` directory and `scripts/constant.js` to avoid merge conflicts.
>
> 建议网站维护者只接受 Pull request，以便 Actions 自动检查并指出代码语法和格式的错误。如果检查未能通过，也不应修改本仓库的相关规则。未通过意味着代码本身存在问题，而不应该将问题归咎于严格的规则。<br>It is recommended for website maintainers to only accept pull requests, so that the Actions can automatically check and report syntax and formatting errors. If a check fails, it should not result in modifying the relevant rules of this repository. A failure indicates an issue with the code itself and should not be attributed to strict rules.

### 最佳实践 / Best practices

-   [QiuwenGadgets](https://github.com/qiuwenbaike/QiuwenGadgets) ([@qiuwenbaike](https://github.com/qiuwenbaike))
