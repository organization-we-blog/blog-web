<template>
  <div v-if="Object.keys(editUserForm).length !== 0">
    <!--卡片视图-->
    <el-card v-loading.fullscreen.lock="loading">
      <!--    面包屑导航-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: '用户列表' }">用户列表</el-breadcrumb-item>
        <el-breadcrumb-item>编辑用户</el-breadcrumb-item>
      </el-breadcrumb>
      <!--    表单-->
      <el-form :model="editUserForm"
               label-position="left"
               status-icon
               :rules="editUserRules"
               ref="editUserForm"
               label-width="80px"
               class="demo-ruleForm">
        <!--        用户名-->
        <el-form-item label="用户名" prop="username">
          <el-input clearable placeholder="2 - 20个字符" v-model="editUserForm.username"></el-input>
        </el-form-item>
        <!--        状态-->
        <el-form-item label="状态" prop="state">
          <el-tag v-if="editUserForm.state === 0" type="success">正常</el-tag>
          <el-tag v-else type="danger">已删除</el-tag>
        </el-form-item>
        <!--        角色-->
        <el-form-item label="角色" prop="role">
          <div class="radio-float">
            <el-radio-group v-model="editUserForm.role">
              <el-radio label="normal">普通用户</el-radio>
              <el-radio label="admin">管理员</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <!--        头像-->
        <el-form-item label="头像" prop="avatar">
          <div class="avatar-float">
            <el-upload
              class="avatar-uploader"
              action="http://49.234.9.206:3002/upload"
              :show-file-list="false"
              name="avatar"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
        <!--        邮箱-->
        <el-form-item label="邮箱" prop="email">
          <el-input clearable v-model.number="editUserForm.email"></el-input>
        </el-form-item>
        <!--        性别-->
        <el-form-item label="性别" prop="gender">
          <div class="radio-float">
            <el-radio-group v-model="editUserForm.gender">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
              <el-radio label="保密">保密</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <!--        个性签名-->
        <el-form-item label="个性签名" prop="info">
          <el-input placeholder="200个字符以内" type="textarea" autosize v-model.number="editUserForm.info"></el-input>
        </el-form-item>
        <!--        底部按钮-->
        <el-form-item>
          <el-button type="primary" @click="submitModify">修改</el-button>
          <el-button type="warning" @click="resetForm">重置</el-button>
          <el-button plain @click="$router.push({name: '用户列表'})">返回列表</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { getUserById } from "../../../api";
  export default {
    name: "EditUser",
    props: ['id'],
    data() {
      let emailValidate = (rule, value, callback) => {
        const emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (emailRegExp.test(value) || value.trim() === '') {
          return callback()
        }
        callback(new Error('请输入合法邮箱'))
      }
      let usernameValidate = (rule, value, callback) => {
        const length = value.trim().length;
        if (length >= 2 && length <= 20) return callback()
        callback(new Error('长度只能在2 - 20个字符之间'))
      }
      return {
        loading: true,
        editUserForm: {},
        // oldUserInfo: [],
        editUserRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: usernameValidate, trigger: 'blur'}
          ],
          state: [{required: true, message: '请设置状态', trigger: 'blur'}],
          role: [{required: true, message: '请选择角色', trigger: 'blur'}],
          avatar: [],
          email: [{validator: emailValidate, trigger: 'blur'}],
          gender: [{required: true, message: '请选择性别', trigger: 'blur'}],
          info: []
        },
        imageUrl: '',
      }
    },
    async created() {
      const  {data: res} = await getUserById(this.id)
      // console.log(res);
      if (res.code === 200) {
        let data = res.datas;
        this.editUserForm = {
          username: data.username,
          state: data.state,
          role: data.role,
          avatar: data.avatar,
          email: '',
          gender: data.gender,
          info: ''
        }
        window.setTimeout(() => {
          this.loading = false;
        }, 200)
        return;
      }
      window.setTimeout(() => {
        this.loading = false;
      }, 200)
      //若获取用户信息失败则提示用户，并在关闭提示后回到上个页面
      this.$alert('<strong style="color: #F56C6C">网络繁忙，请稍后再试！</strong>', {
        dangerouslyUseHTMLString: true,
        type: 'error',
        showConfirmButton: false
      }).catch(() => {
        this.$router.back();
      })
    },
    methods: {
      //重置表单
      resetForm() {
        this.$refs.editUserForm.resetFields();
      },
      //文件上传之前的回调
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt1M;
      },
      //文件上传成功的回调
      handleAvatarSuccess(response, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      //提交修改
      submitModify(){
        this.$notify.warning({
          title: '修改个锤子，接口还没写好唉，莫慌',
          // message: '修改个锤子，接口还没写好唉',
          position: 'top-left',
          showClose: false,
          duration: 3000
        })
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb {
    margin: 0 0 20px;
  }

  .el-form {
    width: 50%;
    margin: 0 auto;
  }

  .el-tag {
    float: left;
  }

  .radio-float,
  .avatar-float {
    float: left;
  }

  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
