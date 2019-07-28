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
            1.requestAnimationFrame类似setTimeout只是结合浏览器刷新频率有关,timestamp表示下一次调用时间
             <textarea>
                 var oldTime =0;
                var left=0;
                var element = document.getElementById('animation');
                element.style.position = 'absolute';
                var clientWidth=document.documentElement.clientWidth;

                function step(timestamp) {
                    left++;
                  if(!oldTime){
                     oldTime = timestamp;
                  }
                  else{
                    console.log(timestamp-oldTime)
                    oldTime = timestamp;
                  }

                  if(left>clientWidth){
                     left=-100
                  }
                  element.style.left =left+'px';
                  window.requestAnimationFrame(step);
                }

                window.requestAnimationFrame(step);

             </textarea>
            2.document.hidden true|false  //ie10+ chrome opera  firefox 但是safari不支持 后台标签或者浏览器最小化
              document.visibilityState   hidden|visible  //ie10+ chrome opera  firefox 但是safari不支持
              visibilitychange //ie10+ chrome opera  firefox 但是safari不支持
            3.navigator.geolocation 获取位置,pc上是通过网络服务获取位置，手机上通过硬件获取位置 ie9+
               I.getCurrentPosition
                 <textarea>
                     navigator.geolocation.getCurrentPosition(function(posObj){
                     for(var key in posObj.coords){
                         console.log(key+":"+posObj.coords[key])
                      }
                      console.log(JSON.stringify(posObj.coords))
                      console.log("timestamp:"+posObj.timestamp)//通过网络获取位置误差很大
                    },function(){
                        console.log("失败了")//断网就触发失败
                    })
                 </textarea>
              II.watchPosition参数一样，还可以取消
            4.type="file" multiple="multiple"情况下可以上传多个文件，并且file控件的files对应一个类数组集合，里面每个对象都有name,size,type,lastModifiedDate ie10+以及其他浏览器
               <textarea>
                      var dom=document.getElementById("file")
                       dom.addEventListener("change",function(event){
                           var fileList=event.target.files;
                           for(var f=0;f<fileList.length;f++){
                                 console.log("name:",typeof fileList[f].name)
                                 console.log("size",typeof fileList[f].size)
                                 console.log("type:",typeof fileList[f].type)
                                 console.log("lastModifiedDate:",typeof fileList[f].lastModifiedDate)
                           }

                       })
               </textarea>
            5.FileReader使用  ie10+
              <textarea>
                       var dom=document.getElementById("file")
                       var sub=[];
                       dom.addEventListener("change",function(event){
                           var fileList=event.target.files;
                           for(var f=0;f<fileList.length;f++){
                               var reader=new FileReader();
                               (function(reader,f){
                                   reader.onload=function(){
                                       console.log("f:"+f)
                                       var img=document.createElement("img")
                                       img.src=reader.result
                                       img.style.width="100px";
                                       img.style.height="100px";
                                       document.getElementById("animation").appendChild(img)
                                   }
                               })(reader,f)
                               reader.readAsDataURL(fileList[f])
                           }
                       })
              </textarea>
            6.createObjectURL 使用如下
            <textarea>
                   var dom=document.getElementById("file")
                   var sub=[];
                   dom.addEventListener("change",function(event){
                       var fileList=event.target.files;
                       var url=window.URL.createObjectURL(fileList[0])
                       console.log("url:"+url) // 返回的地址如：blob:http://127.0.0.1:8020/7f3465f3-08f3-4d6b-a92f-7b868f4a0eba
                   })
            </textarea>
            7.拖动上传文件 只要在dragover取消默认行为，并且在drop处理逻辑就行
              <textarea>
                   document.addEventListener("dragover", function( event ) {
		              event.preventDefault();
                   }, false);

                  document.addEventListener("drop", function( event ) {
                       //var fileList=event.target.files;
                       var fileList=event.dataTransfer.files
                       var url=window.URL.createObjectURL(fileList[0])
                       console.log("url:"+url)
                       event.preventDefault()
                  }, false);
              </textarea>
            8.base64 64进制用6位表示一个值 总共63个值,提供两个方法进行操作
               <textarea>
                    var str="w"
                    console.log(btoa(str)) //"dw=="

                    var str="dw=="
                    console.log(atob(str)) //"dw=="
               </textarea>
            9.ajax上传文件
              I.通过先读取文件内容，然后上传
                 <textarea>
                      document.addEventListener("dragover", function( event ) {
                          event.preventDefault();
                      }, false);
                      document.addEventListener("drop", function( event ) {
                           //var fileList=event.target.files;
                               var fileList=event.dataTransfer.files
                               for(var f=0;f<fileList.length;f++){
                                   var reader=new FileReader();
                                   (function(reader,f){
                                       reader.onload=function(){
                                         $.ajax({
                                            type:"post",
                                            url:"http://192.168.10.111:3000/",
                                            data:{
                                                name:"小仙",
                                                fileContent:reader.result
                                            },
                                            success:function(data){
                                                console.log("成功"+JSON.stringify(data))
                                            },
                                            complete:function(){
                                                console.log("完成")
                                            }
                                       });

                                   }
                                  })(reader,f)
                                   reader.readAsDataURL(fileList[f])
                                }
                             event.preventDefault()
                      }, false);
                 </textarea>
              II.通过formData上传文件,注意processData和contentType必须为false ie10+以及其他浏览器
                 <textarea>
                       document.addEventListener("dragover", function( event ) {
                          event.preventDefault();
                      }, false);

                      document.addEventListener("drop", function( event ) {
                          // var fileList=event.target.files;
                               var fileList=event.dataTransfer.files
                               var formData=new FormData();
                               formData.append("name","小仙")
                               for(var f=0;f<fileList.length;f++){
                                    formData.append("file"+f,fileList[f])
                               }

                               $.ajax({
                                    type:"post",
                                    url:"http://192.168.10.111:3000/",
                                    data:formData,
                                    processData: false,
                                    success:function(data){
                                        console.log("成功"+JSON.stringify(data))
                                    },
                                    complete:function(){
                                        console.log("完成")
                                    },
                                    contentType: false
                              });

                             event.preventDefault()
                      }, false);
                 </textarea>
            III.express通过 app.use('*', proxy("http://192.168.10.111:4000/", {}));//直接转发就可以保存文件
            VI.表单属性enctype
                1.application/x-www-form-urlencoded 默认 key1=val1&key2=val2编码 request.Form
                2.multipart/form-data 上传文件
                3.text/plain (HTML5)
            V.ajax中contentType,如果data是formData，则contentType浏览器会自动设置
               原始数据：{  name:"小仙", age:"22", course:[ {courseName:"物理"}, {courseName:"化学"},] }
              1.application/json   "name=小仙&age=22&course[0][courseName]=物理&course[1][courseName]=化学"  非顶级request.Form看不到值
              2.application/x-www-form-urlencoded 和json差不多 {name=%u5c0f%u4ed9&age=22&course%5b0%5d%5bcourseName%5d=%u7269%u7406&course%5b1%5d%5bcourseName%5d=%u5316%u5b66} request.Form 可以看到值
            10.performance.timing里面包含页面各种时间信息
            11.worker ie10+
               I.不能访问DOM, 不共享当前作用域,加载的脚本必须同源
               II.worker的全局作用域是worker,他只有最小化的navigator,只读的location以及setTimeout setInterval,clearTimeout,clearInterval和XMLHttpRequest
               III.相互之间可以postMessage通信
                   <textarea>
                       //somedo.js
                        var startTime=(new Date()).getTime();
                        for(var i=0;i<10000*200;i++){
                        }
                        var endTime=(new Date()).getTime();

                        console.log("耗时:"+(endTime-startTime))

                        this.postMessage(endTime)
                        this.onmessage=function(event){
                                   var data=event.data;
                                   console.log("里面"+data)
                        }

                       //外面
                        var worker=new Worker("./js/somedo.js")
                        worker.myname="333";
                        console.log(worker.myname)
                        worker.postMessage(worker)
                        worker.onmessage=function(event){
                           var data=event.data;
                           console.log("外面："+data)
                        }

                        worker.onerror=function(event){
                           console.log(event.filename)
                           console.log(event.lineno)
                           console.log(event.message)
                        }
                   </textarea>
                 VI.importScripts("file1.js","file2.js") 可以导入其他文件，虽然请求文件是异步，但是执行顺序是左到右，并且importScripts是同步方法
            12.window.postMessage() ie8+支持
                使用 otherWindow.postMessage(message, targetOrigin, [transfer]);
                 I.otherWindow 比如iframe的contentWindow属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames。
                 II.message window的数据
                 III.targetOrigin 哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI
                 IV.transfer 能在不同可执行上下文中相互传递的对象，列如主线程和 Worker 间,发送一方将不再保有所有权
                otherWindow窗口里面
                 <textarea>
                    window.addEventListener("message", receiveMessage, false);
                    function receiveMessage(event)
                    {
                      // For Chrome, the origin property is in the event.originalEvent
                      // object.
                      // 这里不准确，chrome没有这个属性
                       var origin = event.origin || event.originalEvent.origin;
                      if (origin !== "http://example.org:8080")
                        return;
                    }
                 </textarea>
                message 的属性有:
                I.data 从其他 window 中传递过来的对象。
                II.origin 调用 postMessage  时消息发送方窗口的 origin (也就是源). 这个字符串由 协议、“://“、域名、“ : 端口号”拼接而成 如:“http://example.com:8080”。
                III.source 对发送消息的窗口对象的引用; 您可以使用此来在具有不同origin的两个窗口之间建立双向通信。

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
