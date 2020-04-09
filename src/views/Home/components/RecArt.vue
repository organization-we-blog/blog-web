<template><!--首页展示条件文章组件-->
    <div style="padding: 30px 0 0 0;display: inline-block;width: 100%">
        <div class="box">
            <h2 style="font-size: 23px;color: rgba(0,0,0,.7);font-weight: 700;text-align: left;margin-bottom: 15px">推荐文章</h2>
            <div class="content">
                <div class="leftBar" v-if="this.showLeftBar"></div>
                <div class="itemBox" style="overflow-x: scroll; white-space: nowrap;">
                    <div class="item" style="background-image: url(https://img.debuginn.cn/wp-content/uploads/2020/03/google-chrome-2020.jpeg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=101028799,3702409484&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3846062265,3369306646&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3096993839,620095355&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1951676827,408849278&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1657405732,1594548625&fm=11&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3465662726,416838905&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361433311,1491821341&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=101028799,3702409484&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3846062265,3369306646&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3096993839,620095355&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                    <div class="item" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1951676827,408849278&fm=26&gp=0.jpg);">
                        <i class="el-icon-right" style="position: absolute;top: 15px;right: 10px;font-size: 24px;color:#fff"></i>
                        <div class="titleBox">
                            <span>程序猿的 Chrome 浏览器插件推荐</span>
                        </div>
                    </div>
                </div>
                <div class="rightBar" v-if="this.showRightBar"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RecArt",
        data(){
            return{
                showLeftBar: false,
                showRightBar: true,
            }
        },
        mounted(){
            document.getElementsByClassName("itemBox")[0].onscroll=() => {
                //监听水平滚动条，判断是否要显示右边的模糊
                let that = document.getElementsByClassName("itemBox")[0];
                this.showLeftBar = (that.scrollLeft <= 0 ? false : true)
            }
        }
    }
</script>

<style scoped>
    .box{
        padding-top: 5px;
        width: 95%;
        min-height: 150px;
        max-width: 750px;
        text-align: left;
        margin: 0 auto;
    }
    .content{
        position: relative;
        width: auto;
        max-width: 700px;
        margin: 0 auto;
        min-height: 155px;
    }
    .leftBar,.rightBar{
        position: absolute;
        width: 50px;
        height: 100%;
        top: 0;
        z-index: 2;
    }
    .leftBar{
        left: -3px;
        background: linear-gradient(to left,hsla(0,0%,97%,0) 10%,#f7f7f7 100%);
    }
    .rightBar{
        right: -3px;
        background: linear-gradient(to right,hsla(0,0%,97%,0) 10%,#f7f7f7 100%);
    }
    .item{
        display: inline-block;
        width: 210px;
        height: 130px;
        margin-right: 8px;
        padding: 10px;
        border-radius: 5px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    .itemBox::-webkit-scrollbar {
        height: 5px;
    }
    .itemBox::-webkit-scrollbar-track {
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .itemBox::-webkit-scrollbar-thumb {
        background-color: #969696;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .item{
        position: relative;
    }
    .titleBox{
        position: absolute;
        width: auto;
        text-align: left;
        color: #fff;
        font-size: 17px;
        bottom: 10px;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
</style>
