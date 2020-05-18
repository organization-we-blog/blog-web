<template>
  <div style="margin-top: 100px">
    <!--导航条-->
    <div style="position: fixed;width:100%;top: 0;left: 0;z-index: 3;">
      <Nav></Nav>
    </div>
    <BodyContainer>
      <!--左侧边栏容器-->
      <template v-slot:left-bar>
        <SliderBarLeft></SliderBarLeft>
      </template>
      <!--主体内容-->
      <template v-slot:content-center>
        <div class="center">
          <el-timeline>
            <el-timeline-item v-for="(item, index) in 10" :key="index" timestamp="2018/4/12" placement="top">
              <el-card>
                <h4 style="padding:0 0 20px ">更新 Github 模板{{item}}</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </template>
      <!--右侧边栏容器-->
      <template v-slot:right-bar>
        <SliderBarRight/>
      </template>
    </BodyContainer>
    <Footer/>
  </div>
</template>

<script>
  import Nav from "../../components/Nav/Nav.vue"
  import SliderBarLeft from "../../components/SliderBarLeft/SliderBarLeft";
  import BodyContainer from "../../components/BodyContainer/BodyContainer";
  import SliderBarRight from "../../components/SliderBarRight/SliderBarRight";
  import Footer from "../../components/Footer/Footer";

  export default {
    name: "Gather",
    components: {
      Nav,
      SliderBarLeft,
      BodyContainer,
      SliderBarRight,
      Footer
    }
  }
</script>

<style scoped>
  /*.content {*/
  /*  width: 90%;*/
  /*  margin: 100px auto 0;*/
  /*  position: relative;*/
  /*  background-color: #fff;*/
  /*}*/

  .center {
    padding: 20px 40px 0 0;
    text-align: left !important;
  }
  @media screen and (max-width: 750px) {
    .center {
      padding-right: 0;
    }
  }
</style>
