<template>
  <div class="count">
    <h3>当前求和为：{{ $store.state.sum }}</h3>
    <!-- 拿到option的value -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit('JIA',this.n);
    },
    decrement() {
      this.$store.commit('JIAN',this.n);
    },
      // 为什么这里只触发动作？难道在这里不能判断？能，现在也就逻辑简单点觉得没必要，等以后业务逻辑复杂时，这里就不能复用了。
      // 只告诉他要开始处理了,然后他在actions里面再自己仔细处理。
    incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n);
    },
    incrementWait() {
        /* setTimeout(()=>{
          this.current += this.n;
        },500) */
        this.$store.dispatch('jiaWait',this.n);
    },
  },
};
</script>

<style>
</style>