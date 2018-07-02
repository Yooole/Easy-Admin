import { getToken, setToken, removeToken } from '@/utils/auth'
import Http from '@/utils/http'

const user = {
    state: {
        info: {}
    },
    mutations: {
        SET_INFO: (state, info) => {
            state.info = info
        }
    },
    actions: {
        // 用户名登录
        LoginByUsername({ commit }, loginData) {
            return new Promise((resolve) => {
                console.log(loginData);
                Http.post('/admin/user/login', loginData).then(response =>{
                    if(response.success) {
                        setToken(response.token);
                    }
                    resolve(response);
                });
            })
        },
        // 登出
        LogOut({ commit }) {
            return new Promise((resolve) => {
                Http.post('/admin/user/logout').then(response =>{
                    if(response.success) {
                        removeToken();
                    }
                    resolve(response);
                });
            })
        },
        // // 获取用户信息
        // GetUserInfo({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         getUserInfo(state.token).then(response => {
        //             if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
        //                 reject('error')
        //             }
        //             const data = response.data
        //             commit('SET_ROLES', data.roles)
        //             commit('SET_NAME', data.name)
        //             commit('SET_AVATAR', data.avatar)
        //             commit('SET_INTRODUCTION', data.introduction)
        //             resolve(response)
        //         }).catch(error => {
        //             reject(error)
        //         })
        //     })
        // }
    }
};

export default user