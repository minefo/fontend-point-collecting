<template>
    <el-menu
            :default-active="defaultActive"
            :default-openeds="['0']"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="false"
            style="width: 240px;">
            <el-submenu :index="''+idx" v-for="(item,idx) in menuItems">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span :title="item.labelName">{{item.labelName}}</span>
                </template>
                <el-menu-item :index="subItem.action" v-for="(subItem,subIdx) in item.children">
                    <router-link :to="subItem.action" :title="subItem.labelName"> <i class="el-icon-setting"></i>{{subItem.labelName}}</router-link>
                </el-menu-item>
            </el-submenu>
    </el-menu>
</template>
<script>

    var  menuObj = [
           {
            "labelName": "工具汇集",
            "action": "",
            "children": [
                {
                    "labelName": "pc机操作技巧",
                    "action": "/chapter1-section1",
                    "children":[],
                },
                {
                    "labelName": "mac os操作技巧",
                    "action": "/chapter1-section2",
                    "children":[],
                },
                {
                    "labelName": "git操作",
                    "action": "/chapter1-section3",
                    "children":[],
                },
                {
                    "labelName": "http状态码",
                    "action": "/chapter1-section4",
                    "children":[],
                },
                {
                    "labelName": "commpany",
                    "action": "/chapter1-section5",
                    "children":[],
                },
                {
                    "labelName": "框架研究",
                    "action": "/chapter1-section7",
                    "children":[],
                },
                {
                    "labelName": "IIS使用",
                    "action": "/chapter1-section8",
                    "children":[],
                },
                {
                    "labelName": "chrome浏览器使用",
                    "action": "/chapter1-section9",
                    "children":[],
                },
                {
                    "labelName": "face",
                    "action": "/chapter1-section10",
                    "children":[],
                },
                {
                    "labelName": "区块链",
                    "action": "/chapter1-section11",
                    "children":[],
                },
                {
                    "labelName": "company-knowlege",
                    "action": "/chapter1-section12",
                    "children":[],
                },
                {
                    "labelName": "Electron",
                    "action": "/chapter1-section13",
                    "children":[],
                },
                {
                    "labelName": "视频制作",
                    "action": "/chapter1-section14",
                    "children":[],
                },
                {
                    "labelName": "ReactNative学习",
                    "action": "/chapter1-section15",
                    "children":[],
                },
                {
                    "labelName": "公司框架研究",
                    "action": "/chapter1-section16",
                    "children":[],
                },
                {
                    "labelName": "Python",
                    "action": "/chapter1-section17",
                    "children":[],
                },
            ]
        },
        {
            "labelName": "JAVASCRIPT",
            "action": "",
            "children": [
                {
                    "labelName": "数组",
                    "action": "/chapter2-section1",
                    "children": [],
                },
                {
                    "labelName": "原型",
                    "action": "/chapter2-section2",
                    "children": [],
                },
                {
                    "labelName": "浏览器加载网页进程",
                    "action": "/chapter2-section3",
                    "children": [],
                },
                {
                    "labelName": "正则",
                    "action": "/chapter2-section4",
                    "children": [],
                },
                {
                    "labelName": "混合开发",
                    "action": "/chapter2-section5",
                    "children": [],
                },
                {
                    "labelName": "NPM使用",
                    "action": "/chapter2-section6",
                    "children": [],
                },
                {
                    "labelName": "element组件库",
                    "action": "/chapter2-section7",
                    "children": [],
                },
                {
                    "labelName": "VUE-API",
                    "action": "/chapter2-section8",
                    "children": [],
                },
                {
                    "labelName": "VUE-教程",
                    "action": "/chapter2-section9",
                    "children": [],
                },
                {
                    "labelName": "动画",
                    "action": "/chapter2-section10",
                    "children": [],
                },
                {
                    "labelName": "ES6",
                    "action": "/chapter2-section11",
                    "children": [],
                },
                {
                    "labelName": "资料收集",
                    "action": "/chapter2-section12",
                    "children": [],
                },
                {
                    "labelName": "语法规则",
                    "action": "/chapter2-section13",
                    "children": [],
                },
                {
                    "labelName": "jquery用法",
                    "action": "/chapter2-section14",
                    "children": [],
                },
                {
                    "labelName": "react",
                    "action": "/chapter2-section15",
                    "children": [],
                }
            ]
        },
        {
            "labelName": "JAVASCRIPT高级编程第三版",
            "action": "",
            "children": [
                {
                    "labelName": "第1章 JavsScript简介",
                    "action": "/chapter3-section1",
                    "children":[],
                },
                {
                    "labelName": "第2章 在HTML中使用Javascript",
                    "action": "/chapter3-section2",
                    "children":[],
                },
                {
                    "labelName": "第3章 基本概念",
                    "action": "/chapter3-section3",
                    "children":[],
                },
                {
                    "labelName": "第4章 变量、作用域和内存问题",
                    "action": "/chapter3-section4",
                    "children":[],
                },
                {
                    "labelName": "第5章 引用类型",
                    "action": "/chapter3-section5",
                    "children":[],
                },
                {
                    "labelName": "第6章 面向对象的程序设计",
                    "action": "/chapter3-section6",
                    "children":[],
                },
                {
                    "labelName": "第7章 函数表达式",
                    "action": "/chapter3-section7",
                    "children":[],
                },
                {
                    "labelName": "第8章 BOM",
                    "action": "/chapter3-section8",
                    "children":[],
                },
                {
                    "labelName": "第9章 客户端检测",
                    "action": "/chapter3-section9",
                    "children":[],
                },
                {
                    "labelName": "第10章 DOM",
                    "action": "/chapter3-section10",
                    "children":[],
                },
                {
                    "labelName": "第11章 DOM的扩展",
                    "action": "/chapter3-section11",
                    "children":[],
                },
                {
                    "labelName": "第12章 DON2和DOM3",
                    "action": "/chapter3-section12",
                    "children":[],
                },
                {
                    "labelName": "第13章 事件",
                    "action": "/chapter3-section13",
                    "children":[],
                },
                {
                    "labelName": "第14章 表单脚本",
                    "action": "/chapter3-section14",
                    "children":[],
                },
                {
                    "labelName": "第15章 使用Canvas绘图",
                    "action": "/chapter3-section15",
                    "children":[],
                },
                {
                    "labelName": "第16章 HTML5脚本编程",
                    "action": "/chapter3-section16",
                    "children":[],
                },
                {
                    "labelName": "第17章 错误处理与调试",
                    "action": "/chapter3-section17",
                    "children":[],
                },
                {
                    "labelName": "第18章 JavaScript与XML",
                    "action": "/chapter3-section18",
                    "children":[],
                },
                {
                    "labelName": "第19章 E4X",
                    "action": "/chapter3-section19",
                    "children":[],
                },
                {
                    "labelName": "第20章 JSON",
                    "action": "/chapter3-section20",
                    "children":[],
                },
                {
                    "labelName": "第21章 Ajax与Comet",
                    "action": "/chapter3-section21",
                    "children":[],
                },
                {
                    "labelName": "第22章 高级技巧",
                    "action": "/chapter3-section22",
                    "children":[],
                },
                {
                    "labelName": "第23章 离线应用与客户端存储",
                    "action": "/chapter3-section23",
                    "children":[],
                },
                {
                    "labelName": "第24章 最佳实践",
                    "action": "/chapter3-section24",
                    "children":[],
                },
                {
                    "labelName": "第25章 新兴的API",
                    "action": "/chapter3-section25",
                    "children":[],
                }
            ]
        },
        {
            "labelName": "HTML与CSS",
            "action": "",
            "children": [
                {
                    "labelName": "CSS汇集",
                    "action": "/chapter4-section1",
                    "children":[],
                },
                {
                    "labelName": "HTML汇集",
                    "action": "/chapter4-section2",
                    "children":[],
                },
                {
                    "labelName": "face题",
                    "action": "/chapter4-section3",
                    "children":[],
                }
            ]
        },
        {
            "labelName": "C#相关",
            "action": "",
            "children": [
                {
                    "labelName": "C#",
                    "action": "/chapter5-section1",
                    "children":[],
                },
            ]
        }
    ];

    export default {
        data() {
            return {
                defaultActive:"",
                menuItems:[],
            };
        },
        mounted () {
            this.menuItems=menuObj;
            var localName = location.href.split("#/");
            if( localName[1] ){ //#/foo
                localName = "/"+localName[1];
            }
            if(this.$route && this.$route.matched.length>1){//kenley add
                localName =this.$route.matched[1].path;
            }
            setTimeout(()=>{
                this.defaultActive=localName;
            },500)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>


</style>




