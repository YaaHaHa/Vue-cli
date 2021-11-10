// 该文件用于创建整个应用的路由器

import VueRouter from "vue-router";


// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import Details from '../pages/Details.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    // 因为路由是一对一对的key-value值，所以下的的书写格式是这种形式的
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {   
                            name:'xiangqing',
                            path:'details',
                            component:Details
                        }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})
