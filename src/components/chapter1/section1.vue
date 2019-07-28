<template>
    <div class="inner-container" v-else>
     <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">有用的快捷键</h1>
            <div class="segment-content">
                <p>
                    Alt + 空格 + C:关闭当前程序或窗口
                </p>

                <p>
                    Alt + D:选中地址栏。浏览器或资源管理器的地址栏
                </p>


                <p>
                    Win + 空格:透明化所有窗口，放掉后透明化后又恢复
                </p>
                <p>
                    Win + Tab:以3D方式切换窗口
                </p>
                <p>
                    Win + 数字键（1-9）:对应任务栏上的任务
                </p>
                <p>
                    Win + L:锁定电脑
                </p>
                <p>
                    Win + E:打开资源管理器
                </p>

                <p>
                    Win + D:最小化所有窗口，当再次按时，又会还原刚才所有的窗口
                </p>
                <p>
                    Win + ↑:最大化窗口<br/>
                    Win + ↓:最小化窗口
                </p>



            </div>
            <h1>有用的东西</h1>
            <div class="segment-content">
                1.命令启动取消跨域浏览功能
                "C:\Users\UserName\AppData\Local\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir
                2.公开邮箱  minefo@aliyun.com

                //temp start
                官网参考
                http://www.uc.cn/
                //temp end
                3.webstorm使用技巧
                  I.正则替换 教程https://www.jetbrains.com/help/webstorm/2016.1/regular-expression-syntax-reference.html
                    <textarea>
                        src="./\w+_\w+/([a-z0-9]+).jpg"> //查找
                        src="./images/$1.jpg">  //替换
                    </textarea>

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
