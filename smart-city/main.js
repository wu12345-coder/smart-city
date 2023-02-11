import App from './App'

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store';
import '@/common/common.js'

Vue.prototype.$env = '0'
Vue.prototype.$baseUrl = Vue.prototype.$env === '0' ? 'http://10.16.67.7:10001':''

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare);

import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.toJSON=()=>{return this}

App.mpType = 'app'
const app = new Vue({
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/api/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/api/http.api.js';
Vue.use(httpApi, app);

app.$mount()

