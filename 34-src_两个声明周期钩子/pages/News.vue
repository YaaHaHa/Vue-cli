<template>
  <ul>
    <li :style="{ opacity }">欢迎学习！！</li>
    <li>news001</li>
    <input type="text" />
    <li>news002</li>
    <input type="text" />
    <li>news003</li>
    <input type="text" />
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  activated() {
    console.log("News组件被激活了!!");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>