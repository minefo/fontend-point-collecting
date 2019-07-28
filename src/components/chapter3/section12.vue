<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">DOM变化</h1><div class="segment-content">
            1.测试浏览器支持情况
            console.log(document.implementation.hasFeature("Core","2.0"))
            console.log(document.implementation.hasFeature("Core","3.0"))
            console.log(document.implementation.hasFeature("HTML","2.0"))
            console.log(document.implementation.hasFeature("Views","2.0"))
            console.log(document.implementation.hasFeature("XML","2.0"))
            2.操作框架里面的内容
             window.frames[0].document.getElementById("test").innerHTML="这里是内容"
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">样式</h1><div class="segment-content">
          1.删除style中的属性 ie9+
            var myDiv=document.getElementById("test")
            do{
              myDiv.style.removeProperty(myDiv.style[0])
            }
            while(myDiv.style[0])
          2.获取属性的值 ie9+
            var myDiv=document.getElementById("test")
            console.log(myDiv.style.getPropertyValue(myDiv.style[0]))
          3.获取important getPropertyPriority() ie9+ css从ie7+
          4.获取计算属性 ie9+ 这个方法在window对象上 ,返回的属性是只读的
            getComputedStyle
          5. document.styleSheets 放回页面上所有link 和style样式表 ie9+
             console.log(document.styleSheets[0].cssRules) //显示当前sheet所有规则
             console.log(document.styleSheets[0].deleteRule(0)) //删除规则,传入规则顺序
            console.log(document.styleSheets[0].insertRule(`div {
            font-size:100px
            }`,0))
            console.log(document.styleSheets[0].cssRules[0].cssText) //插入规则
          6.获取stylesheet ie9+
            var  myStyle=document.getElementById("myStyle")
            console.log(myStyle.sheet)
          7.CSSRule
            常用的属性是cssText,selectorText和style
          8.元素大小 ie9+行为表现一致
            var sub=document.getElementById("sub")
            console.log("offsetHeight:",sub.offsetHeight) //包括元素的边框大小，不包括外边距,滚动条占据的尺寸是挤占width的尺寸,大小为17px
            console.log("offsetWidth:",sub.offsetWidth) //包括元素的边框大小，不包括外边距,
            console.log("offsetLeft:",sub.offsetLeft) //相对于基准位置，左边与左边的距离,基准对象是offsetParent
            console.log("offsetTop:",sub.offsetTop) //相对于基准位置，顶边与顶边的距离,基准对象是offsetParent
            console.log(sub.offsetParent.tagName) //所有元素基准，默认都是相对于body ie以及其他浏览器
            console.log(document.documentElement.tagName) //HTML ie以及其他浏览器

          9.客户区大小 ie以及其他浏览器
            var sub=document.getElementById("sub")
            console.log("clientWidth:",sub.clientWidth)
            console.log("clientHeight:",sub.clientHeight)
            //clientWidth和clientHeight 不包括边框和滚动条占据的大小 ie9+
          10.滚动大小
            //document.documentElement.scrollHeight //ie8+和其他浏览器包括html的边框和外边距，但是safari例外,safari只从内边距开始算
            //document.元素.scrollHeight // ie8+只从内边距开始算,因为滚动挤占的是width和height的大小，所以滚动的大小算在width和height
            document.scrollTop用法如下
            var sub=document.getElementById("sub")
            //console.log(sub.scrollHeight)
            console.log(sub.parentNode.scrollHeight)//2620
            //滚到底部 sub.parentNode.scrollTop 为2137
            //2620-283(height,滚动挤占了17像素)-200(padding)
          11.元素位置
           <img :src="rect"/>
            setInterval(function(){
            var sub=document.getElementById("sub")
            var rect=sub.getBoundingClientRect()
                var obj={
                top:rect.top,
                left:rect.left,
                bottom:rect.bottom,
                right:rect.right,
                width:rect.width,
                height:rect.height
                }
            console.log(JSON.stringify(obj))
            },3000)
            //getBoundingClientRect在ie9+下表现都一致，都是对于window视口
            //top,是上边框为止,left,左边框为止，bottom下边框为止,包括边框的大小，right边框为止，包括边框大小,width要加上border+padding
            //height要加上border+padding
            //有滚动条的情况下，就看滚动之后当前元素的位置
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">遍历</h1><div class="segment-content">
            1.createNodeIterator //ie9+
            var filter=function(node){
                return node.tagName.toLowerCase()=="p"?
                NodeFilter.FILTER_ACCEPT:
                NodeFilter.FILTER_SKIP;
            }
            var iterator=document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,filter,false) //最后一个都是false

            var dom=iterator.nextNode()
            while(dom){
            console.log(dom.textContent)
            dom=iterator.nextNode()
            }
            while(dom){
            console.log(dom.textContent)
            dom=iterator.previousNode()
            }
            //p1  p2 p3
            //p3  p2  p1
            2.createTreeWalker ie9+
            var dom=document.getElementById("dom")
            var filter=function(node){
            return node.tagName.toLowerCase()=="p"?
            NodeFilter.FILTER_ACCEPT:
            NodeFilter.FILTER_SKIP;
            }
            var iterator=document.createTreeWalker(dom,NodeFilter.SHOW_ELEMENT,filter,false)
            console.log(iterator.firstChild())
            有用的有如下的方法:
            //firstChild()
            //lastChild()
            //nextSibling()
            //previosSibling()

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">范围</h1><div class="segment-content">
            1.range ie9+
            //可以选择文本，删除文本，环挠文本,折叠文本,偏移指的是文本数,range.collapsed可以判断两个节点是否靠拢
            var range1=document.createRange();
            var helloNode=p1.firstChild.firstChild;
            var worldNode=p1.lastChild;
            range1.setStart(helloNode,2);
            range1.setEnd(worldNode,3);
            setTimeout(function(){
             var txt=range1.extractContents();
             console.log("txt:"+txt)
            },3000)
            Offset释义如下:
            If the endNode is a Node of type Text, Comment, or CDATASection, then endOffset
            is the number of characters from the start of endNode.
            For other Node types, endOffset is the number of child nodes between the start of the endNode.
            //范围可以比较边界

        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                rect:require("../../images/rect.png"),
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
