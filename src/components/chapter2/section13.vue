<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">参考链接</h1>
            <div class="segment-content">
                1.dos命令语法表述 <a href="https://www.lifewire.com/how-to-read-command-syntax-2618082" target="_blank">点击查看</a>
                2.w3c语法表述  <a href="https://www.w3.org/TR/css3-values/#value-defs" target="_blank">点击查看</a>
            </div>
        </div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            Bold  照字面显示
            Italic 必须提供的项
            Spaces 空格照字面显示
            [Text inside brackets] 括号里面的内容是可选的,不要包含括号
            Text outside brackets  照字面显示 必须要用
            {Text inside braces}   大括号里面的内容必选一项，不要包括大口号
            Vertical | bar         分割括中号和大阔号内容
            Ellipsis ...           省略号表示项目可以无限重复
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
