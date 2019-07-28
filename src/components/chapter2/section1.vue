<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">实例化数组对象</h1>
            <div class="segment-content">
                1,实例化一个数组，长度为20
                 <pre class="code-area">
                     var  arr=[10]
                 </pre>
            </div>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">属性</h1>
            <div class="segment-content">
                 1.Array.length
            </div>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">实列方法</h1>
            <div class="segment-content">
concat() 返回新数组
copyWithin()：(备注手机端没实现) 原数组已改变，返回改变后的原数组
<pre>
    var arr=[0,1,2,3]
    var newarr=arr.copyWithin(0, 1, 3);
    console.log([0,1,2,3])
    console.log(newarr) //可以理解位先1替换0,2 替换1，2保持不变
</pre>


entries(): 返回迭代器对象
<pre>
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value);
// [0, "a"]
console.log(iterator.next().value);
// [1, "b"]
console.log(iterator.next().value);
// [2, "c"]


//例二
var arr = ['a','b','c'];
var iterator = arr.entries();
var item=null;
do{
    item=iterator.next()
    console.log("这里:"+JSON.stringify(item))
} while(!item.done)

<!--这里:{"value":[0,"a"],"done":false}-->
<!--这里:{"value":[1,"b"],"done":false}-->
<!--这里:{"value":[2,"c"],"done":false}-->
<!--这里:{"done":true}-->
 </pre>


every(): 返回布尔值
测试数组，回调有返回false,every方法就返回false,回调返回false,哪回调就终止执行
fill():
<pre>
var arr=[1,2,3]
arr.fill(4, 1, 2);
console.log(arr)//[1, 4, 3]
</pre>
filter(): 返回回调函数返回true的项,新数组
 filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

find() 返回回调函数返回true的第一项,不一定是数组
 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

findIndex() 返回回调函数返回true的第一项的索引
 findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。(是指回调函数返回true)

forEach() 返回 undefined
 forEach() 方法对数组的每个元素执行一次提供的函数 (类似for循环,没有返回值)

includes() 返回布尔值
 includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false （直接是数组项）

indexOf() 返回索引
<pre class="code-area">
    let a = [["a"], 9, 7, 8, 9];
console.log(a.indexOf(["a"])) //-1
</pre>

join() 返回字符串

lastIndexOf() 返回索引
map()  返回回调函数返回的值得新数组,<span class="red">注意是每一项</span>
pop()  返回由移除的项组成的新数组
push() 返回数组长度
reduce() 返回累计值
<pre class="code-area">
var arr=["a","b","c","d"]
var str= arr.reduce(function(one,two){
    return one+two
},"我是开头")
console.log("str:",str) //str: 我是开头abcd

var arr=["a","b","c","d"]
var str= arr.reduce(function(one,two){
    return one+two
})
console.log("str:",str) //str: abcd
</pre>
reduceRight() 返回累计值
reverse() 原数组已改变，返回改变后的原数组
shift()  返回由移除的项组成的新数组
slice()  返回由浅拷贝的项组成的新数组
some()   返回布尔值
<pre>
function isBigEnough(element, index, array) {
console.log("element:"+element)
return (element >= 10);
}
var passed = [2, 5, 12, 1, 13].some(isBigEnough);
console.log(passed)//true (只要回调返回真值，就终止回调)
</pre>
sort()  原数组已改变，返回改变后的原数组
splice() 返回由移除的项组成的新数组 删除一项 splice(index,1)
toLocaleString() 返回字符串
toString() 返回字符串
unshift() 返回数组长度

            </div>
        </div>
        <div class="segment-wraper">
            <h1>本节总结:</h1>
<div class="summary">


1.如果设置数组某个值的索引超过了数组现有项数,数组的长度会增加 <br/>
 <pre class="code-area">
 var arr=['5']
 console.log("changeBefore:",arr.length) //changeBefore: 1
 arr[10]='a'
 console.log("changeAfter:",arr.length)  //changeAfter: 11
 console.log(JSON.stringify(arr))
</pre>
2.判断数组对象
<pre>
    I.html:<iframe _src="array_inner.html" id="arrayInner" _onload="test()"></iframe>
    array_inner.html-js:
    window.arr=new Array('one','two','three','four')
    当前js:
    function test(){
	   var contentWindow=document.getElementById("arrayInner").contentWindow
       console.log(contentWindow.arr instanceof Array) //false
    }
</pre>

<pre  class="code-area">
   II.Array.isArray(arr) //IE9+支持
</pre>

3.join、 toLocaleString()、toString()、 valueof(),null或undefined转换为空
4.栈方法，用push和pop
5.反向队列时，注意unshift方法
<pre class="code-area">
var arr=[];
arr.unshift("a","b","c")
arr.unshift("d","e")
var item1=arr.pop()
var item2=arr.pop()
var item3=arr.pop()
var item4=arr.pop()
console.log("item1:"+item1) //c
console.log("item2:"+item2) //b
console.log("item3:"+item3)  //a
console.log("item4:"+item4) //e
</pre>
6.sort排序
//直接在原来数组上排序,需要一直返回值，零分界，大于零和小于零
<pre  class="code-area">
var arr=[11,12,8,9,10]
arr.sort(function(oneItem,twoItem){ //升序 前表数组开始，后面表示数组结束
    return oneItem-twoItem
})
console.log(newArr)
</pre>

<pre v-pre  class="code-area">
//下面是冒泡排序(每次把最大的推到数组末尾)
<textarea class="complex-code">
    var arr=[10,9,4,8]
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
</textarea>
7.Array.from(arrayLike[, mapFn[, thisArg]]) 注意：先转换数组，然后调用回调函数，回调函数类似数组map方法
    arrayLike 想要转换成数组的伪数组对象或可迭代对象。
    mapFn (可选参数)
    thisArg 可选参数，执行回调函数this 对象。

</pre>


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
