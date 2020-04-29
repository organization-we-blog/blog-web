import request from "../api/request";

//后台获取所有文章(只包括标题，作者，时间，分类，以及访问数据)
export const getAllArticle = params =>
  request.post("/api/article/getAllArticle",params)

//图片上传
export const uploadArticleContentImg = params =>
  request.post("/api/article/uploadArticleContentImg",params,{headers:{'content-type': 'application/json; charset=utf-8'}})

//获取所有文章分类和标签
export const getAllTagAndCategory = params =>
  request.post("/api/article/getAllTagAndCategory",params)

//添加文章标签
export const addArticleTag = params =>
  request.post("/api/article/addArticleTag",params)

//添加文章分类
export const addArticlecates = params =>
  request.post("/api/article/addArticlecates",params)

//添加文章
export const addArticle = params =>
  request.post("/api/article/addArticle",params)
