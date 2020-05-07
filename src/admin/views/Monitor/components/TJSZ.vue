<template>
    <div class="box">
      <div id="TJSZ">
        <div class="title">
          <h1>统计数值</h1>
        </div>
        <div class="itemBox">
          <div class="TJSZItem">
            <div class="ri1">
              <p class="el-icon-document"></p>
            </div>
            <span>文章</span>
            <h1>125</h1>
          </div>
          <div class="TJSZItem">
            <div class="ri2">
              <p class="el-icon-view"></p>
            </div>
            <span>访问量</span>
            <h1>1686845</h1>
          </div>
          <div class="TJSZItem">
            <div class="ri3">
              <p class="el-icon-thumb"></p></div>
            <span>点赞</span>
            <h1>124</h1>
          </div>
          <div class="TJSZItem">
            <div class="ri4">
              <p class="el-icon-chat-line-round"></p>
            </div>
            <span>评论</span>
            <h1>163</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TJSZ"
    }
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    display: inline-block;
    margin: 0 auto;
    padding: 15px 30px;
    .title{
      padding: 15px 10px;
      text-align: left;
    }
    #TJSZ{
      min-width: 550px;
      width: 100%;
      border: #eee 1px solid;
      background-color: #fff;
      .itemBox{
        width: 100%;
        min-height: 120px;
        .TJSZItem{
          text-align: left;
          min-height: 120px;
          display: inline-block;
          width: 25%;
          min-width: 200px;
          height: calc(100% - 51px);
          >div{
            margin-left: 20%;
            text-align: center;
            width: 50px;
            height: 50px;
            font-size: 30px;
            line-height: 50px;
            border-radius: 50%;
            color: #ffffff;
            display: inline-block;
          }
          >span{
            line-height: 50px;
            margin-left: 10px;
            font-size: 16px;
            font-weight: 400;
          }
          >h1{
            font-size: 30px;
            color: #555;
            margin-left: 50%;
          }
          .ri1{background-color: #409EFF;}
          .ri2{background-color: #67C23A;}
          .ri3{background-color: #E6A23C;}
          .ri4{background-color: #F56C6C;}
        }
      }
    }
  }
</style>
