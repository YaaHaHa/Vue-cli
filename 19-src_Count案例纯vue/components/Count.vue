<template>
  <div class="count">
    <h3>当前求和为：{{ current }}</h3>
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
      current: 0,
    };
  },
  methods: {
    increment() {
      this.current += this.n;
    },
    decrement() {
        this.current -= this.n;
    },
    incrementOdd() {
        if(this.current %2 ==0){
            this.current += this.n;
        }
    },
    incrementWait() {
        setTimeout(()=>{
          this.current += this.n;
        },500)
    },
  },
};
</script>

<style>
</style>