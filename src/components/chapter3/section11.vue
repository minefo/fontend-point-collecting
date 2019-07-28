<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">选择符API</h1><div class="segment-content">
          1.querySelector()和querySelectorAll()
             ie8+ document调用表示整个文档，元素调用就是基于当前元素的子孙节点
             querySelectorAll()返回的nodeList是一份快照
             var nodeList=document.querySelectorAll("div")
             document.body.removeChild(nodeList[0])
             document.body.removeChild(nodeList[1])
             document.body.removeChild(nodeList[2])
             console.log(nodeList[0].textContent)
             console.log(nodeList[1].textContent)
             console.log(nodeList[2].textContent)

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">元素遍历</h1><div class="segment-content">
            2.ie9+支持元素有如下属性
            childElementCount
            firstElementChild
            lastElementChild
            previousElementSibling
            nextElementSibling


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">HTML5</h1><div class="segment-content">
            3.ie9+ 支持的h5功能
            document.getElementsByClassName  //类顺序没关系
            4.ie10+ classList  classList是实时更新的
            add
            contains
            remove
            toggle
            5.ie9+ activeElement和 hasFocus()
            6.document.readyState // 三个值 laoding interactive(交互中) complete(完成) ie以及其他浏览器
            7.data-属性(属性里面不能用杠，属性有大写后,在dataset里面通通小写，ie11+)
            8.innerHTML 返回子孙所有元素，包括注释，ie9+所有浏览器都一样，原样返回，ie8- 标签会转换成大写 script不能用，link标签随便用
            没有innerHTML标签 html  head  style
            table colgroup col  tbody thead tfoot tr (也就是表格只有th td有)
            script标签可以用innerHTML,只会填充内容，不会执行代码
            9.outerHTML和innerHTML 只不过包括调用自身
            10.insertAdjacentHTML ie以及其他浏览器
            beforebegin 元素外面之前
            afterend    元素外面之后
            afterbegin  元素里面开始之后
            beforeend   元素里面结束之前
            10.元素调用scrollIntoView() //覆盖是在框架里面，会控制框架来滚动,前提是窗口与滚动条
            //dom.scrollIntoView(true);//元素顶部与窗口顶部对齐，默认true ie8+
            //dom.scrollIntoView(false);//元素底部与窗口底部对齐 ie8+
            dom.scrollIntoView({behavior: "", block: "", inline: ""}); //ie不支持，部分浏览器支持
            //behavior 动画
            //block 垂直方向
            //inline 水平方向
            11.children只包含元素节点，不包含文本节点，childNodes包含所有类型的节点 ie以及所有浏览器
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">专有扩展</h1><div class="segment-content">
            1.compareDocumentPosition 记得 & 参考值 ie9+
            var dom=document.getElementById("test")
            var child=dom.children[0]
            console.log(dom.compareDocumentPosition(child) & 16)
            2.innerText和outerText ie以及所有浏览器
            3.scrollIntoViewIfNeeded() 默认是true 居中，safari,chrome支持

        </div></div>


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
