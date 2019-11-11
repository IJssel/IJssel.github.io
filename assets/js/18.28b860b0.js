(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{325:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("记录使用 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),a("OutboundLink")],1),t._v(" 以来所遇到的坑及解决办法")]),t._v(" "),a("ol",[a("li",[t._v("修改 build 的输出目录")])]),t._v(" "),a("p",[a("code",[t._v("vuepress")]),t._v(" 的默认输出目录在 "),a("code",[t._v(".vuepress/dist")]),t._v(" 不是很方便，可以通过下面方法改写输出目录")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("vuepress-plugin-sitemap")]),t._v(" 报错")])]),t._v(" "),a("p",[t._v("主要是由于 "),a("code",[t._v("@vuepress/last-updated")]),t._v(" 插件将 "),a("code",[t._v("lastUpdated")]),t._v(" 编译为 "),a("code",[t._v("lang")]),t._v(" 所在时间格式。转换后的中文时间格式没有办法被 "),a("code",[t._v("vuepress-plugin-sitemap")]),t._v(" 识别引起的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("transformer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toISOString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("为你的主题增加自定义容器")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("vuepress-plugin-container")]),t._v(" 来增加自定义容器")]),t._v(" "),a("p",[t._v("TIP")]),t._v(" "),a("p",[t._v("默认主题是自带的，其他需要自己手动增加")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="tip"><p class="title">')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/tolking/blog/blob/master/blog/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .vuepress/styles/index.styl */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tip\n  padding "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("rem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("rem\n  border"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),t._v("rem\n  border"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style solid\n  margin "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("rem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color #f3f5f7\n  border"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("b983\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title\n    font"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("weight bold\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/tolking/blog/blob/master/blog/.vuepress/styles/index.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("GitHub Pages and Travis CI 自动化部署")])]),t._v(" "),a("ul",[a("li",[t._v("在项目的根目录创建 "),a("code",[t._v(".travis.yml")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("查考"),a("OutboundLink")],1),t._v(" 配置文件，或者复制下面的配置")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("committer_from_gh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("ul",[a("li",[a("p",[t._v("进入")]),t._v(" "),a("p",[t._v("github")]),t._v(" "),a("p",[t._v("获取 token")]),t._v(" "),a("ul",[a("li",[t._v("settings -> Developer settings -> Personal access tokens -> Generate new token")]),t._v(" "),a("li",[t._v("输入 Note 同时勾选所有 -> Generate token")]),t._v(" "),a("li",[t._v("复制 token")])])]),t._v(" "),a("li",[a("p",[t._v("进入")]),t._v(" "),a("p",[t._v("travis ci")]),t._v(" "),a("p",[t._v("创建")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GITHUB_TOKEN\n")])])]),a("ul",[a("li",[t._v("进入你对应仓库的 settings")]),t._v(" "),a("li",[t._v("在 Environment Variables 下面的 NAME 中输入 "),a("code",[t._v("GITHUB_TOKEN")]),t._v("，在 VALUE 中粘贴从 github 中复制的值")]),t._v(" "),a("li",[t._v("点击 add 增加环境变量")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);