<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            浏览器拿到html后，从上往下解析

            chrome浏览器显示网页如下（注意js会阻塞paint,也就是刚好在paint之前遇到js执行，页面可能什么都不到,
            当解析dom因为请求js被阻塞时,paint会被执行）
                                                                   |-> DOM树,遇到js,就等待加载完，加载完后，就执行，遇到css，发现没加载完，不阻塞dom树生成，继续往下,接下如果发现有script标签,dom树阻塞在当前script位置,dom生成完后会触发DOMcompleted事件
            请求网页-> 得到网页内容-takens阶段发现有资源，就会发起请求,                                                                                     ->生成渲染树 ->paint
                                                                   |-> CSSOM树 按dom顺序生成cssom树
            opera和chrome几乎一样,其他浏览器和chrome基本一致，ie,firefox,safara在dom树阻塞情况(请求css资源后面遇到script标签情况),会paint已经解析的dom树


            1.谷歌浏览器performance使用
               I.中文https://segmentfault.com/a/1190000011516068
               II.chrome开发工具视频教学https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=zh-cn
               III.performance使用第二篇https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool
            2.不错的css外文网站https://varvy.com/performance/cssom.html
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
