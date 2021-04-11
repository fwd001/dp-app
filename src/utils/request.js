import axios from 'axios'
import { baseURL } from './config'
// 服务端地址
const service = axios.create({
    baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // 跨域时是否带上cookie
    timeout: 20000, // 请求超时时间配置(ms)
    headers: {
        'Content-Type': 'application/json;charset=UTF-8' // json数据格式传输
    }
})

// 请求拦截器
service.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res

    },
    error => Promise.reject(error)
)

export default service