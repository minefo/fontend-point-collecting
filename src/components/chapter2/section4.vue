<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">空白符</h1><div class="segment-content">
            空白符包括空格、制表符(\t水平制表符就是8个空格浏览器也支持，\v垂直制表符)、换页符(\f)、换行符(\r回车 \n换行(浏览器支持))和其他 Unicode 空格。
            等价于 [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​ \u3000]
            后面的unicode编码都是各种空格
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">各元字符讲解</h1><div class="segment-content">
            1.\0 匹配nul字符(以前这个字符表示结束),注意\0不能跟着其他数字，因为8进制转义序列就是通过反斜杠加上多位数字
               <textarea>
                    	var reg=/\15/
                        var testedStr="\15"
                        var arr=testedStr.replace(reg,"我");
                        console.log(arr)//"我"

                    	var reg=/\156/
                        var testedStr="\156"
                        var arr=reg.exec(testedStr);
                        console.log(arr.toString())//n 因为n的8进制为156
                </textarea>
            2.\cM(不区分大小写)匹配控制符
              <textarea>
                   		var reg=/\cm/
                        var testedStr="\u000D"
                        console.log(reg.test(testedStr))
                        //true
               </textarea>
            3.\w只匹配数字、字母、下划线
            4.\n(当n是数字时)是指子捕获，从左侧起从1开始
            5.\b 匹配字的边界 注意边界只能由（字母，十进制数字和下划线字符）形成
            <textarea>
                var testedStr="ar _我ac们"
                var reg=/\b_我a\B/
                var arr=reg.exec(testedStr);
                console.log(arr)//_我a
            </textarea>
            6.*和+都是贪婪模式，但是加上?就是非贪婪模式，也就是最少匹配,这些量词只能作用在最近一个规则上，如果想作用多个规则又不被记住，就是使用?:
            <textarea>
                var testedStr="2_2_2_ abc"
                var reg=/(?:\d_)+?/
                var arr=reg.exec(testedStr);
                console.log(arr)//2_

                var testedStr="2_2_2_ abc"
                var reg=/(?:\d_)*?/
                var arr=reg.exec(testedStr);
                console.log(arr)//""
            </textarea>
            7.?放在扣号里面有3种情况
               I.(?:) 非捕获扣号，在整个结果里面会有扣号里面匹配的内容，但是在
               II.(?=)正向肯定,它前面必须有其他规则并且后面只能跟正向肯定或者正向否定
               II.(?!)正向否定,它前面必须有其他规则并且后面只能跟正向肯定或者正向否定
            8.|或则匹配
             <textarea>
                var testedStr="我a你"
                var reg=/我(?:a|b|c|d)你/
                var arr=reg.exec(testedStr);
                console.log(arr)//我a你
             </textarea>
            9.{n}表示前面必须匹配n次,如果n是0则忽略,注意{n,}表示必须匹配n次以上
            10.{n,m}至少n次，最多m次 如果m是零则报错,如果m和n都是0则忽略,如果m等于n则等价于{n}
            11.（小数点.）匹配除换行符之外的任何单个字符



        </div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.域名组成 由数字、字母以及"-"（杠）组成，"-"不能用作开头和结尾，长度不能超过63个字符
            2.百度验证邮箱  /^[0-9a-zA-Z\.\_-]+@([0-9a-zA-Z-]+\.)+[a-z]{2,4}$/
            3.自己写验证
                //a_22.com  wfewefw@vip.qq.com
                var reg=/^\S+@([a-z0-9]+(-+[a-z0-9]+)?\.)+[a-z]+$/
                var testedStr="wfewefw@vip.qq.com"
                console.log(reg.test(testedStr))
            4.验证手机号码 /\d{11}/
            5.验证身份证 /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
        </div>
        </div>

        <div class="segment-wraper"><h1>本节总结2:</h1><div class="summary">
            1.标识符m是用来匹配^$不是字符串的开始和结束而是\r或则\r或则\r\n 注意换行符也是占用一个长度的
              <textarea>
                    var testedStr="eabce\recde\rewfwe"
                    var reg=/^e\w*e$/mg
                    var arr=reg.exec(testedStr);
                    arr=reg.exec(testedStr);
                    arr=reg.exec(testedStr);
                    console.log(arr)//ewfwe
              </textarea>
            2.关于lastIndex 被设置为紧随最近一次成功匹配的下一个位置(位置从0开始,) ie9+
                 I.lastIndex被设置为大于字符串的长度，匹配返回null，lastIndex被设置为0。
                 II.lastIndex被设置为等于字符串的长度，如果正则表达式能匹配空字符串，则lastIndex一直是字符串长度，并且exec一直返回[""],否则返回null,lastIndex被设置为0
                 III.如果lastIndex是负数，则返回null,并且lastIndex被设置为0
                 VI.只要返回null,lastIndex就被设置为0
            3.如果没有g标识符，lastIndex永远为0
            4.i标识符忽略大小写包括模式里面和字符串里面
            5.需要转义的字符 {([^\?|*+.$])} 但是放在中括号里只有]需要转义,其他保持原意
            6..不匹配换行符\r或则\n,所以如果需要匹配所有字符可以使用[^]可以理解为什么都不匹配的相反就是什么都匹配包括换行
                注意要想匹配退格符只能把它丢到中扣号里[\b]
               <textarea>
                  var str="aa我Aa\rb";
                  var reg=/a\.b/mgi
                  var arr=reg.exec(str)
                  console.log(arr)
                  console.log(reg.lastIndex)
                  //"null"
                  //"0"
               </textarea>
            7.通过RegExp实列化正则，第一个参数是正则主体部分(直接放入字面量正则主体部分就行,需要对反斜杠进行转义, 如\\要变成\\\\)，第二个是正则标识符
            8.exec返回的数组包含index(注意它和lastIndex区别，index表示匹配的子串在原字符串的起始位置从0开始)和input(原字符串)
            9.ie9+ 字面量创建的正则和通过RegExp创建的正则对象行为都是一样,每次重新来，正则对象属性都重置
            10.RegExp的实列属性只和正则有关，并且source返回是字面量形式的正则主体,因为它已经是字符串了
            11.RegExp静态属性，取值是最近匹配成功的(包括exec和test),如果没有一次匹配成功，就都返回空，包括input,可以理解为没有成功一次，就不没有更新RegExp
               <textarea>
                    var str="a.bddda.beeea.b"
                    var reg=/(a)\.b/mig
                    var arr=reg.exec(str)
                    arr=reg.exec(str)
                    console.log("input:"+RegExp.input) //原始字符串
                    console.log("lastMatch:"+RegExp.lastMatch) //最近匹配成功的子串
                    console.log("lastParen:"+RegExp.lastParen) //最近匹配的捕获组
                    console.log("leftContext:"+RegExp.leftContext) //
                    console.log("rightContext:"+RegExp.rightContext)
                    //"input:a.bddda.beeea.b"
                    //"lastMatch:a.b"
                    //"lastParen:a"
                    //"leftContext:a.bddd"
                    //"rightContext:eeea.b"
               </textarea>
            12.标识符y表示只匹配当前位置(lastIndex)开始，只有部分浏览器支持
               <textarea>
                    var str="我对错对对对对好对"
                    var reg=/对/gy
                    reg.lastIndex=6
                    var arr=reg.exec(str)
                    console.log(arr)
                    console.log(reg.lastIndex)
                    //对
                    //7
               </textarea>
            13.各种进制字符转义序列
            \nnn	任意八进制值比如 \156 表示字符n
            \xnn	任意十六进制值比如 \x6e 表示字符n
            \unnnn	任意 Unicode比如 \u000D 表示ctrl+m
            14.各种进制字面量
              I.十六进制  0x11 表示数值17 如果十六进制表示不是数值就报错
              II.二进制   0b11 表示数值3 如果二进制表示不是数值就报错
              III.八进制  0o11 表示数值9 如果8进制表示不是数值就报错
            15.如果需要\u{hhhhh}匹配字符就需要带上u标识符
               <textarea>
                   	var testedStr="𠮷"
                    var reg=/\u{20BB7}/u
                    var arr=reg.exec(testedStr);
                    console.log(arr)//"𠮷"
               </textarea>
            16.正则表达式可以被用于RegExp的exec和test方法以及 String的match、replace、search和split方法,也就是总共6个地方会用到
               I.search返回索引从0开始，没有找到返回-1 ie已经其他浏览器
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