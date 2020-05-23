<template>
  <div style="text-align: left">
    <h1 style="font-size: 30px">错误信息:</h1>

    <Preview
      :text="text"
    />
    <el-button  type="primary">我来排查该错误</el-button>

    <el-button  type="success">已修复该错误</el-button>
    <div style="height: 50px"></div>
  </div>
</template>

<script>
  import Preview from "../../components/Editor/Preview";
  export default {
    name: "ErrLogInfo",
    components:{Preview},
    data(){
      return{
        text: "# 哈哈哈哈",
        resData: {
          "err_status": 0,
          "principal": null,
          "_id": "5eaac83927e3e77ecc7e6a68",
          "ip": "::ffff:127.0.0.1",
          "type": "POST",
          "err_type": "TypeError",
          "err_msg": "\"TypeError: articles.aggregate(...).populate is not a function\\n    at module.exports (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\router\\\\routers\\\\article\\\\getAllArticle.js:23:12)\\n    at C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\router\\\\routers\\\\article\\\\index.js:30:34\\n    at Layer.handle [as handle_request] (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\\n    at next (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\route.js:137:13)\\n    at Route.dispatch (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\route.js:112:3)\\n    at Layer.handle [as handle_request] (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\\n    at C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:281:22\\n    at Function.process_params (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:335:12)\\n    at next (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:275:10)\\n    at Function.handle (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:174:3)\\n    at router (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:47:12)\\n    at Layer.handle [as handle_request] (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\\n    at trim_prefix (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:317:13)\\n    at C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:284:7\\n    at Function.process_params (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:335:12)\\n    at Immediate.next (C:\\\\Users\\\\w\\\\Desktop\\\\blog\\\\blog-api\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:275:10)\"",
          "req_data": "{\"body\":{\"className\":\"前端\"},\"query\":{}}",
          "err_file": "C:\\Users\\w\\Desktop\\blog\\blog-api\\router\\routers\\article\\getAllArticle.js",
          "date": "2020-04-30T12:44:41.282Z",
          "__v": 0
        }
      }
    },
    methods:{
      showJson(){
        let resData = this.resData;
        resData.req_data = JSON.parse(resData.req_data)
        resData.date = new Date(resData.date).Format("yyyy-MM-dd hh:mm:ss");
        resData.err_msg = resData.err_msg
          .replace(/^"|"$/g,"")//去除两端多余引号
          .replace(/\\n /g,"\n\t")//换行反转义
          .replace(/\\\\/g,"\\")//换行反转义
        function ObjToRetractJsonStr(obj, num) {
          if(!num){//是否第一层
            num = 1;
          }
          let t = ""
          for(let k in obj){
            if(obj[k] !== null && typeof obj[k] === "object"){
              t += `${"\t".repeat(num)}"${k}": ${ObjToRetractJsonStr(obj[k],num+1)},\n`
            }else {
              t += `${"\t".repeat(num)}"${k}": ${typeof obj[k] === "string"?"\""+obj[k]+"\"":obj[k]},\n`
            }
          }
          //}或者]结束符缩进
          if(Array.isArray(obj)){
            //数组采用[]包裹
            return `[\n${t}${"\t".repeat(num-1)}]`
          }
          return `{\n${t}${"\t".repeat(num-1)}}`
        }
        let text = "```json\n"+ObjToRetractJsonStr(resData)+"\n```\n"
        this.text = text;
      }
    },
    mounted() {
      this.showJson()
    }
  }
</script>

<style scoped lang="less">
  .ErrStateBox{
    width: 96%;
    border-radius: 10px;
    margin: 2%;
    padding: 2%;
    &>h3{
      min-height: 60px;
      border-radius: 10px;
      text-align: center;
    }
  }
  pre{
    border-radius: 10px;
    background-color: #fff;
  }
</style>
