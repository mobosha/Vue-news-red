// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import './assets/css/style.css'
import 'animate.css'
// import api from './utils/fetch.js'
// import router from './router/router.config.js'
import router from './router/index.js'
import store from './store/index.js'

import * as utils from './utils/utils.js'


import Mint from 'mint-ui';
Vue.use(Mint);

import Toast from './utils/toast.js'
Vue.use(Toast);


// console.log(filters)  // 结果：{normalTime: ƒ} filters暴露出来的是方法
// 而过滤器写法是Vue.filter(名字，函数)
// Vue.filter('money',function(value){
//     return '￥'+value.toFixed(2);  //两位小数
// })
// 循环遍历导入的过滤方法json，改成Vue.filter(名字,函数)形式
import * as filters from './filters/index.js'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))


import * as directives from './directive/index.js'
Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))


new Vue({
    router,
    // api,
    // filters,
    store,
    el: '#app',
    template: '<App/>',
    components: {
        App,
    }
})
