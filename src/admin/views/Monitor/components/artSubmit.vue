<template>
  <div class="box">
    <div id="userArtSubmit">

    </div>
  </div>
</template>

<script>
  import echarts from "echarts";

  export default {
    name: "artSubmit",
    data(){
      return{
        data:1
      }
    },
    methods:{
      userArtSubmit(){
        let myChart = echarts.init(document.getElementById('userArtSubmit'));
        let xData = ["2019-03-01", "2019-03-02", "2019-03-03", "2019-03-04", "2019-03-05", "2019-03-06", "2019-03-07", "2019-03-08", "2019-03-09", "2019-03-10", "2019-03-11", "2019-03-12", "2019-03-13", "2019-03-14", "2019-03-15", "2019-03-16", "2019-03-17", "2019-03-18", "2019-03-19", "2019-03-20"];
        let yData1 = [14, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
        let yData2 = [3, 1, 0, 10, 17, 4, 5, 4, 1, 7, 0, 7, 9, 4, 8, 4, 0, 7, 2, 1];
        let option = {
          title: {
            top: '10',
            left: '5',
            text: '文章发布情况',
            textStyle: {
              align: 'left',
              color: '#333',
              fontSize: 16,
            }

          },
          backgroundColor: '#fff',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            x: 'center',
            y: '40px',
            textStyle: {
              color: '#333',
              fontSize: 13,
            },
            icon: 'circle',
            data: ['你', '本站']
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            height: 20,
            left: '10%',
            right: '10%',
            bottom: '2%',
            start: 50,
            end: 100,
            textStyle: {
              color: '#333',
              fontSize: 11,
            },
          }, {
            type: 'inside'
          }

          ],
          grid: {
            right: '5%',
            bottom: '10%',
            left: '2%',
            top: '80px',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: xData,
            name: '时间',
            nameTextStyle: {
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#333'
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#333",
                fontSize: 12,
              },
              //interval:0,
              //rotate:30
            },
          }],
          yAxis: [{
            type: 'value',
            name: '数量/篇',
            nameTextStyle: {
              color: '#333'
            },
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#333'
              }
            },
            splitLine: {
              lineStyle: {
                color: "#eee",
              }

            },
            axisLabel: {
              color: '#333',
              fontSize: 12,
            }
          }, ],
          series: [{
            name: '本站',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: '#67C23A',
              }
            },
            data: yData1
          },
            {
              name: '你',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: '#409EFF',
                }
              },
              data: yData2
            }

          ]
        };
        myChart.setOption(option);
      }
    },
    mounted() {
      this.userArtSubmit();
    }
  }
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    display: inline-block;
    height: 350px;
    min-width: 550px;
    margin: 0 auto;
    padding: 15px 30px;
    #userArtSubmit{
      width: 100%;
      height: 100%;
      border: #eee 1px solid;
    }
  }
</style>
