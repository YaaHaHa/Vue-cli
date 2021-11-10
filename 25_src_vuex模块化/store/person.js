export default {
    namespaced: true,
    actions: {
        // 添加姓王的，因为需要判断一下，所以用到了actions，而不是直接commit
        addwang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value);
            } else{
                alert('请输入姓王的！！')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.list.unshift(personObj);
        }
    },
    state: {
        list: [
            { id: '01', name: '张三', age: 18 },
            { id: '02', name: '李四', age: 19 },
            { id: '03', name: '王五', age: 20 }
        ]
    },
    getters:{
        firstName(state){
            return state.list[0].name;
        }
    }
}