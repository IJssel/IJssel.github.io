(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{343:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),a("h4",{attrs:{id:"在网页中会引用哪些常见的静态资源？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在网页中会引用哪些常见的静态资源？"}},[t._v("#")]),t._v(" 在网页中会引用哪些常见的静态资源？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JS")])]),t._v(" "),a("li",[a("p",[t._v(".js  .jsx  .coffee  .ts（TypeScript  类 C# 语言）")])]),t._v(" "),a("li",[a("p",[t._v("CSS")])]),t._v(" "),a("li",[a("p",[t._v(".css  .less   .sass  .scss")])]),t._v(" "),a("li",[a("p",[t._v("Images")])]),t._v(" "),a("li",[a("p",[t._v(".jpg   .png   .gif   .bmp   .svg")])]),t._v(" "),a("li",[a("p",[t._v("字体文件（Fonts）")])]),t._v(" "),a("li",[a("p",[t._v(".svg   .ttf   .eot   .woff   .woff2")])]),t._v(" "),a("li",[a("p",[t._v("模板文件")])]),t._v(" "),a("li",[a("p",[t._v(".ejs   .jade  .vue【这是在webpack中定义组件的方式，推荐这么用】")])])]),t._v(" "),a("h4",{attrs:{id:"网页中引入的静态资源多了以后有什么问题？？？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页中引入的静态资源多了以后有什么问题？？？"}},[t._v("#")]),t._v(" 网页中引入的静态资源多了以后有什么问题？？？")]),t._v(" "),a("ol",[a("li",[t._v("网页加载速度慢， 因为 我们要发起很多的二次请求；")]),t._v(" "),a("li",[t._v("要处理错综复杂的依赖关系")])]),t._v(" "),a("h4",{attrs:{id:"如何解决上述两个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决上述两个问题"}},[t._v("#")]),t._v(" 如何解决上述两个问题")]),t._v(" "),a("ol",[a("li",[t._v("合并、压缩、精灵图、图片的Base64编码")]),t._v(" "),a("li",[t._v("可以使用之前学过的requireJS、也可以使用webpack可以解决各个包之间的复杂依赖关系；")])]),t._v(" "),a("h2",{attrs:{id:"什么是webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是webpack"}},[t._v("#")]),t._v(" 什么是webpack?")]),t._v(" "),a("p",[t._v("webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；")]),t._v(" "),a("h4",{attrs:{id:"如何完美实现上述的2种解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何完美实现上述的2种解决方案"}},[t._v("#")]),t._v(" 如何完美实现上述的2种解决方案")]),t._v(" "),a("ol",[a("li",[t._v("使用Gulp， 是基于 task 任务的；")]),t._v(" "),a("li",[t._v("使用Webpack， 是基于整个项目进行构建的；")])]),t._v(" "),a("ul",[a("li",[t._v("借助于webpack这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能。")]),t._v(" "),a("li",[t._v("根据官网的图片介绍webpack打包的过程")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://webpack.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack官网"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"webpack安装的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack安装的两种方式"}},[t._v("#")]),t._v(" webpack安装的两种方式")]),t._v(" "),a("ol",[a("li",[t._v("运行"),a("code",[t._v("npm i webpack -g")]),t._v("全局安装webpack，这样就能在全局使用webpack的命令")]),t._v(" "),a("li",[t._v("在项目根目录中运行"),a("code",[t._v("npm i webpack --save-dev")]),t._v("安装到项目依赖中")])]),t._v(" "),a("h2",{attrs:{id:"创建webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建webpack"}},[t._v("#")]),t._v(" 创建webpack")]),t._v(" "),a("p",[t._v("步骤：创建文件名→用npm init -y创建json文件→创建index.html main.js→")]),t._v(" "),a("p",[t._v("webpack .\\src\\main.js  .dist\\bundle.js→cnpm i webpack -dev")]),t._v(" "),a("p",[t._v("html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n  \x3c!-- 注意： 不推荐直接在这里引用任何包和任何CSS文件 --\x3e\n</head>\n')])])]),a("p",[t._v("入口文件main.js\t//浏览器识别，设及es6所以用webpack生成bundle文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import './css/index.css'\nimport $ from 'jquery'\t//是ES6中导入模块的方式\n\n$(function () {\n  $('li:odd').css('backgroundColor', 'yellow')\n  $('li:even').css('backgroundColor', function () {\n    return '#' + 'D97634'\n  })\n})\n")])])]),a("p",[t._v("打包webpack.config.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const path = require('path')\nconst webpack=require('webpack')//生成HTML的插件，启用热更新第2步\nconst htmlWebpackPlugin = require('html-webpack-plugin')\n\n// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点\nvar htmlWebpackPlugin = require('html-webpack-plugin')\n\n//配置文件，起始是一个JS文件，通过Node中模块操作，向外暴露了一个配置对象\nmodule.exports = {\n  entry:path.join(__dirname,'./src/main.js'),// 入口文件\n  output: { \t\t\t//  指定输出选项\n    path: path.join(__dirname, './dist'),//输出路径\n    filename: 'bundle.js' //输出的文件名\n  },\n  \n  devServer: { //配置dev-server命令参数的第二种形式，这种方式麻烦一些\n    open: true, // 自动打开浏览器\n    port: 3000, // 设置启动时候的运行端口\n    contentBase: 'src', // 指定托管的根目录\n    hot: true // 启用热更新 的 第1步\n  },//与plugins\n  \n plugins: [ //所有webpack插件的配置节点\n //new一个热更新的 模块对象，启用热更新的第3步\n new htmlWebpackPlugin({//创建在内存中生成HTML的插件,指定模板文件路径\n    template:path.join(__dirname,'./src/index.html'),\n      filename: 'index.html' //生成的内存页面名\n    })\n  ],\n  module: { // 配置所有第三方loader 模块的\n    rules: [ // 所有第三方模块的 匹配规则\n    \t//分别配置处理 .css .less .scss 文件的第三方loader 规则\n      { test: /\\.css$/, use: ['style-loader', 'css-loader'] }, \n      { test: /\\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },\n      { test: /\\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },      \n     //分别处理 图片路径 字体文件 Babel来转换高级的ES语法 的loader\n      //limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串\n      { test: /\\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, \n      { test: /\\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'}, \n      {test:/\\.js$/,use:'babel-loader',exclude:/node_modules/},\n    ]\n  }\n}\n")])])]),a("p",[t._v("const webpack = require('webpack')")]),t._v(" "),a("p",[t._v("导入在内存中生成 HTML 页面的 插件\n这个插件的两个作用：")]),t._v(" "),a("ol",[a("li",[t._v("自动在内存中根据指定页面生成一个内存的页面")]),t._v(" "),a("li",[t._v("自动，把打包好的 bundle.js 追加到页面中去")])]),t._v(" "),a("p",[t._v("路由配置package.json      npm install自动生成")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-study"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server --open --port 3000 --hot"')]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ip地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.2.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.28.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"html-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.30.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"less"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.7.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"less-loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.0.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node-sass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.5.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sass-loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^6.0.6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"style-loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.19.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.8.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webpack-dev-server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.9.3"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"vue与webpack结合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue与webpack结合"}},[t._v("#")]),t._v(" vue与webpack结合")]),t._v(" "),a("h4",{attrs:{id:"使用render方式渲染组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用render方式渲染组件"}},[t._v("#")]),t._v(" 使用render方式渲染组件")]),t._v(" "),a("p",[t._v("特点：会清空html中之前的数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<div id=\"app\">\n    <p>{{msg}}</p>\n</div>\n\nvar vm = new Vue({\n  el: '#app',\n  data: {\n    msg: '123'\n  },\n  /* render: function (createElements) {在webpack 中，如果想要通过 vue，把一个组件放到页面中去展示，vm实例中的render函数可以实现\n    return createElements(login)\n  } */\n  render: c => c(login)//最新方法\n})\n")])])]),a("p",[t._v("注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；")]),t._v(" "),a("p",[t._v("默认，webpack 无法打包 .vue 文件，需要安装 相关的loader：\n"),a("code",[t._v("cnpm i vue-loader vue-template-compiler -D")]),t._v("\n在配置文件中，新增loader哦配置项 { test:/.vue$/, use: 'vue-loader' }")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("htmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理 less 文件的 loader")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.scss$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理 scss 文件的 loader")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(jpg|png|gif|bmp|jpeg)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader?limit=7631&name=[hash:8]-[name].[ext]'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(ttf|eot|svg|woff|woff2)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理.vue文件的loader")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 Vue 被导入时候的包的路径")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "vue$": "vue/dist/vue.js"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("总结： webpack 中如何使用 vue :")]),t._v(" "),a("ol",[a("li",[t._v("安装vue的包：  cnpm i vue -S")]),t._v(" "),a("li",[t._v("由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D")]),t._v(" "),a("li",[t._v("在 main.js 中，导入 vue 模块  import Vue from 'vue'")]),t._v(" "),a("li",[t._v("定义一个 .vue 结尾的组件，其中，组件有三部分组成 template script style")]),t._v(" "),a("li",[t._v("使用 import login from './login.vue' 导入这个组件")]),t._v(" "),a("li",[t._v("创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })")]),t._v(" "),a("li",[t._v("在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域")])]),t._v(" "),a("h4",{attrs:{id:"export-与-export-default的使用方式-导入导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-与-export-default的使用方式-导入导出"}},[t._v("#")]),t._v(" export 与 export default的使用方式--导入导出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {}\t\t//这是 Node 中向外暴露成员的形式\n")])])]),a("p",[t._v("导入\t【按需导出】")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import m222, { title } from './test.js'\nimport m222, { title as title123, content } from './test.js//as起名\n")])])]),a("p",[t._v("注意：")]),t._v(" "),a("p",[t._v("1 只能使用 { } 的形式来接收形式，叫做 【按需导出】")]),t._v(" "),a("p",[t._v("2 可以向外暴露多个成员，如果某些成员，不需要，则可以 不在 {}  中定义")]),t._v(" "),a("p",[t._v("3 必须严格按照 导出时候的名称，来使用  {}  按需接收")]),t._v(" "),a("p",[t._v("4 可以使用 as 来起别名")]),t._v(" "),a("p",[t._v("导入")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var info = {\n  name: 'zs',\n  age: 20\n}\nexport default info\n//或\nexport var title = '小星星'\t//在Node中使用var 名称=require('模块标识符')\n")])])]),a("p",[t._v("注意：")]),t._v(" "),a("p",[t._v("export default 向外暴露的成员，可以使用任意的变量来接收\n在一个模块中，export default 只允许向外暴露1次\n在一个模块中，可以同时使用 export default 和 export 向外暴露成员")]),t._v(" "),a("h4",{attrs:{id:"结合webpack使用vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合webpack使用vue-router"}},[t._v("#")]),t._v(" 结合webpack使用vue-router")]),t._v(" "),a("p",[t._v("app.vue")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <div>\n    <h1>这是 App 组件</h1>\n    <router-link to="/account">Account</router-link>\n    <router-link to="/goodslist">Goodslist</router-link>\n    <router-view></router-view>\n  </div>\n</template>\n')])])]),a("p",[t._v("main.js")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.导入 vue-router 包")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.手动安装 VueRouter ")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入app组件 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main/Account.vue'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//导入Account组件 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" goodslist "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main/GoodsList.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 创建路由对象")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/account'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/goodslist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" goodslist "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的 router-view和router-link直接写到el所控制的元素中")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  router "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 将路由对象挂载到vm上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意：App这个组件，是通过VM实例的render函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到el: '#app' 所指定的元素中；\nAccount 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 "),a("router-view"),t._v(" 中去；")],1),t._v(" "),a("h4",{attrs:{id:"路由嵌套实现children子路由抽出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由嵌套实现children子路由抽出"}},[t._v("#")]),t._v(" 路由嵌套实现children子路由抽出")]),t._v(" "),a("p",[t._v("上面再加上自定义路由router.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import VueRouter from 'vue-router'\nimport account from './main/Account.vue'\nimport goodslist from './main/GoodsList.vue'\n\n// 导入Account的两个子组件\nimport login from './subcom/login.vue'\t\t//先在此路径创建子路由\nimport register from './subcom/register.vue'\n\nvar router = new VueRouter({\n  routes: [\n    // account  goodslist\n    {\n      path: '/account',\n      component: account,\n      children: [\t\t\t\t\t\t//子路由\n        { path: 'login', component: login },\n        { path: 'register', component: register }\n      ]\n    },\n    { path: '/goodslist', component: goodslist }\n  ]\n})\n\nexport default router\t// 把路由对象暴露出去\n")])])]),a("h2",{attrs:{id:"移动端ui框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端ui框架"}},[t._v("#")]),t._v(" 移动端UI框架")]),t._v(" "),a("h3",{attrs:{id:"mint-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint-ui"}},[t._v("#")]),t._v(" mint UI")]),t._v(" "),a("p",[t._v("安装：npm i mint-ui")]),t._v(" "),a("p",[t._v("其它同上main.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport VueRouter from 'vue-router'\nVue.use(VueRouter)\nimport 'bootstrap/dist/css/bootstrap.css'// 导入bootstrap样式\nimport './css/app.css'\nimport'./lib/mui/css/mui.min.css'//导入MUI的样式表,和Bootstrap类似\n\n// 导入所有的 MIntUI 组件\n// 导入 Mint-UI\n// import MintUI from 'mint-ui' //把所有的组件都导入进来\n// // 这里 可以省略 node_modules 这一层目录\n// import 'mint-ui/lib/style.css'\n// // 将 MintUI 安装到 Vue 中\n// Vue.use(MintUI) // 把所有的组件，注册为全局的组件\n\nimport { Button } from 'mint-ui'\t//按需导入 Mint-UI组件\nVue.component(Button.name, Button) //使用Vue.component注册按钮组件\nimport app from './App.vue'\t//导入 app 组件\nimport router from './router.js'\t//导入 自定义路由模块\n\nvar vm = new Vue({\n  el: '#app',\n  render: c => c(app),\n  router\n})\n")])])]),a("p",[t._v("app.vue")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n \t<div>\n \t\t<h1>这是 App 组件</h1>\n\t\t<mt-button type="danger" icon="more" @click="show">default</mt-button>\t\t//超大 \n    <mt-button type="danger" size="large" plain>default</mt-button>\t\t//大\n\t\t<mt-button type="danger" size="small" disabled>default</mt-button>\t小\n <button type="button" class="mui-btn mui-btn-royal">紫</button>\n    <router-link to="/account">Account</router-link>\n    <router-link to="/goodslist">Goodslist</router-link>\n    <router-view></router-view>\n  </div>\n</template>\n\n<script>\nimport { Toast } from "mint-ui";// 按需导入 Toast 组件\nexport default {\n  data() {\n    return {\n      toastInstanse: null\n    };\n  },\n  created() {\n    this.getList();\n  },\n  methods: {\n   getList() {\n     // 模拟获取列表的一个AJax方法\n     // 在获取数据之前，立即弹出Toast提示用户，正在加载数据\n     this.show();\n     setTimeout(() => {\n      this.toastInstanse.close();//当3秒过,数据获取回来，Toast要移除\n      }, 3000);\n    },\n    show() {\n      this.toastInstanse = Toast({\t// Toast("提示信息");\n        message: "这是消息",\n        duration: -1, // 如果是 -1 则弹出之后不消失\n        position: "top",\n        iconClass: "glyphicon glyphicon-heart", // 设置 图标的类\n        className: "mytoast"//自定义Toast的样式，需要自己提供一个类名\n      });\n    }\n  }\n};\n<\/script>\n')])])]),a("h3",{attrs:{id:"mui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mui"}},[t._v("#")]),t._v(" MUI")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <div class="app-container">\n    <mt-header fixed title="Vue项目"></mt-header>\t//顶部Header\n\t\t<transition>\t\t\t\t//中间的路由router-view 区域\n\t\t\t<router-view></router-view>\n\t\t</transition>   \n    <nav class="mui-bar mui-bar-tab">\t\t//底部Tabbar区域\n\t\t\t<router-link class="mui-tab-item" to="/home">\n\t\t\t\t<span class="mui-icon mui-icon-home"></span>\n\t\t\t\t<span class="mui-tab-label">首页</span>\n\t\t\t</router-link>\n\t\t\t<router-link class="mui-tab-item" to="/member">\n\t\t\t\t<span class="mui-icon mui-icon-contact"></span>\n\t\t\t\t<span class="mui-tab-label">会员</span>\n\t\t\t</router-link>\n\t\t\t<router-link class="mui-tab-item" to="/shopcar">\n\t\t<span class="mui-icon mui-icon-extra mui-icon-extra-cart">\n\t\t\t\t\t<span class="mui-badge">0</span>\n\t\t\t\t</span>\n\t\t\t\t<span class="mui-tab-label">购物车</span>\n\t\t\t</router-link>\n\t\t\t<router-link class="mui-tab-item" to="/search">\n\t\t\t\t<span class="mui-icon mui-icon-search"></span>\n\t\t\t\t<span class="mui-tab-label">搜索</span>\n\t\t\t</router-link>\n\t\t</nav>\n  </div>\n</template>\n')])])]),a("h2",{attrs:{id:"相关文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/p/1210000008466178",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-preset-env：你需要的唯一Babel插件"),a("OutboundLink")],1),t._v("\n[Runtime transform 运行时编译es6](")])])}),[],!1,null,null,null);s.default=e.exports}}]);