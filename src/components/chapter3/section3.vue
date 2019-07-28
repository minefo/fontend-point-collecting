<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">语法</h1><div class="segment-content">
            1.标识符 开头必须是下划线，字母，美元符号,其他符号就可以用数字,也就是标识符开头不能用数字,经过测试中文也可以做标识符,所以只要不是数字开头或者保留字就行
            2.标识符命名
                I、小驼峰式命名法
                   首单词首字母小写，其他首字母大写
                II、大驼峰式命名法（upper camel case）：
                   所有单词首字母大写
            3.严格模式 每个块里面的严格模式是独立的 ie10+以及其他浏览器
                1.变量必须用var声明
                2. undefined和Infinity 不能赋值，writable: false，Object.preventExtensions(fixed)和只有set的属性不能赋值
                var obj2 = {
                get x() {
                return this.name;
                },
                set x(name) {
                this.name=name;
                },
                };

                3.不可删除的属性，不能删除

                4.对象不能有重复属性

                5.不要使用二进制

                6.禁止在原始值上设置属性 如：false.true = '';
                7.不能用with
                8.eval里面的变量不会定义到外面
                9.不能删除变量
                10.标识符不能用eval和arguments
                11.不能用arguments.callee
                12.this不自动绑定全局，也就是什么调就是什么
                13.不能访问caller和arguments（是指func.caller和func.arguments）
                14.只能在函数里面嵌入函数

                //精简版
                1.变量必须用var声明
                2.不能改变的属性就不能改变
                3.对象不能有重复属性
                4.禁止使用八进制语法 (var a=010)//数字前置0表示8进制
                5.不能用with
                6.eval里面的变量不会定义到外面
                7.不能删除var定义的变量
                8.标识符不能用eval和arguments
                9.不能用arguments.callee(arguments.callee就是函数自身)
                10.this不自动绑定全局，也就是什么调就是什么
                11.不能访问func.caller和func.arguments(是指不能通过函数名.arguments访问，直接访问arguments是可以的,func.caller表示当前函数在哪个函数里面执行)
                12.只能在函数里面嵌入函数
                13.函数不能有重复参数


            4.script报错，不影响其他块

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">关键字和保留字</h1><div class="segment-content">
            5.已经有特定用途的关键字
            break        do                  instanceof             typeof
            case         else                new                    var
            catch        finally             return                 void
            continue     for                 switch                 while
            debugger     function            this                   with
            default      if                  throw
            delete       in                  try
            //void void表示立即执行后面的表达式，然后返回undefined,不管函数里面返回什么，都返回undefined
            //javascript:表示伪协议，类似http:,如果href返回undefined就什么都不做
            //in 表示对象或者对象原型链上是否包含该属性
            function Test(){
            }
            Test.prototype={
            education:"大学"
            }
            var t=new Test();
            console.log("education" in t)
            6.将来有特定用途的保留字
            abstract   enum                  int                  short
            boolean    export                interface            static
            byte       extends               long                 super
            char       final                 native               synchronized
            class      float                 package              throws
            const      goto                  private              transient
            double     implements            protected            volatile
            import                public
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">变量</h1><div class="segment-content">
            1.解释作用域 <a href="https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c" target="_blank">去查看</a>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">数据类型</h1><div class="segment-content">
            1.Undefined Null Boolean Number String （简单数据类型）
            2.Object (复杂数据类型)
            //1.Undefined Null Boolean Number String （简单数据类型）
            //2.Object (复杂数据类型)
            console.log(typeof undefined)
            console.log(typeof null)
            console.log(typeof true)
            console.log(typeof 1)
            console.log(typeof "")
            console.log(typeof function(){})
            console.log(typeof {})

            //"undefined"
            //"object"
            //"boolean"
            //"number"
            //"string"
            //"function"
            //"object"
            //总结 typeof 能返回undefined string object(null,object) boolean number function(特别)
            3.5个转为成false值是
            0 (zero)
            "" (empty string)
            null
            undefined
            NaN (Not A Number)
            4.undefined和null都是字面类型，都占用内存，null可以指原型链末端
            5.NaN是个奇葩，它任何操作都返回NaN，并且自身还不相等
            6.Number用法 Number("23234a")=>NaN
              1.undefined(NaN) null(0) true(0) false(0) number(number)
              2.string 合法的数据格式就可以成功转换,忽略前导零,空字符串转换为0，其他都是NaN
              3.对象就先调用对象的valueOf,然后按照上面来
            7.parseInt转换空字符串返回NaN  parseInt("23234a") =>23234
            8.string类型 字符串一旦创建就不能变，都是返回新串,每个值都有toString(),除了null和undefined，String()可以把null和undefined转换成"null"和"undefined",要想把其他值转换为字符串通过+""
              I.属性
                1.length
              II.静态方法
                1.String.fromCharCode() //支持有限的字符 根据编码创建字符串 大部分浏览器支持
                2.String.fromCodePoint() //支持更多的字符 根据编码创建字符串 少部分浏览器支持
                3.String.raw() //标签函数，就是模板标签功能

              III原型的方法


                String.prototype.charAt() //用索引取字符
                String.prototype.charCodeAt() //返回有限的当前索引字符编码
                String.prototype.codePointAt()//返回更多的当前索引字符编码
                String.prototype.concat() // 链接字符，强烈建议用+链接，性能更好
                String.prototype.endsWith() //是否以某个子串结尾，可以指定结尾处，注意是从1开始
                String.prototype.startsWith() //和endsWith一样,第二个参数可以指定从哪里开始
                String.prototype.includes() //是否存在子串，从指定位置开始，默认是0
                String.prototype.indexOf() //可以指定查找位置，默认是0，如果查找位置小于0，就等于0，如果查找位置大于等于length,返回-1,子串是空的情况,正常位置就返回0,位置大于等于length情况下,返回length
                String.prototype.lastIndexOf() //负值表示从0往右，大于等于length,表示查找整个字符串
                String.prototype.match()  //带不带g区别很大，不带g和reg.exec()没有什么区别,带了g表示重复对字符串进行匹配，返回匹配所有的子串
                        var str="好不好你好好不好ww好不好dff好不好";
                        var reg=/(好)不(好)/g;
                        var exeArr=str.match(reg)
                        console.log("exeArr.index:"+exeArr.index)
                        console.log("exeArr.input:"+exeArr.input)
                        console.log(JSON.stringify(exeArr))
                        //"exeArr.index:undefined"
                        //"exeArr.input:undefined"
                        //"["好不好","好不好","好不好","好不好"]"

            String.prototype.normalize() //指定编码，进行编码
            String.prototype.padEnd() //第一个参数是长度，第一个参数是字符,如字符太长就截取
            String.prototype.padStart() //一样，只是开始位置
            String.prototype.repeat() // 字符长度有最大限制，重复次数自身就是1，浏览器支持的字符串长度最大4千万左右
            String.prototype.replace() //
                  //如果第二个参数是函数，则函数的参数是 match(必有), p1...(动态) offset(必有 匹配成功第一个字符在字符串的位置), str(必有 原始字符串)
                  //第一个参数是字符串或者正则不带g,则只匹配替换一次
                  //替换子串里面可以插入如下内容
                  //$$	插入一个 "$"。
                    $&	插入匹配的子串。
                    $`	插入当前匹配的子串左边的内容。
                    $'	插入当前匹配的子串右边的内容。
                    $n  //只有第一个参数是正则才有效，否则做一般字符处理
                  1.如果第一个参数是正则且带g,则替换所有
            String.prototype.search() //和indexOf差不多，只不过它用正则
            String.prototype.slice() //从指定位置开始到指定结束位置(不包含结束位置) 如果有负值就用length加上它
            String.prototype.split() //只有在字符串和拆分字符都是空，则返回空数组,如果是正则，g没有用，如果正则里面包含括号，则括号里面的内容也在返回数组里面
            String.prototype.substr() //如果start是负数，则length+start做开始位置，如果length+start还是负数则从0开始,如果length大于字符串长度，则截取到字符串末尾，如果length是负数或则0则返回空串
            String.prototype.substring() // start和end 相等就返回空字符串，如果start大于end则两个值互换,start和end为负数或则NaN则当做0,如果start和end大于length则当做length
            String.prototype.toLowerCase() //小写
            String.prototype.toString()
            String.prototype.toUpperCase() //大写
            String.prototype.trim()
            String.prototype.trimLeft()
            String.prototype.trimRight()
            String.prototype.valueOf()
            9.Object //属性值必须是合法的javascript标识符,也就是不能以数字开头，但是[]可以接受任务字符(内容其实都是转换为字符串)
            I.属性
              1.自身属性没有
              2.继承属性 Object.prototype.__proto__ //类似__proto__:this[内部原型指针]
            II.静态方法
            Object.assign() //把其他对象浅合并到目标对象，也就是第一个参数,注意它拷贝原型上的属性，只拷贝对象自身的属性
            Object.create(proto) //创建一个实列,实列的__proto__就是proto
             //关于原型继承,通过实列需要两次才到上一级，直接通过父函数的prototype,只要一次就可以
            <textarea class="complex-code">
                function Parent(){
                	this.myName="Parentkenley"
                }
                Parent.prototype={
                     showName:function(){
                         console.log(this.myName)
                     }
                }
                function Sub(){
                        //this.myName="Subkenley"
                }
                //Sub.prototype=Parent.prototype
                Sub.prototype=new Parent()
                var newObj=new Sub();
                newObj.showName()
                console.log(newObj instanceof Parent)
            </textarea>
            //第二个参数表示在对象上定义属性
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
                    enumerable: true,
                    configurable: true
                  }
                })
                console.log(JSON.stringify(obj))
            </textarea>
            Object.defineProperties()
            //代码如下，可以参考Object.defineProperty
             <textarea>
                   var obj = {};
                   Object.defineProperties(obj, {
                      'property1': {
                        value: true,
                        writable: true
                      },
                      'property2': {
                        value: 'Hello',
                        writable: false
                      }
                      // etc. etc.
                    });
             </textarea>
            Object.defineProperty()
             //注意value和writable与get和set是两组，不能同时出现,第一组叫数据描述符，第二组叫存取描述符,当是存取描叙符时，只能通过第三方变量保存值
            //configurable 当为true可以修改descriper和删除属性，当为false时，只能修改writable属性并且不能删除
            //enumerable 可以枚举
            //value  属性具体值
            //writable 可以用等号赋值
            //get
            //set
            <textarea>
                var obj = {};
                Object.defineProperties(obj, {
                  'p1': {
                        configurable:false,
                        enumerable:true,
                        value:"2",
                        writable:true
                  },
                  'p2': {
                        configurable:true,
                        enumerable:true,
                        value:"2",
                        writable:true
                  }
                });

                Object.defineProperties(obj, {
                  'p1': {
                        configurable:false,
                        enumerable:false,
                        value:"3",
                        writable:false
                  }
                });
                delete obj.p1
                console.log(JSON.stringify(obj))
            </textarea>

            //监听对象属性改变，模拟vue
            <textarea>
               var vueObj={
				name:"kenley",
                    sex:{
                        "a":"22"
                    }
                }

                function test(vueObj){
                     Object.keys(vueObj).forEach(function(key){
                            var val=vueObj[key]
                            if(typeof(val)==="object"){
                                test(val)
                            }
                            else{
                                //console.log(val)
                                Object.defineProperty(vueObj, key, {
                                  enumerable: true,
                                  configurable: true,
                                  get:function(){
                                                console.log("get")
                                                return val
                                  },
                                  set:function(value){
                                                console.log("更新了")
                                                val=value
                                  }
                                });
                            }
                    })
                }
                test(vueObj);
                vueObj.sex.a="333"
                console.log(vueObj.name)
            </textarea>

            Object.entries() //返回对象自身（不包括原型上的属性）,如果属性值是函数就返回null,返回值是数组,没有就是空数组
            //for...in //包含对象自身和原型链上的可以枚举的属性,注意它是无序的
            //for...of //根据迭代器来输出数据
            <textarea>
               var iterable = {
                i: 0,
                [Symbol.iterator]:function(){
                    var that=this;
                    return {
                        next() {
                            if (that.i < 3) {
                                return { value: that.i++, done: false };
                            }
                            return { value: undefined, done: true };
                        }
                    };
                }
            };
            for (var value of iterable) {
                console.log(value);
            }
            </textarea>
            Object.freeze() //表示对象不能改变(删除，修改，新增)，注意只是对象，不包括继承链上的属性，继承链上的属性还是可以通过__proto__访问和修改
            Object.getOwnPropertyDescriptor() //如果属性不存在，就返回undefined
            //console.log(JSON.stringify(Object.getOwnPropertyDescriptor(obj,"age")))
            //window.b=2;
            //var m=Object.getOwnPropertyDescriptor(window,"b");
            //console.log(m);

            Object.getOwnPropertyDescriptors() //返回对象自身所有属性描述符，如果没有自身属性，就返回{}
            Object.getOwnPropertyNames() //返回对象自身的所有属性(包括不能枚举的)，但是不包括symbol
            Object.getOwnPropertySymbols() //返回属性名是symbol值的属性 返回数组
            Object.getPrototypeOf()//其实就是对象的__proto__
            Object.is() //和全等有点差别:===运算符（和==运算符）将数字值-0和+0视为相等，并认为Number.NaN不等于NaN。
            Object.isExtensible() //Object.preventExtensions，Object.seal 或 Object.freeze设置为false后句返回false
            Object.isFrozen() //方法判断一个对象是否被冻结
            Object.isSealed() //方法判断一个对象是否被密封,它的存在只是为了同时可以判断isExtensible和isFrozen
            Object.keys() //对象自身可枚举属性组成的数组
            Object.preventExtensions() //对象不能添加新的属性,但是可以修改和删除现有自身属性
            Object.seal() //对象不可以添加的新的属性，并且现有属性不能删除，只能修改属性描述符中的writable
            Object.setPrototypeOf() //类似obj.__proto__ = proto
            Object.values()//对象自身可枚举属性值组成的数组,值包括数组，函数，对象等，就是属性值是什么都可以
            III原型的方法
            Object.prototype.hasOwnProperty() //判断自身属性是否存在某个属性,注意和in运算符不同，in运算符还包括原型上的属性
            Object.prototype.isPrototypeOf() //a.isPrototypeOf(b) 意思是a是否在b的原型链上
            <textarea>
                 function Parent(){
                	this.myName="Parentkenley"
                }

                Parent.prototype={
                    showName:function(){
                         console.log(this.myName)
                    }
                }

                var objP=new Parent();

                function Sub(){
                    this.age="22"
                }
                Sub.prototype=objP;
                var newObj=new Sub();
                console.log(objP.isPrototypeOf(newObj)) //true
			    console.log(Object.prototype.isPrototypeOf(newObj)) //true
            </textarea>
            Object.prototype.propertyIsEnumerable() //判断对象自身属性是否可以枚举，如果对象不存在或者是继承来的就返回false
            Object.prototype.toString() //把对象转换为字符串，可以覆盖，默认是“object Type”,通过Object.prototype.toString,可以判断对象类型
            <textarea>
                var toString = Object.prototype.toString;
				console.log(toString.call(new Date))//[object Date]
				console.log(toString.call(new String))//[object String]
				console.log(toString.call(Math))  //[object Math]
				console.log(toString.call(undefined)) //[object Undefined]
				console.log(toString.call(null)) //[object Null]
            </textarea>
            Object.prototype.valueOf() //返回原始值，可以覆盖，与toString不同，它可以返回多种类型的值

            10.Date //Date或则new Date出来的时间都是已经换成后的时间，也就是加了时区,Date直接调返回当前的时间,忽略参数
            11.var birthday = new Date(1995, 11, 17, 3, 24, 0); 兼容浏览器

            1.、中国位于北半球、东半球，亚欧大陆东部，东临太平洋。地跨热带、北温带，其中大部分位于北温带。东部和南部临海，自北而南为渤海、黄海、东海、南海。
            2.、中国地理位置四至点：
            3.最北端：位于东八区，北纬53度33分
            4.最南端：位于东八区，北纬3度52分，
            5.最西端：位于东五区，东经73度40分，
            6.最东端：位于东九区，东经135度2分30秒，
            7.英国伦敦格林尼治天文台原址的那条经线称为0,赤道纬度为0
            8.格林尼治平时的正午是指当平太阳横穿格林尼治子午线时（也就是在格林尼治上空最高点时)（正午是12点）
            9.协调世界时(UTC)UTC基于国际原子时并通过不规则的加入闰秒来抵消地球自转变慢的影响
            10.以常规函数调用它（即不加 new 操作符）将会返回代表当前日期和时间的字符串，而不是一个日期对象
            11.地球的自转速度在变小，公转速度在变大
            12.普通年的闰年（不能被100整除的年份）能被4整除的为闰年。（如2004年就是闰年，1999年不是闰年）；
            13.世纪年的闰年（能被100整除的年份）能被400整除的是闰年。（如2000年是闰年，1900年不是闰年）；
            14 平年（1-12月分别为),也就是大月是31天，小月2月28天，4月30天 6月30天,9月30天,11月30天
               1    2    3     4     5     6     7     8    9    10    11   12
             31天，28天，31天，30天，31天，30天，31天，31天，30天，31天，30天，31天）
            15.是闰年那么2月就是29天
            16.十二生肖顺序 子鼠，丑牛，寅虎，卯兔，辰龙，巳蛇，午马，未羊，申猴，酉鸡，戌狗，亥猪。
            一鼠二牛三虎头， 四兔五龙六蛇口， 七马八羊九金猴，鸡犬猪站最后头
            1983年 猪
            1982年 狗
            1981年 鸡

            1980年 猴
            1979年 羊
            1978年 马

            1977年 蛇
            1976年 龙
            1975年 兔

            1974年 虎
            1973年 牛
            1972年 鼠

            静态方法//3个静态方法都是返回数值类型的毫秒值
            Date.UTC()
            <textarea>
                var utc=Date.UTC(1970, 0, 1, 0, 0, 0);
                console.log(utc) //0
                var utcDate = new Date(utc);
                console.log(utcDate) //"Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)"
                console.log(utcDate.getTime()) //0
            </textarea>
            Date.now() //Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数,类似 new Date().getTime()
            Date.parse() //一个表示从1970-1-1 00:00:00 UTC到给定日期字符串所表示时间的毫秒数的数值,记住字符串是月是从1开始,注意各个浏览器解析字符串有差异，要想返回值一致可以通过结尾处带上GMT
            // console.log(Date.parse("1970-1-1 00:00:00 GMT")) //输出0   //ISO 8601 2018-05-18T15:27:46 或者 20180518T152746 safari不支持ISO 8601
            继承方法
            //实列具有获取年(getFullYear())-月(getMonth())-日(getDate())-时(getHours())-分(getMinutes())-秒(getSeconds())-毫秒(getMilliseconds())
            Date.prototype.getDate() //返回本地时间第几天 	 var d=new Date(); console.log(d.getDate());//如果16号就返回16
            Date.prototype.getDay()//返回本地时间一周中的第几天，星期天是0，星期一是1
            Date.prototype.getFullYear()//返回本地时间的年份,比如今年是2018年，就返回2018
            Date.prototype.getHours() //返回本地时间当前小时，取值范围0-23
            Date.prototype.getMilliseconds() //返回本地时间的毫秒数 取值范围0 到 999
            Date.prototype.getMinutes() //返回本地时间的分钟数 取值范围0 到 59的整数值
            Date.prototype.getMonth() //返回本地时间的月份 取值范围0 到 11的整数值  0 代表一月份，1 代表二月份
            Date.prototype.getSeconds() //返回本地时间的秒数 取值范围 0 到 59 的整数值
            Date.prototype.getTime() //1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数,也就是说需要换算成utc后，然后才计算，因为中国在东八区，所以去减去28800000毫秒
            <textarea>
                   var one = new Date("1970-1-1 0:00:00");
                   console.log(one.getTime());//"-28800000"

                   var two = new Date("1970-1-1 0:00:00 GMT");
                   console.log(two.getTime());//"0"
            </textarea>
            Date.prototype.getTimezoneOffset() //返回utc时间和本地时间差多少分钟，也就是本地时区*60再去相反
            <textarea>
              var x = new Date();
              var currentTimeZoneOffsetInHours = x.getTimezoneOffset();
              console.log(currentTimeZoneOffsetInHours) //"-480"
            </textarea>
            Date.prototype.getUTCDate() //根据时间，返回utc的当前月的那天,也就是要根据时区计算
            Date.prototype.getUTCDay() //同不是utc,只是加上时区计算
            Date.prototype.getUTCFullYear() //同不是utc,只是加上时区计算
            Date.prototype.getUTCHours() //同不是utc,只是加上时区计算
            Date.prototype.getUTCMilliseconds() //同不是utc,只是加上时区计算
            Date.prototype.getUTCMinutes() //同不是utc,只是加上时区计算
            Date.prototype.getUTCMonth() //同不是utc,只是加上时区计算
            Date.prototype.getUTCSeconds() //同不是utc,只是加上时区计算
            Date.prototype.setDate() //设置月的第几天,如果参数值不合理会自动计算,建议参数用数值
            Date.prototype.setFullYear() //设置年份，最好4位整数,这个方法还可以传入另外2个参数，月和日
            Date.prototype.setHours() //设置小时 参数 0到23的整数.可以带上另外3个参数 分钟，秒，毫秒
            Date.prototype.setMilliseconds() //设置毫秒 一个 0 到 999 的数字，表示豪秒数。
            Date.prototype.setMinutes() //设置毫秒 一个 0 到 59 的整数，表示分钟数，可以带上另外2个参数，秒和毫秒
            Date.prototype.setMonth() //设置月份 介于 0 到 11 之间的整数（表示一月到十二月）可以带上另外一个参数，日
            Date.prototype.setSeconds() //设置秒 一个 0 到 59 的整数，可以带上另外一个参数毫秒
            Date.prototype.setTime() //通过一个整数，表示从1970-1-1 00:00:00 UTC开始计时的毫秒数设置时间
            Date.prototype.setUTCDate() //先把本地时间换算成utc时间，然后设置月的某一天，再然后计算时区换成本地时间
            <textarea>
              var theBigDay = new Date("2018-5-17 7:00:00");
              console.log(theBigDay.getUTCDate())//utc 2018-5-16 23:00:00
              theBigDay.setUTCDate(20);  //2018-5-20 23:00:00 utc
              console.log(theBigDay)//21   //2018-5-21 7:00:00
            </textarea>
            Date.prototype.setUTCFullYear()//同不是utc,只是加上时区计算
            Date.prototype.setUTCHours()//同不是utc,只是加上时区计算
            Date.prototype.setUTCMilliseconds()//同不是utc,只是加上时区计算
            Date.prototype.setUTCMinutes()//同不是utc,只是加上时区计算
            Date.prototype.setUTCMonth()//同不是utc,只是加上时区计算
            Date.prototype.setUTCSeconds()//同不是utc,只是加上时区计算

            Date.prototype.toDateString() //日期部分(年月日) "Thu May 17 2018"
            Date.prototype.toISOString() // "2018-05-17T06:56:59.926Z"  YYYY-MM-DDTHH:mm:ss.sssZ  T表示后面是时间,末尾固定带上Z,返回的是UTC时间
            Date.prototype.toJSON() //该方法常用于 JSON序列化Date对象,内部调用是toISOString()
            Date.prototype.toLocaleDateString()  //返回国际化的日期部分日期,如果locales 和 options 参数没有传入，哪就默认本地
            //各国语言缩写如下
            <textarea>
             //各国语言缩写列表
            //en 英文
            //en_US 英文 (美国)
            //ar 阿拉伯文
            //ar_AE 阿拉伯文 (阿拉伯联合酋长国)
            //ar_BH 阿拉伯文 (巴林)
            //ar_DZ 阿拉伯文 (阿尔及利亚)
            //ar_EG 阿拉伯文 (埃及)
            //ar_IQ 阿拉伯文 (伊拉克)
            //ar_JO 阿拉伯文 (约旦)
            //ar_KW 阿拉伯文 (科威特)
            //ar_LB 阿拉伯文 (黎巴嫩)
            //ar_LY 阿拉伯文 (利比亚)
            //ar_MA 阿拉伯文 (摩洛哥)
            //ar_OM 阿拉伯文 (阿曼)
            //ar_QA 阿拉伯文 (卡塔尔)
            //ar_SA 阿拉伯文 (沙特阿拉伯)
            //ar_SD 阿拉伯文 (苏丹)
            //ar_SY 阿拉伯文 (叙利亚)
            //ar_TN 阿拉伯文 (突尼斯)
            //ar_YE 阿拉伯文 (也门)
            //be 白俄罗斯文
            //be_BY 白俄罗斯文 (白俄罗斯)
            //bg 保加利亚文
            //bg_BG 保加利亚文 (保加利亚)
            //ca 加泰罗尼亚文
            //ca_ES 加泰罗尼亚文 (西班牙)
            //ca_ES_EURO 加泰罗尼亚文 (西班牙,Euro)
            //cs 捷克文
            //cs_CZ 捷克文 (捷克共和国)
            //da 丹麦文
            //da_DK 丹麦文 (丹麦)
            //de 德文
            //de_AT 德文 (奥地利)
            //de_AT_EURO 德文 (奥地利,Euro)
            //de_CH 德文 (瑞士)
            //de_DE 德文 (德国)
            //de_DE_EURO 德文 (德国,Euro)
            //de_LU 德文 (卢森堡)
            //de_LU_EURO 德文 (卢森堡,Euro)
            //el 希腊文
            //el_GR 希腊文 (希腊)
            //en_AU 英文 (澳大利亚)
            //en_CA 英文 (加拿大)
            //en_GB 英文 (英国)
            //en_IE 英文 (爱尔兰)
            //en_IE_EURO 英文 (爱尔兰,Euro)
            //en_NZ 英文 (新西兰)
            //en_ZA 英文 (南非)
            //es 西班牙文
            //es_BO 西班牙文 (玻利维亚)
            //es_AR 西班牙文 (阿根廷)
            //es_CL 西班牙文 (智利)
            //es_CO 西班牙文 (哥伦比亚)
            //es_CR 西班牙文 (哥斯达黎加)
            //es_DO 西班牙文 (多米尼加共和国)
            //es_EC 西班牙文 (厄瓜多尔)
            //es_ES 西班牙文 (西班牙)
            //es_ES_EURO 西班牙文 (西班牙,Euro)
            //es_GT 西班牙文 (危地马拉)
            //es_HN 西班牙文 (洪都拉斯)
            //es_MX 西班牙文 (墨西哥)
            //es_NI 西班牙文 (尼加拉瓜)
            //et 爱沙尼亚文
            //es_PA 西班牙文 (巴拿马)
            //es_PE 西班牙文 (秘鲁)
            //es_PR 西班牙文 (波多黎哥)
            //es_PY 西班牙文 (巴拉圭)
            //es_SV 西班牙文 (萨尔瓦多)
            //es_UY 西班牙文 (乌拉圭)
            //es_VE 西班牙文 (委内瑞拉)
            //et_EE 爱沙尼亚文 (爱沙尼亚)
            //fi 芬兰文
            //fi_FI 芬兰文 (芬兰)
            //fi_FI_EURO 芬兰文 (芬兰,Euro)
            //fr 法文
            //fr_BE 法文 (比利时)
            //fr_BE_EURO 法文 (比利时,Euro)
            //fr_CA 法文 (加拿大)
            //fr_CH 法文 (瑞士)
            //fr_FR 法文 (法国)
            //fr_FR_EURO 法文 (法国,Euro)
            //fr_LU 法文 (卢森堡)
            //fr_LU_EURO 法文 (卢森堡,Euro)
            //hr 克罗地亚文
            //hr_HR 克罗地亚文 (克罗地亚)
            //hu 匈牙利文
            //hu_HU 匈牙利文 (匈牙利)
            //is 冰岛文
            //is_IS 冰岛文 (冰岛)
            //it 意大利文
            //it_CH 意大利文 (瑞士)
            //it_IT 意大利文 (意大利)
            //it_IT_EURO 意大利文 (意大利,Euro)
            //iw 希伯来文
            //iw_IL 希伯来文 (以色列)
            //ja 日文
            //ja_JP 日文 (日本)
            //ko 朝鲜文
            //ko_KR 朝鲜文 (南朝鲜)
            //lt 立陶宛文
            //lt_LT 立陶宛文 (立陶宛)
            //lv 拉托维亚文(列托)
            //lv_LV 拉托维亚文(列托) (拉脱维亚)
            //mk 马其顿文
            //mk_MK 马其顿文 (马其顿王国)
            //nl 荷兰文
            //nl_BE 荷兰文 (比利时)
            //nl_BE_EURO 荷兰文 (比利时,Euro)
            //nl_NL 荷兰文 (荷兰)
            //nl_NL_EURO 荷兰文 (荷兰,Euro)
            //no 挪威文
            //no_NO 挪威文 (挪威)
            //no_NO_NY 挪威文 (挪威,Nynorsk)
            //pl 波兰文
            //pl_PL 波兰文 (波兰)
            //pt 葡萄牙文
            //pt_BR 葡萄牙文 (巴西)
            //pt_PT 葡萄牙文 (葡萄牙)
            //pt_PT_EURO 葡萄牙文 (葡萄牙,Euro)
            //ro 罗马尼亚文
            //ro_RO 罗马尼亚文 (罗马尼亚)
            //ru 俄文
            //ru_RU 俄文 (俄罗斯)
            //sh 塞波尼斯-克罗地亚文
            //sh_YU 塞波尼斯-克罗地亚文 (南斯拉夫)
            //sk 斯洛伐克文
            //sk_SK 斯洛伐克文 (斯洛伐克)
            //sl 斯洛文尼亚文
            //sl_SI 斯洛文尼亚文 (斯洛文尼亚)
            //sq 阿尔巴尼亚文
            //sq_AL 阿尔巴尼亚文 (阿尔巴尼亚)
            //sr 塞尔维亚文
            //sr_YU 塞尔维亚文 (南斯拉夫)
            //sv 瑞典文
            //sv_SE 瑞典文 (瑞典)
            //th 泰文
            //th_TH 泰文 (泰国)
            //tr 土耳其文
            //tr_TR 土耳其文 (土耳其)
            //uk 乌克兰文
            //uk_UA 乌克兰文 (乌克兰)
            //zh 中文
            //zh_CN 中文 (中国)
            //zh_HK 中文 (香港)
            //zh_TW 中文 (台湾)
            </textarea>

            Date.prototype.toLocaleString() //和toLocaleDateString差不多，只是包含时间部分 //"2018年5月17日 下午6:12:16",传入数组的作用是当前面失败，可以应用后面
            Date.prototype.toLocaleTimeString()//和toLocaleDateString差不多，只是只有时间部分 //"下午6:15:40"
            Date.prototype.toString() //"Thu May 17 2018 18:16:44 GMT+0800 (中国标准时间)" 英语可读的日期格式
            Date.prototype.toTimeString() //和toString差不多，只是放回日期时间部分 //"18:22:46 GMT+0800 (中国标准时间)"
            Date.prototype.toUTCString() //和toString差不多，只是把计算时区，获取utc时间
            Date.prototype.valueOf()//类似getTime()

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">操作符</h1><div class="segment-content">
             1.++和--操作符适合所有数据类型,字符串和boolean false=0 true=1先执行number(),对象如果有valueof就先执行,否则执行toString(),浮点型只对整数部分进行操作,小数保留不变
              <textarea>
              var opeObj={
                  toString:function(){
                     return 1
                  }
              }
              opeObj++
              console.log(typeof opeObj)
              console.log(opeObj)
              </textarea>
             2.关于浮点数计算误差 如下：经过一定运算多出了4,这个就是误差,因为计算机无法表示10进制下的1/3,只能表示近似值 <a href="http://floating-point-gui.de/basic/" target="_blank">参考资料</a>
               I.列1
               <textarea>
                  var i=0.1+0.1+0.1
                   for(var j=0;j<17*1;j++){
                        i=i*10;
                        console.log(i)
                   }
                   console.log(i)  //30000000000000004
               </textarea>
              I.解决办法如下：保留有限精度
                <textarea>
                        var i=1.1-1
                        i=Math.floor(i*10)/10
                        console.log(i)
                 </textarea>
              3.一元加运算符,放在变量前面和number一样
              4.一元减运算符和一元加一样,只是要变成负数
              5.计算机负数用补码表示,<a href="http://www.ruanyifeng.com/blog/2009/08/twos_complement.html"  target="_blank">参考资料</a>
                  解释补码的作用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" target="_blank">按位操作符</a>
                  注意：补码保证了当一个数是正数时，其最左的比特位是0，当一个数是负数时，其最左的比特位是1。因此，最左边的比特位被称为符号位（sign bit）。
                  进制顺序左到右
                  <img :src="two"/>
              6.按位非，等于值的负数减1
                <textarea>
                     var num1 =-25
                     var num2 =~num1;
                     console.log(num2)
                </textarea>
                1.按位非(~) ~num1
                2.按位与(&) 25 & 3  两个都是1才是1
                3.按位或(|) 25 | 3  有一个是1就是1
                4.按位异或(^) 25 ^ 3 相同才返回1
                5.左移<<   oldValue << 5 ,会改变数据符号位值,其实拿第一个有效值进行移动
                6。右移
                >> (有符号右移)  总是用最左侧第一个填充左边空白
                >>> (无符号右移) 总是非负数，因为总是用0填充
            7.布尔操作
               //逻辑与和逻辑或
              <textarea>
                    function one(){
                        console.log("one")
                        return true;
                    }
                    function two(){
                        console.log("two")
                        return true;
                    }
                    var bl=one() || two()
                    console.log(bl) // one true

                    var bl=one() && two()
                    console.log(bl) // one true two true
              </textarea>
                关于逻辑与遵守以下规律
                1.如果第一个操作数是对象，则返回第二个操作数
                2.如果第二个操作数是对象，只有在第一个操作数返回true情况下返回第二个
                3.都是对象则返回第二个对象
                4.如果是其他情况，当第一个参数是true的情况下才会执行第二个参数，并且返回第二个参数,返回结果不一定是逻辑值
                5.可以简短为如果第一个参数转换后的值是false,就返回第一个参数,否则返回第二个参数
             8.乘性操作符
                1.除以(0除外,如果被除数是0返回NaN)/0 返回Infinity,如果被除数（包括Infinity）是负数，则放回-Infinity
                2.如果不是数字，先执行Number(undefined返回NaN,空字符串和null返回0,非数值字符返回NaN),然后再进行操作
                3.如果有一个操作数是NaN,就返回NaN

                4.Infinity除以Infinity返回NaN,
                5.Infinity除以数值(包括0)返回Infinity
                6.数值除以Infinity 返回0

                7.Infinity乘以什么(除了0)都是Infinity，符号取决于操作数
                8.Infinity(包括负)与0相乘，都返回NaN

                1)求膜操作符除了下面两个条其他和除法一样
                   1.如果除数是0则返回NaN,除法是返回Infinity
                   2.除数是Infinity就返回被除数(100/Infinity=100)
             9.加法操作符
               1.Infinity符号相同，则返回符号相同的Infinity,不同符号相加返回NaN
               2.任何数值与NaN相加都返回NaN
               3.0最终是0
               4.如果有一个操作数是字符串则放回字符串，非字符串类型调用String()转换为字符串
            10.减法操作符
               和加法一样，但是记得算上减号，减号为负
               对字符串处理，减法操作符会调用Number()然后在进行减法操作
            11.比较操作符
               两个操作数是数值按数值标记，如果都是字符串，按是字符串编码比较，其他情况都转换为数值进行比较
            12.相等操作符
               I.==和!=
                 1.布尔类型会转换为0和1
                 2.null和undefined不能转换，只能保持本来面目
                 3.数值和字符串比较，会把字符串执行Number转换
                 4.如是两个对象比较，就看他们是不是同一个对象，如果是对象和其他标记，对对象进行转换
            13,运算符优先级
              I.一级运算(加减)和二级运算(乘除)，总称四则运算,先进行二级运算，在进行一级运算
              II.一元正号就是Number快捷调用
              III.优先级如下：(自己精简为7个级别)
                    1.成员访问|函数调用
                    2.后置递增|后置递减
                    3.一元加法|一元减法(也就是Number,只是要变成负数)|逻辑非|前置递增|前置递减
                    4.二级运算（包括取模）
                    5.一级运算
                    6.比较运算符
                    7.逻辑运算符(除了逻辑非)

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">语句</h1><div class="segment-content">
            1.标记语句 作用嵌套循环的时候，方便跳出
            <textarea>
                myLabel:
                 for(var i=0;i<3;i++){
                     myLabel2:
                    for(var j=0;j<2;j++){
                        if(j==0){
                            continue myLabel;
                        }
                        console.log(j)
                    }
                 }
                //没有输出，如果continue不带标签，输出1,1,1
            </textarea>
            同理break一样,只不过break可以在语句块中跳转
            foo: {
            console.log('one');
            break foo;
            console.log('two');
            }
            console.log('three');
            //one three
            2.switch语句  如果case里面没有break会继续下一个case(包括default),也不管case满不满足条件，知道遇到break语句,如果没有条件满足就会进入default:
              注意比较的时候用的全等比较
            <textarea>
                var a="a"
                switch(a){
                    case 1 :
                    console.log(1)
                    break
                    case 2 :
                    console.log(2)
                    break
                    case 3 :
                    console.log(3)
                    break
                    default:
                    console.log("default")
                }
            </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">函数</h1><div class="segment-content">
             1.bind使用介绍
               <textarea>
                   var thisArg={
                        x:999
                    }
                    var module = {
                      x: 42,
                      getX: function(a,b,c) {
                         console.log(this.x,a,b,c)
                      }
                    }

                    var unboundGetX = module.getX;
                    unboundGetX()

                    var boundGetX = unboundGetX.bind(thisArg,2,3);
                    boundGetX(4,5,6)
               </textarea>
            2.函数节流
               <textarea>
                          function throttle(method, context) {
                            clearTimeout(methor.tId);
                            method.tId = setTimeout(function(){
                            method.call(context);
                            }， 100);
                          }
                           window.onresize = function(){
                                throttle(myFunc);
                           }
               </textarea>
            3.call和apply用法
              I.call 指定的this值和分别地提供的参数(参数的列表)
              <textarea>
                 product.call(this, name, price);
              </textarea>
              II.apply 给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
                <textarea>
                    var numbers = [5, 6, 2, 3, 7];
                    var max = Math.max.apply(null, numbers);
                </textarea>
        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">

        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                two:require("../../images/two.png"),
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
