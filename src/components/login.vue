<template>
  <div>
      <div class="left">
          <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="jsonStr">
          </el-input>
          <div id="jsonStr" style="display: none;">
              {
              "version":"1.0",
              "contract_account":"B4T5ciTCkWauSqVAcVKy88ofjcSawdmMGz",
              "functions":[
              {
              "name":"symbol",
              "inputs":[],
              "outputs":[
              {
              "name":"symbol",
              "type":"string"
              }
              ]
              },
              {
              "name":"decimal",
              "inputs":[],
              "outputs":[
              {
              "name":"decimal",
              "type":"uint8"
              }
              ]
              },
              {
              "name":"totalSupply",
              "inputs":[],
              "outputs":[
              {
              "name":"totalSupply",
              "type":"uint64"
              }
              ]
              },
              {
              "name":"transfer",
              "inputs":[
              {
              "name":"transferArgs",
              "type":"array",
              "components":[
              {
              "name":"transferArg",
              "type":"struct",
              "components":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              },
              {
              "name":"amount",
              "type":"uint64"
              }
              ]
              }
              ]
              }
              ],
              "outputs":[]
              },
              {
              "name":"approve",
              "inputs":[
              {
              "name":"transferArgs",
              "type":"array",
              "components":[
              {
              "name":"transferArg",
              "type":"struct",
              "components":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              },
              {
              "name":"amount",
              "type":"uint64"
              }
              ]
              }
              ]
              }
              ],
              "outputs":[]
              },
              {
              "name":"transferFrom",
              "inputs":[
              {
              "name":"transferArgs",
              "type":"array",
              "components":[
              {
              "name":"transferArg",
              "type":"struct",
              "components":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              },
              {
              "name":"amount",
              "type":"uint64"
              }
              ]
              }
              ]
              }
              ],
              "outputs":[]
              },
              {
              "name":"balanceOf",
              "inputs":[
              {
              "name":"account",
              "type":"account"
              }
              ],
              "outputs":[
              {
              "name":"balance",
              "type":"uint64"
              }
              ]
              },
              {
              "name":"allowance",
              "inputs":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              }
              ],
              "outputs":[
              {
              "name":"balance",
              "type":"uint64"
              }
              ]
              }
              ],
              "events":[
              {
              "name":"transfer",
              "inputs":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              },
              {
              "name":"amount",
              "type":"uint64"
              }
              ]
              },
              {
              "name":"approve",
              "inputs":[
              {
              "name":"from",
              "type":"account"
              },
              {
              "name":"to",
              "type":"account"
              },
              {
              "name":"amount",
              "type":"uint64"
              }
              ]
              }
              ]
              }
          </div>
          <div class="functions-list-wraper">
              <span v-for="item in jsonData.functions" @click="showForm(item)">{{item.name}}</span>
          </div>
          <div v-html="formStr"></div>
          <div>提交后参数：{{resultStr}}</div>
      </div>
      <div class="json">当前表单:<br/>
          <json-view :data="currentItem"/>
      </div>

  </div>
</template>

