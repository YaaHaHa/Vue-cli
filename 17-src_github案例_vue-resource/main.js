import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false;
// vue-resource是一个插件，使用后在所有的组件身上多了一些属性，$httl可代替axios，使用的方法一模一样。在vue1.0时$http使用较多
Vue.use(vueResource);

new Vue({
    el:'#app',
    render: h => h(App),
    // 创建全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})