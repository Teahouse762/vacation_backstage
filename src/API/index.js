// 这个是模块的接口文件  接口文件暴露给外面去用的 
import { request } from './core'; //  核心文件/core   两个请求方式的函数名

import { PATH, METHOD} from "./config"; // 配置文件 封装的是请求路径 跟 请求方式

/*
 * GET 
 * params
*/

/**
 * @param {*} page string
 * @param {*} pagesize string
 */

const APIClient = {

    addLogin(params) {
        return request(METHOD.GET,PATH.LOGIN,params)
    },
                                                        
    HomeList(params) {
        return request(METHOD.GET,PATH.HomeList,params)
    },

    userList(params) {
        return request(METHOD.POST,PATH.userList,params)
    },

    shang(params) {
        return request(METHOD.GET,PATH.shang,params)  
    },
    // getList(page, pagesize) { // 列表接口
    //     return request(METHOD.POST, PATH.LOGIN, { page: page, pageSize: pagesize })
    // },

    // // 登录接口
    // Regiest(params) {
    //     // 返回的也是一个promise对象
    //     return request(METHOD.GET, PATH.getLoad, params)
    // },

    // // 轮播图
    // getImages(params) {
    //     return request(METHOD.GET, PATH.getimg,params)
    // },

    // //全民砍价 砍价列表
    // getlistNav(params) {
    //     return request(METHOD.GET, PATH.getGoodList,params)
    // },

    // news(params) {
    //     return request(METHOD.GET, PATH.news,params)
    // },

    // getdetaile(params) {
    //     return request(METHOD.GET, PATH.getdetail,params)
    // },

    // getListxQ(params) {
    //     return request(METHOD.GET, PATH.listXq,params)
    // },
    // // getGoodList(params) {
    // //     return request(METHOD.GET, PATH.getGoodList,params)
    // // },

    // getClassify(params) {
    //     return request(METHOD.POST, PATH.classify,params)
    // },

    // addRessList(params) {
    //     return request(METHOD.GET, PATH.addRess,params)
    // },


    // install 方法 将对象注入到vue全局中 
    install(Vue) {
        Vue.prototype.$API = this;
    },

    
}


export default APIClient;