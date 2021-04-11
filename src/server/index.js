import request from '../utils/request'


export function userAdd(query) {
    return request({
        url: '/api/user/add',
        method: 'post',
        data: query
    })
}
