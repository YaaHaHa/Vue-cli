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
  </div>
</template>

<script>
import Jile from './components/Jile.vue'
export default {
    name:'App',
    components:{
        Jile
    },
    
}
</script>

<style>

</style>