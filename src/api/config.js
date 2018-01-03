/*
 * @Author: ecitlm 
 * @Date: 2017-06-05 10:44:15 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-06-22 14:09:58
 */
import axios from 'axios'
import qs from 'qs'
// axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.it919.cn/public/api'; 
// axios.defaults.withCredentials = true;  //表示跨域请求时是否需要使用凭证


// 创建axios实例
const service = axios.create({
    baseURL: 'https://api.it919.cn/public/api', // api的base_url
    timeout: 5000,                  // 请求超时时间
    withCredentials: true,   //加了这段就可以跨域了
    headers: {'X-Requested-With': 'XMLHttpRequest'},  // `headers` 是即将被发送的自定义请求头
    transformRequest: [function (data) { //  只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        data = qs.stringify(data)
        return data
    }],
    transformResponse: [function (data) {
        // console.log(data);
        return data
    }],
    responseType: 'json', // 默认的
    // 'proxy' 定义代理服务器的主机名称和端口
    // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
    // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
    proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth: {
          username: 'mikeymike',
          password: 'rapunz3l'
        }
    },
    data: {
        version: "v1.0",
        platform: 'pcweb',
    },
});


//POST传参序列化
// 拦截器
service.interceptors.request.use((config) => {

    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    config.headers['Accept'] = 'text/plain';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, (error) => {
    alert("错误的传参")
    return Promise.reject(error);
});

/**
 * 
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns 
 */


// respone拦截器
service.interceptors.response.use(
    response => response,
    
    error => {
        console.log('err' + error);// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)



export default service;

