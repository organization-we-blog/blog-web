<template>
  <!--导航栏-->
  <div style="width: 100%;height: 100%">
    <!--收起导航栏的按钮-->
    <!--<div class="showNaxBox">
        <div class="showNaxBoxIcon"></div>
        <div class="showNaxBoxIcon" style="margin:5px 0"></div>
        <div class="showNaxBoxIcon"></div>
    </div>-->
    <div :class="this.BocClass">
      <div>
        <div class="logoBox">
          <h3>一堆菜鸟的博客</h3>
        </div>
        <el-button type="text" class="itemBtn" @click="toHome">首页</el-button>
        <el-button type="text" class="itemBtn" @click="toGather">归档</el-button>
        <el-button type="text" class="itemBtn" @click="toDiary">日记</el-button>
        <el-button type="text" class="itemBtn" @click="toMessageBoard">留言</el-button>
        <div style="display: inline-block;width:60%;max-width: 300px;height: 34px;position: relative;margin: 13px 0">
          <div :class="searchBoxClass">
            <el-input
              placeholder="请输入内容"
              v-model="searchValue"
              class="searchInput"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <i class="el-icon-search searchBtn" @click="showSearch"></i>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        searchValue: "",
        BocClass: "box",
        BoxClass1: "box",
        BoxClass2: "box showNavBGC",
        searchBoxClass: "searchBox",
      };
    },
    methods: {
      showSearch() {
        if (this.searchBoxClass === "searchBox showSearchBox") {
          this.searchBoxClass = "searchBox"
        } else {
          this.searchBoxClass = "searchBox showSearchBox"
        }

      },
      toHome() {
        this.linkTo('/home')
      },
      toGather(){
        console.log(1);
        this.linkTo('/gather')
      },
      toDiary(){
        this.linkTo('/diary')
      },
      toMessageBoard(){
        this.linkTo('/messageboard')
      },
      linkTo(path){
        let currentPath =this.$route.path;
        if(currentPath.indexOf(path) == -1) {
          this.$router.push(path)
        }
      }
    },
    mounted() {
      document.body.onscroll = () => {
        let scrollTop = document.getElementsByTagName("html")[0].scrollTop;
        if (scrollTop >= 380) {
          this.BocClass = this.BoxClass2
        } else {
          this.BocClass = this.BoxClass1
        }
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 100%;
    min-height: 60px;
    transition: all 1.0s;
    background-color: rgba(250, 250, 250, .5);
  }

  .itemBtn {
    vertical-align: top;
    height: 60px;
    width: 100px;
    font-size: 17px;
    color: #2c3e50;

  }

  .showNavBGC {
    background-color: #fff;
    box-shadow: 0 -20px 100px 0 #909090;
  }

  .searchBtn {
    position: absolute;
    right: 5px;
    top: -13px;
    font-size: 25px;
    line-height: 60px;
    transition: all 0.2s;
  }

  .searchBtn:hover {
    color: #409EFF;
  }

  .searchInput >>> input {
    height: 34px;
    border-radius: 20px;
    color: #2c3e50;
    background-color: rgba(255, 255, 255, .5);
  }

  .searchBox {
    position: absolute;
    right: 40px;
    display: inline-block;
    opacity: 0;
    width: 0;
    height: 100%;
    transition: all 0.4s;

  }

  .showSearchBox {
    opacity: 1;
    width: 80%;
  }

  .logoBox {
    display: inline-block;
    height: 34px;
    position: absolute;
    margin: 13px 0;
    left: 5px
  }

  .showNaxBox {
    transition: all 0.3s;
    padding: 10px;
    width: 35px;
    height: 20px;
    border: 1px rgba(188, 185, 188, 0.7) solid;
    border-radius: 3px;
    position: absolute;
    top: 20px;
    left: 20px
  }

  .showNaxBoxIcon {
    transition: all 0.3s;
    height: 4px;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
    background-color: rgba(188, 185, 188, 0.7);
  }

  .showNaxBox:hover .showNaxBoxIcon {
    background-color: rgb(174, 255, 255);
  }

  .showNaxBox:hover {
    border-color: rgb(174, 255, 255);
  }

  @media screen and (max-width: 999px) {
    .logoBox {
      display: none;
    }
  }
</style>
