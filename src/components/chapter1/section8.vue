<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">asp.net发布</h1><div class="segment-content">
            1.asp.net窗口web网站
            2.执行发布，新建一个配置文件，然后选择文件系统
            3.由于扩展配置问题而无法提供您请求的页面。如果该页面是脚本，请添加处理程序。如果应下载文件，请添加 MIME 映射
               解决iis7  :控制面板-》打开或关闭windows功能-》Internet信息服务-》万维网服务-》应用程序开发功能，勾选上“.net扩展性”和“ASP.NET”，保存后，重启IIS服务器即可
            4.处理程序“PageHandlerFactory-Integrated”在其模块列表中有一个错误模块“ManagedPipelineHandler”
              这个是因为先安装.net4,然后再安装iis
              解决:以管理员身份运行命令行 先到cd C:\Windows\Microsoft.NET\Framework\v4.0.30319 然后执行aspnet_regiis.exe -i


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">IIS经典和集成区别</h1><div class="segment-content">
            1.经典形式是为了与之前的版本兼容，运用ISAPI扩展来调用ASP.NET运转库，原先运转于IIS6.0下的Web应用程序迁移到IIS7.0中只需将应用程序配置成经典形式，代码根本不用修正就能够正常运转
            2.集成形式是一种统一的乞求处置管道
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">IIS新建网站</h1><div class="segment-content">
            1.新建应用程序池 指定.net版本
            2.新建网站
            3.在网站指定目录配置eventone权限
            4.未在本地计算机上注册“Microsoft.Jet.OLEDB.4.0”提供程序
              解决：在 IIS 应用程序池中，“设置应用程序池默认属性”/“常规”/"启用32位应用程序"，设置为 true。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

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
