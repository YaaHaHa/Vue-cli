export default {
    namespaced: true,
    actions: {

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
    }
}