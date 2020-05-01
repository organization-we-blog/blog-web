<template>
  <div class="monitor">
    <div class="title">
      <h1>仪表盘</h1>
    </div>
    <div class="box1">
      <UserInfo></UserInfo>
      <ZYTJ></ZYTJ>
    </div>
    <artSubmit></artSubmit>
    <TJSZ></TJSZ>
  </div>
</template>

<script>
  import ZYTJ from "./components/ZYTJ";
  import UserInfo from "./components/UserInfo";
  import artSubmit from "./components/artSubmit";
  import TJSZ from "./components/TJSZ";
  export default {
    name: "Monitor",
    components:{ZYTJ,UserInfo,artSubmit,TJSZ}
  }
</script>

<style scoped lang="less">
  .monitor{
    .title{
      h1{
        text-align: left;
        font-size: 30px;
        border-left: 6px #409EFF solid;
        padding-left: 15px;
        margin-bottom: 20px;
      }
    }
    .box1{
      padding: 15px 30px;
      width: 100%;
      min-height: 280px;
    }
  }
  @media screen and (max-width:1300px){
    .box1{
      >div{
        display: block !important;
        width: 100% !important;
        margin: 0;
      }
    }
  }
</style>
