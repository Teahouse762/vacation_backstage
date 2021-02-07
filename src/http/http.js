import api from "api/api"
import service from "./request"
let qs=require('qs')
//登录
export function LOGIN(data){
  return service({
    url:api.login,
    method:'post',
    data:qs.stringify(data)
  })
}
//用户列表
export function LIST(data){
  return service({
    url:api.list+'?pageNum='+data,
    method:'get'
  })
}