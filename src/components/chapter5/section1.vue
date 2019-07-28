<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">1.vs2012 默认当前项目启动方法：主菜单→【工具】→【选项】→【项目和解决方案】→【生成并运行】，选中“对于新解决方案，使用当前选定的项目作为启动项目”</h1>
            <div class="segment-content"></div>
        </div>


        <div class="segment-wraper">
            <h1 class="segment-title">webbrower设置ie版本</h1>
            <div class="segment-content">
                1）假设你应用程序的名字为MyApplication.exe
                2）运行Regedit，打开注册表，找到
                HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\MAIN\FeatureControl\FEATURE_BROWSER_EMULATION
                11001 (0x2EDF) Internet Explorer 11. Webpages are displayed in IE11 Standards mode, regardless of the !DOCTYPE directive
                3)HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\MAIN\FeatureControl\FEATURE_BROWSER_EMULATION
                10000(0×2710) IE10
                9999 (0x270F) IE9 忽略html5
                9000 (0×2328) IE9
                8888 (0x22B8) IE8 忽略html5
                8000 (0x1F40) IE8
                7000 (0x1B58) IE7

            </div>
        </div>





        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.安装程序注册码 C6E63QW-D2C-326ABBA80N
            2.安装程序打包教材 https://blog.csdn.net/ma_jiang/article/details/78142587
            3.dotfustor使用
              1.https://www.cnblogs.com/xiezunxu/articles/7228741.html
            <propertylist>
                <property name="ILDASM_v2.0.50727" value="C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\ildasm.exe" />
                <property name="ILDASM_v4.0.30319" value="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools\ildasm.exe" />
            </propertylist>
            4.免费手机短信接收 https://www.pdflibr.com/SMSContent/3
            5.reflector8.2.0.42.zip破解版在filesource
            6.ConfuserEx_bin 很要的防止反编译 教材 https://blog.csdn.net/xiaoyong_net/article/details/78988264
            7.IL Spy_2.3.0.0_CHS_MOD.rar 绿色版
            8.de4dot超好用的脱壳工具
              I.教程 https://www.cnblogs.com/adinet/p/7425604.html
              2.下载地址 https://codeload.github.com/Robert-McGinley/de4dot-Installer/zip/master


            9.注册
            10001 ip不对
            10002 客户端后缀不对
            10003 解密失败
            10004 固定文件md5值不对
            10005 服务判断发现文件被改了，已经封禁
            10006 机器码不对，已经封禁
            KydCEpKow
            6f4ddec331fa59ee4bc9e76811dadfa0

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
