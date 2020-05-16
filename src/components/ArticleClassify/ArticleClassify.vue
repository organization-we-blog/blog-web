<template><!--文章分类组件-->
  <div class="ArticleClassifyBox" @click="click">
    <h3><i class="el-icon-s-order"></i>文章分类</h3>
  <SplitLine/>
  </div>
</template>

<script>
  import getClassifyAndTag from "../../api/classifyAndTag";

  export default {
    name: "ArticleClassify",
    data() {
      return {
        classifys: []
      }
    },
    methods: {
      notify() {
        this.$message('暂未开放！')
      },
      click(){
        alert(1)
      }
    },
    async created() {
      //请求classify数据
      this.classifys =  getClassifyAndTag('categorys').then(res=> {
        console.log(res);
      })
    }
  }


</script>

<style scoped>
  .ArticleClassifyBox {
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
  }

  .ArticleClassifyBox > h3 {
    color: #969696;
    margin: 0;
    text-align: left;
  }
</style>
