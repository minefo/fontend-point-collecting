<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1. Git 仓库的是文件的快照压缩
            2.基本的 Git 工作流程如下：
                在工作目录中修改文件。 checkout
                暂存文件，将文件的快照放入暂存区域。 git add
                提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。git commit
            3.git仓库里面只会新增，不会删除文件
            4.Git 克隆的是该 Git 仓库服务器上的几乎所有数据,初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态
            5.只要在 Changes to be committed(下面的改变可以被提交) 这行下面的，就说明是已暂存状态
            6. Changes not staged for commit(改变没有暂存) 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。 要暂存这次更新，需要运行 git add 命令
            7.如果一个文件同时出现在暂存区和非暂存区,使用git add 非暂存区覆盖暂存区，提交最新更改
            8.git diff 可以查看非暂区和暂存区同一个文件之间的差距
            9.git diff --staged 查看将要提交的暂存区内容
            10.git commit 如果后面补带上-m 会进入默认编辑器，需要根据提示进入编辑状态，然后esc退出编辑，然后shift+z两次保存
            11.git commit -a -m "备注" 会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 git add 步骤
            11.git rm
               I.如果想不跟踪某个文件可以 git rm 某某.md  git commmit -m "不跟踪某某文件",这个时候工作目录中该文件也被删除
               II.如果想保留工作目录中的文件，可以git rm --cached 某某文件
               III.如果文件已经在暂存区，必须带上-f或者--
            12.移动文件或者重命令文件， git mv file_from(源文件) file_to(目标文件)
            13.查看提交历史 git log 最新的再前面，会显示提交时的备注,git log有很多配置选项，比如根据关键字搜索 git log --grep="111"
            14.远程仓库是指托管在因特网或其他网络中的你的项目的版本库
            15.git remote add shortname url 添加远程仓库 例如：git remote add origin https://github.com/chenxvhua/pure-vue.git git remote 显示远程仓库，
                I.git remote show 某某仓库 显示仓库详细信息
                II.git remote rename pb paul 把pb重名为paul
                III. git remote rm paul 移除远程仓库paul
            16.git fetch [remote-name] 例如：git fetch two 这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看
               使用git fetch origin 会抓取克隆（或上一次抓取）后新推送的所有工作,它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作
            17.git pull 可以使用 git pull 命令来自动的抓取然后合并远程分支到当前分支
            18.git push [remote-name] [branch-name]  例如git push origin master 用来所做的备份到服务器和pull相对应
               注意：当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。 你必须先将他们的工作拉取下来并将其合并进你的工作后才能推送。
            19.git tag 列出所有标签
               I.git tag -a v1.4 -m 'my version 1.4' 打附注标签
               II.git show 某标签 可以看到标签信息与对应的提交信息
               III.要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）例如git tag -a v1.2 9fceb02
                IV.本地打的标签不会推送到服务器，需要显示推送，如：git push origin v1.5 或者一次把标签全部推送到服务器 git push origin --tags
                V.检出标签，只能根据标签检出新的分支 git checkout -b [branchname] [tagname],这样当前分支初始状态就会和打标签的状态一模一样
            20.创建新分支的就是创建一个可以移动的新的指针,改指针指向最近一次提交对象,这就能理解切换分支一些现象
                <img :src="branch"/>
            21.HEAD 为特 殊指针,可以理解为当前分支的别名
            22.分支切换 git checkout testing ,这样HEAD就指向testing了
            23.分支合并，a去合并b,就是把b补到a上,他是做一个简单的三方合并:两个分支的末端所指的快照（C4 和 C5）以及这两个分支的工作祖先（C2）
            24.快速创建并且切换到新创建的分支上 git checkout -b 某某分支
            25.删除分支 git branch -d hotfix
            26.分支管理
                I.git branch 列出所有分支  git branch -v 查看所有分支最后一次提交  --merged 与 --no-merge 可以查看和当前分支合并或者没合并的分支
            27. git ls-remote  来显式地获得远程引用的完整列表,它们以 (remote)/(branch) 形式命名
                I.git merge two-master --allow-unrelated-histories 可以合并不同源的分支
            28.本地的分支并不会自动与远程仓库同步 - 你必须显式地推送想要分享的分支
            29.在push的时候有冲突，会提示出来 git push origin serverfix:awesomebranch 来将本地的 serverfix 分支推送到远程仓库上的 awesomebranch 分支
            30.修改当前分支追踪远程分支 git branch -u origin/serverfix
            31.查看每个分支追综的远程分支 git branch -vv 如果获取情况可以执行 git fetch --all; git branch -vv
               I.“ahead” 是 2 意味着本地有两个提交还没有推送到服务器上
               II.领先 3 落后 1 ahead 3, behind 1
            32.删除远程分支 git push origin --delete serverfix
            33.变基的原理是首先找到这两个分支（即当前分支 experiment、目标基底分支 master）的最近共同祖先 C2，然后对比当前分支相对于该祖先的历次提交
             提取相应的修改并存为临时文件，然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用
               I.总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史，从不对已推送至别处的提交执行变基操作
               II. git checkout experiment  git rebase master  git checkout master git merge experiment 找出当前分支experiment与master共同祖先，然后在master后面一个提交历史进行重播
            34.SSH
               I.公钥保存地址 C:\Users\chenxuhua\.ssh
               II. something 和 something.pub   pub后缀的文件就是公钥，另一个文件则是密钥
               III.ssh-keygen 生成秘钥命令
               VI.Git 服务器的管理员只需要复制 .pub 文件的内容就行
               VII.要想用ssh推送代码，必须要用ssh方式拉取代码

            3.有用命令
                 I.配置用户名和邮箱
                     1.git config --global user.name "John Doe"
                     2.git config --global user.email johndoe@example.com
                     3.删除配置项git config --global  --unset credential.helper
            II.列出所有有用的配置 git config --list ,查看单个配置 git config user.name
                 III.git add  暂存文件 可以使用文件或目录的路径作为参数,还能用于合并时把有冲突的文件标记为已解决状态
                 IV.git commit -m '备注' 提交到本地git仓库里面
                 V.克隆的是可以起改名文件夹  git clone https://github.com/libgit2/libgit2 mylibgit mylibgit就是改名文件夹
                 VI.git commit --amend 忘记提交某个文件,把这次提交合并上次提交中去
                 VII.git reset HEAD 某某文件 取消暂存中的文件
                 VIII.git checkout -- 某某文件.md 撤销修改，前提是当前修改没有暂存，如果暂存必须先取消暂存，撤销后，文件恢复仓库最近一次提交



           4. //一是Ⅰ，二是Ⅱ，三是Ⅲ，四是Ⅳ，五是Ⅴ，六是Ⅵ，七是Ⅶ，八是Ⅷ，九是Ⅸ，十是Ⅹ
            //中文教程地址 https://git-scm.com/book/zh/v2
            5.查看远程连接地址
              git remote -v

            <div class="segment-wraper"><h1>实际演练:</h1><div class="summary">
                1.初始化一个git项目
                   I.线上新建仓库
                   II.git remote add origin https://github.com/chenxvhua/pure-vue.git
                   III.git remote -v 查看远程仓库
                   IV.ssh-keygen -o
                   V.查看分支 git branch
                   VI.git push 推送到服务器上
                2.分支
                   I.创建分支 git branch two master
                   II.切换分支  git checkout two
                   III.关联远程分支  git push --set-upstream origin two

                3.fetch 更新本地所有远程
                  I.将某个远程主机的更新，全部取回本地,常用来查看其他人的进程，因为它取回的代码对你本地的开发代码没有影响
                  II.默认情况下，git fetch取回所有分支的更新
                  III.本地远程分支永远保持最近一次最新,并且创建分支只能基于远程分支进行创建
                  VI.git pull等于 git fetch 指定分支，然后再git merge,注意如果远程服务器上删除了某个分支，git pull默认会删除本地分支
                  V.git push 流程是先本地的合并到本地的远程分支，然后再推送到服务器上
                4.git文件管理 参考https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86
                  1.git commit 会产生各个文件最新的快照
                  2.工作目录里的文件可以随意修改
                  3.文件要想保存到快照必须经过 工作目录->(不同就是红色)暂存区(不同就是绿色)->head
                  4.git reset 9e5e64a 把工作目录内容恢复成head内容
                    I.git reset分三步
                     移动 HEAD 分支的指向 （指定--soft就阻止下一步）
                     使索引看起来像 HEAD （指定 --hard 就进行下一步）
                     使工作目录看起来像索引
                  5.恢复最近一次提交 git reset --hard
                  6.恢复指定块的内容
                    git reset --hard be58e(就是git log id不需要写全，写前5位就可以了)
                  7.git 解决冲突
                     I.如果本地和服务器不一致，会提示错误
                     II.文件会提示冲突，要手动解决


            </div>
            </div>


            <div class="segment-wraper"><h1>实际工作中常用:</h1><div class="summary">
                1.查当前用户名 git config user.name
                2.添加远程一个链接 git remote add origin https://github.com/chenxvhua/pure-vue.git
                3. git remote -v
                4.推送tag 命令
                  git push --tags

            </div>
            </div>


        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                branch:require("../../images/branch.png"),
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
