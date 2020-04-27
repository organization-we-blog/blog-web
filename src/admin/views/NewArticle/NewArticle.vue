<template>
  <div style="width: 100%;">
    <div class="editBox" style="display:inline-block;height: 1000px;text-align: left;padding: 0 5%">
      <h1 style="font-size: 30px">添加文章</h1>
      <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
      <Editor
        @save="saveContentText"
        :defaultContent="content"
        height="500px">
      </Editor>
    </div>
    <div class="editConfigBox" style="display:inline-block;height: 1000px;background-color: #00ffe2;text-align: left">
      <h1>这边是其他选项栏，包含分类，标签，图片。。。</h1>
      <br>
      <label>分类：<el-select v-model="classDefaultValue" placeholder="请选择文章分类">
        <el-option
          v-for="item in classOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></label>
      <br>
      <label>
        标签：
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="复选框 D"></el-checkbox>
        <el-checkbox label="复选框 E"></el-checkbox>
        <el-checkbox label="复选框 F"></el-checkbox>
        <el-checkbox label="复选框 G"></el-checkbox>
      </label>
    </div>
  </div>
</template>

<script>
  import Editor from "../../components/Editor/Editor";
  export default {
    name: "NewArticle",
    components:{Editor},
    data(){
      return{
        content: localStorage.getItem("editorContentText") || "请开始编辑markdown,点击保存按钮可以避免刷新数据丢失哦",
        classOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        classDefaultValue: '',
        formData: {
          title: '',
          content: ""
        },
      }
    },
    methods:{
      saveContentText(text,html){
        console.log(text);//md内容
        console.log(html);//html内容
        //将md存储到本地存储（防止刷新丢失数据）
        localStorage.setItem("editorContentText",text)
      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 1400px){
    .editBox{
      width: 80%;
    }
    .editConfigBox{
      width: 20%;
    }
  }
  @media screen and (max-width: 1399px){
    .editBox{
      width: 100%;
    }
    .editConfigBox{
      width: 100%;
    }
  }
</style>
