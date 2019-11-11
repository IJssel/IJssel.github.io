(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{333:function(t,_,v){"use strict";v.r(_);var a=v(16),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"配置用户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置用户"}},[t._v("#")]),t._v(" 配置用户")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git config --global user.name 'your name'")])])]),t._v(" "),v("p",[t._v("设置全局的用户名")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git config --global user.email 'your email'")])])]),t._v(" "),v("p",[t._v("设置全局的邮箱")]),t._v(" "),v("h2",{attrs:{id:"创建仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git init")])])]),t._v(" "),v("p",[t._v("将当前的文件夹初始化为一个 git 仓库")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git clone ...")])])]),t._v(" "),v("p",[t._v("克隆一个仓库")]),t._v(" "),v("h2",{attrs:{id:"暂存区相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#暂存区相关"}},[t._v("#")]),t._v(" 暂存区相关")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git status")])])]),t._v(" "),v("p",[t._v("查看当前工作区和暂存区文件的状态")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git add ...")])])]),t._v(" "),v("p",[t._v("增加文件到缓存区，通过 "),v("code",[t._v("git add *")]),t._v(" 增加所有")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git checkout -- ...")])])]),t._v(" "),v("p",[t._v("丢弃工作区的文件修改")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git rm ...")])])]),t._v(" "),v("p",[t._v("将文件从版本库中删除")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git commit -m '...'")])])]),t._v(" "),v("p",[t._v("创建提交信息")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git reset")])])]),t._v(" "),v("p",[t._v("把暂存区的修改回退到工作区")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git reset --hard \b[commit_id]")])])]),t._v(" "),v("p",[t._v("版本回退，使用 "),v("code",[t._v("git log")]),t._v(" 查看 "),v("strong",[t._v("commit_id")])]),t._v(" "),v("h2",{attrs:{id:"分支相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支相关"}},[t._v("#")]),t._v(" 分支相关")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git branch")])])]),t._v(" "),v("p",[t._v("查看当前分支")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git checkout -b ...")])])]),t._v(" "),v("p",[t._v("创建分支...")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git branch -d ...")])])]),t._v(" "),v("p",[t._v("删除分支...")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git checkout ...")])])]),t._v(" "),v("p",[t._v("切换到...分支")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git rebase ...")])])]),t._v(" "),v("p",[t._v("将...分支的内容合并到当前分支上")]),t._v(" "),v("h2",{attrs:{id:"标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git tag ...")])])]),t._v(" "),v("p",[t._v("查看所有标签")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git tag ...")])])]),t._v(" "),v("p",[t._v("创建标签")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git tag -d ...")])])]),t._v(" "),v("p",[t._v("删除标签")]),t._v(" "),v("h2",{attrs:{id:"推送改动到远程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#推送改动到远程"}},[t._v("#")]),t._v(" 推送改动到远程")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git remote add origin ...")])])]),t._v(" "),v("p",[t._v("增加远程仓库")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git push origin ...")])])]),t._v(" "),v("p",[t._v("提交改动到远端仓库，使用 "),v("code",[t._v("git push origin master")]),t._v(" 推送到远程主分支")]),t._v(" "),v("h2",{attrs:{id:"更新与合并"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新与合并"}},[t._v("#")]),t._v(" 更新与合并")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git pull")])])]),t._v(" "),v("p",[t._v("更新本地仓库至最新改动")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git merge ...")])])]),t._v(" "),v("p",[t._v("将...分支的内容合并到当前分支上")]),t._v(" "),v("h2",{attrs:{id:"配置别名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置别名"}},[t._v("#")]),t._v(" 配置别名")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git config --global alias.[...] ...")])])]),t._v(" "),v("p",[t._v("为指令配置别名")]),t._v(" "),v("h5",{attrs:{id:"例如"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例如"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"https://ououe.com/posts/2019/08/18/git/#%E4%BE%8B%E5%A6%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),v("OutboundLink")],1),t._v("例如")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.st status\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" st\n")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);