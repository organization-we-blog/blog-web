import request from "./request";

//登录
export const login = params =>
  request.post("/login",params);
