#### 关于不同版本的Vue：
	
1. vue.js与vue.runtime.xxx.js的区别：
     1. (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。可以解析template属性
     2. (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函数去指定具体内容。 



#### Array.prototype.ruduce()
`arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`


####  App>> MyList>> MyItem中的复选框
<!-- 这里利用v-model的数据双向绑定，input的行为和todo中的done绑定上了
                为啥改变这里状态的同时会改变APP中的数据？因为数据是通过从props传过来的，这里改了，双向绑定，app中也就改了。
                不推荐这种方法，因为Vue是不支持改props的，这里因为传过来的props是引用数据类型，所以可以改，如果props是基本数据类型改了就会报错
         -->
'<input type="checkbox" v-model='todo.done'/>'
>这种双向数据绑定的使用，初始化与改值的要求都能实现

#### App>> Footer
全选/全不选框
`<input type="checkbox" v-model='isAll'/>`
这位更是重量级，利用计算属性达到了初始化渲染和改值的要求
```js
 isAll:{
        //  读属性时，那就是初始化的时候喽
         get(){
           return this.allTodo == this.checkedTodo && this.allTodo > 0
         },
          //  改属性时，利用App传来的方法改值     
         set(val){
           this.handCkeckedAll(val);
         }
       }
```

#### localStorage与sessionStorage方法都一样，就是声明存在的时间不同
把todoList的todos通过这个保存到本地，同样两个重点。初始渲染与改变后的渲染。
* 用到了watch属性，当todos改变，马上把最新的todos保存到本地。因为默认的是浅监视，对象中的属性改变不会被监视，但是todo的done要随着复选框一直在变，所以要开启深度监控。
* data中的todos的初始值要从localStorage.getItem拿，因为保存的是json格式的，记得转换一下。
    // 那本地保存的或空数组，等用户自己添加，todos是要通过localStorage保存到本地的
            todos:JSON.parse(localStorage.getItem('data')) || []
