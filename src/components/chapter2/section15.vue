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
            1.怎么跳转
<!--            render: () => <a href="javascript:;" onClick={()=>this.props.history.push('/user/account-detail')}>账户详情</a>,-->
            2.模拟等待
                let start=Date.now();
                let end=null;
                let bl=true;
                let mill=0;
                while(bl){
                end=Date.now();
                mill=(end-start)/1000;
                if(mill>=2){
                bl=false;
                }
                }
                console.log("等待结束");
            3.shouldComponentUpdate(nextProps, nextState)
              I.这个方法返回true才会更新dom，注意只有PureComponent才有
              II.如果返回false，子组件也不会更新。
            4.心得资料参考 https://github.com/lidongcn/blog/issues/1
            5.setState(updater[, callback])
                this.setState({name:"ddddd"},() => {
                console.log("更新完了");
                });






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
