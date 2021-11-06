<template>
  <li>
    <label>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- 这里利用v-model的数据双向绑定，input的checked和todo中的done绑定上了
                为啥改变这里状态的同时会改变APP中的数据？因为数据是通过从props传过来的，这里改了，双向绑定，app中也就改了。
                不推荐这种方法，因为Vue是不支持改props的，这里因为传过来的props是引用数据类型，所以可以改，如果props是基本数据类型改了就会报错
         -->
      <input type="checkbox" v-model='todo.done'/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text"
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="changeTitle(todo,$event)"
        ref="inp"
        >
    </label>
    <!-- 加ref作用？打个标识，找到btn然后改样式。给button绑定一个和li一样的id，拿着这个id去删除 -->
    <!-- <button class="btn btn-danger" style="display: none" ref='Del' @click='delTodoObj' :id='todo.id'>删除</button> -->


    <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
    <!-- 通过css的hover伪类实现鼠标悬浮显示 这边id直接拿，点击的时候把id就传过去了-->
    <button 
      class="btn btn-danger" 
      @click='delTodoObj(todo.id)' 
      >删除</button>

    <button 
      class="btn btn-edit" 
      @click='editTodoObj(todo)' 
      v-show="!todo.isEdit"
      >更改</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  props:['todo'],
  methods: {
    // 删除todo
      delTodoObj(id){
        if(!confirm('是否删除'+this.todo.title)) return;
        // 用事件总线传递数据
        //  this.$bus.$emit('delTodo',id);
        // 用消息订阅发布机制传递数据
        pubsub.publish('delTodo',id);
      },

      // 修改todo，必须要給todo添加一个状态值，状态渲染input框出现
      editTodoObj(todo){
        if (todo.hasOwnProperty('isEdit'))
        {
          todo.isEdit = true;
        }else{
          this.$set(todo,'isEdit',true);
          console.log('添加了isEdit');
        }

        // 虽然更新了数据，但是此时并没有立刻渲染模板，这个函数执行完才会重新渲染，所以input还没有出现，还是none。
        // $nextTick这个API是官方提供专门解决这种问题的
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
        this.$nextTick(function(){
          // 点击修改按钮后，马上自动获取焦点
          this.$refs.inp.focus();
        })
      },

      // 输入框失去焦点后，改title
      changeTitle(todo,$e){
        todo.isEdit=false;
        // 防止修改的为空
        let value = $e.target.value.trim() || todo.title
        // 触发绑定在$bus身上的自定义事件，实现组件通讯
        this.$bus.$emit('handEdit',todo.id,value);
        
      }
  },
  /* beforeDestroy() {
    this.$bus.$off('delTodo');
  }, */
};
</script>

<style>
/*item*/
/* li {
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
 */


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

	li .btn {
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