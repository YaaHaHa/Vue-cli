<template>
  <div>
      <button @click="isShow = !isShow">展示/隐藏</button>
      <!-- 
          name是不同动画之间的标识，这里是hello，css中就是hello-enter-active和hello-leave-active
          appear属性，添加后一上来就有动画
          解析的时候,transition这一层皮就没了  
         -->
      <transition name='hello' appear>
          <h1 v-show="isShow">你好</h1>
      </transition>
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
    /* 用animation属性实现动画 */
    .hello-enter-active{
        animation: home 0.5s linear;
    }
    .hello-leave-active{
        animation: home 0.5s linear reverse;
    }
    @keyframes home {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>