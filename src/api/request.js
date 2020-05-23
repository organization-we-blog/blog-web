import axios from 'axios';

let requset = axios.create({
  baseURL: 'http://49.234.9.206:3002',
  timeout: 10 * 1000,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    //token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UifSwiZXhwIjoxNTg5NjMzOTE4LCJpYXQiOjE1ODk2MjMxMTh9.GJ1W1TKwWDVKPZUmTeYnp66VvUhHvW0M_QPsf_gC0KM'
  },
});



// 添加请求拦截器
requset.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(localStorage.getItem("token")){
    //如果本地有token，将token放到请求头中
    config.headers['token'] = localStorage.getItem("token")
  }
  config.headers['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsidXNlcm5hbWUiOiJ0ZXN0MSIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UifSwiZXhwIjoxNTg5NjM2MDkwLCJpYXQiOjE1ODk2MjUyOTB9.OPgYWQTGQPyHxFZxB6uZoprYs-fDJD2LTFi-CLHIDJ0";
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requset.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.token){
    //如果返回携带了token，对本地存储的token进行更新
    localStorage.setItem("token",response.data.token)
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default requset
