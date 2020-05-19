<template><!--首页-->
  <div class="home">
    <!--导航条-->
    <div style="position: fixed;width:100%;top: 0;left: 0;z-index: 3;">
      <Nav></Nav>
    </div>
    <!--    首页大图-->
    <div class="coverImg">
      <div class="titleBox">
        <h1 class="slogan">编程其实并不难，只是你太想速成</h1>
        <div class="divButton">About The Blog</div>
      </div>
    </div>
    <!--    占位盒子-->
    <div style="height: 100vh"></div>
    <!--    提示信息-->
    <div class="noticeBox">
      <div style="position: relative;margin: 0 auto;width: auto">
        <i class="el-icon-bell" style="font-size: 35px;vertical-align:top;"></i>
        <span class="notice">婴儿网站，还请各位大佬手下留情</span>
      </div>
    </div>
    <!--    主体内容-->
    <!--<div style="width:100%;">
      <BodyContainer>
        <template v-slot:left-bar>
          <SliderBarLeft/>
        </template>
        <template v-slot:content-center>
          <RecArt/>
          <ArticleList/>
        </template>
        <template v-slot:right-bar>
          <SliderBarRight/>
        </template>
      </BodyContainer>
    </div>-->
    <Footer/>
  </div>
</template>
<script>
  // 组件
  import Nav from "../../components/Nav/Nav.vue"
  // import BodyContainer from "../../components/BodyContainer/BodyContainer";
  // import ArticleList from './components/ArticleList.vue';
  // import RecArt from './components/RecArt.vue';
  // import SliderBarLeft from "../../components/SliderBarLeft/SliderBarLeft";
  // import SliderBarRight from "../../components/SliderBarRight/SliderBarRight";
  // import Footer from '../../components/Footer/Footer.vue'
  import bgCanvas from "../../assets/js/ribbon"
  export default {
    name: 'Home',
    components: {
      Nav,
/*      BodyContainer,
      ArticleList,
      RecArt,
      SliderBarLeft,
      SliderBarRight,
      Footer,*/
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
      bgCanvas(document.getElementsByClassName("home")[0])
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .coverImg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: url(../../assets/images/cywl800.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .divButton {
    width: 135px;
    height: 40px;
    border: 1px #aaaaaa solid;
    color: #aaaaaa;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    top: 20px;
    left: 15px;
    cursor: pointer;
    user-select: none;
    line-height: 40px;
    text-align: center;
    transition: all 0.3s;
  }

  .divButton:hover {
    color: #77fff3;
    border-color: #77fff3;
  }

  .titleBox {
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
  }

  .titleBox > h1 {
    font-size: 2em;
    font-weight: 400;
    color: #fff;
  }

  .noticeBox {
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 0 0 5px 5px;
    background-color: #fff;
  }

  .notice {
    color: #909090;
    line-height: 35px;
    margin: 0 0 0 10px;
  }

  .slogan {
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 760px) {
    .titleBox > h1 {
      font-size: 18px;
    }
  }
</style>
