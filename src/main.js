
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.less'
import 'lib-flexible/flexible'

import util from './utils/util.js'
Vue.use(util)

import vueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(vueAwesomeSwiper)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//axios
import {post,get} from './utils/http'
Vue.prototype.$post=post;
Vue.prototype.$get=get;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
