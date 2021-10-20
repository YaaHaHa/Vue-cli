<template>
  <div>
      <h2 title='success' type='judg'>我的评价是：{{comm}}</h2>
      <button @click="pingjia">点我随机评价</button>
      <button @click="showThis">点我打印this</button>
      <hr />
      <ul>
          <li>{{name}}</li>
          <li>{{age}}</li>
          <li>{{address}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Jile",
    data() {
        return {
            comm:'寄了'
        }
    },
    props:['title','type'],
    methods: {
        pingjia(){
            let rand = Math.round(Math.random());
            console.log(rand);
            this.comm =rand? '寄了'  : '成了';
            
        },
        showThis(){
            console.log(this);
            console.log(this.props)
        }
    },
    // props数据谁传谁接？在App里传，Jile组件接
    props:['name','age','address']
}
</script>

<style>

</style>