<template>
    <div>
    <div>
        <h1>计算手续费</h1>
        开仓手续费为（200*100/5000）* 0.03% = 0.0012 BTC
        <el-row class="line">
            <el-col :span="4">开仓</el-col>
            <el-col :span="4">
                <el-input v-model="openObj.num"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input v-model="openObj.currentPrice"></el-input>
            </el-col>
            <el-col :span="4">
               {{(openObj.num*100/openObj.currentPrice)*0.0003}}(BTC)
            </el-col>
            <el-col :span="4">
                回本价{{(openObj.currentPrice*(openObj.num*100/openObj.currentPrice))/((openObj.num*100/openObj.currentPrice)-(openObj.num*100/openObj.currentPrice)*0.0003)}}(USDT)
            </el-col>
            <el-col :span="4">
                回本额{{((openObj.currentPrice*(openObj.num*100/openObj.currentPrice))/((openObj.num*100/openObj.currentPrice)-(openObj.num*100/openObj.currentPrice)*0.0003))-openObj.currentPrice}}(USDT)
            </el-col>
        </el-row>
        平仓手续费为（200*100/6000）* 0.02% = 0.000667 BTC
    </div>

    <div>
        <h1>计算持仓均价</h1>
        用户在价格为1000USD开1张BTC当季合约，
        在1500USD/BTC再开2张BTC当季合约（合约面值为100USD），
        则该用户的持仓均价=100*(1+2)/(100/1000+200/1500)=1285.7USD
        <el-row class="line">
            <el-col :span="4">
                开仓次数
                <el-input v-model="averageObj.total"></el-input>
            </el-col>
            <el-col :span="6">
                每次开仓数量
                <el-input v-model="averageObj.num"></el-input>
            </el-col>
            <el-col :span="6">
                开仓起始价
                <el-input v-model="averageObj.currentPrice"></el-input>
            </el-col>
            <el-col :span="4">
                每次开仓差价
                <el-input v-model="averageObj.spread"></el-input>
            </el-col>
            <el-col :span="4">
                持仓均价{{averageObj.average}}(USDT)
            </el-col>
        </el-row>
        <el-button @click="handleAverage">计算</el-button>
    </div>
    </div>
</template>

<script>
    import requestApi from '@/commonjs/requestApi';
    import md5 from 'js-md5';
    export default {
        data () {
           return {
               openObj:{
                   num:4,
                   currentPrice:10169.1
               },
               averageObj:{
                   total:5,
                   num:2,
                   currentPrice:10600,
                   spread:30,
                   average:0
               }
           }
        },
        mounted(){
            // let sum=0;
            // let t=8009.26;
            // for(let i=0;i<10;i++){
            //     console.log('(30+i*10)',(30+i*10))
            //     console.log('t:',t)
            //     sum +=t-(30+i*10)
            //     t=t-(30+i*10)
            // }
            // console.log(sum/10)


            //空
            let sum=0;
            let t=8000;
            let avg=0
            let proate=0
            for(let i=0;i<10;i++){
                //console.log('(30+i*10)',(30+i*10))
                //console.log('t:',t)
                sum +=t+(30+i*10)
                t=t+(30+i*10)
                avg=sum/(i+1)
                proate=(t-avg)/t
                proate=proate*20
                console.log((i+1),':','proate:',proate,t)
            }
            console.log(sum/10)

        },
        methods: {
            handleAverage(){
        //         用户在价格为1000USD开1张BTC当季合约，
        // 在1500USD/BTC再开2张BTC当季合约（合约面值为100USD），
        // 则该用户的持仓均价=100*(1+2)/(100/1000+200/1500)=1285.7USD
              let sum=0;
              for(let i=0;i<this.averageObj.total;i++){
                  sum +=100*this.averageObj.num/(this.averageObj.currentPrice-i*this.averageObj.spread)
              }
              this.averageObj.average=100*(this.averageObj.num*this.averageObj.total)/sum
            }
        }
    }
</script>
<style scoped>
.line {
    line-height: 50px;
    height: 50px;
}

</style>