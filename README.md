### 简介

Awesome Gadgets 是面向 MediaWiki 网站，用以统一存储、管理并编译全站小工具（Gadget）的工具。小工具开发者只需关心小工具本身的代码实现，无需关心其他方面（如：语法兼容性）。

### 用法

**对于小工具开发者：**

1. Fork 本仓库

2. 在`src`文件夹下以小工具名新建文件夹

3. 开始编写代码

    1. 目录下的`小工具名.{js, ts, css, less}`、`index.{js, ts, css, less}`默认为脚本/样式的入口文件（二选一即可）。

        1. 当存在入口文件时，所有的脚本/样式均会被编译，最终生成`入口文件.{js, css}`并部署。
        2. 不存在入口文件时，所有的脚本/样式均会被编译并部署。

    2. 目录下可以创建`definition.json`以手动指定小工具定义（可选）

    ```json
    {
    	// 示例
    	"actions": ["view", "edit"],
    	"dependencies": ["mediawiki.util"],
    	"peers": ["peers"],
    	"rights": ["rollback"],
    	"skins": ["vector"]
    }
    ```

4. 运行`pnpm run build`以检查语法、格式化代码、测试编译

5. 向上游发起 Pull Request

> 脚本可以是 ts 或 js，可以使用 ESNext 所支持的语法（如`import`）；导入的图片将被自动转换成 Data URLs（如`data:image/png;base64,...`）。
>
> 样式可以是 less 或 css，支持`@import`语法。

**对于网站维护者：**

1. Fork 本仓库

2. 根据实际情况更改各个小工具的`definition.json`，可选值及默认值可见于`script/constant.js` - `DEFAULT_DEFINITION`

3. 根据实际情况更改`script/constant.js`中的信息

4. 在`script`文件夹下新建`credentials.json`文件

    ```json
    {
    	"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改
    	"username": "", // 填入机器人账号和密码（可以在[[Special:BotPasswords]]获取）
    	"password": ""
    }
    ```

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署
