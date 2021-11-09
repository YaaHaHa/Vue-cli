<template>
  <div class="count">
    <h2>Person组件中的人数为：{{list.length}}</h2>
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
    /* 对象写法
      展开mapState生成的对象。其实生成的都是函数，如he是函数名。
      he去state中找sum，这里的value为什么是字符串？因为如果不是字符串就要去找了，这里没有sum值啊就会报错
    ...mapState({ he: "sum", difang: "address", shiwu: "food" }),
    */

   /* 
      数组写法 
      一个sum两种用途，一是生成的计算属性叫sum，二是去state中找sum
    */
    ...mapState('countAbout',['sum','address','food']),
    // 拿personAbout的state
    ...mapState('personAbout',['list']),

    // mapGetters同样有对象写法和数组写法
    ...mapGetters('countAbout',['bigSum'])
  },


  methods: {
    // 对象写法。原理与mapState类似
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

    // 数组写法
    // ...mapMutations(['JIA','JIAN']),
  

    // 自动生成包含调用dispatch的方法。因为是和actions联系的，所以叫mapActions
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
};
</script>

<style>
</style>