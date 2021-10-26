<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
        <MyHeader :addTodo='addTodo'/>
        <MyList :todos='todos' :delTodo='delTodo'/>
        <!-- 当todo长度为0时，隐藏Footer组件 -->
        <MyFooter v-show='isRm' :todos='todos' :handCkeckedAll='handCkeckedAll' :clearAll='clearAll'/>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    // 因为跨不过组件之间的通信，所以这里把数据全放在APP中，方便通信
    // 数据给MyList,交给他遍历渲染MyItem
    data() {
        return {
          // 空数组，等用户自己添加，todos是要通过localStorage保存到本地的
            todos:JSON.parse(localStorage.getItem('data')) || []
        }
    },
    components:{
        MyHeader,
        MyList,
        MyFooter
    },
    // 把方法拿给MyHeader使用
    methods: {
        addTodo(newtodo){
            this.todos.unshift(newtodo);
        },
        delTodo(target){
            this.todos = this.todos.filter((t)=>{
              return t.id != target
            })
        },
        // 全选/全不选。在MyFooter中操作todos
        handCkeckedAll(flag){
          // 拿到全选复选框的ckecked值，把todos所有的done都与他一致
          this.todos =  this.todos.map((t)=>{
            //解构赋值
            return {...t,done:flag}
          });
        },
        clearAll(){
          this.todos = this.todos.filter((t)=>{
            return t.done == false;
          })
        }
    },
    computed:{
      // 当todo长度为0时，隐藏Footer组件，为什么是计算属性？因为isRm依赖于todos，todos变了这里就会检查一次
      isRm(){
        return this.todos.length
      }
    },
    watch: {
      todos:{
        deep:true,
        // value是新的值
        handler(value){
          // 一改变就被观察到，来到这里执行
          localStorage.setItem('data',JSON.stringify(value));
        }
      }
    },
}
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
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