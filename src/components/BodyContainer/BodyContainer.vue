<template>
  <div class="content">
    <!--左侧边栏容器-->
    <div class="slider-bar-left hidden">
      <slot name="left-bar"></slot>
    </div>
    <!--主体内容-->
    <div class="content-center cell-phone">
      <slot name="content-center"></slot>
    </div>
    <!--右侧边栏容器-->
    <div class="slider-bar-right hidden">
      <slot name="right-bar"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BodyContainer"
  }
</script>

<style scoped>
  .content {
    width: 90%;
    margin: 0 auto;
    /*margin: 100px auto 0;*/
    position: relative;
    /*background-color: #fff;*/
  }
  .content-center {
    display: inline-block;
    box-sizing: border-box;
    width: 60%;
  }

  .slider-bar-right,
  .slider-bar-left {
    position: absolute;
    top: 0;
    width: 20%;
    /*height: 100%;*/
  }

  .slider-bar-left {
    left: 0;
  }

  .slider-bar-right {
    right: 0;
  }

  @media screen and (max-width: 750px) {
    * {
      padding: 0;
      margin: 0;
    }
    .cell-phone {
      width: 100% !important;
    }
    .hidden {
      display: none;
    }
  }
</style>
