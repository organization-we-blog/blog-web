import request from "../api/request";

//后台获取所有文章(只包括标题，作者，时间，分类，以及访问数据)
export const getAllArticle = params =>
  request.post("http://49.234.9.206:3002/article/getAllArticle",params);

//文章图片上传
export const uploadArticleContentImg = params =>
  request.post("http://49.234.9.206:3002/article/uploadArticleContentImg",params,{headers:{'content-type': 'application/json; charset=utf-8'}})

//获取所有文章分类和标签
export const getAllTagAndCategory = params =>
  request.post("http://49.234.9.206:3002/article/getAllTagAndCategory",params);

//添加文章标签
export const addArticleTag = params =>
  request.post("http://49.234.9.206:3002/article/addArticleTag",params);

//添加文章分类
export const addArticlecates = params =>
  request.post("http://49.234.9.206:3002/article/addArticlecates",params);

//添加文章
export const addArticle = params =>
  request.post("http://49.234.9.206:3002/article/addArticle",params);

//删除文章
export const deleteArticleById = params =>
  request.post("http://49.234.9.206:3002/article/deleteArticleById",params);

//获取所有用户
export const getAllUser = params =>
  request.get('/api/user/getAll', params)

//根据id查询用户
export const getUserById = (id, params) =>
  request.get(`/api/users/${id}`, params);
