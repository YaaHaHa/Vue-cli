<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <h2>我是Home的内容</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted(){
    console.log('Home挂载后的route',this.$route);
  },
  beforeDestroy() {
    console.log('Home要被销毁了');
  },
};
</script>

<style>
</style>