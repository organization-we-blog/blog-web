<template>
  <div class="box">
    <div id="PL">
      <div class="title">
        <h1>最新评论</h1>
      </div>
      <p class="dsh">
        kimi233 在2020-5-4 13:07 评论了文章 《测试》
        <span>待审核</span>
        <span class="actionSpan">驳回</span>
        <span class="actionSpan">通过</span>
      </p>
      <p class="ytg">
        kimi233 在2020-5-4 13:07 评论了文章 《测试》
        <span>已通过</span>
        <span class="actionSpan">状态修改为驳回</span>
      </p>
      <p class="ybh">
        kimi233 在2020-5-4 13:07 评论了文章 《测试》
        <span>已驳回</span>
        <span class="actionSpan">状态修改为通过</span>
      </p>
      <p class="ytg">
        kimi233 在2020-5-4 13:07 评论了文章 《测试》
        <span>已通过</span>
        <span class="actionSpan">状态修改为驳回</span>
      </p>
      <p class="dsh">
        kimi233 在2020-5-4 13:07 评论了文章 《测试》
        <span>待审核</span>
        <span class="actionSpan">驳回</span>
        <span class="actionSpan">通过</span>
      </p>
      <span class="ZTTJ">待审核: <span>5</span></span>
      <span class="ZTTJ">已通过: <span>5</span></span>
      <span class="ZTTJ">已驳回: <span>5</span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArtCommentsState"
  }
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    min-height: 300px;
    display: inline-block;
    margin: 0 auto;
    padding: 15px 30px;
    .title{
      padding: 15px 10px;
      text-align: left;
    }
    #PL{
      min-width: 550px;
      border: 1px #eee solid;
      min-height: 300px;
      background-color: #fff;
      >p{
        transition: all 0.2s;
        font-size: 14px;
        text-align: left;
        line-height: 30px;
        padding: 0 20px;
        margin: 5px 30px;
        border-radius: 5px;
        &:hover{
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          .actionSpan{
            display: inline;
          }
        }
        span{
          float: right;
          margin: 0 5px;
        }
        .actionSpan{
          display: none;
          color: #409eff;
        }
      }
      .ytg{
        background-color: #f0f9eb;
        color: #67c23a;
      }
      .ybh{
        background-color: #f4f4f5;
        color: #909399;
      }
      .dsh{
        background-color: #fdf6ec;
        color: #e6a23c;
      }
    }
  }
  .ZTTJ{
    display:inline-block;
    margin-top:10px;
    width: 30%;
    line-height: 30px;
    span{
      color: #409EFF;
    }
  }
</style>
