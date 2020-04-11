<template><!--底部栏-->
  <div class="footerBox">
    <p>
      blog正处于开发阶段， <br>
      我们比较奇葩的同时使用vue（前台）和react（后台）作为前端框架，<br>
      使用node+mongoDB作为api的开发。 <br>
      <span style="color:red">
            如果你掌握以上如何一门技术，并且想获得经验，那么加入我们吧。<br>
            <img src="../../assets/images/QR.jpg" alt="加入开发" width="100" align="center">
            我们会在上线后公布所有参与开发的人员
        </span>
      <br>
      <br>
      <br>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footerBox {
    width: 100%;
    height: 100px;
    border-top: 1px #eeeeee solid;
  }
</style>
