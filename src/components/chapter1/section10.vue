<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">字节跳动相关</h1><div class="segment-content">
            1、amd、cmd、CommonJS规范；
              I.CommonJS起步较早，NodeJs就是使用这个规范定义模块。CommonJs模块有自己的作用域。在里面定义的变量、函数、类，都是私有的，对其他模块不可见
                如果模块之间想要共享值，需要通过在global上定义属性实现(不过这个写法是被推荐的)
                每个模块里面都有module变量代表当前模块,module对象上有个exports属性，表示对外输出接口
                CommonJs模块只会加载一次(表示只在当前模块只加载一次)，如果需要重新加载只能清除后，再加载
                清除模块方法：
                console.log(require.resolve('./moduleB.js'));
                delete require.cache[require.resolve('./moduleB.js')];
                CommonJs是同步加载模块，只有加载模块成功后才会继续往下执行
                CommonJs不能直接用与浏览器端，需要借助第三方工具进行转换
               II.AMD就是异步加载模块 requireJs就是应用这个规范 (参考压缩包amd.rar)
                  异步加载模块，需要加载的时候，他再在服务器上加载资源，加载完成后执行，执行后模块的返回值传入回调函数里面,执行后的结果进行缓存了
               III.CMD seajs使用的规范
                   就是用的时候直接require一下,这样就有个问题，当然需要改模块依赖哪些模块的时候，需要先把模块做字符串去解析，找出依赖模块



            2、vue-router的原理； 参考资源 router.rar
                  I.路由有两种模式    默认 hash 模式
                    hash模式：  http://www.test.com/#/productPage?sourcesCode=shenzhi (hash模式) (ie9+)
                    history模式  http://www.test.com/productPage?sourcesCode=shenzhi (history模式) (ie10+)

                   II.history使用 注意:第一个参数和第三个参数一一对应起来
                    window.history.pushState({'name':"b"},"b","a.html");
                    window.history.replaceState({'name':"c"},"c","c.html");//replaceState和pushState一样，只是他再当前替换 history.length长度不会改变

                   III.hash使用
                       hash会产生历史记录，并且如果锚存在，会定位的锚,会触发hashchange事件
                    <textarea>
                        	function goA(){
                                window.location.hash="#a";
                            }
                            function goC(){
                                window.location.hash="#c";
                            }
                            window.onpopstate=function(event){
                                console.log("触发了onpopstate");
                            }
                            window.onhashchange=function(event){
                                console.log("window.location.hash:",window.location.hash);
                            }
                    </textarea>

            3、url构成；
               协议+域名+端口+地址+参数+hash值
              scheme:[//[host|IP][:port]][/path][?query][#fragment]

            4、解析一个url，包括hash值；
               var urlStr=location.href;
               var scheme=location.protocol;
               var hostname=location.hostname;
               var pathname=location.pathname;
               var query=location.search;
               var hash=location.hash;
               var port=location.port;


            5、==与===的区别； 参考链接 https://juejin.im/entry/584918612f301e005716add6
               I.=== 不会进行类型转换，两边的类型和值必须都相同
                1.两边类型相同不相同直接放回false
                2.两边类型相同且都是数值类型，NaN不等等NaN +_0等于+_0
                3.类型相同但是不是数值类型 那么根据一样值来处理SameValue
                  I.Undefined等于Undefined
                  II.Null等于Null
                  III.如果是字符串,两边字符串必须一样
                  III.布尔类型，要求两边要一样
                  VI.Symbol要求两边是同一个Symbol
                  V.引用类型，要求两个是同一个对象
               II.==会进行类型转换
                   1.两边类型相同就按照===规则来
                   2.两边类型不相同
                     I.null==undefined
                     II.是基本类型 Number，Boolean，string,组合，就都转换成数值在进行==操作
                     III.是基本类型 Number，Boolean，string,symbol和对象进行比较，就获取对象原始值在进行==操作
                     IV.其他情况就返回false
               III.NaN不和任何相等包括自己 NaN==NaN和NaN===NaN都返回false
               IV.string，number，boolean，null，undefined，symbol 基本类型(基本类型不会能改变，只会产生新的值)+再加对象类型

            6、cookie和session的区别；
                1.cookie是服务端和客户端都可以操作，每次请求都会带上cookie
                  I.没有设置的过期的时间cookie通常保存在内存中，设置过期的时间的cookie会保存本地磁盘中
                  II.cookie通过设置domain为一级域名，实现一级域名以及一级域名以下的域名之间可以互相访问彼此的cookie
                2.session是特殊的cookie
                  I.(this.Session.Contents).SessionID是asp.net获取sessionId
                  II.httponly表示cookies不能被js访问,通常sessionId就是这种类型cookie
                  III.而Session存储在服务器上,只有sessionId保存在客户端,过期时间不同，默认至于关闭浏览器或者很长时间没有请求服务器
                  III. Session.Clear() asp.net强制session失效
                  IV.session数据存储在服务器上会占用服务器资源(内存)
                  V.session不支持跨域

            7、cookie的有哪些安全的设置；
                 I.设置过期时间
                 II.对保存敏感数据进行加密
                 III.可以通过设置secure为true 可以保证cookie加密传送
                 VI.可以通过设置HttpOnly，从而使js不能访问这些cookie

            8、讲讲同源策略；
                I.同源是指 协议相同+域名相同+端口相同
                II.不在同源下
                1.不能互相访问彼此的cookie、LocalStorage 和 IndexDB
                2.不能互相访问彼此的DOM
                3.不能直接进行AJAX 请求
                  目的保证用户数据安全，防止恶意篡改,但是这些限制也造成一些业务不好实现,可以通过一些方式规避
                  1.实现跨域访问cookie,通过domain设置为一级域名，那么一级域名以下的域名可以互相访问彼此的cookie，这种方式仅限于cookie 和dom
                  2.对于完全不同源的网站
                     I.通过hash来往框架里面传入值
                     II.通过window.name获取值，利用的是只要窗口设置了window.name,既是窗口已经切换到其他地址，这个window.name之前设置的值依然在，这样当父页面和框架页面都切换到同一个域下面的页面是，就可以获取window.name了
                     III.h5新标准 postMessage
                         <textarea>
                              1.parent.html
                                function goA(){
                                    var win=document.getElementById("iframe1").contentWindow;
                                    win.postMessage("父页面","*");
                                 }
                                window.onmessage=function(data){
                                    console.log("父：",data.data);
                                }
                             2.sub.html
                              function test() {
                                  window.parent.window.postMessage("子页面","*");
                              }
                              window.onmessage = function (data) {
                                  console.log("子：", data.data);
                              }

                              //event.source：消息来源窗口(window对象)只能访问postMessage
                              //event.origin: 发送方窗口的 origin
                              //event.data: 消息内容
                         </textarea>
                    VI.ajax跨域请求
                       1.服务器代理(浏览器请求同源服务器，再由后者请求不同源服务)
                       2.JSONP实现原理(JSONP只支持GET请求)
                          <textarea>
                              function addScriptTag(src) {
                                  var script = document.createElement('script');
                                  script.setAttribute("type","text/javascript");
                                  script.src = src;
                                  document.body.appendChild(script);
                                }

                                window.onload = function () {
                                  addScriptTag('http://example.com/ip?callback=foo');
                                }

                                function foo(data) {
                                  console.log('Your public IP address is: ' + data.ip);
                                };
                          </textarea>
                       3.WebSocket不实行同源策略
                       4.CORS(跨域资源共享) CORS支持所有类型的HTTP请求 参考资料http://www.ruanyifeng.com/blog/2016/04/cors.html
                          I.CORS需要浏览器和服务器同时支持,IE浏览器IE10+支持
                          II.浏览器会在请求头中增加一个Origin字段,如果该源不在服务器白名单内，就不会返回Access-Control-Allow-Origin字段,其中Access-Control-Allow-Origin可以为*或者请求时的Origin字段值


            9、css盒模型；
                I.每个元素可以看成一个一个盒子，这个包含边框border 边框外面的部分margin 边框里面部分padding 然后就是显示内容区域content
                II.盒子与盒子直接的距离可以用margin控制，内容和边框的距离可以用padding控制
                III.盒模型的width和height表示内容区域，有时为了是width和height表示包括边框在内的大小，通过设置box-sizing:border-box
            10、box-sizing；
                I.盒模型的width和height表示内容区域，有时为了是width和height表示包括边框在内的大小，通过设置box-sizing:border-box
            11、编程题，写一个url解析函数，解析出查询参数。
               //例一
                function parseUrl(){
                   var query=location.search;
                   var paramObj={};
                   query=query.replace("?","");
                   var arr=query.split("&");
                   arr.forEach(function(singleItem){
                         var tempArr=singleItem.split("=");
                         paramObj[tempArr[0]]=tempArr[1];
                   })
                  return paramObj;
                }
               //例二

                function parseUrl(){
                    var query=location.search;
                    var paramObj={};
                    var regex = /[^&=?]+=[^&]*/g;
                    var res = query.match(regex);
                    res.forEach(function(singleItem){
                    var tempArr=singleItem.split("=");
                    paramObj[tempArr[0]]=tempArr[1];
                    })
                    return paramObj;
                }


            12、编程题，有一个versions是一个项目的版本号列表，因多人维护，不规则var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']要求从小到大排序，
            注意'1.45'比'1.5'大var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']。
             注意头是前
            var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3'];
            versions=versions.sort(function(a,b){
            var aArr=a.split(".");
            var bArr=b.split(".");
            for(var i=0;i<aArr.length;i++){
            var value1=Number(aArr[i]);
            var value2=bArr[i]||0;
            if(value2==value1){
            continue;
            }
            else if(value2>value1){
            return -1;
            }
            else if(value2<value1){
            return 1;
            }
            return 0;
            }
            })
            console.log(versions);

             <textarea>
                 //群友1提供的
              const versionSort = version => {
			  const temp = version.map(v => v.split('.'));
			  for (let i = 0; i < temp.length; i++) {
			    let minIndex = i;
			    for (let j = i+1; j < temp.length; j++) {//取当前数组后面的每一项
			      for (let k = 0; k < temp[j].length; k++) {//循环当前数组里面的项
			        const current = +temp[j][k],
			         min = +temp[minIndex][k];//当前最小的数组项
			        if (current < min) {//发现当前数组比最小的数组项小,就交换值
			            minIndex = j;
			        }
			        // 只要不等，就立刻结束最内层遍历！
			        if (current !== min) {
			          break
			        }
			      }
			    }
			    //交换值
			     [temp[i], temp[minIndex]] = [temp[minIndex], temp[i]];

			  }
			  return temp.map(v => v.join('.'));
			};
			const version1 = ['1.45.0', '1.5', '6', '3.3.3.3.3'];
			console.log(versionSort(version1));

             </textarea>


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">其他题</h1><div class="segment-content">
            1.能用你熟悉框架做一个这样的功能吗 参考文件 canvas.html
                I.做个柱状图（不引入图表相关的插件）
                II.写任意一个排序算法
                III.使用柱状图展示排序算法的过程
            2.你有哪些性能优化的方法 参考链接 https://user-gold-cdn.xitu.io/2018/2/28/161db9df64a2f3c1?imageslim  http://www.uyi2.com/questionDetail?id=42
               1.JS /样式资源会阻止页面绘制。可以供内联的JS / CSS,并推迟非关键的JS /样式加载
               2.对一些静态资源进行缓存
               3.通过第三方网站进行测试 比如Lighthouse，并且根据测试结果进行优化
               4.控制关键性文件大小，比如200kb以内
               5.渐进式增强网页效果，提供网页基础功能，针对有条件的用户开放增强功能
               6.有必要情况下可以通过service worker 进行缓存和预缓存资源 参考文件 sw-test.rar
                 1.respondWith 拦截浏览器所有请求
               7.可以通过把静态资源部署到cdn节点上
               8.可以对静态资源进行分类，分成核心类，功能类，其他资源类(大图片，web字体) 然后依次加载
               9.对网页中使用的图片进行优化
               10.通过懒加载来处理代价比较大资源(视频，字体,第三方js)
               11.可以告诉浏览器预加载一些资源(preload prefetch)
                   1.<link rel="dns-prefetch" href="//example.com"> //<!--在head标签中，越早越好-->
                   <!--2.<link rel="preload" href="/main.js" as="script"> //立即加载，加载后不执行里面的js,不阻塞页面，只有在遇到页面其他地方引用main.js时才去执行-->
               12.尽量使用http2.0
               13.有条件就使用ipv6
               第二答
                减少 HTTP 请求数
                减少 DNS 查询
                使用 CDN
                避免重定向
                图片懒加载
                减少 DOM 操作
                使用外部 JavaScript 和 CSS
                压缩 JavaScript 、 CSS 、字体、图片等
                使用 iconfont
                多域名分发内容
                尽量减少 iframe 使用
                避免图片 src 为空
                把脚本放在页面底部

            3.window.myName和var myName有什么区别,请试图解释一下下面的代码
                window.myName="aaa";
                var myName="ccc";
                console.log(window.myName);
                delete myName // false
                delete window.myName //false
                window.myTest=1;
                delete window.myTest //true
            4.有100个异步请求，怎么再他们都请求成功后，再执行一段逻辑
               <textarea>
                      var success=0;
                      var ajax1=$.ajax(url,function(){
                          add();
                      })
                      ......
                      var ajax100=$.ajax(url,function(){
                          add();
                      })
                      function add(){
                        success++;
                        if(success===100){
                            console.log("100请求都成功执行");
                        }
                      }
               </textarea>
            5.使用JavaScript代理实现简单的数据绑定,通过重写属性的get和set方法来实现数据监听
            <textarea> //ie9+支持
               var vueObj={
				name:"kenley",
                    sex:{
                        "a":"22"
                    }
                }
                function test(vueObj){
                     Object.keys(vueObj).forEach(function(key){
                            var val=vueObj[key]
                            if(typeof(val)==="object"){
                                test(val)
                            }
                            else{
                                //console.log(val)
                                Object.defineProperty(vueObj, key, {
                                  enumerable: true,
                                  configurable: true,
                                  get:function(){
                                                console.log("get")
                                                return val
                                  },
                                  set:function(value){
                                                console.log("更新了")
                                                val=value
                                  }
                                });
                            }
                    })
                }
                test(vueObj);
                vueObj.sex.a="333"
                console.log(vueObj.name)
            </textarea>

            <textarea> //通过proxy实现 ie目前不支持
                  const person = {
                      firstName: "Freddie",
                      lastName: "Mercury"
                    };

                    const handler = {
                          get: function(target, prop) {
                            return (
                              prop in target ? target[prop] : '对象上不存在该属性'
                            );
                          },
                          set: function(target, prop,value) {
                            console.log("value:",value);
                            target[prop] = value;
                          }
                    };

                    const proxyPerson = new Proxy(person, handler);
                    proxyPerson.newV="新的值";
                    console.log(proxyPerson.firstName) // Freddie
                    console.log(proxyPerson.lastName) // Mercury
                    console.log(proxyPerson.middleName) // Doesn`t exist
            </textarea>
            6.解释JavaScript并发模型 事件循环，任务队列，调用堆栈
              1.js是单线程的，如果要等待输入，会造成页面卡死,所以把哪些需要等待的任务(有回调函数的)，放入任务队列， 不需要等待的任务就进入执行栈执行,当执行栈执行完成后，就去任务队列里面找
              发现有个任务不需要等待了，就推入执行栈中执行,js不停的重复上面的动作
            7.为什么JavaScript是单线程
               I.单线程是用来解决同步问题

            8.requestAnimationFrame和setTimeout区别
               1.requestAnimationFrame表示下次重绘时,先执行，这样不会出现丢帧,更新能和浏览器的刷新频率保持一致,注意它不进任务队列

            9.请讲解下面的代码
            <textarea>
                   var startTime=Date.now();
                   var endTime=Date.now();
                   setTimeout(function(){
                     endTime=Date.now();
                     console.log("2000:",(endTime-startTime));
                   },2000);

                   setTimeout(function(){
                     endTime=Date.now();
                     console.log("1000",(endTime-startTime));
                   },1000);

                   while((endTime-startTime)<4000){
                     endTime=Date.now();
                   }
                   console.log(endTime-startTime);
                  //4000 1000 2000
            </textarea>

           10.什么是尾调用  es6规定只在严格模式下起作用
              I.函数的最后一步是调用另一个函数
              II.  所以执行到最后一步，完全可以删除 f() 的调用记录，只保留 g(3) 的调用记录
              <textarea>
                  function f() {
                      let m = 1;
                      let n = 2;
                      return g(m + n);
                    }
                    f();

                    // 等同于
                    function f() {
                      return g(3);
                    }
                    f();

                    // 等同于
                    g(3);
              </textarea>
            11.什么叫(柯里化) kē lǐ huà
              将多参数的函数转换成单参数的形式
            12.操作dom树时，怎么提供效率 参考资料 https://juejin.im/entry/58abfb1db123db0067256bb7  里面有讲解分析工具
               I.1.减少dom操作，不要频繁增删节点，可以一次性innerHTML
               II.最好控制隐藏和显示，不要频繁增删节点
               III.操作DOM前，先把DOM节点删除或隐藏，因为对隐藏和删除的节点不会影响页面重绘和重排
                    <textarea>
                        <!--<div id="container">-->
                            <!--<div id="content1">内容1</div>-->
                            <!--<div id="content2">内容2</div>-->
                        <!--</div>-->

                          var div1=document.getElementById("content1");
                          var deleteDiv=div1.parentNode.removeChild(div1);
                          deleteDiv.style.width="200px;"
                          deleteDiv.style.height="1000px;"
                          deleteDiv.style.border="1px solid red";
                          document.getElementById("container").insertBefore(deleteDiv,document.getElementById("content2"));
                          console.log(deleteDiv.innerText);
                    </textarea>
             IV.className赋值取代style赋值
            13.JavaScript中变量没有定义使用会报错not defined 并且默认会阻止js代码继续执行
            14.变量提升
               I.JavaScript 仅提升声明，而不提升初始化
            15.instanceof
               instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
            16.js继承
               I.通过原型继承
               II.通过call或者apply继承
            17.event.preventDefault()
               <textarea>
                    //<a href="http://www.baidu.com" id="goC">跳转</a>
                   	var dom=document.getElementById("goC");
                    dom.addEventListener("click",function(event){
                        event.preventDefault();
                    });
               </textarea>
            18.如何居中div？如何一个浮动元素？如何让绝对定位的div居中？
                vertical-middle只支持行内对齐，和单元格居中内容居中对齐
            19.flexbox布局  参考flex-demo.rar http://static.vgee.cn/static/index.html
                <textarea>
                    .parent {
                        width: 500px;
                        height: 600px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: green;
                    }
                    .sub {
                        width: 100px;
                        height: 100px;
                        background: red;
                    }
                </textarea>
            20.containing block 参考https://juejin.im/post/5b1271705188257d3f1aacf2
               I.containing block（包含块）就是最近的块元素的content area（内容区）
            21.BFC 参考资料 https://juejin.im/post/5909db2fda2f60005d2093db
               I.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
               II. 满足下列条件之一就可触发BFC
            　　【1】根元素，即HTML元素
            　　【2】float的值不为none
            　　【3】overflow的值不为visible
            　　【4】display的值为inline-block、table-cell、table-caption
            　　【5】position的值为absolute或fixed
              II.浮动元素不能覆盖到BFC上面
           22.Ajax的优缺点及工作原理
              1.减轻服务器的负担,按需取数据
              2.提供用户体验，不需要阻塞浏览器
              缺点:
              1.没有历史记录
              2.不利于seo
            23.Storage与Cookie相比存在的优势
              1.容量大
              2.存储的内容不会自动发送到服务器
              3.操作更方便
            24.浏览器是如何渲染页面的
              1.解析HTML文件，创建DOM树
              2.自上而下，遇到外部样式就去请求，遇到外部脚本就会默认情况会阻塞，直到js加载和解析并执行完成才会继续
              3.将CSS与DOM合并，构建渲染树（Render Tree）
              4.执行渲染
            25.MVVM
               采用双向绑定,实现双向绑定的关键是DOMListeners和DataBindings
               参考资料 https://www.jianshu.com/p/fa1da798d109
               <textarea>
                   <!--<!DOCTYPE html>-->
                    <!--<html>-->
                    <!--<head>-->
                        <!--<title>MVVM</title>-->
                        <!--<script src="../vue.js"></script>-->
                    <!--</head>-->
                    <!--<body>-->
                        <!--<div id="box">-->
                            <!--&lt;!&ndash; MVVM 中的 V &ndash;&gt;-->
                            <!--{{name}}-->
                        <!--</div>-->
                    <!---->
                        <!--<script>-->
                            <!--// MVVM 中的VM-->
                            <!--var vm = new Vue({-->
                                <!--el : '#box',-->
                                <!--// MVVM 中的 M-->
                                <!--data : {-->
                                    <!--name : "我是谁"-->
                                <!--}-->
                            <!--})-->
                        <!--</script>-->
                    <!--</body>-->
                    <!--</html>-->
               </textarea>
            26.VUE生命周期
                 beforeCreate 还不能访问DOM
                 created   还不能访问DOM

                 beforeMount 还不能访问DOM
                 mounted 可以访问DOM,因为产生的DOM已经在页面上了

                 beforeUpdate  适合更新之前访问旧的DOM,后面就会替换
                 updated  DOM更新完了
                        不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：

                 activated  keep-alive 组件激活时调用
                 deactivated keep-alive组件被挂起

                 beforeDestroy 实例销毁之前调用
                 destroyed 实例销毁后调用
            27.vue-router有哪几种导航钩子
                1. 全局的钩子函数:定义在全局路由对象中
                2. 某个路由独享的钩子,可以在路由配置上直接定义beforeEnter钩子函数
                3. 组件内的钩子函数: 定义在组件的route选项中
            28.v-model 用于在表单控件或者组件上创建双向绑定
            20.RESTFUL架构 参考资料 https://www.ruanyifeng.com/blog/2011/09/restful.html
               I.RESTful架构是：
            　　（1）每一个URI代表一种资源
            　　（2）客户端和服务器之间，传递这种资源的某种表现层
            　　（3）客户端通过四个HTTP(get,post,put,delete)动词，对服务器端资源进行操作，实现"表现层状态转化"。
            21.自定义指令
                 I.为什么情况下使用指令 答：需要对普通 DOM 元素进行底层操作
               <textarea>
                   //全局注册指令
                   // 注册
                    Vue.directive('my-directive', {
                      bind: function () {}, //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
                      inserted: function () {},//被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
                      update: function () {}, //所在组件的 VNode 更新时调用
                      componentUpdated: function () {}, //指令所在组件的 VNode 及其子 VNode 全部更新后调用
                      unbind: function () {} //指令与元素解绑时调用
                    })

                    // 注册 (指令函数)
                    Vue.directive('my-directive', function () {
                      // 这里将会被 `bind` 和 `update` 调用
                    })

                    // getter，返回已注册的指令
                    var myDirective = Vue.directive('my-directive')

                   //局部注册指令，通过组件内的配置选项来配置
                    directives: {
                      focus: {
                        // 指令的定义
                        inserted: function (el) {
                          el.focus()
                        }
                      }
                    }
               </textarea>
            22.Vue的双向数据绑定原理是什么？
                1.通过数据劫持结合发布者-订阅者模式的方式
                2.通过对象Object.defineProperty定义各个属性的setter，getter
            23.插槽使用
                1.
                <textarea>
                    //引用组件
                    <!--<base-layout>-->
                      <!--<template v-slot:header>-->
                        <!--<h1>Here might be a page title</h1>-->
                      <!--</template>-->
                    <!---->
                      <!--<p>A paragraph for the main content.</p>-->
                      <!--<p>And another one.</p>-->
                    <!---->
                      <!--<template v-slot:footer>-->
                        <!--<p>Here's some contact info</p>-->
                      <!--</template>-->
                    <!--</base-layout>-->

                    //组件内容
                     <!--<div class="container">-->
                      <!--<header>-->
                        <!--<slot name="header"></slot>-->
                      <!--</header>-->
                      <!--<main>-->
                        <!--<slot></slot>-->
                      <!--</main>-->
                      <!--<footer>-->
                        <!--<slot name="footer"></slot>-->
                      <!--</footer>-->
                    <!--</div>-->
                </textarea>
              2.作用域插槽 就是把子元素里面的值传到父环境下可以使用
                <!--<mySlot>-->
                    <!--<template v-slot:two333="slotProps">-->
                        <!--111  {{ slotProps.course.courseContent }} 111-->
                    <!--</template>-->
    <!---->
                    <!--<template v-slot:three="slotProps">-->
                        <!--222   {{ slotProps.teacher2.age }} 222-->
                    <!--</template>-->
    <!---->
                    <!--<template v-slot:one="slotProps">-->
                        <!--333  {{ slotProps.user.firstName }} 333-->
                    <!--</template>-->
                <!--</mySlot>-->

            <!--<template>-->
                <!--<div class="container">-->
                    <!--<slot name="one" v-bind:user="user">{{ user.lastName }}</slot>-->
                    <!--<slot name="two" v-bind:course="course">{{ course.courseNo }}</slot>-->
                    <!--<slot name="three" v-bind:teacher2="teacher">{{ teacher.name }}</slot>-->
                <!--</div>-->
            <!--</template>-->
            24.动态组件 通过:is来实现
            <!--<component v-bind:is="currentTabComponent"></component>-->
            25.子组件通过this.$parent访问父组件
            26.组件间通信
               I.父子组件通信
                  1.注册事件，触发事件
                  2.$refs引用子组件实列
                  3.$parent引用父组件实列
                  4.prop是对象，子组件可以操作对象实现
               II.非父子组件通信
                /*新建一个Vue实例作为中央事件总线*/
                let event = new Vue();
                /*监听事件*/
                event.$on('eventName', (val) => {
                //......do something
                });
                /*触发事件*/
                event.$emit('eventName', 'this is a message.');
                <textarea>
                     window.myEvent = new Vue();
                      created(){
                            window.myEvent.$on('commonChange', (val) => {
                                console.log("改变了:",val);
                            });
                        },

                     window.myEvent.$emit("commonChange","哈哈哈");
                </textarea>
            27. VUEX https://juejin.im/post/5b2db2b4e51d4558d9234627
                I.强制新建新的属性  this.$set(this.myObj, 'address', "我家在东北");
                II.mapMutation 辅助函数
                   <textarea>
                       // ...mapMutations(["increment"])
                       //  <a @click="increment(20)">点击</a>

                        <!--increment: (state,newValue) =>{-->
                            <!--console.log("点击了",newValue);-->
                             <!--state.count=state.count+newValue;-->
                        <!--},-->
                   </textarea>
                 III.Module 从父级到子级，从上到下的分别触发 context.rootState 获取根状态 参考资料https://juejin.im/post/5b2db2b4e51d4558d9234627
                      1.可以通过设置namespaced: true来分别触发   this.$store.commit('a/incrementA',10)
                      2. root: true 这样可以子模块里面注册全局action


                 <textarea>
                        const moduleA = {
                            state: {
                                aValue:0
                            },
                            mutations: {
                                incrementA: (state,newValue) =>{
                                    console.log("moduleA");
                                    state.aValue=state.aValue+newValue+"moduleA";
                                },
                            },
                            actions: {

                            },
                            getters: {

                            }
                        }

                        const moduleB = {
                            state: {
                               bValue:0
                            },
                            mutations: {
                                incrementA: (state,newValue) =>{
                                    console.log("moduleB");
                                    state.bValue=state.bValue+newValue+"moduleB";
                                },
                            },
                            actions: {

                            }
                        }


                        const store = new Vuex.Store({
                            // 初始化 state
                            modules: {
                                a: moduleA,
                                b: moduleB
                            },
                            state:{
                              oValue:0
                            },
                            // 改变状态唯一声明处
                            mutations: {
                                incrementA: (state,newValue) =>{
                                    console.log("oValue");
                                    state.oValue=state.oValue+newValue+"自己";
                                },
                                decrement: state => state.count--
                            },
                            actions: {
                                // 实践中，经常用到参数解构来简化代码， increment ({commit}) { commit('') }
                                increment (context) {
                                    context.commit('incrementA',20);
                                }
                            },
                            getters: {
                                getSuff: state => suff => {
                                    return  state.count+suff
                                }
                            }
                        })
                 </textarea>
            28.避免回调地狱
               I. async await
               II.promise

            29.NodeJs
               I.Nodejs采用的是单线程的处理机制
            30.Promise
               1.Promise构造函数执行时立即调用executor 函数
               2.Promise状态
                 pending: 初始状态，既不是成功，也不是失败状态。
                 fulfilled: 意味着操作成功完成。
                 rejected: 意味着操作失败
               3.状态一旦改变就不能再改变
               4.then可以有多个，按顺序执行
               5.then中的错误会触发catch,因为返回任意一个非 promise 的值都会被包裹成 promise 对象，即 return new Error('error!!!') 等价于 return Promise.resolve(new Error('error!!!'))。
               6.then 或 catch 返回的值不能是 promise 本身，否则会造成死循环
            31.this和作用域链的关系
               I.this表示执行环境 通过它可以访问执行环境中的属性(全局执行环境特殊，在全局环境中定义的变量，也可以作为属性访问)
               II.作用域(每个函数都有自己的作用域，作用域包括当前函数的变量，函数外面不能访问函数里面的变量，但是子函数可以通过作用域链来访问上级函数的变量)
            32.CSS实现垂直居中有哪些方法
                  I.表格布局 display:table-cell
                  给父级元素添加样式： display: table-cell; vertical-align: middle;  使其内的子元素实现垂直居中；
                  II.方法二. 弹性布局display:flex
                     给父级元素添加样式：display:flex; align-item:center;  使其内的子元素实现垂直居中；
                  III. 绝对定位 position:absolute
                  给元素添加样式：position：absolute; top: 0;  right: 0; bottom: 0; left: 0; margin: auto; 实现垂直居中；
                  VI. 图片或者文字居中 行高等于,如果是图片就加vertical-align: middle;
            33.src和href的区别
               I.src需要加载到文档的资源，在解析dom时遇到了就会下载
               II.href和当前文档关联的资源
            34.文字超出就隐藏
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
            35.浏览器内核理解
               I.渲染引擎 渲染引擎根据 CSS 样式规则将 DOM 树扩充为渲染树，然后进行重排、重绘
               II.js引擎
            36.离线存储  参考cache.rar
                I.更新缓存:
                    1.用户清空浏览器缓存
                    2.manifest 文件被修改
                    3.由程序来更新应用缓存
                II.缺点
                    1.更新的资源，需要二次刷新才会被页面采用
                    2.不支持增量更新，只有manifest发生变化，所有资源全部重新下载一次
                    3.缺乏足够容错机制，当清单中任意资源文件出现加载异常，都会导致整个manifest策略运行异常
            37.多个标签通信
                <textarea>
                     function openSub(){
                        var win=window.open("a.html");
                        setTimeout(function(){
                          win.document.getElementById("subContent").innerHTML="父窗口改变子窗口内容"
                        },5000);
                     }
                        //子窗口
                    	var parent=window.opener;
	                	parent.document.getElementById("parentContent").innerHTML="子窗口改变父窗口内容"
                </textarea>
            38.使用css实现一个持续的动画效果
               <textarea>
                    @keyframes mymove {
                     0% {left:0px;}
                     50% {left:200px;}
                     100% {left:0px;}
                    }
                    #parentContent {
                        border: 1px solid red;
                        width: 100px;
                        height: 100px;
                        border-radius:50px;
                        animation:mymove 2s infinite;
                        position: absolute;
                    }
               </textarea>
            39.Set使用
               I.const set1 = new Set([1, 2, 3, 4, 5]);
            40.Map使用
                var myMap = new Map();
                myMap.set(keyString, "和键'a string'关联的值");
                myMap.set(keyObj, "和键keyObj关联的值");
                myMap.set(keyFunc, "和键keyFunc关联的值");
            41.WeakSet使用，保存的对象没有被其他地方引用就会被回收掉
                var ws = new WeakSet();
                var obj = {};
                var foo = {};
                ws.add(window);
                ws.add(obj);
            42.WeakMap 实例
                var wm1 = new WeakMap(),
                var o1 = {},
                wm1.set(o1, 37);
            43.为什么组件中的data属性的值必须是一个函数
               <textarea>
                var component = function() {};
                component.prototype.data = {
                  a: 'axx',
                  b: 'bxx'
                };
                var test1 = new component();
                var test2 = new component();
                console.log(test1.data.a); //axx
                console.log(test2.data.a); //axx
                test1.data.a = 'xxx'
                console.log(test1.data); //xxx
                console.log(test2.data); //xxx
               </textarea>
            44.前端开发中，如何优化图像？图像格式的区别？
             1.内容图片比较大的话用于JPEG。
             2.修饰图片用PNG
             3.动态图用gif



        </div>
        </div>

        <div class="segment-wraper"><h1>群里题:</h1><div class="summary">
            <!--1.-->
            <!--《每日一题》-->
            <!--面试题来源：哔哩哔哩2019校招-->
            <!--题目：-->
            <!--实现一个HTML语法检查器，HTML语法规则简化如下：标签必须闭合，必须由开始和结束两个标签闭合，如<div></div>。-->
            <!--标签可以嵌套如<div id="1>2"><a></a></div>或者<div></div>,但是标签不能交叉：<div><a></div></a>是不允许的。-->

            <!--标签里可以有属性如<div id="a>1"></div>-->
            <!--属性的规则是 属性名="任意非引号字符"，多属性声明之间必须有空格，属性声明不符合规则时，整段HTML都算语法错误-->
            <!--输入文本只会出现字母a-z和<>"=-->
            <!--实现一个HTML语法检测器函数，有语法错误返回1,没有语法错误返回0-->
            <!--hasSyntaxError(input){-->

            <!--}-->
            <!--<textarea>-->
                 <!--function hasSyntaxError(input){-->
                    <!--var  txtReg=/>(\s*[a-z]*?\s*)</g;-->
                    <!--var txtArr=[];-->
                    <!--var txtInput=input;-->
                    <!--while((txtArr=txtReg.exec(input))!=null){-->
                        <!--console.log(txtArr);-->
                        <!--txtInput=txtInput.replace(txtArr[1],"");-->
                    <!--}-->
                    <!--//console.log(txtInput);-->
                    <!--var tagReg=/<[^>]+>|<\/[^>]+>/gim;-->
                    <!--var tagArr=txtInput.match(tagReg);-->
                    <!--console.log(tagArr);-->
                    <!--//["<div id="a">", "<p>", "</p>", "<a>", "</a>", "<a>", "</a>", "<b>", "<span>", "</span>", "</b>", "</div>"]-->
                    <!--var startTagReg=/<([a-z]+)\s*([a-z]+="[a-z<>=]*"\s*)*>/g;-->
                    <!--var endTagReg=/<\/\s*([a-z]+)\s*>/g;-->
                    <!--var startTag="";-->
                    <!--var startTagIndex=0;-->
                    <!--var endTag="";-->
                    <!--var sArray=null;-->
                    <!--var eArray=null;-->
                    <!--for(var i=0;i<tagArr.length;i++){-->
                        <!--console.log("tagArr[i]:",tagArr[i]);-->
                        <!--if(tagArr[i].indexOf("/")>-1){-->
                            <!--eArray=endTagReg.exec(tagArr[i]||"");-->
                            <!--endTag=eArray[1];-->
                            <!--endTagReg.lastIndex=0;-->
                            <!--if(startTag==""){-->
                                <!--var tempI=i-1;-->
                                <!--while(!tagArr[tempI]){-->
                                    <!--tempI=tempI-1;-->
                                <!--}-->
                                <!--sArray=startTagReg.exec(tagArr[tempI]||"");-->
                                <!--startTagIndex=tempI;-->
                                <!--startTag=sArray[1];-->
                                <!--startTagReg.lastIndex=0;-->
                            <!--}-->
                            <!--if(startTag!==endTag){-->
                                <!--console.log("失败了","startTag:",startTag,"endTag:",endTag);-->
                                <!--return 1;-->
                            <!--}-->
                            <!--tagArr[i]="";-->
                            <!--tagArr[startTagIndex]="";-->
                            <!--startTag="";-->
                            <!--endTag="";-->
                        <!--}-->
                        <!--else{-->
                            <!--sArray=startTagReg.exec(tagArr[i]||"");-->
                            <!--startTagIndex=i;-->
                            <!--startTag=sArray[1];-->
                            <!--startTagReg.lastIndex=0;-->
                        <!--}-->
                    <!--}-->
                    <!--console.log(tagArr);-->
                    <!--return 0;-->
                <!--}-->
                <!--console.log(hasSyntaxError('<div id="a"><b><span></b></span></div>'));-->
            <!--</textarea>-->
            2.
            《每日一题》
            面试题来源：群友海子
            题目：js中同步和异步的区别

            3. 《每日一题》
            面试题来源：未知
            题目：下面代码输出什么
            var user ={
              age:"22"
            }
            var { user: person }={user};
            console.log(person.age);

            4.《每日一题》
            var name="张三";
            window.name="h5study";
            function showName1(){
            console.log(this.name);
            }
            var obj={
            name:"李四",
            showName2:function(){
            var name="王五";
            showName1();
            showName1.call(this);
            function sub(){
            console.log(name);
            }
            sub.call(this);
            }
            }
            obj.showName2();


        </div></div>


        <div class="segment-wraper"><h1>工作中遇到的问题:</h1><div class="summary">
            1.定时器销毁,组件切换后，定时器还在跑，操作dom时还会报错


        </div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.面试题
            https://medium.com/@dixitk13/answers-to-front-end-javascript-in-2018-19-basic-javascript-questions-6fd121afc9eb
            2.https://juejin.im/post/5bf5610be51d452a1353b08d
            3.群里提问模板
            《每日一题》
            面试题来源：
            题目：
        </div></div>


        <div class="segment-wraper"><h1>新面试:</h1><div class="summary">
            1.工作中遇到的问题
                I.后端的数据格式不统一，导致js报错，页面显示不出来
                II.精度丢失，类库
                III.客户端需要实时获取服务器上的数据，之前用定时器，后来改成websocket
                VI.上传文件,ngnix方向代理，文件流丢失，通过设置文件服务器支持跨域请求
            2.内心泄露
                II.weakset
                II.全局变量
                III.被遗忘的定时器或者回调
                VI.闭包
                V.dom引用
            3.解决微信缓存
                I.url后面加随即值
            4.前端性能优化
                尽量减少 HTTP 请求个数——须权衡
                使用 CDN（内容分发网络）
                为文件头指定 Expires 或 Cache-Control ，使内容具有缓存性。
                避免空的 src 和 href
                使用 gzip 压缩内容
                把 CSS 放到顶部
                把 JS 放到底部
                将 CSS 和 JS 放到外部文件中
                使 AJAX 可缓存
                使用 GET 来完成 AJAX 请求
                延迟加载
                预加载
                减少 DOM 元素个数
                根据域名划分页面内容
                减少 Cookie 的大小
                减少 DOM 访问
                优化 CSS Spirite
                保持单个内容小于25K

            其他
                I.get和post区别
                I.GET能被缓存，POST不能缓存
                II.参数不同
                III.发送的数据限制
        </div></div>



    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:""
            }
        },
        mounted(){
            const a=[1,2,3,4,5];
            Array.prototype.multiply=function () {
                var multiples=this.map(function (singleItem) {
                    return singleItem*singleItem;
                });
               this.push(...multiples);
            };
            a.multiply();
            console.log("测试："+JSON.stringify(a));
            //[1,2,3,4,5,1,4,9,16,25]
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
