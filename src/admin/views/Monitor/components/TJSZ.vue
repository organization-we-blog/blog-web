<template>
    <div class="box">
      <div id="TJSZ">
        <div class="title">
          <h1>文章信息可视化面板</h1>
        </div>
        <div class="itemBox">
          <div class="TJSZItem">文章</div>
          <div class="TJSZItem">访问量</div>
          <div class="TJSZItem">点赞</div>
          <div class="TJSZItem">评论</div>
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
    height: 250px;
    min-width: 550px;
    margin: 0 auto;
    padding: 15px 30px;
    .title{
      padding: 15px 10px;
      text-align: left;
    }
    #TJSZ{
      width: 100%;
      height: 100%;
      border: #eee 1px solid;
      .itemBox{
        display: flex;
        width: 100%;
        height: 100%;
        .TJSZItem{
          display: inline-block;
          flex: 1;
          margin: 0 20px;
          height: calc(100% - 51px);
          background-color: #25ffe9;
        }
      }
    }
  }
</style>
