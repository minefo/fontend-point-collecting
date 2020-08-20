<template>
    <div class="inner-container" v-else>
     <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">触摸板使用技巧</h1>
            <div class="segment-content">
                <p>
                    <a href="https://support.apple.com/zh-cn/HT204895" target="_blank">去官网看</a>
                </p>
                <p>
                    常用的快捷键:<br/>
                    1.用四根手指向上轻扫，可查看所有窗口。
                    2.查看隐藏文件快捷键 Command + Shift + .
                    3.不想在chrome里使用双指前进后退页面的功能
                    命令行下执行 然后重启浏览器
                    defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool FALSE
                    4.mac 操作介绍
                    http://www.360doc.com/content/18/1121/10/27492377_796259195.shtml
                </p>
            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">有用的快捷键</h1>
            <div class="segment-content">
                <p>
                    <a href="https://support.apple.com/zh-cn/HT201236" target="_blank">去官网看</a>
                </p>
                <p>
                    常用的快捷键:<br/>
                    1.快捷键control+command+1自动排列<br/>
                    2.Command-Tab	切换应用：在打开的应用中切换到下一个最近使用的应用。
                    3. 复制后粘贴的时候用 option+command+v 就剪切了！
                </p>
            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">有用的命令</h1>
            <div class="segment-content">
                <p>
                    <a href="https://support.apple.com/zh-cn/HT201236" target="_blank">去官网看</a>
                </p>
                <p>
                     显示隐藏文件：<br/>

                     defaults write com.apple.finder AppleShowAllFiles -bool TRUE <br/>

                     停止显示隐藏文件： <br/>

                     defaults write com.apple.finder AppleShowAllFiles -bool FALSE <br/>

                     注：重启Finder的方法：按住option+command，dock上右键->“Relanch”/“重新开启”。

                    或者
                    1、显示Mac隐藏文件的命令：
                    defaults write com.apple.finder AppleShowAllFiles YES
                    2、隐藏Mac隐藏文件的命令：
                    defaults write com.apple.finder AppleShowAllFiles NO

                    重启Finder：鼠标单击窗口左上角的苹果标志-->强制退出-->Finder-->重新启动
                 </p>
            </div>
        </div>


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
