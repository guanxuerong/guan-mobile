import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from './router';

import Index from '../views/index.vue'; //首页
import Login from '../views/login.vue'; //首页
import { storage } from '../utils/util';

// 加载路由
Vue.use(VueRouter);

const routes = [
  {
    path: '/index', //首页
    component: Index
  },
  {
    path: '/login', //首页
    component: Login
  },
  {
    path: '/', // 重定向
    redirect: '/index'
  },
  ...Router.routes
];

var router = new VueRouter({
  mode: 'history', //去掉url中的#
  routes
});

/**
 * router拦截
 * nextRoute 路由权限
 *
 *  */

router.beforeEach((to, from, next) => {
  if (!storage.getStorage('user')) {
    next('/login');
  } else {
    next();
  }
});

export default router;
