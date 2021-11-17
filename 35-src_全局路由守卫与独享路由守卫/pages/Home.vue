<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
                <!-- 本质上router-link还是转换成了a标签 -->
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/news"
                  >News</router-link
                >
              </li>
              <li>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/messages"
                  >Message</router-link
                >
              </li>
            </ul>
            <div>
              <!-- 缓存路由组件 不加include标识则缓存所有路由 -->
              <keep-alive include="News">
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // 挂载后执行钩子
  mounted(){
    console.log('Home挂载后的route',this.$route);
  },
  // 被销毁前执行钩子
  beforeDestroy() {
    console.log('Home要被销毁了');
  },

};
</script>

<style>
</style>