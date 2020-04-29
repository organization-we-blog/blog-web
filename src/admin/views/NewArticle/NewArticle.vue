<template>
  <div style="width: 100%;">
    <div class="editBox"
         style="display:inline-block;text-align: left;"><!--右侧区域-->
      <h1 style="font-size: 30px">添加文章</h1>
      <el-input style="margin: 10px auto" v-model="addArticleFormData.title" placeholder="请输入标题"></el-input>
      <Editor
        @save="saveContentText"
        :defaultContent="addArticleFormData.content"
        height="500px">
      </Editor>
    </div>
    <div class="editConfigBox"
         style="display:inline-block;text-align: left;padding-top: 40px;"><!--左侧区域-->
      <OptionItem title="缩略图" class="optionItem"
      >
        <el-upload
          style="text-align: center;"
          class="avatar-uploader"
          action="/api/article/uploadArticleThumbnailImg"
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
      <!--文章分类选择模块-->
      <OptionItem title="文章分类" class="optionItem">
        <div style="padding: 15px 20px">
          <p v-for="(value,index) in categoryList" :key="index" style="margin: 5px 0">
            <el-radio v-model="addArticleFormData.category" :label="value._id">{{value.className}}
            </el-radio>
          </p>
          <!--添加按钮-->
          <div class="addClassifyButton" v-show="!showAddClassifyInput" @click="showAddClassifyInput = true">
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
      <!--文章标签选择模块-->
      <OptionItem title="文章标签" class="optionItem">
        <div style="padding: 15px 20px">
          <el-checkbox-group v-model="addArticleFormData.tag">
            <el-checkbox v-for="(v,i) in tagList" :key="i" :label="v._id"
                         :style="'color:'+v.tagColor">{{v.tagName}}</el-checkbox>
          </el-checkbox-group>
          <br>
          <!--添加按钮-->
          <div class="addClassifyButton" v-show="!showAddTagInput" @click="showAddTagInput = true">
            <i class="el-icon-plus"></i>
          </div>
          <!--标签颜色选择器-->
          <el-color-picker v-show="showAddTagInput" v-model="addTagFormData.tagColor" size="mini">
          </el-color-picker>
          <input v-show="showAddTagInput" type="text" v-model="addTagFormData.tagName" placeholder="标签名"
                 style="height: 28px;line-height: 28px;width: 100px;"/>
          <!--确定按钮-->
          <div v-show="showAddTagInput" @click="addTag" class="addClassifyButton"
               style="margin-left: 20px;background-color: #409EFF;color: #fff">
            <i class="el-icon-check"></i>
          </div>
          <!--取消按钮-->
          <div v-show="showAddTagInput" @click="showAddTagInput = false" class="addClassifyButton"
               style="margin-left: 20px;background-color: #F56C6C;color: #fff">
            <i class="el-icon-close"></i>
          </div>
        </div>
      </OptionItem>
    </div>
    <div>
      <el-button type="primary" @click="saveArt" style="margin: 10px 100px;width: 150px;">保存</el-button>
      <el-button type="success" @click="publishArticle" style="margin: 10px 100px;width: 150px;">发布</el-button>
    </div>
  </div>
</template>

<script>
  import {getAllTagAndCategory,addArticleTag,addArticlecates,addArticle} from "../../api"
  import OptionItem from "./components/OptionItem";
  import Editor from "../../components/Editor/Editor";
  export default {
    name: "NewArticle",
    components:{Editor, OptionItem},
    data(){
      return{
        categoryList: [],
        tagList: [],
        addTagFormData: {
          tagColor:"#67FF5F",//标签专属颜色
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
          content: "",//文章内容
          category: "",//文章分类id
          tag: []//文章标签id
        },
        showAddClassifyInput: false,
        showAddTagInput: false,
        imageUrl: '',
      }
    },
    methods:{
      handleAvatarSuccess(res) {//上传缩略图成功回调
        this.$message.success('图片上传成功');
        this.imageUrl = res.datas[0].filepath;
        this.addArticleFormData.thumbnail = res.datas[0].filepath;
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
      saveContentText(){
        //编辑器点击保存按钮后的回调，接收test，html两参数。分别是md和html两个内容
        //将md存储到本地存储（防止刷新丢失数据）
        localStorage.setItem("editorContentText",this.addArticleFormData.content);
        this.$message.success('保存成功');
      },
      //确认添加分类后执行的函数
      addClassify(){
        this.showAddClassifyInput = false;
        addArticlecates(this.addClassifyFormData)
          .then(res=>{
            if(res.data.code === 1){
              this.$message.success(res.data.msg);
              this.initClassifyAndTag();
            }else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(()=>{
            this.$message.error("服务器繁忙");
          })
      },
      //确认添加标签后执行的函数
      addTag(){
        this.showAddTagInput = false;
        addArticleTag(this.addTagFormData)
        .then(res=>{
          if(res.data.code === 1){
            this.$message.success(res.data.msg);
            this.initClassifyAndTag();
          }else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(()=>{
          this.$message.error("服务器繁忙");
        })
      },
      //发布文章
      publishArticle(){
        addArticle(this.addArticleFormData)
          .then(res=>{
            if(res.data.code === 1){
              this.$message.success(res.data.msg);
              //添加成功转跳至列表页并清空保存的数据
              localStorage.removeItem("art");
              this.$router.push({path:"/admin/article_list"})
            }else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(()=>{
            this.$message.error("服务器繁忙");
          })
      },
      //获取所有标签和分类信息
      initClassifyAndTag(){
        getAllTagAndCategory()
        .then(res=>{
          if(res.data.code === 1){
            let {categorys,tags} = res.data.datas[0];
            this.categoryList = categorys;
            this.tagList = tags;
          }
        })
      },
      saveArt(){
        this.$message.success('已经保存');
        localStorage.setItem("art",JSON.stringify(this.addArticleFormData));//保存文章信息
      }
    },
    created() {
      this.initClassifyAndTag();
      let {title,thumbnail,synopsis,author,content,category,tag} = JSON.parse(localStorage.getItem("art"));
      this.addArticleFormData.content = content || "请开始编辑markdown,点击保存按钮可以避免刷新数据丢失哦";
      this.addArticleFormData.title = title || "";
      this.addArticleFormData.thumbnail = this.imageUrl = thumbnail || "";
      this.addArticleFormData.synopsis = synopsis || "";
      this.addArticleFormData.author = author || "5e931065a868630fb9a088cd";//一个暂时使用的用户
      this.addArticleFormData.category = category || "";
      this.addArticleFormData.tag = tag || "";
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
