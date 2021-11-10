import Vue from 'vue'

// 引入并应用插件
import Vuex from 'vuex'
// 引入各个模块自己的vuex，来到store大家长这里归store管
import countAbout from './count'
import personAbout from './person'
Vue.use(Vuex);


export default new Vuex.Store({
    // 把模块化的vuex到这里集合
    modules:{
        countAbout,
        personAbout
    }
})