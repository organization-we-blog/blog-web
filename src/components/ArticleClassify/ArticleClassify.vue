<template><!--文章分类组件-->
  <div class="ArticleClassifyBox">
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
        classify: []
      }
    },
    methods: {
      notify() {
        this.$message('暂未开放！')
      }
    },
    created() {
      //请求classify数据
      getClassifyAndTag('classify').then(res => {
        this.classify = res
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
