<template>
  <div class="box">
    <h4>资源统计</h4>
    <div class="content2">
      <div id="ZYTJ"></div>
      <div class="ZYTJexplain">
        <div>提供了 <span>20%</span>的文章</div>
        <div>获得了 <span>20%</span>的评论</div>
        <div>增加了 <span>20%</span>的浏览量</div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from "echarts";
    export default {
        name: "ZYTJ",
      data(){
        return{
          //数据库状态是否正常
          ds:true,
        }
      },
      methods:{
        artChart(data){
          //data:{pv,article,comments}
          let myChart = echarts.init(document.getElementById('ZYTJ'));
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              shadowBlur: 0,
              shadowColor: '#fff'
            }
          };
          let option = {
            series: [
              {
                name: '第一个圆环',
                type: 'pie',
                clockWise: false,
                radius: [50, 60],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['15%', '50%'],
                data: [{
                  value: data.article,
                  label: {
                    normal: {
                      rich: {
                        a: {
                          color: '#409EFF',
                          align: 'center',
                          fontSize: 20,
                          fontWeight: "bold"
                        },
                        b: {
                          color: '#333',
                          align: 'center',
                          fontSize: 16
                        }
                      },
                      formatter: function(){
                        return "{b|文章}\n\n"+"{a|"+data.article+"}";
                      },
                      position: 'center',
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#409EFF',
                      shadowBlur: 0
                    }
                  }
                },
                  {
                    value: 100-data.comments,
                    name: 'invisible',
                    itemStyle: {
                      normal: {
                        color: '#909399'
                      }
                    }
                  }]
              },
              {
                name: '第二个圆环',
                type: 'pie',
                clockWise: false,
                radius: [50, 60],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['50%', '50%'],
                data: [{
                  value: data.comments,
                  label: {
                    normal: {
                      rich: {
                        a: {
                          color: '#409EFF',
                          align: 'center',
                          fontSize: 20,
                          fontWeight: "bold"
                        },
                        b: {
                          color: '#333',
                          align: 'center',
                          fontSize: 16
                        }
                      },
                      formatter: function(){
                        return "{b|评论}\n\n"+"{a|"+data.comments+"}";
                      },
                      position: 'center',
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#409EFF'
                    }
                  }
                }, {
                  value: 100-data.pv,
                  name: 'invisible',
                  itemStyle: {
                    normal: {
                      color: '#909399'
                    }
                  }
                }]
              },
              {
                name: '第三个圆环',
                type: 'pie',
                clockWise: false,
                radius: [50, 60],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['85%', '50%'],
                data: [{
                  value: data.pv,
                  label: {
                    normal: {
                      rich: {
                        a: {
                          color: '#409EFF',
                          align: 'center',
                          fontSize: 20,
                          fontWeight: "bold"
                        },
                        b: {
                          color: '#333',
                          align: 'center',
                          fontSize: 16
                        }
                      },
                      formatter: function(){
                        return "{b|pv}\n\n"+"{a|"+data.pv+"}";
                      },
                      position: 'center',
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#409EFF'
                    }
                  }
                }, {
                  value: 100-data.pv,
                  name: 'invisible',
                  itemStyle: {
                    normal: {
                      color: '#909399'
                    }
                  }
                }]
              }
            ]
          };
          myChart.setOption(option);
        },
        pvChart(){}
      },
      mounted() {
        this.artChart({pv:12.68,comments:14.67,article:12.35})
      }
    }
</script>

<style scoped lang="less">
  .box{
    width: 48%;
    min-width: 550px;
    height: 280px;
    margin: 0 0 0 2%;
    display: inline-block;
    border: #eee 1px solid;
    background-color: #fff;
    padding: 10px 0;
    >h4{
      text-align: left;
      padding-left: 10px;
    }
    >.content2{
      #ZYTJ{
        width: 90%;
        height: 200px;
        margin: 0 auto;

      }
      .ZYTJexplain{
         line-height: 25px;
         width: 100%;
         height: 50px;
         div{
           width: 33%;
           display: inline-block;
           text-align: center;
           span{
             color: #409EFF;
           }
         }
       }
    }
  }
</style>
