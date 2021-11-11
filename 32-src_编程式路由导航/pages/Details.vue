<template>
  <div class="details">
    <!-- 路由传给Details组件的query参数这样拿 -->
    <h2>id：{{id}}</h2>
    <h2>title：{{title}}</h2>
  </div>
</template>

<script>
export default {
    name:'Details',
    mounted(){
      console.log('Details组件出现了');
    },
    beforeDestroy() {
      console.log('Details组件将要被销毁');
    },
    props:['id','title']
}
</script>

<style>
.details{
  background-color: rgb(201, 201, 201);
}
</style>