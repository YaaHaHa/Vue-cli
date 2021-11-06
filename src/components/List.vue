<template>
  <div class="row">
      <!-- 使用v-for实现遍历数组创建元素 -->
    <div v-show="!Info.isFirst" class="card" v-for="u in Info.Users" :key="u.login">
      <a :href=u.html_url target="_blank">
        <img :src=u.avatar_url style="width: 100px" />
      </a>
      <p class="card-text" v-text=u.login></p>
    </div>
    <h2 v-show="Info.isFirst">欢迎使用</h2>
    <h2 v-show="Info.isLoading">请稍后......</h2>
    <h2 v-show='Info.errMsg'>{{Info.errMsg}}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
      return {
        //  用户数据保存在这里
        Info:{
            // 为什么把这些是否第一次界面与加载界面的状态设在这？如果不写在这个对象里，岂不是每一个状态都要$emit，直接一股脑传进去，用
            isFirst:true,
            isLoading:false,
            Users:[],
            errMsg:''
        }
          
      }
  },
  methods: {
      saveUsers(data){
        //   把拿到的数据存到这里，利用扩展运算符，如有相同的属性，后者替代前者
          this.Info = {...this.Info,...data};
      }
  },
  mounted() {
    //   接收请求获取到的数据，保存起来
      this.$bus.$on('saveUsers',this.saveUsers)
  },
};
</script>

