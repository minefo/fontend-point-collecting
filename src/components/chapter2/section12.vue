<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1>本节总结:</h1>
            <div class="summary">
                   尺寸
                   http://caibaojian.com/web-app-rem.html
                   居中
                   Tables Positioning 不设置宽度和高度
                   Margins Positioning 父子都有宽度和高度
                   Stretch Padding  父子都有设置宽度和高度


                    模拟ajax https://reqres.in/
                    数据算法收集 http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/

                    关于vue data
                    1.只有data中的根项，或者根项以下已经存在的项改变，才会触发render
                    2.如果想在已经存在的节点，添加新项并且触发render可以通过  this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })

                    3.定时器好文 https://johnresig.com/blog/how-javascript-timers-work/
                    4.编码百科 https://unicode-table.com/cn/search/
                    5.所有编码集合 http://kourge.net/projects/regexp-unicode-block
                    6.度量单位
                        1 km =1000 米=1 公里
                        1t=1000kg=2000斤
                        1kg=1000g=2斤
                        1KB=1024B=1024byte(/bait/)=8192bit/bIt/
                    7.根据经度和纬度定位 https://www.gps-coordinates.net/
                    8.form表单上enctype表示MIME类型
                       I.application/x-www-form-urlencoded 默认类型
                       II.multipart/form-data  上传文件
                    9.express不加文件插件是不能上传文件的
                       var fileUpload = require('express-fileupload');
                       app.use(fileUpload());
                    10.express里面如果没有执行res.send则阻塞
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
