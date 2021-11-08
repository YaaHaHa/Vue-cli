<template>
  <div class="container">
    <!-- 圆点列表 -->
    <Category title="游戏">
      <template slot-scope="data">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </Category>

    <!-- 数字列表 -->
    <Category title="游戏">
      <!-- 对象的解构赋值取出games -->
      <template slot-scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>

    <!-- h4标题列表 -->
    <Category title='游戏'>
      <template slot-scope="{games}">
        <h4 v-for="game,index in games" :key="index">
          {{game}}
        </h4>
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
};
</script>

<style>
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>