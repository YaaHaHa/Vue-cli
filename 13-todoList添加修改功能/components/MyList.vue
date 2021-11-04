<template>
  <ul class="todo-main">
    <!-- 这里还是用数据绑定的形式传递， -->
    <MyItem v-for="todoObj in todos" :key='todoObj.id' :todo='todoObj'/>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  // 接一下App中传的数据
  props:['todos']
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>