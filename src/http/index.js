import  Request  from '../uiif/Request' // 引入进来的Require文件  导出的那个对象
// Request 是一个函数  函数的返回值  是 => 一个promise对象

export const login = (data) => Request({ // 登录接口   *
    url: `/api/user/login.do?username=${data.username}&password=${data.password}`,
    method:'post',
})

// 列表
export const userList = (url) => Request({
    url,
    method:"post",
})


export const shang = (url) => Request({
    url ,
    method:'post'
})


export const xiang = (url) => Request({
    url ,
    method: 'post',
    // params:data
})

// var fun = () =>{
//     Request({
    
// })},    


// * 函数的写法
export const modify = (url) => 
    Request({
        url,
        method: 'post'
    })

//搜索
export const chaxun = (data) => Request({
    url: `/api/product/search.do`,
    method: 'get',
    params:data
})

// 更新
export const modifyList = (url,data) => Request({
    url,
    method: "post",
    params:data
})

// 商品上下架
export const dataModify = (data) => Request({
    url: `/api/product/set_sale_status.do`,
    method: 'post',
    params:data
})


// 添加商品
export const addList = (data) => Request({
    url:`/api/product/save.do`,
    method: 'post',
    params:data
})


// 二级分类
// export const cateList = (data) => Request({
//     url: `/api/category/get_category.do`,
//     method: 'post',
//     params:data
// })


/**
 * 导出这个对象  export导出要加 {} 号
 * 导出之后 页面组件中导入 调用这个函数 给他传参
 * 这个函数值就是一个函数promise对象 
 * 
 */

export const cateList = (data) => {
    return Request({
        url: `/api/category/get_category.do`,
        method: 'post',
        params: data
    })
}

// 修改品类管理
export const ModifycartList = (url,data) => Request({
    url,
    method: 'post',
    params:data
})

// 添加子品类
export const addCateList = (data) => Request({
    url: `/api/category/add_category.do?parentId=${data.id}&categoryName=${data.name}`,
    method: 'post',
    params:data
}) 


// 订单List
export const orderList = (url,data) => {
    return Request({
        url,
        method: "post",
        params:data
    })
}


// 按照订单号查询
export const crderAddList = (url,data) => {
    return Request({
        url,
        method: 'post',
        params:data
    })
}

// 查询
export const oraderItem = (data) => {
    return Request({
        url: `/api/order/search.do?orderNo=${data.orderNo}`,
        method: 'post',
        params: data
    })
}



// 订单详情 
export const xiangs = (url,data) => {
    return Request({
        url,
        method: "post",
        params:data
    })
}