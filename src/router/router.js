import Main from '../views/Main.vue';

//基础路由
export const basicRouter = [
    { path: '*', redirect: '/404' },
    { path: '/login', component: () => import('@/views/login.vue') },
    { path: '/401', component: () => import('@/views/errorPage/401.vue') },
    { path: '/404', component: () => import('@/views/errorPage/404.vue') },
    {
        path: '/',
        redirect: '/dashboard',
        component: Main,
        children: [
            { path: 'dashboard', title: '控制台', component: () => import('@/views/dashboard/index.vue') },
            { path: 'owner-space', title: '个人中心', component: () => import('@/views/owner-space/index.vue') },
            { path: 'message', title: '消息中心', component: () => import('@/views/message/index.vue') }
        ]
    }

];

//权限路由

export const ruleRouter = [
    // {
    //     path: '/',
    //     // redirect: '/dashboard',
    //     title: '控制台',
    //     component: Main,
    //     children: [
    //         // { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
    //         // { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
    //         // { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
    //         // { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
    //         // { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    //     ]
    // }
];