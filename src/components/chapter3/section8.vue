<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">window对象</h1><div class="segment-content">
            1.全局作用域
               所有在全局声明的变量和函数都是window对象属性和方法,只是直接通过window.property定义的属性中的描述符[[Configurable]][kən'fɪgjərəbl]
            窗口关系及框架
             I.window.top等于浏览器窗口
             II.在window.frames类数组中的每一项都代表了窗口对应给定对象的iframe的内容，而不是iframe DOM元素,so,获取第三级窗口变量
                window.frames[0].frames[0].frames[0].myName
            窗口位置
            //ie9+ 及其他浏览器
            //浏览器窗口和屏幕的距离
            //在最大化情况下，谷歌和opera返回0,ie、firefox、safari放回-8
            var leftPos=window.screenX;
            var topPos=window.screenY;
            moveTo(x,y)//移动到x和y ie、opera、safari有效,谷歌和火狐无效
            moveBy(x,y)//位置改变x和y 只有safari和ie有效
            窗口大小
            //如果全屏浏览器那么outer和inner大小是一样
            var oh=window.outerHeight;//浏览器窗口大小 手机端没有值
            var ow=window.outerWidth;//浏览器窗口大小  手机端没有值
            var ih=window.innerHeight;//浏览器窗口大小减去工具栏,同时inner也是手机浏览器可见区域大小，如果放大，大小会变小
            var iw=window.innerWidth;//浏览器窗口大小减去工具栏
            //如果加了下面代码inner和client默认大小一致,前提是页面不出滚动条
            <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"/>

            var cw=document.documentElement.clientWidth;//pc端等于inner减去滚动条,手机端等于逻辑分辨率,不随着放大和缩小而改变
            var ch=document.documentElement.clientHeight;
            document.writeln("oh:",oh)
            document.writeln("ow:",ow)
            document.writeln("ih:",ih)
            document.writeln("iw:",iw)

            resizeTo(x,y)//窗口移动到x和y 只有safari和ie有效
            resizeBy(x,y)//窗口大小改变x和y 只有safari和ie有效
            浏览器窗口循环移动
            <textarea class="complex-code">var x=0;
			var y=0;
			var outerWidthA=window.outerWidth;
			var outerHeightA=window.outerHeight;
			var widthA=window.screen.width;
			var heightA=window.screen.height;
			var bl=false;

			setInterval(function(){

				window.resizeTo(200,200)
				if(heightA-200>=y && !bl){
					y=y+20
					window.moveTo(x, y)
				}
				else if((widthA-200)>=x && !bl){
					x=x+10;
					window.moveTo(x, y)
				}
				else{
					bl=true;
				}
				if(y>=0 && bl){
					y=y-20
					window.moveTo(x, y)
				}
				else if(x>=0 && bl){
					x=x-10;
					window.moveTo(x, y)
				}
				else {
					bl=false;
				}
				console.log("x:",x)
				console.log("y:",y)
			},0)</textarea>
            导航和打开窗口
            target 名字相同，会在同一个窗口或者框架打开，同一个窗口ie需要同一个域名才行
            //safari没有window.open
            window.open("http://www.baidu.com/","myName","height=400,width=400,top=10,left=10,resizable=yes")
            窗口参数:
            <img :src="windowOpenParam"/>
            window.opener就是原窗口的window
            间歇调用和超时调用
            推荐用如下代码模拟间歇调用
            var num = 0;
            var max = 0;
            function incrementNumber(){
            num++;
            if(num < max){
            setTimeout(incrementNumber,500);
            } else {
            alert("Done");
            }
            }
            setTimeout(incrementNumber,500)

            系统对话框
            prompt[prɑmpt]用法
            var result=prompt("What is your name?","default value");
            if(result !==null){
            alert("Welcom," +result)
            }
            window.print();//各个浏览器都支持
            window.find();// 只有火狐支持
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">location对象</h1><div class="segment-content">
            属性如下:
            <img :src="locationParam"/>
            console.log("hash:"+location.hash)
            console.log("host:"+location.host) //是hostname加上端口
            console.log("hostname:"+location.hostname)
            console.log("href:"+location.href)
            console.log("pathname:"+location.pathname) //host和search中间部分
            console.log("port:"+location.port)
            console.log("protocol:"+location.protocol)
            console.log("search:"+location.search)
            //完全按照地址栏中的地址来，默认情况search在hash前面，但是vue路由例外
            //hash:#myhash
            //host:127.0.0.1:8020
            //hostname:127.0.0.1
            //href:http://127.0.0.1:8020/subject/bom.html?name=kenley&age=31#myhash
            //pathname:/subject/bom.html
            //port:8020
            //protocol:http:
            //search:?name=kenley&age=31
             //search参数转对象
             <textarea class="complex-code">
               function urlSearchParamConvertToObject(searchStr){
		     	if(searchStr){
		     		searchStr=searchStr.substring(1)
		     		var arr=searchStr?searchStr.split("&"):[]
		     		var obj={}
		     		var itemArr=[]
		     		var keyName;
		     		var keyValue;
		     		arr.forEach(function(item){
		     			itemArr=item.split("=")
		     			keyName=decodeURIComponent(itemArr[0])
		     			keyValue=decodeURIComponent(itemArr[1])
		     			if(keyName){
		     				obj[keyName]=keyValue
		     			}
		     		})
		     		return obj
		     	}
		     	return {}
		     }
             </textarea>
            location.hash值改变后，浏览器地址栏会推入新的地址，但是页面没有刷新，还是当前页面

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">navigator['nævɪɡetɚ]对象</h1><div class="segment-content">
            属性与方法
            <img :src="locationProperty"/>
            比较有用的
            cookieEnabled:true //只读属性
            language:zh-CN  //只读属性
            onLine:true //只读属性
            userAgent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 //只读属性
            vendor:Google Inc. //只读属性
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">screen对象</h1><div class="segment-content">
            //屏幕分辨率 1920*1080
            availHeight: 1040
            availWidth: 1920
            height: 1080
            width: 1920
            pixelDepth: 24  //每一个像素在计算机中所使用的这种位数就是“位深度”
            也就是和浏览器没有关系，和屏幕有关系
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">history对象</h1><div class="segment-content">
            var i=0;
            setInterval(function(){
            i++;
            if(i<=5){
            location.hash="myHash"+i;
            console.log(location.hash)
            }
            else{
            history.go(-7)
            console.log(history.length);
            }
            },1000)
            浏览器有空白页面的话，第一项就是空白页,相对于当前位置来前进和倒退,无效负值和无效正值页面不动
            history.back()//每次后退一步
            history.forward()//每次前进一步
            history.length===0 //第一个窗口
        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                windowOpenParam:require("../../images/window-open-param.png"),
                locationParam:require("../../images/location-param.png"),
                locationProperty:require("../../images/location-property.png")
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
