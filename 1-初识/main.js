/* 

  改文件是整个项目的入口文件
*/
// 这样引入Vue，在node_modules中引用的是Vue文件夹中的一个残缺版本的Vue。为什么是残缺的？因为没必要，
// 开发的时候模板解析器方便开发，上线的话在Vue完整版中有解析器了，但最后是webpack打包的，webpack已经处理过了，不需要Vue的解析器，所以用残缺版的。
// 而且打包的时候能省点空间，不把完整版Vue的解析器打包进去。所以用render，不引用完整版Vue
import Vue from 'vue'

// 这样才是引入完整版的Vue，残缺版的下面不能写template
// import Vue from 'vue/dist/vue'

// 引入App
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

/* 关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。 */


// 创建Vue实例对象                                                                                                                                                  
new Vue({
  // el:'#app',
  // 这里要用template属性必须要引入完整版Vue
  /* template:
    `
      <h2>你好</h2>
    `, */
    // render的参数时createElement函数，返回值是元素
  render: h => h(App),
  /* render:createElement => {
    const newEl = createElement('h2','你好');
    return newEl;
  } */
}).$mount('#app')
let a= 1;