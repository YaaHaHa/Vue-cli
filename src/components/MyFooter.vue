<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ chekedTodo }}</span> / 全部{{allchecked}}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  methods: {
    clear(){
      this.$bus.$emit('clearAll',this.todos);
    }
  },
  computed: {
    // 检查已选中的
    chekedTodo() {
      return this.todos.reduce((isChecked, cur) => {
        return (isChecked += cur.done ? 1 : 0);
      }, 0);
    },
    // 全部
    allchecked(){
      return this.todos.length;
    },
    // 全选/全不选框
    isAll:{
      get(){
        return this.chekedTodo == this.allchecked && this.allchecked >0;
      },
      set(pre){
        this.$bus.$emit('handAll',pre);
      }
    }
  },
  
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>