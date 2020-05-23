<template><!--首页-->
  <div class="home">
    <!-- 导航条-->
    <div style="position: fixed;width:100%;top: 0;left: 0;z-index: 3;">
      <Nav></Nav>
    </div>
    <!--    首页大图-->
    <div class="coverImg">

    </div>
    <!--    占位盒子-->
    <div style="height: 100vh">
      <div class="titleBox">
        <h1 class="slogan">编程其实并不难，只是你太想速成</h1>
        <div class="divButton">About The Blog</div>
      </div>
      <div class="next">
        <span id="icon" class="el-icon-arrow-down"></span>
      </div>
    </div>
    <!--主体内容-->
    <div style="width:100%;background-color: #fff;">
      <div class="home_content">
        <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
  import anime from "animejs"
  // 组件
  import Nav from "../../components/Nav/Nav.vue"
  import Footer from '../../components/Footer/Footer.vue'
  //import bgCanvas from "../../assets/js/ribbon"
  export default {
    name: 'Home',
    components: {
      Nav,
      Footer,
    },
    data(){
      return{
      }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
      //bgCanvas(document.getElementsByClassName("home")[0])
      anime({
        targets: document.getElementById("icon"),
        translateY: 20,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  }
</script>

<style scoped lang="less">
  .coverImg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    background-image: url(http://attach.bbs.miui.com/forum/201305/24/123936nq3qmi7a3qjx2o3i.jpg);
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
  .next{
    width: 100%;
    position: absolute;
    bottom: 50px;
    text-align: center;
  }
  #icon{
    font-size: 30px;
    color: #cccccc;
  }
  .home_content{
    width: 70%;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px
  }
  @media screen and (max-width: 760px) {
    .home_content {
      width: 96%;
    }
  }
</style>
