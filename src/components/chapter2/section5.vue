<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.android市场占有率
                Period	Android	iOS	  WindowsPhone	  Others
                2016Q1	83.4%	15.4%	0.8%	0.4%
                2016Q2	87.6%	11.7%	0.4%	0.3%
                2016Q3	86.8%	12.5%	0.3%	0.4%
                2016Q4	81.4%	18.2%	0.2%	0.2%
                2017Q1	85.0%	14.7%	0.1%	0.1%
            2.android版本市场占有率(android5.0以上占用80%左右，android4.4以上占用90%左右)
                Android Name	Android Version	Usage Share
                Nougat         	7.0,7.1	       31.1%↑
                Marshmallow	      6.0	       25.5%↓
                Lollipop	    5.0, 5.1	   22.4%↓
                KitKat	          4.4	       10.3%↓
                Oreo	        8.0, 8.1	    5.7%↑
                Jelly Bean	4.1.x, 4.2.x, 4.3.x	4.3%↓
                Ice Cream Sandwich	4.0.3, 4.0.4	0.4%↓
                Gingerbread	2.3.3 to 2.3.7    	0.3%↓
            3.hybrid参考框架 <a href="https://github.com/quickhybrid/quickhybrid" target="_blank">去查看</a>  <a href="https://dailc.github.io/2017/12/24/quickhybrid_native2h5interaction.html">h5和原生交互</a>
            4.ios10+占有97%,其中ios11+ 89%
            5.小程序
              I.由于框架并非运行在浏览器中，所以 JavaScript 在 web 中一些能力都无法使用，如 document，window 等。
              II.开发者写的所有代码最终将会打包成一份 JavaScript，并在小程序启动的时候运行，直到小程序销毁。类似 ServiceWorker，所以逻辑层也称之为 App Service。
              III.逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈
              VI.小程序的视图层目前使用 WebView 作为渲染载体， 而逻辑层是由独立的 JavascriptCore 作为运行环境。
              在架构上，WebView 和 JavascriptCore 都是独立的模块，并不具备数据直接共享的通道。当前，视图层和逻辑层的数据传输，实际上通过两边提供的 evaluateJavascript 所实现。即用户传输的数据，需要将其转换为字符串形式传递，同时把转换后的数据内容拼接成一份 JS 脚本，再通过执行 JS 脚本的形式传递到两边独立环境。
              而 evaluateJavascript 的执行会受很多方面的影响，数据到达视图层并不是实时的。

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
