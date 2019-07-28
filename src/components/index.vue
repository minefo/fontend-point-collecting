<template>
    <div class="content-wraper">
        <breadcrumb :current-router="$route"></breadcrumb>
        <div>这里是首页</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        mounted (){
            console.log("hash:"+location.hash);
            console.log("host:"+location.host);
            console.log("hostname:"+location.hostname);
            console.log("href:"+location.href);
            console.log("pathname:"+location.pathname);
            console.log("port:"+location.port);
            console.log("protocol:"+location.protocol);
            console.log("search:"+location.search)
        },
        methods : {

        }
    }
</script>
<style scoped>


</style>
