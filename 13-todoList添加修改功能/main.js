import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h => h(App),
    // 在vm中创建一个全局事件总线，因为vm中用this可以方位到Vue的原型对象，而且直接拿vm当$bus
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
})