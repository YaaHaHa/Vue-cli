<template>
  <div class="todo-footer">
        <label>
          <!-- 方案一：通过计算属性监视所有todo为全选框赋值，handAllChecked全选todo或全不选 -->
          <!-- <input type="checkbox" :checked='isAll' @change="handAllChecked"/> -->

          <!-- 分析功能：
                  1.初始转态
                  2.动态更改状态
          方案二：读与写，只用计算属性不也行？get和set
           -->
           <!-- 为什么不是v-model:value，因为这是input，直接操作value -->
          <input type="checkbox" v-model='isAll'/>
        </label>
        <span>
          <span>已完成{{checkedTodo}}</span> / 全部{{allTodo}}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
      allTodo(){
        return this.todos.length
      },
      checkedTodo(){
        // rudece方法
        return this.todos.reduce((isChecked,cur)=>{
          return isChecked+=cur.done? 1 : 0;
        },0);
      },
      // 所有的todo都选中，isAll为true，全选框被选中。需要动态计算，所以用计算属性
      // 方案一的方法
      /* isAll(){
        return this.allTodo == this.checkedTodo & this.allTodo >0
      } */
       isAll:{
        //  读属性时，那就是初始化的时候喽
         get(){
           return this.allTodo == this.checkedTodo && this.allTodo > 0
         },
         set(val){
           this.$emit('handCkeckedAll',val);
         }
       }
    },
    methods: {
      // 方案一的方法
      /* handAllChecked(e){
        this.handCkeckedAll(e.target.checked);
      } */
      // 清除todo中done为true的
      clear(){
        this.$emit('clearAll');
      }
    },
}
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