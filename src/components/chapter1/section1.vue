<template>
    <div class="inner-container" v-else>
     <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">有用的快捷键</h1>
            <div class="segment-content">
                <p>
                    Alt + 空格 + C:关闭当前程序或窗口
                </p>

                <p>
                    Alt + D:选中地址栏。浏览器或资源管理器的地址栏
                </p>


                <p>
                    Win + 空格:透明化所有窗口，放掉后透明化后又恢复
                </p>
                <p>
                    Win + Tab:以3D方式切换窗口
                </p>
                <p>
                    Win + 数字键（1-9）:对应任务栏上的任务
                </p>
                <p>
                    Win + L:锁定电脑
                </p>
                <p>
                    Win + E:打开资源管理器
                </p>

                <p>
                    Win + D:最小化所有窗口，当再次按时，又会还原刚才所有的窗口
                </p>
                <p>
                    Win + ↑:最大化窗口<br/>
                    Win + ↓:最小化窗口
                </p>



            </div>
            <h1>有用的东西</h1>
            <div class="segment-content">
                1.命令启动取消跨域浏览功能
                "C:\Users\UserName\AppData\Local\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir
                2.公开邮箱  minefo@aliyun.com

                //temp start
                官网参考
                http://www.uc.cn/
                //temp end
                3.webstorm使用技巧
                  I.正则替换 教程https://www.jetbrains.com/help/webstorm/2016.1/regular-expression-syntax-reference.html
                    <textarea>
                        src="./\w+_\w+/([a-z0-9]+).jpg"> //查找
                        src="./images/$1.jpg">  //替换
                    </textarea>
                3。格式化json
                windows 下 webstorm 格式化代码的快键键 Ctrl+Alt+l
                mac 下 webstorm 格式化代码的快捷键 Option+Command+l

            </div>

            <h1>钱包问题记录</h1>
            <div class="segment-content">
               第一次记录 2019.9.10
               1.多账户理解 都是由助记词派生的
               2.私钥能否逆转为助记词 不能
               3.助记词能否明文保存为客户端
                 I。以keystore保存助记词
                 II.需要密码进软件
               4.钱包没有备份为keystore
               5.恢复钱包怎么恢复子账户(0-5)
               6.账户可以保存到内存中吗
               7.账户删除没与用
                ==========================
                第二次记录 2019.9.10
                1.销毁钱包的时候，需要把相关配置信息也去掉吗（比如payer的配置）(都去掉)
                2.私钥备份（我已备份去掉）
                3.外部导入可以用钱包hash值做为密码(区别外部钱包)
                4.派生10个历史记录
                5.一个单词不能换行
                ==========================
                2019.9.17-
                1.网络默认是空的吗
                2.转账的时候地址默认有钱的？
                3.转账接口经常报错
                4.新建网络默认关闭
                <textarea>
                    {"jsonrpc":"2.0","id":"533e3a9274724d4d","result":"","error":{"code":1012,"message":"insufficient net balance"}}
                </textarea>
                5.getdplist 投票节点列表
                6.unstake 提示会影响投票权重
                ======================
                2019.9.24
                1.钱包地址改成账户地址
                2.没有账户怎么办，资源页面,默认第一个，还是历史最新一个
                3.当前账户可以抵押给当前账户吗
                4.哪些需要构造tx
                 1.转账 抵押 赎回     注册域名 买内存 出售内存
                 2.
                5.历史记录都是共享的吗
                6.

                =========
                2019.10.9
                1.10月25号，发币
                2.11月6号 新加波 pc端钱包
                3.桌面版的钱包需要修改密码吗？（需要)
                  I.转账 -> stake ->购买ram ->注册域名
                4.xtar变成 bt 挖矿去掉 产品去掉
                5.浏览器对接是时候可以弄？
                6.桌面版颜色呢？先不考虑
                7.payer服务 这周可以做


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
