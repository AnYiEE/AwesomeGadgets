[![NPM version](https://img.shields.io/npm/v/awesome-gadgets.svg)](https://www.npmjs.com/package/awesome-gadgets)
[![Linter](https://github.com/AnYiEE/AwesomeGadgets/actions/workflows/lint.yml/badge.svg)](https://github.com/AnYiEE/AwesomeGadgets/actions/workflows/lint.yml)

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

见[文档](docs/how-to-build-or-deploy.md)。<br>See [documentation](docs/how-to-build-or-deploy.md).

### 最佳实践 / Best practices

-   [QiuwenGadgets](https://github.com/qiuwenbaike/QiuwenGadgets) ([@qiuwenbaike](https://github.com/qiuwenbaike))
