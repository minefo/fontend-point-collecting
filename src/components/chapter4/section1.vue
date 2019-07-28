<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">A</h1><div class="segment-content">
            1.animation使用 ie11+，会影响布局,值的顺序可以不固定
               主要由这些值构成
                animation-name  就是@keyframes定义的动画名称 可以多个animation-name: test1, animation4;默认是none 表示无动画
                animation-duration 动画周期的时长
                animation-timing-function 动画效果
                animation-delay 动画等待时间
                animation-iteration-count 动画重复次数 数字或者infinite(无限次数)
                animation-direction
                    normal 默认
                    alternate 交替
                    reverse 反向
                    alternate-reverse 反向交替
                animation-fill-mode
                    none 默认，表示动画效果执行完后，恢复原样
                    forwards 动画执行到最后一步的样式
                    backwards 一开始就应用动画开始样式并且保持 animation-delay这个时间，最后的效果和none一样
                    both 先backwards然后forwards
              I.用法
                 <textarea>
                     @keyframes slidein {
                      from {
                        margin-left: 100%;
                      }

                      to {
                        margin-left: 0%;
                      }
                    }

                   animation: 3s linear 1s slidein;
                 </textarea>


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">B</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">C</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">D</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">E</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">F</h1><div class="segment-content">
            //flex使用
            1.flex 伸长或缩短以适应flex容器中的可用空间 ie10+
                auto 元素会根据自身的宽度与高度来确定尺寸 会伸长也会缩短 等价flex: 1 1 auto
                initial 元素会根据自身宽高设置尺寸。它会缩短自身以适应容器 只会缩短不会伸长 等价flex: 0 1 auto
                none  根据自身宽高来设置尺寸 既不会缩短不会伸长 等价flex: 0 0 auto
                positive-number  容器中指定占比 等价flex: 占比 1 0
                注意 默认情况下，元素不会缩短至小于内容框尺寸，不过可以通过设置元素的min-width 与 min-height属性来改变
                三个值如下：
                    第一个值必须为一个无单位数，并且它会被当作flex-grow的值。 默认值为 1，负值无效
                    第二个值必须为一个无单位数，并且它会被当作flex-shrink的值。 默认值为 1，负值无效
                    第三个值必须为一个有效的宽度值， 并且它会被当作flex-basis的值。 任何可用于 width 和 height 的值都可接受。若值为0，则必须加上单位，以免被视作伸缩性。 默认值为0%
           2.flex-grow
           3.flex-shrink
           4.flex-basis
           5.容器必须是 display: flex; 并且元素类型不重要
           6.flex-direction: column 可以实现垂直对齐

            //float使用
            1.表示一个元素在容器的左侧或右侧放置，允许文本和内联元素环绕它,浮动元素从网页的正常流中移除(意思是说其他正常元素不要考虑它的存在,但是行内元素会围绕它,因为移除流了，所以不会撑起父元素的)
            2.如果浮动元素和其他元素能排在一行就居左或者居右,否则换行(这个其他元素包括行内元素，浮动元素,在排版上有点类似行内元素)
            3.对flex元素不起作用
            4.属性值left
            5.属性值right
            6.属性值none 不进行浮动 默认值
            7.clear 表示当前元素对浮动的元素态度 clear: none(必须在左侧和右侧浮动元素下面) clear: left clear: right clear: both(不用管左侧和右侧浮动元素)
              I.只对块级元素有效，浮动元素也可以看成块级元素
              II.子元素有clear会撑起父元素的高度
              III.浮动元素是全局的，父元素外面的元素也可以通过clea清除浮动
              IV.让父元素包含所有浮动元素
                 I.通用的代码
                 <textarea>
                     .clearfix:before, .clearfix:after{
                        overflow: hidden;
                        display: table;
                        visibility: hidden;
                        content: '';
                        clear: both;
                    }
                 </textarea>
               II.通过父元素设置overflow:hidden实现
               III.即使清理元素外面还包着父元素，还是有效果，并且包含元素的高度等于包含浮动元素的父元素高度
                   <textarea>
                        .test {
                            border:1px solid red;
                            width: 500px;
                            margin: 50px auto;
                            overflow: hidden;
                         }
                         .test-parent {
                            border:1px solid blue;

                         }
                         .test-parent-sub {
                            width: 100px;
                            height: 100px;
                            float:left;
                         }
                         .test-text {

                         }
                         .test-text-sub {
                            overflow: hidden;
                         }
                       	<!--<div class="test">-->
                <!---->
                            <!--<div class="test-parent">-->
                                <!--<div class="test-parent-sub">-->
                                         <!--我浮动了1-->
                                   <!--<br />-->
                                    <!--我浮动了1-->
                                   <!--<br />-->
                                    <!--我浮动了1-->
                                <!--</div>-->
                <!---->
                                <!--<div class="test-parent-sub">-->
                                      <!--我浮动了2-->
                                      <!--<br />-->
                                      <!--我浮动了2-->
                                <!--</div>-->
                <!---->
                <!---->
                                    <!--<div class="test-text">-->
                                      <!--<div class="test-text-sub">-->
                                         <!--我的文字哦哦-->
                                      <!--</div>-->
                                    <!--</div>-->
                <!---->
                            <!--</div>-->
                        <!--</div>-->
                    <!---->
                   </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">G</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">H</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">I</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">J</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">K</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">M</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">N</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">L</h1><div class="segment-content">
            1.line-height 一下支持ie8+
              I.文本垂直居中
                <textarea>
                    .d{height: 600px; width: 600px; text-align: center; border: 1px solid #ccc;}
                    .d:before{ content: "."; height: 100%; display: inline-block; vertical-align: middle; visibility: hidden; }
                    .d p { background:#000; color:#fff; vertical-align:middle; display:inline-block;}
                        <!--<div class="d">-->
                       <!--<p>内联元素的居中实现</p>-->
                      <!--</div>-->
                </textarea>
              II.图片垂直居中
                <textarea>
                    .d{height: 600px; width: 600px; text-align: center; border: 1px solid #ccc;}
                    .d:before{ content: "."; height: 100%; display: inline-block; vertical-align: middle; visibility: hidden; }
                    .pic {
                        vertical-align: middle;
                        border:1px solid red;
                    }
                    	<!--<div class="d">-->
                             <!--<img class="pic" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" width="270" alt="图片垂直居中">-->
                        <!--</div>-->
                </textarea>
             III.行内元素居中
                <textarea>
                     .d{height: 600px;  width: 600px; text-align: center; border: 1px solid #ccc;}
                    .d:before{ content: "."; height: 100%; display: inline-block; vertical-align: middle; visibility: hidden; }
                    .d p { background:#000; color:#fff; vertical-align:middle; display:inline-block;}
                    .pic {
                        vertical-align: middle;
                        border:1px solid red;
                    }

                    <!--<div class="d">-->
                        <!--<p>这里是文字</p>-->
                         <!--<img class="pic" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" width="270" alt="图片垂直居中">-->
                          <!--<span><input type="radio" value="1">测试1</span>-->
                          <!--<span><input type="radio" value="2">测试2</span>-->
                     <!--</div>-->
                </textarea>
            IV.文字和单选按钮对齐
               <textarea>
                    [type="radio"] {
                        vertical-align:middle; margin-top:-2px; margin-bottom:1px;
                    }
               </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">O</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">P</h1><div class="segment-content">
            1.position
                static
                      正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
                relative
                      I.top属性指定了元素的上边界离开其正常位置的偏移，非定位元素设置此属性无效,其他属性类似,和祖先定位元素无关,只是和包含块有关
                      II.注意：position:relative 对 table-row-group(tbody),table-column-group(thead), table-row(tr), table-column(col), table-cell(td), table-caption(caption) 元素无效。
                      III.如果子元素超过父元素overflow: hidden 会盖住子元素
                absolute
                      I.元素不占用空间，通过指定元素相对于最近的relative,absolute,fixed 定位祖先元素的偏移
                      II.如果子元素超过父元素overflow: hidden 会盖住子元素
                      III.top定位元素上外边距边界与其定位祖先元素上边界之间的偏移,其他属性同理
                      VI.如果没有设置top, right, bottom, left,那么和static没有区别
                fixed
                      I.元素不占用空间,永远相对于视口进行偏移,如果没有设置top, right, bottom, left,那么和static没有区别
                      II.当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先。transform ie10+ 不完全支持
                         <textarea>
                              .parent {
                                height: 300px;
                                width: 300px;
                                background: green;
                                margin-top: 100px;
                                transform: scale(2, 0.5);
                             }
                             .sub {
                                background: blue;
                                position: fixed;
                                width: 100px;
                                height: 100px;
                                left:0px;
                                top:0px;
                                z-index: 1;

                             }
                         </textarea>
                      III.API等级17:Android 4.2 Jelly Bean
            2.默认块级元素会包囊里面的元素，并且包括外边距,并且外边距和定位没有关系
            3.relative的top, right, bottom, left会影响滚动出现，但是不会影响父定位元素的大小
            4.垂直外边距合并
               I.上下两个元素,取最大的外边距
               II.父子元素,如果父元素有内边距，或者子元素有边框，也就是分开他们，他们就不合并了
               III.只有普通文档流中块级元素的垂直外边距才会发生外边距合并,行内框、浮动框或绝对定位之间的外边距不会合并
               VI.overflow: hidden可以阻断合并
            5.z-index用法
               I.fixed 如果祖先元素中有设置z-index,那么会优先用祖先元素来比较
               II.absolute 如果祖先元素中有设置z-index,那么会优先用祖先元素来比较
               III.relative 如果祖先元素中有设置z-index,那么会优先用祖先元素来比较


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">Q</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">R</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">S</h1><div class="segment-content">
            1.transform 改变元素的坐标空间,如果父元素有transform,那么子元素的fixed相对于它来进行定位 ie10+ 不完成支持,注意只对块级元素有效
              I.translate 进行x方向和y方向平移,不会破坏布局,注意要带上值要带上px
                 1.用法1 translate(tx, ty)
                <textarea>
                    //用法
                    transform: translate(200px,200px);
                </textarea>
                 2.用法2 translate3d(tx, ty, tz) 测试下需要设置perspective才有效
                 <textarea>
                       transform: perspective(117px) translate3d(200px,200px,-50px);
                </textarea>
              II.rotate
                  1.rotate (旋转) 由transform-origin(默认是元素的中心)属性指定的点旋转,若角度为正，则顺时针方向旋转
                   <textarea>
                          transform: rotate(45deg);
                  </textarea>
                  2.rotate3d
                  <textarea>
                          transform: rotate3d(1, 1, 1, 10deg);
                  </textarea>
                  3.rotateX 沿着水平轴转动
                  4.rotateY 沿着垂直轴转动
                  5.rotateZ(a) 是等价于rotate(a) 或则 rotate3d(0, 0, 1, a)

              III.scale (缩放) 用法：scale(sx, sy) 默认值被设置为sx 注意：是数值，表示倍数,scale(1)表示不变，scale(2)表示是原来的2倍，中心位置缩放，不会破坏布局
                   1.scale3d 必须有 perspective 和translateZ才有效
                    <textarea>
                         transform:perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
                    </textarea>
              VI.skew (倾斜)类似旋转，但是会变形
                 1.skew(ax deg,ay deg) ay默认是0
                 2.skewX()
                 3.skewY()
              V.matrix 一组变化矩阵
                 1.transform: matrix(10, 20, -10, 1, 80, 80);
            2.translate 单独使用目前不支持
              <textarea>
                  div:hover .translate {
                      translate: 200px 50px;
                  }
              </textarea>
            3.transition 是一个简写,主要用来在状态切换时应用过渡效果,主要由transition-property(哪个属性才会触发效果), transition-duration(过渡效果时间), transition-timing-function(效果函数), 和 transition-delay(等待多少时间后执行过渡)组成
               I.用法如下
               <textarea>
                      1.transition: margin-right,height 4s ease-in-out 2s;
                      2.transition: height 4s ease-in-out 2s;
               </textarea>
               II.默认是所有属性，可以指定当个或者多个属性

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">T</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">U</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">V</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">W</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">X</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">Y</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">Z</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">table布局</h1><div class="segment-content">
            1.table上的属性讲解
                align="right" //其实通过float:right来控制整个表格位置 或margin 当align="center"
                bgcolor="red" //整个表格的背景色  通过background-color:red来实现
                border="10" //table这个标签的边框，通过border-width来实现 pixels
                cellpadding=""  //td的padding %|pixels(默认)
                cellspacing="" //td的外边距，只是四个方向都会合并 %|pixels(默认)
                width=""   //表格的宽度，通过width: 1000px;实现  %|pixels(默认)
            2.table-layout //布局表格单元格
              I.auto 表格及单元格的宽度取决于其包含的内容 这个是默认
              II.fixed 宽度可以设置,某一列的宽度仅由该列首行的单元格决定
              III.当表格没有设置宽度,单元格都设置了宽度，表格的宽度就是所有单元格的宽度总和,不管table-layout取值如何
              IV.当表格设置了宽度
                  I.如果所有单元格的宽度加起来小于表格的宽度，那么单元格按比例放大,不管table-layout取值如何
                  II.如果所有单元格的宽度加起来大于表格的宽度，fixed就会表格等于所有单元格的宽度，auto就会单元格按比例缩小,并且表格的宽度就等于设置的宽度

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">rem布局(https://www.jianshu.com/p/b00cd3506782)</h1><div class="segment-content">
            1.引入js计算
              <textarea>
                  (function (doc, win) {
                    var docEl = doc.documentElement,
                        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                        recalc = function () {
                            var clientWidth = docEl.clientWidth;
                            if (!clientWidth) return;
                            if(clientWidth>=640){
                                docEl.style.fontSize = '100px';
                            }else{
                                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                            }
                        };

                    if (!doc.addEventListener) return;
                    win.addEventListener(resizeEvt, recalc, false);
                    doc.addEventListener('DOMContentLoaded', recalc, false);
                })(document, window);
              </textarea>
            2.rem可以在手机上大胆用,基本都支持,rem就是html的font-size,样式凡是涉及到尺寸的都可以用
            3.640px的页面宽度是一个安全的最大宽度，如果要切移动端页面，你可以先把效果图宽度等比例缩放到640px，很好用
            4.阿里高清方案 资源包 ant-mobile-master.rar
              //压缩的
              <textarea>
               !function (e) {function t(a) {if (i[a])return i[a].exports;var n = i[a] = {exports: {}, id: a, loaded: !1};return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports}var i = {};return t.m = e, t.c = i, t.p = "", t(0)}([function (e, t) {"use strict";Object.defineProperty(t, "__esModule", {value: !0});var i = window;t["default"] = i.flex = function (e, t) {var a = e || 100, n = t || 1, r = i.document, o = navigator.userAgent, d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i), l = o.match(/U3\/((\d+|\.){5,})/i), c = l && parseInt(l[1].split(".").join(""), 10) >= 80, p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi), s = i.devicePixelRatio || 1;p || d && d[1] > 534 || c || (s = 1);var u = 1 / s, m = r.querySelector('meta[name="viewport"]');m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u), r.documentElement.style.fontSize = a / 2 * s * n + "px"}, e.exports = t["default"]}]);flex(100, 1);

              </textarea>
              //原版
             <textarea>
             'use strict';
            /**
             * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认100px;
             * @param {Number} [fontscale = 1] - 有的业务希望能放大一定比例的字体;
             */
                const win = window;
                win.flex = (baseFontSize, fontscale) =>{
                const _baseFontSize = baseFontSize || 100;
                const _fontscale = fontscale || 1;

                const doc = win.document;
                const ua = navigator.userAgent;
                const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
                const UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
                const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80;
                const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
                let dpr = win.devicePixelRatio || 1;
                if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
                    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
                    dpr = 1;
                }
                const scale = 1 / dpr;
                let metaEl = doc.querySelector('meta[name="viewport"]');
                if (!metaEl) {
                    metaEl = doc.createElement('meta');
                    metaEl.setAttribute('name', 'viewport');
                    doc.head.appendChild(metaEl);
                }
                console.log("dpr:",dpr)
                console.log("scale:",scale)

                metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`);
                doc.documentElement.style.fontSize = `${_baseFontSize / 2 * dpr * _fontscale}px`;
            }
                flex(100, 1);
             </textarea>
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">CSS媒体查询</h1><div class="segment-content">
             1.媒体类型
                媒体类型	描述
                all	用于所有的媒体设备。
                aural	用于语音和音频合成器。
                braille	用于盲人用点字法触觉回馈设备。
                embossed	用于分页的盲人用点字法打印机。
                handheld	用于小的手持的设备。
                print	用于打印机。
                projection	用于方案展示，比如幻灯片。
                screen	用于电脑显示器。
                tty	用于使用固定密度字母栅格的媒体，比如电传打字机和终端。
                tv	用于电视机类型的设备。
            2.逻辑操作符
               I.可以将多个媒体查询以逗号分隔放在一起；只要其中任何一个为真，整个媒体语句就返回真。相当于or操作符
               II.and关键字用于合并多个媒体属性,同时满足才应用 如@media (min-width: 700px) and (orientation: landscape) { ... } 或者@media tv and (min-width: 700px) and (orientation: landscape) { ... }
               III.or 或者逗号分隔，一个满足就应用 如：@media (min-width: 700px), handheld and (orientation: landscape) { ... }
               IV.not 该操作符后面必须带上媒体类型，并且只能否定整个，或者以逗号分隔的判断  如:@media not all and (monochrome) { ... }
               V.only操作符仅在媒体查询匹配成功的情况下被用于应用一个样式,该操作符后面必须带上媒体类型
               VI.可以用的属性如下：
                     width(设备渲染区域宽度 窗口宽度) | min-width | max-width
                    | height(设备渲染区域高度) | min-height | max-height
                    | device-width(设备宽度 分辨率宽度 并且手机上width=device-width pc端就不一定了) | min-device-width | max-device-width
                    | device-height(设备高度) | min-device-height | max-device-height
                    | aspect-ratio(宽高比) | min-aspect-ratio | max-aspect-ratio
                    | device-aspect-ratio(设备宽高比) | min-device-aspect-ratio | max-device-aspect-ratio
                    | color(颜色单元比特值) | min-color | max-color
                    | color-index(颜色条目数量) | min-color-index | max-color-index
                    | monochrome(黑白设备) | min-monochrome | max-monochrome
                    | resolution(分辨率 如：min-resolution: 300dpi) | min-resolution | max-resolution
                    | scan(扫描过程) | grid(是网格设备还是位图设备) |orientation(方向)
               VII.包含未知媒体类型的查询通常返回假,如果你未向属性指定一个值，并且该属性的实际值不为零，则该表达式被解析为真,如果浏览器没有该属性值，包含这个属性值的表达式一般返回假
               VIII.大多数媒体属性可以带有“min-”或“max-”前缀，用于表达“最低...”或者“最高...”
               IX.key和value形式来表达属性值
               X.使用方式
                  1.<link rel="stylesheet" media="screen and (max-device-width: 799px)" />
                  2.@media all and (min-monochrome: 8) {   }

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">css属性百分比情况</h1><div class="segment-content">
               1.可以设置百分比的属性
                    定位属性：top, right, bottom, left;
                盒模型属性：height, width, margin, padding;
                背景属性：background-position;
                文本属性：text-indent(乘以包含块的宽度), line-height(乘以当前元素的字体大小), vertical-align(乘以元素的行高);
                字体属性：font-size(乘以父元素的字体大小);
               2.乘以包含块的宽度的属性  text-indent, margin, padding, left, right, width(max|min)
               3.乘以包含块的高度                                     top, bottom, height(max|min)
                  也就是定位属性和盒模型属性中，除了top和bottom,height(max|min)乘以包含块的高度，其他的都是乘以包含块的宽度,注意乘以包含块的宽度还有text-indext
               4.包含块
                   包含块不能简单地理解成是父元素。如果是静态定位（static）和相对定位（relative），包含块一般就是其父元素。
                   但是对于绝对定位（absolute）的元素，包含块应该是离它最近的 position 为 absolute、relative、或者 fixed(始终相对浏览器窗口) 的祖先元素。
               5.font-size和line-height关系
                 1.什么是line-height
                  <img :src="lineHeight"/>
                  I.由四根线组成的3个部分,大部分英文字母书写在中间区域,中文会撑满3个部分
                  II.顶线和底线之间的距离是font-size的大小,行距等于行高减去font-size大小,如果行高等于字体大小，那么行距为零，上下文字会紧挨着
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">viewport的使用</h1><div class="segment-content">
            1.格式如下
                 <meta name="viewport" content="height = [ pixel_value |device-height], width = [ pixel_value |device-width ] ,
                initial-scale = float_value , minimum-scale = float_value , maximum-scale = float_value ,
                user-scalable =[yes | no] ,
                target-densitydpi = [ dpi_value | device-dpi| high-dpi | medium-dpi | low-dpi] " />
            2.手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，备注：可以理解为有一个虚拟浏览器窗口用来显示网页
            3.手机上对pc端网站显示，iphone在wifi情况下，原版显示，就会出现滚动条，在4g网络环境下，会宽度缩小到显示窗口
            4.各个属性值
                width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
                height：和 width 相对应，指定高度。
                initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
                maximum-scale：允许用户缩放到的最大比例。
                minimum-scale：允许用户缩放到的最小比例。
                user-scalable：用户是否可以手动缩放。
                target-densitydpi：这个属性可以改变设备的默认缩放,如：定义了target-densitydpi=device-dpi，那么图片只占屏幕的四分之一（二分之一的平方）
                注意：scale放大一倍，window.innerWidth就缩小一倍
            5.一般手机网站 <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"/>
        </div></div>








        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.参考链接 https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference
            3.各手机参数
                I.iphone6s参数
                    主屏尺寸	4.7英寸 (屏幕尺寸的大小是按照屏幕对角线的长度来测量的，并且以英寸为单位。)
                           1英寸(in)=2.54厘米(cm),所以4.7英寸就是长10.5cm,宽6cm。
                    主屏材质	Retina HD
                    主屏分辨率	1334x750像素
                    屏幕像素密度	326ppi (表示沿着对角线，每英寸所拥有的像素（pixel）数目)
                    窄边框	4.29mm
                    屏幕占比	65.62%
                    后置摄像头	1200万像素
                    前置摄像头	500万像素
                    720p（1280×720，30帧/秒）视频录制
                    手机尺寸	138.3x67.1x7.1mm
                    手机重量	143g
                II.iphone6参数
                    屏幕大小 4.7英寸
                    屏幕分辨率  1334×750像素
                    像素密度 326ppi
                III.iPhone8
                    屏幕大小 4.7英寸
                    屏幕分辨率 1334×750像素
                    像素密度 326ppi
                VI.华为p6
                    屏幕大小 4.7英寸
                    屏幕分辨率 1280×720像素
                    屏幕像素密度	312ppi
            4.两台手机的屏幕大小差不多大，却一个只能显示两行汉字，另一个则可以显示五行汉字，抛开字体大小差别，关键就是屏幕的分辨率，后者分辨率大一些，自然在同样字体大小下可以显示更多行的汉字
            5.研究布局(iphone)，以iphone6s为例子
               <img :src="size"/>
              I.参数为：主屏尺寸	4.7英寸 主屏分辨率：1334x750像素  屏幕像素密度：326ppi
              II.浏览器输出 (实际逻辑像素 375*667)
                  console.log("window.innerHeight:",window.innerHeight) //647
                  console.log("window.innerWidth:",window.innerWidth)//375
              III.早期的iPhone3GS的屏幕屏幕分辨率是320 * 480,OS绘制图形均已point为单位 1point = 1 pixel
              IV.后来在iPhone4中，同样大小（3.5英寸）的屏幕采用Retina(视网膜)屏幕显示技术，横、纵向方向像素密度是以前的两倍,但是我们布局是按逻辑像素布局的，具体如上图
              V.物理分辨率是硬件所支持的，逻辑分辨率是软件可以达到的
            6.研究布局(android),以oppo r9为例
              I.参数为：  主屏尺寸	5.5英寸 主屏分辨率	1920x1080像素  屏幕像素密度	401ppi
              II.浏览器输出 (实际逻辑像素 360*640)
                console.log("window.innerHeight:",window.innerHeight) //622
                console.log("window.innerWidth:",window.innerWidth)//361

            6.研究布局(android),以oppo r9为例
             <img :src="size2"/>
            I.参数为：  主屏尺寸	5.5英寸 主屏分辨率	1920x1080像素  屏幕像素密度	401ppi
            II.浏览器输出 (实际逻辑像素 360*640)
                console.log("window.innerHeight:",window.innerHeight) //622
                console.log("window.innerWidth:",window.innerWidth)//361
            7.window.devicePixelRatio 当前显示设备的物理像素分辨率与CSS像素分辨率的比值,就是iphone的缩放因子，android的倍率
            8.:before ie8+支持
            9.京东最低支持ie8(但是页面会报错),淘宝最低支持ie9,同行ie8+
            10.如何阅读css语法  https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax
            11.BEM命令 (整体看block-，细分element__，然后不一样modifier--)
                I.block：区块,单词间用 - 连接
                II.element：具体元素 以 __ 与 block 连接(个人觉得是未节点)
                III.modifier：修饰block或者element 以 -- 与 block 连接 或者element相连 .stick-man--blue 或者.stick-man__head--small
            12.box-sizing ie8+支持 有就是可以放心使用
            13.选择器优先级
                低：元素选择器如h1、伪元素::before
                    <textarea>
                         .sub::before{
                            color:green;
                          }
                          div::before {
                             content:"这里是前面内容";
                             color:blue;
                          }
                        //最终显示绿色
                    </textarea>
                中：类选择器如.test、属性选择器如[type="radio"]、 伪类:hover
                    <textarea>
                          div:hover {
                             color:blue;
                          }
                          div.sub{
                            color:green;
                          }
                        //green

                          div:hover {
                             color:blue;
                          }
                          div[title="a"]{
                            color:green;
                          }
                        //green
                    </textarea>
                高：id选择器#test
                    <textarea>
                          #t {
                             color:red;
                          }
                          div:hover {
                             color:blue;
                          }
                          div[title="a"]{
                            color:green;
                          }
                        //red;
                    </textarea>
                较高：style
                     //yellow
                最高：!important
                       <textarea>
                          div {
                             color:blue!important;
                          }
                           //blue 可以理解为!important是不按套路出牌，它比style级别都高
                       </textarea>
                注意：其他选择符没有优先级，如：
            通配选择符(*), 关系选择符(+, >, ~, ' ')  和 否定伪类如 p:not(.fancy) { color: green;} 不影响优先级
                I.继承样式没有优先级，主要还是看定位到当前元素的选择器
            14.超链接样式
               <textarea>
                    a:link{color:Navy;text-decoration:none}
                    a:visited{color:Navy;text-decoration:none}
                    a:active{color:blue;text-decoration:none}
                    a:hover{color:red;text-decoration:underline}
               </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">不错的参考网站</h1><div class="segment-content">
            1. https://jiandanxinli.github.io/2016-08-11.html 觉得字体不错
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">临时用company</h1><div class="segment-content">
            1.ie支持到ie9+,xp只能升级到ie8
            2.网页定宽 1200px
            3.css区别ie
            <textarea>
                 //IE8、IE9、IE10（\9）
                .btn-submit {
                    background:#1FA4DF\9;
                }
              </textarea>
            4.显示大写 text-transform:uppercase;
            5.处理图片空隙  font-size:0;
            6.文字超过就隐藏
                text-overflow:ellipsis;
                overflow:hidden;
                white-space:nowrap;

        </div></div>



    </div>
</template>
<script>
    export default {
        data() {
            return {
                size:require("../../images/size.png"),
                size2:require("../../images/size2.png"),
                lineHeight:require("../../images/line-height.png"),
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
