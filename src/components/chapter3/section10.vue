<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">节点层次</h1><div class="segment-content">
            Node类型：
            //常用的节点类型,总共有6个
            //文档节点是指document,它的子节点是指html，html也叫文档元素
            "DOCUMENT_FRAGMENT_NODE": 11, //document.createDocumentFragment();
            "DOCUMENT_NODE": 9, //就是document
            "ELEMENT_NODE": 1, //元素节点 document.createElement("div")
            "COMMENT_NODE": 8, //document.createComment("注释内容")
            "ATTRIBUTE_NODE": 2,//属性节点 document.createAtrribute("align")
            "TEXT_NODE": 3,//文本节点 document.createTextNode("文本内容")

            "DOCUMENT_TYPE_NODE": 10,
            "CDATA_SECTION_NODE": 4, // 只在xml文档出现
            "ENTITY_REFERENCE_NODE": 5,
            "ENTITY_NODE": 6,
            "PROCESSING_INSTRUCTION_NODE": 7,
            "NOTATION_NODE": 12,

            Node常用属性
            childNodes //包含注释节点，文字节点，元素节点
            parentNode //直接父节点
            previousSibling 同辈临近上一个节点
            nextSibling 同辈临近上一个节点
            firstChild 第一个子节点
            lastChild  最后一个子节点
            <span class="red">
             总结如下document 没有nodeValue 和textContent
             fragment['fræɡmənt]和元素节点没有nodeValue
             注释、属性和文本节点都有nodeName nodeValue  textContent
             </span>

            Node.baseURI //完整url,ie没有
            Node.childNodes
            Node.firstChild
            Node.isConnected //是否在dom树中
            Node.lastChild
            Node.nextSibling
            Node.nodeName
            Node.nodeType
            Node.nodeValue
            Node.ownerDocument
            Node.parentNode
            Node.parentElement //如果父元素不是元素节点(nodeType为1)就返回null
            Node.previousSibling
            Node.textContent

 <textarea class="complex-code">
var text=document.createTextNode("这里是文字")
var frag=document.createDocumentFragment()
frag.appendChild(text)
console.log("frag.nodeName",frag.nodeName)
console.log("frag.nodeValue",frag.nodeValue)
console.log("frag.textContent",frag.textContent)

console.log("document.nodeName",document.nodeName)
console.log("document.nodeValue",document.nodeValue)
console.log("document.textContent",document.textContent)

var comment=document.createComment("这里是注释文字")
console.log("comment.nodeName",comment.nodeName)
console.log("comment.nodeValue",comment.nodeValue)
console.log("comment.textContent",comment.textContent)

var newDiv=document.createElement("div");
newDiv.appendChild(text)
console.log("newDiv.nodeName",newDiv.nodeName)
console.log("newDiv.nodeValue",newDiv.nodeValue)
console.log("newDiv.textContent",newDiv.textContent)

var newAttr=document.createAttribute("align")
newAttr.value="center"
console.log("newAttr.nodeName",newAttr.nodeName)
console.log("newAttr.nodeValue",newAttr.nodeValue)
console.log("newAttr.textContent",newAttr.textContent)

console.log("text.nodeName",text.nodeName)
console.log("text.nodeValue",text.nodeValue)
console.log("text.textContent",text.textContent)

//document.nodeName #document
//document.nodeValue null
//document.textContent null
//
//
//frag.nodeName #document-fragment
//frag.nodeValue null
//frag.textContent 这里是文字
//
//newDiv.nodeName DIV
//newDiv.nodeValue null
//newDiv.textContent 这里是文字
//
//comment.nodeName #comment
//comment.nodeValue 这里是注释文字
//comment.textContent 这里是注释文字
//
//newAttr.nodeName align
//newAttr.nodeValue center
//newAttr.textContent center
//
//text.nodeName #text
//text.nodeValue 这里是文字
//text.textContent 这里是文字
 </textarea>

            Node常用方法
            hasChildNodes() //返回布尔值
            appendChild() //在childNodes末尾添加一个节点,返回新增的节点
            removeChild() //var returnNode=parentNode.removeChild(child)  parentNode是父节点,child是子节点 returnNode===child
            insertBefore()
           //备注，基本所有方法，新节点都在第一个参数位置

            Node.appendChild()
            Node.cloneNode() //true 深拷贝，false浅拷贝
            Node.compareDocumentPosition()
            返回值如下：
      	    1	不在同一文档中
          	2	otherNode在node之前
           	4	otherNode在node之后
          	8	otherNode包含node
           	16	otherNode被node包含
            32	待定
            Node.contains()
            Node.getRootNode()
            Node.hasChildNodes()
            Node.insertBefore()
            使用方法:
            parentElement.insertBefore(newElement, referenceElement)
            //其中 parentElement 父节点  newElement 新节点  referenceElement dom中的节点
            Node.isDefaultNamespace()
            Node.isEqualNode() //表示两个元素值相同就行，不需要是同一个对象
            Node.lookupPrefix()
            Node.lookupNamespaceURI()
            Node.normalize() // 'nɔrməlaɪz  相邻文本节点合并成一个,不在空文本节点，空指连制表符都没有
            Node.removeChild() //var returnNode=parentNode.removeChild(child)  parentNode是父节点,child是子节点 returnNode===child
            Node.replaceChild()//var returnNode=parentNode.replaceChild(newChild, oldChild)  returnNode===oldChild

            //document有4个非标准 title、URL、domain、referrer
            document.title="这里是改变的值"
            console.log("document.title:"+document.title)
            console.log("document.URL:"+document.URL)
            console.log("document.domain:"+document.domain)
            console.log("document.referrer:"+document.referrer)
            //document.title:这里是改变的值
            //document.URL:http://127.0.0.1:8020/subject/dom.html  等于location.href
            //document.domain:127.0.0.1
            //document.domain="wrox.com" //松散的（成功）
            //document.domain="p2p.wrox.com" //紧绷的（出错）
            //使用domain解决框架跨域通信，有个条件，只能把当前document.domain设置为顶级域名
            //document.referrer:https://www.baidu.com/   必须是从页面过来才有，比如href,window.open

            //服务配置跨域
            // Access-Control-Allow-Origin


            document.getElementById //返回node类型
            document.getElementByTagName //返回HTMLCollection, 不是node类型,里面的项是node类型

            //其他属性
            console.log("document.anchors:"+document.anchors.length) //注意做锚点只要把href赋值为#+id 就行
            console.log("document.forms:"+document.forms)
            console.log("document.images:"+document.images)
            console.log("document.links:"+document.links.length)  //href="#top" href="#" 返回顶部
            document.write //如果在onload中调用，会先清空文档内容，其他情况按位置插入

            //元素标签
            1.node.tagName===node.nodeName  //始终返回大写
            2.html 标准特性  id   title className
            <img :src="elementType"/>
            //getAttribute() //ˈætrəˌbjut
            //setAtrribute()
            //removeAttribute()
            var dom=document.getElementById("content")
            var title=dom.getAttribute("title")
            dom.setAttribute("class","myTest")
            var myAttr=dom.getAttribute("myattr")
            console.log("title:"+title)
            console.log("myAttr:"+myAttr)
            console.log("class:"+dom.getAttribute("class"))
            //class在使用这个三个方法操作时候，就用class
            // onclick 元素属性返回函数引用是函数，元素特性返回特性里面的值是字符串
            attributes //包含所有属性(包括自定义属性)节点,它有如下四个方法
            getNamedItem()
            removeNamedItem()
            setNamedItem()
            item()

            //文本节点几个方法,都是count(个数)
            //appendData
            //deleteData  count
            //insertData //当前插入，当前内容往后移
            //replaceData count
            //substringData  count 提取内容，文本的节点内容不改变

            跨域情况和9种解决办法
            https://juejin.im/post/5d1ecb96f265da1b6d404433

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">DOM操作技术</h1><div class="segment-content">
            1.动态加载js代码块
            //var script=document.createElement("script")
            //script.type="text/javascript"
            //var code=document.createTextNode("console.log('代码生效了')")
            //script.appendChild(code) //注意要ie9+ ,同理style一样
            //document.body.appendChild(script)
            2.对表格操作 备注：默认是最后一个tbody,有参数的话都是pos
            var table=document.createElement("table")
            table.createTHead()
            table.createTFoot()
            var tbody1=document.createElement("tbody")
            table.appendChild(tbody1)
            table.insertRow(0)
            table.rows[0].insertCell(0)
            table.rows[0].cells[0].appendChild(document.createTextNode("第一行第一列"))
            table.rows[0].insertCell(1)
            table.rows[0].cells[1].appendChild(document.createTextNode("第一行第二列"))
            table.insertRow(1)
            table.rows[1].insertCell(0)
            table.rows[1].cells[0].appendChild(document.createTextNode("第二行第一列"))
            table.rows[1].insertCell(1)
            table.rows[1].cells[1].appendChild(document.createTextNode("第二行第二列"))
            document.body.appendChild(table)
        </div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                elementType:require("../../images/element-type.jpg"),
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
