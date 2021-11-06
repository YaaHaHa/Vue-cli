<template>
  <ul class="todo-main">
    <transition-group 
    name="animate__animated animate__bounce"
    enter-active-class="animate__bounceIn"
    leave-active-class="animate__bounceOut"
    >
      <!--                  :todo='todoObj'给每一个MyItem传一个他自己所属的todoObj                               -->
      <MyItem 
        v-for="todoObj in todos" 
        :key='todoObj.id' 
        :todo='todoObj'
        />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
import "animate.css"
export default {
  name:'MyList',
  components:{
    MyItem
  },
  // 接到App保存的数据
  props:['todos']
}
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