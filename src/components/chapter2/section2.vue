<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">参考资料</h1>
            <div class="segment-content">
                <a href="https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/" target="_blank">去查看</a>
            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">参考图片</h1>
            <div class="segment-content">
                <img :src="prototype"/>
            </div>
        </div>

        <div class="segment-wraper"><h1>本节总结:</h1>
            <div class="summary">
                1.console.log(Object instanceof Object);//true  第一个的Object挠到Function
                2.console.log(Function instanceof Function);//true  自己指向自己
                3.console.log(Function instanceof Object);//true
                4.一个函数必有prototype和__prototype__
                5. instance of 是通过func__proto__ 和 Func.prototype比较
                6. 继承几种方式   http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html
          </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                prototype:require("../../images/prototype.jpg"),
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