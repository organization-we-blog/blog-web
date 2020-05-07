<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container style="height: calc(100% - 60px)">
      <el-aside id="asideBox" width="220px" style="background-color: #fff;">
        <Aside></Aside>
      </el-aside>
      <el-container style="">
        <el-main style="background-color: #fafafa;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from "./components/Aside/Aside";
  export default {
    name: "admin",
    components: {Aside}
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
