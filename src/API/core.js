// 这是核心文件
import axios from "axios";

import { METHOD } from "./config"; // 配置文件

// import loading from '../Loading/index' // loading 加载

// 配置对象
const instance = axios.create({
  // 发送请求的时候 会自动把baseUrl添加到地址的前面
  baseURL: "http://adminv2.happymmall.com",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  transformRequest: [
    function(data) {
      let ret = "";
      for (let it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    },
  ],
  timeout: 10000,
  withCredentials: true,
});

// let loa = null;

// // 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // loa = loading.server()
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   // loa.close()
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//     // loa.close()
//   return Promise.reject(error);
// });

/**
 * @param {*} methods
 * @param {*} url
 * @param {*} params
 */
// 抛出一个对象 判断是get 还是post
export function request(methods, url, params) {
  switch (methods) {
    case METHOD.GET:
      // 如果是get方式 那么就调用下面的get方法
      return GETs(url, params);
    case METHOD.POST:
      return POSTs(url, params);
  }
}

// axios提供两种请求方式
// GET(url, params) 里面的两个参数是形参
function GETs(url, params) {
  // 调用这个get方法 给我传那个地址 我就用那个地址
  return instance.get(url, params); // 它本身就是一个axios请求  返回的就是promise对象
}

function POSTs(url, params) {
  return instance.post(url, params);
  // axios.post(url,params)
}

/***
 * 组件化 跟 模块化 的 区别
 * 什么是组件化 组件化是针对于ui界面来说的  我们可以把页面拆分成几个组件来说
 * 而模块化是针对于业务功能来说的 比如 这个模块的功能主要是购物车功能来说的
 */
