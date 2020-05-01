<template>
    <div class="monitor">
      <div class="title">
        <h1>仪表盘</h1>
      </div>
      <div>
        <div class="chartItem" id="safeState">
          <div id="dbState" :style="{'background-color': ds?'#67C23A':'#F56C6C'}">
            <h1>数据库状态：{{ds?'已连接':'已断开'}}</h1>
          </div>
          <el-button v-show="!ds" style="margin-top: 20px" type="primary" icon="el-icon-refresh">尝试重新连接数据库</el-button>
        </div>
        <div class="chartItem"></div>
      </div>
      <p>
        本页包含以下模块：(不断构思中，有好的建议请加在下面)<br>
        最新发布的文章（展示5条，点击后可以到达对应的文章预览页面）<br>
        最新发布的评论（展示5条，点击后可以到达对应的文章预览页面）<br>
        等待审核的数据（包含等待审核的文章和评论，展示10条，点击后可以到达对应的审核页面）<br>
      </p>
    </div>
</template>

<script>
    export default {
        name: "Monitor",
      data(){
          return{
            //数据库状态是否正常
            ds:true,
          }
      },
      methods:{
      },
      mounted() {
      }
    }
</script>

<style scoped lang="less">
.monitor{
  .title{
    h1{
      font-size: 30px;
    }
  }
  #safeState{
    #dbState{
      width: 80%;
      height: 100px;
      border-radius: 10px;
      margin: 0 auto;
      h1{
        font-size: 25px;
        line-height: 100px;
        color: #FFFFFF;
      }
    }
  }
  .chartItem{
    margin: 20px 1%;
    width: 40%;
    min-width: 400px;
    height: 250px;
    //background-color: #7fff7a;
    display: inline-block;
  }
}
</style>
