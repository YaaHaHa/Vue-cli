import Vue from 'vue';
import App from './App.vue'


/* import {maxin} from './mixin'
// 全局混合，所有的vc以及vm都会收到
Vue.mixin(maxin); */
Vue.config.productionTip = false
new Vue({
    el:'#app',
    render: h => h(App)
})
