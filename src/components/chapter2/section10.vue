<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title"> animate.css</h1>
            <div class="segment-content" style="height: 500px;">
                 1.可以通过样式控制时间  如.animated { animation-duration: 3s; }
                 2.结合过渡使用
                 3.看起来:duration props不生效
                 4.过渡模式 in-out：新元素先进行过渡，完成之后当前元素过渡离开。
                   out-in：当前元素先进行过渡，完成之后新元素过渡进入。
                5.transition嵌入多个元素，只支持v-if
                4. :duration 表示元素存在时间
                5. 动画mode使用方法 是先out-in 这样就平滑

               <div v-pre><transition name="fade" mode="out-in"> </transition></div>
                <transition
                        name="custom-classes-transition"
                        enter-active-class="animated fadeInLeft"
                        :duration="8000"
                        v-on:leave="leave"
                        appear>
                    <p v-if="isShow" key="a">这里是测试文档hello111</p>
                    <p v-if="!isShow" key="b">这里是测试文档hello2222</p>
                </transition>

                <div class="animated infinite bounce">bounce</div>
                <div class="animated infinite flash">flash</div>
                <div class="animated infinite pulse">pulse</div>
                <div class="animated infinite rubberBand">rubberBand</div>

                <div class="animated infinite shake">shake</div>
                <div class="animated infinite headShake">headShake</div>
                <div class="animated infinite swing">swing</div>
                <div class="animated infinite tada">tada</div>


                <div class="animated infinite wobble">wobble</div>
                <div class="animated infinite jello">jello</div>
                <div class="animated infinite bounceIn">bounceIn</div>
                <div class="animated infinite bounceInDown">bounceInDown</div>

                <div class="animated infinite bounceInLeft">bounceInLeft</div>
                <div class="animated infinite bounceInRight">bounceInRight</div>
                <div class="animated infinite bounceOutRight">bounceOutRight</div>
                <div class="animated infinite bounceOut">bounceOut</div>

                <div class="animated infinite bounceInLeft">bounceOutDown</div>
                <div class="animated infinite bounceInRight">bounceOutLeft</div>
                <div class="animated infinite bounceOutRight">bounceOutRight</div>
                <div class="animated infinite bounceOut">bounceOutUp</div>

                <div class="animated infinite fadeIn">fadeIn</div>
                <div class="animated infinite fadeInDown">fadeInDown</div>
                <div class="animated infinite fadeInDownBig">fadeInDownBig</div>
                <div class="animated infinite fadeInLeft">fadeInLeft</div>

                <div class="animated infinite fadeInLeftBig">fadeInLeftBig</div>
                <div class="animated infinite fadeInRight">fadeInRight</div>
                <div class="animated infinite fadeInRightBig">fadeInRightBig</div>
                <div class="animated infinite fadeInUp">fadeInUp</div>

                <div class="animated infinite fadeInUpBig">fadeInUpBig</div>
                <div class="animated infinite fadeOut">fadeOut</div>
                <div class="animated infinite fadeOutDown">fadeOutDown</div>
                <div class="animated infinite fadeOutDownBig">fadeOutDownBig</div>

                <div class="animated infinite fadeOutLeft">fadeOutLeft</div>
                <div class="animated infinite fadeOutLeftBig">fadeOutLeftBig</div>
                <div class="animated infinite fadeOutRight">fadeOutRight</div>
                <div class="animated infinite fadeOutRightBig">fadeOutRightBig</div>

                <div class="animated infinite fadeOutUp">fadeOutUp</div>
                <div class="animated infinite fadeOutUpBig">fadeOutUpBig</div>
                <div class="animated infinite flipInX">flipInX</div>
                <div class="animated infinite flipInY">flipInY</div>


                <div class="animated infinite flipOutX">flipOutX</div>
                <div class="animated infinite flipOutY">flipOutY</div>
                <div class="animated infinite lightSpeedIn">lightSpeedIn</div>
                <div class="animated infinite lightSpeedOut">lightSpeedOut</div>


                <div class="animated infinite rotateIn">rotateIn</div>
                <div class="animated infinite rotateInDownLeft">rotateInDownLeft</div>
                <div class="animated infinite rotateInDownRight">rotateInDownRight</div>
                <div class="animated infinite rotateInUpLeft">rotateInUpLeft</div>


                <div class="animated infinite rotateInUpRight">rotateInUpRight</div>
                <div class="animated infinite rotateOut">rotateOut</div>
                <div class="animated infinite rotateOutDownLeft">rotateOutDownLeft</div>
                <div class="animated infinite rotateOutDownRight">rotateOutDownRight</div>

                <div class="animated infinite rotateOutUpLeft">rotateOutUpLeft</div>
                <div class="animated infinite rotateOutUpRight">rotateOutUpRight</div>
                <div class="animated infinite hinge">hinge</div>
                <div class="animated infinite jackInTheBox">jackInTheBox</div>

                <div class="animated infinite rollIn">rollIn</div>
                <div class="animated infinite rollOut">rollOut</div>
                <div class="animated infinite zoomIn">zoomIn</div>
                <div class="animated infinite zoomInDown">zoomInDown</div>

                <div class="animated infinite zoomInLeft">zoomInLeft</div>
                <div class="animated infinite zoomInRight">zoomInRight</div>
                <div class="animated infinite zoomInUp">zoomInUp</div>
                <div class="animated infinite zoomOut">zoomOut</div>


                <div class="animated infinite zoomOutDown">zoomOutDown</div>
                <div class="animated infinite zoomOutLeft">zoomOutLeft</div>
                <div class="animated infinite zoomOutRight">zoomOutRight</div>
                <div class="animated infinite zoomOutUp">zoomOutUp</div>

                <div class="animated infinite slideInDown">slideInDown</div>
                <div class="animated infinite slideInLeft">slideInLeft</div>
                <div class="animated infinite slideInRight">slideInRight</div>
                <div class="animated infinite slideInUp">slideInUp</div>

                <div class="animated infinite slideOutDown">slideOutDown</div>
                <div class="animated infinite slideOutLeft">slideOutLeft</div>
                <div class="animated infinite slideOutRight">slideOutRight</div>
                <div class="animated infinite slideOutUp">slideOutUp</div>
            </div>
        </div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

    </div>
</template>
<script>
    require("animate.css");
    export default {
        data() {
            return {
                isShow:true
            }
        },
        mounted(){

            setTimeout(function () {
                this.isShow=false;
                console.log("开始")
            }.bind(this),5000)
        },
        watch: {
            ...pageCommon.pageCommonWatch.commonWatch
        },
        methods : {
            ...pageCommon.pageCommonMethod.opeMethod,//增删改查方法
            ...pageCommon.pageCommonMethod.otherMethod, //页面其他方法
            leave(){
                console.log("结束")
            }
        },
    }
</script>
<style scoped>
 .animated {
     width:25%;
     float:left;
 }
</style>
