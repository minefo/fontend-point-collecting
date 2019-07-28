<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">1.比特币手续费</h1>
            <div class="segment-content">
                1.参考资料 http://www.sohu.com/a/236407659_100123121
                2.最终成功生成那个交易记录块的人 可以获得伴随这些交易而生成的交易费用外加一笔额外的报酬
                交易费用一般都是转出资金方自愿提供给挖矿者的 因此不是系统新增的货币
                额外的报酬是新生成的比特币 这就是比特币系统新增货币的方式
            </div>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">2.比特币交易所</h1>
            <div class="segment-content">
               1.https://www.zg.com/
             </div>
        </div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.官方地址 https://bitcoin.org/en/
            2.查交易记录 https://www.blockchain.com/btc/block/0000000000000000000946abb73d0a850c295d71ce185754b0426399de88049d
            3.QT甚至自带了挖矿功能 后面取消了
            4.自己电脑贡献算力 https://www.nicehash.com/cpu-gpu-mining
            5.最初论文 https://bitcoin.org/files/bitcoin-paper/bitcoin_zh_cn.pdf
            6.比特币区块信息 https://btc.com/0000000000000000000a1f6c85df79003a6ef6c474f5519e9a35a21072f8681a
            7.区块链分叉 https://www.jianshu.com/p/a05d9d5155e9 6次确认，可以解决分叉问题
            8.教材 http://www.ruanyifeng.com/blog/2017/12/blockchain-tutorial.html
            9.钱包地址就是公钥的指纹，是唯一的
            10. 私钥签名，公钥验签
                1 B向A发送 信息 并且用约定好的摘要算法，把 信息 生成一个摘要，同时B用自己的私钥对这个摘要进行加密，生成的加密摘要就叫B的签名
                2 把该信息和摘要一块发送给A
                3 A收到B发送的信息，把该信息用相同的摘要算法生成一个摘要，然后用B的公钥解密A发送过来的摘要，得到一个明文摘要，对比这个明文摘要和B生成的摘要，如果相同说明该信息是B发送的并且该信息没有被篡改过
            11.区块链手续费0.0001-0.0015 一个块包含2000笔
            12.比特币源码地址 https://github.com/bitcoin/bitcoin/tree/master/src
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
