<template>
  <div class="container">
    <Category title="foods">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="javascript:;">更多美食</a>
    </Category>
    <Category title="games">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">
          {{ game }}
        </li>
      </ul>
      <!-- 
          不用担心插槽被替换，是追加模式的
            <a slot="footer" href="javascript:;">网络游戏</a>
            <a slot="footer" href="javascript:;">单机游戏</a> 
        -->
      <div class="footer" slot="footer">
        <a href="javascript:;">网络游戏</a>
        <a href="javascript:;">单机游戏</a>
      </div>
    </Category>
    <Category title="films">
      <!-- <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> -->
      <!-- 只用在组件中的template中才能用v-solt，而且是用冒号指定插槽name -->
      <template v-slot:footer>
        <div class="footer">
          <a href="javascript:;">经典</a>
          <a href="javascript:;">热门</a>
          <a href="javascript:;">推荐</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["大鱼", "大肉", "大虾", "大蟹"],
      games: ["GTA%", "战地5", "红色警戒", "守望先锋"],
      films: ["《阿甘正传》", "《肖生克的救赎》", "《你的名字》", "《无间道》"],
    };
  },
};
</script>

<style>
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
h4{
    text-align: center;
}
</style>