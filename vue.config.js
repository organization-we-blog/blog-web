module.exports = {
  devServer: {
    port: 8083,
    proxy: {//请求代理
      '/Api': {
        target: "http://49.234.9.206:3002/",//转发路径
        pathRewrite: {"/Api": ""}
      }
    }
  },
};
