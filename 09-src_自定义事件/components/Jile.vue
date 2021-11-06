<template>
  <div>
      <h2>我的评价是：{{comm}}</h2>
      <button @click="pingjia">点我随机评价</button>
      <button @click="showThis">点我打印this</button>
      <hr />
      <ul>
          <li>{{name}}</li>
          <li>{{age*1+1}}</li>
          <li>{{address}}</li>
      </ul>
      <button @click='sent'>点我向App传数据</button>
  </div>
</template>

<script>

export default {
    name:"Jile",
    data() {
        return {
            comm:'寄了',
            myAge:this.age
        }
    },
    // mixins:[mixin],
    methods: {
        pingjia(){
            let rand = Math.round(Math.random());
            console.log(rand);
            this.comm =rand? '寄了'  : '成了';
            
        },
        showThis(){
            console.log(this);
        },
        sent(){
            // 触发被绑定的pullName事件，传递this.name参数。要是没绑定没啥用
            this.$emit('pullName',this.name,666,544,999);

            // this.$emit('click',this.name);
        }
    },
    /* mounted() {
        this.$emit('pullName',this.name);
    }, */

    props:{name:String,age:String,address:String}

}
</script>

<style>

</style>