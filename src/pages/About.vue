<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <h2>我是About的内容</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  // 组件内路由守卫   不同于写在路由中的，这是写在组件中的
  beforeEnter: (to, from, next) => {
    console.log('组件内路由守卫');
  }
};
</script>

<style>
</style>