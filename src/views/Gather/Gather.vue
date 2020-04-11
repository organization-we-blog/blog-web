<template>
  <div style="margin-top: 100px">
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
                <h4>更新 Github 模板{{item}}</h4>
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
  import SliderBarLeft from "../../components/SliderBarLeft/SliderBarLeft";
  import BodyContainer from "../../components/BodyContainer/BodyContainer";
  import SliderBarRight from "../../components/SliderBarRight/SliderBarRight";
  import Footer from "../../components/Footer/Footer";

  export default {
    name: "Gather",
    components: {
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
</style>
