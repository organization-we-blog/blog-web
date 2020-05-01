<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    style="text-align: left;height:100%">
    <el-menu-item index="/admin/monitor">
      <i class="el-icon-monitor"></i>
      <span slot="title">仪表盘</span>
    </el-menu-item>
    <el-submenu index="/admin/article">
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/admin/article_list">
        <i class="el-icon-document"></i>
        <span slot="title">文章列表</span>
      </el-menu-item>
      <el-menu-item index="/admin/new_article">
        <i class="el-icon-document-add"></i>
        <span slot="title">添加文章</span>
      </el-menu-item>
      <el-menu-item index="/admin/1" disabled>
        <i class="el-icon-document-checked"></i>
        <span slot="title">文章审核</span>
      </el-menu-item>
      <el-menu-item index="/admin/article_monitor">
        <i class="el-icon-data-line"></i>
        <span slot="title">可视化面板</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/admin/users">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/admin/user_list">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <!--<el-menu-item index="/admin/user_role">
        <i class="el-icon-s-check"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>-->
    </el-submenu>
    <el-menu-item index="6" disabled>
      <i class="el-icon-s-tools"></i>
      <span slot="title">站点管理</span>
    </el-menu-item>
    <el-menu-item index="5" disabled>
      <i class="el-icon-data-line"></i>
      <span slot="title">访问数据</span>
    </el-menu-item>
    <el-menu-item index="4" disabled>
      <i class="el-icon-setting"></i>
      <span slot="title">站点安全</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Aside",
    data(){
      return{
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      if(document.documentElement.offsetWidth < 1200){
        this.isCollapse = true;
        document.getElementById("asideBox").style.width = "65px"
      }else {
        this.isCollapse = false;
        document.getElementById("asideBox").style.width = "220px"
      }
      window.onresize= ()=> {
        if(document.documentElement.offsetWidth < 1200){
          this.isCollapse = true;
          document.getElementById("asideBox").style.width = "65px"
        }else {
          this.isCollapse = false;
          document.getElementById("asideBox").style.width = "220px"
        }
      }
    }
  }
</script>

<style scoped>

</style>
