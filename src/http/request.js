import axios from "axios"
import config from "../config/index"
import {Loading} from "element-ui"
console.log(config)
const service=axios.create({
  baseURL:'/api',
  timeout:60000,
  withCredentials:true
})
let loading;
function startLoading(){
  loading=Loading.service({
    lock:true,
    text:"正在努力加载中...",
    background:'rgba(0, 0, 0, 0.8)',
    spinner:'el-icon-loading',//自定义加载图标类名
  })
}
function endLoading(){
  loading.close()
}
service.interceptors.request.use((config)=>{
  startLoading()
  return config
},(error)=>{
  return Promise.reject(error)
})
service.interceptors.response.use((response)=>{
  endLoading()
  return response;
},(error)=>{
  endLoading()
  return Promise.reject(error)
})
export default service;