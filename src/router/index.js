// 该文件用于创建整个应用的路由器

import VueRouter from "vue-router";


// 引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    // 因为路由是一对一对的key-value值，所以下的的书写格式是这种形式的
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        }
    ]
})
