<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">npm 命令</h1><div class="segment-content">
            1.access 操作私有包的访问
            2.adduser Add a registry user account
              I.默认--registry是https://registry.npmjs.org/
              II.npm adduser输入之后，会在命令提示符里面输入用户名，密码，邮箱
            3.audit 扫描您的项目的漏洞，并自动安装任何兼容更新到易受攻击的依赖项
            4.bin 显示bin文件夹 如:D:\research\npm-research\node_modules\.bin
            5.bugs 直接用浏览器打开bug页面,链接地址就是在package.json中配置的
            6.build 管道命令不应该直接调用。
            8.cache 本地缓存目录管理
               I.npm cache clear --force 不会删除本地缓存包
               II.npm cache verify 收集无效的数据
            9.ci  通过npm-shrinkwrap.json或者package-lock.json安装整个项目，不能安装单个模块，并且安装之前会先删除node_modules
            10.completion 执行一些命令
            11.config Manage the npm configuration files
               I.四个配置文件路径
                    per-project config file (/path/to/my/project/.npmrc)  当前项目的中和node_modules、 package.json同级,只能直接修改不能通过命令操作
                    per-user config file (~/.npmrc)   userconfig C:\Users\chenxuhua\.npmrc
                    global config file ($PREFIX/etc/npmrc)       globalconfig C:\Users\chenxuhua\AppData\Roaming\npm\etc\npmrc 通过命令后面加-g操作
                    npm builtin config file (/path/to/npm/npmrc) C:\Program Files\nodejs\node_modules\npm npm内部配置，不可以修改

            12.dedupe 删除重复数据,当a和b同时引用了c,但是小版本号不一样，所以可以只保留c的最新版本
            13.deprecate 废弃警告
                I.添加废弃警告 npm deprecate puredatetime "dont support too low"
                II.删除废弃警告 >npm deprecate puredatetime ""
                III.废弃指定版本 npm deprecate puredatetime@1.0.1 "dont support too low222"
            14.dist-tag 给数字版本添加随意标签
               I.增加标签 npm dist-tag add puredatetime@1.0.10  three
               II.删除标签 npm dist-tag rm puredatetime three
               III.查看标签 npm dist-tag ls
               VI.记住要添加标签的前提是当前数字版本已经发布了
               V.stable, beta, dev, canary
            15.docs 直接用浏览器打开package.json中配置的homepage
            16.doctor 检查包，列出一些信息
            17.edit Edit 编辑当前项目已经安装的包，默认用记事本打开，有可能提示拒绝访问
            18.explore 探测已经安装的包
                I.如 npm explore puredatetime -- node test.js  执行一些命令
                II.如 npm explore puredatetime -- npm  test 执行packjson中定义的命令
            19.help 直接在浏览器中打开某个命令的用法如: npm help access
            20.help-search 模糊查找，并且以列表形式直接打印在命令窗口
            21.hook 用来提交更改记录,付费用户才有此功能
            22.init 初始化一个package.json文件
               I.npm init 需要回答问题
               II.npm init --f 不需要回答问题
               III.npm init react-app(生成器) ./my-react-app (目录) 通过生成器生成项目
            23.install 安装包具体看下面总结部分
            24.install-ci-test 这个命令没有生效，可能已经废弃
            25.install-test 先执行npm install 然后执行npm test
            26.link 创建连接符,会实时同步
               I.npm link 把当前项目创建符号链接到全局里面
               II.npm link 符号链接包名 从全局中安装符号包
            27.logout 退出登录
               I.npm logout 不带配置参数默认就是退出当前registry
            28.ls  安装包的依赖情况
               I.npm ls 会列出所有模块的依赖包
               2.npm ls 模块名 如：express-http-proxy@1.2.0 会显示当前模块的版本号
            29.npm  就是npm命令
            30.outdated 检查已经安装的包，如果package.json里面有更合适的包，就给出红色提示，如果有不向下兼容的包，就给出黄色提示
            31.owner 管理包管理者
               I.npm owner add minefo  puredatetime 添加管理者
               II.npm owner rm minefo 移除管理者
               III.npm owner ls 显示所有管理者

            32.pack 打包指定模块，如果没有指定模块就打包当前目录，打包之后的压缩包放在当前目录
            33.ping  ping一下 registry 返回成功和失败信息
            34.prefix 打印出package.json文件的最接近的父目录
            35.profile  修改和获取在registry上的信息
            36.prune 从上到下的方式检查和删除没有被引用的包
            37.publish 发布包
               I.npm publish 会更新本地缓存包
               II.npm publish --tag 标签名 如：npm publish --tag myname14
            38.rebuild 当nodejs版本升级时，可能需要这个命令重新构建
            39.repo 用浏览器打开package.json文件中配置的repository
            40.restart 执行package.json中的scripts定义的restart，如果scripts里面定义了prerestart,那么先执行prerestart
            41.root 打印node_modules目录，如果加上-g，那么打印全局node_modules目录
            42.run-script 执行package.json中scripts中定义的命令
               I.npm run  prerestart -- --a=1 --c=2  console.log(process.argv) //可以传入参数，通过process.argv接受
            43.search 搜索包，只是展示部分结果
               I.使用正则 npm search /\d/
            44.shrinkwrap 创建npm-shrinkwrap.json文件，npm-shrinkwrap.json文件优先权最高
            45.star 尝试了不起作用 (有效果，只是有延迟)
            46.stars 尝试了不起作用,但是可以查看别人加星的模块 如：npm stars jiabing  (有效果，只是有延迟)
            47.start npm start 如果scripts中没有定义start 就执行node  server.js,如果都没有就报错
            48.stop scripts 命令
            49.team 创建组
               I.npm team create @minefo-organization:myfirstteam 在组织下创建团队
               II. npm team ls minefo-organization 显示组织下有哪些团队
               III.组织必须要网页上创建，并且不可以删除和重命名
            50.test scripts 命令
            51.token 对当前登录的token进行管理
               1.npm token revoke和npm logout效果一样
               2.npm token list 展示当前所有token
            52.uninstall  卸载包
               I.npm uninstall pkg 只会移除当前项目下的node_modules目录下的模块,本地缓存目录不会移除
            53.unpublish 删除某个已经发布的版本，删除后别人就不能再安装，并且只能删除24小时内发布的包
            54.update
               I.根据语义更新到最新版本
               II.如果本地版本比最新版本要新，就降级
               III.默认只会更新顶级包，如果需要递归更新 可以使用 npm --depth 9999 update
            55.version 修改包的版本，并且用新的版本打git标签
            56.view  查看包一些信息，比如versions
            57.whoami 显示当前登录人

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>


        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.浏览器市场份额 <a href="http://tongji.baidu.com/data/browser" target="_blank">去查看</a>
               I.国内 Google的Chrome浏览器排名第一，其市场份额为45.74%,
               II.微软的IE浏览器排名第二，其份额为22.95%；（其中，IE9的份额为8.19%，IE8的份额为6.86%，IE11的份额为5.31%，IE7的份额为2.58%）
            2.npm还在本地缓存，查看缓存列表npm cache ls  查看缓存目录 npm config get cache(如：C:\Users\chenxuhua\AppData\Roaming\npm-cache),在缓存目录会根据拉取的仓库地址生成一个目录例如：registry.npmjs.org,里面有历史更新记录
            3.npm install安装过程
               I.先检查本地缓存中有没有满足要求的压缩包，如果有就本地安装
               II.运行npm install 不会更新package.json文件，如果当前项目下已经安装了满足package.json中指定的语义化版本，就直接跳过,即使有更新的包,但是npm update却不是
               III.运行npm install pkg,如果package.json配置了pkg,则版本变成^加版本,如果没有指定,则dependencies中新增并且版本变成^加最新版本
            4.查看npm版本 npm -v
            5.升级npm
               I.找到PowerShell以管理员身份运行
               II.执行如下命令0
                 Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
                 npm install -g npm-windows-upgrade
                 npm-windows-upgrade
            6.注意当前接口文档是6.1.
            7.查看全局安装的包
              I.命令 npm list -g --depth 0  如：C:\Users\chenxuhua\AppData\Roaming\npm
              II.本地缓存和全局包都在同一个目录只不过一个是npm-cache，一个是npm
            8.package-lock.json 锁定包的版本，主要用于cli安装如：npm ci,如果锁定包的版本和package.json不一致就会报错,npm install就会产生package-lock.json
            9.npm-shrinkwrap.json 功能和package-lock.json一样，只是发布的时候可以带上npm-shrinkwrap.json
            10.直接打开文件 start 文件路径
            11.资源树怎么看，`--表示当前父节点的最后一级,顺序是dependencies中定义的顺序
            12.查看当前登录人 npm profile get name
            13.版本语义化
               I.主版本号：当你做了不兼容的 API 修改， 次版本号：当你做了向下兼容的功能性新增，修订号：当你做了向下兼容的问题修正。
               II.语义库 <a href="https://docs.npmjs.com/misc/semver" target="_blank">semver</a>
               III.中文介绍 <a href="http://www.u396.com/semver-range.html" target="_blank">去查看</a>
               VI.波浪线（~） 大于等于当前，小于如果有次版本，就次版本加1，没有次版本就主版本加1
                ~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0
                ~1.2 := >=1.2.0 <1.(2+1).0 := >=1.2.0 <1.3.0 (类似于 1.2.x)
                ~1 := >=1.0.0 <(1+1).0.0 := >=1.0.0 <2.0.0 (类似于 1.x)
                ~0.2.3 := >=0.2.3 <0.(2+1).0 := >=0.2.3 <0.3.0
                ~0.2 := >=0.2.0 <0.(2+1).0 := >=0.2.0 <0.3.0 (类似于 0.2.x)
                ~0 := >=0.0.0 <(0+1).0.0 := >=0.0.0 <1.0.0 (类似于 0.x)
                ~1.2.3-beta.2 := >=1.2.3-beta.2 <1.3.0 注意版本为1.2.3且大于等于beta.2的测试版本在范围内，因此 1.2.3-beta.4 满足条件，而1.2.4-beta.2不满足条件。
               V.补注号（^）范围 大于等于当前且小于左起第一个非零数加1,都是零就次版本为1, 如果是主版本为0，此版本为x 则满足次版本和修定版本就行
                ^1.2.3 := >=1.2.3 <2.0.0
                ^0.2.3 := >=0.2.3 <0.3.0
                ^0.0.3 := >=0.0.3 <0.0.4
                ^1.2.3-beta.2 := >=1.2.3-beta.2 <2.0.0
                ^0.0.3-beta := >=0.0.3-beta <0.0.4
                ^1.2.x := >=1.2.0 <2.0.0
                ^0.0.x := >=0.0.0 <0.1.0
                ^0.0 := >=0.0.0 <0.1.0
                ^1.x := >=1.0.0 <2.0.0
                ^0.x := >=0.0.0 <1.0.0
              x 表示范围 表示满足x左边就行 如：1.x := >=1.0.0 <2.0.0 (只要满足主版本号即可)
            14.查看包的所有版本
               I.npm view format-datetime versions
            15.详细文档地址 <a href="https://docs.npmjs.com/files/package.json" target="_blank">去查看</a>
            16.bin命令执行 node ./node_modules/.bin/webpack
            17.不是全局包的命令行，只能通过npm run 运行,安装在全局目录可以执行运行
               I.教程1<a href="http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html">教程1</a>
               II.教程2<a href="https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm">教程1</a>
            18.关于package.json中包的依赖选项,执行npm install pkg
              I.-P|--save-prod 放在 package.json dependencies中
              II.-D|--save-dev 放在 package.json devDependencies中
              III.-O|--save-optional 放在 package.json optionalDependencies
              VI.-E|--save-exact 放在 package.json 中的dependencies中 并且版本变成精确版本
              V.-B|--save-bundle  放在 package.json 中的dependencies中 并且放在bundleDependencies中 bundleDependencies是数组
              VI.--no-save 安装包，但是包不放在package.json中
              VII.--dry-run 整个流程走一遍，但是不安装包
              VIII.执行npm install 会安装dependencies、devDependencies以及optionalDependencies
              VIIII.执行npm install --only=prod会安装dependencies以及optionalDependencies
              VV.执行npm install --only=dev只会安装devDependencies
              VVI.执行npm install --only=prod --no-optional只会安装dependencies
             VVI.执行npm install  --no-optional只会安装dependencies以及devDependencies

            <div class="segment-wraper"><h1 class="segment-title">node多版本处理</h1><div class="segment-content">
                1.安装nvm  资源mutlNode.rar
                    I. nvm list 查看所有node
                    II.nvm use node-v 使用哪个node
                    III.如果发现好多包安装不了使用 .npmrc
                            phantomjs_cdnurl=http://cnpmjs.org/downloads
                            sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
                            registry=https://registry.npm.taobao.org
                    VI.切换node版本后，如果提示webpack-dev-server命令不存在，记得重启工程

            </div></div>

        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted(){

        },
        watch: {
            ...pageCommon.pageCommonWatch.commonWatch
        },
        methods : {
            ...pageCommon.pageCommonMethod.opeMethod,//增删改查方法
            ...pageCommon.pageCommonMethod.otherMethod, //页面其他方法
        },
    }
</script>
<style scoped>

</style>
