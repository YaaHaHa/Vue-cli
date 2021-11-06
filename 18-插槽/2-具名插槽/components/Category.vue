<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- <ul>
      <li v-for="(d, index) in data" :key="index">
        {{ d }}
      </li>
    </ul> -->
    <!-- 
        这里是定义插槽的地方,APP是使用插槽的地方 
        在App中vue解析组件时发现夹带这其他标签，就把其他标签插到这里    
    -->
    <slot name='center'>这里是插槽</slot>
    <slot name='footer'>这里是插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:["title"]
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
  font-size: 30px;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>