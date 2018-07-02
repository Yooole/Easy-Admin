import Cookies from 'js-cookie'

const tokenKey = 'admin-token';

//获取当前用户登录的TOKEN
export function getToken() {
    return Cookies.get(tokenKey);
}

//设置用户登录TOKEN
export function  setToken(tokenValue) {
    return Cookies.set(tokenKey, tokenValue)
}

//删除用户登录TOKEN
export function removeToken() {
    return Cookies.remove(tokenKey)
}