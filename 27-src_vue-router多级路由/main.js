import Vue from 'vue'
import App from './App.vue'

// 引入vue-router插件并use
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入创建好并暴露出来的路由器到这里告诉vue
import router from './router'

Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h =>h(App),
    // 这里添加路由器
    router
})