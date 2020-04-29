<template>
  <div style="width: 100%;">
    <div class="editBox" style="display:inline-block;text-align: left;"><!--右侧区域-->
      <h1 style="font-size: 30px">添加文章</h1>
      <el-input style="margin: 10px auto" v-model="addArticleFormData.title" placeholder="请输入标题"></el-input>
      <Editor @save="saveContentText" :defaultContent="addArticleFormData.content" height="500px">
      </Editor>
    </div>
    <div class="editConfigBox" style="display:inline-block;text-align: left;padding-top: 40px;"><!--左侧区域-->
      <OptionItem title="缩略图" class="optionItem"
      >
        <el-upload
          style="text-align: center;"
          class="avatar-uploader"
          action="/api/article/uploadImg"
          :show-file-list="false"
          :multiple="false"
          name="file"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </OptionItem>
      <OptionItem
        title="文章简介"
        class="optionItem">
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 10}"
          placeholder="请输入简介"
          v-model="addArticleFormData.synopsis">
        </el-input>
      </OptionItem>
      <OptionItem title="文章分类" class="optionItem">
        <div style="padding: 15px 20px">
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="1">javascript</el-radio></p>
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="2">node.js</el-radio></p>
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="3">vue.js</el-radio></p>
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="4">java</el-radio></p>
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="5">php</el-radio></p>
          <p style="margin: 5px 0"><el-radio v-model="addArticleFormData.category" label="6">html&css</el-radio></p>
          <div class="addClassifyButton" v-show="!showAddClassifyInput" @click="showAddClassifyInput = true"><!--添加按钮-->
            <i class="el-icon-plus"></i>
          </div>
          <input v-show="showAddClassifyInput" type="text" style="height: 28px;line-height: 28px;width: 100px;" v-model="addClassifyFormData.className" placeholder="分类名"/>
          <!--确定按钮-->
          <div v-show="showAddClassifyInput" @click="addClassify" class="addClassifyButton" style="margin-left: 20px;background-color: #409EFF;color: #fff">
            <i class="el-icon-check"></i>
          </div>
          <!--取消按钮-->
          <div v-show="showAddClassifyInput" @click="showAddClassifyInput = false" class="addClassifyButton" style="margin-left: 20px;background-color: #F56C6C;color: #fff">
            <i class="el-icon-close"></i>
          </div>
        </div>
      </OptionItem>
      <OptionItem title="文章标签" class="optionItem">
        <div style="padding: 15px 20px">
          <el-checkbox label="笔记" style="color: #77fff3"></el-checkbox>
          <el-checkbox label="踩坑" style="color: #dcaeff"></el-checkbox>
          <el-checkbox label="常用" style="color: #79ff8e"></el-checkbox>
          <el-checkbox label="发现新大陆" style="color: #ff99c2"></el-checkbox>
          <el-checkbox label="求职必备" style="color: #79dbff"></el-checkbox>
          <br>
          <div class="addClassifyButton" v-show="!showAddTagInput" @click="showAddTagInput = true"><!--添加按钮-->
            <i class="el-icon-plus"></i>
          </div>
          <!--标签颜色选择器-->
          <el-color-picker v-show="showAddTagInput" v-model="addTagFormData.color" size="mini">
          </el-color-picker>
          <input v-show="showAddTagInput" type="text" style="height: 28px;line-height: 28px;width: 100px;" v-model="addTagFormData.tagName" placeholder="标签名"/>
          <!--确定按钮-->
          <div v-show="showAddTagInput" @click="addTag" class="addClassifyButton" style="margin-left: 20px;background-color: #409EFF;color: #fff">
            <i class="el-icon-check"></i>
          </div>
          <!--取消按钮-->
          <div v-show="showAddTagInput" @click="showAddTagInput = false" class="addClassifyButton" style="margin-left: 20px;background-color: #F56C6C;color: #fff">
            <i class="el-icon-close"></i>
          </div>
        </div>
      </OptionItem>
    </div>
  </div>
</template>

<script>
  import OptionItem from "./components/OptionItem";
  import Editor from "../../components/Editor/Editor";
  export default {
    name: "NewArticle",
    components:{Editor, OptionItem},
    data(){
      return{
        addTagFormData: {
          color:"#67FF5F",//标签专属颜色
          tagName: ""//标签名
        },
        addClassifyFormData:{
          className: ""//分类名
        },
        addArticleFormData:{
          title: "",//标题
          thumbnail: "",//缩略图路径
          synopsis: "",//简介
          author: "",//作者id
          content: localStorage.getItem("editorContentText") || "请开始编辑markdown,点击保存按钮可以避免刷新数据丢失哦",//文章内容
          category: "",//文章分类id
          tag: []//文章标签id
        },
        showAddClassifyInput: false,
        showAddTagInput: false,
        imageUrl: '',
      }
    },
    methods:{
      handleAvatarSuccess(res, file) {//上传缩略图成功回调
        this.$message.success('图片上传成功');
        this.imageUrl = URL.createObjectURL(file.raw);
        this.addArticleFormData.thumbnail = res.data.datas[0].filepath;
      },
      handleAvatarError() {//上传缩略图失败回调
        this.$message.error('图片上传失败');
      },
      beforeAvatarUpload(file) {//缩略图上传验证
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;
        if (!isJPG) {
          this.$message.error('上传缩略图片只能是 JPG、PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传缩略图大小不能超过 1MB!');
        }
        return isJPG && isLt1M;
      },
      saveContentText(text/*,html*/){//编辑器点击保存按钮后的回调，接收test，html两参数。分别是md和html两个内容
        //将md存储到本地存储（防止刷新丢失数据）
        localStorage.setItem("editorContentText",text)
        this.$message.success('保存成功');
      },
      //确认添加分类后执行的函数
      addClassify(){
        this.showAddClassifyInput = false;
        console.log("我将添加分类");
      },
      //确认添加标签后执行的函数
      addTag(){
        this.showAddTagInput = false;
        console.log("我将添加标签");
      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 1400px){
    .editBox{
      width: 70%;
    }
    .editConfigBox{
      width: 30%;
    }
    .optionItem{
      margin: 0 0 15px 40px;
    }
  }
  @media screen and (max-width: 1399px){
    .editBox{
      width: 100%;
    }
    .editConfigBox{
      width: 100%;
    }
    .optionItem{
      margin: 0 0 40px 25px;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .addClassifyButton{
    display: inline-block;
    font-weight: 900;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 3px;
    border: 1px #eee solid;
    transition: all 0.3s;
    background-color: #fff;
  }
  /*.addClassifyButton:hover{
    border-color: #35affb;
    color: #35affb;
  }*/
  .addClassifyButton:active{
    border-color: #409EFF;
    color: #409EFF;
  }
  .addClassifyButton>>>input{
    height: 100%;
  }
</style>
