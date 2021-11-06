<template>
  <div>
      <button @click="isShow = !isShow">展示/隐藏</button>
      <!-- 
          name是不同动画之间的标识，这里是hello，css中就是hello-enter-active和hello-leave-active
          appear属性，添加后一上来就有动画
          解析的时候,transition这一层皮就没了
          transition标签中只能有一个属性，transition-group标签中可多个标签，但是必须加key  
         -->
      <transition-group name='hello' appear>
          <h1 v-show="isShow" key="1">你是？</h1>
          <h1 v-show="!isShow" key="2">小丑！</h1>
      </transition-group>
  </div>
</template>

<script>
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
    /* 用过渡实现动画 */
    /* 去的起点，离开的终点 */
    /* 去的时候瞬间挂上去的起点hello-enter，然后挂上去的终点hello-enter-to和去的动作hello-enter-active */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 离开的起点，去的终点 */
    .hello-leave,.hello-enter-to{
        transform: translateX(0);
    }
</style>