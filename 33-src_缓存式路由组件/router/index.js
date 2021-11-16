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
                    // param参数要提前占位，不然谁知道哪里是路径哪里是参数
                    children:[
                        {   
                            name:'xiangqing',
                            path:'details',
                            component:Details,
                            // 通过路由传参数肯定要来到route这里啊
                            // 第一种传props的方法，数据是死的
                            /* props:{
                                id:'666',
                                title:'哈哈哈'
                            } */

                            // 第二种传props的方法，直接把获取到的params参数作为props
                            // props:true

                            // 第三种方式，以函数的形式。参数时这个组件自己的$route
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
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
