import request from "../api/request";

//后台获取所有文章(只包括标题，作者，时间，分类，以及访问数据)
export const getAllArticle = params =>
  request.post("/api/article/getAllArticle",params)

//图片上传
export const uploadArticleContentImg = params =>
  request.post("/api/article/uploadArticleContentImg",params,{headers:{'content-type': 'application/json; charset=utf-8'}})
