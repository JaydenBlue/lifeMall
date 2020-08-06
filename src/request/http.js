/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import store from '@/store/store.js'
import { Message } from 'element-ui';
import VueCookies from 'vue-cookies'
import router from '../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
console.log(store)


axios.defaults.baseURL = "https://gm.merrilylife.com/";

// 请求超时时间
axios.defaults.timeout = 60000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;application/json';
// axios.defaults.headers.post['cookie'] = 'JSESSIONID='+store.state.token;
// get请求头
// axios.defaults.headers.get['cookie'] = 'JSESSIONID='+store.state.token;
axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['token'] = store.state.token;
// get请求头
// axios.defaults.headers.get['token'] = store.state.token;

// loading框设置局部刷新，且所有请求完成后关闭loading框
let loading;
function startLoading() {
    NProgress.start()
}
function endLoading() {
    NProgress.done()
}

//声明一个对象用于存储请求个数
let needLoadingRequestCount = 0;
function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}
function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
}


// 请求拦截器
axios.interceptors.request.use(
    config => {
        showFullScreenLoading()
        console.log(config)
        // if (config.isForm) {
        //     config.headers = {
        //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;application/json'
        //     }
        // }
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;
        // token && (config.headers.token = token);
        // config.headers.token = 'JSESSIONID='+'admin';
        return config;
    },
    error => {
        return Promise.error(error);
    }
)
// 响应拦截器
axios.interceptors.response.use(
    response => {
        tryHideFullScreenLoading();
        if (response.status === 200) {
            //可判断服务器返回状态

            //通用错误
            if (response.data.status === -1 && response.data.msg == 'NOT_LOGIN') {
                store.commit('isLoginChange', false);
                store.commit('tokenChange', "");
                // VueCookies.delete('token')
                // router.push({path : '/login'})
                router.push({ path: '/' })
                return Promise.reject(response);
            }
            if (response.data.status == -1) {
                // Message({
                //     message: i18n.t('msgError.' + response.data.msg + ''),
                //     type: 'warning'
                // });
                return Promise.reject(response);
            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {

        tryHideFullScreenLoading();
        if (error.response.status) {
            switch (error.response.status) {
                case 9999:

                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: '网络错误 请稍后再试',
                        type: 'warning'
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

/**
 * @param url
 * @param data
 * @returns {Promise}
 */
// qs.stringify(params)
export function Api(urls, methods, params = {}, isForm= false) {
    return new Promise((resolve, reject) => {
        axios({
            method: methods,
            url: urls,
            data: params,
            isForm:isForm
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default Api;

// /**
//  * get方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params: params
//         })
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     });
// }
// /**
//  * getURL方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function getURL(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url + params)
//             .then(res => {
//                 Toast.clear();
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 // Toast.clear();
//                 reject(err.data)
//             })
//     });
// }
// /**
//  * post方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function post(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     });
// }
// /**
//  * postURL方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function postURL(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url + params, params)
//             .then(res => {
//                 Toast.clear();
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 // Toast.clear();
//                 reject(err.data)
//             })
//     });
// }