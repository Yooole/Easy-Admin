import Vue from 'vue'
import Router from 'vue-router'
import { basicRouter, ruleRouter } from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from "../utils/auth";

Vue.use(Router);
NProgress.configure({ showSpinner: false });

//create Router
const router = new Router({
    base: '/',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: basicRouter
});

// no redirect whitelist
const whiteList = ['/login', '/404'];

//路由开始
router.beforeEach((to, from, next) => {
    NProgress.start();
    if(getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            //验证用户管理权限显示不同的菜单
            //验证用户管理权限
            next()
        }
    } else {
        whiteList.indexOf(to.path) === -1 ? next('/login') : next();
    }
});

//路由结束
router.afterEach(route => {
    NProgress.done()
});

export default router
