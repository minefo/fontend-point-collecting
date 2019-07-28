<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">变量数组的解构赋值</h1><div class="segment-content">
            1.只要等号两边的模式相同，左边的变量就会被赋予对应的值
              <textarea>
                    let [foo, [[bar], baz]] = [1, [[2], 3]];
                    console.log(foo) //1
                    console.log(bar) //2
                    console.log(baz) //3
                  //以下列出几种解构模式情况
                  1. [head, ...tail] = [1, 2, 3, 4]; //head=1 tail=[2,3,4]
              </textarea>
            2.如果解构不成功，变量的值就等于undefined
            3.另一种情况是不完全解构,也就是左边少于右边项
            4.如果左边有Iterator，那么右边也要有
            5.解构赋值允许指定默认值[foo = true] = [],注意只有右边成员严格等于undefined默认值才生效
            6.如果两边模式不相同，可以通过指定默认值来实现匹配成功
            7.值可以引用解构赋值的其他变量，但该变量必须已经声明 如[x = y, y = 22] = [];会报错y is not defined,也就是左到右，右边用左边的变量,然后值是用变量具体值 如[x = 22, y = x] = ["a"];y是"a"
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">变量对象的解构赋值</h1><div class="segment-content">
            1.对象解构和数组不同，它没有位置限制，变量必须与属性同名，才能取到正确的值
            2.解构失败也是undefined
            3.可以对变量名起一个别名
              <textarea>
                  	let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
                    console.log(foo)// 会报错，foo不存在
                    console.log(baz)//输出aaa
              </textarea>
            4.对象变量解构其实是这样  { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" } 左边key是去查找值，右边的key是变量名
            5.可以嵌套解构 { p: [x, { y }] } = {p: ['Hello',{ y: 'World' }]}
            6.对象的解构也可以指定默认值 {x = 3} = {} //x=3 其实默认值是var {x: x = 3} = {}  console.log(x) //3
            7.默认值生效的条件是，对象的属性值严格等于undefined
            8.嵌套的对象，而且子对象所在的父属性不存在会报错 {foo: {bar}} = {baz: 'baz'}  //Cannot destructure property `bar` of 'undefined' or 'null'
            9 使用已经定义的变量要小心 let x;{x} = {x: 1} 会报错，改成这样就没有问题let (x;{x} = {x: 1})
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">解构赋值其他内容</h1><div class="segment-content">
            1.字符串也可以解构赋值 如[a, b, c, d, e] = 'hello' 这个时候字符串被转换成类似数组，按数组规律取值
            2.解构赋值时，如果等号整个右边是数值和布尔值，则会先转为对象
            3.解构赋值时只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
            4.函数的参数也可以使用解构赋值
              <textarea>
                  //例1
                  function add([x, y]){
                    return x + y;
                  }
                  add([1, 2]); // 3

                  //例2
                  function move({x = 0, y = 0} = {}) {
                      return [x, y];
                  }
                  move({x: 3, y: 8}); // [3, 8]

                  //例3 这种方式表示没有传参，就用默认对象来解构
                  function move({x, y} = { x: 0, y: 0 }) {
                      return [x, y];
                  }
                  move({x: 3, y: 8}); // [3, 8]
                  move({x: 3}); // [3, undefined]
                  move({}); // [undefined, undefined]
                  move(); // [0, 0]

                   function move({x,y=3} = { x: 0, y: 0 }) {
                              return [x, y];
                   }
                   console.log(move({x:2})); // [2, 3]
              </textarea>
            5.默认值都是key=value
            6.不要在模式中放置圆括号
               I.变量声明语句 如let [(a)] = [1];
               II.函数参数不要使用 如function f([(z)]) { return z; }
               III.赋值语句的模式 如({ p: a }) = { p: 42 };
            7.可以使用圆括号 ({ p: d } = {});



        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">解构赋值用途</h1><div class="segment-content">
            （1）交换变量的值
            （2）从函数返回多个值
            （3）函数参数的定义
            （4）提取 JSON 数据
            （5）函数参数的默认值
            （6）遍历 Map 结构
                <textarea>
                    const map = new Map();
                    map.set('first', 'hello');
                    map.set('second', 'world');

                    for (let [key, value] of map) {
                      console.log(key + " is " + value);
                    }
                </textarea>
            （7）输入模块的指定方法
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">let用法</h1><div class="segment-content">
            1.let声明变量只有所在的代码块内有效,包括取值也是进入代码的状态
              <textarea>
                    {
                        let a=2;
                        console.log(a)
                    }
                    console.log(a)
                  //2
                  //Uncaught ReferenceError: a is not defined
              </textarea>
            2.代码块的情况
               I.{}
               II.for(let a=0;a<5;a++)和for (let [k,v] of strMap) {
               III.
            3.同一个作用域下不能声明相同名称的变量名,包括let和var混合
            4.不存在变量提升，必须先声明，再使用
            5.暂时性死区 //虽然没有变量提示，但是还是有变量检查，发现当前代码块定义了变量，必须在定义变量之后使用变量
                var tmp = 123;
                if (true) {
                  tmp = 'abc'; // ReferenceError
                  let tmp;
                }
            6.所以typeof有时会报错 如
               //typeof tmp
               //let tmp;
            7.赋值运算符是从右向左运算的,这个倒不难理解,例如 var a = 1 + 2; 先计算了等号右边1+2,然后在赋值给a
              所以下面的代码会报错,因为x没有声明就使用
              let x = x;
            8.浏览器环境中，代码块中声明函数和var类似，其他环境还是将块级作用域的函数声明当作let处理
            9.建议用函数表达式取代函数声明
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">const用法</h1><div class="segment-content">
            1.const一旦声明，常量的值就不能改变,并且变量声明和赋值必须一起
            2.const的作用域与let命令相同：只在声明所在的块级作用域内有效
            3.只能在声明的位置后面使用
            4.const声明的常量，也与let一样不可重复声明
            5.如果常量是对象，对象还是可以改变，但是变量总是指向这个变量
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">let和const其他内容</h1><div class="segment-content">
            1.let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
            2.顶层对象的属性与全局变量是等价
        </div></div>


        <div class="segment-wraper"><h1 class="segment-title">Set</h1><div class="segment-content">
            1.Set类似于数组，但是成员的值都是唯一的，没有重复的值 使用方法如：const s = new Set() 也就是说Set添加值时会先判断当前值是否已经存在，如果已经存在就不添加
            2.[...new Set(array)] 用来去除数组重复成员
            3.Set插入值不会进行类型转换，使用类似全等判断，除了NaN和Nan相等例外
            4.实列属性 size：返回Set实例的成员总数。
            5.Set实例的方法分为两大类
              I.操作方法
                add(value)：添加某个值，返回 Set 结构本身。
                delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
                has(value)：返回一个布尔值，表示该值是否为Set的成员。
                clear()：清除所有成员，没有返回值
              II.遍历方法
                keys()：返回键名的遍历器
                values()：返回键值的遍历器
                entries()：返回键值对的遍历器
                    <!--var ite=s.entries()-->
                    <!--for(var [key,val] of ite){-->
                    <!--console.log(key,val)-->
                    <!--}-->
                forEach()：使用回调函数遍历每个成员 回调函数的参数是value和key,forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象
                <!--set = new Set([1, 4, 9]);-->
                <!--set.forEach((value, key) => console.log(key + ' : ' + value))-->
               //注意遍历器 通过for of调用
            6.Set的遍历顺序就是插入顺序,还有Set的key和value相同
            7.实现并集（Union）（没有重复元素）、交集（Intersect）和差集（Difference）。
              <textarea>
                    let a = new Set([1, 2, 3]);
                    let b = new Set([4, 3, 2]);

                    // 并集
                    let union = new Set([...a, ...b]);
                    // Set {1, 2, 3, 4}

                    // 交集 a有哪些元素存在b中
                    let intersect = new Set([...a].filter(x => b.has(x)));
                    // set {2, 3}

                    // 差集 a中有哪些元素不存在b中
                    let difference = new Set([...a].filter(x => !b.has(x)));
                    // Set {1}



              </textarea>


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">WeakSet</h1><div class="segment-content">
             1.WeakSet 结构与 Set 类似,不过它的值必须是对象(包括函数和数组)不能是null
             2.垃圾回收器可能随时回收weakset里面对象
             3.WeakSet 不可遍历
             4.实列化时，数组的成为必须为对象如：
                const a = [[1, 2], [3, 4]];
                const ws = new WeakSet(a);
             5.WeakSet实列方法和Set比起来，就是少了clear方法
                WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
                WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
                WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在
             6.WeakSet 没有size属性，没有办法遍历它的成员

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">Map</h1><div class="segment-content">
            1.Map 数据结构类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，可以是各种类型的值 （包括对象）都可以当作键,使用：
              <textarea>
                    var obj={}
                    const map = new Map([
                      [obj, '张三'],
                      ['title', 'Author']
                    ]); //可以通过数组构建，但是数组项必须是数组，并且由key和value组成
                    map.size // 2
                    var obj2=map.get(obj) // true
                    console.log(obj2) //"张三"
              </textarea>
            2.任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数:注意返回的元素是双元素数组
            3.虽然NaN不严格相等于自身，但 Map 将其视为同一个键
            4.实例的属性
              I.size 返回 Map 结构的成员总数。
            5.实列方法
            （2）set(key, value)
            （3）get(key)
            （4）has(key)
             (5)delete(key)
            （6）clear()
            6.遍历方法 注意遍历器是用for of 调用
              keys()：返回键名的遍历器。
              values()：返回键值的遍历器。
              entries()：返回所有成员的遍历器。
              forEach()：遍历 Map 的所有成员,使用方法如下 forEach还可以接受第二个参数，用来绑定this
                map.forEach(function(value, key, map) {
                console.log("Key: %s, Value: %s", key, value);
                });

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">WeakMap</h1><div class="segment-content">
            1.WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名，map可以接受各种类型的值
            2.一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性
            3.方法
                get()
                set()
                has()
                delete()
            4.用途
              I.WeakMap 应用的典型场合就是 DOM 节点作为键名
              II.WeakMap 的另一个用处是部署私有属性
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">Promise 对象</h1><div class="segment-content">
             1.Promise对象缺陷
               I.无法取消Promise，一旦新建它就会立即执行无法中途取消。
               II.其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
               III.第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
             2.Promise对象then如果指定了，就执行，没有指定就等指定之后调用，并且可以无限个then,都会执行
             3.将在当前脚本所有同步任务执行完后，才会执行then
             4.resolve可以接受另一个promise 加入为p1 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态,如果p1里面用reject(p1);则必定失败，如果p1里面用resolve则根据p1的状态来
             5.调用resolve或reject并不会终结 Promise 的参数函数的执行也就是resolve后面的代码还是会执行,所以最好是在它们前面加上return语句
             6.then返回新的promise对象，状态总是resolved,如果需要传参数，回调里面通过return实现，如果return 返回promise 状态取决返回的promise,如果promise状态是reject,但是then没有处理，则返回的promise也是reject
                用法如下
               <textarea>
                    getJSON("/posts.json").then(function(json) {
                      return json.post;
                    }).then(function(post) {
                      // ...
                    });
               </textarea>
            7.Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
            8.promise抛出一个错误，就被catch方法指定的回调函数捕获,但是如果 Promise 状态已经变成resolved，再抛出错误是无效的。
            9.Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
            10.一般来说总是使用catch方法捕获异常
            11.Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应即控制台会报错，但是不影响代码执行，也不会进try catch中
               <textarea>
                   try {
                          const promise = new Promise(function(res, rej) {
                             throw Error("测试");
                          });
                          var p=promise.then(function(){
                             console.log("到成功")
                             return "返回res"
                          })
                    }
                    catch(ex){
                        console.log("到了catch")
                    }
                    console.log("到外面了")
                    //到外面了
                    //Uncaught (in promise) Error: 测试
               </textarea>
            12.定时器中抛出异常，捕获不到异常
            13.Promise.prototype.finally() finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作 finally也返回promise并且返回实参
                // reject 的值是 3
                //Promise.reject(3).finally(() => {})
            14.Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
               I.都是fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
               II.只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数
               III.如果当个promise项就有catch处理块，哪么就不会进入p的catch
                 <textarea>
                        const p1 = new Promise((resolve, reject) => {
                            console.log("p1")
                            resolve('hello');
                        })
                        .then(result => console.log("成功p1"))
                        .catch(e => console.log("1"));

                        const p2 = new Promise((resolve, reject) => {
                           reject("报错了");
                        })
                        .then(result => result)
                        .catch(e => console.log("2"));

                        Promise.all([p2,p1])
                        .then(result => console.log("成功了"))
                        .catch(e => console.log("3"));
                         //p1
                         //成功p1
                         //2  因为自身进行了catch处理，所以返回的就是resolve
                         //成功了 所以进入成功回调
                 </textarea>
            15.Promise.race() 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
               I.只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
            16.Promise.resolve() Promise产生器,生成状态为resolve的promise
               I.参数是一个 Promise 实例,直接返回Promise
               II.参数是一个thenable对象 如 let thenable = {   会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法
                        then: function(resolve, reject) {
                        resolve(42);
                        }
                        };
               III.参数是一个原始值 则返回新的 Promise 对象，状态为resolved
               VI.不带有任何参数,直接放回新的 Promise 对象
            17.Promise.reject() 返回新的 Promise 对象,该实例的状态为rejected,参数，也就是不管参数是什么，都会原封不动地作为reject的理由,
            18.使用Promise注意以下几点
               I.如果生成的Promise时时同步函数，也会阻塞代码往下执行
            19.上面这样的写法就很笨拙了，这时就可以统一用promise.catch()捕获所有同步和异步的错误。
            20.Promise.try 目前浏览器不支持 Promise.try().then().catch() Promise.try()返回Promise可以处理同步和异步函数
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">async 函数</h1><div class="segment-content">
             1.async 函数是 Generator 函数的语法糖
             2.async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果
             3.await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）
             4.返回值是 Promise
             5.使用用例
               <textarea>
                    async function getStockPriceByName(name) {
                      const symbol = await getStockSymbol(name);
                      const stockPrice = await getStockPrice(symbol);
                      return stockPrice;
                    }
                    getStockPriceByName('goog').then(function (result) {
                      console.log(result);
                    });
               </textarea>
            6.async 函数有多种使用形式
                // 函数声明
                async function foo() {}

                // 函数表达式
                const foo = async function () {};

                // 对象的方法
                let obj = { async foo() {} };

                // 箭头函数
                const foo = async () => {};
             7.async函数内部return语句返回的值，会成为then方法回调函数的参数
             8.async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到
             9.正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象
             10.await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到,注意：都是resolve才进入then,否则进入catch
             11.只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行,也就是后面的代码不会执行,除非加了try catch或者promise本身加了catch处理块，这个时候里面的await不会影响外面的状态
             12.同时触发方式 await Promise.all([getFoo(), getBar()]);
             13. var a=await p1; a等于p1的resolve返回值
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">箭头函数</h1><div class="segment-content">
            1.箭头函数简单实用
              <textarea>
                   var f = v => v;
                   var a=f("测试")
                   console.log(a)//测试
              </textarea>
            2.箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
            3.如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
            4.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错,注意let foo = () => { a: 1 };不会报错，但是不会返回什么,因为语句a: 1。a可以被解释为语句的标签
              <textarea>
                    // 报错
                    let getTempItem = id => { id: id, name: "Temp" };
                    // 不报错
                    let getTempItem = id => ({ id: id, name: "Temp" });
              </textarea>
            5.如果箭头函数只有只有一句，并且没有返回值，可以这样let fn = () => void 1+1;
            6.箭头函数可以与变量解构结合使用
            7.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象,具体是箭头函数没有自己的this,所以拿上层的this
               <textarea>
                   function foo() {
                      setTimeout(() => {
                        console.log('id:', this.id);
                      }, 100);
                    }

                    var id = 21;
                    foo.call({ id: 42 });//42

                    function foo() {
                         var obj={
                              id:33,
                              showName:()=>this.id
                         }
                         console.log(obj.showName());
                     }
                     var id = 21;
                     foo.call({ id: 42 });//42
                   //也就是this是当前代码定义的位置
               </textarea>
            8.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
            9.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
            10.不可以使用yield命令，因此箭头函数不能用作 Generator 函数
        </div></div>





        <div class="segment-wraper"><h1 class="segment-title">export 命令</h1><div class="segment-content">
            1.用法如下
              <textarea>
                    export var firstName = 'Michael';
                    export var lastName = 'Jackson';
                    export var year = 1958;

                    //等价于
                    var firstName = 'Michael';
                    var lastName = 'Jackson';
                    var year = 1958;
                    export {firstName, lastName, year};
                  //建议用第二种
              </textarea>
            2.通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
              <textarea>
                    function v1() { ... }
                    function v2() { ... }

                    export {
                      v1 as streamV1,
                      v2 as streamV2,
                      v2 as streamLatestVersion
                    };
              </textarea>
            3.需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
              <textarea>
                   // 报错
                    export 1;

                    // 报错
                    var m = 1;
                    export m;

                   //正确写法

                   // 写法一 这种写法可以理解为自动转换为第二种写法,这种写法一定要再变量声明处输出
                    export var m = 1;

                    // 写法二
                    var m = 1;
                    export {m};

                    // 写法三
                    var n = 1;
                    export {n as m};
              </textarea>
            3.export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
            4.export命令可以出现在模块的任何位置，只要处于模块顶层就可以

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">import 命令</h1><div class="segment-content">
            1.用法如下 import {firstName, lastName, year} from './profile.js';
            2.大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同
            3.import命令要使用as关键字，将输入的变量重命名
            4.import命令输入的变量都是只读的,但是如果变量是一个对象，改写变量的属性是允许的,但是建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性
            5.import命令具有提升效果，会提升到整个模块的头部，首先执行
            6.由于import是静态执行，所以不能使用表达式和变量
              <textarea>
                    // 报错
                    import { 'f' + 'oo' } from 'my_module';
                    // 报错
                    let module = 'my_module';
                    import { foo } from module;
                    // 报错
                    if (x === 1) {
                      import { foo } from 'module1';
                    } else {
                      import { foo } from 'module2';
                    }
              </textarea>
            7.import语句会执行所加载的模块 如import 'lodash';
            8.使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面
             import { area, circumference } from './circle' 等价于import * as circle from './circle';

            9.用到export default命令，为模块指定默认输出 import customName from './export-default' 获取默认输出,这时import命令后面，不使用大括号
              <textarea>
                    //写法1
                    export default function foo() {
                      console.log('foo');
                    }
                    // 写法2
                    function foo() {
                      console.log('foo');
                    }
                    export default foo; //可以理解为默认输出，是输出值

                    // 正确
                    export default 42;


                  //错误写法
                  // 错误1 注意函数可以直接写在声明处
                   export default var a = 1;
              </textarea>
            10. export default可以理解为输出default接口
                <textarea>
                    var year = 1958;
                    export { year as default }
                    //引入
                     import de from './js/profile.js';
                     console.log("de",de) //1958

                </textarea>
            11.一个模块只能有一个默认输出
            12.同时输入默认方法和其他接口,用法如下
               import _, { each, each as forEach } from 'lodash'

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">export 与 import 的复合写法</h1><div class="segment-content">
            1.在一个模块之中，先输入后输出同一个模块,注意相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar
              <textarea>
                    export { foo, bar } from 'my_module'; //取最后一个语法export
                    // 可以简单理解为
                    import { foo, bar } from 'my_module';
                    export { foo, bar };

                  // 接口改名
                 export { foo as myFoo } from 'my_module';

                 // 整体输出
                 export * from 'my_module';

              </textarea>
            2.转发默认接口 export { default } from 'foo';  export { es6 as default } from './someModule' 把其他接口改成默认接口
            3.export { default as es6 } from './someModule'; 默认接口改成具名接口
            4.复合写法实际作用如下
                I.模块的继承 用法如下,意思当前模块既有circle功能（default排除），又有新的功能，
                <textarea>
                        export * from 'circle';
                        export var e = 2.71828182846;
                        export default function(x) {
                          return Math.exp(x);
                        }
                  </textarea>
            5.跨模块常量
              <textarea>
                   // constants.js 模块
                    export const A = 1;
                    export const B = 3;
                    export const C = 4;

                    // test1.js 模块
                    import * as constants from './constants';
                    console.log(constants.A); // 1
                    console.log(constants.B); // 3
              </textarea>
            6.import()返回一个 Promise 对象 用来动态加载 import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载
            7.import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">Class</h1><div class="segment-content">
            1.用法如下
              <textarea>
                  //es5
                    function Point(x, y) {
                      this.x = x;
                      this.y = y;
                    }

                    Point.prototype.toString = function () {
                      return '(' + this.x + ', ' + this.y + ')';
                    };
                    var p = new Point(1, 2);

                     //es6
                    class Point {
                      constructor(x, y) {
                        this.x = x;
                        this.y = y;
                      }
                      toString() {
                        return '(' + this.x + ', ' + this.y + ')';
                      }
                    }
                    var p=new Point("a","b")
                    console.log(p.toString())//(a, b)
              </textarea>
            2.constructor方法，这就是构造方法，而this关键字则代表实例对象
            3.前面不需要加上function这个关键字，直接把函数定义放进去方法之间不需要逗号分隔
            4.类的所有方法都定义在类的prototype属性上面,可以通过Point.prototype扩展方法
              <textarea>
                 Point.prototype.showName=function(){
                      console.log("显示名字")
                 }
              </textarea>
            5.类的内部所有定义的方法，都是不可枚举的
            6.类的属性名，可以采用表达式 [methodName]() {}
            7.类和模块的内部，默认就是严格模式
            8.一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
            9.constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象
                class Foo {
                    constructor() {
                    return Object.create(null);
                    }
                }
                new Foo() instanceof Foo
            10.类必须使用new调用，否则会报错
            11.实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上
            12.类的所有实例共享一个原型对象
            13.Class 表达式
              f <textarea>
                   const MyClass = class Me {
                      getClassName() {
                        return Me.name;
                      }
                    };
                   //这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类
                   //如果内部不用me
                   可以进一步简化
                   const MyClass = class {};
                   //立即执行的类
                   let person = new class {
                      constructor(name) {
                        this.name = name;
                      }
                      sayName() {
                        console.log(this.name);
                      }
                   }('张三');
                   person.sayName(); // "张三"
               </textarea>
            14.类不存在提升,所以必须保证子类在父类之后定义
               <textarea>
                      var t=new Test()
                      console.log(t.name)//aaa
                      function Test(){
                          this.name="aaa"
                      }

                   //类
                    new Foo(); // 报错 ReferenceError
                    class Foo {}
               </textarea>
            15. ES6 不提供类内部使用私有方法和私有属性,通过以下方式变通实现
                I. 命名上区别,加上_表示私有
                II.私有属性的提案是属性名之前，使用#表示,私有方法同理
            16.Class 的静态方法 通过在方法前面加static实现,静态方法可以与非静态方法重名,父类的静态方法，可以被子类继承,静态方法也是可以从super对象上调用的
                <textarea>
                    class Foo {
                      static classMethod() {
                        console.log('hello');
                      }
                    }

                    Foo.classMethod() // 'hello'
                    var foo = new Foo();
                    foo.classMethod() //Uncaught TypeError: foo.classMethod is not a function
                </textarea>
            17.Class的静态属性 使用如下,还有一种是类的静态属性只要在上面的实例属性写法前面，加上static关键字就可以了
              <textarea>
                    class Foo {
                    }
                    Foo.prop = 1;
                    Foo.prop // 1
              </textarea>
            18.类的实例属性可以用等式，写入类的定义之中,目前chrome不支持，但是转码器支持,以前，我们定义实例属性，只能写在类的constructor方法里面
                <textarea>
                    class MyClass {
                      myProp = 42;
                      constructor() {
                        console.log(this.myProp); // 42
                      }
                    }
                </textarea>
            19.new.target 属性,如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的,
               Class 内部调用new.target，返回当前 Class,子类继承父类时，父类中new.target会返回子类,只在构造函数中有效
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">Class 的继承</h1><div class="segment-content">
            1.super调用
              I.作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
              II.super作为对象时，在普通方法中，指向父类的原型对象super.p()就相当于A.prototype.p(),所以定义在父类实例上的方法或属性，是无法通过super调用的,此时方法内部的this指向当前的子类实例；
              III.在静态方法中，指向父类,也就是等于父类
                 <textarea>
                     class Parent {
                      static myMethod(msg) {
                        console.log('static', msg);
                      }

                      myMethod(msg) {
                        console.log('instance', msg);
                      }
                    }

                    class Child extends Parent {
                      static myMethod(msg) {
                        super.myMethod(msg);
                      }

                      myMethod(msg) {
                        super.myMethod(msg);
                      }
                    }
                    Child.myMethod(1); // static 1
                    var child = new Child();
                    child.myMethod(2); // instance 2
                 </textarea>
               VI.子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例. 通俗讲，静态就是类本身

            2.子类必须在constructor方法中调用super方法,先构造父类的实列，也就是this,然在在把子类补上
            3.只有调用super之后，才可以使用this关键字
            4.因为Object.getPrototypeOf(ColorPoint) === Point 使用继承父类的静态属性和静态方法
            5.继承原生构造函数
               <textarea>
                   class MyArray extends Array {
                      constructor(...args) {
                        super(...args);
                      }
                    }

                    var arr = new MyArray();
                    arr[0] = 12;
                    arr.length // 1

                    arr.length = 0;
                    arr[0] // undefined
               </textarea>
            6,Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">修饰器</h1><div class="segment-content">
            1.用法如下
              <textarea>
                    @testable
                    class MyTestableClass {

                    }
                    function testable(target) {
                       target.isTestable = true;
                    }
                    MyTestableClass.isTestable // true
                   //target就是类本身
              </textarea>
            2.修饰器函数的第一个参数，就是所要修饰的目标类,可以在修饰器外面再封装一层函数来实现多个参数
               <textarea>
                    function testable(isTestable) {
                      return function(target) {
                        target.isTestable = isTestable;
                      }
                    }

                    @testable(true)
                    class MyTestableClass {}
                    MyTestableClass.isTestable // true

                    @testable(false)
                    class MyClass {}
                    MyClass.isTestable // false
               </textarea>
            3.修饰器本质就是编译时执行的函数
            4.添加实例属性，可以通过目标类的prototype对象操作
            5.JS的解析过程分为两个阶段：预编译期(预处理)与执行期。有了编译阶段才能理解变量提升
               I.预编译期JS会对本代码块中的所有声明的变量和函数(声明式函数function test(){})进行处理,而且变量也只是进行了声明但未进行初始化以及赋值
            6.方法的修饰
              I.用法如下
                <textarea>
                    class Person {
                        @readonly
                        name() { return `${this.first} ${this.last}` }
                    }

                    function readonly(target, name, descriptor){
                         console.log(target) //Person
                         console.log(name) //属性名
                         console.log(descriptor) //属性描述符
                         descriptor.writable = false;
                         return descriptor;
                    }
                </textarea>
              II.修饰器第一个参数是类的原型对象，上例是Person.prototype
              III.可以有多个修饰器包属性和类修饰器
                  <textarea>
                        @testable
                        class Person {
                          @readonly
                          @nonenumerable
                          name() { return `${this.first} ${this.last}` }
                        }
                  </textarea>
              VI.如果同一个方法有多个修饰器,从上到下执行外面函数，然后从下到上执行里层函数
                 <textarea>
                     class Person {
                        @readonly1
                        @readonly2
                        @readonly3
                        name() { return `${this.first} ${this.last}` }
                    }

                    function readonly1(target, name, descriptor){
                        console.log("到1")
                        descriptor.value=1;
                        return descriptor;
                    }
                    function readonly2(target, name, descriptor){
                        console.log("到2")
                        descriptor.value=2;
                        return descriptor;
                    }
                    function readonly3(target, name, descriptor){
                        console.log("到3")
                        descriptor.value=3;
                        return descriptor;
                    }
                    var p=new Person()
                    console.log(p.name)
                      //到3
                      //到2
                      //到1
                      //1
                 </textarea>
            7.修饰器不能用于单个函数
            8.变量提升，函数最前，然后变量
              <textarea>
                var counter = 0;
                var add = function () {
                  counter++;
                };
                @add
                function foo() {

                }
                //提示后
                @add
                function foo() {
                }
                var counter;
                var add;
                counter = 0;
                add = function () {
                  counter++;
                };
              </textarea>
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">babel转码器</h1><div class="segment-content">
            //官方api http://babeljs.io/docs/en/babel-plugin-transform-runtime/
            1.Babel默认只转换新的JavaScript句法（syntax），而不转换新的API,意思是说浏览器不支持的api只能通过polyfill提供支持
              <textarea>
                   let x = n => n + 1
                   //转换后
                    var x = function x(n) {
                        return n + 1;
                    };
              </textarea>
            2.presets env情况
               I.如果没有任何配置选项，babel-preset-env的行为与babel-preset-latest一样
               II.配置为仅包含您支持的浏览器所需的填充和变换
                  //配置参考https://github.com/browserslist/browserslist
                  <textarea>
                   {
                      "presets": [
                        ["env", {
                          "targets": {
                            "browsers": ["last 2 versions", "safari >= 7"]
                          }
                        }]
                      ]
                    }
                  </textarea>
            III.modules使用
              "amd" | "umd" | "systemjs" | "commonjs" | false，默认为"commonjs"。
               启用将ES6模块语法转换为另一种模块类型。将此设置为false不会转换模块。
              <textarea>
                  {
                      "presets": [
                        ["env", {
                          "targets": {
                            "chrome": 52
                          },
                          "modules": false,
                          "loose": true
                        }]
                      ]
                }
              </textarea>
             VI.env将支持我们认为最新版本的JavaScript（通过匹配我们的工作babel-preset-latest）中的所有插件
            3.stage 越大越确定
                Stage-X（实验预设）
                    stage-x预设中的任何变换都是对未被批准成为Javascript版本（如ES6 / ES2015）一部分的语言的更改。
                    第0阶段
                        此预设包括以下插件：
                            变换-DO表达式
                            变换函数绑定
                        以及来自预设的所有插件：
                            预设阶段-1
                            预设阶段-2
                            预置阶段-3
                  第1阶段
                    此预设包括以下插件：
                            转变出口的扩展
                    以及来自预设的所有插件：
                        预设阶段-2
                        预置阶段-3
                  第2阶段
                        此预设包括以下插件：
                            语法动态导入
                            变换级的属性
                            transform-decorators 禁用待定提议更新（同时可以使用旧版转换）
                        以及来自预设的所有插件：
                         预置阶段-3
                  第3阶段
                        此预设包括以下插件：
                            变换对象的休息扩
                            变换异步发电机函数
            4.用例介绍
              <textarea>
                  //第一种
                  {
                    // 此项指明，转码的规则
                    "presets": [
                        // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码
                        ["env", { "modules": false }],
                        // 下面这个是不同阶段出现的es语法，包含不同的转码插件
                        "stage-2"
                    ],
                    // 下面这个选项是引用插件来处理代码的转换，transform-runtime用来处理全局函数和优化babel编译
                    "plugins": ["transform-runtime"],
                    // 下面指的是在生成的文件中，不产生注释
                    "comments": false,
                    // 下面这段是在特定的环境中所执行的转码规则，当环境变量是下面的test就会覆盖上面的设置
                }
                //第二种
                 {
                  "presets": ["es2015", "stage-2"],
                 }
              </textarea>



        </div></div>
        <div class="segment-wraper"><h1>es6题:</h1><div class="summary">
            1.箭头函数
              I.不能做构造函数
              II.函数里面不能使用arguments对象
            2.let用法
              I.只在代码块有效
              II.不存在变量提升
              III.变量名不能重复
              VI.通过left声明的变量，不能通过window.a访问
            3.Class的讲解
              I.是函数的用法糖，里面包括构造函数，原型链上的方法
              II.

        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.babel使用
              I.vue中只需要
                 <textarea>
                      {
                        "presets": [
                          "es2015",
                          "stage-2"
                        ]
                      }
                 </textarea>
            II.babel配置文件
                {
                "presets": [],
                "plugins": []
                }
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
