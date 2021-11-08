<template>
  <div class="count">
    <h3>当前求和为：{{ sum }}</h3>
    <h3>当前求的和扩大十倍：{{ bigSum }}</h3>
    <h3>我在{{ address }}吃{{ food }}</h3>
    <!-- 拿到option的value -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
// 使用mapState映射computed属性会被vuex工具发现并展示出来veux bindings
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 手写computed，这些也是函数嗷，这里是在对象中简写的方式
    /* sum(){
      return this.$store.state.sum;
    },
    address(){
      return this.$store.state.address;
    },
    food(){
      return this.$store.state.food;
    } 
    bigSum(){
      return this.$store.getters.bigSum
    }
    
    */

    /* 对象写法
      展开mapState生成的对象。其实生成的都是函数，如he是函数名。
      he去state中找sum，这里的value为什么是字符串？因为如果不是字符串就要去找了，这里没有sum值啊就会报错
    ...mapState({ he: "sum", difang: "address", shiwu: "food" }),
    */


   /* 
      数组写法 
      一个sum两种用途，一是生成的计算属性叫sum，二是去state中找sum
    */
    ...mapState(['sum','address','food']),

    // mapGetters同样有对象写法和数组写法
    ...mapGetters(['bigSum'])
  },
  methods: {

    /* // 手写方法调用commit联系mutation
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */


    /* 
    手写的方法与生成的方法对比
      increment() {
        this.$store.commit("JIA", this.n);
      },
      他生成的方法需要传入一个参数，这个参数如果我们不给他传，他就自动传了event。
      所以如果想自己传参数，就在上面绑定事件的地方传，mapMutations里面不支持
      increment(value){
        this.$store.commit("JIA",value)
      }
    */



    // 对象写法。原理与mapState类似
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // 数组写法
    // ...mapMutations(['JIA','JIAN']),
    










    // 手写方法调用dispatch联系actions
    // 为什么这里只触发动作？难道在这里不能判断？能，现在也就逻辑简单点觉得没必要，等以后业务逻辑复杂时，这里就不能复用了。
    // 只告诉他要开始处理了,然后他在actions里面再自己仔细处理。
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */

    // 自动生成包含调用dispatch的方法。因为是和actions联系的，所以叫mapActions
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
  mounted() {
    // he去state中找sum，这里的value为什么是字符串？因为如果不是字符串就要去找了，这里没有sum值啊就会报错
    // 这里的x是一个对象，一个映射的对象
    const x = mapState(['sum','address','food']);
    console.log(x);
  },
};
</script>

<style>
</style>