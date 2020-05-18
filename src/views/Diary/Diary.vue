<template>
  <div>
    <!--导航条-->
    <div style="position: fixed;width:100%;top: 0;left: 0;z-index: 3;">
      <Nav></Nav>
    </div>
    日记
  </div>
</template>

<script>
  import Nav from "../../components/Nav/Nav.vue"
  export default {
    components:{Nav},
    name: "Diary"
  }
</script>

<style scoped>

</style>
