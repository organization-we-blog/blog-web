<template><!--文章分类组件-->
  <div class="ArticleClassifyBox">
    <h3>文章分类</h3>
    <ul>
      <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>vue.js (36)</li>
      <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>node.js (13)</li>
      <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>react (8)</li>
      <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>html5/css3 (21)</li>
      <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>javascript (57)</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ArticleClassify"
  }


</script>

<style scoped>
  .ArticleClassifyBox {
    display: inline-block;
    margin-top: 20px;
    width: 200px;
    text-align: left;
  }

  .ArticleClassifyBox > h3 {
    color: #969696;
    margin: 0 0 20px 0;
  }

  li {
    list-style-type: none;
    margin: 0 0 8px 20px;
    cursor: pointer;
    user-select: none;
    color: #969696;
  }

  li:hover {
    color: #409EFF;
  }
</style>
