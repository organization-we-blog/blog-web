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
  config.headers['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UifSwiZXhwIjoxNTg5ODcxNDc3LCJpYXQiOjE1ODk4NjA2Nzd9.RVDVKW7DL_x_qePvIdgnmKwCZjqTeRiAi_duTsEbXB8";
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requset.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default requset
