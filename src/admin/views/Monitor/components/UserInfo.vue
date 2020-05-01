<template>
  <div class="box">
    <h4>账号信息</h4>
    <div class="content">
      <div>
        <el-avatar shape="square" :size="100" fit="cover" src="/api/public/uploads/xc.jpg"></el-avatar>
        <div style="display: inline-block;padding-left: 15px;width: 50%">
          <p>用户名：<span>xcooo1</span></p>
          <p>性别：<span>男</span></p>
          <p>年龄：<span>50</span></p>
        </div>
      </div>
      <div style="padding-left: 15px;border-left: 1px #eee solid">
        <p>邮箱：<br><span>4646468468@qq.com</span></p>
        <p>注册于：<br><span>2020-05-01 19:04</span></p>
        <p>id：<br><span>5e91b5a61c3d1b0f0f497da0</span></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped lang="less">
  .box{
    width: 48%;
    min-width: 550px;
    height: 280px;
    margin: 0 2% 0 0;
    display: inline-block;
    border: #eee 1px solid;
    background-color: #fff;
    padding: 10px 0;
    >h4{
      text-align: left;
      padding-left: 10px;
    }
    >.content{
      width: 90%;
      padding: 10px 10px;
      text-align: left;
      margin: 0 auto;
      >div{
        width: 49%;
        display: inline-block;
        margin-top: 20px
      }
    }
    p{
      line-height: 25px;
      span{
        word-wrap:break-word;
        overflow:hidden;
        color: #409EFF;
      }
    }
  }
</style>
