<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">块级标签总结</h1><div class="segment-content">
            1.所有的块级元素没有内边距
            2.默认有上下外边距
                blockquote 16px
                figure 16px
                p 16px

                dl 16px
                ol 16px
                ul 16px

                hr 8px
                pre 13px

               注意：h1 有上下边距，但是浏览器不一致

            3.默认有左右外边距
                blockquote 40px
                figure 40px

            注意：默认只有左外边距 dd 40px


           4.所有块级标签
             h1-h6. div p table  blockquote  figure ul ol dl li hr pre  video  canvas form
             address  dt dd  header footer aside  nav

             article
             audio
             fieldset
             figcaption
             output
             section

                    </div></div>
        <div class="segment-wraper"><h1 class="segment-title">行内标签总结</h1><div class="segment-content">
            1.所有行内标签
                abbr
                code
                dfn
                kbd
                var
                bdo

                img
                a
                object
                strong
                small
                b
                q
                cite
                span
                samp
                em
                i

                sub
                sup

                button
                input
                label
                select
                textarea




            2.替代元素
              img、input、textarea、select、object

            3.样式表现如下
              I.对width表现 (可替代元素外加button 只是button等于+border+ padding  select浏览器不一致)
              内容宽度： img  object  input  textarea
              等于+border+ padding 的宽度： button

              select 特殊 浏览器不一致,其他的无效

             II.对height表现同width一样

             III.对外边距表现
                对margin-left表现  所有行内元素都有效
                对margin-right表现  同margin-left一样
                对margin-top表现  img input select textarea  object  button 其他的无效 (可替代元素外加button)
                对margin-bottom表现  同margin-top一样

             VI.对内边距表现
                对padding-left表现 除了select 其他都有效
                对padding-right表现 同padding-left一样
                对padding-top表现  img input textarea  object button  其他的无效 (可替代元素外加button 除了select)
                对padding-bottom表现  padding-top一样

                    </div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">标签嵌套规则</h1><div class="segment-content">
            1.块元素可以包含块元素和内联元素
              I.p不能包含块级元素，如果p包含p或者其他块级元素，那么这些块级元素会跑到p的外面 浏览器会显示错乱,既是把里面的块级标签设置为display:inline也一样
              II.标准说h1、h2、h3、h4、h5、h6、dt不能包含块级元素,但是真用了，浏览器不会错乱
            2.内联元素只能包含内联元素,如果行内元素包含块元素，默认浏览器会显示错乱，但是display:block除外
            3.块级元素与块级元素并列、内嵌元素与内嵌元素并列,也就是一个元素里面，要么只有块级元素，要么只有行内元素，文字也可以看出行内元素，基本思路就是这样了，其实实际开发中只要不是p包含块级元素就行
            4.ul可以单独使用


        </div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.标签连接 http://www.jianshu.com/p/db58363cd64c
            2..<meta http-equiv="X-UA-Compatible" content="edge" />  让IE浏览器最高级别的可用模式显示内容
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
