<template>
  <div>
      <button @click="isShow = !isShow">展示/隐藏</button>
      <!-- 
          name是不同动画之间的标识，这里是hello，css中就是hello-enter-active和hello-leave-active
          appear属性，添加后一上来就有动画
          enter-active-class相当于在style里写*-enter-active
          leave-active-class类似
          解析的时候,transition这一层皮就没了
          transition标签中只能有一个属性，transition-group标签中可多个标签，但是必须加key  
         -->
      <transition-group 
        name='animate__animated animate__bounce' 
        appear
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__bounceOut"
        >
          <h1 v-show="isShow" key="1">你是？</h1>
          <h1 v-show="!isShow" key="2">小丑！</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Hello',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background: orange;
    }
</style>