#### 1.关于不同版本的Vue：
	
1. vue.js与vue.runtime.xxx.js的区别：
     1. (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。可以解析template属性
     2. (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函数去指定具体内容。 



#### 2.Array.prototype.ruduce()
`arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`


####  App>> MyList>> MyItem中的复选框
<!-- 这里利用v-model的数据双向绑定，input的行为和todo中的done绑定上了
                为啥改变这里状态的同时会改变APP中的数据？因为数据是通过从props传过来的，这里改了，双向绑定，app中也就改了。
                不推荐这种方法，因为Vue是不支持改props的，这里因为传过来的props是引用数据类型，所以可以改，如果props是基本数据类型改了就会报错
         -->
'<input type="checkbox" v-model='todo.done'/>'
>这种双向数据绑定的使用，初始化与改值的要求都能实现

#### 3. App >> Footer
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

#### 4.localStorage与sessionStorage方法都一样，就是声明存在的时间不同
把todoList的todos通过这个保存到本地，同样两个重点。初始渲染与改变后的渲染。
* 用到了watch属性，当todos改变，马上把最新的todos保存到本地。因为默认的是浅监视，对象中的属性改变不会被监视，但是todo的done要随着复选框一直在变，所以要开启深度监控。

* data中的todos的初始值要从localStorage.getItem拿，因为保存的是json格式的，记得转换一下。
    // 那本地保存的或空数组，等用户自己添加，todos是要通过localStorage保存到本地的
            todos:JSON.parse(localStorage.getItem('data')) || []

#### 5.自定义事件
  1. 在标签中定义自定义事件并绑定上
     1. <Jile v-on:pullName="getName" name='张三' age='18' address="阴曹地府"/> 直接绑定，pullName是事件名,getName是回调函数

     2. <Jile ref="jile" name='张三' age='18' address="阴曹地府"/>用this.$refs.jile.on('pullName',this.getName/function() {}/ () => {})

           1. 第二种方法如果指派的回调函数是这种直接写，而不是用this指派methods中的，那么函数中的this就指向被触发的那个组件实例对象。 Vue是这么规定的。

           2. 为什么用this指派methods中的函数时，函数中的this是指向当前函数被声明的那个组件？其实按理说this也是指向被触发事件的那个组件，但是这个函数写在了methods里面，并且是普通函数，所以根据Vue的设置，methods中的函数中的this必指向当前组件的实例对象，所以说这里的this是因为methods的加持，指向了当前组件实例对象。

           3. 其实用箭头函数也能指向当前实例对象。因为箭头函数没有自己的this，向外找，找到箭头函数被声明的地方。

     3. 不管是哪种方式创建绑定的自定义事件，事件的回调和绑定都在创建自定义事件的地方。

  2. 给自定义事件设置回调函数

  3. 被绑定的元素触发事件，执行回调函数

  4. 在给组件绑定事件，Vue会默认是自定义事件。加上.native修饰符确定是原生事件


#### 6.全局事件总线
  1. 名称：$bus

  2. 用途：完成各组件通讯

  3. 创建位置：要对各组件通讯，所有人都能够访问的到。因为`VueComponent.protortpe.__proto__ = Vue.prototype`这一条线，只要是在Vue原型对象上的东西，vc实例也能访问到。所以这个东西就要被创建在Vue的原型对象上。

  4. 事件总线`$bus`的数据类型：因为要用到`$on`,`$emit`,`$off`，来绑定自定义事件，触发自定义事件，解绑。
     1. 所以他必须要能够使用这些方法。这些方法位于哪？Vue的原型对象上。只用vm或vc可以调用得到。所以，事件总线$bus的数据类型要么是vc，要么是vm。

     2. 创建`vc`还是`vm`?`vc`要通过实现组件的原型对象来创建。假如有一个组件`Student`，<Student />要写在哪？所以`vc`不行

     3. 怎么把`vm`当做`$bus`?可以新建一个vm
   ```js
    const $bus = new Vue();
    Vue.prototype.$bus = $bus;
   ```

     4. 也可以把main.js中的vm拿过来，反正只是绑定事件与触发事件，对他的正常使用没影响
   ```js
    new Vue({
      ...
      beforeCreat(){
        Vue.prototype.$bus = this;
      }
      ...
    })
   ```

>组件被销毁时，绑定在事件总线上的自定义事件记得解绑，不然他会一直存在。因为占着这个傀儡，属于是占着茅坑不拉s，解绑一下。
   
[全局事件总线原理图](../原理图/全局事件总线原理图.png)





