<template>
  <div>
      <h1>行的端，坐得正！我是牛指导</h1>
      <!-- 如何让props传的不是字符串类型？ -->
      <!-- 
          1、巧用数据绑定。不加冒号18是字符串，加冒号后 等号后面的分号中按js语句处理 标签中age属性的值是数字18
       <Jile name='赵铁柱' :age='18' /> 
       -->
       <!-- 2、在使用时利用隐式转换 -->
      <Jile name='赵铁柱' age='18' address="黑龙江-双鸭山"/>
      <button @click="show">打印App的vc</button>
      <h2>{{x}}</h2>
  </div>
</template>

<script>
import Jile from './components/Jile.vue'
// 引入minix.js
import {maxin} from './mixin'
export default {
    name:'App',
    data() {
        return {
            // 如果混合和自带的属性冲突，听自己的，自己先导入，所以这里还拿不到this.x
            Myx:this.x
        }
    },
    components:{
        Jile
    },
    methods: {
        show(){
            console.log(this);
            console.log('@'+this.x);
        }
    },

    // 这是局部混合
    mixins:[maxin],

    // 生命周期钩子不以任何人为主，但是混合的先执行？因为整个数据的导入执行，是maxin先过来
    /* mounted() {
        console.log("我是App.vue中的钩子");
    }, */
}
</script>

<style>

</style>