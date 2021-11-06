<template>
   <div class="todo-header">
     <!-- 这里的v-model="title"是干嘛？双向数据绑定，作用在input上就是value，可控制value。清空输入框用的，还能拿来获取框里的内容 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter='add'/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
      return {
        title:''
      }
    },
    methods: {
      add(){
        if (!this.title.trim()) return alert('输入不能为空')
        const newtodo ={
          id:nanoid(),
          title:this.title,
          done:false
        }
        console.log(newtodo);
        // 触发自定义事件
        this.$emit('addTodo',newtodo);
        // 清空输入
        this.title='';
      }
    },
}
</script>

<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>