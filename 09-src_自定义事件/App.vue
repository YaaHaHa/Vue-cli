<template>
  <div>
      <h1>行的端，坐得正！我是牛指导</h1>
      <!-- 如何让props传的不是字符串类型？ -->
      <!-- 
          1、巧用数据绑定。不加冒号18是字符串，加冒号后 等号后面的分号中按js语句处理 标签中age属性的值是数字18
       <Jile name='赵铁柱' :age='18' /> 
       -->
       <!-- 2、在使用时利用隐式转换 -->
       <!-- 绑定自定义事件 @pullName-->
      <!-- <Jile v-on:pullName="getName" name='张三' age='18' address="阴曹地府"/> -->

      <Jile ref="jile" name='张三' age='18' address="阴曹地府" @click.native='alert'/>




      <!-- 使用在main.js中use的插件生成的全局过滤器 -->
      <h2>{{msg | mySlice}}</h2>
      <button @click="show">打印App的vc</button>
      <br>
      <hr>
      <input type="text" v-fbing:value='info'>
  </div>
</template>

<script>
import Jile from './components/Jile.vue'
// 引入minix.js
// import {maxin} from './mixin'
export default {
    name:'App',
    components:{
        Jile
    },
    data() {
        return {
            msg:'带带大带带',
            info:'1'
        }
    },
    methods: {
        show(){
            console.log(this);
            // 调用Vue原型对象上的方法
            this.hello();
        },
        // 自定义事件的回调函数
        getName(name,...params){
            console.log('从Jile拿到的name',name,params);
        },
        alert(){
            alert('123');
        }
    },
    mounted() {
        /*当App组件挂载完毕后，马上为jile绑定pullName事件，事件的回调函数是getName。这就相当于原生js的addEvent
          这种方法的好处是可以握住那个组件，可以有更多的操作，比如等一段时间后再绑定上，等一个异步任务完成后再绑定
        */ 
        // this.$refs.jile.$on('pullName',this.getName);
        // this.$refs.jile.$once('pullName',this.getName);     //仅执行一次
        /* setTimeout(()=>{
            this.$refs.jile.$on('pullName',this.getName);   //用methods中的方法当回调函数，getName中的this指向App的vc，这是vue对methods的许诺
        },3000) */

        /* this.$refs.jile.$on('pullName',function(){
            console.log(this);  这里的this指向被绑定的组件的实例对象(Jile的实例对象)
        }) */
        /* this.$refs.jile.$on('pullName',()=>{
          console.log(this);        这里的this是在箭头函数里面，没有自己的this，往外找就找到了App的vc
        }) */
        this.$refs.jile.$on('pullName',this.getName)
    },

    
}
</script>

<style>

</style>