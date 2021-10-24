<template>
  <li>
    <label>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- 这里利用v-model的数据双向绑定，input的行为和todo中的done绑定上了
                为啥改变这里状态的同时会改变APP中的数据？因为数据是通过从props传过来的，这里改了，双向绑定，app中也就改了。
                不推荐这种方法，因为Vue是不支持改props的，这里因为传过来的props是引用数据类型，所以可以改，如果props是基本数据类型改了就会报错
         -->
      <input type="checkbox" v-model='todo.done'/>
      <span>{{todo.title}}</span>
    </label>
    <!-- 加ref作用？打个标识，找到btn然后改样式。给button绑定一个和li一样的id，拿着这个id去删除 -->
    <!-- <button class="btn btn-danger" style="display: none" ref='Del' @click='delTodoObj' :id='todo.id'>删除</button> -->


    <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
    <!-- 通过css的hover伪类实现鼠标悬浮显示 这边id直接拿，点击的时候把id就传过去了-->
    <button class="btn btn-danger" @click='delTodoObj(todo.id)' :id='todo.id'>删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','delTodo'],
  methods: {
      delTodoObj(id){
        if(!confirm('是否删除'+this.todo.title)) return;
         this.delTodo(id);
      }
  },
};
</script>

<style>
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

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>