<template>
    <div class="inner-container">
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper" v-pre><h1 class="segment-title"> 全局配置</h1><div class="segment-content">
            1.Vue.config.silent = true 表示[Vue warn]这些之类的提示不会打印出来
            <textarea>
                     Vue.config.devtools = true
                     Vue.config.silent = true
                      window.vm = new Vue({
                        el: '#app',
                        router,
                        store,
                        template: '<App/>',
                        components: { App }
                    });
              </textarea>
            2.Vue.config.errorHandler,是个钩子可以捕获组件里面js错误
            <textarea>
                 Vue.config.errorHandler = function (err, vm, info) {
                    //err 错误信息
                    //vm 错误发生组件
                    //info 错误位置等
                }
              </textarea>
            3.Vue.config.ignoredElements 忽略自定义标签,否则就会报错
            <textarea>
                   Vue.config.ignoredElements = [
                     'my-custom-web-component',
                     'another-web-component'
                    ]
                </textarea>
            4.Vue.config.keyCodes 事件自定义别名key,目前测试下来，不支持组合键值,属性值只能是编码值
            <textarea>
                  Vue.config.keyCodes = {
                        "media-play-pause": 87,
                         up: [87]
                    }
                   <input type="text" @keyup.media-play-pause="handleSubmit">
              </textarea>

            5.Vue.config.devtools 控制DevTools是否能观察页面组件
        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">全局 API</h1><div class="segment-content">
            1.Vue.nextTick( [callback, context] ) 在更新完DOM之后，执行回调函数
            2.插件开发
              <textarea>
                    var MyPlugin={}
                    MyPlugin.install = function (Vue, options) {
                        // 1. 添加全局方法或属性
                        Vue.myGlobalMethod = function () { //只能通过Vue调用
                            console.log("myGlobalMethod")
                        }
                        // 4. 添加实例方法
                        Vue.prototype.showMyName = function (methodOptions) { //只能通过实例调用
                              console.log("showMyName")
                              console.log(methodOptions)
                        }
                    }
                    Vue.use(MyPlugin)
              </textarea>
            3.Vue.mixin 混入时可以传入一个对象，对象里面可以包含生命周期函数，先执行混入周期函数，然后再执行实例周期
            4.Vue.compile 其实就是把模板字符串解析成等待执行的创建虚拟dom函数配合实列的render属性
               <textarea>
                        var res = Vue.compile('<div><span>{{ msg }}</span></div>')
                        new Vue({
                          data: {
                            msg: 'hello'
                          },
                          render: res.render,
                          staticRenderFns: res.staticRenderFns
                        })
               </textarea>

        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / 数据</h1><div class="segment-content">
            1.data 应该只能是数据
            2.纯数据对象快速深拷贝 JSON.parse(JSON.stringify(Object))
            3.一旦观察过，不需要再次在数据对象上添加响应式属性，也就是必须初始化根属性，根属性下的属性改变会触发更新,this.$data 表示原始数据对象
            4.箭头函数的this类似闭包的变量,根据上一层作用域中的this来,并且只能这样来，不能通过其他形式改变this
            5.props属性，用于接收来自父组件的数据，props 可以是数组或对象，对象可以指定类型，默认值，是否必须，验证函数，见如下
            <textarea>
                Vue.component('button-counter', {
                    props:{
                      count: {
                          type: Number,
                          default: 0,
                          required: true,
                          validator: function (value) {
                            console.log("到子组件里面")
                            return value >= 0
                          }
                      }
                    },
                  data: function () {
                    return {

                    }
                  },
                  template: '<button @click="$emit(\'change-count\')">You clicked me {{ count }} times.</button>'
                })

                var dataObj = { a: [{name:222}] }
                var vm = new Vue({
                  el: '#test',
                  data:{
                     count:0,
                  },
                  mounted:function(){

                  },
                  methods:{
                    test:function(){
                        this.count++;
                        console.log("到这里")
                    }
                  }
                })
        </textarea>
            6.watch
              I.如果需要监听深度数据,可以通过配置实现,配置如下
                    c: {
                        handler: function (val, oldVal) {
                           console.log('c new: %s, old: %s', JSON.stringify(val), JSON.stringify(oldVal))
                        },
                        deep: true
                    },
              II.如果需要在变更之前触发回调可以配置 immediate: true
              III.如果需要一次执行多个回调，可以通过数组传入回调函数,函数名称可以随便
              VI.可以通过路径来监听需要监听的key 比如：'e.f'



        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / DOM</h1><div class="segment-content">
            1.el 可以是 CSS 选择器，也可以是一个 HTMLElement 实例 注意：所有的挂载元素会被 Vue(也就是存在template或者render,注意render优先级最高) 生成的 DOM 替换


        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / 生命周期钩子</h1><div class="segment-content">
            I.生命周期触发顺序
            beforeCreate
            created JAVASCRIPT对象可以访问
            beforeMount
            mounted   JAVASCRIPT对象和DOM对象都可以访问
            beforeUpdate 数据更新时调用，发生DOM更新之前
            updated  组件 DOM 已经更新
            activated  keep-alive 组件激活时调用
            deactivated keep-alive 组件停用时调用
            beforeDestroy 实例销毁之前调用
            destroyed  实例销毁后调用
            errorCaptured   当捕获一个来自子孙组件的错误时被调用

        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / 资源</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / 组合</h1><div class="segment-content">
            1.parent 指定父组件 可以通过$parent 访问父组件 父组件可以通过$children访问子组件
            2.mix混入对象可以包含任意组件选项,先执行混入对象的钩子函数，实列数据属性会覆盖钩子数据属性
            <textarea>
                  // 定义一个混入对象
                    var myMixin = {
                      mounted: function () {
                          console.log("a")
                      },
                      data:{
                        a:"b"
                      },
                      methods: {
                        hello: function () {
                           console.log(this.a)
                        }
                      }
                    }
                    var vm = new Vue({
                       el: '#test',
                       data: {
                          a:"a"
                      },
                      mixins:[myMixin],
                      mounted(){
                         console.log("b")
                      },
                      methods:{
                          hello: function () {
                            console.log(this.a)
                          }
                      }
                    })
                  //点击执行hello 输出"a"
              </textarea>
            3.extends 和mixins类似，用来方便继承或者说扩展
            4.provide / inject 类似react的context
            <textarea>
                  	var one = new Vue({
                        provide: {
                         foo:"aaaa"
                        },
                       data: {
                        a: 1
                       },
                       created(){
                        console.log("one")
                       },
                       methods:{
                            test:function(){

                            },
                            someMethod:function(){
                                console.log("someMethod")
                            }
                      },
                    })

                    var two = new Vue({
        //			   inject: ['foo'],
                       inject:{
                          foo2:"foo"
                       },
                       data: {
                        a: 1
                       },
                       parent:one,
                      created(){
                        console.log(this.foo2)// "aaaa"
                        console.log("two")
                      },
                      methods:{
                            test:function(){

                            },
                            someMethod:function(){
                                console.log("someMethod")
                            }
                      },
                    })
              </textarea>
        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">选项 / 其它</h1><div class="segment-content">
            1.name 单文件组件name默认是文件名，可以通过选项中的name改变名字
            2.delimiters 只在浏览器版本的vue有效
            3.functional 如果functional为true,返回虚拟节点使他们更容易渲染,可以加快组件渲染速度
                Vue.component('my-component', {
                functional: true,
                // Props 可选
                props: {
                // ...
                },
                // 为了弥补缺少的实例
                // 提供第二个参数作为上下文
                render: function (createElement, context) {
                // ...
                }
                })
            4.model改变默认的value和input事件
               <textarea>
                   Vue.component('my-checkbox', {
                      model: {
                        prop: 'checked',
                        event: 'change'
                      },
                      props: {
                        // this allows using the `value` prop for a different purpose
                        value: String,
                        // use `checked` as the prop which take the place of `value`
                        checked: {
                          type: Number,
                          default: 0
                        }
                      },
                    })
               </textarea>
            5.inheritAttrs 默认情况下父组件v-bind到子组件，子组件props里面没有的属性都会做为自定义属性放在html标签，子组件inheritAttrs设置为false,就可以去掉这行为，并且在子组件里面，还可以通过this.$attrs访问这些属性
            6.comments 浏览器版本才有用，用来保留模板中的注释


        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">实例属性</h1><div class="segment-content">
             1.this.$data===obj 返回true
             2.vm就是实列，实例可以是this
             3.this.$props 父组件传到子组件的属性,注意：虽然它是响应的，但是最好不要改变它
               <textarea>
                     Vue.component('blog-post', {
                        props: ['name','sex'],
                        methods:{
                           handleChangeSize(){
                               this.$emit('enlarge-text',10)
                           }
                        },
                        created:function(){
                            var that=this;
                            var i=0;
                            setInterval(function(){
                                i++
                                that.$props.name="我们的名字"+i
                            },1000)
                        },
                        template: `
                        <div class="blog-post">
                          <h3>{{name}}</h3>
                          <button v-on:click="handleChangeSize">
                            Enlarge text
                          </button>
                        </div>
                      `
                    })

                    var vm = new Vue({
                       props:["f","g"],
                       el:"#test",
                       data:{
                        a: 1,
                        b:2,
                        c:3
                       },
                       created:function(){

                       },
                       methods:{
                            test:function(){

                            }
                      },
                    })
               </textarea>
            4.this.$el 表示当前组件的根元素，这就是为啥组件中的元素必须只能只有一个根
            5.this.$options 对原始的对象处理完后的对象，主要获取自定义属性
            6.vm.$parent 当前组件的父组件
            vm.$root  当前组件树的根组件
            vm.$children 当前组件的直接子组件
            vm.$slots 可以通过插槽生成内容
              <textarea>
                  	<div id="test">
                        <blog-post :name="'mynamehhh'" :sex="'男'">
                            <template slot="one">
                                第一个标题
                            </template>
                            <template slot="two">
                                第二个标题
                            </template>
                            <template slot="three">
                                第三个标题
                            </template>
                        </blog-post>
                        <a @click="test">点击</a>
                    </div>
                  Vue.component('blog-post',{
	                props: ['name','sex'],
	                methods:{
	                },
	                created:function(){

	                },
	                mounted:function(){
					   	console.log("子组件",this.$slots)
					},
	                 render: function (createElement) {
					    var one = this.$slots.one
					    var two = this.$slots.two
					    var three = this.$slots.three
					    return createElement('div', [
					      createElement('h1', one),
					      createElement('h2', two),
					      createElement('h3', three)
					    ])
					  }
	            })
                var vm = new Vue({
                   props:["f","g"],
                   el:"#test",
                   data:{
                   },
                   mounted:function(){
                       console.log("父组件",this.$root)
                   },
                   methods:{
                        test:function(){

                        }
                  },
                })
              </textarea>
            vm.$scopedSlots  父组件获取子组件的值，然后进行逻辑处理,这时子组件没有默认插槽，所有子组件插槽，都要进行父组件逻辑处理
              <textarea>
                     <blog-post :name="'mynamehhh'" :sex="'男'">
                         <template slot-scope="slotProps2">
                            <span v-if="slotProps2.todo.isComplete">完成了</span>
                         </template>
                    </blog-post>
                    <a @click="test">点击</a>

                    Vue.component('blog-post',{
	                props: ['name','sex'],
	                data(){
	                	return {
	                		todo1:{
	                			isComplete:true,
	                			name:"one"
	                		},
	                		todo2:{
	                			isComplete:false,
	                			name:"two"
	                		},
	                		todo3:{
	                			isComplete:true,
	                			name:"three"
	                		}
	                	}
	                },
	                methods:{
	                },
	                created:function(){

	                },
	                mounted:function(){

					},
	                 template:`
	                 <div class="container">
	                    <slot v-bind:todo="todo1"> </slot>
					    <slot v-bind:todo="todo2"> </slot>
					    <slot v-bind:todo="todo3"> </slot>
					</div>
	            })

                var vm = new Vue({
                   props:["f","g"],
                   el:"#test",
                   data:{
                   },
                   mounted:function(){
                       console.log("父组件",this.$root)
                   },
                   methods:{
                      test:function(){

                      }
                   },
                })

              </textarea>
            vm.$refs 可以是dom元素 也可以是组件实例，如果是组件实例就是vue组件实例,拥有实列方法和属性, vm.$refs的值只有在mounted以及之后的钩子里可以拿到
            vm.$isServer 是否是服务端渲染
            vm.$attrs    包含了父作用域中不作为 prop 的特性绑定,也就是在子组件中调用
            vm.$listeners 父组件在子组件上绑定的事件,如果是值是函数就直接是函数，如果值是函数执行就包裹一下，
                如：ƒ ($event){myClick(222)},如果事件绑定在dom元素上，函数里面可以直接访问event，并且event===$event,与组件处理逻辑不同
                组件上绑定的事件需要emit触发，并且获取不到$event,但是如果事件加了修饰符.native就和dom一样


        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">实例方法 / 数据</h1><div class="segment-content">
            vm.$watch
                如果观察数组变化，如果数组是简单对象，不需要设置deep:true,如果数组的项是对象，需要设置deep:true
            vm.$set 同全局
            vm.$delete 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图

        </div></div>

        <div class="segment-wraper" v-pre><h1 class="segment-title">实例方法 / 事件</h1><div class="segment-content">
            vm.$on
            vm.$once 只执行一次，vm.$listenters里面还在,当时名称前加了个~,并且只能传一个参数
            vm.$off
            vm.$emit 注意可以传入多个参数 如： this.$emit("click","a","b","c")  myTest:function(a,b,c){ }
\

        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">实例方法 / 生命周期</h1><div class="segment-content">
            vm.$mount 如果组件没有挂载，在这里可以挂载,注意组件的$el是dom元素对象
               <textarea>
                    var component = new MyComponent().$mount()
				    console.log(component.$el)
					document.getElementById('app').appendChild(component.$el)
               </textarea>
            vm.$forceUpdate
                I. 未被 Vue 的响应式系统追踪的状态,可以通过$forceUpdate来显示
                II.强制重新渲染，可以修复一些父子组件不同步问题
                  <textarea>
                    <div id="test" ref="one">
                       <child></child>
                       <child></child>
                       <child></child>
                       <div>{{$children.length}}</div>
                    </div>

                      Vue.component("child", {
                            template: "<div>child</div>",
                        });

                        var vm = new Vue({
                            el:"#test",
                            data:{

                            },
                            created:function(){

                            },
                            mounted:function(){
                                this.$forceUpdate()
                            },
                            watch:{

                            },
                            methods:{
                                test:function(){

                                },
                                myClick:function(value){

                                },
                                myTest:function(a,b,c){
                                    console.log("测试",a)
                                    console.log("测试",b)
                                    console.log("测试",c)
                                }
                            },
                        })


                  </textarea>
            vm.$nextTick 在dom更新后调用回调函数，并且回调的函数的this是实列
            vm.$destroy 摧毁组件，但是组件渲染的dom元素还在
        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">指令</h1><div class="segment-content">
            v-text
               替换元素的整个文本，如果只是部分替换，请使用{{}}语法
            v-html
               内容不会编译，直接显示,并且也不会应用编译样式
            v-show
              切换元素的 display CSS 属性,可以触发动画效果，注意效果都是通过css类控制
            v-if
              销毁并重建,如果同时存在v-for和v-if 先v-for 然后元素v-if
            v-else
              else语句，注意它和v-if或者 v-else-if直接不能有元素节点
            v-else-if
              else if 语句  注意它和v-if或者 v-else-if直接不能有元素节点
            v-for 可以遍历arr,可以遍历itemObj, 当遍历对象时，val是值，key是key ,index是属性顺序
              <textarea>
                  <div v-for="(item, index) in arr">
                        {{item.name}}-{{item.sex}}
                    </div>
                    <div v-for="(val, key) in itemObj">
                        #{{val}}-{{key}}#
                    </div>
                    <div v-for="(val, key, index) in itemObj">
                        #{{val}}-{{key}}-{{index}}#
                    </div>
              </textarea>
            v-on
             1.始终使用 kebab-case 的来定义事件名
             2.有如下修饰符,注意：修饰符可以多个通过点串联
            .stop - 等价event.stopPropagation()
            .prevent  等价 event.preventDefault()。
            .capture - capture 模式。
            .self - 等价e.target。
            .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
            .native
              表示不是通过子组件触发，是直接触发,子组件没发触发，但是事件流还是正常的
            .once - 只触发一次回调。
            .left - (2.2.0) 只当点击鼠标左键时触发。 注意：貌似不能作用在子组件上
            .right - (2.2.0) 只当点击鼠标右键时触发。注意：貌似不能作用在子组件上
            .middle - (2.2.0) 只当点击鼠标中键时触发。 注意：貌似不能作用在子组件上
            .passive - (2.3.0) 以 { passive: true } 模式添加侦听器 表示事件永远不会调用 preventDefault()
            v-bind
               1.:class 用法 键值对的情况是根据值是true,还是false来,数组就是对于data中属性值,会自动和dom元素的class合并
                 <textarea>
                        <div :class="{ isRed }"></div>
                        <div :class="[classA, classB]"></div>
                        <div :class="[classA, { classB: isB, classC: isC }]"></div>
                 </textarea>
              2.:style 用法 键值对是camel格式，会自动和dom元素的style合并
              3.可以一次性绑定多个属性
                 <textarea>
                      <div v-bind="{ someProp, 'other-attr': otherAttr }">2222</div>
                 </textarea>
            4.可以绑定子组件没有指定的prop
            5.加了prop表示必须是dom属性，不是dom属性就直接忽略
                 <textarea>
                        <div v-bind:aa.prop="text"></div>
                 </textarea>
            6.camel把属性变成小驼峰格式 view-box变成viewBox
               <textarea>
                     <svg :view-box.camel="viewBox"></svg>
               </textarea>
            7.:xlink 特别，它直接加在属性上 xlink:special

            v-model
               1.只有一下控件或者组件能用v-model
                <input/> <select/>  <textarea/> components
               2.v-model拆解成如下格式
                  <textarea>
                      <custom-input
                              v-bind:value="searchText"
                              v-on:input="searchText = $event">
                      </custom-input>

                      <input v-bind:value="searchText"
                              v-on:input="searchText = $event.target.value"/>
                  </textarea>
               3.修饰符
                .lazy - 取代 input 监听 change 事件
                .number - 输入字符串转为数字 如果字符串不能转换就保持不变
                .trim - 输入首尾空格过滤
            v-pre 跳过编译
            v-cloak
                在元素上保留v-cloak 可以控制样式
            v-once 只渲染元素或者组件一次,也就是说不响应数据改变
        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">特殊特性</h1><div class="segment-content">
            key
             如果之前已经存在这个key就复用，不存在就删除,之后就新增，重新排序
            ref
              普通的 DOM 元素指向的就是 DOM 元素；子组件上,就指向这个组件,表示这个组件的实列,注意：只有在第一次渲染结束后才可以访问
            slot 用于标记往哪个具名插槽中插入子组件内容
            slot-scope 作用域插槽
            scope 除了 scope 只可以用于 <template/> 元素，其它和 slot-scope 都相同
            is
              1.<div v-bind:is="currentView"></div> //都会被组件内容替换
              2.<component v-bind:is="currentView"></component>//都会被组件内容替换
              3.主要解决浏览器对组件嵌套有要求

        </div></div>

        <div class="segment-wraper" v-pre><h1 class="segment-title">内置的组件</h1><div class="segment-content">
            component 主要和is结合使用
            transition
                name - string，用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为.fade-enter，.fade-enter-active等。默认类名为 "v"
                appear - boolean，是否在初始渲染时使用过渡。默认为 false。
                css - boolean，是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。
                type - string，指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。
                mode - string，控制离开/进入的过渡时间序列。有效的模式有 "out-in" 和 "in-out"；默认同时生效。
            transition-group
             1.Props：
                tag - string，默认为 span
                move-class - 覆盖移动过渡期间应用的 CSS 类。
                除了 mode，其他特性和 transition 相同。
             2.事件和 transition相同
              <textarea>
                    <transition-group name="list-complete" tag="p" appear>
                        <span
                                v-for="item in items"
                                v-bind:key="item"
                                class="list-complete-item">
                          {{ item }}
                        </span>
                  </transition-group>
                  var vm = new Vue({
                       props:["f","g"],
                       el:"#test",
                       data:{
                          currentView:"tr-td",
                          items: [1,2,3,4,5,6,7,8,9],
                           nextNum: 10
                       },
                       created:function(){

                       },
                       mounted:function(){


                       },
                       watch:{

                       },
                       methods:{

                       },
                    })
                  .list-complete-item {
                      transition: all 1s;
                      display: inline-block;
                      margin-right: 10px;
                    }
                    .list-complete-enter, .list-complete-leave-to
                    /* .list-complete-leave-active for below version 2.1.8 */ {
                      opacity: 0;
                      transform: translateY(30px);
                    }
                    .list-complete-leave-active {
                      position: absolute;
                    }

              </textarea>
            keep-alive
                 1.include - 字符串或正则表达式。只有匹配的组件会被缓存。
                 2.exclude - 字符串或正则表达式。任何匹配的组件都不会被缓存。
            slot
        </div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">VNode 接口</h1><div class="segment-content"></div></div>
        <div class="segment-wraper" v-pre><h1 class="segment-title">服务端渲染</h1><div class="segment-content"></div></div>

        <div class="segment-wraper" v-pre><h1>本节总结:</h1><div class="summary">
            1.过滤器
            <textarea>
                定义过滤器:
                 Vue.filter('myFirstFilter', function (value) {
                    console.log("到了过滤器")
                    return value+"过滤器"
                 })
                使用过滤器:
                 {{name | myFirstFilter}}
            </textarea>

            2.computed 里面每一个属性都是函数，如果函数体存在data中的属性，则data中的属性改变，属性值也会跟着改变,可以理解为计算属性表示要对data属性进行计算
               注意：计算属性会缓存，这个和方法不一样，方法每次都会执行

            3.如果Vue要再生产环境中原先，需要做如下配置
            <textarea>
                    resolve:{
                            extensions: ['.js', '.vue', '.json'],
                            alias: {
                                'vue': 'vue/dist/vue.min.js', //关键是这里，需要加min
                                '@': path.join(__dirname,'./src') //简化路径
                            }
                    },
              </textarea>

            4.父子组件通信
              <textarea>
                    <blog-post  v-bind:name="postItem.name" v-on:enlarge-text="postFontSize += $event"></blog-post>
                        data(){
                             return {
                                  postItem:{
                                     key:"keyValue",
                                     name:"keyName"
                                   },
                                   postFontSize: 1
                                }
                            },
                        methods:{
                            listenterChangeSize(myparam){
                                //event是监听元素，不是子组件里面的元素，
                                console.log("点击了",event,myparam)
                            },
                        }

                   //子组件
                    Vue.component('blog-post', {
                        props: ['name'],
                        methods:{
                           handleChangeSize(){
                               this.$emit('enlarge-text',10)
                           }
                        },
                        template: `
                        <div class="blog-post">
                          <h3>{{name}}</h3>
                          <button v-on:click="handleChangeSize">
                            Enlarge text
                          </button>
                        </div>
                      `
                    })
              </textarea>
            5.VUE中的data新增key,如果一开始没有这个key,则只更新一次，必须是第一个加载完成组件，10ms内赋值
            6.data中某个属性是对象，如果给这个对象新增一个key ,不会触发更新,只能通过 Vue.set(that.user, 'myName', i); 或者别名vm.$set()
            7.自定义指令
                bind：只调用一次，指令第一次绑定到元素时调用
                inserted：被绑定元素插入父节点时调用
                    //参数如下
                    // binding.name demo
                    // binding.value 自定义指令
                    // binding.oldValue undefined
                    // binding.expression message
                    // binding.arg foo //第一个
                    // binding.modifiers {a: true, b: true} //第二个、第三个
                update：所在组件的 VNode 更新时调用
                componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
                unbind：只调用一次，指令与元素解绑时调用。
                <textarea>
                    1.全局使用
                        Vue.directive('focus', {
                          // 当被绑定的元素插入到 DOM 中时……
                          inserted: function (el) {
                            // 聚焦元素
                            el.focus()
                          }
                        })
                    2.组件内使用
                        directives: {
                          focus: {
                            // 指令的定义
                            inserted: function (el) {
                              el.focus()
                            }
                          }
                        }
                    //使用
                    <input v-focus>
                </textarea>
            8.注册组件，传入一个选项对象 (自动调用 Vue.extend)
               Vue.component('my-component', { /* ... */ })
            9.实例的属性和方法都是$开头,指令都是v-开头

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
