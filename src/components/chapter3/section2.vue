<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">script元素</h1><div class="segment-content">
            1.script的2个属性 ie9+
               I.async 不阻塞dom树解析，不阻塞DOMCompleted事件触发,但是会阻塞load事件,有可能在DOMCompleted之前执行代码，有可能在DOMCompleted之后执行代码，取决位置,所有async不一定按顺序执行
               II.defer 延迟到做最后的脚本块执行,DOM树已经形成，但是会阻止DOMCompleted事件触发,所有defer脚本按顺序

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">嵌入代码与外部文件</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">文档模式</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">noscript元素</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

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
