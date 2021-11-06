<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.done"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input 
      v-show="todo.isEdit" 
      type="text" 
      v-model="todo.title"
      @blur="todoEdit(todo,$event)"
      ref="inp"
      >
    </label>
    <button class="btn btn-danger" @click="handDel(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handEdi(todo)">修改</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    // 删除功能，拿到被删除的id给$bus触发，相当于把数据传到App叫他处理
    handDel(id) {
      if (confirm(`是否删除${this.todo.title}`)) {
        this.$bus.$emit("delTodo", id);
      }
    },
    handEdi(todo){
      if(todo.hasOwnProperty('isEdit'))
      {
        todo.isEdit=true;
      } else{
        this.$set(todo,'isEdit',true);
        console.log('添加了isEdit');
      }
      this.$nextTick(function(){
					this.$refs.inp.focus();
				})
    },
    // 修改todo
    todoEdit(todo,e){
      let oldTit = todo.title;
      this.$emit('editTodo',todo.id,e.target.value);
      todo.isEdit=false;
      console.log(`${oldTit}  成功修改成  ${todo.title}`);
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>