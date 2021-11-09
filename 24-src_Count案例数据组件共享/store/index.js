import Vue from 'vue'

// 引入并应用插件
import Vuex from 'vuex'
Vue.use(Vuex);

// 服务员
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
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500)
    }
};

// 后厨
const mutations = {
    // 第一个参数是state，第二个参数是value
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    },
    // 添加新人
    ADD_PERSON(state,value){
        state.list.unshift(value);
    }
};

// 材料
const state = {
    sum: 0,
    address: '家里',
    food: '薯片',
    list: [
        { id: '01', name: '张三', age: 18 },
        { id: '02', name: '李四', age: 19 },
        { id: '03', name: '王五', age: 20 }
    ]
};


// getter类似于computed，只是computed不能被vuex工具检测到，getters可以
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})