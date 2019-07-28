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
                    1.用四根手指向下轻扫，可查看正在使用的应用的所有窗口。
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
