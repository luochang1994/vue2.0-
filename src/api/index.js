import axios from "axios";
import VueRouter from "@/router";
import { getToken } from "@/utils/auth.js";
import { showLoading, hideLoading } from "@/utils/mixins/loading.js";


export const baseURL = "/starr-web/";
console.log('/starr-web/')

// axios实例
const http = axios.create();

const unAuth = () => {
  alert("用户信息获取失败，请登录");
  // VueRouter.replace("/login");
};

// http response 拦截器
http.interceptors.response.use(
  response => {
    const { data } = response;
    // console.log(path)
    if (data.status === 401) {
      unAuth();
    }
    return Promise.resolve(response);
  },
  error => {
    const { isAxiosError, response } = error;
    if (isAxiosError && response.status === 401) {
      unAuth();
    }
    return Promise.reject(error);
  }
);

export default opt =>
  new Promise(resolve => {
    // console.log('opt======', opt)
    // console.log('我请求啦')添加全局loading，通过vuex控制
    // store.state.isShow = true;
    showLoading();
    const baseHeaders = {
      access_token: getToken() || ""
    };
    if (opt.headers) {
      Object.assign(baseHeaders, opt.headers);
    }
    const options = {
      baseURL,
      ...opt,
      headers: baseHeaders,
      method: opt.method || "GET"
    };
    // console.log(options)
    http(options)
      .then(res => {
        // console.log(options)

        if (
          res.status &&
          res.status === 200 &&
          res.data &&
          res.data.code === 0
        ) {
          // console.log('我成功啦')
          // store.state.isShow = false;
          hideLoading();
          resolve({
            success: true,
            data: res.data,
            body: res.data
          });
        } else {
          // store.state.isShow = false;
          hideLoading();
          resolve({
            success: false,
            data: res.data.msg || res.data.message,
            body: res.data
          });
        }
      })
      .catch(err => {
        // store.state.isShow = false;
        hideLoading();
        resolve({
          success: false,
          data: err.message,
          body: err
        });
      });
  });
