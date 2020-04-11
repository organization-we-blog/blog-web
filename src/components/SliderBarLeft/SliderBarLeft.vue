<template>
  <div>
    <ArticleClassify/>
    <ArticleTag/>
  </div>
</template>

<script>
  import ArticleClassify from "../ArticleClassify/ArticleClassify";
  import ArticleTag from "../ArticleTag/ArticleTag";
  export default {
    name: "SliderBarLeft",
    components: {
      ArticleClassify,
      ArticleTag
    }
  }
</script>

<style scoped>

</style>
