import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui'
import { getToken } from "./auth";

// create an axios instance
const instance = axios.create({
    baseURL: process.env.BASE_API,
    withCredentials: true,
    timeout: 30000
});

//http request 拦截器
instance.interceptors.request.use(request => {
    request.data = qs.stringify(request.data);
    return request;
}, error => {
    return Promise.reject(error);
});

//http response 拦截器
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    //处理后端返回CODE，如抛出异常、登录超时、权限验证等，需要和后端协商好返回CODE
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    });
    return Promise.reject(error);
});

export default {
    /**
     * http get 请求
     * @param url
     * @param params
     * @returns {Promise<any>}
     */
    get(url, params = {}) {
        params._t = Date.now().toString().slice(0, 10);
        return new Promise((resolve, reject) => {
            instance.get(url, {params: params}).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    },
    /**
     * http post 请求
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            instance.post(url, data).then(response => {
                resolve(response);
            }, error => {
                reject(error)
            })
        })
    }
}