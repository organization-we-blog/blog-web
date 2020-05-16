<template>
    <div>
        <el-card v-loading.fullscreen.lock="loading">
          <el-table
            :data="userList"
            stripe
            border
            style="width: 100%">
            <!--索引-->
            <el-table-column width="50" label="#" type="index" align="center"/>
<!--            用户id-->
            <el-table-column min-width="250px" align="center" prop="_id" label="ID"/>
            <!--用户名-->
            <el-table-column min-width="150" align="center" prop="username" label="用戶名"/>
            <!--性别-->
            <el-table-column align="center" min-width="50px"  prop="gender" label="性别"/>
            <!--角色-->
            <el-table-column min-width="120px" align="center" prop="role" label="角色">
              <template v-slot="scope">
                {{scope.row.role==='admin'? '管理员':'普通用户'}}
              </template>
            </el-table-column>
            <!--用户状态-->
            <el-table-column min-width="80px" align="center" prop="state" label="状态">
              <template v-slot="scope">
                <el-tag v-if="scope.row.state === 0" type="success">正常</el-tag>
                <el-tag v-else type="danger" >已删除</el-tag>
              </template>
            </el-table-column>
<!--            注册时间-->
            <el-table-column align="center" prop="createTime" label="注册时间">
              <template v-slot="scope">
                {{scope.row.createTime | dataFormat}}
              </template>
            </el-table-column>
<!--            操作-->
            <el-table-column min-width="120px" align="center" label="操作">
              <template v-slot="scope">
                <el-button type="warning" icon="el-icon-edit" size="small" @click="editUser(scope.row)"/>
                <el-button type="danger" icon="el-icon-delete" size="small" @click="removeUser(scope.row)"/>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
    </div>
</template>

<script>
  import { getAllUser } from "../../api";
    export default {
        name: "UserList",
        filters: {
          dataFormat(value){
            return value.slice(0, 10)
          }
        },
        data() {
          return {
            userList: [],
            loading: true
          }
        },
      async created() {
        //获取用户列表
        const { data } = await getAllUser();
        // console.log(data);
        this.userList = data.datas;
        //关闭加载提示
        window.setTimeout(()=> {
          this.loading = false
        },200)
      },
      methods: {
          // 编辑用户
        async editUser(userInfo){
          let id = userInfo._id;
          await this.$router.push({name: '编辑用户', params: {id}})
        },
        // 删除用户
        removeUser(){
          this.$confirm('是否确定删除该用户？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(()=>{})
        }
      }
    }
</script>

<style scoped>

</style>
