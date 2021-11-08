import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store'
Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h =>h(App),
    // 在引入vuex后才能写入store，不然无效
    store,
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})