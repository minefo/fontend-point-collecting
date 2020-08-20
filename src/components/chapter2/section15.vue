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

        <div class="segment-wraper">
            <h1 class="segment-title">其他</h1>
            <div class="segment-content">
                1.npx教程 http://www.ruanyifeng.com/blog/2019/02/npx.html
            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">最新的官方文档(v16.13.1)</h1>
            <div class="segment-content">
                1.在线测试reactjs语法
                  https://codepen.io/gaearon/pen/oWWQNa?editors=0010&__cf_chl_jschl_tk__=37e1547a96e3f148c703cc82f4d1a6fa1e4de75f-1591666165-0-AWzy7B9xatP9l2fa0f4-_1uWhWnh0PpkXuT2-fwPncHa2mxsSco0SgRd8-Iyd6lGAepqnbL7ONKcvaBgCcckb_RCszgpzMC9AJ-XEQteI5r2u7Owfd6TMbs6iy2sVGBkHJMsbBLSDKn-Z-E2QTzw7CneKc5i0VqbBQctPuDXuyi8WP4DrKqJyTL_nkFXBN9bWS-tidpm7uhxWm3VeNbUqIA2ekc9j8ejmE3s59xrlztF9zUaF8LW_D9kTHWZKvE-kC-fszzwUrXCVyat62gA-FuY01L4zFEwiEpbL0QAaDn4yg4MLRWTB4_aDvdzT_IR6n_VFMp83RYbAUFb4hvfegn3FEmZ5pacmya4VRlTaGYgk9MF5kDj9L4SXwlvz3u3GQ
                2.下次从文档开始学习
                3.下次从HOOK （2020。6。28）
            </div>
        </div>
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
