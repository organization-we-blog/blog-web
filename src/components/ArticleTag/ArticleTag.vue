<template><!--标签分类组件-->
    <div class="ArticleTagBox">
        <h3>标签</h3>
        <ul>
            <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>踩坑(40)</li>
            <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>笔记(16)</li>
            <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>封装(8)</li>
            <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>学习(15)</li>
            <li><i class="el-icon-arrow-right" style="margin: 0 20px 0 0"></i>安全(5)</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ArticleTag"
    }
</script>

<style scoped>
    .ArticleTagBox{
        display: inline-block;
        width: 200px;
        text-align: left;
    }
    .ArticleTagBox>h3{
        color: #969696;
        margin: 0 0 20px 0;
    }
    li{
        list-style-type: none;
        margin: 0 0 8px 20px;
        cursor: pointer;
        user-select: none;
        color: #969696;
    }
    li:hover{
        color: #409EFF;
    }
</style>
