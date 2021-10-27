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
    methods: {
        pingjia(){
            let rand = Math.round(Math.random());
            console.log(rand);
            this.comm =rand? '寄了'  : '成了';
            
        },
        showThis(){
            console.log(this);
            // console.log(this._props);
        }
    },

    // props的数据是优先被接收的，然后存到vc里面，直接this.name就能拿。而_data在后面，所以data里可以拿props的数据
    // props数据谁传谁接？在App里传，Jile组件接
    // props:['name','age','address']

    props:{name:String,age:String,address:String}
    /* props:{
        name:{
            // 接的时候必须是String
            type: String,
            require:true
        },
        age:{
            // 接的时候必须是Number
            type: String,
            require:true,
        },
        address:{

            type:String,
            default:'中国'
        }
        
    } */
}
</script>

<style>

</style>