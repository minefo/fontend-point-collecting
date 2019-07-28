<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">js各版本各浏览器支持情况</h1>
            <div class="segment-content">
                <img :src="domBrowerSupportSituation">
            </div></div>
        <div class="segment-wraper"><h1 class="segment-title">dom各版本各浏览器支持情况</h1>
            <div class="segment-content">
                <img :src="jsBrowerSupportSituation">
            </div></div>
        <div class="segment-wraper"><h1 class="segment-title">
            常用的有哪些浏览器和浏览器内核
        </h1><div class="segment-content">
            <table class="table-data">
                <tr>
                    <th title="Mozilla Foundation开发">Gecko['gɛko]</th>
                    <th title="Opera Software为Opera浏览器而开发。当Opera浏览器转移至Blink引擎时停止了开发">Presto['prɛsto]</th>
                    <th title="微软开发，用于Windows系统上的Internet Explorer 4到Internet Explorer 11。">Trident['traɪdnt]</th>
                    <th title="是KHTML的一个分支，由Apple Inc.开发，用于Safari，早期的Chromium和Google Chrome。">WebKit</th>
                    <th title="是WebKit的一个分支，由Google开发，用于Chromium，Google Chrome、Opera[3]和Vivaldi (浏览器)。">Blink[blɪŋk]</th>
                    <th title="微软开发，用于Edge。是Trident的分支">EdgeHTML[ɛdʒ]</th>
               </tr>
                <tr>
                    <td>火狐浏览器使用</td>
                    <td>由Opera['ɑprə] 7.0至12.18版本所使用。 </td>
                    <td>Internet Explorer 4到Internet Explorer 11</td>
                    <td>它被用於Apple Safari[sə'fɑri],Chrome[krom]28.0之前版本</td>
                    <td>Opera12.18之后版本,Chrome[krom]28.0及之后的版本</td>
                    <td>ie后期版本</td>
                </tr>
            </table>
            国内浏览器情况:
            360浏览器极速版：基于Chromium开发，同时加入了IE内核引擎。
            猎豹浏览器：基于Chromium开发，同时加入了IE内核引擎。
            傲游浏览器：基于Chromium开发，同时加入了IE内核引擎。
            七星浏览器：基于Chromium开发，同时加入了IE核心引擎。外观和枫树浏览器类似。
            QQ浏览器：基于Chromium开发，针对IE内核优化。
            百度浏览器：基于Chromium开发。
            UC浏览器：基于Chromium开发。

            手机浏览器情况：
            1,目前，移动设备浏览器上常用的内核有Webkit，Blink，Trident，Gecko等，
            2,其中iPhone和iPad等苹果iOS平台主要是WebKit
            3,Android 4.4之前的Android系统浏览器内核是WebKit
             Android4.4系统浏览器切换到了Chromium
             Windows Phone 8系统浏览器内核是Trident
        </div></div>


        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.ek-ma-script
            2.一个完整的JavaScript实现包括
            核心（ECMAScript）
                语法
                类型
                语句
                操作符
                对象
                关键字
                保留字
            文档对象模型(DOM)(W3C)
            浏览器对象模型(BOM)(H5)
            备注:HTML是超文本标记语言，目前由w3c维护

        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                domBrowerSupportSituation:require("../../images/dom-brower-support-situation.png"),
                jsBrowerSupportSituation:require("../../images/js-brower-support-situation.png"),
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
