import Vue from 'vue/dist/vue'
import App from './App.vue'
Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h => h(App),
    // 在vm中创建一个全局事件总线，因为vm
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
})