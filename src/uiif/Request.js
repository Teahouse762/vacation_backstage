import axios from 'axios'
// 对axios的二次封装  成函数
//   原因：，便于函数的调用  函数返回的是promise对象，函数也便于参数的传递

// axios.defaults.baseURL = "http://adminv2.happymmall.com/manage/"

// axios.interceptors.request.use(function (config) {
//     config.headers.Authorization = sessionStorage.getItem("token")
//     return config
// })


// axios.interceptors.response.use(function (response) {
//     return response
// })


let Request = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            ...params
        }).then((res) => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default Request