<template>
  <div>
    <el-table
      @filter-change="filterChange"
      :data="showData.slice((this.pageIndex-1)*10,(this.pageIndex-1)*10 + 10)"
      style="width: 100%">
      <el-table-column
        label="标题"
        prop="title">
      </el-table-column>
      <el-table-column
        label="分类"
        :filters="categorys"
        prop="category.className">
      </el-table-column>
      <el-table-column
        label="发布时间"
        sortable
        prop="update_time">
      </el-table-column>
      <el-table-column
        label="作者"
        prop="author.username">
      </el-table-column>
      <el-table-column
        label="浏览量"
        sortable
        prop="meta.pv">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="searchValue"
            :s="scope"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-footer style="background-color: #fff;margin-top: 15px">
      <el-pagination
        style="line-height: 30px;"
        background
        :hide-on-single-page="true"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="dataSum">
      </el-pagination>
    </el-footer>
  </div>
</template>

<script>
  import {getAllArticle} from "../../api"
  export default {
    name: "ArticleList",
    data() {
      return {
        tableData: [],//原生数据
        showData: [],//当前可展示的数据数据
        searchValue: "",
        dataSum: 10,//数据数量（条）
        pageIndex: 1,//页数
        categorys: [
          { text: "javascript", value: "javascript" },
          { text: "node.js", value: "node.js" },
          { text: "vue.js", value: "vue.js" },
          { text: "php", value: "php" },
          { text: "react", value: "react" },
          { text: "java", value: "java" }
        ],
      }
    },
    methods: {
      init(){
        getAllArticle()
        .then(res=>{
          if(res.data.code === 1){
            this.$message.success('数据获取成功');
            this.tableData = res.data.datas;
            this.showData = res.data.datas;
            this.dataSum = res.data.datas.length;
          }else {
            throw new Error("数据获取失败")
          }
        })
        .catch(()=>{
          this.$message.error('服务器繁忙');
        })
      },
      filterChange(filters){//筛选分类时刷新分页
        this.searchValue = "";
        this.pageIndex = 1;
        for(let key in  filters){
          console.log(filters[key].length);
          if(!(filters[key].length === 0 || filters[key].length === this.categorys.length)){//不选和全选效果一直
            let data = this.tableData.filter(data =>{
              return filters[key].includes(data.category.className)
            });
            this.showData = data;
            this.dataSum = data.length;
          }else {
            this.showData = this.tableData;
            this.dataSum = this.tableData.length;
          }
        }
      },
      handleCurrentChange(page){//切换分页回调
        this.pageIndex = page;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    },
    mounted() {
      this.init();
    },
    watch: {
      searchValue:{//监听搜索框
        handler(newValue){
          this.pageIndex = 1;
          let data = this.tableData.filter(data =>
            !newValue
            || data.title.toLowerCase().includes(newValue.toLowerCase())//搜索标题
            || data.category.className.toLowerCase().includes(newValue.toLowerCase())//搜索分类
            || data.author.username.toLowerCase().includes(newValue.toLowerCase()));//搜索作者
          this.showData = data;
          this.dataSum = data.length;
        }
      },

    }
  }
</script>

<style scoped>

</style>
