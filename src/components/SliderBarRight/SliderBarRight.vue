<template>
  <div style="background-color:#fff;">
      <!-- 公告栏-->
      <div class="notify hover-shadow">
        <div class="title" style="font-size: 16px">本站公告</div>
        <div class="split-line"></div>
        <div class="msg" style="font-size: 13px">本站正在建设中，敬请期待...</div>
      </div>
      <!--推荐展示-->
      <div class="recommend">
        <div class="blogger">最新文章</div>
        <ul>
          <li @mouseenter="increase" @mouseleave="reduce" v-for="(item, index) in 20" :key="index">
            <span class="txt"><i style="margin: 0 3px" class="el-icon-d-arrow-right"></i>这里只是测试用的文字啦啦啦啦啦啦啦啦啦啦</span>
            <div class="progress"></div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: "SliderBarRight",
    methods: {
      increase(e){
        e.currentTarget.lastElementChild.style.width = '100%';
      },
      reduce(e){
        e.currentTarget.lastElementChild.style.width = '0';
      }
    }
  }
</script>

<style scoped>
  .hover-shadow {
    transition: all .3s;
  }
  .hover-shadow:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, .2) !important;
  }
  .notify {
    box-sizing: border-box;
    /*width: 80%;*/
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  }

  .split-line {
    height: 1px;
    width: 96%;
    margin: 10px auto;
    background-color: #ccc;
  }

  .recommend {
    margin-top: 20px;
    padding: 11px 11px 1px;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  }
  .recommend ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .recommend li {
    position: relative;
    margin: 10px 0;
    background-color: rgb(243, 243, 243);
    color: #000;
    cursor: pointer;
  }

  .recommend li .txt {
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #35affb;
    height: 3px;
    width: 0;
    transition: all .6s;
  }
</style>
