<template>
  <!--导航栏-->
  <div>
    <!--    pc导航栏-->
    <div class="pc-nav" style="width: 100%;height: 100%">
      <!--收起导航栏的按钮-->
      <!--      <div class="showNaxBox">-->
      <!--          <div class="showNaxBoxIcon"></div>-->
      <!--          <div class="showNaxBoxIcon" style="margin:5px 0"></div>-->
      <!--          <div class="showNaxBoxIcon"></div>-->
      <!--      </div>-->
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
                class="searchInput">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
            <i class="el-icon-search searchBtn" @click="showSearch"></i>
          </div>
        </div>
      </div>
    </div>
    <!--    mobile导航栏-->
    <div style="display: none" class="mobile-nav">
      <i class="el-icon-menu unfold" @click="unfold"></i>
<!--      <el-input-->
<!--        placeholder="请输入内容"-->
<!--        v-model="searchValue"-->
<!--        class="searchInput searchInput-mobile">-->
<!--&lt;!&ndash;        <i slot="prefix" class="el-input__icon el-icon-search"></i>&ndash;&gt;-->
<!--        <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--      </el-input>-->
      <el-input placeholder="请输入内容" v-model="searchValue" class="searchInput searchInput-mobile">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <i class="el-icon-search mobile-search"></i>
    </div>
    <!--    mobile导航内容-->
    <div class="mobile-nav-content" :class="unfoldNav?'show-mobile-nav':''">
      <div class="nav-draw">
        <div @click="toHome">
          <i class="el-icon-house"></i>
          首页
        </div>
        <div @click="toGather">
          <i class="el-icon-document"></i>
          归档
        </div>
        <div @click="toDiary">
          <i class="el-icon-edit-outline"></i>
          日记
        </div>
        <div @click="toMessageBoard">
          <i class="el-icon-message"></i>
          留言
        </div>
      </div>
    </div>
    <!--   返回顶部-->
    <div v-show="show" @click="BC" class="UP"><i class="el-icon-caret-top" style="color: #4b9fff;vertical-align: baseline"></i></div>
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
        unfoldNav: false,
        show: false
      };
    },
    created() {
    },
    methods: {
      BC() {
        this.$refs
        let i = 5;
        let time = setInterval(() => {
          if (document.getElementsByTagName("html")[0].scrollTop > 0) {
            i += 10;
            document.getElementsByTagName("html")[0].scrollTop -= i;
            if (document.getElementsByTagName("html")[0].scrollTop < 0) {
              document.getElementsByTagName("html")[0].scrollTop = 0;
              clearInterval(time);
            }
          } else {
            clearInterval(time);
          }
        }, 20);
      },
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
      toGather() {
        this.linkTo('/gather')
      },
      toDiary() {
        this.linkTo('/diary')
      },
      toMessageBoard() {
        this.linkTo('/messageboard')
      },
      //路由跳转
      linkTo(path) {
        this.hideNav()
        if (this.$route.path.indexOf(path) === -1) {
          this.$router.push(path)
        }
      },
      //mobile展开导航
      unfold(){
        this.unfoldNav = !this.unfoldNav
      },
      hideNav(){
        this.unfoldNav = false
      }
    },
    mounted() {
      document.onscroll = () => {
        if (document.getElementsByTagName("html")[0].scrollTop > 400) {
          this.show = true
        } else {
          this.show = false
        }
      }
      document.body.onscroll = () => {
        let scrollTop = document.getElementsByTagName("html")[0].scrollTop;
        if(scrollTop) this.hideNav();
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
    /**background-color: rgba(250, 250, 250, .5);**/
    background-color: rgba(250, 250, 250, 0);
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

  .mobile-nav {
    position: relative;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #35affb;
  }

  .nav-draw > div {
    cursor: pointer;
  }

  .mobile-nav .unfold,
  .mobile-nav .mobile-search,
  .mobile-nav .searchInput-mobile {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .searchInput-mobile >>> input {
    border-radius: 0!important;
  }

  .mobile-nav .unfold {
    left: 16px;
    font-size: 30px;
  }

  .mobile-nav .mobile-search {
    right: 16px;
    font-size: 30px;
  }

  .mobile-nav .searchInput-mobile {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
  }

  .mobile-nav-content {
    padding: 20px 20px .1px;
    text-align: left;
    background-color: rgb(255, 255, 255);
    /*visibility: hidden;*/
    display: none;
    /*transition: all .3s;*/
    /*height: 0;*/
    /*opacity: 0;*/
  }
  .show-mobile-nav{
    /*visibility: visible;*/
    display: block;
    /*height: auto;*/
    /*opacity: .8;*/
  }

  .nav-draw > div {
    margin-bottom: 20px;
  }

  .mobile-nav-content .nav-draw {

  }
  .UP {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    z-index: 4;
    position: fixed;
    right: 10%;
    bottom: 10%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    transition: background-color 0.3s;
    background-color: #ffffff;
    text-align: center;
  }

  .UP:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 750px) {
    .logoBox {
      display: none;
    }

    .pc-nav {
      display: none;
    }

    .mobile-nav {
      display: block !important;
    }
  }
</style>
