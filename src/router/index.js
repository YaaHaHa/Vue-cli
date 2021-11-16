// 该文件用于创建整个应用的路由器

import VueRouter from "vue-router";


// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import Details from '../pages/Details.vue'

// 创建并暴露一个路由器
const router =  new VueRouter({
    // 因为路由是一对一对的key-value值，所以下的的书写格式是这种形式的
    routes:[
        {
            path:'/home',
            component:Home,
            // meta属性中的内容可被路由守卫拿到
            meta:{title:'主页'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫只有前置！！！没有后置
                    beforeEnter:(to, from, next) => {
                        // console.log('独享路由守卫',to,from);
                            // 是否需要身份验证
                        if(to.meta.isAuth){
                            // 判断来者是不是正确的
                            /* if(from.path !== '/Home'){
                                next();
                            } */
                            if(localStorage.getItem('school') !== 'jialidun'){
                                alert('权限不允许访问');
                            } else{
                                next();
                            }
                        }else{
                            next()
                        }
                    }
                },
                {
                    path:'messages',
                    component:Messages,
                    meta:{isAuth:true,title:'讯息'},
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
            component:About,
            meta:{isAuth:true,title:'相关'}
        }
    ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
//  前置路由守卫  路径请求从当前哪里来？要到哪里去？要不要放行
router.beforeEach((to,from,next)=>{
    // console.log('全局前置路由守卫',to,from);
    // 是否需要身份验证
  if(to.meta.isAuth){
    // 判断来者是不是正确的
    /* if(from.path !== '/Home'){
        next();
    } */
    if(localStorage.getItem('school') !== 'jialidun'){
        alert('权限不允许访问!')
    } else{
        next();
    }
  }else{
    next()
  }
})

// 全局后置路由守卫------初始化的时候被调用，每次路由切换之后被调用
// 应用场景：切换路由后，比如对标题进行更换
router.afterEach((to,from)=>{
//   console.log('全局后置路由守卫',to,from);
  document.title = to.meta.title || '带带大系统'
})
export default router;