<script>
  import jsonView from 'vue-json-views'
    export default {
      components: {
        jsonView
      },
        data () {
         return  {
            jsonData:{},
            jsonStr:'',
            resultStr:'',
            formStr:'',
            currentItem:{},
          }
        },
        mounted(){
           this.jsonStr=$('#jsonStr').text()
           this.jsonData = JSON.parse(this.jsonStr||'{}')
          $(document).on('click','.add',function (e) {
            console.log('点击了',$(this))
            e.stopPropagation()
            $(this).parents('.array').append($(this).parents('.array').find('.array-cons:eq(0)').clone())
          })
          $(document).on('click','.del',function (e) {
            console.log('点击了',$(this))
            e.stopPropagation()
            if($(this).parents('.array').find('.array-cons').length>1){
              $(this).parents('.array').find('.array-cons:last').remove()
            }
          })
          $(document).on('click','#submit', (e)=> {
            e.stopPropagation()
            let formArr = []
            let $formItem = $('.form-wraper > div:not(".submit")')
            let that = this
            $formItem.each(function () {
              let $currentItem = $(this)
              if($currentItem.hasClass('array')){
                formArr.push(that.getArray($currentItem))
              }
              else if($currentItem.hasClass('struct')){
                formArr.push(that.getStruct($currentItem))
              }
              else {
                formArr.push($currentItem.find('input').val())
              }
            })

            let coder = {
              'action_type': 'invoke',
              'contract_account': this.jsonData.contract_account,
              'method': this.currentItem.name,
              'args': formArr,
              'uuid': parseInt((Math.random()*(1000+1))),
              'type': 2,
              'create_time': Date.parse(new Date()),
              'account': 'BSbEJ7DqxB1qvFxwrfzg9ffK1YhYzxUdu9'
            };
            this.resultStr = JSON.stringify(coder)
          })
        },
        watch:{
          'jsonStr':function () {
             this.jsonData = JSON.parse(this.jsonStr||'{}')
          }
        },
        methods: {
          showForm(item){
            this.currentItem=item
            let formStr='<div class="form-wraper">'
            for(let m=0;m<item.inputs.length;m++){
              if(item.inputs[m].type==='struct'){
                formStr += this.handleStruct(item.inputs[m])
              }
              else if(item.inputs[m].type==='array'){
                formStr += this.handleArray(item.inputs[m])
              }
              else{
                formStr +='<div class="input-wraper"><span class="title">'+item.inputs[m].name+' ('+item.inputs[m].type+')</span><input type="text"/></div>'
              }
            }
            formStr +='<div class="submit" id="submit">提交</div></div>'
            this.formStr = formStr
          },
          handleStruct(item){
            let formStr=''
            formStr += "<div class='struct'><h1>"+item.name+" ("+item.type+")</h1>"
            for(var i=0;i<item.components.length;i++){
              if(item.components[i].type==='struct'){
                formStr += this.handleStruct(item.components[i])
              }
              else if(item.components[i].type==='array'){
                formStr += this.handleArray(item.components[i])
              }
              else{
                formStr +='<div class="input-wraper"><span class="title">'+item.components[i].name+' ('+item.components[i].type+')</span><input type="text"/></div>'
              }
            }
            formStr += "</div>"
            return formStr
          },
          handleArray(item){
            let formStr=''
            formStr += '<div class="array"><h1>'+item.name+' ('+item.type+')</h1><span class="add">+</span><span class="del">-</span><div class="array-cons">'
            for(var i=0;i<item.components.length;i++){
              if(item.components[i].type==='struct'){
                formStr += this.handleStruct(item.components[i])
              }
              else if(item.components[i].type==='array'){
                formStr += this.handleArray(item.components[i])
              }
              else{
                formStr +='<div class="input-wraper"><span class="title">'+item.components[i].name+' ('+item.components[i].type+')</span><input type="text"/></div>'
              }
            }
            formStr += '</div></div>'
            return formStr
          },
          //获取值
          getArray($formItem){
            let that = this
            let $arrayConsDiv=$formItem.find('.array-cons > div')
            let formArr = []
            $arrayConsDiv.each(function () {
              let $currentItem = $(this)
              if ($currentItem.hasClass('array')) {
                formArr.push(that.getArray($currentItem))
              } else if ($currentItem.hasClass('struct')) {
                formArr.push(that.getStruct($currentItem))
              } else {
                let tempArray = []
                $currentItem.find('input').each(function () {
                  tempArray.push($(this).val())
                })
                formArr.push(tempArray)
              }
            })
            return formArr
          },
          getStruct($formItem){
            let that = this
            let formArr = []
            let $arrayConsDiv=$formItem.find('> div')
            $arrayConsDiv.each(function () {
              let $currentItem = $(this)
              if($currentItem.hasClass('array')){
                formArr.push(that.getArray($currentItem))
              }
              else if($currentItem.hasClass('struct')){
                formArr.push(that.getStruct($currentItem))
              }
              else {
                formArr.push($currentItem.find('input').val())
              }
            })
            return formArr
          },
        }
    }
</script>
<style>
    .array {
        background: gray;
    }
    .struct {
         padding: 20px;
         background: #ccc;
     }
    .input-wraper {
        display: flex;
        margin-bottom: 15px;
    }
    .input-wraper .title {
        width: 100px;
    }
    .functions-list-wraper {
        overflow:hidden;
        margin:20px auto;
    }
    .functions-list-wraper span {
        cursor: pointer;
        float: left;
        line-height: 32px;
        height: 32px;
        border: 1px solid #ccc;
        border-radius:5px;
        margin-right: 10px;
        margin-bottom: 5px;
        padding:0 5px;
    }
    .left {
        width: 60%;
        padding: 10px;
        padding-left: 20px;
    }
    .left .el-textarea {

    }
    .json {
        height: 100vh;
        width: 40%;
        overflow-y: auto;
        position: fixed;
        right: 0px;
        top: 0px;
    }
    .submit {
        cursor: pointer;
        color: #fff;
        background-color: #20a0ff;
        border-color: #20a0ff;
        text-align: center;
        padding: 10px 15px;
        font-size: 14px;
        border-radius: 4px;
        width: 100px;
        margin: auto;
    }
    .form-wraper .title {
        height: 36px;
        display: flex;
        align-items: center;
        padding: 3px 10px;
        width: 150px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .form-wraper .add,.form-wraper .del{
        height: 36px;
        align-items: center;
        padding: 3px 10px;
        width: 100px;
        flex-grow: 0;
        flex-shrink: 0;
        font-size: 22px;
        cursor: pointer;
    }
    .form-wraper input {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: inline-block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: none;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 300px;
        flex-grow: 0;
        flex-shrink: 0;
    }
</style>
