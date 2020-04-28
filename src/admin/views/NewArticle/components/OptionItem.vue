<template>
  <div class="box">
    <div class="itemHeader"
         @click="showContent = !showContent">
      <h1 class="itemTitle">
        {{title}}
        <span
          :style="showContent?'transform: rotate(0deg);':'transform: rotate(180deg);'"
          class="el-icon-caret-top showIcon">
        </span>
      </h1>
    </div>
    <el-collapse-transition>
      <div v-show="showContent">
        <slot>
          <div style="height: 50px;">
            <h1 style="text-align: center;line-height: 50px">空空如也</h1>
          </div>
        </slot>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  export default {
    name: "OptionItem",
    data(){
      return{
        showContent: true
      }
    },
    props: {
      title: {
        type: String,
        default: "空"
      },
    },
    methods:{
    }
  }
</script>

<style scoped>
  .box{
    display: inline-block;
    width: 100%;
    max-width: 300px;
    border: 1px #eeeeee solid;
  }
  .itemHeader{
    padding: 0 20px;
    width: 100%;
    min-height: 35px;
    background-color: #eeeeee;
    user-select: none;
  }
  .itemHeader>h1{
    line-height: 35px;
  }
  .showIcon{
    float: right;
    line-height: 35px;
    width: 50px;
    transition: all 0.3s;
    text-align: center;
  }
</style>
