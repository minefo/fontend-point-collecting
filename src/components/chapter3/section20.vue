<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">语法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">解析与序列化</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.JSON由简单值(不包括undefined)，复杂值组成({}和[])
            2.复杂值里面的属性值或者数组项可以是简单值或者复杂值（{}和[]）
            3.JSON引号必须是双引号
            4.对象({})属性必须加双引号
            5.同一个对象（{}），不应该有相同的属性名
            6.解析空字符串JSON.parse("\"\""); ie8+
            //老版本浏览器JSON.parse其实是通过eval来进行的,为啥要加括号，是因为语句块可以，游离对象不行,当时对象求值可以
            <textarea>
                  var b='{\"name\":\"陈\",\"age\":22}'
                 var obj=eval("("+b+")")
                 console.log(obj.name)
             7.JSON.stringify
               I.只序列对象自身可以枚举的属性，但是不包括函数
                 <textarea>
                    var objProtoType={
                       "name":"kenley"
                    }

                    var obj=Object.create(objProtoType,{
                      'property1': {
                         value: 42,
                        writable: true,
                        enumerable: true,
                        configurable: true
                      },
                      'property2': {
                         value: 43,
                        writable: true,
                        enumerable: false,
                        configurable: true
                      }
                    })
                    console.log(JSON.stringify(obj)) // "{"property1":42}"
                 </textarea>
                 II.第二个参数是过滤属性，它是匹配，先外层然后内层，属性可以复用
                  <textarea>
                      var obj={
                           name:"chen",
                           itemName2:"c",
                           hobby:{
                              itemName:"a",
                              itemName2:"b",
                           }
                      }
                      console.log(JSON.stringify(obj,["hobby","itemName2"]))
                  </textarea>
                 III.第二个参数是函数的情况下，返回的值就是属性值，返回undefined表示丢弃该属性,注意第一次调用函数key是空，值为整个对象
                  <textarea>
                        var obj={
                           name:"chen",
                           itemName2:"c",
                           hobby:{
                              itemName:"a",
                              itemName2:"b",
                           }
                       }

                      var str=JSON.stringify(obj,function(key,value){
                            if(value===obj){
                                return value
                            }
                            else{
                                if(key==="itemName2"){
                                      return value+"哈哈"
                                }
                                else{
                                    return value;
                                }
                            }
                      })
                      console.log(str)
                      //"{"name":"chen","itemName2":"c哈哈","hobby":{"itemName":"a","itemName2":"b哈哈"}}"
                  </textarea>
                 VI.如果对象有toJSON方法就调用它,然后在把toJSON返回值做为JSON.stringify第二个参数中的value
             8.JSON.parse
               I.如果字符串中有undefined就报错
               II.第二个参数可以用来操作,不过它最后一个key是空字符串，并且值是最终对象，返回undefined表示丢弃该属性
                 <textarea>
                        var jsonStr='{"name":"chen","age":"22"}'
                        var jsonObj=JSON.parse(jsonStr,function(key,value){
                             console.log(key)
                             //console.log(value)
                             if(key==="age"){
                                return 333;
                             }
                             else if(key===""){
                                console.log(JSON.stringify(value))
                                return value
                             }
                             else {
                                 return value;
                             }
                        })
                        console.log(JSON.stringify(jsonObj))
               </textarea>
               III.JSON.parse 可以解析的 \"\"  "null"等于null "[]"等于[]  JSON.parse("-1")等于-1  JSON.parse("undefined")会报错
                VI.JSON.parse生成是对象，对象的key是没有顺序的
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
