import Vue from 'vue'

// 引入并应用插件
import Vuex from 'vuex'
Vue.use(Vuex);

const actions = {
    // context是上下文，包含相关信息 里面有相关信息数据
    jia(context, value) {
        context.commit('JIA', value);
    },
    jian(context, value) {
        context.commit('JIAN', value);
    },
    // 既然context可以拿到state，为什么还要commit给mutations？
    // 因为vuex开发者工具是和mutation联系的，直接操作不会被开发者工具发现并展示。其实也能实现功能，乱拳打死老师傅了属于是
    jiaOdd(context, value) {
        if (context.state.sum % 2 ) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA', value);
        },500)
    }
};

const mutations = {
    // 第一个参数是state，第二个参数是value
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    }
};

const state = {
    sum: 0
};
export default new Vuex.Store({
    actions,
    mutations,
    state
})