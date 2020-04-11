<template><!--首页-->
  <div class="home">
    <div class="coverImg">
      <div class="titleBox">
        <h1 class="slogan">记录成长的点滴,做一个爱分享的程序猿</h1>
        <div class="divButton">About The Blog</div>
      </div>
    </div>
    <!--    <div style="width:100%;position: absolute;top: 100%;">-->
    <!--      <div class="noticeBox">-->
    <!--        <div style="position: relative;margin: 0 auto;width: auto">-->
    <!--          <i class="el-icon-bell" style="font-size: 35px;vertical-align:top;"></i>-->
    <!--          <span class="notice">婴儿网站，还请各位大佬手下留情</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div style="width: 100%;margin: 0 auto">-->
    <!--        <div class="ClassifyBox">-->
    <!--          <div class="ladder">-->
    <!--            <div class="sidebarBox">&lt;!&ndash;侧边栏容器&ndash;&gt;-->
    <!--              <ArticleClassify></ArticleClassify>-->
    <!--              <ArticleTag></ArticleTag>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div style="display: inline-block;position: relative;width: 100%;;max-width: 800px;">-->
    <!--          <RecArt></RecArt>-->
    <!--          <ArticleList></ArticleList>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <Footer></Footer>-->
    <!--    </div>-->
    <div style="width:100%;margin-top: 100vh">
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
    </div>
    <Footer/>
  </div>
</template>
<script>
  import BodyContainer from "../../components/BodyContainer/BodyContainer";
  import ArticleList from './components/ArticleList.vue';
  import RecArt from './components/RecArt.vue';
  import SliderBarLeft from "../../components/SliderBarLeft/SliderBarLeft";
  import SliderBarRight from "../../components/SliderBarRight/SliderBarRight";
  import Footer from '../../components/Footer/Footer.vue';

  export default {
    name: 'Home',
    components: {
      BodyContainer,
      ArticleList,
      RecArt,
      SliderBarLeft,
      SliderBarRight,
      Footer,
    },
    created() {
      console.log('home被创建');
    },
    destroyed() {
      console.log('home被销毁');
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
    /*width: 100%;*/
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
  }

  .notice {
    color: #909090;
    line-height: 35px;
    margin: 0 0 0 10px;
  }

  .ClassifyBox {
    display: inline-block;
    position: relative;
    top: 100px;
    margin: 0 0 0 2%;
    width: 100px;
    height: 500px;
    vertical-align: top;
  }

  @media screen and (max-width: 1100px) {
    .ClassifyBox {
      display: none;
    }
  }

  .ladder {
    position: relative;
    width: 100px;
    height: 100%;
  }

  .sidebarBox {
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
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
