<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- <ul>
      <li v-for="(d, index) in data" :key="index">
        {{ d }}
      </li>
    </ul> -->
    <slot>这里是插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title", "data"],
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