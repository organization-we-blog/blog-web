<template>
  <div class="monitor">
    <div class="title">
      <h1>文章信息可视化面板</h1>
    </div>
    <div id="artIntro">
      <h1>文章总数：243 (篇))</h1>
      <h1>文章总pv：1868746 (次)</h1>
      <h1>总评论：789 (条)</h1>
    </div>
    <div id="artSubmit" class="chartItem"></div>
    <div class="chartItem" id="artDisByCatAndTag"></div>
    <div class="chartItem" id="artPvRank"></div>
    <el-radio-group v-model="radio4" size="mini" @change="updateArtPvRank">
      <el-radio-button label="pv">点击量</el-radio-button>
      <el-radio-button label="good">赞</el-radio-button>
      <el-radio-button label="bad">踩</el-radio-button>
      <el-radio-button label="comments">评论数量</el-radio-button>
    </el-radio-group>
    <div class="chartItem"></div>
  </div>
</template>

<script>
  import echarts from "echarts"

  export default {
    name: "ArticleMonitor",
    data(){
      return{
        //文章提交情况统计
        ds:true,
        radio4: "pv",
        data: [
          ["2000-06-05",2],
          ["2000-06-06",12],
          ["2000-06-07",0],
          ["2000-06-08",0],
          ["2000-06-09",5],
          ["2000-06-10",2],
          ["2000-06-11",0],
          ["2000-06-12",2],
          ["2000-06-13",8],
          ["2000-06-14",4],
          ["2000-06-15",0],
          ["2000-06-16",9],
          ["2000-06-17",0],
          ["2000-06-18",1],
          ["2000-06-19",8],
        ],
        aaadata:[
          {title:"测试1",_id:"456868768768",meta:{pv:467,good:412,bad:2,comments:24}},
          {title:"标题很长很长很长你怎么办？",_id:"456868768768",meta:{pv:2452,good:120,bad:24,comments:7}},
          {title:"测试3",_id:"456868768768",meta:{pv:45,good:16,bad:7,comments:7}},
          {title:"测试4",_id:"456868768768",meta:{pv:78,good:25,bad:20,comments:7}},
          {title:"测试5",_id:"456868768768",meta:{pv:46,good:1,bad:13,comments:0}},
          {title:"测试6",_id:"456868768768",meta:{pv:45,good:7,bad:4,comments:0}},
          {title:"测试7",_id:"456868768768",meta:{pv:4856,good:864,bad:74,comments:14}},
          {title:"测试8",_id:"456868768768",meta:{pv:425,good:45,bad:2,comments:1}},
          {title:"测试9",_id:"456868768768",meta:{pv:363,good:16,bad:48,comments:4}},
          {title:"测试10",_id:"456868768768",meta:{pv:7983,good:741,bad:20,comments:16}},
          {title:"测试11",_id:"456868768768",meta:{pv:7832,good:4896,bad:41,comments:82}},
          {title:"测试12",_id:"456868768768",meta:{pv:748,good:18,bad:74,comments:74}},
          {title:"测试13",_id:"456868768768",meta:{pv:278,good:45,bad:41,comments:5}},
          {title:"测试14",_id:"456868768768",meta:{pv:782,good:14,bad:2,comments:7}},
          {title:"测试15",_id:"456868768768",meta:{pv:486,good:412,bad:13,comments:7}},
        ]
      }
    },
    methods:{
      //文章提交情况折线图
      artSubLint(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('artSubmit'));
        let dateList = this.data.map(function (item) {
          return item[0];
        });
        let valueList = this.data.map(function (item) {
          return item[1];
        });
        // 指定图表的配置项和数据
        let option = {
          visualMap:{
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          },
          title: {
            left: 'center',
            text: '文章提交情况'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: dateList
          },
          yAxis: {
            splitLine: {show: false}
          },
          series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      //文章分类、标签分布情况饼图
      artDisByCatAndTag(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('artDisByCatAndTag'));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '文章分类&标签分布',
            subtext: '左侧为分类分布，右侧为标签分布',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '文章分类',
              type: 'pie',
              radius: [30, 110],
              center: ['25%', '50%'],
              roseType: 'area',
              data: [
                {value: 10, name: 'javascript'},
                {value: 5, name: 'react'},
                {value: 15, name: 'vue.js'},
                {value: 25, name: 'node.js'},
                {value: 20, name: 'java'},
                {value: 35, name: 'html&css'},
                {value: 30, name: 'c'},
                {value: 40, name: 'c++'}
              ]
            },
            {
              name: '文章标签',
              type: 'pie',
              radius: [30, 110],
              center: ['75%', '50%'],
              roseType: 'area',
              data: [
                {value: 20, name: '发现新大陆'},
                {value: 15, name: '踩坑'},
                {value: 8, name: '笔记'},
                {value: 13, name: '算法'},
                {value: 29, name: '面试题'},
                {value: 6, name: '真实案例'}
              ]
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      //文章访问量排行柱状图
      artPvRank(data,key,limit,title,xStr){
        function SortAndGetArr(data,key,limit){
          //对data按data.meta.key进行排序并返回所有数组,limit条
          data = data.sort(function (a,b) {
            return b.meta[key]-a.meta[key]
          });
          data = data.splice(0,limit);
          return {
            title: data.map(v => "《"+v.title+"》"),
            pv: data.map(v => v.meta.pv),
            good: data.map(v => v.meta.good),
            bad: data.map(v => v.meta.bad),
            comments: data.map(v => v.meta.comments)
          };
        }
        //对data按pv进行排序
        //获取到title\pv\good\bad\comments对应的数组
        let showData = SortAndGetArr(data,key,limit);
        let myChart = echarts.init(document.getElementById('artPvRank'));
        let option = {
          title: {
            text: title
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: showData.title
          },
          grid: {
            left: 200
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'value',
            name: xStr,
            axisLabel: {
              formatter: '{value}'
            }
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: showData.title,
          },
          series: [
            {
              name: '访问量',
              type: 'bar',
              data: showData.pv
            },
            {
              name: '赞',
              type: 'bar',
              data: showData.good
            },
            {
              name: '踩',
              type: 'bar',
              data: showData.bad
            },
            {
              name: '评论数',
              type: 'bar',
              data: showData.comments
            }
          ]
        };
        myChart.setOption(option);
      },
      //修改文章访问量排行柱状图排行规则
      updateArtPvRank(){
        let title,xStr;
        switch(this.radio4) {
          case "pv": title = "访问量top10";xStr = "访问量/次";break;
          case "good": title = "点赞量top10";xStr = "点赞量/次";break;
          case "bad": title = "踩量top10";xStr = "踩量/次";break;
          case "comments": title = "评论量top10";xStr = "评论量/条";break;
        }
        this.artPvRank(JSON.parse(JSON.stringify(this.aaadata)),this.radio4,10,title,xStr);
      }
    },
    mounted() {
      this.artSubLint();
      this.artDisByCatAndTag();
      this.artPvRank(JSON.parse(JSON.stringify(this.aaadata)),"pv",10,"访问量top10","访问量/次");
    }
  }
</script>

<style scoped lang="less">
  .monitor{
    .title{
      h1{
        text-align: left;
        font-size: 30px;
        border-left: 6px #7fff7a solid;
        padding-left: 15px;
      }
    }
    #artIntro{
      padding: 30px 0 0 0;
      text-align: left;
      width: 200px;
      height: 250px;
      display: inline-block;
      h1{
        margin: 15px 0;
        color: #409EFF;
      }
    }
    #artSubmit{
      min-width: 600px;
    }
    #artDisByCatAndTag{
      display: block;
      width: 100%;
    }
    #artPvRank{
      display: block;
      width: 100%;
      height: 600px;
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

