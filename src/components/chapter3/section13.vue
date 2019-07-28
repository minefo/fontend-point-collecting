<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">事件流</h1><div class="segment-content">
            <img :src="eventFlow"/>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">事件处理程序</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">事件对象</h1><div class="segment-content">
           event对象:
            <img :src="event1" />
            <img :src="event2" />
            1.event.preventDefault() 表示阻止浏览器默认行为,事件继续冒泡
            2.event.stopPropagation 捕获和冒泡都可以阻止

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">事件类型</h1><div class="segment-content">
            1.UI事件
             load(当页面完全加载后（包括所有图像，js文件，css文件）) unload(页面刷新) abort(object资源) error select(输入框的文本选择)  resize scroll
             图片load既是img没有添加文档中，也照样下载图片,并且下载完成后，触发load事件,但是script标签只有添加到dom文档中，开始下载资源,类似的还有link
             scroll事件元素和window都有 ie9+
            2.焦点事件
             blur不会冒泡
             focus 不会冒泡
             focusin 会冒泡
             focuesout 会冒泡
            3.鼠标事件 除了click都不能用键盘触发，并且click用键盘情况只有表单按钮类型 submit reset button,如果button,submit在表单里面，表单有焦点，那么谁在前，就触发谁
             click
             dblclick
             mousedown
             mouseenter //不冒泡,
             mouseleave //不冒泡
             mousemove
             mouseout
             mouseover
             mouseup
             //双击触发顺序
             //mousedown mouseup click mousedown mouseup click dblclick
             //鼠标点击位置clientX,clientY <span class="red">是相对于视口的位置</span>
            //鼠标跟随功能
            var sub=document.querySelector(".sub")
            document.body.addEventListener("click",function(){
            sub.style.top=(document.documentElement.scrollTop+event.clientY)+"px"
            sub.style.left=(document.documentElement.scrollLeft+event.clientX)+"px"
            },false)
            //鼠标跟随2 ie11+
            var sub=document.querySelector(".sub")
            document.body.addEventListener("click",function(){
             sub.style.top=event.pageY+"px"
             sub.style.left=event.pageX+"px"
            },false)
            //修改键 返回true或者false ie9+
            shiftKey
            ctrlKey
            altKey
            metaKey
            4.相关元素只有mouseout和mouseover,通过事件对象relatedTarget ie9+,先out再over,记得事件会冒泡,冒泡后，relatedTarget就是冒泡元素的relatedTarget
            5.mousedown和mouseup 通过event.button判断按下左键(0)、滚轮单击(1)和 右键(2)
            6.记录当前位置单击次数 event.detail,移动后重新从0开始
            7.在元素上滚动不触发浏览器滚动 ie和firefox无效
            var sub=document.querySelector(".sub")
            var button=document.querySelector("#button")
            sub.addEventListener("mousewheel",function(event){
            if(event.wheelDelta===120 && sub.scrollTop===0){
                event.preventDefault()
                event.stopPropagation()
                console.log("执行了")
            }
            if(event.wheelDelta===-120 && sub.scrollTop===717){
                event.preventDefault()
                event.stopPropagation()
                console.log("执行了")
            }
            console.log("sub.scrollTop:"+sub.scrollTop)
            },false)
            8.tabindex作用，默认只有表单元素才可以通过tabIndex切换,如果要让非表单元素聚焦，需要设置tabindex的值，如果想只有通过focus方法聚焦，就可以设置元素tabindex为-1
            9.ime是指手机非直接输入的，比如需要选择 ie9+以及其他浏览器，ie9+只有compositionend中data有值
              compositionstart 表示当前选中需要替换的值
              compositionupdate 表示当前连续输入的字符
              compositionend  表示最终选择的值
            10.变动事件
                webkit系列
                DOMSubtreeModified 都会触发
                DOMNodeInserted
                DOMNodeRemoved
                DOMAttrModified (新增属性时)
                DOMCharacterDataModified(文本节点修改时)

                gecko系列
                DOMSubtreeModified
                DOMNodeInserted
                DOMNodeRemoved
                DOMAttrModified
                DOMCharacterDataModified

                ie9+
                DOMSubtreeModified
                DOMNodeInserted
                DOMNodeRemoved
                DOMAttrModified
                DOMCharacterDataModified
            11.HTML5事件
               1.contextmenu 右键 ie9+以及其他浏览器,可以用event.preventDefault()
               2.DOMContentLoaded ie9+支持,只要dom树形成就触发，可以参考一下事件轮循(event loop)  <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop" target="_blank">事件轮循</a>
               3.hashchange ie9+ 但是ie没有oldURL和newURL
               4.orientationchange ios支持 0 竖着 90 home键在右侧，-90 home键在左侧
                window.addEventListener("orientationchange",function(event){
                console.log(window.orientation)
                },false)
               5.deviceorientation ios支持
                 <img :src="deviceorientation" />
               6.devicemotion ios支持，加速度
               7.touchstart、touchmove、touchend事件中的touches、targetTouches好changeTouches区别
                  touches，屏幕上放了多少手指,touches值不会很精确，和触发元素也有关系
                  targetTouches 事件绑定元素上放了哪些手指，也不精确
                  changeTouches  那个手指在动 这个精确
                  II.手机上时html和body不触发鼠标事件，在元素上绑定监听鼠标事件后，事件触发顺序 首先是touch事件，然后鼠标事件
                     touchstart
                     touchmove
                     touchend
                     mouseover
                     mousemove
                     mousedown
                     mouseup
                     click
            8.gesturestart,gesturechange,gestureend事件 ios支持,有如下两个属性
               I.rotation  顺时针正值,逆时针负值
               II.scale    手指间距拉大，值变大，手指间距变小，值变小

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">内存和性能</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">模拟事件</h1><div class="segment-content">
            1.模拟鼠标事件用法 ie9+以及其他浏览器
              例子1对于页面
            <textarea class="complex-code">
            var dragTaget=null;
            var posTop=0;
            var posLeft=0;

	      	document.addEventListener("mousemove",function(event){
	      		    if(dragTaget){
	      		      dragTaget.style.top=(event.pageY-posTop)+"px"
	      		 	  dragTaget.style.left=(event.pageX-posLeft)+"px"
	      		    }
	      	},false)
	      	document.addEventListener("mouseup",function(event){
	      		 dragTaget=null;
				 console.log("mouseup")
			},false)

	      	var myBtn=document.getElementById("myBtn")
	      	myBtn.addEventListener("mousedown",function(event){
	      		 dragTaget=event.target
	      		 posTop=event.pageY-dragTaget.offsetTop;
	      		 posLeft=event.pageX-dragTaget.offsetLeft;
				 console.log("mousedown")
			},false)
            </textarea>
              例子2相对于视口：
              <textarea class="complex-code">
                  var dragTaget=null;
	      	var posTop=0;
	      	var posLeft=0;

	      	document.addEventListener("mousemove",function(event){
	      		    if(dragTaget){
	      		      dragTaget.style.top=(event.clientY-posTop)+"px"
	      		 	  dragTaget.style.left=(event.clientX-posLeft)+"px"
	      		    }
	      	},false)
	      	document.addEventListener("mouseup",function(event){
	      		 dragTaget=null;
				 console.log("mouseup")
			},false)

	      	var myBtn=document.getElementById("myBtn")
	      	myBtn.addEventListener("mousedown",function(event){
	      		 dragTaget=event.target
	      		 posTop=event.clientY-dragTaget.offsetTop;
	      		 posLeft=event.clientX-dragTaget.offsetLeft;
				 console.log("mousedown")
			},false)

	      	var i=0;
	      	var j=0;

	      	var btn=document.getElementById("myBtn");
				var event=document.createEvent("MouseEvents");
				event.initMouseEvent("mousedown",true,true,document.defaultView,0,0,i,j,0,false,false,false,false,0,null);
				btn.dispatchEvent(event);

	      	setInterval(function(){
	      		i++;
	      		j++;
	      		var btn=document.getElementById("myBtn");
				var event=document.createEvent("MouseEvents");
				event.initMouseEvent("mousemove",true,true,document.defaultView,0,0,0,i,j,false,false,false,false,0,null);
				btn.dispatchEvent(event);
	      	},200)
              </textarea>
            2.代码能触发的事件
               I. blur() //普通元素记得是设置tabindex
               II.click()
               III.focus() //普通元素记得是设置tabindex
            3.键盘模拟事件，虽然会触发键盘事件，但是并不会插入值
            4.自定义事件
            //注意initCustomEvent只有4个参数 ie9+
            document.addEventListener("myevent",function(event){
            console.log("myevent",event.detail.name)
            },false)

            setTimeout(function(){
            var event=document.createEvent("CustomEvent");
            event.initCustomEvent("myevent",true,true,{"name":"哈哈"})
            document.getElementById("myBtn").dispatchEvent(event)
            },1000)

        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.如果点击了子元素，子元素的事件先触发，然后再触发父元素.事件冒泡可以冒泡到window对象上 	e.stopPropagation() [,prɑpə'geʃən]可以阻止冒泡 ie9+及其他浏览器
            2.target  currentTarget [kɝ​ənt]['tɑrɡɪt] target是被点击的元素，currentTarget是当前被触发的元素，当前点击元素target和currentTarget是同一元素
            3.事件只能绑定元素节点上
            4.onclick里面的内容类似eval中的代码字符串，只能是表示JavaScript表达式，语句或一系列语句的字符串。表达式(表达式表示会返回一个值)可以包含变量以及已存在对象的属性
            5.特性的值应该是能够执行的JavaScript代码
            6.常用的HTML实体 (都是用与字符开头)
            &quot;  "
            &apos;  '
            &amp;  &
            &lt; <
            &gt; >
            7.事件在执行的时候，有权访问全局作用域的代码
            8.this是一个调用对象， 在非严格模式下，任何函数调用this都是window
            9.关注元素绑定事件原理
            <p onclick="self.alert(event);"></p>
            function onclick(event) {
                with(document) {
                    with(this.form) {
                        with(this) {
                         self.alert(event);
                        }
                    }
                }
            }
            10.addEventListener和removeEventListener ie9+
            ancestor.addEventListener("click",function(){
              console.log("parent")
             },false) //false冒泡，true捕获阶段
            ancestor.removeEventListener("click",函数) //匿名处理函数没发移除
            11.事件都是小写
            12.页面刷新之前弹出一个提示框
            window.onbeforeunload = function() {
              return "";
            };
            13.注意event事件在firefox不自动传入,需要通过实参传入

            14.键盘事件，keydown,keypress keyup esc键在webkit内核上不触发keypress,keydown keypress都是按下，只不过是先触发keydown 然后触发keypress,在聚焦的元素上触发
               keypress中的keyCode 是具体的值,
               keydown和keyup的keyCode是键盘的键码
               只有keypress中才有charCode并且和keyCode相等
               要想获取编码的字符可以通过String静态方法 String.fromCharCode(event.charCode)
               textInput事件只有webkit内核系支持
               input事件输入框时ie9+支持,内容改变时才触发,select组件时，webkit系列支持
               change事件是text textarea 是失去光标 ,select内容改变

            15.对象select,radio,checkbox操作
               select如下：
                I.新增选项 selectObj.add(new Option('文本1','值1'));
                II.删除选项
                selectObj.options.remove(deleteIndex);
                III.设置选中项,selected有重复用最后一个
                var selectObj  = document.querySelector('.sub');
                for(var i = 2;i < selectObj.options.length;i++){
                selectObj.options[i].setAttribute('selected','selected');
                }
                console.log(selectObj.selectedIndex)
                //或者
                selectObj.selectedIndex=2;
                VI.获取select的值
                var selectObj  = document.querySelector('.sub');
                setInterval(function(){
                var selectValue = selectObj.value;
                var selectValue_2 = selectObj.options[selectObj.selectedIndex].value;
                var selectText = selectObj.options[selectObj.selectedIndex].text;
                console.log("selectValue:",selectValue,"selectValue_2:",selectValue_2,"selectText:",selectText)
                },3000)
               radio和checkbox都是要通过循环检查checked来获取选中的值
               radio的name值是以form分割的，同一组name，checked只有一个是true,最后为先,getAttribute范围特性值，有就有，没有就没有






        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                eventFlow:require("../../images/event-flow.png"),
                event1:require("../../images/event1.png"),
                event2:require("../../images/event2.png"),
                deviceorientation:require("../../images/deviceorientation.jpg")
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
