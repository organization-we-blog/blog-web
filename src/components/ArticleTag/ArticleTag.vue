<template><!--标签分类组件-->
  <div class="ArticleTagBox">
    <div class="head">
      <h3><i class="el-icon-collection-tag" style="margin-right: 5px"></i>标签</h3>
    </div>
    <SplitLine/>
    <div class="tags">
      <div @mouseenter="showMask"
           @mouseleave="hidMask"
           @click="notify"
           class="tag"
           v-for="(item, index) in tags"
           :key="index">
        <span class="value">{{item.value}}</span>
        <span class="mask" :style="{zIndex: showMask?'-1':'0'}">{{item.sum}}</span>
      </div>
      <div @mouseenter="showMask"
           @mouseleave="hidMask"
           @click="notify"
           class="tag"
           v-for="(item, index) in tags"
           :key="index">
        <span class="value">{{item.value}}</span>
        <span class="mask" :style="{zIndex: showMask?'-1':'0'}">{{item.sum}}</span>
      </div>
      <div @mouseenter="showMask"
           @mouseleave="hidMask"
           @click="notify"
           class="tag"
           v-for="(item, index) in tags"
           :key="index">
        <span class="value">{{item.value}}</span>
        <span class="mask" :style="{zIndex: showMask?'-1':'0'}">{{item.sum}}</span>
      </div>
      <div @mouseenter="showMask"
           @mouseleave="hidMask"
           @click="notify"
           class="tag"
           v-for="(item, index) in tags"
           :key="index">
        <span class="value">{{item.value}}</span>
        <span class="mask" :style="{zIndex: showMask?'-1':'0'}">{{item.sum}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import getClassifyAndTag from '../../network/classifyAndTag'

  export default {
    name: "ArticleTag",
    data() {
      return {
        tags: [],
        color: ['success', 'info', 'warning', 'danger']
      }
    },
    computed: {},
    methods: {
      notify() {
        this.$message('暂未开放！');
      },
      showMask(e) {
        e.target.lastElementChild.style.zIndex = 0
      },
      hidMask(e) {
        e.target.lastElementChild.style.zIndex = -1
      }
    },
    created() {
      //请求tag数据
      getClassifyAndTag('tag').then(res => {
        this.tags = res
      })
    }
  }
</script>

<style scoped>
  .ArticleTagBox {
    box-sizing: border-box;
    /*height: 200px;*/
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    margin-top: 20px;
    padding: 10px 10px 0px;
    border-radius: 3px;
    background-color: #fff;
  }

  .ArticleTagBox > .head > h3 {
    color: #969696;
    margin: 0;
    text-align: left;
  }

  .tags {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .tags .tag {
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
  }

  .tags .tag .value {
    display: inline-block;
    padding: 3px 6px;
  }

  .tags .tag .mask {
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(53, 175, 251);
    padding: 3px 6px;
    color: #fff;
    line-height: 1.4;
    z-index: -1;
  }


</style>
