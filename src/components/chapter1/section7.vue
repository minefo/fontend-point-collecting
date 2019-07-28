<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">$app应用管理</h1><div class="segment-content">
            1.不常用
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$array数组操作</h1><div class="segment-content">
            1.创建一个数组 @arr=$array();
            2.format用法 everyItem是数组中的item,varId是数组中的index
              <textarea>
                  $function main(){
                        @arr=$array();
                        @arr.add("a");
                        @arr.add("b");
                        @arr.add("c");
                        @arr2=$array();
                        @arr2.add("d");
                        @arr.merge(@arr2);
                        @format={%##:{*everyItem}={*varId}%};
                        $content.write(@arr.format(@format,everyItem,varId));
                  }
              </textarea>
            3.foreach用法
              <textarea>
                  $function main(){
                    @arr=$array();
                    @arr.add("a");
                    @arr.add("b");
                    @arr.add("c");
                    @arr2=$array();
                    @arr2.add("d");
                    @arr.merge(@arr2);
                    @arr.foreach(item,index){
                    $content.write(@item);
                    $content.write(@index);
                    };
                    }
              </textarea>
            4.@arr.contains(b) 包含返回1，不包含返回0
            5.sort 全部按字符值来排序


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$debug调试</h1><div class="segment-content">
            1.endTry用来结束，这样可以重新来捕获，否则isTry为1 getTry就是上一次的信息
              <textarea>
                  $function main(){
                        $debug.beginTry();
                        $file.readText(wweefefw);
                        $if($debug.isTry()){
                        $content.write($debug.getTry());
                        }
                        $else{
                        $content.write(保存成功);

                        }

                        $debug.endTry();
                        $if($debug.isTry()){
                        $content.write($debug.getTry());
                        }
                 }
              </textarea>
            2.异常捕获只能捕获异常，不能捕获语法错误
            3.可以在工具里输出变量值 $debug(到这类了);
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$cache缓存</h1><div class="segment-content">
            1.不常用
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$content当前内容</h1><div class="segment-content">
            1.$content.goto(aw中国,a=1&c=1);地址变成?xmls=lib/aw中国&a=1&c=1
            2.$content.writeHtml(bottom.html);//如果bottom.html在同一级目录，就可以输出,并且里面的动态程序也会执行
            3.$content.writeText以文本形式输出文件，里面的动态程序不执行
            4.$content.redirect(bottom.html); 路径变成http://localhost:61792/basic/lib/bottom.html
            5.$content.getType() 获取文档类型
            6.各种设置只对当前执行有效
            7.$content.url() 输出http://localhost:61792/basic/default.ashx
            8.$content.path() 输出/basic/default.ashx (除去端口和域名、协议)
            9.$content.query() 输出xmls=lib/test.xmls&method=submit&temp=8840
            10.$content.pathAndQuery() 输出/basic/default.ashx?xmls=lib/test.xmls&method=submit&temp=4359
            11.$content.host() 输出localhost
            12.$content.hostAddress() 本地输出::1
            13.$content.getWrite() 获取之前所有输出包括write writeHtml writeText
            14.$content.show(index.html) 输出\basic\lib\cn\index.html 也就是当前cn目录中的文件 并且html可以访问当前变量 如:{@Navigation},还可以带上路径 $content.show(desktop.html,$global[skin]);

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$control功能</h1><div class="segment-content">
            1.$control.dataPager 不常用，用$query的pager取代
            2.$control.dataFormat 不常用
            3.$control.rand(10,0) type 0表示数字，其他表示字符串
            4.$control.thumbnail 压缩图片 type 0压缩成指定长度 1宽度优先 2高度优先
            <textarea>
                    @original={%#&:{#root}/images/demo.jpg%};
                    @smallPic={%#&:{#root}/images/t.jpg%};
                    $control.thumbnail(@original,@smallPic,100,100,1);
              </textarea>
            5.$control.waterImage type有好多值
            <textarea>
                @original={%#&:{#root}/images/demo.jpg%};
                $control.waterImage(@original,@original,0,测试水印,0.2,4);
            </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$datetime日期时间</h1><div class="segment-content">
            1.now //2018/8/27 11:52:23  表示当前时间
            2.today  //2018/8/27 0:00:00 表示一天的开始时间
            3.compare比较日期(0等于，1大于，-1小于)  //$content.write($datetime.compare(2018-02-01,2019-02-02)); //-1 //a和b比较
            4.toString 按指定格式输出 //$content.write($datetime.today().toString(yyyy年MM月dd日)); //2018年08月27日
            5.addDay  //$content.write($datetime.now().addDays(1)); 其他类似 addYears  addMonth addDays addHours addMinutes addSeconds addMilliseconds
            6.millisecond  //$content.write($datetime.now().millisecond());  其他类似 year month day hour minute second millisecond
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$db数据访问</h1><div class="segment-content">
            1.$db.table //返回列表
              <textarea>
                  @table=$db.dataTable({%select * from newscontent %});
                    @table.foreach(row,i){
                    $content.write(@row[title]);
                    $content.write(<br/>);
                  }
              </textarea>
            2.$db.dataRow //返回一行数据
              <textarea>
                   $db.dataRow(select ProductID\,ProductName\,Pic from cnproduct where productid={@productid});
              </textarea>
            3.$db.dataMap //返回一行数据
                <textarea>
                    $db.dataMap(select * from {$name(order\)} where OrderID={#number:id});
                </textarea>
            4.dataScalar查询数据库返回一个数据
               <textarea>
                   @amountwo=$db.dataScalar(select count(*\) from newscontent);
                   $content.write(@amountwo);//35
               </textarea>
            5.nonQuery 执行一个语句，没有返回值，比如更新数据或者删除数据
              <textarea>
                  $db.nonQuery({%update  {$name(image)} set Title='{$get.sql(title)}' where PicID ={$get.sql(PicID)}%});
              </textarea>
            6.transaction //执行一个事务
              <textarea>
                  @status=$db.transaction(select count(*\) from newscontent);
                  $content.write(@status);//true
              </textarea>
            7.$db.sql 转化sql
             <textarea>
                 @topwhere={%1>0 {=}  and UserID={$get.sql(UserID)}%};
                 @topwhere=$db.sql(@topwhere);
             </textarea>
            8.$db.getTables() //获取当前数据库所有表名
            9.$db.hasTable 判断表明是否存在 //$db.hasTable(newscontent) 0 失败 1成功 注意没有s

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$cookie对像</h1><div class="segment-content">
            1.获取cookie $cookie.get(name) //如果没有值就返回空
            2.设置cookie  $cookie.set(name,"我是cookie",10); //过期时间以秒为单位
            3.如果不存在，就返回$null
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$format格式化对像</h1><div class="segment-content">
            1.用法
             <textarea>
                 @everyItem=aaa;
                @format={%##:{*everyItem}{=body}aaaccc{=list}<li>测试</li>{=}<a>链接</a>{=bottom}<div>这里是底部</div>%};
                @Body=@format.toString(body,list);
//aaaccc
//测试
//链接
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$map对像</h1><div class="segment-content">
            1.创建一个map,以及对map进行操作,其实就key-value形式的数据
              <textarea>
                    @m=$map();
                    @m.set(a,我);
                    @m.set(b,你);
                    @m.set(c,他);
                    $content.write(@m.get(c));
              </textarea>
            2.格式化处理
             <textarea>
                @m=$map();
                @m.set(a,我);
                @m.set(b,你);
                @m.set(c,他);
                @format={%##:{*everyItem}={*varId}%};
                $content.write(@m.format(@format,everyItem,varId));
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$number数字操作</h1><div class="segment-content">
            ceiling 向上取整 1.25 变成2
            floor 向下取整  1.25 变成1
            random随机数 参数是最大值 $number.random(5) 表示//0,1,2,3,4 随机出这几个值
            abs 取绝对值
            min 取两个数中的最小数
            max取两个数中的最大数
            round $content.write($number.round(3.14156,2));//3.14 //最多保留多少小数位

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$string字符串操作</h1><div class="segment-content">
            indexOf查找字符
             <textarea>
                 @a=$string(2222e111);
                 $content.write(@a.indexOf(ea));//没有找到返回-1
             </textarea>
            lastIndexOf 类似indexOf
            replace 替换字符 @a=$string(2222e111);  $content.write(@a.replace(e,我是文字));
            length 获取字符串的长度
            toUpper 将指定内容转为大写
            toLower 将指定内容转为小写
            trim 去除指定内容
            trimStart 删除开始的空格
            trimEnd 删除结尾的空格
            substring 截取字符串 最后一个参数表示长度
            lastSubstring 类似substring
            split分割字符串
            <textarea>
                @a=$string(a|b|);
                @arr=@a.split(|,1); //0 保留空项 1移除空项
                $content.write(@arr.count());
            </textarea>
            append 追加字符串
            startsWith $content.write(@a.startsWith(a)); 判断是否以某个子串开头 0不是 1是
            endsWith追加字符串  判断是否以某个子串结尾  0不是 1是
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$get 正文对像</h1><div class="segment-content">
            $get(key,默认值)//以get方式获取参数，没有就用默认值，没有默认值就是null
            queryArray
             <textarea>
                 @arr=$get.queryArray(a,b,c);//必须带上要获取的参数key,key不存在就返回null
                 $content.write(@arr.toJson());
             </textarea>
            queryMap //以key-value方式获取参数
            number //获取数值型参数，如果类型不是数值或者key不存在就返回默认值
              <textarea>
                  @num=$get.number(c,0);
                 $content.write(@num);
              </textarea>
            datetime 同理number
             <textarea>
                 @num=$get.datetime(c,2018-1-1);
                 $content.write(@num);
             </textarea>
            sql 同理number 只是这里是字符串类型
            toHidden 不常用
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$table数据表操作</h1><div class="segment-content">
            get 获取数据表中的行
                <textarea>
                   @table=$db.dataTable(select * from newscontent);
                   $content.write(@table.get(0).toJson());
                </textarea>
            count 获取表的行数
            format 字符串格式化
            foreach 循环遍历数据输出
            getRow 获取数据表中的行对应的值
               <textarea>
                   @table=$db.dataTable(select * from newscontent);
                   $content.write(@table.getRow(1,title));
               </textarea>
            fillArray 填充数组 第一个参数是数组，第二个参数表示数据行中哪个字段
               <textarea>
                   @table=$db.dataTable(select * from newscontent);
                    @itemList=$array();
                    @itemList.add(无);
                    @table.fillArray(@itemList,title);
                    $content.write(@itemList.toJson());
               </textarea>
            fillMap 暂无
            fillList循环格式化数据输出
               <textarea>
                   @table=$db.dataTable(select * from newscontent);
                    @list=$list();
                    @table.fillList(@list,Title,Tips);  //第一个参数是key，第二个参数是value
                    $content.write(@list.toJson());
               </textarea>
            getColumns 获取所有列 $content.write(@table.getColumns().toJson());
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$test验证对像</h1><div class="segment-content">
           有问题
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$upload上传文件</h1><div class="segment-content">
            有问题
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$post获取表单数据</h1><div class="segment-content">
            $content.write($post(myname,陈叙华)); 以获取post提交过来的参数，没有就默认，没有默认值就是null
            基本上同理$get
        </div></div>


        <div class="segment-wraper"><h1 class="segment-title">$session会话对像</h1><div class="segment-content">
            $content.write($session[userid]);//设置,获取sesssion
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$row表格行对像</h1><div class="segment-content">
            对行数据进行操作
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$assembly程序集</h1><div class="segment-content">
            1.call加载程序集
              $assembly.call($get(method,test));
            2.eval加载程序集  暂无
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$csv数据集csv</h1><div class="segment-content">
            1.对csv进行操作，csv是以逗号分隔的数据
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$execute执行功能调用</h1><div class="segment-content">
            1.执行其他文件程序
             <textarea>
                 $execute(session.xmls);
                 //session.xmls //也就说执行文件中的main方法
                 $function main(){
                  $content.redirect($join($web.getPath(?xmls=cn/login.html)));
                 }
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$file获取文件</h1><div class="segment-content">
            1.对文件以及文件目录进行操作
              <textarea>
                 @path={%#&:{#root}files/images/%};
                 @file=$file.getFiles(@path);
                 @file.foreach(item,index){
                   $content.write($file.getFileName(@item));
                 }
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$form表单布局操作</h1><div class="segment-content">
            1.用法
              <textarea>
                   $sub show(){
                        @form.append(@form.createTest(form1,checkForm,alert,onTest,AdminName,Email));
                        @form.append({%#&:<div class="data_title"><img src="{#apps}manage/images/icon/28.png" align="absmiddle" /> {@res[edit]}</div><div class="data_table"><table width="100%" border="0" cellspacing="0" cellpadding="0" >%});
                        @form.appendGroupInput({%##:{=standard}<tr><th width="30%">{*text}</th><td width="70%">{*value}</td></tr>%});
                        @form.append({%#&:</table></div><div class="data_submit">
                          <input type="submit" value="{@res[save]}" /> <input type="button" value="{@res[cancel]}" onclick="window.top.closeAlert('{@Title}',null)" /></div>%});
                    }
                    //添加数据
                    $sub add(){
                        @form=$form(@Name);
                        @show();
                        @Body=@form.toAction(form1,post,{%#&:?xmls={#self}{@Name}_edit.xmls&method=insert%},checkForm);
                        $content.show(edit.html);
                    }
              </textarea>
            //@form.append(@form.createTest(form1,checkForm,alert,onTest,AdminName,Email)); form1表示form的id和name名称
            //checkForm提交的回调
            //错误提示回调
            //onTest 自定义验证回调
            //AdminName,Email要验证的字段,验证规则在resource里面
            2.创建自动验证
             @form.append(@form.createGroupTest(form1,checkForm,alert,onTest,form,L1,L2,L3));
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$global全局变量操作</h1><div class="segment-content">
            1.是操作root/data/global.data.config中的数据
            2.用法
             <textarea>
                 $global[title]=培训世界2;
                $global.update();
                $content.write($global[title]);
             </textarea>
            3.global[]当前目录的全局，global()全局目录的变量
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$html对html代码操作</h1><div class="segment-content">
             1.创建input输入框
               <textarea>
                   $content.write($html.inputText(App,测试,id="App"));
                   <!--//<input type="text" name="App" value="测试" id="App">-->
               </textarea>
            2.创建select控件
              <textarea>
                  @query=$query(content,news);
                  @table=@query.dataTable({%contentId,title%}, 1>0,{%Grade desc%});
                  $content.write($html.inputSelect(test,test,@table));
              </textarea>
            3.创建checkbox框
              <textarea>
                  @str=$string(a|b|c|d);
                  $content.write($html.inputCheckGroup(Extend,@str.split(|),#list:notEmpty:禁止为空|unicode:统一码|remark:备注));
                  <!--<div><input type="checkbox" name="Extend" value="notEmpty"><label for="Extend">禁止为空</label></div>-->
              </textarea>
            4.创建radio框
             <textarea>
                 $content.write($html.inputRadioGroup(Extend,@str.split(|),#list:notEmpty:禁止为空|unicode:统一码|remark:备注));
             </textarea>
            5.输出文本
              <textarea>
                  @str=$string(a|b|c|d);
                  $content.write($html.getText(@str,1,1,1));
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$import输入</h1><div class="segment-content">
           1.引入模块
             <textarea>
                 $import.put(common,~lib/m.xmlc);
                  @common.test();
             </textarea>
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$layout布局</h1><div class="segment-content">
            1.appendHead 往网页头部插入脚本
            <textarea>
                $layout.appendHead({%#&:<script>
                alert("你好");
                </script>%});
            </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$list列表</h1><div class="segment-content">
            1.用法
              <textarea>
                    @list=$list();
                    @list.add(#int:0,超级管理员);
                    $content.write($html.inputSelect(a,b,@list));
              </textarea>
            2.get
              <textarea>
                @list=$list();
                @list.add(#int:0,超级管理员);
                $content.write(@list.get(0)); //超级管理员
              </textarea>
            3.set用法
              <textarea>
                  @list=$list();
                  @list.add(#int:0,超级管理员);
                  @list.set(#int:2,超级管理员2);
                  $content.write($html.inputSelect(a,b,@list));
              </textarea>
            4.toJson用法
              <textarea>
                  [{"0":"超级管理员"},{"2":"超级管理员2"}]
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$match正式表达式匹配</h1><div class="segment-content">
            暂无
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$query创建查询对象</h1><div class="segment-content">
             1.用法 pager最后一个参数表示页码前后有多少个项
              <textarea>
                  @format={%##:{=body}<div class="milddle_syap"><ul>
                    {@data[list]}</ul></div><div class="milddle_syap_div">{@data[ctrl]}</div>{=list}
                    <li><a href="{#^:?xmls=cn/Noticecontent.html&contentid={*contentid\}}" style="color:#555555;">{*Title}</a><span>[{#toDatetime:Modified,yyyy/MM/dd}]</span></li>{=option}
                    <a href="{*link}" class="middle_zxjj2_a5">{*text}</a>
                    {=selected}
                    <a href="{*link}" class="middle_zxjj2_a6">{*text}</a>
                    {=ctrl}
                    <a href="{*home}" class="middle_zxjj2_a4">首页</a>
                    {*listPage}
                    <a href="{*last}" class="middle_zxjj2_a4">末页</a>%};
                    @query=$query(content,news); //content和news参数表示 未能找到路径“D:\research\back-end\back-end\basic\apps\news2\data\test\content.test.config”的一部分
                    @sqlWhere=catalogid=21 and status=1;
                    @data=@query.pager(@format,*,@sqlWhere,ContentID\,Grade desc,6,$get.number(page,1),5);
                    $content.write(@format.toString(body));
              </textarea>
            2.get用法 @format同上
              <textarea>
                    @query=$query(content,news);
                    @sqlWhere=catalogid=21 and status=1;
                    @data=@query.pager(@format,*,@sqlWhere,ContentID\,Grade desc,6,$get.number(page,1),5);
                    $content.write(@query.get(title)); //惠普杯上海财经大学第五届金融产品设计
              </textarea>
            3.getDataValue 同get
            4.dataCount 行数
            5.table 用法 最后一个参数是top
              <textarea>
                    @query=$query(content,news);
                    @table=@query.dataTable({%title,tips%},Status=1,{%Grade desc%},2);
                    $content.write(@table.toJson());
              </textarea>
            6.dataRow 用法
             <textarea>
                 @query=$query(content,news);
                 @table=@query.dataRow({%title,tips%},Status=1,{%Grade desc%});
                 $content.write(@table.toJson());
             </textarea>
            7.dataMap 用法 所有map表示key-value
              //{"tips":"\t上海财经大学已有95年历史，现为教育社会主义","title":"中心简介"}
            8.查询单个列
              <textarea>
                  @query=$query(content,news);
                  @col=@query.dataScalar({%title,tips%},Status=1,{%Grade desc%});
                  $content.write(@col);
              </textarea>
            9.getTestText 注意区分大小写
              <textarea>
                   @query=$query(content,news);
                   $content.write(@query.getTestText(Title));
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$regex正则表达式</h1><div class="segment-content">
            1.用法
              <textarea>
                    @pattern=t.(jpg|png|bmp|gif);
                    $if($regex.isMatch(test.jpg,@pattern)){
                    $content.write(成功);
                    }
                    $else{
                    $content.write(失败);
                    }
              </textarea>
            2.匹配一个match

            3.匹配多个matches

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$request页面请求</h1><div class="segment-content">
            暂无
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$resource资源对象</h1><div class="segment-content">
           1.用法 表示D:\research\back-end\back-end\basic\apps\admin\data\resource\cn
             <textarea>
                @res=$resource(test,admin);
                @myName=@res[myName];
                $content.write(@myName);
             </textarea>
            2.getArray
              <textarea>
                  @myName=@res.getArray(myName);//一定要传入key才能获取到值
                  $content.write(@myName.toJson());
              </textarea>
            3.getList 用法同getArray //输出 [{"":"minofo"}]
            4.getMap 用法同getArray //输出 [{"":"minofo"}]
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$store存贮对象</h1><div class="segment-content">
            1.insert用法 数据库会插入一条数据
              <textarea>
                    @store5=$store(content,news);
                    @store5[Tips]=store添加的;
                    @store5.insert();
              </textarea>
            2.delete 需要传入标识 deleteWhere 可以传入sql条件
            3.queryGet 从查询字符串中找值填充
              <textarea>
                  @store=$store(content,news);
                    @store[Title]=这里是标题;
                    @store[Tips]=这里是tips;
                    @store.queryGet(a,c);
                    $content.write(@store[a]);
              </textarea>
            4.updateWhere
              <textarea>
                   @store=$store(content,news);
                    @store[Title]=这里是标题;
                    @store[Tips]=这里是tips;
                    @store.updateWhere(contentId=66);
              </textarea>
            5.$content.write(@store.toSql(AdminID,'1')); //管理员标识 : '1' 不是数字类型，说明进行验证了
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$system系统功能</h1><div class="segment-content">
            1.$system.getApps() //$content.write($system.getApps().toJson()); 获取所有应用模块
            2.$system.getTestList(news).toJson()  //["catalog","content"]
            3.$system.getResourceList(news).toJson()//["catalog","content","public","table","template"]
            4.$system.getMode()//virtual
            5.$system.getCulture() //cn
            6.$system.setMessage(aaaaaaaaa);
              $content.write($system.getMessage());//aaaaaaaaa

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$testBulider数据创建</h1><div class="segment-content">
            1.用法 获取test文件中的字段
              <textarea>
                  @format={%##:<tr style="height:25px;">
                      <td style="text-align:center"><a href="javascript:goEdit('{*Name}','table,root')">[{@res[edit]}]</a>&nbsp;&nbsp;<a href="javascript:DeleteEx('{*Name}','table,root')">[{@res[delete]}]
                    &nbsp;&nbsp;<a href="javascript:GoUp('{*Name}')">[{@res[up]}]</a>&nbsp;&nbsp;<a href="javascript:GoDown('{*Name}')">[{@res[down]}]</a>
                      </td>
                      <td>{*Name}</td>
                      <td>{*Type}</td>
                      <td>{*Size}</td>
                      <td>{*Default}</td>
                      <td>{*Extend}</td>
                      <td>{*App}</td>
                      <td>{*Group}</td>
                      <td>{*Text}</td>
                      <td>{#select:Index,0:否|1:是}</td>
                    </tr>%};
                    @bulider=$testBulider(@Table,@Root);
                    @table=@bulider.getItemList($system.getCulture(),0);
                    @Body=@table.format(@format);
                    $content.show(table_list.html);
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$var变量</h1><div class="segment-content">
            1.用法
             <textarea>
                 $var.set(name,aaa);
                 $content.write($var.get(name));//aaa
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$web页面字符处理</h1><div class="segment-content">
            1.getPath把路径转换成实际在浏览器上显示的路径  $content.write($web.getPath(?xmls=cn/index.html)); ///basic/cn/index.html
            2.getAbsolutePath   $content.write($web.getAbsolutePath(?xmls=cn/index.html)); // /basic/lib/?xmls=cn/index.html
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">$if条件句话</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$else条件否</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">$elseif否则假如</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">$switch选择语句</h1><div class="segment-content">
            1.用法
              <textarea>
                   @test=4;
                    $switch(@test){
                    $case 0:{
                    @file=cn/orderonline.html;
                    }
                    $case 1:{
                    @file=cn/ordercod.html;
                    }
                    $case 2:{
                    @file=lib/order_bank.xmls;
                    }
                    $case 3:{
                    @file=cn/order_amount.xmls;
                    }
                    $case 4:{
                    @file=lib/order_Points.xmls;
                    }
                    }
                    $content.write(@file)
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$break中断循环</h1><div class="segment-content">
            1.用法 用来从循环中退出
            <textarea>
                @arr=$array();
                @arr.add("a");
                @arr.add("b");
                @arr.add("c");
                @arr2=$array();
                @arr2.add("d");
                @arr.merge(@arr2);
                @arr.foreach(item,index){
                $content.write(@item);
                $content.write(@index);
                $if(@index==1){
                $break;
                }
                };
                $content.write(结束了);
            </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$continue用法</h1><div class="segment-content">
            1.用法，用来不填充前面的format
            <textarea>
              @Navigation=@appsList.format({%##:<li><img src="{#root}apps/{*root}/{*icon}"/> <a href="javascript:goUrl('?xmls=apps/{*root}/manage/index.xmls')">{*title}</a></li>%},row){
                $if(@showItem.contains(@row[Root])==0){
                $continue;
                }
              }
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$return返回</h1><div class="segment-content">
            1.用法，可以用来返回值
             <textarea>
               $function test(){
                  @val=@myReturn();
                  $content.write(@val);
                }

                $function myReturn(){
                  $return(22);
                }
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$empty空</h1><div class="segment-content">
            1.用法，表示空字符串 $if(@store[Price]==$empty)


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$null</h1><div class="segment-content">
            1.表示null $if(@grade==$null)
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$while循环</h1><div class="segment-content">
            1.用法
             <textarea>
                @count=0;
                $while(@count<20){
                @count=(@count+1);
                $content.write(@count);
                }
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$end结束程序</h1><div class="segment-content">
            1.$end()后面的输出丢掉
            <textarea>
                $content.write(1);
                $content.write(2);
                $end();
                $content.write(3);
            </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$class类引用</h1><div class="segment-content">
            1.用法 注意文件格式必须是xmlc,并且xmlc里面必须要有load方法
             <textarea>
                 @mail=$class(test,news);
                 @mail.sendHtml();
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$function函数定义</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">$sub子过程</h1><div class="segment-content">
            $function和$sub区别是$sub可以访问父函数的变量
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$include包含html文件</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">$and与 </h1><div class="segment-content">
            1.用法
            <textarea>
                $if($and($iif($empty==$empty),$iif($null==$null))){
                  $content.write(222); //222
                }
                $else{
                  $content.write(333);
                }
            </textarea>
            2.还有个$not
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$or或</h1><div class="segment-content">
            1.用法同$and
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$join合并字符</h1><div class="segment-content">
            1.用法 //abcd
              <textarea>
                @a=a;
                @b=b;
                @c=c;
                $content.write($join(@a,@b,@c,d));
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">$iif条件语句</h1><div class="segment-content">
            1.用法 {$iif(@showItem.contains(@row[Root])==1,checked,$empty)} 是真的情况 执行第一个，是假的情况执行第二个
             <textarea>
                       {%$iif($resource.exists(@App,@Root)==1,{%#&: <a href="?xmls={#self}app_edit.xmls&method=apps&app={@App}&root={@Root}&layout={$get(scope)}" >
      <img src="{#apps}manage/images/icon/11.png" border="0" align="absmiddle" /> {@res[add]}</a>%\},{%#&:  <a href="?xmls={#self}layout.xmls&method=create&{$content.query(resource,root,scope)}" >
       当前没有找到相应资源文件，点击此处创建</a>%\})%} //注意这里不要换行
             </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">内部命令</h1><div class="segment-content">
            root
            <textarea>
                 @format={%##:{#root}%};
                 $content.write($string.eval(@format));// /basic/
            </textarea>
            self 用法同root // lib/
            file // lib/test.xmls
            app
            apps // /basic/apps//
            .html
            .xmls
            culture //cn
            map
            list
            array
            &
            #
            ~
            left
            leftw 截取字符
             <textarea>
                @Title=2222222;
                @format={%##:{#leftw:Title,2,...}%};
                $content.write($string.eval(@format));
             </textarea>
            toDate
            toDatetime
            htmlEncode
            urlEncode
            xmlEncode
            textEncode
            whenEmpty
            string
            number
            datetime
            object
            select
        </div></div>


        <div class="segment-wraper">
            <h1>本节总结:</h1>
            <div class="summary">
            1.不进行映射访问路径 /default.ashx?xmls=cn/syap.html
            2.开启路径映射访问后就变成/cn/syap.html
            3.数据库目录 \basic\data*access*
            4.需要启动ASP.NET 状态服务
            5.在xmlc.config中要用XMLS.xml中的功能
            6.字符不需要双引号
            7.每一句必须要有分号结尾
            8.ajax请求 注意文件格式是xmls
              <textarea>
                function testAjax() {
                    $.ajax({
                        url: "?xmls=lib/test.xmls&method=submit&temp=" + Math.floor(Math.random() * 10000),
                        type: "get",
                        success: function (data) {
                            console.log(data)
                        }
                    })
                }
              </textarea>
            9.通过//注释
            10.$manage
               I.检查有没有登录$manage.checkLogin(),一时检查登录，二是检查权限
            11.$skin
            12.scope理解  desktop表示资源文件名  desktop.left表示里面的项
               <textarea>
                      <td width="70%" valign="top">{%*desktop.left:desktop%}</td>
               </textarea>
            13.$name 是获取apps\feedback\data\global.data.config 里面的值name值再加上theme,如果没有就只有theme 比如 $name(theme)
            14.{#file} 用法    ?xmls={#file}&amp;method=start => ?xmls=apps/feedback/manage/setup.xmls&method=start
                  //注意form表单&要变成&amp;
            15.常用组件说明
               I.admin 对用户权限进行控制，只能控制是否能访问组件
               II.center 对所有用户开放，修改管理密码和新增语言
               III.database 直接对组件的数据表进行操作
               VI.imagegroup
               V.module 所有组件resource中的app类型
               VI.public source模块用来直接修改文件的 image模板是原图保存
            16.组件宽度
               <textarea>
                      .data_form dl.L1{
                        width:800px;
                        }
                        .data_form dl.L2{
                        width:400px;
                        }
                        .data_form dl.L3{
                        width:200px;
                        }
               </textarea>
            17.where用法
               1.<textarea>
                   @sql.scopeGet(search);
                    @sql.where(and,like,string);
                    @sql.where(and,=,number);
               </textarea>
               2.
                @where=1>0;
                $if(@catalogId>0){
                @where={%catalogId={@catalogId}%};
                }
               3.path用法 @data=@query.pager(@format,*,{%Lang='{$manage.getLang()}'{=} and Path like '%.{?CatalogID:#number}.%'%},ContentID desc,$global[pageSize],$get.number(page,1),3);
               4.selectValue用法
                 @parentid=$query(catalog).selectValue(@id,parentId);
            18.跳转链接 {?xmls=web/index.html&productid=*productid\}
            19.web嵌入qq http://shang.qq.com/v3/widget.html
            29.不等于<>
                <textarea>
                    $if($get[CatalogID]<>$null){
                        @catalogid=$get(catalogid,:$number);
                     }
                </textarea>
            30.form表单提交需要用xmls
               <textarea>
                    <!--<form action="{#path}?xmls=lib/form.xmls&method=access" method="get" class="form">-->
                   $function main(){
                    $assembly.call($get(method));
                    }
                    $function access(){
                    @isAccess=$session[isAccess];
                    $if($get(psw)==522520){
                    $session[isAccess]=1;
                    $content.redirect($join($web.getPath(?xmls=cn/index.html)));
                    }
                    $else{
                    $content.write( <script> alert("密码错误\,请重新输入!"\)\;history.back(\)\; </script> );
                    }
                    }
               </textarea>
            31.webconfig
               <add key="site" value="subsites"/> //多网站 ，一般用于开发
               <add key="site" value="single"/> //单网站，一般用于生产部署
            32.使用visual studio 开发服务器就可以实现伪静态
            33.在线ftp http://webftp.zzbaike.com/index.php  http://www.net2ftp.com/index.php WeqfxA85ux3j2
            34.iis实现静态映射 找到“添加脚本映射”这一栏目之后，点击进入，就会弹出新的对话框，请求路径设置为*.html ，可执行文件为%windir%\Microsoft.NET\Framework\v2.0.50727\aspnet_isapi.dll，名称可设定为 htmlrequest，
            35.新誉空间  参考网站 http://www.lmv-china.com/index.html  http://www.idcc.cn/cloud/host/hst_pro_lst.asp?pcid=29 豪华型 ASP.NET1G
            36.合作空间https://www.west.cn/web/ssl/buy/list  59+80=140
            37.计算  @count=(@count+1);
            38.页面上生成静态链接
               <textarea>
                    {%@page.getRecommendList({%##:<li class="col-xs-12 col-sm-4">
								<a href="{#^:?xmls=cn/news/news-content.html&contentId={*contentId\}}">
									 <img src="{*pic}" style="height:136px;width:100%;" class="img-responsive center-block">
									<h4>{*title}</h4>
									<p>{#leftw:tips,100,...}</p>
								</a>
							</li>%\})%}
               </textarea>
            39.在线显示百度地图
            40.从html截取文本 $html.getText(@query[replyContent],1,1,20);
            41.中英文切换 $web.getPathFirst()
            42.国际化 @res=$resource(i18n);$debug(@res[{%#&:content-{$session[lang]}%}]);
            43.分页属性 //<a href="{*link}">{*text}</a> {=selected}<span class="ipagea">{*text}</span>{=ctrl}<div class="pager"><a href="{*home}">首页</a> <a href="{*prev}">上页</a>
            //  {*listPage} <a href="{*next}">下页</a> <a href="{*last}">末页</a>  <span class="ipaget">页:{*page}/{*pages} 共:{*count}个</span>
            44.直接转时间{$datetime.convertToString(@productContent[createTime],yyyy-MM-dd)}
            45.临时存储 https://send.firefox.com/
            46.content.show,函数必须是sub
            47.字体安装
               1.第一种.复制到C:\WINDOWS\Fonts
               2.第二种右键安装
            48.汉字匹配 (/[\u4e00-\u9fa5]+/).test("我哦哦哦");
            49.免费在线网站聊天 https://www.mylivechat.com/dashboard/deployment.ascx  1944876604@qq.com 老密码
            50. jquery获取坐标需要这样 event.originalEvent.changedTouches[0]["clientX"];
            51.access数据库性能
               1.Access数据库超过30m就开始影响性能，达到50m左右的时候性能会急剧下降；配合设计优良的程序，数据库大小极限也只能去到几百兆。记录数过多、访问人数过多的时候也会造成Access数据库性能急剧下降

                //优化建议
               1.字段类型尽量精确
               2.下载Access数据库, 用Access软件打开, 并用"修复和压缩数据库"工具进行处理
               3.虽然理论上支持255个并发用户，但实际上根本支持不了那么多，如果以只读方式访问大概在100个用户左右，而如果是并发编辑，则大概在10-20个用户

                数据有160万条
                1).压缩之前1.8g
                  I.count(*)效率不错  count(字段是速度很慢)
                  II.简单一个列表要5秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久

                2).压缩之后 200M左右 速度还是和压缩之前一样

                数据100万条
                 I.简单一个列表要3秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久


                数据50万条
                I.简单一个列表要1.3秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久


                数据30万条
                I.简单一个列表要0.8秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久


                数据20万条
                I.简单一个列表要0.5秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久


                数据10万条
                I.简单一个列表要0.3秒左右，列表数据量多少没有太大的关系,和字段多少有关系，字段越多时间越久




            52.
            自己的IP 116.228.32.182  101.81.11.141
            [微信红包]恭喜发财 大吉大利
            大家有网站建设，小程序开发需求的可以联系我
            官网地址：www.99msg.com
            加我微信领取一个微信小红包


            53.yimei yimei55555 免费在线密码

            北京知识产权金律师 全网营销网站
            电脑网站：http://www.beijing-ip.com
            手机网站：http://m.beijing-ip.com     
            微信网站：http://wx.beijing-ip.com

            北京陈雷律师全网营销—北京房产律师
            电脑网站：www.bjsxls.com
            手机网站：http://m.bjsxls.com 
            微信网站：http://wx.bjsxls.com 

            沈阳卢主任 全网营销网站
            电脑网站：www.tongwen-lawyer.com
            手机网站：m.tongwen-lawyer.com
            微信网站：wx.tongwen-lawyer.com

            沈阳刑事辩护律师 杨崇峰律师-全网营销网站
            电脑网站：http://www.18904011107.cn
            手机网站：http://m.18904011107.cn 
            微信网站：http://wx.18904011107.cn

            内蒙古律所高级合伙人张建忠律师 全网营销：
            电脑网站：http://www.nmglawyer.com  
            手机网站：http://m.nmglawyer.com      
            微信网站：http://wx.nmglawyer.com 

            沈阳庄延坤律师 全网营销网站
            电脑网站：http://www.zhuangyankun.com
            手机网站：http://m.zhuangyankun.com/
            微信网站：http://wx.zhuangyankun.com
            54.SLMGR -REARM window7不是正版

            55.http://www.bitbug.net/ 生成icon
        </div>

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
