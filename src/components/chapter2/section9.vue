<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">基础</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">深入了解组件</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">过渡 & 动画</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">可复用性 & 组合</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">工具</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">规模化</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">内在</h1><div class="segment-content">

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">
            单文件
        </h1><div class="segment-content">
            1.它是vue组件,通过打包插件，可以解析
            2.结合路由挂载在页面上
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">
            路由
        </h1><div class="segment-content">
            1.通过监听路径来挂载单文件组件
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">
            VUEX
        </h1><div class="segment-content">
            1.需要可以记录数据的改变
            2.action存在的意义是异步
            3.addViewCount(state,payload) {}
            I.state 总是state状态包括所有key
            II.payload 额外参数，可以是任意类型
            4.getter:可以认为是 store 的计算属性
            <textarea>
                      getters: {
                        viewCountToDouble: state => {
                            return state.viewCount*2
                            }
                        },
                      computed: {...mapState(["viewCount"]),...mapGetters(['viewCountToDouble'])},
               </textarea>
            5.Module
            I.由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，模块就是用来分割状态树，子树就是完整的状态树.
            II.子模块没有命名空间，就是在全局空间里面，有命名空间就是通过modules里面的别名做路径访问如"b/c/getModuleCAge"
            III.记住命令空间可以继承
            <textarea>
                //index.js
                modules: {
                    a: moduleA,
                    b: moduleB
                },
               //moduleB
                modules: {
                    c: moduleC
                },
                //使用
                computed: {...mapState(["viewCount",'a','b']),...mapGetters({
                    viewCountToDouble: 'viewCountToDouble',
                    getModuleBName:'getModuleBName',
                    getModuleBSex:"b/getModuleBSex",
                    getModuleCAge:"b/getModuleCAge"
                })},
            </textarea>
            VI.根的配置项
            getters: state, getters  //getters其他getters
            <!--doneTodosCount: (state, getters) => {-->
            <!--return getters.doneTodos.length-->
            <!--}-->
            mutations: state, payload
            actions:context, products
            V.模块的配置项
            getters:state, getters, rootState, rootGetters//局部state  rootState根state
            mutations: state, payload ////局部state  this.$store.commit('increment') 通过这个方式调用
            actions:context, products //局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState this.$store.dispatch('xxx')通过这个方式调用
            VI.每个组件都可以通过this.$store访问store
            VII.创建store方式
            export default new Vuex.Store({
            modules: {},
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            strict: true //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
            })
            VIII.  root: true 作用,表示从根开始查找
            1.context.commit('b/c/addMyC', { id:2 }, { root: false }) //报unknown local mutation type: b/c/addMyC, global type: a/b/c/addMyC
            VIV.子模块的state可以通过这样访问products: state => state.products.all
        </div></div>



        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.cross-env NODE_ENV=production
            2.每个命令之间用&&隔开  前面的命令执行成功，才会去执行后面的命令
            3.每个命令之间用||或者|隔开 只有前面的命令执行失败后才去执行下一条命令，直到执行成功一条命令为止
            4.process.env.NODE_ENV
            5.cross-env NODE_ENV=production2 node test2.js
            6.Function使用
              I.Function()和new Function()是一样的
              II.使用 new Function ([arg1[, arg2[, ...argN]],] functionBody) arg是字符串
              III.它们只能访问自己的本地变量和全局变量 没有闭包
              VI.一个参数表示就是函数体
            7.import使用,注意import是单例模式
                import { foo } from 'my_module';
                import { bar } from 'my_module';
               上面代码中，虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例。也就是说，import语句是 Singleton 模式。
            8.inline-template  <blog-post inline-template><div @click="myClick">点击了</div></blog-post> 内容代替 组件的template
            9.VUE第一版是在2014发布的,2015年流行起来
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
