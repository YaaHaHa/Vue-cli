<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader />
        <MyList :todos="todos" />
        <MyFooter v-show="hasTodo" :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  data() {
    return {
      // 读取存到本地的数据
      todos: JSON.parse(window.localStorage.getItem('data')) || [],
    };
  },
  methods: {
    // 添加todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
      // 存储到本地如果这里写了一份，是不是所有操作todos的地方都要在把最新的todos存储一下？所以说用watch监视一下就行了
      // window.localStorage.setItem('data',JSON.stringify(this.todos));
    },
    // 删除todo
    delTodo(id){
      this.todos = this.todos.filter((t)=>{
        return t.id != id;
      })
    },
    // 全选全不选
    handelAllTodo(state){
      this.todos.forEach((t,index)=>{
        t.done = state;
      })
    },
    // 清除已完成任务
    clearAll(allTodo){
      this.todos = allTodo.filter((t)=>{
        return t.done != true;
      })
    },
    // 修改todo，找到id，改title
    editTodo(id,tit){
      this.todos.forEach((t)=>{
        if(t.id === id) t.title=tit;
      })
    }
  },
  watch:{
    todos:{
      // val是新的todos
      deep:true,
      handler(val){
        window.localStorage.setItem('data',JSON.stringify(val));
      }
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  computed:{
    hasTodo(){
      return this.todos.length;
    }
  },
  mounted() {
    // 绑定添加事件
    this.$bus.$on("addTodo", this.addTodo);
    // 帮点删除事件
    this.$bus.$on('delTodo',this.delTodo);
    // 绑定全选全不选
    this.$bus.$on('handAll',this.handelAllTodo);
    // 绑定清除所有
    this.$bus.$on('clearAll',this.clearAll);
    // 修改todo
    this.$bus.$on('editTodo',this.editTodo);
  },
  beforeDestroy() {
    this.$bus.$off('delTodo')
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit{
  margin-right: 3px;
  color: #fff;
  background-color: green;
  border: 1px solid rgb(0, 73, 0);
}
.btn-edit:hover{
  background-color: rgb(0, 94, 0);
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>