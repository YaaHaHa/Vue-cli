<template>
  <div class="container">
      <Category title='foods'>
          <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      </Category>
      <Category title='games'>
          <ul>
              <li v-for="game,index in games" :key='index'>
                  {{game}}
              </li>
          </ul>
      </Category>
      <Category title='films'>
          <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name:'App',
    components:{
        Category
    },
    data() {
        return {
            foods:['大鱼','大肉','大虾','大蟹'],
            games:['GTA%','战地5','红色警戒','守望先锋'],
            films:['《阿甘正传》','《肖生克的救赎》','《你的名字》','《无间道》']
        }
    },
}
</script>

<style>
 .container{
     display: flex;
     justify-content: space-around;
     margin-top: 40px;
     font-size: 20px;
 }
</style>