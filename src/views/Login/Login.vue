<template>
  <el-form :model="ruleForm" status-icon  label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名">
      <el-input type="test" v-model="ruleForm.username" ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="ruleForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {login} from "../../api"
    export default {
        name: "Login",
      data(){
          return{
            ruleForm:{
              username: "",
              ruleForm: ""
            }
          }
      },
      methods:{
        async submitForm (){
          //登录
          let result = await login({...this.ruleForm});
          if(result.data.code === 200){
            //登录成功，暂时直接去首页
            await this.$router.push({path: "/home"});
          }else {
            //登录失败,提示返回信息
            this.$message.error(result.data.msg)
          }
        }
      }
    }
</script>

<style scoped>
.demo-ruleForm{
  width: 500px;
  margin: 0 auto;
  padding-top: 10%;
}
</style>
