/**
 * Created by chenxuhua on 2017/9/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
import PageCommon from '@/components/common/PageCommon'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name:"首页",
            component : PageCommon,
            children: [
                {
                    path: '/index',
                    component: function (resolve) {
                        require(['@/components/index'], resolve);
                    }
                }
             ]
        },
        {
            path: '/',
            name:"工具汇集",
            component : PageCommon,
            children: [
                {
                    path: '/chapter1-section1',
                    name:"pc机操作技巧",
                    component: function (resolve) {
                        require(['@/components/chapter1/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter1-section2',
                    name:"mac os操作技巧",
                    component: function (resolve) {
                        require(['@/components/chapter1/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter1-section3',
                    name:"git操作",
                    component: function (resolve) {
                        require(['@/components/chapter1/section3'], resolve);
                    },
                },//第三节
                {
                    path: '/chapter1-section4',
                    name:"http状态码",
                    component: function (resolve) {
                        require(['@/components/chapter1/section4'], resolve);
                    },
                },//第四节
                // {
                //     path: '/chapter1-section5',
                //     name:"company",
                //     component: function (resolve) {
                //         require(['@/components/chapter1/section5'], resolve);
                //     },
                // },//第五节
                {
                    path: '/chapter1-section6',
                    name:"company",
                    component: function (resolve) {
                        require(['@/components/chapter1/section6'], resolve);
                    },
                },//第六节
                {
                    path: '/chapter1-section7',
                    name:"company",
                    component: function (resolve) {
                        require(['@/components/chapter1/section7'], resolve);
                    },
                },//第七节
                {
                    path: '/chapter1-section8',
                    name:"IIS使用",
                    component: function (resolve) {
                        require(['@/components/chapter1/section8'], resolve);
                    },
                },//第八节
                {
                    path: '/chapter1-section9',
                    name:"chrome浏览器使用",
                    component: function (resolve) {
                        require(['@/components/chapter1/section9'], resolve);
                    },
                },//第九节
                {
                    path: '/chapter1-section10',
                    name:"面试题",
                    component: function (resolve) {
                        require(['@/components/chapter1/section10'], resolve);
                    },
                },//第10节
                {
                    path: '/chapter1-section11',
                    name:"区块链",
                    component: function (resolve) {
                        require(['@/components/chapter1/section11'], resolve);
                    },
                },//第11节

            ]
        }, //第一章
        {
            path: '/',
            name:"JAVASCRIPT",
            component : PageCommon,
            children: [
                {
                    path: '/chapter2-section1',
                    name:"数组",
                    component: function (resolve) {
                        require(['@/components/chapter2/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter2-section2',
                    name:"原型",
                    component: function (resolve) {
                        require(['@/components/chapter2/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter2-section4',
                    name:"语法符号",
                    component: function (resolve) {
                        require(['@/components/chapter2/section4'], resolve);
                    },
                },//第四节
                {
                    path: '/chapter2-section3',
                    name:"浏览器加载网页进程",
                    component: function (resolve) {
                        require(['@/components/chapter2/section3'], resolve);
                    },
                },//第三节
                {
                    path: '/chapter2-section4',
                    name:"正则",
                    component: function (resolve) {
                        require(['@/components/chapter2/section4'], resolve);
                    },
                },//第四节正则
                {
                    path: '/chapter2-section5',
                    name:"混合开发",
                    component: function (resolve) {
                        require(['@/components/chapter2/section5'], resolve);
                    },
                },//第五节混合开发
                {
                    path: '/chapter2-section6',
                    name:"NPM使用",
                    component: function (resolve) {
                        require(['@/components/chapter2/section6'], resolve);
                    },
                },//第6节NPM使用
                {
                    path: '/chapter2-section7',
                    name:"element组件库",
                    component: function (resolve) {
                        require(['@/components/chapter2/section7'], resolve);
                    },
                },//第7节element组件库
                {
                    path: '/chapter2-section8',
                    name:"VUE-API",
                    component: function (resolve) {
                        require(['@/components/chapter2/section8'], resolve);
                    },
                },//第8节VUE-API
                {
                    path: '/chapter2-section9',
                    name:"VUE-教程",
                    component: function (resolve) {
                        require(['@/components/chapter2/section9'], resolve);
                    },
                },//第9节VUE-教程
                {
                    path: '/chapter2-section10',
                    name:"动画",
                    component: function (resolve) {
                        require(['@/components/chapter2/section10'], resolve);
                    },
                },//第10节动画
                {
                    path: '/chapter2-section11',
                    name:"ES6",
                    component: function (resolve) {
                        require(['@/components/chapter2/section11'], resolve);
                    },
                },//第11节ES6
                {
                    path: '/chapter2-section12',
                    name:"资料收集",
                    component: function (resolve) {
                        require(['@/components/chapter2/section12'], resolve);
                    },
                },//第12节ES6
                {
                    path: '/chapter2-section13',
                    name:"语法规则",
                    component: function (resolve) {
                        require(['@/components/chapter2/section13'], resolve);
                    },
                },//第13节ES6
                {
                    path: '/chapter2-section14',
                    name:"jQuery",
                    component: function (resolve) {
                        require(['@/components/chapter2/section14'], resolve);
                    },
                },//第14节jQuery

            ]
        }, //JAVASCRIPT
        {
            path: '/',
            name:"JAVASCRIPT高级编程第三版",
            component : PageCommon,
            children: [
                {
                    path: '/chapter3-section1',
                    name:"JavsScript简介",
                    component: function (resolve) {
                        require(['@/components/chapter3/section1'], resolve);
                    },
                },//第1章
                {
                    path: '/chapter3-section2',
                    name:"在HTML中使用Javascript",
                    component: function (resolve) {
                        require(['@/components/chapter3/section2'], resolve);
                    },
                },//第2章
                {
                    path: '/chapter3-section3',
                    name:"基本概念",
                    component: function (resolve) {
                        require(['@/components/chapter3/section3'], resolve);
                    },
                },//第3章
                {
                    path: '/chapter3-section4',
                    name:"变量、作用域和内存问题",
                    component: function (resolve) {
                        require(['@/components/chapter3/section4'], resolve);
                    },
                },//第4章
                {
                    path: '/chapter3-section5',
                    name:"引用类型",
                    component: function (resolve) {
                        require(['@/components/chapter3/section5'], resolve);
                    },
                },//第5章
                {
                    path: '/chapter3-section6',
                    name:"面向对象的程序设计",
                    component: function (resolve) {
                        require(['@/components/chapter3/section6'], resolve);
                    },
                },//第6章
                {
                    path: '/chapter3-section7',
                    name:"函数表达式",
                    component: function (resolve) {
                        require(['@/components/chapter3/section7'], resolve);
                    },
                },//第7章
                {
                    path: '/chapter3-section8',
                    name:"BOM",
                    component: function (resolve) {
                        require(['@/components/chapter3/section8'], resolve);
                    },
                },//第8章
                {
                    path: '/chapter3-section9',
                    name:"客户端检测",
                    component: function (resolve) {
                        require(['@/components/chapter3/section9'], resolve);
                    },
                },//第9章
                {
                    path: '/chapter3-section10',
                    name:"DOM",
                    component: function (resolve) {
                        require(['@/components/chapter3/section10'], resolve);
                    },
                },//第10章
                {
                    path: '/chapter3-section11',
                    name:"DOM的扩展",
                    component: function (resolve) {
                        require(['@/components/chapter3/section11'], resolve);
                    },
                },//第11章
                {
                    path: '/chapter3-section12',
                    name:"DON2和DOM3",
                    component: function (resolve) {
                        require(['@/components/chapter3/section12'], resolve);
                    },
                },//第12章
                {
                    path: '/chapter3-section13',
                    name:"事件",
                    component: function (resolve) {
                        require(['@/components/chapter3/section13'], resolve);
                    },
                },//第13章
                {
                    path: '/chapter3-section14',
                    name:"表单脚本",
                    component: function (resolve) {
                        require(['@/components/chapter3/section14'], resolve);
                    },
                },//第14章
                {
                    path: '/chapter3-section15',
                    name:"使用Canvas绘图",
                    component: function (resolve) {
                        require(['@/components/chapter3/section15'], resolve);
                    },
                },//第15章
                {
                    path: '/chapter3-section16',
                    name:"HTML5脚本编程",
                    component: function (resolve) {
                        require(['@/components/chapter3/section16'], resolve);
                    },
                },//第16章
                {
                    path: '/chapter3-section17',
                    name:"错误处理与调试",
                    component: function (resolve) {
                        require(['@/components/chapter3/section17'], resolve);
                    },
                },//第17章
                {
                    path: '/chapter3-section18',
                    name:"JavaScript与XML",
                    component: function (resolve) {
                        require(['@/components/chapter3/section18'], resolve);
                    },
                },//第18章
                {
                    path: '/chapter3-section19',
                    name:"E4X",
                    component: function (resolve) {
                        require(['@/components/chapter3/section19'], resolve);
                    },
                },//第19章
                {
                    path: '/chapter3-section20',
                    name:"JSON",
                    component: function (resolve) {
                        require(['@/components/chapter3/section20'], resolve);
                    },
                },//第20章
                {
                    path: '/chapter3-section21',
                    name:"Ajax与Comet",
                    component: function (resolve) {
                        require(['@/components/chapter3/section21'], resolve);
                    },
                },//第21章
                {
                    path: '/chapter3-section22',
                    name:"高级技巧",
                    component: function (resolve) {
                        require(['@/components/chapter3/section22'], resolve);
                    },
                },//第22章
                {
                    path: '/chapter3-section23',
                    name:"离线应用与客户端存储",
                    component: function (resolve) {
                        require(['@/components/chapter3/section23'], resolve);
                    },
                },//第23章
                {
                    path: '/chapter3-section24',
                    name:"最佳实践",
                    component: function (resolve) {
                        require(['@/components/chapter3/section24'], resolve);
                    },
                },//第24章
                {
                    path: '/chapter3-section25',
                    name:"新兴的API",
                    component: function (resolve) {
                        require(['@/components/chapter3/section25'], resolve);
                    },
                },//第25章
            ]
        }, //JAVASCRIPT
        {
            path: '/',
            name:"HTML与CSS",
            component : PageCommon,
            children: [
                {
                    path: '/chapter4-section1',
                    name:"CSS汇集",
                    component: function (resolve) {
                        require(['@/components/chapter4/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter4-section2',
                    name:"HTML汇集",
                    component: function (resolve) {
                        require(['@/components/chapter4/section2'], resolve);
                    },
                },//第二节
            ]
        }, //HTML与CSS
        {
            path: '/',
            name:"C#相关",
            component : PageCommon,
            children: [
                {
                    path: '/chapter5-section1',
                    name:"C#",
                    component: function (resolve) {
                        require(['@/components/chapter5/section1'], resolve);
                    },
                },//第一节
            ]
        }, //
    ]
})



