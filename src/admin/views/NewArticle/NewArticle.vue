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
    <div class="editConfigBox" style="display:inline-block;height: 1000px;text-align: left;padding-top: 80px;max-width: 500px">
      <div style="width:100%;max-width: 500px;">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div style="width:100%;max-width: 500px;">
        <el-row>
          <el-col :span="6">
            <h1 style="line-height: 40px">分类：</h1>
          </el-col>
          <el-col :span="18">
            <el-select v-model="classDefaultValue" placeholder="请选择文章分类">
              <el-option
                v-for="item in classOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div style="width:100%;max-width: 500px;">
          <h1 style="line-height: 40px">标签：</h1>
          <el-checkbox label="复选框 A" style="color: #77fff3"></el-checkbox>
          <el-checkbox label="复选框 B" style="color: #dcaeff"></el-checkbox>
          <el-checkbox label="复选框 C" style="color: #ff99c2"></el-checkbox>
          <el-checkbox label="复选框 D" style="color: #feffbe"></el-checkbox>
          <el-checkbox label="复选框 E" style="color: #afffb0"></el-checkbox>
          <el-checkbox label="复选框 F" style="color: #ff71c7"></el-checkbox>
          <el-checkbox label="复选框 G" style="color: #ff706f"></el-checkbox>
      </div>
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
        imageUrl: '',
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传缩略图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传缩略图大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      saveContentText(text/*,html*/){
        //console.log(text);//md内容
        //console.log(html);//html内容
        //将md存储到本地存储（防止刷新丢失数据）
        localStorage.setItem("editorContentText",text)
        this.$message.success('保存成功');
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
</style>
