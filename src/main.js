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
import filter from './filters/index.js'


import Mint from 'mint-ui';
Vue.use(Mint);


new Vue({
    router,
    // api,
    filter,
    store,
    el: '#app',
    template: '<App/>',
    components: {
        App,
    }
})
