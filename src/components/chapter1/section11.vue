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
            13.资料网站 https://www.8btc.com/book
            14.公链，私链，联盟链，侧链 https://zhuanlan.zhihu.com/p/36309354
            15.btc钱包备份
             I.每发送了100次比特币给其它地址或者使用了100个不同的地址接收比特币后，请重新备份钱包，否则后面交易退回的和接收到的比特币会永久丢失
             II.松散密钥钱包
                松散密钥钱包也叫密钥串（JBOK）, 这种形式的钱包源自于比特币内核客户端，目前已被遗弃不用。比特币内核客户端钱包会通过伪随机数生成器（PRNG）创建100个私钥/公钥对，以备后用。
                这些私钥储存在一个虚拟的“密钥池”，当之前的密钥被使用后，它会生成新的密钥对，这样确保密钥池维持有100个未被使用的密钥。（如果钱包被加密，新的密钥只有在被解锁后才可以生成新的密钥）
                考虑到不得不手动备份新生成的私钥，这会对保存密钥带来相对大的困难。如果新的密钥生成后，被用掉，但在备份前丢失了，那么里面的比特币就永远丢失了。很多老式的移动钱包则使用一个简单的格式，它们仅当用户需要的时候，才生成一个新的私钥。
                 因为备份太繁琐，这类钱包正逐步被淘汰，也不鼓励大家使用。
            16.Segwit隔离见证
                I.超过1MB大小的区块，对于老节点来说不是非标准交易，而是非法交易。为了解决这一问题，SegWit将欺骗老节点的伎俩发挥到了极致。
                  它将整个Witness的部分放在原来整个block的外面。对于老节点来说它并不知道它接收的整个block后面还有一个witness的结构。
                II.这样就解决了1M限制的问题。也就是主区块仍然是1M，而见证信息放到了3M的见证区块里
            17.比特币交易过程
               I.每一笔交易的输出作为下一笔交易的输入
               II.UTXO未花费的交易输出



        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">火币:</h1><div class="segment-content">
            1.
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">以太坊:</h1><div class="segment-content">
            1.以太坊白皮书 https://github.com/ethereum/wiki/wiki/%5B%E4%B8%AD%E6%96%87%5D-%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%99%BD%E7%9A%AE%E4%B9%A6
            2.发行以太币https://blog.csdn.net/JAVA_HHHH/article/details/79771752
            3.以太币编程语言 https://solidity-cn.readthedocs.io/zh/develop/introduction-to-smart-contracts.html
            4.BIP39 助记词
            5.以太坊钱包官方下载 https://ethfans.org/wikis/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E9%92%B1%E5%8C%85-Mist-%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B
            6.以太币挖矿软件 https://www.f2pool.com/
            7.以太坊节点
               I.官方查看以太坊全节点数
                 https://ethernodes.org/network/1
               II.官方查看比特币全节点数
                 bitnodes.earn.com
               III.下周继续以太坊知识
                    https://lilymoana.github.io/ethereum_theory.html
               IV.由于运行全节点的成本高昂，很多节点选择做“轻节点”，即不储存完整的区块链数据。
                举个例子，目前可在手机端运行的钱包软件，基本都是“轻钱包”，属于“轻节点”。轻钱包会对数据进行分析，仅获取并在本地储存与自身相关的交易数据。当
                然了，轻钱包运行时还是要依赖其他全节点。
                需要说明的是，独立的矿工需要运行全节点，但是加入矿池中矿工，不一定需要自己运行全节点。
            8.钱包备份几种方式
              https://ethfans.org/posts/how-to-backup-yout-ethereum-wallet



        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">nodejs开发数字货币</h1><div class="segment-content">
            1.官网地址https://funnelgarden.com/blockchain-cryptocurrency-typescript/
            2.github地址  https://github.com/gomisha/blockchain
            3.html5拖动上传文件 https://segmentfault.com/a/1190000013298317
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
