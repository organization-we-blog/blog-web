<template>
  <div style="text-align: left">
    <h1 style="font-size: 30px">错误状态:</h1>
    <el-timeline>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:32" placement="top">
        <el-card style="background-color: #E6A23C;">
          <h4>排查中</h4>
          <p>负责人: 月夕</p>
          <p>解决方案： 对错误发生文件进行初步排查</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:57" placement="top">
        <el-card style="background-color: #67C23A;">
          <h4>已修复</h4>
          <p>负责人： 月夕</p>
          <p>解决方案： 通过对改用户的访问日志查询，得出结论getAllArticle.js文件中对token授权时没有将最新的token与客户端同步。导致下一次请求中token验证失败</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:30" placement="top" >
        <el-card style="background-color: #F56C6C;">
          <h4>用户 ::ffff:127.0.0.1触发了该错误</h4>
          <p>访问路径: /users/5ebf5de6998dc4da49c70f8e</p>
          <p>请求方式: POST</p>
          <p>携带参数: {"body":{"className":"前端"},"query":{}}</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:32" placement="top">
        <el-card style="background-color: #E6A23C;">
          <h4>排查中</h4>
          <p>负责人: 月夕</p>
          <p>解决方案： 对错误发生文件进行初步排查</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020-5-19 16:57" placement="top">
        <el-card style="background-color: #67C23A;">
          <h4>已修复</h4>
          <p>负责人： 月夕</p>
          <p>解决方案： 通过对改用户的访问日志查询，得出结论getAllArticle.js文件中对token授权时没有将最新的token与客户端同步。导致下一次请求中token验证失败</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <h1 style="font-size: 30px">错误信息:</h1>

    <Preview
      :text="text"
    />
    <el-button  type="primary">我来排查</el-button>

    <el-button  type="primary">已修复</el-button>

    <el-button  type="danger">我无法修复</el-button>

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
