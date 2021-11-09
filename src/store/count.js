export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        // 第一个参数是state，第二个参数是value
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
        // 添加新人
        ADD_PERSON(state, value) {
            state.list.unshift(value);
        }
    },
    state: {
        sum: 0,
        address: '家里',
        food: '薯片',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
};